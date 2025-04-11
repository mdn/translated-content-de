---
title: Anpassbare Select-Elemente
short-title: Anpassbare Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie man moderne HTML- und CSS-Funktionen zusammen verwendet, um vollständig anpassbare {{htmlelement("select")}}-Elemente zu erstellen. Dies beinhaltet die volle Kontrolle über die Gestaltung der Select-Schaltfläche, des Dropdown-Pickers, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da diese interne Bestandteile haben, die auf Betriebssystemebene gestaltet sind und nicht mit CSS angesprochen werden können. Dazu gehören der Dropdown-Picker, das Pfeilsymbol usw.

Bisher war die beste verfügbare Option — abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek —, einen Wert von `none` für die {{cssxref("appearance")}}-Eigenschaft des `<select>`-Elements zu setzen, um einige Betriebssystem-Stile zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestaltet werden können. Diese Technik wird in [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es, Beispiele wie das folgende zu erstellen, die in unterstützenden Browsern vollständig mit HTML und CSS angepasst sind. Dies umfasst `<select>`- und Dropdown-Picker-Layout, Farbschema, Symbole, Schriftart, Übergänge, Positionierung, Markierungen zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung auf bestehender Funktionalität, indem sie in nicht unterstützenden Browsern auf "klassische" Selects zurückfallen.

Sie erfahren, wie Sie dieses Beispiel in den folgenden Abschnitten erstellen.

## Welche Funktionen umfassen ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Selects, außer dass sie zusätzliche zulässige Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in "klassischen" Selects vorher nicht erlaubt war. Wenn dies enthalten ist, ersetzt es die Standard-"Button"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Schaltfläche** bezeichnet (da es die Schaltfläche ist, die gedrückt werden muss, um den Dropdown-Picker zu öffnen).
  > [!NOTE]
  > Die Select-Schaltfläche ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass, wenn interaktive Kinder (z. B. Links oder Schaltflächen) darin enthalten sind, sie immer noch wie eine einzige Schaltfläche für Interaktionszwecke behandelt werden — zum Beispiel werden die Kind-Elemente nicht fokussierbar oder klickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den momentan ausgewählten Wert im geschlossenen `<select>`-Element anzuzeigen.
  Dies enthält einen Klon des Inhalts des momentan ausgewählten `<option>`-Elements (unter der Haube mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Pickers anspricht. Dies schließt alle Elemente innerhalb des `<select>`-Elements aus, mit Ausnahme des ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement in die browserdefinierten Standardstile und -verhalten für anpassbare Selects einwirkt.
- Die {{cssxref(":open")}}-Pseudoklasse, die die Select-Schaltfläche anspricht, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudoelement, das das Symbol innerhalb der Select-Schaltfläche anspricht — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das momentan ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen im momentan ausgewählten `<option>`-Element anspricht, um eine visuelle Anzeige zu bieten, welches ausgewählt ist.

Zusätzlich hat das `<select>`-Element und sein Dropdown-Picker das folgende Verhalten, das ihnen automatisch zugewiesen wird:

- Sie haben eine Invoker/Popover-Beziehung, wie von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert, welche die Möglichkeit bietet, den Picker beim Öffnen über die {{cssxref(":popover-open")}}-Pseudoklasse auszuwählen. Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben einen impliziten Ankerbezug, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden ist. Die Standardstile des Browsers positionieren den Picker relativ zur Schaltfläche (dem Anker) und Sie können diese Position anpassen, wie in [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Standardstile des Browsers definieren auch einige Fallback-Positionen, die den Picker neu positionieren, wenn er Gefahr läuft, aus dem Ansichtsfenster herauszuragen. Fallback-Positionen werden in [Umgang mit Überlauf: Fallbacks und Bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>`s überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} einsehen.

Lassen Sie uns all die oben genannten Funktionen in Aktion sehen, indem wir das Beispiel durchgehen, das oben auf der Seite gezeigt wird.

## Anpassbares Select-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, das es Ihnen ermöglicht, ein Haustier auszuwählen. Das Markup sieht wie folgt aus:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut ist bei den Symbolen enthalten, damit sie von unterstützenden Technologien verborgen werden und die Optionswerte nicht doppelt angekündigt werden (z.B. "Katze Katze").

Das Beispiel-Markup ist fast identisch mit dem "klassischen" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur repräsentiert die Select-{{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements veranlasst den Browser, das aktuell ausgewählte {{htmlelement("option")}}-Element innerhalb der Schaltfläche zu klonen, das Sie dann mit [benutzerdefinierten Stilen versehen können](#anpassung_des_stils_der_inhalte_der_ausgewählten_option_innerhalb_der_select-schaltfläche). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser darauf zurück, die ausgewählte Option als Text innerhalb der Standardschaltfläche darzustellen, und Sie können es nicht so einfach gestalten.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>`-Elements einschließen, um alles darzustellen, was Sie im geschlossenen `<select>` möchten, aber seien Sie vorsichtig beim Tun dies. Was Sie einschließen, kann den für unterstützende Technologien bereitgestellten zugänglichen Wert für das `<select>`-Element verändern.
- Der Rest des `<select>`-Inhalts repräsentiert den Dropdown-Picker, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können andere Inhalte im Picker einschließen, aber das wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive Text-Level-Semantikelemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}}-Pseudoelemente verwenden, um andere Inhalte einzufügen, obwohl Sie beachten sollten, dass dies nicht im übermittelbaren Wert enthalten wäre. In unserem Beispiel enthält jedes `<option>`-Element zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textetikett enthalten, sodass jedes unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrschichtige DOM-Sub-Trees enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf ausgeführt, und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf ein klassisches `<select>`-Erlebnis zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert, und die nicht-Text `<option>`-Inhalte werden entfernt, um nur die Textknoteninhalte übrig zu lassen, aber das Ergebnis wird trotzdem funktionieren.

## Optieren in die benutzerdefinierte Select-Darstellung

Um in die benutzerdefinierte Select-Funktionalität und die grundlegenden Browser-Stile zu optieren (und das Betriebssystem-Styling zu entfernen), müssen Ihr `<select>`-Element und sein Dropdown-Picker (dargestellt durch das `::picker(select)`-Pseudoelement) beide den {{cssxref("appearance")}}-Wert `base-select` gesetzt haben:

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

Sie können wählen, nur das `<select>`-Element in die neue Funktionalität zu optieren, wobei der Picker das Standard-Betriebssystem-Styling beibehält, aber in den meisten Fällen werden Sie beide einbeziehen wollen. Sie können nicht nur den Picker ohne das `<select>`-Element einbeziehen.

Sobald dies getan ist, ergibt sich eine sehr einfache Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie können dies nun auf jede gewünschte Weise gestalten. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (welches sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte gesetzt, sowie eine {{cssxref("transition")}}, sodass die Hintergrundänderung gleichmäßig animiert wird:

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

Um das Symbol innerhalb der Select-Schaltfläche zu gestalten — der Pfeil, der nach unten zeigt, wenn das Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudoelement ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft gleichmäßig animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Als Nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert — welche die Select-Schaltfläche nur dann anspricht, wenn der Dropdown-Picker geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet wird.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Lassen Sie uns die bisherige Arbeit betrachten — beachten Sie, wie sich der Picker-Pfeil gleichmäßig um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Gestaltung des Dropdown-Pickers

Der Dropdown-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement angesprochen werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, das nicht die Schaltfläche und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zuerst wird der schwarze Standard-{{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Jetzt werden die `<option>`-Elemente gestylt. Sie werden mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angeordnet, wobei sie sich alle am Anfang des Flexcontainers ausrichten und einen `20px` {{cssxref("gap")}} zwischen jedem haben. Jede `<option>` erhält auch die gleiche {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Aussehen und Verhalten zu bieten:

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
> Anpassbare `<select>`-Element-`<option>`-Elemente haben standardmäßig `display: flex` gesetzt, aber es ist in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als Nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}}-Pseudoklassen verwendet, um einen passenden {{cssxref("border-radius")}} an den oberen und unteren Ecken des Pickers zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, damit die Ränder nicht unordentlich und doppelt aussehen:

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

Dann wird eine andere `background`-Farbe auf die ungeraden `<option>`-Elemente mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um Zebrastreifen zu implementieren, und eine andere `background`-Farbe wird auf die `<option>`-Elemente bei Fokus und Hover gesetzt, um bei der Auswahl ein nützliches visuelles Highlight zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole gesetzt (enthalten in `<span>`-Elementen mit einer Klasse von `icon`), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um etwas von dem lästigen Abstand an den Block-Anfangs- und -Endkanten der Symbol-Emojis zu entfernen, sodass sie sich besser mit den Textetiketten ausrichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert jetzt so:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung des Stils der Inhalte der ausgewählten Option innerhalb der Select-Schaltfläche

Wenn Sie in den letzten Live-Beispielen eine Haustieroption auswählen, werden Sie ein Problem feststellen — die Haustier-Icons verursachen, dass sich die Höhe der Select-Schaltfläche erhöht, was auch die Position des Picker-Symbols ändert, und es gibt keinen Abstand zwischen dem Options-Icon und dem Label.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, das die Inhalte der ausgewählten `<option>` darstellt, wie sie innerhalb der Select-Schaltfläche erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der Inhalte der `<option>`, wie sie innerhalb des Dropdown-Pickers erscheinen.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` innerhalb des Dropdown-Pickers zu stylen, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse ansprechen. Diese wird verwendet, um die {{cssxref("font-weight")}} der ausgewählten `<option>`-Elemente auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, die aktuell ausgewählte `<option>` ein Häkchen am Inline-Start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement angesprochen werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden (z.B. durch `display: none`).

Alternativ können Sie auch etwas Interessanteres damit machen — zuvor wurden die `<option>`-Elemente horizontal angeordnet, indem Flexbox verwendet wurde, mit den Flex-Items, die sich am Anfang der Zeile ausrichten. Im folgenden Regel wird das Häkchen vom Anfang der Zeile zum Ende verschoben, indem ein {{cssxref("order")}}-Wert größer als `0` darauf gesetzt wird, und es wird an das Ende der Zeile ausgerichtet, indem ein `auto` {{cssxref("margin-left")}}-Wert gesetzt wird (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon`-Pseudoelemente sind nicht im Zugänglichkeitsbaum enthalten, sodass generierter {{cssxref("content")}} Wert darauf nicht von unterstützenden Technologien angekündigt wird. Sie sollten dennoch darauf achten, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck Sinn ergibt.

Lassen Sie uns noch einmal überprüfen, wie das Beispiel angezeigt wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Pickers mit Popover-Zuständen

Das anpassbare `<select>`-Element erhält automatisch eine Invoker/Popover-Beziehung, wie in [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente mit sich; unser Beispiel nutzt die Fähigkeit, zwischen den versteckten und angezeigten Popover-Zuständen mit Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudoklasse repräsentiert Popovers im angezeigten Zustand.

Die Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Animate Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}} Wert von `0` und einen `transition` Wert von `all 0,4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die sich ändern, wenn der Popover-Zustand von versteckt auf angezeigt wechselt, animieren.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, es enthält jedoch auch zwei diskrete Eigenschaften, deren Werte von den Standardstilen des Browsers gesetzt werden:

- {{cssxref("display")}}

  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn sich der Popover-Zustand von versteckt in angezeigt ändert. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.

- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von versteckt in angezeigt wechselt, um ihn in die {{Glossary("top_layer", "oberste Ebene")}} zu befördern, und dann wieder zurück, wenn er versteckt ist, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um den Übergang sichtbar zu machen.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) Wert ist erforderlich, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als Nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity` Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker während seiner Bewegung von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, übergeht, muss der Startzustand des Übergangs in einem {{cssxref("@starting-style")}}-Block angegeben werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker beim Öffnen und Schließen des `<select>` gleichmäßig ein- und auszublenden.

## Positionierung des Pickers mit Anker-Positionierung

Eine anpassbare `<select>`-Element-Select-Schaltfläche und Dropdown-Picker haben einen impliziten Ankerbezug, und der Picker ist automatisch mit der Select-Schaltfläche über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden. Dies bedeutet, dass keine explizite Verbindung unter Verwendung der {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften hergestellt werden muss.

Zusätzlich [bietet das Browser's Standardstil eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie in [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker gesetzt, indem die {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unterhalb der Unterkante der Select-Schaltfläche positioniert ist, und die linke Kante des Pickers immer `10%` der Breite der Select-Schaltfläche von ihrer linken Kante entfernt ist.

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Select-Funktionen

Die oben genannten Abschnitte haben alle neuen Funktionen in anpassbaren Selects behandelt und gezeigt, wie sie sowohl mit klassischen einzeiligen Selects als auch mit verwandten modernen Funktionen wie Popovers und Ankerpositionierung interagieren. Es gibt noch einige andere `<select>`-Element-Funktionen, die oben nicht erwähnt wurden; dieser Abschnitt behandelt, wie sie derzeit neben anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Derzeit gibt es keine spezifizierte Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standardstyling von `<optgroup>`-Elementen ist dasselbe wie in klassischen `<select>`-Elementen — fettgedruckt und weniger als die enthaltenen Optionen eingerückt. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente so gestalten, dass sie in das Gesamtdesign passen, und bedenken Sie, dass sie sich genauso verhalten werden, wie Container im herkömmlichen HTML zu erwarten sind. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Etikett bereitzustellen, das leicht zu zielen und zu gestalten ist. Dies ersetzt jeden im `label`-Attribut des `<optgroup>`-Elements gesetzten Text und hat die gleiche Semantik.

## Nächste Schritte

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) untersuchen, die uns in modernen Browsern zur Gestaltung von Formularen in verschiedenen Zuständen zur Verfügung stehen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
