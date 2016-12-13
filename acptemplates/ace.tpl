{if !$aceLoaded|isset}
	<script data-relocate="true" src="{@$__wcf->getPath()}js/3rdParty/ace/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
{/if}
{event name='javascriptIncludes'}

<textarea id="{$aceSelector}Textarea" rows="20" cols="40" name="{$aceSelector}" style="display: none;"></textarea>

{if $aceMode|isset}
	<script data-relocate="true">
		$(function() {
			textarea = $('#{@$aceSelector|encodeJS}Textarea');

			var editor = ace.edit('{@$aceSelector|encodeJS}');

			editor.setTheme('ace/theme/woltlab');
			editor.getSession().setMode('ace/mode/{@$aceMode|encodeJS}');
			editor.resize();
			console.log(textarea.val());
			editor.getSession().setValue(textarea.val());

			textarea.val(editor.getSession().getValue());
			editor.getSession().on('change', function () {
				textarea.val(editor.getSession().getValue());
			});
		});
	</script>
{/if}
{event name='aceLoaded'}

{assign var='aceLoaded' value=true}
