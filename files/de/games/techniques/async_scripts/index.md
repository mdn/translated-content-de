---
title: Asynchrone Skripte für asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{GamesSidebar}}

Jedes mittelgroße oder große Spiel sollte [asm.js](/de/docs/Games/Tools/asm.js)-Code als Teil eines asynchronen Skripts kompilieren, um dem Browser die maximale Flexibilität zu geben, den Kompilierungsprozess zu optimieren. In Gecko ermöglicht die asynchrone Kompilierung der JavaScript-Engine, das asm.js abseits des Hauptthreads zu kompilieren, während das Spiel geladen wird und den generierten Maschinen-Code zu cachen, sodass das Spiel bei folgenden Laden nicht erneut kompiliert werden muss (ab Firefox 28). Um den Unterschied zu sehen, schalten Sie `javascript.options.parallel_parsing` in `about:config` um.

## Asynchron in Aktion setzen

Die asynchrone Kompilierung zu erhalten, ist einfach: Wenn Sie Ihr JavaScript schreiben, verwenden Sie einfach das `async`-Attribut, so wie hier:

```html
<script async src="file.js"></script>
```

oder, um dasselbe über Skript zu tun:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Skripte, die aus Skripten erzeugt werden, sind standardmäßig `async`.) Die standardmäßige HTML-Hülle, die Emscripten generiert, produziert Letzteres.

## Wann ist async nicht async?

Zwei häufige Situationen, in denen ein Skript _nicht_ async ist (wie [vom HTML-Spezifikationsentwurf definiert](https://html.spec.whatwg.org/multipage/scripting.html)), sind:

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

Beide werden als 'Inline'-Skripte gezählt und werden sofort kompiliert und ausgeführt.

Was, wenn Ihr Code in einem JS-String ist? Anstatt `eval` oder `innerHTML` zu verwenden, die beide eine synchrone Kompilierung auslösen, sollten Sie ein Blob mit einer Objekt-URL verwenden:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

Das Setzen von `src` anstatt von `innerHTML` ist das, was dieses Skript asynchron macht.
