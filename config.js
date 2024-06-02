tailwind.config = {
    theme: {
        extend: {
            colors: {
                strong_cyan: 'hsl(171, 66%, 44%)',
                strong_cyan_dark: '#309681',
                light_blue: 'hsl(233, 100%, 69%)',
                light_blue_dark: '#4F62DA',
                dark_grayish_blue: 'hsl(210, 10%, 33%)',
                grayish_blue: 'hsl(201, 11%, 66%)'
            },
            fontFamily: {
                sans: ["'Bai Jamjuree'", "sans-serif"]
            },
            backgroundImage: {
                'hero_mobile': "url('images/bg-header-mobile.png')",
                'hero_desktop': "url('images/bg-header-desktop.png')"
            }
        }
    }
}