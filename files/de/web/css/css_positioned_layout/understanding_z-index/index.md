---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{CSSRef}}

In den einfachsten Fällen, wenn Text, Bilder und andere Elemente auf der Seite angeordnet sind, ohne sich zu überlappen, können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden. In solchen Fällen gibt es einen einzigen Renderfluss, und alle Elemente sind sich des Platzes bewusst, den andere einnehmen. CSS ist nicht so einfach — CSS-Positionierung, Transformation, Containment und andere Funktionen können dazu führen, dass sich Elemente überlappen. In diesem Leitfaden stellen wir die {{cssxref("z-index")}}-Eigenschaft vor, mit der Sie Elemente vor oder hinter anderen Elementen im selben [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) platzieren können.

## Ebenen auf der z-Achse

Die auf einer Seite gerenderten Elemente bestehen aus einer Reihe von Boxen. Jede Box hat eine Position in drei Dimensionen. Zusätzlich zu ihren Inline- und Block-Positionen liegen Boxen entlang einer dritten Dimension, die als _z-Achse_ bekannt ist. Die Kontrolle über die Position eines Elements auf der z-Achse wird besonders relevant, wenn sich Element-Boxen visuell überlappen. Mehrere Eigenschaftswerte können dazu führen, dass sich Elemente überlappen. Die {{cssxref("z-index")}}-Eigenschaft bietet Ihnen eine Möglichkeit, zu steuern, wie sie sich überlappen!

Standardmäßig werden Element-Boxen auf Ebene 0 gerendert. Die `z-index`-Eigenschaft ermöglicht es Ihnen, Elemente auf verschiedenen Ebenen entlang der z-Achse zu positionieren, zusätzlich zur Standard-Render-Ebene. Die Position jedes Elements entlang der imaginären z-Achse (z-index-Wert) wird als ganze Zahl (positiv, negativ oder null) ausgedrückt und steuert die Stapelreihenfolge während des Renderns. Größere Zahlen bedeuten, dass Elemente dem Betrachter näher sind.

Wenn Sie mit dem Begriff "z-Achse" nicht vertraut sind, stellen Sie sich die Seite als einen Stapel von Ebenen vor, die jeweils eine zugewiesene Nummer haben. Ebenen werden in numerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen erscheinen (_X_ in der Tabelle unten stellt eine beliebige positive ganze Zahl dar):

| Ebene          | Beschreibung                          |
| -------------- | ------------------------------------- |
| Unterste Ebene | Am weitesten vom Betrachter entfernt  |
| Ebene -X       | Ebenen mit negativen `z-index`-Werten |
| Ebene 0        | Standard-Render-Ebene                 |
| Ebene X        | Ebenen mit positiven `z-index`-Werten |
| Oberste Ebene  | Am nächsten zum Betrachter            |

## Elemente im normalen Fluss

Standardmäßig, wenn keine `z-index`-Eigenschaft angegeben ist, werden Elemente auf der Standard-Render-Ebene (Ebene 0) gerendert.

Betrachten Sie die folgenden drei Elemente:

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

Ohne angewendete Positionierungseigenschaften fließen diese Elemente normal in der Dokumentenreihenfolge, eines nach dem anderen, ohne sich zu überlappen.

```css live-sample___example1 live-sample___example2 live-sample___example3 live-sample___example4
div {
  height: 100px;
  width: 100px;
  outline: 1px dotted;
  line-height: 100px;
  font-size: 40px;
  text-align: center;
  font-family: arial, helvetica, sans-serif;
}

#div1 {
  background-color: lightpink;
}

#div2 {
  background-color: lightyellow;
}

#div3 {
  background-color: lightgreen;
}
```

{{EmbedLiveSample("Example1", 600, 340)}}

## Standardverhalten der Schichtung

