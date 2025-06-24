---
title: "<select>: Das HTML-Select-Element"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es wird ein `id`-Attribut zugewiesen, um es aus Gründen der Zugänglichkeit mit einem {{htmlelement("label")}} zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zugeordneten Datenelements darzustellen, das an den Server gesendet wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, das den Datenwert enthält, der an den Server gesendet werden soll, wenn die Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, ist der Standardwert der Text, der innerhalb des Elements enthalten ist. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut in ein `<option>`-Element aufnehmen, damit es standardmäßig ausgewählt wird, wenn die Seite zum ersten Mal geladen wird. Falls kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element verfügt über einige einzigartige Attribute, mit denen Sie es steuern können, wie zum Beispiel `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formular-Input-Attribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{htmlelement("option")}}-Elemente in {{htmlelement("optgroup")}}-Elemente verschachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Sie können auch {{htmlelement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen Optionen hinzufügen.

Für weitere Beispiele siehe [The native form widgets: Drop-down content](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "Benutzeragenten")}} bietet. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung von Autovervollständigung.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, ein Formularsteuerelement beim Laden der Seite den Eingabefokus haben zu lassen. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umschließenden Element, zum Beispiel {{htmlelement("fieldset")}}; wenn es kein umschließendes Element mit gesetztem `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- `form`

  - : Das {{htmlelement("form")}}-Element, mit dem das `<select>` verbunden ist (sein _Formularinhaber_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem übergeordneten `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolean-Attribut gibt an, dass in der Liste mehrere Optionen ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollbare Listenbox anstelle eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren Zeichenkettenwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Wenn das Steuerelement als scrollbare Listenbox dargestellt wird (z. B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Select-Element als scrollende Listenbox darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; diese Einstellung hat jedoch in der Praxis zu Problemen auf einigen Websites geführt, und kein anderer Browser tut das derzeit, daher hat sich Mozilla entschieden, vorerst weiterhin `0` mit Firefox zurückzugeben.

## Anwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Ctrl</kbd>-, <kbd>Command</kbd>- oder <kbd>Shift</kbd>-Tasten gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur, der unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die Tastenkombinationen <kbd>Ctrl</kbd> + <kbd>Up</kbd> und <kbd>Ctrl</kbd> + <kbd>Down</kbd> im Konflikt mit den systemweiten Standard-Tastenkombinationen für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z. B. mit <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Ende des Bereichs auswählen, den sie auswählen möchten, indem sie die <kbd>Up</kbd> und <kbd>Down</kbd>-Cursor-Tasten verwenden, um durch die Optionen zu navigieren.
- Die <kbd>Shift</kbd>-Taste gedrückt halten und dann die <kbd>Up</kbd> und <kbd>Down</kbd>-Cursor-Tasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Ctrl</kbd>-Taste gedrückt halten und dann die <kbd>Up</kbd> und <kbd>Down</kbd>-Cursor-Tasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. die Option, die ausgewählt wird, wenn Sie dies tun möchten. Die "fokussierte" Auswahloption wird mit einer gepunkteten Umrandung hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- Die <kbd>Space</kbd>-Taste drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element war historisch gesehen notorisch schwierig, produktiv mit CSS zu stylen, daher wurden Funktionen eingeführt, um das Erstellen von [vollständig anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu ermöglichen.

### Legacy Select-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in Legacy-Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schrift](/de/docs/Web/CSS/CSS_fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemaussehen zu entfernen.

Es ist jedoch schwierig, mit traditionellen `<select>`-Elementen ein konsistentes Ergebnis über alle Browser hinweg zu erzielen. Wenn Sie volle Kontrolle haben möchten, sollten Sie erwägen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudo-Klasse verwenden, um `<select>`-Elemente im offenen Zustand zu stylen, d.h. wenn die Dropdown-Optionenliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (jene mit gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut) – sie werden in der Regel als scrollende Listenbox anstelle eines Drop-downs dargestellt und haben daher keinen offenen Zustand.

Für weitere Informationen zum Legacy-`<select>`-Styling siehe:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Zugänglichkeit

Die `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Accessibility-Baums angezeigt wird und daher nicht von unterstützenden Technologien zugänglich ist.

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierungen durch die Verwendung von {{htmlelement("optgroup")}} und {{htmlelement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown-Menü zu verstehen.

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

Sie sehen, dass:

- Mehrere Optionen auswählbar sind, da wir das `multiple`-Attribut hinzugefügt haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen zu sehen.
- Wir {{htmlelement("optgroup")}}-Elemente integriert haben, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Darstellung im Allgemeinen aus dem fett gedruckten Gruppennamen und den eingerückten Optionen besteht.
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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgezählt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >einreichbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularbezogen</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}} Elemente in traditionellen <code>&lt;select&gt;</code> Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a>:
        <ul>
        <li>Das Select-{{htmlelement("button")}} ist optional als untergeordnetes <code>&lt;button&gt;</code>-Element mit einem verschachtelten {{htmlelement("selectedcontent")}} Element enthalten.</li>
        <li>Der Dropdown-Picker wird wie jeder andere Inhalt definiert, der null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}} Elemente enthalten kann.</li>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Verzicht</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne
        <code>multiple</code>-Attribut und ohne
        <code>size</code>-Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne
        <code>multiple</code>-Attribut und ohne
        <code>size</code>-Attribut größer als 1, andernfalls keine
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
