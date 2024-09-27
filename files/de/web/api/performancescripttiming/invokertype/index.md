---
title: "PerformanceScriptTiming: invokerType-Eigenschaft"
short-title: invokerType
slug: Web/API/PerformanceScriptTiming/invokerType
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`invokerType`** des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces gibt einen Zeichenfolgenwert zurück, der den Typ der Funktion angibt, die beim Aufruf das Skript ausgeführt hat.

## Wert

Eine Zeichenfolge, die den `invoker`-Typ des Skripteintrittspunkts angibt. Mögliche Werte sind:

- `"user-callback"`
  - : Ein bekannter Callback, der innerhalb einer Webplattform-API aufgerufen wird, wie zum Beispiel [`setTimeout()`](/de/docs/Web/API/SetTimeout) oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).
- `"event-listener"`
  - : Ein Ereignis-Listener für ein Webplattform-Ereignis, wie zum Beispiel [`click`](/de/docs/Web/API/Element/click_event), [`load`](/de/docs/Web/API/Window/load_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event).
- `"resolve-promise"`
  - : Eine Handler-Funktion für den gelösten Zustand eines Versprechen der Webplattform, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch). Beachten Sie, dass im Fall von Promise alle Handler desselben Promise als einzelner `"script"`-Eintragstyp zusammengefasst werden.
- `"reject-promise"`
  - : Eine Handler-Funktion für den abgelehnten Zustand eines Versprechens der Webplattform.
- `"classic-script"`
  - : Die Auswertung eines Standard-Skripts (zum Beispiel über ein {{htmlelement("script")}}-Element oder eine [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Anweisung).
- `"module-script"`
  - : Die Auswertung eines Modul-Skripts.

Der Aufbau des [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker)-Wertes hängt vom `invokerType`-Wert des Skripts ab. Weitere Details finden Sie auf der `invoker`-Seite.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
