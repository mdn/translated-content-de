---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainMonthDay`** Objekt repräsentiert den Monat und den Tag eines Kalendertages, ohne ein Jahr oder eine Zeitzone; beispielsweise ein Ereignis im Kalender, das jedes Jahr wiederkehrt und über den gesamten Tag stattfindet. Es wird grundsätzlich als ein ISO 8601 Kalendertag mit Jahr-, Monat- und Tagesfeldern und einem zugehörigen Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu unterscheiden.

## Beschreibung

Ein `PlainMonthDay` ist im Wesentlichen der Monat-Tag-Teil eines {{jsxref("Temporal.PlainDate")}} Objekts, ohne das Jahr. Da die Bedeutung eines Monats-Tages je nach Jahr variieren kann (zum Beispiel, ob er existiert, oder welcher Monat-Tag der nächste Tag ist), bietet dieses Objekt von sich aus nicht viel Funktionalität wie Vergleich, Addition oder Subtraktion. Es hat nicht einmal eine {{jsxref("Temporal/PlainDate/month", "month")}} Eigenschaft, da der Monatsindex ohne ein Jahr nicht sinnvoll ist (zum Beispiel können zwei Monate aus zwei Jahren mit demselben Index unterschiedliche Namen haben, im Falle von Schaltmonaten).

### RFC 9557 Format

`PlainMonthDay` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats. Der String hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollten im tatsächlichen String nicht enthalten sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen. Es ist erforderlich für nicht-ISO-Kalender und optional ansonsten. Wird es weggelassen, können Sie entweder `YYYY-` durch `--` ersetzen (so dass der String wie `--MM-DD` oder `--MMDD` aussieht), oder den Teil `YYYY-` ganz weglassen (so dass der String wie `MM-DD` oder `MMDD` aussieht). Beachten Sie, dass das tatsächlich gespeicherte Referenzjahr von dem abweichen kann, das Sie angeben, aber der dargestellte Monat-Tag bleibt derselbe. Siehe {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} für weitere Informationen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` mit dem zu verwendenden Kalender. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag weist andere Systeme im Allgemeinen darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wirft einen Fehler, wenn die Annotationen zwei oder mehr Kalender-Annotationen enthalten und eine davon kritisch ist. Standardwert ist `[u-ca=iso8601]`. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601 Kalendertag interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional die Zeit, den Offset und den Zeitzonen-Identifikator im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einschließen, aber sie werden ignoriert. Andere Annotationen im Format `[key=value]` werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag dafür hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay` Objekt aus einem anderen `Temporal.PlainMonthDay` Objekt, einem Objekt mit Monat- und Tag-Eigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainMonthDay.prototype` definiert und werden von allen Instanzen von `Temporal.PlainMonthDay` geteilt.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Temporal.PlainMonthDay` Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, welcher derselbe Tag ist, den Sie in einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt in der Regel bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist es `M` plus eine zweistellige Monatszahl. Bei Schaltmonaten ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.PlainMonthDay"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Monat-Tag im Wert äquivalent zu einem anderen Monat-Tag ist (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl durch ihre Datumswerte als auch ihre Kalender verglichen.
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im gleichen [RFC 9557 Format](#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachabhängigen Darstellung dieses Monat-Tages zurück.
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das diesen Monat-Tag und ein angegebenes Jahr im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.PlainMonthDay` Instanzen [implizit in primitive Typen umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainMonthDay` Objekt zurück, das diesen Monat-Tag darstellt, wobei einige Felder durch neue Werte ersetzt werden.

## Beispiele

### Nächsten Vorkommen eines Festes ermitteln

```js
// Chinese New Years are on 1/1 in the Chinese calendar
const chineseNewYear = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: "chinese",
});
const currentYear = Temporal.Now.plainDateISO().withCalendar("chinese").year;
let nextCNY = chineseNewYear.toPlainDate({ year: currentYear });
if (Temporal.PlainDate.compare(nextCNY, Temporal.Now.plainDateISO()) <= 0) {
  nextCNY = nextCNY.add({ years: 1 });
}
console.log(
  `The next Chinese New Year is on ${nextCNY.withCalendar("iso8601").toLocaleString()}`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainYearMonth")}}
