---
title: Verwenden der CSS-Anchor-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **CSS-Anchor-Positionierung**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Anchor-Elemente** und **anchor-positionierte Elemente** definiert werden. Anchor-positionierte Elemente können an Anchor-Elemente gebunden werden. Die Größe und Position der anchor-positionierten Elemente können dann relativ zur Größe und Position der Anker-Elemente, an die sie gebunden sind, festgelegt werden.

Die CSS-Anchor-Positionierung bietet auch Mechanismen, um mehrere alternative Positionen für ein anchor-positioniertes Element ausschließlich mit CSS zu spezifizieren. Wenn beispielsweise ein Tooltip an ein Formularfeld verankert ist, der Tooltip jedoch in seiner Standardpositionierung außerhalb des Bildschirms angezeigt würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position anzuzeigen, sodass er auf dem Bildschirm platziert wird, oder ihn gegebenenfalls ganz verbergen.

Dieser Artikel erklärt die grundlegenden Konzepte der Anchor-Positionierung und wie man die Assoziierungs-, Positionierungs- und Größenänderungsfunktionen des Moduls auf einer grundlegenden Ebene verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten diskutierten Konzepte hinzugefügt. Informationen zur Spezifizierung alternativer Positionen und zum Verbergen von anchor-positionierten Elementen finden Sie unter [Überlaufbehandlung: Fallbacks und bedingtes Verbergen versuchen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes zu binden oder zu verankern. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen angezeigt werden.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um weitere Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder einem Button erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Anchor-Element positioniert werden. Solche Anwendungsfälle wären relativ einfach zu gestalten, wenn das zu verankernde Element (also das **Anchor-Element**) immer an derselben Stelle in der UI wäre und das verankerte Element (auch bekannt als **anchor-positioniertes Element** oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Anker-Element muss beibehalten und angepasst werden, wenn sich das Anker-Element bewegt oder anderweitig konfiguriert wird (z. B. durch Scrollen, Ändern der Ansichtsfenstergröße, Drag & Drop usw.). Wenn beispielsweise ein Element wie ein Formularfeld in die Nähe des Ansichtsfensterrandes gelangt, könnte sein Tooltip schließlich außerhalb des Bildschirms landen. Im Allgemeinen möchten Sie den Tooltip an sein Formularsteuerelement binden und sicherstellen, dass der Tooltip so lange vollständig auf dem Bildschirm sichtbar bleibt wie das Formularfeld sichtbar ist, ihn bei Bedarf automatisch bewegend. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit der rechten Maustaste (<kbd>Strg</kbd> + Klick) aufrufen.

Historisch gesehen erforderte die Verbindung eines Elements mit einem anderen und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war außerdem nicht garantiert, dass es in allen Situationen funktioniert. Die Features, die im [CSS Anchor Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul definiert sind, ermöglichen die Implementierung solcher Anwendungsfälle effizient und deklarativ mit CSS (und HTML) statt JavaScript.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zunächst angeben, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) mit diesem Anker verknüpft werden sollen. Dies kann über CSS oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) erfolgen.

### CSS-Only-Methode

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie ihm einen Ankernamen über die Eigenschaft {{cssxref("anchor-name")}} zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Ein Element in ein anchor-positioniertes Element umzuwandeln, erfordert zwei Schritte: Es muss mithilfe der Eigenschaft {{cssxref("position")}} absolut oder fix [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden. Das positionierte Element hat dann seine Eigenschaft {{cssxref("position-anchor")}} auf den Wert der `anchor-name`-Eigenschaft des Anker-Elements gesetzt, um die beiden miteinander zu verknüpfen:

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

Wir werden das obige CSS auf das folgende HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-Only-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt verknüpft, aber für den Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verbunden – wenn Sie den Anker positionieren und ihn woanders auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden die tatsächliche Verbindung in Aktion sehen, wenn wir uns ansehen, [wie man Elemente basierend auf der Ankerposition positioniert](#positionierung_von_elementen_relativ_zu_ihrem_anker).

### HTML-Methode

Um ein positioniertes Element mit einem Anker in HTML zu verknüpfen, können Sie das Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) verwenden. Sie müssen dem Anker-Element eine [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Das `anchor`-Attribut wird dann am anchor-positionierten Element gesetzt, mit einem Wert, der der `id` des Anker-Elements entspricht, mit dem Sie es verknüpfen möchten.

Wir haben dies im HTML unten getan:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

Elemente müssen absolut oder fix positioniert sein, um mit Ankern verknüpft zu werden, daher geben wir der Infobox einen `position`-Wert von `fixed`:

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
}
```

Dies ergibt dasselbe Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein positioniertes Element mit einem Anker-Element durch das `anchor`-Attribut am positionierten Element verknüpft, anstatt die `anchor-name`-Eigenschaft des Anker-Elements und die `position-anchor`-Eigenschaft des positionierten Elements zu benutzen.

{{ EmbedLiveSample("HTML-Methode", "100%", "120") }}

> [!NOTE]
> Das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut hat derzeit weniger Unterstützung als das CSS-Äquivalent. Siehe die [`anchor`-Attribut-Kompatibilitäts-Tabelle](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility) für mehr Informationen.

Wir haben die beiden Elemente verknüpft, aber sie sind noch nicht verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Verknüpfen eines positionierten Elements mit einem Anker allein nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem verbundenen Anker-Element zu platzieren. Dies geschieht entweder durch Einstellen eines Werts der [CSS `anchor()` Funktion](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "inset property")}}, [Angabe eines `position-area`](#setting_a_position-area) oder das Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Anker-Element muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktioniert. Wenn es versteckt ist (z.B. durch [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir erörtern, wie man ein anchor-positioniertes Element ausblendet, wenn sein Anker verschwindet, in [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von inset-Eigenschaften mit `anchor()` Funktionswerten

Konventionelle absolut und fix positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "inset-Eigenschaften")}} gesetzt werden. Mit `position: absolute` ist dieser inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächsten positionierten Vorfahren. Mit `position: fixed` ist der inset-Positionswert ein absoluter Abstand relativ zum Ansichtsfenster.

Die CSS-Anchor-Positionierung verändert dieses Paradigma, indem anchor-positionierte Elemente relativ zu den Rändern ihrer verknüpften Anker positioniert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die ein gültiger Wert für jede der inset-Eigenschaften ist. Wenn sie verwendet wird, setzt die Funktion den inset-Positionswert als einen absoluten Abstand relativ zum Anker-Element, indem das Anker-Element, die Seite des Anker-Elements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Komponenten der Funktion sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Anker-Elements, zu dem Sie die Seite des Elementes relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft verwiesen wird oder der über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut dem Element zugeordnet wird.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet aber keine Elementverknüpfung. Nur die `position-anchor`-Eigenschaft und `anchor`-Attribute schaffen die Verknüpfung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen auf demselben Element spezifizieren, wird das positionierte Element nur mit einem einzigen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder den Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und Ende (`100%`) der Achse der inset-Eigenschaft, auf die `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, der die Entfernung als Fallback-Wert bietet, wenn das Element nicht absolut oder fix positioniert ist, der verwendete `<anchor-side>`-Wert nicht kompatibel mit der inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder das Anker-Element nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder Prozentsatz direkt auf einer inset-Eigenschaft eines anchor-positionierten Elements setzen, wird es positioniert, als ob es nicht mit dem Anker-Element verbunden wäre. Dies ist dasselbe Verhalten, das auftritt, wenn der `<anchor-side>`-Wert mit der inset-Eigenschaft, auf der er gesetzt ist, unvereinbar ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Enthaltenen Blocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig entweder einen {{cssxref("margin")}} hinzufügen, um Abstand zwischen dem Rand des Anker- und des positionierten Elements zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel den rechten Rand des positionierten Elements bündig mit dem linken Rand des Anker-Elements und fügt dann etwas `margin-left` hinzu, um etwas Abstand zwischen den Rändern zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Dies bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert den logischen Block-Ende-Rand des positionierten Elements `10px` vom logischen Block-Start-Rand des Anker-Elements entfernt und fügt das Abstandsmaß über die `calc()`-Funktion hinzu, sodass wir keine zusätzliche Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel von `anchor()` in Aktion an. Wir haben denselben HTML-Code wie in den vorhergehenden Beispielen verwendet, jedoch mit etwas Fülltext, der darunter und darüber platziert wurde, um das Überlaufen des Inhalts seines Containers zu verursachen und zu scrollen. Wir geben dem Anker-Element denselben `anchor-name` wie in den vorhergehenden Beispielen:

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

Die Infobox ist mit dem Anker über den Ankernamen verknüpft und fix positioniert. Durch das Hinzufügen der Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} (die äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} im horizontalen Links-nach-Rechts-Schreibmodus sind) haben wir sie mit dem Anker verbunden. Wir fügen der Infobox einen `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker hinzuzufügen:

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

Nun sehen wir uns die Deklarationen zur Positionierung der Inset-Eigenschaft genauer an:

- `inset-block-start: anchor(end)`: Dies setzt den Blockstart-Rand des positionierten Elements an den Blockende-Rand des Ankers, berechnet mithilfe der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Inline-Start-Rand des positionierten Elements an den Inline-Ende-Rand des Ankers, berechnet mithilfe der `anchor(self-end)`-Funktion.

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Anker-Element. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Anker-Element in seiner Position erhalten – es ist am Anker-Element, nicht am Ansichtsfenster, fixiert.

### Ein `position-area` festlegen

Die Eigenschaft {{cssxref("position-area")}} bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft arbeitet nach dem Konzept eines 3x3 Rasters von Kacheln, wobei das Anker-Element die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das anchor-positionierte Element in eine der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln hinweg zu spannen.

![Das Positionierungsfeld-Raster, wie unten beschrieben](position-area.png)

Die Raster-Kacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` und koordinatenbasierte Äquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` und koordinatenbasierte Äquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [Enthaltenen Block](/de/docs/Web/CSS/Containing_block) des Anker-Elements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters vom enthaltenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit verschiedenen Optionen zum Spannen, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Zum Beispiel:

- `top left` (logischer Äquivalent `start start`) platziert das positionierte Element im oberen linken Feld.
- `bottom center` (logischer Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Feld.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt an, in welcher Zeile oder Spalte das positionierte Element platziert werden soll, wobei es zunächst in der Mitte positioniert wird, und der andere gibt an, auf wie viele dieser Spalte es sich erstrecken soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in die obere Reihe platziert wird und sich über die mittlere und linke Kachel dieser Reihe erstreckt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und sich über die mittleren und x-end-Platten dieser Spalte erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in die block-End-Reihe platziert wird und sich über die inline-start, center und inline-end-Platten dieser Reihe erstreckt.

Wenn Sie nur einen Wert angeben, hängt der Effekt davon ab, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` wäre. Zum Beispiel gibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf den gleichen Wert gesetzt wäre; zum Beispiel gibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt wären (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert führt zu einer ungültigen Deklaration.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet den gleichen HTML- und Basis-CSS-Stil wie das vorherige Beispiel, jedoch haben wir ein {{htmlelement("select")}}-Element hinzugefügt, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox wird fix positioniert und mit dem Anker über CSS verknüpft. Wenn geladen, ist sie so eingestellt, dass sie mit dem Anker mit `position-area: top;` verbunden ist, was dazu führt, dass sie am oberen Rand des position-area Rasters positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Wir schließen auch ein kurzes Skript ein, um neue `position-area`-Werte, die aus dem `<select>`-Menü ausgewählt werden, auf die Infobox anzuwenden:

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

{{ EmbedLiveSample("Einstellen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben absichtlich auf Größenangaben verzichtet, damit Sie das Verhalten beobachten können, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangaben in position-area Rasterzellen platziert wird, richtet es sich nach dem spezifizierten Rasterbereich aus und verhält sich so, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird nach der Größe seines [Enthaltenen Blocks](/de/docs/Web/CSS/Containing_block) bemessen, die die Breite seines Inhalts ist. Diese Größe wurde durch die Einstellung `position: fixed` vorgegeben. Automatisch dimensionierte, absolut und fix-positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie es erforderlich ist, um den Textinhalt zu enthalten, während sie durch den Rand des Ansichtsfensters eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Rasters platziert werden, mit einem beliebigen `left`- oder `inline-start`-Wert, wird der Text umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer ist als sein Anker, werden sie nicht wachsen, um die Größe des Ankers zu erfüllen.

Wenn das positionierte Element vertikal zentriert ist, etwa mit `position-area: bottom center`, richtet es sich mit der spezifizierten Rasterzelle aus und die Breite ist dieselbe wie die des Anker-Elements. In diesem Fall ist seine Mindesthöhe die enthaltende Blockgröße des Anker-Elements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit ist wie das längste Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das anchor-positionierte Element mit den `center`-Werten des `position-area` zentrieren können, bieten die inset-Eigenschaften in Kombination mit der `anchor()`-Funktion eine größere Kontrolle über die genaue Positionierung. Die CSS-Anchor-Positionierung bietet eine Möglichkeit, ein anchor-positioniertes Element relativ zu seinem Anker zu zentrieren, wenn inset-Eigenschaften anstelle des `position-area` verwendet werden, um es zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und deren {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands) existieren, um Entwicklern das einfache Ausrichten von Elementen in Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, etwa entlang der Haupt- oder Querachse im Falle von Flexkindern. Die CSS-Anchor-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und dieselbe Basis-CSS wie das vorherige Beispiel. Die Infobox wird fix positioniert und an der unteren Kante des Ankers verbunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal an der Mitte des Ankers zentriert ist:

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

Dies zentriert das anchor-positionierte Element am unteren Rand seines Ankers:

{{ EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250") }}

## Elemente basierend auf der Ankergröße dimensionieren

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers kann ein Element auch relativ zur Größe seines Ankers dimensioniert werden, indem die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Größenattributwertes verwendet wird.

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

`anchor-size()`-Funktionen lösen sich in {{cssxref("length")}}-Werte auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Anker-Elements gesetzt wird, zu dem Sie die Größe des Elementes relativ gestalten möchten. Wenn er weggelassen wird, wird der **Standardanker** des Elements, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenzierte Anker, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Anker-Elements an, zu der das positionierte Element relativ dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fix positioniert ist oder das Anker-Element nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elementes gleich der Breite des Standardanker-Elementes:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elementes auf das 4-fache der Inline-Größe des Anker-Elementes, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Sehen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind dasselbe wie in den vorherigen Beispielen, außer dass dem Anker-Element ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzugefügt wurde, um es fokussierbar zu machen. Die Infobox wird fix positioniert und in der gleichen Weise wie zuvor mit dem Anker verbunden. Diesmal jedoch verbinden wir es an der rechten Seite des Ankers, indem wir `position-area` verwenden, und geben ihr eine Breite, die fünfmal der Breite des Anker-Elementes entspricht:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Anker-Elements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand verändert.

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

Fahren Sie über das Anker-Element oder tabben Sie zu ihm – das positionierte Element wächst, wenn der Anker größer wird, was demonstriert, dass die Größe des anchor-positionierten Elementes relativ zu seinem Anker ist:

{{ EmbedLiveSample("Elemente basierend auf Ankergröße dimensionieren", "100%", "250") }}

## Siehe auch

- [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Überlaufbehandlung: Fallbacks und bedingtes Verbergen versuchen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
