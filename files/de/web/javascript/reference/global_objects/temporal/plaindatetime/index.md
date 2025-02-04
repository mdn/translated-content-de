---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainDateTime`** Objekt repräsentiert ein Datum (Kalenderdatum) und eine Uhrzeit (Ortszeit) ohne Zeitzone. Es wird grundsätzlich als Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem dazugehörigen Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.

## Beschreibung

Ein `PlainDateTime` ist im Wesentlichen die Kombination aus einem {{jsxref("Temporal.PlainDate")}} und einem {{jsxref("Temporal.PlainTime")}}. Da die Datums- und Zeitinformationen weitgehend unabhängig voneinander sind, sind alle allgemeinen Informationen zu Datumseigenschaften im `PlainDate`-Objekt dokumentiert und alle allgemeinen Informationen zu Zeiteigenschaften im `PlainTime`-Objekt.

Falls das Datum-Zeit einen spezifischen Moment repräsentiert, der über Zeitzonen hinweg invariant bleiben soll, sollten Sie stattdessen das {{jsxref("Temporal.ZonedDateTime")}} Objekt verwenden. Verwenden Sie `PlainDateTime`, wenn Sie ein Ereignis darstellen müssen, das zu einer bestimmten Ortszeit stattfindet, die in verschiedenen Zeitzonen ein anderer Moment sein kann.

### RFC 9557 Format

`PlainDateTime` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format serialisiert und geparst werden, eine Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats. Der String hat folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Zeit Trennzeichen, welcher `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit in einer von drei Formen vorliegen kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag besagt im Allgemeinen anderen Systemen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalender-Anmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ein ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional den Offset und die Zeitzonenkennung einfügen, im gleichen Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), aber sie werden ignoriert. Beachten Sie, dass der Offset _nicht_ `Z` sein darf. Andere Anmerkungen im `[key=value]` Format werden ebenfalls ignoriert und dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie die Bruchteile der Sekunde, ob die Kalender-ID angezeigt wird, und ob ein kritisches Flag hinzugefügt werden soll, konfigurieren.

## Konstruktor

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDateTime` Objekt, indem die zugrundeliegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Zeit vor, gleich oder nach der zweiten Datum-Zeit liegt. Entspricht dem ersten Vergleich ihrer Daten und dann ihrem Zeiten, falls die Daten gleich sind.
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDateTime` Objekt aus einem anderen `Temporal.PlainDateTime` Objekt, einem Objekt mit Datums- und Zeiteigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDateTime.prototype` definiert und werden von allen `Temporal.PlainDateTime` Instanzen geteilt.

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO 8601 Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainDateTime` Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} Konstruktor.
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Monat dieses Datums darstellt, welcher die gleiche Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt allgemein bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex in der Woche dieses Datums darstellt. Tage in einer Woche sind nacheinander von `1` bis {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen entspricht. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert in der Regel Montag im Kalender, auch wenn Regionen, die den Kalender verwenden, einen anderen Tag als den ersten Tag der Woche betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO 8601 Kalender beträgt diese immer 7, aber in anderen Kalendersystemen kann sie von Woche zu Woche variieren.
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind das 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen Kleinbuchstaben-String zurück, der die Epoche dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf die gleiche Weise wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Epoche darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Epoche können mit der Zeit abnehmen (z.B. Gregorianische BCE). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf die gleiche Weise wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttages oder Schaltmonats) als ein gewöhnliches Jahr hat. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1` und der letzte Monat ist der {{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}} unterschiedliche `month` Indizes für unterschiedliche Jahre haben.
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist es `M` plus einer zweistelligen Monatsnummer. Bei Schaltmonaten ist es der Code des vorhergehenden Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO 8601 Kalender beträgt diese immer 12, aber in anderen Kalendersystemen kann sie unterschiedlich sein.
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des folgenden Jahres zugeschrieben werden können.
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epoche-Jahres darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist Jahr 1 entweder das erste Jahr der neuesten Epoche oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, wird dieses Jahr denselben Wert vor und nach dem Startdatum der Epoche haben.
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des folgenden Jahres zugeschrieben werden, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, welches dieses Datum-Zeit darstellt, das um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) vorwärts bewegt wurde.
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieses Datum-Zeit im Wert gleich einem anderen Datum-Zeit ist (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} umgewandelt werden kann), andernfalls `false`. Sie werden sowohl nach ihren Datums- als auch nach ihren Zeitwerten und ihren Kalendern verglichen, sodass zwei Datum-Zeiten aus verschiedenen Kalendern möglicherweise als gleich durch {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} angesehen werden können, aber nicht durch `equals()`.
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Zeit darstellt, welches auf die gegebene Einheit gerundet ist.
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, welches die Dauer von einem anderen Datum-Zeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} umgewandelt werden kann) zu diesem Datum-Zeit darstellt. Die Dauer ist positiv, wenn das andere Datum-Zeit vor diesem Datum-Zeit liegt, und negativ, wenn es nach diesem Datum-Zeit liegt.
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, welches dieses Datum-Zeit darstellt, das um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) rückwärts bewegt wurde.
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum-Zeit im selben [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/PlainDateTime/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String zurück mit einer sprachsensiblen Darstellung dieses Datum-Zeit.
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, welches den Datumsteil (Jahr, Monat, Tag) dieses Datum-Zeit im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}} Objekt zurück, welches den Zeitteil (Stunde, Minute, Sekunde und Untersekundenkomponenten) dieses Datum-Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum-Zeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Gibt eine neue {{jsxref("Temporal.ZonedDateTime")}} Instanz zurück, die dasselbe Datum-Zeit wie dieses einfache Datum-Zeit darstellt, jedoch in der angegebenen Zeitzone.
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, welches die Dauer von diesem Datum-Zeit zu einem anderen Datum-Zeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} umgewandelt werden kann) darstellt. Die Dauer ist positiv, wenn das andere Datum-Zeit nach diesem Datum-Zeit liegt, und negativ, wenn es vor diesem Datum-Zeit liegt.
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.PlainDateTime` Instanzen implizit zu Primitiven konvertiert werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, welches dieses Datum-Zeit darstellt, bei dem einige Felder durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, welches dieses Datum-Zeit darstellt, das im neuen Kalendersystem interpretiert wird.
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime` Objekt zurück, welches dieses Datum-Zeit darstellt, bei dem der Zeitteil durch die neue Zeit (in einer Form, die durch {{jsxref("Temporal.PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann) vollständig ersetzt wurde.

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
