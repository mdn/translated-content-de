---
title: "URIError: malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "malformed URI sequence" tritt auf, wenn die URI-Codierung oder -Decodierung nicht erfolgreich war.

## Meldung

```plain
URIError: URI malformed (V8-based)
URIError: malformed URI sequence (Firefox)
URIError: String contained an illegal UTF-16 sequence. (Safari)
```

## Fehlertyp

{{jsxref("URIError")}}

## Was ist schiefgelaufen?

Die URI-Codierung oder -Decodierung war nicht erfolgreich. Ein an die Funktionen {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}} oder {{jsxref("decodeURIComponent")}} übergebenes Argument war ungültig, sodass die Funktion nicht in der Lage war, korrekt zu codieren oder zu decodieren.

## Beispiele

### Kodierung

Die Kodierung ersetzt jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen, die die UTF-8-Kodierung des Zeichens darstellen. Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, einen Stellvertreter zu kodieren, der nicht Teil eines Hoch-Tief-Paares ist, zum Beispiel:

```js example-bad
encodeURI("\uD800");
// "URIError: malformed URI sequence"

encodeURI("\uDFFF");
// "URIError: malformed URI sequence"
```

Ein Hoch-Tief-Paar ist in Ordnung. Zum Beispiel:

```js example-good
encodeURI("\uD800\uDFFF");
// "%F0%90%8F%BF"
```

### Decodierung

Die Decodierung ersetzt jede Escape-Sequenz in der kodierten URI-Komponente durch das Zeichen, das sie darstellt. Wenn es ein solches Zeichen nicht gibt, wird ein Fehler ausgelöst:

```js example-bad
decodeURIComponent("%E0%A4%A");
// "URIError: malformed URI sequence"
```

Mit korrektem Input sollte dies normalerweise so aussehen:

```js example-good
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## Siehe auch

- {{jsxref("URIError")}}
- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
