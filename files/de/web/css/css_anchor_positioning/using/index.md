---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der ankerpositionierten Elemente kann dann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

Die CSS-Ankerpositionierung bietet auch ausschließlich durch CSS umsetzbare Mechanismen zur Spezifikation mehrerer alternativer Positionen für ein ankerpositioniertes Element. Beispielsweise kann, wenn ein Tooltip an ein Formularfeld angeheftet ist, jedoch aufgrund der Standardeinstellungen für die Positionierung außerhalb des Bildschirms gerendert würde, der Browser versuchen, ihn an einer anderen vorgeschlagenen Position zu rendern, um ihn sichtbar zu machen oder ihn alternativ vollständig auszublenden, wenn gewünscht.

Dieser Artikel erläutert die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenmerkmale des Moduls auf einfachem Niveau verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails zu jedem unten diskutierten Konzept beigefügt. Informationen zur Spezifikation alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes zu binden oder zu verknüpfen. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen angezeigt werden.
- Tooltips oder Infoboxen, die neben einem UI-Element aufklappen, um zusätzliche Informationen bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche angezeigt werden.

Moderne Schnittstellen erfordern häufig die Platzierung von bestimmten Inhalten — oft wiederverwendbar und dynamisch erzeugt — relativ zu einem Ankerelement. Die Erstellung solcher Anwendungsfälle wäre relativ einfach, wenn das Element, an das angeheftet werden soll (auch bekannt als **Ankerelement**), immer am selben Ort im UI wäre und das angeheftete Element (auch bekannt als **ankerpositioniertes Element** oder einfach **positioniertes Element**) immer direkt davor oder dahinter in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Position relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn das Ankerelement sich bewegt oder anderweitig konfiguriert wird (z.B. durch Scrollen, Ändern der Größe des Viewports, Drag & Drop etc.). Beispielsweise kann eine Tooltip offscreen enden, wenn ein EHlement wie ein Formularfeld sich nahe am Rand des Viewports befindet. Im Allgemeinen möchte man das Tooltip mit seinem Formularsteuerelement verknüpfen und sicherstellen, dass die Tooltip auf dem Bildschirm sichtbar bleibt, solange das Formularfeld sichtbar ist, und automatisch verschiebt, falls nötig. Dies ist Ihnen möglicherweise als das Standardverhalten Ihres Betriebssystems aufgefallen, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit einem Rechtsklick (<kbd>Ctrl</kbd> + Klick) aufrufen.

Historisch erforderte die Verknüpfung eines Elements mit einem anderen Element und die dynamische Änderung der Position und Größe eines positionierten Elements auf Basis der Ankerposition JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen es, solche Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript zu implementieren.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) mit diesem Anker verknüpft werden sollen. Dies erzeugt eine Ankerreferenz zwischen den beiden. Diese Verknüpfung kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerverknüpfung

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie ihm einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der besser den Verankerungseffekt demonstriert.

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

Die Umwandlung eines Elements in ein ankerpositioniertes Element erfordert zwei Schritte: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden zu verknüpfen:

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

