---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> `unescape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur zur Gewährleistung der Kompatibilität zwischen verschiedenen Engines standardisiert wurde. Nicht alle JavaScript-Engines müssen sie implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("decodeURIComponent()")}} oder {{jsxref("decodeURI()")}}.

Die Funktion **`unescape()`** erzeugt einen neuen String, in dem hexadezimale Escape-Sequenzen durch die Zeichen ersetzt werden, die sie darstellen. Die Escape-Sequenzen können durch eine Funktion wie {{jsxref("escape()")}} erzeugt worden sein.

## Syntax

```js-nolint
unescape(str)
```

### Parameter

- `str`
  - : Ein String, der dekodiert werden soll.

### Rückgabewert

Ein neuer String, in dem bestimmte Zeichen dekodiert wurden.

## Beschreibung

`unescape()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `unescape()` ersetzt jede gültige Escape-Sequenz durch das Zeichen, das sie darstellt. Konkret ersetzt sie Escape-Sequenzen der Form `%XX` oder `%uXXXX` (wobei `X` für eine hexadezimale Ziffer steht) durch das Zeichen mit dem Hexadezimalwert `XX` beziehungsweise `XXXX`. Ist eine Escape-Sequenz ungültig (beispielsweise wenn auf `%` nur eine oder keine hexadezimale Ziffer folgt), bleibt sie unverändert.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für die {{Glossary("Percent-encoding", "Prozentkodierung")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Die Funktion `unescape()` wertet [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in String-Literalen _nicht_ aus. Sie können `\xXX` durch `%XX` und `\uXXXX` durch `%uXXXX` ersetzen, um einen String zu erhalten, den `unescape()` verarbeiten kann.

## Beispiele

### unescape() verwenden

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

- [Polyfill für `unescape` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
