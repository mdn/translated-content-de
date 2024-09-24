---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Note:** `unescape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur zur Sicherstellung der Kompatibilität zwischen Engines standardisiert wurde. Es ist nicht erforderlich, dass alle JavaScript-Engines sie implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("decodeURIComponent()")}} oder {{jsxref("decodeURI()")}}.

Die **`unescape()`** Funktion berechnet einen neuen String, in dem hexadezimale Escape-Sequenzen durch die Zeichen ersetzt werden, die sie darstellen. Die Escape-Sequenzen könnten von einer Funktion wie {{jsxref("escape()")}} eingeführt worden sein.

## Syntax

```js-nolint
unescape(str)
```

### Parameter

- `str`
  - : Ein zu dekodierender String.

### Rückgabewert

Ein neuer String, in dem bestimmte Zeichen entsperrt wurden.

## Beschreibung

`unescape()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `unescape()` ersetzt jede Escape-Sequenz durch das Zeichen, das sie darstellt. Insbesondere ersetzt sie jede Escape-Sequenz in der Form `%XX` oder `%uXXXX` (wobei `X` eine hexadezimale Ziffer darstellt) durch das Zeichen, das den hexadezimalen Wert `XX`/`XXXX` hat. Wenn die Escape-Sequenz keine gültige Escape-Sequenz ist (zum Beispiel, wenn `%` von einer oder keiner Hex-Ziffer gefolgt wird), bleibt sie unverändert.

> [!NOTE]
> Diese Funktion wurde meistens für {{Glossary("Percent-encoding", "Percent-Codierung")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Die Funktion `unescape()` wertet _keine_ [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in String-Literalen aus. Sie können `\xXX` durch `%XX` und `\uXXXX` durch `%uXXXX` ersetzen, um einen String zu erhalten, der von `unescape()` verarbeitet werden kann.

## Beispiele

### Verwendung von unescape()

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `unescape` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
