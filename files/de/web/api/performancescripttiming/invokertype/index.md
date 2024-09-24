---
title: "PerformanceScriptTiming: invokerType-Eigenschaft"
short-title: invokerType
slug: Web/API/PerformanceScriptTiming/invokerType
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`invokerType`**-Eigenschaft der schreibgeschützten {{domxref("PerformanceScriptTiming")}}-Schnittstelle gibt einen Zeichenfolgenwert zurück, der den Typ des Features angibt, das beim Aufruf das Skript ausgeführt hat.

## Wert

Eine Zeichenfolge, die den Invoker-Typ des Skript-Einstiegspunkts angibt. Mögliche Werte sind:

- `"user-callback"`
  - : Ein bekannter Callback, der innerhalb einer Webplattform-API aufgerufen wurde, wie z.B. {{domxref("setTimeout()")}} oder {{domxref("Window.requestAnimationFrame()")}}.
- `"event-listener"`
  - : Ein Event-Listener für ein Webplattform-Ereignis, wie [`click`](/de/docs/Web/API/Element/click_event), [`load`](/de/docs/Web/API/Window/load_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event).
- `"resolve-promise"`
  - : Eine Handler-Funktion für den aufgelösten Zustand eines Webplattform-Versprechens, wie z.B. {{domxref("Window/fetch", "fetch()")}}. Beachten Sie, dass im Fall von Versprechen alle Handler desselben Versprechens als einzelner `"script"`-Eintragstyp gruppiert werden.
- `"reject-promise"`
  - : Eine Handler-Funktion für den abgelehnten Zustand eines Webplattform-Versprechens.
- `"classic-script"`
  - : Die Auswertung eines Standardskripts (zum Beispiel über ein {{htmlelement("script")}}-Element oder eine [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Anweisung).
- `"module-script"`
  - : Die Auswertung eines Modulscripts.

Die Struktur des {{domxref("PerformanceScriptTiming.invoker")}}-Wertes hängt vom `invokerType`-Wert des Skripts ab. Weitere Details finden Sie auf der `invoker`-Seite.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
