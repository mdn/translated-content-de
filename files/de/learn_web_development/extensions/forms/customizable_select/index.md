---
title: Anpassbare `select`-Elemente
short-title: Anpassbare `select`
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie dedizierte, moderne HTML- und CSS-Features nutzen können, um vollständig anpassbare {{htmlelement("select")}}-Elemente zu erstellen. Dies beinhaltet die vollständige Kontrolle über die Gestaltung des Auswahl-Buttons, des Dropdown-Pickers, des Pfeilsymbols, des Häkchens für die aktuelle Auswahl und jedes einzelne {{htmlelement("option")}}-Element.

## Hintergrund

Traditionell war es schwierig, das Aussehen von `<select>`-Elementen anzupassen, da sie interne Bestandteile enthalten, die auf Betriebssystemebene gestaltet sind und die nicht mit CSS gezielt angesprochen werden können. Dazu gehören der Dropdown-Picker, das Pfeilsymbol usw.

Zuvor war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – der Einsatz des {{cssxref("appearance")}}-Werts `none` auf dem `<select>`-Element, um einige Betriebssystem-spezifische Gestaltungen zu entfernen und dann CSS zu verwenden, um die gestaltbaren Teile anzupassen. Diese Technik wird im [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende nur mit HTML und CSS zu erstellen, die in unterstützenden Browsern vollständig angepasst sind. Dies umfasst Layout von `<select>` und Dropdown-Picker, Farbschema, Symbole, Schriftarten, Übergänge, Positionierung und Markierungen zur Kennzeichnung des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung der vorhandenen Funktionalität und fallen in nicht unterstützenden Browsern auf "klassische" `select`-Elemente zurück.

Sie erfahren, wie Sie dieses Beispiel in den nachfolgenden Abschnitten erstellen können.

## Welche Features umfasst ein anpassbares `select`?

Sie können anpassbare `<select>`-Elemente mit folgenden HTML- und CSS-Features erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" `select`, außer dass sie zusätzliche zulässige Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in "klassischen" `select`-Elementen nicht vorher erlaubt war. Wenn dies eingefügt wird, ersetzt es die Standard-Button-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **select button** bezeichnet (da es der Button ist, den Sie drücken müssen, um den Dropdown-Picker zu öffnen).
  > [!NOTE]
  > Der Select-Button ist standardmäßig {{Glossary("inert", "inert")}}, so dass, wenn interaktive Kinder (zum Beispiel Links oder Buttons) in ihm enthalten sind, er weiterhin wie ein einzelner Button für Interaktionszwecke behandelt wird – zum Beispiel werden die untergeordneten Elemente nicht fokussierbar oder anklickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements eingefügt werden, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dieses enthält einen Klon des aktuell ausgewählten `<option>`-Elementinhalts (erstellt unter der Haube mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode)).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Pickers anvisiert. Dies schließt alle Elemente innerhalb des `<select>`-Elements ein, außer das erste Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die vom Browser definierten Standardstile und -verhalten für anpassbare `select`-Elemente einbindet.
- Die {{cssxref(":open")}}-Pseudo-Klasse, die den Select-Button anvisiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol im Select-Button anvisiert – den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudo-Klasse, die das aktuell ausgewählte `<option>`-Element anvisiert.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen im aktuell ausgewählten `<option>`-Element anvisiert, um eine visuelle Anzeige des aktuell ausgewählten Elements zu bieten.

Zusätzlich haben das `<select>`-Element und sein Dropdown-Picker das folgende Verhalten, das ihnen automatisch zugewiesen wird:

