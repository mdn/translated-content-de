---
title: Verwenden der CSS-Anker-Positionierung
short-title: Verwendung der Anker-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 827fdf3b0a52b14af5962cb2c9d3b59e213c2a57
---

Das **CSS Anker-Positionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerplatzierte Elemente** definiert werden. Ankerplatzierte Elemente können an Ankerelemente gebunden werden. Die ankerplatzierten Elemente können dann in Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, gesetzt werden.

CSS Anker-Positionierung bietet auch CSS-exklusive Mechanismen zur Spezifizierung mehrerer alternativer Positionen für ein ankerplatziertes Element. Beispielsweise, wenn ein Tooltip an ein Formularfeld verankert ist, der Tooltip jedoch andernfalls außerhalb des Bildschirms in seinen Standardeinstellungen gerendert würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm platziert wird, oder ihn alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Anker-Positionierung und wie man die Funktionen zum Assoziieren, Positionieren und Größenanpassen des Moduls auf Basisniveau verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten besprochenen Konzepte hinzugefügt. Informationen zur Spezifizierung alternativer Positionen und zum Ausblenden ankerplatzierter Elemente finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr häufig, dass man ein Element an ein anderes binden möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um mehr Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einiger Inhalt – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement platziert wird. Solche Anwendungsfälle zu erstellen wäre ziemlich einfach, wenn das zu verankernde Element (auch als **Ankerelement** bekannt) immer an derselben Stelle in der Benutzeroberfläche wäre und das verankerte Element (auch als **ankerplatziertes Element** oder einfach **positioniertes Element** bekannt) immer unmittelbar davor oder danach in der Quellenreihenfolge platziert werden könnte. Doch so einfach ist es selten.

Die Position positionierter Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder sich anderweitig ändert (z.B. durch Scrollen, Ändern der Ansichtsfenstergröße, Ziehen und Ablegen usw.). Wenn beispielsweise ein Element wie ein Formularfeld nahe an den Rand des Ansichtsfensters kommt, könnte sein Tooltip schließlich außerhalb des Bildschirms landen. Generell möchte man, dass der Tooltip an das Formularsteuerelement gebunden ist und sicherstellen, dass der Tooltip sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und ihn bei Bedarf automatisch bewegt. Dies haben Sie möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop durch Rechtsklick (<kbd>Strg</kbd> + Klick) aufrufen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Umsetzung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Assoziieren von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zunächst erklären, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) Sie mit diesem Anker assoziieren möchten. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element in CSS als Anker zu deklarieren, müssen Sie einen Ankernamen mit der {{cssxref("anchor-name")}} Eigenschaft festlegen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Verankerungseffekt besser demonstriert.

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

