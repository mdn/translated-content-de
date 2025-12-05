---
title: Verwenden der CSS-Anker-Positionierung
short-title: Nutzung der Anker-Positionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Das **CSS-Anker-Positionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **anker- positionierte Elemente** definiert werden. Anker-positionierte Elemente können an Ankerelemente gebunden werden. Die anker- positionierten Elemente können dann in Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

CSS-Anker-Positionierung bietet auch ausschließlich CSS-Mechanismen, um mehrere alternative Positionen für ein anker-positioniertes Element zu spezifizieren. Beispielsweise, wenn eine QuickInfo an ein Formularfeld gebunden ist, die QuickInfo jedoch andernfalls außerhalb des Bildschirms in den Standardeinstellungseinstellungen angezeigt würde, kann der Browser versuchen, sie in einer anderen vorgeschlagenen Position anzuzeigen, sodass sie auf dem Bildschirm platziert wird, oder sie alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Funktionen des Moduls in Bezug auf Verknüpfung, Positionierung und Größenanpassung auf grundlegender Ebene verwenden. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten diskutierte Konzept eingefügt. Informationen zum Festlegen alternativer Positionen und zum Ausblenden von anker-positionierten Elementen finden Sie im [Anleitung: Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

## Grundlegende Konzepte

Es ist sehr verbreitet, dass ein Element mit einem anderen verknüpft oder gebunden werden soll. Beispiele:

- Fehlermeldungen, die neben Formularsteuerungen angezeigt werden.
- QuickInfos oder Infoboxen, die neben einem UI-Element erscheinen, um weitere Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, auf die zugegriffen werden kann, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte — oft wiederverwendbar und dynamisch generiert — relativ zu einem Ankerelement platziert werden. Solche Use Cases zu erstellen, wäre ziemlich einfach, wenn das zu verknüpfende Element (auch bekannt als **Ankerelement**) immer am selben Ort in der Benutzeroberfläche wäre und das geknüpfte Element (auch bekannt als **anker-positioniertes Element** oder einfach nur **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Doch so einfach ist es selten.

Der Ort der positionierten Elemente muss relativ zu ihrem Ankermodul beibehalten und angepasst werden, sobald sich das Ankermodul bewegt oder anderweitig die Konfiguration ändert (z.B. durch Scrollen, Ändern der Viewport-Größe, Drag-and-Drop usw.). Beispielsweise, wenn ein Element wie ein Formularfeld nahe an den Rand des Viewports gelangt, könnte seine QuickInfo außerhalb des Bildschirms landen. Im Allgemeinen möchten Sie das Tooltip an sein Formularsteuerungsmodul binden und sicherstellen, dass das Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und es bei Bedarf automatisch verschieben. Möglicherweise haben Sie dies als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie mit der rechten Maustaste (<kbd>Strg</kbd> + Klick) auf Kontextmenüs auf Ihrem Desktop oder Laptop zugreifen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme mit sich brachte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Use Cases performativ und deklarativ mit CSS (und HTML) statt mit JavaScript.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst angeben, welches Element der Anker ist, und dann angeben, welche positionierten Elemente mit diesem Anker verknüpft werden sollen. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Verknüpfung kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerverknüpfung

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie einen Ankernamen darauf über die {{cssxref("anchor-name")}}-Eigenschaft setzen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erzeugen, der den Verankerungseffekt besser demonstriert.

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

Um ein Element in ein anker-positioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss mit der Eigenschaft {{cssxref("position")}} absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelementes gesetzt, um die beiden zu verknüpfen:

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

Der Anker und die Infobox sind jetzt verknüpft, aber im Moment müssen Sie darauf vertrauen, dass sie verknüpft sind. Sie sind noch nicht miteinander verbunden - wenn Sie den Anker positionieren und ihn woanders auf der Seite verschieben, würde er sich alleine bewegen und die Infobox an Ort und Stelle lassen. Sie werden die eigentliche Verbindung im Einsatz sehen, wenn wir uns [Positionierung von Elementen basierend auf der Position des Ankers](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerverknüpfung

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen erstellt:

- Bei Verwendung der [Popover-API](/de/docs/Web/API/Popover_API), um ein Popover mit einem Steuerelement zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden erstellt. Dies kann auftreten, wenn:
  - Ein Popover deklarativ mit einem Steuerelement über die Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` verknüpft wird.
  - Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmatisch über die `source`-Option mit einem Steuerelement verknüpft wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker sind in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)-Funktionalität über den `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft eingebunden. In diesem Fall wird zwischen den beiden eine implizite Popover-Invoker-Beziehung erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die obigen Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht verbunden. Um sie zusammenzubinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS gemacht wird.

### Entfernen einer Ankerverknüpfung

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerverknüpfung entfernen möchten, können Sie eines der folgenden Verfahren anwenden:

1. Setzen Sie den Anker `anchor-name`-Eigenschaftswert auf `none` oder auf ein anderes `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element an ihm angeklemmt wird.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie etwa `--not-an-anchor-name`.

Im Fall von impliziten Ankerverknüpfungen müssen Sie jedoch die zweite Methode verwenden — die erste Methode funktioniert nicht. Das liegt daran, dass die Verknüpfung intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Zum Beispiel, um zu verhindern, dass ein anpassbares `<select>`-Element-Picker mit dem `<select>`-Element selbst verankert wird, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Verknüpfung eines positionierten Elements mit einem Anker alleine nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankermodul zu platzieren. Dies geschieht entweder durch das Setzen eines [CSS `anchor()`-Funktionenwertes](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Einrückungseigenschaft")}}, [Festlegung eines `position-area`-Values](#setting_a_position-area) oder das Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungwert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> CSS-Anker-Positionierung bietet auch Mechanismen zum Festlegen von Fallback-Positionen, wenn die Standardposition des positionierten Elements dazu führt, dass es den Viewport überflutet. Einzelheiten finden Sie im [Anleitung: Fallback-Optionen und bedingtes Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

> [!NOTE]
> Das Ankermodul muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktioniert. Wenn es verborgen ist (z.B. über [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir diskutieren, wie ein anker-positioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Verbergen mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Einrückungseigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fest positionierte Elemente werden explizit positioniert, indem man {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Einrückungseigenschaften")}} setzt. Mit `position: absolute` ist dieser Einrückungspositionswert ein absoluter Abstand relativ zu den Kanten des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Einrückungspositionswert ein absoluter Abstand relativ zum Viewport.

CSS-Anker-Positionierung ändert dieses Paradigma, sodass anker-positionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker platziert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion, die als gültiger Wert für jede der Einrückungseigenschaften fungiert. Bei Verwendung setzt die Funktion den Einrückungspositionswert als absoluten Abstand relativ zum Ankerelement, indem sie das Ankerelement, die Seite des Ankerelementes, zu der das positionierte Element verlagert wird, und den Abstand zu dieser Seite definiert.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelementes, zu dem Sie die seitliche Position des Elementes relativ setzen möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner {{cssxref("position-anchor")}}-Eigenschaft referenziert wird oder durch das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut mit dem Element verknüpft ist.
    > [!NOTE]
    > Das Festlegen eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, sorgt jedoch nicht für eine Elementverknüpfung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen die `center` des Ankers, physische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Einrückungseigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einrückungseigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der die Größe als Fallback-Wert definiert, falls das Element nicht absolut oder fest positioniert ist, der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Einrückungseigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie direkt einen Längen- oder Prozentwert auf einer Einrückungseigenschaft eines anker-positionierten Elements setzen, wird es positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das beobachtet wird, wenn der `<anchor-side>`-Wert nicht kompatibel mit der Einrückungseigenschaft ist, auf der es gesetzt ist und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide setzen das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (sofern vorhanden) oder des initialen Blockes.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig entweder ein {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann ein `margin-left` hinzu, um Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Dies bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Endblock-Kante des positionierten Elements `10px` von der logischen Startblock-Kante des Ankerelements entfernt, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Lassen Sie uns ein Beispiel für `anchor()` in Aktion betrachten. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext, der darüber und darunter platziert ist, um den Inhalt über seinen Container hinausragen und scrollen zu lassen. Wir geben dem Ankerelement auch den gleichen `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist mit dem Anker über den Ankernamen verknüpft und erhält eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften einbeziehen (die in horizontalen Links-nach-Rechts-Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind), haben wir sie an den Anker angebunden. Wir fügen der Infobox einen Rand hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Sehen wir uns die Positionierungserklärungen der Einrückungseigenschaften genauer an:

- `inset-block-start: anchor(end)`: Diese Einstellung setzt die Block-Startkante des positionierten Elements an die Block-Endkante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Diese Einstellung setzt die Inline-Startkante des positionierten Elements an die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies gibt uns folgendes Ergebnis:

{{EmbedLiveSample("`anchor()`-Beispiel", "100%", "250")}}

Das positionierte Element ist `5px` unterhalb und `5px` rechts des Ankerelements. Wenn Sie das Dokument auf und ab scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist an das Ankerelement fixiert, nicht am Viewport.

### Einstellen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft basiert auf dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das anker-positionierte Element in einem der neun Felder zu positionieren oder es über zwei oder drei Kacheln hinweg zu spannen.

![Das position-area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinaten-Entsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinaten-Entsprechungen wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [inhaltlichen Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelementes definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den inhaltlichen Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Span-Optionen, um die Region des Rasters zu definieren, in der das Element positioniert werden soll.

Beispielweise:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Feld.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Feld.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, wobei es zunächst in der Mitte platziert wird, und der andere gibt die Menge dieser Spalte an, die überspannt werden soll. Beispielweise:

- `top span-left` bewirkt, dass das positionierte Element in der obersten Reihe platziert wird und die Mitte und linke Kacheln dieser Reihe überspannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und die Mitte und x-end-Kacheln dieser Spalte überspannt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Endreihe des Blocks platziert wird und die Beginn-Spalte, Mitte und Ende-Spalten dieser Reihe überspannt.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert gesetzt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder ein Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` ist. Beispielsweise hat `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert auf den gleichen Wert gesetzt ist; beispielsweise hat `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die Referenzseite zum [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet das gleiche HTML und die Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um die `position-area`-Werte des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und wird mittels CSS dem Anker zugeordnet. Beim Laden wird sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden wird, was sie am oberen Rand des position-area-Rasters positioniert. Dies wird überschrieben, sobald Sie verschiedene Werte aus dem `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue aus dem `<select>`-Menü ausgewählte `position-area`-Werte auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü zu wählen, um die Auswirkung auf die Position der Infobox zu sehen:

{{EmbedLiveSample("Festlegen einer `position-area`", "100%", "250")}}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben die Dimensionierung absichtlich weggelassen, damit Sie das Verhalten beobachten können, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Dimensionierung in position-area-Rasterzellen platziert wird, richtet es sich mit dem angegebenen Rasterbereich aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird entsprechend seiner [Inhaltsgröße](/de/docs/Web/CSS/Guides/Display/Containing_block) dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde festgelegt, indem `position: fixed` gesetzt wurde. Auto-dimensionierte absolut und fest-positionierte Elemente sind automatisch dimensioniert und dehnen sich so weit aus, wie nötig, um den Textinhalt zu passen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Rasters mit einem beliebigen `left` oder `inline-start`-Wert platziert werden, bricht der Text um. Wenn die Größe des `max-content` des verankerten Elements schmaler oder kürzer als sein Anker ist, wächst es nicht, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, richtet es sich mit der angegebenen Rasterzelle aus und die Breite entspricht der des Ankerelementes. In diesem Fall beträgt seine Mindesthöhe die Größe des inhaltlichen Blocks des Ankerelementes. Es wird nicht überfließen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit ist wie das längste Wort.

## Zentrieren auf den Anker mit `anchor-center`

Obwohl Sie das anker-positionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Einrückungseigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. CSS-Anker-Positionierung bietet eine Möglichkeit, ein anker-positioniertes Element relativ zu seinem Ankerzentrum zu zentrieren, wenn Einrückungseigenschaften, anstelle von `position-area`, verwendet werden, um es zu binden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzfassungen) existieren, um Entwicklern das einfache Ausrichten von Elementen in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, zum Beispiel entlang der Hauptachse oder Querachse im Fall von Flexchild-Elementen. CSS-Anker-Positionierung stellt einen zusätzlichen Wert für diese Eigenschaften bereit, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an den unteren Rand des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Zentrum des Ankers zentriert ist:

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

Dies zentriert das anker-positionierte Element am unteren Rand seines Ankerknotens:

{{EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250")}}

## Dimensionierung von Elementen basierend auf der Größe des Ankers

Neben der Positionierung eines Elements relativ zur Position des Ankers, können Sie auch ein Element in seiner Größe relativ zur Größe des Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion in einem Dimensionierungseigenschaftwert verwenden.

Dimensionierungseigenschaften, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

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
  - : Der `<dashed-ident>`-Name, der als Wert der {{cssxref("anchor-name")}}-Eigenschaft des Ankers gesetzt ist, zu dem Sie das Element relatives ausrichten möchten. Wenn weggelassen, wird der **Standardanker** des Elements, der in der {{cssxref("position-anchor")}}-Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Anker-Elements an, zu der das positionierte Element in seiner Größe relativ ausgerichtet wird. Dies kann unter Verwendung physischer Werte (`width` oder `height`) oder logischer Werte (`inline`, `block`, `self-inline`, oder `self-block`) ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die zu verwendende Größe als Fallback-Wert an, falls das Element nicht absolut oder fest positioniert ist oder das Anker-Element nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu verändern.

Zum Beispiel, diese Regel dimensioniert die Breite des positionierten Elements gleich der Breite des Standardankerelementes:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der inline-Größe des Ankermodulelementes, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird mit dem Anker auf die gleiche Weise wie zuvor verknüpft. Diesmal jedoch binden wir es rechts vom Anker über eine `position-area` und geben ihm eine Breite, die dem Fünffachen der Breite des Ankers entspricht:

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

Darüber hinaus erhöhen wir die {{cssxref("width")}} des Ankerelementes bei Hover und Fokus und geben ihm eine {{cssxref("transition")}}, damit es eine Animation gibt, wenn sich der Zustand ändert.

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

Schweben Sie über das Ankerelement oder tabben Sie dazu - das positionierte Element wächst mit dem Anker, was demonstriert, dass die Größe des anker-positionierten Elements relativ zur seines Ankers ist:

{{EmbedLiveSample("Dimensionierung von Elementen basierend auf der Größe des Ankers", "100%", "250")}}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einrückungs- und Rand-Eigenschaften verwenden. Die Abschnitte unten erforschen diese Anwendungen detaillierter, bevor sie ein Anwendungsbeispiel bereitstellen.

### Positionierung von Elementen basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Einrückungseigenschaft")}}-Wertes verwenden, um Elemente basierend auf der Größe ihres Anker-Elements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sein Anker dies tut. Stattdessen wird das Element gemäß den normalen Regeln des [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer in der Nähe des Randes seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das anker-positionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich dessen Breite ändert.

### Einstellen des Randes von Elementen basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswertes verwenden, um Ränder von Elementen zu setzen, die auf der Größe ihres Anker-Elements basieren, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein in Fällen, in denen Sie den Rand eines anker-positionierten Elements immer gleich einer festen prozentualen Größe der Breite des Ankerelements setzen möchten, selbst wenn sich deren Größe ändert.

### Beispiel zu `anchor-size()`-Position und -Rand

Schauen wir uns ein Beispiel an, bei dem wir den Rand und die Position eines anker-positionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} groß genug zu machen, um das Scrollen zu verlangen, aber dies wurde der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf das Anker und die Infobox und enthalten eine {{cssxref("transition")}} auf dem Anker, damit Größenänderungen sanft animiert werden, wenn sich dessen Zustand ändert:

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er gehighlighted oder fokussiert ist. Wir setzen dann die Werte der Infobox:

- `top`-Wert auf `anchor(top)`. Dadurch bleibt die Oberseite der Infobox immer auf der Oberseite des Ankers ausgerichtet.
- `left`-Wert auf `anchor-size(width)`. Dies verursacht, dass die linke Seite der Infobox in dem angegebenen Abstand von der linken Kante seines nächsten positionierten Vorfahren positioniert wird. In diesem Fall entspricht der angegebene Abstand der Breite des Ankers und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left`-Wert zu `calc(anchor-size(width)/4)`. Dies verursacht, dass die Infobox immer einen linken Rand zur Trennung vom Anker und der Infobox hat, der einem Viertel der Breite des Ankers entspricht.

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

{{EmbedLiveSample("Nutzung der `anchor-size()`-Funktion", "100%", "240")}}

Versuchen Sie, das Ankerelement zu fokussieren oder mit der Maus darüber zu schweben und beachten Sie, wie sich die Position und der linke Rand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [Lernweb: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernweb: Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
