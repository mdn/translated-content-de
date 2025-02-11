---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die Funktion **`decodeURIComponent()`** dekodiert eine zuvor durch {{jsxref("encodeURIComponent()")}} oder eine ähnliche Routine erstellte Komponente eines Uniform Resource Identifier (URI).

{{InteractiveExample("JavaScript Demo: Standard built-in objects - decodeURIComponent()")}}

```js interactive-example
function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

console.log(containsEncodedComponents("%3Fx%3Dtest")); // ?x=test
// Expected output: true

console.log(containsEncodedComponents("%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")); // шеллы
// Expected output: false
```

## Syntax

```js-nolint
decodeURIComponent(encodedURI)
```

### Parameter

- `encodedURI`
  - : Eine kodierte Komponente eines Uniform Resource Identifier.

### Rückgabewert

Ein neuer String, der die dekodierte Version der angegebenen kodierten URI-Komponente darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `encodedURI` ein `%` enthält, das nicht von zwei hexadezimalen Ziffern gefolgt wird, oder wenn die Escape-Sequenz kein gültiges UTF-8-Zeichen kodiert.

## Beschreibung

`decodeURIComponent()` ist eine Funktions-Eigenschaft des globalen Objekts.

`decodeURIComponent()` verwendet denselben Dekodierungsalgorithmus wie in {{jsxref("decodeURI()")}} beschrieben. Es dekodiert _alle_ Escape-Sequenzen, einschließlich solcher, die nicht durch {{jsxref("encodeURIComponent")}} erstellt wurden, wie `-.!~*'()`.

## Beispiele

### Dekodierung einer kyrillischen URL-Komponente

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### Abfangen von Fehlern

```js
try {
  const a = decodeURIComponent("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

### Dekodierung von Abfrageparametern aus einer URL

`decodeURIComponent()` kann nicht direkt verwendet werden, um Abfrageparameter aus einer URL zu parsen. Es ist etwas Vorbereitung erforderlich.

```js
function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, " "));
}

decodeQueryParam("search+query%20%28correct%29");
// 'search query (correct)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
