---
title: Anpassbare Select-Elemente
short-title: Anpassbare Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie vollständig anpassbare {{htmlelement("select")}}-Elemente mithilfe experimenteller Browser-Funktionen erstellt werden können. Dies umfasst die vollständige Kontrolle über die Gestaltung der Select-Schaltfläche, des Dropdown-Pickers, des Pfeilsymbols, des Häkchens für die aktuelle Auswahl und jedes einzelne {{htmlelement("option")}}-Element.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Funktionen haben derzeit nur begrenzte Browser-Unterstützung; überprüfen Sie die Browser-Kompatibilitätstabellen auf den einzelnen Funktionsreferenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen führen sie zu Hydratationsfehlern, wenn Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da sie interne Komponenten enthalten, die auf Betriebssystemebene gestylt sind und nicht mit CSS gezielt werden können. Dazu gehören der Dropdown-Picker, das Pfeilsymbol und so weiter.

Früher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – den {{cssxref("appearance")}}-Wert auf `none` beim `<select>`-Element zu setzen, um einige der OS-Ebenen-Stylings zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird im [Fortgeschrittenen Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende zu erstellen, die nur HTML und CSS verwenden und in unterstützenden Browsern vollständig angepasst sind. Dies umfasst das Layout des `<select>` und des Dropdown-Pickers, das Farbschema, Symbole, Schriftart, Übergänge, Positionierung, Marker zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung auf Grundlage bestehender Funktionalität, indem sie in nicht unterstützenden Browsern auf „klassische“ Selects zurückfallen.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel erstellen können.

## Welche Funktionen umfasst ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Altbekannte {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in „klassischen“ Selects, außer dass sie zusätzliche zulässige Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in „klassischen“ Selects zuvor nicht erlaubt war. Wenn dies enthalten ist, ersetzt es das standardmäßige „Button“-Rendering des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Schaltfläche** bezeichnet (da es die Schaltfläche ist, die Sie drücken müssen, um den Dropdown-Picker zu öffnen).
  > [!NOTE]
  > Die Select-Schaltfläche ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass sie, wenn interaktive Kinder (z. B. Links oder Schaltflächen) darin enthalten sind, weiterhin wie eine einzelne Schaltfläche für Interaktionszwecke behandelt wird – z. B. sind die Kinder nicht fokussierbar oder klickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den derzeit ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält einen Klon des aktuell ausgewählten `<option>`-Elementinhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Pickers anvisiert. Dies umfasst alle Elemente innerhalb des `<select>`-Elements, mit Ausnahme des ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement in die vom Browser definierten Standardstile und das Verhalten für anpassbare Selects bringe.
- Die {{cssxref(":open")}}-Pseudoklasse, die die Select-Schaltfläche anvisiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudoelement, das das Symbol in der Select-Schaltfläche anvisiert – den Pfeil, der nach unten zeigt, wenn die Selects geschlossen sind.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das derzeit ausgewählte `<option>`-Element anvisiert.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen platziert im derzeit ausgewählten `<option>`-Element anvisiert, um eine visuelle Angabe zu bieten, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und sein Dropdown-Picker automatisch folgendes Verhalten zugewiesen:

- Sie haben eine Invoker-Popover-Beziehung, wie sie vom [Popover API](/de/docs/Web/API/Popover_API) angegeben wird, was die Möglichkeit bietet, den Picker beim Öffnen über die {{cssxref(":popover-open")}}-Pseudoklasse auszuwählen. Siehe [Verwendung des Popover-APIs](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden ist. Die vom Browser standardmäßigen Stile positionieren den Picker relativ zur Schaltfläche (dem Anker), und Sie können diese Position anpassen, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt wird. Die vom Browser standardmäßigen Stile definieren auch einige Fallback-Positionen, die den Picker neu positionieren, wenn er die Gefahr droht, aus dem Ansichtsfenster überzulaufen. Die Fallback-Positionen werden im Abschnitt [Umgang mit Überlauf: try fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} einsehen.

Sehen wir uns all die oben genannten Funktionen in Aktion an, indem wir das Beispiel durchgehen, das oben auf der Seite gezeigt wird.

## Markup für anpassbare Selects

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, mit dem Sie ein Haustier auswählen können. Das Markup lautet wie folgt:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut ist bei den Symbolen hinzugefügt, damit sie von unterstützenden Technologien ausgeblendet werden, um zu vermeiden, dass die Optionswerte zweimal angesagt werden (zum Beispiel: „Katze Katze“).

Das Beispiel-Markup ist fast dasselbe wie das Markup für „klassische“ `<select>`, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur stellt die Select-{{htmlelement("button")}} dar.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements führt dazu, dass der Browser das derzeit ausgewählte {{htmlelement("option")}} innerhalb des Buttons klont, den Sie dann [mit benutzerdefinierten Stilen versehen](#anpassung_der_styles_der_ausgewählten_option-inhalte_innerhalb_der_select-schaltfläche) können. Wenn diese Struktur nicht in Ihr Markup aufgenommen wird, fällt der Browser zurück, um den Text der ausgewählten Option innerhalb des Standard-Buttons anzuzeigen, und Sie können ihn nicht so leicht stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` hinzufügen, um beliebige Inhalte im geschlossenen `<select>` anzuzeigen, seien Sie jedoch vorsichtig. Was Sie hinzufügen, kann den barrierefreien Wert, der für unterstützende Technologien für das `<select>`-Element sichtbar gemacht wird, ändern.
- Der restliche `<select>`-Inhalt stellt den Dropdown-Picker dar, der üblicherweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Optionen im Picker darstellen. Sie können andere Inhalte im Picker hinzufügen, aber das wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textbasierte semantische Elemente und mehr einschließen. Sie können sogar die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelemente verwenden, um anderen Inhalt einzuschließen, obwohl Sie beachten sollten, dass dies nicht im übermittelbaren Wert enthalten sein würde. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textetikett enthalten, sodass jedes individuell gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Subtrees enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren soll. Der Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf angewandt und das Ergebnis wird als `<select>`-Wert festgelegt.

Dieses Design ermöglicht es Browsern ohne Unterstützung, auf ein klassisches `<select>`-Erlebnis zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert und die nicht-textlichen `<option>`-Inhalte werden entfernt, sodass nur die Textknoten übrig bleiben, aber das Ergebnis wird weiterhin funktionieren.

## Opt-In für das benutzerdefinierte Select-Rendering

Um für die benutzerdefinierte Select-Funktionalität und die minimalen Browser-Standardstile zu optieren (und die vom Betriebssystem bereitgestellten Stile zu entfernen), muss Ihr `<select>`-Element und sein Dropdown-Picker (dargestellt durch das `::picker(select)`-Pseudoelement) beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können das `<select>`-Element nur für die neue Funktionalität optieren, der Picker bleibt dann im Standard-OS-Styling, aber in den meisten Fällen möchten Sie wahrscheinlich beides optieren. Sie können den Picker nicht optieren, ohne das `<select>`-Element zu optieren.

Sobald dies erledigt ist, ist das Ergebnis eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Jetzt können Sie es nach Belieben stylen. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (das sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}}-Werte gesetzt, plus eine {{cssxref("transition")}}, damit der Hintergrundwechsel sanft animiert wird:

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

Um das Symbol in der Select-Schaltfläche zu stylen – den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist – können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudoelement anvisieren. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als Nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert – die nur die Select-Schaltfläche anvisiert, wenn der Dropdown-Picker geöffnet ist – um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an – beachten Sie, wie der Picker-Pfeil sanft um 180 Grad rotiert, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Pickers

Der Dropdown-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement angesteuert werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, das nicht die Schaltfläche und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zuerst wird die Standard-Schwarz-{{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Jetzt werden die `<option>`-Elemente gestylt. Sie werden mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angeordnet, wobei sie alle am Anfang des Flexcontainers ausgerichtet sind und ein `20px` {{cssxref("gap")}} zwischen jedem enthalten ist. Jedes `<option>` erhält außerdem dieselben {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}}, und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Aussehen und Gefühl zu schaffen:

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
> Anpassbare `<select>`-Element-`<option>`s haben standardmäßig `display: flex` gesetzt, aber es ist auch in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als Nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudoklassen verwendet, um eine geeignete {{cssxref("border-radius")}} an den oberen und unteren Ecken des Pickers zu setzen und das {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, damit die Ränder nicht unordentlich und doppelt aussehen:

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

Dann wird eine andere `background`-Farbe bei den ungeradzahligen `<option>`-Elementen mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um Zebra-Streifen zu implementieren, und eine andere `background`-Farbe wird auf die `<option>`-Elemente bei Fokus und Hover gesetzt, um während der Auswahl ein nützliches visuelles Highlight zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole gesetzt (innerhalb von `<span>`-Elementen mit einer Klasse von `icon` enthalten), um sie zu vergrößern, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um etwas des ärgerlichen Abstands an den Block-Start- und -Endkanten der Icon-Emojis zu entfernen, damit sie sich besser mit den Textetiketten ausrichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert nun so:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung der Styles der ausgewählten Option-Inhalte innerhalb der Select-Schaltfläche

Wenn Sie eine Haustieroption aus den letzten paar Live-Beispielen auswählen, werden Sie ein Problem bemerken – die Haustier-Symbole verursachen, dass die Select-Schaltfläche in der Höhe zunimmt, was auch die Position des Picker-Symbols ändert, und es gibt keinen Abstand zwischen dem Symbol der Option und dem Label.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es sich innerhalb von `<selectedcontent>` befindet, das die Inhalte der ausgewählten `<option>` darstellt, wie sie innerhalb der Select-Schaltfläche erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies wirkt sich nicht auf das Styling der `<option>`-Inhalte aus, wie sie innerhalb des Dropdown-Pickers erscheinen.

## Styling der derzeit ausgewählten Option

Um die derzeit ausgewählte `<option>` zu stylen, wie sie innerhalb des Dropdown-Pickers erscheint, können Sie diese mit der {{cssxref(":checked")}}-Pseudoklasse anvisieren. Diese wird verwendet, um das {{cssxref("font-weight")}} der ausgewählten `<option>` auf „bold“ zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, das derzeit ausgewählte `<option>` ein Häkchen an seinem Inline-Start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement angesteuert werden. Beispielsweise möchten Sie vielleicht dieses Häkchen ausblenden (z.B. über `display: none`).

Sie könnten auch etwas Interessanteres damit machen – vorher wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Items am Anfang der Zeile ausgerichtet wurden. In der folgenden Regel wird das Häkchen vom Anfang der Zeile an das Ende verschoben, indem ein {{cssxref("order")}}-Wert auf größere als `0` gesetzt wird, und es wird am Ende der Zeile mit einem `auto`-{{cssxref("margin-left")}}-Wert ausgerichtet (siehe [Ausrichtung und automatische Margen](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol zur Anzeige festzulegen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudoelemente sind im Barrierefreiheitsbaum nicht enthalten, so dass vom Browser generierter {{cssxref("content")}} auf ihnen nicht von unterstützenden Technologien angesagt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck Sinn ergibt.

Lassen Sie uns noch einmal überprüfen, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Pickers mithilfe von Popover-Status

Die Select-`button`- und Dropdown-Picker eines anpassbaren `<select>`-Elements haben automatisch eine Invoker-Popover-Beziehung, wie in [Verwendung des Popover-APIs](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die dies `<select>`-Elementen bringt; unser Beispiel nutzt die Fähigkeit, zwischen versteckten und angezeigten Popover-Zuständen mithilfe von Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudoklasse stellt Popovers im angezeigten Zustand dar.

Die Technik wird in diesem Abschnitt kurz behandelt – lesen Sie [Popovers animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zunächst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies führt dazu, dass alle Eigenschaften, die sich ändern, wenn der Popover-Zustand von versteckt nach gezeigt wechselt, animieren.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, enthält jedoch auch zwei diskrete Eigenschaften, deren Werte von den Browser-Standardstilen festgelegt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn der Popover-Zustand von versteckt zu angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von versteckt zu angezeigt wechselt, um ihn in die {{Glossary("top_layer", "obere Schicht")}} zu befördern, und dann wieder zurück, wenn er versteckt wird, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Schicht aufgeschoben wird, bis der Übergang abgeschlossen ist, und so sichergestellt wird, dass der Übergang sichtbar bleibt.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete)-Wert ist erforderlich, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` – dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker animiert wird, während er von `display: none` zu einem `display`-Wert wechselt, der ihn sichtbar macht, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und auszublenden, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mithilfe von Ankerpositionierung

Die Select-Schaltfläche und der Dropdown-Picker eines anpassbaren `<select>`-Elements haben eine implizite Ankerreferenz und der Picker wird automatisch mit der Select-Schaltfläche über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden. Dies bedeutet, dass keine explizite Verbindung mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden muss.

Darüber hinaus [stellen die Browser-Standardstile eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning) bereit, die Sie anpassen können, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erläutert.

In unserer Demo wird die Position des Pickers in Relation zu seinem Anker gesetzt, indem die {{cssxref("anchor()")}}-Funktion in seinen {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerten verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die Oberkante des Pickers immer 1 Pixel unterhalb der Unterkante der Select-Schaltfläche positioniert ist, und die linke Kante des Pickers immer `10%` der Breite der Select-Schaltfläche von ihrer linken Kante entfernt.

## Endergebnis

Nach den letzten zwei Abschnitten wird der finale aktualisierte Stand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Select-Funktionen

Die obigen Abschnitte haben alle neuen Funktionen abgedeckt, die in anpassbaren Selects verfügbar sind, und gezeigt, wie sie sowohl mit klassischen einzeiligen Selects als auch mit verwandten modernen Funktionen wie Popovers und Anker-Positionierung interagieren. Es gibt einige andere `<select>`-Elementfunktionen, die oben nicht erwähnt wurden; dieser Abschnitt spricht darüber, wie sie derzeit neben anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Es ist derzeit keine Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen spezifiziert, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Die Standard-Stilierung von `<optgroup>`-Elementen ist dieselbe wie bei klassischen `<select>`-Elementen – fettgedruckt und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass die `<optgroup>`-Elemente so gestaltet sind, dass sie in das Gesamtdesign passen, und beachten, dass sie sich genauso verhalten werden, wie Container in konventionellem HTML verhalten. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Label bereitzustellen, das einfach anzusteuern und zu stylen ist. Dies ersetzt jeden im `label`-Attribut des `<optgroup>`-Elements gesetzten Text und hat dieselbe Semantik.

## Als nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu stylen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
