export default {
    head: (
        <>
            <meta name="msapplication-TileColor" content="#fff" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content="Mamoru Documentation" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@shuding_" />
            <meta property="og:title" content="Mamoru Documentation" />
            <meta property="og:description" content="Mamoru Documentation" />
            <meta name="apple-mobile-web-app-title" content="Mamoru" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap');

                :is(html[class~=dark] .dark\\:nx-bg-dark) {
                    background: #070113 !important;
                }

                body {
                    background: #070113 !important;
                    font-family: 'Inter' !important;
                }
                
                footer {
                    background: #070113 !important;
                }

                a {
                    color: #B188F7 !important;
                }

                div.nextra-nav-container > div.nextra-nav-container-blur {
                    background-color: rgba(7,1,19, 0.8) !important;
                }

                aside li a {
                    color: rgba(250, 247, 255, 0.6) !important;
                }

                aside li a:hover {
                    color: #FAF7FF !important;
                }

                aside li.active a {
                    color: #faf7ff !important;
                    background: #291c40 !important;
                }

                nav a {
                    color: #F6F1FE !important;
                }

                h1 {
                    font-style: normal !important;
                    font-weight: 900 !important;
                    font-size: 40px !important;
                    line-height: 48px !important;

                    color: #FAF7FF !important;

                    padding: 16px 8px 24px 0px !important;
                    border-bottom: 1px solid #B188F7 !important;
                }

                h2 {
                    font-style: normal !important;
                    font-weight: 900 !important;
                    font-size: 24px !important;
                    line-height: 28px !important;
                    color: #FAF7FF !important;
                    padding: 12px 8px 18px 0px !important;
                    border-bottom: 1px solid rgba(178, 136, 247, 0.6) !important;
                }

                table {
                    border-radius: 4px !important;
                }

                table th:first-child {
                    border-top-left-radius: 4px !important;
                    border-top-right-radius: 4px !important;
                }

                table tr:last-child td:first-child {
                    border-bottom-left-radius: 4px !important;
                }

                table tr:last-child td:last-child {
                    border-bottom-right-radius: 4px !important;
                }
            `}</style>
        </>
    ),
    logo: <img src="/logo.svg" />,
    docsRepositoryBase: 'https://github.com/Mamoru-Foundation/mamoru-foundation.github.io/blob/main/',
    footer: {
        text: '© Copyright Mamoru.ai 2023 - MIT'
    },
    project: {
        link: 'https://mamoru-foundation.github.io/'
    },
    chat: {
        link: 'https://discord.gg'
    },
    darkMode: false,
    nextThemes: {
        forcedTheme: 'dark'
    }
}
