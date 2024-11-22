---
title: "console: count() static method"
short-title: count()
slug: Web/API/console/count_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.count()`** protokolliert die Anzahl der Aufrufe dieser speziellen `count()`-Funktion.

## Syntax

```js-nolint
console.count()
console.count(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Ein String. Wenn angegeben, gibt `count()` die Anzahl der Aufrufe mit diesem Label aus. Wenn weggelassen, verhält sich `count()`, als wäre es mit dem Label "default" aufgerufen worden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Zum Beispiel könnte der Code so aussehen:

```js
function greet(user) {
  console.count();
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet();
console.count();
```

Die Konsolenausgabe wird ungefähr so aussehen:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

Das Label wird als `default` angezeigt, weil kein explizites Label angegeben wurde.

Wenn wir die Variable `user` als `label`-Argument beim ersten Aufruf von `console.count()` übergeben und den String "alice" beim zweiten:

```js
function greet(user) {
  console.count(user);
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
console.count("alice");
```

Wird die Ausgabe so aussehen:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

Wir führen jetzt separate Zählungen basierend nur auf dem Wert von `label`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.count()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#count)
- [Node.js-Dokumentation für `console.count()`](https://nodejs.org/docs/latest/api/console.html#consolecountlabel)
- [Google Chrome-Dokumentation für `console.count()`](https://developer.chrome.com/docs/devtools/console/api/#count)
