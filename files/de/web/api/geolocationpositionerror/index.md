---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Das **`GeolocationPositionError`**-Interface repräsentiert den Grund eines Fehlers, der bei der Verwendung des geografischen Ortungsgeräts auftritt.

## Instanzeigenschaften

_Das `GeolocationPositionError`-Interface erbt keine Eigenschaft._

- [`GeolocationPositionError.code`](/de/docs/Web/API/GeolocationPositionError/code) {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Fehlercode repräsentiert. Die folgenden Werte sind möglich:

    | Wert | Zugehörige Konstante   | Beschreibung                                                                                                                                                                                                                       |
    | ---- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1`  | `PERMISSION_DENIED`    | Der Erwerb der Geolokalisierungsinformationen schlug fehl, weil die Seite nicht die notwendigen Berechtigungen hatte, beispielsweise weil sie durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert ist. |
    | `2`  | `POSITION_UNAVAILABLE` | Der Erwerb der Geolokalisierung schlug fehl, weil mindestens eine interne Quelle für die Position einen internen Fehler zurückgab.                                                                                                 |
    | `3`  | `TIMEOUT`              | Die für den Erwerb der Geolokalisierung zugelassene Zeit wurde erreicht, bevor die Informationen erhalten wurden.                                                                                                                  |

- [`GeolocationPositionError.message`](/de/docs/Web/API/GeolocationPositionError/message) {{ReadOnlyInline}}
  - : Gibt einen menschenlesbaren String zurück, der die Details des Fehlers beschreibt. Spezifikationen vermerken, dass dies hauptsächlich für Debugging-Zwecke gedacht ist und nicht direkt in einer Benutzeroberfläche gezeigt werden sollte.

## Instanzmethoden

_Das `GeolocationPositionError`-Interface implementiert oder erbt keine Methode._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
