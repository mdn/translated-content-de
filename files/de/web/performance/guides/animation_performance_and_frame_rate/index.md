---
title: Animationsleistung und Bildrate
short-title: Animationen und Bildrate
slug: Web/Performance/Guides/Animation_performance_and_frame_rate
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen realisiert werden. Die Leistungskosten beim Animieren einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren von teuren CSS-Eigenschaften kann zu {{Glossary("jank", "Rucklern")}} führen, da der Browser Schwierigkeiten hat, eine glatte {{Glossary("FPS", "Bildrate")}} zu erreichen.

Bei animierten Medien wie Videos und animierten GIFs ist die Dateigröße das Hauptanliegen bezüglich der Leistung – es geht darum, die Datei schnell genug herunterzuladen, um die Leistung nicht negativ zu beeinflussen. Codebasierte Animationen, sei es CSS, SVG, `<canvas>`, WebGL oder andere JavaScript-Animationen, können Leistungsprobleme verursachen, selbst wenn der Bandbreitenaufwand gering ist. Diese Animationen können die CPU belasten und / oder Ruckler verursachen.

Benutzer erwarten, dass alle Schnittstelleninteraktionen reibungslos und alle Benutzeroberflächen reaktionsschnell sind. Animation kann dazu beitragen, dass eine Website schneller und reaktionsschneller wirkt. Sie kann jedoch auch dazu führen, dass eine Website langsamer und ruckeliger wirkt, wenn sie nicht korrekt umgesetzt wird. Reaktionsschnelle Benutzeroberflächen haben eine Bildrate von 60 Bildern pro Sekunde (fps). Auch wenn es nicht immer möglich ist, 60 fps beizubehalten, ist es wichtig, für alle Animationen eine hohe und stabile Bildrate aufrechtzuerhalten.

Mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) geben Sie eine Anzahl von [Schlüsselbildern](/de/docs/Web/CSS/Reference/At-rules/@keyframes) an, von denen jedes mit CSS das Aussehen des Elements in einem bestimmten Stadium der Animation definiert. Der Browser erstellt die Animation als Übergang von jedem Schlüsselbild zum nächsten.

Im Vergleich zu Animationen von Elementen mit JavaScript können CSS-Animationen leichter zu erstellen sein. Außerdem können sie eine bessere Leistung bieten, da sie dem Browser mehr Kontrolle darüber geben, wann er die Frames rendert und gegebenenfalls Frames auslässt.

Allerdings können die Leistungskosten beim Ändern einer CSS-Eigenschaft von einer Eigenschaft zur anderen variieren. Allgemein gilt, dass Animationen bei 60 Bildern pro Sekunde glatt erscheinen. Für eine Rate von 60 Bildern pro Sekunde hat der Browser 16,7 Millisekunden Zeit, um Skripte auszuführen, Stile und Layout bei Bedarf neu zu berechnen und den aktualisierten Bereich neu zu zeichnen. Langsame Skripte und die Animation teurer CSS-Eigenschaften können zu {{Glossary("Jank", "Rucklern")}} führen, da der Browser Schwierigkeiten hat, eine glatte Bildrate zu erreichen.

## Der Rendering-Wasserfall

Der Prozess, den ein Browser verwendet, um Änderungen an einer Seite zu zeichnen, wenn ein Element CSS-Eigenschaften animiert, kann als Wasserfall beschrieben werden, der aus den folgenden Schritten besteht:

![Flussdiagramm des CSS-Rendering-Wasserfalls. In der Reihenfolge sind die Schritte Style neu berechnen, Layout und Malen.](css-rendering-waterfall.png)

1. **Style neu berechnen**: Wenn sich eine Eigenschaft eines Elements ändert, muss der Browser die berechneten Stile neu berechnen.
2. **Layout**: Anschließend verwendet der Browser die berechneten Stile, um die Position und Geometrie der Elemente zu bestimmen. Diese Operation wird als "Layout" bezeichnet, wird aber manchmal auch "Reflow" genannt.
3. **Malen**: Schließlich muss der Browser die Elemente auf den Bildschirm zeichnen. Ein letzter Schritt wird in dieser Sequenz nicht gezeigt: Die Seite kann in Ebenen aufgeteilt werden, die unabhängig gezeichnet und dann in einem Prozess namens "Composition" kombiniert werden.

Diese Sequenz muss in ein einzelnes Frame passen, da der Bildschirm erst aktualisiert wird, wenn sie abgeschlossen ist.

## CSS-Eigenschaftskosten

Im Kontext des Rendering-Wasserfalls sind einige Eigenschaften teurer als andere:

- Eigenschaften, die die **Geometrie** oder **Position** eines Elements beeinflussen, lösen aus:
  - Style neu berechnen
  - Layout
  - Neuzeichnung

  Zum Beispiel: {{cssxref("left")}}, {{cssxref("max-width")}}, {{cssxref("border-width")}}, {{cssxref("margin-left")}}, {{cssxref("font-size")}}

- Eigenschaften, die die Geometrie oder Position _nicht_ beeinflussen und _nicht_ in ihrer eigenen Ebene gerendert werden, lösen _keinen_ Layout aus. Sie lösen aus:
  - Style neu berechnen
  - Neuzeichnung

  Zum Beispiel: {{cssxref("color")}}

- Eigenschaften, die in ihrer **eigenen Ebene** gerendert werden, lösen nicht einmal eine Neuzeichnung aus, da das Update in der **Komposition** behandelt wird. Sie lösen aus:
  - Style neu berechnen

  Zum Beispiel: {{cssxref("transform")}}, {{cssxref("opacity")}}

## Entwicklerwerkzeuge

Die meisten Webbrowser enthalten Tools, die Einblicke in die Arbeit des Browsers bieten, wenn er Elemente einer Seite animiert. Mithilfe dieser Tools können Sie die Bildrate der Animation einer Anwendung messen und Leistungsengpässe diagnostizieren, falls welche gefunden werden.

- [Chrome-Performance-Tools](https://developer.chrome.com/docs/devtools/#performance)
- [Firefox-Performance-Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/)
