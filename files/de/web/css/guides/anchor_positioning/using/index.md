---
title: Verwendung von CSS-Anker-Positionierung
short-title: Verwendung der Anker-Positionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS-Anker-Positionierung**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Die CSS-Anker-Positionierung bietet auch CSS-only Mechanismen für die Angabe mehrerer alternativer Positionen für ein ankerpositioniertes Element. Wenn beispielsweise ein Tooltip an ein Formularfeld gebunden ist, aber der Tooltip in seiner Standardpositionierung außerhalb des Bildschirms gerendert würde, kann der Browser versuchen, ihn an einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm platziert wird, oder ihn alternativ ganz ausblenden, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Anker-Positionierung und wie man die Assoziations-, Positionierungs- und Größenanpassungsfunktionen des Moduls auf grundlegende Weise nutzt. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes im Folgenden diskutierte Konzept eingefügt. Informationen zur Spezifikation alternativer Positionen und zum Ausblenden ankerpositionierter Elemente finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes binden zu wollen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um mehr Informationen darüber zu geben.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle wären ziemlich einfach zu erstellen, wenn das Element, an das man binden möchte (das sogenannte **Ankerelement**), immer an derselben Stelle in der Benutzeroberfläche wäre und das gebundene Element (das sogenannte **ankerpositionierte Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Die Dinge sind jedoch selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z. B. durch Scrollen, Ändern der Viewport-Größe, Drag & Drop usw.). Wenn sich beispielsweise ein Element wie ein Formularfeld dem Rand des Viewports nähert, könnte sein Tooltip am Ende außerhalb des Bildschirms sein. Im Allgemeinen möchte man den Tooltip an das Formularsteuerelement binden und sicherstellen, dass der Tooltip so lange vollständig sichtbar bleibt, wie das Formularfeld sichtbar ist, und ihn bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie mit der rechten Maustaste Kontextmenüs auf Ihrem Desktop oder Laptop anzeigen (<kbd>Strg</kbd> + Klick).

Historisch erforderte die Zuordnung eines Elements zu einem anderen und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was zu Komplexität und Leistungsproblemen führte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul definierten Funktionen ermöglichen es, solche Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript zu implementieren.

## Zuordnung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welche positionierten Elemente mit diesem Anker assoziiert werden sollen. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie einen Ankernamen darauf setzen, mithilfe der {{cssxref("anchor-name")}} Eigenschaft. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Verankerungseffekt besser demonstriert.

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

Ein Element in ein ankerpositioniertes Element umzuwandeln, erfordert zwei Schritte: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) sein, indem die {{cssxref("position")}} Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}} Eigenschaft auf den Wert der `anchor-name` Eigenschaft des Ankerelements eingestellt, um die beiden miteinander zu verknüpfen:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
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

