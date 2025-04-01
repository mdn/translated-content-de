---
title: Anpassbare Auswahl-Elemente
short-title: Anpassbare Auswahlelemente
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 3d42ba9aa42e053985c70adedaa96e4ccb09bdca
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie spezielle, moderne HTML- und CSS-Funktionen zusammen verwenden können, um vollständig anpassbare {{htmlelement("select")}}-Elemente zu erstellen. Dies beinhaltet die vollständige Kontrolle über das Styling des Auswahlschaltfläche, des Dropdown-Auswahlfensters, des Pfeilsymbols, der aktuellen Auswahlbestätigung und jedes einzelnen {{htmlelement("option")}}-Elements.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, weil sie interne Komponenten enthalten, die auf Betriebssystemebene gestylt werden und die nicht mit CSS angesprochen werden können. Dazu gehören das Dropdown-Auswahlfenster, das Pfeilsymbol usw.

Bisher war die beste verfügbare Option, abgesehen von der Verwendung einer eigenen JavaScript-Bibliothek, ein {{cssxref("appearance")}}-Wert von `none` auf dem `<select>`-Element zu setzen, um einen Teil der Betriebssystem-Stilierung zu entfernen, und dann CSS zu verwenden, um die Teile zu stilisieren, die tatsächlich angepasst werden können. Diese Technik wird im [Leitfaden für fortgeschrittenes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende zu erstellen, die nur mit HTML und CSS vollständig angepasst in unterstützenden Browsern funktionieren. Dies umfasst das Layout des `<select>`- und Dropdown-Auswahlfensters, das Farbschema, Symbole, Schriftart, Übergänge, Positionierung, Markierungen zur Angabe des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung gegenüber vorhandener Funktionalität und fallen in nicht unterstützenden Browsern auf "klassische" Auswahlelemente zurück.

Im weiteren Verlauf werden Sie erfahren, wie Sie dieses Beispiel erstellen können.

## Welche Funktionen umfasst ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie bei „klassischen“ Selects, mit der Ausnahme, dass sie zusätzliche zulässige Inhaltstypen enthalten können.
- Ein {{htmlelement("button")}}-Element als erstes Kind innerhalb des `<select>`-Elements, was zuvor in „klassischen“ Selects nicht erlaubt war. Wenn es enthalten ist, ersetzt es die Standard-"Button"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **Auswahlschaltfläche** bekannt (da es der Button ist, den Sie drücken müssen, um den Dropdown-Auswahlfenster zu öffnen).
  > [!NOTE]
  > Die Auswahlschaltfläche ist standardmäßig {{Glossary("inert", "inert")}}, so dass, wenn interaktive Kinder (z.B. Links oder Schaltflächen) darin enthalten sind, sie dennoch wie eine einzige Schaltfläche für Interaktionszwecke behandelt wird – z.B. werden die Kind-Elemente nicht fokussierbar oder klickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält ein Klon des aktuell ausgewählten `<option>`-Elements Inhalts (created using [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) under the hood).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Auswahlfensters anspricht. Dies schließt alle Elemente innerhalb des `<select>`-Elements ein, außer das erste Kind-`<button>`.
- Der {{cssxref("appearance")}} Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die vom Browser definierten Standardstile und das Verhalten für anpassbare Selects einfügt.
- Die {{cssxref(":open")}}-Pseudoklasse, die die Auswahlschaltfläche anspricht, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}} Pseudo-Element, das das Symbol in der Auswahlschaltfläche anspricht – den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen innerhalb des aktuell ausgewählten `<option>`-Elements anspricht, um eine visuelle Anzeigung zu geben, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und dessen Dropdown-Auswahlfenster das folgende Verhalten:

