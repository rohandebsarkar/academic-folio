module.exports = {    
    plugins: [   
        require('postcss-import')({
            path: ['.']
            }), 
        require('tailwindcss')('tailwind.config.js'),
        require('autoprefixer')({
            path: ['.']
        }),
    ]
}
