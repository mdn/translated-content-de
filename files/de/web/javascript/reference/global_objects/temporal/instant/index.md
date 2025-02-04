---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.Instant`** Objekt repräsentiert einen einzigartigen Zeitpunkt in der Geschichte, mit Nanosekunden-Genauigkeit. Es wird grundsätzlich als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) dargestellt, ohne Berücksichtigung von Zeitzonen oder Kalendersystemen.

## Beschreibung

`Temporal.Instant` ist semantisch dasselbe wie {{jsxref("Date")}}. Beide kapseln einen einzelnen Zeitpunkt, aber `Temporal.Instant` ist präziser, da es Nanosekunden statt Millisekunden speichert. `Temporal.Instant` vermeidet auch die Fallstricke von `Date`, da es keine Annahmen über Kalender- oder Zeitzoneninformationen trifft - wenn Sie Datum- oder Zeitinformationen wie Jahr oder Monat lesen möchten, müssen Sie es zuerst in eine {{jsxref("Temporal.ZonedDateTime")}} konvertieren, indem Sie {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}} verwenden.

Sie können von `Date` zu `Temporal.Instant` mit der Methode {{jsxref("Date.prototype.toTemporalInstant()")}} konvertieren, die gegenüber anderen Methoden wie {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} bevorzugt werden sollte, da erstere weniger Benutzer-Code enthält und möglicherweise besser optimiert ist. Sie können auch von `Temporal.Instant` zu `Date` konvertieren, indem Sie dessen Epochen-Millisekunden verwenden, z.B. `new Date(instant.epochMilliseconds)`.

### RFC 9557 Format

`Instant` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit angegeben und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM`, und `DD` Komponenten können durch `-` oder durch nichts getrennt werden.
- `T`
  - : Der Datums-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann.
- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` gefolgt und von eins bis neun Ziffern ergänzt werden. Standardmäßig `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder durch nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen annehmen kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm`
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder eine Abweichung von UTC in Form von `+` oder `-` gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Subminuten-Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Wenn eine Abweichung angegeben wird, wird die Zeit in der angegebenen Abweichung interpretiert.

Als Eingabe können Sie optional die Zeitzonenkennung und den Kalender im gleichen Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) angeben, aber sie werden ignoriert. Andere Annotationen im `[key=value]` Format werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekunde und die Abweichung festlegen.

## Konstruktor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant` Objekt, indem die zugrundeliegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Instant vor, gleichzeitig mit oder nach dem zweiten Instant kommt. Entspricht dem Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Instants.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant` Objekt aus einem anderen `Temporal.Instant` Objekt oder einem [RFC 9557](#rfc_9557_format) String.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant` Objekt aus der Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant` Objekt aus der Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.Instant.prototype` definiert und werden von allen `Temporal.Instant` Instanzen geteilt.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Instant` Instanzen ist der anfängliche Wert der {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} Konstruktor.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) verstrichenen Millisekunden bis zu diesem Instant darstellt. Entspricht dem Dividieren von `epochNanoseconds` durch `1e6` und dem Abrunden.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt einen {{jsxref("BigInt")}} zurück, der die Anzahl der seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) verstrichenen Nanosekunden bis zu diesem Instant darstellt.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Instant"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Instant um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) verschoben darstellt.
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Instant wertmäßig einem anderen Instant entspricht (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist), und sonst `false`. Sie werden durch ihre Epochen-Nanosekunden verglichen. Entspricht `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Instant auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Instant (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) bis zu diesem Instant darstellt. Die Dauer ist positiv, wenn der andere Instant vor diesem Instant ist, und negativ, wenn danach.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Instant um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) verschoben darstellt.
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Instant im selben [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Instants zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Instant im [RFC 9557 Format](#rfc_9557_format) im angegebenen Zeitbereich darstellt.
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}} Objekt zurück, das diesen Instant in der angegebenen Zeitzone unter Verwendung des ISO 8601 Kalendersystems darstellt.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Instant zu einem anderen Instant (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Instant nach diesem Instant liegt, und negativ, wenn vorher.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Instant` Instanzen bei arithmetischen oder Vergleichsoperationen [implizit in primitive Werte konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
