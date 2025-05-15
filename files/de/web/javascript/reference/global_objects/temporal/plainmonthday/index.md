---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainMonthDay`**-Objekt repräsentiert den Monat und Tag eines Kalendertages, ohne Jahr oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag andauert. Es wird grundsätzlich als ISO 8601-Kalendertag mit Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu entwirren.

## Beschreibung

Ein `PlainMonthDay` ist im Wesentlichen der Monat-Tag-Teil eines {{jsxref("Temporal.PlainDate")}}-Objekts, ohne das Jahr. Da die Bedeutung eines Monats-Tages von Jahr zu Jahr variieren kann (zum Beispiel, ob er existiert oder welcher Monat-Tag der nächste Tag ist), bietet dieses Objekt alleine nicht viel Funktionalität wie Vergleich, Addition oder Subtraktion. Es hat nicht einmal eine {{jsxref("Temporal/PlainDate/month", "month")}}-Eigenschaft, da der Monatsindex ohne ein Jahr nicht sinnvoll ist (zum Beispiel können zwei Monate aus zwei Jahren mit demselben Index unterschiedliche Namen im Fall von Schaltmonaten haben).

### RFC 9557 Format

`PlainMonthDay`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, eine Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat folgendes Format (Leerzeichen sind nur der Lesbarkeit wegen da und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen. Es ist notwendig für nicht-ISO-Kalender und ansonsten optional. Wird es weggelassen, können Sie entweder `YYYY-` durch `--` ersetzen (sodass der String wie `--MM-DD` oder `--MMDD` aussieht) oder den `YYYY-`-Teil ganz weglassen (sodass der String wie `MM-DD` oder `MMDD` aussieht). Beachten Sie, dass das tatsächlich gespeicherte Referenzjahr von dem abweichen kann, das Sie angeben, aber der dargestellte Monat-Tag derselbe ist. {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} bietet mehr Informationen dazu.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` getrennt sein oder direkt zusammengeschrieben werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste allgemein unterstützter Kalendertypen. Standard ist `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem das Schlüsselwort mit `!` vorangestellt wird, z.B. `[!u-ca=iso8601]`. Dieses Flag weist andere Systeme normalerweise darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wirft einen Fehler, wenn die Annotationen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601-Kalendertag interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Offset und die Zeitzonenkennung im selben Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einschließen, aber sie werden ignoriert. Andere Annotationen im `[key=value]` Format werden ebenfalls ignoriert und dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag dafür hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monats- und Tageigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.PlainMonthDay.prototype` definiert und werden von allen `Temporal.PlainMonthDay`-Instanzen geteilt.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO 8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainMonthDay`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}-Konstruktor.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex des Monats dieses Datums darstellt, derselbe Tag, den Sie in einem Kalender sehen würden. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beginnt normalerweise bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Normalerweise ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des vorhergehenden Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainMonthDay"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Monat-Tag in Bezug auf einen anderen Monat-Tag gleichwertig ist (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist) und `false` sonst. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen.
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im selben [RFC 9557 Format](#rfc_9557_format) darstellt, wie es das Aufrufen von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} würde. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Monat-Tags zurück.
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Monat-Tag und ein angegebenes Jahr im selben Kalendersystem darstellt.
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainMonthDay`-Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag mit einigen durch neue Werte ersetzten Feldern darstellt.

## Beispiele

### Den nächsten Termin eines Festes ermitteln

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
