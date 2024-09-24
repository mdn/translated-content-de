---
title: "SyntaxError: await ist nur in asynchronen Funktionen, asynchronen Generatoren und Modulen gültig"
slug: Web/JavaScript/Reference/Errors/Bad_await
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "await ist nur in asynchronen Funktionen, asynchronen Generatoren und Modulen gültig" tritt auf, wenn ein {{jsxref("Operators/await", "await")}}-Ausdruck außerhalb von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [Modulen](/de/docs/Web/JavaScript/Guide/Modules) oder anderen asynchronen Kontexten verwendet wird.

## Nachricht

```plain
SyntaxError: await is only valid in async functions and the top level bodies of modules (V8-based)
SyntaxError: await is only valid in async functions, async generators and modules (Firefox)
SyntaxError: Unexpected identifier (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Die Ausführung von JavaScript blockiert niemals: ein `await` kann die Ausführung des Programms niemals blockieren. Stattdessen pausiert es die Ausführung der umgebenden asynchronen Aufgabe, während andere Aufgaben weiterhin laufen können. Daher kann `await` nicht in synchronen Aufgaben verwendet werden, wie Funktionen, Generatorfunktionen oder auf oberster Ebene von Skripten. Es ist nicht immer offensichtlich, ob die aktuelle Datei ein Skript oder ein Modul ist — siehe den [Module-Leitfaden](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) für mehr Informationen.

## Beispiele

### Top-level await

Sie können `await` nicht auf oberster Ebene eines Skripts verwenden:

```html example-bad
<script>
  await fetch("https://example.com");
  // SyntaxError: await is only valid in async functions, async generators and modules
</script>
```

Machen Sie stattdessen das Skript zu einem Modul:

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

Machen Sie stattdessen den Rückruf asynchron. Weitere Erklärungen finden Sie im [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#composition).

```js example-good
Promise.all(
  urls.map(async (url) => {
    await fetch(url);
  }),
);
```

## Siehe auch

- {{jsxref("Operators/await", "await")}}
