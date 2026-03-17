---
title: Anpassbare Select-Elemente
short-title: Anpassbare Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 76936e1d9ff271ac59307a0f858d0d7b57f3866a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie vollständig anpassbare {{htmlelement("select")}}-Elemente mithilfe experimenteller Browser-Funktionen erstellen können. Dies umfasst die vollständige Kontrolle über das Styling des Auswahlbuttons, des Drop-Down-Pickers, des Pfeilsymbols, des aktuellen Auswahlhäkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel demonstrierten CSS- und HTML-Funktionen haben derzeit nur begrenzte Browser-Unterstützung; überprüfen Sie die Tabellen zur Browser-Kompatibilität auf den einzelnen Funktionsreferenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Fehler bei der Hydration, wenn Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Erscheinungsbild von `<select>`-Elementen anzupassen, da sie interne Teile enthalten, die auf Betriebssystemebene gestylt sind und nicht mit CSS angesprochen werden können. Dazu gehören der Drop-Down-Picker, das Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – ein {{cssxref("appearance")}}-Wert von `none` für das `<select>`-Element festzulegen, um einige der Betriebssystem-Styles zu entfernen, und dann CSS zu verwenden, um die Teile, die gestylt werden können, anzupassen. Diese Technik wird in [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende nur mit HTML und CSS zu erstellen, die in [unterstützenden Browsern](#browser_kompatibilität) vollständig anpassbar sind. Dies umfasst `<select>`- und Drop-Down-Picker-Layout, Farbschema, Symbole, Schriftart, Übergänge, Positionierung, Markierungen zur Kennzeichnung des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung auf Basis der vorhandenen Funktionalität, indem sie in nicht unterstützenden Browsern auf "klassische" Selects zurückfallen.

Sie erfahren in den folgenden Abschnitten, wie Sie dieses Beispiel erstellen können.

> [!NOTE]
> Dieser Artikel behandelt den Hintergrund zu anpassbaren Selects und zeigt, wie man "Single Dropdown" Selects erstellt, die diese Funktionen nutzen — also Dropdown-Menüs, die jeweils nur eine Option anzeigen und es ermöglichen, eine einzelne Option auszuwählen.
>
> Informationen zur Erstellung von "Listbox"-Selects — Menüs, die mehrere Optionen gleichzeitig anzeigen und Auswahl von einer oder mehreren Optionen erlauben — finden Sie unter [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes).

## Welche Funktionen umfasst ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genau wie in "klassischen" Selects, nur dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in "klassischen" Selects bisher nicht erlaubt war. Wenn dies enthalten ist, ersetzt es das Standard-"Button"-Rendering des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Button** bezeichnet (da es der Button ist, den Sie drücken müssen, um den Drop-Down-Picker zu öffnen).
  > [!NOTE]
  > Der Select-Button ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), damit interaktive Kinder (zum Beispiel Links oder Buttons) enthalten sein können, aber dennoch als einzelner Button für Interaktionen behandelt wird — zum Beispiel werden die Kind-Elemente nicht fokussierbar oder klickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert im _geschlossenen_ `<select>`-Element anzuzeigen.
  Es enthält einen Klon des Inhalts des aktuell ausgewählten `<option>`-Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Pickers anvisiert. Dazu gehören alle Elemente innerhalb des `<select>`-Elements, außer dem ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die vom Browser definierten Standardstile und das Verhalten für anpassbare Selects einfügt.
- Die {{cssxref(":open")}}-Pseudoklasse, die den Select-Button anvisiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol im Select-Button anvisiert — den Pfeil, der nach unten zeigt, wenn der Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anvisiert.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen im aktuell ausgewählten `<option>`-Element anvisiert, um eine optische Anzeige zu geben, welches ausgewählt ist.

Darüber hinaus hat das `<select>`-Element und sein Drop-Down-Picker eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verknüpft ist. Die vom Browser vorgegebenen Stile positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die standardmäßig festgelegten Browserstile definieren auch einige Position-Try-Fallbacks, die den Picker neu positionieren, wenn die Gefahr besteht, dass er über den Viewport hinausgeht. Position-Try-Fallbacks werden in [Umgang mit Overflow: Try-Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Tabellen zur Browser-Kompatibilität auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} anzeigen.

Sehen wir uns alle oben genannten Funktionen in Aktion an, indem wir das Beispiel vom Anfang der Seite durchgehen.

## Anpassbares Select-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, mit dem Sie ein Haustier auswählen können. Das Markup sieht folgendermaßen aus:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut ist auf den Symbolen enthalten, damit sie vor unterstützenden Technologien verborgen werden und die Optionswerte nicht doppelt angesagt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast das gleiche wie das Markup eines "klassischen" `<select>`, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur stellt den Select-{{htmlelement("button")}} dar. Durch das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements klont der Browser das derzeit ausgewählte {{htmlelement("option")}} innerhalb des Buttons, den Sie dann [mit benutzerdefinierten Styles versehen können](#anpassen_des_stylings_der_inhalte_der_ausgewählten_option_innerhalb_des_select-buttons). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser auf das Rendering des Textes der ausgewählten Option innerhalb des Standard-Buttons zurück, was es schwieriger macht, es zu stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um das anzuzeigen, was Sie im geschlossenen `<select>` anzeigen möchten, sollten dabei jedoch vorsichtig sein. Was Sie einschließen, kann den barrierefreien Wert beeinflussen, der für unterstützende Technologien für das `<select>`-Element bereitgestellt wird.
- Der Rest des `<select>`-Inhalts stellt den Drop-Down-Picker dar, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können andere Inhalte in den Picker einfügen, es wird jedoch nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie auch andere Markup-Strukturen wie Bilder, andere nicht-interaktive textbasierte semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente verwenden, um andere Inhalte hinzuzufügen. Beachten Sie jedoch, dass dies nicht Bestandteil des übermittelbaren Wertes sein würde. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und eine Textbeschriftung enthalten, sodass jedes Element unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt nicht nur aus Textknoten, sondern auch aus mehrstufigen DOM-Unterbäumen bestehen kann, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} darauf ausgeführt und das Ergebnis wird als `<select>`-Wert festgelegt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf ein klassisches `<select>`-Erlebnis zurückzugreifen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert, und die Nicht-Text-`<option>`-Inhalte werden entfernt, um nur die Textknoten-Inhalte übrig zu lassen, aber das Ergebnis funktioniert dennoch.

