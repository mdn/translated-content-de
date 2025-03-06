---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.Instant`** Objekt repräsentiert einen einzigartigen Punkt in der Geschichte mit Nanosekundenpräzision. Es wird im Wesentlichen als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC) dargestellt, ohne jegliches Zeitzonen- oder Kalendersystem.

## Beschreibung

`Temporal.Instant` ist semantisch dasselbe wie {{jsxref("Date")}}. Beide kapseln einen einzigen Zeitpunkt, aber `Temporal.Instant` ist präziser, da es Nanosekunden statt Millisekunden speichert. `Temporal.Instant` vermeidet auch die Fallstricke von `Date`, da es keine Annahmen über Kalender- oder Zeitzoneninformationen trifft – wenn Sie Kalender- oder Zeitinformationen wie Jahr oder Monat lesen möchten, müssen Sie es zuerst in ein {{jsxref("Temporal.ZonedDateTime")}} konvertieren, indem Sie {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}} verwenden.

Sie können von `Date` zu `Temporal.Instant` mit der Methode {{jsxref("Date.prototype.toTemporalInstant()")}} konvertieren, was gegenüber anderen Methoden wie {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} bevorzugt werden sollte, da die erstgenannte Methode weniger Benutzercode erfordert und möglicherweise optimierter ist. Sie können auch von `Temporal.Instant` zu `Date` konvertieren, indem Sie dessen Epoche-Millisekunden verwenden, z.B. `new Date(instant.epochMilliseconds)`.

### RFC 9557-Format

`Instant`-Objekte können unter Verwendung des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollten im tatsächlichen String nicht vorkommen):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt sein.
- `T`
  - : Der Datum-Uhrzeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann.
- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Darf optional von einem `.` oder `,` gefolgt sein und eine bis neun Stellen enthalten. Standardwert ist `00`. Die `HH`, `mm`, und `ss` Komponenten können durch `:` oder nichts getrennt sein. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Uhrzeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm`
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-` gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Minutenauflösungen (`:ss.sssssssss`) möglicherweise von anderen Systemen nicht unterstützt werden und akzeptiert, aber nie ausgegeben werden. Wenn ein Offset angegeben ist, wird die Uhrzeit im angegebenen Offset interpretiert.

Als Eingabe können Sie optional den Zeitzonen-Identifikator und den Kalender im gleichen Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) einfügen, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert, und sie dürfen nicht das kritische Flag enthalten.

Bei der Serialisierung können Sie die Bruchteile von Sekunden und den Offset konfigurieren.

## Konstruktor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant` Objekt durch direkte Angabe der zugrundeliegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Instant vor dem zweiten, dasselbe ist oder danach kommt. Entspricht dem Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Instants.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC 9557](#rfc_9557-format) String.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC).

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.Instant.prototype` definiert und werden von allen `Temporal.Instant`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Instant` Instanzen ist der Initialwert der {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}}-Konstruktor.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt darstellt. Entspricht der Division von `epochNanoseconds` durch `1e6` und Abrunden.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt darstellt.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Instant"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment um eine gegebene Dauer (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) weiter vorwärts bewegt darstellt.
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Zeitpunkt in seinem Wert einem anderen Zeitpunkt (in einer Form konvertierbar durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) entspricht, und `false` andernfalls. Sie werden durch ihre Epoche-Nanosekunden verglichen. Entspricht `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Zeitpunkt (in einer Form konvertierbar durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) bis zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem Zeitpunkt liegt, und negativ, wenn danach.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment um eine gegebene Dauer (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) rückwärts bewegt darstellt.
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Moment im gleichen [RFC 9557-Format](#rfc_9557-format) wie ein Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieses Zeitpunkts zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), delegiert diese Methode zu `Intl.DateTimeFormat`.
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Zeitpunkt im [RFC 9557-Format](#rfc_9557-format) unter Verwendung der angegebenen Zeitzone darstellt.
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das diesen Zeitpunkt in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Zeitpunkt bis zu einem anderen Zeitpunkt (in einer Form konvertierbar durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt nach diesem Zeitpunkt liegt, und negativ, wenn vorher.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Instant`-Instanzen [implizit in Primitiven umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
