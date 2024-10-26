import Swal from "sweetalert2"

export function BotonSweetAlert() {

    function buttonHandler() {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }

    return (
        <>
        <button onClick={buttonHandler}>Clickeame</button>
        </>
    )
}