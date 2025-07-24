---
title: Verwenden der CSS-Ankerpositionierung
short-title: Verwenden der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es Ihnen ermöglichen, Elemente zusammen zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, gesetzt werden.

Die CSS-Ankerpositionierung bietet auch Mechanismen mit reinem CSS zum Festlegen mehrerer alternativer Positionen für ein ankerpositioniertes Element. Wenn beispielsweise ein Tooltip an einem Formularfeld verankert ist, der Tooltip jedoch in seiner Standardeinstellung außerhalb des Bildschirms gerendert würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, damit er auf dem Bildschirm platziert wird, oder ihn alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails zu jedem unten diskutierten Konzept beigefügt. Informationen zum Festlegen alternativer Positionen und zum Ausblenden ankerpositionierter Elemente finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr verbreitet, ein Element an ein anderes binden zu wollen. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um weitere Informationen bereitzustellen.
- Einstellungs- oder Options-Dialoge, die zugänglich sind, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch erzeugt – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle zu erstellen, wäre relativ einfach, wenn das Ankerelement (auch **Ankerelement** genannt) immer an derselben Stelle in der Benutzeroberfläche wäre und das daran gebundene Element (auch **ankerpositioniertes Element** oder einfach **positioniertes Element** genannt) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. In der Praxis ist dies jedoch selten der Fall.

Die Position des positionierten Elements relativ zu seinem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig verändert (z. B. durch Scrollen, Ändern der Ansichtgröße, Drag & Drop usw.). Wenn sich beispielsweise ein Element wie ein Formularfeld an den Rand der Ansicht annähert, kann sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularelement binden und sicherstellen, dass der Tooltip sichtbar bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Möglicherweise haben Sie dies als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie mit Rechtsklick (<kbd>Ctrl</kbd> + Klick) Kontextsmenüs auf Ihrem Desktop oder Laptop verwenden.

Historisch gesehen erforderte die Verknüpfung eines Elements mit einem anderen Element und die dynamische Änderung der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme mit sich brachte. Außerdem war es nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle leistungsfähig und deklarativ mit CSS (und HTML) statt JavaScript.

## Assoziieren von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst festlegen, welches Element der Anker ist, und dann angeben, welches positionierte Element bzw. welche positionierten Elemente Sie mit diesem Anker assoziieren möchten. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Anker-Assoziation

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft auf ihm festlegen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
  width: fit-content;
}
```

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) über die {{cssxref("position")}}-Eigenschaft sein. Das positionierte Element erhält dann seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Wert der `anchor-name`-Eigenschaft des Ankerelements, um die beiden miteinander zu assoziieren:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
}
```

