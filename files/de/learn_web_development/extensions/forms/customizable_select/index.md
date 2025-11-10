---
title: Anpassen von Auswahl-Elementen
short-title: Anpassbare Auswahlmöglichkeiten
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie man vollständig angepasste {{htmlelement("select")}}-Elemente unter Verwendung experimenteller Browser-Features erstellt. Dies umfasst die vollständige Kontrolle über das Styling des Auswahl-Buttons, des Drop-down-Auswahlfelds, des Pfeilsymbols, des aktuellen Auswahl-Hakens und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel demonstrierten CSS- und HTML-Features haben derzeit begrenzte Unterstützung in Browsern; für weitere Details überprüfen Sie die Browser-Kompatibilitätstabellen auf den einzelnen Feature-Referenzseiten. Einige JavaScript-Frameworks blockieren diese Features; in anderen verursachen sie Hydrationsfehler, wenn serverseitiges Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen anzupassen, da sie interne Elemente enthalten, die auf Betriebssystemebene gestylt sind und die nicht mit CSS angesprochen werden können. Dazu gehören das Drop-down-Auswahlfeld, das Pfeilsymbol usw.

Zuvor war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – den {{cssxref("appearance")}}-Wert des `<select>`-Elements auf `none` zu setzen, um einen Teil des OS-Level-Stylings zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird im [Erweitertes Form-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende nur mit HTML und CSS zu erstellen, die in unterstützenden Browsern vollständig angepasst sind. Dies umfasst `<select>`- und Drop-down-Auswahl-Layouts, Farbschemata, Symbole, Schriftarten, Übergänge, Positionierungen, Markierungen zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung der bestehenden Funktionalität, indem sie in nicht unterstützenden Browsern auf "klassische" Auswahlmöglichkeiten zurückgreifen.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel erstellen können.

## Welche Features umfassen eine anpassbare Auswahl?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Features erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genau so wie in "klassischen" Auswahlmöglichkeiten, außer dass sie zusätzliche erlaubte Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in "klassischen" Auswahlmöglichkeiten bisher nicht erlaubt war. Wenn es enthalten ist, ersetzt es die Standard-Button-Darstellung des geschlossenen `<select>`-Elements. Dies ist allgemein als der **Auswahl-Button** bekannt (da es der Button ist, den Sie drücken müssen, um das Drop-down-Auswahlfeld zu öffnen).
  > [!NOTE]
  > Der Auswahl-Button ist [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) standardmäßig, sodass interaktive Kinder (zum Beispiel Links oder Buttons) darin enthalten sein können, es wird jedoch trotzdem als eine einzelne Schaltfläche für Interaktionszwecke behandelt – zum Beispiel sind die Kind-Elemente nicht fokussierbar oder anklickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des `<select>`-Elements als erstes Kind-`<button>`-Element enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält einen Klon des aktuell ausgewählten `<option>`-Elements Inhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) unter der Haube).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Auswahlfeldes anspricht. Dies umfasst alle Elemente innerhalb des `<select>`-Elements, außer dem ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement in die vom Browser definierten Standardstile und das Verhalten für anpassbare Auswahlmöglichkeiten aufnimmt.
