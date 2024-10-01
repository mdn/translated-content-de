---
title: Animationsleistung und Bildfrequenz
slug: Web/Performance/Animation_performance_and_frame_rate
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen im Web können mittels [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierten Gifs und sogar animierten PNGs sowie anderen Bildtypen realisiert werden. Die Leistungskosten beim Animieren einer CSS-Eigenschaft können von Eigenschaft zu Eigenschaft variieren, und das Animieren von aufwendigen CSS-Eigenschaften kann zu {{Glossary("jank", "Ruckeln")}} führen, wenn der Browser Probleme hat, eine flüssige {{Glossary("FPS", "Bildfrequenz")}} zu erreichen.

Für animierte Medien wie Videos und animierte Gifs ist die Hauptsorge hinsichtlich der Leistung die Dateigröße - das schnelle Herunterladen der Datei, um die Leistung nicht negativ zu beeinträchtigen, stellt das größte Problem dar. Codebasierte Animationen, sei es in CSS, SVG, \<canvas>, WebGL oder andere JavaScript-Animationen, können Leistungsprobleme verursachen, selbst wenn der Bandbreitenaufwand gering ist. Diese Animationen können die CPU belasten und/oder Ruckeln verursachen.

Nutzer erwarten, dass alle Schnittstelleninteraktionen flüssig sind und alle Benutzeroberflächen reaktionsschnell. Animationen können dazu beitragen, dass eine Website schneller und reaktionsschnell wirkt, können aber auch dazu führen, dass eine Website langsamer und ruckelig erscheint, wenn sie nicht korrekt umgesetzt werden. Reaktionsschnelle Benutzeroberflächen haben eine Bildrate von 60 Bildern pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60fps aufrechtzuerhalten, ist es wichtig, eine hohe und gleichmäßige Bildrate für alle Animationen beizubehalten.

Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) geben Sie eine Anzahl von [Schlüsselbildern](/de/docs/Web/CSS/@keyframes) an, von denen jedes mit CSS das Erscheinungsbild des Elements in einem bestimmten Stadium der Animation definiert. Der Browser erstellt die Animation als Übergang von jedem Schlüsselbild zum nächsten.

Im Vergleich zur Animation von Elementen mit JavaScript können CSS-Animationen einfacher zu erstellen sein. Sie können auch eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann einzelne Bilder gerendert werden, und gegebenenfalls Bilder weglassen.

Allerdings können die Leistungskosten bei der Änderung einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Es wird allgemein akzeptiert, dass 60 Bilder pro Sekunde die Rate ist, bei der Animationen flüssig erscheinen. Für eine Rate von 60 Bildern pro Sekunde hat der Browser 16,7 Millisekunden Zeit, um Skripte auszuführen, Stile und Layouts bei Bedarf neu zu berechnen und den aktualisierten Bereich neu zu zeichnen. Langsame Skripte und das Animieren kostspieliger CSS-Eigenschaften können zu {{Glossary("Jank", "Ruckeln")}} führen, da der Browser um eine flüssige Bildrate kämpft.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu zeichnen, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Ablaufdiagramm des CSS-Rendering-Wasserfalls. Die Schritte sind in Reihenfolge: Stil neu berechnen, Layout und Zeichnen.](css-rendering-waterfall.png)

1. **Stil neu berechnen**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Anschließend verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu ermitteln. Dieser Vorgang wird als "Layout" bezeichnet, aber manchmal auch "Reflow" genannt.
3. **Zeichnen**: Schließlich muss der Browser die Elemente auf dem Bildschirm neu zeichnen. Ein letzter Schritt, der in dieser Sequenz nicht gezeigt wird: Die Seite kann in Ebenen aufgeteilt werden, die unabhängig voneinander gezeichnet und dann in einem Prozess namens "Komposition" kombiniert werden.

Diese Sequenz muss in ein einzelnes Bild passen, da der Bildschirm erst aktualisiert wird, wenn sie abgeschlossen ist.

## Die Kosten von CSS-Eigenschaften

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften kostspieliger als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen folgende Schritte aus:

  - Stil neu berechnen
  - Layout
  - Zeichnen

  Beispielsweise: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die weder Geometrie noch Position beeinflussen und nicht in ihrer eigenen Ebene gerendert werden, lösen kein Layout aus. Sie lösen jedoch aus:

  - Stil neu berechnen
  - Zeichnen

  Beispielsweise: {{cssxref("color")}}

- Eigenschaften, die in ihrer **eigenen Ebene** gerendert werden, lösen nicht einmal ein Neuzeichnen aus, da die Aktualisierung in der **Komposition** behandelt wird. Diese lösen jedoch aus:

  - Stil neu berechnen

  Beispielsweise: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklerwerkzeuge

Die meisten Webbrowser enthalten Werkzeuge, die Einblicke in die Arbeit des Browsers bieten, wenn er Elemente einer Seite animiert. Mit diesen Tools können Sie die Animationsbildrate einer Anwendung messen und Leistungsengpässe diagnostizieren, falls welche gefunden werden.

- [Chrome Performance Tools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox Performance Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
