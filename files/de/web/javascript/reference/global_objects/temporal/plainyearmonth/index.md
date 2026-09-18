---
title: Temporal.PlainYearMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Das **`Temporal.PlainYearMonth`**-Objekt repräsentiert das Jahr und den Monat eines Kalenderdatums ohne Tag oder Zeitzone; beispielsweise ein Ereignis in einem Kalender, das während eines ganzen Monats stattfindet. Es wird grundsätzlich als ISO-8601-Kalenderdatum mit Feldern für Jahr, Monat und Tag sowie einem zugeordneten Kalendersystem dargestellt. Der Tag wird verwendet, um Jahr-Monat-Angaben in Nicht-ISO-Kalendersystemen eindeutig zu bestimmen.

## Beschreibung

Ein `PlainYearMonth` ist im Wesentlichen der Jahr-Monat-Teil eines {{jsxref("Temporal.PlainDate")}}-Objekts ohne den Tag.

### RFC-9557-Format

`PlainYearMonth`-Objekte können mithilfe des [RFC-9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats serialisiert und geparst werden, einer Erweiterung des Formats [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). Die Zeichenkette hat die folgende Form (Leerzeichen dienen nur der besseren Lesbarkeit und dürfen in der tatsächlichen Zeichenkette nicht enthalten sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD` {{optional_inline}}
  - : Eine zweistellige Zahl von `01` bis `31`. Sie ist für Nicht-ISO-Kalender erforderlich und ansonsten optional. Wird sie ausgelassen, sieht die Zeichenkette wie `YYYY-MM` oder `YYYYMM` aus. Beachten Sie, dass der tatsächlich gespeicherte Referenztag von dem von Ihnen angegebenen abweichen kann, das repräsentierte Jahr-Monat jedoch gleich bleibt. Weitere Informationen finden Sie unter {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder gar nicht getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Standardmäßig wird `[u-ca=iso8601]` verwendet. Ein _kritisches Flag_ kann vorangestellt werden, indem dem Schlüssel `!` vorangestellt wird: beispielsweise `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Der `Temporal`-Parser löst einen Fehler aus, wenn die Annotationen zwei oder mehr Kalenderannotation enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO-8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Offset und die Zeitzonenkennung im selben Format wie bei [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einfügen, sie werden jedoch ignoriert. Andere Annotationen im Format `[key=value]` werden ebenfalls ignoriert und dürfen nicht das kritische Flag enthalten.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ihr ein kritisches Flag hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}
  - : Erstellt ein neues `Temporal.PlainYearMonth`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat liegt. Entspricht dem Vergleich ihrer zugrunde liegenden ISO-8601-Daten. Zwei Jahr-Monate aus unterschiedlichen Kalendern können als gleich betrachtet werden, wenn sie am selben ISO-Datum beginnen.
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
  - : Erstellt ein neues `Temporal.PlainYearMonth`-Objekt aus einem anderen `Temporal.PlainYearMonth`-Objekt, einem Objekt mit year- und month-Eigenschaften oder einer [RFC-9557](#rfc-9557-format)-Zeichenkette.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainYearMonth.prototype` definiert und werden von allen `Temporal.PlainYearMonth`-Instanzen gemeinsam verwendet.

- {{jsxref("Temporal/PlainYearMonth/calendarId", "Temporal.PlainYearMonth.prototype.calendarId")}}
  - : Gibt eine Zeichenkette zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO-8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainYearMonth.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainYearMonth`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}.
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender sind es 365 beziehungsweise 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
  - : Gibt eine kalenderspezifische Zeichenkette in Kleinbuchstaben zurück, die die Ära dieses Jahr-Monats repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für Gregorian ist es entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
  - : Gibt eine nicht negative ganze Zahl zurück, die das Jahr dieses Jahr-Monats innerhalb der Ära repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt üblicherweise bei 1 (häufiger) oder 0, und Jahre innerhalb einer Ära können mit der Zeit abnehmen (z. B. Gregorian BCE). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainYearMonth/inLeapYear", "Temporal.PlainYearMonth.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Jahr-Monat in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das aufgrund eines Schalttags oder Schaltmonats mehr Tage als ein gewöhnliches Jahr hat. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
  - : Gibt eine positive ganze Zahl zurück, die den bei 1 beginnenden Monatsindex im Jahr dieses Jahr-Monats repräsentiert. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist {{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass der Index im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} bei 1 beginnt. Falls der Kalender Schaltmonate enthält, kann der Monat mit demselben {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} für unterschiedliche Jahre unterschiedliche `month`-Indizes haben.
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
  - : Gibt eine kalenderspezifische Zeichenkette zurück, die den Monat dieses Jahr-Monats repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Normalerweise besteht sie aus `M` gefolgt von einer zweistelligen Monatsnummer. Bei Schaltmonaten ist es der Code des vorherigen Monats, gefolgt von `L`. Falls der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender ist dies immer 12, kann sich jedoch in anderen Kalendersystemen unterscheiden.
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Jahr-Monats relativ zum Beginn eines kalenderspezifischen Epochenjahrs repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist Jahr 1 entweder das erste Jahr der jüngsten Ära oder das ISO-8601-Jahr `0001`. Falls die Epoche in der Mitte des Jahres liegt, hat dieses Jahr vor und nach dem Anfangsdatum der Ära denselben Wert.
- `Temporal.PlainYearMonth.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenkette `"Temporal.PlainYearMonth"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das dieses Jahr-Monat darstellt, um eine angegebene Dauer nach vorn verschoben (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieses Jahr-Monat im Wert einem anderen Jahr-Monat entspricht (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist), andernfalls `false`. Sie werden sowohl anhand ihrer zugrunde liegenden ISO-Datumswerte als auch ihrer Kalender verglichen. Daher können zwei Jahr-Monate aus unterschiedlichen Kalendern durch {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich betrachtet werden, jedoch nicht durch `equals()`.
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) bis zu diesem Jahr-Monat repräsentiert. Die Dauer ist positiv, wenn der andere Monat vor diesem Monat liegt, und negativ, wenn er danach liegt.
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das dieses Jahr-Monat darstellt, um eine angegebene Dauer rückwärts verschoben (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die dieses Jahr-Monat im selben [RFC-9557-Format](#rfc-9557-format) wie ein Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} repräsentiert. Sie ist dazu vorgesehen, implizit durch {{jsxref("JSON.stringify()")}} aufgerufen zu werden.
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieses Jahr-Monats zurück.
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das dieses Jahr-Monat und einen angegebenen Tag im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die dieses Jahr-Monat im [RFC-9557-Format](#rfc-9557-format) repräsentiert.
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Jahr-Monat bis zu einem anderen Jahr-Monat repräsentiert (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn der andere Monat nach diesem Monat liegt, und negativ, wenn er davor liegt.
- {{jsxref("Temporal/PlainYearMonth/valueOf", "Temporal.PlainYearMonth.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, wodurch verhindert wird, dass `Temporal.PlainYearMonth`-Instanzen bei der Verwendung in arithmetischen oder Vergleichsoperationen [implizit in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das dieses Jahr-Monat mit einigen durch neue Werte ersetzten Feldern repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainMonthDay")}}