- Sie haben eine Aufrufer/Popover-Beziehung, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) angegeben wird, die die Möglichkeit bietet, den Picker beim Öffnen über die {{cssxref(":popover-open")}}-Pseudoklasse auszuwählen. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für weitere Informationen über das Popover-Verhalten.
- Sie haben eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch dem `<select>`-Element durch [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zugeordnet ist. Die Standardstile des Browsers positionieren den Picker relativ zur Schaltfläche (dem Anker), und Sie können diese Position anpassen, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Standardstile des Browsers definieren auch einige Positions-Zurückfalllösungen, die den Picker umpositionieren, wenn er Gefahr läuft, den Viewport zu überlaufen. Positions-Zurückfalllösungen werden im Abschnitt [Umgang mit Überlauf: Versuchs-Zurückfalllösungen und bedingtem Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>`-Elemente überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} ansehen.

Schauen wir uns alle oben genannten Funktionen in Aktion an, indem wir das oben auf der Seite gezeigte Beispiel durchgehen.

## Anpassbare Auswahl-Markup

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist bei den Symbolen enthalten, damit sie von unterstützenden Technologien verborgen bleiben und die Optionswerte nicht doppelt angesagt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist nahezu identisch mit dem „klassischen” `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur stellt die Auswahl-{{htmlelement("button")}} dar.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements führt dazu, dass der Browser das aktuell ausgewählte {{htmlelement("option")}} innerhalb der Schaltfläche klont, das Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassung_des_stylings_des_ausgewählten_optionsinhalts_in_der_auswahlschaltfläche). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser darauf zurück, den Text der ausgewählten Option innerhalb der Standardschaltfläche wiederzugeben, und das Styling wird erschwert.
  > [!NOTE]
  > Sie _können_ beliebigen Inhalt innerhalb des `<button>` einfügen, um alles im geschlossenen `<select>` darzustellen, aber achten Sie darauf, was Sie tun. Was Sie einschließen, kann den zugänglichen Wert beeinflussen, der für unterstützende Technologien für das `<select>`-Element sichtbar ist.
- Der Rest des `<select>`-Inhalts stellt den Dropdown-Auswahlfenster dar, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Fenster repräsentieren. Sie können anderen Inhalt im Fenster einschließen, jedoch wird es nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in anpassbaren Selects können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textebene semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}}-Pseudoelemente verwenden, um anderen Inhalt hinzuzufügen, bedenken Sie jedoch, dass dies nicht in den übermittelbaren Wert einbezogen würde. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textetikett enthalten, sodass diese unabhängig voneinander gestylt und positioniert werden können.

  > [!NOTE]
  > Da der `<option>`-Inhalt nicht nur Textknoten, sondern mehrstufige DOM-Strukturen enthalten kann, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der `textContent`-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} darauf angewendet und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es, dass nicht unterstützende Browser auf eine klassische `<select>`-Erfahrung zurückfallen. Die Struktur `<button><selectedcontent></selectedcontent></button>` wird vollständig ignoriert und der nicht-textliche `<option>`-Inhalt wird auf die Textknoteninhalte reduziert, aber das Ergebnis funktioniert weiterhin.

## Opt-in für die benutzerdefinierte Auswahl-Darstellung

Um die benutzerdefinierte Auswahldarstellung und die minimalen Browser-Basisstile (und die Betriebssystem-Teilgestaltung zu entfernen), benötigt Ihr `<select>`-Element und dessen Dropdown-Picker (durch das `::picker(select)`-Pseudoelement dargestellt) einen {{cssxref("appearance")}}-Wert von `base-select`:

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

Sie können sich dafür entscheiden, nur das `<select>`-Element für die neue Funktionalität zu aktivieren und den Picker mit dem Standard-Betriebssystem-Styling zu belassen, aber in den meisten Fällen möchten Sie wahrscheinlich beide aktivieren. Sie können den Picker nicht aktivieren, ohne das `<select>`-Element zu aktivieren.

