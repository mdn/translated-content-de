---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal.Instant`**-Objekt repräsentiert einen einzigartigen Zeitpunkt in der Geschichte mit Nanosekundenpräzision. Es wird grundsätzlich als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) dargestellt, ohne jegliches Zeitzonen- oder Kalendersystem.

## Beschreibung

`Temporal.Instant` ist semantisch dasselbe wie {{jsxref("Date")}}. Beide kapseln einen einzelnen Zeitpunkt, aber `Temporal.Instant` ist präziser, da es Nanosekunden anstelle von Millisekunden speichert. `Temporal.Instant` vermeidet auch die Fallstricke von `Date`, da es keine Annahmen über Kalender- oder Zeitzoneninformationen trifft. Wenn Sie Daten wie Jahr oder Monat auslesen möchten, müssen Sie es zuerst in ein {{jsxref("Temporal.ZonedDateTime")}} umwandeln, indem Sie {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}} verwenden.

Sie können mit der Methode {{jsxref("Date.prototype.toTemporalInstant()")}}, die gegenüber anderen Methoden wie `Temporal.Instant.fromEpochMilliseconds()` bevorzugt werden sollte, aus `Date` zu `Temporal.Instant` konvertieren, da erstere weniger Benutzercode benötigt und möglicherweise optimierter ist. Sie können auch mit den Epochen-Millisekunden von `Temporal.Instant` zu `Date` konvertieren, z. B. `new Date(instant.epochMilliseconds)`.

### RFC 9557-Format

`Instant`-Objekte können mithilfe des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat folgende Form (Abstände dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm:ss.sssssssss
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `T`
  - : Der Datum-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann.
- `HH`
  - : Eine zweistellige Zahl von `00` bis `23`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standard ist `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm:ss.sssssssss`
  - : Entweder der UTC-Bezeichner `Z` oder `z` oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass eine subminutliche Präzision möglicherweise von anderen Systemen nicht unterstützt wird. Wenn ein Offset angegeben wird, wird die Zeit im angegebenen Offset interpretiert.

Als Eingabe können Sie optional die Zeitzonenkennung und den Kalender im gleichen Format wie [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) einfügen, diese werden jedoch ignoriert. Andere Anmerkungen im `[key=value]`-Format werden ebenfalls ignoriert, und sie dürfen nicht das kritische Flag haben.

Bei der Serialisierung können Sie die Bruchteile der Sekunde und den Offset konfigurieren.

## Konstruktor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt, indem die zugrundeliegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob der erste Zeitpunkt vor, gleich oder nach dem zweiten Zeitpunkt liegt. Äquivalent zum Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Zeitpunkte.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC 9557](#rfc_9557-format) String.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
  - : Erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC).

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.Instant.prototype` definiert und werden von allen `Temporal.Instant`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Temporal.Instant`-Instanzen ist der Anfangswert der {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}}-Konstruktor.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden angibt, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt verstrichen sind. Äquivalent zur Division von `epochNanoseconds` durch `1e6` und Abrunden nach unten.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt darstellt.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.Instant"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einem durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbaren Format) vorwärts bewegt darstellt.
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieser Zeitpunkt in Wert einem anderen Zeitpunkt (in einem durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbaren Format) entspricht, und `false` andernfalls. Sie werden anhand ihrer Epochen-Nanosekunden verglichen. Äquivalent zu `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer vom anderen Zeitpunkt (in einem durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbaren Format) bis zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem Zeitpunkt liegt, und negativ, wenn danach.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einem durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbaren Format) rückwärts bewegt darstellt.
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diesen Zeitpunkt im gleichen [RFC 9557-Format](#rfc_9557-format) wie der Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachabhängigen Darstellung dieses Zeitpunkts zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), wird diese Methode an `Intl.DateTimeFormat` delegiert.
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen Zeitpunkt im [RFC 9557-Format](#rfc_9557-format) unter Verwendung der angegebenen Zeitzone darstellt.
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
  - : Gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das diesen Zeitpunkt in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Zeitpunkt zu einem anderen Zeitpunkt (in einem durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbaren Format) darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt nach diesem Zeitpunkt ist, und negativ, wenn davor.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Instant`-Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
