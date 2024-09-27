---
title: Asynchrone Skripte für asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{GamesSidebar}}

Jedes mittelgroße oder große Spiel sollte `asm.js`-Code als Teil eines asynchronen Skripts kompilieren, um dem Browser die maximale Flexibilität zu geben, den Kompilierungsprozess zu optimieren. In Gecko ermöglicht die asynchrone Kompilierung der JavaScript-Engine, das `asm.js` außerhalb des Haupt-Threads zu kompilieren, wenn das Spiel geladen wird, und den erzeugten Maschinencode zu cachen, sodass das Spiel bei nachfolgenden Ladungen nicht neu kompiliert werden muss (beginnend mit Firefox 28). Um den Unterschied zu sehen, ändern Sie `javascript.options.parallel_parsing` in `about:config`.

## Asynchronität in die Praxis umsetzen

Asynchrone Kompilierung zu erhalten ist einfach: Wenn Sie Ihr JavaScript schreiben, nutzen Sie einfach das `async`-Attribut so:

```html
<script async src="file.js"></script>
```

oder um dasselbe per Script zu tun:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Skripte, die über Script erstellt werden, sind standardmäßig `async`.) Die Standardeinstellungs-HTML-Vorlage, die Emscripten generiert, erzeugt das Letztere.

## Wann ist async nicht async?

Zwei häufige Situationen, in denen ein Skript _nicht_ async ist (wie [im HTML-Standard definiert](https://html.spec.whatwg.org/multipage/scripting.html)), sind:

```html
<script async>
  code();
</script>
```

und

```js
const script = document.createElement("script");
script.textContent = "code()";
document.body.appendChild(script);
```

Beide werden als 'inline' Skripte gezählt und werden sofort kompiliert und ausgeführt.

Was ist, wenn Ihr Code in einem JS-String ist? Anstatt `eval` oder `innerHTML` zu verwenden, die beide eine synchrone Kompilierung auslösen, sollten Sie einen Blob mit einer Objekt-URL verwenden:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

Die Verwendung von `src` anstelle von `innerHTML` macht dieses Skript asynchron.