Sobald dies geschehen ist, ergibt sich eine sehr einfache Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind jetzt frei, dies nach Belieben zu gestalten. Zu Beginn hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (das sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte sowie einen {{cssxref("transition")}}, damit der Hintergrundwechsel sanft animiert wird:

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

Um das Symbol in der Auswahlschaltfläche zu gestalten – den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist – können Sie es mit dem {{cssxref("::picker-icon")}} Pseudo-Element ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und einen `transition`, damit Änderungen an dessen {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert – die nur dann die Auswahlschaltfläche anspricht, wenn der Dropdown-Auswahlfenster geöffnet ist – um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet wird.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Lassen Sie uns die bisherige Arbeit anschauen – beachten Sie, wie der Picker-Pfeil sich sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Auswahlfensters

Der Dropdown-Auswahlfenster kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement angesprochen werden. Wie bereits erwähnt, enthält der Picker alle Elemente innerhalb des `<select>`-Elements, die nicht der Button und das `<selectedcontent>` sind. In unserem Beispiel bedeutet dies alle `<option>` Elemente und deren Inhalte.

Zuerst wird die Standard-Schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestylt. Sie werden mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angeordnet, indem sie alle am Anfang des Flex-Containers ausgerichtet werden und einen `20px` {{cssxref("gap")}} zwischen jedem von ihnen erhalten. Jedes `<option>` erhält zusätzlich die gleichen {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}}, wie das `<select>`, um eine einheitliches Erscheinungsbild zu erhalten:

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
> Anpassbare `<select>`-Element `<option>`s haben standardmäßig `display: flex` auf ihnen gesetzt, aber es ist in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Nächste wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudoklassen verwendet, um einen angemessenen {{cssxref("border-radius")}} an den oberen und unteren Ecken des Pickers zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, sodass die Ränder nicht unordentlich und doppelt aussehen:

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

Als nächstes wird eine andere `background`-Farbe auf die ungeradzahligen `<option>`-Elemente mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um ein Zebramuster zu implementieren, und eine andere `background`-Farbe wird auf die `<option>`-Elemente bei Fokus und Hover gesetzt, um während der Auswahl einen nützlichen visuellen Hervorhebung zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

Abschließend wird den `<option>`-Symbolen eine größere {{cssxref("font-size")}} (enthalten innerhalb `<span>`-Elementen mit einer Klassenbezeichnung `icon`) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um etwas vom störenden Abstand am Block-Anfang und Block-Ende-Kanten der Symbol-Emojis zu entfernen, um sie besser mit den Textetiketten zu alignieren:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert jetzt so:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung des Stylings des ausgewählten Optionsinhalts in der Auswahlschaltfläche

Wenn Sie eine Haustier-Auswahlmöglichkeit in den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken – die Haustier-Symbole verursachen, dass sich die Auswahltaste in der Höhe erhöht, was auch die Position des Pickers-Symbols ändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Etikett.

Dies kann gelöst werden, indem das Symbol versteckt wird, wenn es im `<selectedcontent>` enthalten ist, das die Inhalte der ausgewählten `<option>` darstellt, wie sie innerhalb der Auswahltaste erscheinen. In unserem Beispiel wird es mithilfe von {{cssxref("display", "display: none")}} versteckt:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der `<option>`-Inhalte, wenn sie innerhalb des Dropdown-Auswahlfensters erscheinen.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` zu stylen, wie sie im Dropdown-Picker erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse ansprechen. Dies wird verwendet, um die {{cssxref("font-weight")}} der ausgewählten `<option>`-Elemente auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl vorzunehmen, die aktuell ausgewählte `<option>` ein Häkchen am Inline-Startende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement angesprochen werden. Beispielsweise können Sie dieses Häkchen verbergen (z.B. über `display: none`).

Sie können sich auch entscheiden, etwas Interessanteres damit zu tun – Die `<option>`-Elemente wurden zuvor horizontal mit Flexbox angeordnet und die Flex-Items wurden an den Beginn der Reihe ausgerichtet. Im unten stehenden Regelwerk wird das Häkchen vom Anfang der Reihe bis zum Ende durch Setzen eines {{cssxref("order")}}-Werts, der größer als `0` ist, verschoben und linksbündig mit dem Ende der Reihe durch Setzen eines `auto`-Werts für {{cssxref("margin-left")}} ausgerichtet (siehe [Ausrichtung und automatisierte Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die Pseudoelemente `::checkmark` und `::picker-icon` sind nicht im Zugänglichkeitsbaum enthalten, daher wird jeder generierte {{cssxref("content")}}-Wert, der auf ihnen gesetzt wird, nicht von unterstützenden Technologien angesagt. Sie sollten trotzdem sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell sinnvoll für seinen beabsichtigten Zweck ist.

Schauen wir uns an, wie das Beispiel jetzt gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Pickers mit Popover-Zuständen

Das anpassbare `<select>`-Element und dessen Dropdown-Picker erhalten automatisch eine Aufrufer/Popover-Beziehung, wie sie in [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben wird. Es gibt viele Vorteile, die dies für `<select>`-Elemente bringt; unser Beispiel nutzt die Möglichkeit, zwischen Popover-Verborgungs- und Sichtbarkeitszuständen mit Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudo-Klasse repräsentiert Popovers im Sichtbarkeitszustand.

Die Technik wird in diesem Abschnitt kurz behandelt – lesen Sie [Animation von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und mit einem {{cssxref("opacity")}}-Wert von `0` und einem `transition`-Wert von `all 0.4s allow-discrete` versehen. Dies führt dazu, dass alle Eigenschaften, die beim Popover-Zustandswechsel von versteckt zu sichtbar Wert ändern, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übertragenen Eigenschaften enthält `opacity`, jedoch beinhaltet sie auch zwei diskrete Eigenschaften, deren Werte durch die Standardstile des Browsers gesetzt sind:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn sich der Popover-Zustand von versteckt zu sichtbar ändert. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn sich der Popover-Zustand von versteckt zu sichtbar ändert, um es auf die {{Glossary("top_layer", "Top-Schicht")}} zu setzen, und dann wieder zurück, um es zu entfernen. Das muss animiert werden, damit die Entfernung des Popovers von der Top-Schicht bis zum Abschluss des Übergangs verzögert wird und sicherstellt, dass der Übergang sichtbar ist.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) Wert wird benötigt, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als nächstes wird der Picker im Sichtbarkeitszustand unter Nutzung von `::picker(select):popover-open` ausgewählt und der `opacity`-Wert auf `1` – den Endzustand des Übergangs – gesetzt:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker während des Übergangs von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, überführt wird, muss der Anfangszustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und auszublenden, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mittels Ankerpositionierung

Eine anpassbare `<select>`-Auswahlschaltfläche und ein Dropdown-Picker haben eine implizite Ankerreferenz und der Picker wird automatisch über [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) mit der Auswahlschaltfläche assoziiert. Das bedeutet, dass keine explizite Zuordnung mithilfe der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften erforderlich ist.

Darüber hinaus stellt die [Standardsstile des Browsers eine Standardposition bereit](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker durch Verwendung der {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaftswerte gesetzt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Das Resultat ist, dass die Oberkante des Pickers immer 1 Pixel unterhalb der Unterkante der Auswahlschaltfläche positioniert wird und die linke Kante des Pickers immer `10%` der Breite der Auswahlschaltfläche von deren linker Kante aus positioniert wird.

## Endergebnis

Nach den letzten beiden Abschnitten wird der letzte aktualisierte Zustand unseres `<select>`-Elements wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Auswahl-Funktionen

Die oben behandelten Abschnitte haben alle neuen Features von anpassbaren Selects abgedeckt und gezeigt, wie sie mit sowohl klassischen einzeiligen Selects als auch verwandten modernen Features wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Element-Funktionen, die oben nicht erwähnt wurden; dieser Abschnitt behandelt, wie sie derzeit mit anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Attributes/multiple)
  - : Es gibt derzeit keine festgelegte Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen, aber dies wird in der Zukunft bearbeitet.
- {{htmlelement("optgroup")}}
  - : Die Standardstile der `<optgroup>`-Elemente entsprechen denen in klassischen `<select>`-Elementen – fettgedruckt und weniger als die enthaltenen Optionen eingerückt. Sie müssen sicherstellen, die `<optgroup>`-Elemente zu gestalten, sodass sie ins Gesamtdesign passen, und bedenken, dass sie sich so verhalten wie Container in konventionellem HTML erwartet werden. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Label bereitzustellen, das leicht ansprechbar und gestaltbar ist. Dies ersetzt den Text im `label`-Attribut des `<optgroup>`-Elements, und es hat die gleiche Semantik.

## Als nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erforschen, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu gestalten.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
