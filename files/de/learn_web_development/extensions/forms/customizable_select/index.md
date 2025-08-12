---
title: Anpassbare Select-Elemente
short-title: Anpassbare Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie man vollständig anpassbare {{htmlelement("select")}}-Elemente unter Verwendung experimenteller Browser-Features erstellt. Dies umfasst die vollständige Kontrolle über das Styling des Select-Buttons, des Dropdown-Auswahlfeldes, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Features haben derzeit eine begrenzte Browser-Unterstützung; überprüfen Sie die Browser-Kompatibilitätstabellen auf den einzelnen Feature-Referenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Fehler bei der Hydration, wenn Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen von `<select>`-Elementen zu individualisieren, da sie interne Komponenten enthalten, die auf Betriebssystemebene gestylt sind und die nicht mit CSS angesprochen werden können. Dazu gehören der Dropdown-Wähler, das Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – auf dem `<select>`-Element einen {{cssxref("appearance")}}-Wert von `none` zu setzen, um einige der Betriebssystem-Stylings zu entfernen, und dann CSS zu verwenden, um die Teile zu gestalten, die gestylt werden können. Diese Technik wird in [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispielsituation zu erstellen, wie die folgende, die nur HTML und CSS verwenden, die in unterstützenden Browsern vollständig angepasst sind. Dies umfasst `<select>`- und Dropdown-Wähler-Layouts, Farbschema, Symbole, Schriftarten, Übergänge, Positionierung, Marker zur Kennzeichnung des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung bestehender Funktionalitäten, indem sie in nicht unterstützenden Browsern auf "klassische" Selects zurückfallen.

Sie werden herausfinden, wie Sie dieses Beispiel in den untenstehenden Abschnitten erstellen.

## Welche Features umfassen ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mithilfe der folgenden HTML- und CSS-Features erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Selects, außer dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was zuvor in "klassischen" Selects nicht erlaubt war. Wenn dies enthalten ist, ersetzt es die Standard-"Button"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Button** bezeichnet (da es der Button ist, den Sie drücken müssen, um den Dropdown-Wähler zu öffnen).
  > [!NOTE]
  > Der Select-Button ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass, wenn interaktive Kinder (z.B. Links oder Buttons) innerhalb enthalten sind, sie immer noch wie ein einzelner Button für Interaktionszwecke behandelt werden – zum Beispiel, die Kind-Elemente werden nicht fokussierbar oder anklickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional als erstes Kind `<button>`-Element innerhalb des `<select>`-Elements eingefügt werden, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält einen Klon des Inhalts des aktuell ausgewählten `<option>`-Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element, das den gesamten Inhalt des Pickers anspricht. Dies umfasst alle Elemente innerhalb des `<select>`-Elements, außer dem ersten Kind `<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element für die vom Browser definierten Standardstile und -verhalten für anpassbare Selects auswählt.
- Die {{cssxref(":open")}}-Pseudoklasse, die den Select-Button anspricht, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol innerhalb des Select-Buttons anspricht – den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}} Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen anspricht, das innerhalb des aktuell ausgewählten `<option>`-Elements platziert ist, um eine visuelle Anzeige zu geben, welches ausgewählt ist.

Darüber hinaus haben das `<select>`-Element und sein Dropdown-Wähler die folgende Automatisierung zugewiesen:

- Sie haben eine Invoker/Popover-Beziehung, wie sie durch die [Popover-API](/de/docs/Web/API/Popover_API) spezifiziert ist, die die Möglichkeit bietet, den Picker beim Öffnen über die {{cssxref(":popover-open")}}-Pseudoklasse auszuwählen. Siehe [Die Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für mehr Details über das Verhalten von Popovern.
- Sie haben eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) assoziiert ist. Die standardmäßigen Browser-Stile positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie im [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die standardmäßigen Browser-Stile definieren ebenfalls einige Positionstrychancen, die den Picker neu positionieren, wenn er Gefahr läuft, den Ansichtsbereich zu überlaufen. Positionstry-Fallbacks sind erklärt in [Umgang mit Überlauf: Versuchen, Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Features wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Schauen wir uns all diese Features in Aktion an, indem wir das Beispiel oben auf der Seite durchgehen.

## Anpassbares Select-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, das es Ihnen ermöglicht, ein Haustier auszuwählen. Das Markup ist wie folgt:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut wird auf die Symbole angewendet, damit diese vor unterstützenden Technologien versteckt werden und die Optionswerte nicht doppelt angekündigt werden (zum Beispiel, "Katze Katze").

Das Beispiel-Markup ist fast dasselbe wie "klassisches" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur stellt den Select {{htmlelement("button")}} dar.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser das aktuell ausgewählte {{htmlelement("option")}} innerhalb des Buttons klont, den Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassung_des_stylings_der_inhalte_der_ausgewählten_option_innerhalb_des_select-buttons). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser darauf zurück, den Text der ausgewählten Option innerhalb des Standardbuttons darzustellen, und Sie können diesen nicht so einfach stilisieren.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um alles darzustellen, was Sie innerhalb des geschlossenen `<select>` möchten, aber seien Sie vorsichtig dabei. Was Sie einfügen, kann den zugänglichen Wert für das `<select>`-Element für unterstützende Technologien verändern.
- Der restliche Inhalt des `<select>` stellt den Dropdown-Wähler dar, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Wähler darstellen. Sie können andere Inhalte im Wähler einfügen, aber es wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textuelle semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente verwenden, um anderen Inhalt einzufügen, obwohl Sie bedenken sollten, dass dieser nicht im einreichbaren Wert enthalten wäre. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textetikett enthalten, was jede ermöglicht, unabhängig gestylt und positioniert zu werden.

  > [!NOTE]
  > Da der `<option>`-Inhalt DOM-Unterbäume auf mehreren Ebenen enthalten kann, nicht nur Textknoten, gibt es Regeln dafür, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren soll. Der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf angewendet, und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert, und die nicht-textlichen `<option>` Inhalte werden entfernt, um nur die Textknoten-Inhalte zu hinterlassen, aber das Ergebnis wird weiterhin funktionieren.

## Opt-in zur benutzerdefinierten Select-Darstellung

Um sich für die benutzerdefinierte Select-Funktionalität und die minimalen Browser-Grundstile (und das Entfernen des vom Betriebssystem bereitgestellten Stylings) zu entscheiden, müssen Ihr `<select>`-Element und sein Dropdown-Wähler (dargestellt durch das `::picker(select)` Pseudo-Element) beide einen {{cssxref("appearance")}}-Wert von `base-select` haben:

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
  font-family: Arial, Helvetica, sans-serif;
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

Sie können wählen, nur das `<select>`-Element für die neue Funktionalität zu aktivieren und den Picker mit dem Standard-OS-Styling zu belassen, aber in den meisten Fällen werden Sie beide aktivieren wollen. Sie können den Picker nicht opt-in ohne das `<select>`-Element zu aktivieren.

Sobald dies geschehen ist, ist das Ergebnis eine sehr einfache Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind nun frei, dies auf jede gewünschte Weise zu gestalten. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (was sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte gesetzt, plus einen {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert wird:

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

## Styling des Pickersymbols

Um das Symbol innerhalb des Select-Buttons zu stylen — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}} Pseudo-Element ansprechen. Der folgende Code verleiht dem Symbol eine benutzerdefinierte {{cssxref("color")}} und einen `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}} Pseudoklasse kombiniert — die den Select-Button nur anspricht, wenn der Dropdown-Wähler geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zuzuweisen, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns an, wie die Arbeit bisher aussieht — beachten Sie, wie der Wähler-Pfeil sich sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Wählers

