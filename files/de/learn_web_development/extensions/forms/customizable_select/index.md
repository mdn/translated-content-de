---
title: Anpassbare Select-Elemente
short-title: Anpassbare Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie man vollständig anpassbare {{htmlelement("select")}}-Elemente mit experimentellen Browser-Features erstellt. Dies umfasst die volle Kontrolle über das Styling des Select-Buttons, der Dropdown-Auswahl, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Features haben derzeit eine eingeschränkte Browser-Unterstützung. Bitte überprüfen Sie die Browser-Kompatibilitätstabellen auf den einzelnen Feature-Referenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Features; in anderen verursachen sie Hydratisierungsfehler, wenn serverseitiges Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da sie interne Bestandteile enthalten, die auf Betriebssystemebene gestylt sind und nicht mit CSS gezielt angesprochen werden können. Dazu gehören der Dropdown-Wähler, das Pfeilsymbol und so weiter.

Zuvor war die beste verfügbare Option — abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek — den {{cssxref("appearance")}}-Wert von `none` auf dem `<select>`-Element zu setzen, um einige der betriebssystemeigenen Styles zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird im [Erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende ausschließlich mit HTML und CSS zu erstellen, die in unterstützenden Browsern vollständig angepasst sind. Dies umfasst das Layout des `<select>` und des Dropdown-Wählers, Farbschemata, Icons, Schriftarten, Übergänge, Positionierungen, Marker zur Kennzeichnung des ausgewählten Icons und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung auf bestehender Funktionalität, indem sie in nicht unterstützenden Browsern zu „klassischen“ Selects zurückfallen.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel erstellen.

## Welche Features umfassen ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Features erstellen:

- Normale {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Selects, außer dass ihnen zusätzliche Inhaltstypen erlaubt sind.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist und das zuvor in "klassischen" Selects nicht erlaubt war. Wenn es enthalten ist, ersetzt es das Standard-"Button"-Rendering des geschlossenen `<select>`-Elements. Dies ist allgemein als **Select-Button** bekannt (da es der Button ist, den Sie drücken müssen, um den Dropdown-Wähler zu öffnen).
  > [!NOTE]
  > Der Select-Button ist standardmäßig [träge](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass, wenn interaktive Kinder (z. B. Links oder Buttons) darin enthalten sind, er dennoch wie ein einziger Button für Interaktionszwecke behandelt wird — z. B. werden die Kind-Elemente nicht fokussierbar oder anklickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Es enthält einen Klon des Inhalts des aktuell ausgewählten `<option>`-Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) unter der Haube).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Pickers adressiert. Dies umfasst alle Elemente innerhalb des `<select>`-Elements, außer dem ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Property-Wert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die browserdefinierten Standardstile und -verhaltensweisen für anpassbare Selects eintaucht.
- Die {{cssxref(":open")}}-Pseudo-Klasse, die den Select-Button adressiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Icon innerhalb des Select-Buttons anvisiert — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudo-Klasse, die das aktuell ausgewählte `<option>`-Element adressiert.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen im aktuell ausgewählten `<option>`-Element adressiert, um eine visuelle Anzeige zu liefern, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und sein Dropdown-Picker das folgende Verhalten automatisch zugewiesen:

- Sie haben eine Invoker/Popover-Beziehung, wie sie durch die [Popover-API](/de/docs/Web/API/Popover_API) spezifiziert ist, die die Möglichkeit bietet, den Picker bei Offenheit über die {{cssxref(":popover-open")}}-Pseudo-Klasse auszuwählen. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für mehr Details zum Popover-Verhalten.
- Sie haben einen impliziten Ankerbezug, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) assoziiert ist. Die Browser-Standardstile positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie es in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt wird. Die Browser-Standardstile definieren auch einige Fallbacks, die den Picker neu positionieren, wenn er Gefahr läuft, das Ansichtsfenster zu überlaufen. Die Fallbacks beim Positionierungsversuch sind in [Überlauf behandeln: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Unterstützung für anpassbare `<select>`-Elemente überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Features wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} ansehen.

