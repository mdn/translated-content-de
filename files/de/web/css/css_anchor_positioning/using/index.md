---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das **CSS Anchor Positioning**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerverknüpfte Elemente** definiert werden. Ankerverknüpfte Elemente können an Ankerelemente gebunden werden. Die ankerverknüpften Elemente können dann in ihrer Größe und Position relativ zur Größe und dem Standort der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Die CSS-Ankerpositionierung bietet auch reine CSS-Mechanismen zur Angabe mehrerer alternativer Positionen für ein ankerverknüpftes Element. Beispielsweise kann der Browser, wenn ein Tooltip an ein Formularfeld verankert ist, aber der Tooltip in seiner Standardpositionierungseinstellung außerhalb des Bildschirms gerendert würde, versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm platziert wird, oder ihn alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie das Modul für die Verbindung, Positionierung und Größenanpassung auf grundlegender Ebene verwendet wird. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten besprochene Konzept hinzugefügt. Informationen zum Festlegen alternativer Positionen und zum Ausblenden von ankerverknüpften Elementen finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr häufig, dass man ein Element an ein anderes binden oder koppeln möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um weitere Informationen zu liefern.
- Einstellungs- oder Optionsdialoge, die zugänglich sind, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte – oft wiederverwendbare und dynamisch erzeugte – relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle zu erstellen, wäre ziemlich einfach, wenn das Element, an das man koppeln möchte (alias das **Ankerelement**), immer an derselben Stelle in der Benutzeroberfläche wäre und das gekoppelte Element (alias das **ankerpositionierte Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Aber die Dinge sind selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anders konfiguriert wird (z. B. durch Scrollen, Ändern der Viewport-Größe, Drag & Drop usw.). Beispielsweise, wenn sich ein Element wie ein Formularfeld der Kante des Viewports nähert, könnte sein Tooltip am Ende außerhalb des Bildschirms sein. Im Allgemeinen möchten Sie den Tooltip an sein Formularsteuerungselement binden und sicherstellen, dass der Tooltip so lange vollständig sichtbar auf dem Bildschirm bleibt, wie das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Dies haben Sie möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs mit der rechten Maustaste (<kbd>Ctrl</kbd> + Klick) auf Ihrem Desktop oder Laptop öffnen.

Historisch gesehen erforderte die Assoziation eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Anker-Elements JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Umsetzung solcher Anwendungsfälle leistungsfähig und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) Sie mit diesem Anker assoziieren möchten. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Anker-Assoziation

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie ihm über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen zuweisen. Der Ankernamen muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) sein, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu assoziieren:

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