Wir werden das oben genannte CSS auf das folgende HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Es wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns das glauben. Sie sind noch nicht miteinander verbunden – wenn Sie den Anker positionieren und irgendwo anders auf der Seite verschieben, würde er sich alleine bewegen und die Infobox an derselben Stelle zurücklassen. Sie werden die eigentliche Verbindung in Aktion sehen, wenn wir uns die [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerassoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung ein impliziter Ankerbezug zwischen zwei Elementen hergestellt:

- Bei Verwendung der [Popover-API](/de/docs/Web/API/Popover_API) zur Verknüpfung eines Popovers mit einem Steuerelement wird implizit ein Ankerbezug zwischen den beiden hergestellt. Dies kann passieren, wenn:
  - Ein Popover deklarativ mit einem Steuerelement verknüpft wird, indem die [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute oder die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` Attribute verwendet werden.
  - Ein Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmgesteuert mit einem Steuerelement verknüpft wird, indem die `source` Option verwendet wird.
- Ein {{htmlelement("select")}} Element und dessen Dropdown-Picker werden in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Funktionalität über den {{cssxref("appearance")}} Eigenschaftswert `base-select` eingebunden. In diesem Fall wird eine implizite Popover-Aufrufer Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie einen impliziten Ankerbezug haben.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht miteinander verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS gemacht wird.

### Entfernen einer Ankerassoziation

Wenn Sie eine zuvor hergestellte explizite Ankerassoziation zwischen einem Ankerelement und einem positionierten Element entfernen möchten, können Sie eine der folgenden Methoden anwenden:

1. Setzen Sie den Wert der `anchor-name` Eigenschaft des Ankers auf `none`, oder auf einen anderen `<dashed-ident>`, falls Sie möchten, dass ein anderes Element daran gebunden wird.
2. Setzen Sie die `position-anchor` Eigenschaft des positionierten Elements auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie z. B. `--not-an-anchor-name`.

Im Fall von impliziten Ankerassoziationen müssen Sie jedoch die zweite Methode verwenden – die erste Methode funktioniert nicht. Dies liegt daran, dass die Assoziation intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Um beispielsweise zu verhindern, dass der Picker eines anpassbaren `<select>` Elements an das `<select>` Element selbst gebunden ist, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Assoziieren eines positionierten Elements mit einem Anker allein nicht wirklich von Nutzen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch das Setzen eines [CSS `anchor()` Funktion](#using_inset_properties_with_anchor_function_values) Wertes auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Festlegen eines `position-area`](#setting_a_position-area), oder Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Die CSS-Anker-Positionierung bietet auch Mechanismen zur Spezifikation von Fallback-Positionen, falls die Standardposition des positionierten Elements dazu führt, dass es den Viewport überläuft. Siehe den [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) für Details.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel via [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir diskutieren, wie Sie ein ankerpositioniertes Element ausblenden können, wenn sein Anker verschwindet, im [Bedingten Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()` Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Bei `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Kanten des nächsten positionierten Vorfahren. Bei `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Anker-Positionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion, die einen gültigen Wert für jede der Inset-Eigenschaften darstellt. Bei Verwendung setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, relativ zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Funktion-Komponenten sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name) Eigenschaft des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Falls weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft referenziert wird, oder der im Element über das nicht standardisierte [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut verknüpft ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()` Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte schließen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers, oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist, ein. Wird ein Wert verwendet, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, das den Abstand als Fallback-Wert definiert, falls das Element nicht absolut oder fest positioniert ist, der verwendete `<anchor-side>` Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, oder das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()` Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie einen Längen- oder Prozentwert direkt auf einer Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist dasselbe Verhalten, das zu sehen ist, wenn der `<anchor-side>` Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Enthaltungsblocks.

Die häufigsten `anchor()` Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden oft entweder eine {{cssxref("margin")}} hinzufügen, um den Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()` Funktion verwenden, um diesen Abstand hinzuzufügen.

Dieses Beispiel zeigt eine Regel, die die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements positioniert und dann etwas `margin-left` hinzufügt, um Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Da der Rückgabewert einer `anchor()` Funktion eine Länge ist, können Sie sie innerhalb einer {{cssxref("calc()")}} Funktion verwenden. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt und fügt den Abstand mit der `calc()` Funktion hinzu, sodass wir keine zusätzliche Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel von `anchor()` in Aktion an. Wir haben dasselbe HTML verwendet wie in den vorherigen Beispielen, aber Fülltext unten und oben hinzugefügt, um dafür zu sorgen, dass der Inhalt seinen Container überläuft und scrollt. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist via Ankername mit dem Anker verbunden und mit fester Positionierung eingefügt. Indem wir die {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibmodi gleichbedeutend mit {{cssxref("top")}} und {{cssxref("left")}} sind) einfügen, haben wir es an den Anker gebunden. Wir fügen der Infobox eine `margin` hinzu, um den Abstand zwischen dem positionierten Element und seinem Anker hinzuzufügen:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
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

Schauen wir uns die Deklarationen der Inset-Positions-Eigenschaften genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die Block-Startkante des positionierten Elements an die Block-Endkante des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements an die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Dies ergibt das folgende Resultat:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts von dem Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zu dem Ankerelement – es ist an das Ankerelement fixiert, nicht am Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()` Funktion zur Positionierung von Elementen relativ zu Ankern. Die `position-area` Eigenschaft basiert auf dem Konzept eines 3x3 Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area` Eigenschaft kann verwendet werden, um das Ankerpositionierte Element in einer der neun Kacheln zu positionieren oder über zwei oder drei Kacheln zu spannen.

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center`, und `bottom` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center`, und `end`, sowie Koordinatenäquivalente wie `y-start`, `center`, und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center`, und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center`, und `end`, sowie Koordinatenäquivalente wie `x-start`, `center`, und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [Containtmentblock](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Containementblock des positionierten Elements definiert wird.

`position-area` Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Spannungsoptionen, um die Region des Rasters zu definieren, in der das Element positioniert werden sollte.

Zum Beispiel:

Man kann zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrat zu platzieren. Zum Beispiel:

- `top left` (logische Entsprechung `start start`) platziert das positionierte Element im Quadrat oben links.
- `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element im Quadrat unten Mitte.

Man kann einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert spezifiziert die Reihe oder Spalte, in der das positionierte Element platziert werden soll, wobei es zunächst in der Mitte platziert wird, und der andere gibt die Menge dieser Spalte an, die gespannt werden soll. Zum Beispiel:

- `top span-left` positioniert das positionierte Element in der oberen Reihe und erstreckt es über die mittleren und linken Kacheln dieser Reihe.
- `y-end span-x-end` positioniert das positionierte Element am Ende der y-Spalte und erstreckt es über die mittleren und x-End Kacheln dieser Spalte.
- `block-end span-all` positioniert das positionierte Element in der Block-End-Reihe und erstreckt es über die Inline-Start-, Mitte- und Inline-End-Kacheln dieser Reihe.

Wenn man nur einen Wert angibt, ist der Effekt unterschiedlich, je nach dem, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left`, oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) verhält sich so, als ob der andere Wert `span-all` wäre. Zum Beispiel gibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) verhält sich so, als ob der andere Wert auf denselben Wert gesetzt wäre; zum Beispiel gibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` verhält sich so, als ob beide Werte auf `center` gesetzt wären (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert führt zu einer ungültigen Deklaration.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und die Basis-CSS-Stile wie im vorherigen Beispiel, außer dass wir ein {{htmlelement("select")}} Element eingebaut haben, um den `position-area` Wert des positionierten Elements zu ändern.

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

Die Infobox wird eine feste Positionierung gegeben und mittels CSS mit dem Anker verbunden. Beim Laden ist sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden wird, wodurch sie oben im position-area Raster platziert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>` Menü auswählen.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area` Werte aus dem `<select>` Menü auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Einstellen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben absichtlich eine Größenanpassung ausgelassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element in `position-area` Rasterzellen ohne explizite Größenanpassung platziert wird, richtet es sich an der angegebenen Rasterfläche aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird nach seiner [Containment-Block](/de/docs/Web/CSS/Guides/Display/Containing_block) Größe, die die Breite seines Inhalts ist, dimensioniert. Diese Größe wurde festgelegt, indem `position: fixed` gesetzt wurde. Auto-dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie es benötigt wird, um den Textinhalt zu passen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Rasters mit einem beliebigen `left` oder `inline-start` Wert platziert sind, wird der Text umgebrochen. Ist die `max-content`-Größe des verankerten Elements schmaler oder kürzer als sein Anker, wächst es nicht, um die Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal zentriert wird, wie z.B. mit `position-area: bottom center`, richtet es sich an der spezifizierten Rasterzelle aus und die Breite ist dieselbe wie die des Ankerelements. In diesem Fall ist seine Mindesthöhe die Größe des die Ankerelemente enthaltenden Blocks. Es wird nicht überlaufen, da das `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie das längste Wort ist.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center` Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften kombiniert mit der `anchor()` Funktion mehr Kontrolle über die genaue Position. Die CSS-Anker-Positionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und deren {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente in der Inline- oder Block-Richtung innerhalb verschiedener Layout-Systeme leicht zu positionieren, beispielsweise entlang der Haupt- oder Kreuzachse im Fall von Flex-Kindern. Die CSS-Anker-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dieselben HTML und Basis-CSS wie das vorherige Beispiel. Die Infobox hat eine feste Positionierung und ist an die Unterkante des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf dem Zentrum des Ankers zentriert ist:

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
  border: 1px solid #dddddd;
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

Dies zentriert das ankerpositionierte Element am unteren Rand seines Ankers:

{{ EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Größe des Ankers

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mithilfe der [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) Funktion innerhalb eines Größeneigenschaftswertes einstellen.

Größeneigenschaften, die einen `anchor-size()` Wert akzeptieren können, sind:

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

`anchor-size()` Funktionen werden zu {{cssxref("length")}} Werten aufgelöst. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name) Eigenschaft des Ankerelements gesetzt ist, zu dem Sie das Element relativ dimensionieren möchten. Falls weggelassen, wird der **Standardanker** des Elements, das ist der Anker, der in der [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann durch physische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline`, oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()` Funktionen beziehen sich in der Regel nur auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Dieses Beispiel zeigt eine Regel, die die Breite des positionierten Elements gleich der Breite des Standardankerelements dimensioniert:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inlinesize des positionierten Elements auf das Vierfache der Inlinesize des Ankerelements, wobei die Multiplikation innerhalb einer `calc()` Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Der HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzugefügt wurde, um es fokussierbar zu machen. Die Infobox wird fest positioniert und in derselben Weise mit dem Anker verbunden wie zuvor. Diesmal binden wir es jedoch mit einem `position-area` auf der rechten Seite des Ankers und geben ihm eine Breite, die fünfmal der Breite des Ankers entspricht:

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
  border: 1px solid #dddddd;
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

Darüber hinaus erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand ändert.

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

Hover oder Tab über das Ankerelement – das positionierte Element wächst, während der Anker wächst und demonstriert, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Dimensionierung von Elementen basierend auf der Größe des Ankers", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margineigenschaften verwenden. Die folgenden Abschnitte erforschen diese Verwendungen im Detail, bevor sie ein Anwendungsbeispiel liefern.

### Einstellen der Position des Elements basierend auf der Größe des Ankers

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) Funktion innerhalb eines {{Glossary("Inset_properties", "Inset Eigenschaftswertes")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion oder {{cssxref("position-area")}} Eigenschaft es tun (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sein Anker es tut. Stattdessen wird das Element gemäß den normalen Regeln von [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich die Ankerbreite ändert.

### Einstellen des Elementabstands basierend auf der Größe des Ankers

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftswertes verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements zu setzen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie den Abstand eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements halten möchten, auch wenn sich die Breite ändert.

### `anchor-size()` Positions- und Abstandbeispiel

Schauen wir uns ein Beispiel an, in dem wir den Abstand und die Position eines ankerpositionierten Elements relativ zur Breite seines Ankerelements einstellen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, ein `anchor` Element und ein `infobox` Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, damit es über die Tastatur fokussierbar ist. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} hoch genug zu machen, um ein Scrollen zu erfordern, aber dies wurde der Kürze halber versteckt.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und ist mit dem Ankerelement über seine {{cssxref("position-anchor")}} Eigenschaft verknüpft. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker und die Infobox und fügen eine {{cssxref("transition")}} auf den Anker ein, damit Größenänderungen beim Zustandswechsel sanft animiert werden:

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
  outline: 1px solid #dddddd;
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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px` wenn es gehovt oder fokussiert wird. Wir setzen dann die:

- `top` Wert der Infobox auf `anchor(top)`. Dadurch bleibt die Oberseite der Infobox immer in einer Linie mit der Oberseite des Ankers.
- `left` Wert auf `anchor-size(width)`. Dies sorgt dafür, dass die linke Seite der Infobox den angegebenen Abstand von der linken Kante des nächsten positionierten Vorfahren entfernt ist. In diesem Fall entspricht der angegebene Abstand der Breite des Ankerelements und der nächste Position-Vorfahre ist das `<body>` Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies sorgt dafür, dass die Infobox immer einen linken Rand hat, der sie und den Anker trennt und gleich einem Viertel der Breite des Ankers ist.

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

{{EmbedLiveSample("Grundlegende `anchor-size()` Verwendung", "100%", "240")}}

Versuchen Sie, den Anker zu tabben oder mit dem Mauszeiger darüber zu fahren und beobachten Sie, wie sich die Position und der linke Rand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
