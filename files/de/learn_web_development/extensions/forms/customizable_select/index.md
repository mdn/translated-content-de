---
title: Anpassbare Auswahlelemente
short-title: Anpassbare Auswahlfelder
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 9b29c967bcaa7c35e0954fd366a9b2670af864b2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie vollständig anpassbare {{htmlelement("select")}}-Elemente mithilfe experimenteller Browser-Funktionen erstellt werden können. Das umfasst die vollständige Kontrolle über die Stilgestaltung der Auswahl-Schaltfläche, des Drop-down-Auswahlfensters, des Pfeilsymbols, des aktuellen Auswahlsymbols und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Funktionen haben derzeit eine eingeschränkte Browserunterstützung; überprüfen Sie die Browser-Kompatibilitätstabellen auf den einzelnen Funktionsreferenzseiten für mehr Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Hydrierungsfehler, wenn serverseitiges Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen von `<select>`-Elementen anzupassen, da sie interne Bestandteile enthalten, die auf Betriebssystemebene gestaltet sind und mit CSS nicht gezielt angesprochen werden können. Dazu zählen das Drop-down-Auswahlfenster, das Pfeilsymbol usw.

Früher war die beste verfügbare Option – abgesehen von der Verwendung einer speziellen JavaScript-Bibliothek – den Wert des {{cssxref("appearance")}}-Eigenschaft auf `none` zu setzen, um einen Teil der Betriebssystem-Stilgestaltung zu entfernen und dann CSS zu verwenden, um die Teile zu anzupassen, die gestaltet werden können. Diese Technik wird im [Erweiterten Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende nur mit HTML und CSS in unterstützen Browsern zu erstellen, die vollständig angepasst sind. Dazu gehören Layout des `<select>`- und Drop-down-Auswahlfensters, Farbschema, Symbole, Schriftarten, Übergänge, Positionierung, Marker zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung der bestehenden Funktionalität, indem sie in nicht unterstützenden Browsern auf "klassische" Auswahl zurückgreifen.

Im Folgenden erklären wir, wie Sie dieses Beispiel erstellen können.

## Welche Funktionen umfasst ein anpassbares Auswahlfeld?

Sie können anpassbare `<select>`-Elemente mithilfe der folgenden HTML- und CSS-Funktionen erstellen:

- Herkömmliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genau wie bei "klassischen" Auswahlfeldern, mit der Ausnahme, dass sie zusätzliche erlaubte Inhaltsarten haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elementes enthalten ist, was zuvor in "klassischen" Auswahlfeldern nicht erlaubt war. Wenn es enthalten ist, ersetzt es die Standard-"Schaltflächen"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **Auswahl-Schaltfläche** bezeichnet (da es die Schaltfläche ist, die Sie drücken müssen, um den Drop-down-Auswahlfenster zu öffnen).
  > [!NOTE]
  > Die Auswahl-Schaltfläche ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass, wenn interaktive Kinder (z. B. Links oder Schaltflächen) darin enthalten sind, sie immer noch wie eine einzelne Schaltfläche für Interaktionszwecke behandelt wird – beispielsweise sind die untergeordneten Elemente nicht fokussierbar oder klickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kindelements `<button>` des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert innerhalb des _geschlossenen_ `<select>`-Elements anzuzeigen.
  Dies enthält einen Klon des aktuell ausgewählten `<option>`-Inhalts (erstellt mittels [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Auswahlfensters anspricht. Dies umfasst alle Elemente innerhalb des `<select>`-Elements, mit Ausnahme des ersten Kindelements `<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die vom Browser definierten Standardstile und -verhalten für anpassbare Auswahl einbindet.
- Die {{cssxref(":open")}}-Pseudoklasse, die die Auswahl-Schaltfläche anspricht, wenn das Auswahlfenster (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol innerhalb der Auswahl-Schaltfläche anspricht – den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen anspricht, das im aktuell ausgewählten `<option>`-Element platziert ist, um eine visuelle Anzeige zu geben, welches ausgewählt ist.

Darüber hinaus haben das `<select>`-Element und sein Drop-down-Auswahlfenster automatisch das folgende Verhalten zugewiesen:

- Sie haben eine Invoker/Popover-Beziehung, wie sie durch die [Popover API](/de/docs/Web/API/Popover_API) angegeben wird, die die Möglichkeit bietet, das Auswahlfenster bei geöffnetem Status via die {{cssxref(":popover-open")}}-Pseudoklasse auszuwählen. Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben einen impliziten Ankerbezug, was bedeutet, dass das Auswahlfenster automatisch mit dem `<select>`-Element über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) assoziiert ist. Die vom Browser standardmäßig definierten Stile positionieren den Picker relativ zur Schaltfläche (dem Anker) und Sie können diese Position anpassen, wie unter [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) beschrieben. Die Browserstandardstile definieren auch einige Rückfallsituationen, die den Picker umpositionieren, wenn er Gefahr läuft, den Ansichtsbereich zu überschreiten. Position-Try-Fallbacks werden in [Überlaufbehandlung: Try-Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browserunterstützung für anpassbare `<select>` durch das Anzeigen der Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}} und {{cssxref("::checkmark")}} überprüfen.

Schauen wir uns alle oben genannten Funktionen in Aktion an, indem wir das Beispiel durchgehen, das oben auf der Seite gezeigt wird.

## Anpassbare Auswahl-Markup

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist an den Symbolen enthalten, damit sie für unterstützende Technologien verborgen sind, um zu vermeiden, dass die Optionswerte doppelt angekündigt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist nahezu identisch mit dem "klassischen" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>`-Struktur stellt die Auswahl-{{htmlelement("button")}} dar.
  Durch das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements klont der Browser das aktuell ausgewählte {{htmlelement("option")}}-Element innerhalb der Schaltfläche, das Sie dann [eigene Stile bereitstellen](#anpassung_der_stilgestaltung_der_ausgewählten_optionsinhalte_innerhalb_der_auswahl-schaltfläche) können. Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser zurück, um den Text der ausgewählten Option innerhalb der Standardschaltfläche darzustellen, und es wird weniger einfach sein, sie zu gestalten.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um alles, was Sie wollen, innerhalb der geschlossenen `<select>` darzustellen, aber seien Sie vorsichtig dabei. Was Sie einschließen, kann den zugänglichen Wert beeinflussen, der für unterstützende Technologie für das `<select>`-Element angezeigt wird.
- Der Rest des `<select>`-Inhalts stellt das Drop-down-Auswahlfenster dar, das normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können andere Inhalte im Picker enthalten, aber es wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Auswahlfeld können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textbasierte semantische Elemente und mehr enthalten. Sie können sogar die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente verwenden, um weitere Inhalte hinzuzufügen. Bedenken Sie jedoch, dass dies nicht im übermittelbaren Wert enthalten wäre. In unserem Beispiel enthält jede `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und eine Textbeschriftung enthalten, sodass jedes Element unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt nicht nur Textknoten, sondern multistrukturierte DOM-Unterbäume enthalten kann, gibt es Regeln dafür, wie der Browser den aktuellen `<select>`-Wert über JavaScript extrahieren soll. Der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird ausgeführt, und das Ergebnis wird als `<select>`-Wert festgelegt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf ein klassisches `<select>`-Erlebnis zurückzugreifen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird vollständig ignoriert, und die Nicht-Text-`<option>`-Inhalte werden herausgefiltert, um nur die Textknoteninhalte zu belassen, aber das Ergebnis wird weiterhin funktionieren.

## Auswahl der benutzerdefinierten Renderingfunktion

Um sich für die benutzerdefinierte Auswahltaste und die minimalen browserbasierten Basisstile zu entscheiden (und die durch das Betriebssystem bereitgestellten Stile zu entfernen), müssen Ihr `<select>`-Element und ihr Drop-down-Auswahlfenster (durch das `::picker(select)`-Pseudo-Element repräsentiert) beide einen {{cssxref("appearance")}}-Wert von `base-select` erhalten:

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

Sie können wählen, nur das `<select>`-Element für die neue Funktionalität zu entschließen, während Sie das Auswahlfenster mit der Standardbetriebssystem-Stilgestaltung belassen, aber in den meisten Fällen möchten Sie sich für beide entscheiden. Sie können sich nicht für den Picker entschließen, ohne sich für das `<select>`-Element zu entscheiden.

Sobald dies geschehen ist, resultiert daraus eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind jetzt frei, dies nach Belieben zu gestalten. Das `<select>`-Element hat eigene Werte für {{cssxref("border")}}, {{cssxref("background")}} (was sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}} sowie eine {{cssxref("transition")}}, damit die Hintergrundänderung fließend animiert wird:

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

Um das Symbol in der Auswahl-Schaltfläche zu gestalten — den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, damit Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft fließend animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert —, die die Auswahl-Schaltfläche nur anspricht, wenn das Drop-down-Auswahlfenster geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn die `<select>` geöffnet wird.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Lassen Sie uns die bisherige Arbeit betrachten – beachten Sie, wie der Picker-Pfeil sich fließend um 180 Grad dreht, wenn die `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Drop-down-Auswahlfensters

Der Drop-down-Auswahlfenster kann mittels des {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Elements angezielt werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, was nicht die Schaltfläche und das `<selectedcontent>` ist. In unserem Beispiel bedeutet das alle `<option>`-Elemente und deren Inhalte.

Zuerst wird der Standard-schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> Das Argument, das an das `::picker()`-Pseudo-Element übergeben wird, steht für die Art von Element, dessen Picker Sie ansteuern möchten – in diesem Fall `<select>`-Elemente. Wenn Sie den Picker eines speziellen `<select>`-Elements anstelle aller auswählen möchten, können Sie das `::picker()`-Pseudo-Element mit einem anderen Selektor kombinieren. Zum Beispiel hat unser Beispiel-`<select>` eine ID von `pet-select`, sodass sein Picker exklusiv mit `#pet-select::picker(select) { ... }` angesprochen werden kann.

Nun werden die `<option>`-Elemente gestylt. Sie sind mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angeordnet und richten sich alle am Anfang des Flex-Containers aus, mit einem `20px`-{{cssxref("gap")}} zwischen jedem. Jede `<option>` erhält auch die gleiche {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Aussehen und Gefühl zu bieten:

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
> Anpassbare `<select>`-Element `<option>` haben standardmäßig `display: flex` gesetzt, aber es ist trotzdem in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als nächstes wird eine Kombination aus {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudoklassen verwendet, um eine geeignete {{cssxref("border-radius")}} auf den oberen und unteren `<option>`-Elementen zu setzen, und das {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — außer dem letzten, damit die Ränder nicht unordentlich und verdoppelt aussehen. Wir setzen auch den gleichen `border-radius` auf dem äußeren `::picker(select)`-Container, damit wir nicht mit einem hässlichen quadratischen weißen Kasten um die Optionen enden, wenn wir uns entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als Nächstes wird eine unterschiedliche `background`-Farbe mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} auf die ungeradzahligen `<option>`-Elemente gesetzt, um eine Zebramusterung einzuführen, und eine andere `background`-Farbe auf die `<option>`-Elemente bei Fokus und Hover gesetzt, um eine nützliche visuelle Hervorhebung während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird für diesen Abschnitt eine größere {{cssxref("font-size")}} auf den `<option>`-Symbolen gesetzt (enthalten in `<span>`-Elementen mit einer Klasse `icon`), um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft verwendet, um einen Teil des störenden Abstands an den Blockanfangs- und Blockendkanten der Icon-Emojis zu entfernen, wodurch sie sich besser mit den Textbeschriftungen ausrichten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird nun so dargestellt:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassung der Stilgestaltung der ausgewählten Optionsinhalte innerhalb der Auswahl-Schaltfläche

Wenn Sie aus den letzten Live-Beispielen eine Haustieroption auswählen, werden Sie ein Problem bemerken – die Haustiersymbole lassen die Auswahl-Schaltfläche in der Höhe zunehmen, was auch die Position des Picker-Symbols verändert, und es gibt keinen Abstand zwischen dem Optionssymbol und der Beschriftung.

Dies kann behoben werden, indem das Symbol verborgen wird, wenn es sich innerhalb von `<selectedcontent>` befindet, was den Inhalt der ausgewählten `<option>` darstellt, wie er innerhalb der Auswahl-Schaltfläche erscheint. In unserem Beispiel wird er durch {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht die Stilgestaltung der `<option>`-Inhalte, wie sie im Drop-down-Auswahlfenster erscheinen.

## Gestalten der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` so zu gestalten, wie sie im Drop-down-Auswahlfenster erscheint, können Sie sie mit der {{cssxref(":checked")}}-Pseudoklasse ansprechen. Dabei wird das {{cssxref("font-weight")}} der ausgewählten `<option>`-Elemente auf `bold` gesetzt:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie das Auswahlfenster öffnen, um eine Auswahl zu treffen, die derzeit ausgewählte `<option>` ein Häkchen an ihrem Inline-Start-Ende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element angesprochen werden. Zum Beispiel könnten Sie dieses Häkchen verstecken wollen (z. B. via `display: none`).

Sie könnten auch etwas Interessanteres damit tun — früher wurden die `<option>`-Elemente horizontal mit Flexbox ausgerichtet, mit den Flex-Elementen am Anfang der Zeile ausgerichtet. In der unten stehenden Regel wird das Häkchen vom Anfang der Zeile zum Ende verschoben, indem ein {{cssxref("order")}}-Wert darauf gesetzt wird, der größer als `0` ist, und es mit einem `auto` {{cssxref("margin-left")}}-Wert an das Ende der Zeile ausgerichtet wird. (Siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudo-Elemente sind nicht im Accessibility-Tree enthalten, sodass generierter {{cssxref("content")}}-Inhalt, verändert von assistiven Technologien, nicht angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen vorgesehenen Zweck sinnvoll ist.

Sehen wir uns erneut an, wie das Beispiel rendert. Der aktualisierte Stand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Auswahlfensters unter Verwendung von Popover-Zuständen

Das anpassbare `<select>`-Element hat automatisch eine Invoker/Popover-Beziehung wie im [Verwenden der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die dies den `<select>`-Elementen bringt; unser Beispiel nutzt die Fähigkeit, zwischen Popover-verborgenen und angezeigten Zuständen mit Übergängen zu animieren. Die {{cssxref(":popover-open")}}-Pseudoklasse repräsentiert Popovers im angezeigten Zustand.

Die Technik wird in diesem Abschnitt schnell behandelt – lesen Sie [Animation von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuerst wird das Auswahlfenster mittels `::picker(select)` ausgewählt und mit einem {{cssxref("opacity")}}-Wert von `0` und einem `transition`-Wert von `all 0.4s allow-discrete` versehen. Dadurch werden alle Eigenschaften, die beim Ändern des Popover-Zustands von verborgen auf angezeigt gewechselt werden, animiert.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften enthält `opacity`, umfasst aber auch zwei diskrete Eigenschaften, deren Werte von den Browserstandardstilen festgelegt werden:

- {{cssxref("display")}}
  - : Die `display`-Werte wechseln von `none` zu `block`, wenn der Popover-Zustand von versteckt auf angezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert wechselt von `none` zu `auto`, wenn der Popover-Zustand von versteckt auf angezeigt wechselt, um es in den {{Glossary("top_layer", "oberste Ebene")}} zu fördern, und zurück, wenn es versteckt wird, um es zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) ist erforderlich, um diskrete Eigenschafts-Animationen zu aktivieren.

Als Nächstes wird der Picker im angezeigten Zustand mittels `::picker(select):popover-open` ausgewählt und mit einem `opacity`-Wert von `1` versehen — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich muss der Startzustand des Übergangs in einem {{cssxref("@starting-style")}}-Block spezifiziert werden, da der Picker übergangsweise von `display: none` zu einem `display`-Wert wechselt, der ihn sichtbar macht:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um das Auswahlfenster fließend ein- und auszublenden, wenn die `<select>` geöffnet und geschlossen wird.

## Positionierung des Pickers unter Verwendung der Ankerpositionierung

Ein anpassbares `<select>`-Element hat einen impliziten Ankerbezug, und der Picker ist automatisch über [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) mit der Auswahl-Schaltfläche verknüpft. Dies bedeutet, dass keine explizite Verknüpfung mit {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden muss.

Zusätzlich bieten die [Standardsstile des Browsers eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) beschrieben.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker eingestellt, indem die {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die Oberkante des Pickers immer 1 Pixel unterhalb der Unterkante der Auswahl-Schaltfläche positioniert wird und die linke Kante des Pickers immer `10%` der Breite der Auswahl-Schaltfläche von ihrer linken Kante entfernt positioniert wird.

> [!NOTE]
> Wenn Sie den impliziten Ankerbezug entfernen möchten, um den Picker nicht mehr an das `<select>`-Element zu binden, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Pickers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerverknüpfung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` so dargestellt:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassung anderer klassischer Auswahlfunktionen

Die obigen Abschnitte haben alle neuen Funktionen in anpassbaren Auswahlfeldern abgedeckt und gezeigt, wie sie mit klassischen einzeiligen Auswahlfeldern und verwandten modernen Funktionen wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Element-Funktionen, die nicht oben erwähnt wurden; dieser Abschnitt spricht darüber, wie sie derzeit neben anpassbaren Auswahlfeldern arbeiten:

- [`<select multiple>`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Derzeit gibt es keine spezifizierte Unterstützung für das `multiple`-Attribut auf anpassbaren `<select>`-Elementen, aber dies wird in Zukunft bearbeitet.
- {{htmlelement("optgroup")}}
  - : Die Standardstilgestaltung von `<optgroup>`-Elementen ist dieselbe wie in klassischen `<select>`-Elementen – fettgedruckt und weniger eingerückt als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente so gestalten, dass sie in das Gesamtdesign passen, und bedenken, dass sie sich verhalten wie Container, die im konventionellen HTML erwartet werden. In anpassbaren `<select>`-Elementen ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Label bereitzustellen, das einfach angesprochen und gestaltet werden kann. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements festgelegt ist, und hat dieselbe Semantik.

## Als Nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern für die Stilgestaltung von Formularen in verschiedenen Zuständen zur Verfügung stehen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
