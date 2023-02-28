const path = require('path') // модуль нодjs

module.exports = {
    devtool: 'source-map', // метод, чтобы проще проходил процесс дебагинга, когда это понадобится
    mode: 'development',
    watch: true,     // вебпак автоматически следит за изменением в коде и каждый раз автоматически создает новый бандел, не надо в cmd писать npm run build 
                    // после добавления в код надо разок все же написать в cmd, шоб завелось
    entry: {  // точка входа для вебпака
        filename: './guestpage.js',
    },
    output: { // файл на выходе вебпака после того, как он провел свою сборку
        filename: 'guestpage-bundle.js',
        // filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'), // __dirname это от текущей директории, сист переменная ноды
        clean: true,
    },
    module: {
        rules: [
            {
                test:/\.js$/,               // реджекс, через babel будем прогонять все файлы, которые оканчиваются на js
                exclude: /node_modules/,    // из процесса исключается папка нод модульс
                use: {
                    loader: 'babel-loader', // сам лоадер
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            }, 
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

// в package.json в скриптах надо прописать "dev" для режима разработки ...
// и "build", который будет использоваться на продакшене, минимизируя и оптимизируя весь js, который будет подстегиваться к index.html
