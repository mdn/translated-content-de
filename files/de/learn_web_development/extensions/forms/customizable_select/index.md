---
title: Anpasselemente für auswählbare Elemente
short-title: Anpassbare Auswahlen
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 827fdf3b0a52b14af5962cb2c9d3b59e213c2a57
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie man vollständig anpassbare {{htmlelement("select")}}-Elemente mithilfe experimenteller Browserfunktionen erstellt. Dies beinhaltet die vollständige Kontrolle über die Gestaltung des Auswahl-Buttons, des Drop-down-Pickers, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel vorgestellten CSS- und HTML-Funktionen haben derzeit nur begrenzte Browser-Unterstützung; überprüfen Sie die Tabellen zur Browser-Kompatibilität auf den individuellen Feature-Referenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Rendering-Fehler bei der serverseitigen Darstellung (SSR).

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da sie intern von Betriebssystemen gestaltet werden, die mit CSS nicht anvisiert werden können. Dazu gehören der Drop-down-Picker, das Pfeilsymbol usw.

Früher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – den {{cssxref("appearance")}}-Wert des `<select>`-Elements auf `none` zu setzen, um einige der Betriebssystem-basierten Stile zu entfernen, und dann CSS zu verwenden, um die Teile zu gestalten, die stilisiert werden können. Diese Technik wird im [Fortgeschrittenen Formularstil](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende zu erstellen, nur mit HTML und CSS, die in unterstützenden Browsern vollständig angepasst sind. Dies schließt die Layouts von `<select>` und Drop-down-Picker, Farbschemata, Symbole, Schriftarten, Übergänge, Positionierung, Marker zur Anzeige des ausgewählten Symbols und mehr ein.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Erweiterung auf bestehende Funktionalitäten, wobei in nicht unterstützenden Browsern auf "klassische" Auswahlen zurückgegriffen wird.

In den folgenden Abschnitten erfahren Sie, wie Sie dieses Beispiel erstellen.

## Welche Funktionen umfasst eine anpassbare Auswahl?

Sie können anpassbare `<select>`-Elemente mithilfe der folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}} Elemente. Diese funktionieren genauso wie in "klassischen" Auswahlen, außer dass sie zusätzliche erlaubte Inhaltsarten haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was zuvor in "klassischen" Auswahlen nicht erlaubt war. Wenn dies enthalten ist, ersetzt es die Standard-"Button"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Button** bezeichnet (da es der Button ist, den Sie drücken müssen, um den Drop-down-Picker zu öffnen).
  > [!NOTE]
  > Der Select-Button ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass wenn interaktive Kinder (zum Beispiel Links oder Buttons) darin enthalten sind, er immer noch wie ein einzelner Button für Interaktionszwecke behandelt wird — zum Beispiel werden die Kind-Elemente nicht fokussierbar oder klickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten `<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält einen Klon des Inhalts des aktuell ausgewählten `<option>`-Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) unter der Haube).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Pickers anvisiert. Dies schließt alle Elemente innerhalb des `<select>`-Elements ein, außer des ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement auf die vom Browser definierten Standardstile und das Verhalten für anpassbare Auswahlen umstellt.
- Die {{cssxref(":open")}}-Pseudo-Klasse, die den Select-Button anvisiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudoelement, das das Symbol im Select-Button anvisiert — den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudo-Klasse, die das aktuell ausgewählte `<option>`-Element anvisiert.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen im aktuell ausgewählten `<option>`-Element anvisiert, um eine visuelle Darstellung zu bieten, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und sein Drop-down-Picker das folgende Verhalten automatisch zugewiesen:

- Sie haben eine Invoker/Popover-Beziehung, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert wird, die die Fähigkeit bietet, den Picker auszuwählen, wenn er über die {{cssxref(":popover-open")}}-Pseudo-Klasse geöffnet ist. Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben einen impliziten Ankerbezug, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verknüpft ist. Die vom Browser vorgegebenen Standardstile positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie im [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die vom Browser vorgegebenen Standardstile definieren auch einige Rückfallpositionen, die den Picker neu positionieren, wenn er Gefahr läuft, aus dem Ansichtsfenster zu überlaufen. Rückfallpositionen werden im [Umgang mit Überlaufen: Rückfalloptionen und bedingtem Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` einsehen, indem Sie die Tabellen zur Browser-Kompatibilität auf den Referenzseiten für verwandte Features wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} konsultieren.

Lassen Sie uns alle oben genannten Funktionen in Aktion erleben, indem wir das Beispiel von oben auf der Seite durchgehen.

## Anpassbare Select-Markup

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut wird auf den Symbolen hinzugefügt, damit diese von unterstützenden Technologien verborgen werden, um zu vermeiden, dass die Optionswerte zweimal bekanntgegeben werden (zum Beispiel "Katze Katze").

