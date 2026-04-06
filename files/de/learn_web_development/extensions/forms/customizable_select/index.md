---
title: Anpassbare select-Elemente
short-title: Anpassbare selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie vollständig anpassbare {{htmlelement("select")}}-Elemente mit experimentellen Browserfunktionen erstellen können. Dies umfasst die volle Kontrolle über die Gestaltung der Select-Schaltfläche, den Dropdown-Auswähler, das Pfeilsymbol, das aktuelle Auswahl-Häkchen und jedes einzelne {{htmlelement("option")}}-Element.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Funktionen haben derzeit eine eingeschränkte Browserunterstützung; überprüfen Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten der einzelnen Funktionen für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen führen sie zu Fehlern bei der Hydration, wenn serverseitiges Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und das Verhalten von `<select>`-Elementen anzupassen, da sie interne Strukturen enthalten, die auf Betriebssystemebene gestaltet sind und nicht mit CSS angesteuert werden können. Dazu gehören der Dropdown-Auswähler, das Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option — abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek — den {{cssxref("appearance")}}-Wert `none` auf das `<select>`-Element anzuwenden, um einen Teil der auf Betriebssystemebene vorhandenen Gestaltung zu entfernen, und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird im [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es, Beispiele wie das folgende nur mit HTML und CSS zu erstellen, die vollständig in [unterstützten Browsern](#browser-kompatibilität) angepasst sind. Dies umfasst `<select>`- und Dropdown-Auswähler-Layout, Farbschema, Icons, Schriftart, Übergänge, Positionierung, Marker zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung gegenüber der bestehenden Funktionalität und fallen in nicht unterstützten Browserversionen auf „klassische“ Auswahlelemente zurück.

Wie Sie dieses Beispiel erstellen können, erfahren Sie in den folgenden Abschnitten.

> [!NOTE]
> Dieser Artikel behandelt den Hintergrund anpassbarer selects und zeigt, wie "single dropdown" selects erstellt werden können, die diese Funktionen nutzen — die Dropdown-Menüs, die jeweils eine Option anzeigen und das Auswählen einer einzigen Option erlauben.
>
> Informationen zur Erstellung von "listbox" selects — Menüs, die mehrere Optionen gleichzeitig anzeigen und das Auswählen einer oder mehrerer Optionen erlauben — finden Sie unter [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes).

## Welche Funktionen umfasst ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Funktionen erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in „klassischen“ selects, außer dass sie zusätzliche zulässige Inhaltstypen haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was zuvor in „klassischen“ selects nicht erlaubt war. Wenn dies enthalten ist, ersetzt es die standardmäßige „Schaltfläche“-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Schaltfläche** bezeichnet (da es die Schaltfläche ist, die Sie drücken müssen, um den Dropdown-Auswähler zu öffnen).
  > [!NOTE]
  > Die Select-Schaltfläche ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass sie, auch wenn interaktive Kinder (z.B. Links oder Schaltflächen) enthalten sind, weiterhin als eine einzelne Schaltfläche für Interaktionszwecke behandelt wird — beispielsweise sind die Kind-Elemente weder fokussierbar noch anklickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional innerhalb des ersten Kind-`<button>`-Elements des `<select>`-Elements enthalten sein, um den derzeit ausgewählten Wert im _geschlossenen_ `<select>`-Element anzuzeigen.
  Dies enthält ein Klon des Inhalts des aktuellen `<option>`-Elements (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) unter der Haube).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement, das den gesamten Inhalt des Pickers ansteuert. Dies schließt alle Elemente innerhalb des `<select>`-Elements ein, außer dem ersten Kind-`<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudoelement in die vom Browser definierten Standardstile und das Verhalten für anpassbare Selects einbindet.
- Die {{cssxref(":open")}}-Pseudoklasse, die die Select-Schaltfläche ansteuert, wenn der Picker (`::picker(select)`) offen ist.
- Das {{cssxref("::picker-icon")}}-Pseudoelement, das das Symbol innerhalb der Select-Schaltfläche ansteuert — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudoklasse, die das derzeit ausgewählte `<option>`-Element ansteuert.
- Das {{cssxref("::checkmark")}}-Pseudoelement, das das Häkchen ansteuert, das im derzeit ausgewählten `<option>`-Element platziert ist, um einen visuellen Hinweis darauf zu geben, welche Option ausgewählt ist.

Darüber hinaus hat das `<select>`-Element und sein Dropdown-Auswähler eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch dem `<select>`-Element über [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zugeordnet ist. Die Browser-Standardstile positionieren den Picker relativ zur Schaltfläche (dem Anker) und Sie können diese Position anpassen, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die Browser-Standardstile definieren auch einige Fallbacks bei Positionsversuchen, die den Picker neu positionieren, wenn er Gefahr läuft, den Viewport zu überlaufen. Fallbacks bei Positionsversuchen werden im Abschnitt [Umgang mit Überlauf: Versuche, Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browserunterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Funktionen wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} ansehen.

Lassen Sie uns alle oben genannten Funktionen in Aktion sehen, indem wir das oben auf der Seite gezeigte Beispiel durchgehen.

## Markup für anpassbare selects

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, mit dem Sie ein Haustier auswählen können. Das Markup sieht wie folgt aus:

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
> Das [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut ist auf den Symbolen enthalten, damit sie von unterstützenden Technologien verborgen werden, wodurch vermieden wird, dass die Optionswerte doppelt angekündigt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup unterscheidet sich fast nicht von klassischem `<select>`-Markup, mit den folgenden Unterschieden:

- Die Struktur `<button><selectedcontent></selectedcontent></button>` repräsentiert die Select-{{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements bewirkt, dass der Browser das derzeit ausgewählte {{htmlelement("option")}}-Element innerhalb der Schaltfläche klont, das Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassen_der_gestaltung_des_ausgewählten_option-inhalts_innerhalb_der_select-schaltfläche). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, fällt der Browser darauf zurück, den Text der ausgewählten Option innerhalb der Standardschaltfläche darzustellen, und Sie können ihn nicht so einfach gestalten.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte in der `<button>` hinzufügen, um was auch immer Sie im geschlossenen `<select>` rendern möchten, aber seien Sie vorsichtig, wenn Sie dies tun. Was Sie hinzufügen, kann den zugänglichen Wert für das `<select>`-Element, der unterstützender Technologie ausgesetzt ist, ändern.
- Der Rest der `<select>`-Inhalte repräsentiert den Dropdown-Auswähler, der in der Regel auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlen im Auswähler darstellen. Sie können andere Inhalte im Auswähler einfügen, aber dies wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht interaktive textuelle semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelemente verwenden, um andere Inhalte hinzuzufügen, auch wenn Sie bedenken sollten, dass dies nicht im absendbaren Wert enthalten wäre. In unserem Beispiel enthält jede `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Symbol und ein Textlabel enthalten, was es ermöglicht, jedes unabhängig zu gestalten und zu positionieren.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Strukturen, nicht nur Textknoten beinhalten kann, gibt es Regeln dazu, wie der Browser über JavaScript den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) extrahieren sollte. Der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} wird darauf angewendet, und das Ergebnis wird als `<select>`-Wert festgelegt.