## Wechsel zum benutzerdefinierten Select-Rendering

Um sich in die benutzerdefinierte Select-Funktionalität und minimalen Browser-Basisstile einzuklinken (und das durch das Betriebssystem bereitgestellte Styling zu entfernen), müssen sowohl Ihr `<select>`-Element als auch sein Drop-Down-Picker (dargestellt durch das `::picker(select)`-Pseudo-Element) einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können wählen, nur das `<select>`-Element für die neue Funktionalität einzuklinken und den Picker mit dem Standard-OS-Styling zu belassen, jedoch werden Sie in den meisten Fällen beide einklinken wollen. Sie können den Picker nicht einklinken, ohne das `<select>`-Element einzuklinken.

Sobald dies erledigt ist, erhalten Sie eine sehr einfache Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind jetzt frei, dies nach Belieben zu stylen. Um zu beginnen, hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (welches sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}}-Werte gesetzt sowie eine {{cssxref("transition")}}, damit die Hintergrundänderung sanft animiert wird:

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

Um das Symbol im Select-Button zu stylen — den Pfeil, der nach unten zeigt, wenn der Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element anvisieren. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Anschließend wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert — die den Select-Button nur anvisiert, wenn der Drop-Down-Picker geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Sehen wir uns die bisherige Arbeit an — beachten Sie, wie der Picker-Pfeil sich sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Drop-Down-Pickers

Der Drop-Down-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element anvisiert werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, das nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet das alle `<option>`-Elemente und deren Inhalte.

Zunächst wird die standardmäßige schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> Das Argument, das an das `::picker()`-Pseudo-Element übergeben wird, stellt den Typ des Elements dar, dessen Picker Sie anvisieren möchten — in diesem Fall `<select>`-Elemente. Wenn Sie den Picker eines bestimmten `<select>`-Elements und nicht aller anvisieren möchten, können Sie das `::picker()`-Pseudo-Element mit einem anderen Selektor kombinieren. Zum Beispiel hat unser Beispiel-`<select>` eine ID von `pet-select`, sodass dessen Picker exklusiv mit `#pet-select::picker(select) { ... }` anvisiert werden kann.

Nun werden die `<option>`-Elemente gestylt. Sie sind layoutiert mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), richten sie alle am Anfang des Flexcontainers aus und fügen eine `20px` {{cssxref("gap")}} zwischen jedem hinzu. Jedes `<option>` erhält auch die gleichen {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}}-Werte wie das `<select>`, um ein einheitliches Erscheinungsbild zu erzeugen:

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
> Anpassbare `<select>`-Element-`<option>`s haben standardmäßig `display: flex` gesetzt, aber es ist trotzdem in unserem Stylesheet enthalten, um zu verdeutlichen, was passiert.

