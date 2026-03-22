---
title: Anpassbare Auswahl-Elemente
short-title: Anpassbare Auswahlen
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie vollständig angepasste {{htmlelement("select")}} Elemente mit experimentellen Browserfunktionen erstellt werden können. Dazu gehört die vollständige Kontrolle über die Gestaltung des Auswahlknopfes, des Dropdown-Auswählers, des Pfeilsymbols, des Häkchens für die aktuelle Auswahl und jedes einzelne {{htmlelement("option")}} Element.

> [!WARNING]
> Die in diesem Artikel demonstrierten CSS- und HTML-Funktionen haben derzeit begrenzte Browser-Unterstützung; prüfen Sie die Tabellen zur Browser-Kompatibilität auf den individuellen Feature-Referenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Fehler bei der Hydratation, wenn Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen von `<select>` Elementen anzupassen, da sie interne Komponenten enthalten, die auf Betriebssystemebene gestylt sind und nicht mit CSS gezielt angesprochen werden können. Dazu gehören der Dropdown-Auswähler, das Pfeilsymbol usw.

Bisher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – das Setzen eines {{cssxref("appearance")}} Wertes von `none` auf das `<select>` Element, um einige der auf Betriebssystemebene vorhandenen Stile zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird im [Erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>` Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende nur mit HTML und CSS zu erstellen, die in [unterstützten Browsern](#browser-kompatibilität) vollständig angepasst sind. Dazu gehören das Layout von `<select>` und Dropdown-Auswähler, Farbschema, Symbole, Schriftarten, Übergänge, Positionierung, Markierungen zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung der bestehenden Funktionalität und fallen in Browsern, die sie nicht unterstützen, auf "klassische" Auswahlen zurück.

Sie erfahren, wie Sie dieses Beispiel in den folgenden Abschnitten erstellen können.

> [!NOTE]
> Dieser Artikel behandelt den Hintergrund von anpassbaren Auswahlen und zeigt, wie man "Einzel-Dropdown" Auswahlen erstellt, die diese Funktionen nutzen – das sind Dropdown-Menüs, die jeweils eine einzelne Option anzeigen und eine einzelne Option zur Auswahl erlauben.
>
> Informationen zum Erstellen von "Listenfeld"-Auswahlen – Menüs, die mehrere Optionen auf einmal anzeigen und eine einzelne Option oder mehrere Optionen zur Auswahl erlauben – finden Sie unter [Anpassbare Listenfeldauswahlen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes).

## Welche Funktionen umfassen ein anpassbares Select?

Sie können anpassbare `<select>` Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}} Elemente. Diese funktionieren genauso wie in "klassischen" Auswahlen, außer dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}} Element, das als erstes Kind innerhalb des `<select>` Elements enthalten ist, was zuvor in "klassischen" Auswahlen nicht erlaubt war. Wenn dies enthalten ist, ersetzt es das Standard-"Knopf"-Rendering des geschlossenen `<select>` Elements. Dies wird allgemein als **Select-Button** bezeichnet (da es der Knopf ist, den Sie drücken müssen, um den Dropdown-Auswähler zu öffnen).
  > [!NOTE]
  > Der Select-Button ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass selbst wenn interaktive Kinder (zum Beispiel Links oder Schaltflächen) darin enthalten sind, er immer noch wie eine einzelne Schaltfläche für Interaktionszwecke behandelt wird – zum Beispiel sind die Kinderelemente nicht fokussierbar oder anklickbar.
- Das {{htmlelement("selectedcontent")}} Element kann optional innerhalb des ersten Kind-`<button>` Elements des `<select>` Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>` Elements anzuzeigen.
  Es enthält einen Klon des Inhalts des aktuell ausgewählten `<option>` Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}} Pseudoelement, das die gesamten Inhalte des Pickers anvisiert. Dies umfasst alle Elemente innerhalb des `<select>` Elements, außer dem ersten Kind-`<button>`.
