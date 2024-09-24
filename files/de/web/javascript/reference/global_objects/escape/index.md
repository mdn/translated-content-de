---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Note:** `escape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur für die Kompatibilität zwischen Engines standardisiert wurde. Es ist nicht erforderlich, dass alle JavaScript-Engines sie implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("encodeURIComponent()")}} oder {{jsxref("encodeURI()")}}.

Die **`escape()`**-Funktion berechnet einen neuen String, in dem bestimmte Zeichen durch hexadezimale Escape-Sequenzen ersetzt wurden.

## Syntax

```js-nolint
escape(str)
```

### Parameter

- `str`
  - : Ein zu kodierender String.

### Rückgabewert

Ein neuer String, in dem bestimmte Zeichen maskiert wurden.

## Beschreibung

`escape()` ist eine Funktionseigenschaft des globalen Objekts.

Die `escape()`-Funktion ersetzt alle Zeichen mit Escape-Sequenzen, mit Ausnahme von {{Glossary("ASCII")}}-Wortzeichen (A–Z, a–z, 0–9, \_) und `@\*_+-./`. Zeichen werden durch UTF-16 Codeeinheiten maskiert. Ist der Wert der Codeeinheit kleiner als 256, wird er durch eine zweistellige hexadezimale Zahl im Format `%XX` dargestellt, bei Bedarf mit 0 aufgefüllt. Andernfalls wird er durch eine vierstellige hexadezimale Zahl im Format `%uXXXX` dargestellt, ebenfalls bei Bedarf mit 0 aufgefüllt.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für das {{Glossary("Percent-encoding", "Prozent-Codierung")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Das Escape-Format ist _nicht_ eine [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in String-Literalen. Sie können `%XX` durch `\xXX` und `%uXXXX` durch `\uXXXX` ersetzen, um einen String mit tatsächlichen Escape-Sequenzen für String-Literale zu erhalten.

## Beispiele

### Verwendung von escape()

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// Sonderzeichen
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
