---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal.PlainTime`**-Objekt repräsentiert eine Zeit ohne Datum oder Zeitzone; zum Beispiel ein wiederkehrendes Ereignis, das jeden Tag zur gleichen Zeit stattfindet. Es wird grundsätzlich als Kombination aus Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde dargestellt.

## Beschreibung

Ein `PlainTime` ist im Wesentlichen der Zeitanteil eines {{jsxref("Temporal.PlainDateTime")}}-Objekts, bei dem die Datumsinformationen entfernt wurden. Da Datums- und Zeitinformationen wenig Interaktion haben, sind alle allgemeinen Informationen zu Zeiteigenschaften hier dokumentiert.

### RFC 9557-Format

`PlainTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form:

```plain
HH:mm:ss.sssssssss
```

- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`. Sie kann durch den Zeitbezeichner `T` oder `t` vorangestellt werden.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die `HH`-, `mm`- und `ss`-Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen annehmen kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.

Als Eingabe dürfen Sie optional das Datum, den Offset, den Zeitzonen-Identifikator und den Kalender im gleichen Format wie bei [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einschließen, aber sie werden ignoriert. Ein reiner Datums-String wird abgelehnt. Andere Anmerkungen im Format `[key=value]` werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekundenziffern konfigurieren.

## Konstruktor

- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
  - : Erstellt ein neues `Temporal.PlainTime`-Objekt durch direkte Bereitstellung der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeit vor, gleich oder nach der zweiten Zeit liegt. Entspricht dem Vergleich der Felder Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde nacheinander.
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
  - : Erstellt ein neues `Temporal.PlainTime`-Objekt aus einem anderen `Temporal.PlainTime`-Objekt, einem Objekt mit Zeiteigenschaften oder einem [RFC 9557](#rfc_9557-format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind in `Temporal.PlainTime.prototype` definiert und werden von allen Instanzen von `Temporal.PlainTime` geteilt.

- {{jsxref("Object/constructor", "Temporal.PlainTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}-Konstruktor.
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- `Temporal.PlainTime.prototype[Symbol.toStringTag]`
  - : Der ursprüngliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben darstellt, wobei es erforderlichenfalls um die Uhr herum geht.
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Zeit in ihrem Wert einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) gleichwertig ist, und ansonsten `false`. Sie werden nach ihren Zeitwerten verglichen. Entspricht `Temporal.PlainTime.compare(this, other) === 0`.
- {{jsxref("Temporal/PlainTime/round", "Temporal.PlainTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) bis zu dieser Zeit darstellt. Die Dauer ist positiv, wenn die andere Zeit vor dieser Zeit liegt, und negativ, wenn danach.
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) zurückverschoben darstellt, wobei es erforderlichenfalls um die Uhr herum geht.
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diese Zeit im gleichen [RFC 9557-Format](#rfc_9557-format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainTime/toString", "toString()")}}. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieser Zeit zurück.
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
  - : Gibt einen String zurück, der diese Zeit im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Zeit bis zu einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn die andere Zeit nach dieser Zeit liegt, und negativ, wenn davor.
- {{jsxref("Temporal/PlainTime/valueOf", "Temporal.PlainTime.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, der verhindert, dass `Temporal.PlainTime`-Instanzen [implizit in Primitive konvertiert werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) bei arithmetischen oder Vergleichsoperationen.
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit mit einigen durch neue Werte ersetzten Feldern darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDateTime")}}
