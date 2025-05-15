---
title: Temporal.PlainYearMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainYearMonth`** Objekt repräsentiert das Jahr und den Monat eines Kalenderdatums, ohne einen Tag oder eine Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das während des gesamten Monats stattfindet. Es wird grundsätzlich als ein ISO 8601 Kalenderdatum mit Jahr-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem dargestellt. Der Tag wird verwendet, um das Jahr-Monat in nicht-ISO-Kalendersystemen zu bestimmen.

## Beschreibung

Ein `PlainYearMonth` ist im Wesentlichen der Jahr-Monat-Teil eines {{jsxref("Temporal.PlainDate")}} Objekts, ohne den Tag.

### RFC 9557 Format

`PlainYearMonth` Objekte können unter Verwendung des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und analysiert werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD` {{optional_inline}}
  - : Eine zweistellige Zahl von `01` bis `31`. Es ist für nicht-ISO-Kalender erforderlich und ansonsten optional. Wird es weggelassen, sieht der String wie `YYYY-MM` oder `YYYYMM` aus. Beachten Sie, dass der tatsächlich gespeicherte Referenztag von dem abweichen kann, den Sie angeben, aber das dargestellte Jahr-Monat bleibt dasselbe. Siehe {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} für weitere Informationen. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Es kann ein _Kritikflag_ haben, indem Sie den Schlüssel mit `!` voranstellen: z.B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen allgemein mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wird einen Fehler werfen, wenn die Annotationen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ein ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional Zeit, Versatz und Zeitzonenbezeichner im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einbeziehen, aber sie werden ignoriert. Andere Annotationen im `[key=value]` Format werden ebenfalls ignoriert und dürfen nicht das Kritikflag haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein Kritikflag dafür hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainYearMonth` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat liegt. Dies entspricht dem Vergleich ihrer zugrunde liegenden ISO 8601 Daten. Zwei Jahr-Monate aus verschiedenen Kalendern können als gleich angesehen werden, wenn sie am gleichen ISO-Datum beginnen.
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainYearMonth` Objekt aus einem anderen `Temporal.PlainYearMonth` Objekt, einem Objekt mit Jahr- und Monatseigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainYearMonth.prototype` definiert und werden von allen `Temporal.PlainYearMonth` Instanzen geteilt.

- {{jsxref("Temporal/PlainYearMonth/calendarId", "Temporal.PlainYearMonth.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainYearMonth.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainYearMonth` Instanzen ist der anfängliche Wert der {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor.
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO 8601 Kalender ist dies 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen Kleinbuchstaben-String zurück, der die Ära dieses Jahr-Monats darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf die gleiche Weise, wie es das `year` tut. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den Gregorianischen Kalender ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Jahr-Monats innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisches BCE). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf die gleiche Weise, wie es das `year` tut. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainYearMonth/inLeapYear", "Temporal.PlainYearMonth.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob dieses Jahr-Monat in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttags oder -monats) als ein normales Jahr. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monatsindex im Jahr dieses Jahr-Monats darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist die {{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass im Unterschied zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit dem gleichen {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} unterschiedliche `month` Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Jahr-Monats darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). In der Regel ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des Vormonats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO 8601 Kalender sind es immer 12, aber in anderen Kalendersystemen kann es unterschiedlich sein.
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Jahr-Monats relativ zum Beginn eines kalenderspezifischen Epochjahrs darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Ära.
- `Temporal.PlainYearMonth.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainYearMonth"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das dieses Jahr-Monat um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) verschoben darstellt.
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieses Jahr-Monat in Wert einem anderen Jahr-Monat entspricht (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist), und `false` sonst. Sie werden sowohl durch ihre zugrunde liegenden ISO-Datenwerte als auch durch ihre Kalender verglichen, so dass zwei Jahr-Monate aus verschiedenen Kalendern durch {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich angesehen werden können, aber nicht durch `equals()`.
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) bis zu diesem Jahr-Monat darstellt. Die Dauer ist positiv, wenn der andere Monat vor diesem Monat liegt, und negativ, wenn danach.
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das dieses Jahr-Monat um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben darstellt.
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Jahr-Monat im gleichen [RFC 9557 Format](#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Jahr-Monats zurück.
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das dieses Jahr-Monat und einen angegebenen Tag im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Jahr-Monat im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Jahr-Monat bis zu einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Monat nach diesem Monat liegt, und negativ, wenn davor.
- {{jsxref("Temporal/PlainYearMonth/valueOf", "Temporal.PlainYearMonth.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainYearMonth` Instanzen [implizit zu Primitiven konvertiert werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das dieses Jahr-Monat mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainMonthDay")}}
