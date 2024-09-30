---
title: "PerformanceScriptTiming: invokerType-Eigenschaft"
short-title: invokerType
slug: Web/API/PerformanceScriptTiming/invokerType
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`invokerType`**-Eigenschaft des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces ist eine schreibgeschützte Eigenschaft, die einen Zeichenfolgenwert zurückgibt, der den Typ des Features angibt, das beim Aufrufen das Skript ausgeführt hat.

## Wert

Eine Zeichenfolge, die den Invoker-Typ des Skripteintrittspunkts angibt. Mögliche Werte sind:

- `"user-callback"`
  - : Ein bekannter Rückruf, der innerhalb einer Webplattform-API aufgerufen wird, wie [`setTimeout()`](/de/docs/Web/API/SetTimeout) oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).
- `"event-listener"`
  - : Ein Ereignis-Listener für ein Webplattform-Ereignis, wie [`click`](/de/docs/Web/API/Element/click_event), [`load`](/de/docs/Web/API/Window/load_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event).
- `"resolve-promise"`
  - : Eine Handler-Funktion für den aufgelösten Zustand eines Webplattform-Versprechens, wie [`fetch()`](/de/docs/Web/API/Window/fetch). Beachten Sie, dass im Fall von Promises alle Handler desselben Promises als einzelner `"script"`-Eintragstyp zusammengefasst werden.
- `"reject-promise"`
  - : Eine Handler-Funktion für den abgelehnten Zustand eines Webplattform-Versprechens.
- `"classic-script"`
  - : Die Evaluierung eines Standardskripts (zum Beispiel über ein {{htmlelement("script")}}-Element oder eine [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Anweisung).
- `"module-script"`
  - : Die Evaluierung eines Moduls.

Die Struktur des [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker)-Wertes hängt vom `invokerType`-Wert des Skripts ab. Besuchen Sie die `invoker`-Seite für weitere Details.

## Beispiele

Siehe [Zeitmessung langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
