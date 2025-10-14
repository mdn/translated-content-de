---
title: Anpassbare Auswahlelemente
short-title: Anpassbare Auswahlen
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: b847909e54b1d39171e52667b79dab19b54fa441
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel erklärt, wie vollständig anpassbare `<select>`-Elemente mit experimentellen Browser-Features erstellt werden können. Dies umfasst die vollständige Kontrolle über die Gestaltung des Auswahlknopfes, der Dropdown-Auswahl, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen `<option>`-Elements.

> [!WARNING]
> Die in diesem Artikel gezeigten CSS- und HTML-Features haben derzeit begrenzte Browser-Unterstützung; überprüfen Sie die Tabellen zur Browser-Kompatibilität auf den einzelnen Funktionsreferenzseiten für weitere Details. Einige JavaScript-Frameworks blockieren diese Funktionen; in anderen verursachen sie Fehler bei der Hydratation, wenn Server-Side Rendering (SSR) aktiviert ist.

## Hintergrund

Traditionell war es schwierig, das Aussehen von `<select>`-Elementen anzupassen, da sie interne Elemente enthalten, die auf Betriebssystemebene gestaltet sind und die mit CSS nicht gezielt angesprochen werden können. Dazu gehören die Dropdown-Auswahl, das Pfeilsymbol usw.

Bisher war die beste verfügbare Option – abgesehen von der Verwendung einer benutzerdefinierten JavaScript-Bibliothek – den `appearance`-Wert auf `none` für das `<select>`-Element zu setzen, um einige der OS-Level-Styling zu entfernen und dann CSS zu verwenden, um die Teile anzupassen, die gestylt werden können. Diese Technik wird im [Leitfaden für fortgeschrittenes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) erklärt.

Anpassbare `<select>`-Elemente bieten eine Lösung für diese Probleme. Sie ermöglichen es, Beispiele wie das folgende zu erstellen, die in unterstützenden Browsern vollständig angepasst sind und nur HTML und CSS verwenden. Dies umfasst `<select>`- und Dropdown-Layouts, Farbschemata, Symbole, Schriftarten, Übergänge, Positionierung, Markierungen zur Anzeige des ausgewählten Symbols und mehr.

{{EmbedLiveSample("full-render", "100%", "410px")}}

Darüber hinaus bieten sie eine progressive Verbesserung der bestehenden Funktionalität und fallen in nicht unterstützenden Browsern auf "klassische" Auswahlen zurück.

Im Folgenden erfahren Sie, wie Sie dieses Beispiel erstellen können.

## Welche Features umfassen eine anpassbare Auswahl?

Sie können anpassbare `<select>`-Elemente mit den folgenden HTML- und CSS-Features erstellen:

- Herkömmliche `<select>`, `<option>` und `<optgroup>`-Elemente. Diese funktionieren genauso wie in "klassischen" Auswahlen, mit der Ausnahme, dass sie zusätzliche zulässige Inhaltstypen haben.
- Ein `<button>`-Element, das als erstes Kind im `<select>`-Element enthalten ist, was zuvor in "klassischen" Auswahlen nicht erlaubt war. Wenn es enthalten ist, ersetzt es die standardmäßige "Button"-Darstellung des geschlossenen `<select>`-Elements. Dies wird allgemein als **Auswahlknopf** bezeichnet (da es sich um den Knopf handelt, den Sie drücken müssen, um die Dropdown-Auswahl zu öffnen).
  > [!NOTE]
  > Der Auswahlknopf ist standardmäßig [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert), sodass, wenn interaktive Kinder (z. B. Links oder Knöpfe) darin enthalten sind, er immer noch als einzelner Knopf für Interaktionszwecke behandelt wird – beispielsweise sind die Kinder-Elemente nicht fokussierbar oder anklickbar.
