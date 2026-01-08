---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Das Modul zur **CSS-Ankerpositionierung** definiert Funktionen, mit denen Sie Elemente miteinander verknüpfen können. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in Bezug auf die Größe und Position der Ankerelemente, mit denen sie verbunden sind, eingestellt werden.

CSS-Ankerpositionierung bietet auch CSS-exklusive Mechanismen, um mehrere alternative Positionen für ein ankerpositioniertes Element anzugeben. Beispielsweise kann der Browser versuchen, ein Tooltip, das an einem Formularfeld verankert ist, aber andernfalls in seinen Standardeinstellungen außerhalb des Bildschirms angezeigt würde, in einer anderen vorgeschlagenen Position anzuzeigen, damit es sichtbar ist, oder es alternativ ganz zu verstecken.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Zuordnungs-, Positionierungs- und Größenfunktionen des Moduls auf einfache Weise verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes hier behandelte Konzept beigefügt. Informationen zum Festlegen alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr gebräuchlich, ein Element an ein anderes zu binden oder zu koppeln. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen angezeigt werden.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um weitere Informationen darüber zu geben.
- Einstellungs- oder Optionsdialoge, die für eine schnelle Konfiguration von UI-Elementen zugänglich sind.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch erzeugt – relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle wären relativ einfach zu erstellen, wenn sich das Element, mit dem es gekoppelt werden soll (aka das **Ankerelement**), immer an derselben Stelle in der Benutzeroberfläche befände und das gekoppelte Element (aka das **ankerpositionierte Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings ist das selten so einfach.

Der Standort der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z.B. durch Scrollen, Ändern der Ansicht, Drag & Drop etc.). Beispielsweise kann es sein, dass ein Element wie ein Formularfeld nahe an den Rand des Viewports gelangt, so dass sein Tooltip außerhalb des Bildschirms endet. Im Allgemeinen möchten Sie das Tooltip an das Formularfeld binden und sicherstellen, dass das Tooltip vollständig sichtbar im Bildschirmbereich bleibt, solange das Formularfeld sichtbar ist, und es bei Bedarf automatisch verschieben. Möglicherweise kennen Sie dieses Verhalten als Standardvorgehensweise in Ihrem Betriebssystem, wenn Sie mit der rechten Maustaste (<kbd>Strg</kbd> + Klick) Kontextmenüs auf Ihrem Desktop oder Laptop öffnen.

Historisch gesehen erforderte die Verknüpfung eines Elements mit einem anderen Element und die dynamische Änderung des Standorts und der Größe eines positionierten Elements basierend auf der Ankerposition JavaScript, was zu Komplexität und Leistungsproblemen führte. Es war auch nicht garantiert, dass dies in allen Situationen funktioniert. Mithilfe der im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen können solche Anwendungsfälle nun performanter und deklarativer mit CSS (und HTML) anstatt mit JavaScript implementiert werden.

## Zuordnung von Anker- und positionierten Elementen

Um ein Element einem Anker zuzuordnen, müssen Sie zuerst festlegen, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) mit diesem Anker verbunden werden sollen. Dies schafft eine Ankerreferenz zwischen den beiden. Diese Zuordnung kann explizit über CSS oder implizit erstellt werden.