Lassen Sie uns all die oben genannten Features in Aktion sehen, indem wir durch das Beispiel gehen, das oben auf der Seite gezeigt wird.

## Anpassbare Select-Markups

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist auf den Icons enthalten, damit sie vor unterstützenden Technologien verborgen werden und die Optionswerte nicht doppelt angekündigt werden (zum Beispiel, "Katze Katze").

Das Beispiel-Markup ist nahezu dasselbe wie das Markup eines „klassischen“ `<select>`, mit den folgenden Unterschieden:

- Die Struktur `<button><selectedcontent></selectedcontent></button>` repräsentiert den Select-{{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements veranlasst den Browser, das aktuell ausgewählte {{htmlelement("option")}} innerhalb des Buttons zu klonen, was Sie dann [mit benutzerdefinierten Styles versehen können](#anpassen_des_stylings_der_ausgewählten_option-inhalte_im_select-button). Wenn diese Struktur in Ihrem Markup nicht enthalten ist, fällt der Browser darauf zurück, den Text der ausgewählten Option im Standardbutton darzustellen, und Sie können diesen nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um alles darzustellen, was Sie innerhalb des geschlossenen `<select>` möchten, aber seien Sie vorsichtig dabei. Was Sie einfügen, kann den zugänglichen Wert, der der unterstützenden Technologie für das `<select>`-Element angezeigt wird, ändern.
- Der Rest der `<select>`-Inhalte stellt den Dropdown-Picker dar, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können andere Inhalte im Picker einfügen, es wird jedoch nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, in einem anpassbaren Select können Sie jedoch andere Markup-Strukturen wie Bilder, andere nicht-interaktive textuelle semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente verwenden, um weitere Inhalte einzufügen, obwohl Sie bedenken müssen, dass dies nicht in den absendbaren Wert aufgenommen wird. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente mit einem Icon und einem Textetikett, die es jeweils zulassen, unabhängig gestylt und positioniert zu werden.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln dazu, wie der Browser den aktuellen `<select>`-Wert über JavaScript extrahieren soll. Der Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} darauf angewendet, und das Ergebnis als der `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird komplett ignoriert, und die nicht-textbasierten `<option>`-Inhalte werden herausgefiltert, um nur die Textknoten-Inhalte zu belassen, aber das Ergebnis wird trotzdem funktionieren.

## Aktivieren des benutzerdefinierten Select-Renderings

Um die benutzerdefinierte Select-Funktionalität und die minimalen Browser-Standardstile zu aktivieren (und das betriebssystemspezifische Styling zu entfernen), müssen Ihrem `<select>`-Element und seinem Dropdown-Picker (repräsentiert durch das `::picker(select)`-Pseudo-Element) ein {{cssxref("appearance")}}-Wert von `base-select` zugewiesen werden:

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

Sie können wählen, nur das `<select>`-Element für die neue Funktionalität zu aktivieren und den Picker mit dem Standardbetriebssystem-Styling zu belassen. In den meisten Fällen möchten Sie jedoch beide aktivieren. Sie können nicht nur den Picker aktivieren, ohne das `<select>`-Element zu aktivieren.

Sobald dies geschehen ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie können nun diesen in jeglicher Weise stylen. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (die sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte festgelegt, plus einen {{cssxref("transition")}}, sodass sich die Hintergrundänderung weich animiert:

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

Um das Icon im Select-Button zu stylen — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element anvisieren. Der folgende Code verleiht dem Icon eine benutzerdefinierte {{cssxref("color")}} und einen `transition`, sodass Änderungen in seinem {{cssxref("rotate")}}-Wert sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudo-Klasse kombiniert — die den Select-Button nur anvisiert, wenn der Dropdown-Wähler geöffnet ist — um dem Icon einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Werfen wir einen Blick auf die bisherige Arbeit — beachten Sie, wie der Picker-Pfeil sanft um 180 Grad rotiert, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Pickers

Der Dropdown-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element anvisiert werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, das nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zuerst wird die standardmäßige schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestylt. Sie werden mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angeordnet, alle an den Anfang des Flex-Containers ausgerichtet, und ein `20px` {{cssxref("gap")}} zwischen jedem eingefügt. Jedes `<option>` erhält auch dieselbe {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Aussehen zu bieten:

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
> Anpassbare `<select>`-Element `<option>` haben standardmäßig `display: flex` gesetzt, aber es ist in unserem Stylesheet enthalten, um zu verdeutlichen, was passiert.

Als nächstes wird eine Kombination aus den {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudo-Klassen verwendet, um einen passenden {{cssxref("border-radius")}} auf den oberen und unteren `<option>`-Elementen festzulegen, und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — außer dem letzten, sodass die Grenzen nicht unordentlich und doppelt erscheinen. Wir setzen auch den gleichen `border-radius` auf den äußeren `::picker(select)`-Container, damit wir nicht mit einem hässlichen weißen Quadrat um die Optionen enden, wenn wir eine andere Hintergrundfarbe auf der Seite setzen.

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

Als nächstes wird eine unterschiedliche `background`-Farbe auf die ungeraden `<option>`-Elemente mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um ein Zebrastreifenmuster zu implementieren, und eine andere `background`-Farbe auf die `<option>`-Elemente im Fokus und Hover, um ein nützliches visuelles Highlight während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird in diesem Abschnitt eine größere {{cssxref("font-size")}} auf den `<option>`-Icons (enthalten in `<span>`-Elementen mit einer Klasse von `icon`) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um etwas von dem störenden Abstand an den Block-Start- und Block-Enden der Icon-Emojis zu entfernen, sodass sie sich besser mit den Textetiketten ausrichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen des Stylings der ausgewählten Option-Inhalte im Select-Button

Wenn Sie eine Haustier-Option aus den letzten Beispielen auswählen, bemerken Sie ein Problem — die Haustier-Icons verursachen, dass der Select-Button in der Höhe zunimmt, was auch die Position des Picker-Icons verändert, und es gibt keinen Abstand zwischen dem Options-Icon und dem Label.

Dies kann behoben werden, indem das Icon versteckt wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, das die Inhalte der ausgewählten `<option>` darstellt, wie sie im Select-Button erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} versteckt:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der `<option>`-Inhalte, wie sie im Dropdown-Picker erscheinen.

## Styling der aktuell ausgewählten Option

Um die gerade ausgewählte `<option>` so zu stylen, wie sie im Dropdown-Picker angezeigt wird, können Sie sie mit der {{cssxref(":checked")}}-Pseudo-Klasse anvisieren. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, das aktuell ausgewählte `<option>`-Element ein Häkchen am Inline-Start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element anvisiert werden. Beispielsweise könnten Sie dieses Häkchen verstecken (z.B. durch `display: none`).

Sie könnten auch etwas Interessanteres damit machen - vorher wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Elemente am Anfang der Zeile ausgerichtet sind. In der untenstehenden Regel wird das Häkchen vom Anfang der Zeile zum Ende verschoben, indem ihm ein {{cssxref("order")}}-Wert von größer als `0` gegeben wird, und es wird mit einem `auto` {{cssxref("margin-left")}}-Wert am Ende der Zeile ausgerichtet (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Icon darzustellen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudo-Elemente sind nicht im Zugänglichkeitsbaum enthalten, sodass jeglicher generierter {{cssxref("content")}} darauf nicht von unterstützenden Technologien angekündigt wird. Sie sollten dennoch darauf achten, dass jedes neue Icon, das Sie setzen, visuell Sinn für seinen beabsichtigten Zweck macht.

Sehen wir uns nochmals an, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten sieht wie folgt aus:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Pickers mit Popover-Zuständen

Der Select-Button und der Dropdown-Picker des anpassbaren `<select>`-Elements erhalten automatisch eine Invoker/Popover-Beziehung, wie in [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente; unser Beispiel nutzt die Möglichkeit, zwischen den versteckten und sichtbaren Popover-Zuständen mithilfe von Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudo-Klasse repräsentiert Popovers im sichtbaren Zustand.

Diese Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Animieren von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuallererst wird der Picker mit `::picker(select)` ausgewählt und ihm ein {{cssxref("opacity")}}-Wert von `0` und ein `transition`-Wert von `all 0.4s allow-discrete` zugewiesen. Dies bewirkt, dass alle Eigenschaften, die ihren Wert ändern, wenn sich der Popover-Zustand von versteckt zu sichtbar ändert, animieren.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, enthält jedoch auch zwei diskrete Eigenschaften, deren Werte durch die Browser-Standardstile gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn sich der Popover-Zustand von versteckt zu sichtbar ändert. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn sich der Popover-Zustand von versteckt zu sichtbar ändert, um ihn in die {{Glossary("top_layer", "oberste Schicht")}} zu befördern, und dann zurück, wenn er versteckt ist, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Schicht erst nach Abschluss des Übergangs erfolgt, um den Übergang sichtbar zu machen.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) ist erforderlich, um diskrete Eigenschaftsanimationen zu aktivieren.

Anschließend wird der Picker im sichtbaren Zustand mit `::picker(select):popover-open` ausgewählt und ihm ein `opacity`-Wert von `1` zugewiesen — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker animiert wird, während er sich von `display: none` zu einem `display`-Wert bewegt, der ihn sichtbar macht, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}} Blocks spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft einblenden und ausblenden zu lassen, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mit Ankerpositionierung

Der Select-Button und der Dropdown-Picker eines anpassbaren `<select>`-Elements haben einen impliziten Ankerbezug, und der Picker ist automatisch mit dem Select-Button über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) assoziiert. Das bedeutet, dass keine explizite Zuweisung über die {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften erfolgen muss.

Darüber hinaus bieten die [Browser-Standardstile eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt anpassen können.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker durch die Verwendung der {{cssxref("anchor()")}}-Funktion in seinen {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerten gesetzt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer einen Pixel von der unteren Kante des Select-Buttons entfernt positioniert wird und die linke Kante des Pickers immer `10%` der Breite des Select-Buttons von seiner linken Kante entfernt positioniert wird.

> [!NOTE]
> Wenn Sie die implizite Ankerbeziehung entfernen möchten, um zu verhindern, dass der Picker an das `<select>`-Element angedockt wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Pickers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuweisung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` so gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassen anderer klassischer Select-Funktionen

Die obigen Abschnitte haben alle neuen Funktionalitäten von anpassbaren Selects abgedeckt und gezeigt, wie sie mit klassischen einzeiligen Selects und verwandten modernen Features wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Element-Funktionen, die oben nicht erwähnt wurden; dieser Abschnitt behandelt, wie sie derzeit zusammen mit anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Es gibt derzeit keine spezifizierte Unterstützung für das `multiple`-Attribut an anpassbaren `<select>`-Elementen, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standardstyling von `<optgroup>`-Elementen entspricht dem in klassischen `<select>`-Elementen — fett und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass die `<optgroup>`-Elemente so gestylt werden, dass sie in das Gesamtdesign passen, und bedenken, dass sie sich wie Container verhalten, die man in konventionellem HTML erwarten würde. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein leicht anzusprechendes und zu stylendes Label bereitzustellen. Dies ersetzt jeglichen Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist, und hat dieselben Semantiken.

## Als nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zum Stylen von Formularen in verschiedenen Zuständen zur Verfügung stehen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
