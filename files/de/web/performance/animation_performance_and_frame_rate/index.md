---
title: Animationsleistung und Bildrate
slug: Web/Performance/Animation_performance_and_frame_rate
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen. Die Leistungskosten bei der Animation einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teurer CSS-Eigenschaften kann {{Glossary("jank", "Ruckeln")}} verursachen, wenn der Browser Schwierigkeiten hat, eine gleichmäßige {{Glossary("FPS", "Bildrate")}} zu erzielen.

Bei animierten Medien wie Videos und animierten GIFs ist die Hauptleistungsanforderung die Dateigröße – das Herunterladen der Datei schnell genug, um die Leistung nicht negativ zu beeinflussen, ist das größte Problem. Codebasierte Animationen, sei es CSS, SVG, `<canvas>`, WebGL oder andere JavaScript-Animationen, können auch dann zu Leistungsproblemen führen, wenn der Bandbreitenaufwand gering ist. Diese Animationen können die CPU beanspruchen und/oder Ruckeln verursachen.

Benutzer erwarten, dass alle Schnittstelleninteraktionen reibungslos ablaufen und alle Benutzeroberflächen reaktionsfähig sind. Animationen können dazu beitragen, dass sich eine Seite schneller und reaktionsfähiger anfühlt, aber Animationen können eine Seite auch langsamer und ruckelnd wirken lassen, wenn sie nicht richtig ausgeführt werden. Reaktionsfähige Benutzeroberflächen haben eine Bildrate von 60 Bildern pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60 fps beizubehalten, ist es wichtig, eine hohe und stabile Bildrate für alle Animationen beizubehalten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Reihe von [Schlüsselframes](/de/docs/Web/CSS/@keyframes) an, von denen jedes mithilfe von CSS das Erscheinungsbild des Elements in einer bestimmten Phase der Animation definiert. Der Browser erstellt die Animation als Übergang von jedem Schlüsselframe zum nächsten.

Verglichen mit der Animation von Elementen mit JavaScript können CSS-Animationen einfacher zu erstellen sein. Sie können auch eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann Frames gerendert werden sollen und wann Frames bei Bedarf weggelassen werden können.

Allerdings können die Leistungskosten für die Änderung einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Es ist allgemein anerkannt, dass Animationen bei 60 Bildern pro Sekunde reibungslos erscheinen. Für eine Bildrate von 60 Bildern pro Sekunde hat der Browser 16,7 Millisekunden Zeit, um Skripte auszuführen, Stile und Layouts bei Bedarf neu zu berechnen und den aktualisierten Bereich neu zu rendern. Langsame Skripte und das Animieren teurer CSS-Eigenschaften können {{Glossary("Jank", "Ruckeln")}} verursachen, wenn der Browser Schwierigkeiten hat, eine gleichmäßige Bildrate zu erzielen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu zeichnen, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Flussdiagramm des CSS-Rendering-Wasserfalls. In der Reihenfolge sind die Schritte Stil neu berechnen, Layout und Rendern.](css-rendering-waterfall.png)

1. **Stil neu berechnen**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Als nächstes verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu ermitteln. Dieser Vorgang wird mit "Layout" bezeichnet, wird aber auch manchmal als "Reflow" bezeichnet.
3. **Rendern**: Schließlich muss der Browser die Elemente auf dem Bildschirm neu rendern. Ein letzter Schritt, der in dieser Sequenz nicht gezeigt wird: Die Seite kann in Ebenen aufgeteilt werden, die unabhängig voneinander gezeichnet und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in ein einzelnes Frame passen, da der Bildschirm nicht aktualisiert wird, bevor sie abgeschlossen ist.

## Kosten der CSS-Eigenschaften

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften teurer als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen eine:

  - Stil-Neuberechnung
  - Layout
  - Neuzeichnung

  aus. Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die _keine_ Auswirkungen auf Geometrie oder Position haben und _nicht in ihrer eigenen Ebene_ gerendert werden, lösen kein Layout aus. Sie lösen eine:

  - Stil-Neuberechnung
  - Neuzeichnung

  aus. Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die in ihrer **eigenen Ebene gerendert** werden, lösen nicht einmal eine Neuzeichnung aus, da das Update in der **Komposition** behandelt wird. Diese lösen eine:

  - Stil-Neuberechnung

  aus. Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwickler-Tools

Die meisten Webbrowser enthalten Tools, die Einblicke in die Arbeit des Browsers geben, wenn er Elemente einer Seite animiert. Mit diesen Tools können Sie die Animations-Bildrate einer Anwendung messen und Performance-Engpässe diagnostizieren, falls welche gefunden werden.

- [Chrome-Leistungstools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox-Leistungstools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
