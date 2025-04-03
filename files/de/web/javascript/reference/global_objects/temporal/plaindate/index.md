---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainDate`** Objekt repräsentiert ein Kalenderdatum (ein Datum ohne Zeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das den ganzen Tag über stattfindet, unabhängig davon, in welcher Zeitzone es stattfindet. Es wird im Wesentlichen als ISO 8601 Kalenderdatum dargestellt, mit den Feldern Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem.

## Beschreibung

Ein `PlainDate` ist im Wesentlichen der Datumsanteil eines {{jsxref("Temporal.PlainDateTime")}} Objekts, bei dem die Zeitinformationen entfernt wurden. Da die Datum- und Zeitinformationen nicht viel interagieren, werden alle allgemeinen Informationen über Datumsmerkmale hier dokumentiert.

### RFC 9557 Format

`PlainDate` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format serialisiert und analysiert werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats. Der String hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag zeigt im Allgemeinen anderen Systemen an, dass es nicht ignoriert werden kann, wenn diese es nicht unterstützen. Der `Temporal` Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional die Zeit, den Offset und den Zeitzonen-Identifier im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) hinzufügen, aber sie werden ignoriert. Andere Anmerkungen im Format `[key=value]` werden ebenfalls ignoriert und dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt wird und ob ein kritisches Flag hinzugefügt wird.

### Ungültige Datumskorrektur

Die Methoden {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}, und ihre Gegenstücke in anderen `Temporal` Objekten erlauben es, Daten mit kalender-spezifischen Eigenschaften zu konstruieren. Die Datumskomponenten können außerhalb des Bereichs liegen. Im ISO-Kalender ist dies immer ein _Überlauf_, wie ein Monat größer als 12 oder ein Tag größer als die Anzahl der Tage, und eine Korrektur würde nur das Clamping des Wertes auf den maximal erlaubten Wert beinhalten. In anderen Kalendern kann der ungültige Fall komplexer sein. Wenn Sie die Option `overflow: "constrain"` verwenden, werden ungültige Daten wie folgt auf ein gültiges Datum festgelegt:

- Wenn der Tag nicht existiert, aber der Monat: wählen Sie den nächstgelegenen Tag im selben Monat. Wenn es zwei gleich nahe liegende Daten in diesem Monat gibt, wählen Sie das spätere.
- Wenn der Monat ein Schaltmonat ist, der im Jahr nicht existiert: wählen Sie ein anderes Datum gemäß den kulturellen Konventionen der Nutzer dieses Kalenders. In der Regel führt dies zu demselben Tag im Monat davor oder danach, wo dieser Monat in einem Schaltjahr normalerweise fallen würde.
- Wenn der Monat aus anderen Gründen nicht im Jahr existiert: wählen Sie das nächste Datum, das noch im selben Jahr liegt. Wenn es zwei gleich nahe liegende Daten in diesem Jahr gibt, wählen Sie das spätere.
- Wenn das gesamte Jahr nicht existiert: wählen Sie das nächste Datum in einem anderen Jahr. Wenn es zwei gleich nahe liegende Daten gibt, wählen Sie das spätere.

## Konstruktor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDate` Objekt durch direkte Bereitstellung der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor, gleichzeitig mit oder nach dem zweiten Datum liegt. Entspricht dem Vergleich der Jahr-, Monat- und Tagfelder der zugrunde liegenden ISO 8601-Daten.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDate` Objekt aus einem anderen `Temporal.PlainDate` Objekt, einem Objekt mit Datumsangaben oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDate.prototype` definiert und werden von allen `Temporal.PlainDate` Instanzen geteilt.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO 8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainDate` Instanzen ist der anfängliche Wert der {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} Konstruktor.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums repräsentiert, was dieselbe Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index in der Woche dieses Datums repräsentiert. Tage in einer Woche werden fortlaufend von `1` bis {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, auch wenn Lokalisierungen, die den Kalender verwenden, einen anderen Tag als ersten Tag der Woche betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index im Jahr dieses Datums repräsentiert. Der erste Tag dieses Jahres ist `1` und der letzte Tag ist der {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies immer 7, aber in anderen Kalendersystemen kann dies von Woche zu Woche variieren.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen Kleinbuchstaben-String zurück, der die Ära dieses Datums repräsentiert, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorian ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära repräsentiert, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahr-Index beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorian BCE). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttages oder Schaltmonats) als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monat-Index im Jahr dieses Datums repräsentiert. Der erste Monat dieses Jahres ist `1` und der letzte Monat ist der {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit demselben {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} in verschiedenen Jahren unterschiedliche `month`-Indizes haben.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies immer 12, aber in anderen Kalendersystemen kann dies variieren.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochen-Index im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums repräsentiert, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des folgenden Jahres zugeordnet sein können.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Ära.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr repräsentiert, mit der die {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums kombiniert werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorangegangenen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainDate"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben darstellt.
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieses Datum einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist) im Wert entspricht, und `false` andernfalls. Sie werden sowohl durch ihre Datumswerte als auch durch ihre Kalender verglichen.
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist) zu diesem Datum darstellt. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach hinten verschoben darstellt.
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum im gleichen [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Datums zurück.
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das dieses Datum und eine bereitgestellte Zeit im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainMonthDay")}} Objekt zurück, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und den {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainYearMonth")}} Objekt zurück, das das {{jsxref("Temporal/PlainDate/year", "year")}} und den {{jsxref("Temporal/PlainDate/month", "month")}} dieses Datums im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}} Objekt zurück, das dieses Datum, eine bereitgestellte Zeit und eine bereitgestellte Zeitzone im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum zu einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn das andere Datum nach diesem Datum liegt, und negativ, wenn es davor liegt.
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDate` Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum im neuen Kalendersystem interpretiert darstellt.

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