Dieses Design ermöglicht es nicht unterstützten Browsern auf eine klassische `<select>`-Erfahrung zurückzufallen. Die Struktur `<button><selectedcontent></selectedcontent></button>` wird vollständig ignoriert, und die nicht-textlichen `<option>`-Inhalte werden herausgefiltert, sodass nur die Textknoten-Inhalte verbleiben, aber das Ergebnis wird weiterhin funktionieren.

## Opt-in für die Anpassung der select-Rendering

Um sich in die angepasste select-Funktionalität und die minimalen Browser-Grundlagenstile (und die vom Betriebssystem bereitgestellten Stile zu entfernen) einzubinden, müssen sowohl Ihr `<select>`-Element als auch sein Dropdown-Auswähler (repräsentiert durch das `::picker(select)`-Pseudoelement) einen {{cssxref("appearance")}}-Wert von `base-select` aufweisen:

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

Sie können sich dafür entscheiden, nur das `<select>`-Element in die neue Funktionalität einzubinden, während der Picker die Standard-Betriebssystemstile beibehält, aber in den meisten Fällen möchten Sie beide einbinden. Sie können den Picker nicht einbinden, ohne das `<select>`-Element einzubinden.

Sobald dies geschehen ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie sind nun frei, dies nach Belieben zu gestalten. Zu Beginn hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (welches sich bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} ändert) und {{cssxref("padding")}}-Werte eingestellt, plus eine {{cssxref("transition")}} damit die Hintergrundänderung sanft animiert wird:

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

