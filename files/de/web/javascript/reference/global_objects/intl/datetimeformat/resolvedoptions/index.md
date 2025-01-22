---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von Instanzen des {{jsxref("Intl.DateTimeFormat")}} gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat folgende Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das BCP 47-Sprachtag für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die Unicode-Erweiterungsschlüssel `ca`, `hc` und `nu`, falls angefordert, können im Ergebnis enthalten sein.
- `calendar`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde oder unter Verwendung des Unicode-Erweiterungsschlüssels `"ca"`, mit erforderlichen Standardeinstellungen. Es handelt sich um einen unterstützten [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für diese Sprache. Der Standard ist sprachabhängig.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit erforderlichen Standardeinstellungen. Es handelt sich um ein unterstütztes [Zahlsystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Sprache. Der Standard ist sprachabhängig.
- `timeZone`

  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, mit erforderlichen Standardeinstellungen. Es handelt sich um einen [IANA-Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser denselben Bezeichner wie ursprünglich angegeben verwenden, ohne eine Kanonisierung zu einem anderen Alias vorzunehmen. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- `hourCycle` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde oder unter Verwendung des Unicode-Erweiterungsschlüssels `"hc"`, mit erforderlichen Standardeinstellungen. Wenn `hour12` im `options`-Argument angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die berechneten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standard ist sprachabhängig, obwohl `"h24"` niemals ein Standard ist.
- `hour12` {{optional_inline}}
  - : Basierend auf `hourCycle` berechnet. Es ist nur vorhanden, wenn die berechneten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : Die Werte, die aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für die Datums- und Zeitformatierung in der ausgewählten Sprache resultieren. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was bedeutet, dass die entsprechenden Komponenten im formatierten Ergebnis nicht dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften im `options`-Argument angefordert wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` angegeben werden, sodass die folgende Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : Die Werte, die für diese Eigenschaften im `options`-Argument angegeben wurden. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was bedeutet, dass die entsprechenden Komponenten im formatierten Ergebnis nicht dargestellt werden.

    Wenn diese Eigenschaften im `options`-Argument angefordert wurden, verhindert der Konstruktor, dass individuelle Datums- und Zeitkomponentenoptionen angegeben werden, sodass die obige Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Datums- und Zeitkomponentenstile sind, sind die genauen (sprachabhängigen) Komponentenstile, auf die sie sich auflösen, nicht in den berechneten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

## Beispiele

### Verwendung der resolvedOptions-Methode

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Abrufen der Zeitzonen- und Sprachpräferenzen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und das bevorzugte Kalender- und Zahlsystem der Sprache zu ermitteln:

```js
const systemOptions = new Intl.DateTimeFormat().resolvedOptions();
systemOptions.timeZone; // e.g., "Europe/Brussels" or "Asia/Riyadh"
systemOptions.calendar; // e.g., "gregory" or "islamic-umalqura"
systemOptions.numberingSystem; // e.g., "latn" or "arab"
systemOptions.locale; // e.g., "nl-BE" or "ar-SA"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
