---
title: Anpassen von Auswahl-Elementen
short-title: Anpassbare Auswahlen
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 485cdaae5bb9cbf98715067b6b412877f83498fb
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie vollständig anpassbare {{htmlelement("select")}}-Elemente mit experimentellen Browser-Funktionen erstellen können. Dies beinhaltet die vollständige Kontrolle über die Gestaltung des Auswahl-Buttons, des Drop-Down-Pickers, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Funktionen werden derzeit nur eingeschränkt von Browsern unterstützt. Überprüfen Sie die Browser-Kompatibilitätstabellen auf den jeweiligen Feature-Referenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen treten Hydrierungsfehler auf, wenn das Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, weil sie interne Komponenten enthalten, die auf Betriebssystemebene gestylt werden und nicht mit CSS angesprochen werden können. Dazu gehören der Drop-Down-Picker, das Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option — abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek —, einen {{cssxref("appearance")}}-Wert von `none` auf das `<select>`-Element zu setzen, um einen Teil des OS-Designs zu entfernen, und dann CSS zu verwenden, um die Elemente zu gestalten, die gestylt werden können. Diese Technik wird im [Erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende nur mit HTML und CSS in unterstützenden Browsern vollständig anzupassen. Dies umfasst das Layout von `<select>` und Drop-Down-Picker, Farbschema, Icons, Schriftart, Übergänge, Positionierung, Markierungen zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung der bestehenden Funktionalität und fallen in Browsern, die sie nicht unterstützen, auf "klassische" Auswahlen zurück.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel aufbauen.

## Welche Funktionen umfasst eine anpassbare Auswahl?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Auswahlen, mit der Ausnahme, dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in "klassischen" Auswahlen vorher nicht erlaubt war. Wenn dies enthalten ist, ersetzt es das Standard-"Button"-Rendering des geschlossenen `<select>`-Elements. Dies wird allgemein als **select button** bezeichnet (da es der Button ist, den Sie drücken müssen, um den Drop-Down-Picker zu öffnen).
  > [!NOTE]
  > Der Auswahl-Button ist standardmäßig [träg](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass er, wenn interaktive Kinder (zum Beispiel Links oder Buttons) enthalten sind, weiterhin wie ein einzelner Button für Interaktionszwecke behandelt wird – zum Beispiel werden die Kind-Elemente nicht fokussierbar oder klickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert im _geschlossenen_ `<select>`-Element anzuzeigen.
  Dies enthält einen Klon des aktuell ausgewählten `<option>`-Elementinhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) unter der Haube).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Pickers anvisiert. Dies schließt alle Elemente innerhalb des `<select>`-Elements ein, außer das erste Kind `<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement in die browserdefinierten Standardstile und -verhalten für anpassbare Auswahlen einführt.
- Die {{cssxref(":open")}}-Pseudoklasse, die den Auswahl-Button anspricht, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudoelement, das das Symbol im Auswahl-Button anspricht — den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen innerhalb des aktuell ausgewählten `<option>`-Elements anspricht, um visuell anzuzeigen, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und sein Drop-Down-Picker das folgende Verhalten, das ihnen automatisch zugewiesen wird:

- Sie haben eine Invoker/Popover-Beziehung, wie von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert, die die Möglichkeit bietet, den Picker beim Öffnen über die {{cssxref(":popover-open")}}-Pseudoklasse auszusuchen. Weitere Details zum Popover-Verhalten finden Sie unter [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using).
- Sie haben eine implizite Anker-Referenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden ist. Die Standardstile des Browsers positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Standardstile des Browsers definieren auch einige Fallback-Position-Try-Optionen, die den Picker neu positionieren, wenn er Gefahr läuft, den Ansichtsfensterrahmen zu überschreiten. Fallback-Position-Try-Optionen werden in [Umgang mit Überlauf: Position-try-Fallbacks und konditionelles Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browserunterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} betrachten.

Sehen wir uns all diese Funktionen in Aktion an, indem wir das Beispiel oben auf der Seite durchgehen.

## Anpassbare Auswahl-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, mit dem Sie ein Haustier auswählen können. Das Markup ist wie folgt:

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist auf den Icons enthalten, damit sie von unterstützenden Technologien verborgen werden und die Optionswerte nicht doppelt angesagt werden (zum Beispiel "Katze Katze").

Das Beispielmarkup ist fast dasselbe wie das "klassische" `<select>`-Markup, mit den folgenden Unterschieden:

- Die Struktur `<button><selectedcontent></selectedcontent></button>` stellt den Auswahl-{{htmlelement("button")}} dar.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser das aktuell ausgewählte {{htmlelement("option")}} innerhalb des Buttons klont, welches Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassen_des_stylings_der_ausgewählten_optionsinhalte_im_auswahl-button). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser auf die Darstellung des Textes der ausgewählten Option im Standard-Button zurück und Sie können sie nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>`s einfügen, um dort zu zeigen, was auch immer Sie im geschlossenen `<select>` anzeigen möchten, aber seien Sie vorsichtig dabei. Das, was Sie einfügen, kann den zugänglichen Wert verändern, der unterstützenden Technologien für das `<select>`-Element bereitgestellt wird.
- Der Rest des `<select>`-Inhalts stellt den Drop-Down-Picker dar, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Optionen im Picker darstellen. Sie können andere Inhalte im Picker einfügen, aber es wird nicht empfohlen.
- Traditionell können `<option>`-Elemente nur Text enthalten, aber in einer anpassbaren Auswahl können Sie andere Markup-Strukturen wie Bilder, andere nicht interaktive textebene semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente verwenden, um andere Inhalte einzufügen, obgleich Sie bedenken sollten, dass diese nicht im submitbaren Wert enthalten wären. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Icon und ein Textlabel enthalten, so dass jedes für sich gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den aktuellen `<select>`-Wert über JavaScript extrahiert. Das ausgewählte `<option>`-Element [`textContent`](/de/docs/Web/API/Node/textContent) wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf angewendet und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es Browsern, die dies nicht unterstützen, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die Struktur `<button><selectedcontent></selectedcontent></button>` wird vollständig ignoriert und die nicht-textuellen `<option>`-Inhalte werden entfernt, um nur die Textknoten-Inhalte zu lassen, aber das Ergebnis bleibt funktionsfähig.

