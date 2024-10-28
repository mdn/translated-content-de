---
title: Animationsleistung und Bildrate
slug: Web/Performance/Animation_performance_and_frame_rate
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erstellt werden. Die Leistungskosten für die Animation einer CSS-Eigenschaft können je nach Eigenschaft variieren, und die Animation teurer CSS-Eigenschaften kann zu {{Glossary("jank", "Ruckeln")}} führen, wenn der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildrate")}} zu erreichen.

Bei animierten Medien, wie Videos und animierten GIFs, ist die Hauptanforderung die Dateigröße - das schnelle Herunterladen der Datei, um die Leistung nicht negativ zu beeinflussen, ist das größte Problem. Code-basierte Animationen, sei es CSS, SVG, `<canvas>`, WebGL oder andere JavaScript-Animationen, können Leistungsprobleme verursachen, selbst wenn der Bandbreitenaufwand gering ist. Diese Animationen können die CPU belasten und/oder zu Ruckeln führen.

Benutzer erwarten, dass alle Schnittstelleninteraktionen reibungslos sind und alle Benutzeroberflächen reaktionsschnell sind. Animation kann helfen, eine Seite schneller und reaktionsschnell erscheinen zu lassen, aber Animationen können eine Seite auch langsamer und ruckelig erscheinen lassen, wenn sie nicht korrekt durchgeführt werden. Reaktionsschnelle Benutzeroberflächen haben eine Bildrate von 60 Frames pro Sekunde (fps). Während es nicht immer möglich ist, 60fps aufrechtzuerhalten, ist es wichtig, eine hohe und stetige Bildrate für alle Animationen zu gewährleisten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Anzahl von [Keyframes](/de/docs/Web/CSS/@keyframes) an, von denen jedes CSS verwendet, um das Erscheinungsbild des Elements in einem bestimmten Stadium der Animation zu definieren. Der Browser erstellt die Animation als Übergang von jedem Keyframe zum nächsten.

Im Vergleich zur Animation von Elementen mit JavaScript können CSS-Animationen einfacher zu erstellen sein. Sie können auch eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann Frames gerendert werden müssen und gegebenenfalls Frames fallen zu lassen.

Jedoch können die Leistungskosten für die Modifikation einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Es wird allgemein akzeptiert, dass 60 Frames pro Sekunde die Rate ist, bei der Animationen flüssig erscheinen. Für eine Rate von 60 Frames pro Sekunde hat der Browser 16,7 Millisekunden, um Skripte auszuführen, Stile und Layouts bei Bedarf neu zu berechnen und den aktualisierten Bereich neu zu zeichnen. Langsame Skripte und das Animieren teurer CSS-Eigenschaften können zu {{Glossary("Jank", "Ruckeln")}} führen, wenn der Browser Schwierigkeiten hat, eine flüssige Bildrate zu erreichen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu rendern, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Ablaufdiagramm des CSS-Rendering-Wasserfalls. In der Reihenfolge sind die Schritte Neuberechnung des Stils, Layout und Zeichen.](css-rendering-waterfall.png)

1. **Neuberechnung des Stils**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Danach verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu bestimmen. Dieser Vorgang wird als "Layout" bezeichnet, wird aber manchmal auch als "Neufluss" bezeichnet.
3. **Zeichen**: Schließlich muss der Browser die Elemente auf dem Bildschirm neu zeichnen. Ein letzter Schritt ist in dieser Sequenz nicht gezeigt: Die Seite kann in Ebenen aufgeteilt werden, die unabhängig voneinander gezeichnet und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in einen einzigen Frame passen, da der Bildschirm erst aktualisiert wird, wenn sie abgeschlossen ist.

## Kosten von CSS-Eigenschaften

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften teurer als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen aus:

  - Stil-Neuberechnung
  - Layout
  - Neuzeichnen

  Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die die Geometrie oder Position _nicht_ beeinflussen und _nicht in ihrer eigenen Ebene gezeichnet_ werden, lösen _kein_ Layout aus. Sie lösen aus:

  - Stil-Neuberechnung
  - Neuzeichnen

  Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die **in ihrer eigenen Ebene** gezeichnet werden, lösen nicht einmal ein Neuzeichnen aus, da das Update in der **Komposition** behandelt wird. Diese lösen aus:

  - Stil-Neuberechnung

  Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklerwerkzeuge

Die meisten Webbrowser enthalten Werkzeuge, um Einblick in die Arbeit zu geben, die der Browser leistet, wenn er Elemente einer Seite animiert. Mit diesen Werkzeugen können Sie die Animationsbildrate einer Anwendung messen und Leistungsengpässe diagnostizieren, falls solche gefunden werden.

- [Chrome-Leistungstools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox-Leistungstools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
