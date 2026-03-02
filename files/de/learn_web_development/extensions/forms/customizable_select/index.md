---
title: Anpassbare Auswahlelemente
short-title: Anpassbare Auswahllisten
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: e9627d75bd1925477a9d764d39eff547be9c951d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie komplett anpassbare `<select>`-Elemente mithilfe experimenteller Browser-Funktionen erstellt werden. Dies umfasst die volle Kontrolle über das Styling der Auswahltaste, des Dropdown-Pickers, des Pfeilsymbols, des aktuellen Auswahlhäkchens und jedes einzelnen `<option>`-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Funktionen haben derzeit nur eingeschränkte Browser-Unterstützung; überprüfen Sie die Tabellen zur Browser-Kompatibilität auf den individuellen Referenzseiten der Funktionen für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Fehler bei der Hydration, wenn die Serverseitige Darstellung (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, Auswahlelemente zu gestalten, da sie interne Elemente enthalten, die auf Betriebssystemebene gestylt sind und nicht mit CSS angesprochen werden können. Dazu gehören der Dropdown-Picker, das Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – die Einstellung eines `appearance`-Wertes von `none` auf dem `<select>`-Element, um einige der Betriebssystem-Stile zu entfernen und dann CSS zu verwenden, um die Teile zu gestalten, die gestylt werden können. Diese Technik wird im [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen das Erstellen von Beispielen wie das Folgende, ausschließlich mit HTML und CSS, die in unterstützenden Browsern vollständig angepasst sind. Dies umfasst `<select>`- und Dropdown-Picker-Layout, Farbschema, Symbole, Schriftart, Übergänge, Positionierung, Markierungen zur Kennzeichnung des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Außerdem bieten sie eine progressive Verbesserung der bestehenden Funktionalität und fallen in nicht unterstützenden Browsern auf klassische Auswahllisten zurück.

Sie erfahren in den folgenden Abschnitten, wie Sie dieses Beispiel erstellen.

## Welche Funktionen umfasst ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Klassische `<select>`, `<option>` und `<optgroup>`-Elemente. Diese funktionieren genauso wie in klassischen Auswahllisten, außer dass sie zusätzliche zulässige Inhaltstypen haben.
- Ein `<button>`-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in klassischen Auswahllisten nicht erlaubt war. Wenn dies enthalten ist, ersetzt es die Standard-Darstellung der geschlossenen `<select>`-Schaltfläche. Dies wird allgemein als **Auswahltaste** bezeichnet (da es die Schaltfläche ist, die Sie drücken müssen, um den Dropdown-Picker zu öffnen).
  > [!NOTE]
  > Die Auswahltaste ist standardmäßig als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) behandelt, damit, wenn interaktive Kinder (zum Beispiel Links oder Schaltflächen) darin enthalten sind, sie immer noch wie eine einzelne Schaltfläche für Interaktionszwecke behandelt wird — zum Beispiel sind die untergeordneten Elemente nicht fokussierbar oder anklickbar.
- Das `<selectedcontent>`-Element kann optional innerhalb des ersten untergeordneten `<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält ein Klon des aktuell ausgewählten `<option>`-Elementinhalts (unter der Haube mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt).
- Das `::picker(select)` Pseudoelement, das den gesamten Inhalt des Pickers anspricht. Dies umfasst alle Elemente innerhalb des `<select>`-Elements, außer der ersten untergeordneten `<button>`.
- Der `appearance`-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement in die vom Browser definierten Standardstile und das Verhalten für anpassbare Auswahlen einbezieht.
- Die `:open` Pseudoklasse, die die Auswahltaste anspricht, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das `::picker-icon` Pseudoelement, das das Symbol in der Auswahltaste anspricht — der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die `:checked` Pseudoklasse, die das derzeit ausgewählte `<option>`-Element anspricht.
- Das `::checkmark` Pseudoelement, das das Häkchen anspricht, das innerhalb des derzeit ausgewählten `<option>`-Elements platziert wird, um eine visuelle Anzeige zu geben, welches ausgewählt ist.

Darüber hinaus haben das `<select>`-Element und sein Dropdown-Picker eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verknüpft ist. Die Browser-Standardstile positionieren den Picker relativ zur Schaltfläche (dem Anker) und Sie können diese Position anpassen, wie im [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Browser-Standardstile definieren auch einige Positionsversuche-Strategien, die den Picker neu positionieren, wenn die Gefahr besteht, dass er über den Viewport hinausläuft. Positionsversuche-Strategien werden im [Umgang mit Überlauf: Versuche und bedingtes Verbergen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browserunterstützung für anpassbare `<select>`-Elemente überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Schauen wir uns an, wie all diese Funktionen in Aktion treten, indem wir das oben auf der Seite gezeigte Beispiel durchgehen.

## Anpassbare Select-Markup

Unser Beispiel ist ein typisches `<select>`-Menü, das Ihnen ermöglicht, ein Haustier auszuwählen. Das Markup ist wie folgt:

```html live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
<form>
  <p>
    <label for="pet-select">Select pet:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>

      <option value="">Please select a pet</option>
      <option value="cat">
        <span class="icon" aria-hidden="true">🐱</span
        ><span class="option-label">Cat</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span
        ><span class="option-label">Dog</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span
        ><span class="option-label">Hamster</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span
        ><span class="option-label">Chicken</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span
        ><span class="option-label">Fish</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span
        ><span class="option-label">Snake</span>
      </option>
    </select>
  </p>
</form>
```

> [!NOTE]
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut ist auf den Symbolen enthalten, damit sie von assistiven Technologien verborgen werden und die Optionswerte nicht doppelt angekündigt werden (zum Beispiel "Katze Katze").

Das Beispielmarkup ist fast dasselbe wie das klassische `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>` Struktur stellt die Auswahl-{{htmlelement("button")}} dar.
  Das Hinzufügen des `<selectedcontent>`-Elements bewirkt, dass der Browser den aktuell ausgewählten `<option>` innerhalb der Schaltfläche klont, die Sie dann [benutzerdefiniert stylen können](#anpassung_des_stylings_des_ausgewählten_optionsinhalts_innerhalb_der_auswahltaste). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser darauf zurück, den Text der ausgewählten Option innerhalb der Standardschaltfläche zu rendern, und Sie können ihn nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einschließen, um anzuzeigen, was Sie möchten, aber seien Sie vorsichtig dabei. Das, was Sie einschließen, kann den zugänglichen Wert ändern, der assistiver Technologie für das `<select>`-Element bereitgestellt wird.
- Der Rest des `<select>`-Inhalts stellt den Dropdown-Picker dar, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können andere Inhalte im Picker einbeziehen, es wird jedoch nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textbasierte semantische Elemente und mehr hinzufügen. Sie können sogar die `::before` und `::after` Pseudoelemente verwenden, um andere Inhalte hinzuzufügen, obwohl Sie bedenken sollten, dass dies nicht im einreichbaren Wert enthalten wäre. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textetikett enthalten, sodass jedes unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln dafür, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) durch JavaScript extrahieren soll. Die `textContent`-Eigenschaft des ausgewählten `<option>`-Elements wird abgerufen, `trim()` wird darauf ausgeführt und das Ergebnis wird als `<select>`-Wert festgelegt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, zu einer klassischen `<select>`-Erfahrung zurückzukehren. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert, und der nicht-Text `<option>`-Inhalt wird entfernt, sodass nur die Textknoten-Inhalte übrig bleiben, aber das Ergebnis wird immer noch funktionieren.

## Aktivierung der benutzerdefinierten Auswahl-Rendering

Um die benutzerdefinierte Select-Funktionalität und minimale Browser-Basisstile zu aktivieren (und das Styling des Betriebssystems zu entfernen), müssen sowohl Ihr `<select>`-Element als auch sein Dropdown-Picker (dargestellt durch das `::picker(select)` Pseudoelement) einen `appearance`-Wert von `base-select` aufweisen:

```css live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select,
::picker(select) {
  appearance: base-select;
}
```

```css hidden live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: 100%;
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
}