Der Dropdown-Wähler kann mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element angesprochen werden. Wie bereits erwähnt, enthält der Wähler alles innerhalb des `<select>`-Elements, was nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zuallererst wird die Standard-Schwarze {{cssxref("border")}} des Wählers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestylt. Sie sind mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ausgelegt, richten sich alle am Anfang des Flex-Containers aus und schließen eine `20px` {{cssxref("gap")}} zwischen jedem ein. Jedes `<option>` erhält ebenfalls die gleiche {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein einheitliches Aussehen und Gefühl zu vermitteln:

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
> Anpassbare `<select>`-Element-`<option>`s haben standardmäßig `display: flex` auf sich gesetzt, aber es ist trotzdem in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als nächstes wird eine Kombination aus den {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}} Pseudoklassen verwendet, um einen angemessenen {{cssxref("border-radius")}} an den oberen und unteren Ecken des Wählers zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, damit die Ränder nicht unordentlich und verdoppelt aussehen:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

Als nächstes wird eine andere `background`-Farbe auf den ungeradzahligen `<option>`-Elementen mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um Zebra-Streifen zu implementieren, und eine andere `background`-Farbe wird auf den `<option>` bei Fokus und Hover gesetzt, um ein nützliches visuelles Highlight während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Abschließend für diesen Abschnitt wird eine größere {{cssxref("font-size")}} auf den `<option>`-Symbolen gesetzt (enthalten in `<span>`-Elementen mit der Klasse `icon`), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der störenden Abstände an den Block-Anfangs- und Block-End-Kanten der Icon-Emojis zu entfernen, um ihre Ausrichtung mit den Textetiketten zu verbessern:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt wie folgt angezeigt:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung des Stylings der Inhalte der ausgewählten Option innerhalb des Select-Buttons

Wenn Sie aus den letzten Live-Beispielen eine beliebige Haustier-Option auswählen, werden Sie ein Problem bemerken — die Haustier-Symbole führen dazu, dass der Select-Button in der Höhe zunimmt, was auch die Position des Picker-Symbols verändert, und es gibt keinen Abstand zwischen Option-Symbol und Label.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, welches den Inhalt der ausgewählten `<option>` darstellt, wie sie innerhalb des Select-Buttons angezeigt wird. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der `<option>`-Inhalte, wie sie innerhalb des Dropdown-Wählers erscheinen.

## Styling der aktuell ausgewählten Option

