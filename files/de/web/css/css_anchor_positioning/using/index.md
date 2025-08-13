---
title: Verwenden von CSS-Ankerpositionierung
short-title: Verwenden der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position im Verhältnis zur Größe und Position der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Die CSS-Ankerpositionierung bietet auch CSS-exklusive Mechanismen, um mehrere alternative Positionen für ein ankerpositioniertes Element zu spezifizieren. Zum Beispiel, wenn ein Tooltip an ein Formularfeld verankert ist, aber der Tooltip ansonsten außerhalb des Bildschirms in seinen Standardpositionseinstellungen dargestellt würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm platziert wird, oder ihn alternativ verbergen, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie man die Assoziations-, Positionierungs- und Größeneinstellungen auf einer grundlegenden Ebene verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes hier diskutierte Konzept beigefügt. Informationen zum Festlegen alternativer Positionen und Ausblenden von ankerpositionierten Elementen finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, dass man ein Element an ein anderes anbinden oder befestigen möchte. Beispielsweise:

- Fehlermeldungen, die neben Formularelementen angezeigt werden.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um mehr Informationen darüber zu liefern.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement positioniert sind. Solche Anwendungsfälle zu erstellen, wäre relativ einfach, wenn das zu bindende Element (auch bekannt als **Ankerelement**) immer am gleichen Ort in der Benutzeroberfläche wäre und das angebundene Element (auch bekannt als **ankerpositioniertes Element** oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings ist dies selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn das Ankerelement sich bewegt oder seine Konfiguration ändert (z. B. durch Scrollen, Ändern der Viewport-Größe, Drag-and-Drop usw.). Zum Beispiel, wenn ein Element wie ein Formularfeld in die Nähe des Viewport-Randes gerät, kann sein Tooltip sich außerhalb des Bildschirms befinden. Im Allgemeinen wollen Sie, dass der Tooltip an sein Formularelement gebunden ist und sicherstellen, dass der Tooltip so lange vollständig sichtbar auf dem Bildschirm bleibt, wie das Formularfeld sichtbar ist, indem der Tooltip bei Bedarf automatisch verschoben wird. Dies haben Sie möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs mit einem Rechtsklick (<kbd>Strg</kbd> + Klick) auf Ihrem Desktop oder Laptop öffnen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war zudem nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle leistungsfähig und deklarativ mit CSS (und HTML) statt mit JavaScript.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welche positionierten Elemente mit diesem Anker verknüpft werden sollen. Dies schafft eine Ankerreferenz zwischen den beiden. Diese Verknüpfung kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerverknüpfung

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft darauf setzen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Verankerungseffekt besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden zu verknüpfen:

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt verknüpft, aber im Moment müssen Sie uns dies glauben. Sie sind noch nicht miteinander verbunden — wenn Sie den Anker positionieren und an eine andere Stelle auf der Seite verschieben würden, würde er sich alleine verschieben und die Infobox an derselben Stelle belassen. Sie werden die tatsächliche Verbindung in Aktion sehen, wenn wir uns mit dem [Positionieren von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) befassen.

### Implizite Ankerverknüpfung

In einigen Fällen wird eine implizite Ankerreferenz zwischen zwei Elementen aufgrund der semantischen Natur ihrer Beziehung hergestellt. Zum Beispiel, wenn Sie die [Popover API](/de/docs/Web/API/Popover_API) verwenden, um ein Popover mit einem Bedienelement zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann auftreten, wenn:

- Sie ein Popover deklarativ mit einem Bedienelement verknüpfen, indem Sie die [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute verwenden.
- Sie eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einem Bedienelement programmgesteuert verknüpfen, indem Sie die `source`-Option verwenden.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Auswahlwerkzeug in die Funktionalität einer [anpassbaren Auswahlelement](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft `base-select`-Wert eingebunden sind. In diesem Fall wird eine implizite Popover-Aufrufer-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben werden.

> [!NOTE]
> Die oben genannten Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht miteinander verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

## Positionierung von Elementen relativ zu ihrem Anker

Wie oben zu sehen war, ist die Verknüpfung eines positionierten Elements mit einem Anker allein nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch Setzen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values)-Werts auf einer {{Glossary("Inset_properties", "Einfügeeigenschaft")}}, [Spezifizieren eines `position-area`](#setting_a_position-area) oder durch Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir erörtern, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker in [Bedingtes Verbergen mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) verschwindet.

### Verwenden von Einfügeeigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fest positionierte Elemente werden explizit positioniert, indem man {{cssxref("Länge")}} oder {{cssxref("Prozentsatz")}}-Werte auf {{Glossary("inset_properties", "Einfügeeigenschaften")}} setzt. Mit `position: absolute` ist dieser Einfügepositionierungswert eine absolute Entfernung relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Einfügepositionierungswert eine absolute Entfernung relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma, indem ankerpositionierten Elementen die Möglichkeit gegeben wird, relativ zu den Rändern ihrer zugehörigen Anker platziert zu werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Einfügeeigenschaften ist. Wenn sie verwendet wird, setzt die Funktion den Einfügepositionierungswert als absolute Entfernung relativ zum Ankerelement, indem sie das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ positioniert wird, und die Entfernung von dieser Seite definiert.

Die Funktionskomponenten sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaftswert des Ankerelements, zu dem Sie das Element positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn ausgelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder über das nicht-standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut mit dem Element verknüpft ist.
    > [!NOTE]
    > Das Spezifizieren eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementverknüpfung. Obwohl Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen auf demselben Element spezifizieren, ist das positionierte Element nur mit einem einzelnen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte sind die `Mitte` des Ankers, physische (`oben`, `links`, usw.) oder logische (`start`, `self-end`, usw.) Seiten des Ankers oder ein `<percentage>` zwischen dem Start (`0%`) und Ende (`100%`) der Achse der Einfügeeigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfügeeigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der die Entfernung definiert, die als Fallback-Wert zu verwenden ist, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Einfügeeigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf eine Einfügeeigenschaft eines ankerpositionierten Elements setzen, wird es positioniert, als wäre es nicht mit dem Ankerelement verbunden. Dies ist das gleiche Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert nicht kompatibel mit der Einfügeeigenschaft ist, auf der er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Begrenzungsblocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch oft entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand zu addieren.

Zum Beispiel positioniert diese Regel den rechten Rand des positionierten Elements bündig mit dem linken Rand des Ankerelements und fügt dann etwas `margin-left` hinzu, um Platz zwischen den Rändern zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie ihn innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert den logischen Block-Endrand des positionierten Elements `10px` vom logischen Block-Startrand des Ankerelements, indem der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keine Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel an, in dem `anchor()` in Aktion ist. Wir haben denselben HTML-Code wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber, um den Inhalt seines Containers überlaufen und scrollen zu lassen. Wir geben dem Ankerelement auch denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist mit dem Anker über den Ankernamen verknüpft und hat eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften einschließen (die in horizontalen Links-nach-Rechts-Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind), haben wir sie an den Anker gebunden. Wir fügen der Infobox eine `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Positionierungsdeklarationen der Einfügeeigenschaft genauer an:

- `inset-block-start: anchor(end)`: Dies setzt den Block-Start-Rand des positionierten Elements auf den Block-End-Rand des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Inline-Start-Rand des positionierten Elements auf den Inline-End-Rand des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement positioniert – es ist am Ankerelement fixiert, nicht am Viewport.

### Setzen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft basiert auf dem Konzept eines 3x3 Gitters aus Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area Gitter, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `oben`, `mitte` und `unten` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end`, sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `links`, `mitte` und `rechts` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end`, sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Gitters durch den enthaltenden Block des positionierten Elements definiert wird.

Die Werte der `position-area`-Eigenschaft bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Spannungsoptionen, die den Bereich des Gitters definieren, in dem das Element positioniert werden soll.

Beispielsweise:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Gitterquadrat zu platzieren. Zum Beispiel:

- `oben links` (logische Entsprechung `start start`) platziert das positionierte Element im obersten linken Quadrat.
- `unten mitte` (logische Entsprechung `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in die das positionierte Element platziert werden soll, es wird zunächst in der Mitte platziert, und der andere gibt die Menge dieser Spalte an, die überspannt werden soll. Zum Beispiel:

- `oben span-links` bewirkt, dass das positionierte Element in der oberen Reihe platziert und über die mittlere und linke Kachel dieser Reihe gespannt wird.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert und über die Mitte und x-end Kacheln dieser Spalte gespannt wird.
- `block-end span-all` bewirkt, dass das positionierte Element in der block-end Reihe platziert und über die inline-start, Mitte und inline-end Kacheln dieser Reihe gespannt wird.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich je nachdem, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`oben`, `unten`, `links` oder `rechts`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` ist. Zum Beispiel gibt `oben` denselben Effekt wie `oben span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt wäre; zum Beispiel gibt `start` denselben Effekt wie `start start`.
- Ein `center`-Wert wirkt, als ob beide Werte auf `center` gesetzt wären (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wertreferenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet den gleichen HTML- und Basis-CSS-Stil wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um das Ändern des `position-area`-Werts des positionierten Elements zu ermöglichen.

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

Die Infobox erhält eine feste Positionierung und ist mit dem Anker über CSS verknüpft. Beim Laden ist sie so eingestellt, dass sie mit `position-area: oben;` an den Anker gebunden ist, was bewirkt, dass sie am oberen Rand des position-area Gitters positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript ein, um neue `position-area`-Werte, die aus dem `<select>`-Menü ausgewählt werden, auf die Infobox anzuwenden:

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

{{ EmbedLiveSample("Setzen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element nicht explizit in einer der Dimensionen dimensioniert. Wir haben die Größenangabe absichtlich weggelassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangabe in die `position-area`-Gitternetzfelder platziert wird, richtet es sich mit dem angegebenen Gitterbereich aus und verhält sich, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird entsprechend seiner [enthältender Block](/de/docs/Web/CSS/CSS_display/Containing_block)-Größe dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` erzwungen. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert, sodass sie sich so breit dehnen, wie nötig, um den Textinhalt anzupassen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Gitters mit einem `left`- oder `inline-start`-Wert platziert werden, wird der Text umgebrochen. Wenn die `max-content`-Größe des Ankerelements schmaler oder kürzer ist als sein Anker, wachsen sie nicht, um die Größe des Ankers anzupassen.

Wenn das positionierte Element vertikal zentriert ist, zum Beispiel mit `position-area: unten mitte`, richtet es sich mit dem angegebenen Gitterfeld aus und die Breite entspricht der des Ankerelements. In diesem Fall ist seine minimale Höhe die Größe des enthältenden Blocks des Ankerelements. Es wird nicht überlaufen, da der `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrieren auf dem Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten der `position-area` zentrieren können, bieten Einfügeeigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Einfügeeigenschaften verwendet werden, um es zu verbinden, anstatt `position-area`.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre Abkürzungen {{cssxref("place-items")}} und {{cssxref("place-self")}}) bestehen, um Entwicklern zu ermöglichen, Elemente einfach in Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme auszurichten, zum Beispiel entlang der Haupt- oder Kreuzachse im Fall von Flexkindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dieselben HTML- und Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und ist an der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Zentrum des Ankers zentriert ist:

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

{{ EmbedLiveSample("Zentrieren auf dem Anker mit `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch ein Element im Verhältnis zur Größe seines Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größeneigenschaftswerts verwenden.

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

`anchor-size()`-Funktionen werden zu {{cssxref("Länge")}}-Werten aufgelöst. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie die Größe des Elements relativ setzen möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der der Anker ist, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, zu der das positionierte Element relativ dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("Länge-Prozentsatz")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankers:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox erhält feste Positionierung und ist mit dem Anker auf die gleiche Weise wie zuvor verknüpft. Diesmal binden wir es jedoch auf der rechten Seite des Ankers mit einem `position-area` und geben ihm eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Darüber hinaus erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, sodass es animiert, wenn sich der Zustand ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder verwenden Sie die Tabulatortaste darauf — das positionierte Element wächst, wenn der Anker wächst, was demonstriert, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Dimensionierung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einfügungen und Margeneigenschaften verwenden. Die folgenden Abschnitte untersuchen diese Verwendungen detaillierter, bevor sie ein Anwendungsbeispiel liefern.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Einfügeeigenschafts")}}-Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sein Anker dies tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute)- oder [`fixed`](/de/docs/Web/CSS/position#fixed)-Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, auch wenn sich die Breite des Ankers ändert.

### Festlegen des Elementabstandes basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein in Fällen, in denen Sie den Abstand eines ankerpositionierten Elements immer gleich dem gleichen Prozentsatz der Breite des Ankerelements festlegen möchten, auch wenn sich dessen Breite ändert.

### `anchor-size()`-Position und Margenbeispiel

Schauen wir uns ein Beispiel an, in dem wir den Abstand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anker`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, sodass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} so groß zu machen, dass ein Scroll erforderlich ist, aber dies wurde der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zuerst das `anker`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist mit dem Ankerelement über seine {{cssxref("position-anchor")}}-Eigenschaft verknüpft. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf dem Anker und der Infobox und fügen eine {{cssxref("transition")}} auf den Anker ein, sodass Breitenänderungen sanft animiert werden, wenn sich sein Zustand ändert:

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn es schwebend oder fokussiert ist. Dann legen wir die `infobox`'s:

- `top` Wert auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Infobox immer mit der Oberseite des Ankers in einer Linie bleibt.
- `left` Wert auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Infobox die angegebene Entfernung von der linken Kante ihres nächstgelegenen positionierten Vorfahren entfernt ist. In diesem Fall entspricht die angegebene Entfernung der Breite des Ankerelements und der nächstgelegene positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Abstand hat, der sie und den Anker trennt, gleich einem Viertel der Ankerbreite.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Grundlegende Verwendung von `anchor-size()`", "100%", "240")}}

Versuchen Sie, den Anker mit der Tabulatortaste zu fokussieren oder mit der Maus darüber zu schweben und beachten Sie, wie sich die Position und der linke Abstand der Infobox im Verhältnis zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Leitfaden für Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Learn: Positioning](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Learn: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
