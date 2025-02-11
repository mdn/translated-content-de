---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die Funktion **`decodeURI()`** decodiert einen zuvor durch {{jsxref("encodeURI()")}} oder eine ähnliche Routine erstellten Uniform Resource Identifier (URI).

{{InteractiveExample("JavaScript Demo: Standard built-in objects - decodeURI()")}}

```js interactive-example
const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // Catches a malformed URI
  console.error(e);
}
```

## Syntax

```js-nolint
decodeURI(encodedURI)
```

### Parameter

- `encodedURI`
  - : Ein vollständiger, kodierter Uniform Resource Identifier.

### Rückgabewert

Ein neuer String, der die dekodierte Version des angegebenen kodierten Uniform Resource Identifier (URI) darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `encodedURI` ein `%` enthält, dem nicht zwei hexadezimale Ziffern folgen, oder wenn die Escape-Sequenz keinen gültigen UTF-8-Charakter kodiert.

## Beschreibung

`decodeURI()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `decodeURI()` decodiert den URI, indem jede Escape-Sequenz in der Form `%XX` als eine UTF-8-Code-Einheit (ein Byte) behandelt wird. In UTF-8 gibt die Anzahl der führenden 1-Bits im ersten Byte – die 0 (für ein Byte {{Glossary("ASCII", "ASCII")}}-Zeichen), 2, 3 oder 4 sein kann – die Anzahl der Bytes im Zeichen an. Durch das Lesen der ersten Escape-Sequenz kann `decodeURI()` bestimmen, wie viele weitere Escape-Sequenzen verarbeitet werden müssen. Wenn `decodeURI()` nicht die erwartete Anzahl an Sequenzen findet oder wenn die Escape-Sequenzen keinen gültigen UTF-8-Charakter kodieren, wird ein {{jsxref("URIError")}} ausgelöst.

`decodeURI()` dekodiert alle Escape-Sequenzen, aber wenn die Escape-Sequenz eines der folgenden Zeichen kodiert, bleibt die Escape-Sequenz im Ausgabestring erhalten (da sie Teil der URI-Syntax sind):

```plain
; / ? : @ & = + $ , #
```

## Beispiele

### Dekodierung eines kyrillischen URLs

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### decodeURI() vs. decodeURIComponent()

`decodeURI()` nimmt an, dass die Eingabe ein vollständiger URI ist, und dekodiert daher keine Zeichen, die Teil der URI-Syntax sind.

```js
decodeURI(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript%3A a_scripting_language"

decodeURIComponent(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript: a_scripting_language"
```

### Fehler abfangen

```js
try {
  const a = decodeURI("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
