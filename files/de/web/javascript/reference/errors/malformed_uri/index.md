---
title: "URIError: malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "malformed URI sequence" tritt auf, wenn die URI-Kodierung oder -Dekodierung
nicht erfolgreich war.

## Nachricht

```plain
URIError: URI malformed (V8-based)
URIError: malformed URI sequence (Firefox)
URIError: String contained an illegal UTF-16 sequence. (Safari)
```

## Fehlerart

{{jsxref("URIError")}}

## Was ging schief?

Die URI-Kodierung oder -Dekodierung war nicht erfolgreich. Ein Argument, das entweder der
{{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}} oder
{{jsxref("decodeURIComponent")}} Funktion übergeben wurde, war nicht gültig, sodass die Funktion
nicht in der Lage war, korrekt zu kodieren oder zu dekodieren.

## Beispiele

### Kodierung

Die Kodierung ersetzt jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier
Escape-Sequenzen, die die UTF-8-Kodierung des Zeichens darstellen. Ein
{{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogat zu kodieren, das nicht Teil eines Hoch-Niedrig-Paares ist, zum Beispiel:

```js example-bad
encodeURI("\uD800");
// "URIError: malformed URI sequence"

encodeURI("\uDFFF");
// "URIError: malformed URI sequence"
```

Ein Hoch-Niedrig-Paar ist in Ordnung. Zum Beispiel:

```js example-good
encodeURI("\uD800\uDFFF");
// "%F0%90%8F%BF"
```

### Dekodierung

Die Dekodierung ersetzt jede Escape-Sequenz im kodierten URI-Komponenten durch das Zeichen,
das sie darstellt. Wenn es ein solches Zeichen nicht gibt, wird ein Fehler ausgelöst:

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
