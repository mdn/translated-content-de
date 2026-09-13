---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> `unescape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur zur Gewährleistung der Kompatibilität zwischen verschiedenen Engines standardisiert wurde. Es ist nicht erforderlich, dass alle JavaScript-Engines implementiert sind, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("decodeURIComponent()")}} oder {{jsxref("decodeURI()")}}.

Die **`unescape()`**-Funktion erstellt einen neuen Zeichenfolgenwert, in dem hexadezimale Escape-Sequenzen durch die Zeichen ersetzt werden, die sie repräsentieren. Die Escape-Sequenzen könnten durch eine Funktion wie {{jsxref("escape()")}} eingeführt worden sein.

## Syntax

```js-nolint
unescape(str)
```

### Parameter

- `str`
  - : Eine Zeichenfolge, die decodiert werden soll.

### Rückgabewert

Eine neue Zeichenfolge, in der bestimmte Zeichen unescaped worden sind.

## Beschreibung

`unescape()` ist eine Funktionseigenschaft des globalen Objekts.

Die `unescape()`-Funktion ersetzt jede Escape-Sequenz durch das Zeichen, das sie repräsentiert. Genauer gesagt ersetzt sie jede Escape-Sequenz der Form `%XX` oder `%uXXXX` (wobei `X` eine hexadezimale Ziffer darstellt) durch das Zeichen mit dem hexadezimalen Wert `XX`/`XXXX`. Wenn die Escape-Sequenz keine gültige Escape-Sequenz ist (beispielsweise, wenn `%` von einer oder keiner Hexadezimalziffer gefolgt wird), bleibt sie unverändert.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für die {{Glossary("Percent-encoding", "Prozentcodierung")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Die `unescape()`-Funktion wertet _nicht_ [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in Zeichenfolgenliteral aus. Sie können `\xXX` durch `%XX` und `\uXXXX` durch `%uXXXX` ersetzen, um eine Zeichenfolge zu erhalten, die von `unescape()` behandelt werden kann.

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
