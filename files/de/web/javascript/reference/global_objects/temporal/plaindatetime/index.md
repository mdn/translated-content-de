---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal.PlainDateTime`** Objekt repräsentiert ein Datum (Kalenderdatum) und eine Zeit (Uhrzeit) ohne Zeitzone. Es wird im Wesentlichen als Kombination eines [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugehörigen Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.

## Beschreibung

Ein `PlainDateTime` ist im Wesentlichen die Kombination eines {{jsxref("Temporal.PlainDate")}} und eines {{jsxref("Temporal.PlainTime")}}. Da die Informationen über Datum und Uhrzeit wenig miteinander interagieren, sind alle allgemeinen Informationen über Datumsangaben im `PlainDate` Objekt dokumentiert, und alle allgemeinen Informationen über Uhrzeiteigenschaften sind im `PlainTime` Objekt dokumentiert.

Falls das Datum-Uhrzeit einen spezifischen Zeitpunkt repräsentiert, der über Zeitzonen hinweg unveränderlich bleiben soll, sollten Sie das {{jsxref("Temporal.ZonedDateTime")}} Objekt verwenden. Nutzen Sie `PlainDateTime`, wenn Sie ein Ereignis repräsentieren müssen, das zu einer bestimmten Uhrzeit stattfindet, aber in verschiedenen Zeitzonen ein anderer Zeitpunkt sein kann.

### RFC 9557 Format

`PlainDateTime` Objekte können unter Verwendung des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können mit `-` oder ohne Trennzeichen getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Separator, der `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional gefolgt von einem `.` oder `,` und einer bis neun Ziffern sein. Standardmäßig `00`. Die `HH`, `mm`, und `ss` Komponenten können mit `:` oder ohne Trennzeichen getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Uhrzeit in einer von drei Formen sein kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag weist allgemein andere Systeme darauf hin, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Der `Temporal` Parser wird einen Fehler werfen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional den Offset und die Zeitzone-Identifikator enthalten, im selben Format wie bei [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), aber sie werden ignoriert. Beachten Sie, dass der Offset _nicht_ `Z` sein darf. Andere Anmerkungen im `[key=value]` Format werden ebenfalls ignoriert und dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie die Bruchteile von Sekunden, das Anzeigen der Kalender-ID und das Hinzufügen eines kritischen Flags dafür konfigurieren.

## Konstruktor

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDateTime` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum-Uhrzeit vor dem zweiten Datum-Uhrzeit liegt, das gleiche oder danach liegt. Entspricht zuerst dem Vergleich ihrer Daten, dann dem Vergleich ihrer Uhrzeiten, wenn die Daten gleich sind.
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
  - : Erstellt ein neues `Temporal.PlainDateTime` Objekt aus einem anderen `Temporal.PlainDateTime` Objekt, einem Objekt mit Datums- und Uhrzeiteigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDateTime.prototype` definiert und werden von allen `Temporal.PlainDateTime` Instanzen geteilt.

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO 8601 Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainDateTime` Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} Konstruktor.
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, was der gleiche Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche sind fortlaufend von `1` bis {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert typischerweise Montag im Kalender, auch wenn Lokale, die den Kalender verwenden, einen anderen Tag als ersten Wochentag betrachten könnten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind das immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche variieren.
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind das 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
  - : Gibt einen speziell für den Kalender festgelegten Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Äras verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den Gregorianischen Kalender ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Äras verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisches v. Chr.). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}}
  - : Gibt einen Boolean zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttags oder Schaltmonats) als ein gewöhnliches Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}}, der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit demselben {{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}} unterschiedliche `month` Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
  - : Gibt einen spezifisch für den Kalender festgelegten String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus einer zweistelligen Monatsnummer. Für Schaltmonate ist es der vorherige Monatscode gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es immer 12, aber in anderen Kalendersystemen kann es differieren.
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden können.
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist das Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr den gleichen Wert vor und nach dem Startdatum der Ära.
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist das das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, was dazu führt, dass das `yearOfWeek` um 1 abweicht.
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Uhrzeit um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben darstellt.
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieses Datum-Uhrzeit einem anderen Datum-Uhrzeit gleichwertig ist (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Datum- und Uhrzeitwerten als auch ihren Kalendern verglichen, sodass zwei Datums-Uhrzeiten aus verschiedenen Kalendern von {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich angesehen, aber nicht von `equals()` sein können.
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Uhrzeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist) zu diesem Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn das andere Datum-Uhrzeit vor diesem Datum-Uhrzeit liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Uhrzeit um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach hinten verschoben darstellt.
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
  - : Gibt einen String zurück, der dieses Datum-Uhrzeit im gleichen [RFC 9557 Format](#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/PlainDateTime/toString", "toString()")}}. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Datum-Uhrzeit zurück.
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das den Datumsanteil (Jahr, Monat, Tag) dieses Datum-Uhrzeit im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}} Objekt zurück, das den Zeitanteil (Stunde, Minute, Sekunde und Teilsekundenkomponenten) dieses Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
  - : Gibt einen String zurück, der dieses Datum-Uhrzeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
  - : Gibt eine neue {{jsxref("Temporal.ZonedDateTime")}} Instanz zurück, die das gleiche Datum-Uhrzeit wie dieses einfache Datum-Uhrzeit darstellt, jedoch in der angegebenen Zeitzone.
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum-Uhrzeit zu einem anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn das andere Datum-Uhrzeit nach diesem Datum-Uhrzeit liegt, und negativ, wenn es vorher liegt.
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDateTime` Instanzen [implizit zu Primitiven konvertiert werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Uhrzeit mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Uhrzeit mit dem vollständig durch die neue Uhrzeit ersetzten Zeitanteil (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
