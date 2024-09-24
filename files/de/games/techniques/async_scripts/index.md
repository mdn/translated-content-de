---
title: Asynchrone Skripte für asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{GamesSidebar}}

Jedes mittelgroße oder große Spiel sollte [asm.js](/de/docs/Games/Tools/asm.js)-Code als Teil eines asynchronen Skriptes kompilieren, um dem Browser die größtmögliche Flexibilität bei der Optimierung des Kompilierungsprozesses zu bieten. In Gecko ermöglicht die asynchrone Kompilierung der JavaScript-Engine, das asm.js beim Laden des Spiels im Hintergrund zu kompilieren und den generierten Maschinencode zu cachen, so dass das Spiel bei späteren Ladevorgängen nicht erneut kompiliert werden muss (ab Firefox 28). Um den Unterschied zu sehen, ändern Sie `javascript.options.parallel_parsing` in `about:config`.

## Asynchronität in Aktion umsetzen

Die Bereitstellung der asynchronen Kompilierung ist einfach: Wenn Sie Ihr JavaScript schreiben, nutzen Sie einfach das `async`-Attribut, wie folgt:

```html
<script async src="file.js"></script>
```

oder, um dasselbe mittels Skript zu tun:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Skripte, die aus einem Skript erstellt werden, verwenden standardmäßig `async`.) Die standardmäßige HTML-Hülle, die Emscripten generiert, erzeugt Letzteres.

## Wann ist async nicht async?

Zwei häufige Situationen, in denen ein Skript _nicht_ asynchron ist (wie in der [HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/scripting.html)), sind:

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

Beide werden als 'Inline'-Skripte gezählt und sofort kompiliert und ausgeführt.

Was ist, wenn Ihr Code in einem JS-String ist? Anstatt `eval` oder `innerHTML` zu verwenden, die beide eine synchrone Kompilierung auslösen, sollten Sie ein Blob mit einer Objekt-URL nutzen:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

Die Einstellung von `src` anstelle von `innerHTML` ist das, was dieses Skript asynchron macht.
