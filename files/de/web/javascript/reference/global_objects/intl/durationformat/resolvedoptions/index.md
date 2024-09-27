---
title: Intl.DurationFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von Instanzen des {{jsxref("Intl.DurationFormat")}} gibt ein neues Objekt mit Eigenschaften zurück, die das Gebietsschema sowie die Datums- und Zeitformatierungsoptionen widerspiegeln, die während der Initialisierung dieses {{jsxref("Intl.DurationFormat")}} Objekts berechnet wurden.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die das Gebietsschema sowie die Datums- und Zeitformatierungsoptionen widerspiegeln, die während der Initialisierung des gegebenen {{jsxref("Intl.DateTimeFormat")}} Objekts berechnet wurden.

## Beschreibung

Das resultierende Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der [BCP 47 Sprach-Tag](https://datatracker.ietf.org/doc/html/rfc5646) für das verwendete Gebietsschema. Wenn in dem Eingabe-BCP 47-Sprach-Tag Unicode-Erweiterungswerte angefordert wurden, die zu diesem Gebietsschema führten, werden die angeforderten und für dieses Gebietsschema unterstützten Schlüssel-Wert-Paare in `locale` einbezogen.
- `style`
  - : Einer der Strings `"long"`, `"short"`, `"narrow"` oder `"digital"`, der den verwendeten Dauerformatierungsstil identifiziert.
- `years`
  - : Einer der Strings `"long"`, `"short"` oder `"narrow"`, der den für das `years` Feld verwendeten Formatierungsstil identifiziert.
- `yearsDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `years` Feld angezeigt werden soll.
- `months`
  - : Einer der Strings `"long"`, `"short"` oder `"narrow"`, der den für das `months` Feld verwendeten Formatierungsstil identifiziert.
- `monthsDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `months` Feld angezeigt werden soll.
- `weeks`
  - : Einer der Strings `"long"`, `"short"` oder `"narrow"`, der den für das `weeks` Feld verwendeten Formatierungsstil identifiziert.
- `weeksDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `weeks` Feld angezeigt werden soll.
- `days`
  - : Einer der Strings `"long"`, `"short"` oder `"narrow"`, der den für das `days` Feld verwendeten Formatierungsstil identifiziert.
- `daysDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `days` Feld angezeigt werden soll.
- `hours`
  - : Einer der Strings `"long"`, `"short"`, `"narrow"`, `"2-digit"` oder `"numeric"`, der den für das `hours` Feld verwendeten Formatierungsstil identifiziert.
- `hoursDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `hours` Feld angezeigt werden soll.
- `minutes`
  - : Einer der Strings `"long"`, `"short"`, `"narrow"`, `"2-digit"` oder `"numeric"`, der den für das `minutes` Feld verwendeten Formatierungsstil identifiziert.
- `minutesDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `minutes` Feld angezeigt werden soll.
- `seconds`
  - : Einer der Strings `"long"`, `"short"`, `"narrow"`, `"2-digit"` oder `"numeric"`, der den für das `seconds` Feld verwendeten Formatierungsstil identifiziert.
- `secondsDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `seconds` Feld angezeigt werden soll.
- `milliseconds`
  - : Einer der Strings `"long"`, `"short"`, `"narrow"` oder `"numeric"`, der den für das `milliseconds` Feld verwendeten Formatierungsstil identifiziert.
- `millisecondsDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `millisecondsDisplay` Feld angezeigt werden soll.
- `microseconds`
  - : Einer der Strings `"long"`, `"short"`, `"narrow"` oder `"numeric"`, der den für das `microseconds` Feld verwendeten Formatierungsstil identifiziert.
- `microsecondsDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `microsecondsDisplay` Feld angezeigt werden soll.
- `nanoseconds`
  - : Einer der Strings `"long"`, `"short"`, `"narrow"` oder `"numeric"`, der den für das `nanoseconds` Feld verwendeten Formatierungsstil identifiziert.
- `nanosecondsDisplay`
  - : Einer der Strings `"auto"` oder `"always"`, der beschreibt, wann das `nanosecondsDisplay` Feld angezeigt werden soll.
- `fractionalDigits`
  - : Eine Zahl, die die Anzahl der bei numerischen Stilen verwendeten Nachkommastellen identifiziert.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im Optionsargument angegeben wurde, wenn vorhanden, oder der angeforderte Wert unter Verwendung des Unicode-Erweiterungsschlüssels `nu` oder standardmäßig ausgefüllt.

## Beispiele

### Die resolvedOptions-Methode verwenden

```js
const duration = new Intl.DurationFormat("en");
const usedOptions = duration.resolvedOptions();

usedOptions.locale; // "en"
usedOptions.numberingSystem; // "latn"
usedOptions.years; // "long"
usedOptions.yearsDisplay; // "auto"
usedOptions.style; // "long"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
