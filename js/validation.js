$(function() {
    $("#modal_form").validate({
        rules: {
            ima_kl: {
                required: true,
            },
            telefon_lida: {
                required: true,
            },
        },
        messages: {
            ima_kl: {
                required: ""
            },
            telefon_lida: {
                required: ""
            },
        },
        errorPlacement: function (error, element) {
            return true;
        },
        errorClass: "form_input_error",
        validClass: "form_input_success",
    });
});
$(function() {
    $("#fs_form").validate({
        rules: {
            ima_kl: {
                required: true,
            },
            telefon_lida: {
                required: true,
            },
        },
        messages: {
            ima_kl: {
                required: ""
            },
            telefon_lida: {
                required: ""
            },
        },
        errorPlacement: function (error, element) {
            return true;
        },
        errorClass: "form_input_error",
        validClass: "form_input_success",
    });
});