### Explizite Zuordnung über CSS

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie ihm über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen zuweisen. Der Ankervame muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Die Umwandlung eines Elements in ein ankerpositioniertes Element erfordert zwei Schritte: Es muss absolut oder fix [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verbinden:

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

Dies wird folgendermaßen angezeigt:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun verbunden, aber momentan müssen Sie uns das glauben. Sie sind noch nicht miteinander gekoppelt – wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben, würde er sich eigenständig bewegen und die Infobox an derselben Stelle belassen. Sie werden die tatsächliche Kopplung in Aktion sehen, wenn wir uns die [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerzuordnung

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen hergestellt:

- Beim Verwenden der [Popover-API](/de/docs/Web/API/Popover_API) zur Zuordnung eines Popovers zu einem Steuerelement wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann passieren, wenn:
  - Deklarative Zuordnung eines Popovers zu einem Steuerelement unter Verwendung der [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute oder der [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` Attribute.
  - Programmatische Zuordnung einer Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zu einem Steuerelement unter Verwendung der `source`-Option.
- Ein {{htmlelement("select")}}-Element und dessen Dropdown-Auswahlfenster werden in die Funktionalität für [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft `base-select` eingebunden. In diesem Fall entsteht eine implizite Popover-Invoker-Beziehung zwischen den beiden, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden ordnen einem Anker ein Element zu, aber sie sind noch nicht miteinander gekoppelt. Um sie zusammenzukoppeln, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

### Entfernen einer Ankerzuordnung

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerzuordnung entfernen möchten, können Sie eine der folgenden Aktionen ausführen:

1. Setzen Sie den Wert der `anchor-name`-Eigenschaft des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element daran verankert wird.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf `none` oder auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`.

Im Fall von impliziten Ankerzuordnungen müssen Sie die zweite Methode verwenden – die erste Methode funktioniert nicht. Dies liegt daran, dass die Zuordnung intern gesteuert wird und Sie das `anchor-name` nicht über CSS entfernen können.

Um beispielsweise zu verhindern, dass das Auswahlelement eines anpassbaren `<select>`-Elements an das `<select>`-Element selbst gebunden wird, können Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: none;
}
```

## Ankerbereich

Wenn mehreren Ankerelementen derselbe {{cssxref("anchor-name")}}-Wert zugewiesen wird und ein positioniertes Element diesen Namen als {{cssxref("position-anchor")}}-Eigenschaftswert hat, wird das positionierte Element mit dem _letzten_ Ankerelement in der Quellreihenfolge mit diesem `anchor-name`-Wert verbunden.

Beispielsweise, wenn ein Dokument mehrere wiederholte Komponenten enthält, von denen jede ein positioniertes Element aufweist, das an einen Anker gekoppelt ist, werden alle positionierten Elemente an den letzten Anker auf der Seite gebunden, es sei denn, jede Komponente verwendet einen anderen Ankervornamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die {{cssxref("anchor-scope")}}-Eigenschaft kann dieses Problem beheben, indem die Sichtbarkeit oder "Geltungsbereich" eines `anchor-name`-Wertes auf einen bestimmten Teilbaum beschränkt wird. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Teilbaums des Elements, das den Bereich darauf gesetzt hat, gebunden werden kann.

- `anchor-scope: all` setzt den Bereich so, dass _alle_ `anchor-name`-Werte, die im Teilbaum gesetzt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können.
- `anchor-scope: --my-anchor, --my-anchor2` setzt den Bereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum gesetzt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können.
- `anchor-scope: none` ist der Standardwert; er gibt an, dass kein Ankerbereich festgelegt ist.

Angenommen, Sie haben mehrere Anker- und ankerpositionierte {{htmlelement("div")}}-Elemente innerhalb {{htmlelement("section")}}-Container:

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

Wir machen jedes `anchor`-`<div>` zu einem Ankerelement, indem wir ihnen einen `anchor-name` von `--my-anchor` geben. Dann positionieren wir jedes `positioned`-`<div>` relativ zu einem Element mit dem `--my-anchor`-Ankernamen, indem wir ihnen absolute Positionierung, einen `position-anchor`-Wert von `--my-anchor` und einen {{cssxref("position-area")}}-Wert von `right` geben. Schließlich setzen wir den Ankerbereich jedes `<section>`-Containers mit `anchor-scope: --my-anchor`:

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

Jedes positionierte Element ist relativ zum Anker innerhalb desselben `<section>`-Elements positioniert. Dies liegt daran, dass jedes `<section>`-Element einen `anchor-scope` von `--my-anchor` darauf gesetzt hat; positionierte Elemente innerhalb jedes abgegrenzten Containers können daher nur relativ zu `my-anchor`-Ankern innerhalb desselben Containers positioniert werden.

Wenn wir nicht `anchor-scope: --my-anchor` auf die Container gesetzt hätten, würden alle positionierten Elemente relativ zum letzten Anker auf der Seite positioniert.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir bereits gesehen haben, nützt es wenig, ein positioniertes Element mit einem Anker zu assoziieren. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch das Setzen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values) Wertes auf einer {{Glossary("Inset_properties", "Einsetzeigenschaft")}}, [Festlegung einer `position-area`](#setting_a_position-area) oder der Zentrierung des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> CSS-Ankerpositionierung bietet auch Mechanismen zur Festlegung von Fallback-Positionen, wenn die Standardposition des positionierten Elements dazu führt, dass es den Viewport überläuft. Siehe den [Leitfaden zu Fallback-Optionen und bedingtem Verstecken](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) für Details.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktionieren. Wenn es verborgen ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir besprechen, wie ein ankerpositioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Einsetzeigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fix positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Einsetzeigenschaften")}} gesetzt werden. Bei `position: absolute` ist dieser Einsatzpositionswert ein absoluter Abstand relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Einsatzpositionswert ein absoluter Abstand relativ zum Viewport.

CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker zu platzieren. Das Modul definiert die [`anchor()`-Funktion](/de/docs/Web/CSS/Reference/Values/anchor), die einen gültigen Wert für jede der Einsetzeigenschaften darstellt. Wenn sie verwendet wird, setzt die Funktion den Einsatzpositionswert als einen absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Funktionskomponenten sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner {{cssxref("position-anchor")}}-Eigenschaft referenziert wird oder mit dem Element über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut verbunden ist.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, stellt jedoch keine Elementzuordnung bereit. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Anfang (`0%`) und Ende (`100%`) der Achse der Einsetzeigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einsetzeigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der den Abstand als Fallback-Wert definiert, wenn das Element nicht absolut oder fix positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Einsetzeigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, basierend auf der Position des Ankers. Wenn Sie eine Länge oder Prozentangabe direkt auf eine Einsetzeigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist das gleiche Verhalten, das auftritt, wenn der `<anchor-side>`-Wert inkompatibel mit der Einsetzeigenschaft ist, auf der es gesetzt ist, und das Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Umgebungsblocks platzieren.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch oft ein {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen der Kante des Ankers und dem positionierten Element zu schaffen, oder `anchor()` in einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Anfangskante des Ankerelements und fügt den Abstand mithilfe der `calc()`-Funktion hinzu, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Lassen Sie uns ein Beispiel für `anchor()` in Aktion betrachten. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, allerdings mit etwas Textfüller darüber und darunter, um den Inhalt über seinen Container hinauslaufen und scrollen zu lassen. Wir geben dem Ankerelement auch denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker verbunden und wird fix positioniert. Durch die Aufnahme der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibrichtungen gleichwertig zu {{cssxref("top")}} und {{cssxref("left")}} sind), haben wir es an den Anker gekoppelt. Wir fügen der Infobox einen `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Betrachten wir die Einsetzeigenschafts-Positionierungsdeklarationen im Detail:

- `inset-block-start: anchor(end)`: Dies setzt die obere Blockkante des positionierten Elements an die Blockendkante des Ankerelements, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Anfangskante des positionierten Elements an die Inline-Endkante des Ankerelements, berechnet mit der `anchor(self-end)`-Funktion.

Dies führt zu folgendem Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument rauf- und runter-scrollen, hält das positionierte Element seine Position relativ zum Ankerelement – es ist am Ankerelement fixiert, nicht am Viewport.

### Festlegung einer `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zur Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft basiert auf dem Konzept eines 3x3 Gitters aus Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu platzieren oder es über zwei oder drei Kacheln zu erstrecken.

![Das Position-Bereichs-Gitter, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden vom [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Gitters vom umschließenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, wobei Spanning-Optionen verfügbar sind, um den Bereich des Gitters zu definieren, in dem das Element positioniert werden soll.

Beispielsweise:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Gitterspeicherplatz zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Kachel.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der unteren mittleren Kachel.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, und der andere gibt den Bereich an, den diese Spalte einnimmt. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert und über die mittleren und linken Kacheln dieser Reihe erstreckt wird.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert und über die mittleren und x-end-Kacheln dieser Spalte erstreckt wird.
- `block-end span-all` bewirkt, dass das positionierte Element in der Block-Endreihe platziert und über die Inline-Anfangs-, mittleren und Inline-Endkacheln dieser Reihe erstreckt wird.

Wenn Sie nur einen Wert angeben, unterscheidet sich der Effekt je nachdem, welcher Wert gesetzt ist:

- Ein physischer Seitwert (`top`, `bottom`, `left` oder `right`) oder ein Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` ist. Zum Beispiel gibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitwert (`start` oder `end`) wirkt so, als wäre der andere Wert auf denselben Wert gesetzt; zum Beispiel gibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als wären beide Werte auf `center` gesetzt (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`-Wert-Referenzseite](/de/docs/Web/CSS/Reference/Values/position-area_value) für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert wird die Deklaration ungültig machen.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dieselben HTML und Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox wird mit fester Positionierung versehen und mittels CSS mit dem Anker verknüpft. Bei der Ladung wird sie an den Anker mit `position-area: top;` gekoppelt, was bewirkt, dass sie oben im Position-Bereichs-Gitter positioniert wird. Diese Einstellung wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte, die aus dem `<select>`-Menü ausgewählt werden, auf die Infobox anzuwenden:

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

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben die Größenangabe absichtlich weggelassen, um Ihnen das verursachte Verhalten zu zeigen.

Wenn ein positioniertes Element ohne explizite Größenangabe in `position-area`-Gitterzellen platziert wird, wird es mit dem angegebenen Gitterbereich ausgerichtet und verhält sich so, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird gemäß seiner [umschließenden Blockgröße](/de/docs/Web/CSS/Guides/Display/Containing_block) dimensioniert, die die Breite seines Inhalts ist. Diese Größe wurde festgelegt, indem `position: fixed` gesetzt wurde. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so breit wie nötig aus, um den Textinhalt zu fassen, während sie durch den Rand des Viewports beschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Gitters mit einem `left` oder `inline-start`-Wert platziert werden, wird der Text umbrochen. Wenn die `max-content`-Größe des Ankerelements schmaler oder kürzer als sein Anker ist, wächst es nicht auf die Größe des Ankers.

Wenn das positionierte Element vertikal zentriert ist, zum Beispiel mit `position-area: bottom center`, wird es mit der angegebenen Gitterzelle ausgerichtet, und die Breite wird dieselbe wie die des Ankerelements sein. In diesem Fall entspricht seine Mindesthöhe der Größe des umschließenden Blocks des Ankerelements. Es wird nicht überlaufen, da das `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort ist.

## Zentrierung auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit dem `center`-Wert von `position-area` zentrieren können, bieten Einsetzeigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Einsetzeigenschaften anstelle von `position-area` verwendet werden, um es zu koppeln.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands) gibt es, um Entwicklern zu ermöglichen, Elemente in Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme, z.B. entlang der Haupt- oder Querachse bei Flex-Kindern, einfach zu ausrichten. CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element am Mittelpunkt seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und Basis-CSS wie das vorherige Beispiel. Die Infobox wird mit fester Positionierung versehen und an die Unterkante des Ankers gekoppelt. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Anker zentriert wird:

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

{{ EmbedLiveSample("Zentrierung auf den Anker mit `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers bestimmen, indem Sie die [`anchor-size()`-Funktion](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb eines Größenwerte verwenden.

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
  - : Der `<dashed-ident>`-Name, der als Wert der {{cssxref("anchor-name")}}-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie das Element relativ dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der der Anker ist, der in der {{cssxref("position-anchor")}}-Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, die das positionierte Element relativ dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe als Fallback-Wert an, wenn das Element nicht absolut oder fixiert positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die Größe zu ändern, die auf das positionierte Element angewendet wird.

Zum Beispiel, diese Regel dimensioniert die Breite des positionierten Elements gleich der Breite des Standardankerelements:

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

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut erhält, um es fokussierbar zu machen. Die Infobox wird mit fester Positionierung versehen und in der gleichen Weise wie zuvor mit dem Anker verbunden. Allerdings koppeln wir sie diesmal über eine `position-area` an die rechte Seite des Ankers und geben ihr eine Breite, die das fünffache der Breite des Ankers beträgt:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankers bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm einen {{cssxref("transition")}}, damit er beim Zustandswechsel animiert wird.

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

Fahren Sie über oder wechseln Sie zur Ankerelement - das positionierte Element wächst im Verhältnis zum Anker, was zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Dimensionieren von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einsetz- und Rand-Eigenschaften verwenden. Die folgenden Abschnitte erkunden diese Verwendungen im Detail, bevor sie ein Anwendungsbeispiel liefern.

### Positionieren des Elementes basierend auf der Ankergröße

Sie können die [`anchor-size()`-Funktion](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb eines {{Glossary("Inset_properties", "Einsetzwertes")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`-Funktion](/de/docs/Web/CSS/Reference/Values/anchor) oder die {{cssxref("position-area")}}-Eigenschaft es tun (siehe [Positionieren von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird sich nicht ändern, wenn sich sein Anker tut. Stattdessen wird das Element gemäß den normalen Regeln für [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Wenn beispielsweise Ihr Ankerelement nur vertikal bewegt werden kann und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich die Breite des Ankers ändert.

### Einstellung des Elementrandes basierend auf der Ankergröße

Sie können die [`anchor-size()`-Funktion](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb eines `margin-*`-Eigenschaftswertes verwenden, um Elementränder basierend auf der Größe ihres Ankerelements zu setzen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie möchten, dass der Rand eines ankerpositionierten Elements immer gleich dem gleichen Prozentsatz der Breite des Ankerelements ist, selbst wenn sich die Breite ändert.

### `anchor-size()` Positions- und Randbeispiel

Lassen Sie uns ein Beispiel durchgehen, bei dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements einstellen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor` und eines `infobox`, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, damit es über die Tastatur fokussierbar ist. Wir fügen auch ein Füllertext hinzu, um den {{htmlelement("body")}} so hoch zu machen, dass Scrollen erforderlich ist, aber dieser Text wurde der Kürze halber ausgeblendet.

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

In der CSS deklarieren wir zuerst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}}-Dimensionen auf dem Anker und der Infobox und fügen einen {{cssxref("transition")}} auf dem Anker ein, so dass Breitenänderungen beim Zustandsübergang sanft animiert werden:

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er schwebt oder fokussiert wird. Wir setzen dann:

- den `top`-Wert der Infobox auf `anchor(top)`. Dadurch bleibt die Oberseite der Infobox immer mit der Oberseite des Ankers gleichauf.
- den `left`-Wert der Infobox auf `anchor-size(width)`. Dadurch wird die linke Seite der Infobox den spezifizierten Abstand von der linken Kante ihres nächstgelegenen positionierten Vorfahren entfernt positioniert. In diesem Fall ist der spezifizierte Abstand gleich der Breite des Ankerelements und der nächstgelegene positionierte Vorfahre ist das `<body>`-Element, so dass die Infobox rechts des Ankers erscheint.
- den `margin-left`-Wert der Infobox auf `calc(anchor-size(width)/4)`. Dadurch hat die Infobox immer einen linken Rand, der sie von dem Anker trennt, gleich einem Viertel der Breite des Ankers.

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

{{EmbedLiveSample("Grundlegende `anchor-size()` Verwendung", "100%", "240")}}

Versuchen Sie, zum Anker zu springen oder ihn mit der Maus zu überfliegen, und beachten Sie, wie die Position und der linke Rand der Infobox proportional zur Breite des Ankerelements wachsen.

## Siehe auch

- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größenbestimmung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
