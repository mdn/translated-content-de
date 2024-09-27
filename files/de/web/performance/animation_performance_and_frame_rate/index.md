---
title: Animationsleistung und Bildrate
slug: Web/Performance/Animation_performance_and_frame_rate
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen durchgeführt werden. Die Leistungskosten beim Animieren einer CSS-Eigenschaft können je nach Eigenschaft variieren, und das Animieren teurer CSS-Eigenschaften kann zu [Ruckeln](/de/docs/Glossary/jank) führen, da der Browser Schwierigkeiten hat, eine flüssige [Bildrate](/de/docs/Glossary/FPS) zu erreichen.

Bei animierten Medien wie Videos und animierten GIFs ist die Dateigröße das Hauptleistungsproblem - das Herunterladen der Datei schnell genug, um die Leistung nicht negativ zu beeinflussen, ist das größte Problem. Auch Code-basierte Animationen, sei es CSS, SVG, `<canvas>`, WebGL oder andere JavaScript-Animationen, können Leistungsprobleme verursachen, selbst wenn der Bandbreitenverbrauch gering ist. Diese Animationen können die CPU beanspruchen und/oder Ruckeln verursachen.

Benutzer erwarten, dass alle Schnittstelleninteraktionen reibungslos und alle Benutzerschnittstellen reaktionsschnell sind. Animation kann dazu beitragen, dass eine Website schneller und reaktionsschneller wirkt, aber Animationen können auch dazu führen, dass eine Website langsamer und ruckelig wirkt, wenn sie nicht richtig ausgeführt werden. Reaktionsschnelle Benutzeroberflächen haben eine Bildrate von 60 Bildern pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60 fps beizubehalten, ist es wichtig, für alle Animationen eine hohe und gleichmäßige Bildrate aufrechtzuerhalten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Anzahl von [Keyframes](/de/docs/Web/CSS/@keyframes) an, von denen jedes mithilfe von CSS das Aussehen des Elements in einem bestimmten Animationsstadium definiert. Der Browser erstellt die Animation als Übergang von jedem Keyframe zum nächsten.

Im Vergleich zum Animieren von Elementen mit JavaScript können CSS-Animationen einfacher zu erstellen sein. Sie können auch bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann Frames gerendert und bei Bedarf Frames übersprungen werden können.

Allerdings können die Leistungskosten der Änderung einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Es ist allgemein anerkannt, dass 60 Bilder pro Sekunde die Rate ist, bei der Animationen flüssig erscheinen. Für eine Rate von 60 Bildern pro Sekunde hat der Browser 16,7 Millisekunden Zeit, um Skripte auszuführen, Stile und Layouts bei Bedarf neu zu berechnen und den aktualisierten Bereich neu zu zeichnen. Langsame Skripte und das Animieren teurer CSS-Eigenschaften können zu [Ruckeln](/de/docs/Glossary/Jank) führen, da der Browser Schwierigkeiten hat, eine flüssige Bildrate zu erreichen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu zeichnen, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Flussdiagramm des CSS-Rendering-Wasserfalls. Die Schritte sind der Reihe nach: Stil neu berechnen, Layout und Rendern.](css-rendering-waterfall.png)

1. **Stil neu berechnen**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Danach verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu bestimmen. Dieser Vorgang wird als "Layout" bezeichnet, manchmal aber auch als "Reflow".
3. **Rendern**: Schließlich muss der Browser die Elemente auf dem Bildschirm neu zeichnen. Ein letzter Schritt, der in dieser Sequenz nicht gezeigt wird: Die Seite kann in Ebenen aufgeteilt werden, die unabhängig voneinander gezeichnet und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in ein einzelnes Frame passen, da der Bildschirm erst aktualisiert wird, wenn sie abgeschlossen ist.

## Kosten von CSS-Eigenschaften

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften teurer als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen aus:

  - Stilneuberechnung
  - Layout
  - Rendern

  Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die die Geometrie oder Position _nicht_ beeinflussen und _nicht_ in ihrer eigenen Ebene dargestellt werden, lösen _kein_ Layout aus. Sie lösen jedoch aus:

  - Stilneuberechnung
  - Rendern

  Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die in ihrer **eigenen Ebene** gerendert werden, lösen nicht einmal ein Neuzeichnen aus, da das Update in der **Komposition** gehandhabt wird. Diese lösen aus:

  - Stilneuberechnung

  Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklertools

Die meisten Webbrowser enthalten Tools, die Einblick in die Arbeit des Browsers geben, wenn er Elemente einer Seite animiert. Mit diesen Tools können Sie die Animationsbildrate einer Anwendung messen und Leistungsengpässe diagnostizieren, wenn welche gefunden werden.

- [Chrome-Leistungstools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox-Leistungstools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
