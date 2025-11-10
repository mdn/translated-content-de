---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Das **`Temporal.PlainTime`**-Objekt repräsentiert eine Uhrzeit ohne ein Datum oder eine Zeitzone; beispielsweise ein wiederkehrendes Ereignis, das jeden Tag zur gleichen Zeit stattfindet. Es wird grundsätzlich als eine Kombination aus Stunden-, Minuten-, Sekunden-, Millisekunden-, Mikrosekunden- und Nanosekundenwerten dargestellt.

## Beschreibung

Ein `PlainTime` ist im Wesentlichen der Zeitanteil eines {{jsxref("Temporal.PlainDateTime")}}-Objekts, wobei die Datumsinformationen entfernt wurden. Da die Datums- und Zeitinformationen wenig Interaktion aufweisen, sind alle allgemeinen Informationen über Zeiteigenschaften hier dokumentiert.

### RFC 9557 Format

`PlainTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form:

```plain
HH:mm:ss.sssssssss
```

- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`. Sie kann durch den Zeitdesignator `T` oder `t` vorangestellt sein.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional durch `.` oder `,` und eins bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Uhrzeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.

Als Eingabe können Sie optional das Datum, den Offset, die Zeitzonenkennung und den Kalender im gleichen Format wie [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) einschließen, aber sie werden ignoriert. Ein reiner Datumsstring wird abgelehnt. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekundenziffern konfigurieren.

## Konstruktor

- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainTime`-Objekt, indem die zugrunde liegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeit vor, gleich oder nach der zweiten Zeit liegt. Entspricht dem Vergleich der Stunden-, Minuten-, Sekunden-, Millisekunden-, Mikrosekunden- und Nanosekundenfelder nacheinander.
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.PlainTime`-Objekt aus einem anderen `Temporal.PlainTime`-Objekt, einem Objekt mit Zeiteigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.PlainTime.prototype` definiert und werden von allen `Temporal.PlainTime`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Temporal.PlainTime.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.PlainTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}-Konstruktor.
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- `Temporal.PlainTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.PlainTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine angegebene Dauer vorwärts verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), wobei die Uhr bei Bedarf umschlägt.
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Zeit in ihrem Wert einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) entspricht, und `false` andernfalls. Sie werden anhand ihrer Zeitwerte verglichen. Entspricht `Temporal.PlainTime.compare(this, other) === 0`.
- {{jsxref("Temporal/PlainTime/round", "Temporal.PlainTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) bis zu dieser Zeit darstellt. Die Dauer ist positiv, wenn die andere Zeit vor dieser Zeit liegt, und negativ, wenn danach.
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine angegebene Dauer rückwärts verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), wobei die Uhr bei Bedarf umschlägt.
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Zeit im gleichen [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/PlainTime/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Zeit zurück.
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Zeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Zeit bis zu einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn die andere Zeit nach dieser Zeit liegt, und negativ, wenn davor.
- {{jsxref("Temporal/PlainTime/valueOf", "Temporal.PlainTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainTime`-Instanzen [implizit in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit mit einigen durch neue Werte ersetzten Feldern darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDateTime")}}
