---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Das **`Temporal.Instant`**-Objekt repräsentiert einen einzigartigen Zeitpunkt mit Nanosekundenpräzision. Es wird im Wesentlichen als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC) dargestellt, ohne Bezug zu einer Zeitzone oder einem Kalendersystem.

## Beschreibung

`Temporal.Instant` ist semantisch dasselbe wie {{jsxref("Date")}}. Beide kapseln einen einzigen Zeitpunkt, doch `Temporal.Instant` ist präziser, da es Nanosekunden anstelle von Millisekunden speichert. `Temporal.Instant` vermeidet auch die Fallstricke von `Date`, da es keine Kalender- oder Zeitzoneninformationen annimmt — wenn Sie Datums- oder Zeitinformationen wie Jahr oder Monat abrufen möchten, müssen Sie es zunächst mit {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}} in ein {{jsxref("Temporal.ZonedDateTime")}} umwandeln.

Sie können mit der Methode {{jsxref("Date.prototype.toTemporalInstant()")}} von `Date` zu `Temporal.Instant` konvertieren. Diese Methode sollte gegenüber anderen Methoden wie {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} bevorzugt werden, da sie weniger Benutzercode erfordert und möglicherweise besser optimiert ist. Sie können auch von `Temporal.Instant` zu `Date` mit seinen epoch Millisekunden konvertieren, etwa mit `new Date(instant.epochMilliseconds)`.

### RFC 9557 Format

`Instant`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat folgendes Format (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM`, und `DD` können durch `-` oder durch nichts getrennt werden.
- `T`
  - : Der Datum-Zeit-Separator, der `T`, `t`, oder ein Leerzeichen sein kann.
- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional durch einen `.` oder `,` gefolgt von ein bis neun Ziffern ergänzt werden. Standard ist `00`. Die Komponenten `HH`, `mm`, und `ss` können durch `:` oder durch nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine der drei Formen annehmen kann: `HH`, `HH:mm`, oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm`
  - : Entweder der UTC-Indikator `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Subminutenpräzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird, und zwar akzeptiert, aber niemals ausgegeben wird. Wenn ein Offset angegeben wird, wird die Zeit im angegebenen Offset interpretiert.

Als Eingabe können Sie optional die Zeitzonenkennung und den Kalender im gleichen Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) hinzufügen, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteildigits der Sekunden und den Offset konfigurieren.

## Konstruktor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt durch direkte Bereitstellung der zugrundeliegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob dieser Zeitpunkt vor, gleich oder nach einem anderen Zeitpunkt liegt. Entspricht dem Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Zeitpunkte.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC 9557](#rfc_9557_format) String.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC).

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.Instant.prototype` definiert und werden von allen `Temporal.Instant` Instanzen geteilt.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Bei `Temporal.Instant` Instanzen ist der anfängliche Wert der {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} Konstruktor.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der seit der Unix-Epoche verstrichenen Millisekunden darstellt (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt. Entspricht dem Dividieren von `epochNanoseconds` durch `1e6` und dem Anwenden von `floor`.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt eine {{jsxref("BigInt")}} zurück, die die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt darstellt.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Instant"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) verschoben darstellt.
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Zeitpunkt im Wert mit einem anderen Zeitpunkt (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) übereinstimmt, andernfalls `false`. Sie werden anhand ihrer epoch Nanosekunden verglichen. Entspricht `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Zeitpunkt (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) bis zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem Zeitpunkt liegt, und negativ, wenn er danach liegt.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben darstellt.
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Zeitpunkt im gleichen [RFC 9557 Format](#rfc_9557_format) wie beim Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}} darstellt. Soll von {{jsxref("JSON.stringify()")}} implizit aufgerufen werden.
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieses Zeitpunkts zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Zeitpunkt im [RFC 9557 Format](#rfc_9557_format) im angegebenen Zeitfenster darstellt.
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das diesen Zeitpunkt in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Zeitpunkt bis zu einem anderen Zeitpunkt (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt nach diesem Zeitpunkt liegt, und negativ, wenn davor.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Instant`-Instanzen [implizit in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
