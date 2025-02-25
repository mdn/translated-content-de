---
title: Animationsleistung und Bildfrequenz
short-title: Animationen und Bildfrequenz
slug: Web/Performance/Guides/Animation_performance_and_frame_rate
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Animation im Web kann über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen. Die Leistungskosten beim Animieren einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teurer CSS-Eigenschaften kann zu {{Glossary("jank", "Ruckeln")}} führen, da der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildfrequenz")}} zu erreichen.

Bei animierten Medien wie Videos und animierten GIFs ist die Hauptsorge in Bezug auf die Leistung die Dateigröße – das Herunterladen der Datei schnell genug, um die Leistung nicht negativ zu beeinflussen, ist das größte Problem. Codebasierte Animationen, sei es CSS, SVG, `<canvas>`, WebGL oder andere JavaScript-Animationen, können auch dann Leistungsprobleme verursachen, wenn der Bandbreitenverbrauch gering ist. Diese Animationen können CPU verbrauchen und/oder zu Ruckeln führen.

Nutzer erwarten, dass alle Schnittstelleninteraktionen flüssig und alle Benutzeroberflächen reaktionsschnell sind. Animationen können dazu beitragen, dass sich eine Website schneller und reaktionsschnell anfühlt, aber sie können auch dazu führen, dass sich eine Website langsamer und ruckeliger anfühlt, wenn sie nicht richtig ausgeführt werden. Reaktionsschnelle Benutzeroberflächen haben eine Bildfrequenz von 60 Frames pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60fps zu halten, ist es wichtig, eine hohe und stabile Bildfrequenz für alle Animationen aufrechtzuerhalten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Anzahl von [Keyframes](/de/docs/Web/CSS/@keyframes) an, von denen jedes mit CSS das Aussehen des Elements in einem bestimmten Stadium der Animation definiert. Der Browser erstellt die Animation als Übergang von jedem Keyframe zum nächsten.

Im Vergleich zur Animation von Elementen mittels JavaScript können CSS-Animationen einfacher zu erstellen sein. Sie können auch eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann Frames gerendert werden und notfalls Frames fallen gelassen werden können.

Allerdings können die Leistungskosten beim Ändern einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Es ist allgemein anerkannt, dass 60 Frames pro Sekunde die Rate ist, bei der Animationen flüssig erscheinen. Für eine Rate von 60 Frames pro Sekunde hat der Browser 16,7 Millisekunden Zeit, um Skripte auszuführen, Stile und Layouts gegebenenfalls neu zu berechnen und den aktualisierten Bereich neu zu malen. Langsame Skripte und das Animieren teurer CSS-Eigenschaften können zu {{Glossary("Jank", "Ruckeln")}} führen, da der Browser Schwierigkeiten hat, eine flüssige Bildfrequenz zu erreichen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu zeichnen, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Flussdiagramm des CSS-Rendering-Wasserfalls. Der Reihenfolge nach sind die Schritte Neu berechnen des Stils, Layout und Malen.](css-rendering-waterfall.png)

1. **Stil neu berechnen**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Anschließend verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu bestimmen. Dieser Vorgang wird als "Layout", manchmal aber auch als "Reflow" bezeichnet.
3. **Malen**: Schließlich muss der Browser die Elemente erneut auf den Bildschirm malen. Ein letzter Schritt, der in dieser Sequenz nicht gezeigt wird: Die Seite kann in Ebenen aufgeteilt werden, die unabhängig gemalt und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in einen einzelnen Frame passen, da der Bildschirm erst aktualisiert wird, wenn sie abgeschlossen ist.

## CSS-Eigenschaftskosten

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften teurer als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen aus:

  - Stilneuberechnung
  - Layout
  - Neumalen

  Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die _nicht_ die Geometrie oder Position beeinflussen und _nicht_ in ihrer eigenen Ebene gerendert werden, lösen _kein_ Layout aus. Sie lösen aus:

  - Stilneuberechnung
  - Neumalen

  Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die **in ihrer eigenen Ebene** gerendert werden, lösen nicht einmal ein Neumalen aus, weil das Update in der **Komposition** gehandhabt wird. Diese lösen aus:

  - Stilneuberechnung

  Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklertools

Die meisten Webbrowser enthalten Werkzeuge, die Einblick in die Arbeit des Browsers geben, wenn er Elemente einer Seite animiert. Mit diesen Werkzeugen können Sie die Animationsbildrate einer Anwendung messen und Leistungsengpässe diagnostizieren, wenn welche gefunden werden.

- [Chrome Performance-Tools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox Performance-Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
