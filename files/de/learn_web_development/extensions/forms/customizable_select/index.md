---
title: Anpassbare Auswahlelemente
short-title: Anpassbare Auswahlfelder
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie moderne HTML- und CSS-Funktionen zusammen genutzt werden, um vollständig anpassbare {{htmlelement("select")}}-Elemente zu erstellen. Dies beinhaltet die vollständige Kontrolle über das Styling des Auswahlknopfes, des Dropdown-Pickers, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen {{htmlelement("option")}}-Elements.

## Hintergrund

Traditionell war es schwierig, das Aussehen und das Verhalten von `<select>`-Elementen anzupassen, da sie interne Bestandteile enthalten, die auf Betriebssystemebene gestylt werden und die nicht mit CSS anvisiert werden können. Dazu gehören der Dropdown-Picker, das Pfeilsymbol und mehr.

Bisher war die beste verfügbare Option — abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek — die Festlegung eines {{cssxref("appearance")}}-Werts von `none` auf dem `<select>`-Element, um einige der betriebsystemeigenen Stylings zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird im [Erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende zu erstellen, nur mit HTML und CSS, das in unterstützenden Browsern vollständig angepasst ist. Dies umfasst das `<select>`- und Dropdown-Picker-Layout, das Farbschema, Symbole, Schriftarten, Übergänge, Positionierung, Markierungen zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung über bestehende Funktionalität und fallen in nicht unterstützenden Browsern auf "klassische" Auswahlfelder zurück.

Sie werden in den folgenden Abschnitten erfahren, wie Sie dieses Beispiel erstellen können.

## Welche Features umfassen ein anpassbares Auswahlfeld?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}}, und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Auswahlfeldern, außer dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, das zuvor in "klassischen" Auswahlfeldern nicht erlaubt war. Wenn dies enthalten ist, ersetzt es die Standard-"Button"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **select button** bezeichnet (da es der Button ist, den Sie drücken müssen, um den Dropdown-Picker zu öffnen).
  > [!NOTE]
  > Der Auswahlschalter ist standardmäßig [inert](/de/docs/Web/HTML/Global_attributes/inert), damit er, wenn interaktive Kinder (z. B. Links oder Buttons) enthalten sind, weiterhin wie ein einzelner Button für Interaktionszwecke behandelt wird. Zum Beispiel sind die Kindelemente nicht fokussierbar oder anklickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält ein Duplikat des Inhalts des aktuell ausgewählten `<option>`-Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Pickers anvisiert. Dies schließt alle Elemente innerhalb des `<select>`-Elements ein, außer dem ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die vom Browser definierten Standardstile und -verhalten für anpassbare Auswahlfelder einschreibt.
- Die {{cssxref(":open")}}-Pseudoklasse, die den Auswahlschalter anvisiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol im Auswahlschalter anvisiert — der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anvisiert.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen im aktuell ausgewählten `<option>`-Element anvisiert, um visuell anzuzeigen, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und sein Dropdown-Picker das folgende Verhalten automatisch zugewiesen:

- Sie haben eine Invoker/Popover-Beziehung, wie sie von der [Popover-API](/de/docs/Web/API/Popover_API) spezifiziert ist, die die Möglichkeit bietet, den Picker im geöffneten Zustand über die {{cssxref(":popover-open")}}-Pseudoklasse auszuwählen. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden ist. Die Browser-Standardstile positionieren den Picker relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Browser-Standardstile definieren auch einige Fallback-Positionen, die den Picker neu positionieren, wenn er die Gefahr läuft, den Ansichtsbereich zu überlaufen. Fallback-Positionen werden im Abschnitt [Umgang mit Überläufen: Versuch von Fallbacks und bedingtem Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Schauen wir uns alle oben genannten Features in Aktion an, indem wir das Beispiel durchgehen, das oben auf der Seite gezeigt wird.

## Anpassbare Auswahlfelder-Markup

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) wird auf den Symbolen hinzugefügt, damit sie von unterstützenden Technologien verborgen werden, um zu vermeiden, dass die Optionswerte doppelt angekündigt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast dasselbe wie das "klassische" `<select>`-Markup, mit den folgenden Unterschieden:

- Die Struktur `<button><selectedcontent></selectedcontent></button>` repräsentiert den select {{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements veranlasst den Browser, das aktuell ausgewählte {{htmlelement("option")}} in das Schaltflächen-Element zu klonen, das Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassung_des_stylings_der_ausgewählten_option_innerhalb_des_auswahlschalters). Wenn diese Struktur in Ihrem Markup nicht enthalten ist, fällt der Browser auf das Rendern des Textes der ausgewählten Option innerhalb des Standard-Schaltflächen-Elements zurück, und Sie können es nicht so leicht stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um alles anzuzeigen, was Sie innerhalb des geschlossenen `<select>` anzeigen möchten, aber seien Sie vorsichtig dabei. Was Sie einfügen, kann den zugänglichen Wert ändern, der unterstützender Technologie für das `<select>`-Element ausgesetzt wird.
- Der Rest des `<select>`-Inhalts repräsentiert den Dropdown-Picker, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker repräsentieren. Sie können anderen Inhalt im Picker einfügen, jedoch wird dies nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einer anpassbaren Auswahl können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive, semantische Textelemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente verwenden, um weiteren Inhalt einzufügen, obwohl Sie beachten sollten, dass dies nicht im übermittelbaren Wert enthalten sein wird. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textlabel enthalten, wodurch jedes unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt DOM-Subbäume enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren soll. Der `textContent`-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} darauf angewendet, und das Ergebnis wird als `<select>`-Wert festgelegt.

Dieses Design erlaubt es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzugreifen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert und die Nicht-Text-`<option>`-Inhalte werden entfernt, sodass nur die Textknoten-Inhalte verbleiben, aber das Ergebnis funktioniert trotzdem.

## Opt-in für die benutzerdefinierte Auswahldarstellung

Um sich für die benutzerdefinierte Auswahlfunktionalität und die minimalen Browser-Standardstile anzumelden (und das betriebsystemeigene Styling zu entfernen), müssen Ihr `<select>`-Element und sein Dropdown-Picker (repräsentiert durch das `::picker(select)`-Pseudo-Element) beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können sich dafür entscheiden, nur das `<select>`-Element für die neue Funktionalität anzumelden und lassen den Picker mit dem Standard-Betriebssystem-Styling, aber in den meisten Fällen werden Sie beides anmelden wollen. Sie können nicht nur den Picker anmelden, ohne auch das `<select>`-Element anzumelden.

Sobald dies getan ist, ergibt das eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Jetzt können Sie dies nach Belieben stylen. Zu Beginn hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (die sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte gesetzt, plus eine {{cssxref("transition")}}, sodass die Hintergrundänderung geschmeidig animiert wird:

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

## Das Symbol des Pickers stylen

Um das Symbol im Auswahlschalter zu stylen — den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element anvisieren. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft geschmeidig animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Danach wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert — die den Auswahlschalter nur anvisiert, wenn der Dropdown-Picker geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir doch einmal, wie die Arbeit bisher aussieht — beachten Sie, wie der Picker-Pfeil sich sanft um 180 Grad dreht, wenn sich das `<select>` öffnet und schließt:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Das Dropdown-Picker stylen

Der Dropdown-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element angesteuert werden. Wie bereits erwähnt, enthält der Picker alles, was sich im `<select>`-Element befindet und nicht der Button oder das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zunächst wird die standardmäßige schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestylt. Sie sind mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gestaltet, wobei sie alle an den Anfang des Flex-Containers ausgerichtet sind und einen `20px` {{cssxref("gap")}} zwischen jedem haben. Jede `<option>` hat außerdem dieselbe {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`-Element, um ein einheitliches Aussehen und Verhalten zu gewährleisten:

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
> Anpassbare `<select>`-Element `<option>`s haben standardmäßig `display: flex` festgelegt, aber es ist trotzdem in unserem Stylesheet enthalten, um klarzustellen, was geschieht.

Nächste wird eine Kombination aus den {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudoklassen verwendet, um in den Ecken des Pickers eine angemessene {{cssxref("border-radius")}} zu setzen und das {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, damit die Ränder nicht unordentlich und doppelt aussehen:

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

Anschließend wird eine andere `background`-Farbe auf die `<option>`-Elemente mit ungerader Nummer gesetzt, indem {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} verwendet wird, um Zebra-Streifen zu implementieren, und eine andere `background`-Farbe wird auf die `<option>`-Elemente in Fokus und Hover gesetzt, um während der Auswahl ein nützliches visuelles Highlight zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole (die sich in `<span>`-Elementen mit einer Klasse von `icon` befinden) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der lästigen Abstände an den Blockanfangs- und Blockende-Kanten der Emoji-Icons zu entfernen, sodass sie sich besser mit den Textlabels ausrichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert nun wie folgt:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung des Stylings der ausgewählten Option innerhalb des Auswahlschalters

Wenn Sie eine Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken — die Haustiersymbole verursachen, dass sich die Höhe des Auswahlschalters erhöht, was auch die Position des Pickersymbols ändert und es gibt keinen Abstand zwischen dem Optionssymbol und dem Label.

Dies kann behoben werden, indem das Symbol ausgeblendet wird, wenn es sich innerhalb von `<selectedcontent>` befindet, welches den Inhalt des ausgewählten `<option>` repräsentiert, wie er im Auswahlschalter erscheint. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der `<option>`-Inhalte, wie sie im Dropdown-Picker erscheinen.

## Das aktuell ausgewählte Optionsstyling anpassen

Um das aktuell ausgewählte `<option>` im Dropdown-Picker zu stylen, können Sie es mit der {{cssxref(":checked")}}-Pseudoklasse anvisieren. Diese wird verwendet, um das {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Das Styling des aktuellen Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, das derzeit ausgewählte `<option>`-Element am Inline-Start-Ende ein Häkchen hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element angesteuert werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden (beispielsweise mit `display: none`).

Sie könnten sich auch dafür entscheiden, etwas Interessanteres damit zu tun — weiter oben wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Items am Beginn der Zeile ausgerichtet sind. In der folgenden Regel wird das Häkchen vom Anfang der Zeile zum Ende bewegt, indem ein {{cssxref("order")}}-Wert auf ihm gesetzt wird, der größer als `0` ist, und es wird mithilfe eines `auto`-Wertes für {{cssxref("margin-left")}} am Ende der Zeile ausgerichtet (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol zur Anzeige einzustellen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudo-Elemente sind nicht im Accessibility-Tree enthalten, sodass von ihnen generierter {{cssxref("content")}} nicht von unterstützenden Technologien angekündigt wird. Sie sollten trotzdem sicherstellen, dass jedes neue Symbol, das Sie setzen, optisch Sinn für seinen beabsichtigten Zweck ergibt.

Schauen wir doch noch einmal nach, wie unser Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Den Picker mit Popover-Zuständen animieren

Das anpassbare `<select>`-Element, der Auswahlschalter und der Dropdown-Picker haben automatisch eine Invoker/Popover-Beziehung, wie im Abschnitt [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben wird. Es gibt viele Vorteile, die dies für `<select>`-Elemente bringt; unser Beispiel nutzt die Möglichkeit, zwischen verborgenen und angezeigten Popover-Zuständen durch Übergänge zu animieren. Die {{cssxref(":popover-open")}}-Pseudoklasse repräsentiert Popovers im angezeigten Zustand.

Diese Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Popovers animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine ausführlichere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und ihm ein {{cssxref("opacity")}}-Wert von `0` und ein `transition`-Wert von `all 0.4s allow-discrete` gegeben. Dies bewirkt, dass alle Eigenschaften, die sich ändern, wenn der Popover-Zustand von verborgen zu angezeigt wechselt, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der überführten Eigenschaften umfasst `opacity`, aber auch zwei diskrete Eigenschaften, deren Werte durch die Browser-Standardstile gesetzt sind:

- {{cssxref("display")}}
  - : Der `display`-Wert ändert sich von `none` zu `block`, wenn der Popover-Status von verborgen zu angezeigt wechselt. Das muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Status von verborgen zu angezeigt wechselt, um es in die {{Glossary("top_layer", "Top-Schicht")}} zu bringen, und wieder zurück, wenn er ausgeblendet wird, um es zu entfernen. Das muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Schicht bis zum Abschluss des Übergangs verschoben wird, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) Wert wird benötigt, um diskrete Eigenschaftsanimationen zu aktivieren.

Als nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und ihm ein `opacity`-Wert auf `1` gegeben — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Abschließend, da der Picker animiert wird, während er sich von `display: none` zu einem `display`-Wert bewegt, der ihn sichtbar macht, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker beim Öffnen und Schließen des `<select>` sanft ein- und auszublenden.

## Positionierung des Pickers mit Anker-Positionierung

Ein anpassbares `<select>`-Element, der Auswahlschalter und der Dropdown-Picker haben eine implizite Ankerrefenz und der Picker ist automatisch mit dem Auswahlschalter über die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden. Das bedeutet, dass keine explizite Zuordnung mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden muss.

Zusätzlich [stellen die Standardstile des Browsers eine Standardposition bereit](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt wird.

In unserer Demo wird die Position des Pickers relativ zu seinem Anker gesetzt, indem die {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unterhalb der unteren Kante des Auswahlschalters positioniert wird, und die linke Kante des Pickers immer `10%` der Breite des Auswahlschalters von seiner linken Kante entfernt positioniert wird.

## Endergebnis

Nach den letzten beiden Abschnitten rendert unser `<select>` im finalen Zustand wie folgt:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Auswahlelement-Funktionen

Die oben genannten Abschnitte haben die gesamte neue Funktionalität behandelt, die in anpassbaren Auswahlfeldern verfügbar ist, und gezeigt, wie diese mit klassischen einzeiligen Auswahlfeldern und verwandten modernen Funktionen wie Popovers und Anker-Positionierung interagieren. Es gibt einige andere `<select>`-Elementfunktionen, die oben nicht erwähnt wurden; dieser Abschnitt erörtert, wie sie derzeit mit anpassbaren Auswahlfeldern zusammenarbeiten:

- [`<select multiple>`](/de/docs/Web/HTML/Attributes/multiple)
  - : Derzeit ist keine Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen vorgesehen, aber daran wird in Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standardstyling von `<optgroup>`-Elementen ist dasselbe wie in klassischen `<select>`-Elementen — fettgedruckt und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass die `<optgroup>`-Elemente so gestylt sind, dass sie zum Gesamtdesign passen, und bedenken, dass sie sich genauso verhalten, wie es für Container in konventionellem HTML erwartet wird. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Label bereitzustellen, das leicht zu zielen und zu stylen ist. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist, und hat dieselben Semantiken.

## Nächstes Thema

Im nächsten Artikel dieses Moduls werden wir uns mit den verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) befassen, die in modernen Browsern zum Stilisieren von Formularen in verschiedenen Zuständen verfügbar sind.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
