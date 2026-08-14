---
title: Anpassenbare Select-Elemente
short-title: Anpassenbare Selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: a25c283c3fe8986e9d31f0bb64b345ad1bb7b64d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie Sie vollständig anpassbare {{htmlelement("select")}}-Elemente mit experimentellen Browser-Features erstellen können. Dies umfasst die vollständige Kontrolle über die Gestaltung des Select-Buttons, des Dropdown-Auswahlfelds, des Pfeilsymbols, des Häkchens der aktuellen Auswahl und jedes einzelnen {{htmlelement("option")}}-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Features haben derzeit eine begrenzte Browser-Unterstützung; überprüfen Sie die Tabellen zur Browser-Kompatibilität auf den jeweiligen Feature-Referenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Features; in anderen verursachen sie Hydratisierungsfehler, wenn serverseitiges Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen und Verhalten von `<select>`-Elementen zu verändern, da sie interne Elemente enthalten, die auf Betriebssystemebene gestylt sind und nicht mit CSS anvisiert werden können. Dazu gehören das Dropdown-Auswahlfeld, Pfeilsymbol und so weiter.

Bisher war die beste verfügbare Option — abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek — das Setzen eines {{cssxref("appearance")}}-Werts von `none` auf das `<select>`-Element, um einige der OS-basierten Stile zu entfernen und dann CSS zu verwenden, um die Teile zu gestalten, die gestylt werden können. Diese Technik wird im [Erweiterten Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es Ihnen, Beispiele wie das folgende zu erstellen, die nur HTML und CSS verwenden und vollständig anpassbar in [unterstützenden Browsern](#browser-kompatibilität) sind. Dies umfasst `<select>`- und Dropdown-Auswahlfeldlayout, Farbschema, Symbole, Schriftart, Übergänge, Platzierung, Marker zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Zusätzlich bieten sie eine progressive Verbesserung der bestehenden Funktionalität, indem sie in nicht unterstützenden Browsern auf "klassische" Selects zurückgreifen.

Wie Sie dieses Beispiel erstellen, erfahren Sie in den folgenden Abschnitten.

> [!NOTE]
> Dieser Artikel behandelt den Hintergrund anpassbarer Selects und zeigt, wie "einzelne Dropdown"-Selects erstellt werden, die diese Features nutzen — also Dropdown-Menüs, die jeweils eine einzelne Option anzeigen und eine einzelne Option zur Auswahl ermöglichen.
>
> Informationen zur Erstellung von "Listbox"-Selects — Menüs, die mehrere Optionen gleichzeitig anzeigen und eine einzelne oder mehrere Optionen zur Auswahl ermöglichen — finden Sie unter [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes).

## Welche Features umfasst ein anpassbares Select?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Features erstellen:

- Gewöhnliche {{htmlelement("select")}}, {{htmlelement("option")}} und {{htmlelement("optgroup")}}-Elemente. Diese funktionieren genauso wie in "klassischen" Selects, außer dass sie zusätzliche zulässige Inhaltsarten haben.
- Ein {{htmlelement("button")}}-Element, das als erstes Kind innerhalb des `<select>`-Elements enthalten ist, was in "klassischen" Selects zuvor nicht erlaubt war. Wenn dies enthalten ist, ersetzt es das standardmäßige "Button"-Rendering des geschlossenen `<select>`-Elements. Dies wird allgemein als **Select-Button** bezeichnet (da es der Button ist, den Sie drücken müssen, um das Dropdown-Auswahlfeld zu öffnen).
  > [!NOTE]
  > Der Select-Button ist [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) standardmäßig, sodass, wenn interaktive Kinder (zum Beispiel Links oder Schaltflächen) darin enthalten sind, er weiterhin wie eine einzelne Schaltfläche für Interaktionszwecke behandelt wird — beispielsweise werden die Kindelemente nicht fokussierbar oder klickbar.
- Das {{htmlelement("selectedcontent")}}-Element kann optional im ersten Kind-`<button>`-Element des `<select>`-Elements enthalten sein, um den aktuell ausgewählten Wert im _geschlossenen_ `<select>`-Element anzuzeigen.
  Dies enthält ein Klon des aktuell ausgewählten `<option>`-Inhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, das den gesamten Inhalt des Auswahlfeldes anvisiert. Dazu gehören alle Elemente innerhalb des `<select>`-Elements, außer das erste Kind `<button>`.
- Der {{cssxref("appearance")}}-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die browserdefinierten Standardstile und -verhalten für anpassbare Selects überführt.
- Die {{cssxref(":open")}}-Pseudo-Klasse, die den Select-Button anvisiert, wenn das Auswahlfeld (`::picker(select)`) geöffnet ist.
- Das {{cssxref("::picker-icon")}}-Pseudo-Element, das das Symbol im Select-Button anvisiert — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist.
- Die {{cssxref(":checked")}}-Pseudo-Klasse, die das aktuell ausgewählte `<option>`-Element anvisiert.
- Das {{cssxref("::checkmark")}}-Pseudo-Element, das das Häkchen im derzeit ausgewählten `<option>`-Element anvisiert, um visuell anzuzeigen, welches ausgewählt ist.

Zusätzlich haben das `<select>`-Element und sein Dropdown-Auswahlfeld eine implizite Ankerreferenz, was bedeutet, dass das Auswahlfeld automatisch mit dem `<select>`-Element über [CSS-Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verknüpft ist. Die browserdefinierten Standardstile positionieren das Auswahlfeld relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie in [Elemente relativ zu ihrem Anker positionieren](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die browserdefinierten Standardstile definieren auch einige Position-Try-Backups, die das Auswahlfeld neu positionieren, wenn es droht, den Viewport zu überlaufen. Position Try-Backups sind erklärt in [Umgang mit Überlauf: Try-Backups und bedingtes Verstecken](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` überprüfen, indem Sie die Browser-Kompatibilitätstabellen auf den Referenzseiten für verwandte Features wie {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, und {{cssxref("::checkmark")}} ansehen.

Schauen wir uns alle oben genannten Features in Aktion an, indem wir das Beispiel durchgehen, das oben auf der Seite gezeigt wird.

## Anpassenbare Select-Markup

Unser Beispiel ist ein typisches {{htmlelement("select")}}-Menü, das es Ihnen ermöglicht, ein Haustier auszuwählen. Der Markup ist wie folgt:

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
        <span class="icon" aria-hidden="true">🐱</span>
        <span class="option-label">Cat</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span>
        <span class="option-label">Dog</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span>
        <span class="option-label">Hamster</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span>
        <span class="option-label">Chicken</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span>
        <span class="option-label">Fish</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span>
        <span class="option-label">Snake</span>
      </option>
    </select>
  </p>
</form>
```

> [!NOTE]
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) wird bei den Icons eingetragen, sodass sie vor unterstützenden Technologien verborgen werden und die Optionswerte nicht doppelt angesagt werden (beispielsweise "Katze Katze").

Der Beispiel-Markup ist fast derselbe wie der "klassische" `<select>`-Markup, mit den folgenden Unterschieden:

- Die `<button><selectedcontent></selectedcontent></button>` Struktur repräsentiert den Select {{htmlelement("button")}}.
  Das Hinzufügen des {{htmlelement("selectedcontent")}}-Elements veranlasst den Browser dazu, den aktuell ausgewählten {{htmlelement("option")}} innerhalb des Buttons zu klonen, den Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassen_des_stylings_der_ausgewählten_option_im_select-button). Wenn diese Struktur nicht in Ihrem Markup enthalten ist, wird der Browser auf die Darstellung des ausgewählten Textes der Option innerhalb des Standardbuttons zurückgreifen, und Sie können es nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte innerhalb des `<button>` einfügen, um was auch immer Sie möchten im geschlossenen `<select>` anzuzeigen, aber seien Sie vorsichtig dabei. Was Sie einfügen, kann den zugänglichen Wert, der für unterstützende Technologien freigelegt wird, für das `<select>`-Element verändern.
- Der Rest des `<select>`-Inhalts stellt das Dropdown-Auswahlfeld dar, das normalerweise auf die `<option>`-Elemente begrenzt ist, die die verschiedenen Auswahlmöglichkeiten im Auswahlfeld darstellen. Sie können auch andere Inhalte im Auswahlfeld einfügen, aber es wird nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einem anpassbaren Select können Sie andere Markup-Strukturen wie Bilder, andere nicht-interaktive textbasierte semantische Elemente und mehr einfügen. Sie können sogar die {{cssxref("::before")}} und {{cssxref("::after")}}-Pseudo-Elemente nutzen, um zusätzlichen Inhalt einzufügen, obwohl zu beachten ist, dass dieser nicht im abschickbaren Wert enthalten sein würde. In unserem Beispiel enthält jede `<option>` zwei {{htmlelement("span")}}-Elemente, die jeweils ein Icon und ein Textlabel enthalten, sodass jedes Element unabhängig gestaltet und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrschichtige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) via JavaScript extrahieren sollte. Der `textContent`-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, {{jsxref("String.prototype.trim", "trim()")}} darauf ausgeführt, und das Ergebnis als `<select>` Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzugreifen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird komplett ignoriert, und der nicht-textbasierte `<option>`-Inhalt wird entfernt, sodass nur der Text-Inhalt übrig bleibt, das Ergebnis bleibt jedoch funktional.

## Einschalten der benutzerdefinierten Select-Darstellung

Um sich für die benutzerdefinierte Select-Funktionalität und minimale Browser-Basisstile zu entscheiden (und die OS-bereitgestellten Stile zu entfernen), müssen sowohl Ihr `<select>`-Element als auch dessen Dropdown-Auswahlfeld (dargestellt durch das `::picker(select)`-Pseudoelement) einen `appearance`-Wert von `base-select` gesetzt haben:

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

Sie können wählen, nur das `<select>`-Element in die neue Funktionalität einzubinden und das Auswahlfeld mit dem standardmäßigen OS-Styling zu belassen, aber in den meisten Fällen möchten Sie beide einbinden. Sie können nicht nur das Auswahlfeld ohne das `<select>`-Element einbinden.

Sobald das getan ist, ergibt sich eine sehr schlichte Darstellung eines `<select>`-Elements:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Jetzt sind Sie frei, dies in jeder gewünschten Weise zu gestalten. Zu Beginn hat das `<select>`-Element benutzerdefinierte {{cssxref("border")}}, {{cssxref("background")}} (das bei {{cssxref(":hover")}} oder {{cssxref(":focus")}} geändert wird), und {{cssxref("padding")}}-Werte gesetzt, plus eine {{cssxref("transition")}}, sodass die Hintergrundveränderung reibungslos animiert wird:

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

Um das Symbol im Select-Button zu stylen — den Pfeil, der nach unten zeigt, wenn das Select geschlossen ist — können Sie es mit dem {{cssxref("::picker-icon")}}-Pseudo-Element anvisieren. Der folgende Code gibt dem Icon eine benutzerdefinierte {{cssxref("color")}} und eine `transition`, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft reibungslos animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Als Nächstes wird `::picker-icon` mit der {{cssxref(":open")}}-Pseudo-Klasse kombiniert — die den Select-Button nur dann anvisiert, wenn das Dropdown-Auswahlfeld geöffnet ist — um dem Icon einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Werfen wir einen Blick auf die bisherige Arbeit — beachten Sie, wie der Auswahlpfeil sich reibungslos um 180 Grad dreht, wenn das `<select>` geöffnet und geschlossen wird:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Auswahlfeldes

Das Dropdown-Auswahlfeld kann mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element anvisiert werden. Wie bereits erwähnt, enthält das Auswahlfeld alles im `<select>`-Element, das nicht der Button und das `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalt.

Das Auswahlfeld ist ein [popover](/de/docs/Web/API/Popover_API). Daher werden beim Öffnen des Auswahlfeldes seine Inhalte (enthalten im `::picker(select)`-Pseudo-Element) in die {{Glossary("top_layer", "Top-Ebene")}} befördert. Dies stellt sicher, dass das Auswahlfeld über anderen Elementen angezeigt wird und sich reibungslos mit anderen Popovers auf der Seite verbindet (z. B. das Schließen nicht zusammenhängender Popovers, die bereits geöffnet sind).

> [!NOTE]
> Das Dropdown-Auswahlfeld des Selects unterliegt ebenfalls dem [Top-Layer-Vorfahren-Abgleichsgrenzenverhalten](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#top-layer_ancestor_matching_boundary). Dies stellt sicher, dass {{cssxref(":hover")}}, {{cssxref(":active")}}, oder {{cssxref(":focus-within")}}-Stile, die auf das `<select>` angewendet werden, nur dann mit den Nachkommen des Auswahlfeldes abgeglichen werden, wenn das Auswahlfeld interagiert wird, nicht mit dem `<select>` selbst.

In unserem Beispiel beginnen wir damit, den Standard-Schwarz{{cssxref("border")}}-Rand des Auswahlfeldes zu entfernen:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> Das Argument, das an das `::picker()`-Pseudo-Element übergeben wird, repräsentiert die Art des Elements, dessen Auswahlfeld Sie anvisieren möchten — in diesem Fall `<select>`-Elemente. Wenn Sie das Auswahlfeld eines spezifischen `<select>`-Elements statt allen auswählen möchten, können Sie das `::picker()`-Pseudo-Element mit einem anderen Selektor kombinieren. Unser Beispiel-`<select>` hat zum Beispiel eine ID von `pet-select`, sodass sein Auswahlfeld exklusiv mit `#pet-select::picker(select) { ... }` angesteuert werden kann.

Nun werden die `<option>`-Elemente gestylt. Sie werden mit [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angeordnet, richten sie alle zum Start des Flex-Containers aus und geben einen `20px` {{cssxref("gap")}} zwischen jedem. Jede `<option>` erhält auch den gleichen {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}}, und {{cssxref("transition")}} wie das `<select>`, um ein einheitliches Erscheinungsbild zu schaffen:

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
> Anpassbare `<select>`-Element `<option>`-Elemente haben standardmäßig `display: flex`, aber es ist in unserem Stylesheet enthalten, um zu verdeutlichen, was passiert.

Als Nächstes wird eine Kombination aus den {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, und {{cssxref(":not()")}}-Pseudo-Klassen verwendet, um eine geeignete {{cssxref("border-radius")}} für das oberste und unterste `<option>`-Element festzulegen und den {{cssxref("border-bottom")}} von allen `<option>`-Elementen zu entfernen — außer dem letzten, um ein unordentliches und doppeltes Aussehen der Ränder zu vermeiden. Wir setzen auch den gleichen `border-radius` auf das äußere `::picker(select)`-Container-Element, damit wir keine hässliche eckige weiße Box um die Optionen erhalten, wenn wir eine andere Hintergrundfarbe auf der Seite festlegen.

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

Dann wird eine andere `background`-Farbe auf die ungeraden `<option>`-Elemente mit {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} gesetzt, um eine Zebra-Streifung zu implementieren, und eine andere `background`-Farbe wird auf die `<option>`-Elemente gesetzt, wenn sie im Fokus sind oder angeklickt werden, um ein nützliches visuelles Highlight während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Abschließend wird für diesen Abschnitt eine größere {{cssxref("font-size")}} auf den `<option>`-Icons gesetzt (enthalten in `<span>`-Elementen mit der Klasse `icon`), um sie zu vergrößern, und die {{cssxref("text-box")}}-Eigenschaft wird verwendet, um einige der störenden Abstände an den blockstartenden und blockendenden Enden der Icon-Emojis zu entfernen, sodass sie besser mit den Textlabels ausgerichtet sind:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel rendert jetzt wie folgt:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen des Stylings der ausgewählten Option im Select-Button

Wenn Sie eine beliebige Haustier-Option aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken — die Haustier-Icons führen dazu, dass der Select-Button an Höhe zunimmt, was auch die Position des Auswahlfeld-Icons verändert, und es gibt keinen Abstand zwischen Icon und Label der Option.

Dies kann behoben werden, indem das Icon ausgeblendet wird, wenn es im `<selectedcontent>` enthalten ist, das den Inhalt der ausgewählten `<option>` darstellt, wie er im Select-Button erscheint. In unserem Beispiel wird es mit {{cssxref("display", "display: none")}} ausgeblendet:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies hat keinen Einfluss auf das Styling der `<option>`-Inhalte, wie sie im Dropdown-Auswahlfeld erscheinen.

## Styling der aktuell ausgewählten Option

Um das aktuell ausgewählte `<option>`-Element zu stylen, wie es im Dropdown-Auswahlfeld erscheint, können Sie es mit der {{cssxref(":checked")}}-Pseudo-Klasse anvisieren. Dies wird verwendet, um die {{cssxref("font-weight")}} des ausgewählten `<option>`-Elements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahlsymbols

Sie haben wahrscheinlich bemerkt, dass, wenn Sie das Auswahlfeld öffnen, um eine Auswahl zu treffen, das aktuell ausgewählte `<option>` ein Häkchen an seinem Inline-Startende hat. Dieses Häkchen kann mit dem {{cssxref("::checkmark")}}-Pseudo-Element angesteuert werden. Beispielsweise möchten Sie dieses Häkchen vielleicht ausblenden (zum Beispiel über `display: none`).

Sie könnten sich jedoch auch entscheiden, etwas Interessanteres damit anzufangen — frühere `<option>`-Elemente wurden horizontal mit Flexbox angeordnet, wobei die Flexelemente an den Beginn der Zeile ausgerichtet wurden. In der untenstehenden Regel wird das Häkchen vom Beginn der Zeile zum Ende verschoben, indem ein {{cssxref("order")}}-Wert gesetzt wird, der größer als `0` ist, und es mit einem `auto`-{{cssxref("margin-left")}}-Wert an das Ende der Zeile ausgerichtet wird (siehe [Ausrichtung und Automargen](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Abschließend wird der Wert der {{cssxref("content")}}-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol anzuzeigen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudo-Elemente sind nicht im Zugänglichkeitsbaum enthalten, sodass jeder generierte {{cssxref("content")}}, der auf ihnen gesetzt wird, nicht von unterstützenden Technologien angesagt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

Sehen wir uns noch einmal an, wie das Beispiel rendert. Der aktualisierte Zustand nach den letzten drei Abschnitten sieht wie folgt aus:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animation des Auswahlfeldes mithilfe von Popover-Zuständen

Der anpassbare `<select>`-Element-Select-`button` und das Dropdown-Auswahlfeld erhalten automatisch eine Invoker/Popover-Beziehung, wie in [Verwenden der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente mit sich; unser Beispiel nutzt die Möglichkeit, zwischen verborgenen und sichtbaren Popover-Zuständen mithilfe von Übergängen zu animieren. Die {{cssxref(":open")}}-Pseudo-Klasse repräsentiert geöffnete Select-Elemente.

Diese Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Animieren von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuallererst wird das Auswahlfeld mit `::picker(select)` ausgewählt und ein {{cssxref("opacity")}}-Wert von `0` sowie ein `transition`-Wert von `all 0.4s allow-discrete` gegeben. Dies bewirkt, dass alle Eigenschaften, deren Wert sich ändert, wenn der Popover-Zustand von verborgen zu sichtbar wechselt, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften beinhaltet `opacity`, umfasst jedoch auch zwei diskrete Eigenschaften, deren Werte von den Standard-Browserstilen gesetzt werden:

- {{cssxref("display")}}
  - : Der `display`-Wert wechselt von `none` zu `block`, wenn der Popover-Zustand von verborgen zu sichtbar wechselt. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- {{cssxref("overlay")}}
  - : Der `overlay`-Wert wechselt von `none` zu `auto`, wenn der Popover-Zustand von verborgen zu sichtbar wechselt, um es in die obere Ebene zu fördern, und dann wieder zurück, wenn es verborgen wird, um es zu entfernen. Dies muss animiert werden, um sicherzustellen, dass die Entfernung des Popovers aus der oberen Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um den Übergang sichtbar zu machen.

> [!NOTE]
> Der Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) ist erforderlich, um diskrete Eigenschaftsanimationen zu ermöglichen.

Als Nächstes wird das Auswahlfeld im sichtbaren Zustand mithilfe von `:open::picker(select)` ausgewählt und ein `opacity`-Wert von `1` gegeben — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
:open::picker(select) {
  opacity: 1;
}
```

Schließlich muss, da das Auswahlfeld beim Übergang zwischen `display: none` zu einem `display`-Wert, der es sichtbar macht, übergeht, der Anfangszustand des Übergangs innerhalb eines {{cssxref("@starting-style")}}-Blocks angegeben werden:

```css live-sample___full-render
@starting-style {
  :open::picker(select) {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um das Auswahlfeld sanft ein- und auszublenden, wenn das `<select>` geöffnet und geschlossen wird.

## Positionieren des Auswahlfeldes mit Anker-Positionierung

Ein anpassbares `<select>`-Element, das aus einem Select-Button und einem Dropdown-Auswahlfeld besteht, hat eine implizite Ankerreferenz, und das Auswahlfeld ist automatisch mit dem Select-Button über [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verknüpft. Das bedeutet, dass keine explizite Zuordnung mithilfe der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften erforderlich ist.

Zusätzlich [stellen die Standard-Browserstile eine Standardposition bereit](/de/docs/Web/CSS/Reference/Selectors/::picker#picker_anchor_positioning), die Sie anpassen können, wie in [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Auswahlfeldes relativ zu seinem Anker festgelegt, indem die {{cssxref("anchor()")}}-Funktion innerhalb seiner {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaftswerte verwendet wird:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Auswahlfeldes immer 1 Pixel unterhalb der unteren Kante des Select-Buttons positioniert ist und die linke Kante des Auswahlfeldes immer `10%` der Breite des Select-Buttons von seiner linken Kante entfernt positioniert ist.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass das Auswahlfeld an das `<select>`-Element gebunden ist, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Auswahlfeldes auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Hauptergebnis des Beispielendes

Nach den letzten beiden Abschnitten wird der final aktualisierte Zustand unseres `<select>` wie folgt gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Styling von Optgroup-Elementen

Das Standardstyling von {{htmlelement("optgroup")}}-Elementen in anpassbaren Selects ist dasselbe wie in klassischen `<select>`-Elementen — fettgedruckt und weniger eingezogen als die enthaltenen Optionen. In anpassbaren Selects verhalten sich Optionsgruppen jedoch genauso wie andere Block-Level-Container und können entsprechend gestylt werden. Zusätzlich ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein leicht anzusteuerendes und zu stylendes Label bereitzustellen. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist, und hat dieselbe Semantik.

Schauen wir uns ein einfaches Beispiel an. Unser HTML sieht so aus:

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

Wir beginnen unser CSS, indem wir die `<optgroup>`-Elemente selbst stylen. Dies sind meist rudimentäre Stile, um die Optionsgruppen-Elemente wie Container für ihre nachfolgenden `<option>`-Elemente aussehen zu lassen. Wir haben ihnen einige {{cssxref("margin-top")}} gegeben, um ein wenig Abstand zwischen jeder Optionsgruppe und zwischen der obersten Optionsgruppe und dem Select-Button zu schaffen.

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

Als Nächstes stylen wir die `<legend>`-Elemente, indem wir den Text zentrieren und etwas Rand hinzufügen, um sie von den Optionen zu trennen.

```css live-sample___optgroup-example
optgroup legend {
  text-align: center;
  margin-bottom: 10px;
}
```

Abschließend stylen wir die `<option>`-Elemente, geben ihnen eine {{cssxref("background")}}-Farbe, etwas {{cssxref("padding")}} und stylen die untere {{cssxref("border-radius")}} des letzten `<option>` in jedem Fall, um es den abgerundeten Ecken des übergeordneten `<optgroup>` anzupassen. Wir implementieren auch eine Zebra-Streifung, indem wir den ungeraden Optionen eine andere Hintergrundfarbe geben und einen deutlich unterscheidbaren Hover- und Fokuseffekt auf die Optionen setzen.

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

Wir haben die restlichen Stile aus Gründen der Kürze ausgeblendet.

Das Beispiel wird wie folgt gerendert:

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

## Im Folgenden

Im nächsten Artikel dieses Moduls zeigen wir Ihnen, wie Sie [anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes) stylen können.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}
