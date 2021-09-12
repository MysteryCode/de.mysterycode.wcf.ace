{if !$aceLoaded|isset}
	{js application='wcf' lib='ace/ace'}
	{assign var='aceLoaded' value=true}
	<script data-relocate="true">
		ace.config.set('basePath', '{@$__wcf->getPath()}js/3rdParty/ace/');
	</script>
{/if}
{event name='javascriptIncludes'}

{if $aceMode|isset}
	<script data-relocate="true">
		require(['Dom/Util'], function (DomUtil) {
			const elements = document.querySelectorAll('{@$aceSelector|encodeJS}');

			elements.forEach((element) => {
				DomUtil.hide(element);

				const editorContainer = document.createElement('div');
				const editorContainerId = DomUtil.identify(editorContainer);
				editorContainer.classList.add('aceInstance');
				element.parentNode.insertBefore(editorContainer, element);

				const editor = ace.edit(editorContainerId);
				editor.setTheme('ace/theme/{ACE_THEME}');
				{if $aceMode == 'php-start'}
					editor.getSession().$options['startState'] = { name: 'startState', value: 'start' }; editor.getSession().setOptions({ startState: 'php-start' });
			    		{assign var=aceMode value='php'}
				{/if}
				editor.getSession().setMode('ace/mode/{@$aceMode|encodeJS}');
				editor.setShowPrintMargin(false);
				editor.getSession().setUseSoftTabs(false);
				{if $showInvisibles|isset && $showInvisibles}editor.setShowInvisibles(true);{/if}
				editor.getSession().setValue(element.value);
				editor.getSession().on('change', () => {
					element.value = editor.getSession().getValue();
				});

				{event name='aceInit'}
			});
		});
	</script>
{/if}
{event name='aceLoaded'}