- Das `<selectedcontent>`-Element kann optional im ersten Kind des `<select>`-Elements `<button>` enthalten sein, um den aktuell ausgewählten Wert im _geschlossenen_ `<select>`-Element anzuzeigen. Dies enthält einen Klon des aktuell ausgewählten `<option>`-Elementinhalts (erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund).
- Das `::picker()`-Pseudo-Element, das den gesamten Inhalt der Auswahl anspricht. Dazu gehören alle Elemente im `<select>`-Element, mit Ausnahme des ersten Kindes `<button>`.
- Der `appearance`-Eigenschaftswert `base-select`, der das `<select>`-Element und das `::picker(select)`-Pseudo-Element in die browserdefinierten Standardstile und das Verhalten für anpassbare Auswahlen einbezieht.
- Die `:open`-Pseudo-Klasse, die den Auswahlknopf anspricht, wenn der Picker (`::picker(select)`) geöffnet ist.
- Das `::picker-icon`-Pseudo-Element, das das Symbol im Auswahlknopf anspricht – der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- Die `:checked`-Pseudo-Klasse, die das aktuell ausgewählte `<option>`-Element anspricht.
- Das `::checkmark`-Pseudo-Element, das das Häkchen im aktuell ausgewählten `<option>`-Element anspricht, um eine visuelle Anzeige zu geben, welches ausgewählt ist.

Darüber hinaus haben das `<select>`-Element und seine Dropdown-Auswahl das folgende Verhalten, das ihnen automatisch zugewiesen wird:

