---
title: Async-Skripte für asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Jedes mittelgroße oder große Spiel sollte [asm.js](/de/docs/Games/Tools/asm.js)-Code als Teil eines asynchronen Skripts kompilieren, um dem Browser die maximale Flexibilität zur Optimierung des Kompilierungsprozesses zu geben. In Gecko ermöglicht die asynchrone Kompilierung der JavaScript-Engine, das asm.js vom Hauptthread getrennt zu kompilieren, während das Spiel geladen wird, und den generierten Maschinencode zu cachen, sodass das Spiel bei nachfolgenden Ladevorgängen nicht erneut kompiliert werden muss (beginnend mit Firefox 28). Um den Unterschied zu sehen, ändern Sie `javascript.options.parallel_parsing` in `about:config`.

## Async in die Praxis umsetzen

Die Nutzung der asynchronen Kompilierung ist einfach: Verwenden Sie beim Schreiben Ihres JavaScripts einfach das `async`-Attribut, so:

```html
<script async src="file.js"></script>
```

oder, um dasselbe über ein Skript zu erreichen:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Skripte, die aus einem Skript erstellt werden, verwenden standardmäßig `async`.) Das standardmäßige HTML-Shell, das Emscripten erzeugt, produziert Letzteres.

## Wann ist async nicht async?

Zwei häufige Situationen, in denen ein Skript _nicht_ asynchron ist (wie [im HTML-Standard definiert](https://html.spec.whatwg.org/multipage/scripting.html)), sind:

```html
<script async>
  // Inline JavaScript code
</script>
```

und

```js
const script = document.createElement("script");
script.textContent = "// Inline JavaScript code";
document.body.appendChild(script);
```

Beide werden als 'Inline'-Skripte betrachtet und sofort kompiliert und ausgeführt.

Was ist, wenn Ihr Code in einem JS-String ist? Anstatt `eval` oder `innerHTML` zu verwenden, die beide eine synchrone Kompilierung auslösen, sollten Sie einen Blob mit einer Objekt-URL verwenden:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

Das Setzen von `src` anstelle von `innerHTML` macht dieses Skript asynchron.
