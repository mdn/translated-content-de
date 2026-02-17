---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

Das **`Temporal.PlainDate`** Objekt repräsentiert ein Kalenderdatum (ein Datum ohne Zeit oder Zeitzone); zum Beispiel ein Ereignis auf einem Kalender, das den ganzen Tag über stattfindet, unabhängig davon, in welcher Zeitzone es passiert. Es wird grundlegend als ein ISO 8601-Kalenderdatum dargestellt, mit Jahr, Monat und Tag Feldern und einem zugehörigen Kalendersystem.

## Beschreibung

Ein `PlainDate` ist im Wesentlichen der Datumsteil eines {{jsxref("Temporal.PlainDateTime")}} Objekts, wobei die Zeitinformation entfernt wurde. Da das Datum und die Zeitinformationen wenig Interaktion aufweisen, werden alle allgemeinen Informationen über Datumeigenschaften hier dokumentiert.

### RFC 9557 Format

`PlainDate` Objekte können mit dem [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag signalisiert anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional die Zeit, den Offset und die Zeitzonenkennung in demselben Format wie beim [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) angeben, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]` Format werden ebenfalls ignoriert, und sie dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag hinzugefügt werden soll.

### Ungültige Datumsbeschränkung

Die {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} Methoden und ihre Gegenstücke in anderen `Temporal` Objekten ermöglichen den Aufbau von Daten mit kalenderspezifischen Eigenschaften. Die Datumskomponenten können außerhalb des Bereichs liegen. Im ISO-Kalender ist dies immer ein _Überlauf_, wie z.B. der Monat ist größer als 12 oder der Tag ist größer als die Anzahl der Tage, und die Korrektur würde nur das Clamping des Wertes auf den maximal zulässigen Wert erfordern. In anderen Kalendern kann der ungültige Fall komplexer sein. Bei Verwendung der Option `overflow: "constrain"` werden ungültige Daten auf folgende Weise behoben:

- Wenn der Tag nicht existiert, der Monat jedoch: Wählen Sie den nächstgelegenen Tag im gleichen Monat. Wenn es zwei gleich nahegelegene Daten in diesem Monat gibt, wählen Sie das spätere.
- Wenn der Monat ein Schaltmonat ist, der im Jahr nicht existiert: Wählen Sie ein anderes Datum gemäß den kulturellen Konventionen der Benutzer dieses Kalenders. Dies führt in der Regel zum gleichen Tag im Monat davor oder danach, wo dieser Monat normalerweise in einem Schaltjahr fällt.
- Wenn der Monat aus anderen Gründen im Jahr nicht existiert: Wählen Sie das nächstgelegene Datum, das noch im selben Jahr liegt. Wenn es zwei gleich nahegelegene Daten in diesem Jahr gibt, wählen Sie das spätere.
- Wenn das gesamte Jahr nicht existiert: Wählen Sie das nächstgelegene Datum in einem anderen Jahr. Wenn es zwei gleich nahegelegene Daten gibt, wählen Sie das spätere.

## Konstruktor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDate` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor dem zweiten Datum liegt, mit ihm identisch ist oder danach kommt. Entspricht dem Vergleich der Jahr-, Monat- und Tagesfelder der zugrundeliegenden ISO 8601-Daten.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
  - : Erstellt ein neues `Temporal.PlainDate` Objekt aus einem anderen `Temporal.PlainDate` Objekt, einem Objekt mit Datumseigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDate.prototype` definiert und werden von allen `Temporal.PlainDate` Instanzen geteilt.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainDate` Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} Konstruktor.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Monat dieses Datums darstellt, was derselbe Tag ist, den Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex in der Woche dieses Datums darstellt. Die Tage in einer Woche sind fortlaufend von `1` bis {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, selbst wenn Lokale, die den Kalender verwenden, möglicherweise einen anderen Tag als ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1` und der letzte Tag ist der {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
  - : Gibt einen kalenderspezifischen Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen eine Jahreszahl in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
  - : Gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0 und die Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` identifizieren zusammen eine Jahreszahl in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (durch einen Schalttag oder einen Schaltmonat) als ein gewöhnliches Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1` und der letzte Monat ist der {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}}, der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit dem gleichen {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} unterschiedliche `month` Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es variieren.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden können.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche mitten im Jahr liegt, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Ära.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit dem {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich das `yearOfWeek` um 1 unterscheiden kann.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainDate"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum darstellt, verschoben um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann).
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieses Datum in seinem Wert einem anderen Datum entspricht (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} umgewandelt werden kann), und `false` andernfalls. Sie werden sowohl durch ihre Datumswerte als auch ihre Kalender verglichen.
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} umgewandelt werden kann) zu diesem Datum darstellt. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum darstellt, rückwärts verschoben um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann).
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
  - : Gibt einen String zurück, der dieses Datum im selben [RFC 9557 Format](#rfc_9557_format) wie beim Aufrufen von {{jsxref("Temporal/PlainDate/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
  - : Gibt einen String zurück, der eine sprachsensitive Darstellung dieses Datums enthält.
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das dieses Datum und eine bereitgestellte Zeit im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainMonthDay")}} Objekt zurück, das die {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainYearMonth")}} Objekt zurück, das die {{jsxref("Temporal/PlainDate/year", "year")}} und {{jsxref("Temporal/PlainDate/month", "month")}} dieses Datums im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
  - : Gibt einen String zurück, der dieses Datum im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}} Objekt zurück, das dieses Datum, eine bereitgestellte Zeit und eine bereitgestellte Zeitzone im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum zu einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} umgewandelt werden kann) darstellt. Die Dauer ist positiv, wenn das andere Datum nach diesem Datum ist, und negativ, wenn es davor ist.
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDate` Instanzen [implizit in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum im neuen Kalendersystem interpretiert.

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
