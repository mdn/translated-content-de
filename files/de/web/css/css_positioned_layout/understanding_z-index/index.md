---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

In den einfachsten Fällen, wenn Text, Bilder und andere Elemente auf der Seite ohne Überlappungen angeordnet sind, können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden. In solchen Fällen gibt es einen einzelnen Rendering-Fluss, und alle Elemente sind sich des von anderen eingenommenen Raums bewusst. CSS ist nicht so einfach — CSS-Positionierung, Transformierungen, Einhaltung und andere Funktionen können dazu führen, dass sich Elemente überlagern. In diesem Leitfaden stellen wir die {{cssxref("z-index")}}-Eigenschaft vor, mit der Sie Elemente vor oder hinter anderen Elementen im selben [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) platzieren können.

## Ebenen auf der z-Achse

Die auf einer Seite dargestellten Elemente bestehen aus einer Reihe von Boxen. Jede Box hat eine Position in drei Dimensionen. Zusätzlich zu ihren Inline- und Block-Positionen liegen die Boxen entlang einer dritten Dimension, bekannt als die _z-Achse_. Die Steuerung der z-Achsen-Position eines Elements wird besonders relevant, wenn sich die Boxen von Elementen visuell überlappen. Mehrere Eigenschaftswerte können dazu führen, dass sich Elemente überlappen. Die {{cssxref("z-index")}}-Eigenschaft bietet Ihnen eine Möglichkeit, zu steuern, wie sie sich überlappen!

Standardmäßig werden Elementboxen auf Schicht 0 gerendert. Die `z-index`-Eigenschaft ermöglicht es Ihnen, Elemente auf verschiedenen Ebenen entlang der z-Achse zu positionieren, zusätzlich zur Standard-Rendering-Schicht. Die Position jedes Elements entlang der imaginären z-Achse (z-index-Wert) wird als Ganzzahl (positiv, negativ oder null) ausgedrückt und steuert die Stapelreihenfolge während des Renderings. Größere Zahlen bedeuten, dass die Elemente dem Betrachter näher sind.

Wenn Sie mit dem Begriff 'z-Achse' nicht vertraut sind, stellen Sie sich die Seite als Stapel von Ebenen vor, von denen jede eine zugewiesene Nummer hat. Die Ebenen werden in numerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen erscheinen (_X_ in der unten stehenden Tabelle repräsentiert eine beliebige positive Ganzzahl):

| Ebene          | Beschreibung                          |
| -------------- | ------------------------------------- |
| Unterste Ebene | Am weitesten vom Betrachter entfernt  |
| Ebene -X       | Ebenen mit negativen `z-index`-Werten |
| Ebene 0        | Standard-Rendering-Schicht            |
| Ebene X        | Ebenen mit positiven `z-index`-Werten |
| Oberste Ebene  | Am nächsten zum Betrachter            |

## Elemente im normalen Fluss

Standardmäßig, wenn keine `z-index`-Eigenschaft angegeben ist, werden die Elemente auf der Standard-Rendering-Schicht (Ebene 0) gerendert.

Betrachten Sie die folgenden drei Elemente:

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

Ohne jegliche angewendete Positionierungseigenschaften fließen diese Elemente in Dokumentenreihenfolge normal nacheinander, ohne Überlappung.

```css live-sample___example1 live-sample___example2 live-sample___example3 live-sample___example4
div {
  height: 100px;
  width: 100px;
  outline: 1px dotted;
  line-height: 100px;
  font-size: 40px;
  text-align: center;
  font-family: "Helvetica", "Arial", sans-serif;
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

## Standard-Layer-Verhalten

Um die Elemente zu stapeln, können wir sie [positionieren](/de/docs/Web/CSS/position#types_of_positioning).
Wenn wir absolute Positionierung verwenden, um sie (fast) an derselben Stelle zu platzieren, folgt die Standardstapelordnung der Quellreihenfolge: Das erste Element im HTML erscheint auf der untersten Ebene und das letzte Element auf der obersten Ebene.

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

## Neuordnung der Ebenen

Wir können die CSS-{{cssxref("z-index")}}-Eigenschaft verwenden, um jedes Element entlang der z-Achse zu positionieren und damit die Stapelreihenfolge effektiv neu zu ordnen.

Durch das Hinzufügen von `z-index`-Werten ändern wir die Standardebenenreihenfolge:

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

Das Element mit dem niedrigsten `z-index`-Wert erscheint auf der untersten Ebene. Das Element mit dem höchsten `z-index`-Wert erscheint auf der obersten Ebene. In diesem Beispiel ist `-9` der niedrigste Wert, daher befindet sich `#div2` hinter allen anderen. Das erste Element in der Quellreihenfolge, `#div1`, hat den größten Wert, daher erscheint es oben auf allen anderen.

## Einfluss von Stacking-Kontexten

Die Verwendung von `z-index` mag zunächst recht einfach erscheinen: eine einzelne Eigenschaft, der eine einzelne Ganzzahl zugewiesen ist, mit einem scheinbar verständlichen Verhalten. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, finden viele das resultierende Verhalten schwer verständlich oder vorhersehbar.

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

Obwohl der `z-index`-Wert von `#div3` (`0`) größer ist als der von `#div2` (`-9`), erscheint `#div2` über `#div3`, weil `#div1` und `#div2` in einem separaten Stacking-Kontext verschachtelt sind, der von `<section>` erstellt wird. Das `<section>`-Element und `#div3` sind Geschwister, und da der z-index des `<section>`-Elements größer ist als der von `#div3` (`2` gegenüber `0`), wird `#div3` hinter `<section>` und allen Inhalten von `<section>` platziert. Für detailliertere Informationen zu diesem Thema lesen Sie unseren [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)-Leitfaden.

## Fazit

Wie wir in diesem Leitfaden gesehen haben, bietet `z-index` eine Möglichkeit, zu steuern, wie Elemente entlang der z-Achse gestapelt werden. Sie haben gelernt, wie die Ganzzahlen der `z-index`-Eigenschaft verwendet werden können, um die Stapelreihenfolge zu ändern. Wie im letzten Beispiel gezeigt, können Stapelreihenfolgen jedoch kompliziert sein. Stapelreihenfolgen folgen einer Reihe komplexer Stapelregeln, um sicherzustellen, dass alle Browser denselben Inhalt auf die gleiche Weise stapeln, und dadurch Konsistenz und Vorhersehbarkeit bieten. Es ist wichtig, die [Merkmale, die Stacking-Kontexte erstellen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#features_creating_stacking_contexts), und wie [verschachtelte Stacking-Kontexte](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#nested_stacking_contexts) die Reihenfolge der Ebenen beeinflussen, zu verstehen.

## Siehe auch

- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- Modul [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)
