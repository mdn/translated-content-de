---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{jsSidebar("Objects")}}

Die Funktion **`decodeURIComponent()`** dekodiert eine zuvor erstellte Komponente eines Uniform Resource Identifier (URI) durch {{jsxref("encodeURIComponent()")}} oder durch eine ähnliche Routine.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuricomponent.html")}}

## Syntax

```js-nolint
decodeURIComponent(encodedURI)
```

### Parameter

- `encodedURI`
  - : Eine kodierte Komponente eines Uniform Resource Identifier.

### Rückgabewert

Ein neuer String, der die dekodierte Version der gegebenen kodierten URI-Komponente darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `encodedURI` ein `%` enthält, dem nicht zwei hexadezimale Ziffern folgen, oder wenn die Escape-Sequenz keinen gültigen UTF-8-Charakter kodiert.

## Beschreibung

`decodeURIComponent()` ist eine Funktions-Eigenschaft des globalen Objekts.

`decodeURIComponent()` verwendet denselben Dekodierungsalgorithmus wie in {{jsxref("decodeURI()")}} beschrieben. Es dekodiert _alle_ Escape-Sequenzen, einschließlich solcher, die nicht durch {{jsxref("encodeURIComponent")}} erstellt werden, wie `-.!~*'()`.

## Beispiele

### Dekodieren einer kyrillischen URL-Komponente

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### Fehler abfangen

```js
try {
  const a = decodeURIComponent("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

### Dekodieren von Abfrageparametern aus einer URL

`decodeURIComponent()` kann nicht direkt zum Parsen von Abfrageparametern aus einer URL verwendet werden. Es erfordert ein wenig Vorbereitung.

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
