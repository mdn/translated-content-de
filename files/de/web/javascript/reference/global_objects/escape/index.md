---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Note:** `escape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur zur Kompatibilität zwischen verschiedenen Engines standardisiert wurde. Es ist nicht erforderlich, dass alle JavaScript-Engines sie implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("encodeURIComponent()")}} oder {{jsxref("encodeURI()")}}.

Die **`escape()`**-Funktion berechnet eine neue Zeichenkette, in der bestimmte Zeichen durch hexadezimale Escape-Sequenzen ersetzt wurden.

## Syntax

```js-nolint
escape(str)
```

### Parameter

- `str`
  - : Eine zu kodierende Zeichenkette.

### Rückgabewert

Eine neue Zeichenkette, in der bestimmte Zeichen maskiert wurden.

## Beschreibung

`escape()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `escape()` ersetzt alle Zeichen durch Escape-Sequenzen, mit Ausnahme von {{Glossary("ASCII", "ASCII")}}-Wortzeichen (A–Z, a–z, 0–9, \_) und `@\*_+-./`. Zeichen werden durch UTF-16-Code-Einheiten maskiert. Wenn der Wert der Code-Einheit kleiner als 256 ist, wird er durch eine zweistellige hexadezimale Zahl im Format `%XX` dargestellt, wobei gegebenenfalls mit 0 aufgefüllt wird. Andernfalls wird er durch eine vierstellige hexadezimale Zahl im Format `%uXXXX` dargestellt, wobei gegebenenfalls mit 0 aufgefüllt wird.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für das {{Glossary("Percent-encoding", "Prozent-Codierung")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Das Escape-Format ist _kein_ [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in Zeichenfolgenliteralen. Sie können `%XX` mit `\xXX` und `%uXXXX` mit `\uXXXX` ersetzen, um eine Zeichenkette mit tatsächlichen Escape-Sequenzen für Zeichenfolgenliterale zu erhalten.

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
