---
title: "<select>: Das HTML-Auswahlelement"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 2362f25e1ccee7ad584584ab3521f3ff34a3e6ed
---

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element stellt eine Steuerung dar, die ein Menü von Optionen bietet.

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

Das obige Beispiel zeigt eine typische Verwendung von `<select>`. Es hat ein `id`-Attribut, um es mit einem {{htmlelement("label")}} zu assoziieren, um die Zugänglichkeit zu verbessern, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunktes, der an den Server gesendet wird, darzustellen. Jede Menüoption wird durch ein verschachteltes {{htmlelement("option")}}-Element innerhalb von `<select>` definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, das den Datenwert angibt, der an den Server gesendet wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den Text im Element selbst gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut in einem `<option>`-Element einfügen, um es beim ersten Laden der Seite standardmäßig auszuwählen. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Steuerung verwenden können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen auf einmal angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabe-Attribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiter {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Separatoren zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Weitere Beispiele finden Sie unter [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, das einen Hinweis für die Autocomplete-Funktion eines {{Glossary("user_agent", "User-Agents")}} bietet. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste von Werten und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, zum Beispiel {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt, ist die Steuerung aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, das dem `<select>` zugeordnet ist (sein _Formular-Besitzer_). Der Wert dieses Attributs muss das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einer `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` seinem übergeordneten `<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente überall im Dokument `<form>`-Elementen zuzuordnen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolean-Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht spezifiziert ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser stattdessen ein scrollbares Listenfeld anstelle eines einzeiligen Dropdowns an. Mehrfach ausgewählte Optionen werden unter Verwendung des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Array-Konvents übermittelt, d.h. `name=value1&name=value2`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren Zeichenfolgenwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Wenn die Steuerung als scrollbares Listenfeld dargestellt wird (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die auf einmal sichtbar sein sollen. Browser sind nicht verpflichtet, ein Auswahlfeld als scrollbare Listenbox darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; in der Praxis wurde jedoch festgestellt, dass dies einige Websites beeinträchtigt, und kein anderer Browser tut dies derzeit, daher hat sich Mozilla entschieden, vorerst weiterhin `0` in Firefox zu verwenden.

## Verwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, um in einem `<select>`-Element mit einem `multiple`-Attribut mehrere Optionen auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Umschalt</kbd>-Tasten gedrückt halten (je nachdem, was für Ihr Betriebssystem sinnvoll ist), und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die Tastenkombinationen <kbd>Strg</kbd> + <kbd>Nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Nach unten</kbd> in Konflikt mit den Standardeinstellungen des Betriebssystems für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen durch:

- Fokussieren des `<select>`-Elements (z.B. mit <kbd>Tab</kbd>).
- Auswählen eines Elements am oberen oder unteren Ende des Bereichs, den sie auswählen möchten, mit den Tasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>, um durch die Optionen zu navigieren.
- Gedrückt halten der <kbd>Umschalt</kbd>-Taste und dann Verwenden der Tasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>, um den Bereich der ausgewählten Elemente zu erweitern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen durch:

- Fokussieren des `<select>`-Elements (z.B. mit <kbd>Tab</kbd>).
- Gedrückt halten der <kbd>Strg</kbd>-Taste und dann Verwenden der Tasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>, um die "fokussierte" Auswahlauswahl zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie dies wählen. Die "fokussierte" Auswahlauswahl ist mit einer gepunkteten Umrandung hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- Drücken von <kbd>Leertaste</kbd>, um "fokussierte" Auswahlauswahlen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element war historisch gesehen schwierig, effektiv mit CSS zu gestalten.
Die folgenden Leitfäden bieten Informationen über Funktionen, die vollständig anpassbare Auswahl-Elemente ermöglichen:

- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare Auswahl-Listenfelder](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Veraltetes Auswahl-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in Legacy-Codebasen, wo sie nicht genutzt werden können), sind Sie darauf beschränkt, das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. zu manipulieren. Sie können auch die Eigenschaft {{cssxref("appearance")}} verwenden, um das Standard-Systemerscheinungsbild zu entfernen.

Es ist jedoch schwierig, ein konsistentes Ergebnis über verschiedene Browser hinweg mit traditionellen `<select>`-Elementen zu erzielen. Wenn Sie volle Kontrolle haben möchten, sollten Sie in Erwägung ziehen, eine Bibliothek mit guten Einrichtungen für das Styling von Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-sematischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die Pseudoklasse {{cssxref(":open")}} verwenden, um `<select>`-Elemente im geöffneten Zustand zu stylen, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (diejenigen mit gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut) — diese werden in der Regel als scrollbare Listenbox angezeigt und haben daher keinen offenen Zustand.

Für weitere Informationen zum Styling von veralteten `<select>`-Elementen siehe:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht im Zugänglichkeitsbaum exponiert und daher nicht für assistive Technologien zugänglich ist.

## Beispiele

### Basis-Auswahl

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

### Auswahl mit Gruppenoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppenbildung unter Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um dem Benutzer das Verständnis des Inhalts im Dropdown-Menü zu erleichtern.

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

### Erweiterte Auswahl mit mehreren Funktionen

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

Sie werden sehen:

- Mehrere Optionen sind auswählbar, da wir das `multiple`-Attribut aufgenommen haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen zu sehen.
- Wir haben {{htmlelement("optgroup")}}-Elemente aufgenommen, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, die Visualisierung besteht in der Regel darin, dass der Gruppenname fett gedruckt wird und die Optionen eingezogen sind.
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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
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
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}}-Elemente in traditionellen <code>&lt;select&gt;</code>-Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elementen</a>:
        <ul>
        <li>Das selektierende {{htmlelement("button")}} wird optional als untergeordnetes <code>&lt;button&gt;</code>-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element aufgenommen.</li>
        <li>Der Dropdown-Picker ist wie jeder andere Inhalt definiert und kann null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}}-Elemente enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne <code>multiple</code>-Attribut und ohne <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <code>multiple</code>-Attribut und ohne <code>size</code>-Attribut größer als 1, ansonsten keine
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
