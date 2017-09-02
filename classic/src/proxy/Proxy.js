/**
 * Is a proxy that read CSV files.
 * It is a JSON proxy but with CSV read functionality
 * That override response
 */
Ext.define('path.proxy.Proxy', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.csv',

    read: function(response) {
        var result = this.toJson(response.responseText);
        console.log(JSON.stringify(result))
        return this.callParent([ result ]);
    },

    // converts csv into json
    toJson: function (csvData) {
        var lines = ""
        var records = [];
        if (true) {
            lines = csvData.split("\n");
            var colNames = lines[0].split(";");
            console.log(colNames)
            for (var i = 1; i < lines.length; i++) {
                if (lines[i] == "") continue;
                var record = {};
                var bits = lines[i].split(";");
                for (var j = 0; j < bits.length; j++) {
                    record[colNames[j]] = bits[j];
                }
                records.push(record);
            }
        }
        return records;
    },
});