---
title: "URLSearchParams: values() Methode"
short-title: values()
slug: Web/API/URLSearchParams/values
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`values()`** Methode des {{domxref("URLsearchParams")}} Interfaces gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der die Iteration durch alle in diesem Objekt enthaltenen Werte ermöglicht. Die Werte sind Strings.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück.

## Beispiele

Das folgende Beispiel übergibt eine URL-Suchzeichenfolge an den `URLSearchParams`-Konstruktor und verwendet dann den von `values()` zurückgegebenen Iterator, um die Werte in der Konsole auszugeben.

```js
const searchParams = new URLSearchParams("key1=value1&key2=value2");

for (const value of searchParams.values()) {
  console.log(value);
}
```

Das Ergebnis ist:

```plain
value1
value2
```

Dieses Beispiel macht im Wesentlichen dasselbe wie oben, jedoch wird der Iterator zuerst in ein Array umgewandelt.

```js
const searchParams = new URLSearchParams("key1=value1&key2=value2");

console.log(Array.from(searchParams.values()));
```

Das Ergebnis ist:

```plain
['value1', 'value2']
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}} Schnittstelle.
