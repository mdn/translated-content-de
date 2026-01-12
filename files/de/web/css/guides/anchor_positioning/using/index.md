---
title: Verwenden von CSS-Verankerungspositionierung
short-title: Verwenden der Verankerungspositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: b72685da0a14dbf01251aae71d521576689f5226
---

Das **CSS-Verankerungspositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Verankerungselemente** und **verankerungspositionierte Elemente** definiert werden. Verankerungspositionierte Elemente können an Verankerungselemente gebunden werden. Die verankerungspositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Verankerungselemente, an die sie gebunden sind, festgelegt werden.

Die CSS-Verankerungspositionierung bietet auch rein CSS-basierte Mechanismen zur Spezifizierung mehrerer alternativer Positionen für ein verankerungspositioniertes Element. Beispielsweise kann der Browser, wenn ein Tooltip an ein Formularelement verankert ist, aber der Tooltip sonst außerhalb des Bildschirms in seinen Standardpositionseinstellungen angezeigt werden würde, versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm platziert wird, oder ihn alternativ vollständig ausblenden, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Verankerungspositionierung und wie man die Zuordnungs-, Positionierungs- und Größenanpassungsfunktionen des Moduls auf einer grundlegenden Ebene nutzt. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten besprochene Konzept hinzugefügt. Informationen zur Spezifizierung alternativer Positionen und zum Ausblenden von verankerungspositionierten Elementen finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr häufig, dass man ein Element an ein anderes binden möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um weitere Informationen bereitzustellen.
- Einstellungen oder Optionsdialoge, die schnell zur Konfiguration von UI-Elementen aufgerufen werden können.
- Dropdown-Menüs oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte — oft wiederverwendbar und dynamisch generiert — relativ zu einem Verankerungselement positioniert werden. Solche Anwendungsfälle zu erstellen wäre relativ unkompliziert, wenn das zu verankernde Element (auch als **Verankerungselement** bekannt) immer an der gleichen Stelle in der Benutzeroberfläche wäre und das zu verankernde Element (auch als **verankerungspositioniertes Element** bekannt) immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. In der Praxis ist dies jedoch selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Verankerungselement muss beibehalten und angepasst werden, wenn sich das Verankerungselement bewegt oder anderweitig konfiguriert wird (z.B. durch Scrollen, Ändern der Ansicht, Drag and Drop usw.). Wenn sich z.B. ein Element wie eine Formularfeld dem Rand des Viewports nähert, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularelement binden und sicherstellen, dass der Tooltip vollständig auf dem Bildschirm sichtbar bleibt, solange das Formularelement sichtbar ist, wobei der Tooltip bei Bedarf automatisch verschoben wird. Möglicherweise haben Sie dies als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit Rechtsklick (<kbd>Strg</kbd> + Klick) aufrufen.

Historisch gesehen erforderte die Verknüpfung eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Verankerungselements JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Verankerungspositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performativ und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Zuordnen von Verankerungs- und Positionierungselementen

Um ein Element mit einer Verankerung zu verknüpfen, müssen Sie zuerst deklarieren, welches Element die Verankerung ist, und dann angeben, welches(n) positionierte Element(e) mit dieser Verankerung verknüpft werden. Dies erstellt eine Verankerungsreferenz zwischen den beiden. Diese Zuordnung kann explizit über CSS oder implizit erfolgen.

### Explizite CSS-Verankerungszuordnung

Um ein Element als Verankerung mit CSS zu deklarieren, müssen Sie einen Verankerungsnamen mit der Eigenschaft {{cssxref("anchor-name")}} darauf setzen. Der Verankerungsname muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} der Verankerung auf `fit-content`, um eine kleine quadratische Verankerung zu erhalten, die den Verankerungseffekt besser demonstriert.

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

Um ein Element in ein verankerungspositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden mit der Eigenschaft {{cssxref("position")}}. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Verankerungselements gesetzt, um die beiden miteinander zu verknüpfen:

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

