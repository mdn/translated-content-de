---
title: Verwendung der CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: f3bf315cc3f26a6c96cfa6fa4898e7def28ca78a
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der ankerpositionierten Elemente können dann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

CSS-Ankerpositionierung bietet auch rein CSS-basierte Mechanismen zur Angabe mehrerer alternativer Positionen für ein ankerpositioniertes Element. Zum Beispiel, wenn ein Tooltip an ein Formularfeld gebunden ist, der Tooltip jedoch in seinen Standardpositionseinstellungen außerhalb des Bildschirms angezeigt werden würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, um ihn auf dem Bildschirm zu platzieren, oder alternativ ihn ganz auszublenden.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenanpassungsfunktionen des Moduls auf einer grundlegenden Ebene verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes diskutierte Konzept beigefügt. Informationen zur Angabe alternativer Positionen und zum Ausblenden von Ankerpositionierten Elementen finden Sie im Leitfaden zu [Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, dass man ein Element an ein anderes binden oder verknüpfen möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formulareingaben erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um weitere Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte — oft wiederverwertbar und dynamisch generiert — relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle wären relativ einfach zu erstellen, wenn das Ankerelement (auch bekannt als **Ankerelement**) immer an derselben Stelle in der Benutzeroberfläche wäre und das verbundene Element (aka das **ankerpositionierte Element** oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Quellenreihenfolge platziert werden könnte. Allerdings ist dies selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, während sich das Ankerelement bewegt oder auf andere Weise konfiguriert wird (z.B. durch Scrollen, Ändern der Ansichtsfenstergröße, Drag & Drop, usw.). Beispielsweise könnte bei einem Element wie einem Formularfeld, das sich an den Rand des Ansichtsfensters nähert, sein Tooltip außerhalb des Bildschirms enden. Generell möchte man den Tooltip an sein Formulareingabeelement binden und sicherstellen, dass der Tooltip vollständig sichtbar bleibt, solange die Formulareingabe sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit der rechten Maustaste (<kbd>Strg</kbd> + Klick) öffnen.

Historisch gesehen erforderte es JavaScript, ein Element mit einem anderen zu assoziieren und dynamisch die Position und Größe eines positionierten Elements basierend auf der Position eines Ankers zu ändern, was Komplexität und Leistungsprobleme hinzufügte. Es wurde auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen es, solche Anwendungsfälle performant und deklarativ mit CSS (und HTML) statt JavaScript zu implementieren.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zunächst deklarieren, welches Element der Anker ist, und dann spezifizieren, welches(n) positionierte(n) Element(e) mit diesem Anker assoziiert werden sollen. Dies schafft eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie diesem über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen geben. Der Ankname muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, was den Verankerungseffekt besser demonstriert.

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

Die Umwandlung eines Elements in ein ankerpositioniertes Element erfordert zwei Schritte: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) mit der {{cssxref("position")}}-Eigenschaft sein. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu assoziieren:

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

Wir werden das obige CSS auf das folgende HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dadurch wird es wie folgt dargestellt:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht aneinander gebunden – wenn Sie den Anker positionieren und ihn woanders auf der Seite verschieben würden, würde er sich allein bewegen und die Infobox an derselben Stelle lassen. Sie werden die tatsächliche Verankerung in Aktion sehen, wenn wir uns mit der [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) befassen.

### Implizite Ankerassoziation

In einigen Fällen wird eine implizite Ankerreferenz aufgrund der semantischen Natur ihrer Beziehung zwischen zwei Elementen hergestellt:

- Wenn das [Popover-API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einem Steuerelement zu assoziieren, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann passieren, wenn:
  - Ein Popover deklarativ mit einem Steuerelement assoziiert wird, indem die [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute oder die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id`-Attribute verwendet werden.
  - Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmgesteuert mit einem Steuerelement assoziiert wird, indem die `source`-Option verwendet wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Auswahlwerkzeug sind in die Funktionalität des [anpassbaren Auswahlwerkzeugs](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft integriert. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben werden.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht verankert. Um sie zusammen zu verankern, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS gemacht wird.

### Entfernen einer Ankerassoziation

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerassoziation entfernen möchten, können Sie eine der folgenden Maßnahmen ergreifen:

1. Setzen Sie den Wert der `anchor-name`-Eigenschaft des Ankers auf `none` oder auf ein anderes `<dashed-ident>`, falls Sie ein anderes Element an ihn binden möchten.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`.

Im Fall von impliziten Ankerassoziationen müssen Sie jedoch die zweite Methode verwenden – die erste Methode funktioniert nicht. Dies liegt daran, dass die Assoziation intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Zum Beispiel, um ein anpassbares `<select>`-Element zu verhindern, dass das Auswahlwerkzeug an das `<select>`-Element selbst verankert wird, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Assoziation eines positionierten Elements mit einem Anker allein nicht wirklich von Nutzen. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies geschieht entweder durch Setzen eines [CSS `anchor()`-Funktionswerts](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Festlegen eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zur Festlegung von Ausweichpositionen, falls die Standardposition des positionierten Elements dazu führt, dass es das Ansichtsfenster überläuft. Details finden Sie im Leitfaden zu [Fallback-Optionen und bedingtem Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es ausgeblendet ist (z.B. über [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir erläutern, wie ein ankerpositioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell werden absolut und fest positionierte Elemente explizit durch Setzen von {{cssxref("length")}} oder {{cssxref("percentage")}}-Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} positioniert. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Kanten des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Ansichtsfenster.

CSS-Ankerpositionierung ändert dieses Paradigma, indem ankerpositionierte Elemente relativ zu den Kanten ihrer assoziierten Ankerelemente platziert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Wenn verwendet, setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem sie das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ platziert wird, und den Abstand von dieser Seite definiert.

Die Funktionskomponenten sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der `anchor-name`-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den in seiner `position-anchor`-Eigenschaft verwiesen wird oder der über das nicht standardmäßige `anchor`-HTML-Attribut mit dem Element assoziiert ist.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>`-Werts positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Sie können die Seiten eines Elements relativ zu mehreren Ankern positionieren, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen auf demselben Element angeben, das positionierte Element ist jedoch nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder den Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf die `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der mit der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist, nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der die Distanz als Fallback-Wert definiert, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist, nicht kompatibel ist oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf der Inset-Eigenschaft eines ankerpositionierten Elements festlegen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist dasselbe Verhalten, das auftritt, wenn der `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der er gesetzt ist, nicht kompatibel ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahrenelements (falls vorhanden) oder des ursprünglichen enthaltenen Blocks.

Die am häufigsten verwendeten `anchor()`-Parameter werden sich auf eine Seite des Standardankers beziehen. Sie werden häufig entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einige `margin-left` hinzu, um den Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Dies bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt und fügt den Abstand mittels der `calc()`-Funktion hinzu, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel von `anchor()` in Aktion an. Wir haben dasselbe HTML verwendet wie in den vorherigen Beispielen, jedoch mit etwas Fülltext darunter und darüber, um den Inhalt zu veranlassen, seinen Container zu überlaufen und zu scrollen. Wir geben auch dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker assoziiert und hat eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) einbeziehen, haben wir sie mit dem Anker verbunden. Wir fügen der Infobox einen `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Inset-Eigenschafts-Positionierungsdeklarationen genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die Block-Startkante des positionierten Elements auf die Block-Endkante des Ankers, berechnet mittels der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mittels der `anchor(self-end)`-Funktion.

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument hoch- und runterscrollen, bleibt das positionierte Element in seiner Position relativ zum Ankerelement — es ist an das Ankerelement fixiert, nicht an das Ansichtsfenster.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zur Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft arbeitet mit dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` und koordinatenbasierte Äquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` und koordinatenbasierte Äquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den enthaltenen Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Überlappungsoptionen zur Definition des Bereichs des Rasters, wo das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrat zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Kachel.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der unteren mittleren Kachel.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert spezifiziert die Reihe oder Spalte, in die das positionierte Element platziert werden soll, und platziert es zunächst in der Mitte, und der andere gibt die Anzahl der Spalten an, die überspannt werden sollen. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert wird und über die mittlere und linke Kachel dieser Reihe spannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und über die mittlere und x-end-Kachel dieser Spalte spannt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Block-End-Reihe platziert wird und über die inline-start, center und inline-end Kacheln dieser Reihe spannt.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich, je nach dem, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) verhält sich, als ob der andere Wert `span-all` ist. Zum Beispiel ergibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) verhält sich, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` verhält sich, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die referenzierte Seite zum [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physikalischen Wert wird die Deklaration ungültig machen.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet das gleiche HTML und die gleichen Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Der Infobox wird eine feste Positionierung gegeben und sie wird mit dem Anker mithilfe von CSS assoziiert. Wenn sie geladen wird, ist sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden ist, was bewirkt, dass sie oben im `position-area`-Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte anzuwenden, die aus dem `<select>`-Menü auf die Infobox ausgewählt werden:

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

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben die Dimensionierung absichtlich weggelassen, um Ihnen zu ermöglichen, das Verhalten zu beobachten, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Dimensionierung in `position-area`-Rasterzellen platziert wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird entsprechend seiner [Größe des enthaltenen Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) dimensioniert, die die Breite seines Inhalts ist. Diese Größe wurde durch `position: fixed` festgelegt. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit wie nötig aus, um den Textinhalt zu fassen, während sie durch den Rand des Ansichtsfensters eingeschränkt sind. In diesem Fall, wenn sie am linken Rand des Rasters mit irgendeinem `left`- oder `inline-start`-Wert platziert werden, umbricht der Text. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um die Größe des Ankers anzupassen.

Wenn das positionierte Element vertikal zentriert ist, wie z.B. mit `position-area: bottom center`, richtet es sich an der angegebenen Rasterzelle aus und die Breite ist die gleiche wie die des Ankerelements. In diesem Fall ist seine minimale Höhe die Größe des enthaltenen Blocks des Ankerelements. Es läuft nicht über, da die `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mithilfe der `center`-Werte von `position-area` zentrieren können, bieten Inset-Eigenschaften kombiniert mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern die einfache Ausrichtung von Elementen in Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, beispielsweise entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit der Mitte seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die gleichen Basis-CSS wie das vorherige Beispiel. Der Infobox wird eine feste Positionierung gegeben und sie wird an der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf der Mitte des Ankers zentriert ist:

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

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mithilfe der [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Dimensionierungseigenschaftswerts festlegen.

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

`anchor-size()`-Funktionen werden zu {{cssxref("length")}}-Werten aufgelöst. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name)-Eigenschaft des Ankerelements festgelegt ist, zu dem Sie das Element relativ dimensionieren möchten. Wenn er weggelassen wird, wird der **Standardanker** des Elements, der Anker, auf den in der [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft verwiesen wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann durch physische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline` oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()`-Funktionen werden nur auf eine Dimension des Standardankers verweisen. Sie können sie auch innerhalb von {{cssxref("calc()")}}-Funktionen verwenden, um die angewandte Größe des positionierten Elements zu ändern.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankers:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzugefügt wird, um es fokussierbar zu machen. Der Infobox wird eine feste Positionierung gegeben und sie ist mit dem Anker auf die gleiche Weise wie zuvor assoziiert. Diesmal verankern wir es jedoch rechts vom Anker mit einem `position-area` und geben ihm eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm einen {{cssxref("transition")}}, sodass er animiert, wenn sich der Zustand ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder drücken Sie die Tabulatortaste, um das Ankerelement zu fokussieren — das positionierte Element wächst, wenn der Anker wächst, was zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Dimensionierung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Andere Anwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die nachstehenden Abschnitte erläutern diese Anwendungen ausführlicher, bevor sie ein Anwendungsbeispiel geben.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaftswerts")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, beispielsweise:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element ändert seine Position nicht, wenn sein Anker dies tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute)- oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed)-Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement nur vertikal bewegt werden kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, auch wenn sich die Ankerbreite ändert.

### Festlegen des Elementrandes basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements festzulegen, beispielsweise:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie möchten, dass der Rand eines ankerpositionierten Elements immer dem gleichen Prozentsatz der Breite des Ankerelements entspricht, selbst wenn sich die Breite ändert.

### `anchor-size()` Beispiel für Position und Rand

Schauen wir uns ein Beispiel an, bei dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}}-Abschnitt groß genug zu machen, um Bildlauf erforderlich zu machen, aber dies wurde zur Kürze versteckt.

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

Im CSS deklarieren wir zuerst das `anchor`-`<div>`-Element als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf Anker und Infobox und fügen eine {{cssxref("transition")}} auf den Anker hinzu, sodass Breitenänderungen beim Statuswechsel fließend animiert werden:

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers im schwebenden Zustand oder bei Fokus auf `300px`. Dann setzen wir die `top`-Wert der Infobox auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Infobox immer mit der Oberseite des Ankers in Einklang bleibt. Den `left`-Wert setzen wir auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Infobox die angegebene Distanz vom linken Rand ihres nächstgelegenen positionierten Vorfahren entfernt positioniert wird. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements, und der nächstgelegene positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint. Den `margin-left`-Wert setzen wir auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Rand hat, der sie vom Anker trennt und einem Viertel der Breite des Ankers entspricht.

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

Versuchen Sie, zum Anker zu tabben oder mit der Maus darüber zu fahren, und beachten Sie, wie die Position und der linke Rand der Infobox im Verhältnis zur Breite des Ankerelements wachsen.

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)-Modul
- [Lernen: Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
