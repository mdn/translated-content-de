---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> `escape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wird und nur für die Kompatibilität zwischen verschiedenen Engines standardisiert wurde. Nicht alle JavaScript-Engines müssen sie implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("encodeURIComponent()")}} oder {{jsxref("encodeURI()")}}.

Die Funktion **`escape()`** erzeugt einen neuen String, in dem bestimmte Zeichen durch hexadezimale Escape-Sequenzen ersetzt wurden.

## Syntax

```js-nolint
escape(str)
```

### Parameter

- `str`
  - : Ein zu kodierender String.

### Rückgabewert

Ein neuer String, in dem bestimmte Zeichen durch Escape-Sequenzen ersetzt wurden.

## Beschreibung

`escape()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `escape()` ersetzt alle Zeichen durch Escape-Sequenzen, mit Ausnahme von {{Glossary("ASCII", "ASCII")}}-Wortzeichen (A–Z, a–z, 0–9, \_) und `@\*_+-./`. Die Zeichen werden anhand ihrer UTF-16-Codeeinheiten kodiert. Wenn der Wert einer Codeeinheit kleiner als 256 ist, wird er als zweistellige Hexadezimalzahl im Format `%XX` dargestellt und bei Bedarf links mit einer 0 aufgefüllt. Andernfalls wird er als vierstellige Hexadezimalzahl im Format `%uXXXX` dargestellt und bei Bedarf links mit einer 0 aufgefüllt.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für die {{Glossary("Percent-encoding", "Prozentkodierung")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Das Escape-Format ist _keine_ [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in String-Literalen. Sie können `%XX` durch `\xXX` und `%uXXXX` durch `\uXXXX` ersetzen, um einen String zu erhalten, der tatsächliche Escape-Sequenzen für String-Literale enthält.

## Beispiele

### Verwendung von escape()

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// special characters
escape("@*_+-./"); // "@*_+-./"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `escape` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
