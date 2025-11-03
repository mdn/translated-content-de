---
title: Anpassbare Auswahl-Elemente
short-title: Anpassbare Auswahl
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie vollständig anpassbare {{htmlelement("select")}}-Elemente unter Verwendung experimenteller Browser-Features erstellen können. Dies umfasst die vollständige Kontrolle über die Gestaltung des Auswahlknopfs, des Dropdown-Auswahlfelds, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel demonstrierten CSS- und HTML-Features haben derzeit eingeschränkte Unterstützung in Browsern; überprüfen Sie die Browser-Kompatibilitätstabellen auf den jeweiligen Feature-Referenzseiten, um weitere Details zu erhalten. Einige JavaScript-Frameworks blockieren diese Features; bei anderen verursachen sie Hydratationsfehler, wenn Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Erscheinungsbild von `<select>`-Elementen anzupassen, weil sie interne Bestandteile enthalten, die auf Betriebssystemebene gestaltet sind und nicht mittels CSS gezielt angesprochen werden können. Dazu gehören das Dropdown-Auswahlfeld, das Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – den {{cssxref("appearance")}}-Wert von `none` auf das `<select>`-Element anzuwenden, um einige der Betriebssystem-gestalten zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestaltet werden können. Diese Technik wird im [Fortgeschrittenen Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende zu erstellen, nur mit HTML und CSS, die in unterstützenden Browsern vollständig anpassbar sind. Dies umfasst `<select>`- und Dropdown-Layout, Farbschema, Symbole, Schriftart, Übergänge, Positionierung, Markierungen zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung der bestehenden Funktionalität und fallen in nicht unterstützenden Browsern auf "klassische" Auswahl-Elemente zurück.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel erstellen können.

## Welche Funktionen umfasst eine anpassbare Auswahl?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Features erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Auswahlen, außer dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was zuvor in "klassischen" Auswahlen nicht erlaubt war. Wenn es enthalten ist, ersetzt es die Standard-"Button"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als der **Auswahlknopf** bezeichnet (da dies der Knopf ist, den Sie zum Öffnen des Dropdown-Auswahlfelds drücken müssen).
  > [!NOTE]
  > Der Auswahlknopf ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass, wenn interaktive Kinder (zum Beispiel Links oder Buttons) darin enthalten sind, er trotzdem wie ein einzelner Button für Interaktionszwecke behandelt wird – zum Beispiel sind die Kind-Elemente nicht fokussier- oder anklickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements inkludiert werden, um den aktuell ausgewählten Wert im _geschlossenen_ `<select>`-Element anzuzeigen.
  Dies enthält einen Klon des aktuell ausgewählten `<option>`-Elementinhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Auswahlfelds anspricht. Dies umfasst alle Elemente innerhalb des `<select>`-Elements, außer dem ersten Kind `<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die standardmäßigen Brower-Styles und das Verhalten für anpassbare Auswahlen einbindet.
- Die {{cssxref(":open")}}-Pseudo-Klasse, die den Auswahlknopf anspricht, wenn das Auswahlfeld (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol im Auswahlknopf anspricht – der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudo-Klasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen im aktuell ausgewählten `<option>`-Element anspricht, um eine visuelle Anzeige dafür zu bieten, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und sein Dropdown-Auswahlfeld automatisch das folgende Verhalten zugewiesen:

- Sie haben eine Einleitungs-/Popover-Beziehung, wie sie von der [Popover-API](/de/docs/Web/API/Popover_API) festgelegt ist, die die Möglichkeit bietet, das Auswahlfeld beim Öffnen über die {{cssxref(":popover-open")}}-Pseudo-Klasse auszuwählen. Siehe [Using the Popover API](/de/docs/Web/API/Popover_API/Using) für mehr Details zum Popover-Verhalten.
- Sie haben eine implizite Anker-Referenz, was bedeutet, dass das Auswahlfeld automatisch dem `<select>`-Element über [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zugeordnet wird. Die standardmäßigen Browser-Styles positionieren das Auswahlfeld relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie es in [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt wird. Die standardmäßigen Browser-Styles definieren auch einige Positions-Versuch-Alternative, die das Auswahlfeld neu positionieren, wenn es droht, den Anzeigebereich zu überfluten. Positions-Versuch-Alternative werden in [Umgang mit Überlauf: Versuch-Alternativen und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Features wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Schauen wir uns alle oben genannten Features in Aktion an, indem wir das Beispiel durchgehen, das oben auf der Seite gezeigt wird.

## Anpassbarer Auswahl-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, das es Ihnen ermöglicht, ein Haustier zu wählen. Das Markup ist wie folgt:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut ist auf den Symbolen enthalten, damit sie von unterstützenden Technologien verborgen werden, um zu vermeiden, dass die Optionswerte zweimal angekündigt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast dasselbe wie "klassisches" `<select>`-Markup mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur repräsentiert den Auswahl-{{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements führt dazu, dass der Browser das aktuell ausgewählte {{htmlelement("option")}} innerhalb des Buttons klont, das Sie dann [mit eigenen Styles versehen können](#anpassung_der_gestaltung_des_inhalts_der_ausgewählten_option_innerhalb_des_auswahlknopfs). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser auf das Rendern des ausgewählten Optionstexts innerhalb des Standard-Buttons zurück und Sie können es nicht so leicht stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um was auch immer Sie innerhalb des geschlossenen `<select>` anzeigen wollen, aber seien Sie vorsichtig dabei. Was Sie einfügen, kann den zugänglichen Wert, der unterstützenden Technologien für das `<select>`-Element ausgesetzt wird, verändern.
- Der Rest des `<select>`-Inhalts stellt das Dropdown-Auswahlfeld dar, das normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Auswahlfeld darstellen. Sie können andere Inhalte im Auswahlfeld inkludieren, aber es wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber bei einer anpassbaren Auswahl können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textbasierte semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente verwenden, um andere Inhalte einzufügen, obwohl Sie beachten müssen, dass dies nicht im übermittelbaren Wert enthalten wäre. In unserem Beispiel enthält jede `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textlabel enthalten, wodurch jedes einzeln gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann und nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der `textContent`-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf ausgeführt und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird komplett ignoriert und die nicht-textmäßigen `<option>`-Inhalte werden herausgefiltert, so dass nur die Textknoten-Inhalte übrig bleiben, aber das Ergebnis wird noch funktionieren.

## Opt-in zum benutzerdefinierten Auswahl-Rendering

Um sich für die benutzerdefinierte Auswahl-Funktionalität und minimale Browser-Grundstyles zu entscheiden (und die vom Betriebssystem bereitgestellten Stylen zu entfernen), müssen Ihr `<select>`-Element und das Dropdown-Auswahlfeld (dargestellt durch das `::picker(select)`-Pseudo-Element) beide einen {{cssxref("appearance")}}-Wert von `base-select` darauf gesetzt haben:

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

Sie können sich dafür entscheiden, nur das `<select>`-Element für die neue Funktionalität auszuoptieren und das Auswahlfeld mit den standardmäßigen Betriebssystem-Styles zu belassen, aber in den meisten Fällen wollen Sie beides ausoptieren. Sie können das Auswahlfeld nicht ausoptieren, ohne auch das `<select>`-Element zu tun.

Einmal gemacht, ergibt dies eine sehr schlichte Darstellung des `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind jetzt frei, dies nach Belieben zu gestalten. Zu Beginn hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (was sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}}-Werte, plus eine {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert:

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

## Gestaltung des Auswahl-Symbols

Um das Symbol im Auswahlknopf zu gestalten – der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist – können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, damit Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudo-Klasse kombiniert – die den Auswahlknopf nur dann anspricht, wenn das Dropdown-Auswahlfeld geöffnet ist – um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an — beachten Sie, wie sich der Auswahlpfeil sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Gestaltung des Dropdown-Auswahlfelds

Das Dropdown-Auswahlfeld kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element angesprochen werden. Wie zuvor erwähnt, enthält das Auswahlfeld alles im `<select>`-Element, was nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zunächst wird der standardmäßige schwarze {{cssxref("border")}} des Auswahlfelds entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Jetzt werden die `<option>`-Elemente gestaltet. Sie sind mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gestaltet, richten alle am Anfang des Flex-Containers aus und enthalten eine `20px` {{cssxref("gap")}} zwischen jedem. Jede `<option>` wird auch mit dem gleichen {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>` versehen, um ein einheitliches Aussehen und Gefühl zu bieten:

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
> Anpassbare `<select>`-Element `<option>`s haben `display: flex` standardmäßig auf sie gesetzt, aber es ist in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als nächstes wird eine Kombination aus den {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}}-Pseudo-Klassen verwendet, um einen angemessenen {{cssxref("border-radius")}} auf den oberen und unteren `<option>`-Elementen zu setzen und den {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — außer dem letzten, damit die Rahmen nicht unordentlich und verdoppelt aussehen. Wir setzen auch den gleichen `border-radius` auf den äußeren `::picker(select)`-Container, damit wir nicht mit einem hässlichen quadratischen weißen Kasten um die Optionen enden, wenn wir entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als nächstes wird eine andere `background`-Farbe auf die ungeradzahligen `<option>`-Elemente gesetzt, wobei {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} verwendet wird, um ein Zebramuster umzusetzen, und eine andere `background`-Farbe wird auf den `<option>`-Elementen bei Fokus und Hover gesetzt, um während der Auswahl eine nützliche visuelle Hervorhebung zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Abschließend für diesen Abschnitt wird eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole gesetzt (die innerhalb von `<span>`-Elementen mit einer Klasse von `icon` enthalten sind), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der nervigen Abstände an den Block-Start- und Block-End-Kanten der Symbol-Emojis zu entfernen, um sie besser mit den Textlabels auszurichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung der Gestaltung des Inhalts der ausgewählten Option innerhalb des Auswahlknopfs

Wenn Sie eine beliebige Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken — die Haustiervögel kommen dazu, dass sich die Höhe des Auswahlknopfs erhöht, was auch die Position des Auswahl-Symbols verändert, und kein Abstand zwischen dem Optionssymbol und dem Label besteht.

Das kann behoben werden, indem das Symbol verborgen wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, was den Inhalt der ausgewählten `<option>` darstellt, wie er innerhalb des Auswahlknopfs erscheint. In unserem Beispiel wird es mithilfe von {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht die Gestaltung der `<option>`-Inhalte, wie sie im Dropdown-Auswahlfeld erscheinen.

## Gestaltung der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` zu stylen, wie sie im Dropdown-Auswahlfeld erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudo-Klasse ansprechen. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Gestaltung des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie das Auswahlfeld öffnen, um eine Auswahl zu treffen, die aktuell ausgewählte `<option>` an ihrem Inline-Start-Ende ein Häkchen hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element angesprochen werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden möchten (zum Beispiel über `display: none`).

Sie könnten auch etwas Interessanteres damit machen – früher wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Elemente am Anfang der Zeile ausgerichtet wurden. Im untenstehenden Regel wird das Häkchen vom Anfang der Zeile zum Ende bewegt, indem ein {{cssxref("order")}}-Wert darauf gesetzt wird, der größer als `0` ist, und es am Ende der Zeile mit einem `auto` {{cssxref("margin-left")}}-Wert ausgerichtet wird (siehe [Ausrichten und automatische Margen](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Abschließend wird der Wert der {{cssxref("content")}}-Eigenschaft zu einem anderen Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon` Pseudo-Elemente sind nicht im Barrierefreiheitstree enthalten, sodass automatisch generierte {{cssxref("content")}}-Inhalte darauf nicht von unterstützenden Technologien angekündigt werden. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

Schauen wir uns erneut an, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten sieht folgendermaßen aus:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Auswahlfelds mit Popover-States

Der anpassbare `<select>`-Element-Auswahl-`button` und das Dropdown-Auswahlfeld haben automatisch eine Einleitungs-/Popover-Beziehung, wie sie in [Using the Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben ist. Es gibt viele Vorteile, die dies für `<select>`-Elemente bietet; unser Beispiel nutzt die Möglichkeit, zwischen eingeladener und angezeigter Popover-Zustände mit Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudo-Klasse repräsentiert Popover im angezeigten Zustand.

Die Technik wird in diesem Abschnitt schnell behandelt — lesen Sie [Popovers animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zunächst wird das Auswahlfeld mit `::picker(select)` ausgewählt und mit einem {{cssxref("opacity")}}-Wert von `0` und einem `transition`-Wert von `all 0.4s allow-discrete` versehen. Dies verursacht, dass alle Eigenschaften, die den Wert ändern, wenn der Popover-Zustand sich von verborgen nach angezeigt ändert, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, aber es sind auch zwei diskrete Eigenschaften enthalten, deren Werte durch die standardmäßigen Browser-Styles gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn sich der Popover-Zustand von verborgen zu angezeigt ändert. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn sich der Popover-Zustand von verborgen zu angezeigt ändert, um ihn zur {{Glossary("top_layer", "Top-Schicht")}} zu befördern, und wieder zurück, wenn er verborgen wird, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Schicht bis zum Abschluss des Übergangs verzögert wird und der Übergang sichtbar wird.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete)-Wert wird benötigt, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als nächstes wird das Auswahlfeld im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und mit einem `opacity`-Wert auf `1` versehen – dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Abschließend, weil das Auswahlfeld während des Übergangs von `display: none` zu einem `display`-Wert, der es sichtbar macht, übergangsweise wird, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um das Auswahlfeld sanft ein- und ausblenden zu lassen, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Auswahlfelds über Ankerpositionierung

Ein anpassbares `<select>`-Element-Auswahlknopf und Dropdown-Auswahlfeld haben eine implizite Ankerreferenz, und das Auswahlfeld wird automatisch dem Auswahlknopf über [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zugeordnet. Dies bedeutet, dass keine explizite Zuordnung mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden muss.

Zusätzlich bieten die [standardmäßigen Browser-Styles eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie es in [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt wird.

In unserem Demo wird die Position des Auswahlfelds relativ zu seinem Anker mithilfe der {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}} und {{cssxref("left")}} Eigenschaftswerte gesetzt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die Oberkante des Auswahlfelds immer 1 Pixel vom unteren Rand des Auswahlknopfs nach unten positioniert wird und die linke Kante des Auswahlfelds immer `10%` der Breite des Auswahlknopfs von dessen linkem Rand überquert.

> [!NOTE]
> Wenn Sie die implizite Anker-Referenz entfernen möchten, um zu verhindern, dass das Auswahlfeld am `<select>`-Element verankert wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Auswahlfelds auf einen Anker-Namen setzen, der in dem aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` so gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung weiterer klassischer Auswahl-Features

Die obigen Abschnitte haben alle neuen Funktionen in Anpassbaren Auswahlen behandelt und gezeigt, wie sie mit klassischen einzeiligen Auswahlen und verwandten modernen Features wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Elemente-Features, die oben nicht erwähnt wurden; dieser Abschnitt erläutert, wie sie derzeit zusammen mit anpassbaren Auswahlen funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Derzeit gibt es keine Unterstützung für das `multiple`-Attribut bei anpassbaren `<select>`-Elementen, aber daran wird in der Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Die Standardgestaltung von `<optgroup>`-Elementen ist die gleiche wie in klassischen `<select>`-Elementen – fettgedruckt und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass die `<optgroup>`-Elemente so gestaltet sind, dass sie in das Gesamtdesign passen, und beachten, dass sie sich so verhalten, wie es von Containern im konventionellen HTML erwartet wird. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kindelement von `<optgroup>` erlaubt, um ein einfach ansprechbares und gestaltbares Label bereitzustellen. Es ersetzt jeden im `<optgroup>`-Element gesetzten Text im `label`-Attribut und hat die gleichen Semantiken.

## Nächstes Thema

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu gestalten.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