Das wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun verknüpft, aber im Moment müssen Sie uns diesbezüglich vertrauen. Sie sind noch nicht miteinander verankert — wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich allein bewegen und die Infobox am selben Ort zurücklassen. Sie werden das tatsächliche Verankern in Aktion sehen, wenn wir uns die [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerverknüpfung

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung automatisch eine implizite Ankerreferenz zwischen zwei Elementen hergestellt:

- Bei Verwendung der [Popover API](/de/docs/Web/API/Popover_API), um ein Popover mit einem Steuerelement zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann geschehen, wenn:
  - Ein Popover mithilfe der [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)- und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute oder der [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- und `id`-Attribute deklarativ mit einem Steuerelement verknüpft wird.
  - Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmgesteuert mit einem Steuerelement über die `source`-Option verknüpft wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker werden über den {{cssxref("appearance")}}-Eigenschaftswert `base-select` in die Funktionalität [anpassbares Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) eingebunden. In diesem Fall wird eine implizite Popover-Initiator-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie eine implizite Ankerreferenz aufweisen.

> [!NOTE]
> Die oben genannten Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht verankert. Um sie zu verankern, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

### Entfernung einer Ankerverknüpfung

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerverknüpfung entfernen möchten, können Sie eine der folgenden Möglichkeiten wählen:

1. Setzen Sie den Wert der `anchor-name`-Eigenschaft des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element an diesen verankert wird.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf einen Anchornamen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`.

Im Falle impliziter Ankerverknüpfungen müssen Sie jedoch die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies liegt daran, dass die Verknüpfung intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Zum Beispiel, um zu verhindern, dass der Picker eines anpassbaren `<select>`-Elements an das `<select>`-Element selbst verankert wird, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Verknüpfung eines positionierten Elements mit einem Anker alleine nicht wirklich von Nutzen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugeordneten Ankerelement zu platzieren. Dies geschieht entweder, indem ein [CSS `anchor()`-Funktionswert](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}} gesetzt, [eine `position-area` spezifiziert](#setting_a_position-area) oder das positionierte Element mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center) zentriert wird.

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zur Spezifikation von Fallback-Positionen, wenn die Standardposition des positionierten Elements zu einem Überlaufen des Viewports führt. Weitere Details finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktionieren. Wenn es ausgeblendet ist (z.B. durch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir besprechen, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit durch das Setzen von {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} positioniert. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Ankerpositionierung verändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Rändern ihrer zugeordneten Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ positioniert wird, und der Abstand von dieser Seite definiert wird.

Die Komponenten der Funktion sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name)-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **standardmäßige Anker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft referenziert wird oder der nicht standardmäßigen [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut zugeordnet ist.
    > [!NOTE]
    > Das Spezifizieren eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementverknüpfung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder den Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left` etc.) oder logische (`start`, `self-end` etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, das den Abstand definiert, der als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie einen Längen- oder Prozentsatz direkt auf eine Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das auftritt, wenn der `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist, auf der er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Enthaltenen Blocks platzieren.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch oft entweder eine {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und des positionierten Elements zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um etwas Platz zwischen den Rändern zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keine Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Sehen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, jedoch mit etwas Fülltext darunter und darüber, um zu bewirken, dass der Inhalt seinen Container überläuft und rollt. Wir geben dem Ankerelement auch den gleichen `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker verbunden und erhält eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibmodi {{cssxref("top")}} und {{cssxref("left")}} entsprechen) einschließen, haben wir sie an den Anker gebunden. Wir fügen der Infobox ein `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Inset-Eigenschaft-Positionierungsdeklarationen genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die Block-Startkante des positionierten Elements an die Block-Ende-Kante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements an die Inline-Ende-Kante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts von dem Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement positioniert — es ist an das Ankerelement und nicht an den Viewport gebunden.

### Festlegung eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zur Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft funktioniert nach dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln erstrecken zu lassen.

![Das position-area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physikalischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, sowie Koordinatenäquivalente wie `y-start`, `center`, und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, sowie Koordinatenäquivalente wie `x-start`, `center`, und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [Enthaltenen Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Hauptelementblock des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, wobei Spannungsoptionen verfügbar sind, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrat zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert wird, wobei es zunächst in der Mitte platziert wird, und der andere bestimmt den zu streckenden Teil dieser Spalte. Zum Beispiel:

- `top span-left` verursacht, dass das positionierte Element in der oberen Reihe platziert wird und sich über die Mitte und die linken Kacheln dieser Reihe erstreckt.
- `y-end span-x-end` verursacht, dass das positionierte Element am Ende der y-Spalte platziert wird und sich über die Mitte und die x-end-Kacheln dieser Spalte erstreckt.
- `block-end span-all` verursacht, dass das positionierte Element in der Block-Ende-Reihe platziert wird und sich über die inline-start, center und inline-end Kacheln dieser Reihe erstreckt.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich, je nachdem, welcher Wert gesetzt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` wäre. Zum Beispiel gibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf den gleichen Wert gesetzt wäre; zum Beispiel gibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt wären (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physikalischen Wert macht die Aussage ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet das gleiche HTML und die gleichen Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element enthalten haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox hat eine feste Positionierung und ist mit dem Anker über CSS verbunden. Beim Laden ist sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden ist, was dazu führt, dass sie oben im position-area-Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um zu sehen, welche Auswirkungen sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Setting a `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Dimensionen des positionierten Elements in keiner Dimension ausdrücklich festgelegt. Wir haben bewusst die Größenangabe weggelassen, damit Sie das Verhalten beobachten können, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangabe in `position-area`-Rasterzellen platziert wird, richtet es sich am angegebenen Rasterbereich aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird in seiner [Enthaltenen Block](/de/docs/Web/CSS/Guides/Display/Containing_block)-Größe bemessen, das ist die Breite seines Inhalts. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert, erstrecken sich so weit wie nötig, um den Textinhalt zu passen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall wird der Text, wenn er auf der linken Seite des Rasters mit einem Wert von `left` oder `inline-start` platziert ist, umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als der Anker ist, wachsen sie nicht, um die Größe des Ankers anzupassen.

Wenn das positionierte Element vertikal zentriert wird, wie z.B. mit `position-area: bottom center`, richtet es sich mit der angegebenen Rasterzelle aus und die Breite ist die gleiche wie das Ankerelement. In diesem Fall ist seine Mindesthöhe die Enthalteblockgröße des Ankerelements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort ist.

## Zentrierung auf dem Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften kombiniert mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften, anstelle von `position-area`, verwendet werden, um es zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente einfach im Inline- oder Block-Bereich innerhalb verschiedener Layoutsysteme zu justieren, z.B. entlang der Haupt- oder Querachse im Falle von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und Basis-CSS wie das vorherige Beispiel. Die Infobox gibt eine feste Positionierung an und ist an die untere Kante des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf dem Zentrum des Ankers zentriert ist:

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

Dies zentriert das ankerpositionierte Element unten auf seinem Anker:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Außerdem können Sie ein Element relativ zur Größe seines Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Größenwertes einer Eigenschaft verwenden.

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

`anchor-size()`-Funktionen werden in {{cssxref("length")}}-Werte aufgelöst. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, auf das Sie das Element größenmäßig beziehen wollen. Wenn weggelassen, wird der **Standardanker** des Elements, das ist der Anker, der in der [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, auf die das positionierte Element größenmäßig bezug nimmt. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die Größe anzupassen, die auf das positionierte Element angewendet wird.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Sehen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox hat eine feste Positionierung und ist mit dem Anker auf die gleiche Weise wie zuvor verbunden. Dieses Mal binden wir sie jedoch an die rechte Seite des Ankers mit einem `position-area` und geben ihr eine Breite von fünfmal der Breite des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements beim {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm einen {{cssxref("transition")}} damit es animiert, wenn sich der Zustand ändert.

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

Fahren Sie über das Ankerelement oder navigieren Sie mit der Tastatur zu ihm — das positionierte Element wächst, während der Anker wächst, und demonstriert, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte erkunden diese Verwendungen ausführlicher, bevor sie ein Beispiel für die Verwendung bereitstellen.

### Positionierung von Elementen basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines [Inset-Eigenschafts]-Wertes verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft es tun (siehe [Positioning elements relative to their anchor](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element ändert seine Position nicht, wenn sein Anker dies tut. Stattdessen wird das Element entsprechend den normalen Regeln der [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) Positionierung positioniert.

Dies kann in bestimmten Situationen nützlich sein. Wenn Ihr Ankerelement beispielsweise nur vertikal bewegt werden kann und immer entlang des Rands seines nächstgelegenen positionierten Vorvor jedes horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich die Ankerbreite ändert.

### Setzen des Elementabstands basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementmarines auf Basis der Größe ihres Ankerelements einzustellen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie den Abstand eines ankerpositionierten Elements immer gleich dem gleichen Prozentsatz der Ankerbreite setzen möchten, selbst wenn sich die Breite ändert.

### Beispiel Position und Abstand `anchor-size()`

Sehen wir uns ein Beispiel an, bei dem wir den Abstand und die Position eines ankerpositionierten Elements relativ zur Größe des Ankerelements einstellen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussierbar ist. Wir fügen auch Fülltext ein, um das {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, allerdings wurde dies zur Kürze versteckt.

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

Im CSS deklarieren wir zunächst das `anchor`-`<div>`-Element als Ankerelement, indem wir ihm ein {{cssxref("anchor-name")}} zuweisen. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist mit dem Ankerelement über seine {{cssxref("position-anchor")}}-Eigenschaft verbunden. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf dem Anker und der Infobox und fügen einen {{cssxref("transition")}} auf den Anker hinzu, sodass Größenänderungen sanft animiert werden, wenn sich sein Zustand ändert:

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

Jetzt zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er überfahren oder fokussiert wird. Wir setzen dann den `top`-Wert der Infobox auf `anchor(top)`. Dies führt dazu, dass der obere Teil der Infobox immer mit dem oberen Teil des Ankers übereinstimmt:

- Der `left`-Wert wird auf `anchor-size(width)` gesetzt. Dies führt dazu, dass der linke Teil der Infobox in der angegebenen Entfernung vom linken Rand seines nächstgelegenen positionierten Vorfahren positioniert wird. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements und der nächstgelegene positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- Der `margin-left`-Wert wird auf `calc(anchor-size(width)/4)` gesetzt. Dies führt dazu, dass die Infobox immer eine linke Trennung vom Anker hat, die einem Viertel der Breite des Ankers entspricht.

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

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

Versuchen Sie, zum Anker zu navigieren oder mit der Maus darüberzufahren, und beachten Sie, wie sich die Position und der linke Abstand der Infobox im Verhältnis zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
