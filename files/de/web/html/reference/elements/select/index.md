---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 76936e1d9ff271ac59307a0f858d0d7b57f3866a
---

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element stellt ein Steuerelement dar, das ein Menü mit Optionen bietet.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es wird mit einem `id`-Attribut versehen, um es für Barrierefreiheitszwecke mit einem {{htmlelement("label")}} in Verbindung zu bringen, sowie mit einem `name`-Attribut, um den Namen des zugehörigen Datenpunkts zu repräsentieren, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` geschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, das den zu übermittelnden Datenwert an den Server enthält, wenn diese Option ausgewählt wird. Falls kein `value`-Attribut enthalten ist, entspricht der Wert standardmäßig dem Text, der im Element enthalten ist. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf ein `<option>`-Element setzen, um es standardmäßig auszuwählen, wenn die Seite geladen wird. Falls kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert, und dieses Objekt verfügt über eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Steuerung verwenden können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen auf einmal angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabe-Attribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen schachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele sehen Sie [Die nativen Form-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bietet. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung der Autovervollständigung.
- `autofocus`
  - : Dieses Boolean-Attribut erlaubt es Ihnen anzugeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, z.B. {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt, ist die Steuerung aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` assoziiert werden soll (dessen _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahren `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente überall im Dokument mit `<form>`-Formularen zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolean-Attribut zeigt an, dass im Listenfeld mehrere Optionen ausgewählt werden können. Falls es nicht angegeben wird, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser eine Liste mit Scrollfunktion anstelle eines einzeiligen Dropdowns an. Mehrere ausgewählte Optionen werden im URLSearchParams-Array-Konvention übermittelt, z.B. `name=value1&name=value2`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolean-Attribut, das anzeigt, dass eine Option mit einem nicht leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Wenn die Steuerung als Liste mit Scrollfunktion präsentiert wird (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der in der Liste sichtbaren Zeilen gleichzeitig. Browser sind nicht verpflichtet, ein Select-Element als gescrollte Liste darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; jedoch wurde in der Praxis festgestellt, dass dies einige Websites bricht, und kein anderer Browser unterstützt dies derzeit, daher hat sich Mozilla entschieden, vorerst weiterhin `0` in Firefox zurückzugeben.

## Anmerkungen zur Benutzung

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die Tasten <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalt</kbd> (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) gedrückt halten und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur, der im Folgenden beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die Kürzel <kbd>Strg</kbd> + <kbd>Hoch</kbd> und <kbd>Strg</kbd> + <kbd>Runter</kbd> im Konflikt mit den Standardkürzeln des Betriebssystems für _Mission Control_ und _Anwendungsfenster_, daher müssen diese deaktiviert werden, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Auf das `<select>`-Element fokussieren (z.B. mit <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Ende des Bereichs auswählen, den sie auswählen möchten, indem sie die Tasten <kbd>Hoch</kbd> und <kbd>Runter</kbd> verwenden, um die Optionen hoch und runter zu navigieren.
- Die <kbd>Umschalt</kbd>-Taste gedrückt halten und dann die Tasten <kbd>Hoch</kbd> und <kbd>Runter</kbd> verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Auf das `<select>`-Element fokussieren (z.B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die Tasten <kbd>Hoch</kbd> und <kbd>Runter</kbd> verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption ist mit einer punktierten Umrandung hervorgehoben, ähnlich wie ein mit der Tastatur fokussierter Link.
- Die <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element war historisch schwer effektiv mit CSS zu stylen.
Die folgenden Leitfäden enthalten Informationen über neuere Funktionen, die eingeführt wurden, um vollständig anpassbare Select-Elemente zu ermöglichen:

- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare Select-Listboxes](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Legacy-Select-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in älteren Codebasen, wo sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-Aussehen zu entfernen.

Es ist jedoch schwierig, mit traditionellen `<select>`-Elementen ein konsistentes Ergebnis über Browser hinweg zu erzielen. Wenn Sie die volle Kontrolle haben möchten, sollten Sie in Erwägung ziehen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Form-Widgets zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im geöffneten Zustand zu stylen, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (solche mit dem Attribute [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)) — sie neigen dazu, als scrollbare Liste anstelle eines Dropdowns dargestellt zu werden und haben daher keinen offenen Zustand.

Für weitere Informationen zum Legacy-Select-Styling siehe:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht im Barrierefreiheitsbaum dargestellt werden und somit nicht für unterstützende Technologien sichtbar sind.

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

### Select mit Gruppierungsoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung unter Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown-Menü zu verstehen.

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

### Fortgeschrittenes Select mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt weitere Funktionen, die Sie bei einem `<select>`-Element verwenden können:

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

- Mehrere Optionen auswählbar sind, da wir das `multiple`-Attribut hinzugefügt haben.
- Das `size`-Attribut bewirkt, dass zu einem Zeitpunkt nur 4 Zeilen angezeigt werden; Sie können scrollen, um alle Optionen zu sehen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, ihre Visualisierung besteht im Allgemeinen darin, dass der Gruppenname fett formatiert und die Optionen eingerückt sind.
- Die Option "Hamster" enthält ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Wortlautinhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgef&uuml;hrt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zur&uuml;cksetzbar</a
        > und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >einreichbar</a
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
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}}-Elemente in traditionellen <code>&lt;select&gt;</code>-Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a>:
        <ul>
        <li>Der Select-{{htmlelement("button")}} wird optional als Kind <code>&lt;button&gt;</code>-Element mit einem geschachtelten {{htmlelement("selectedcontent")}}-Element eingeschlossen.</li>
        <li>Der Dropdown-Selektor ist als jeder andere Inhalt definiert, der null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}}-Elemente enthalten kann.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Wortlautinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
