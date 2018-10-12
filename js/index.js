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
        availableForHire: true,
        users: [],
    },
    mounted() {
        this.getUserMockAPI();
    },
    methods: {
        function getUserMockAPI() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     this.users = this.responseText;
                 }
            };
            xhttp.open("GET", "https://5bc059a159c0e1001337f299.mockapi.io/api/v1/test", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
        }
    }
});
