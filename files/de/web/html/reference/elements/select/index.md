---
title: "<select>: Das HTML-Auswahl-Element"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element stellt eine Steuerung dar, die ein Menü von Optionen bereitstellt.

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

Das obige Beispiel zeigt eine typische Verwendung von `<select>`. Es erhält ein `id`-Attribut, um es für Barrierefreiheitszwecke mit einem {{htmlelement("label")}} zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts darzustellen, der an den Server übertragen wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>`-Elements verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut haben, das den Datenwert enthält, der an den Server übertragen wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, ist der Standardwert der Text, der innerhalb des Elements enthalten ist. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf ein `<option>`-Element setzen, um es standardmäßig ausgewählt zu machen, wenn die Seite zum ersten Mal geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element automatisch ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert, das eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft hat, welche den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, mit denen Sie es steuern können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabe-Attribute, wie `required`, `disabled`, `autofocus`, usw.

Sie können weiter {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "Benutzeragenten")}} bereitstellt. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details, wie das Autocomplete verwendet wird.
- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen, anzugeben, dass eine Formularsteuerung den Eingabefokus erhalten soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, übernimmt die Steuerung die Einstellung des umgebenden Elements, beispielsweise {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit dem Attribut `disabled` gibt, ist die Steuerung aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, das mit dem `<select>` verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>`-Elements im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahren `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses boolesche Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein Roll-Feld anstelle eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung festzulegen.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein boolesches Attribut, das angibt, dass eine Option mit einem nicht-leeren Zeichenfolgenwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Wenn die Steuerung als Roll-Feld dargestellt wird (z. B. wenn `multiple` angegeben ist), stellt dieses Attribut die Anzahl der Zeilen in der Liste dar, die gleichzeitig sichtbar sein sollten. Browser sind nicht verpflichtet, ein Auswahl-Element als Roll-Feld anzuzeigen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; in der Praxis hat sich jedoch gezeigt, dass dies einige Websites beeinträchtigt und kein anderer Browser dies derzeit tut. Daher hat Mozilla entschieden, vorerst `0` zurückzugeben, wenn Firefox verwendet wird.

## Verwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, um in einem `<select>`-Element mit einem `multiple`-Attribut mehrere Optionen auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Shift</kbd>-Tasten halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zur Auswahl mehrerer nicht zusammenhängender Einträge über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die <kbd>Strg</kbd> + <kbd>Pfeil nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Pfeil nach unten</kbd>-Tastenkombinationen in Konflikt mit den OS-Standardeinstellungen für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Einträge auswählen, indem sie:

- Auf das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Einen Eintrag oben oder unten im Bereich auswählen, den sie auswählen möchten, indem sie die <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd>-Tasten verwenden, um nach oben und unten durch die Optionen zu navigieren.
- Die <kbd>Shift</kbd>-Taste gedrückt halten und dann die <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd>-Tasten verwenden, um den Bereich der ausgewählten Einträge zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Einträge auswählen, indem sie:

- Auf das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd>-Tasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. die Option, die ausgewählt wird, wenn Sie dies tun möchten. Die "fokussierte" Auswahloption wird mit einer gepunkteten Umrandung hervorgehoben, ähnlich wie ein über die Tastatur fokussierter Link.
- Die <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element war historisch gesehen berüchtigt schwer produktiv mit CSS zu gestalten, daher wurden Funktionen eingeführt, um die Erstellung von [vollständig anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu ermöglichen.

### Altes Auswahl-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder Legacy-Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/CSS_fonts), usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das Standard-Systemaussehen zu entfernen.

Es ist jedoch schwierig, mit traditionellen `<select>`-Elementen ein konsistentes Ergebnis in allen Browsern zu erzielen. Wenn Sie die volle Kontrolle haben möchten, sollten Sie in Erwägung ziehen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets zu verwenden, oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudo-Klasse verwenden, um `<select>`-Elemente im offenen Zustand zu stylen, also wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (die mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut versehen sind) — sie tendieren dazu, als Roll-Feld statt als Dropdown angezeigt zu werden, und haben daher keinen offenen Zustand.

Für mehr Informationen zum alten `<select>`-Styling siehe:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht innerhalb des Zugangsbaumes verfügbar ist und daher nicht für unterstützende Technologien verfügbar ist.

## Beispiele

### Grundlegendes Auswahl-Element

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

### Auswahl mit gruppierten Optionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung mithilfe von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown zu verstehen.

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

### Fortgeschrittene Auswahl mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt mehr Funktionen, die Sie auf einem `<select>`-Element verwenden können:

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

- Mehrere Optionen auswählbar sind, da wir das `multiple`-Attribut eingeschlossen haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzusehen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingeschlossen, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Visualisierung im Allgemeinen darin besteht, dass der Gruppenname fett angezeigt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option enthält ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktive Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übertragbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}} Elemente in traditionellen <code>&lt;select&gt;</code>-Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elementen</a>:
        <ul>
        <li>Das Auswahl {{htmlelement("button")}}-Element wird optional als untergeordnetes <code>&lt;button&gt;</code>-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element eingeschlossen.</li>
        <li>Der Dropdown-Picker wird wie jeder andere Inhalt definiert, welcher null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}} enthalten kann.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, ansonsten keine
        <code>role</code> erlaubt
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignisse, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
