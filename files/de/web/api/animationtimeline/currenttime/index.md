---
title: "AnimationTimeline: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/AnimationTimeline/currentTime
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte **`currentTime`**-Eigenschaft der [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)-Schnittstelle des [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die aktuelle Zeit der Zeitleiste in Millisekunden zurück, oder `null`, wenn die Zeitleiste inaktiv ist.

## Wert

Eine Zahl, die die aktuelle Zeit der Zeitleiste in Millisekunden darstellt, oder `null`, wenn die Zeitleiste inaktiv ist.

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu gewährleisten, kann die Präzision von `animationTimeline.currentTime` je nach Browsereinstellungen reduziert werden.

Die aktuelle Zeit schreitet normalerweise mit Animationsbildern voran. Wiederholtes Lesen der Eigenschaft während ein Skript läuft, liefert keine kontinuierlich aktualisierte Uhr.

Für eine [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) wird die aktuelle Zeit berechnet, indem die [`originTime`](/de/docs/Web/API/DocumentTimeline/DocumentTimeline)-Verschiebung, die durch Skripte bereitgestellt werden kann, von der Animationsuhr des Browsers abgezogen wird.

In Chrome beträgt das Rundungsintervall für die Animationsuhr während Render-Updates 0,1 ms oder 0,005 ms in kontextübergreifend isolierten Umgebungen. Der Browser wendet nach dem Abzug von `originTime` keine zusätzliche Timer-Rundung an.

In Safari beträgt das Rundungsintervall für die Animationsuhr 1 ms oder 0,02 ms in kontextübergreifend isolierten Umgebungen. Nach dem Abzug von `originTime` rundet der Browser den zurückgegebenen Wert auf 0,001 ms, die für die Darstellung von Animationszeiten verwendete Auflösung.

In Firefox rundet der Browser nach dem Abzug von `originTime` den zurückgegebenen Wert standardmäßig auf 0,02 ms, auch in kontextübergreifend isolierten Umgebungen. Wenn `privacy.resistFingerprinting` aktiviert ist, beträgt das Rundungsintervall 16,667 ms oder das durch `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` konfigurierte Intervall, je nachdem, welches größer ist.

Zum Beispiel sind dies mögliche Werte in Firefox:

```js
// Reduced time precision (0.02 ms) with default settings
animationTimeline.currentTime;
// Might be:
// 23.4
// 24.18
// 25.5
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
animationTimeline.currentTime;
// Might be:
// 50.001
// 66.668
// 83.335
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) erbt diese Eigenschaft
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) gibt ein Zeitleisten-Objekt zurück, das diese Eigenschaft erbt
