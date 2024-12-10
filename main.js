function showSuccessMessage() {
    console.log("1");
  
    const popup = document.createElement('div');
    popup.innerText = 'Success';
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.padding = '10px 20px';
    popup.style.backgroundColor = 'green';
    popup.style.color = 'white';
    popup.style.borderRadius = '5px';
    popup.style.fontSize = '16px';
    popup.style.zIndex = '1000';

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup after 5 seconds
    setTimeout(() => {
        popup.remove();
    }, 1000);
}
function showFailMessage() {
    console.log("1");

    const popup = document.createElement('div');
    popup.innerText = '!Your Oreder Has Fail!';
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.padding = '10px 20px';
    popup.style.backgroundColor = 'red';
    popup.style.color = 'white';
    popup.style.borderRadius = '5px';
    popup.style.fontSize = '16px';
    popup.style.zIndex = '1000';
    popup.style.opacity = '0'; // Initially hidden for fade-in effect
    popup.style.transition = 'opacity 0.5s ease'; // Fade-in/out transition

    // Append the popup to the body
    document.body.appendChild(popup);

    // Trigger fade-in effect by changing opacity to 1
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10); // Delay to allow for the initial opacity setting

    // Remove the popup after 1 second
    setTimeout(() => {
        popup.style.opacity = '0'; // Fade out
        setTimeout(() => {
            popup.remove(); // Remove after fade-out
        }, 500); // Wait for fade-out transition to finish before removing
    }, 1000);
}

function showWarningMessage() {
    console.log("1");

    const popup = document.createElement('div');
    popup.innerText = 'Warning! Something went wrong.';
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)'; 
    popup.style.padding = '15px 30px';
    popup.style.backgroundColor = '#ff6f61'; 
    popup.style.color = '#fff';
    popup.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.borderRadius = '8px';
    popup.style.fontSize = '18px';
    popup.style.fontFamily = 'Arial, sans-serif';
    popup.style.fontWeight = 'bold';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';
    popup.style.opacity = '0'; 
    popup.style.transition = 'opacity 0.3s ease'; 

    document.body.appendChild(popup);

    // Fade in
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 50);

    // Remove after 3 seconds
    setTimeout(() => {
        popup.style.opacity = '0'; // Smooth fade-out
        setTimeout(() => popup.remove(), 300); // Wait for fade-out to complete
    }, 3000);
}
