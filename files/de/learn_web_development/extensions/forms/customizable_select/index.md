---
title: Anpassbare Auswahlelemente
short-title: Anpassbare Auswahlen
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie vollständig anpassbare {{htmlelement("select")}}-Elemente mit experimentellen Browser-Funktionen erstellen können. Dies umfasst die vollständige Kontrolle über das Styling des Auswahlknopfes, des Dropdown-Auswählers, des Pfeilsymbols, des Auswahlhäkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel demonstrierten CSS- und HTML-Funktionen werden derzeit nur eingeschränkt von Browsern unterstützt. Überprüfen Sie die Browser-Kompatibilitätstabellen auf den einzelnen Funktionsreferenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Fehler bei der Hydration, wenn serverseitiges Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da sie intern von Betriebssystemebene gestylt werden, was mit CSS nicht gezielt angesprochen werden kann. Dies umfasst den Dropdown-Auswähler, das Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option — abgesehen vom Einsatz einer benutzerdefinierten JavaScript-Bibliothek —, einen {{cssxref("appearance")}}-Wert von `none` auf das `<select>`-Element zu setzen, um Teile des Betriebssystems-Stylings zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird in [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende nur mit HTML und CSS zu erstellen, die in unterstützenden Browsern vollständig anpassbar sind. Dies umfasst das Layout des `<select>`- und Dropdown-Auswählers, das Farbschema, Symbole, Schriftarten, Übergänge, Positionierung, Marker zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung über vorhandene Funktionalität, indem sie in nicht unterstützenden Browsern auf "klassische" Auswahlen zurückfallen.

Im Folgenden finden Sie heraus, wie Sie dieses Beispiel erstellen können.

## Welche Funktionen umfasst eine anpassbare Auswahl?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Herkömmliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Auswahlen, außer dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was zuvor in "klassischen" Auswahlen nicht erlaubt war. Wenn es enthalten ist, ersetzt es das Standard-"Button"-Rendering des geschlossenen `<select>`-Elements. Dies wird allgemein als **select button** (Auswahlknopf) bezeichnet, da es der Knopf ist, den Sie drücken müssen, um den Dropdown-Auswähler zu öffnen.
  > [!NOTE]
  > Der Auswahlknopf ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass, wenn interaktive Kinder (z.B. Links oder Buttons) darin enthalten sind, er weiterhin wie ein einzelner Knopf für Interaktionszwecke behandelt wird — beispielsweise werden die Kind-Elemente nicht fokussierbar oder anklickbar sein.
- Das Element {{htmlelement("selectedcontent")}} kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements eingefügt werden, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen. Dies enthält einen Klon des aktuell ausgewählten `<option>`-Elementinhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) unter der Haube).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Auswählers anspricht. Dazu gehören alle Elemente innerhalb des `<select>`-Elements, außer das erste Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement in die vom Browser definierten Standardstile und das -verhalten für anpassbare Auswahlen einbezieht.
- Die {{cssxref(":open")}}-Pseudoklasse, die den Auswahlknopf anspricht, wenn der Auswähler (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudoelement, das das Symbol im Auswahlknopf anspricht — der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen anspricht, das im aktuell ausgewählten `<option>`-Element platziert wird, um eine visuelle Anzeige zu geben, welches ausgewählt ist.

Darüber hinaus hat das `<select>`-Element und sein Dropdown-Auswähler das folgende Verhalten automatisch zugewiesen:

- Sie haben eine Invoker/Popover-Beziehung, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert wird, die die Möglichkeit bietet, den Auswähler bei geöffnetem Zustand über die {{cssxref(":popover-open")}}-Pseudoklasse auszuwählen. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben einen impliziten Ankerbezug, was bedeutet, dass der Auswähler automatisch mit dem `<select>`-Element über [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verknüpft ist. Die Standardstile des Browsers positionieren den Auswähler relativ zum Button (dem Anker), und Sie können diese Position anpassen, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Standardeinstellungen des Browsers definieren auch einige Position-Try-Fallbacks, die den Auswähler neu positionieren, wenn er Gefahr läuft, außerhalb des Ansichtsfensters zu geraten. Position-Try-Fallbacks werden in [Umgang mit Überlauf: Versuchs-Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} ansehen.

Sehen wir uns all diese oben genannten Funktionen in Aktion an, indem wir das Beispiel am Anfang der Seite durchgehen.

## Markup für anpassbare Auswahlen

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist an den Symbolen enthalten, damit sie vor unterstützenden Technologien verborgen werden, um zu vermeiden, dass die Optionswerte zweimal angesagt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast das gleiche wie das klassische `<select>`-Markup, mit den folgenden Unterschieden:

- Die Struktur `<button><selectedcontent></selectedcontent></button>` repräsentiert den Auswahl-{{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser das aktuell ausgewählte {{htmlelement("option")}}-Element innerhalb des Buttons klont, den Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassung_des_stylings_der_ausgewählten_optionsinhalte_innerhalb_des_auswahlknopfs). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser darauf zurück, den Text der gewählten Option im Standardbutton anzuzeigen, und es wird schwieriger, ihn zu stylen.
  > [!NOTE]
  > Sie _können_ beliebigen Inhalt innerhalb des `<button>` einfügen, um im geschlossenen `<select>` anzuzeigen, was Sie möchten, aber seien Sie vorsichtig damit. Was Sie einschließen, kann den zugänglichen Wert verändern, der der unterstützenden Technologie für das `<select>`-Element ausgesetzt ist.
- Der Rest der `<select>`-Inhalte repräsentiert den Dropdown-Auswähler, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Auswähler repräsentieren. Sie können andere Inhalte im Auswähler einfügen, es wird jedoch nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, in einer anpassbaren Auswahl können Sie jedoch auch andere Markup-Strukturen wie Bilder, andere nicht-interaktive textebene semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}}-Pseudoelemente verwenden, um anderen Inhalt einzufügen, beachten Sie jedoch, dass dies nicht in den einreichbaren Wert aufgenommen wird. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente mit jeweils einem Symbol und einem Textetikett, die jeweils unabhängig gestylt und positioniert werden können.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln dafür, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript abrufen sollte. Der Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf ausgeführt, und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die Struktur `<button><selectedcontent></selectedcontent></button>` wird vollständig ignoriert, und die nicht-textlichen `<option>`-Inhalte werden herausgefiltert, um nur die Textknoten-Inhalte zu lassen, aber das Ergebnis wird dennoch funktionieren.

## Opt-in für das benutzerdefinierte Auswählungs-Rendering

Um sich für die benutzerdefinierte Auswählungsfunktionalität und die minimalen Standardstile des Browsers zu entscheiden (und das Styling, das vom Betriebssystem bereitgestellt wird, zu entfernen), müssen Ihr `<select>`-Element und sein Dropdown-Auswähler (repräsentiert durch das `::picker(select)`-Pseudoelement) beide einen {{cssxref("appearance")}}-Wert von `base-select` darauf gesetzt haben:

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

Sie können sich dafür entscheiden, nur das `<select>`-Element für die neue Funktionalität zu verwenden und den Auswähler mit dem standardmäßigen Betriebssystem-Styling zu belassen. In den meisten Fällen möchten Sie jedoch beides verwenden. Sie können den Auswähler nicht verwenden, ohne sich auch für das `<select>`-Element zu entscheiden.

Sobald dies geschehen ist, ist das Ergebnis eine sehr einfache Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Jetzt sind Sie frei, dieses Element nach Belieben zu stylen. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (das sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert), und {{cssxref("padding")}}-Werte gesetzt, plus ein {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert wird:

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

## Styling des Pickersymbols

Um das Symbol im Auswahlknopf zu stylen — den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudoelement ansprechen. Der folgende Code gibt dem Symbol einen benutzerdefinierten {{cssxref("color")}} und ein `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert — die den Auswahlknopf nur anspricht, wenn der Dropdown-Auswähler geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet wird.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Lassen Sie uns die bisherige Arbeit ansehen — beachten Sie, wie der Picker-Pfeil sich sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Auswählers

Der Dropdown-Auswähler kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement angesprochen werden. Wie bereits erwähnt, enthält der Auswähler alles innerhalb des `<select>`-Elements, was nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zunächst wird der standardmäßige schwarze {{cssxref("border")}} des Auswahlwerkzeugs entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestylt. Sie werden mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angeordnet, wobei alle am Anfang des Flex-Containers ausgerichtet und ein `20px` {{cssxref("gap")}} zwischen jedem enthalten ist. Jedes `<option>`-Element erhält auch die gleichen {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}}, und {{cssxref("transition")}}-Einstellungen wie das `<select>`, um ein einheitliches Aussehen und Gefühl zu bieten:

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
> Anpassbare `<select>`-Element `<option>`s haben standardmäßig `display: flex` auf ihnen gesetzt, aber es ist dennoch in unserem Stylesheet enthalten, um zu klären, was vor sich geht.

Als nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudoklassen verwendet, um eine geeignete {{cssxref("border-radius")}} an den oberen und unteren Ecken des Auswahlwerkzeugs festzulegen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, damit die Ränder nicht unordentlich und verdoppelt aussehen:

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

Als nächstes wird eine unterschiedliche `background`-Farbe auf die ungeradzahligen `<option>`-Elemente mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um ein Zebra-Streifenmuster zu implementieren, und eine unterschiedliche `background`-Farbe wird auf die `<option>`-Elemente bei Fokus und Hover gesetzt, um während der Auswahl ein nützliches visuelles Highlight zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird in diesem Abschnitt eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole gesetzt (die in `<span>`-Elementen mit der Klasse `icon` enthalten sind), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der ärgerlichen Abstände an den Block-Anfangs- und Block-Endkanten der Symbol-Emojis zu entfernen, sodass sie besser mit den Textlabels übereinstimmen:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung des Stylings der ausgewählten Optionsinhalte innerhalb des Auswahlknopfs

Wenn Sie eine beliebige Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie feststellen, dass es ein Problem gibt — die Haustiersymbole verursachen, dass der Auswahlknopf in der Höhe zunimmt, was auch die Position des Pickersymbols verändert, und es gibt keinen Abstand zwischen dem Options-Symbol und dem Etikett.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es sich innerhalb von `<selectedcontent>` befindet, das die Inhalte der ausgewählten `<option>`-Elemente darstellt, wenn sie im Auswahlknopf erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der `<option>`-Inhalte, wie sie im Dropdown-Auswähler erscheinen.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` so zu stylen, wie sie im Dropdown-Auswähler erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse ansprechen. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahlhäkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Auswahlwerkzeug öffnen, um eine Auswahl zu treffen, das aktuell ausgewählte `<option>` ein Häkchen an seinem inline-start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement angesprochen werden. Beispielsweise könnten Sie dieses Häkchen ausblenden (zum Beispiel, indem Sie `display: none` verwenden).

Sie könnten auch etwas Interessanteres damit machen — früher wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Elemente am Anfang der Zeile ausgerichtet waren. In der folgenden Regel wird das Häkchen vom Anfang der Zeile zum Ende verschoben, indem ihm ein {{cssxref("order")}}-Wert größer als `0` zugewiesen wird, und es wird mit einem `auto` {{cssxref("margin-left")}}-Wert an das Ende der Zeile ausgerichtet (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon`-Pseudoelemente sind nicht im Accessibility-Baum enthalten, sodass jeglicher generierter {{cssxref("content")}} darauf nicht von unterstützenden Technologien angesagt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

Lassen Sie uns noch einmal überprüfen, wie das Beispiel gerendert wird. Der aktualisierte Stand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Pickers mit Popover-Zuständen

Der Auswahlknopf und der Dropdown-Auswähler des benutzerdefinierbaren `<select>`-Elements haben automatisch eine Invoker/Popover-Beziehung, wie sie in [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben wird. Dies bringt viele Vorteile für `<select>`-Elemente; unser Beispiel nutzt die Möglichkeit, zwischen versteckten und angezeigten Popover-Zuständen mit Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudoklasse repräsentiert Popovers im angezeigten Zustand.

Die Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Animationen für Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zunächst wird der Auswähler mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die den Wert ändern, wenn der Popover-Zustand von verborgen zu angezeigt wechselt, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der transitionierten Eigenschaften umfasst `opacity`, aber sie umfasst auch zwei diskrete Eigenschaften, deren Werte von den Standardstilen des Browsers gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn der Popover-Zustand von verborgen zu angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von verborgen zu angezeigt wechselt, um das Element zur {{Glossary("top_layer", "obersten Ebene")}} zu befördern, dann zurück, wenn er verborgen wird, um es zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, um den Übergang sichtbar zu machen.

> [!NOTE]
> Der `allow-discrete`-Wert ist notwendig, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als nächstes wird der Auswähler im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Auswähler während des Übergangs von `display: none` zu einem `display`-Wert animiert wird, der ihn sichtbar macht, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}- Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Auswähler sanft ein- und ausblenden zu lassen, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mit Ankerpositionierung

Ein anpassbares `<select>`-Element hat einen Auswahlknopf und einen Dropdown-Auswähler mit einem impliziten Ankerbezug, und der Auswähler ist automatisch mit dem Auswahlknopf über [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) assoziiert. Dies bedeutet, dass keine explizite Assoziation über die {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden muss.

Zusätzlich bieten die [Standardstile des Browsers eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Auswählers relativ zu seinem Anker festgelegt, indem die {{cssxref("anchor()")}}-Funktion in dessen {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaftswerten verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Auswählers immer 1 Pixel von der unteren Kante des Auswahlknopfes entfernt positioniert wird und die linke Kante des Auswählers immer `10%` der Breite des Auswahlknopfes von dessen linker Kante entfernt positioniert wird.

## Endergebnis

Nach den letzten beiden Abschnitten wird das endgültige aktualisierte `<select>`-Element wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Auswahlmerkmale

Die obigen Abschnitte haben alle neuen Funktionen in anpassbaren Auswahlen behandelt und gezeigt, wie sie mit sowohl klassischen einzeiligen Auswahlen als auch verwandten modernen Funktionen wie Popovers und Anker-Positionierung interagieren. Es gibt einige andere `<select>`-Element-Funktionen, die oben nicht erwähnt wurden; dieser Abschnitt erklärt, wie sie derzeit zusammen mit anpassbaren Auswahlen funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Derzeit gibt es keine spezifizierte Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standard-Styling von `<optgroup>`-Elementen ist das gleiche wie bei klassischen `<select>`-Elementen — fett gedruckt und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente stilisieren, damit sie in das Gesamtdesign passen, und bedenken, dass sie sich genauso verhalten werden, wie Containers in konventionellem HTML erwartet werden zu verhalten. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als ein Kind von `<optgroup>` erlaubt, um ein Etikett bereitzustellen, das leicht zu targetieren und zu stylen ist. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt wird, und hat die gleichen Semantiken.

## Als Nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zum Stylen von Formularen in verschiedenen Zuständen zur Verfügung stehen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
