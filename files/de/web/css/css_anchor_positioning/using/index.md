---
title: Verwendung von CSS-Anker-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das **CSS-Anker-Positionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und dem Ort der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Die CSS-Anker-Positionierung bietet auch CSS-basierte Mechanismen zur Angabe mehrerer alternativer Positionen für ein ankerpositioniertes Element. Zum Beispiel, wenn ein Tooltip an ein Formularfeld verankert ist, aber der Tooltip ansonsten außerhalb des Bildschirms in seiner Standardpositionseinstellung gerendert würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er im Bild ist, oder ihn alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Anker-Positionierung und wie man die Assoziations-, Positions- und Größenfunktionen des Moduls auf einfachem Niveau verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten diskutierten Konzepte eingefügt. Informationen zur Angabe alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie unter [Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr häufig, dass man ein Element an ein anderes binden oder verknüpfen möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um weitere Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder einem Button erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte – oft wiederverwendbare und dynamisch generierte – relativ zu einem Ankerelement positioniert werden. Die Erstellung solcher Anwendungsfälle wäre relativ einfach, wenn das zu verankernde Element (auch als **Ankerelement** bezeichnet) immer am selben Ort in der Benutzeroberfläche wäre und das verankerte Element (auch als **ankerpositioniertes Element**, oder einfach nur **positioniertes Element** bezeichnet) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Jedoch sind die Dinge selten so einfach.

Der Standort von positionierten Elementen relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig verändert (z.B. durch Scrollen, Änderung der Viewport-Größe, Drag & Drop, etc.). Zum Beispiel, wenn ein Element wie ein Formularfeld nahe an den Rand des Viewports gelangt, kann sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularelement binden und sicherstellen, dass der Tooltip auf dem Bildschirm sichtbar bleibt, solange das Formularfeld sichtbar ist, und ihn automatisch verschieben, wenn nötig. Möglicherweise haben Sie dies als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop per Rechtsklick (<kbd>Ctrl</kbd> + Klick) anzeigen.

Historisch gesehen erforderte die Assoziation eines Elements mit einem anderen Element und die dynamische Änderung des Standorts und der Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die in [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zunächst deklarieren, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) mit diesem Anker assoziiert werden sollen. Dies schafft eine Anker-Referenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Anker-Assoziation

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft darauf setzen. Der Ankername muss einen {{cssxref("dashed-ident")}} enthalten. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankerefekt besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element zu verwandeln, sind zwei Schritte erforderlich: Es muss mittels der {{cssxref("position")}} Eigenschaft absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden. Das positionierte Element hat dann seine {{cssxref("position-anchor")}} Eigenschaft so gesetzt, dass sie dem Wert der `anchor-name` Eigenschaft des Ankerelements entspricht, um die beiden zu verbinden:

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

Wir werden das oben genannte CSS auf das folgende HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("CSS-only method", "100%", "120")}}

Der Anker und Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht aneinander gebunden – wenn Sie den Anker positionieren und ihn woanders auf der Seite bewegen würden, würde er sich allein bewegen und die Infobox an derselben Stelle lassen. Sie werden das tatsächliche Verankern in Aktion sehen, wenn wir uns um [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) kümmern.

### Implizite Anker-Assoziation

