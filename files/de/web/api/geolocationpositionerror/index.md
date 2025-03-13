---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Das **`GeolocationPositionError`** Interface repräsentiert den Grund für einen Fehler, der bei der Verwendung des Geolokalisierungsgeräts auftritt.

## Instanz-Eigenschaften

_Das `GeolocationPositionError` Interface erbt keine Eigenschaften._

- [`GeolocationPositionError.code`](/de/docs/Web/API/GeolocationPositionError/code) {{ReadOnlyInline}}

  - : Gibt ein `unsigned short` zurück, das den Fehlercode darstellt. Die folgenden Werte sind möglich:

    | Wert | Zugehörige Konstante   | Beschreibung                                                                                                                                                                                                                                     |
    | ---- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `1`  | `PERMISSION_DENIED`    | Das Abrufen der Geolokalisierungsinformationen ist fehlgeschlagen, da die Seite nicht die erforderlichen Berechtigungen hatte, zum Beispiel weil es durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird. |
    | `2`  | `POSITION_UNAVAILABLE` | Das Abrufen der Geolokalisierung ist fehlgeschlagen, weil mindestens eine interne Quelle für die Position einen internen Fehler zurückgegeben hat.                                                                                               |
    | `3`  | `TIMEOUT`              | Die Zeit, die für das Abrufen der Geolokalisierung zur Verfügung stand, wurde überschritten, bevor die Informationen erhalten wurden.                                                                                                            |

- [`GeolocationPositionError.message`](/de/docs/Web/API/GeolocationPositionError/message) {{ReadOnlyInline}}
  - : Gibt einen menschenlesbaren String zurück, der die Details des Fehlers beschreibt. Spezifikationen vermerken, dass dies hauptsächlich für Debugging-Zwecke bestimmt ist und nicht direkt in einer Benutzeroberfläche angezeigt werden soll.

## Instanz-Methoden

_Das `GeolocationPositionError` Interface implementiert oder erbt keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
