---
title: "PerformanceScriptTiming: invoker-Eigenschaft"
short-title: invoker
slug: Web/API/PerformanceScriptTiming/invoker
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`invoker`**-Eigenschaft des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces gibt einen String-Wert zurück, der die Identität der Funktion angibt, die beim Aufruf das Skript ausgeführt hat.

## Wert

Ein String, dessen Struktur von dem Wert des Skripts [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) abhängt:

| `invokerType`                               | Struktur des `invoker`-Strings                                                                                                                                                                                                                                                     | Beispiel(e)                                                                                         |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `"user-callback"`                           | Die Klassen des Objekts, auf dem die enthaltene Funktion definiert ist, gefolgt von einem Punkt, gefolgt vom Funktionsnamen.                                                                                                                                                       | `"Window.requestAnimationFrame"`, `"Window.setTimeout"`                                             |
| `"event-listener"`                          | Der [`tagName`](/de/docs/Web/API/Element/tagName) des Elements, gefolgt von einem Hash und seiner `id` (`#id`) oder von `src=` und seinem `src`-Wert in eckigen Klammern (`[src=url]`), falls keine `id` vorhanden ist, gefolgt von einem Punkt und der Event-Handler-Eigenschaft. | `"IMG#hero.onload"`, `"IMG[src=https://example.com/img.jpg].onload"`, `"BUTTON#updateCart.onclick"` |
| `"resolve-promise"` oder `"reject-promise"` | Das Objekt und die Methode, die das Promise aufgerufen haben, gefolgt von einem Punkt, gefolgt von `"then"` für `"resolve-promise"` und `"catch"` für `"reject-promise"`.                                                                                                          | `"Response.json.then"`, `"Response.json.catch"`                                                     |
| `"classic-script"` oder `"module-script"`   | Die Quell-URL des aufrufenden Skripts.                                                                                                                                                                                                                                             | `"https://example.com/scripts/myscript.js"`                                                         |

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele, die mit der Long Animation Frames API zusammenhängen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
