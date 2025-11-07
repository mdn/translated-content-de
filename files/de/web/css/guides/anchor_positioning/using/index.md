---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul für **CSS-Ankerpositionierung** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der gebundenen Ankerelemente festgelegt werden.

Die CSS-Ankerpositionierung bietet auch Mechanismen, um ausschließlich mit CSS mehrere alternative Positionen für ein ankerpositioniertes Element anzugeben. Beispielsweise, wenn ein Tooltip an ein Formularfeld angehängt ist, dieser jedoch bei den Standardpositionseinstellungen von der Seite gerendert würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, damit er sichtbar ist, oder ihn alternativ vollständig ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwenden. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes behandelte Konzept eingefügt. Informationen zur Angabe alternativer Positionen und zum Ausblenden ankerpositionierter Elemente finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr verbreitet, dass ein Element an ein anderes angeheftet oder gebunden werden soll. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen angezeigt werden.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um mehr Informationen darüber zu bieten.
- Einstellungen oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte — oft wiederverwendbar und dynamisch erzeugt — relativ zu einem Ankerelement positioniert werden. Wenn das Element, an das angeheftet werden soll (das sogenannte **Ankerelement**), immer am selben Ort in der UI wäre und das angeheftete Element (das sogenannte **ankerpositionierte Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte, wäre die Erstellung solcher Anwendungsfälle ziemlich einfach. Die Dinge sind jedoch selten so einfach.

Die Lage der positionierten Elemente muss relativ zu ihrem Ankerelement beibehalten und angepasst werden, während sich das Ankerelement bewegt oder sonst wie konfiguriert wird (z. B. durch Scrollen, Änderung der Ansichtsgröße, Drag & Drop, etc.). Beispielsweise, wenn ein Element wie ein Formularfeld nahe an den Rand des Ansichtsfensters kommt, kann sein Tooltip außerhalb des Bildschirms angezeigt werden. Generell möchten Sie den Tooltip an das zugehörige Formularsteuerelement binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und ihn bei Bedarf automatisch verschieben. Sie mögen dies als das Standardverhalten in Ihrem Betriebssystem bemerkt haben, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop durch Rechtsklick (<kbd>Strg</kbd> + Klick) öffnen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen es, solche Anwendungsfälle performant und deklarativ mit CSS (und HTML) statt mit JavaScript umzusetzen.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst erklären, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) mit diesem Anker verknüpft werden sollen. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Verknüpfung kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerverknüpfung

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie einen Ankernamen über die Eigenschaft {{cssxref("anchor-name")}} darauf setzen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Verankerungseffekt besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) mittels der Eigenschaft {{cssxref("position")}} sein. Das positionierte Element hat dann seine Eigenschaft {{cssxref("position-anchor")}} auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verbinden:

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

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun verknüpft, aber vorerst müssen Sie uns dabei vertrauen. Sie sind noch nicht aneinander gebunden — wenn Sie den Anker positionieren und ihn woanders auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden das eigentliche Verankerungsprinzip in Aktion sehen, wenn wir [Elemente basierend auf der Ankerposition positionieren](#positionierung_von_elementen_relativ_zu_ihrem_anker) betrachten.

### Implizite Ankerverknüpfung

In einigen Fällen wird eine implizite Ankerreferenz zwischen zwei Elementen aufgrund der semantischen Natur ihrer Beziehung erstellt:

- Bei der Verwendung der [Popover-API](/de/docs/Web/API/Popover_API) zur Verknüpfung eines Popovers mit einem Steuerelement wird eine implizite Ankerreferenz zwischen den beiden erstellt. Dies kann passieren, wenn:
  - Ein Popover mit einem Steuerelement deklarativ über die Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` verknüpft wird.
  - Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmatisch mit einem Steuerelement unter Verwendung der `source`-Option verbunden wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Auswahlsymbol sind über die Darstellung der {{cssxref("appearance")}}-Eigenschaft `base-select` in [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) eingebunden. In diesem Fall wird eine implizite Popover-Auslöser-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben werden.

> [!NOTE]
> Die oben genannten Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht verankert. Damit sie miteinander verankert werden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

### Entfernen einer Ankerverknüpfung

Wenn Sie eine zuvor erstellte explizite Ankerverknüpfung zwischen einem Ankerelement und einem positionierten Element entfernen möchten, können Sie eines der folgenden tun:

1. Setzen Sie den `anchor-name`-Eigenschaftswert des Ankers auf `none` oder auf eine andere `<dashed-ident>`, falls Sie ein anderes Element an ihn binden möchten.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie etwa `--not-an-anchor-name`.

Im Fall von impliziten Ankerverknüpfungen müssen Sie jedoch die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies liegt daran, dass die Verknüpfung intern gesteuert wird und Sie den `anchor-name` nicht via CSS entfernen können.

Um beispielsweise zu verhindern, dass die Auswahlsymbolleiste eines anpassbaren `<select>`-Elements an das `<select>`-Element selbst verankert wird, können Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, hat das Verknüpfen eines positionierten Elements mit einem Anker allein nicht viel Nutzen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugeordneten Ankerelement zu platzieren. Dies wird entweder durch Setzen eines [CSS `anchor()`-Funktionswerts](#using_inset_properties_with_anchor_function_values) auf eine {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Angabe eines `position-area`](#setting_a_position-area), oder Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center) erreicht.

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zum Festlegen alternativer Positionen, falls die Standardposition des positionierten Elements dazu führt, dass es den Ansichtbereich überläuft. Weitere Einzelheiten finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel via [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir diskutieren, wie ein ankerpositioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, im Abschnitt [Bedingtes Ausblenden mittels `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()` Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit durch das Setzen von {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} positioniert. Mit `position: absolute` ist dieser Inset-Positionswert eine absolute Distanz relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert eine absolute Distanz relativ zum Ansichtsfenster.

Die CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer zugeordneten Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Wird diese Funktion verwendet, wird der Inset-Positionswert als absolute Distanz relativ zum Ankerelement festgelegt, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ positioniert wird, und die Distanz von dieser Seite definiert wird.

Die Funktionsbestandteile sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name) Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft referenziert wird oder über das nicht standardisierte [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element verknüpft ist.
    > [!NOTE]
    > Die Spezifikation eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, stellt jedoch keine Elementverknüpfung her. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element spezifizieren, ist das positionierte Element nur mit einem einzigen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Anfang (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der die Entfernung angibt, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie einen Längen- oder Prozentwert direkt auf einer Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird er positioniert, als wäre er nicht an das Ankerelement gebunden. Dies ist dasselbe Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der er gesetzt ist, nicht kompatibel ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` oberhalb des Bodens des nächstgelegenen positionierten Vorfahren (falls vorhanden) oder des initialen umhüllenden Blocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, werden auf eine Seite des Standardankers verweisen. Sie werden auch oft entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen der Kante des Ankers und des positionierten Elements zu erzeugen oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie ihn innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logisch blockierende Endkante des positionierten Elements `10px` von der logisch blockierenden Startkante des Ankerelements entfernt, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber, um den Inhalt über seine Umhüllung herauszufordern und zu scrollen. Wir geben dem Ankerelement denselben `anchor-name`-Wert wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker verbunden und hat eine feste Positionierung erhalten. Durch das Einfügen der {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften (die im horizontalen Links-nach-Rechts-Schreibmodus den {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften entsprechen) haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Raum zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Sehen wir uns die Inset-Positionierungserklärungen genauer an:

- `inset-block-start: anchor(end)`: Diese setzt die blockierende Startkante des positionierten Elements zur blockierenden Endkante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Diese setzt die inline-Startkante des positionierten Elements zur inline-Endkante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument hoch und runter scrollen, bleibt das positionierte Element relativ zum Ankerelement positioniert — es ist am Ankerelement fixiert, nicht am Ansichtsfenster.

### Festlegen einer `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft funktioniert nach dem Prinzip eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in eine der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, und koordinatenmäßige Äquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, und koordinatenmäßige Äquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umhüllenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den umhüllenden Block des positionierten Elements definiert wird.

Die Werte der `position-area`-Eigenschaft bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit Spannoptionen verfügbar, um die Region des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrat zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im zentralen unteren Quadrat.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, zunächst in der Mitte, und der andere gibt die Menge dieser Spalte an, die es umspannen soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Zeile platziert wird und über die mittleren und linken Kacheln dieser Zeile spannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und über die mittleren und x-end-Kacheln dieser Spalte spannt.
- `block-end span-all` bewirkt, dass das positionierte Element in der blockierenden Endzeile platziert wird und über die inline-start, center und inline-end Kacheln dieser Zeile spannt.

Wenn Sie nur einen Wert angeben, ist der Effekt abhängig davon, welcher Wert gesetzt wird:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt wie wenn der andere Wert `span-all` wäre. Zum Beispiel, `top` hat denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel, `start` hat denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt sind (`center center`).

> [!NOTE]
> Siehe die Referenzseite für den [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert für eine detaillierte Beschreibung aller verfügbaren Werte. Die Mischung eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und die gleichen Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, mit dem der `position-area`-Wert des positionierten Elements geändert werden kann.

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

Die Infobox wird fest positioniert und mit dem Anker mithilfe von CSS verknüpft. Beim Laden wird sie auf `position-area: top;` gesetzt, was dazu führt, dass sie oben im position-area Raster positioniert wird. Sobald Sie andere Werte aus dem `<select>` Menü auswählen, wird dies überschrieben.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte aus dem `<select>` Menü auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>` Menü auszuwählen, um die Auswirkungen auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Festlegen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element nicht explizit in irgendeiner Dimension dimensioniert. Wir haben die Größenangaben absichtlich ausgelassen, um Ihnen das Ergebnis zu ermöglichen, das dadurch entsteht.

Wenn ein positioniertes Element ohne explizite Dimensionierung in die `position-area` Rasterzellen platziert wird, richtet es sich nach dem angegebenen Rasterbereich und verhält sich so, als wäre die {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird entsprechend seiner [umgebenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block)-Größe dimensioniert, was die Breite seines Inhalts ist. Diese Größe wird durch das Setzen von `position: fixed` erzwungen. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit wie nötig aus, um den Textinhalt zu ermöglichen, während sie durch den Rand des Ansichtsfensters eingeschränkt werden. In diesem Fall, wenn auf der linken Seite des Rasters mit einem beliebigen `left`- oder `inline-start`-Wert platziert, wird der Text umgebrochen. Wenn die `max-content` Größe des verankerten Elements schmaler oder kürzer ist als der Anker, werden sie nicht wachsen, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, wie z. B. mit `position-area: bottom center`, wird es mit der spezifizierten Rasterzelle ausgerichtet und die Breite wird die gleiche wie die des Ankerelements sein. In diesem Fall ist seine Mindesthöhe die umschließende Blockgröße des Ankerelements. Es wird nicht überlaufen, da die `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrierung auf dem Anker mit `anchor-center`

Obwohl Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften kombiniert mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu befestigen.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands} existieren, um Entwicklern die Möglichkeit zu geben, Elemente in der Inline- oder Blockrichtung in verschiedenen Layoutsystemen einfach auszurichten, beispielsweise entlang der Haupt- oder Querachse im Fall von Flexkindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die gleichen Basis-CSS wie das vorherige Beispiel. Die Infobox wird fest positioniert und an der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf das Zentrum des Ankers zentriert ist:

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

{{ EmbedLiveSample("Zentrierung auf dem Anker mit `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Ankerposition können Sie auch die Größe eines Elements relativ zur Ankergröße mittels der [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Größen-Eigenschaftswertes festlegen.

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
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie das Element relativ dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der im [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft referenziert ist.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, zu dem das positionierte Element dimensioniert wird. Dies kann in physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, werden einfach auf eine Dimension des Standardankers verweisen. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel, diese Regel dimensioniert die Breite des positionierten Elements gleich der Breite des Standardankerelements:

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

Sehen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut gegeben wird, um es fokussierbar zu machen. Die Infobox wird fest positioniert und auf dieselbe Weise wie zuvor mit dem Anker verknüpft. Diesmal verankern wir sie jedoch rechts vom Anker mit `position-area` und geben ihr eine Breite, die das Fünffache der Breite des Ankers ausmacht:

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

Außerdem erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, sodass es bei Zustandsänderungen animiert wird.

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

Fahren Sie mit der Maus über das Ankerelement oder verwenden Sie die Tabulator-Taste — das positionierte Element wächst, während der Anker wächst, und demonstriert, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Größenanpassung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Rand-Eigenschaften verwenden. Die folgenden Abschnitte untersuchen diese Verwendungen detaillierter, bevor ein Anwendungsbeispiel bereitgestellt wird.

### Elementposition basierend auf der Ankergröße einstellen

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaftswerts")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird sich bei einer Änderung der Position seines Ankers nicht ändern. Stattdessen wird das Element gemäß den normalen Regeln für [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed)-Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Wenn Ihr Ankerelement beispielsweise nur vertikal verschiebbar ist und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts neben seinem Anker zu positionieren, auch wenn sich die Ankerbreite ändert.

### Elementrand basierend auf der Ankergröße einstellen

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementränder basierend auf der Größe ihrer Ankerelemente einzustellen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie den Rand eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements halten möchten, auch wenn sich die Breite ändert.

### `anchor-size()` Positions- und Randbeispiel

Schauen wir uns ein Beispiel an, bei dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements einstellen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es per Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} groß genug zu machen, um das Scrollen zu erfordern, aber dies wurde der Kürze halber ausgelassen.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf Anker und Infobox und schließen einen {{cssxref("transition")}} auf dem Anker ein, damit Breitenänderungen während der Zustandsänderungen sanft animiert werden:

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

Jetzt zum interessantesten Teil. Hier setzen wir die `width` des Ankers auf `300px`, wenn er gehovert oder fokussiert wird. Wir setzen die `infobox`:

- `top` Wert auf `anchor(top)`. Dies bewirkt, dass das obere Ende der Infobox immer im Einklang mit dem oberen Ende des Ankers bleibt.
- `left` Wert auf `anchor-size(width)`. Dies bewirkt, dass das linke Ende der Infobox die spezifizierte Entfernung vom linken Rand ihres nächstgelegenen positionierten Vorfahren entfernt ist. In diesem Fall ist die spezifizierte Entfernung gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox auf der rechten Seite des Ankers erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Rand hat, der sie und den Anker trennt und gleich einem Viertel der Ankerbreite ist.

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

Versuchen Sie, den Anker mit der Tabulatortaste zu fokussieren oder mit der Maus darüber zu fahren, und beachten Sie, wie sich Position und linker Rand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [Modul für CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Lernen: Größe von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
