---
title: Verständnis von z-index
slug: Web/CSS/Guides/Positioned_layout/Understanding_z-index
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In den einfachsten Fällen, wenn Text, Bilder und andere Elemente ohne Überlappung auf der Seite angeordnet sind, können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden. In solchen Fällen gibt es einen einzigen Darstellungsfluss, und alle Elemente sind sich des von anderen eingenommenen Raums bewusst. CSS ist nicht so einfach – CSS-Positionierung, Transformation, Einschließung und andere Funktionen können dazu führen, dass sich Elemente überlappen. In diesem Leitfaden führen wir die {{cssxref("z-index")}}-Eigenschaft ein, die es Ihnen ermöglicht, Elemente vor oder hinter andere Elemente im gleichen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) zu platzieren.

## Ebenen auf der z-Achse

Die auf einer Seite gerenderten Elemente bestehen aus einer Reihe von Boxen. Jede Box hat eine Position in drei Dimensionen. Zusätzlich zu ihren Inline- und Block-Positionen liegen Boxen entlang einer dritten Dimension, der _z-Achse_. Die Kontrolle über die Position eines Elements auf der z-Achse wird besonders relevant, wenn sich die Boxen von Elementen visuell überlappen. Mehrere Eigenschaftenwerte können dazu führen, dass sich Elemente überlappen. Die {{cssxref("z-index")}}-Eigenschaft bietet Ihnen eine Möglichkeit zur Steuerung, wie sie sich überlappen!

Standardmäßig werden Elemente auf Ebene 0 gerendert. Die `z-index`-Eigenschaft ermöglicht es Ihnen, Elemente auf verschiedenen Ebenen entlang der z-Achse zu positionieren, zusätzlich zur Standard-Darstellungsebene. Die Position jedes Elements entlang der imaginären z-Achse (z-index-Wert) wird als Ganzzahl (positiv, negativ oder null) ausgedrückt und steuert die Stapelreihenfolge während der Darstellung. Größere Zahlen bedeuten, dass Elemente näher am Betrachter sind.

Wenn Sie mit dem Begriff 'z-Achse' nicht vertraut sind, stellen Sie sich die Seite als einen Stapel von Ebenen vor, von denen jede eine zugewiesene Nummer hat. Ebenen werden in numerischer Reihenfolge gerendert, wobei größere Zahlen oberhalb kleinerer Zahlen erscheinen (_X_ in der untenstehenden Tabelle repräsentiert eine beliebige positive Ganzzahl):

| Ebene        | Beschreibung                             |
| ------------ | ---------------------------------------- |
| Unterste Ebene | Am weitesten vom Betrachter entfernt   |
| Ebene -X     | Ebenen mit negativen `z-index`-Werten      |
| Ebene 0      | Standard-Darstellungsebene               |
| Ebene X      | Ebenen mit positiven `z-index`-Werten      |
| Oberste Ebene| Am nächsten zum Betrachter               |

## Elemente im normalen Fluss

Standardmäßig, wenn keine `z-index`-Eigenschaft angegeben ist, werden Elemente auf der Standard-Darstellungsebene (Ebene 0) gerendert.

Betrachten Sie die folgenden drei Elemente:

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

Ohne angewendete Positionierungseigenschaften fließen diese Elemente normalerweise in Dokumentenreihenfolge, eines nach dem anderen, ohne Überlappung.

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

## Standard-Stapeleigenschaften

Um die Elemente zu stapeln, können wir sie [positionieren](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning).
Wenn wir sie mit absoluter Positionierung fast am gleichen Ort platzieren, folgt die Standard-Stapelreihenfolge der Quellreihenfolge: Das erste Element im HTML erscheint auf der untersten Ebene und das letzte Element erscheint auf der obersten Ebene.

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

## Umordnen der Ebenen

Wir können die CSS-{{cssxref("z-index")}}-Eigenschaft verwenden, um jedes Element entlang der z-Achse zu positionieren und so die Stapelreihenfolge effektiv umzuordnen.

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

Das Element mit dem niedrigsten `z-index`-Wert erscheint auf der untersten Ebene. Das Element mit dem höchsten `z-index`-Wert erscheint auf der obersten Ebene. In diesem Beispiel ist `-9` der niedrigste Wert, daher befindet sich `#div2` hinter allen anderen. Das erste Element in der Quellreihenfolge, `#div1`, hat den größten Wert, daher erscheint es über allen anderen.

## Einfluss von Stacking-Kontexten

Die Verwendung von `z-index` mag zunächst recht einfach erscheinen: Eine einzelne Eigenschaft, die eine ganze Zahl zugewiesen bekommt und ein scheinbar verständliches Verhalten zeigt. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, finden viele das resultierende Verhalten schwer verständlich oder vorhersehbar.

Wenn die Elemente keine Geschwister sind, kann das Stapelverhalten komplizierter werden, da jedes Element zu einem anderen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) gehören kann. Dies wird im folgenden Beispiel gezeigt.

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

Obwohl der `z-index`-Wert von `#div3` (`0`) größer ist als der von `#div2` (`-9`), erscheint `#div2` über `#div3`, weil `#div1` und `#div2` in einem separaten Stacking-Kontext verschachtelt sind, der durch `<section>` erstellt wird. Das `<section>`-Element und `#div3` sind Geschwister, und da der `z-index` des `<section>`-Elements größer ist als der von `#div3` (`2` versus `0`), wird `#div3` hinter `<section>` und allen Inhalten von `<section>` platziert. Für detailliertere Informationen zu diesem Thema siehe unseren [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)-Leitfaden.

## Fazit

Wie in diesem Leitfaden gesehen, bietet `z-index` eine Möglichkeit, wie Elemente entlang der z-Achse gestapelt werden. Sie haben gelernt, wie die ganzzahligen Werte der `z-index`-Eigenschaft verwendet werden können, um die Stapelreihenfolge zu ändern. Wie im letzten Beispiel gezeigt, können Stapelreihenfolgen jedoch kompliziert sein. Stapelreihenfolgen folgen einer Reihe komplexer Stapelregeln, um sicherzustellen, dass alle Browser denselben Inhalt auf die gleiche Weise stapeln und so Konsistenz und Vorhersagbarkeit bieten. Es ist wichtig, die [Funktionen, die Stacking-Kontexte erstellen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context#features_creating_stacking_contexts) und wie [verschachtelte Stacking-Kontexte](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context#nested_stacking_contexts) die Ebenenreihenfolge beeinflussen, zu verstehen.

## Siehe auch

- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Stapelnde Floating-Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Verwendung von `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- Modul [CSS-Positionierungs-Layout](/de/docs/Web/CSS/Guides/Positioned_layout)
