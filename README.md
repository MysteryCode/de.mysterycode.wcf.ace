de.mysterycode.wcf.ace || ACE-Editor
====================================
Implementation of the code editor [ACE](https://github.com/ajaxorg/ace).

API
---
In order to include the ACE editor use:

`{include file='ace' aceMode='language' aceSelector='id of your textarea'}`

If you want to view invisible characters you can add `$showInvisibles=true`:

`{include file='ace' aceMode='language' aceSelector='id of your textarea' $showInvisibles=true}`


**Example:**
```
<section class="section marginTop">
    <legend>An awesome section-title</legend>
    
    <dl class="wide">
        <dt>Your message in here:</dt>
        <dd>
            <textarea id="scss" name="scss">/* some SCSS seclarations */</textarea>
            {include file='ace' aceMode='scss' aceSelector='scss'}
        </dd>
    </dl>
</section>
```

Basic Support
-------------
If you have trouble including the ACE editor or questions feel free to ask me: [Forum](https://support.mysterycode.de/board/9-sonstige-wcf-plugins/)

If you got questions about ACE itself, please visit their [GitHub Repository](https://github.com/ajaxorg/ace).

License
-------
ACE is licensed under [BSD License]()