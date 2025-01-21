---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal.PlainTime`**-Objekt repräsentiert eine Zeit ohne Datum oder Zeitzone; zum Beispiel ein sich wiederholendes Ereignis, das jeden Tag zur selben Zeit stattfindet. Es ist im Wesentlichen als Kombination aus Stunden-, Minuten-, Sekunden-, Millisekunden-, Mikrosekunden- und Nanosekundenwerten dargestellt.

## Beschreibung

Ein `PlainTime` ist im Wesentlichen der Zeitanteil eines {{jsxref("Temporal.PlainDateTime")}}-Objekts, bei dem die Datumsinformationen entfernt wurden. Da Datum- und Zeitinformationen nicht viel miteinander interagieren, sind alle allgemeinen Informationen über Zeiteigenschaften hier dokumentiert.

### RFC 9557-Format

`PlainTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Die Zeichenkette hat die folgende Form:

```plain
HH:mm:ss.sssssssss
```

- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`. Sie kann vor der Zeitbezeichner `T` oder `t` stehen.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standardwert ist `00`. Die `HH`, `mm` und `ss`-Komponenten können durch `:` oder nichts getrennt werden. Es kann entweder nur `ss` oder sowohl `ss` als auch `mm` weggelassen werden, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.

Als Eingabe können Sie optional das Datum, den Offset, den Zeitzonen-Identifikator und den Kalender im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einbeziehen, aber sie werden ignoriert. Eine nur aus Datum bestehende Zeichenkette wird abgelehnt. Andere Anmerkungen im Format `[key=value]` werden ebenfalls ignoriert und dürfen nicht das kritische Flag enthalten.

Beim Serialisieren können Sie die Bruchteile von Sekunden konfigurieren.

## Konstruktor

- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
  - : Erstellt ein neues `Temporal.PlainTime`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeit vor, gleich oder nach der zweiten Zeit liegt. Entspricht dem Vergleich der Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde nacheinander.
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
  - : Erstellt ein neues `Temporal.PlainTime`-Objekt aus einem anderen `Temporal.PlainTime`-Objekt, einem Objekt mit Zeiteigenschaften oder einer [RFC 9557](#rfc_9557-format)-Zeichenkette.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainTime.prototype` definiert und werden von allen Instanzen von `Temporal.PlainTime` geteilt.

- {{jsxref("Object/constructor", "Temporal.PlainTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}-Konstruktor.
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit repräsentiert.
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit repräsentiert.
- {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit repräsentiert.
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit repräsentiert.
- `Temporal.PlainTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"Temporal.PlainTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) nach vorne verschoben darstellt und dabei, falls nötig, die Uhr dreht.
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Zeit im Wert einer anderen Zeit entspricht (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann), andernfalls `false`. Sie werden durch ihre Zeitwerte verglichen. Entspricht `Temporal.PlainTime.compare(this, other) === 0`.
- {{jsxref("Temporal/PlainTime/round", "Temporal.PlainTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Zeit (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann) bis zu dieser Zeit darstellt. Die Dauer ist positiv, wenn die andere Zeit vor dieser Zeit liegt, und negativ, wenn danach.
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) nach hinten verschoben darstellt und dabei, falls nötig, die Uhr dreht.
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die diese Zeit im selben [RFC 9557-Format](#rfc_9557-format) wie der Aufruf von {{jsxref("Temporal/PlainTime/toString", "toString()")}} darstellt. Soll durch {{jsxref("JSON.stringify()")}} implizit aufgerufen werden.
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieser Zeit zurück.
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die diese Zeit im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Zeit bis zu einer anderen Zeit (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann) darstellt. Die Dauer ist positiv, wenn die andere Zeit nach dieser Zeit liegt, und negativ, wenn davor.
- {{jsxref("Temporal/PlainTime/valueOf", "Temporal.PlainTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainTime`-Instanzen [implizit in primitive Typen umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
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
