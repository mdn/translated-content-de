---
title: Animationsleistung und Bildrate
short-title: Animationen und Bildrate
slug: Web/Performance/Guides/Animation_performance_and_frame_rate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erstellt werden. Die Leistungsbelastung bei der Animation einer CSS-Eigenschaft kann je nach Eigenschaft variieren und die Animation kostspieliger CSS-Eigenschaften kann zu {{Glossary("jank", "Ruckeln")}} führen, wenn der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildrate")}} zu erreichen.

Für animierte Medien wie Videos und animierte GIFs ist die Dateigröße das Hauptleistungsproblem – das schnelle Herunterladen der Datei, um die Leistung nicht negativ zu beeinflussen, ist das größte Problem. Codebasierte Animationen, seien es CSS, SVG, `<canvas>`, WebGL oder andere JavaScript-Animationen, können Leistungsprobleme verursachen, selbst wenn der Bandbreitenverbrauch gering ist. Diese Animationen können die CPU belasten und/oder Ruckeln hervorrufen.

Benutzer erwarten, dass alle Schnittstelleninteraktionen reibungslos funktionieren und alle Benutzeroberflächen reaktionsschnell sind. Animationen können dazu beitragen, dass eine Website schneller und reaktionsschneller wirkt, aber sie können auch das Gefühl vermitteln, dass eine Website langsamer und ruckeliger wird, wenn sie nicht korrekt umgesetzt werden. Reaktionsfähige Benutzeroberflächen haben eine Bildrate von 60 Bildern pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60 fps beizubehalten, ist es wichtig, eine hohe und gleichmäßige Bildwiederholrate für alle Animationen zu gewährleisten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Reihe von [Schlüsselframes](/de/docs/Web/CSS/@keyframes) an, von denen jedes CSS verwendet, um das Erscheinungsbild des Elements in einem bestimmten Stadium der Animation zu definieren. Der Browser erstellt die Animation als Übergang von jedem Schlüsselframe zum nächsten.

Im Vergleich zur Animation von Elementen mit JavaScript sind CSS-Animationen möglicherweise einfacher zu erstellen. Sie können auch eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann Frames gerendert und gegebenenfalls ausgelassen werden sollen.

Allerdings kann der Leistungsaufwand für die Modifikation einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Es wird allgemein angenommen, dass 60 Bilder pro Sekunde die Rate ist, bei der Animationen glatt erscheinen. Für eine Rate von 60 Bildern pro Sekunde hat der Browser 16,7 Millisekunden, um Skripte auszuführen, Stile und Layouts bei Bedarf neu zu berechnen und den aktualisierten Bereich neu zu zeichnen. Langsame Skripte und die Animation kostspieliger CSS-Eigenschaften können zu {{Glossary("Jank", "Ruckeln")}} führen, wenn der Browser Schwierigkeiten hat, eine flüssige Bildrate zu erreichen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser beim Zeichnen von Änderungen an einer Seite verwendet, wenn ein Element CSS-Eigenschaften animiert, lässt sich als ein Wasserfall beschreiben, der aus den folgenden Schritten besteht:

![Flussdiagramm des CSS-Rendering-Wasserfalls. In der Reihenfolge sind die Schritte: Stile neu berechnen, Layout, und Malen.](css-rendering-waterfall.png)

1. **Stil neu berechnen**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Anschließend verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu bestimmen. Dieser Vorgang wird als "Layout" bezeichnet, manchmal auch "Reflow".
3. **Malen**: Schließlich muss der Browser die Elemente auf dem Bildschirm neu zeichnen. Ein letzter Schritt ist nicht in dieser Sequenz gezeigt: Die Seite kann in Ebenen unterteilt werden, die unabhängig voneinander gemalt und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in einen einzigen Frame passen, da der Bildschirm erst aktualisiert wird, wenn sie vollständig ist.

## Kosten von CSS-Eigenschaften

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften kostspieliger als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen aus:

  - Stilberechnung
  - Layout
  - Neuzeichnen

  Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die _nicht_ Geometrie oder Position beeinflussen und _nicht in ihrer eigenen Ebene gerendert werden_, lösen _kein_ Layout aus. Sie lösen aus:

  - Stilberechnung
  - Neuzeichnen

  Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die _in ihrer **eigenen Ebene** gerendert werden_, lösen nicht einmal ein Neuzeichnen aus, da das Update in der **Komposition** behandelt wird. Sie lösen aus:

  - Stilberechnung

  Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklerwerkzeuge

Die meisten Webbrowser enthalten Tools, die Einblicke in die Arbeit des Browsers bieten, wenn er Elemente einer Seite animiert. Mit diesen Tools können Sie die Animationsbildrate einer Anwendung messen und Leistungsschwachstellen diagnostizieren, wenn welche gefunden werden.

- [Chrome Performance Tools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox Performance Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
