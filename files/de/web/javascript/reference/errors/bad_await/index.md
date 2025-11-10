---
title: "SyntaxError: await ist nur in asynchronen Funktionen, asynchronen Generatoren und Modulen gültig"
slug: Web/JavaScript/Reference/Errors/Bad_await
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "await is only valid in async functions, async generators and modules" tritt auf, wenn ein {{jsxref("Operators/await", "await")}}-Ausdruck außerhalb von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function), [Modulen](/de/docs/Web/JavaScript/Guide/Modules) oder anderen asynchronen Kontexten verwendet wird.

## Meldung

```plain
SyntaxError: await is only valid in async functions and the top level bodies of modules (V8-based)
SyntaxError: await is only valid in async functions, async generators and modules (Firefox)
SyntaxError: Unexpected identifier (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Die Ausführung von JavaScript blockiert nie: Ein `await` kann niemals die Ausführung des Programms blockieren. Stattdessen pausiert es die Ausführung der umgebenden asynchronen Aufgabe, während andere Aufgaben weiterlaufen können. Daher kann `await` nicht in synchronen Aufgaben wie Funktionen, Generatorfunktionen oder auf der obersten Ebene von Skripten verwendet werden. Es ist nicht immer ersichtlich, ob die aktuelle Datei ein Skript oder ein Modul ist — weitere Informationen finden Sie im [Module-Leitfaden](/de/docs/Web/JavaScript/Guide/Modules#top_level_await).

## Beispiele

### Top-Level await

Sie können `await` nicht auf der obersten Ebene eines Skripts verwenden:

```html example-bad
<script>
  await fetch("https://example.com");
  // SyntaxError: await is only valid in async functions, async generators and modules
</script>
```

Stattdessen sollten Sie das Skript zu einem Modul machen:

```html example-good
<script type="module">
  await fetch("https://example.com");
</script>
```

### Asynchrone Rückrufe

Sie können `await` nicht in einem synchronen Rückruf verwenden:

```js-nolint example-bad
urls.forEach((url) => {
  await fetch(url);
  // SyntaxError: await is only valid in async functions, async generators and modules
});
```

Stattdessen sollten Sie den Rückruf asynchron machen. Weitere Erklärungen finden Sie im [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#composition).

```js example-good
Promise.all(
  urls.map(async (url) => {
    await fetch(url);
  }),
);
```

## Siehe auch

- {{jsxref("Operators/await", "await")}}
