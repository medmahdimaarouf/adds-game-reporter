(function ($) {
    $.fn.report = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            title: "Untitled report",
            reports: []
        }, options);

        const header = Array.from($(this).find('thead tr th'), th => $(th).text());
        const rows = Array.from($(this).find('tbody tr'), tr => Array.from($(tr).find('td'), td => $(td).text()))
        let data = { header: header, rows: rows }

        const raport = { title: settings.title, sections: Array.from(settings.reports, report => ({ title: report.title, rows: data.rows.filter(row => report.filter(row)) })) };

        let html = $(
            `<div class="report" id="report" style="width:100%;visibility:hidden">
            <h1 style="text-align:center">${raport.title}</h1>
                ${Array.from(raport.sections, (section, index) =>
                `   <h3>${index + 1} ) -  ${section.title}</h3>
                    <table class="section-table" style="width:100%;border:1px sold black">
                        <thead>
                            <tr style="border:1px sold black">
                            ${Array.from(data.header, thtxt => `
                                 <th>${thtxt}</th>`).join('\n')}
                            </tr>
                        </thead>
                        <tbody>
                                ${Array.from(section.rows, row => `
                                    <tr style="border:1px sold black">
                                    ${Array.from(row, cell => `
                                        <td style="border:1px sold black">${cell}</td>
                                        `).join('\n')}
                                    </tr>                                
                                `).join('\n')}
                        </tbody>
                    </table>
                `).join('\n')}
            </div>`
        );
        $('body').append(html)
        $('#report').css('visibility', 'visible').print().css('visibility', 'hidden');
        return this;

    };
})(jQuery);