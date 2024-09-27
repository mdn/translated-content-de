---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Note:** `escape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wird und nur zur Sicherstellung der Kompatibilität zwischen verschiedenen JavaScript-Engines standardisiert wurde. Es ist nicht erforderlich, dass alle JavaScript-Engines sie implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("encodeURIComponent()")}} oder {{jsxref("encodeURI()")}}.

Die **`escape()`** Funktion berechnet einen neuen String, bei dem bestimmte Zeichen durch hexadezimale Escape-Sequenzen ersetzt wurden.

## Syntax

```js-nolint
escape(str)
```

### Parameter

- `str`
  - : Ein String, der kodiert werden soll.

### Rückgabewert

Ein neuer String, bei dem bestimmte Zeichen ersetzt wurden.

## Beschreibung

`escape()` ist eine Funktions-Eigenschaft des globalen Objekts.

Die `escape()` Funktion ersetzt alle Zeichen durch Escape-Sequenzen, mit Ausnahme der [ASCII](/de/docs/Glossary/ASCII) Wortzeichen (A–Z, a–z, 0–9, \_) und `@\*_+-./`. Zeichen werden durch UTF-16 Code-Einheiten ersetzt. Wenn der Wert der Code-Einheit kleiner als 256 ist, wird er durch eine zweistellige hexadezimale Zahl im Format `%XX` dargestellt, links mit 0 gepolstert, falls notwendig. Andernfalls wird er durch eine vierstellige hexadezimale Zahl im Format `%uXXXX` dargestellt, links mit 0 gepolstert, falls notwendig.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für die [Prozent-Codierung](/de/docs/Glossary/Percent-encoding) verwendet und basiert teilweise auf dem Escape-Format aus {{rfc(1738)}}. Das Escape-Format ist _nicht_ eine [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in String-Literalen. Sie können `%XX` durch `\xXX` und `%uXXXX` durch `\uXXXX` ersetzen, um einen String mit tatsächlichen String-Literal-Escape-Sequenzen zu erhalten.

## Beispiele

### Nutzung von escape()

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
