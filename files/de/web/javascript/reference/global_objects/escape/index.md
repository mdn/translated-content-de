---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> `escape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur zur Sicherstellung der Kompatibilität zwischen verschiedenen Engines standardisiert wurde. Es ist nicht erforderlich, dass alle JavaScript-Engines sie implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("encodeURIComponent()")}} oder {{jsxref("encodeURI()")}}.

Die **`escape()`** Funktion erstellt einen neuen String, in dem bestimmte Zeichen durch hexadezimale Escape-Sequenzen ersetzt wurden.

## Syntax

```js-nolint
escape(str)
```

### Parameter

- `str`
  - : Ein String, der kodiert werden soll.

### Rückgabewert

Ein neuer String, in dem bestimmte Zeichen escaped worden sind.

## Beschreibung

`escape()` ist eine Eigenschaft der globalen Objektfunktion.

Die `escape()` Funktion ersetzt alle Zeichen mit Escape-Sequenzen, mit Ausnahme von {{Glossary("ASCII", "ASCII")}} Wortzeichen (A–Z, a–z, 0–9, \_) und `@\*_+-./`. Zeichen werden durch UTF-16-Codeeinheiten escaped. Wenn der Wert der Codeeinheit kleiner als 256 ist, wird er durch eine zweistellige hexadezimale Zahl im Format `%XX` dargestellt und bei Bedarf mit 0 aufgefüllt. Andernfalls wird er durch eine vierstellige hexadezimale Zahl im Format `%uXXXX` dargestellt und bei Bedarf mit 0 aufgefüllt.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für das {{Glossary("Percent-encoding", "prozentuale Codieren")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Das Escape-Format ist _kein_ [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in String-Literalen. Sie können `%XX` mit `\xXX` und `%uXXXX` mit `\uXXXX` ersetzen, um einen String zu erhalten, der tatsächliche String-Literal-Escape-Sequenzen enthält.

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

- [Polyfill von `escape` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
