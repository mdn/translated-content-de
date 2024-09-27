---
title: Stacking-Kontext
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

**Stacking-Kontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dass er dem Ansichtsfenster oder der Webseite zugewandt ist. HTML-Elemente belegen diesen Raum in einer Prioritätsreihenfolge basierend auf den Attributeigenschaften der Elemente.

## Beschreibung

Im vorherigen Artikel dieses Leitfadens, [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index), haben wir gezeigt, dass die Darstellungsreihenfolge bestimmter Elemente von ihrem `z-index`-Wert beeinflusst wird. Dies geschieht, weil diese Elemente spezielle Eigenschaften haben, die dazu führen, dass sie einen _Stacking-Kontext_ bilden.

Ein Stacking-Kontext wird an jeder Stelle im Dokument von jedem Element in den folgenden Szenarien gebildet:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky` (sticky für alle mobilen Browser, aber nicht für ältere Desktop-Browser).
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` gesetzt, vorgesehen für [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).
- Element, das Kind eines [flex](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)-Containers ist, mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element, das Kind eines {{cssxref("grid")}}-Containers ist, mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert, der nicht `normal` ist.
- Element mit einem der folgenden Eigenschaften mit einem Wert, der nicht `none` ist:

  - {{cssxref("transform")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - {{cssxref("translate")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- Element mit einem {{cssxref("isolation")}}-Wert `isolate`.
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft angibt, die bei einem nicht-initialen Wert einen Stacking-Kontext erzeugen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint` oder einem zusammengesetzten Wert, der eines von beiden beinhaltet (d.h. `contain: strict`, `contain: content`).
- Element, das in die [oberste Ebene](/de/docs/Glossary/Top_layer) und sein entsprechendes {{cssxref("::backdrop")}} eingebracht wurde. Beispiele umfassen [fullscreen](/de/docs/Web/API/Fullscreen_API) und [popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Eigenschaften, die einen Stacking-Kontext erstellen (wie `opacity`), durch {{cssxref("@keyframes")}} animiert hat, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) eingestellt.

Innerhalb eines Stacking-Kontexts werden die Kindelemente nach denselben Regeln gestapelt, die gerade oben erklärt wurden. Wichtig ist, dass die `z-index`-Werte seiner Kindelemente nur in diesem Elternkontext Bedeutung haben. Stacking-Kontexte werden im übergeordneten Stacking-Kontext als eine einzige Einheit atomar behandelt.

Zusammenfassend:

- Stacking-Kontexte können in andere Stacking-Kontexte eingebettet sein und gemeinsam eine Hierarchie von Stacking-Kontexten erstellen.
- Jeder Stacking-Kontext ist völlig unabhängig von seinen Geschwistern: Nur Nachkommenelemente werden beim Stapelprozess berücksichtigt.
- Jeder Stacking-Kontext ist in sich geschlossen: Nachdem die Inhalte des Elements gestapelt sind, wird das ganze Element in der Stapelreihenfolge des übergeordneten Stacking-Kontexts berücksichtigt.

> [!NOTE]
> Die Hierarchie der Stacking-Kontexte ist ein Unterset der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stacking-Kontexte erstellen. Wir können sagen, dass Elemente, die keine eigenen Stacking-Kontexte erstellen, vom übergeordneten Stacking-Kontext _assimiliert_ werden.

## Beispiel

![Beispiel für geänderte Stacking-Regeln mit z-index](understanding_zindex_04.png)

In diesem Beispiel erstellt jedes positionierte Element seinen eigenen Stacking-Kontext aufgrund seiner Positionierung und `z-index`-Werte. Die Hierarchie der Stacking-Kontexte wird wie folgt organisiert:

- Root

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

Es ist wichtig zu beachten, dass DIV #4, DIV #5 und DIV #6 Kinder von DIV #3 sind, sodass das Stapeln dieser Elemente vollständig innerhalb von DIV #3 aufgelöst wird. Sobald das Stapeln und Rendern innerhalb von DIV #3 abgeschlossen ist, wird das gesamte DIV #3-Element zum Stapeln im Wurzelelement im Hinblick auf seine Geschwister-DIVs weitergegeben.

DIV #4 wird unter DIV #1 gerendert, weil der z-index von DIV #1 (5) im Stacking-Kontext des Wurzelelements gültig ist, während der z-index von DIV #4 (6) im Stacking-Kontext von DIV #3 gültig ist. Daher wird DIV #4 unter DIV #1 gerendert, weil DIV #4 zu DIV #3 gehört, welches einen niedrigeren z-index-Wert hat.

Aus demselben Grund wird DIV #2 (`z-index`: 2) unter DIV #5 (`z-index`: 1) gerendert, weil DIV #5 zu DIV #3 gehört, welches einen höheren z-index-Wert hat.

Der z-index von DIV #3 ist 4, aber dieser Wert ist unabhängig vom z-index von DIV #4, DIV #5 und DIV #6, da es zu einem anderen Stacking-Kontext gehört.

Ein einfacher Weg, um die _Renderreihenfolge_ von gestapelten Elementen entlang der z-Achse zu ermitteln, ist, es als eine Art „Versionsnummer“ zu betrachten, bei der Kindelemente kleinere Versionsnummern unterhalb der Hauptversionsnummern ihrer Eltern sind. Auf diese Weise können wir leicht sehen, wie ein Element mit einem z-index von 1 (DIV #5) über einem Element mit einem z-index von 2 (DIV #2) gestapelt ist und wie ein Element mit einem z-index von 6 (DIV #4) unter einem Element mit einem z-index von 5 (DIV #1) gestapelt ist.

In unserem Beispiel (sortiert nach der endgültigen Renderreihenfolge):

- Root

  - DIV #2: (`z-index`: 2)
  - DIV #3: (`z-index`: 4)

    - DIV #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von 4.1 führt
    - DIV #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von 4.3 führt
    - DIV #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von 4.6 führt

  - DIV #1: (`z-index`: 5)

### HTML

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code>
    position: relative;<br />
    z-index: 5;
  </code>
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code>
    position: relative;<br />
    z-index: 2;
  </code>
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code>
      position: relative;<br />
      z-index: 6;
    </code>
  </div>

  <h1>Division Element #3</h1>
  <code>
    position: absolute;<br />
    z-index: 4;
  </code>

  <div id="div5">
    <h1>Division Element #5</h1>
    <code>
      position: relative;<br />
      z-index: 1;
    </code>
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code>
      position: absolute;<br />
      z-index: 3;
    </code>
  </div>
</div>
```

### CSS

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```

## Ergebnis

{{ EmbedLiveSample('Example', '100%', '396') }}

## Siehe auch

- [Stacking ohne die z-index Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stacking-Regeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stacking von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente im Stacking behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie man `z-index` verwendet, um das Standard-Stacking zu ändern.
- [Stacking Kontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
- [Stacking Kontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stacking Kontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
- [Oberste Ebene](/de/docs/Glossary/Top_layer)
