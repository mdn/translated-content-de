---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal.Instant`**-Objekt repräsentiert einen einzigartigen Moment der Zeit mit Nanosekunden-Präzision. Es wird grundsätzlich als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) dargestellt, ohne Berücksichtigung einer Zeitzone oder eines Kalendersystems.

## Beschreibung

`Temporal.Instant` ist semantisch dasselbe wie {{jsxref("Date")}}. Beide kapseln einen einzigen Punkt in der Zeit, aber `Temporal.Instant` ist präziser, da es Nanosekunden statt Millisekunden speichert. `Temporal.Instant` vermeidet auch die Fallstricke von `Date`, da es keine Kalender- oder Zeitzoneninformationen annimmt — wenn Sie Datums- oder Zeitinformationen wie Jahr oder Monat lesen möchten, müssen Sie es zuerst mit {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}} in ein {{jsxref("Temporal.ZonedDateTime")}} umwandeln.

Sie können `Date` in `Temporal.Instant` umwandeln, indem Sie die Methode {{jsxref("Date.prototype.toTemporalInstant()")}} verwenden, welche gegenüber anderen Methoden wie {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} bevorzugt werden sollte, da die erstere weniger Benutzer-Code benötigt und möglicherweise effizienter ist. Sie können auch von `Temporal.Instant` in `Date` konvertieren, indem Sie seine Epochen-Millisekunden verwenden, zum Beispiel `new Date(instant.epochMilliseconds)`.

### RFC 9557 Format

`Instant`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `T`
  - : Der Datum-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann.
- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` gefolgt von einer bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine der drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm`
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder eine Abweichung von UTC in der Form `+` oder `-`, gefolgt von demselben Format wie die Zeitkomponente. Beachten Sie, dass Sub-Minuten-Präzision (`:ss.sssssssss`) möglicherweise von anderen Systemen nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Wenn ein Offset angegeben wird, wird die Zeit im angegebenen Offset interpretiert.

Als Eingabe können Sie optional die Zeitzonenkennung und den Kalender im selben Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) hinzufügen, aber sie werden ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekunden und den Offset konfigurieren.

## Konstruktor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt, indem die zugrunde liegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob der erste Moment vor, gleich oder nach dem zweiten Moment liegt. Entspricht dem Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Zeitpunkte.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC 9557](#rfc_9557_format)-String.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.Instant.prototype` definiert und werden von allen `Temporal.Instant`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Instant`-Instanzen ist der Anfangswert der {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}}-Konstruktor.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden darstellt, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und der Anwendung von `Math.floor`.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment darstellt.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.Instant"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment um eine angegebene Dauer vorwärts bewegt darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieser Moment in seinem Wert einem anderen Moment entspricht (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist), und `false` sonst. Sie werden durch ihre Epochen-Nanosekunden verglichen. Entspricht `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Moment (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) bis zu diesem Moment darstellt. Die Dauer ist positiv, wenn der andere Moment vor diesem Moment liegt, und negativ, wenn er danach liegt.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment um eine angegebene Dauer rückwärts bewegt darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diesen Moment im selben [RFC 9557-Format](#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}}. Soll offensichtlich von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Moments zurück. In Implementierungen mit [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)-Unterstützung delegiert diese Methode an `Intl.DateTimeFormat`.
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen Moment im [RFC 9557-Format](#rfc_9557_format) unter Verwendung der angegebenen Zeitzone darstellt.
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das diesen Moment in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Moment zu einem anderen Moment (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Moment nach diesem Moment liegt, und negativ, wenn er davor liegt.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.Instant`-Instanzen [implizit in primitive Typen umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
