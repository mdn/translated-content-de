---
title: "URIError: Malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "malformed URI sequence" tritt auf, wenn das URI-Codieren oder -Decodieren nicht erfolgreich war.

## Meldung

```plain
URIError: URI malformed (V8-based)
URIError: malformed URI sequence (Firefox)
URIError: String contained an illegal UTF-16 sequence. (Safari)
```

## Fehlertyp

{{jsxref("URIError")}}

## Was ist schiefgelaufen?

Das URI-Codieren oder -Decodieren war nicht erfolgreich. Ein übergebenes Argument an die Funktionen {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}} oder {{jsxref("decodeURIComponent")}} war nicht gültig, sodass die Funktion nicht korrekt codieren oder decodieren konnte.

## Beispiele

### Codieren

Beim Codieren wird jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die die UTF-8-Codierung des Zeichens darstellen. Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogat zu codieren, das nicht Teil eines Hoch-Tief-Paares ist, zum Beispiel:

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

### Decodieren

Beim Decodieren wird jede Escape-Sequenz in der codierten URI-Komponente durch das Zeichen ersetzt, das sie darstellt. Wenn es ein solches Zeichen nicht gibt, wird ein Fehler ausgelöst:

```js example-bad
decodeURIComponent("%E0%A4%A");
// "URIError: malformed URI sequence"
```

Mit korrektem Input sollte es normalerweise so aussehen:

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
