Vue.component("app-summary", {
    props: {
        name: String,
        experience: Number,
        available: Boolean
    },
    template:
        '<div><p>Name: {{ name }}<br />Experience: {{ experience }} years<br />Available? {{ available ? "Yes" : "No" }}</p></div>'
});

new Vue({
    el: "#app",
    data: {
        name: "David Hayden",
        yearsExperience: 25,
        availableForHire: true
    }
});