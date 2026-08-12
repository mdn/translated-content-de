---
title: Anpassbare Select-Elemente
short-title: Anpasbare Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: c62181855c91ac0435dea5fa759a250e1dea4f8b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie vollständig anpassbare {{htmlelement("select")}}-Elemente mithilfe experimenteller Browser-Funktionen erstellen. Dies umfasst die volle Kontrolle über das Styling des Select-Buttons, des Dropdown-Auswahlmenüs, des Pfeilsymbols, des Häkchens der aktuellen Auswahl und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Funktionen haben derzeit begrenzte Browser-Unterstützung. Überprüfen Sie die Kompatibilitätstabellen in den Referenzseiten der einzelnen Funktionen für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Integrationsfehler, wenn Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da sie interne Elemente enthalten, die auf Betriebssystemebene gestylt sind und nicht mit CSS angesprochen werden können. Dazu gehören das Dropdown-Menü, das Pfeilsymbol und so weiter.

Die beste verfügbare Option neben der Verwendung einer benutzerdefinierten JavaScript-Bibliothek war bisher, den {{cssxref("appearance")}}-Wert auf `none` zu setzen, um einige der Styling-Ebenen des Betriebssystems zu entfernen und dann CSS zu verwenden, um die Elemente, die gestylt werden können, anzupassen. Diese Technik wird im [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie erlauben es Ihnen, Beispiele wie das folgende zu erstellen, die nur HTML und CSS verwenden und vollständig in [unterstützenden Browsern](#browser-kompatibilität) angepasst sind. Dies umfasst Layout, Farbschema, Symbole, Schriftart, Transitionen, Positionierung, Markierungen zur Anzeige des ausgewählten Symbols und mehr des `<select>` und des Dropdown-Auswahlmenüs.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung der bestehenden Funktionalität, die in nicht unterstützenden Browsern zu "klassischen" Selects zurückfällt.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel erstellen können.

> [!NOTE]
> Dieser Artikel behandelt den Hintergrund anpassbarer Selects und zeigt, wie "Einzelne Dropdown"-Selects erstellt werden, die diese Funktionen nutzen — d.h. Dropdown-Menüs, die jeweils eine einzelne Option anzeigen und eine einzelne Option zur Auswahl ermöglichen.
>
> Informationen zum Erstellen von "Listbox"-Selects — Menüs, die mehrere Optionen gleichzeitig anzeigen und eine einzelne Option oder mehrere Optionen zur Auswahl ermöglichen — finden Sie unter [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes).

## Aus welchen Funktionen besteht ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Herkömmliche {{htmlelement("select")}}, {{htmlelement("option")}}, und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in klassischen Selects, mit dem Unterschied, dass sie zusätzliche erlaubte Inhaltsarten haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in klassischen Selects zuvor nicht erlaubt war. Wenn dies enthalten ist, ersetzt es das standardmäßige "Button"-Rendering des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Button** bezeichnet (da es der Button ist, den Sie drücken müssen, um das Dropdown-Menü zu öffnen).
  > [!NOTE]
  > Der Select-Button ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass bei enthaltenen interaktiven Kindern (zum Beispiel Links oder Buttons) er dennoch als einzelner Button für Interaktionszwecke behandelt wird — zum Beispiel werden die Kinderelemente nicht fokussierbar oder anklickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält einen Klon des aktuell ausgewählten `<option>`-Element-Inhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das Pseudo-Element {{cssxref("::picker()", "::picker(select)")}}, das die gesamten Inhalte des Auswahlmenüs anvisiert. Dies umfasst alle Elemente im `<select>`-Element außer dem ersten Kind-`<button>`.
- Der Eigenschaftswert {{cssxref("appearance")}} `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die vom Browser definierten Standardstile und das Verhalten für anpassbare Selects einfügt.
- Die Pseudo-Klasse {{cssxref(":open")}}, die den Select-Button anspricht, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das Pseudo-Element {{cssxref("::picker-icon")}}, das das Symbol im Select-Button anspricht — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die Pseudo-Klasse {{cssxref(":checked")}}, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das Pseudo-Element {{cssxref("::checkmark")}}, das das Häkchen im aktuell ausgewählten `<option>`-Element anspricht, um eine visuelle Anzeige zu bieten, welche Option ausgewählt ist.

Darüber hinaus haben das `<select>`-Element und sein Dropdown-Auswahlmenü eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) assoziiert ist. Die Standardstile des Browsers positionieren den Picker relativ zum Button (dem Anker), und Sie können diese Position anpassen, wie im Leitfaden [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Standardstile des Browsers definieren auch einige Positionsversuche-Fallbacks, die den Picker neu positionieren, falls er Gefahr läuft, den Viewport zu überlaufen. Positionsversuche-Fallbacks werden im Leitfaden [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>`-Elemente überprüfen, indem Sie die Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} anzeigen.

Schauen wir uns alle oben genannten Funktionen in Aktion an, indem wir das am Anfang der Seite gezeigte Beispiel durchgehen.

## Anpassbares Select-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, mit dem Sie ein Haustier wählen können. Das Markup ist wie folgt:

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist auf den Symbolen enthalten, damit sie von unterstützenden Technologien verborgen werden und die Optionswerte nicht doppelt (zum Beispiel "Katze Katze") angekündigt werden.

Das Beispiel-Markup ist nahezu identisch mit einem "klassischen" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur repräsentiert den Select-{{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser das aktuell ausgewählte {{htmlelement("option")}} innerhalb des Buttons klont, welches Sie dann mit [benutzerdefiniertem Stil](#anpassen_des_stylings_des_ausgewählten_optionsinhalts_im_select-button) versehen können. Wenn diese Struktur nicht in Ihrem Markup enthalten ist, wird der Browser auf die Darstellung des Textes der ausgewählten Option im Standard-Button zurückfallen und Sie können ihn nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um alles anzuzeigen, was Sie im geschlossenen `<select>` wollen, aber seien Sie vorsichtig dabei. Das, was Sie einfügen, kann den zugänglichen Wert verändern, der unterstützenden Technologien für das `<select>`-Element bereitgestellt wird.
- Der Rest des `<select>`-Inhalts stellt das Dropdown-Menü dar, das in der Regel auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten des Menüs repräsentieren. Sie können andere Inhalte im Picker enthalten, aber es wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive Inline-Text-Elemente und mehr enthalten. Sie können sogar die Pseudo-Elemente {{cssxref("::before")}} und {{cssxref("::after")}} verwenden, um weiteren Inhalt einzufügen, obwohl Sie beachten sollten, dass diese nicht im versendbaren Wert enthalten sein würden. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Text-Label enthalten, wodurch jedes unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren soll. Die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf ausgeführt und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design erlaubt es nicht unterstützenden Browsern, zu einer klassischen `<select>`-Erfahrung zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird komplett ignoriert und die nicht-textlichen `<option>`-Inhalte werden entfernt, so dass nur die Textknoten-Inhalte übrig bleiben, aber das Ergebnis wird dennoch funktionieren.

## Optieren in das Rendering des benutzerdefinierten Selects

Um in die Funktionalität und die minimalen Basisstile des Browsers einzuoptieren (und das vom Betriebssystem bereitgestellte Styling zu entfernen), müssen sowohl Ihr `<select>`-Element als auch sein Dropdown-Menü (repräsentiert durch das `::picker(select)`-Pseudo-Element) einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können wählen, nur das `<select>`-Element in die neue Funktionalität einzuoptieren und den Picker mit dem Standard-Betriebssystem-Styling belassen, aber in den meisten Fällen möchten Sie beide einoptieren. Sie können nicht nur den Picker einoptieren, ohne auch das `<select>`-Element einzuoptieren.

Sobald das erledigt ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Jetzt können Sie dieses beliebig stylen. Zu Beginn hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (das sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}}-Werte sowie eine {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert wird:

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

## Styling des Auswahlpfeils

Um das Symbol im Select-Button zu stylen — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudo-Klasse kombiniert — die den Select-Button nur anspricht, wenn das Dropdown-Auswahlmenü geöffnet ist — um dem Symbol im geöffneten Zustand des `<select>` einen `rotate`-Wert von `180deg` zu geben.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an — beachten Sie, wie der Auswahlpfeil beim Öffnen und Schließen des `<select>` sanft um 180 Grad rotiert:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Auswahlmenüs

Das Dropdown-Auswahlmenü kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element angesprochen werden. Wie bereits erwähnt, enthält der Picker alles im `<select>`-Element, was nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Der Picker ist ein [Popover](/de/docs/Web/API/Popover_API). Daher werden, wenn der Picker geöffnet ist, seine Inhalte (enthalten im `::picker(select)`-Pseudo-Element) in die {{Glossary("top_layer", "oberste Ebene")}} befördert. Dies stellt sicher, dass der Picker über anderen Elementen angezeigt wird und sich nahtlos mit anderen Popovers auf der Seite verhält (zum Beispiel, schließt er nicht zusammenhängende Popovers, die bereits geöffnet sind).

> [!NOTE]
> Das Dropdown-Auswahlmenü des Select-Elements unterliegt auch dem [Verhalten für Grenzwerte des Matching von Vorfahren in der obersten Ebene](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#top-layer_ancestor_matching_boundary). Dies stellt sicher, dass {{cssxref(":hover")}}, {{cssxref(":active")}}, oder {{cssxref(":focus-within")}}-Stile, die auf das `<select>`-Element angewendet werden, nur die Nachkommen des Pickers während der Interaktion mit dem Picker ansprechen, nicht das `<select>` selbst.

In unserem Beispiel beginnen wir damit, den Standard-schwarzen {{cssxref("border")}} des Pickers zu entfernen:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> Das Argument, das dem `::picker()`-Pseudo-Element übergeben wird, repräsentiert den Typ des Elements, dessen Picker Sie ansprechen möchten — in diesem Fall `<select>`-Elemente. Wenn Sie den Picker eines spezifischen `<select>`-Elements anstatt aller Elemente auswählen möchten, können Sie das `::picker()`-Pseudo-Element mit einem anderen Selektor kombinieren. In unserem Beispiel hat unser `<select>` die ID `pet-select`, sodass sein Picker ausschließlich mit `#pet-select::picker(select) { ... }` angesprochen werden kann.

Nun werden die `<option>`-Elemente gestylt. Sie werden mit [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) ausgerichtet, alle am Anfang des flexiblen Containers und mit einem `20px`-{{cssxref("gap")}} zwischen jedem von ihnen. Jedes `<option>`-Element erhält auch den gleichen {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}}, und {{cssxref("transition")}} wie das `<select>`, um ein einheitliches Erscheinungsbild zu schaffen:

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
> Anpassbare `<select>`-Element-`<option>`-Elemente haben standardmäßig `display: flex` gesetzt, aber es ist trotzdem in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als nächstes wird eine Kombination der Pseudo-Klassen {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}} verwendet, um einen angemessenen {{cssxref("border-radius")}} auf den obersten und untersten `<option>`-Elementen zu setzen und {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — außer dem letzten, damit die Umrandungen nicht störend doppelt aussehen. Wir setzen auch den gleichen `border-radius` auf den äußeren `::picker(select)`-Container, damit wir nicht mit einem unschönen quadratischen weißen Kasten um die Optionen enden, wenn wir uns entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als nächstes wird eine andere Hintergrundfarbe auf die ungeradzahligen `<option>`-Elemente mit Hilfe von {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um ein gebändert erscheinendes Muster umzusetzen, und eine andere Hintergrundfarbe wird auf die `<option>`-Elemente bei Fokus und Hover gesetzt, um während der Auswahl einen nützlichen visuellen Hinweis zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Abschließend wird in diesem Abschnitt eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole (enthalten in `<span>`-Elementen mit einer Klasse von `icon`) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um etwas von dem störenden Abstand an den Blockanfangs- und Blockenden-Kanten der Emoji-Symbole zu entfernen, damit sie besser mit den Textetiketten ausgerichtet sind:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird nun so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen des Stylings des ausgewählten Optionsinhalts im Select-Button

Wenn Sie eine Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken — die Haustier-Symbole bewirken, dass der Select-Button in der Höhe zunimmt, wodurch sich auch die Position des Picker-Symbols ändert, und es gibt keinen Abstand zwischen dem Options-Symbol und dem Label.

Dies kann behoben werden, indem das Symbol verborgen wird, wenn es sich innerhalb von `<selectedcontent>` befindet, das die Inhalte der ausgewählten `<option>` so darstellt, wie sie innerhalb des Select-Buttons erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies hat keinen Einfluss auf das Styling der `<option>`-Inhalte in der Dropdown-Auswahl.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` darzustellen, wie sie innerhalb der Dropdown-Auswahl erscheint, können Sie es mit der Pseudo-Klasse {{cssxref(":checked")}} ansprechen. Dies wird verwendet, um das {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass beim Öffnen des Pickers, um eine Auswahl zu treffen, das aktuell ausgewählte `<option>` ein Häkchen am inline-start-Ende hat. Dieses Häkchen kann mit dem Pseudo-Element {{cssxref("::checkmark")}} angesprochen werden. Beispielsweise könnten Sie dieses Häkchen ausblenden (zum Beispiel über `display: none`).

Sie könnten sich auch entscheiden, etwas Interessanteres damit zu machen — früher wurden die `<option>`-Elemente horizontal mit flexbox angeordnet, wobei die Flex-Elemente am Anfang der Zeile ausgerichtet waren. In der unten stehenden Regel wird das Häkchen vom Start der Zeile ans Ende verschoben, indem ein {{cssxref("order")}}-Wert darauf gesetzt wird, der größer als `0` ist, und es mit einem `auto` {{cssxref("margin-left")}}-Wert am Ende der Zeile ausgerichtet wird (siehe [Ausrichtung und automatische Margen](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Abschließend wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes anzuzeigendes Symbol festzulegen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die Pseudo-Elemente `::checkmark` und `::picker-icon` sind nicht im Zugänglichkeitstree enthalten, sodass generierter {{cssxref("content")}}, der auf ihnen gesetzt wird, von unterstützenden Technologien nicht angekündigt wird. Sie sollten dennoch sicherstellen, dass das neue Symbol visuell sinnvoll für den beabsichtigten Zweck ist.

Schauen wir uns erneut an, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Pickers mit Popover-Zuständen

Der Select-Button und das Dropdown-Auswahlmenü des anpassbaren `<select>`-Elements erhalten automatisch eine Invoker/Popover-Beziehung, wie im Leitfaden [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente; unser Beispiel nutzt die Möglichkeit, zwischen versteckten und angezeigten Popover-Zuständen mithilfe von Transitionen zu animieren. Die Pseudo-Klasse {{cssxref(":open")}} repräsentiert Select-Elemente, die geöffnet sind.

Die Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Popover animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine ausführlichere Beschreibung.

Zunächst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies führt dazu, dass alle Eigenschaften, deren Wert sich ändert, wenn sich der Popover-Zustand von verborgen zu angezeigt ändert, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, sie umfasst jedoch auch zwei diskrete Eigenschaften, deren Werte durch die Browser-Standardstile gesetzt werden:

- {{cssxref("display")}}
  - : Der `display`-Wert ändert sich von `none` zu `block`, wenn der Popover-Zustand von verborgen zu angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Transitionen sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn sich der Popover-Zustand von verborgen zu angezeigt ändert, um ihn in die oberste Ebene zu befördern, und dann wieder zu verborgen, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Ebene aufgeschoben wird, bis die Transition abgeschlossen ist, wodurch die Transition sichtbar ist.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) ist erforderlich, um diskrete Eigenschaftsanimationen zu aktivieren.

Als nächstes wird der Picker im angezeigten Zustand mit `:open::picker(select)` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand der Transition:

```css live-sample___full-render
:open::picker(select) {
  opacity: 1;
}
```

Schließlich, da der Picker während der Bewegung von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, übergangen wird, muss der Startzustand der Transition innerhalb eines {{cssxref("@starting-style")}}-Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  :open::picker(select) {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker sanft ein- und ausblenden zu lassen, wenn das `<select>` geöffnet und geschlossen wird.

## Positionieren des Pickers mit Ankerpositionierung

Ein anpassbares `<select>`-Element's Select-Button und Dropdown-Auswahlmenü haben eine implizite Ankerreferenz, und der Picker ist automatisch mit dem Select-Button über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) assoziiert. Das bedeutet, dass eine explizite Zuordnung nicht mit den Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} gemacht werden muss.

Darüber hinaus bieten die [Standardstile des Browsers eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie im Leitfaden [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker eingestellt, indem die {{cssxref("anchor()")}}-Funktion in seinen {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerten verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unterhalb der unteren Kante des Select-Buttons positioniert ist und die linke Kante des Pickers immer `10%` der Breite des Select-Buttons von dessen linker Kante entfernt positioniert ist.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um den Picker daran zu hindern, an das `<select>`-Element verankert zu sein, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Pickers auf einen Ankernamen setzen, der nicht im aktuellen Dokument existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerassoziation](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Hauptergebnis des Beispiels

Nach den letzten beiden Abschnitten wird der finale aktualisierte Zustand unseres `<select>` so gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Styling von optgroup-Elementen

Das Standard-Styling von {{htmlelement("optgroup")}}-Elementen in anpassbaren Selects ist das gleiche wie in klassischen `<select>`-Elementen — fett und weniger eingerückt als die enthaltenen Optionen. In anpassbaren Selects verhalten sich Optionsgruppen jedoch wie andere Block-Container und können dementsprechend gestylt werden. Darüber hinaus ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Etikett bereitzustellen, das leicht ansprechbar und stilbar ist. Dies ersetzt jeden im `label`-Attribut des `<optgroup>`-Elements gesetzten Text und hat die gleiche Semantik.

Lassen Sie uns ein einfaches Beispiel betrachten. Unser HTML sieht so aus:

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

Wir beginnen unser CSS, indem wir die `<optgroup>`-Elemente selbst stylen. Dies sind größtenteils rudimentäre Stile, um die Optgroup-Elemente wie Container ihrer Nachkommene `<option>`-Elemente aussehen zu lassen. Wir haben ihnen etwas {{cssxref("margin-top")}} gegeben, um etwas Abstand zwischen jeder Optgroup und zwischen der obersten Optgroup und dem Select-Button zu schaffen.

```css hidden live-sample___optgroup-example
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}

select,
::picker(select) {
  appearance: base-select;
  width: 200px;
}

select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

::picker(select) {
  border: none;
}
```

```css live-sample___optgroup-example
optgroup {
  border: 2px solid #dddddd;
  border-radius: 8px;
  background: #eeeeee;
  padding: 10px 0 0 0;
  margin-top: 5px;
}
```

Als nächstes stylen wir die `<legend>`-Elemente, zentrieren den Text und fügen etwas Rand hinzu, um sie von den Optionen zu trennen.

```css live-sample___optgroup-example
optgroup legend {
  text-align: center;
  margin-bottom: 10px;
}
```

Schließlich stylen wir die `<option>`-Elemente, geben ihnen eine {{cssxref("background")}}-Farbe und einige {{cssxref("padding")}}, und stylen den unteren {{cssxref("border-radius")}} des letzten `<option>`-Elements in jedem Fall, damit es zu den abgerundeten Ecken des Eltern-`<optgroup>` passt. Wir implementieren auch ein gebändertes Aussehen, indem wir den ungeradzahligen `<option>`-Elementen eine andere Hintergrundfarbe geben und einen deutlich erkennbaren Option-hover- und Fokus-Zustand bereitstellen.

```css live-sample___optgroup-example
option {
  background: #eeeeee;
  padding: 10px;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Wir haben den Rest der Stile aus Gründen der Kürze ausgeblendet.

Das Beispiel wird so dargestellt:

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

## Als Nächstes

Im nächsten Artikel dieses Moduls werden wir Ihnen zeigen, wie Sie [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes) stylen können.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}
