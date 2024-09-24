---
title: "PerformanceScriptTiming: invokerType-Eigenschaft"
short-title: invokerType
slug: Web/API/PerformanceScriptTiming/invokerType
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`invokerType`** der Schnittstelle [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) gibt einen Zeichenfolgenwert zurück, der den Typ des Features angibt, das den Skriptaufruf ausgelöst hat.

## Wert

Eine Zeichenfolge, die den Typ des Skript-Einstiegspunkts angibt. Mögliche Werte sind:

- `"user-callback"`
  - : Ein bekannter Rückruf, der innerhalb einer Webplattform-API aufgerufen wurde, wie z.B. [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).
- `"event-listener"`
  - : Ein Ereignis-Listener für ein Webplattform-Ereignis, wie z.B. [`click`](/de/docs/Web/API/Element/click_event), [`load`](/de/docs/Web/API/Window/load_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event).
- `"resolve-promise"`
  - : Eine Handler-Funktion für den erfüllten Zustand eines Webplattform-Versprechens, wie z.B. [`fetch()`](/de/docs/Web/API/Window/fetch). Beachten Sie, dass im Fall von Versprechen alle Handler desselben Versprechens als einzelner `"script"`-Eintragstyp gruppiert werden.
- `"reject-promise"`
  - : Eine Handler-Funktion für den abgelehnten Zustand eines Webplattform-Versprechens.
- `"classic-script"`
  - : Die Auswertung eines Standardskripts (zum Beispiel über ein {{htmlelement("script")}}-Element oder eine [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Anweisung).
- `"module-script"`
  - : Die Auswertung eines Modulscripts.

Die Struktur des Werts [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) hängt vom `invokerType`-Wert des Skripts ab. Weitere Details finden Sie auf der `invoker`-Seite.

## Beispiele

Siehe [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
