---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Das **`Temporal.PlainDate`**-Objekt repräsentiert ein Kalenderdatum (ein Datum ohne Uhrzeit oder Zeitzone); beispielsweise ein Ereignis in einem Kalender, das den ganzen Tag über stattfindet, unabhängig davon, in welcher Zeitzone es stattfindet. Es wird grundsätzlich als ISO-8601-Kalenderdatum mit Feldern für Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem dargestellt.

## Beschreibung

Ein `PlainDate` ist im Wesentlichen der Datumsteil eines {{jsxref("Temporal.PlainDateTime")}}-Objekts, aus dem die Zeitinformationen entfernt wurden. Da die Datums- und Zeitinformationen kaum miteinander interagieren, werden hier alle allgemeinen Informationen über Datumseigenschaften dokumentiert.

### RFC-9557-Format

`PlainDate`-Objekte können mit dem [RFC-9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, einer Erweiterung des Formats [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). Die Zeichenfolge hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten in der tatsächlichen Zeichenfolge nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder gar nicht getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Standardmäßig wird `[u-ca=iso8601]` verwendet. Kann durch Voranstellen von `!` vor dem Schlüssel ein _critical flag_ haben: beispielsweise `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Der `Temporal`-Parser löst einen Fehler aus, wenn die Annotationen zwei oder mehr Kalenderannotationen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO-8601-Kalenderdatum interpretiert und anschließend in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Uhrzeit, den Offset und die Zeitzonenkennung im selben Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) angeben, sie werden jedoch ignoriert. Andere Annotationen im Format `[key=value]` werden ebenfalls ignoriert und dürfen kein kritisches Flag haben.

Bei der Serialisierung können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob dafür ein kritisches Flag hinzugefügt werden soll.

### Begrenzung ungültiger Daten

Die Methoden {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} sowie ihre Entsprechungen in anderen `Temporal`-Objekten ermöglichen das Erstellen von Daten mithilfe kalenderspezifischer Eigenschaften. Die Datumskomponenten können außerhalb des gültigen Bereichs liegen. Im ISO-Kalender ist dies immer ein _overflow_, etwa wenn der Monat größer als 12 oder der Tag größer als die Anzahl der Tage ist, und die Korrektur würde lediglich darin bestehen, den Wert auf den maximal zulässigen Wert zu begrenzen. In anderen Kalendern kann der ungültige Fall komplexer sein. Bei Verwendung der Option `overflow: "constrain"` werden ungültige Daten folgendermaßen in gültige korrigiert:

- Wenn der Tag nicht existiert, der Monat aber schon: Wählen Sie den nächstgelegenen Tag im selben Monat. Wenn es in diesem Monat zwei gleich nahe Daten gibt, wählen Sie das spätere.
- Wenn der Monat ein Schaltmonat ist, der im Jahr nicht existiert: Wählen Sie ein anderes Datum entsprechend den kulturellen Konventionen der Benutzer dieses Kalenders. In der Regel ergibt dies denselben Tag im Monat vor oder nach der Stelle, an der dieser Monat in einem Schaltjahr normalerweise liegen würde.
- Wenn der Monat aus anderen Gründen im Jahr nicht existiert: Wählen Sie das nächstgelegene Datum, das sich noch im selben Jahr befindet. Wenn es in diesem Jahr zwei gleich nahe Daten gibt, wählen Sie das spätere.
- Wenn das gesamte Jahr nicht existiert: Wählen Sie das nächstgelegene Datum in einem anderen Jahr. Wenn es zwei gleich nahe Daten gibt, wählen Sie das spätere.

## Konstruktor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}
  - : Erstellt ein neues `Temporal.PlainDate`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor dem zweiten Datum liegt, gleich diesem ist oder danach liegt. Entspricht dem Vergleichen der Felder für Jahr, Monat und Tag der zugrunde liegenden ISO-8601-Daten.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
  - : Erstellt ein neues `Temporal.PlainDate`-Objekt aus einem anderen `Temporal.PlainDate`-Objekt, einem Objekt mit Datumseigenschaften oder einer [RFC-9557](#rfc-9557-format)-Zeichenfolge.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDate.prototype` definiert und werden von allen `Temporal.PlainDate`-Instanzen gemeinsam verwendet.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
  - : Gibt eine Zeichenfolge zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO-8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainDate`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex im Monat dieses Datums repräsentiert, also dieselbe Tagesnummer, die Sie in einem Kalender sehen würden. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beginnt im Allgemeinen bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex in der Woche dieses Datums repräsentiert. Die Tage einer Woche werden fortlaufend von `1` bis {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). 1 repräsentiert im Kalender üblicherweise Montag, auch wenn Gebietsschemas, die den Kalender verwenden, möglicherweise einen anderen Tag als ersten Wochentag betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex im Jahr dieses Datums repräsentiert. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender ist dies immer 7, in anderen Kalendersystemen kann sie jedoch von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender beträgt sie 365 beziehungsweise 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
  - : Gibt eine kalenderspezifische Zeichenfolge in Kleinbuchstaben zurück, die die Ära dieses Datums repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ebenso wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den gregorianischen Kalender ist dies entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
  - : Gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt üblicherweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z. B. Gregorian BCE). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ebenso wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat als ein gewöhnliches Jahr, etwa aufgrund eines Schalttags oder Schaltmonats. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Monatsindex im Jahr dieses Datums repräsentiert. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass der Index anders als bei {{jsxref("Date.prototype.getMonth()")}} bei 1 beginnt. Wenn der Kalender Schaltmonate hat, kann der Monat mit demselben {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} für verschiedene Jahre unterschiedliche `month`-Indizes haben.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
  - : Gibt eine kalenderspezifische Zeichenfolge zurück, die den Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise besteht sie aus `M` plus einer zweistelligen Monatsnummer. Für Schaltmonate besteht sie aus dem Code des vorherigen Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender ist dies immer 12, in anderen Kalendersystemen kann sie jedoch abweichen.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Wochenindex im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums repräsentiert, oder `undefined`, wenn der Kalender kein eindeutig definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass für ISO 8601 die ersten und letzten wenigen Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet sein können.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist Jahr 1 entweder das erste Jahr der jüngsten Ära oder das ISO-8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr vor und nach dem Startdatum der Ära denselben Wert.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr repräsentiert, das mit dem {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums zu koppeln ist, oder `undefined`, wenn der Kalender kein eindeutig definiertes Wochensystem hat. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist dies das Jahr des Datums, aber bei ISO 8601 können die ersten und letzten wenigen Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet sein, wodurch sich `yearOfWeek` um 1 unterscheiden kann.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Temporal.PlainDate"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum repräsentiert, nachdem es um eine bestimmte Dauer vorwärts verschoben wurde (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieses Datum im Wert einem anderen Datum entspricht (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertiert werden kann), andernfalls `false`. Sie werden sowohl anhand ihrer Datumswerte als auch ihrer Kalender verglichen.
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertiert werden kann) bis zu diesem Datum repräsentiert. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum repräsentiert, nachdem es um eine bestimmte Dauer rückwärts verschoben wurde (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
  - : Gibt eine Zeichenfolge zurück, die dieses Datum im selben [RFC-9557-Format](#rfc-9557-format) repräsentiert wie ein Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit durch {{jsxref("JSON.stringify()")}} aufgerufen zu werden.
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer sprachabhängigen Darstellung dieses Datums zurück.
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das dieses Datum und eine angegebene Uhrzeit im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainMonthDay")}}-Objekt zurück, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und den {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainYearMonth")}}-Objekt zurück, das das {{jsxref("Temporal/PlainDate/year", "year")}} und den {{jsxref("Temporal/PlainDate/month", "month")}} dieses Datums im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die dieses Datum im [RFC-9557-Format](#rfc-9557-format) repräsentiert.
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das dieses Datum, eine angegebene Uhrzeit und eine angegebene Zeitzone im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum bis zu einem anderen Datum repräsentiert (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertiert werden kann). Die Dauer ist positiv, wenn das andere Datum nach diesem Datum liegt, und negativ, wenn es davor liegt.
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, wodurch verhindert wird, dass `Temporal.PlainDate`-Instanzen bei Verwendung in arithmetischen Operationen oder Vergleichsoperationen [implizit in primitive Werte konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum mit einigen durch neue Werte ersetzten Feldern repräsentiert.
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum im neuen Kalendersystem interpretiert repräsentiert.

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