## Das Picker-Icon gestalten

Um das Symbol innerhalb der Select-Schaltfläche zu gestalten — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudoelement ansteuern. Der folgende Code verleiht dem Symbol eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, damit Änderungen seines {{cssxref("rotate")}}-Eigenschaftswertes sanft animieren:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als Nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudoklasse kombiniert — die die Select-Schaltfläche nur dann ansteuert, wenn der Dropdown-Auswähler geöffnet ist — um dem Symbol einen `rotate` Wert von `180deg` zu geben, wenn das `<select>` geöffnet wird.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an — beachten Sie, wie der Picker-Pfeil sanft um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Den Dropdown-Auswähler gestalten

Der Dropdown-Auswähler kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement angesteuert werden. Wie bereits erwähnt, enthält der Picker alles innerhalb des `<select>`-Elements, das nicht die Schaltfläche und der `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalt.

Zunächst wird der Standard-schwarze {{cssxref("border")}} des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> Das Argument, das an das `::picker()`-Pseudoelement übergeben wird, stellt den Typ des Elements dar, dessen Picker Sie ansteuern möchten — in diesem Fall `<select>`-Elemente. Wenn Sie den Picker eines spezifischen `<select>`-Elements und nicht alle ansteuern möchten, können Sie das `::picker()`-Pseudoelement mit einem anderen Selektor kombinieren. Zum Beispiel hat unser Beispiel-`<select>` eine ID von `pet-select`, so kann sein Picker exklusiv mit `#pet-select::picker(select) { ... }` angesteuert werden.

Jetzt werden die `<option>`-Elemente gestaltet. Sie sind mit [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) gestaltet, wobei sie alle am Anfang des Flex-Containers ausgerichtet sind und ein `20px` {{cssxref("gap")}} zwischen jedem gibt. Jedes `<option>` erhält außerdem dieselben {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}} und {{cssxref("transition")}} wie das `<select>`, um ein konsistentes Erscheinungsbild und Ansprechverhalten zu bieten:

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
> Anpassbare `<select>`-Element `<option>` haben `display: flex` standardmäßig, aber es wird in unserem Stylesheet dennoch enthalten, um zu verdeutlichen, was vor sich geht.

Als nächstes wird eine Kombination der {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}} und {{cssxref(":not()")}}-Pseudoklassen verwendet, um eine geeignete {{cssxref("border-radius")}} an den oberen und unteren `<option>`-Elementen zu setzen und die {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — außer dem letzten, damit die Ränder nicht unordentlich und doppelt aussehen. Wir setzen auch die gleiche `border-radius` auf den äußeren `::picker(select)`-Container, damit wir nicht am Ende eine hässliche, quadratische weiße Box um die Optionen herum haben, falls wir entscheiden, eine andere Hintergrundfarbe auf der Seite zu verwenden.

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

Als nächstes wird eine andere `background`-Farbe auf den ungeraden `<option>`-Elementen mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um ein Zebra-Putzmotiv zu implementieren, und eine andere `background`-Farbe wird auf den `<option>`-Elementen bei Fokus und Hover gesetzt, um während der Auswahl einen nützlichen visuellen Hinweis zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Abschließend wird in diesem Abschnitt eine größere {{cssxref("font-size")}} auf die `<option>`-Symbole (enthalten innerhalb der `<span>`-Elemente mit einer Klasse von `icon`) gesetzt, um sie größer zu machen, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der nervigen Abstände an den Block-Anfangs- und Block-Endkanten der Icon-Emojis zu entfernen, damit sie besser mit den Textlabels ausgerichtet werden:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird nun so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen der Gestaltung des ausgewählten Option-Inhalts innerhalb der Select-Schaltfläche

Wenn Sie eine beliebige Haustieroption aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken — die Haustier-Icons verursachen, dass sich die Höhe der Select-Schaltfläche vergrößert, was auch die Position des Picker-Icons ändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Label.

Dies kann behoben werden, indem das Symbol verborgen wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, welches den Inhalt der ausgewählten `<option>` als sie innerhalb der Select-Schaltfläche erscheint, darstellt. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} verborgen:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinträchtigt nicht die Gestaltung der `<option>`-Inhalte, wie sie im Dropdown-Auswähler erscheinen.

