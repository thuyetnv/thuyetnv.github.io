Vue.component("app-summary", {
    props: {
        name: String,
        experience: Number,
        available: Boolean
    },
    template:
        '<div><p>Name: {{ name }}<br />Age: {{ experience }} years<br />Available? {{ available ? "Yes" : "No" }}</p></div>'
});

new Vue({
    el: "#app",
    data: {
        name: "Thuyet Nguyen",
        yearsExperience: 23,
        availableForHire: true
    }
});