Ein Element in ein ankerplatziertes Element zu konvertieren erfordert zwei Schritte: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) über die {{cssxref("position")}} Eigenschaft werden. Das positionierte Element hat dann seine {{cssxref("position-anchor")}} Eigenschaft auf den Wert der `anchor-name` Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu assoziieren:

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

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns dies glauben. Sie sind noch nicht miteinander verbunden – wenn Sie den Anker positionieren und ihn woanders auf der Seite bewegen würden, würde er sich allein bewegen und die Infobox an derselben Stelle lassen. Sie werden das tatsächliche Verankern in Aktion sehen, wenn wir uns das [Positionieren von Elementen basierend auf der Ankerposition](#positionieren_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerassoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen hergestellt:

- Wenn die [Popover API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einer Steuerung zu assoziieren, wird eine implizite Ankerreferenz zwischen den beiden erstellt. Dies kann geschehen, wenn:
  - Ein Popover deklarativ mit einer Steuerung mithilfe der [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute oder der [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` Attribute assoziiert wird.
  - Eine programmatische Assoziation einer Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) wird mit einer Steuerung über die `source` Option hergestellt.
- Ein {{htmlelement("select")}} Element und sein Dropdown-Auswahlfeld sind in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Funktionalität über den {{cssxref("appearance")}} Eigenschaft `base-select` Wert integriert. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, sie sind jedoch noch nicht verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

### Entfernen einer Ankerassoziation

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerassoziation entfernen möchten, können Sie eines der folgenden Dinge tun:

1. Setzen Sie den Wert der `anchor-name` Eigenschaft des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element daran verankert wird.
2. Setzen Sie die `position-anchor` Eigenschaft des positionierten Elements auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`.

Im Falle von impliziten Ankerassoziationen müssen Sie jedoch die zweite Methode verwenden – die erste Methode funktioniert nicht. Dies liegt daran, dass die Assoziation intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Um beispielsweise zu verhindern, dass ein anpassbares `<select>` Elementauswahlfeld an das `<select>` Element selbst verankert wird, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## Positionieren von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, bringt das Assoziieren eines positionierten Elements mit einem Anker allein nicht viel. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies geschieht entweder durch Setzen eines [CSS `anchor()` Funktions](#using_inset_properties_with_anchor_function_values) Werts auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [spezifizieren eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> CSS-Anker-Positionierung bietet auch Mechanismen zum Spezifizieren von Fallback-Positionen, wenn die Standardposition des positionierten Elements dazu führt, dass es das Ansichtsfenster überläuft. Einzelheiten hierzu finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktionieren. Wenn es ausgeblendet ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir diskutieren, wie ein ankerplatziertes Element ausgeblendet wird, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Inset-Eigenschaften mit `anchor()` Funktionswerten

Konventionelle absolut und fest positionierte Elemente werden explizit durch Setzen von {{cssxref("length")}} oder {{cssxref("percentage")}} Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} positioniert. Mit `position: absolute` ist dieser Inset-Positionswert eine absolute Entfernung relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert eine absolute Entfernung relativ zum Ansichtsfenster.

CSS-Anker-Positionierung ändert dieses Paradigma, indem Elemente relativ zu den Kanten ihrer assoziierten Anker platziert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Wenn sie verwendet wird, setzt die Funktion den Inset-Positionswert als absolute Entfernung relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und die Entfernung von dieser Seite definiert werden.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn nicht angegeben, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird oder über das nicht standardisierte [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist.
    > [!NOTE]
    > Das Spezifizieren eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, stellt jedoch keine Elementassoziation bereit. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()` Funktionen auf demselben Element angeben, wird das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder mehreren Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, usw.) oder logische (`start`, `self-end`, usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Eine {{cssxref("length-percentage")}} die die Entfernung definiert, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>` Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()` Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie einen Längen- oder Prozentsatz direkt auf einer Inset-Eigenschaft eines ankerplatzierten Elements setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist dasselbe Verhalten, das auftritt, wenn der `<anchor-side>` Wert mit der Inset-Eigenschaft, auf der er gesetzt ist, inkompatibel ist und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren (falls vorhanden) oder des initialen Containing Blocks platzieren.

Die häufigsten `anchor()` Parameter, die Sie verwenden, beziehen sich auf eine Seite des Standardankers. Sie werden oft entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()` Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel platziert diese Regel den rechten Rand des positionierten Elements bündig zum linken Rand des Ankerelements und fügt dann etwas `margin-left` hinzu, um einen Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()` Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}} Funktion verwenden können. Diese Regel positioniert den logischen Blockendrand des positionierten Elements `10px` vom logischen Blockstartrand des Ankerelements entfernt, wobei der Abstand mit der `calc()` Funktion hinzugefügt wird, damit wir keinen Abstand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber, um den Inhalt in seinem Container überlaufen und scrollen zu lassen. Wir geben dem Ankerelement auch denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker assoziiert und erhält eine feste Positionierung. Durch das Einschließen der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibrichtungen {{cssxref("top")}} und {{cssxref("left")}} äquivalent sind) haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Inset-Eigenschaften-Positionierungsdeklarationen genauer an:

- `inset-block-start: anchor(end)`: Dies setzt den Blockstartrand des positionierten Elements auf den Blockendrand des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Inlinestartkant des positionierten Elements auf den Inlineendrand des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Das verleiht uns folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts des Ankerelements. Wenn Sie das Dokument hoch und runter scrollen, bleibt das positionierte Element relativ zum Ankerelement positioniert – es ist an das Ankerelement fixiert, nicht an das Ansichtsfenster.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()` Funktion zum Positionieren von Elementen relativ zu Ankern. Die `position-area` Eigenschaft funktioniert auf dem Konzept eines 3x3 Rasters von Kacheln, wobei das Ankerelement die zentrale Kachel ist. Die `position-area` Eigenschaft kann verwendet werden, um das ankerplatzierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Das Raster ist in Zeilen und Spalten aufgeteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der zentralen Kachel werden durch den [enthältlichen Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der zentralen Kachel und dem äußeren Rand des Rasters durch den enthältlichen Block des positionierten Elements definiert wird.

`position-area` Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit Spannungsoptionen verfügbar, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Beispielsweise:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) wird das positionierte Element im oberen linken Quadrat platzieren.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in die das positionierte Element gesetzt werden soll, und der andere gibt die Menge dieser Spalte an, die überspannt werden soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Zeile platziert wird und über die zentrale und linke Kachel dieser Zeile spannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Koordinate platziert wird und über die zentrale und die x-end Kachel dieser Spalte spannt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Block-Ende-Zeile platziert wird und über die Inline-Start-, Center- und Inline-End-Kacheln dieser Zeile spannt.

Wenn Sie nur einen Wert angeben, ist der Effekt abhängig davon, welchen Wert Sie setzen:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als wäre der andere Wert `span-all`. Zum Beispiel ergibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als wäre der andere Wert auf denselben Wert gesetzt; zum Beispiel ergibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt, als wären beide Werte auf `center` (also, `center center`) gesetzt.

> [!NOTE]
> Siehe die [Referenzseite des `<position-area>` Werts](/de/docs/Web/CSS/position-area_value) für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und Basis-CSS-Stile wie das vorherige, außer dass wir ein {{htmlelement("select")}} Element eingeführt haben, um den `position-area` Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine fixe Positionierung und wird mit dem Anker über CSS assoziiert. Wenn geladen, wird sie fest an den Anker mit `position-area: top;` gebunden, was bewirkt, dass sie in der obersten Position des position-area Rasters positioniert wird. Dies wird überschrieben, sobald Sie verschiedene Werte aus dem `<select>` Menü auswählen.

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

Wir fügen auch ein kurzes Skript bei, um neue `position-area` Werte auszuwählen, die aus dem `<select>` Menü auf die Infobox angewendet werden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Festlegen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Dimensionen des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben die Größenabsicht bewusst ausgelassen, um das Verhalten beobachten zu können, das dadurch verursacht wird.

Wenn ein positioniertes Element in `position-area` Rasterzellen ohne explizite Größenbestimmung platziert wird, richtet es sich mit dem angegebenen Rasterbereich aus und verhält sich so, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird basierend auf der Größe seines [enthältlichen Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) bemessen, das die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Auto-Size absolut und fest positionierte Elemente werden automatisch bemessen und dehnen sich nach Bedarf aus, um den Textinhalt aufzunehmen, während sie durch den Rand des Ansichtsfensters eingegrenzt werden. In diesem Fall, wenn Sie auf der linken Seite des Rasters platziert sind, mit einem `left` oder `inline-start` Wert, wickelt sich der Text. Wenn die max-content Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um die Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal ausgerichtet ist, wie zum Beispiel mit `position-area: bottom center`, richtet es sich mit der angegebenen Rasterzelle aus und die Breite entspricht der des Ankerelements. In diesem Fall ist seine minimale Höhe die Größe des enthältlichen Blocks des Ankerelements. Es wird nicht überlaufen, da `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit wie das längste Wort sein wird.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerplatzierte Element mit den `center` Werten der `position-area` zentrieren können, bieten Inset-Eigenschaften, gepaart mit der `anchor()` Funktion, mehr Kontrolle über die genaue Position. CSS-Anker-Positionierung bietet einen Weg, ein ankerplatziertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` zum Verankern verwendet werden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente einfach in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme auszurichten. Beispielsweise entlang der Haupt- oder Querachse im Fall flexibler Kinder. CSS-Anker-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Mittelpunkt seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und Basis-CSS wie das vorherige Beispiel. Die Infobox wird mit fixer Positionierung versehen und am unteren Rand des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Mittelpunkt des Ankers zentriert ist:

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

Dies zentriert das ankerplatzierte Element unten auf seinem Anker:

{{ EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250") }}

## Elemente basierend auf der Ankergröße dimensionieren

Zusätzlich zum Positionieren eines Elements relativ zur Position seines Ankers können Sie auch ein Element relativ zur Größe seines Ankers mithilfe der [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Größeneigenschaftswerts dimensionieren.

Größeneigenschaften, die einen `anchor-size()` Wert akzeptieren können, umfassen:

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

`anchor-size()` Funktionen lösen sich zu {{cssxref("length")}} Werten auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft des Ankerelements gesetzt ist, auf das Sie die Größe des Elements relativ anpassen möchten. Wenn nicht angegeben, wird der **Standardanker** des Elements verwendet, welcher der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenzierte Anker ist.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, auf die das positionierte Element in Relation dimensioniert wird. Dies kann durch physikalische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline`, oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel, diese Regel dimensioniert die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()` Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind dasselbe wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut erhält, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird wie zuvor mit dem Anker assoziiert. Dieses Mal verankern wir es jedoch an der rechten Seite des Ankers mithilfe eines `position-area`, und geben ihm eine Breite, die das Fünffache der Breite des Ankers ist:

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

Darüber hinaus erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, damit es sich animiert, wenn sich der Zustand ändert.

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

Bewegen Sie die Maus über das Ankerelement oder verwenden Sie die Tabulatortaste – das positionierte Element wächst, während der Anker wächst, und zeigt, dass die Größe des ankerplatzierten Elements relativ zu seiner Ankergröße ist:

{{ EmbedLiveSample("Elemente basierend auf der Ankergröße dimensionieren", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physikalischen und logischen Inset- und Margen-Eigenschaften verwenden. Die folgenden Abschnitte untersuchen diese Verwendungen im Detail, bevor sie ein Anwendungsbeispiel bereitstellen.

### Elementposition basierend auf der Ankergröße setzen

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaftswerts")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion oder die {{cssxref("position-area")}} Eigenschaft (siehe [Positionieren von Elementen relativ zu ihrem Anker](#positionieren_von_elementen_relativ_zu_ihrem_anker), oben); das Element ändert seine Position nicht, wenn sich sein Anker ändert. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Wenn Ihr Ankerelement zum Beispiel nur vertikal verschoben werden kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerplatzierte Element immer rechts von seinem Anker zu positionieren, auch wenn sich die Ankerbreite ändert.

### Elementmarge basierend auf der Ankergröße setzen

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftswerts verwenden, um die Margen von Elementen basierend auf der Größe ihres Ankerelements zu setzen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein in Fällen, in denen Sie die Marge eines ankerplatzierten Elements immer gleich einem bestimmten Prozentsatz der Ankerbreite beibehalten möchten, auch wenn sich die Breite ändert.

### `anchor-size()` Positions- und Margen-Beispiel

Schauen wir uns ein Beispiel an, wie wir die Marge und Position eines ankerplatzierten Elements relativ zur Breite des Ankerelements setzen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines als `anchor` Element und eines als `infobox` Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, sodass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} groß genug zu machen, dass es Scrollen erfordert, aber dies wurde der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zunächst den `anchor` `<div>` als Ankerelement, indem wir ihm ein {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und ist mit dem Ankerelement über seine {{cssxref("position-anchor")}} Eigenschaft assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen am Anker und der Infobox, und fügen eine {{cssxref("transition")}} am Anker hinzu, sodass Breitenänderungen beim Zustandswechsel sanft animiert werden.

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn es überfahren oder fokussiert wird. Dann setzen wir das:

- `top` Wert der Infobox auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Infobox immer mit der Oberseite des Ankers ausgerichtet bleibt.
- `left` Wert der Infobox auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Infobox die angegebene Entfernung vom linken Rand ihres nächsten positionierten Vorfahren entfernt positioniert wird. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>` Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert der Infobox auf `calc(anchor-size(width)/4)`. Dadurch hat die Infobox immer eine linke Marge, die sie vom Anker trennt, die gleich einem Viertel der Breite des Ankers ist.

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

{{EmbedLiveSample("Grundlegende `anchor-size()` Verwendung", "100%", "240")}}

Versuchen Sie, das Ankerelement zu tabben oder mit der Maus darüber zu fahren, und beachten Sie, wie sich die Position und die linke Marge der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte Modul](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Lernen: Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
