---
title: Temporal.PlainYearMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainYearMonth`** Objekt repräsentiert das Jahr und den Monat eines Kalenderdatums, ohne Tag oder Zeitzone; beispielsweise ein Ereignis in einem Kalender, das während des ganzen Monats stattfindet. Es wird grundsätzlich als ISO 8601 Kalenderdatum mit Jahr-, Monat- und Tagfeldern und einem zugehörigen Kalendersystem dargestellt. Der Tag wird verwendet, um das Jahr-Monat in nicht-ISO-Kalendersystemen zu unterscheiden.

## Beschreibung

Ein `PlainYearMonth` ist im Wesentlichen der Jahr-Monat-Teil eines {{jsxref("Temporal.PlainDate")}} Objekts, ohne den Tag.

### RFC 9557 Format

`PlainYearMonth` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Der String hat folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD` {{optional_inline}}
  - : Eine zweistellige Zahl von `01` bis `31`. Es ist für nicht-ISO-Kalender erforderlich und ansonsten optional. Wenn es weggelassen wird, sieht der String wie `YYYY-MM` oder `YYYYMM` aus. Beachten Sie, dass der tatsächlich gespeicherte Referenztag von dem abweichen kann, den Sie angeben, aber das dargestellte Jahr-Monat bleibt gleich. Siehe {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} für weitere Informationen. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wird einen Fehler werfen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Offset und den Zeitzonen-Identifikator im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) angeben, aber sie werden ignoriert. Andere Anmerkungen im Format `[key=value]` werden ebenfalls ignoriert und dürfen kein kritisches Flag haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag dafür hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainYearMonth` Objekt, indem die zugrunde liegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat kommt. Entspricht dem Vergleich ihrer zugrunde liegenden ISO 8601 Daten. Zwei Jahr-Monate aus unterschiedlichen Kalendern können als gleich angesehen werden, wenn sie am gleichen ISO-Datum beginnen.
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainYearMonth` Objekt aus einem anderen `Temporal.PlainYearMonth` Objekt, einem Objekt mit Jahr- und Monatseigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainYearMonth.prototype` definiert und werden von allen `Temporal.PlainYearMonth` Instanzen geteilt.

- {{jsxref("Temporal/PlainYearMonth/calendarId", "Temporal.PlainYearMonth.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainYearMonth.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainYearMonth` Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor.
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen Kleinbuchstaben-String zurück, der die Ära dieses Jahr-Monats repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, in derselben Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für gregorianisch entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt ein nicht-negatives ganzzahliges Jahr zurück, das das Jahr dieses Jahr-Monats innerhalb der Ära repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahrindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisches v. Chr.). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, in derselben
