---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{jsSidebar("Objects")}}

Die **`decodeURIComponent()`** Funktion dekodiert eine zuvor durch {{jsxref("encodeURIComponent()")}} oder eine ähnliche Routine erstellte Komponente eines Uniform Resource Identifier (URI).

{{EmbedInteractiveExample("pages/js/globalprops-decodeuricomponent.html")}}

## Syntax

```js-nolint
decodeURIComponent(encodedURI)
```

### Parameter

- `encodedURI`
  - : Eine kodierte Komponente eines Uniform Resource Identifier.

### Rückgabewert

Ein neuer String, der die dekodierte Version der gegebenen kodierten Komponente eines Uniform Resource Identifier (URI) darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `encodedURI` ein `%` enthält, dem keine zwei hexadezimalen Ziffern folgen, oder wenn die Escape-Sequenz kein gültiges UTF-8-Zeichen codiert.

## Beschreibung

`decodeURIComponent()` ist eine Funktionseigenschaft des globalen Objekts.

`decodeURIComponent()` verwendet denselben Dekodierungsalgorithmus wie in {{jsxref("decodeURI()")}} beschrieben. Es dekodiert _alle_ Escape-Sequenzen, einschließlich solcher, die nicht durch {{jsxref("encodeURIComponent")}} erstellt wurden, wie `-.!~*'()`.

## Beispiele

### Dekodierung einer kyrillischen URL-Komponente

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

### Dekodierung von Abfrageparametern aus einer URL

`decodeURIComponent()` kann nicht direkt zum Parsen von Abfrageparametern aus einer URL verwendet werden. Es benötigt ein wenig Vorbereitung.

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
