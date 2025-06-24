---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`GeolocationPositionError`**-Schnittstelle repräsentiert den Grund für einen Fehler, der beim Verwenden des Geolokalisierungsgeräts auftritt.

## Instanz-Eigenschaften

_Die `GeolocationPositionError`-Schnittstelle erbt keine Eigenschaften._

- [`GeolocationPositionError.code`](/de/docs/Web/API/GeolocationPositionError/code) {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Fehlercode darstellt. Die folgenden Werte sind möglich:

    | Wert | Zugehörige Konstante   | Beschreibung                                                                                                                                                                                                                                      |
    | ---- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1`  | `PERMISSION_DENIED`    | Die Erfassung der Geolokalisierungsinformationen schlug fehl, weil die Seite nicht die notwendigen Berechtigungen hatte, beispielsweise weil sie durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert ist. |
    | `2`  | `POSITION_UNAVAILABLE` | Die Erfassung der Geolokalisierung schlug fehl, weil mindestens eine interne Positionsquelle einen internen Fehler zurückgab.                                                                                                                     |
    | `3`  | `TIMEOUT`              | Die erlaubte Zeit, um die Geolokalisierung zu erfassen, wurde erreicht, bevor die Informationen abgerufen wurden.                                                                                                                                 |

- [`GeolocationPositionError.message`](/de/docs/Web/API/GeolocationPositionError/message) {{ReadOnlyInline}}
  - : Gibt eine menschenlesbare Zeichenkette zurück, die die Details des Fehlers beschreibt. Spezifikationen beachten, dass dies hauptsächlich für Debugging-Zwecke gedacht ist und nicht direkt in einer Benutzeroberfläche angezeigt werden sollte.

## Instanz-Methoden

_Die `GeolocationPositionError`-Schnittstelle implementiert oder erbt keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
