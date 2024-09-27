---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`GeolocationPositionError`**-Schnittstelle repräsentiert den Grund für einen Fehler, der bei der Verwendung des Geolokalisierungsgeräts auftritt.

## Instanzeigenschaften

_Die `GeolocationPositionError`-Schnittstelle erbt keine Eigenschaften._

- [`GeolocationPositionError.code`](/de/docs/Web/API/GeolocationPositionError/code) {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Fehlercode darstellt. Folgende Werte sind möglich:

    | Wert | Zugehörige Konstante   | Beschreibung                                                                                                                                                                                                                                       |
    | ---- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1`  | `PERMISSION_DENIED`    | Der Erwerb der Geolokalisierungsinformationen schlug fehl, weil die Seite nicht über die erforderlichen Berechtigungen verfügte, beispielsweise weil sie durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert ist. |
    | `2`  | `POSITION_UNAVAILABLE` | Der Erwerb der Geolokalisierung schlug fehl, weil mindestens eine interne Quelle der Position einen internen Fehler zurückgab.                                                                                                                     |
    | `3`  | `TIMEOUT`              | Die für den Erwerb der Geolokalisierung erlaubte Zeit wurde erreicht, bevor die Informationen erlangt wurden.                                                                                                                                      |

- [`GeolocationPositionError.message`](/de/docs/Web/API/GeolocationPositionError/message) {{ReadOnlyInline}}
  - : Gibt einen menschenlesbaren String zurück, der die Details des Fehlers beschreibt. Spezifikationen weisen darauf hin, dass dies hauptsächlich für Debugging-Zwecke gedacht ist und nicht direkt in einer Benutzeroberfläche angezeigt werden soll.

## Instanzmethoden

_Die `GeolocationPositionError`-Schnittstelle implementiert oder erbt keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
