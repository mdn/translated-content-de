---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, mit denen Sie Elemente miteinander verknüpfen können. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, eingestellt werden.

CSS-Ankerpositionierung bietet auch rein CSS-basierte Mechanismen zur Angabe mehrerer alternativer Positionen für ein ankerpositioniertes Element. Zum Beispiel, wenn ein Tooltip an ein Formularfeld verankert ist, der Tooltip jedoch sonst außerhalb des Bildschirms im Standardpositionsmodus angezeigt würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, damit er auf dem Bildschirm platziert wird, oder alternativ, ihn ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie man die Verbund-, Positionierungs- und Größenanpassungsfunktionen des Moduls auf einer grundlegenden Ebene verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten behandelten Konzepte beigefügt. Für Informationen zur Spezifizierung alternativer Positionen und zum Ausblenden ankerpositionierter Elemente siehe den [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr häufig, dass man ein Element an ein anderes anbinden oder verknüpfen möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um weitere Informationen bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle zu erstellen, wäre recht einfach, wenn das zu verankernde Element (auch bekannt als **Ankerelement**) immer am selben Ort in der UI war und das verankerte Element (auch bekannt als **ankerpositioniertes Element** oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder auf andere Weise seine Konfiguration ändert (z. B. durch Scrollen, Ändern der Fenstergröße des Viewports, Drag-and-Drop usw.). Zum Beispiel, wenn ein Element wie ein Formularfeld dem Rand des Viewports nahekommt, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularelement binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Dies haben Sie vielleicht als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie mit der rechten Maustaste (<kbd>Strg</kbd> + Klick) Kontextmenüs auf Ihrem Desktop oder Laptop anklicken.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle effizient und deklarativ mit CSS (und HTML) statt mit JavaScript.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst festlegen, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) Sie mit diesem Anker verknüpfen möchten. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Verknüpfung kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerverknüpfung

Um ein Element mithilfe von CSS als Anker zu deklarieren, müssen Sie einen Ankernamen mit der {{cssxref("anchor-name")}}-Eigenschaft darauf setzen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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
  anchor-name: --my-anchor;
  width: fit-content;
}
```

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, wobei die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden zu verknüpfen:

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
  position-anchor: --my-anchor;
}
```

