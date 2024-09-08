import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar",
            position: "left",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "We value your privacy",
                    description: "We use cookies to improve your experience on our website and analyze traffic. By continuing to browse, you consent to our use of cookies.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Accept Strictly Necessary",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/policy/privacy.html\">Privacy Policy</a>\n<a href=\"policy/cookie.html\">Cookie Policy</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Cookies help us deliver our services. By using our services, you agree to our use of cookies."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the website to function properly and cannot be switched off in our systems.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "These cookies allow the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies help us understand how our website is being used or how effective our marketing campaigns are.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More Information",
                            description: "For any inquiries about our cookie policy and your choices, please contact us. <a href=\"/policy/cookie.html\">Cookie Policy</a>."
                        }
                    ]
                }
            }
        }
    }
});
