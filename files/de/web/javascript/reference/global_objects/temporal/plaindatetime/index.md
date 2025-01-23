---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainDateTime`**-Objekt repräsentiert ein Datum (Kalenderdatum) und eine Uhrzeit (Wanduhrzeit) ohne Zeitzone. Es wird grundsätzlich als Kombination eines [Datums](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugehörigen Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.

## Beschreibung

Ein `PlainDateTime` ist im Wesentlichen die Kombination aus einem {{jsxref("Temporal.PlainDate")}} und einem {{jsxref("Temporal.PlainTime")}}. Da Datum und Uhrzeit nicht viel interagieren, sind alle allgemeinen Informationen zu Datums-Eigenschaften im `PlainDate`-Objekt dokumentiert und alle allgemeinen Informationen zu Zeit-Eigenschaften im `PlainTime`-Objekt.

Wenn das Datum und die Uhrzeit einen bestimmten Zeitpunkt repräsentieren, der über Zeitzonen hinweg unverändert bleiben soll, sollten Sie stattdessen das {{jsxref("Temporal.ZonedDateTime")}}-Objekt verwenden. Verwenden Sie `PlainDateTime`, wenn Sie ein Ereignis darstellen müssen, das zu einer bestimmten Uhrzeit passiert, die in verschiedenen Zeitzonen zu unterschiedlichen Zeitpunkten sein kann.

### RFC 9557-Format

`PlainDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, eine Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datums-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und ein bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den Kalender, der verwendet werden soll. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional den Offset und die Zeitzonenkennung im gleichen Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) einschließen, aber sie werden ignoriert. Beachten Sie, dass der Offset _nicht_ `Z` sein darf. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteilstellentang von Sekunden, ob die Kalender-ID angezeigt wird, und ob ein kritisches Flag hinzugefügt wird, konfigurieren.

## Konstruktor

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} {{experimental_inline}}
  - : Erzeugt ein neues `Temporal.PlainDateTime`-Objekt, indem direkt die zugrunde liegenden Daten bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück (-1, 0 oder 1), die angibt, ob das erste Datum vor, gleich oder nach dem zweiten Datum liegt. Entspricht zuerst dem Vergleich ihrer Daten und dann, falls die Daten gleich sind, dem Vergleich ihrer Zeiten.
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} {{experimental_inline}}
  - : Erzeugt ein neues `Temporal.PlainDateTime`-Objekt aus einem anderen `Temporal.PlainDateTime`-Objekt, einem Objekt mit Datums- und Zeiteigenschaften oder einem [RFC 9557](#rfc_9557-format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDateTime.prototype` definiert und werden von allen `Temporal.PlainDateTime`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Temporal.PlainDateTime`-Instanzen ist der anfängliche Wert der {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf 1 basierenden Tagesindex im Monat dieses Datums darstellt, der die gleiche Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf 1 basierenden Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche werden fortlaufend von `1` bis {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, auch wenn Kalender, die den Kalender verwenden, einen anderen Tag als ersten Wochentag betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf 1 basierenden Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche variieren.
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen Kleinbuchstabenstring zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. [Kalender]-abhängig. Für den Gregorianischen Kalender ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisches v. Chr.). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. [Kalender]-abhängig.
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttages oder Schaltmonats) als ein Gemeinjahr hat. [Kalender]-abhängig.
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf 1 basierenden Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. [Kalender]-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}}, der Index auf 1 basiert. Wenn der Kalender Schaltmonate hat, kann der Monat mit dem gleichen {{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender]-abhängig. Üblicherweise ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender]-abhängig. Für den ISO 8601-Kalender sind dies immer 12, aber in anderen Kalendersystemen kann es abweichen.
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf 1 basierenden Wochenindex im {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender]-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugerechnet werden können.
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums im Verhältnis zum Beginn eines kalenderspezifischen Epoch-Jahres darstellt. [Kalender]-abhängig. Üblicherweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres ist, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Ära.
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}} dieses Datums kombiniert wird, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. [Kalender]-abhängig. Üblicherweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugerechnet werden, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum und diese Zeit um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) verschoben darstellt.
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieses Datum und diese Zeit einem anderen Datum und einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist) im Wert gleichwertig sind, und `false` andernfalls. Sie werden sowohl nach ihren Datums- als auch Zeitwerten und ihren Kalendern verglichen, sodass zwei Datum-Uhrenzeiten aus verschiedenen Kalendern von {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich angesehen werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum und diese Zeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist) zu diesem Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn das andere Datum-Uhrzeit vor diesem Datum-Uhrzeit liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum und diese Zeit um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben darstellt.
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum und diese Zeit im gleichen [RFC 9557-Format](#rfc_9557-format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainDateTime/toString", "toString()")}}. Beabsichtigt zur impliziten Verwendung durch {{jsxref("JSON.stringify()")}}.
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieses Datum-Uhrzeit-Paares zurück.
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsteil (Jahr, Monat, Tag) dieses Datum-Uhrzeit-Paares im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitteil (Stunde, Minute, Sekunde und Untersekundenkomponenten) dieses Datum-Uhrzeit-Paares darstellt.
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum und diese Zeit im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Gibt eine neue {{jsxref("Temporal.ZonedDateTime")}}-Instanz zurück, die dasselbe Datum und dieselbe Zeit wie dieses einfache Datum-Uhrzeit-Paar darstellt, jedoch in der angegebenen Zeitzone.
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum und dieser Zeit zu einem anderen Datum und einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn das andere Datum und die andere Zeit nach diesem Datum und dieser Zeit liegen, und negativ, wenn sie davor liegen.
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.PlainDateTime`-Instanzen [implizit in primitive Werte konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit einigen Feldern repräsentiert, die durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum-Uhrzeit-Paar im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum-Uhrzeit-Paar mit dem Zeitteil vollständig durch die neue Zeit ersetzt darstellt (in einer Form, die durch {{jsxref("Temporal.PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist).

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
