---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Das **`Temporal.PlainMonthDay`**-Objekt repräsentiert den Monat und den Tag eines Kalenderdatums, ohne Jahr oder Zeitzone; zum Beispiel ein jährlich wiederkehrendes Ereignis, das den ganzen Tag dauert. Es wird grundsätzlich als ISO 8601-Kalenderdatum mit Jahr, Monat und Tagesfeldern sowie einem zugehörigen Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu unterscheiden.

## Beschreibung

Ein `PlainMonthDay` ist im Wesentlichen der Monat-Tag-Teil eines {{jsxref("Temporal.PlainDate")}}-Objekts, ohne das Jahr. Da sich die Bedeutung eines Monat-Tags von Jahr zu Jahr ändern kann (zum Beispiel, ob er existiert oder welcher Monat-Tag der nächste Tag ist), bietet dieses Objekt nicht viel Funktionalität für sich, wie Vergleich, Addition oder Subtraktion. Es hat nicht einmal eine {{jsxref("Temporal/PlainDate/month", "month")}}-Eigenschaft, da der Monatsindex ohne Jahr keine Bedeutung hat (zum Beispiel können zwei Monate aus zwei Jahren mit demselben Index unterschiedliche Namen haben, im Falle von Schaltmonaten).

### RFC 9557-Format

`PlainMonthDay`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat folgende Form (Leerzeichen sind nur für die Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Zeichen. Es ist für nicht-ISO-Kalender erforderlich und ansonsten optional. Wenn weggelassen, können Sie entweder `YYYY-` mit `--` ersetzen (sodass der String aussieht wie `--MM-DD` oder `--MMDD`), oder den `YYYY-`-Teil ganz weglassen (sodass der String aussieht wie `MM-DD` oder `MMDD`). Beachten Sie, dass sich das tatsächlich gespeicherte Referenzjahr von dem von Ihnen angegebenen unterscheiden kann, aber der dargestellte Monat-Tag derselbe ist. Weitere Informationen finden Sie unter {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag teilt im Allgemeinen anderen Systemen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Zeit, den Offset und den Zeitzonenbezeichner im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einbeziehen, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert und dürfen kein kritisches Flag haben.

Bei der Serialisierung können Sie konfigurieren, ob die Kalender-ID angezeigt werden soll und ob ein kritisches Flag dafür hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt, indem die zugrunde liegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monat- und Tag-Eigenschaften oder einem [RFC 9557](#rfc_9557-format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainMonthDay.prototype` definiert und werden von allen `Temporal.PlainMonthDay`-Instanzen geteilt.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainMonthDay`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}-Konstruktor.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums darstellt, der dieselbe Tagesnummer ist, die Sie in einem Kalender sehen würden. [Kalender]-abhängig. Beginnt in der Regel bei 1 und ist durchgehend, aber nicht immer.
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender]-abhängig. Üblicherweise ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainMonthDay"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Monat-Tag in Wert einem anderen Monat-Tag (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist) entspricht, und `false` anderenfalls. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen.
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im gleichen [RFC 9557-Format](#rfc_9557-format) wie bei einem Aufruf von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieses Monat-Tags zurück.
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Monat-Tag und ein angegebenes Jahr im gleichen Kalendersystem darstellt.
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Monat-Tag im [RFC 9557-Format](#rfc_9557-format) repräsentiert.
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainMonthDay`-Instanzen [implizit in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag mit einigen durch neue Werte ersetzten Feldern darstellt.

## Beispiele

### Das nächste Vorkommen eines Festes ermitteln

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