## Gestaltung der aktuell ausgewählten Option

Um die aktuell ausgewählte `<option>` zu gestalten, wie sie im Dropdown-Auswähler erscheint, können Sie diese mit der {{cssxref(":checked")}}-Pseudoklasse ansteuern. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Gestaltung des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass wenn Sie den Auswähler öffnen, um eine Auswahl zu treffen, das aktuell ausgewählte `<option>` ein Häkchen am Inline-Anfangsende besitzt. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudoelement angesteuert werden. Zum Beispiel könnten Sie dieses Häkchen ausblenden (zum Beispiel mit `display: none`).

Sie könnten auch etwas Interessanteres damit machen — zuvor wurden die `<option>`-Elemente horizontal mit Flexbox gestaltet, wobei die Flex-Elemente am Anfang der Reihe ausgerichtet sind. In der untenstehenden Regel wird das Häkchen von der Reihenstartposition zur Reihenendposition verschoben, indem ein {{cssxref("order")}}-Wert darauf gesetzt wird, der größer als `0` ist, und es wird am Ende der Reihe mit einem `auto`-{{cssxref("margin-left")}}-Wert ausgerichtet (siehe [Ausrichtung und Auto-Margen](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Abschließend wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudoelemente sind nicht im Accessibility-Baum enthalten, daher wird jeder erzeugte {{cssxref("content")}}, der darauf gesetzt wird, nicht von unterstützenden Technologien angekündigt. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

Lassen Sie uns erneut überprüfen, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten ist wie folgt:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Den Picker mit Popover-Zuständen animieren

Die Select-Schaltfläche und der Dropdown-Auswähler eines anpassbaren `<select>`-Elements haben automatisch eine Invoker/Popover-Beziehung, wie im Abschnitt [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Es gibt viele Vorteile, die dies für `<select>`-Elemente mit sich bringt; unser Beispiel nutzt die Möglichkeit, zwischen verdeckten und angezeigten Popover-Zuständen mit Übergängen zu animieren. Die {{cssxref(":open")}}-Pseudoklasse repräsentiert Select-Elemente in einem geöffneten Zustand.

Die Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Popovers animieren](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und erhält eine {{cssxref("opacity")}}-Einstellung von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die beim Wechsel des Popover-Zustands von verdeckt zu sichtbar Wertänderungen erfahren, animieren.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, jedoch auch zwei diskrete Eigenschaften, deren Werte durch die Browser-Standardstile festgelegt werden:

- {{cssxref("display")}}
  - : Der `display`-Wert wechselt von `none` zu `block`, wenn der Popover-Zustand von verdeckt zu gezeigt wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert wechselt von `none` zu `auto`, wenn der Popover-Zustand von verdeckt zu gezeigt wechselt, um ihn auf die {{Glossary("top_layer", "oberste Schicht")}} zu befördern, dann zurück zu `none` bei Überblendung. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers von der obersten Schicht erst nach Abschluss des Übergangs erfolgt, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete)-Wert ist erforderlich, um diskrete Eigenschaftenanimationen zu ermöglichen.

Als nächstes wird der Picker im gezeigten Zustand mit `:open::picker(select)` ausgewählt und erhält einen `opacity`-Wert von `1` — das ist der Endzustand des Übergangs:

```css live-sample___full-render
:open::picker(select) {
  opacity: 1;
}
```

Schließlich, da der Picker bei seiner Bewegung von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, übergangsweise ist, muss der Startzustand des Übergangs in einem {{cssxref("@starting-style")}}-Block spezifiziert werden:

```css live-sample___full-render
@starting-style {
  :open::picker(select) {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker beim Öffnen und Schließen des `<select>` sanft einfaden und ausfaden zu lassen.

## Den Picker mit Ankerpositionierung positionieren

Die Select-Schaltfläche und der Dropdown-Auswähler eines anpassbaren `<select>`-Elements haben eine implizite Ankerreferenz, und der Picker ist automatisch mit der Select-Schaltfläche durch [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) assoziiert. Dies bedeutet, dass keine explizite Assoziation mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften erforderlich ist.

Darüber hinaus bieten die [Standardstile des Browsers eine Standardposition](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker festgelegt, indem die {{cssxref("anchor()")}}-Funktion in den {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unterhalb der unteren Kante der Select-Schaltfläche positioniert wird, und die linke Kante des Pickers immer `10%` der Breite der Select-Schaltfläche von dessen linken Kante aus positioniert wird.

> [!NOTE]
> Wenn Sie die implizite Anker-Referenz entfernen möchten, um den Picker nicht mehr an das `<select>`-Element zu verankern, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Pickers auf einen Ankernamen festlegen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [entfernen einer Ankerzuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Hauptergebnis des endgültigen Beispiels

Nach den letzten beiden Abschnitten wird der endgültige aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Styling von optgroup-Elementen

Die Standardgestaltung von {{htmlelement("optgroup")}}-Elementen in anpassbaren Selects ist dieselbe wie in klassischen `<select>`-Elementen — fett gedruckt und weniger eingezogen als die enthaltenen Optionen. In anpassbaren Selects verhalten sich Optionsgruppen jedoch genau wie andere Blockcontainer und können entsprechend gestaltet werden. Zudem ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein leicht anzuvisierendes und zu gestaltendes Label bereitzustellen. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements festgelegt ist und hat die gleiche Semantik.

Schauen wir uns ein einfaches Beispiel an. Unser HTML sieht wie folgt aus:

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

Wir beginnen unsere CSS durch das Styling der `<optgroup>`-Elemente selbst. Diese sind größtenteils rudimentäre Stile, um die Optgroup-Elemente wie Container für ihre nachfolgenden `<option>`-Elemente aussehen zu lassen. Wir haben ihnen etwas {{cssxref("margin-top")}} gegeben, um etwas Abstand zwischen jeder Optgroup zu schaffen und zwischen der obersten Optgroup und der Select-Schaltfläche.

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

Als nächstes gestalten wir die `<legend>`-Elemente, indem wir den Text zentrieren und etwas Rand hinzufügen, um sie von den Optionen zu trennen.

```css live-sample___optgroup-example
optgroup legend {
  text-align: center;
  margin-bottom: 10px;
}
```

Abschließend gestalten wir die `<option>`-Elemente, indem wir eine {{cssxref("background")}}-Farbe und etwas {{cssxref("padding")}} angeben und die untere {{cssxref("border-radius")}} des letzten `<option>` jeweils stylen, damit es mit den abgerundeten Ecken des Eltern-`<optgroup>` zusammenpasst. Wir implementieren auch Zebra-Streifen, indem wir den ungeraden `<option>`-Elementen eine andere Hintergrundfarbe geben, und einen unterschiedlichen Hover- und Fokus-Zustand für die Optionen bereitstellen.

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

Das Beispiel wird so gerendert:

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

## Als nächstes

Im nächsten Artikel dieses Moduls zeigen wir Ihnen, wie Sie [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes) stylen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}