Um die Elemente zu stapeln, können wir sie [positionieren](/de/docs/Web/CSS/position#types_of_positioning).
Wenn wir absolute Positionierung verwenden, um sie (fast) an dieselbe Stelle zu setzen, folgt die Standard-Stapelreihenfolge der Quellreihenfolge: Das erste Element im HTML erscheint in der untersten Ebene und das letzte Element in der obersten Ebene.

```css live-sample___example2 live-sample___example3 live-sample___example4
div {
  position: absolute;
}

#div1 {
  top: 0;
  left: 0;
}

#div2 {
  top: 10px;
  left: 10px;
}

#div3 {
  top: 20px;
  left: 20px;
}
```

{{EmbedLiveSample("Example2", 600, 130)}}

## Umsortieren von Ebenen

Wir können die CSS-{{cssxref("z-index")}}-Eigenschaft verwenden, um jedes Element entlang der z-Achse zu positionieren und die Stapelreihenfolge effektiv neu zu ordnen.

Indem wir `z-index`-Werte hinzufügen, ändern wir die Standard-Ebenenreihenfolge:

```css live-sample___example3 live-sample___example4
#div1 {
  z-index: 5;
}

#div2 {
  z-index: -9;
}

#div3 {
  z-index: 0;
}
```

{{EmbedLiveSample("Example3", 600, 130)}}

Das Element mit dem niedrigsten `z-index`-Wert erscheint in der untersten Ebene. Das Element mit dem höchsten `z-index`-Wert erscheint in der obersten Ebene. In diesem Beispiel ist `-9` der niedrigste Wert, daher befindet sich `#div2` hinter allen anderen. Das erste Element in der Quellreihenfolge, `#div1`, hat den größten Wert, sodass es über allen anderen erscheint.

## Auswirkung von Stacking-Kontexten

Die Verwendung von `z-index` mag zunächst recht einfach erscheinen: eine einzelne Eigenschaft, der eine ganze Zahl mit scheinbar verständlichem Verhalten zugewiesen ist. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, finden viele das resultierende Verhalten jedoch schwer verständlich oder vorhersagbar.

Wenn die Elemente keine Geschwister sind, kann das Stapelverhalten komplizierter werden, da jedes Element zu einem anderen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) gehören kann. Dies wird im folgenden Beispiel gezeigt.

```html live-sample___example4
<section>
  <div id="div1">#1</div>
  <div id="div2">#2</div>
</section>
<div id="div3">#3</div>
```

```css live-sample___example4
section {
  position: absolute;
  z-index: 2;
}
```

{{EmbedLiveSample("Example4", 600, 130)}}

Obwohl der `z-index`-Wert von `#div3` (`0`) größer ist als der von `#div2` (`-9`), erscheint `#div2` über `#div3`, da `#div1` und `#div2` in einem separaten Stacking-Kontext verschachtelt sind, der von `<section>` erstellt wurde. Das `<section>`-Element und `#div3` sind Geschwister, und da der `z-index` des `<section>`-Elements größer ist als der von `#div3` (`2` gegenüber `0`), wird `#div3` hinter `<section>` und allen Inhalten von `<section>` platziert. Weitere detaillierte Informationen zu diesem Thema finden Sie in unserem [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)-Leitfaden.

## Schlussfolgerung

Wie wir in diesem Leitfaden gesehen haben, bietet `z-index` eine Möglichkeit, zu steuern, wie Elemente entlang der z-Achse gestapelt werden. Sie haben gelernt, wie die ganzen Zahlenwerte der `z-index`-Eigenschaft verwendet werden können, um die Stapelreihenfolge zu ändern. Wie jedoch im letzten Beispiel gezeigt, können Stapelreihenfolgen kompliziert sein. Stapelreihenfolgen folgen einer Reihe von komplexen Stapelregeln, um sicherzustellen, dass alle Browser denselben Inhalt auf die gleiche Weise stapeln, um Konsistenz und Vorhersehbarkeit zu gewährleisten. Es ist wichtig, die [Funktionen, die Stacking-Kontexte erstellen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#features_creating_stacking_contexts) und wie [verschachtelte Stacking-Kontexte](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#nested_stacking_contexts) die Ebenenreihenfolge beeinflussen, zu verstehen.

## Siehe auch

- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapelung von Floating-Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
