---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Das **`Temporal.PlainDate`**-Objekt repräsentiert ein Kalenderdatum (ein Datum ohne Zeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das den ganzen Tag über passiert, unabhängig von der Zeitzone, in der es stattfindet. Es wird grundsätzlich als ISO 8601-Kalenderdatum dargestellt, mit den Feldern Jahr, Monat und Tag und einem zugehörigen Kalendersystem.

## Beschreibung

Ein `PlainDate` ist im Wesentlichen der Datumsteil eines {{jsxref("Temporal.PlainDateTime")}}-Objekts, wobei die Zeitinformationen entfernt wurden. Da Datum und Zeit nicht viel miteinander interagieren, sind alle allgemeinen Informationen über Datumseigenschaften hier dokumentiert.

### RFC 9557-Format

`PlainDate`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat folgende Form (Leerzeichen dienen nur zur besseren Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt sein.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste häufig unterstützter Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag weist in der Regel andere Systeme darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als Kalenderdatum im ISO 8601-Format interpretiert wird und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Versatz und die Zeitzonenkennung im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einfügen, aber sie werden ignoriert. Andere Anmerkungen im Format `[key=value]` werden ebenfalls ignoriert und dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag hinzugefügt werden soll.

### Ungültige Datumskorrektur

Die Methoden {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} und ihre Gegenstücke in anderen `Temporal`-Objekten erlauben es, Daten mit kalenderspezifischen Eigenschaften zu konstruieren. Die Datumskomponenten können außerhalb des gültigen Bereichs liegen. Im ISO-Kalender ist dies immer ein _Überlauf_, wie z.B. ein Monat, der größer als 12 ist, oder ein Tag, der größer ist als die Anzahl der Tage, und die Behebung würde nur bedeuten, den Wert auf den maximal zulässigen Wert zu begrenzen. In anderen Kalendern kann der ungültige Fall komplexer sein. Wenn Sie die Option `overflow: "constrain"` verwenden, werden ungültige Daten auf folgende Weise auf ein gültiges korrigiert:

- Wenn der Tag nicht existiert, aber der Monat schon: Wählen Sie den nächstgelegenen Tag im selben Monat. Wenn es zwei gleich nahegelegene Daten in diesem Monat gibt, wählen Sie das spätere aus.
- Wenn der Monat ein Schaltmonat ist, der im Jahr nicht existiert: Wählen Sie ein anderes Datum gemäß den kulturellen Gepflogenheiten der Benutzer dieses Kalenders. Üblicherweise führt dies zum selben Tag in dem Monat davor oder danach, in dem dieser Monat in einem Schaltjahr normalerweise vorkommen würde.
- Wenn der Monat aus anderen Gründen im Jahr nicht existiert: Wählen Sie das nächstgelegene Datum, das noch im selben Jahr liegt. Wenn es zwei gleich nahegelegene Daten in diesem Jahr gibt, wählen Sie das spätere aus.
- Wenn das ganze Jahr nicht existiert: Wählen Sie das nächstgelegene Datum in einem anderen Jahr. Wenn es zwei gleich nahegelegene Daten gibt, wählen Sie das spätere aus.

## Konstruktor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDate`-Objekt, indem die zugrunde liegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor, gleich oder nach dem zweiten Datum liegt. Entspricht dem Vergleich der Jahr-, Monat- und Tagfelder der zugrunde liegenden ISO 8601-Daten.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDate`-Objekt aus einem anderen `Temporal.PlainDate`-Objekt, einem Objekt mit Datumsangaben oder einem [RFC 9557](#rfc_9557-format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDate.prototype` definiert und werden von allen Instanzen von `Temporal.PlainDate` geteilt.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, mit dem das interne ISO 8601-Datum interpretiert wird.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Temporal.PlainDate`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}-Konstruktor.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums darstellt, was der gleiche Tag ist, den man auf einem Kalender sähe. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt in der Regel bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index in der Woche dieses Datums darstellt. Tage in einer Woche sind der Reihe nach von `1` bis {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert in der Regel Montag im Kalender, auch wenn Lokalisierungen, die den Kalender verwenden, möglicherweise einen anderen Tag als ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1` und der letzte Tag ist der {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann dies von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahr-Index beginnt in der Regel bei 1 (häufiger) oder 0, und Jahre in einer Epoche können im Laufe der Zeit abnehmen (z.B. Gregorianisch BCE). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleanischen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr ist. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttags oder Schaltmonats) als ein gewöhnliches Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monat-Index im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1` und der letzte Monat ist der {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für unterschiedliche Jahre haben.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der vorherige Monatscode gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es abweichen.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Wochen-Index im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden können.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist Jahr 1 entweder das erste Jahr der neuesten Epoche oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat das Jahr denselben Wert vor und nach dem Startdatum der Epoche.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die das Jahr repräsentiert, das mit der {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainDate"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine gegebene Dauer verschoben repräsentiert (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieses Datum einem anderen Datum gleichwertig ist (in einer Form, die von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} umwandelbar ist), und `false` andernfalls. Sie werden sowohl durch ihre Datumswerte als auch durch ihre Kalender verglichen.
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum (in einer Form, die von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} umwandelbar ist) zu diesem Datum darstellt. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn danach.
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine gegebene Dauer rückwärts verschoben darstellt (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum im selben [RFC 9557-Format](#rfc_9557-format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}}. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Datums zurück.
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das dieses Datum und eine angegebene Zeit im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainMonthDay")}}-Objekt zurück, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und den {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainYearMonth")}}-Objekt zurück, das den {{jsxref("Temporal/PlainDate/year", "year")}} und den {{jsxref("Temporal/PlainDate/month", "month")}} dieses Datums im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das dieses Datum, eine angegebene Zeit und eine angegebene Zeitzone im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum zu einem anderen Datum darstellt (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} umwandelbar ist). Die Dauer ist positiv, wenn das andere Datum nach diesem Datum liegt, und negativ, wenn vorher.
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDate`-Instanzen [implizit in primitive Typen umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum darstellt, wobei einige Felder durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum interpretiert im neuen Kalendersystem darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.ZonedDateTime")}}
