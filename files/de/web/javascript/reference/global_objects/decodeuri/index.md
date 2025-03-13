---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`decodeURI()`** Funktion decodiert eine zuvor durch {{jsxref("encodeURI()")}} oder eine ähnliche Routine erstellte Uniform Resource Identifier (URI).

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

Ein neuer String, der die nicht-kodierte Version des gegebenen kodierten Uniform Resource Identifiers (URI) darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird geworfen, wenn `encodedURI` ein `%` enthält, dem nicht zwei hexadezimale Ziffern folgen, oder wenn die Escapesequenz kein gültiges UTF-8-Zeichen kodiert.

## Beschreibung

`decodeURI()` ist eine Funktionseigenschaft des globalen Objekts.

Die `decodeURI()` Funktion decodiert die URI, indem jede Escapesequenz in der Form `%XX` als eine UTF-8-Codierungseinheit (ein Byte) behandelt wird. In UTF-8 zeigt die Anzahl der führenden 1-Bits im ersten Byte - die 0 (für 1-Byte {{Glossary("ASCII", "ASCII")}}-Zeichen), 2, 3 oder 4 sein kann - die Anzahl der Bytes im Zeichen an. Durch das Lesen der ersten Escapesequenz kann `decodeURI()` bestimmen, wie viele weitere Escapesequenzen aufgenommen werden müssen. Falls `decodeURI()` die erwartete Anzahl von Sequenzen nicht findet oder wenn die Escapesequenzen kein gültiges UTF-8-Zeichen kodieren, wird ein {{jsxref("URIError")}} ausgelöst.

`decodeURI()` decodiert alle Escapesequenzen, aber wenn die Escapesequenz eines der folgenden Zeichen kodiert, wird die Escapesequenz in der Ausgabestring beibehalten (da sie Teil der URI-Syntax sind):

```plain
; / ? : @ & = + $ , #
```

## Beispiele

### Decodieren eines kyrillischen URL

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### decodeURI() vs. decodeURIComponent()

`decodeURI()` geht davon aus, dass die Eingabe eine vollständige URI ist, deshalb decodiert es keine Zeichen, die Teil der URI-Syntax sind.

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