In einigen Fällen wird eine implizite Anker-Referenz zwischen zwei Elementen hergestellt, aufgrund der semantischen Natur ihrer Beziehung. Zum Beispiel, wenn die [Popover API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einer Steuerung zu verbinden, wird eine implizite Anker-Referenz zwischen den beiden hergestellt. Dies kann vorkommen, wenn:

- Ein Popover deklarativ mit einer Steuerung unter Verwendung der Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) verbunden wird.
- Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmgesteuert mit einer Steuerung verbunden wird, indem die `source` Option verwendet wird.
- Ein {{htmlelement("select")}} Element und sein Dropdown-Auswahler in die Funktionalität des [anpassbaren Auswahlfelds](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den Wert `base-select` der {{cssxref("appearance")}} Eigenschaft eingeschaltet werden. In diesem Fall wird eine implizite Popover-Aufrufer-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie einer impliziten Anker-Referenz haben werden.

> [!NOTE]
> Die oben genannten Methoden verbinden einen Anker mit einem Element, aber sie sind noch nicht verankert. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert sein, was mit CSS geschieht.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Assoziation eines positionierten Elements mit einem Anker alleine nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies wird entweder durch Setzen eines [CSS `anchor()` Functions](#using_inset_properties_with_anchor_function_values) Wertes auf eine {{Glossary("Inset_properties", "inset property")}}, [Angabe eines `position-area`](#setting_a_position-area), oder Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir diskutieren, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, in [Bedingtes Ausblenden unter Verwendung von `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Einfügeeigenschaften mit `anchor()` Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "inset properties")}} gesetzt werden. Bei `position: absolute` ist dieser Einfügepositionswert ein absoluter Abstand zu den Kanten des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Einfügepositionswert ein absoluter Abstand zum Viewport.

CSS-Anker-Positionierung verändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer assoziierten Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die einen gültigen Wert für jede der Einfügeeigenschaften darstellt. Bei Verwendung legt die Funktion den Einfügepositionswert als absoluten Abstand zum Ankerelement fest, indem das Ankerelement, die Seite des Ankerelements, relativ zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert wird.

Die Funktionskomponenten sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft des Ankerelements, zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft verwiesen wird oder der über das nicht-standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()` Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und Ende (`100%`) der Achse der Einfügeeigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfügeeigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Eine {{cssxref("length-percentage")}}, die den Abstand angibt, der als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>` Wert nicht mit der Einfügeeigenschaft kompatibel ist, auf der die `anchor()` Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()` Funktion ist ein Längenwert, der auf der Position des Ankers basiert. Wenn Sie direkt einen Länge- oder Prozentwert auf der Einfügeeigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das auftritt, wenn der `<anchor-side>` Wert inkompatibel mit der Einfügeeigenschaft ist, auf der er gesetzt ist und der Fallback-Wert verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des am nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des ursprünglichen enthaltenden Blocks.

Die am häufigsten verwendeten `anchor()` Parameter werden sich auf eine Seite des Standardankers beziehen. Sie werden häufig entweder {{cssxref("margin")}} hinzufügen, um Platz zwischen der Kante des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()` Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel, diese Regel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements, dann wird etwas `margin-left` hinzugefügt, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()` Funktion ist eine Länge. Das bedeutet, Sie können ihn innerhalb einer {{cssxref("calc()")}} Funktion verwenden. Diese Regel positioniert das logische Ende des positionierten Elements `10px` von der logischen Startkante des Ankerelements entfernt, wobei der Abstand mit der `calc()` Funktion hinzugefügt wird, sodass wir keine Marge hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel für `anchor()` in der Praxis an. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, aber mit einigem Fülltext, der unterhalb und oberhalb platziert ist, um den Inhalt seinen Container überlaufen und Scrollen erzwingen zu lassen. Wir geben dem Ankerelement den gleichen `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker assoziiert und hat eine feste Positionierung. Durch Hinzufügen von {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die gleichwertig zu {{cssxref("top")}} und {{cssxref("left")}} in horizontalen von-links-nach-rechts Schreibmodi sind) haben wir sie an den Anker gebunden. Wir fügen der Infobox eine `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Lassen Sie uns die Einfügepositionsdeklarationen im Detail ansehen:

- `inset-block-start: anchor(end)`: Dies setzt die Block-Startkante des positionierten Elements auf die Block-Endkante des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("`anchor()` Beispiel", "100%", "250")}}

Das positionierte Element ist `5px` unterhalb und `5px` rechts des Ankerelements. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement – es ist fest mit dem Ankerelement verbunden und nicht mit dem Viewport.

### `position-area` setzen

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area` Eigenschaft arbeitet mit dem Konzept eines 3x3 Gitters, wobei das Ankerelement die Mitte des Gitters ist. Die `position-area` Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einem der neun Kacheln zu positionieren oder über zwei oder drei Kacheln zu spannen.

![Das Positionierungsbereichs-Gitter, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end`, und Koordinatenentsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end`, und Koordinatenentsprechungen wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden vom [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Gitters vom enthältenden Block des positionierten Elements definiert wird.

`position-area` Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Spannungsoptionen, um die Region des Gitters zu definieren, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem spezifischen Gitterquadrat zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in welcher das positionierte Element platziert wird, platziert es zunächst in der Mitte, und der andere sagt an, wie viel von dieser Spalte oder Reihe es überschreiten soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der obersten Reihe platziert wird und über die mittleren und linken Kacheln dieser Reihe gespannt wird.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und über die mittleren und x-End-Kacheln dieser Spalte gespannt wird.
- `block-end span-all` bewirkt, dass das positionierte Element in der Endreihe des Blocks platziert wird und über die Kacheln Inline-Start, Center und Inline-End der Reihe gespannt wird.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich, je nachdem, welcher Wert gesetzt wird:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` ist. Zum Beispiel gibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physischen Wert wird die Deklaration ungültig machen.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und die gleichen Basis-CSS-Stile wie im vorherigen Beispiel, außer dass wir ein {{htmlelement("select")}} Element eingefügt haben, um den Wert `position-area` des positionierten Elements zu ändern.

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

Die Infobox wird mit fester Position versehen und per CSS mit dem Anker assoziiert. Wenn geladen, wird sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden wird, was bewirkt, dass sie oben im `position-area` Gitter positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>` Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area` Werte auszuwählen, die aus dem `<select>` Menü für die Infobox ausgewählt werden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü zu wählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{EmbedLiveSample("Einstellung einer `position-area`", "100%", "250")}}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Größe des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben die Größenangabe absichtlich weggelassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element in `position-area` Gitterzellen ohne explizite Größenangabe platziert wird, richtet es sich am angegebenen Bereich des Gitters aus und verhält sich so, als ob die {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird gemäß seiner Größe des [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch die Einstellung `position: fixed` erzwungen. Auto-größen angepasste absolut und fest positionierte Elemente werden automatisch nach außen hin gedehnt, um den Textinhalt zu umschließen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Gitters mit einem `left` oder `inline-start` Wert platziert werden, wickelt sich der Text. Wenn die `max-content` Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um die Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, wird es mit der spezifizierten Gitterzelle ausgerichtet, und die Breite wird dieselbe wie die des Ankerelements sein. In diesem Fall ist seine Mindesthöhe die Blockgröße des enthaltenden Blocks des Ankerelements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass sie mindestens so breit ist wie ihr längstes Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center` Werten von `position-area` zentrieren können, bieten Einfügeeigenschaften kombiniert mit der `anchor()` Funktion mehr Kontrolle über die genaue Position. CSS-Anker-Positionierung bietet einen Weg, um ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Einfügeeigenschaften, anstelle von `position-area`, verwendet werden, um es zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, damit Entwickler leicht Elemente in der Inline- oder Blockrichtung in verschiedenen Layoutsystemen ausrichten können, zum Beispiel entlang der Haupt- oder Seitenachse im Fall von Flexkindern. Die CSS-Anker-Positionierung stellt einen zusätzlichen Wert für diese Eigenschaften bereit, `anchor-center`, der ein positioniertes Element relativ zum Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und die gleichen Basis-CSS wie das vorherige Beispiel. Die Infobox wird mit fester Position versehen und an der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf dem Zentrum des Ankers zentriert ist:

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

Dies zentriert das ankerpositionierte Element am unteren Rand seines Ankers:

{{EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250")}}

## Dimensionierung von Elementen basierend auf Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers kann auch die Größe eines Elements relativ zur Größe seines Ankers festgelegt werden, indem man die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Größenattributwerts verwendet.

Größeneigenschaften, die einen `anchor-size()` Wert akzeptieren können, beinhalten:

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

`anchor-size()` Funktionen lösen sich in {{cssxref("length")}} Werte auf. Ihr Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft des Ankerelements festgelegt ist, relativ zu dem Sie das Element dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, auf den in der [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft verwiesen wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu welchem das positionierte Element dimensioniert wird. Dies kann durch physische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline` oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()` Funktionen werden sich einfach auf eine Dimension des Standardankers beziehen. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die Größe, die dem positionierten Element angewendet wird, zu modifizieren.

Zum Beispiel, diese Regel dimensioniert die Breite des positionierten Elements gleich der Breite des Ankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()` Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut bekommt, um es fokussierbar zu machen. Die Infobox wird mit fester Position versehen und in der gleichen Weise wie zuvor mit dem Anker assoziiert. Aber diesmal verankern wir sie rechts vom Anker mit einer `position-area` und geben ihr eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm einen {{cssxref("transition")}}, damit es animiert, wenn sich der Zustand ändert.

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

Bewegen Sie den Mauszeiger auf das Ankerelement oder navigieren Sie mit der Tabulatortaste – das positionierte Element wächst mit, wenn der Anker wächst, und zeigt an, dass die Größe des ankerpositionierten Elements relativ zur Größe seines Ankers ist:

{{EmbedLiveSample("Dimensionierung von Elementen basierend auf Ankergröße", "100%", "250")}}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einfüge- und Randeigenschaften verwenden. Die Abschnitte unten erkunden diese Verwendungen ausführlicher, bevor ein Verwendung Beispiel bereitgestellt wird.

### Einstellung der Elementposition basierend auf Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines {{Glossary("Inset_properties", "inset property")}} Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, beispielsweise:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion oder die {{cssxref("position-area")}} Eigenschaft es tut (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sein Anker dies tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement sich nur vertikal bewegen kann und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnte man `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer links vom Anker zu positionieren, selbst wenn sich die Breite des Ankers ändert.

### Einstellung des Elementrandes basierend auf Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftswerts verwenden, um Elementränder basierend auf der Größe ihres Ankerelements festzulegen, beispielsweise:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie den Rand eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements festlegen möchten, selbst wenn sich die Breite ändert.

### Beispiel für `anchor-size()` Position und Rand

Schauen wir uns ein Beispiel an, in dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, ein `anchor` Element und ein `infobox` Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, damit es per Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, damit das {{htmlelement("body")}} groß genug ist, um Scrollen zu erfordern, aber dies wurde der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zunächst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und wird mit dem Ankerelement über seine {{cssxref("position-anchor")}} Eigenschaft assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker und der Infobox und fügen eine {{cssxref("transition")}} auf dem Anker hinzu, damit Breitenänderungen reibungslos animiert werden, wenn sich der Zustand ändert:

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

Jetzt zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er geh

overed oder fokussiert wird. Wir setzen dann die folgenden CSS-Eigenschaften für die Infobox:

- `top` Wert auf `anchor(top)`. Damit bleibt der obere Rand der Infobox immer mit dem oberen Rand des Ankers ausgerichtet.
- `left` Wert auf `anchor-size(width)`. Dadurch wird der linke Rand der Infobox in der angegebenen Entfernung von der linken Kante seines nächsten positionierten Vorfahren positioniert. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements, und der nächste positionierte Vorfahre ist das `<body>` Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dadurch hat die Infobox immer einen linken Rand, der sie und den Anker trennt, gleich einem Viertel der Breite des Ankers.

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

Das gerenderte Ergebnis ist wie folgt:

{{EmbedLiveSample("Grundlegende Nutzung von `anchor-size()`", "100%", "240")}}

Versuchen Sie, zum Anker zu gelangen oder ihn mit dem Mauszeiger zu überfahren, und beachten Sie, wie die Position und der linke Rand der Infobox proportional zur Breite des Ankerelements wachsen.

## Siehe auch

- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
