---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In den einfachsten Fällen, wenn Text, Bilder und andere Elemente auf der Seite ohne Überlappung angeordnet sind, können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden. In solchen Fällen gibt es einen einzigen Darstellungsfluss, und alle Elemente sind sich des von anderen eingenommenen Raums bewusst. CSS ist nicht so einfach — CSS Positionierung, Transformation, Einschluss und andere Funktionen können dazu führen, dass Elemente sich überlappen. In diesem Leitfaden stellen wir die Eigenschaft {{cssxref("z-index")}} vor, die es Ihnen ermöglicht, Elemente vor oder hinter anderen Elementen im selben [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) zu platzieren.

## Schichten auf der z-Achse

Die auf einer Seite dargestellten Elemente bestehen aus einer Reihe von Boxen. Jede Box hat eine Position in drei Dimensionen. Zusätzlich zu ihren Inline- und Block-Positionen liegen Boxen entlang einer dritten Dimension, die als _z-Achse_ bekannt ist. Die Steuerung der Position eines Elements auf der z-Achse wird besonders relevant, wenn sich Boxen von Elementen visuell überlappen. Mehrere Eigenschaftswerte können bewirken, dass sich Elemente überlappen. Die Eigenschaft {{cssxref("z-index")}} bietet Ihnen eine Möglichkeit, zu steuern, wie sie sich überlappen!

Standardmäßig werden die Boxen von Elementen auf Schicht 0 gerendert. Die `z-index`-Eigenschaft ermöglicht es Ihnen, Elemente auf verschiedenen Schichten entlang der z-Achse zu positionieren, zusätzlich zur Standarddarstellungsschicht. Die Position jedes Elements entlang der imaginären z-Achse (z-Index-Wert) wird als Ganzzahl (positiv, negativ oder null) ausgedrückt und steuert die Stapelreihenfolge während der Darstellung. Größere Zahlen bedeuten, dass Elemente dem Beobachter näher sind.

Falls Sie mit dem Begriff 'z-Achse' nicht vertraut sind, stellen Sie sich die Seite als einen Stapel von Schichten vor, die alle eine zugewiesene Nummer haben. Schichten werden in nummerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen erscheinen (im nachstehenden Tabellenbeispiel steht _X_ für eine beliebige positive Ganzzahl):

| Schicht          | Beschreibung                             |
| ---------------- | ---------------------------------------- |
| Unterste Schicht | Am weitesten vom Beobachter entfernt     |
| Schicht -X       | Schichten mit negativen `z-index` Werten |
| Schicht 0        | Standarddarstellungsschicht              |
| Schicht X        | Schichten mit positiven `z-index` Werten |
| Oberste Schicht  | Am nächsten zum Beobachter               |

## Elemente im normalen Fluss

Standardmäßig, wenn keine `z-index`-Eigenschaft angegeben ist, werden Elemente auf der Standarddarstellungsschicht (Schicht 0) gerendert.

Betrachten Sie die folgenden drei Elemente:

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

Ohne angewendete Positionierungseigenschaften fließen diese Elemente normal in Dokumentenreihenfolge, eines nach dem anderen, ohne sich zu überlappen.

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

{{EmbedLiveSample("Beispiel1", 600, 340)}}

## Standardmäßiges Schichtverhalten

Um die Elemente zu stapeln, können wir sie [positionieren](/de/docs/Web/CSS/position#types_of_positioning).
Wenn wir absolute Positionierung verwenden, um sie an (fast) derselben Stelle zu platzieren, folgt die Standardstapelordnung der Quellreihenfolge: Das erste Element im HTML erscheint auf der untersten Schicht und das letzte Element erscheint auf der obersten Schicht.

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

{{EmbedLiveSample("Beispiel2", 600, 130)}}

## Umsortierung der Schichten

Wir können die CSS-Eigenschaft {{cssxref("z-index")}} verwenden, um jedes Element entlang der z-Achse zu positionieren und dadurch die Stapelreihenfolge effektiv neu zu ordnen.

Indem wir `z-index`-Werte hinzufügen, ändern wir die Standardreihenfolge der Schichten:

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

{{EmbedLiveSample("Beispiel3", 600, 130)}}

Das Element mit dem niedrigsten `z-index`-Wert erscheint auf der untersten Schicht. Das Element mit dem höchsten `z-index`-Wert erscheint auf der obersten Schicht. In diesem Beispiel ist `-9` der niedrigste Wert, sodass `#div2` hinter allen anderen ist. Das erste Element in der Quellreihenfolge, `#div1`, hat den größten Wert, sodass es über allen anderen erscheint.

## Auswirkungen von Stacking-Kontexten

Die Verwendung von `z-index` mag auf den ersten Blick recht einfach erscheinen: eine einzelne Eigenschaft, zugewiesen an eine einzelne Ganzzahl mit einem scheinbar verständlichen Verhalten. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, finden viele das resultierende Verhalten schwer verständlich oder vorhersehbar.

Wenn die Elemente keine Geschwister sind, kann das Stapelverhalten komplizierter werden, da jedes Element zu einem unterschiedlichen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) gehören kann. Dies wird im folgenden Beispiel gezeigt.

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

{{EmbedLiveSample("Beispiel4", 600, 130)}}

Obwohl der `z-index`-Wert von `#div3` (`0`) größer ist als der von `#div2` (`-9`), erscheint `#div2` über `#div3`, weil `#div1` und `#div2` in einem separaten Stacking-Kontext verschachtelt sind, der durch `<section>` erstellt wird. Das `<section>`-Element und `#div3` sind Geschwister, und da der `z-index` des `<section>`-Elements größer ist als der von `#div3` (`2` gegenüber `0`), wird `#div3` hinter `<section>` und all dem Inhalt von `<section>` platziert. Für detailliertere Informationen zum Thema siehe unseren [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) Leitfaden.

## Fazit

Wie wir in diesem Leitfaden gesehen haben, bietet `z-index` eine Möglichkeit, zu steuern, wie Elemente entlang der z-Achse gestapelt werden. Sie haben gelernt, wie die Ganzzahlenwerte der `z-index`-Eigenschaft verwendet werden können, um die Stapelreihenfolge zu ändern. Wie das letzte Beispiel jedoch zeigt, können Stapelreihenfolgen kompliziert sein. Stapelreihenfolgen folgen einer Reihe von komplexen Stapelregeln, um sicherzustellen, dass alle Browser denselben Inhalt auf konsistente und vorhersehbare Weise stapeln. Es ist wichtig zu verstehen, [welche Funktionen Stacking-Kontexte erstellen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#features_creating_stacking_contexts) und wie [verschachtelte Stacking-Kontexte](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context#nested_stacking_contexts) die Schichtreihenfolge beeinflussen.

## Siehe auch

- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapelung von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