Wir wenden das obige CSS auf das folgende HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns einfach vertrauen. Sie sind noch nicht miteinander verbunden – wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich allein bewegen und die Infobox an derselben Stelle zurücklassen. Sie werden das tatsächliche Verbinden in Aktion sehen, wenn wir uns das [Positionieren von Elementen basierend auf der Ankerposition](#positionieren_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Anker-Assoziation

In einigen Fällen wird zwischen zwei Elementen eine implizite Ankerreferenz aufgrund der semantischen Natur ihrer Beziehung erstellt. Wenn zum Beispiel die [Popover API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einer Steuerung zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden erstellt. Dies kann geschehen, wenn:

- Ein Popover mit einer Steuerung deklarativ assoziiert wird, indem die Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) verwendet werden.
- Programmgesteuertes Assoziieren einer Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einer Steuerung unter Verwendung der `source`-Option.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker in die [anpassbare Auswahlelementfunktionalität](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den Wert `base-select` der {{cssxref("appearance")}}-Eigenschaft integriert werden. In diesem Fall wird zwischen den beiden eine implizite Popover-Invoker-Beziehung erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben beschriebenen Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht miteinander verbunden. Um sie zusammen zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Positionieren von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Assoziieren eines positionierten Elements mit einem Anker an sich noch nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen eines [CSS `anchor()`-Funktions](#using_inset_properties_with_anchor_function_values)-Werts auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Spezifizieren eines `position-area`](#setting_a_position-area), oder Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktionieren. Wenn es versteckt ist (zum Beispiel durch [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir diskutieren, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Mit `position: absolute` ist dieser Inset-Positionswert eine absolute Distanz relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert eine absolute Distanz relativ zum Ansichtsfenster.

Die CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer assoziierten Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absolute Distanz relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder über das nicht standardisierte [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut mit dem Element assoziiert ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte sind die `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder ein `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht mit der Inset-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, das die Distanz festlegt, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf eine ankerpositionierte In

set-Eigenschaft eines Elements setzen, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist das gleiche Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der er gesetzt ist, inkompatibel ist und der Fallback verwendet wird. Diese beiden Anweisungen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des ursprünglichen enthaltenden Blocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen der Kante des Ankers und dem positionierten Element zu erstellen, oder `anchor()` in einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einige `margin-left` hinzu, um zwischen den Kanten Abstand zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie in einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keine `margin` hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### Beispiel für `anchor()`

Lassen Sie uns ein Beispiel für `anchor()` in Aktion betrachten. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, jedoch mit einigen Fülltexten darunter und darüber, um den Inhalt seines Containers überlaufen zu lassen, und Scrollen zu verursachen. Wir geben dem Ankerelement den gleichen `anchor-name` wie in den vorherigen Beispielen:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

body {
  width: 50%;
  margin: 0 auto;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}
```

Die Infobox ist über den Ankernamen mit dem Anker assoziiert und erhält eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften einbinden (die in horizontalen Links-zu-Rechts-Schreibrichtungen den {{cssxref("top")}}- und {{cssxref("left")}}-Eigenchaften entsprechen), haben wir es an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --myAnchor;
  position: fixed;
  inset-block-start: anchor(end);
  inset-inline-start: anchor(self-end);
  margin: 5px 0 0 5px;
}
```

Lassen Sie uns die Positionierungsanweisungen der Inset-Eigenschaften näher betrachten:

- `inset-block-start: anchor(end)`: Diese Einstellung setzt die Block-Startkante des positionierten Elements auf die Block-Endkante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Diese Einstellung setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("Beispiel für `anchor()`", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement – es ist an das Ankerelement gebunden, nicht an das Ansichtsfenster.

### Einstellen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft arbeitet mit dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in eine der neun Kacheln zu positionieren oder es bis zu zwei oder drei Kacheln zu überbrücken.

![Das Position-Area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden vom [enth

altenen Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Distanz zwischen der mittleren Kachel und dem äußeren Rand des Rasters vom enthaltenen Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Spannungsoptionen verfügbar, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in eine spezifische Rasterkachel zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) positioniert das positionierte Element in der oberen linken Kachel.
- `bottom center` (logisches Äquivalent `end center`) positioniert das positionierte Element in der unteren mittleren Kachel.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in die das positionierte Element platziert wird, und platziert es zunächst in der Mitte, und der andere gibt die Menge dieser Spalte an, die zu überbrücken ist. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert wird und sich über die mittleren und linken Kacheln dieser Reihe erstreckt.
- `y-end span-x-end` bewirkt, dass das positionierte Element an das Ende der y-Spalte platziert wird und sich über die mittleren und x-End-Kacheln dieser Spalte erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in der block-end-Reihe platziert wird und sich über die inline-start, center und inline-end Kacheln dieser Reihe erstreckt.

Wenn Sie nur einen Wert angeben, hängt die Wirkung davon ab, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` wäre. Zum Beispiel, `top` hat denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt wäre; zum Beispiel `start` hat denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt wären (also, `center center`).

> [!NOTE]
> Siehe die [Dokumentationsseite zum `<position-area>`](/de/docs/Web/CSS/position-area_value) für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet das gleiche HTML und die grundlegenden CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element zum Ändern des `position-area`-Werts des positionierten Elements hinzugefügt haben.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <label for="position-area-select">Choose a position-area:</label>
  <select id="position-area-select" name="position-area-select">
    <option>top</option>
    <option>bottom</option>
    <option>left</option>
    <option>right</option>
    <option>start</option>
    <option>end</option>
    <option>top left</option>
    <option>top right</option>
    <option>bottom left</option>
    <option>bottom right</option>
    <option>top span-left</option>
    <option>bottom span-right</option>
    <option>start span-start</option>
    <option>end span-end</option>
    <option>center</option>
    <option>center span-all</option>
    <option>bottom center</option>
    <option>end span-all</option>
  </select>
</form>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
}

select {
  display: block;
  margin-top: 5px;
}

form {
  position: fixed;
  top: 0;
  right: 2px;
}
```

Die Infobox erhält eine feste Positionierung und ist CSS-asssoziiert mit dem Anker. Beim Laden ist sie eingestellt, um mit `position-area: top;` an den Anker zu binden, was bedeutet, dass sie oben im position-area-Raster platziert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top;
}
```

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte, die aus dem `<select>`-Menü ausgewählt wurden, auf der Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um die Auswirkungen auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Einstellen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Größe des positionierten Elements in keiner Dimension explizit angegeben. Wir haben die Größenangabe absichtlich weggelassen, damit Sie das Verhalten beobachten können, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangabe in `position-area` Rasterzellen platziert wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich so, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird entsprechend seiner [enthälterblock](/de/docs/Web/CSS/CSS_display/Containing_block)-Größe dimensioniert, die die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` erzwungen. Auto-dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit, wie nötig, um den Textinhalt zu umfassen, während sie durch den Rand des Ansichtsfensters eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Rasters mit einem linken oder inline-start Wert platziert werden, wickelt sich der Text. Wenn die `max-content`-Größe des ankerpositionierten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, wie beispielsweise bei `position-area: bottom center`, richtet es sich an der angegebenen Rasterzelle aus, und die Breite entspricht der des Ankerelements. In diesem Fall ist seine Mindesthöhe die Größe des enthälterblocks des Ankerelements. Es wird nicht überlaufen, da das `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrieren auf den Anker mit `anchor-center`

Sie können zwar das ankerpositionierte Element mit `position-area`'s `center` Werten zentrieren, Inset-Eigenschaften kombiniert mit der `anchor()`-Funktion bieten jedoch mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Insteigenschaften anstelle von `position-area` verwendet werden, um es zu binden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern die einfache Ausrichtung von Elementen in der Online- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, beispielsweise entlang der Haupt- oder Querachse im Falle von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit der Mitte seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und grundlegende CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und ist am unteren Rand des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf der Mitte des Ankers zentriert ist:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
}
```

Dies zentriert das ankerpositionierte Element unten an seinem Anker:

{{ EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250") }}

## Größe von Elementen basierend auf der Ankergröße

Neben dem Positionieren eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers einstellen, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb einer Größeneigenschaft verwenden.

Eigenschaften, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

- {{cssxref("width")}}
- {{cssxref("height")}}
- {{cssxref("min-width")}}
- {{cssxref("min-height")}}
- {{cssxref("max-width")}}
- {{cssxref("max-height")}}
- {{cssxref("block-size")}}
- {{cssxref("inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}

`anchor-size()`-Funktionen lösen sich zu {{cssxref("length")}}-Werten auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie die Größe des Elements relativ setzen möchten. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet, der Anker, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, zu der das positionierte Element relativ dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist, oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewandte Größe zu ändern.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements, so dass sie der Breite des Standardankers entspricht:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankers, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Lassen Sie uns ein Beispiel betrachten. HTML und grundlegendes CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Refer

ence/Global_attributes/tabindex)-Attribut erhalten hat, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird in derselben Weise mit dem Anker assoziiert wie zuvor. Dieses Mal binden wir sie jedoch an die rechte Seite des Ankers mit einer `position-area` und geben ihr eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: right;
  margin-left: 5px;
  width: calc(anchor-size(width) * 5);
}
```

Zudem erhöhen wir die {{cssxref("width")}} des Ankerelements beim {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand ändert.

```css
.anchor {
  text-align: center;
  width: 30px;
  transition: 1s width;
}

.anchor:hover,
.anchor:focus {
  width: 50px;
}
```

Bewegen Sie den Mauszeiger über das Ankerelement oder verwenden Sie die Tabulatortaste – das positionierte Element wächst während das Ankerelement wächst und zeigt, dass die Größe des ankerpositionierten Elements relativ zur Größe seines Ankers ist:

{{ EmbedLiveSample("Größe von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margen-Eigenschaften verwenden. Die unten stehenden Abschnitte erkunden diese Verwendungsmöglichkeiten im Detail, bevor sie ein Anwendungsbeispiel bereitstellen.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Inset-Eigenschaftswerts verwenden, um Elemente anhand der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft tun (siehe [Positionieren von Elementen relativ zu ihrem Anker](#positionieren_von_elementen_relativ_zu_ihrem_anker) oben); das Element ändert seine Position nicht, wenn sich sein Anker bewegt. Stattdessen wird das Element entsprechend den normalen Regeln von [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu platzieren, auch wenn sich die Breite des Ankers ändert.

### Festlegen des Elementabstands basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementabstände basierend auf der Größe ihrer Ankerelemente festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie den Abstand eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankers festlegen möchten, auch wenn sich die Breite ändert.

### `anchor-size()`-Positions-, und Marginbeispiel

Sehen wir uns ein Beispiel an, bei dem wir den Abstand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements einstellen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, sodass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} so hoch zu machen, dass es das Scrollen erfordert, aber dieser Text wurde um der Kürze willen ausgeblendet.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar.
</p>
```

```html
<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>Infobox.</p>
</div>
```

```html hidden
<p>Vulputate ut pharetra sit amet aliquam.</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

In CSS deklarieren wir zuerst das `anchor`-<div> als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine Position über die {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen am Anker und in der Infobox und schließen eine {{cssxref("transition")}} am Anker ein, damit Breitenänderungen beim Zustandswechsel glatt animiert werden:

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #ddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
  width: 100px;
  height: 100px;
  transition: 1s all;
}

.infobox {
  position-anchor: --myAnchor;
  position: absolute;
  height: 100px;
  width: 100px;
}
```

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er geh

overed oder fokussiert ist. Wir setzen dann die:

- `top`-Wert auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Infobox immer in Höhe der Oberseite des Ankers bleibt.
- `left`-Wert auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Infobox in der angegebenen Entfernung vom linken Rand ihres nächstgelegenen positionierten Vorfahren positioniert wird. In diesem Fall entspricht die angegebene Entfernung der Breite des Ankerelements und der nächstgelegene positionierte Vorfahre ist das `<body>`-Element, also erscheint die Infobox rechts vom Anker.
- `margin-left`-Wert auf `calc(anchor-size(width)/4)`. Diese Einstellung bewirkt, dass die Infobox immer einen linken Abstand zu dem Anker hat, der einem Viertel der Breite des Ankers entspricht.

```css
.anchor:hover,
.anchor:focus {
  width: 300px;
}

.infobox {
  top: anchor(top);
  left: anchor-size(width);
  margin-left: calc(anchor-size(width) / 4);
}
```

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Grundlegende Verwendung von `anchor-size()`", "100%", "240")}}

Versuchen Sie, den Anker über die Tastatur anzuwählen oder mit dem Mauszeiger darüber zu fahren und beachten Sie, wie die Position der Infobox und der linke Abstand gleichmäßig zur Breite des Ankerelements wachsen.

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Learn: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Learn: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
