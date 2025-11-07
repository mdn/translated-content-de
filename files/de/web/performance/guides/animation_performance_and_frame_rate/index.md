---
title: Animationsleistung und Bildfrequenz
short-title: Animationen und Bildfrequenz
slug: Web/Performance/Guides/Animation_performance_and_frame_rate
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Animation im Web kann über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen durchgeführt werden. Die Leistungskosten für das Animieren einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren kostspieliger CSS-Eigenschaften kann zu {{Glossary("jank", "Ruckeln")}} führen, wenn der Browser Schwierigkeiten hat, eine gleichmäßige {{Glossary("FPS", "Bildfrequenz")}} zu erreichen.

Bei animierten Medien, wie Videos und animierten GIFs, ist die Hauptleistungsproblematik die Dateigröße - den Download der Datei schnell genug zu gestalten, um die Leistung nicht negativ zu beeinträchtigen, ist das größte Problem. Code-basierte Animationen, sei es CSS, SVG, `<canvas>`, WebGL oder andere JavaScript-Animationen, können Leistungsprobleme verursachen, selbst wenn der Bandbreitenaufwand gering ist. Diese Animationen können die CPU belasten und/oder Ruckeln verursachen.

Benutzer erwarten, dass alle Schnittstelleninteraktionen flüssig und alle Benutzeroberflächen reaktionsfähig sind. Animation kann dazu beitragen, dass eine Website schneller und reaktionsfähiger wirkt, aber Animationen können eine Website auch langsamer und ruckeliger wirken lassen, wenn sie nicht korrekt ausgeführt werden. Reaktionsfähige Benutzeroberflächen haben eine Bildfrequenz von 60 Bildern pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60fps beizubehalten, ist es wichtig, eine hohe und konstante Bildfrequenz für alle Animationen aufrechtzuerhalten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Anzahl von [Schlüsselframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) an, von denen jeder CSS verwendet, um das Aussehen des Elements in einem bestimmten Stadium der Animation zu definieren. Der Browser erstellt die Animation als Übergang von jedem Schlüsselframe zum nächsten.

Im Vergleich zur Animation von Elementen mit JavaScript können CSS-Animationen einfacher zu erstellen sein. Sie können auch eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann Frames gerendert werden und ob Frames bei Bedarf weggelassen werden.

Jedoch können die Leistungskosten für die Änderung einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Es ist allgemein anerkannt, dass 60 Bilder pro Sekunde die Bildrate ist, bei der Animationen glatt erscheinen. Für eine Rate von 60 Bildern pro Sekunde hat der Browser 16,7 Millisekunden Zeit, um Skripte auszuführen, Stile und Layout neu zu berechnen, falls erforderlich, und den aktualisierten Bereich neu zu zeichnen. Langsame Skripte und das Animieren kostspieliger CSS-Eigenschaften können zu {{Glossary("Jank", "Ruckeln")}} führen, da der Browser Schwierigkeiten hat, eine gleichmäßige Bildfrequenz zu erreichen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu zeichnen, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Flussdiagramm des CSS-Rendering-Wasserfalls. In der Reihenfolge sind die Schritte: Stil neu berechnen, Layout und Malen.](css-rendering-waterfall.png)

1. **Stil neu berechnen**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Anschließend verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu bestimmen. Dieser Vorgang wird als "Layout" bezeichnet, manchmal aber auch als "Reflow".
3. **Malen**: Schließlich muss der Browser die Elemente auf dem Bildschirm neu zeichnen. Ein letzter Schritt, der in dieser Sequenz nicht gezeigt wird, ist, dass die Seite in Ebenen aufgeteilt werden kann, die unabhängig voneinander gezeichnet und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in einen einzigen Frame passen, da der Bildschirm erst aktualisiert wird, wenn sie abgeschlossen ist.

## Kosten der CSS-Eigenschaften

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften kostspieliger als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen aus:
  - Stilneuberechnung
  - Layout
  - Neuzeichnen

  Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die _nicht_ die Geometrie oder Position beeinflussen und _nicht in ihrer eigenen Ebene gerendert_ werden, lösen _kein_ Layout aus. Sie lösen aus:
  - Stilneuberechnung
  - Neuzeichnen

  Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die _in ihrer **eigenen Ebene** gerendert_ werden, lösen nicht einmal ein Neuzeichnen aus, da das Update in der **Komposition** erfolgt. Diese lösen aus:
  - Stilneuberechnung

  Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklertools

Die meisten Webbrowser enthalten Werkzeuge, die Einblicke in die Arbeit des Browsers bieten, wenn er Elemente einer Seite animiert. Mit diesen Werkzeugen können Sie die Animationsbildrate einer Anwendung messen und Leistungsengpässe diagnostizieren, falls welche gefunden werden.

- [Chrome performance tools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox performance tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
