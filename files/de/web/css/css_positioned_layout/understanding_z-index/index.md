---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

In den einfachsten Fällen, wenn Text, Bilder und andere Elemente auf der Seite ohne Überlappung angeordnet sind, können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden. In solchen Fällen gibt es einen einzigen Rendering-Fluss, und alle Elemente sind sich des von anderen belegten Raumes bewusst. So einfach ist CSS jedoch nicht — CSS-Positionierung, Transformation, Containment und andere Funktionen können dazu führen, dass sich Elemente überlappen. In diesem Leitfaden führen wir die {{cssxref("z-index")}}-Eigenschaft ein, die Ihnen ermöglicht, Elemente vor oder hinter anderen Elementen im gleichen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) zu platzieren.

## Schichten auf der z-Achse

Die auf einer Seite gerenderten Elemente bestehen aus einer Reihe von Boxen. Jede Box hat eine Position in drei Dimensionen. Neben ihren Inline- und Block-Positionen liegen Boxen entlang einer dritten Dimension, die als _z-Achse_ bekannt ist. Die Kontrolle über die z-Achsen-Position eines Elements wird besonders relevant, wenn sich Boxen visuell überlappen. Mehrere Eigenschaftswerte können dazu führen, dass sich Elemente überlappen. Die {{cssxref("z-index")}}-Eigenschaft bietet Ihnen eine Möglichkeit, zu steuern, wie sie sich überlappen!

Standardmäßig werden Element-Boxen auf Ebene 0 gerendert. Die `z-index`-Eigenschaft erlaubt es Ihnen, Elemente auf verschiedenen Ebenen entlang der z-Achse zu positionieren, zusätzlich zur Standard-Rendering-Ebene. Die Position jedes Elements entlang der imaginären z-Achse (z-index-Wert) wird als ganze Zahl (positiv, negativ oder null) ausgedrückt und steuert die Stapelreihenfolge während des Renderings. Größere Zahlen bedeuten, dass Elemente näher am Betrachter sind.

Wenn Ihnen der Begriff 'z-Achse' nicht vertraut ist, stellen Sie sich die Seite als einen Stapel von Schichten vor, jede mit einer zugewiesenen Nummer. Schichten werden in numerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen erscheinen (_X_ in der Tabelle unten steht für eine beliebige positive ganze Zahl):

| Schicht          | Beschreibung                             |
| ---------------- | ---------------------------------------- |
| Unterste Schicht | Am weitesten vom Betrachter entfernt     |
| Schicht -X       | Schichten mit negativen `z-index`-Werten |
| Schicht 0        | Standard-Rendering-Schicht               |
| Schicht X        | Schichten mit positiven `z-index`-Werten |
| Obere Schicht    | Am nächsten zum Betrachter               |

## Elemente im normalen Fluss

Standardmäßig, wenn keine `z-index`-Eigenschaft angegeben ist, werden Elemente auf der Standard-Rendering-Schicht (Schicht 0) gerendert.

Betrachten Sie die folgenden drei Elemente:

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

Ohne angewandte Positionierungseigenschaften fließen diese Elemente normal in Dokumentreihenfolge, eines nach dem anderen, ohne sich zu überlappen.

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

## Standardmäßiges Schichtverhalten

Um die Elemente zu stapeln, können wir sie [positionieren](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning).
Wenn wir sie mit absoluter Positionierung (fast) an dieselbe Stelle setzen, folgt die Standard-Stapelreihenfolge der Quellenreihenfolge: das erste Element im HTML erscheint in der untersten Schicht, und das letzte Element erscheint in der obersten Schicht.

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

## Umordnen von Schichten

Wir können die CSS-Eigenschaft {{cssxref("z-index")}} verwenden, um jedes Element entlang der z-Achse zu positionieren und somit die Stapelreihenfolge effektiv umzuordnen.

Durch Hinzufügen von `z-index`-Werten ändern wir die Standard-Schichtreihenfolge:

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

Das Element mit dem niedrigsten `z-index`-Wert erscheint in der untersten Schicht. Das Element mit dem höchsten `z-index`-Wert erscheint in der obersten Schicht. In diesem Beispiel ist `-9` der niedrigste Wert, sodass `#div2` hinter allen anderen liegt. Das erste Element in der Quellenreihenfolge, `#div1`, hat den größten Wert, sodass es über allen anderen erscheint.

## Einfluss von Stacking-Kontexten

Die Verwendung von `z-index` mag zunächst recht einfach erscheinen: eine einzelne Eigenschaft, die einer ganzen Zahl mit einem scheinbar verständlichen Verhalten zugewiesen wird. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, finden viele das resultierende Verhalten schwer zu verstehen oder vorherzusagen.

Wenn die Elemente nicht Geschwister sind, kann das Stapelverhalten komplizierter werden, da jedes Element zu einem anderen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) gehören kann. Dies wird im folgenden Beispiel gezeigt.

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

Obwohl der `z-index`-Wert von `#div3` (`0`) größer ist als der von `#div2` (`-9`), erscheint `#div2` über `#div3`, da `#div1` und `#div2` in einem separaten Stacking-Kontext, der durch `<section>` erstellt wird, verschachtelt sind. Das `<section>`-Element und `#div3` sind Geschwister, und da der z-index des `<section>`-Elements größer ist als der von `#div3` (`2` gegenüber `0`), wird `#div3` hinter `<section>` und all seinen Inhalten platziert. Für detailliertere Informationen zu diesem Thema, sehen Sie sich unseren [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)-Leitfaden an.

## Fazit

Wie wir in diesem Leitfaden gesehen haben, bietet `z-index` eine Möglichkeit, wie Elemente entlang der z-Achse gestapelt werden. Sie haben gelernt, wie die ganzzahligen Werte der `z-index`-Eigenschaft verwendet werden können, um die Stapelreihenfolge zu ändern. Wie im letzten Beispiel gezeigt, können Stapelreihenfolgen jedoch komplex sein. Stapelreihenfolgen folgen einer Reihe von komplexen Stapelregeln, um sicherzustellen, dass alle Browser denselben Inhalt auf die gleiche Weise stapeln und Konsistenz und Vorhersehbarkeit bieten. Es ist wichtig, die [Eigenschaften, die Stacking-Kontexte erstellen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#features_creating_stacking_contexts) und wie [verschachtelte Stacking-Kontexte](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#nested_stacking_contexts) die Schichtreihenfolge beeinflussen, zu verstehen.

## Siehe auch

- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapeln von floating-Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [CSS-Positionierungslayout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
