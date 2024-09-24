---
title: "console: count() statische Methode"
short-title: count()
slug: Web/API/console/count_static
l10n:
  sourceCommit: 70e41990a80a37f95b61267defd1036f524b5731
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.count()`** statische Methode protokolliert die Anzahl der Male, die dieser spezielle Aufruf von `count()` aufgerufen wurde.

## Syntax

```js-nolint
count()
count(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Ein String. Wenn angegeben, gibt `count()` die Anzahl der Male aus, wie oft es mit diesem Label aufgerufen wurde. Wenn es weggelassen wird, verhält sich `count()`, als ob es mit dem Label "default" aufgerufen wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Zum Beispiel, bei folgendem Code:

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

Das Label wird als `default` angezeigt, da kein explizites Label angegeben wurde.

Wenn wir die Variable `user` als das `label` Argument an den ersten Aufruf von `console.count()` übergeben und die Zeichenkette "alice" an den zweiten:

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

Wir werden eine Ausgabe wie diese sehen:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

Wir behalten nun separate Zählungen basierend nur auf dem Wert von `label` bei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.count()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#count)
- [Node.JS Dokumentation für `console.count()`](https://nodejs.org/docs/latest/api/console.html#consolecountlabel)
- [Google Chromes Dokumentation für `console.count()`](https://developer.chrome.com/docs/devtools/console/api/#count)
