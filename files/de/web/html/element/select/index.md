---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<select>`**-[HTML](/de/docs/Web/HTML)-Element stellt ein Steuerelement dar, das ein Menü von Optionen bietet.

{{InteractiveExample("HTML Demo: &lt;select&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">Choose a pet:</label>

<select name="pets" id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
```

```css interactive-example
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

Das obige Beispiel zeigt eine typische Verwendung von `<select>`. Es wird mit einem `id`-Attribut versehen, um es zwecks Barrierefreiheit mit einem {{htmlelement("label")}} zu verknüpfen, sowie mit einem `name`-Attribut, um den Namen des zugehörigen Datenpunkts zu repräsentieren, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut haben, das den Datenwert enthält, der an den Server übermittelt werden soll, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den Text innerhalb des Elements festgelegt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut in einem `<option>`-Element einschließen, damit es standardmäßig ausgewählt ist, wenn die Seite zum ersten Mal geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element verfügt über einige spezielle Attribute, die Sie zur Steuerung verwenden können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können weitere {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Pause zwischen Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für ein {{Glossary("user_agent", "User-Agent")}}-Autocomplete-Feature bereitstellt. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularsteuerelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, wird die Einstellung des Steuerelements vom umschließenden Element geerbt, zum Beispiel {{htmlelement("fieldset")}}; wenn es kein umschließendes Element mit gesetztem `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verknüpft ist (dessen _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahr-`<form>`-Element verknüpft, sofern vorhanden.)

    Mit diesem Attribut können Sie `<select>`-Elemente mit `<form>`-Elementen überall im Dokument verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option auf einmal ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein rollbares Listenfeld anstelle eines Dropdowns mit einer Zeile an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das angibt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als ein rollbares Listenfeld dargestellt wird (z. B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Reihen in der Liste, die gleichzeitig sichtbar sein soll. Browser sind nicht verpflichtet, ein Select-Element als ein rollbares Listenfeld darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; jedoch hat sich in der Praxis gezeigt, dass dies einige Websites kaputt macht, und kein anderer Browser tut dies derzeit, daher hat sich Mozilla entschieden, vorerst in Firefox weiterhin `0` zurückzugeben.

## Verwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es verschiedene Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd>- oder <kbd>Umschalttaste</kbd> gedrückt halten (je nachdem, was für Ihr Betriebssystem sinnvoll ist) und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS widersprechen die <kbd>Strg</kbd> + <kbd>Pfeil nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Pfeil nach unten</kbd>-Tastenkombinationen den standardmäßigen OS-Tastenkombinationen für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Ende der Auswahlreihe auswählen, die sie auswählen möchten, indem sie die <kbd>Pfeil nach oben</kbd>- und <kbd>Pfeil nach unten</kbd>-Tasten verwenden, um die Optionen nach oben und unten zu bewegen.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die <kbd>Pfeil nach oben</kbd>- und <kbd>Pfeil nach unten</kbd>-Tasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Pfeil nach oben</kbd>- und <kbd>Pfeil nach unten</kbd>-Tasten verwenden, um die "fokussierte" Auswahloption zu ändern, d. h. diejenige, die ausgewählt wird, falls Sie sich dazu entscheiden. Die "fokussierte" Auswahloption ist mit einer gestrichelten Umrandung hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- Die <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element erweist sich als notorisch schwierig, produktiv mit CSS zu stylen. Sie können bestimmte Aspekte wie bei jedem Element beeinflussen — zum Beispiel durch Manipulation des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/CSS_fonts) usw., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemaussehen zu entfernen.

Diese Eigenschaften führen jedoch nicht zu einer konsistenten Darstellung in verschiedenen Browsern, und es ist schwierig, Elemente wie verschiedene Typen von Formularelementen in einer Spalte aneinander auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu steuern. Wenn Sie vollständige Kontrolle haben möchten, sollten Sie erwägen, eine Bibliothek mit guten Möglichkeiten zum Styling von Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-sematischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zur Bereitstellung von Semantik zu erstellen.

Sie können auch die {{cssxref(":open")}}-Pseudoklasse verwenden, um ein `<select>`-Element zu stylen, wenn es geöffnet ist, d. h., wenn die Liste der Dropdown-Optionen angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (diejenigen mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut), da sie in der Regel als rollbare Listenfelder dargestellt werden, anstatt als Dropdowns, und daher keinen geöffneten Zustand haben.

Für nützlichere Informationen zum Styling von `<select>` siehe:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Barrierefreiheitsbaums sichtbar sind und daher nicht für unterstützende Technologien zugänglich sind.

## Beispiele

### Einfaches Select

Das folgende Beispiel erstellt ein Dropdown-Menü mit drei Werten, wobei die zweite Option standardmäßig ausgewählt ist.

```html
<!-- The second value will be selected initially -->
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

#### Ergebnis

{{EmbedLiveSample("Basic_select", "", "100")}}

### Select mit Gruppenoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung durch Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown zu verstehen.

```html
<label for="hr-select">Your favorite food</label> <br />

<select name="foods" id="hr-select">
  <option value="">Choose a food</option>
  <hr />
  <optgroup label="Fruit">
    <option value="apple">Apples</option>
    <option value="banana">Bananas</option>
    <option value="cherry">Cherries</option>
    <option value="damson">Damsons</option>
  </optgroup>
  <hr />
  <optgroup label="Vegetables">
    <option value="artichoke">Artichokes</option>
    <option value="broccoli">Broccoli</option>
    <option value="cabbage">Cabbages</option>
  </optgroup>
  <hr />
  <optgroup label="Meat">
    <option value="beef">Beef</option>
    <option value="chicken">Chicken</option>
    <option value="pork">Pork</option>
  </optgroup>
  <hr />
  <optgroup label="Fish">
    <option value="cod">Cod</option>
    <option value="haddock">Haddock</option>
    <option value="salmon">Salmon</option>
    <option value="turbot">Turbot</option>
  </optgroup>
</select>
```

#### Ergebnis

{{EmbedLiveSample("select_with_grouping_options", "", "100")}}

### Erweitertes Select mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt mehr Funktionen, die Sie bei einem `<select>`-Element verwenden können:

```html
<label>
  Please choose one or more pets:
  <select name="pets" multiple size="4">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
```

#### Ergebnis

{{EmbedLiveSample("Advanced_select_with_multiple_features", "", "100")}}

Sie werden sehen, dass:

- Mehrere Optionen auswählbar sind, weil wir das `multiple`-Attribut enthalten haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir {{htmlelement("optgroup")}}-Elemente eingefügt haben, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Visualisierung im Allgemeinen darin besteht, dass der Gruppenname fettgedruckt wird und die Optionen eingerückt werden.
- Die "Hamster"-Option ein `disabled`-Attribut enthält und daher überhaupt nicht ausgewählt werden kann.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >formular-assoziiertes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}} oder {{HTMLElement("hr")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, andernfalls keine
        <code>role</code> erlaubt
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Von `<select>` ausgelöste Ereignisse: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
