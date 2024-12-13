document.addEventListener("DOMContentLoaded", function () {
    const sipForm = document.getElementById("sipForm");

    sipForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(sipForm);
        const formObject = Object.fromEntries(formData.entries());

        fetch("/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formObject).toString(),
        })
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById("result");
                if (data.success) {
                    resultDiv.innerHTML = `<h2>Future Value: ₹${data.future_value}</h2>`;
                } else {
                    resultDiv.innerHTML = `<h2>Error: ${data.error}</h2>`;
                }
            })
            .catch(() => {
                const resultDiv = document.getElementById("result");
                resultDiv.innerHTML = `<h2>An unexpected error occurred.</h2>`;
            });
    });
});
