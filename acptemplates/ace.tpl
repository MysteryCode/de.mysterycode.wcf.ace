{if !$aceLoaded|isset}
	<script data-relocate="true" src="{@$__wcf->getPath()}js/3rdParty/ace/ace.js" type="text/javascript" charset="utf-8"></script>
{/if}
{event name='javascriptIncludes'}

{if $aceMode|isset}
	<script data-relocate="true">
		$(function() {
			var textarea = $('#{@$aceSelector|encodeJS}').css('display', 'none');
			textarea.parent().prepend('<div id="ace_{$aceSelector}" class="aceInstance"></div>');
			var editor = ace.edit('ace_{@$aceSelector|encodeJS}');
			editor.setTheme('ace/theme/{ACE_THEME}');
			editor.getSession().setMode('ace/mode/{@$aceMode|encodeJS}');
			editor.setShowPrintMargin(false);
			editor.getSession().setUseSoftTabs(false);
			{if $showInvisibles|isset && $showInvisibles}editor.setShowInvisibles(true);{/if}
			editor.getSession().setValue(textarea.val());
			textarea.val(editor.getSession().getValue());
			editor.getSession().on('change', function () { textarea.val(editor.getSession().getValue()); });
			{event name='aceInit'}
		});
	</script>
{/if}
{event name='aceLoaded'}

{assign var='aceLoaded' value=true}
