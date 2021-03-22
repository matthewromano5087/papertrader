const app = {
    linechat: null,
}

$(document).ready(function() {
    setupBrokerSearch()
    hideAll()
    $('#page-login').show()

    $('#button-login').on('click', e => {
        hideAll()
        $('#page-main').show()
    })

    $('#table-stock').DataTable({
        select: true
    })
    const chart = LightweightCharts.createChart(document.getElementById("chart"), { width: 600, height: 400 })
    app.linechat = chart.addLineSeries()
})

function showTicker(ticker) {
    $("#label-ticker-name").text(ticker)
    $.getJSON('/history?ticker=' + ticker, data => {
        data = data.map(item => { return { time: item[0], value: item[1] } })
        app.linechat.setData(data)
    })
}

function setupBrokerSearch() {
    const field = document.getElementById('input-broker-search')
    const ac = new Autocomplete(field, {
        data: [{label: "I'm a label", value: 42}],
        maximumItems: 5,
        treshold: 1,
        onSelectItem: ({label, value}) => {
            showTicker(value)
        }
    })
    $.getJSON('/tickers', tickers => {
        data = tickers.map(ticker => { return { label: ticker, value: ticker } })
        ac.setData(data)
    })
}

function hideAll() {
    $('#page-login').hide()
    $('#page-register').hide()
    $('#page-main').hide()
}