- Sie haben eine Aufrufer/Popover-Beziehung, wie sie durch die [Popover-API](/de/docs/Web/API/Popover_API) spezifiziert wird, die die Fähigkeit bietet, den Picker offen über die `:popover-open`-Pseudo-Klasse auszuwählen. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten.
- Sie haben eine implizite Ankerreferenz, was bedeutet, dass der Picker automatisch mit dem `<select>`-Element über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verknüpft wird. Die browserdefinierten Standardstile positionieren den Picker relativ zum Knopf (dem Anker), und Sie können diese Position anpassen, wie im [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Die browserdefinierten Standardstile definieren auch einige Fallback-Positionen, die den Picker neu positionieren, falls er Gefahr läuft, den Ansichtsbereich zu überlaufen. Fallback-Positionen werden in [Umgang mit Überlauf: Fallback-Positionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt.

> [!NOTE]
> Sie können die Browser-Unterstützung für anpassbare `<select>` prüfen, indem Sie die Tabellen zur Browser-Kompatibilität auf den Referenzseiten für verwandte Funktionen wie `<selectedcontent>`, `::picker(select)` und `::checkmark` aufrufen.

Schauen wir uns alle oben genannten Features in Aktion an, indem wir das am Anfang der Seite gezeigte Beispiel durchgehen.

## Anpassbare Auswahl-Markup

Unser Beispiel ist ein typisches `<select>`-Menü, mit dem Sie ein Haustier auswählen können. Das Markup sieht folgendermaßen aus:

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
> Das Attribut [`aria-hidden="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) ist bei den Symbolen enthalten, damit sie vor unterstützenden Technologien verborgen bleiben, um zu vermeiden, dass die Optionen doppelt angesagt werden (zum Beispiel "Katze Katze").

Das Beispiel-Markup ist fast dasselbe wie das "klassische" `<select>`-Markup, mit den folgenden Unterschieden:

- Die Struktur `<button><selectedcontent></selectedcontent></button>` stellt den Auswahl-`<button>` dar. Das Hinzufügen des `<selectedcontent>`-Elements veranlasst den Browser, das aktuell ausgewählte `<option>` im Knopf zu klonen, den Sie dann [mit benutzerdefinierten Stilen versehen können](#anpassen_der_stile_des_ausgewählten_option-inhalts_innerhalb_des_auswahlknopfes). Wenn diese Struktur in Ihrem Markup nicht enthalten ist, fällt der Browser zurück auf die Darstellung des ausgewählten Options-Texts im Standardknopf, und Sie können diesen nicht so einfach stylen.
  > [!NOTE]
  > Sie _können_ beliebige Inhalte im `<button>` hinzufügen, um in der geschlossenen `<select>` anzuzeigen, was Sie möchten, seien Sie jedoch vorsichtig dabei. Was Sie einschließen, kann den zugänglichen Wert beeinflussen, der unterstützenden Technologien für das `<select>`-Element offengelegt wird.
- Der Rest der `<select>`-Inhalte stellt die Dropdown-Auswahl dar, die normalerweise auf die `<option>`-Elemente beschränkt ist, die die verschiedenen Auswahlmöglichkeiten im Picker darstellen. Sie können weitere Inhalte im Picker einfügen, es wird jedoch nicht empfohlen.
- Traditionell konnten `<option>`-Elemente nur Text enthalten, aber in einer anpassbaren Auswahl können Sie andere Markup-Strukturen wie Bilder, andere nicht interaktive Textebene-Semantikelemente und mehr einfügen. Sie können sogar die `::before`- und `::after`-Pseudo-Elemente verwenden, um anderen Inhalt einzufügen, obwohl Sie bedenken sollten, dass dieser nicht im übermittelbaren Wert enthalten wäre. In unserem Beispiel enthält jede `<option>` zwei `<span>`-Elemente, die jeweils ein Symbol und eine Textbezeichnung enthalten, sodass jedes unabhängig gestylt und positioniert werden kann.

  > [!NOTE]
  > Da der `<option>`-Inhalt mehrstufige DOM-Unterbäume enthalten kann, nicht nur Textknoten, gibt es Regeln, wie der Browser den [aktuellen `<select>`-Wert](/de/docs/Web/API/HTMLSelectElement/value) über JavaScript extrahieren sollte. Der `textContent`-Eigenschaftswert des ausgewählten `<option>`-Elements wird abgerufen, `trim()` wird darauf ausgeführt, und das Ergebnis wird als `<select>`-Wert gesetzt.

Dieses Design ermöglicht es nicht unterstützenden Browsern, auf eine klassische `<select>`-Erfahrung zurückzufallen. Die `<button><selectedcontent></selectedcontent></button>`-Struktur wird völlig ignoriert, und der nicht textuelle `<option>`-Inhalt wird entfernt, sodass nur die Textknoteninhalte übrig bleiben, aber das Ergebnis funktioniert immer noch.

## Opt-in zur benutzerdefinierten Auswahl-Darstellung

Um sich für die benutzerdefinierte Auswahlfunktionalität und die minimalen Browser-Basisstile zu entscheiden (und das von der OS bereitgestellte Styling zu entfernen), müssen sowohl das `<select>`-Element als auch sein Dropdown-Picker (dargestellt durch das `::picker(select)`-Pseudo-Element) einen `appearance`-Wert von `base-select` gesetzt bekommen:

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

Sie können sich dafür entscheiden, nur das `<select>`-Element für die neue Funktionalität zu aktivieren und den Picker mit dem Standard-OS-Styling zu belassen, aber in den meisten Fällen möchten Sie beide aktivieren. Sie können den Picker nicht aktivieren, ohne das `<select>`-Element zu aktivieren.

Sobald dies getan ist, wird das `<select>`-Element sehr schlicht gerendert:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

Sie können dies nun beliebig stylen. Vorläufig hat das `<select>`-Element benutzerdefinierte `border`, `background` (die sich bei `:hover` oder `:focus` ändert) und `padding`-Werte gesetzt, plus eine `transition`, damit sich die Hintergrundänderung reibungslos animiert:

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

Um das Symbol im Auswahlknopf – der Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist – zu stylen, können Sie es mit dem `::picker-icon`-Pseudo-Element ansprechen. Der folgende Code gibt dem Symbol eine benutzerdefinierte `color` und eine `transition`, sodass Änderungen seines `rotate`-Eigenschaftswerts sanft animiert werden:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Anschließend wird `::picker-icon` mit der `:open`-Pseudo-Klasse kombiniert — die den Auswahlknopf nur dann anspricht, wenn der Drop-Down-Picker geöffnet ist — um dem Symbol einen `rotate`-Wert von `180deg` zu geben, wenn das `<select>` geöffnet ist.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Schauen wir uns die bisherige Arbeit an — beachten Sie, wie der Picker-Pfeil sich sanft um 180 Grad dreht, wenn sich das `<select>` öffnet und schließt:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling des Dropdown-Pickers

Der Dropdown-Picker kann mit dem `::picker(select)`-Pseudo-Element angesprochen werden. Wie bereits erwähnt, enthält der Picker alles im `<select>`-Element, was nicht der Button und `<selectedcontent>` ist. In unserem Beispiel bedeutet dies alle `<option>`-Elemente und deren Inhalte.

Zuerst wird die standardmäßige schwarze `border` des Pickers entfernt:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Nun werden die `<option>`-Elemente gestylt. Sie sind mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) layoutiert, wobei sie alle zu Beginn des Flex-Containers ausgerichtet sind und einen `20px`-`gap` zwischen jedem haben. Jede `<option>` erhält außerdem dieselben `border`, `background`, `padding` und `transition` wie das `<select>`, um ein einheitliches Aussehen und Gefühl zu bieten:

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
> Anpassbare `<select>`-Elemente haben standardmäßig `display: flex` für ihre `<option>`s gesetzt, aber es ist dennoch in unserem Stylesheet enthalten, um zu verdeutlichen, was vor sich geht.

Als nächstes wird eine Kombination der `:first-of-type`, `:last-of-type` und `:not()`-Pseudo-Klassen verwendet, um die obersten und untersten `<option>`-Elemente mit einem passenden `border-radius` zu versehen und die `border-bottom` von allen `<option>`-Elementen zu entfernen – außer das letzte, damit die Umrandungen nicht unordentlich und doppelt erscheinen. Wir setzen auch den gleichen `border-radius` auf das äußere `::picker(select)`-Container, sodass wir nicht mit einem unschönen quadratischen weißen Kasten um die Optionen enden, wenn wir entscheiden, eine andere Hintergrundfarbe auf der Seite zu setzen.

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

Als nächstes wird eine andere `background`-Farbe auf die ungeradzahligen `<option>`-Elemente mit `:nth-of-type(odd)` gesetzt, um ein Zebra-Streifenmuster zu implementieren, sowie eine andere `background`-Farbe bei den `<option>`-Elementen in `:focus` und `:hover`, um einen effektiven visuellen Hinweis während der Auswahl zu bieten:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Schließlich wird eine größere `font-size` auf die `<option>`-Symbole (enthalten in `<span>`-Elementen mit einer Klasse von `icon`) gesetzt, um sie größer zu machen, und die `text-box`-Eigenschaft wird verwendet, um einige der störenden Abstände an den Blockanfangs- und Blockend-Kanten der Emoji-Symbole zu entfernen, damit sie besser mit den Textlabels ausgerichtet sind:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Unser Beispiel wird jetzt so gerendert:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Anpassen der Stile des ausgewählten Option-Inhalts innerhalb des Auswahlknopfes

Wenn Sie irgendeine Haustier-Option aus den letzten Live-Beispielen auswählen, werden Sie ein Problem bemerken – die Haustier-Symbole verursachen, dass der Auswahlknopf in der Höhe zunimmt, was auch die Position des Picker-Symbols verändert, und es gibt keinen Abstand zwischen dem Optionssymbol und dem Label.

Dies kann behoben werden, indem das Symbol versteckt wird, wenn es innerhalb von `<selectedcontent>` enthalten ist, was den Inhalt der ausgewählten Option darstellt, wie sie im Auswahlknopf erscheint. In unserem Beispiel wird es mit `display: none` versteckt:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Dies beeinflusst nicht das Styling der Optionsinhalte, wie sie in der Dropdown-Auswahl erscheinen.

## Styling der aktuell ausgewählten Option

Um die aktuell ausgewählte Option zu stylen, wie sie in der Dropdown-Auswahl erscheint, können Sie sie mit der `:checked`-Pseudo-Klasse ansprechen. Diese wird verwendet, um die `font-weight`-Eigenschaft des ausgewählten Optionselements auf `bold` zu setzen:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling des aktuellen Auswahl-Häkchens

Sie haben wahrscheinlich bemerkt, dass, wenn Sie den Picker öffnen, um eine Auswahl zu treffen, die derzeit ausgewählte Option ein Häkchen am Anfang der Zeile besitzt. Dieses Häkchen kann mit dem `::checkmark`-Pseudo-Element angesprochen werden. Beispielsweise könnten Sie dieses Häkchen ausblenden (zum Beispiel über `display: none`).

Sie könnten auch etwas Interessanteres damit machen – zuvor wurden die Optionselemente horizontal mit Flexbox layoutiert, wobei die Flexitems am Anfang der Zeile ausgerichtet waren. In der unten stehenden Regel wird das Häkchen vom Beginn des Zeilenendes bewegt, indem ihm ein `order`-Wert größer als `0` gegeben und es mit einem `auto` `margin-left`-Wert am Zeilenende ausgerichtet wird (siehe [Ausrichtung und automatische Margen](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Schließlich wird der Wert der `content`-Eigenschaft auf ein anderes Emoji gesetzt, um ein anderes Symbol zur Anzeige zu setzen.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Die `::checkmark`- und `::picker-icon`-Pseudo-Elemente werden nicht in den Barrierefreiheitsbaum aufgenommen, sodass generierter `content`, der auf ihnen gesetzt wird, nicht durch unterstützende Technologien angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

Lassen Sie uns noch einmal einchecken, wie das Beispiel gerendert wird. Der aktualisierte Zustand nach den letzten drei Abschnitten sieht folgendermaßen aus:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animieren des Pickers mithilfe von Popover-Zuständen

Der Auswahlknopf und das Dropdown-Element der anpassbaren `<select>`-Elemente erhalten automatisch eine Aufrufer/Popover-Beziehung, wie in [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) beschrieben. Dies bringt viele Vorteile für `<select>`-Elemente; unser Beispiel nutzt die Möglichkeit aus, zwischen den versteckten und angezeigten Popover-Zuständen mit Übergängen zu animieren. Die `:popover-open`-Pseudo-Klasse repräsentiert Popovers im angezeigten Zustand.

Die Technik wird in diesem Abschnitt kurz behandelt — lesen Sie [Animieren von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers) für eine detailliertere Beschreibung.

Zuerst wird der Picker mit `::picker(select)` ausgewählt und erhält einen `opacity`-Wert von `0` und einen `transition`-Wert von `all 0.4s allow-discrete`. Dies bewirkt, dass alle Eigenschaften, die sich beim Wechsel des Popover-Zustands von verborgen zu sichtbar ändern, animiert werden.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

Die Liste der übergangenen Eigenschaften umfasst `opacity`, sie umfasst jedoch auch zwei diskrete Eigenschaften, deren Werte durch die browserdefinierten Standardstile gesetzt werden:

- `display`
  - : Die `display`-Werte ändern sich von `none` zu `block`, wenn sich der Popover-Zustand von verborgen zu sichtbar ändert. Dies muss animiert werden, um sicherzustellen, dass andere Übergänge sichtbar sind.
- `overlay`
  - : Der Wert von `overlay` ändert sich von `none` zu `auto`, wenn sich der Popover-Zustand von verborgen zu sichtbar ändert, um ihn auf die {{Glossary("top_layer", "Top-Schicht")}} zu heben, und dann wieder zurück, wenn er verborgen ist, um ihn zu entfernen. Dies muss animiert werden, um sicherzustellen, dass das Entfernen des Popovers aus der oberen Schicht bis zum Abschluss des Übergangs aufgeschoben wird, um sicherzustellen, dass der Übergang sichtbar ist.

> [!NOTE]
> Der Wert `allow-discrete` ist erforderlich, um diskrete Eigenschaftsanimationen zu aktivieren.

Als Nächstes wird der Picker im angezeigten Zustand mit `::picker(select):popover-open` ausgewählt und erhält einen `opacity`-Wert von `1` — dies ist der Endzustand des Übergangs:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Schließlich muss, da der Picker während des Übergangs von `display: none` zu einem `display`-Wert, der ihn sichtbar macht, animiert wird, der Startzustand des Übergangs in einem `@starting-style`-Block spezifiziert werden:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Diese Regeln arbeiten zusammen, um den Picker beim Öffnen und Schließen der `<select>`-Elemente sanft ein- und ausblenden zu lassen.

## Positionieren des Pickers mithilfe der Ankerpositionierung

Der Auswahlknopf und der Dropdown-Picker eines anpassbaren `<select>`-Elements haben eine implizite Ankerreferenz, und der Picker wird automatisch über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) mit dem Auswahlknopf verknüpft. Dies bedeutet, dass keine explizite Verknüpfung mit den Eigenschaften `anchor-name` und `position-anchor` hergestellt werden muss.

Außerdem bieten die [Standardstile des Browsers eine Standardposition](/de/docs/Web/CSS/::picker#picker_anchor_positioning), die Sie anpassen können, wie im [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt.

In unserem Demo wird die Position des Pickers relativ zu seinem Anker durch die Verwendung der `anchor()`-Funktion in den Eigenschaftswerten `top` und `left` festgelegt:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Dies führt dazu, dass die obere Kante des Pickers immer 1 Pixel unterhalb der unteren Kante des Auswahlknopfs positioniert ist, und die linke Kante des Pickers immer `10%` der Breite des Auswahlknopfs vom linken Rand entfernt positioniert ist.

## Endergebnis

Nach den letzten beiden Abschnitten wird der endgültig aktualisierte Zustand unseres `<select>` so gerendert:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Anpassen anderer klassischer Auswahl-Features

Die obigen Abschnitte haben alle neuen Funktionen behandelt, die in anpassbaren Auswahlen verfügbar sind und gezeigt, wie sie mit sowohl klassischen einzeiligen Auswahlen als auch verwandten modernen Features wie Popovers und Ankerpositionierung interagieren. Es gibt einige andere `<select>`-Elementfunktionen, die oben nicht erwähnt wurden; dieser Abschnitt beschreibt, wie sie derzeit neben anpassbaren Auswahlen arbeiten:

- `<select multiple>`
  - : Es ist derzeit keine Unterstützung für das `multiple`-Attribut bei anpassbaren `<select>`-Elementen spezifiziert, aber daran wird in Zukunft gearbeitet.
- `<optgroup>`
  - : Die Standard-Styling von `<optgroup>`-Elementen ist dasselbe wie in klassischen `<select>`-Elementen — fettgedruckt und weniger eingezogen als die enthaltenen Optionen. Sie müssen sicherstellen, dass Sie die `<optgroup>`-Elemente so stylen, dass sie sich in das Gesamtdesign einfügen, und bedenken, dass sie sich genauso verhalten, wie Container es in herkömmlichem HTML erwarten. In anpassbaren `<select>`-Elementen ist das `<legend>`-Element als Kind von `<optgroup>` erlaubt, um eine leicht anpassbare Beschriftung zu bieten. Dies ersetzt jeden im `label`-Attribut des `<optgroup>`-Elements gesetzten Text und hat die gleichen Semantiken.

## Nächstes Kapitel

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die in modernen Browsern verfügbar sind, um Formulare in verschiedenen Zuständen zu stylen.

## Siehe auch

- `<select>`, `<option>`, `<optgroup>`, `<label>`, `<button>`, `<selectedcontent>`
- `appearance`
- `::picker(select)`, `::picker-icon`, `::checkmark`
- `:open`, `:checked`

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
