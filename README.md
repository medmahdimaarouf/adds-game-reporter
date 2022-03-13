# adds-game-reporter

This is a JQuery plugin and there is no need for customization or reliance on html.

### Next Steps ( INTEGRATION / SETUP )

All you have to do is:
- Add this script file and include it at the end of your html text tags.
`<script type="text/javascript src="js/reporter.js"></script>`
- Add your own action button.
- In the onClick button event, please see this function and follow the example or put it as it is

    function report() {
        $('table').report({
            title: "Rapport de jeux Babalino",
            reports: [{
                title: "Tunisie telecome (TT)",
                filter: (row) => {
                    return String(row[2]).trim().startsWith('9');
                }
            },
            {
                title: "Ooredoo",
                filter: (row) => {
                    return String(row[2]).trim().startsWith('2');
                }
            },
            {
                title: "Orange",
                filter: (row) => {
                    return String(row[2]).trim().startsWith('5');
                }
            }
            ]
        });
    }
    
In this case you are adressing the colum number **2** as your filter table column ( column of mobile numbers )

---------------
WARNING  : Column index startes counting by **0**
WARNING  : This plugin require JQUERY ^3 .


![](https://pandao.github.io/editor.md/examples/images/4.jpg)