- Der {{cssxref("appearance")}} Eigenschaftswert `base-select`, der das `<select>` Element und das `::picker(select)` Pseudoelement in die standardmäßigen Browser-Stile und -Verhaltensweisen für anpassbare Selects überführt.
- Die {{cssxref(":open")}} Pseudoklasse, die den Select-Button anvisiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}} Pseudoelement, das das Symbol innerhalb des Select-Buttons anvisiert – den Pfeil, der nach unten zeigt, wenn die Select geschlossen ist.
- Die {{cssxref(":checked")}} Pseudoklasse, die das aktuell ausgewählte `<option>` Element anvisiert.
- Das {{cssxref("::checkmark")}} Pseudoelement, das das Häkchen im aktuell ausgewählten `<option>` Element anvisiert, um eine visuelle Anzeige dafür zu geben, welches ausgewählt ist.

Darüber hinaus hat das `<select>` Element und sein Dropdown-Auswähler einen impliziten Ankerverweis, was bedeutet, dass der Picker automatisch mit dem `<select>` Element über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verbunden ist. Die Standard-Browserstile positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie in [Positioning elements relative to their anchor](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erläutert. Die Standard-Browserstile definieren auch einige Fallback-Positionen, die den Picker neu positionieren, wenn er in Gefahr läuft, über den Viewport hinauszugehen. Fallback-Positionen werden in [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>`s überprüfen, indem Sie die Tabellen zur Browser-Kompatibilität auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Sehen wir uns alle oben genannten Funktionen in Aktion an, indem wir das am Anfang der Seite gezeigte Beispiel durchgehen.

## Anpassbare Select-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}} Menü, das Ihnen ermöglicht, ein Haustier auszuwählen. Das Markup sieht folgendermaßen aus:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut ist auf den Icons enthalten, damit sie von unterstützenden Technologien verborgen werden und die Optionswerte nicht doppelt angekündigt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast dasselbe wie das "klassische" `<select>` Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>` Struktur stellt den Select {{htmlelement("button")}} dar.
  Das Hinzufügen des {{htmlelement("selectedcontent")}} Elements bewirkt, dass der Browser das aktuell ausgewählte {{htmlelement("option")}} in den Button klont, den Sie dann [mit benutzerdefinierten Styles versehen können](#anpassung_der_stilgestaltung_der_inhalte_der_ausgewählten_option_innerhalb_des_select-buttons). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, wird der Browser standardmäßig den Text der ausgewählten Option im Standardknopf rendern, und Sie können ihn nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebigen Inhalt innerhalb des `<button>` einfügen, um zu rendern, was Sie möchten, aber seien Sie vorsichtig dabei. Was Sie einfügen, kann den barrierefreien Wert verändern, der für unterstützende Technologien für das `<select>` Element exponiert wird.
- Der Rest der `<select>` Inhalte stellt den Dropdown-Auswähler dar, der normalerweise auf `<option>` Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können anderen Inhalt in den Picker einfügen, aber es wird nicht empfohlen.
- Traditionell konnten `<option>` Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive Text-Ebenen-Semantikelemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente verwenden, um weiteren Inhalt hinzuzufügen, beachten Sie jedoch, dass dieser nicht im übermittelbaren Wert enthalten wäre. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}} Elemente, die jeweils ein Icon und ein Textlabel enthalten, sodass jedes individual gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>` Inhalt DOM-Unterbäume enthalten kann und nicht nur Textknoten, gibt es Regeln darüber, wie der Browser den [aktuellen `<select>` Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der `textContent` Property-Wert des ausgewählten `<option>` Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf angewandt, und das Ergebnis wird als `<select>` Wert gesetzt.

Dieses Design erlaubt es, dass nicht unterstützende Browser auf eine klassische `<select>` Erfahrung zurückfallen. Die `<button><selectedcontent></selectedcontent></button>` Struktur wird völlig ignoriert, und der nicht-textliche `<option>` Inhalt wird entfernt, sodass nur die Textknoteninhalte übrigbleiben, aber das Ergebnis funktioniert dennoch.

## Opting in für das benutzerdefinierte Select-Rendering

Um für die Funktionen des benutzerdefinierten Selects und die minimalen Grundstile des Browsers sowie das Entfernen der vom Betriebssystem bereitgestellten Stile zu optieren, müssen Ihr `<select>` Element und sein Dropdown-Auswähler (dargestellt durch das `::picker(select)` Pseudoelement) beide einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

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

Sie können sich entscheiden, nur das `<select>` Element für die neuen Funktionen zu verwenden und den Picker mit der Standard-OS-Styling zu belassen, aber in den meisten Fällen werden Sie beide verwenden wollen. Sie können nicht nur für den Picker ohne das `<select>` Element verwenden.

Sobald dies geschehen ist, ergibt sich eine sehr schlichte Darstellung eines `<select>` Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind jetzt frei, dies in beliebiger Weise zu gestalten. Zunächst hat das `<select>` Element eigene {{cssxref("border")}}, {{cssxref("background")}} (die sich beim {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte gesetzt, plus einem {{cssxref("transition")}}, damit sich die Hintergrundänderung sanft animiert:

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

## Styling des Picker-Icons

Um das Symbol innerhalb des Select-Buttons – den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist – zu gestalten, können Sie es mit dem {{cssxref("::picker-icon")}} Pseudoelement anvisieren. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und einen `transition`, sodass Änderungen an seiner {{cssxref("rotate")}} Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}} Pseudoklasse kombiniert – die den Select-Button nur dann anvisiert, wenn der Dropdown-Auswähler geöffnet ist –, um dem Symbol einen `rotate` Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Sehen wir uns die bisherigen Arbeiten an – beachten Sie, wie der Pfeil des Pickers sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Pickers

Der Dropdown-Auswähler kann mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement anvisiert werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>` Elements, das nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet das alle `<option>` Elemente und deren Inhalte.

Zunächst wird der standardmäßige schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> Das Argument, das an das `::picker()` Pseudoelement übergeben wird, stellt den Elementtyp dar, dessen Picker Sie anvisieren möchten – in diesem Fall `<select>` Elemente. Wenn Sie den Picker eines bestimmten `<select>` Elements anstelle aller von ihnen auswählen möchten, können Sie das `::picker()` Pseudoelement mit einem anderen Selektor kombinieren. Zum Beispiel hat unser Beispiel-`<select>` eine ID von `pet-select`, sodass sein Picker exklusiv mit `#pet-select::picker(select) { ... }` anvisiert werden kann.

Jetzt werden die `<option>` Elemente gestylt. Sie werden mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) ausgelegt, wobei sie alle am Anfang des Flexcontainers ausgerichtet sind und ein `20px` {{cssxref("gap")}} zwischen ihnen haben. Jedes `<option>` erhält auch die gleiche {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}}, und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Erscheinungsbild und Verhalten zu gewährleisten:

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
> Anpassbare `<select>` Element `<option>`s haben standardmäßig `display: flex` gesetzt, aber es ist in unserem Stylesheet enthalten, um zu verdeutlichen, was passiert.

