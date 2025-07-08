---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`decodeURI()`**-Funktion dekodiert einen Uniform Resource Identifier (URI), der zuvor durch {{jsxref("encodeURI()")}} oder eine ähnliche Routine erstellt wurde.

{{InteractiveExample("JavaScript Demo: decodeURI()")}}

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

Eine neue Zeichenkette, die die unkodierte Version des angegebenen kodierten Uniform Resource Identifiers (URI) darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `encodedURI` ein `%` enthält, dem nicht zwei hexadezimale Ziffern folgen, oder wenn die Escape-Sequenz keinen gültigen UTF-8-Zeichensatz kodiert.

## Beschreibung

`decodeURI()` ist eine Funktions-Eigenschaft des globalen Objekts.

Die `decodeURI()`-Funktion dekodiert den URI, indem sie jede Escape-Sequenz in der Form `%XX` als eine UTF-8-Codeeinheit (ein Byte) behandelt. In UTF-8 gibt die Anzahl der führenden 1-Bits im ersten Byte, das 0 (für 1-Byte-{{Glossary("ASCII", "ASCII")}}-Zeichen), 2, 3 oder 4 betragen kann, die Anzahl der Bytes im Zeichen an. Durch das Lesen der ersten Escape-Sequenz kann `decodeURI()` bestimmen, wie viele weitere Escape-Sequenzen verarbeitet werden müssen. Wenn `decodeURI()` die erwartete Anzahl von Sequenzen nicht findet, oder wenn die Escape-Sequenzen keinen gültigen UTF-8-Zeichensatz kodieren, wird ein {{jsxref("URIError")}} ausgelöst.

`decodeURI()` dekodiert alle Escape-Sequenzen, aber wenn die Escape-Sequenz eines der folgenden Zeichen kodiert, bleibt die Escape-Sequenz im Ausgabestring erhalten (da sie Teil der URI-Syntax sind):

```plain
; / ? : @ & = + $ , #
```

## Beispiele

### Dekodierung einer kyrillischen URL

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### decodeURI() vs. decodeURIComponent()

`decodeURI()` geht davon aus, dass die Eingabe ein vollständiger URI ist, daher dekodiert es keine Zeichen, die Teil der URI-Syntax sind.

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