- Sie haben eine Aufrufer-/Pop-over-Beziehung, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert wird, die die Möglichkeit bietet, den Picker beim Öffnen über die {{cssxref(":popover-open")}}-Pseudo-Klasse auszuwählen. Weitere Details zum Popover-Verhalten finden Sie unter [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using).
- Sie haben einen impliziten Ankerbezug, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden ist. Die Standardstile des Browsers positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Standardstile des Browsers definieren auch einige Fallbacks für die Positionierung, um den Picker neu zu positionieren, wenn er Gefahr läuft, den Viewport zu überlaufen. Fallbacks für die Positionssuche werden im Abschnitt [Überlauf behandeln: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>`-Elemente überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Features wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Schauen wir uns all die oben genannten Features in Aktion an, indem wir das Beispiel durchgehen, das oben auf der Seite gezeigt wird.

## Anpassbares `select`-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, das Ihnen ermöglicht, ein Haustier auszuwählen. Das Markup ist wie folgt:

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist bei den Symbolen enthalten, so dass sie vor unterstützenden Technologien versteckt werden und die Optionswerte nicht doppelt angesagt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast identisch mit dem "klassischen" `<select>`-Markup, mit folgenden Unterschieden:

- Die Struktur `<button><selectedcontent></selectedcontent></button>` repräsentiert den Select-{{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements veranlasst den Browser, das aktuell ausgewählte {{htmlelement("option")}} innerhalb des Buttons zu klonen, das Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassung_der_gestaltung_des_ausgewählten_optionsinhalt_im_select-button). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser auf das Rendern des ausgewählten Options-Textes im Standard-Button zurück, sodass Sie ihn nicht so leicht gestalten können.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um innerhalb des geschlossenen `<select>` das darzustellen, was Sie möchten, aber seien Sie vorsichtig dabei. Was Sie einschließen, kann den zugänglichen Wert verändern, der unterstützender Technologie für das `<select>`-Element ausgesetzt ist.
- Der Rest des `<select>`-Inhalts repräsentiert den Dropdown-Picker, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können anderen Inhalt im Picker einfügen, aber es wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textstufenübergreifende semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}}-Pseudo-Elemente verwenden, um weiteren Inhalt einzuschließen, obwohl Sie bedenken sollten, dass dies nicht in den übermittelbaren Wert eingeschlossen wird. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und eine Textbeschriftung enthalten, so dass jedes Styliert und unabhängig positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Subbäume enthalten kann und nicht nur Textknoten, gibt es Regeln dafür, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der Wert der [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf ausgeführt, und das Ergebnis wird als `<select>`-Wert festgelegt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die Struktur `<button><selectedcontent></selectedcontent></button>` wird komplett ignoriert, und der nicht-textuelle `<option>`-Inhalt wird entfernt, um nur die Textknoten-Inhalte zurückzulassen, aber das Ergebnis wird immer noch funktionieren.

## Opt-in zum benutzerdefinierten Select-Rendering

Um sich in die benutzerdefinierte Select-Funktionalität und minimale Browser-Grundstile einzuwählen (und die vom Betriebssystem bereitgestellte Gestaltung zu entfernen), müssen Ihr `<select>`-Element und sein Dropdown-Picker (repräsentiert durch das `::picker(select)`-Pseudo-Element) beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können wählen, nur das `<select>`-Element in die neue Funktionalität einzuwählen und den Picker mit dem Standardbetriebssystemstil zu belassen, aber in den meisten Fällen werden Sie beides einwählen wollen. Sie können den Picker nicht einwählen, ohne das `<select>`-Element einzuwählen.

Sobald dies geschehen ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie können dies nun nach Belieben gestalten. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}}-Werte (die sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändern) und {{cssxref("padding")}}-Werte gesetzt, plus ein {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert wird:

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

## Gestaltung des Picker-Symbols

Um das Symbol innerhalb des Select-Buttons zu gestalten – den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist – können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Als Nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudo-Klasse kombiniert – die den Select-Button nur dann anvisiert, wenn der Dropdown-Picker geöffnet ist –, um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an – achten Sie darauf, wie der Picker-Pfeil sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Gestaltung des Dropdown-Pickers

Der Dropdown-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element angesprochen werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, das nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalt.

Zuerst wird der standardmäßige schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestaltet. Sie werden mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angeordnet, alle zu Beginn des Flex-Containers ausgerichtet und inklusive eines `20px` {{cssxref("gap")}} zwischen jedem. Jedes `<option>` erhält ebenfalls die gleiche {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Erscheinungsbild zu bieten:

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
> Anpassbare `<select>`-Element-`<option>` haben standardmäßig `display: flex` auf sich gesetzt, aber dies ist trotzdem in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als Nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}}-Pseudo-Klassen verwendet, um einen geeigneten {{cssxref("border-radius")}} an den oberen und unteren Ecken des Pickers festzulegen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, damit die Ränder nicht unordentlich und doppelt aussehen:

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

Danach wird eine andere `background`-Farbe auf den ungeradzahligen `<option>`-Elementen mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} festgelegt, um Zebra-Stripes zu implementieren, und eine andere `background`-Farbe wird bei den fokussierten und gehobenen `<option>`-Elementen gesetzt, um eine hilfreiche visuelle Hervorhebung während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

Abschließend wird für diese Sektion eine größere {{cssxref("font-size")}} für die `<option>`-Symbole festgelegt (die sich innerhalb von `<span>`-Elementen mit einer Klasse „icon“ befinden), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um etwas von dem lästigen Abstand an den Block-Start und Block-End-Kanten der Icon-Emojis zu entfernen, sodass sie sich besser mit den Textbeschriftungen ausrichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt folgendermaßen dargestellt:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung der Gestaltung des ausgewählten Optionsinhalt im Select-Button

Wenn Sie in den letzten paar Live-Beispielen eine Haustieroption auswählen, werden Sie ein Problem bemerken – die Haustiervarianten vergrößern die Höhe des Select-Buttons, was auch die Position des Picker-Symbols verändert, und es gibt keine Abstände zwischen dem Optionssymbol und der Beschriftung.

Das kann durch Ausblenden des Symbols behoben werden, wenn es sich im `<selectedcontent>` befindet, das den Inhalt des ausgewählten `<option>` so darstellt, wie er im Select-Button angezeigt wird. In unserem Beispiel wird es mithilfe von {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinträchtigt nicht die Gestaltung des `<option>`-Inhalts, wie er im Dropdown-Picker erscheint.

## Gestaltung der aktuell gewählten Option

Um die aktuell ausgewählte `<option>` zu gestalten, wie sie im Dropdown-Picker erscheint, können Sie sie mithilfe der {{cssxref(":checked")}}-Pseudo-Klasse anvisieren. Dies wird verwendet, um die {{cssxref("font-weight")}} der ausgewählten `<option>` fett zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Gestaltung des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, die aktuell ausgewählte `<option>` ein Häkchen am Beginn aufweist. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element angesprochen werden. Zum Beispiel, um dieses Häkchen zu verbergen (zum Beispiel via `display: none`).

Sie können sich auch entscheiden, etwas Interessanteres damit zu tun – früher wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet und die Flex-Items zum Beginn der Reihe ausgerichtet. Im folgenden Regel wird das Häkchen vom Start der Reihe ans Ende bewegt, indem ihm ein {{cssxref("order")}}-Wert größer als `0` zugewiesen wird und es mit einem `auto` {{cssxref("margin-left")}} Wert ausgerichtet wird (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Abschließend wird der Wert der {{cssxref("content")}} Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol zur Anzeige zu setzen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon` Pseudo-Elemente sind nicht im Accessibility-Baum enthalten, sodass jeder generierte {{cssxref("content")}}, der darauf gesetzt wird, nicht von unterstützenden Technologien angesagt wird. Sie sollten jedoch immer noch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen vorgesehenen Zweck Sinn ergibt.

Lassen Sie uns erneut kontrollieren, wie das Beispiel rendert. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Pickers mit Popover-Zuständen

Das anpassbare `<select>`-Element-Select-`button` und der Dropdown-Picker erhalten automatisch eine Aufrufer-/Popover-Beziehung, wie im Abschnitt [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die dies den `<select>`-Elementen bringt; unser Beispiel nutzt die Übergänge zwischen verborgenen und angezeigten Popover-Zuständen, um Animationen zu ermöglichen. Die {{cssxref(":popover-open")}}-Pseudo-Klasse repräsentiert Popover im angezeigten Zustand.

Die Technik wird in diesem Abschnitt schnell behandelt – lesen Sie [Animating Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine ausführlichere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}} Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies führt dazu, dass alle Eigenschaften, die sich ändern, wenn der Popover-Zustand von verborgen zu angezeigt wechselt, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften enthält `opacity`, aber es gibt auch zwei diskrete Eigenschaften, deren Werte durch die Standardstile des Browsers gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn der Popover-Zustand von verborgen zu angezeigt wechselt. Diese muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von verborgen zu angezeigt wechselt, um es auf die {{Glossary("top_layer", "oberste Schicht")}} zu befördern, und zurück, wenn es verborgen ist, um es zu entfernen. Diese muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers von der obersten Schicht aufgeschoben wird, bis der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) wird benötigt, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als Nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` – dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker übergangen wird, während er sich von `display: none` zu einem `display`-Wert bewegt, der ihn sichtbar macht, muss der Ausgangszustand des Übergangs in einem {{cssxref("@starting-style")}}-Block spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und ausblenden zu lassen, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mittels Anker-Positionierung

Ein anpassbares `<select>`-Element-Select-Button und Dropdown-Picker haben einen impliziten Ankerbezug, und der Picker ist automatisch über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) mit dem Select-Button verbunden. Dies bedeutet, dass keine explizite Verbindung mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden muss.

Darüber hinaus [bieten die Standardstile des Browsers eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserer Demo wird die Position des Pickers relativ zu seinem Anker durch die Verwendung der {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaftswerte eingestellt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unterhalb der unteren Kante des Select-Buttons und die linke Kante des Pickers immer `10%` der Breite des Select-Buttons von seiner linken Kante aus positioniert wird.

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Select-Merkmale

Die obigen Abschnitte haben alle neuen Funktionalitäten in anpassbaren Selects behandelt und gezeigt, wie sie sowohl mit klassischen einzeiligen Selects als auch mit verwandten modernen Features wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Element-Features, die bisher nicht erwähnt wurden; dieser Abschnitt spricht darüber, wie sie derzeit mit anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Attributes/multiple)
  - : Es gibt derzeit keine spezifizierte Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen, aber daran wird in der Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Der Standardstil der `<optgroup>`-Elemente ist derselbe wie in klassischen `<select>`-Elementen – fett und weniger eingezogen als die enthaltenen Optionen. Sie müssen sicherstellen, dass die `<optgroup>`-Elemente zur Gesamtgestaltung passen und daran denken, dass sie sich so verhalten, wie es von Containern in konventionellem HTML erwartet wird. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein leicht anvisierbares und ansprechendes Label bereitzustellen. Dies ersetzt jeglichen Text, der im `label`-Attribut des `<optgroup>`-Elements eingetragen ist, und hat die gleichen Semantiken.

## Als Nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu gestalten.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