{{ EmbedLiveSample("Methode nur mit CSS", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns dabei einfach vertrauen. Sie sind noch nicht aneinander gebunden — wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich von alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden das tatsächliche Koppeln in Aktion sehen, wenn wir uns ansehen, wie man [Elemente basierend auf der Ankerposition positioniert](#positionierung_von_elementen_relativ_zu_ihrem_anker).

### Implizite Anker-Assoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen erstellt:

- Bei Verwendung der [Popover-API](/de/docs/Web/API/Popover_API), um ein Popover mit einer Steuerung zu assoziieren, wird eine implizite Ankerreferenz zwischen den beiden erstellt. Dies kann passieren, wenn:
  - Deklaratives Assoziieren eines Popovers mit einer Steuerung unter Verwendung der Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder der Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id`.
  - Programmatisches Assoziieren einer Popover-Aktion wie z.B. [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einer Steuerung unter Verwendung der `source`-Option.
- Ein {{htmlelement("select")}}-Element und dessen Dropdown-Auswahl sind in die Funktionalität [anpassbares Auswahl-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft `base-select` eingebunden. In diesem Fall wird eine implizite Popover-Aufrufer-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht gekoppelt. Um sie zusammenzukoppeln, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

### Entfernen einer Anker-Assoziation

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Anker-Assoziation entfernen möchten, können Sie eines der folgenden tun:

1. Setzen Sie den Wert der `anchor-name`-Eigenschaft des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element daran verankert wird.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`.

Im Fall von impliziten Anker-Assoziationen müssen Sie jedoch die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies liegt daran, dass die Assoziation intern gesteuert wird und Sie die `anchor-name`-Eigenschaft nicht über CSS entfernen können.

Beispielsweise könnten Sie die folgende Regel verwenden, um zu verhindern, dass der Picker eines anpassbaren `<select>`-Elements an das `<select>`-Element selbst gebunden wird:

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Assoziation eines positionierten Elements mit einem Anker alleine nicht wirklich nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies geschieht entweder durch Festlegung eines [CSS `anchor()`-Funktionswerts](#using_inset_properties_with_anchor_function_values) für eine {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, durch [Festlegung eines `position-area`](#setting_a_position-area), oder durch Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zur Angabe von Fallback-Positionen, wenn die Standardposition des positionierten Elements dazu führt, dass es über den Viewport hinausgeht. Details finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es versteckt ist (z. B. durch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie ein ankerverknüpftes Element ausgeblendet wird, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fest positionierte Elemente werden explizit positioniert, indem sie {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte für {{Glossary("inset_properties", "Inset-Eigenschaften")}} festlegen. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma, indem sie es ermöglicht, dass ankerverknüpfte Elemente relativ zu den Kanten ihrer assoziierten Anker positioniert werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei der Verwendung legt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement fest, indem sie das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ positioniert wird, und den Abstand von dieser Seite definiert.

Die Funktionskomponenten sehen wie folgt aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name)-Eigenschaftswert des Ankerelements, relativ zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den seine [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft verweist oder der mit dem Element über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut assoziiert ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Element-Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse des Inset-Attributs, auf dem `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Eine {{cssxref("length-percentage")}}, die den zu verwendenden Abstand als Fallback-Wert definiert, wenn das Element nicht absolut oder fest positioniert ist, wenn der `<anchor-side>`-Wert, der verwendet wird, nicht mit der Inset-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie einen Längen- oder Prozentsatz direkt auf die Inset-Eigenschaft eines ankerverknüpften Elements setzen, wird es so positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist das gleiche Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der es gesetzt ist, nicht kompatibel ist und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem Boden des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen enthaltenden Blocks platzieren.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig entweder eine {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen der Kante des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Beispielsweise positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Blockende-Kante des positionierten Elements `10px` von der logischen Blockstart-Kante des Ankerelements entfernt und fügt den Abstand mithilfe der `calc()`-Funktion hinzu, sodass wir keine zusätzliche Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber platziert, um den Inhalt über seinen Container hinausfließen zu lassen und zu scrollen. Wir geben auch dem Ankerelement den gleichen `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist mit dem Anker über den Ankernamen verbunden und erhält eine feste Positionierung. Durch die Einbeziehung der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}}-Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir es an den Anker gebunden. Wir fügen der Infobox eine `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Inset-Positionsdeklarationen im Detail an:

- `inset-block-start: anchor(end)`: Dies setzt die Blockstartkante des positionierten Elements auf die Blockendkante des Ankers, berechnet mit der Funktion `anchor(end)`.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der Funktion `anchor(self-end)`.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei – es ist am Ankerelement fixiert, nicht am Viewport.

### Festlegen einer `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft arbeitet auf dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Mit der `position-area`-Eigenschaft kann das ankerpositionierte Element in einer der neun Kacheln positioniert oder über zwei oder drei Kacheln gespannt werden.

![Das position-area Gitter, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Gitterkacheln sind in Reihen und Spalten aufgeteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Gitters durch den umgebenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten, die auf den oben beschriebenen Reihen- und Spaltenwerten basieren, mit Spannungsoptionen, um die Region des Gitters zu definieren, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Gittersquare zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Kachel.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Square.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, und der andere gibt die Menge dieser Spalte an, die abgedeckt werden soll. Zum Beispiel:

- `top span-left` lässt das positionierte Element in der oberen Reihen platziert werden und über die mittleren und linken Kacheln der Reihe gespannen werden.
- `y-end span-x-end` lässt das positionierte Element am Ende der y-Spalte platziert werden und über die mittleren und x-end Kacheln der Spalte gespannen werden.
- `block-end span-all` lässt das positionierte Element in der Block-End-Reihe platziert werden und über die Inline-Start-, Mitten- und Inline-End-Kacheln der Reihe gespannen werden.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert festgelegt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` wäre. Zum Beispiel gibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert auf denselben Wert gesetzt wäre; zum Beispiel gibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wertereferenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und wird mittels CSS mit dem Anker assoziiert. Beim Laden ist es so eingestellt, dass es mit `position-area: top;` an den Anker gebunden ist, wodurch es am oberen Ende des Position-Area-Gitters positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>` Menü auswählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Festlegen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Dimensionen des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben die Größenangabe absichtlich weggelassen, damit Sie das Verhalten beobachten können, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangabe in `position-area`-Gitterzellen platziert wird, richtet es sich an dem angegebenen Gitterbereich aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird entsprechend der Größe seines [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie nötig, um den Textinhalt zu passen, während sie durch die Kante des Viewports eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Gitters mit einem beliebigen `left` oder `inline-start`-Wert platziert sind, bricht der Text um. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer ist als der Anker, werden sie nicht wachsen, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert wird, z. B. mit `position-area: bottom center`, richtet es sich an die angegebene Gitterzelle aus und die Breite entspricht der des Ankerelements. In diesem Fall ist seine minimale Höhe die Größe des umgebenden Blocks des Ankerelements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort ist.

## Zentrieren am Anker mit `anchor-center`

Obwohl Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften, kombiniert mit der `anchor()`-Funktion, mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um zu koppeln.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente leicht in der Inline- oder Block-Richtung in verschiedenen Layout-Systemen zu positionieren, zum Beispiel entlang der Haupt- oder Querachse im Falle von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und Basis-CSS wie das vorherige Beispiel. Die Infobox wird mit fester Positionierung versehen und an der unteren Kante des Ankers gekettet. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Zentrum des Ankers zentriert ist:

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

{{ EmbedLiveSample("Zentrieren am Anker mit `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch ein Element relativ zur Größe seines Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenwertes verwenden.

Eigenschaften zur Größenbestimmung, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

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

`anchor-size()`-Funktionen werden in {{cssxref("length")}}-Werte aufgelöst. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name)-Eigenschaft des Ankerelements gesetzt wird, relativ zu dem Sie die Dimensionierung des Elements vornehmen möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der der Anker ist, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft verwiesen wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe als Fallback-Wert an, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die angewendete Größe auf das positionierte Element zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements auf die Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inlineseite des positionierten Elements auf das Vierfache der Inlineseite des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox wird mit fester Positionierung versehen und auf die gleiche Weise wie zuvor mit dem Anker verbunden. Dieses Mal binden wir es jedoch an die rechte Seite des Ankers mit `position-area` und geben ihm eine Breite, die das Fünffache der Breite des Ankers beträgt:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm einen {{cssxref("transition")}}, sodass es beim Zustandswechsel animiert.

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

Fahren Sie mit der Maus über das Ankerelement oder verwenden Sie die Tabulatortaste — das positionierte Element wächst, während der Anker wächst, und zeigt somit, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Größen von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Andere Anwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte erkunden diese Anwendungen im Detail, bevor sie ein Anwendungsbeispiel liefern.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Attribut")}}-Wertes verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element ändert seine Position nicht, wenn sein Anker dies tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute)- oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed)-Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Beispielsweise, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer in der Nähe der Kante seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerverknüpfte Element immer rechts von seinem Anker positioniert zu haben, selbst wenn sich die Ankerbreite ändert.

### Festlegen der Elementmarge basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswertes verwenden, um Elementmargen basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie die Marge eines ankerverknüpften Elements immer auf denselben Prozentsatz der Breite des Ankerelements festlegen möchten, auch wenn sich die Breite ändert.

### `anchor-size()`-Positions- und Margin-Beispiel

Schauen wir uns ein Beispiel an, bei dem wir die Marge und Position eines ankerverknüpften Elements relativ zur Breite des Ankerelements festlegen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} hoch genug zu machen, um das Scrollen zu erfordern, aber dieser wurde aus Gründen der Kürze verborgen.

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

Im CSS deklarieren wir zuerst die `<div>`-Elemente als Ankerelemente, indem wir ihnen einen {{cssxref("anchor-name")}}-Wert geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir legen auch eine absolute {{cssxref("height")}} und {{cssxref("width")}} auf den Anker und die Infobox fest und fügen eine {{cssxref("transition")}} auf dem Anker hinzu, damit Breitenänderungen sanft animiert werden, wenn sich der Zustand ändert:

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

Nun zu dem interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn es überfahren oder fokussiert wird. Wir setzen dann die:

- `top`-Wert der Infobox auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Infobox immer mit der Oberseite des Ankers ausgerichtet ist.
- `left`-Wert der Infobox auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Infobox den angegebenen Abstand von der linken Kante ihres nächsten positionierten Vorfahren entfernt ist. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left`-Wert der Infobox zu `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer eine linke Margenabstand zu dem Anker hat, die einem Viertel der Breite des Ankers entspricht.

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

Versuchen Sie, zum Anker zu wechseln oder ihn mit dem Mauszeiger zu überfahren, und beachten Sie, wie sich die Position und linke Marge der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte-Modul](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Lernen: Größen von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
