---
title: "URLSearchParams: values()-Methode"
short-title: values()
slug: Web/API/URLSearchParams/values
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`values()`**-Methode der Schnittstelle [`URLSearchParams`](/de/docs/Web/API/URLsearchParams) gibt einen {{jsxref("Iteration_protocols",'Iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Werte zu durchlaufen. Die Werte sind Zeichenketten.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück.

## Beispiele

Im folgenden Beispiel wird ein URL-Suchstring an den `URLSearchParams`-Konstruktor übergeben und dann der Iterator, der von `values()` zurückgegeben wird, verwendet, um die Werte in der Konsole auszugeben.

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

Dieses Beispiel macht im Wesentlichen dasselbe wie oben, wandelt jedoch zunächst den Iterator in ein Array um.

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

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle.