- Die {{cssxref(":open")}}-Pseudoklasse, die den Auswahl-Button anspricht, wenn das Auswahlfeld (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudoelement, das das Symbol innerhalb des Auswahl-Buttons anspricht – den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen anspricht, das im aktuell ausgewählten `<option>`-Element platziert ist, um eine visuelle Anzeige dessen zu bieten, welches ausgewählt ist.

Darüber hinaus haben das `<select>`-Element und sein Drop-down-Auswahlfeld automatisch das folgende Verhalten zugewiesen:

- Sie haben eine Invoker/Popover-Beziehung, wie durch die [Popover API](/de/docs/Web/API/Popover_API) spezifiziert, die die Möglichkeit bietet, das Auswahlfeld zu wählen, wenn es geöffnet ist, über die {{cssxref(":popover-open")}}-Pseudoklasse. Lesen Sie [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für mehr Details zum Popover-Verhalten.
- Sie haben einen impliziten Ankerbezug, das bedeutet, dass das Auswahlfeld automatisch mit dem `<select>`-Element über [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) assoziiert wird. Die Standardstile des Browsers positionieren das Auswahlfeld relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie in [Positionierungselemente relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Standardstile des Browsers definieren auch einige Position-Try-Fallbacks, die das Auswahlfeld repositionieren, wenn es droht, aus dem Viewport zu überlaufen. Position-Try-Fallbacks werden in [Umgang mit Überlauf: Try-Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Unterstützung des Browsers für anpassbare `<select>`-Elemente überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Features wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} ansehen.

Sehen wir uns alle oben genannten Features in Aktion an, indem wir das am Anfang der Seite gezeigte Beispiel durchgehen.

## Anpassbares Auswahl-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, das Ihnen erlaubt, ein Haustier auszuwählen. Das Markup sieht folgendermaßen aus:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut ist bei den Symbolen enthalten, damit sie vor unterstützenden Technologien verborgen werden, um zu vermeiden, dass die Optionswerte doppelt angesagt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast dasselbe wie das "klassische" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur repräsentiert die Auswahl {{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser das aktuell ausgewählte {{htmlelement("option")}} in den Button klont, das Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassen_des_stylings_der_ausgewählten_optionsinhalte_innerhalb_der_auswahltaste). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, wird der Browser standardmäßig den Text der ausgewählten Option innerhalb des Standard-Buttons rendern, und Sie können ihn nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>`-Elements hinzufügen, um darzustellen, was Sie in dem geschlossenen `<select>` anzeigen möchten, aber seien Sie vorsichtig dabei. Was Sie hinzufügen, kann den zugänglichen Wert, der für unterstützende Technologien für das `<select>`-Element ausgesetzt wird, verändern.
- Der Rest des `<select>`-Inhalts repräsentiert das Drop-down-Auswahlfeld, das normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Auswahlfeld darstellen. Sie können andere Inhalte im Auswahlfeld hinzufügen, aber es wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Auswahlfeld können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textuelle semantische Elemente und mehr hinzufügen. Sie können sogar die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelemente verwenden, um andere Inhalte hinzuzufügen, obwohl Sie bedenken sollten, dass dies nicht im übertragbaren Wert enthalten wäre. In unserem Beispiel enthält jedes `<option>` zwei {{htmlelement("span")}}-Elemente, die ein Symbol und eine Textbezeichnung enthalten, sodass jedes separat gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln darüber, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf angewendet, und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurück zu fallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert, und die nicht-Text-`<option>`-Inhalte werden entfernt, sodass nur die Textknoteninhalte bleiben, aber das Resultat wird trotzdem funktionieren.

## Opt-in für die benutzerdefinierte Auswahlwiedergabe

Um sich für die benutzerdefinierte Auswahlfunktionalität und die minimalen Standardstile des Browsers anzumelden (und das OS-providierte Styling zu entfernen), müssen das `<select>`-Element und sein Drop-down-Auswahlfeld (vertreten durch das `::picker(select)`-Pseudoelement) beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

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

Sie können wählen, ob Sie nur das `<select>`-Element für die neue Funktionalität anmelden und das Auswahlfeld mit dem Standardbetriebssystem-Styling belassen möchten, aber in den meisten Fällen möchten Sie beides anmelden. Sie können das Auswahlfeld nicht anmelden, ohne das `<select>`-Element anzumelden.

Sobald dies getan ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind jetzt frei, dies nach Belieben zu stylen. Zunächst hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (das sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} Werte gesetzt, sowie ein {{cssxref("transition")}}, sodass die Hintergrundänderung sanft animiert:

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

## Styling des Auswahl-Symbols

Um das Symbol innerhalb der Auswahltaste — den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist — zu stylen, können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudoelement ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und ein `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als Nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert — die die Auswahltaste nur anspricht, wenn das Drop-down-Auswahlfeld geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns das bisherige Werk an — beachten Sie, wie der Auswahlpfeil sanft um 180 Grad rotiert, wenn sich das `<select>` öffnet und schließt:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Drop-down-Auswahlfelds

Das Drop-down-Auswahlfeld kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement angesprochen werden. Wie bereits erwähnt, enthält das Auswahlfeld alles innerhalb des `<select>`-Elements, was nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zuerst wird der standardmäßig schwarze {{cssxref("border")}} des Auswahlfelds entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Jetzt werden die `<option>`-Elemente gestylt. Sie werden mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) ausgelegt, indem sie alle an den Anfang des Flex-Containers ausgerichtet und ein `20px` {{cssxref("gap")}} zwischen jedem gesetzt wird. Jedes `<option>` erhält außerdem dieselben {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein einheitliches Aussehen und Verhalten zu gewährleisten:

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
> Anpassbare `<select>`-Element-`<option>`s haben standardmäßig `display: flex` gesetzt, aber es ist dennoch in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als Nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudoklassen verwendet, um einen passenden {{cssxref("border-radius")}} auf den oberen und unteren `<option>`-Elementen zu setzen, und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — mit Ausnahme des letzten, damit die Ränder nicht unordentlich und verdoppelt aussehen. Wir setzen auch denselben `border-radius` auf den äußeren `::picker(select)`-Container, damit wir nicht mit einem hässlichen quadratischen weißen Kasten um die Optionen enden, wenn wir entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als Nächstes wird eine andere `background`-Farbe auf den ungeraden `<option>`-Elementen mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um Zebra-Streifen zu implementieren, und eine andere `background`-Farbe auf den `<option>`-Elementen bei Fokus und Hover gesetzt, um einen nützlichen visuellen Hinweis während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird in diesem Abschnitt eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole gesetzt (enthalten in `<span>`-Elementen mit der Klasse `icon`), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft verwendet, um etwas von dem lästigen Abstand an den Blockanfangs- und Blockendkanten der Symbol-Emojis zu entfernen und sie besser mit den Textbeschriftungen auszurichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt wie folgt gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen des Stylings der ausgewählten Optionsinhalte innerhalb der Auswahltaste

Wenn Sie irgendeine Haustieroption aus den letzten Live-Beispielen auswählen, werden Ihnen ein Problem auffallen — die Haustiersymbole verursachen, dass die Auswahltaste in der Höhe zunimmt, was auch die Position des Auswahlfeldsymbols verändert, und es gibt keinen Abstand zwischen Symbol und Bezeichnung der Option.

Dies kann behoben werden, indem das Symbol verborgen wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, was den Inhalt der ausgewählten `<option>` darstellt, wie sie innerhalb der Auswahltaste erscheinen. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinträchtigt nicht das Styling der `<option>`-Inhalte, wie sie innerhalb des Drop-down-Auswahlfelds erscheinen.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` zu stylen, wie sie innerhalb des Drop-down-Auswahlfelds erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse ansprechen. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Hakens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie das Auswahlfeld öffnen, um eine Auswahl zu treffen, die aktuell ausgewählte `<option>` an ihrem Inline-Anfang ein Häkchen hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement angesprochen werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden (zum Beispiel über `display: none`).

Sie könnten auch entscheiden, etwas interessanteres damit zu machen — zuvor wurden die `<option>`-Elemente horizontal mit Flexbox angeordnet, wobei die Flex-Elemente an den Anfang der Zeile ausgerichtet wurden. In der unten stehenden Regel wird das Häkchen vom Anfang der Zeile an das Ende verschoben, indem ihm ein {{cssxref("order")}}-Wert von mehr als `0` zugewiesen wird, und es an das Ende der Zeile ausgerichtet wird, indem ein `auto` {{cssxref("margin-left")}}-Wert verwendet wird (siehe [Ausrichtung und automatische Margen](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudoelemente sind nicht im Barrierefreiheitsbaum enthalten, daher wird jeglicher generierter {{cssxref("content")}}, der darauf gesetzt wird, nicht von unterstützenden Technologien angesagt. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

Schauen wir noch einmal, wie das Beispiel rendert. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Auswahlfelds unter Verwendung von Popover-Status

Der auswählbare Button und das Drop-down-Auswahlfeld des anpassbaren `<select>`-Elements haben automatisch eine Invoker/Popover-Beziehung, wie in [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die dies den `<select>`-Elementen bringt; unser Beispiel nutzt die Möglichkeit, zwischen versteckten und angezeigten Popover-Zuständen mit Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudoklasse repräsentiert Popover im angezeigten Zustand.

Die Technik wird in diesem Abschnitt schnell behandelt — lesen Sie [Popovers animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuerst wird das Auswahlfeld mit `::picker(select)` ausgewählt und erhält einen {{cssxref("opacity")}}-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die ihren Wert ändern, wenn der Popover-Zustand von versteckt zu angezeigt wechselt, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der Übergangseigenschaften umfasst `opacity`, es enthält jedoch auch zwei diskrete Eigenschaften, deren Werte durch die Standardstile des Browsers gesetzt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn der Popover-Zustand von versteckt zu angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert ändert sich von `none` zu `auto`, um ihn zum {{Glossary("top_layer", "obersten Layer")}} zu befördern, und dann zurück zu `none`, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers aus dem obersten Layer aufgeschoben wird, bis der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) ist erforderlich, um diskrete Eigenschaftsanimationen zu aktivieren.

Als nächstes wird das Auswahlfeld im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` – dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Da das Auswahlfeld während es von `display: none` zu einem `display`-Wert, der es sichtbar macht, animiert wird, muss der Startzustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um das Auswahlfeld sanft ein- und auszublenden, wenn sich das `<select>` öffnet und schließt.

## Positionierung des Auswahlfelds mit Ankerpositionierung

Eine anpassbare `<select>`-Element-Auswahltaste und Drop-down-Auswahlfeld haben einen impliziten Ankerbezug, und das Auswahlfeld wird automatisch über [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) mit der Auswahltaste assoziiert. Dies bedeutet, dass keine explizite Zuordnung über die {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften erfolgen muss.

Darüber hinaus können Sie die [Browser-Standardstile als Ausgangsposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning) verwenden, die Sie wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erläutert anpassen können.

In unserem Demo wird die Position des Auswahlfelds relativ zu seinem Anker gesetzt, indem die {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}} und {{cssxref("left")}} Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies resultiert darin, dass die obere Kante des Auswahlfelds immer 1 Pixel von der unteren Kante der Auswahltaste nach unten und die linke Kante des Auswahlfelds immer `10%` der Breite der Auswahltaste entfernt von der linken Kante positioniert wird.

> [!NOTE]
> Wenn Sie den impliziten Ankerbezug entfernen möchten, um zu verhindern, dass das Auswahlfeld an das `<select>`-Element angeheftet wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Auswahlfelds auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand des `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassen anderer klassischer Auswahl-Features

Die obigen Abschnitte haben alle neuen Funktionen gezeigt, die in anpassbaren Auswahlmöglichkeiten verfügbar sind, und wie sie mit klassischen einzeiligen Auswahlen und verwandten modernen Features wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Element-Features, die oben nicht erwähnt wurden; dieser Abschnitt spricht darüber, wie sie derzeit zusammen mit anpassbaren Auswahlmöglichkeiten funktionieren:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Derzeit ist keine Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen spezifiziert, aber daran wird in der Zukunft gearbeitet.
- {{htmlelement("optgroup")}}
  - : Die Standarddarstellung von `<optgroup>`-Elementen ist dieselbe wie in klassischen `<select>`-Elementen — fett und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente stylen, damit sie in das Gesamtdesign passen, und bedenken, dass sie sich wie Container verhalten, wie man es von konventionellem HTML erwartet. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein leicht ansprechbares und stilisierbares Label bereitzustellen. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist, und hat die gleiche Semantik.

## Als Nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die in modernen Browsern für das Styling von Formularen in verschiedenen Zuständen verfügbar sind.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