Anschließend wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}}-Pseudoklassen verwendet, um eine geeignete {{cssxref("border-radius")}} auf die oberen und unteren `<option>`-Elemente zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen – außer dem letzten, damit die Rahmen nicht unordentlich und doppelt aussehen. Wir setzen auch den gleichen `border-radius` auf den äußeren `::picker(select)`-Container, damit wir nicht mit einer hässlichen quadratischen weißen Box um die Optionen herum enden, wenn wir entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als Nächstes wird eine andere `background`-Farbe auf die ungeraden `<option>`-Elemente mithilfe von {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um Zebramusterung zu implementieren, und eine andere `background`-Farbe wird auf die `<option>`-Elemente bei Fokussierung und Hover gesetzt, um einen nützlichen visuellen Höhepunkt während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich für diesen Abschnitt wird eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole (enthalten innerhalb von `<span>`-Elementen mit einer Klasse von `icon`) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der störenden Abstände an den block-Anfangs- und block-Endkanten der Symbol-Emojis zu entfernen, um sie besser mit den Textlabels auszurichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert nun folgendermaßen:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen des Stylings der Inhalte der ausgewählten Option innerhalb des Select-Buttons

Wenn Sie in den letzten Live-Beispielen eine Haustieroption auswählen, bemerken Sie ein Problem — die Haustiersymbole führen dazu, dass der Select-Button in der Höhe zunimmt, was auch die Position des Picker-Symbols verändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Label.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es im `<selectedcontent>` enthalten ist, das die Inhalte der ausgewählten `<option>` darstellt, wie sie im Select-Button erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der `<option>`-Inhalte, wie sie im Drop-Down-Picker erscheinen.

## Styling der aktuell ausgewählten Option

Um die derzeit ausgewählte `<option>` zu stylen, wie sie im Drop-Down-Picker erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse anvisieren. Diese wird verwendet, um das {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahlhäkchens

Sie haben wahrscheinlich bemerkt, dass beim Öffnen des Pickers, um eine Auswahl zu treffen, die derzeit ausgewählte `<option>` ein Häkchen am Inline-Start hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element anvisiert werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden (zum Beispiel über `display: none`).

Sie könnten auch etwas Interessanteres damit machen — früher wurden die `<option>`-Elemente horizontal mit Flexbox layoutiert, wobei die Flex-Elemente am Anfang der Reihe ausgerichtet wurden. In der unten stehenden Regel wird das Häkchen vom Anfang der Reihe zum Ende verschoben, indem ihm ein {{cssxref("order")}}-Wert größer als `0` gegeben und es mit einem `auto` {{cssxref("margin-left")}}-Wert ans Ende der Reihe ausgerichtet wird (siehe [Ausrichtung und Auto-Margen](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudo-Elemente sind nicht im Barrierefreiheitsbaum enthalten, sodass jegliche generierten {{cssxref("content")}}-Inhalte auf ihnen nicht von unterstützenden Technologien angesagt werden. Sie sollten dennoch sicherstellen, dass das neue Symbol, das Sie setzen, visuell für den vorgesehenen Zweck sinnvoll ist.

Sehen wir uns wieder an, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Pickers mittels Popover-Zuständen

Der Select-Button des anpassbaren `<select>`-Elements und der Drop-Down-Picker erhalten automatisch eine Invoker/Popover-Beziehung, wie in [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die dies für `<select>`-Elemente bringt; unser Beispiel nutzt die Fähigkeit, zwischen Popover-versteckten und angezeigten Zuständen mittels Übergängen zu animieren. Die {{cssxref(":open")}}-Pseudoklasse repräsentiert Select-Elemente in einem offenen Zustand.

Die Technik wird in diesem Abschnitt schnell behandelt — lesen Sie [Animieren von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zunächst wird der Picker mit `::picker(select)` anvisiert und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies lässt alle Eigenschaften, die sich ändern, wenn der Popover-Zustand von versteckt zu angezeigt wechselt, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übertragenen Eigenschaften umfasst `opacity`, jedoch auch zwei diskrete Eigenschaften, deren Werte durch die standardmäßigen Browserstile gesetzt werden:

- {{cssxref("display")}}
  - : Der `display`-Wert wechselt von `none` zu `block`, wenn der Popover-Zustand von versteckt zu angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert wechselt von `none` zu `auto`, wenn der Popover-Zustand von versteckt zu angezeigt wechselt, um ihn in die {{Glossary("top_layer", "Top-Schicht")}} zu befördern, dann zurück, wenn er versteckt wird, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der Top-Schicht bis zum Abschluss des Übergangs verzögert wird, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete)-Wert ist notwendig, um diskrete Eigenschaftsanimationen zu ermöglichen.

Anschließend wird der Picker im angezeigten Zustand mit `:open::picker(select)` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
:open::picker(select) {
  opacity: 1;
}
```

Schließlich, da der Picker während der Verschiebung von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, übergangen wird, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks spezifiziert werden:

```css live-sample___full-render
@starting-style {
  :open::picker(select) {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und auszublenden, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mittels Ankerpositionierung

Der Select-Button eines anpassbaren `<select>`-Elements und der Drop-Down-Picker haben eine implizite Ankerreferenz, und der Picker ist automatisch mit dem Select-Button über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verbunden. Das bedeutet, dass keine explizite Verknüpfung mittels der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden muss.

Darüber hinaus bieten die [standardmäßigen Browserstile eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker gesetzt, indem die {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unter der unteren Kante des Select-Buttons positioniert wird, und die linke Kante des Pickers immer `10%` der Breite des Select-Buttons vom linken Rand aus positioniert wird.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um den Picker nicht mehr an das `<select>`-Element anzudocken, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Pickers auf einen Ankernamen setzen, der nicht im aktuellen Dokument existiert, z. B. `--not-an-anchor-name`. Siehe auch [entfernen einer Ankerverknüpfung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Hauptergebnis des endgültigen Beispiels

Nach den letzten beiden Abschnitten wird unser `<select>` in diesem aktualisierten Zustand wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Styling von Optgroups

Das Standardstyling von {{htmlelement("optgroup")}}-Elementen in anpassbaren Selects ist dasselbe wie in klassischen `<select>`-Elementen — fett geschrieben und weniger eingerückt als die enthaltenen Optionen. In anpassbaren Selects verhalten sich Optgroups jedoch wie jeder andere Block-Level-Container und können entsprechend gestylt werden. Darüber hinaus wird das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um eine Beschriftung zu bieten, die leicht anvisiert und gestylt werden kann. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist, und hat die gleiche Semantik.

Sehen wir uns ein grundlegendes Beispiel an. Unser HTML sieht so aus:

```html live-sample___optgroup-example
<label for="animal-select">Select animal:</label><br />
<select id="animal-select">
  <optgroup>
    <legend>Domestic</legend>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="guinea">Guinea pig</option>
  </optgroup>
  <optgroup>
    <legend>Farm</legend>
    <option value="chicken">Chicken</option>
    <option value="cow">Cow</option>
    <option value="pig">Pig</option>
  </optgroup>
</select>
```

Wir beginnen unser CSS, indem wir die `<optgroup>`-Elemente selbst stylen. Dies sind größtenteils rudimentäre Stile, um die Optgroups wie Container für ihre Nachkommen-`<option>`-Elemente aussehen zu lassen. Wir haben ihnen ein wenig {{cssxref("margin-top")}} gegeben, um etwas Abstand zwischen jeder Optgroup und zwischen der oberen Optgroup und dem Select-Button zu schaffen.

```css hidden live-sample___optgroup-example
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

select,
::picker(select) {
  appearance: base-select;
  width: 200px;
}

select {
  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
}

::picker(select) {
  border: none;
}
```

```css live-sample___optgroup-example
optgroup {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #eee;
  padding: 10px 0 0 0;
  margin-top: 5px;
}
```

Als Nächstes stylen wir die `<legend>`-Elemente, indem wir den Text zentrieren und etwas Rand einfügen, um sie von den Optionen zu trennen.

```css live-sample___optgroup-example
optgroup legend {
  text-align: center;
  margin-bottom: 10px;
}
```

Schließlich stylen wir die `<option>`-Elemente, indem wir ihnen eine {{cssxref("background")}}-Farbe und etwas {{cssxref("padding")}} geben und die untere {{cssxref("border-radius")}} des letzten `<option>` in jedem Fall stylen, um es in die abgerundeten Ecken des übergeordneten `<optgroup>` einzupassen. Wir implementieren auch Zebra-Streifen, indem wir den ungeraden `<option>`-Elementen eine andere Hintergrundfarbe geben, und bieten einen unterscheidbaren Options-Hover- und Fokus-Zustand.

```css live-sample___optgroup-example
option {
  background: #eee;
  padding: 10px;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

Wir haben den Rest der Styles der Kürze halber ausgeblendet.

Das Beispiel rendert so:

{{EmbedLiveSample("optgroup-example", "100%", "410px")}}

```css hidden live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render live-sample___optgroup-example
@supports not (appearance: base-select) {
  body::before {
    content: "Your browser does not support `appearance: base-select`.";
    color: black;
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

## Browser-Kompatibilität

{{Compat}}

## Als Nächstes

Im nächsten Artikel dieses Moduls zeigen wir Ihnen, wie Sie [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes) stylen können.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}
