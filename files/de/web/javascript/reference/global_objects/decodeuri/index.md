---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Objects")}}

Die **`decodeURI()`**-Funktion dekodiert einen zuvor durch {{jsxref("encodeURI()")}} oder ein ähnliches Verfahren erstellten Uniform Resource Identifier (URI).

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

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
  - : Wird ausgelöst, wenn `encodedURI` ein `%` enthält, dem keine zwei hexadezimalen Ziffern folgen, oder wenn die Escape-Sequenz kein gültiges UTF-8-Zeichen kodiert.

## Beschreibung

`decodeURI()` ist eine Funktions-Eigenschaft des globalen Objekts.

Die `decodeURI()`-Funktion dekodiert den URI, indem sie jede Escape-Sequenz in der Form `%XX` als eine UTF-8-Codeeinheit (ein Byte) behandelt. In UTF-8 zeigt die Anzahl führender 1-Bits im ersten Byte, die 0 (für 1-Byte-[ASCII](/de/docs/Glossary/ASCII)-Zeichen), 2, 3 oder 4 sein kann, die Anzahl der Bytes im Zeichen an. Durch das Lesen der ersten Escape-Sequenz kann `decodeURI()` bestimmen, wie viele weitere Escape-Sequenzen konsumiert werden müssen. Wenn `decodeURI()` die erwartete Anzahl von Sequenzen nicht finden kann oder wenn die Escape-Sequenzen kein gültiges UTF-8-Zeichen kodieren, wird ein {{jsxref("URIError")}} ausgelöst.

`decodeURI()` dekodiert alle Escape-Sequenzen, aber wenn die Escape-Sequenz eines der folgenden Zeichen kodiert, bleibt die Escape-Sequenz im Ausgabestring erhalten (da sie Teil der URI-Syntax sind):

```plain
; / ? : @ & = + $ , #
```

## Beispiele

### Dekodieren einer kyrillischen URL

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### decodeURI() vs. decodeURIComponent()

`decodeURI()` nimmt an, dass die Eingabe ein vollständiger URI ist, daher dekodiert es keine Zeichen, die Teil der URI-Syntax sind.

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
