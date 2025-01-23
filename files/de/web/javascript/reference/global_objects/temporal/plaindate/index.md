---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainDate`** Objekt repräsentiert ein Kalenderdatum (ein Datum ohne Uhrzeit oder Zeitzone); beispielsweise ein Ereignis in einem Kalender, das den ganzen Tag stattfindet, unabhängig davon, in welcher Zeitzone es geschieht. Es wird im Wesentlichen als ISO 8601-Kalenderdatum mit Jahr-, Monat- und Tagesfeldern sowie einem zugehörigen Kalendersystem dargestellt.

## Beschreibung

Ein `PlainDate` ist im Wesentlichen der Datumsteil eines {{jsxref("Temporal.PlainDateTime")}} Objekts, bei dem die Zeitinformationen entfernt wurden. Da Datums- und Zeitinformationen wenig Interaktion haben, sind alle allgemeinen Informationen über Datumseigenschaften hier dokumentiert.

### RFC 9557 Format

`PlainDate` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Die Zeichenkette hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollten in der eigentlichen Zeichenkette nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM`, und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z. B. `[!u-ca=iso8601]`. Dieses Flag zeigt im Allgemeinen anderen Systemen an, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wird einen Fehler werfen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional die Uhrzeit, den Versatz und den Zeitzonen-Identifier im gleichen Format wie bei [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einbeziehen, diese werden jedoch ignoriert. Andere Anmerkungen im `[key=value]` Format werden ebenfalls ignoriert und dürfen das kritische Flag nicht haben.

Bei der Serialisierung können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob dafür ein kritisches Flag hinzugefügt werden soll.

### Ungültige Datumsbegrenzung

Die {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} Methoden und ihre Gegenstücke in anderen `Temporal` Objekten, erlauben es, Daten mithilfe kalender-spezifischer Eigenschaften zu konstruieren. Die Datumsbestandteile können außerhalb des Bereichs liegen. Im ISO-Kalender ist dies immer ein _Überlauf_, z.B. wenn der Monat größer als 12 oder der Tag größer als die Anzahl der Tage ist, und es würde nur bedeuten, den Wert auf den maximal zulässigen Wert zu begrenzen. In anderen Kalendern kann der ungültige Fall komplexer sein. Wenn Sie die Option `overflow: "constrain"` verwenden, werden ungültige Daten auf folgende Weise auf ein gültiges Datum korrigiert:

- Wenn der Tag nicht existiert, der Monat aber schon: Wählen Sie den nächstgelegenen Tag im gleichen Monat. Wenn es zwei gleich nahestehende Daten in diesem Monat gibt, wählen Sie das spätere.
- Wenn der Monat ein Schaltmonat ist, der im Jahr nicht existiert: Wählen Sie ein anderes Datum gemäß den kulturellen Konventionen der Benutzer dieses Kalenders. Normalerweise wird dies zum gleichen Tag im Monat davor oder danach führen, wo dieser Monat normalerweise in einem Schaltjahr fällt.
- Wenn der Monat aus anderen Gründen im Jahr nicht existiert: Wählen Sie den nächstgelegenen Tag, der noch im gleichen Jahr liegt. Wenn es zwei gleich nahestehende Daten in diesem Jahr gibt, wählen Sie das spätere.
- Wenn das gesamte Jahr nicht existiert: Wählen Sie das nächstgelegene Datum in einem anderen Jahr. Wenn es zwei gleich nahestehende Daten gibt, wählen Sie das spätere.

## Konstruktor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDate` Objekt, indem die zugrunde liegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor, gleich oder nach dem zweiten Datum liegt. Entspricht dem Vergleich der Jahr-, Monat- und Tagesfelder der zugrunde liegenden ISO 8601 Daten.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainDate` Objekt aus einem anderen `Temporal.PlainDate` Objekt, einem Objekt mit Datumseigenschaften oder einer [RFC 9557](#rfc_9557_format) Zeichenkette.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainDate.prototype` definiert und werden von allen `Temporal.PlainDate` Instanzen geteilt.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Bei `Temporal.PlainDate` Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} Konstruktor.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums darstellt, was dieselbe Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Im Allgemeinen beginnt sie bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index in der Woche dieses Datums darstellt. Tage in einer Woche werden sequenziell von `1` bis {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet wird. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, auch wenn Orte, die den Kalender verwenden, einen anderen Tag als den ersten Wochentag betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind das immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, in gleicher Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregoria ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt normalerweise ab 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z. B. Gregorian BCE). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, in gleicher Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob dieses Datum in einem Schaltjahr ist. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schaltages oder Schaltmonats) als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit demselben {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} in unterschiedlichen Jahren unterschiedliche `month` Indizes haben.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Meistens ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des vorherigen Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind das immer 12, aber in anderen Kalendersystemen kann es unterschiedlich sein.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden können.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist das Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr vor und nach dem Startdatum der Ära denselben Wert.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist das das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich das `yearOfWeek` um 1 unterscheiden kann.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainDate"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum um eine gegebene Dauer (in einer durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbaren Form) vorwärts verschoben repräsentiert.
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieses Datum einem anderen Datum wertmäßig entspricht (in einer durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbaren Form), und `false` andernfalls. Sie werden sowohl durch ihre Datumswerte als auch durch ihre Kalender verglichen.
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum (in einer durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbaren Form) bis zu diesem Datum darstellt. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn es danach liegt.
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum um eine gegebene Dauer (in einer durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbaren Form) rückwärts verschoben repräsentiert.
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum im gleichen [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der eine sprachsensitivere Darstellung dieses Datums bietet.
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das dieses Datum und eine angegebene Uhrzeit im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainMonthDay")}} Objekt zurück, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainYearMonth")}} Objekt zurück, das den {{jsxref("Temporal/PlainDate/year", "year")}} und {{jsxref("Temporal/PlainDate/month", "month")}} dieses Datums im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der dieses Datum im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues
