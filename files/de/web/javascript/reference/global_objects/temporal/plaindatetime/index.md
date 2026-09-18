---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Das **`Temporal.PlainDateTime`**-Objekt stellt ein Datum (Kalenderdatum) und eine Uhrzeit (Wandzeit) ohne Zeitzone dar. Es wird grundsätzlich als Kombination eines [Datums](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugeordneten Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.

## Beschreibung

Ein `PlainDateTime` ist im Wesentlichen die Kombination aus einem {{jsxref("Temporal.PlainDate")}} und einer {{jsxref("Temporal.PlainTime")}}. Da die Datums- und Zeitinformationen kaum miteinander interagieren, werden alle allgemeinen Informationen über Datumseigenschaften im `PlainDate`-Objekt und alle allgemeinen Informationen über Zeiteigenschaften im `PlainTime`-Objekt dokumentiert.

Wenn das Datum mit Uhrzeit einen bestimmten Zeitpunkt darstellt, der über Zeitzonen hinweg unverändert bleiben soll, sollten Sie stattdessen das {{jsxref("Temporal.ZonedDateTime")}}-Objekt verwenden. Verwenden Sie `PlainDateTime`, wenn Sie ein Ereignis darstellen müssen, das zu einer bestimmten Wandzeit stattfindet und in verschiedenen Zeitzonen unterschiedliche Zeitpunkte sein kann.

### RFC-9557-Format

`PlainDateTime`-Objekte können mithilfe des [RFC-9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats serialisiert und geparst werden, einer Erweiterung des Formats [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). Die Zeichenfolge hat folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten in der tatsächlichen Zeichenfolge nicht enthalten sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` getrennt werden oder ohne Trennzeichen stehen.
- `T` {{optional_inline}}
  - : Das Datum-Uhrzeit-Trennzeichen, das `T`, `t` oder ein Leerzeichen sein kann. Ist genau dann vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Der Standardwert ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Der Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Optional kann darauf ein `.` oder `,` und eine bis neun Ziffern folgen. Der Standardwert ist `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` getrennt werden oder ohne Trennzeichen stehen. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` auslassen, sodass die Uhrzeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem dem Schlüssel ein `!` vorangestellt wird: beispielsweise `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser löst einen Fehler aus, wenn die Annotationen zwei oder mehr Kalenderannotation enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als Kalenderdatum nach ISO 8601 interpretiert und anschließend in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional den Offset und den Zeitzonenbezeichner im selben Format wie bei [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) einschließen, sie werden jedoch ignoriert. Beachten Sie, dass der Offset _nicht_ `Z` sein darf. Andere Annotationen im Format `[key=value]` werden ebenfalls ignoriert und dürfen kein kritisches Flag haben.

Beim Serialisieren können Sie die Ziffern für Sekundenbruchteile, die Anzeige der Kalender-ID sowie das Hinzufügen eines kritischen Flags dafür konfigurieren.

## Konstruktor

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}
  - : Erstellt ein neues `Temporal.PlainDateTime`-Objekt durch direktes Bereitstellen der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum mit Uhrzeit vor dem zweiten liegt, mit ihm identisch ist oder nach ihm liegt. Entspricht dem zunächst erfolgenden Vergleich ihrer Daten und, falls die Daten gleich sind, dem Vergleich ihrer Uhrzeiten.
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
  - : Erstellt ein neues `Temporal.PlainDateTime`-Objekt aus einem anderen `Temporal.PlainDateTime`-Objekt, einem Objekt mit Datums- und Zeiteigenschaften oder einer [RFC-9557](#rfc-9557-format)-Zeichenfolge.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDateTime.prototype` definiert und werden von allen `Temporal.PlainDateTime`-Instanzen gemeinsam verwendet.

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}}
  - : Gibt eine Zeichenfolge zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO-8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainDateTime`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}.
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex im Monat dieses Datums darstellt; dies ist dieselbe Tagesnummer, die Sie in einem Kalender sehen würden. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beginnt im Allgemeinen bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche werden fortlaufend von `1` bis {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen entspricht. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). 1 steht im Kalender üblicherweise für Montag, selbst wenn Gebietsschemata, die den Kalender verwenden, einen anderen Tag als ersten Tag der Woche ansehen (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender ist dies immer 7, in anderen Kalendersystemen kann es jedoch von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender beträgt diese Zahl 365 beziehungsweise 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
  - : Gibt eine kalenderspezifische Zeichenfolge in Kleinbuchstaben zurück, die die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren gemeinsam ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den gregorianischen Kalender lautet sie entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
  - : Gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt üblicherweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z. B. Gregorian BCE). `era` und `eraYear` identifizieren gemeinsam ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das aufgrund eines Schalttags oder Schaltmonats mehr Tage als ein gewöhnliches Jahr hat. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunden) dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunden) dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist {{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass der Index im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} bei 1 beginnt. Wenn der Kalender Schaltmonate hat, kann der Monat mit demselben {{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}} für verschiedene Jahre unterschiedliche `month`-Indizes haben.
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
  - : Gibt eine kalenderspezifische Zeichenfolge zurück, die den Monat dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise besteht sie aus `M` plus einer zweistelligen Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender ist dies immer 12, in anderen Kalendersystemen kann es jedoch unterschiedlich sein.
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunden) dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Wochenindex im {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem besitzt. Die erste Woche des Jahres ist `1`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass bei ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden können.
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist Jahr 1 entweder das erste Jahr der jüngsten Ära oder das ISO-8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr vor und nach dem Startdatum der Ära denselben Wert.
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit {{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}} dieses Datums kombiniert wird, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem besitzt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist dies das Jahr des Datums, aber bei ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich `yearOfWeek` um 1 unterscheiden kann.
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Temporal.PlainDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum mit Uhrzeit darstellt, nachdem es um eine bestimmte Dauer nach vorne verschoben wurde (in einer durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbaren Form).
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieses Datum mit Uhrzeit wertmäßig einem anderen Datum mit Uhrzeit entspricht (in einer durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbaren Form), andernfalls `false`. Sowohl ihre Datums- und Zeitwerte als auch ihre Kalender werden verglichen. Daher können zwei Datum-Uhrzeit-Werte aus unterschiedlichen Kalendern von {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich angesehen werden, aber nicht von `equals()`.
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum mit Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum mit Uhrzeit (in einer durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbaren Form) bis zu diesem Datum mit Uhrzeit darstellt. Die Dauer ist positiv, wenn das andere Datum mit Uhrzeit vor diesem Datum mit Uhrzeit liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum mit Uhrzeit darstellt, nachdem es um eine bestimmte Dauer nach hinten verschoben wurde (in einer durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbaren Form).
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
  - : Gibt eine Zeichenfolge zurück, die dieses Datum mit Uhrzeit im selben [RFC-9557-Format](#rfc-9557-format) wie ein Aufruf von {{jsxref("Temporal/PlainDateTime/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer sprachabhängigen Darstellung dieses Datums mit Uhrzeit zurück.
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsteil (Jahr, Monat, Tag) dieses Datums mit Uhrzeit im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitteil (Stunde, Minute, Sekunde und Teilsekundenkomponenten) dieses Datums mit Uhrzeit darstellt.
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die dieses Datum mit Uhrzeit im [RFC-9557-Format](#rfc-9557-format) darstellt.
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
  - : Gibt eine neue {{jsxref("Temporal.ZonedDateTime")}}-Instanz zurück, die dasselbe Datum mit Uhrzeit wie dieses einfache Datum mit Uhrzeit darstellt, jedoch in der angegebenen Zeitzone.
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum mit Uhrzeit bis zu einem anderen Datum mit Uhrzeit darstellt (in einer durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbaren Form). Die Dauer ist positiv, wenn das andere Datum mit Uhrzeit nach diesem Datum mit Uhrzeit liegt, und negativ, wenn es davor liegt.
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, wodurch verhindert wird, dass `Temporal.PlainDateTime`-Instanzen bei der Verwendung in arithmetischen Operationen oder Vergleichsoperationen [implizit in primitive Werte konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum mit Uhrzeit darstellt, wobei einige Felder durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum mit Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum mit Uhrzeit darstellt, wobei der Zeitteil vollständig durch die neue Uhrzeit ersetzt wurde (in einer durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbaren Form).

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
