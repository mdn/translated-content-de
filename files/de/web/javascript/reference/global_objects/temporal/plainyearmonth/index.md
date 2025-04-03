---
title: Temporal.PlainYearMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainYearMonth`** Objekt repräsentiert das Jahr und den Monat eines Kalenderdatums, ohne einen Tag oder eine Zeitzone; beispielsweise ein Ereignis in einem Kalender, das während des gesamten Monats stattfindet. Es wird im Wesentlichen als ISO 8601-Kalenderdatum mit Jahr-, Monats- und Tagesfeldern sowie einem zugehörigen Kalendersystem dargestellt. Der Tag wird verwendet, um das Jahr-Monat in nicht ISO-Kalendersystemen zu unterscheiden.

## Beschreibung

Ein `PlainYearMonth` ist im Wesentlichen der Jahr-Monat-Teil eines {{jsxref("Temporal.PlainDate")}} Objekts, ohne den Tag.

### RFC 9557 Format

`PlainYearMonth` Objekte können mithilfe des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD` {{optional_inline}}
  - : Eine zweistellige Zahl von `01` bis `31`. Es ist für nicht ISO-Kalender erforderlich und ansonsten optional. Wird es weggelassen, sieht der String aus wie `YYYY-MM` oder `YYYYMM`. Beachten Sie, dass der tatsächlich gespeicherte Referenztag von dem abweichen kann, den Sie angeben, das vertretene Jahr-Monat bleibt jedoch gleich. Siehe {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} für weitere Informationen. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _critical flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z. B., `[!u-ca=iso8601]`. Dieses Flag sagt anderen Systemen in der Regel, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser löst einen Fehler aus, wenn die Annotationen zwei oder mehr Kalenderannotationen enthalten und eine davon kritisch ist. Standardmäßig ist `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Offset und die Zeitzonenkennung im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) angeben, diese werden jedoch ignoriert. Andere Annotationen im `[Schlüssel=Wert]` Format werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Bei der Serialisierung können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob dafür ein kritisches Flag hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainYearMonth` Objekt, indem die zugrunde liegenden Daten direkt geliefert werden.

## Statische Methoden

- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat liegt. Entspricht dem Vergleich ihrer zugrunde liegenden ISO 8601 Daten. Zwei Jahr-Monate aus verschiedenen Kalendern können als gleich angesehen werden, wenn sie am gleichen ISO-Datum beginnen.
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainYearMonth` Objekt aus einem anderen `Temporal.PlainYearMonth` Objekt, einem Objekt mit Jahr- und Monatseigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainYearMonth.prototype` definiert und werden von allen `Temporal.PlainYearMonth` Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/PlainYearMonth/calendarId", "Temporal.PlainYearMonth.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainYearMonth.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `Temporal.PlainYearMonth` Instanzen ist der anfängliche Wert der {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor.
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen, kleingeschriebenen String zurück, der die Ära dieses Jahr-Monats repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Jahr-Monats innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahrindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainYearMonth/inLeapYear", "Temporal.PlainYearMonth.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt ein Boolean zurück, das angibt, ob dieses Jahr-Monat in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttages oder Schaltmonats) hat als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Jahr-Monats repräsentiert. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Unterschied zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann dann der Monat mit demselben {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} unterschiedliche `month` Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen String zurück, der den Monat dieses Jahr-Monats repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Üblicherweise ist es `M` plus einer zweistelligen Monatszahl. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es immer 12, aber in anderen Kalendersystemen kann es unterschiedlich sein.
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Jahr-Monats relativ zum Beginn eines kalenderabhängigen Epochsjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Üblicherweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr vor und nach dem Startdatum der Ära denselben Wert.
- `Temporal.PlainYearMonth.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainYearMonth"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das dieses Jahr-Monat um eine gegebene Dauer nach vorne verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieses Jahr-Monat im Wert einem anderen Jahr-Monat entspricht (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren zugrunde liegenden ISO-Datenwerten als auch nach ihren Kalendern verglichen, sodass zwei Jahr-Monate aus verschiedenen Kalendern von {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich angesehen werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) bis zu diesem Jahr-Monat darstellt. Die Dauer ist positiv, wenn der andere Monat vor diesem Monat liegt, und negativ, wenn er danach liegt.
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das dieses Jahr-Monat um eine gegebene Dauer nach hinten verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Jahr-Monat im gleichen [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Jahr-Monats zurück.
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das dieses Jahr-Monat und einen angegebenen Tag im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Jahr-Monat im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Jahr-Monat bis zu einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Monat nach diesem Monat liegt, und negativ, wenn er davor liegt.
- {{jsxref("Temporal/PlainYearMonth/valueOf", "Temporal.PlainYearMonth.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainYearMonth` Instanzen [implizit zu primitiven Typen konvertiert werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das dieses Jahr-Monat mit einigen Feldern, die durch neue Werte ersetzt wurden, darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainMonthDay")}}
