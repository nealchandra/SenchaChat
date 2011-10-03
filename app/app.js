new Ext.Application({
    launch: function() {
        new Ext.Panel({
            fullscreen: true,
            dockedItems: [{xtype:'toolbar', title:'My First App'}],
            layout: 'fit',
            styleHtmlContent: true,
            html: '<div id="msg"></div>
<input type="text" id="text-input" />
<input type="button" id="send-button" value="Send Message" />'
        });
    }
});