Das Beispielmarkup ist fast dasselbe wie das "klassische" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur repräsentiert den Select {{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser das derzeit ausgewählte {{htmlelement("option")}} innerhalb des Buttons klont, das Sie dann [mit benutzerdefiniertem Stil versehen können](#anpassung_des_stils_des_ausgewählten_optionsinhalts_im_select-button). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser darauf zurück, den ausgewählten Optionstext innerhalb des Standardbuttons anzuzeigen, und Sie können ihn nicht so leicht stilisieren.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um anzeigen zu lassen, was Sie innerhalb des geschlossenen `<select>` wünschen, aber seien Sie vorsichtig dabei. Was Sie einfügen, kann den barrierefreien Wert verändern, der für das `<select>`-Element zugänglich gemacht wird.
- Der Rest des `<select>`-Inhalts repräsentiert den Drop-down-Picker, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können andere Inhalte in den Picker einfügen, dies wird jedoch nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber bei einer anpassbaren Auswahl können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textbasierte semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente verwenden, um andere Inhalte hinzuzufügen, obwohl Sie beachten sollten, dass dies nicht im übermittlungsfähigen Wert enthalten wäre. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die ein Symbol und ein Textetikett enthalten, sodass jedes unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Subtrees enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) via JavaScript extrahieren soll. Der `textContent`-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf ausgeführt, und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design erlaubt es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird komplett ignoriert, und die nicht-Text `<option>`-Inhalte werden herausgeschnitten, um nur die Textknoteninhalte zu belassen, aber das Ergebnis wird trotzdem funktionieren.

## Opt-in zur benutzerdefinierten Select-Darstellung

Um das benutzerdefinierte Select Funktionalität und minimale Browser-Basisstile zu aktivieren (und die von Betriebssystemen bereitgestellten Stile zu entfernen), muss Ihr `<select>`-Element und sein Drop-down-Picker (dargestellt durch das `::picker(select)`-Pseudoelement) beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können wählen, um nur das `<select>`-Element für die neue Funktionalität zu aktivieren, während der Picker die Standard-OS-Stilierung beibehält, aber in den meisten Fällen werden Sie beide aktivieren wollen. Sie können den Picker nicht aktivieren, ohne das `<select>`-Element zu aktivieren.

Sobald dies geschehen ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind jetzt frei, dies in jeder gewünschten Weise zu stylen. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (die sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändern), und {{cssxref("padding")}}-Werte gesetzt, plus ein {{cssxref("transition")}}, damit der Hintergrundwechsel sanft animiert wird:

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

## Stil des Picker-Symbols

Um das Symbol im Select-Button zu stilisieren - den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist - können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudoelement anvisieren. Der folgende Code verleiht dem Symbol eine benutzerdefinierte {{cssxref("color")}} und ein `transition`, sodass Änderungen an dessen {{cssxref("rotate")}}-Eigenschaften sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als Nächstes wird `::picker-icon` mit dem {{cssxref(":open")}}-Pseudoklasse kombiniert - die nur den Select-Button anvisiert, wenn der Drop-down-Picker geöffnet ist -, um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Werfen wir einen Blick auf die bisherige Arbeit - beachten Sie, wie der Picker-Pfeil glatt um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Gestaltung des Drop-down-Pickers

Der Drop-down-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement anvisiert werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, was nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zunächst wird die Standard-schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Jetzt werden die `<option>`-Elemente gestylt. Sie sind mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gestaltet, alle sind am Anfang des flex Containers ausgerichtet und ein `20px` {{cssxref("gap")}} zwischen jeden. Jedes `<option>`-Element erhält zudem denselben {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}}, und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Erscheinungsbild zu bieten:

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
> Anpassbare `<select>`-Element `<option>` haben standardmäßig `display: flex` gesetzt, aber es ist in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudoklassen verwendet, um einen passenden {{cssxref("border-radius")}} auf den oberen und unteren `<option>`-Elementen zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen - außer dem letzten, damit die Rahmen nicht unordentlich und doppelt aussehen. Wir setzen auch den gleichen `border-radius` auf dem äußeren `::picker(select)` Container, damit wir nicht mit einem hässlichen quadratischen weißen Kasten um die Optionen enden, wenn wir uns entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als nächstes wird eine andere `background`-Farbe auf den ungeraden `<option>`-Elementen gesetzt, indem {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} verwendet wird, um Streifenbildung zu implementieren, und eine andere `background`-Farbe wird auf den `<option>`-Elementen im Fokus und Hover gesetzt, um eine nützliche visuelle Hervorhebung während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich in diesem Abschnitt wird eine größere {{cssxref("font-size")}} auf den `<option>`-Symbolen (enthalten in `<span>`-Elementen mit einer Klasse von `icon`) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der störenden Abstände an den Start-und Endrändern der Blöcke der Symbol-Emojis zu entfernen, wodurch sie besser mit den Textetiketten ausgerichtet werden:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert jetzt wie folgt:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung des Stils des ausgewählten Optionsinhalts im Select-Button

Wenn Sie eine beliebige Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken - die Haustiersymbole verursachen, dass der Select-Button in der Höhe zunimmt, was auch die Position des Pickersymbols verändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Etikett.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, das die Inhalte der ausgewählten `<option>` wie sie im Select-Button erscheinen, repräsentiert. In unserem Beispiel wird dies ausgeblendet, indem {{cssxref("display", "display: none")}} verwendet wird:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinträchtigt nicht die Gestaltung der `<option>`-Inhalte, wie sie im Drop-down-Picker erscheinen.

## Gestaltung der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` zu stylen, wie sie im Drop-down-Picker erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse anvisieren. Dies wird verwendet, um die {{cssxref("font-weight")}} der ausgewählten `<option>` auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Stil des aktuellen Auswahlhäkchens

Sie haben wahrscheinlich bemerkt, dass wenn Sie den Picker öffnen, um eine Auswahl zu treffen, die derzeit ausgewählte `<option>` ein Häkchen am inline-start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement anvisiert werden. Zum Beispiel könnten Sie dieses Häkchen verbergen wollen (zum Beispiel über `display: none`).

Sie könnten auch etwas Interessanteres damit machen - zuvor wurden die `<option>`-Elemente horizontal mit Flexbox ausgerichtet, wobei die Flex-Elemente am Anfang der Zeile ausgerichtet sind. In der untenstehenden Regel wird das Häkchen vom Anfang der Zeile zum Ende verschoben, indem ein {{cssxref("order")}}-Wert darauf gesetzt wird, der größer als `0` ist, und es zum Ende der Zeile ausgerichtet wird, indem ein `auto` {{cssxref("margin-left")}}-Wert gesetzt wird (siehe [Alignment and auto margins](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon` Pseudoelemente sind nicht im Barrierefreiheitsbaum enthalten, sodass generierte {{cssxref("content")}}-Sets darauf von unterstützenden Technologien nicht angesagt werden. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie visuell setzen, für den beabsichtigten Zweck sinnvoll ist.

Schauen wir uns nochmals an, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Pickers mithilfe von Popover-Zuständen

Das anpassbare `<select>`-Element's Select `button` und Drop-down-Picker sind automatisch mit einer Invoker/Popover-Beziehung verknüpft, wie in [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die dies für `<select>`-Elemente mit sich bringt; unser Beispiel nutzt die Fähigkeit, zwischen Popover versteckten und angezeigten Zuständen mithilfe von Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudo-Klasse repräsentiert Popovers im angezeigten Zustand.

Die Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Animating popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zunächst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die sich beim Wechsel des Popover-Zustands von verborgen zu angezeigt ändern, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, es enthält jedoch auch zwei diskrete Eigenschaften, deren Werte von den Standard-Browserstilen gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn der Popover-Zustand von verborgen zu sichtbar wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar werden.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von verborgen zu sichtbar wechselt, um ihn in die {{Glossary("top_layer", "oberste Schicht")}} zu befördern und wieder zurück, wenn er verborgen ist, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Schicht bis zum Abschluss des Übergangs aufgeschoben wird und der Übergang sichtbar bleibt.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) Wert wird benötigt, um diskrete Eigenschaftenanimationen zu ermöglichen.

Als nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker während seines Übergangs von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, übergeht, muss der Anfangszustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker beim Öffnen und Schließen des `<select>` sanft ein- und auszublenden.

## Positionierung des Pickers mithilfe von Ankerpositionierung

Ein anpassbares `<select>`-Element's Select-Button und Drop-down-Picker haben eine implizite Ankerreferenz, und der Picker wird automatisch mit dem Select-Button über [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) assoziiert. Das bedeutet, dass keine explizite Assoziierung mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften gemacht werden muss.

Zusätzlich bieten die [Browser-Standardstile eine Standardpositionierung](/de/docs/Web/CSS/::picker#picker_anchor_positioning), welche Sie anpassen können, wie im [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker gesetzt, indem die {{cssxref("anchor()")}}-Funktion in seinen {{cssxref("top")}} und {{cssxref("left")}} Eigenschaftswerten verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Das Ergebnis ist, dass die obere Kante des Pickers immer 1 Pixel von der unteren Kante des Select-Buttons abwärts positioniert wird, und die linke Kante des Pickers immer `10%` der Breite des Select-Buttons von seiner linken Kante aus positioniert wird.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um den Picker nicht mehr am `<select>`-Element zu verankern, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Pickers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernung einer Ankerassoziation](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Endergebnis

Nach den letzten zwei Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Select-Funktionen

Die oben genannten Abschnitte haben alle neuen Funktionalitäten in anpassbaren Selects behandelt und gezeigt, wie sie mit sowohl klassischen einlinigen Selects als auch mit verwandten modernen Funktionen wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Elementfunktionen, die oben nicht erwähnt wurden; dieser Abschnitt beschreibt, wie sie derzeit zusammen mit anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Derzeit gibt es keine spezifizierte Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Die Standardstile von `<optgroup>`-Elementen sind die gleichen wie bei klassischen `<select>`-Elementen — fett und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente so stylen, dass sie in das Gesamtdesign passen, und berücksichtigen, dass sie sich genauso verhalten, wie Container in konventionellem HTML erwartet werden. In anpassbaren `<select>`-Elementen wird das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Etikett bereitzustellen, das leicht anvisiert und gestylt werden kann. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist, und hat die gleichen Semantiken.

## Als Nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) untersuchen, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu gestalten.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