Als nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}} Pseudoklassen verwendet, um einen passenden {{cssxref("border-radius")}} auf den oberen und unteren `<option>` Elementen zu setzen und das {{cssxref("border-bottom")}} von allen `<option>` Elementen zu entfernen – außer dem letzten, damit die Rahmen nicht unordentlich und doppelt aussehen. Wir setzen auch den gleichen `border-radius` auf den äußeren `::picker(select)` Container, sodass wir nicht mit einem hässlichen quadratischen weißen Kasten um die Optionen enden, wenn wir uns entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als nächstes wird eine andere `background` Farbe auf die ungeraden `<option>` Elemente gesetzt, indem {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} verwendet wird, um Zebramuster zu implementieren, und eine andere `background` Farbe wird auf die `<option>` Elemente bei Fokus und Hover gesetzt, um eine nützliche visuelle Hervorhebung während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich für diesen Abschnitt wird eine größere {{cssxref("font-size")}} auf die `<option>` Symbole gesetzt (enthalten innerhalb von `<span>` Elementen mit einer Klasse von `icon`), um sie größer zu machen, und die {{cssxref("text-box")}} Eigenschaft wird verwendet, um einige der störenden Abstände an den Block-Start und Block-End Kanten der Icon-Emoticons zu entfernen, damit sie sich besser mit den Textlabels ausrichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert jetzt so:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung der Stilgestaltung der Inhalte der ausgewählten Option innerhalb des Select-Buttons

