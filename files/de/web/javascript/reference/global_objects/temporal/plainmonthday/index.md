---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Das **`Temporal.PlainMonthDay`**-Objekt repräsentiert Monat und Tag eines Kalenderdatums ohne Jahr oder Zeitzone; beispielsweise ein Ereignis in einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag stattfindet. Es wird grundsätzlich als ISO-8601-Kalenderdatum mit Feldern für Jahr, Monat und Tag sowie einem zugeordneten Kalendersystem repräsentiert. Das Jahr wird verwendet, um Monat und Tag in Nicht-ISO-Kalendersystemen eindeutig zu bestimmen.

## Beschreibung

Ein `PlainMonthDay` ist im Wesentlichen der Monat-Tag-Teil eines {{jsxref("Temporal.PlainDate")}}-Objekts ohne das Jahr. Da sich die Bedeutung eines Monats-Tags von Jahr zu Jahr ändern kann (beispielsweise ob er existiert oder welches der Monat-Tag des nächsten Tages ist), bietet dieses Objekt allein nicht viel Funktionalität, etwa Vergleich, Addition oder Subtraktion. Es besitzt nicht einmal eine {{jsxref("Temporal/PlainDate/month", "month")}}-Eigenschaft, da der Monatsindex ohne ein Jahr nicht aussagekräftig ist (beispielsweise können zwei Monate aus zwei Jahren mit demselben Index bei Schaltmonaten unterschiedliche Namen haben).

### RFC-9557-Format

`PlainMonthDay`-Objekte können mithilfe des [RFC-9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats serialisiert und geparst werden, einer Erweiterung des Formats [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). Die Zeichenfolge hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und dürfen in der tatsächlichen Zeichenfolge nicht vorhanden sein):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen. Sie ist für Nicht-ISO-Kalender erforderlich und ansonsten optional. Wenn sie weggelassen wird, können Sie entweder `YYYY-` durch `--` ersetzen (sodass die Zeichenfolge wie `--MM-DD` oder `--MMDD` aussieht) oder den Teil `YYYY-` vollständig weglassen (sodass die Zeichenfolge wie `MM-DD` oder `MMDD` aussieht). Beachten Sie, dass das tatsächlich gespeicherte Referenzjahr vom angegebenen Jahr abweichen kann, der repräsentierte Monat-Tag jedoch derselbe ist. Weitere Informationen finden Sie unter {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder gar nicht getrennt werden.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Standardmäßig wird `[u-ca=iso8601]` verwendet. Kann durch Voranstellen von `!` vor dem Schlüssel ein _kritisches Flag_ haben: beispielsweise `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser löst einen Fehler aus, wenn die Annotationen zwei oder mehr Kalenderannotation enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO-8601-Kalenderdatum interpretiert und anschließend in den angegebenen Kalender konvertiert wird.

Als Eingabe können Sie optional die Uhrzeit, den Offset und den Zeitzonenbezeichner im selben Format wie bei [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) angeben, sie werden jedoch ignoriert. Andere Annotationen im Format `[key=value]` werden ebenfalls ignoriert und dürfen nicht das kritische Flag besitzen.

Bei der Serialisierung können Sie festlegen, ob die Kalender-ID angezeigt werden soll und ob dafür ein kritisches Flag hinzugefügt werden soll.

## Konstruktor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
  - : Erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monats- und Tageigenschaften oder einer [RFC-9557](#rfc-9557-format)-Zeichenfolge.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainMonthDay.prototype` definiert und werden von allen `Temporal.PlainMonthDay`-Instanzen gemeinsam verwendet.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}}
  - : Gibt eine Zeichenfolge zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO-8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : Die Konstruktorfunktion, welche das Instanzobjekt erstellt hat. Für `Temporal.PlainMonthDay`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
  - : Gibt eine positive ganze Zahl zurück, welche den bei 1 beginnenden Tagesindex im Monat dieses Datums repräsentiert; dies ist dieselbe Tagesnummer, die Sie in einem Kalender sehen würden. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beginnt im Allgemeinen bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}}
  - : Gibt eine kalenderspezifische Zeichenfolge zurück, die den Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist dies `M` plus eine zweistellige Monatsnummer. Bei Schaltmonaten besteht sie aus dem Code des vorherigen Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Temporal.PlainMonthDay"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieser Monat-Tag wertmäßig einem anderen Monat-Tag entspricht (in einer durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbaren Form), andernfalls `false`. Sie werden sowohl anhand ihrer Datumswerte als auch ihrer Kalender verglichen.
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
  - : Gibt eine Zeichenfolge zurück, die diesen Monat-Tag im selben [RFC-9557-Format](#rfc-9557-format) repräsentiert wie ein Aufruf von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}. Ist für den impliziten Aufruf durch {{jsxref("JSON.stringify()")}} vorgesehen.
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer sprachabhängigen Darstellung dieses Monats-Tags zurück.
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Monat-Tag und ein angegebenes Jahr im selben Kalendersystem repräsentiert.
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die diesen Monat-Tag im [RFC-9557-Format](#rfc-9557-format) repräsentiert.
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, wodurch verhindert wird, dass `Temporal.PlainMonthDay`-Instanzen bei der Verwendung in arithmetischen Operationen oder Vergleichsoperationen [implizit in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag repräsentiert, wobei einige Felder durch neue Werte ersetzt wurden.

## Beispiele

### Das nächste Auftreten eines Festivals ermitteln

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
