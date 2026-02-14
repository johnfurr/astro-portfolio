// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://john-furr.com/';

export const siteConfig = {
	title: "John Furr Portfolio Site 2026",
	author: "John Furr",
	url: SITE_URL,
	mail: "furrm.john@gmail.com",
	// resume add your resume file path here: /assets/resume.pdf
	resume: "/assets/resume.pdf",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: "John Furr",
		description: "I'm John, a web developer and designer",
		keywords: "web developer, web designer, portfolio, design, code, personal website",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "ricouii",
	},
	// social links
	social:{
		linkedin: "https://www.linkedin.com/in/johnfurr/",
	},
};