## Einrichten der benutzerdefinierten Auswahl-Darstellung

Um die benutzerdefinierte Funktionalität für die Auswahl und minimalen browserseitigen Basisstile zu aktivieren (und die vom Betriebssystem bereitgestellten Stile zu entfernen), müssen sowohl Ihr `<select>`-Element als auch dessen Drop-Down-Picker (repräsentiert durch das `::picker(select)` Pseudoelement) einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können wählen, nur das `<select>`-Element für die neue Funktionalität zu optieren, während Sie dem Picker das Standardbetriebssystem-Design beibehalten, aber in den meisten Fällen möchten Sie beide optieren. Sie können den Picker nicht optieren, ohne das `<select>`-Element zu optieren.

Sobald dies geschehen ist, ergibt sich ein sehr schlichtes Rendering eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind nun frei, dieses nach Belieben zu gestalten. Zu Beginn hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (welches sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte gesetzt, plus eine {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert wird:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select {
  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #ddd;
}
```

## Styling des Picker-Symbols

Um das Symbol innerhalb des Auswahl-Buttons zu stylen — den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudoelement anvisieren. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, damit Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert — die den Auswahl-Button nur dann anspricht, wenn der Drop-Down-Picker geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an — beachten Sie, wie der Picker-Pfeil sich sanft um 180 Grad dreht, wenn sich das `<select>` öffnet und schließt:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Drop-Down-Pickers

Der Drop-Down-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement anvisiert werden. Wie bereits erwähnt, enthält der Picker alles, was sich innerhalb des `<select>`-Elements befindet, mit Ausnahme des Buttons und des `<selectedcontent>`. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zunächst wird die Standard-Schwarzfarbe des {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestylt. Sie sind mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angeordnet und alle zum Anfang des Flex-Containers ausgerichtet, mit einem `20px` {{cssxref("gap")}} zwischen jedem. Jedes `<option>` erhält außerdem dieselbe {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Aussehen und Gefühl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}
```

> [!NOTE]
> Anpassbare `<select>`-Element `<option>`s haben standardmäßig `display: flex` eingestellt, aber es ist trotzdem in unserem Stylesheet enthalten, um klarzustellen, was passiert.

Als nächstes wird eine Kombination aus den Pseudoklassen {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}} verwendet, um eine entsprechende {{cssxref("border-radius")}} an den oberen und unteren Ecken des Pickers zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, damit die Ränder nicht unordentlich und doppelt aussehen:

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

Dann wird eine andere `background` Farbe auf den ungeraden `<option>` Elementen mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} eingestellt, um Zebra-Streifen zu implementieren, und eine andere `background` Farbe wird auf die `<option>` Elemente bei Fokus und Hover gesetzt, um während der Auswahl eine nützliche visuelle Hervorhebung zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

Zum Schluss für diesen Abschnitt wird eine größere {{cssxref("font-size")}} auf den `<option>` Symbolen (die sich in `<span>` Elementen mit einer Klasse von `icon` befinden) gesetzt, um sie größer zu machen und die {{cssxref("text-box")}} Eigenschaft wird verwendet, um etwas von dem störenden Abstand an den Block-Anfangs- und Block-End-Rändern der Symbol-Emojis zu entfernen, wodurch sie besser mit den Textbeschriftungen ausgerichtet werden:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen des Stylings der ausgewählten Optionsinhalte im Auswahl-Button

Wenn Sie eine Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken — die Haustiersymbole führen dazu, dass sich der Auswahl-Button in der Höhe vergrößert, was auch die Position des Picker-Symbols verändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Label.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es sich in `<selectedcontent>` befindet, welches die Inhalte der ausgewählten `<option>` darstellt, wie sie im Auswahl-Button erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} versteckt:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies hat keinen Einfluss auf das Styling der `<option>`-Inhalte, wie sie im Drop-Down-Picker erscheinen.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` zu stylen, wie sie im Drop-Down-Picker erscheint, können Sie sie mit der {{cssxref(":checked")}} Pseudoklasse anvisieren. Dies wird verwendet, um dem ausgewählten `<option>` Element die {{cssxref("font-weight")}} `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, das derzeit ausgewählte `<option>` ein Häkchen an seinem Inline-Start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}} Pseudoelement angesprochen werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden (zum Beispiel über `display: none`).

