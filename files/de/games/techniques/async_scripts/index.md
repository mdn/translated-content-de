---
title: Async-Skripte für asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{GamesSidebar}}

Jedes mittelgroße oder große Spiel sollte [asm.js](/de/docs/Games/Tools/asm.js)-Code als Teil eines Async-Skripts kompilieren, um dem Browser die größtmögliche Flexibilität zu geben, den Kompilierungsprozess zu optimieren. In Gecko ermöglicht die asynchrone Kompilierung der JavaScript-Engine, das asm.js außerhalb des Hauptthreads zu kompilieren, während das Spiel geladen wird, und den generierten Maschinencode zu cachen, sodass das Spiel bei nachfolgenden Ladezyklen nicht erneut kompiliert werden muss (beginnend mit Firefox 28). Um den Unterschied zu sehen, setzen Sie `javascript.options.parallel_parsing` in `about:config` um.

## Async in Aktion setzen

Async-Kompilierung zu bekommen ist einfach: Verwenden Sie beim Schreiben Ihres JavaScripts einfach das `async`-Attribut wie folgt:

```html
<script async src="file.js"></script>
```

oder um dasselbe per Skript zu tun:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Skripte, die über Skript erzeugt werden, sind standardmäßig `async`.) Die von Emscripten generierte Standard-HTML-Shell erzeugt Letzteres.

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

Beide werden als 'inline'-Skripte gezählt und sofort kompiliert und ausgeführt.

Was tun, wenn Ihr Code sich in einem JS-String befindet? Anstatt `eval` oder `innerHTML` zu verwenden, die beide eine synchrone Kompilierung auslösen, sollten Sie ein Blob mit einer Objekt-URL verwenden:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

Das Setzen von `src` anstelle von `innerHTML` macht dieses Skript async.