h2 {
  font-size: 1.2rem;
}

p {
  display: flex;
  gap: 10px;
}

label {
  width: fit-content;
  align-self: center;
}

select {
  flex: 1;
}
```

Sie können wählen, nur das `<select>`-Element in die neue Funktionalität einzubeziehen und den Picker mit dem Standardbetriebssystem-Stil zu belassen, aber in den meisten Fällen werden Sie beide aktivieren wollen. Sie können nicht nur den Picker aktivieren, ohne das `<select>`-Element einzubeziehen.

Sobald dies geschehen ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie können dies jetzt beliebig stylen. Zu Beginn haben das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (was sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}}-Werte gesetzt, plus eine {{cssxref("transition")}}, sodass der Hintergrundwechsel sanft animiert wird:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #dddddd;
}
```

## Styling des Picker-Symbols

Um das Symbol in der Auswahltaste zu stylen — der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist — können Sie es durch das `::picker-icon` Pseudoelement ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen seines {{cssxref("rotate")}}-Eigenschaftswerts sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Im nächsten Schritt wird `::picker-icon` mit der {{cssxref(":open")}} Pseudoklasse kombiniert — die die Auswahltaste nur dann anspricht, wenn der Dropdown-Picker geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns das bisherige Arbeitsergebnis an — beachten Sie, wie der Picker-Pfeil sich sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Pickers

