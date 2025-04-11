---
title: Anpassen von Select-Elementen
short-title: Anpassen von Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie spezielle, moderne HTML- und CSS-Funktionen zusammen verwenden können, um vollständig angepasste {{htmlelement("select")}}-Elemente zu erstellen. Dazu gehört die vollständige Kontrolle über die Gestaltung der Schaltfläche "Auswählen", den Drop-Down-Picker, das Pfeilsymbol, das aktuelle Auswahlhäkchen und jedes einzelne {{htmlelement("option")}}-Element.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da deren interne Darstellungen auf Betriebssystemebene gestaltet werden und nicht mit CSS angesprochen werden können. Dazu gehören der Drop-Down-Picker, das Pfeilsymbol und so weiter.

Früher war die beste verfügbare Option — abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek — das Setzen eines {{cssxref("appearance")}}-Werts von `none` auf das `<select>`-Element, um einen Teil der Betriebssystem-spezifischen Gestaltung zu entfernen, und anschließend CSS zu verwenden, um die Teile anzupassen, die gestaltet werden können. Diese Technik wird im [Erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, nur mit HTML und CSS vollständig angepasste Beispiele zu erstellen, die in unterstützenden Browsern funktionieren. Dazu gehören Layout und Farbgestaltung von `<select>` und Drop-Down-Picker, Symbole, Schriftart, Übergänge, Positionierung, Marker zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zudem bieten sie eine progressive Verbesserung auf der bestehenden Funktionalität, sodass in nicht unterstützenden Browsern auf "klassische" Selects zurückgegriffen wird.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel aufbauen können.

## Welche Funktionen umfasst ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Selects, außer dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in "klassischen" Selects zuvor nicht erlaubt war. Wenn dies enthalten ist, ersetzt es das standardmäßige "Button"-Rendering des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Schaltfläche** bezeichnet (da es die Schaltfläche ist, die Sie drücken müssen, um den Drop-Down-Picker zu öffnen).
  > [!NOTE]
  > Die Select-Schaltfläche ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), damit, wenn interaktive Kinder (z. B. Links oder Schaltflächen) darin enthalten sind, sie weiterhin wie eine einzelne Schaltfläche für Interaktionen behandelt wird — zum Beispiel werden die Kindelemente nicht fokusierbar oder anklickbar sein.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des `<button>`-Elements des ersten Kindes des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert im _geschlossenen_ `<select>`-Element anzuzeigen.
  Es enthält eine Kopie des Inhalts des derzeit ausgewählten `<option>`-Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Pickers anvisiert. Dies schließt alle Elemente innerhalb des `<select>`-Elements aus, außer dem ersten Kind `<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die von den Browsern definierten Standardstile und -verhalten für anpassbare Selects einbindet.
- Die {{cssxref(":open")}}-Pseudo-Klasse, die die Select-Schaltfläche anvisiert, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol in der Select-Schaltfläche anvisiert — den nach unten zeigenden Pfeil, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudo-Klasse, die das derzeit ausgewählte `<option>`-Element anvisiert.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen im derzeit ausgewählten `<option>`-Element anvisiert, um visuell zu kennzeichnen, welches ausgewählt ist.

Darüber hinaus haben das `<select>`-Element und sein Drop-Down-Picker folgendes Verhalten, das ihnen automatisch zugewiesen ist:

- Sie haben eine Invoker/Popover-Beziehung, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert wird, die die Möglichkeit bietet, den Picker beim Öffnen über die {{cssxref(":popover-open")}}-Pseudo-Klasse auszuwählen. Siehe [Die Popover API verwenden](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden wird. Die von den Browsern voreingestellten Stile positionieren den Picker relativ zur Schaltfläche (dem Anker), und Sie können diese Position anpassen, wie unter [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die voreingestellten Browser-Stile definieren auch einige Fallback-Positionen, die den Picker neu positionieren, wenn die Gefahr besteht, dass er über den Viewport hinausgeht. Fallback-Positionen werden unter [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Betrachten wir alle oben genannten Funktionen in Aktion, indem wir das Beispiel durchgehen, das oben auf der Seite angezeigt wird.

## Anpassbare Select-Markup

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) wird auf den Symbolen hinzugefügt, damit sie vor assistiven Technologien verborgen werden und die Optionswerte nicht doppelt angekündigt werden (z.B.: "Katze Katze").

Das Beispiel-Markup ist fast das gleiche wie beim "klassischen" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur repräsentiert die {{htmlelement("button")}} der Select-Schaltfläche.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser den derzeit ausgewählten {{htmlelement("option")}} innerhalb der Schaltfläche klont, was Sie dann [mit benutzerdefinierten Stilen gestalten können](#anpassung_der_gestaltung_der_inhalte_der_ausgewählten_option_innerhalb_der_select-schaltfläche). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, wird der Browser auf die Darstellung des Textes der ausgewählten Option in der Standardschaltfläche zurückgreifen, was es schwieriger macht, sie zu gestalten.
  > [!NOTE]
  > Sie _können_ beliebigen Inhalt innerhalb der `<button>` einfügen, um alles in das geschlossene `<select>` zu rendern, was Sie wollen, aber seien Sie vorsichtig dabei. Was Sie einschließen, kann den zugänglichen Wert beeinflussen, der für die `<select>`-Element an assistive Technologie weitergegeben wird.
- Der Rest des `<select>`-Inhalts repräsentiert den Drop-Down-Picker, der normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können anderen Inhalt im Picker enthalten, es wird jedoch nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive Text-Ebenen semantische Elemente und mehr einschließen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}}-Pseudo-Elemente verwenden, um weiteren Inhalt einzufügen, obwohl bedenken Sie, dass diese nicht im übermittelbaren Wert enthalten würden. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textlabel enthalten und die unabhängig gestaltet und positioniert werden können.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln darüber, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der `textContent`-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} darauf ausgeführt und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzugreifen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert und der nicht-Text `<option>`-Inhalt wird entfernt, sodass nur der Textknoteninhalt übrig bleibt, aber das Ergebnis wird immer noch funktionieren.

## Aktivieren des benutzerdefinierten Select-Renderings

Um die Funktionalität und die minimalen Basisstile des Browsers für benutzerdefinierte Selects zu aktivieren (und die vom Betriebssystem bereitgestellten Stile zu entfernen), müssen sowohl Ihr `<select>`-Element als auch sein Drop-Down-Picker (repräsentiert durch das `::picker(select)`-Pseudo-Element) einen {{cssxref("appearance")}}-Wert von `base-select` aufweisen:

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

Sie können wählen, nur das `<select>`-Element für die neue Funktionalität zu aktivieren und den Picker mit den Standardbetriebssystemstilen zu belassen, aber in den meisten Fällen werden Sie wahrscheinlich beide aktivieren wollen. Sie können den Picker nicht ohne das `<select>`-Element aktivieren.

Sobald dies geschehen ist, ergibt dies eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind nun frei, dies auf jede Art und Weise zu gestalten, die Sie wünschen. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (das sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}}-Werte, plus eine {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert wird:

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

Um das Symbol in der Select-Schaltfläche zu gestalten — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element anvisieren. Der folgende Code verleiht dem Symbol ein benutzerdefiniertes {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Anschließend wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudo-Klasse kombiniert — die die Select-Schaltfläche nur anvisiert, wenn der Drop-Down-Picker geöffnet ist —, um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet wird.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an — beachten Sie, wie sich der Pfeil des Pickers sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Gestaltung des Drop-Down-Pickers

Der Drop-Down-Picker kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element angesprochen werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, das nicht die Schaltfläche und das `<selectedcontent>` ist. In unserem Beispiel bedeutet das alle `<option>`-Elemente und deren Inhalte.

Zunächst wird die standardmäßige schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Jetzt werden die `<option>`-Elemente gestaltet. Sie werden mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ausgelegt, wobei sie alle am Start des Flexcontainers ausgerichtet und ein `20px` {{cssxref("gap")}} zwischen jedem einfügt wird. Jedes `<option>` erhält außerdem dieselbe {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Aussehen und Gefühl zu gewährleisten:

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
> Anpassbare `<select>`-Element-`<option>`s haben standardmäßig `display: flex` gesetzt, aber es wird trotzdem in unser Stylesheet aufgenommen, um zu verdeutlichen, was passiert.

Als nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}}-Pseudo-Klassen verwendet, um eine passende {{cssxref("border-radius")}} an den oberen und unteren Ecken des Pickers zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen außer dem letzten zu entfernen, sodass die Ränder nicht unordentlich und verdoppelt aussehen:

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

Als nächstes wird eine andere `background`-Farbe auf die ungeradzahligen `<option>`-Elemente unter Verwendung von {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um Zebrastreifen-Effekt zu implementieren, und eine andere `background`-Farbe auf die `<option>`-Elemente im Fokus und Hover, um eine nützliche visuelle Hervorhebung während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

Zu guter Letzt wird eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole gesetzt (enthalten in `<span>`-Elementen mit einer Klasse von `icon`), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um die störende Abstände an den Block-Start- und Block-Endkanten der Symbol-Emojis zu entfernen, sodass sie besser mit den Textlabels ausgerichtet werden:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt wie folgt gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung der Gestaltung der Inhalte der ausgewählten Option innerhalb der Select-Schaltfläche

Wenn Sie in den letzten Live-Beispielen eine Haustieroption auswählen, werden Sie ein Problem bemerken — die Tier-Symbole veranlassen die Select-Schaltfläche, ihre Höhe zu erhöhen, wodurch auch die Position des Picker-Symbols verändert wird, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Label.

Dies kann behoben werden, indem das Symbol versteckt wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, das die Inhalte der ausgewählten `<option>` repräsentiert, wie sie innerhalb der Select-Schaltfläche erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht die Gestaltung der `<option>`-Inhalte, wie sie innerhalb des Drop-Down-Pickers erscheinen.

## Gestaltung der aktuell ausgewählten Option

Um die derzeit ausgewählte `<option>` zu gestalten, wie sie innerhalb des Drop-Down-Pickers erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudo-Klasse anvisieren. Diese wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Gestaltung des aktuellen Auswahlhäkchens

Sie haben wahrscheinlich bemerkt, dass wenn Sie den Picker öffnen, um eine Auswahl zu treffen, die derzeit ausgewählte `<option>` an ihrem Inline-Start-Ende ein Häkchen hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element angesprochen werden. Beispielsweise möchten Sie dieses Häkchen ausblenden (z.B. über `display: none`).

Sie könnten sich auch entscheiden, etwas interessanteres damit zu tun — weiter oben wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Elemente am Anfang der Zeile ausgerichtet wurden. In der nachfolgenden Regel wird das Häkchen durch Setzen eines {{cssxref("order")}}-Werts größer als `0` vom Anfang der Zeile an das Ende verschoben und mit einem `auto` {{cssxref("margin-left")}}-Wert an das Ende der Zeile ausgerichtet (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Zu guter Letzt wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark` und `::picker-icon`-Pseudo-Elemente sind nicht im Accessibility-Tree enthalten, sodass jeder generierte {{cssxref("content")}}-Wert, der auf ihnen gesetzt wird, nicht von assistiven Technologien angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell sinnvoll für seinen vorgesehenen Zweck ist.

