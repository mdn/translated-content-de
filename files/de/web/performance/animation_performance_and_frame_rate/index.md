---
title: Animationsleistung und Bildwiederholrate
slug: Web/Performance/Animation_performance_and_frame_rate
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen im Web können über {{domxref('SVGAnimationElement', 'SVG')}}, {{domxref('window.requestAnimationFrame','JavaScript')}}, einschließlich {{htmlelement('canvas')}} und {{domxref('WebGL_API', 'WebGL')}}, CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen realisiert werden. Die Leistungskosten bei der Animation einer CSS-Eigenschaft können je nach Eigenschaft variieren, und das Animieren aufwendiger CSS-Eigenschaften kann zu {{glossary('jank')}} führen, da der Browser Schwierigkeiten hat, eine gleichmäßige {{glossary("FPS", "Bildwiederholrate")}} zu erreichen.

Bei animierten Medien, wie Videos und animierten GIFs, ist die Dateigröße das Hauptleistungsthema – das schnelle Herunterladen der Datei, um die Leistung nicht negativ zu beeinflussen, ist das größte Problem. Codebasierte Animationen, sei es CSS, SVG, \<canvas>, WebGL oder andere JavaScript-Animationen, können Leistungsprobleme verursachen, selbst wenn die Bandbreitenbelastung gering ist. Diese Animationen können die CPU belasten und/oder zu Jank führen.

Benutzer erwarten, dass alle Schnittstelleninteraktionen reibungslos und alle Benutzeroberflächen reaktionsfähig sind. Animationen können dazu beitragen, dass sich eine Website schneller und reaktionsfähiger anfühlt, aber sie können eine Website auch langsamer und ruckelig erscheinen lassen, wenn sie nicht korrekt umgesetzt werden. Reaktionsfähige Benutzeroberflächen haben eine Bildwiederholrate von 60 Bildern pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60 fps zu halten, ist es wichtig, eine hohe und stabile Bildwiederholrate für alle Animationen beizubehalten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Anzahl von [Keyframes](/de/docs/Web/CSS/@keyframes) an, von denen jedes CSS verwendet, um das Erscheinungsbild des Elements in einem bestimmten Stadium der Animation zu definieren. Der Browser erstellt die Animation als Übergang von jedem Keyframe zum nächsten.

Im Vergleich zur Animation von Elementen mit JavaScript können CSS-Animationen einfacher zu erstellen sein. Sie können auch eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann Frames gerendert werden und wann Frames bei Bedarf übersprungen werden.

Jedoch können die Leistungskosten beim Ändern einer CSS-Eigenschaft je nach Eigenschaft variieren. Es wird allgemein angenommen, dass 60 Bilder pro Sekunde die Rate ist, bei der Animationen flüssig erscheinen. Für eine Rate von 60 Bildern pro Sekunde hat der Browser 16,7 Millisekunden Zeit, um Skripte auszuführen, Stile und Layouts bei Bedarf neu zu berechnen und den aktualisierten Bereich neu zu malen. Langsame Skripte und das Animieren aufwendiger CSS-Eigenschaften können zu [Jank](/de/docs/Glossary/Jank) führen, da der Browser Schwierigkeiten hat, eine gleichmäßige Bildwiederholrate zu erreichen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu zeichnen, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Flussdiagramm des CSS-Rendering-Wasserfalls. Der Reihe nach sind die Schritte: Stilneuberechnung, Layout und Malen.](css-rendering-waterfall.png)

1. **Stilneuberechnung**: Wenn eine Eigenschaft eines Elements geändert wird, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Anschließend verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu ermitteln. Dieser Vorgang wird als "Layout" bezeichnet, manchmal auch als "Reflow".
3. **Malen**: Schließlich muss der Browser die Elemente auf dem Bildschirm neu zeichnen. Ein letzter Schritt, der in dieser Sequenz nicht gezeigt wird: Die Seite kann in Schichten unterteilt werden, die unabhängig voneinander gemalt und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in einen einzelnen Frame passen, da der Bildschirm erst aktualisiert wird, wenn sie abgeschlossen ist.

## Kosten der CSS-Eigenschaft

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften teurer als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements betreffen, lösen aus:

  - Stilneuberechnung
  - Layout
  - Malen

  Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die die Geometrie oder Position _nicht_ beeinträchtigen und _nicht in ihrer eigenen Schicht_ gerendert werden, lösen _kein_ Layout aus. Sie lösen aus:

  - Stilneuberechnung
  - Malen

  Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die in ihrer **eigenen Schicht** gerendert werden, lösen nicht einmal ein Malen aus, da die Aktualisierung in der **Komposition** erfolgt. Sie lösen aus:

  - Stilneuberechnung

  Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklerwerkzeuge

Die meisten Webbrowser enthalten Tools, um Einblicke in die Arbeit zu geben, die der Browser verrichtet, wenn er Elemente einer Seite animiert. Mit diesen Tools können Sie die Animationsbildwiederholrate einer Anwendung messen und Leistungsengpässe diagnostizieren, falls welche gefunden werden.

- [Chrome-Leistungstools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox-Leistungstools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
