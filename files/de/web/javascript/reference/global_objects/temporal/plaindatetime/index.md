---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Das **`Temporal.PlainDateTime`**-Objekt repräsentiert ein Datum (Kalenderdatum) und eine Uhrzeit (Wanduhrzeit) ohne Zeitzone. Es wird im Wesentlichen als eine Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugeordneten Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.

## Beschreibung

Ein `PlainDateTime` ist im Wesentlichen die Kombination aus einem {{jsxref("Temporal.PlainDate")}} und einem {{jsxref("Temporal.PlainTime")}}. Da die Informationen über Datum und Uhrzeit wenig miteinander interagieren, sind alle allgemeinen Informationen über Datumseigenschaften im `PlainDate`-Objekt dokumentiert und alle allgemeinen Informationen über Uhrzeiteigenschaften im `PlainTime`-Objekt.

Wenn das Datum und die Uhrzeit einen bestimmten Moment darstellen, der über Zeitzonen hinweg unveränderlich bleiben soll, sollten Sie stattdessen das {{jsxref("Temporal.ZonedDateTime")}}-Objekt verwenden. Verwenden Sie `PlainDateTime`, wenn Sie ein Ereignis darstellen müssen, das zu einer bestimmten Wanduhrzeit stattfindet, die in verschiedenen Zeitzonen ein anderer Moment sein kann.

### RFC 9557 Format

`PlainDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und analysiert werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt sein.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Trennzeichen, das `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standard ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standard ist `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder nichts getrennt sein. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Uhrzeit eine der drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der allgemein unterstützten Kalendertypen. Standard ist `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag weist andere Systeme im Allgemeinen darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler ausgeben, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional den Versatz und die Zeitzonenkennung im gleichen Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) einschließen, aber sie werden ignoriert. Beachten Sie, dass der Versatz _nicht_ `Z` sein darf. Andere Anmerkungen im Format `[key=value]` werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekundenziffern konfigurieren, ob die Kalender-ID angezeigt werden soll und ob dafür ein kritisches Flag hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDateTime`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Uhrzeit vor, gleich oder nach der zweiten Datum-Uhrzeit ist. Entspricht zuerst dem Vergleich ihrer Daten und dann dem Vergleich ihrer Uhrzeiten, wenn die Daten gleich sind.
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDateTime`-Objekt aus einem anderen `Temporal.PlainDateTime`-Objekt, einem Objekt mit Daten- und Uhrzeiteigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDateTime.prototype` definiert und werden von allen `Temporal.PlainDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Bei `Temporal.PlainDateTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Monat dieses Datums darstellt, was derselbe Tag ist, den Sie im Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt in der Regel bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex in der Woche dieses Datums darstellt. Tage in einer Woche sind fortlaufend von `1` bis {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, auch wenn Kalender, die das Kalendersystem verwenden, möglicherweise einen anderen Tag als den ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche variieren.
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen Kleinbuchstaben-String zurück, der die Ära dieses Datums repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise, wie es `year` tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahr-Index beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise, wie es `year` tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schaltjahrestags oder Schaltmonats) als ein gemeinsames Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index auf 1 basiert. Wenn der Kalender Schaltmonate hat, dann können die Monate mit dem gleichen {{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}} in verschiedenen Jahren unterschiedliche `month`-Indexe haben.
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatsnummer. Bei Schaltmonaten ist es der vorherige Monatscode, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es abweichen.
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres möglicherweise der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden.
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr vor und nach dem Startdatum der Ära denselben Wert.
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum-Uhrzeit um eine gegebene Dauer nach vorne verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit in Bezug auf eine andere Datum-Uhrzeit gleichwertig ist (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} umwandelbar ist), andernfalls `false`. Sie werden sowohl nach ihren Daten- und Uhrzeitwerten als auch nach ihren Kalendern verglichen, sodass zwei Datum-Uhrzeiten aus verschiedenen Kalendern möglicherweise von {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich angesehen werden, aber nicht von `equals()`.
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum-Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} umwandelbar ist) zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit liegt, und negativ, wenn danach.
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum-Uhrzeit um eine gegebene Dauer rückwärts verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im gleichen [RFC 9557 Format](#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/PlainDateTime/toString", "toString()")}}. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil (Jahr, Monat, Tag) dieser Datum-Uhrzeit im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Uhrzeitsanteil (Stunde, Minute, Sekunde und Untersekundenkomponenten) dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum-Uhrzeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Gibt eine neue {{jsxref("Temporal.ZonedDateTime")}}-Instanz zurück, die dieselbe Datum-Uhrzeit wie dieses einfache Datum-Uhrzeit, aber in der angegebenen Zeitzone darstellt.
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit zu einer anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} umwandelbar ist) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit liegt, und negativ, wenn davor.
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDateTime`-Instanzen [implizit in primitive Werte konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diese Datum-Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit dem Uhrzeitsanteil vollständig durch die neue Uhrzeit ersetzt darstellt (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umwandelbar ist).

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
