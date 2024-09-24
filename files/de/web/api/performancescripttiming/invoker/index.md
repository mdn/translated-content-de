---
title: "PerformanceScriptTiming: invoker-Eigenschaft"
short-title: invoker
slug: Web/API/PerformanceScriptTiming/invoker
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`invoker`** der {{domxref("PerformanceScriptTiming")}}-Schnittstelle gibt einen Zeichenfolgenwert zurück, der die Identität der Funktion angibt, die beim Aufrufen das Skript ausgeführt hat.

## Wert

Eine Zeichenkette, deren Struktur vom Wert von {{domxref("PerformanceScriptTiming.invokerType")}} des Skripts abhängt:

| `invokerType`                             | Struktur der `invoker`-Zeichenkette                                                                                                                                                                                                                                     | Beispiel(e)                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `"user-callback"`                         | Die Klassenbezeichnung des Objekts, auf dem die enthaltene Funktion definiert ist, gefolgt von einem Punkt, gefolgt vom Funktionsnamen.                                                                                                                                  | `"Window.requestAnimationFrame"`, `"Window.setTimeout"`                                               |
| `"event-listener"`                        | Der {{domxref("Element.tagName", "tagName")}} des Elements, gefolgt von einem Hash und seiner `id` (`#id`) oder `src=` und seinem `src`-Wert in eckigen Klammern (`[src=url]`), wenn keine `id` vorhanden ist, gefolgt von einem Punkt und der Ereignishandler-Eigenschaft. | `"IMG#hero.onload"`, `"IMG[src=https://example.com/img.jpg].onload"`, `"BUTTON#updateCart.onclick"`    |
| `"resolve-promise"` oder `"reject-promise"` | Das Objekt und die Methode, die das Promise ausgelöst haben, gefolgt von einem Punkt, gefolgt von `"then"` für `"resolve-promise"` und `"catch"` für `"reject-promise"`.                                                                                                 | `"Response.json.then"`, `"Response.json.catch"`                                                       |
| `"classic-script"` oder `"module-script"`   | Die Quell-URL des aufrufenden Skripts.                                                                                                                                                                                                                                   | `"https://example.com/scripts/myscript.js"`                                                            |

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