Wir wenden das obige CSS auf das folgende HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Die Verankerung und die Infobox sind jetzt verknüpft, aber im Moment müssen Sie uns dies einfach glauben. Sie sind noch nicht aneinander gebunden — wenn Sie die Verankerung positionieren und sie irgendwo anders auf der Seite verschieben würden, würde sie sich alleine bewegen und die Infobox an der gleichen Stelle belassen. Sie werden die tatsächliche Verbindung im Einsatz sehen, wenn wir uns [Positionierung von Elementen basierend auf der Verankerungsposition](#elemente_relativ_zu_ihrem_anker_positionieren) ansehen.

### Implizite Verankerungszuordnung

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Verankerungsverbindung zwischen zwei Elementen hergestellt:

- Bei der Verwendung der [Popover API](/de/docs/Web/API/Popover_API) zur Verknüpfung eines Popovers mit einem Steuerelement wird eine implizite Verankerungsverbindung zwischen den beiden hergestellt. Dies kann auftreten, wenn:
  - Eine deklarative Verknüpfung eines Popovers mit einem Steuerelement mit den Attributen [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder den Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id`.
  - Eine programmatische Verknüpfung einer Popoveraktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einem Steuerelement unter Verwendung der `source`-Option.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker nehmen an der [anpassbaren Auswahlmöglichkeit](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft teil. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie eine implizite Verankerungsverbindung aufweisen.

> [!NOTE]
> Die oben genannten Methoden verknüpfen eine Verankerung mit einem Element, aber sie sind noch nicht verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seiner Verankerung positioniert werden, was mit CSS erfolgt.

### Entfernen einer Verankerungszuordnung

Wenn Sie eine zuvor hergestellte explizite Verankerungszuordnung zwischen einem Verankerungselement und einem positionierten Element entfernen möchten, können Sie eines der folgenden Dinge tun:

1. Setzen Sie den Wert der Eigenschaft `anchor-name` der Verankerung auf `none` oder auf einen anderen `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element daran verankert wird.
2. Setzen Sie die Eigenschaft `position-anchor` des positionierten Elements auf `none` oder auf einen Verankerungsnamen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`.

Im Fall von impliziten Verankerungszuweisungen müssen Sie die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies liegt daran, dass die Zuordnung intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Um beispielsweise das Ankerverhalten eines anpassbaren `<select>`-Elementes von dem `<select>`-Element selbst zu stoppen, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: none;
}
```

## Ankerbereich

Wenn mehreren Verankerungselementen der gleiche {{cssxref("anchor-name")}}-Wert gegeben wird und ein positioniertes Element diesen Namen als seinen {{cssxref("position-anchor")}}-Eigenschaftswert hat, wird das positionierte Element mit dem _letzten_ Verankerungselement in der Quellreihenfolge mit diesem `anchor-name`-Wert verknüpft.

Wenn ein Dokument beispielsweise mehrere wiederholte Komponenten enthält, von denen jede ein positioniertes Element haben, das an eine Verankerung gebunden ist, werden alle positionierten Elemente an die letzte Verankerung auf der Seite gebunden, es sei denn, jede Komponente verwendet einen anderen Verankerungsnamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die {{cssxref("anchor-scope")}}-Eigenschaft kann dieses Problem beheben, indem sie die Sichtbarkeit oder den "Bereich" eines `anchor-name`-Wertes auf einen bestimmten Unterbaum beschränkt. Dadurch kann jedes positionierte Element nur an ein Element innerhalb desselben Unterbaums verankert werden, der auf dem Element, das den Bereich gesetzt hat, liegt.

- `anchor-scope: all` setzt den Bereich so, dass _jedwede_ `anchor-name`-Werte, die im Unterbaum gesetzt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können.
- `anchor-scope: --my-anchor, --my-anchor2` setzt den Bereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Unterbaum gesetzt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können.
- `anchor-scope: none` ist der Standardwert; er gibt an, dass kein Ankerbereich gesetzt ist.

Angenommen, Sie haben mehrere Anker- und ankerpositionierte {{htmlelement("div")}}-Elemente innerhalb von {{htmlelement("section")}}-Containern:

```html live-sample___anchor-scope
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 2</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 3</div>
</section>
```

Wir verwandeln jedes `anchor`-`<div>` in ein Ankerelement, indem wir ihm einen `anchor-name` von `--my-anchor` geben. Wir positionieren dann jedes `positioned`-`<div>` relativ zu einem Element mit dem Ankernamen `--my-anchor`, indem wir ihnen absolute Positionierung, einen `position-anchor`-Wert von `--my-anchor` und einen {{cssxref("position-area")}}-Wert von `right` geben. Schließlich setzen wir den Ankerbereich jedes `<section>`-Containers mit `anchor-scope: --my-anchor`:

```css hidden live-sample___anchor-scope
html {
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.scoped {
  padding: 20px;
  background: #eeeeee;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___anchor-scope
.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}

.scoped {
  anchor-scope: --my-anchor;
}
```

Dies führt zu folgendem Positionierungsverhalten:

{{ EmbedLiveSample("anchor-scope", "100%", "150") }}

Jedes positionierte Element wird relativ zum Anker innerhalb desselben `<section>`-Elements positioniert. Dies liegt daran, dass jedes `<section>`-Element einen `anchor-scope` von `--my-anchor` darauf gesetzt hat; die positionierten Elemente innerhalb jedes Bereichscontainers können daher nur relativ zu den `my-anchor`-Ankern innerhalb desselben Containers positioniert werden.

Wenn wir `anchor-scope: --my-anchor` nicht auf den Containern gesetzt hätten, würden alle positionierten Elemente relativ zum letzten Anker auf der Seite positioniert.

## Elemente relativ zu ihrem Anker positionieren

Wie wir bereits gesehen haben, bringt das Verknüpfen eines positionierten Elements mit einer Verankerung allein nicht viel Nutzen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugeordneten Verankerungselement zu platzieren. Dies erfolgt entweder durch Setzen eines [CSS-`anchor()`-Funktionswerts](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Spezifizierung eines `position-area`](#setting_a_position-area) oder Zentrierung des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Die CSS-Verankerungspositionierung bietet auch Mechanismen zur Spezifizierung von Fallback-Positionen, wenn die Standardposition des positionierten Elements dazu führt, dass es den Viewport überläuft. Siehe den [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) für Details.

> [!NOTE]
> Das Verankerungselement muss ein sichtbarer DOM-Knoten sein, damit die Zuordnung und Positionierung funktioniert. Wenn es versteckt ist (z.B. mit [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir diskutieren, wie ein verankerungspositioniertes Element ausgeblendet wird, wenn seine Verankerung verschwindet, im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Bei `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Verankerungspositionierung ändert dieses Paradigma, indem verankerungspositionierte Elemente relativ zu den Kanten ihrer zugeordneten Verankerung(en) platziert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Verankerungselement, indem sie das Verankerungselement, die Seite des Verankerungselements, zu der das positionierte Element relativ positioniert wird, und den Abstand von dieser Seite definiert.

Die Funktionskomponenten sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der {{cssxref("anchor-name")}}-Eigenschaftswert des Verankerungselements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird die **Standardverankerung** des Elements verwendet. Dies ist die Verankerung, die in seiner {{cssxref("position-anchor")}}-Eigenschaft referenziert wird oder die mit dem Element via dem nicht-standardmäßigen [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut verknüpft ist.
    > [!NOTE]
    > Die Spezifikation eines `<anchor-name>` positioniert das Element relativ zu dieser Verankerung, bietet aber keine Elementzuordnung. Während Sie die Seiten eines Elements relativ zu mehreren Verankerungen positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedene `anchor()`-Funktionen auf demselben Element verwenden, ist das positionierte Element nur mit einer einzigen Verankerung verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten der Verankerung an. Gültige Werte sind das `center` der Verankerung, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten der Verankerung oder ein `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der die Entfernung als Fallback-Wert definiert, wenn das Element nicht absolut oder fest positioniert ist, der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder das Verankerungselement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position der Verankerung berechnet wird. Wenn Sie direkt eine Länge oder einen Prozentsatz auf die Inset-Eigenschaft eines verankerungspositionierten Elements setzen, wird es positioniert, als wäre es nicht an das Verankerungselement gebunden. Dies ist dasselbe Verhalten, das auftritt, wenn der `<anchor-side>`-Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der er gesetzt ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des initialen enthaltenen Blocks.

Die am häufigsten verwendeten `anchor()`-Parameter beziehen sich auf eine Seite der Standardverankerung. Sie werden auch häufig entweder ein {{cssxref("margin")}} hinzufügen, um Platz zwischen den Kanten der Verankerung und des positionierten Elements zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Platz hinzuzufügen.

Dieses Beispiel positioniert die linke Kante des positionierten Elements bündig zur rechten Kante des Verankerungselements und fügt dann `margin-left` hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  left: anchor(right);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert das Blockende des positionierten Elements `10px` vom Blockstart des Verankerungselements, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Sehen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, jedoch mit etwas Fülltext darüber und darunter, um den Inhalt über seinen Container hinaus zu überlaufen und zu scrollen. Wir geben auch dem Verankerungselement den gleichen `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist mit dem Anker über den Ankernamen verbunden und hat eine feste Positionierung erhalten. Durch Einbeziehung der Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} (die in horizontalen Links-nach-Rechts-Schreibweisen equivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie an den Anker gekoppelt. Wir fügen der Infobox einen `margin` hinzu, um Platz zwischen dem positionierten Element und seiner Verankerung zu schaffen:

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

Sehen wir uns die Inset-Eigenschaften-Positionierungsanweisungen genauer an:

- `inset-block-start: anchor(end)`: Dies setzt das Blockstartende des positionierten Elements auf das Blockende der Verankerung, berechnet mit der Funktion `anchor(end)`.
- `inset-inline-start: anchor(self-end)`: Dies setzt das Inlinestartende des positionierten Elements auf das Inlineende der Verankerung, berechnet mit der Funktion `anchor(self-end)`.

Dies führt zu folgendem Ergebnis:

{{ EmbedLiveSample("`anchor()` Beispiel", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts vom Verankerungselement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Verankerungselement bei — es ist nicht fest an den Viewport, sondern an das Verankerungselement gebunden.

### Setzen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Verankerungen. Die `position-area`-Eigenschaft arbeitet mit dem Konzept eines 3x3-Rasters von Kacheln, wobei das Verankerungselement die mittlere Kachel darstellt. Die `position-area`-Eigenschaft kann verwendet werden, um das verankerungspositionierte Element in irgendeiner der neun Kacheln zu platzieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Das Raster wird in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Äquivalente wie `start`, `center` und `end` und koordinatenbezogene Äquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Äquivalente wie `start`, `center` und `end` und koordinatenbezogene Äquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Verankerungselements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den enthaltenen Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten, basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit Spannen-Optionen, die die Region des Rasters definieren, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einer bestimmten Rasterzelle zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Zelle.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der unteren mittleren Zelle.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, wobei es zunächst in der Mitte positioniert wird, und der andere gibt den zu spannenden Bereich dieser Spalte an. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Zeile platziert wird und über die Mitte und linke Kacheln dieser Zeile spannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und über die Mitte und x-end Kachel dieser Spalte spannt.
- `block-end span-all` bewirkt, dass das positionierte Element im Blockendbereich platziert wird und über die inline-start, die Mitte und die inline-end Kacheln dieser Zeile spannt.

Wenn Sie nur einen Wert angeben, ist der Effekt je nachdem, welcher Wert gesetzt ist, unterschiedlich:

- Ein physischer Wert (`top`, `bottom`, `left`, `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` ist. Zum Beispiel, `top` gibt den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel `start` gibt den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und die grundlegenden CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und wird mit dem Anker über CSS verknüpft. Wenn sie geladen wird, wird sie so eingestellt, dass sie mit `position-area: top;` an den Anker gekoppelt wird, was dazu führt, dass sie oben auf dem position-area-Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte auszuwählen, die aus dem `<select>`-Menü für die Infobox auszuwählen sind:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um die Auswirkungen zu sehen, die sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Setzen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

In dem obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit in seiner Größe angepasst. Wir haben die Größenanpassung absichtlich weggelassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangabe in `position-area`-Rasterzellen platziert wird, richtet es sich nach dem angegebenen Rasterbereich aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird nach seiner [enthaltenen Blockgröße](/de/docs/Web/CSS/Guides/Display/Containing_block), die die Breite des Inhalts ist, in seiner Größe angepasst. Diese Größe wurde durch die Einstellung `position: fixed` festgelegt. Auto-große absolut und fest positionierte Elemente werden automatisch in der Größe angepasst und dehnen sich so weit wie nötig aus, um den Textinhalt zu beherbergen, während sie durch den Rand des Viewports begrenzt bleiben. In diesem Fall, wenn sich das Element auf der linken Seite des Rasters mit einem `left`- oder `inline-start`-Wert befindet, wird der Text umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als seine Verankerung ist, wachsen sie nicht, um die Größe der Verankerung zu entsprechen.

Wenn sich das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, richtet es sich nach der angegebenen Rasterzelle aus und die Breite entspricht der des Verankerungselements. In diesem Fall beträgt seine Mindesthöhe die Größe des enthaltenen Blocks des Verankerungselements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrierung auf der Verankerung unter Verwendung von `anchor-center`

Obwohl Sie das verankerungspositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. CSS-Verankerungspositionierung bietet eine Möglichkeit, ein verankerungspositioniertes Element relativ zu seiner Verankerung zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu koppeln.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} abkürzenden Formen) existieren, um Entwicklern die einfache Möglichkeit zu geben, Elemente im Inline- oder Blockschicht innerhalb verschiedener Layoutsysteme auszurichten, zum Beispiel entlang des Haupt- oder Querachse im Fall von Flex-Kindern. CSS-Verankerungspositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seiner Standardverankerung ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und grundlegende CSS wie das vorherige Beispiel. Der Infobox wird eine feste Positionierung gegeben und sie wird an den unteren Rand des Ankers gekoppelt. Dann wird `justify-self: anchor-center` verwendet, um sicherzustellen, dass sie horizontal auf dem Zentrum des Ankers zentriert ist:

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

Dies zentriert das verankerungspositionierte Element am unteren Rand seiner Verankerung:

{{ EmbedLiveSample("Zentrierung auf der Verankerung unter Verwendung von `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Verankerungsgröße

Neben dem Positionieren eines Elements relativ zu seinem Verankerungsort können Sie auch die Größe eines Elements relativ zur Größe seiner Verankerung anpassen, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Größenanpassungseigenschaftswerts verwenden.

Größenanpassungseigenschaften, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

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
  - : Der `<dashed-ident>`-Name, der als Wert der {{cssxref("anchor-name")}}-Eigenschaft des Verankerungselements gesetzt ist, auf das Sie das Element relativ zur Größe skalieren möchten. Wenn weggelassen, wird die **Standardverankerung** des Elements, die Referenz in der {{cssxref("position-anchor")}}-Eigenschaft ist, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Verankerungselements an, relativ zu der das positionierte Element in der Größe angepasst wird. Dies kann in physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, falls das Element nicht absolut oder fest positioniert ist oder das Verankerungselement nicht existiert.

Die am häufigsten verwendeten `anchor-size()`-Funktionen beziehen sich einfach auf eine Dimension der Standardverankerung. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die angewendete Größe auf das positionierte Element zu modifizieren.

Diese Regel setzt zum Beispiel die Breite des positionierten Elements gleich der des Standardankers:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel setzt die inline-Größe des positionierten Elements auf das 4-fache der inline-Größe des Ankers, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Sehen wir uns ein Beispiel an. HTML und grundlegende CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Verankerungselement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox hat eine feste Positionierung und ist mit dem Anker auf die gleiche Weise wie zuvor verbunden. Dieses Mal koppel wir es jedoch an die rechte Seite des Ankers mit einer `position-area` und geben ihm eine Breite, die das Fünffache der Breite des Ankers beträgt:

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

Außerdem erhöhen wir die {{cssxref("width")}} des Ankers bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihr eine {{cssxref("transition")}}, damit sie animiert wird, wenn sich der Zustand ändert.

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

Bewegen oder tippen Sie über das Verankerungselement — das positionierte Element wächst, während der Anker wächst und zeigt, dass die Größe des verankerungspositionierten Elements relativ zu seiner Verankerung ist:

{{ EmbedLiveSample("Größenanpassung von Elementen basierend auf der Verankerungsgröße", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte erläutern diese Verwendungen im Detail, bevor ein Anwendungsbeispiel gegeben wird.

### Einstellen der Elementposition basierend auf der Verankerungsgröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaftswerts")}} verwenden, um Elemente basierend auf der Größe ihres Verankerungselements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seiner Verankerung wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Elemente relativ zu ihrer Verankerung positionieren](#elemente_relativ_zu_ihrem_anker_positionieren) oben). Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed)-Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Wenn sich Ihr Verankerungselement zum Beispiel nur vertikal bewegen kann und immer neben dem Rand des nächstgelegenen positionierten Vorfahren horizontal bleibt, können Sie `left: anchor-size(width)` verwenden, um das verankerungspositionierte Element immer rechts von seiner Verankerung zu positionieren, auch wenn sich die Breite der Verankerung ändert.

### Einstellen des Elementabstands basierend auf der Verankerungsgröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementabstände basierend auf der Größe ihres Verankerungselements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie den Abstand eines verankerungspositionierten Elements immer gleich dem gleichen Prozentsatz der Breite seines Verankerungselements setzen möchten, selbst wenn sich die Breite ändert.

### `anchor-size()`-Position und -Abstandsbeispiel

Sehen wir uns ein Beispiel an, bei dem wir den Abstand und die Position eines verankerungspositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, eines für das `anchor`-Element und eines für das `infobox`-Element, das wir relativ zum Anker positionieren. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussierbar ist. Wir haben auch Fülltext eingefügt, um das {{htmlelement("body")}} hoch genug zu machen, um Scrollen erforderlich zu machen, aber dies wurde aus Gründen der Kürze weggelassen.

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

Im CSS deklarieren wir zunächst das `anchor`-`<div>`-Element als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist mit dem Ankerelement über seine {{cssxref("position-anchor")}}-Eigenschaft verbunden. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf das Anker und die Infobox, und fügen eine {{cssxref("transition")}} auf dem Anker hinzu, damit Breitenänderungen sanft animiert werden, wenn sich sein Zustand ändert:

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn es schwebt oder fokussiert ist. Dann setzen wir die `top`-Wert der Infobox auf `anchor(top)`. Dies bewirkt, dass sich das obere Ende der Infobox immer in einer Linie mit dem oberen Ende der Verankerung befindet. Der `left`-Wert wird auf `anchor-size(width)` gesetzt, so dass das linke Ende der Infobox in der angegebenen Entfernung vom linken Rand ihres nächstgelegenen positionierten Vorfahren positioniert wird. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements und der nächstgelegene positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint. Schließlich setzen wir `margin-left` der Infobox auf `calc(anchor-size(width)/4)`, was bewirkt, dass die Infobox immer einen linken Rand von einem Viertel der Breite der Verankerung behält.

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

Versuchen Sie, das Ankerelement anzutippen oder darüber zu schweben, und beachten Sie, wie sich die Position der Infobox und der linke Rand proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Inhalten in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
