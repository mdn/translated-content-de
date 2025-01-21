---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal.PlainDate`**-Objekt repräsentiert ein Kalenderdatum (ein Datum ohne Uhrzeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das den ganzen Tag über stattfindet, egal in welcher Zeitzone es stattfindet. Es wird grundlegend als ISO 8601-Kalenderdatum mit Jahr-, Monat- und Tagesfeldern sowie einem zugehörigen Kalendersystem dargestellt.

## Beschreibung

Ein `PlainDate` ist im Wesentlichen der Datumsanteil eines {{jsxref("Temporal.PlainDateTime")}}-Objekts, wobei die Zeitinformationen entfernt wurden. Da die Datums- und Zeitinformationen kaum voneinander beeinflusst werden, sind alle allgemeinen Informationen zu Datumseigenschaften hier dokumentiert.

### RFC 9557-Format

`PlainDate`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

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
  - : Ersetzen Sie `calendar_id` durch das zu verwendende Kalendersystem. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig auf `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert wird und dann in das angegebene Kalendersystem umgewandelt wird.

Als Eingabe können Sie optional die Zeit, den Offset und die Zeitzonenkennung im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einschließen, diese werden jedoch ignoriert. Andere Anmerkungen im `[key=value]` Format werden ebenfalls ignoriert und dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag hinzugefügt werden soll.

### Ungültiges Datum klemmen

Die Methoden {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} und deren Gegenstücke in anderen `Temporal`-Objekten ermöglichen das Erstellen von Daten mit kalenderspezifischen Eigenschaften. Die Datumsbestandteile können außerhalb des Bereichs liegen. Im ISO-Kalender ist dies immer ein _Overflow_, wie z.B. der Monat, der größer als 12 ist, oder der Tag, der größer ist als die Anzahl der Tage, und die Behebung würde nur bedeuten, den Wert auf den maximal erlaubten Wert zu klemmen. In anderen Kalendern kann der ungültige Fall komplexer sein. Wenn Sie die Option `overflow: "constrain"` verwenden, werden ungültige Daten auf folgende Weise in ein gültiges umgewandelt:

- Wenn der Tag nicht existiert, aber der Monat schon: Wählen Sie den nächstgelegenen Tag im selben Monat. Wenn es zwei gleich nahe Daten in diesem Monat gibt, wählen Sie das spätere.
- Wenn der Monat ein Schaltmonat ist, der im Jahr nicht existiert: Wählen Sie ein anderes Datum entsprechend den kulturellen Konventionen der Benutzer dieses Kalendersystems. Normalerweise ergibt dies den gleichen Tag im Monat davor oder danach, in dem dieser Monat normalerweise in ein Schaltjahr fallen würde.
- Wenn der Monat im Jahr aus anderen Gründen nicht existiert: Wählen Sie das nächstgelegene Datum, das sich noch im selben Jahr befindet. Wenn es zwei gleich nahe Daten in diesem Jahr gibt, wählen Sie das spätere.
- Wenn das gesamte Jahr nicht existiert: Wählen Sie das nächstgelegene Datum in einem anderen Jahr. Wenn es zwei gleich nahe Daten gibt, wählen Sie das spätere.

## Konstruktor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}
  - : Erstellt ein neues `Temporal.PlainDate`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor, am selben Tag oder nach dem zweiten Datum liegt. Entspricht dem Vergleich der Jahr-, Monat- und Tagesfelder der zugrunde liegenden ISO 8601-Daten.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
  - : Erstellt ein neues `Temporal.PlainDate`-Objekt aus einem anderen `Temporal.PlainDate`-Objekt, einem Objekt mit Datumsangaben oder einem [RFC 9557](#rfc_9557-format)-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDate.prototype` definiert und werden von allen `Temporal.PlainDate`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainDate`-Instanzen ist der anfängliche Wert der {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} Konstruktor.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, also die gleiche Tagesnummer, die Sie in einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Die Tage in einer Woche sind fortlaufend von `1` bis {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen entspricht. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 steht normalerweise für Montag im Kalender, selbst wenn Lokalisierungen, die den Kalender verwenden, einen anderen Tag als den ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann dies von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 Tage oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
  - : Gibt einen kalenderabhängigen Kleinbuchstaben-String zurück, der die Epoche dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
  - : Gibt eine nicht negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Epoche darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Epoche können mit der Zeit abnehmen (z.B. Gregorianisch v.Chr.). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttages oder -monats) hat als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit demselben {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} für verschiedene Jahre unterschiedliche `month`-Indizes haben.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
  - : Gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des Vormonats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann dies variieren.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden können.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Epoche oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Epoche.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
  - : Gibt eine ganze Zahl zurück, die das Jahr angibt, das mit der {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums gekoppelt wird, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainDate"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine angegebene Dauer nach vorne verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieses Datum in Wert einem anderen Datum (in einer Form konvertierbar durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}) äquivalent ist, und `false` sonst. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen.
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum (in einer Form konvertierbar durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}) bis zu diesem Datum darstellt. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine angegebene Dauer zurück bewegt darstellt (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
  - : Gibt einen String zurück, der dieses Datum im selben [RFC 9557-Format](#rfc_9557-format) darstellt, wie es bei Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}} der Fall ist. Diese Methode soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Datums zurück.
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das dieses Datum und eine angegebene Uhrzeit im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainMonthDay")}}-Objekt zurück, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und den {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainYearMonth")}}-Objekt zurück, das das {{jsxref("Temporal/PlainDate/year", "year")}} und den {{jsxref("Temporal/PlainDate/month", "month")}} dieses Datums im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
  - : Gibt einen String zurück, der dieses Datum im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das dieses Datum, eine angegebene Uhrzeit und eine angegebene Zeitzone im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum bis zu einem anderen Datum (in einer Form konvertierbar durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) darstellt. Die Dauer ist positiv, wenn das andere Datum nach diesem Datum liegt, und negativ, wenn es davor liegt.
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDate`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum in einem neuen Kalendersystem interpretiert darstellt.

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
