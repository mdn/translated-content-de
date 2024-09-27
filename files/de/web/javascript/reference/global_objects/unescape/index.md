---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Note:** `unescape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur für die Kompatibilität zwischen verschiedenen Engines standardisiert wurde. Sie muss nicht von allen JavaScript-Engines implementiert werden und funktioniert möglicherweise nicht überall. Verwenden Sie, wenn möglich, {{jsxref("decodeURIComponent()")}} oder {{jsxref("decodeURI()")}}.

Die **`unescape()`** Funktion berechnet einen neuen String, in dem hexadezimale Escape-Sequenzen durch die Zeichen ersetzt werden, die sie repräsentieren. Die Escape-Sequenzen könnten von einer Funktion wie {{jsxref("escape()")}} eingeführt worden sein.

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

`unescape()` ist eine Funktionen-Eigenschaft des globalen Objekts.

Die `unescape()` Funktion ersetzt jede Escape-Sequenz mit dem Zeichen, welches sie repräsentiert. Insbesondere ersetzt sie jede Escape-Sequenz der Form `%XX` oder `%uXXXX` (wobei `X` eine hexadezimale Ziffer darstellt) durch das Zeichen, das den hexadezimalen Wert `XX`/`XXXX` hat. Wenn die Escape-Sequenz keine gültige Escape-Sequenz ist (zum Beispiel, wenn `%` gefolgt von einer oder keiner hexadezimalen Ziffer steht), bleibt sie unverändert.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für [Prozent-Kodierung](/de/docs/Glossary/Percent-encoding) verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Die `unescape()` Funktion wertet _nicht_ [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in String-Literalen aus. Sie können `\xXX` mit `%XX` und `\uXXXX` mit `%uXXXX` ersetzen, um einen String zu erhalten, der von `unescape()` behandelt werden kann.

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