Sie könnten sich auch entscheiden, etwas Interessanteres damit zu machen — früher wurden die `<option>` Elemente horizontal mit flexbox angeordnet, wobei die flex Elemente am Start der Zeile ausgerichtet wurden. In der unten stehenden Regel wird das Häkchen von Anfang der Zeile zum Ende bewegt, indem ein {{cssxref("order")}} Wert größer als `0` darauf gesetzt wird und es am Ende der Zeile mit einem `auto` {{cssxref("margin-left")}} Wert ausgerichtet wird (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der {{cssxref("content")}} Eigenschaftswert auf ein anderes Emoji gesetzt, um ein anderes anzuzeigendes Symbol festzulegen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon` Pseudoelemente sind nicht im Barrierefreiheit-Baum enthalten, sodass generierter {{cssxref("content")}} auf ihnen nicht von unterstützenden Technologien angesagt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck Sinn macht.

Lassen Sie uns erneut überprüfen, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten sieht wie folgt aus:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Pickers mit Popover-Zuständen

Der auswählbare `<select>`-Element-Button und der Drop-Down-Picker erhalten automatisch eine Invoker/Popover-Beziehung, wie in [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente; unser Beispiel nutzt die Fähigkeit, zwischen Popover-versteckten und angezeigten Zuständen mit Übergängen zu animieren. Die {{cssxref(":popover-open")}} Pseudoklasse stellt Popover im angezeigten Zustand dar.

Die Technik wird in diesem Abschnitt schnell behandelt — lesen Sie [Animieren von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}} Wert von `0` und einen `transition` Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die bei einem Zustandswechsel des Popovers von versteckt zu angezeigt ihren Wert ändern, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der Übergangseigenschaften umfasst `opacity`, sie enthält jedoch auch zwei diskrete Eigenschaften, deren Werte durch die Standardstile des Browsers festgelegt werden:

- {{cssxref("display")}}
  - : Der `display`-Wert wird von `none` zu `block` geändert, wenn der Popover-Zustand von versteckt zu angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar werden.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von versteckt zu angezeigt wechselt, um ihn in die {{Glossary("top_layer", "Top-Schicht")}} zu befördern, und dann zurück, wenn es versteckt wird, um es zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers von der Top-Schicht bis zum Abschluss des Übergangs verzögert wird, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) wird benötigt, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity` Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich muss der Anfangszustand des Übergangs, da der Picker während des Wechsels von `display: none` zu einem `display`-Wert animiert wird, der ihn sichtbar macht, innerhalb eines {{cssxref("@starting-style")}} Blocks spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und auszublenden, wenn sich das `<select>` öffnet und schließt.

## Positionierung des Pickers durch Ankerpositionierung

Ein anpassbares `<select>`-Element hat eine implizite Anker-Referenz, und der Picker wird automatisch mit dem Auswahl-Button über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden. Dies bedeutet, dass keine explizite Verbindung über die {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden muss.

Darüber hinaus [definieren die Standardstile des Browsers eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker über die {{cssxref("anchor()")}} Funktion in seinen {{cssxref("top")}} und {{cssxref("left")}} Eigenschaftswerten festgelegt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Das Ergebnis ist, dass die obere Kante des Pickers immer 1 Pixel unter der unteren Kante des Auswahl-Buttons und die linke Kante des Pickers immer `10%` der Breite des Auswahl-Buttons von dessen Kante entfernt positioniert ist.

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültig aktualisierte Zustand unseres `<select>` so gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassen anderer klassischer Auswahleigenschaften

Die obigen Abschnitte deckten alle neuen Funktionen ab, die in anpassbaren Auswahlen verfügbar sind, und zeigten, wie sie sowohl mit klassischen einzeiligen Auswahlen als auch mit verwandten modernen Funktionen wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Elementmerkmale, die oben nicht erwähnt wurden; dieser Abschnitt behandelt, wie sie derzeit zusammen mit anpassbaren Auswahlen funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Derzeit gibt es keine spezifizierte Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standarddesign von `<optgroup>`-Elementen ist dasselbe wie bei klassischen `<select>`-Elementen — gefettet und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass die `<optgroup>`-Elemente so gestaltet sind, dass sie in das Gesamtdesign passen, und bedenken Sie, dass sie sich genauso verhalten, wie man es von Container in konventionellem HTML erwartet. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein leicht ansprechbares und gestaltbares Label bereitzustellen. Dies ersetzt jeden im `label`-Attribut des `<optgroup>`-Elements gesetzten Text und hat dieselbe Semantik.

## Als nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formulare in unterschiedlichen Zuständen zu gestalten.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