Wir wenden das obige CSS auf das folgende HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt verknüpft, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verankert – wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich allein bewegen und die Infobox an derselben Stelle bleiben. Sie werden die tatsächliche Verankerung in Aktion sehen, wenn wir uns [die Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerverknüpfung

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen hergestellt. Zum Beispiel, wenn Sie die [Popover-API](/de/docs/Web/API/Popover_API) verwenden, um ein Popover mit einer Steuerung zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann geschehen, wenn:

- Ein Popover deklarativ mit einer Steuerung unter Verwendung der Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) verknüpft wird.
- Ein Popover-Verhalten wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmgesteuert mit einer Steuerung unter Verwendung der `source`-Option verknüpft wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker durch die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` in die Funktionalität [anpassbarer Auswahlmöglichkeiten](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) integriert werden. In diesem Fall wird eine implizite Popover-Auslöser-Beziehung zwischen den beiden hergestellt, die auch bedeutet, dass sie eine implizite Ankerreferenz haben werden.

> [!NOTE]
> Die obigen Methoden verknüpfen einen Anker mit einem Element, jedoch sind sie noch nicht verankert. Um sie miteinander zu verankern, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erledigt wird.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Verknüpfen eines positionierten Elements mit einem Anker alleine nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem verbundenen Ankerelement zu platzieren. Dies wird entweder durch Setzen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values)-Werts auf eine {{Glossary("Inset_properties", "Einsetz-Eigenschaft")}}, [Festlegen eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center`-Wert](#centering_on_the_anchor_using_anchor-center) erreicht.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, im [Konditionelles Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Einsetz-Eigenschaften mit `anchor()`-Funktion

Konventionelle absolut und fest positionierte Elemente werden durch das Setzen von {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werten auf {{Glossary("inset_properties", "Einsetz-Eigenschaften")}} explizit positioniert. Mit `position: absolute` ist dieser Einsetz-Positionswert ein absoluter Abstand relativ zu den Rändern des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Einsetz-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Rändern ihrer verbundenen Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Einsetz-Eigenschaften ist. Wenn die Funktion verwendet wird, setzt sie den Einsetz-Positionswert als absoluten Abstand relativ zum Ankerelement, indem sie das Ankerelement, die Seite des Ankerelements, auf die sich das positionierte Element bezieht, und den Abstand von dieser Seite definiert.

Die Funktionenkomponenten sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaftswert des Ankerelements, auf das Sie die Seite des Elements relativ zu positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut mit dem Element verknüpft ist.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementverknüpfung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, usw.) oder logische (`start`, `self-end`, usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Einsetz-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einsetz-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Eine {{cssxref("length-percentage")}}, die die Entfernung angibt, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Einsetz-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder Prozentsatz direkt auf der Einsetz-Eigenschaft eines ankerpositionierten Elements setzen, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist dasselbe Verhalten, das zu beobachten ist, wenn der `<anchor-side>`-Wert inkompatibel mit der Einsetz-Eigenschaft ist, auf der er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` oberhalb des Bodens des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des ursprünglichen Umgrenzungsblocks platzieren.

Die häufigsten `anchor()`-Parameter, die Sie verwenden, beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig entweder eine {{cssxref("margin")}} hinzufügen, um Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig an die linke Kante des Ankerelements, fügt dann etwas `margin-left` hinzu, um etwas Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockstartkante des Ankerelements entfernt und fügt den Abstand mit der `calc()`-Funktion hinzu, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Lassen Sie uns ein Beispiel für `anchor()` in Aktion betrachten. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, jedoch mit etwas Fülltext darunter und darüber, um den Inhalt über seinen Container hinaus zu überlaufen und zu scrollen. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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
  anchor-name: --my-anchor;
}
```

Die Infobox ist über den Ankernamen mit dem Anker verknüpft und erhält eine feste Positionierung. Durch die Angabe der {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibmodi gleichwertig zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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
  position-anchor: --my-anchor;
  position: fixed;
  inset-block-start: anchor(end);
  inset-inline-start: anchor(self-end);
  margin: 5px 0 0 5px;
}
```

Schauen wir uns die Einsetz-Positionsdeklarationen der Eigenschaften im Detail an:

- `inset-block-start: anchor(end)`: Dies setzt die Blockstartkante des positionierten Elements auf die Blockendkante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts des Ankerelements. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei – es ist am Ankerelement fixiert, nicht am Viewport.

### Festlegen einer `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft basiert auf dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu erstrecken.

![Das position-area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [Umgrenzungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Umgrenzungsblock des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Streckungsoptionen, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einer bestimmten Rasterzelle zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oben linken Zelle.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der mittleren unteren Zelle.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll und zuerst in der Mitte platziert wird, und der andere gibt die zu erstreckende Spaltenmenge an. Zum Beispiel:

- `top span-left` lässt das positionierte Element in der oberen Reihe platzieren und über die mittleren und linken Kacheln dieser Reihe erstrecken.
- `y-end span-x-end` lässt das positionierte Element im Ende der y-Spalte platzieren und über die mittleren und x-end-Kacheln dieser Spalte erstrecken.
- `block-end span-all` lässt das positionierte Element in der Blockendreihe platzieren und über die inline-start, mitten- und inline-end-Kacheln dieser Reihe erstrecken.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert eingestellt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` ist. Zum Beispiel ergibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt ist; beispielsweise ergibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wertreferenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und die Basis-CSS wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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
  anchor-name: --my-anchor;
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

Die Infobox erhält eine feste Positionierung und wird über CSS mit dem Anker verknüpft. Beim Laden wird sie an den Anker mit `position-area: top;` angeheftet, wodurch sie oben im `position-area`-Raster positioniert wird. Dies wird überschrieben, sobald Sie unterschiedliche Werte aus dem `<select>`-Menü auswählen.

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
  position-anchor: --my-anchor;
  position-area: top;
}
```

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte, die aus dem `<select>`-Menü ausgewählt wurden, auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Festlegen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir in keiner Dimension explizit die Größe des positionierten Elements festgelegt. Wir haben absichtlich auf die Größenangabe verzichtet, damit Sie das daraus resultierende Verhalten beobachten können.

Wenn ein positioniertes Element ohne explizite Größenangaben in `position-area`-Rasterzellen platziert wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich so, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird basierend auf seiner [Umgrenzungsblock](/de/docs/Web/CSS/CSS_display/Containing_block)-Größe dimensioniert, welche die Breite seines Inhalts ist. Diese Größe wurde durch die Einstellung `position: fixed` erzwungen. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert, sodass sie sich über die notwendige Breite erstrecken, um den Textinhalt aufzunehmen, während sie durch den Rand des Viewports begrenzt sind. In diesem Fall, wenn das Element auf der linken Seite des Rasters mit einem `left` oder `inline-start`-Wert platziert wird, bricht der Text um. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um die Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal zentriert ist, wie mit `position-area: bottom center`, wird es mit der angegebenen Rasterzelle ausgerichtet und die Breite wird die gleiche wie die des Ankerelements sein. In diesem Fall beträgt seine minimale Höhe die Größe des Umgrenzungsblocks des Ankerelements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort ist.

## Zentrieren auf dem Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit `position-area`-`center`-Werten zentrieren können, bieten Einsetz-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Einsetz-Eigenschaften, statt `position-area`, verwendet werden, um es zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (sowie ihre Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, damit Entwickler Elemente innerhalb des Layout-Systems einfach im Inline- oder Blockrichtung ausrichten können, beispielsweise entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element auf das Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an die Unterkante des Ankers geheftet. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf das Zentrum des Ankers zentriert ist:

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
  anchor-name: --my-anchor;
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
  position-anchor: --my-anchor;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
}
```

Dies zentriert das ankerpositionierte Element am Boden seines Ankers:

{{ EmbedLiveSample("Zentrieren auf dem Anker mit `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf Ankergröße

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mit der [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größen-Eigenschaftswerts anpassen.

Größeneigenschaften, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

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
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements festgelegt ist, auf den Sie das Element relativ dimensionieren möchten. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet, was der Anker ist, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann durch physische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline` oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu ändern.

Beispielsweise wird mit dieser Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements gesetzt:

```css
.elem {
  width: anchor-size(width);
}
```

Mit dieser Regel wird die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements gesetzt, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzugefügt wird, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird auf die gleiche Weise mit dem Anker verknüpft wie zuvor. Diesmal befestigen wir sie jedoch rechts vom Anker durch eine `position-area` und geben ihr eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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
  anchor-name: --my-anchor;
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
  position-anchor: --my-anchor;
  position-area: right;
  margin-left: 5px;
  width: calc(anchor-size(width) * 5);
}
```

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, sodass es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder tabben Sie zu ihm – das positionierte Element wächst, während der Anker wächst, was zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Elemente basierend auf Ankergröße dimensionieren", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einsetz- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte behandeln diese Verwendungen im Detail, bevor sie ein Anwendungsbeispiel bereitstellen.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Einsetz-Eigenschaften")}}-Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn es sein Anker tut. Stattdessen wird das Element entsprechend den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute)- oder [`fixed`](/de/docs/Web/CSS/position#fixed)-Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement sich nur vertikal bewegen kann und immer in der Nähe des Rands seines nächstgelegenen positionierten Vorfahren bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts neben seinem Anker zu positionieren, selbst wenn sich die Breite des Ankers ändert.

### Festlegen der Elementmarge basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementmargen basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie die Marge eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements festlegen möchten, selbst wenn sich die Breite ändert.

### `anchor-size()`-Position und Margin-Beispiel

Schauen wir uns ein Beispiel an, bei dem wir die Marge und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren. Wir versehen das Ankerelement mit einem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um ein Scrollen zu erfordern, aber dieser wurde zur Übersichtlichkeit ausgeblendet.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf den Anker und die Infobox und fügen einen {{cssxref("transition")}} auf den Anker hinzu, sodass Breitenänderungen sanft animiert werden, wenn sich der Zustand ändert:

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
  anchor-name: --my-anchor;
  width: 100px;
  height: 100px;
  transition: 1s all;
}

.infobox {
  position-anchor: --my-anchor;
  position: absolute;
  height: 100px;
  width: 100px;
}
```

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er überfahren oder fokussiert wird. Dann setzen wir die folgenden Eigenschaften der Infobox:

- Der `top`-Wert wird auf `anchor(top)` gesetzt. Dadurch bleibt die Oberseite der Infobox immer in Linie mit der Oberkante des Ankers.
- Der `left`-Wert wird auf `anchor-size(width)` gesetzt. Dieses bewirkt, dass die Linke der Infobox die angegebene Entfernung vom linken Rand ihres nächstgelegenen positionierten Vorfahren entfernt wird. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts neben dem Anker erscheint.
- Der `margin-left`-Wert wird auf `calc(anchor-size(width)/4)` gesetzt. Dies bewirkt, dass die Infobox immer eine linke Marge hat, die sie und den Anker trennt, gleich einem Viertel der Breite des Ankers.

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

{{EmbedLiveSample("Grundlegende `anchor-size()`-Verwendung", "100%", "240")}}

Versuchen Sie, den Anker zu fokussieren oder darüber zu fahren, und beachten Sie, wie sich die Position und der linke Rand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