Der Dropdown-Picker kann mit dem `::picker(select)`-Pseudoelement angesprochen werden. Wie bereits erwähnt, enthält der Picker alles im `<select>`-Element, das nicht die Schaltfläche und `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zuerst wird die standardmäßige schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> Das Argument, das an das Pseudoelement `::picker()` übergeben wird, repräsentiert den Typ des Elements, dessen Picker Sie ansprechen möchten — in diesem Fall `<select>`-Elemente. Wenn Sie den Picker eines bestimmten `<select>`-Elements ansprechen möchten, anstatt alle, können Sie das `::picker()`-Pseudoelement mit einem anderen Selektor kombinieren. Zum Beispiel kann der Picker unseres Beispiel-`<select>` exklusiv mit `#pet-select::picker(select) { ... }` angesprochen werden.

Jetzt werden die `<option>`-Elemente gestylt. Sie sind mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angeordnet, wobei sie alle am Anfang des Flex-Containers ausgerichtet sind und ein `20px` {{cssxref("gap")}} zwischen jedem haben. Jedes `<option>` wird auch mit derselben {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>` versehen, um ein einheitliches Erscheinungsbild und Gefühl zu erzeugen:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}
```

> [!NOTE]
> Anpassbare `<select>`-Element-`<option>`s haben standardmäßig `display: flex` gesetzt, aber es wird trotzdem in unserem Stylesheet aufgenommen, um klarzustellen, was passiert.

Als Nächstes wird eine Kombination aus den Pseudoklassen {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}} verwendet, um eine passende {{cssxref("border-radius")}} auf den obersten und untersten `<option>`-Elementen einzustellen und den {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — außer dem letzten, sodass die Ränder nicht unordentlich und doppelt aussehen. Wir setzen auch denselben `border-radius` auf den äußeren `::picker(select)`-Container, damit wir nicht mit einem hässlichen quadratischen weißen Kasten um die Optionen enden, wenn wir entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

::picker(select) {
  border-radius: 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

Als Nächstes wird eine unterschiedliche `background`-Farbe auf die ungeraden `<option>`-Elemente mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um eine Zebra-Streifen-Effekt zu realisieren, und eine unterschiedliche `background`-Farbe auf die `<option>`-Elemente bei Fokus und Hover, um während der Auswahl eine nützliche visuelle Hervorhebung zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich in diesem Abschnitt wird eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole (enthalten innerhalb von `<span>`-Elementen mit einer Klasse von `icon`) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der störenden Abstände an den Blockanfangs- und Blockende-Kanten der Symbol-Emojis zu entfernen, sodass sie besser mit den Textetiketten ausgerichtet sind:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung des Stylings des ausgewählten Optionsinhalts innerhalb der Auswahltaste

Wenn Sie irgendeine Haustieroption aus den letzten paar Live-Beispielen auswählen, werden Sie ein Problem feststellen — die Haustier-Symbole verursachen, dass die Auswahltaste in der Höhe zunimmt, was auch die Position des Picker-Symbols ändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Etikett.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es sich innerhalb von `<selectedcontent>` befindet, das den Inhalt der ausgewählten `<option>` darstellt, wie sie innerhalb der Auswahltaste erscheint. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies wirkt sich nicht auf das Styling der `<option>`-Inhalte aus, wie sie innerhalb des Dropdown-Pickers erscheinen.

## Styling der derzeit ausgewählten Option

Um die derzeit ausgewählte `<option>` so zu stylen, wie sie im Dropdown-Picker erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse ansprechen. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahlhäkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, die derzeit ausgewählte `<option>` ein Häkchen am Inline-Start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement angesprochen werden. Beispielsweise möchten Sie dieses Häkchen vielleicht ausblenden (zum Beispiel durch `display: none`).

Sie könnten sich auch entscheiden, etwas Interessanteres damit zu machen — früher wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Items am Anfang der Zeile ausgerichtet wurden. In der untenstehenden Regel wird das Häkchen vom Anfang der Zeile an das Ende verschoben, indem ein {{cssxref("order")}}-Wert größer als `0` darauf gesetzt wird und es mit einem `auto` {{cssxref("margin-left")}}-Wert an das Ende der Zeile ausgerichtet wird (siehe [Ausrichtung und automatische Abstände](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol zur Anzeige einzustellen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudoelemente sind nicht im Barrierefreiheit-Baum enthalten, sodass generierte {{cssxref("content")}}-Inhalte, die auf ihnen gesetzt werden, nicht von assistiven Technologien angekündigt werden. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

Lassen Sie uns noch einmal überprüfen, wie das Beispiel gerendert wird. Der aktualisierte Status nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animierung des Pickers mittels Popover-Zuständen

Die Auswahltaste und der Dropdown-Picker des anpassbaren `<select>`-Elements haben automatisch eine Invoker/Popover-Beziehung, wie in [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente; unser Beispiel nutzt die Fähigkeit, zwischen Popover-versteckten und angezeigten Zuständen mithilfe von Übergängen zu animieren. Die {{cssxref(":open")}} Pseudoklasse repräsentiert Auswahlelemente in einem offenen Zustand.

Die Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Popover animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine ausführlichere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die beim Wechsel des Popover-Zustands von versteckt zu sichtbar ihren Wert ändern, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, jedoch auch zwei diskrete Eigenschaften, deren Werte durch die Browser-Standardstile gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn das Popover von versteckt zu sichtbar wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn das Popover von versteckt zu sichtbar wechselt, um es in die {{Glossary("top_layer", "Top-Ebene")}} zu befördern, und dann zurück, wenn es verborgen ist, um es zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der Top-Ebene verzögert wird, bis der Übergang abgeschlossen ist, und so sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) ist erforderlich, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als Nächstes wird der Picker im Anzeigestatus mit `:open::picker(select)` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
:open::picker(select) {
  opacity: 1;
}
```

Schließlich, da der Picker animiert wird, während er von `display: none` zu einem `display`-Wert wechselt, der ihn sichtbar macht, muss der Anfangszustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  :open::picker(select) {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und auszublenden, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mittels Ankerpositionierung

Eine anpassbare `<select>`-Element-Auswahltaste und das Dropdown-Picker haben eine implizite Ankerreferenz, und der Picker wird automatisch über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) mit der Auswahltaste verknüpft. Das bedeutet, dass keine explizite Zuordnung mit den Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} gemacht werden muss.

Darüber hinaus bieten die [Browser-Standardstile eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie im [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserer Demo wird die Position des Pickers relativ zu seinem Anker durch Verwendung der {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerte festgelegt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel von der unteren Kante der Auswahltaste positioniert ist und die linke Kante des Pickers immer `10%` der Breite der Auswahltaste von ihrer linken Kante aus positioniert ist.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um den Picker von der Verankerung am `<select>`-Element zu lösen, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Pickers auf einen Ankernamen setzen, der nicht im aktuellen Dokument vorhanden ist, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerverbindung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Select-Funktionen

Die obigen Abschnitte haben alle neuen Funktionen anpassbarer Auswahllisten behandelt und gezeigt, wie sie mit sowohl klassischen einzeiligen Auswahllisten als auch verwandten modernen Funktionen wie Popovern und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Element-Funktionen, die oben nicht erwähnt wurden; in diesem Abschnitt wird erläutert, wie sie derzeit zusammen mit anpassbaren Auswahllisten funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Es gibt derzeit keine spezifizierte Unterstützung für das `multiple`-Attribut bei anpassbaren `<select>`-Elementen, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standardstyling von `<optgroup>`-Elementen ist dasselbe wie in klassischen `<select>`-Elementen — fett und weniger weit eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente stylen, sodass sie in das Gesamtdesign passen und bedenken, dass sie sich genauso verhalten wie Container, die in konventionellem HTML erwartet werden. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Etikett bereitzustellen, das leicht anzusprechen und zu stylen ist. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt wird und hat dieselbe Semantik.

## Nächster Schritt

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zum Stylen von Formularen in verschiedenen Zuständen zur Verfügung stehen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