Um das aktuell ausgewählte `<option>` innerhalb des Dropdown-Wählers zu stylen, können Sie die {{cssxref(":checked")}} Pseudoklasse verwenden. Diese wird verwendet, um die {{cssxref("font-weight")}} der ausgewählten `<option>`-Elemente auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass beim Öffnen des Wählers zum Treffen einer Auswahl die aktuell ausgewählte `<option>` ein Häkchen am Start-Ende in der Zeile hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}} Pseudo-Element angesprochen werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden wollen (zum Beispiel über `display: none`).

Sie könnten auch etwas Interessanteres damit machen — zuvor wurden die `<option>`-Elemente horizontal mit Flexbox ausgelegt, wobei die Flex-Items am Anfang der Zeile ausgerichtet sind. In der unten stehenden Regel wird das Häkchen vom Anfang der Zeile zum Ende verschoben, indem ein {{cssxref("order")}}-Wert darauf gesetzt wird, der größer als `0` ist, und es wird durch einen `auto` {{cssxref("margin-left")}}-Wert an das Ende der Zeile ausgerichtet (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Abschließend wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol zur Anzeige festzulegen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudoelemente sind nicht im Zugänglichkeitsbaum enthalten, sodass generierte {{cssxref("content")}}-Inhalte, die auf ihnen eingestellt sind, nicht von unterstützenden Technologien angesagt werden. Sie sollten trotzdem sicherstellen, dass jedes neue Symbol, das Sie festlegen, visuell für den beabsichtigten Zweck sinnvoll ist.

Schauen wir uns erneut an, wie das Beispiel gerendert wird. Der aktualisierte Stand nach den letzten drei Abschnitten sieht folgendermaßen aus:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Wählers unter Verwendung von Popover-Zuständen

Der Select-`button` und der Dropdown-Wähler eines anpassbaren `<select>`-Elements haben automatisch eine Invoker/Popover-Beziehung, wie in [Die Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die diese für `<select>`-Elemente bringt; unser Beispiel nutzt die Möglichkeit, zwischen Popover-verborgenem und -angezeigtem Zustand mithilfe von Übergängen zu animieren. Die {{cssxref(":popover-open")}} Pseudoklasse repräsentiert Popover im angezeigten Zustand.

Die Technik wird in diesem Abschnitt kurz behandelt – lesen Sie [Popovers animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine ausführlichere Beschreibung.

Zuerst wird der Picker mithilfe von `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die den Wert ändern, wenn sich der Popover-Zustand von verborgen auf angezeigt ändert, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, aber auch zwei diskrete Eigenschaften, deren Werte durch die standardmäßigen Browser-Stile gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn der Popover-Zustand von verborgen zu angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von verborgen zu angezeigt wechselt, um ihn zur {{Glossary("top_layer", "obersten Ebene")}} zu befördern, und dann wieder zurück, wenn er verborgen ist, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers von der obersten Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) Wert ist notwendig, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker übergangsweise von `display: none` zu einem `display`-Wert bewegt wird, der ihn sichtbar macht, muss der Startzustand des Übergangs in einem {{cssxref("@starting-style")}}-Block spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und ausblenden zu lassen, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Wählers mittels Ankerpositionierung

Ein anpassbares `<select>`-Element hat eine implizite Ankerreferenz und der Wähler wird automatisch mit dem Select-Button über [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden. Dies bedeutet, dass keine explizite Verbindung gemacht werden muss, um {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften zu verwenden.

Darüber hinaus [bieten die standardmäßigen Browser-Stile eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie im [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Wählers relativ zu seinem Anker eingestellt, indem die {{cssxref("anchor()")}} Funktion innerhalb seiner {{cssxref("top")}} und {{cssxref("left")}} Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Das Ergebnis ist, dass die obere Kante des Wählers immer 1 Pixel von der unteren Kante des Select-Buttons nach unten positioniert ist, und die linke Kante des Wählers immer `10%` der Breite des Select-Buttons von seiner linken Kante entfernt positioniert ist.

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Select-Funktionen

Die obigen Abschnitte haben alle neuen Funktionen verfügbar in anpassbaren Selects abgedeckt und gezeigt, wie sie mit sowohl klassischen einzeiligen Selects als auch verwandten modernen Features wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Elemente-Funktionen, die oben nicht erwähnt wurden; in diesem Abschnitt wird erklärt, wie sie derzeit zusammen mit anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Es ist derzeit keine Unterstützung für das `multiple` Attribut auf anpassbaren `<select>` Elementen spezifiziert, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standard-Styling von `<optgroup>`-Elementen ist das gleiche wie in klassischen `<select>`-Elementen — fettgedruckt und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente stylen, sodass sie in das Gesamtdesign passen, und bedenken, dass sie sich genauso verhalten werden, wie man es von Containern in konventionellem HTML erwarten würde. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein leicht zu zielendes und stilisierbares Label bereitzustellen. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist und hat dieselbe Semantik.

## Nächstes Thema

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) untersuchen, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu stylen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
