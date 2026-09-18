---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Das **`Temporal.Instant`**-Objekt stellt einen eindeutigen Zeitpunkt mit Nanosekundenpräzision dar. Es wird grundlegend als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) ohne Zeitzone oder Kalendersystem dargestellt.

## Beschreibung

`Temporal.Instant` ist semantisch identisch mit {{jsxref("Date")}}. Beide kapseln einen einzelnen Zeitpunkt, aber `Temporal.Instant` ist präziser, da es Nanosekunden statt Millisekunden speichert. `Temporal.Instant` vermeidet außerdem Fallstricke von `Date`, da es keine Kalender- oder Zeitzoneninformationen annimmt – wenn Sie Datums- oder Zeitinformationen wie Jahr oder Monat auslesen möchten, müssen Sie es zunächst mithilfe von {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}} in ein {{jsxref("Temporal.ZonedDateTime")}} umwandeln.

Sie können mit der Methode {{jsxref("Date.prototype.toTemporalInstant()")}} von `Date` in `Temporal.Instant` umwandeln. Diese sollte anderen Methoden wie {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} vorgezogen werden, da erstere weniger Benutzercode erfordert und möglicherweise stärker optimiert ist. Sie können außerdem über dessen Epochenmillisekunden von `Temporal.Instant` in `Date` umwandeln, etwa mit `new Date(instant.epochMilliseconds)`.

### RFC-9557-Format

`Instant`-Objekte können mit dem Format [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557), einer Erweiterung des Formats [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339), serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der besseren Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder gar nicht getrennt werden.
- `T`
  - : Das Datum-Uhrzeit-Trennzeichen, das `T`, `t` oder ein Leerzeichen sein kann.
- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Der Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Darauf können optional ein `.` oder `,` und ein bis neun Ziffern folgen. Der Standardwert ist `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder gar nicht getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm`
  - : Entweder die UTC-Kennung `Z` oder `z` oder ein Offset von UTC in Form eines `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Präzision unterhalb einer Minute (`:ss.sssssssss`) möglicherweise von anderen Systemen nicht unterstützt wird und akzeptiert, aber niemals ausgegeben wird. Wenn ein Offset angegeben ist, wird die Zeit im angegebenen Offset interpretiert.

Als Eingabe können Sie optional die Zeitzonenkennung und den Kalender im selben Format wie bei [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) angeben, sie werden jedoch ignoriert. Andere Annotationen im Format `[key=value]` werden ebenfalls ignoriert und dürfen nicht das Critical-Flag besitzen.

Bei der Serialisierung können Sie die Ziffern der Sekundenbruchteile und den Offset konfigurieren.

## Konstruktor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob der erste Zeitpunkt vor dem zweiten liegt, mit ihm identisch ist oder nach ihm liegt. Entspricht dem Vergleichen der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Zeitpunkte.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC-9557](#rfc-9557-format)-String.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.Instant.prototype` definiert und werden von allen `Temporal.Instant`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Instant`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}}.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden darstellt, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt vergangen sind. Entspricht dem Dividieren von `epochNanoseconds` durch `1e6` und dem Abrunden.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
  - : Gibt einen {{jsxref("BigInt")}} zurück, der die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt darstellt.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Temporal.Instant"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen um eine angegebene Dauer vorverschobenen Zeitpunkt darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieser Zeitpunkt wertgleich mit einem anderen Zeitpunkt ist (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} umwandelbar ist), andernfalls `false`. Sie werden anhand ihrer Epochen-Nanosekunden verglichen. Entspricht `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen auf die angegebene Einheit gerundeten Zeitpunkt darstellt.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Zeitpunkt (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} umwandelbar ist) bis zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem liegt, und negativ, wenn er danach liegt.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen um eine angegebene Dauer zurückverschobenen Zeitpunkt darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diesen Zeitpunkt im selben [RFC-9557-Format](#rfc-9557-format) darstellt wie ein Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}}. Ist dafür vorgesehen, implizit durch {{jsxref("JSON.stringify()")}} aufgerufen zu werden.
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses Zeitpunkts zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen Zeitpunkt im [RFC-9557-Format](#rfc-9557-format) unter Verwendung der angegebenen Zeitzone darstellt.
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das diesen Zeitpunkt in der angegebenen Zeitzone unter Verwendung des Kalendersystems ISO 8601 darstellt.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Zeitpunkt bis zu einem anderen Zeitpunkt darstellt (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} umwandelbar ist). Die Dauer ist positiv, wenn der andere Zeitpunkt nach diesem liegt, und negativ, wenn er davor liegt.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, wodurch verhindert wird, dass `Temporal.Instant`-Instanzen bei Verwendung in arithmetischen oder Vergleichsoperationen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
