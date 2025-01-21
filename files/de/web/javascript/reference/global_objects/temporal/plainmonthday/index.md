---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal.PlainMonthDay`**-Objekt repräsentiert den Monat und den Tag eines Kalenderdatums, ohne ein Jahr oder eine Zeitzone; beispielsweise ein Ereignis in einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag über stattfindet. Es wird grundsätzlich als ISO 8601-Kalenderdatum mit Jahr-, Monat- und Tag-Feldern und einem zugehörigen Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen eindeutig zu machen.

## Beschreibung

Ein `PlainMonthDay` ist im Wesentlichen der Teil für Monat und Tag eines {{jsxref("Temporal.PlainDate")}}-Objekts, ohne das Jahr. Da die Bedeutung eines Monats-Tages von Jahr zu Jahr wechseln kann (zum Beispiel, ob er existiert oder was der Monats-Tag des nächsten Tages ist), bietet dieses Objekt allein nicht viel Funktionalität, wie Vergleich, Addition oder Subtraktion. Es hat nicht einmal eine {{jsxref("Temporal/PlainDate/month", "month")}}-Eigenschaft, weil der Monatsindex ohne Jahr nicht aussagekräftig ist (zum Beispiel können zwei Monate aus zwei Jahren mit demselben Index unterschiedliche Namen haben, wenn es Schaltmonate gibt).

### RFC 9557-Format

`PlainMonthDay`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur zur besseren Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen. Es ist notwendig für nicht-ISO-Kalender und optional für andere. Wenn es weggelassen wird, können Sie `YYYY-` entweder durch `--` ersetzen (sodass der String wie `--MM-DD` oder `--MMDD` aussieht) oder den Teil `YYYY-` ganz weglassen (sodass der String wie `MM-DD` oder `MMDD` aussieht). Beachten Sie, dass das tatsächlich gespeicherte Referenzjahr von dem abweichen kann, das Sie angeben, aber der dargestellte Monats-Tag ist derselbe. Siehe {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} für weitere Informationen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _Kritikalitätskennzeichen_ haben, indem der Schlüssel mit `!` versehen wird: z.B. `[!u-ca=iso8601]`. Dieses Kennzeichen signalisiert im Allgemeinen anderen Systemen, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ein ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Offset und den Zeitzonen-Identifikator im selben Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einfügen, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert und dürfen das kritische Kennzeichen nicht haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Kennzeichen für diese hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monat- und Tag-Eigenschaften oder einem [RFC 9557](#rfc_9557-format)-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainMonthDay.prototype` definiert und werden von allen `Temporal.PlainMonthDay`-Instanzen geteilt.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO 8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainMonthDay`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}-Konstruktor.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, der die gleiche Tagesnummer ist, die Sie auf einem Kalender sehen würden. Kalenderabhängig. Beginnt im Allgemeinen bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums repräsentiert. Kalenderabhängig. Üblicherweise ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainMonthDay"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieser Monats-Tag in Wert einem anderen Monats-Tag (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist) entspricht, und `false` andernfalls. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen.
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diesen Monat-Tag im selben [RFC 9557-Format](#rfc_9557-format) wie ein Aufruf von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Monats-Tages zurück.
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Monats-Tag und ein angegebenes Jahr im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen Monats-Tag im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainMonthDay`-Instanzen [implizit in primitive Typen konvertiert werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monats-Tag mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.

## Beispiele

### Das nächste Vorkommen eines Festivals ermitteln

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