Wenn Sie eine Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken – die Haustier-Symbole führen dazu, dass sich der Select-Button in der Höhe vergrößert, was auch die Position des Picker-Icons verändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Label.

Dies kann behoben werden, indem das Symbol verborgen wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, das die Inhalte der ausgewählten `<option>` darstellt, wie sie innerhalb des Select-Buttons angezeigt werden. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht die Darstellung des `<option>` Inhalts, wie er innerhalb des Dropdown-Pickers erscheint.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` zu gestalten, wie sie im Dropdown-Picker erscheint, können Sie sie mit der {{cssxref(":checked")}} Pseudoklasse anvisieren. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>` Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des Häkchens der aktuellen Auswahl

Sie haben wahrscheinlich bemerkt, dass wenn Sie den Picker öffnen, um eine Auswahl zu treffen, das aktuell ausgewählte `<option>` ein Häkchen am inline-start Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}} Pseudoelement anvisiert werden. Zum Beispiel, könnten Sie dieses Häkchen verbergen wollen (zum Beispiel über `display: none`).

Sie könnten auch etwas interessanteres damit machen – früher wurden die `<option>` Elemente horizontal unter Verwendung von Flexbox ausgelegt, wobei die Flex-Elemente am Anfang der Zeile ausgerichtet wurden. In der folgenden Regel wird das Häkchen von der Anfangsposition der Zeile zur Endposition verschoben, indem ein {{cssxref("order")}} Wert darauf gesetzt wird, der größer als `0` ist, und es mit einem `auto` {{cssxref("margin-left")}} Wert zum Ende der Zeile ausgerichtet (siehe [Alignment and auto margins](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}} Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol zur Anzeige festzulegen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon` Pseudoelemente sind nicht im Barrierefreiheitsbaum enthalten, daher wird generierter {{cssxref("content")}}, der auf ihnen gesetzt ist, nicht von unterstützenden Technologien angekündigt. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell Sinn für seinen vorgesehenen Zweck macht.

Sehen wir uns erneut an, wie das Beispiel rendert. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Pickers unter Verwendung von Popover-Zuständen

Der Select-Button des anpassbaren `<select>` Elements und der Dropdown-Picker erhalten automatisch eine Invoker/Popover-Beziehung, wie im Artikel [Using the Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>` Elemente mit sich; unser Beispiel nutzt die Möglichkeit, zwischen verborgenen und sichtbaren Zuständen des Popovers unter Verwendung von Übergängen zu animieren. Die {{cssxref(":open")}} Pseudoklasse repräsentiert Select-Elemente im offenen Zustand.

Die Technik wird in diesem Abschnitt schnell behandelt – lesen Sie [Animating popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zunächst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}} Wert von `0` und einen `transition` Wert von `all 0.4s allow-discrete`. Dies führt dazu, dass alle Eigenschaften, die beim Wechsel des Popover-Zustands von verborgen zu sichtbar den Wert ändern, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergegangenen Eigenschaften umfasst `opacity`, aber es beinhaltet auch zwei diskrete Eigenschaften, deren Werte durch die Standard-Browserstile gesetzt werden:

- {{cssxref("display")}}
  - : Die `display` Werte wechseln von `none` zu `block`, wenn das Popover von verborgen zu sichtbar übergeht. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay` Wert wechselt von `none` zu `auto`, wenn das Popover von verborgen zu sichtbar wechselt, um es in die {{Glossary("top_layer", "Top-Ebene")}} zu fördern, und dann zurück, um es zu entfernen, wenn es verborgen ist. Dies muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers aus der Top-Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) wird benötigt, um Animationen von diskreten Eigenschaften zu ermöglichen.

Als nächstes wird der Picker im sichtbaren Zustand mit `:open::picker(select)` ausgewählt und erhält einen `opacity` Wert von `1` – dies ist der Endzustand des Übergangs:

```css live-sample___full-render
:open::picker(select) {
  opacity: 1;
}
```

Schließlich, da der Picker während der Bewegung von `display: none` zu einem `display` Wert, der ihn sichtbar macht, übergegangen wird, muss der Anfangszustand des Übergangs innerhalb eines {{cssxref("@starting-style")}} Blocks spezifiziert werden:

```css live-sample___full-render
@starting-style {
  :open::picker(select) {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und auszublenden, wenn das `<select>` geöffnet und geschlossen wird.

## Positionieren des Pickers unter Verwendung von Anker-Positionierung

Ein anpassbarer `<select>` Element-Select-Button und Dropdown-Picker haben einen impliziten Ankerverweis, und der Picker ist automatisch mit dem Select-Button über [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verbunden. Das bedeutet, dass eine explizite Zuweisung nicht unter Verwendung der {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften erstellt werden muss.

Darüber hinaus bieten die [Standard-Browserstile eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie in [Positioning elements relative to their anchor](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Beispiel wird die Position des Pickers relativ zu seinem Anker gesetzt, indem die {{cssxref("anchor()")}} Funktion innerhalb seiner {{cssxref("top")}} und {{cssxref("left")}} Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unter der unteren Kante des Select-Buttons positioniert wird und die linke Kante des Pickers immer `10%` der Breite des Select-Buttons von seiner linken Kante aus positioniert wird.

> [!NOTE]
> Wenn Sie den impliziten Ankerverweis entfernen möchten, um den Picker von der Verankerung am `<select>` Element zu lösen, können Sie dies tun, indem Sie die `position-anchor` Eigenschaft des Pickers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [entfernen einer Anker-Assoziation](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Hauptergebnis des Beispiels

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Styling von optgroup-Elementen

The default styling of {{htmlelement("optgroup")}} elements in customizable selects is the same as in classic `<select>` elements — bolded and indented less than the contained options. In customizable selects, however, option groups behave just like any other block-level container, and can be styled as such. In addition, the {{htmlelement("legend")}} element is allowed as a child of `<optgroup>`, to provide a label that is easy to target and style. This replaces any text set in the `<optgroup>` element's `label` attribute, and it has the same semantics.

Let's look at a basic example. Our HTML looks like this:

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

We start our CSS by styling the `<optgroup>` elements themselves. These are mostly rudimentary styles to make the optgroup elements look like containers for their descendant `<option>` elements. We've given them some {{cssxref("margin-top")}} to put some space between each optgroup, and between the top optgroup and the select button.

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

Next, we style the `<legend>` elements, aligning the text to the center and including some margin to separate them from the options.

```css live-sample___optgroup-example
optgroup legend {
  text-align: center;
  margin-bottom: 10px;
}
```

Finally, we style the `<option>` elements, providing a {{cssxref("background")}} color and some {{cssxref("padding")}} and styling the bottom {{cssxref("border-radius")}} of the last `<option>` in each case to make it fit in with the rounded corners of the parent `<optgroup>`. We also implement zebra-striping by giving the odd-numbered `<option>` elements a different background color, and provide a distinct option hover and focus state.

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

We've hidden the rest of the styles for brevity.

The example renders like this:

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

## Nächstes Mal

Im nächsten Artikel dieses Moduls zeigen wir Ihnen, wie Sie [Anpassbare Listenfeldauswahlen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes) stylen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}
