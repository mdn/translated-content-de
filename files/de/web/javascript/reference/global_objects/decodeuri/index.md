---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Objects")}}

Die **`decodeURI()`**-Funktion dekodiert einen Uniform Resource Identifier (URI), der zuvor durch {{jsxref("encodeURI()")}} oder eine ähnliche Routine erstellt wurde.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## Syntax

```js-nolint
decodeURI(encodedURI)
```

### Parameter

- `encodedURI`
  - : Ein vollständiger, kodierter Uniform Resource Identifier.

### Rückgabewert

Ein neuer String, der die dekodierte Version des gegebenen kodierten Uniform Resource Identifier (URI) darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `encodedURI` ein `%` enthält, dem nicht zwei hexadezimale Ziffern folgen, oder wenn die Escape-Sequenz keinen gültigen UTF-8-Charakter kodiert.

## Beschreibung

`decodeURI()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `decodeURI()` dekodiert den URI, indem sie jede Escape-Sequenz in der Form `%XX` als eine UTF-8 Code-Unit (ein Byte) behandelt. In UTF-8 zeigt die Anzahl der führenden 1-Bits im ersten Byte (die 0 für ein Byte bei {{Glossary("ASCII")}} Zeichen, 2, 3 oder 4 sein können) die Anzahl der Bytes im Charakter an. Durch das Lesen der ersten Escape-Sequenz kann `decodeURI()` bestimmen, wie viele weitere Escape-Sequenzen es konsumieren muss. Wenn `decodeURI()` nicht die erwartete Anzahl an Sequenzen findet, oder wenn die Escape-Sequenzen keinen gültigen UTF-8-Charakter kodieren, wird ein {{jsxref("URIError")}} ausgelöst.

`decodeURI()` dekodiert alle Escape-Sequenzen, aber wenn die Escape-Sequenz einen der folgenden Zeichen kodiert, bleibt die Escape-Sequenz im Ausgabestring erhalten (da sie Teil der URI-Syntax sind):

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

`decodeURI()` geht davon aus, dass die Eingabe ein vollständiger URI ist, daher werden Zeichen, die Teil der URI-Syntax sind, nicht dekodiert.

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