Lassen Sie uns noch einmal überprüfen, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Pickers mit Popover-Zuständen

Die anpassbare `<select>`-Element-Auswahl `button` und der Drop-Down-Picker haben automatisch eine Invoker/Popover-Beziehung, wie in [Using the Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente mit sich; unser Beispiel nutzt die Möglichkeit, zwischen Popover-Aus-, -Einblende-Zuständen mit Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudo-Klasse repräsentiert Popovers im Einblenden-Zustand.

Die Technik wird kurz in diesem Abschnitt behandelt — lesen Sie [Popovers animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zunächst wird der Picker mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die sich ändern, wenn der Popover-Zustand von Ausblenden zu Einblenden wechselt, animieren.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der animierten Eigenschaften umfasst `opacity`, enthält jedoch auch zwei diskrete Eigenschaften, deren Werte durch die standardmäßigen Browser-Stile gesetzt sind:

- {{cssxref("display")}}
  - : Die `display`-Werte wechseln von `none` zu `block`, wenn der Popover-Status von ausgeblendet zu eingeblendet wird. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, wenn der Popover-Zustand von ausgeblendet zu angezeigt wechselt, um ihn in die {{Glossary("top_layer", "Top-Schicht")}} zu verschieben, dann wieder zurück, wenn er ausgeblendet wird, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um den Übergang sichtbar zu machen.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) wird benötigt, um diskrete Eigenschaftsanimationen zu aktivieren.

Als nächstes wird der Picker im Einblenden-Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich, da der Picker während des Übergangs von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, animiert wird, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln wirken zusammen, um den Picker sanft ein- und auszublenden, wenn das `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers mit Anker-Positionierung

Ein anpassbares `<select>`-Element-Schaltflächen- und Drop-Down-Picker haben eine implizite Anker-Referenz, und der Picker wird automatisch mit der Schaltfläche des Selects über die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verbunden. Dies bedeutet, dass eine explizite Verbindung nicht mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden muss.

Darüber hinaus bieten die [voreingestellten Browser-Stile eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie unter [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker durch die Verwendung der {{cssxref("anchor()")}}-Funktion in seinen {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaftswerten festgelegt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unter der unteren Kante der Select-Schaltfläche positioniert ist, und die linke Kante des Pickers immer `10%` der Breite der Select-Schaltfläche von ihrer linken Kante entfernt ist.

## Endergebnis

Nach den letzten beiden Abschnitten wird der finale aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassen anderer klassischer Select-Funktionen

Die obigen Abschnitte haben die gesamte neue Funktionalität behandelt, die für anpassbare Selects verfügbar ist, und gezeigt, wie sie sowohl mit klassischen Einzelzeilen-Selects als auch mit verwandten modernen Funktionen wie Popovers und Anker-Positionierung interagiert. Es gibt einige andere `<select>`-Element-Funktionen, die oben nicht erwähnt wurden; in diesem Abschnitt geht es darum, wie sie derzeit zusammen mit anpassbaren Selects funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Es gibt derzeit keine Unterstützung für das `multiple`-Attribut bei anpassbaren `<select>`-Elementen, aber dies wird in Zukunft bearbeitet.
- {{htmlelement("optgroup")}}
  - : Das Standardstyling von `<optgroup>`-Elementen ist das gleiche wie bei klassischen `<select>`-Elementen — fett gedruckt und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente gestalten, sodass sie in das Gesamtdesign passen, und bedenken Sie, dass sie sich so verhalten werden, wie Container konventionell in HTML erwartet werden. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Label bereitzustellen, das leicht anvisiert und gestaltet werden kann. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist, und hat dieselbe Semantik.

## Nächstes Thema

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) untersuchen, die uns in modernen Browsern zum Styling von Formularen in verschiedenen Zuständen zur Verfügung stehen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
