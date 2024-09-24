---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`GeolocationPositionError`** Schnittstelle repräsentiert den Grund eines Fehlers, der bei der Verwendung des Geolokalisierungsgeräts auftritt.

## Instanz-Eigenschaften

_Die Schnittstelle `GeolocationPositionError` erbt keine Eigenschaften._

- {{domxref("GeolocationPositionError.code")}} {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Fehlercode darstellt. Die folgenden Werte sind möglich:

    | Wert  | Zugehörige Konstante  | Beschreibung                                                                                                                                                                                                      |
    | ----- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `1`   | `PERMISSION_DENIED`    | Der Erwerb der Geolokalisierungsinformationen ist fehlgeschlagen, weil die Seite nicht die erforderlichen Berechtigungen hatte, zum Beispiel weil es durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert ist. |
    | `2`   | `POSITION_UNAVAILABLE` | Der Erwerb der Geolokalisierung ist fehlgeschlagen, weil mindestens eine interne Positionsquelle einen internen Fehler zurückgegeben hat.                                                                          |
    | `3`   | `TIMEOUT`              | Die für den Erwerb der Geolokalisierung erlaubte Zeit wurde erreicht, bevor die Informationen erhalten wurden.                                                                                                     |

- {{domxref("GeolocationPositionError.message")}} {{ReadOnlyInline}}
  - : Gibt eine für Menschen lesbare Zeichenkette zurück, die die Details des Fehlers beschreibt. Die Spezifikationen stellen fest, dass dies in erster Linie für Debugging-Zwecke gedacht ist und nicht direkt in einer Benutzeroberfläche angezeigt werden sollte.

## Instanz-Methoden

_Die Schnittstelle `GeolocationPositionError` implementiert oder erbt keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
