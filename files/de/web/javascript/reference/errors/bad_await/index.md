---
title: "SyntaxError: await is only valid in async functions, async generators and modules"
slug: Web/JavaScript/Reference/Errors/Bad_await
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Die JavaScript-Ausnahme „await is only valid in async functions, async generators and modules“ tritt auf, wenn ein {{jsxref("Operators/await", "await")}}-Ausdruck außerhalb von [async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function), [Modulen](/de/docs/Web/JavaScript/Guide/Modules) oder anderen async-Kontexten verwendet wird.

## Meldung

```plain
SyntaxError: await is only valid in async functions and the top level bodies of modules (V8-based)
SyntaxError: await is only valid in async functions, async generators and modules (Firefox)
SyntaxError: Unexpected identifier (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Die Ausführung von JavaScript ist niemals blockierend: `await` kann die Ausführung des Programms nicht blockieren. Stattdessen pausiert es die Ausführung der umgebenden async-Aufgabe, während andere Aufgaben weiterlaufen können. Daher kann `await` nicht in synchronen Aufgaben verwendet werden, etwa in Funktionen, Generatorfunktionen oder auf der obersten Ebene von Skripten. Ob die aktuelle Datei ein Skript oder ein Modul ist, ist nicht immer offensichtlich. Weitere Informationen finden Sie im [Leitfaden zu Modulen](/de/docs/Web/JavaScript/Guide/Modules#top-level_await).

## Beispiele

### Top-Level-`await`

Auf der obersten Ebene eines Skripts können Sie `await` nicht verwenden:

```html example-bad
<script>
  await fetch("https://example.com");
  // SyntaxError: await is only valid in async functions, async generators and modules
</script>
```

Machen Sie das Skript stattdessen zu einem Modul:

```html example-good
<script type="module">
  await fetch("https://example.com");
</script>
```

### Async-Callbacks

In einem synchronen Callback können Sie `await` nicht verwenden:

```js-nolint example-bad
urls.forEach((url) => {
  await fetch(url);
  // SyntaxError: await is only valid in async functions, async generators and modules
});
```

Machen Sie den Callback stattdessen async. Weitere Erläuterungen finden Sie im [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#composition).

```js example-good
Promise.all(
  urls.map(async (url) => {
    await fetch(url);
  }),
);
```

## Siehe auch

- {{jsxref("Operators/await", "await")}}
