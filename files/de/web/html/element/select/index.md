---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein Steuerelement, das ein Menü von Optionen bietet.

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

Das obige Beispiel zeigt eine typische Verwendung von `<select>`. Es hat ein `id` Attribut, um es mit einem {{htmlelement("label")}} für Barrierefreiheitszwecke zu verknüpfen, sowie ein `name` Attribut, um den Namen des zugehörigen Dateneintrags zu repräsentieren, der an den Server gesendet wird. Jede Menüoption wird durch ein {{htmlelement("option")}} Element definiert, das innerhalb von `<select>` verschachtelt ist.

Jedes `<option>` Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value) Attribut enthalten, das den Datenwert enthält, der an den Server gesendet wird, wenn diese Option ausgewählt ist. Wenn kein `value` Attribut enthalten ist, wird der Wert auf den Text innerhalb des Elements zurückgesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut auf einem `<option>` Element einfügen, um es standardmäßig auszuwählen, wenn die Seite erstmals geladen wird. Wenn kein `selected` Attribut angegeben ist, wird das erste `<option>` Element standardmäßig ausgewählt.

Ein `<select>` Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value) Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>` Element hat einige einzigartige Attribute, die Sie verwenden können, um es zu steuern, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabeattribute wie `required`, `disabled`, `autofocus`, usw.

Sie können {{HTMLElement("option")}} Elemente weiter innerhalb von {{HTMLElement("optgroup")}} Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}} Elemente einfügen, um Trennstriche zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formularwidgets: Dropdown-Inhalt](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für das Autocomplete-Feature eines {{Glossary("user_agent", "Benutzeragenten")}} bietet. Siehe [Das HTML autocomplete Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste von Werten und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, festzulegen, dass ein Formularsteuerelement den Eingabefokus hat, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus` Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel {{htmlelement("fieldset")}}; wenn kein umgebendes Element mit gesetztem `disabled` Attribut vorhanden ist, ist das Steuerelement aktiviert.
- `form`

  - : Das {{HTMLElement("form")}} Element, mit dem das `<select>` verknüpft wird (dessen _Formulareigner_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahren `<form>` Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>` Elemente mit `<form>` Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren `<form>` Element außer Kraft setzen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses Boolean-Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein Scrollfeld anstelle eines einzeiligen Dropdowns an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als ein Scrollfeld angezeigt wird (z. B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollen. Browser müssen ein Auswahlelement nicht als Scrollfeld darstellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für size `1` sein; jedoch hat sich gezeigt, dass dies einige Websites beschädigt, und kein anderer Browser tut das derzeit, so dass Mozilla beschlossen hat, vorübergehend weiterhin `0` in Firefox zurückzugeben.

## Verwendungshinweise

### Auswählen mehrerer Optionen

Auf einem Desktop-Computer gibt es eine Reihe von Möglichkeiten, um mehrere Optionen in einem `<select>` Element mit einem `multiple` Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalt</kbd> Tasten gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die <kbd>Strg</kbd> + <kbd>Hoch</kbd> und <kbd>Strg</kbd> + <kbd>Runter</kbd> Tastenkombinationen in Konflikt mit den OS-Standardkürzeln für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor sie funktionieren.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- das `<select>` Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten in dem Bereich auswählen, den sie auswählen möchten, indem sie die <kbd>Hoch</kbd> und <kbd>Runter</kbd> Pfeiltasten verwenden, um die Optionen nach oben und unten zu verschieben.
- Die <kbd>Umschalt</kbd> Taste gedrückt halten und dann die <kbd>Hoch</kbd> und <kbd>Runter</kbd> Pfeiltasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- das `<select>` Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd> Taste gedrückt halten und dann die <kbd>Hoch</kbd> und <kbd>Runter</kbd> Pfeiltasten verwenden, um die „fokussierte“ Auswahloption zu ändern, d.h. die, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die „fokussierte“ Auswahloption wird mit einer gestrichelten Umrandung hervorgehoben, ähnlich wie ein per Tastatur fokussierter Link.
- Die <kbd>Leertaste</kbd> drücken, um „fokussierte“ Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>` Element war historisch gesehen berüchtigt schwer produktiv mit CSS zu stylen, daher wurden Features eingeführt, um das Erstellen von [vollständig konfigurierbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu ermöglichen.

### Legacy-Select-Styling

In Browsern, die die modernen Anpassungsfeatures nicht unterstützen (oder in Legacy-Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/CSS_fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}} Eigenschaft verwenden, um das standardmäßige System-Aussehen zu entfernen.

Es ist jedoch schwierig, ein konsistentes Ergebnis über verschiedene Browser hinweg mit traditionellen `<select>` Elementen zu erzielen. Wenn Sie die volle Kontrolle wünschen, sollten Sie erwägen, eine Bibliothek mit guten Styling-Möglichkeiten für Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-sematischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zur Bereitstellung von Semantik zu erstellen.

Sie können die {{cssxref(":open")}} Pseudo-Klasse verwenden, um `<select>` Elemente im geöffneten Zustand zu stylen, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>` Elemente (die mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut gesetzt sind) — sie werden in der Regel als ein Scrollfeld dargestellt und haben daher keinen geöffneten Zustand.

Für weitere Informationen zum Legacy `<select>` Styling siehe:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}} Eigenschaft, die steuert, wie `<select>` Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Accessibility-Trees exponiert sind und daher nicht für unterstützende Technologien sichtbar sind.

## Beispiele

### Einfaches Select

Das folgende Beispiel erzeugt ein Dropdown-Menü mit drei Werten, wobei die zweite Option standardmäßig ausgewählt ist.

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

### Select mit gruppierten Optionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung, indem {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}} verwendet werden, um dem Benutzer das Verständnis des Inhalts im Dropdown zu erleichtern.

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

Das folgende Beispiel ist komplexer und zeigt mehr Funktionen, die Sie auf einem `<select>` Element verwenden können:

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

- Mehrere Optionen auswählbar sind, weil wir das `multiple` Attribut eingeschlossen haben.
- Das `size` Attribut nur 4 Zeilen gleichzeitig anzeigt; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}} Elemente hinzugefügt, um die Optionen in verschiedene Gruppen einzuteilen. Dies ist eine rein visuelle Gruppierung, deren Darstellung im Allgemeinen darin besteht, dass der Gruppenname fett dargestellt und die Optionen eingerückt sind.
- Die "Hamster" Option enthält ein `disabled` Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >notiert</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#submittable"
          >einreichbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziiertes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}} Elemente in traditionellen <code>&lt;select&gt;</code> Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a>:
        <ul>
        <li>Der Select {{htmlelement("button")}} wird optional als Kind-<code>&lt;button&gt;</code>-Element mit einem verschachtelten {{htmlelement("selectedcontent")}} Element eingefügt.</li>
        <li>Der Dropdown-Auswahler ist als beliebiger anderer Inhalt definiert, der null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}} Elemente enthalten kann.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne
        <code>multiple</code> Attribut und ohne
        <code>size</code> Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne
        <code>multiple</code> Attribut und ohne
        <code>size</code> Attribut größer als 1, ansonsten keine
        <code>role</code> erlaubt
      </td>
    </tr>
    <tr>
      <th scope="row">DOM Schnittstelle</th>
      <td>[`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Events, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}} Element
- Das {{HTMLElement("optgroup")}} Element
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
