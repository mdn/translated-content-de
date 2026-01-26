---
title: Temporal.PlainYearMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal.PlainYearMonth`**-Objekt repräsentiert das Jahr und den Monat eines Kalenderdatums, ohne einen Tag oder eine Zeitzone; beispielsweise ein Ereignis in einem Kalender, das während des gesamten Monats stattfindet. Es wird im Wesentlichen als ISO 8601-Kalenderdatum mit Jahr-, Monat- und Tagesfeldern und einem zugehörigen Kalendersystem dargestellt. Der Tag wird zur Unterscheidung des Jahr-Monats in nicht-ISO-Kalendersystemen verwendet.

## Beschreibung

Ein `PlainYearMonth` ist im Wesentlichen der Jahr-Monat-Teil eines {{jsxref("Temporal.PlainDate")}}-Objekts, ohne den Tag.

### RFC 9557 Format

`PlainYearMonth`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, eine Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD` {{optional_inline}}
  - : Eine zweistellige Zahl von `01` bis `31`. Sie ist für nicht-ISO-Kalender erforderlich und ansonsten optional. Bei Weglassen sieht der String wie `YYYY-MM` oder `YYYYMM` aus. Beachten Sie, dass der tatsächlich gespeicherte Referenztag von dem abweichen kann, den Sie angeben, aber der repräsentierte Jahr-Monat bleibt derselbe. Siehe {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} für weitere Informationen. Die `YYYY`, `MM` und `DD`-Komponenten können durch `-` oder nichts getrennt sein.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste häufig unterstützter Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem Sie dem Schlüssel ein `!` voranstellen: zum Beispiel `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalender-Anmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Offset und den Zeitzonen-Bezeichner im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einfügen, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag dafür hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainYearMonth`-Objekt, indem direkt die zugrunde liegenden Daten bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob der erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat liegt. Äquivalent zum Vergleich ihrer zugrunde liegenden ISO 8601-Daten. Zwei Jahr-Monate aus verschiedenen Kalendern können als gleich angesehen werden, wenn sie am selben ISO-Datum beginnen.
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
  - : Erstellt ein neues `Temporal.PlainYearMonth`-Objekt aus einem anderen `Temporal.PlainYearMonth`-Objekt, einem Objekt mit Jahr- und Monatseigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainYearMonth.prototype` definiert und werden von allen `Temporal.PlainYearMonth`-Instanzen geteilt.

- {{jsxref("Temporal/PlainYearMonth/calendarId", "Temporal.PlainYearMonth.prototype.calendarId")}}
  - : Gibt einen String zurück, der den zur Interpretation des internen ISO 8601-Datums verwendeten [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt.
- {{jsxref("Object/constructor", "Temporal.PlainYearMonth.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `Temporal.PlainYearMonth`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}-Konstruktor.
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
  - : Gibt einen kalender-spezifischen Kleinbuchstaben-String zurück, der die Ära dieses Jahr-Monats darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, so wie es `year` tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Im Gregorianischen ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Jahr-Monats innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianischer BCE). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, so wie es `year` tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainYearMonth/inLeapYear", "Temporal.PlainYearMonth.prototype.inLeapYear")}}
  - : Gibt ein boolean zurück, das angibt, ob dieser Jahr-Monat in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schaltstags oder Schaltmonats) als ein gewöhnliches Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Jahr-Monats darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass der Index im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
  - : Gibt einen kalender-spezifischen String zurück, der den Monat dieses Jahr-Monats darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies immer 12, aber in anderen Kalendersystemen kann es abweichen.
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Jahr-Monats relativ zum Beginn eines kalender-spezifischen Epochejahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der letzten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, wird dieses Jahr denselben Wert vor und nach dem Startdatum der Ära haben.
- `Temporal.PlainYearMonth.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainYearMonth"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat, verschoben um eine angegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), darstellt.
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieser Jahr-Monat einem anderen Jahr-Monat (in einer Form, die von {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) wertmäßig entspricht, und `false` sonst. Sie werden sowohl anhand ihrer zugrunde liegenden ISO-Datenwerte als auch ihrer Kalender verglichen, sodass zwei Jahr-Monate aus verschiedenen Kalendern durch {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} gleich angesehen werden können, aber nicht durch `equals()`.
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Jahr-Monat (in einer Form, die von {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) bis zu diesem Jahr-Monat darstellt. Die Dauer ist positiv, wenn der andere Monat vor diesem Monat liegt, und negativ, wenn danach.
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat, rückwärts verschoben um eine angegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), darstellt.
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diesen Jahr-Monat im gleichen [RFC 9557 Format](#rfc_9557_format) wie bei der Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieses Jahr-Monats zurück.
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Jahr-Monat und einen angegebenen Tag im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen Jahr-Monat im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Jahr-Monat bis zu einem anderen Jahr-Monat (in einer Form, die von {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Monat nach diesem Monat liegt, und negativ, wenn davor.
- {{jsxref("Temporal/PlainYearMonth/valueOf", "Temporal.PlainYearMonth.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainYearMonth`-Instanzen [implizit in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat mit einigen Feldern darstellt, die durch neue Werte ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainMonthDay")}}
