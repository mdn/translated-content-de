---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.PlainMonthDay`**-Objekt repräsentiert den Monat und Tag eines Kalenderdatums, ohne Jahr oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag über stattfindet. Es wird grundsätzlich als ISO 8601-Kalenderdatum dargestellt, mit den Feldern Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem. Das Jahr wird verwendet, um den Monat-Tag in Nicht-ISO-Kalendersystemen zu unterscheiden.

## Beschreibung

Ein `PlainMonthDay` ist im Wesentlichen der Monat-Tag-Teil eines {{jsxref("Temporal.PlainDate")}}-Objekts, ohne Jahr. Da die Bedeutung eines Monat-Tags von Jahr zu Jahr variieren kann (zum Beispiel, ob es existiert oder welcher Monat-Tag der nächste ist), bietet dieses Objekt selbst nicht viel Funktionalität, wie Vergleich, Addition oder Subtraktion. Es hat nicht einmal eine {{jsxref("Temporal/PlainDate/month", "month")}}-Eigenschaft, da der Monatsindex ohne Jahr nicht relevant ist (zum Beispiel können zwei Monate aus zwei Jahren mit dem gleichen Index unterschiedliche Namen haben im Falle von Schaltmonaten).

### RFC 9557 Format

`PlainMonthDay`-Objekte können unter Verwendung des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur für die Lesbarkeit und sollten nicht im tatsächlichen String vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen. Es ist erforderlich für Nicht-ISO-Kalender und optional ansonsten. Wenn ausgelassen, können Sie entweder `YYYY-` durch `--` ersetzen (sodass der String aussieht wie `--MM-DD` oder `--MMDD`), oder den `YYYY-` Teil vollständig weglassen (sodass der String aussieht wie `MM-DD` oder `MMDD`). Beachten Sie, dass das tatsächlich gespeicherte Referenzjahr von dem von Ihnen angegebenen abweichen kann, aber der dargestellte Monat-Tag der gleiche ist. Weitere Informationen finden Sie unter {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` getrennt oder ohne Trennung angegeben werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann eine _kritische Flagge_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Diese Flagge gibt anderen Systemen im Allgemeinen an, dass sie nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` stets als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe können Sie optional die Zeit, den Offset und die Zeitzonenkennung im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) enthalten, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert, und sie dürfen nicht die kritische Flagge haben.

Beim Serialisieren können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob eine kritische Flagge dafür hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monat- und Tag-Eigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainMonthDay.prototype` definiert und werden von allen `Temporal.PlainMonthDay`-Instanzen geteilt.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO 8601 Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainMonthDay`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}-Konstruktor.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, welcher die gleiche Tagesnummer ist, die Sie in einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt in der Regel bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus einer zweistelligen Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainMonthDay"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Monat-Tag einem anderen Monat-Tag entsprechend dem Wert äquivalent ist (in einer Form konvertierbar durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}), und `false` ansonsten. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen.
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im gleichen [RFC 9557-Format](#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Monat-Tags zurück.
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Monat-Tag und ein gegebenes Jahr im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im [RFC 9557-Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, welcher verhindert, dass `Temporal.PlainMonthDay`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag mit einigen durch neue Werte ersetzten Feldern darstellt.

## Beispiele

### Berechnung des nächsten Vorkommens eines Festivals

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
