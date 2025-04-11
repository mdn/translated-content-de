---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element stellt ein Steuerelement dar, das ein Menü von Optionen bietet.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es hat ein `id`-Attribut, um es aus Barrierefreiheitsgründen mit einem {{htmlelement("label")}} zu verknüpfen, sowie ein `name`-Attribut, das den Namen des an den Server gesendeten zugehörigen Datenpunkts darstellt. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut haben, das den Datenwert enthält, der an den Server gesendet werden soll, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, entspricht der Wert standardmäßig dem im Element enthaltenen Text. Sie können einem `<option>`-Element ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut hinzufügen, um es standardmäßig ausgewählt zu machen, wenn die Seite zum ersten Mal geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert des ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie verwenden können, um es zu steuern, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen auf einmal angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente hinzufügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Drop-down-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein Zeichenfolgenhinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "Benutzeragenten")}}. Siehe [Das HTML-Autovervollständigungsattribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung von Autovervollständigung.
- `autofocus`
  - : Dieses boolesche Attribut lässt Sie angeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellungen vom umgebenden Element, z.B. {{htmlelement("fieldset")}}; wenn kein enthaltenes Element mit dem gesetzten `disabled`-Attribut vorhanden ist, ist das Steuerelement aktiviert.
- `form`

  - : Das mit dem `<select>` zu assoziierende {{HTMLElement("form")}}-Element (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem übergeordneten `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente überall im Dokument mit `<form>`-Elementen zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wird es nicht spezifiziert, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser statt eines einzeiligen Dropdowns ein Scrolllistenfeld an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein boolesches Attribut, das darauf hinweist, dass eine Option mit einem nicht leeren Zeichenfolgenwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Wenn das Steuerungsfeld als Scrolllistenfeld präsentiert wird (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Select-Element als Scrolllistenfeld darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut HTML-Spezifikation sollte der Standardwert für size `1` sein; in der Praxis wurde jedoch festgestellt, dass dies einige Websites stört und kein anderer Browser dies derzeit tut. Daher hat Mozilla beschlossen, vorerst weiterhin `0` mit Firefox zurückzugeben.

## Nutzungshinweise

### Auswahl mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Shift</kbd>-Tasten (je nachdem, was für Ihr Betriebssystem sinnvoll ist) gedrückt halten und dann auf mehrere Optionen klicken, um sie auszuwählen/abwählen.

> [!WARNING]
> Der Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur, der unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die Kürzel <kbd>Ctrl</kbd> + <kbd>Hoch</kbd> und <kbd>Ctrl</kbd> + <kbd>Runter</kbd> in Konflikt mit den standardmäßigen OS-Kürzeln für _Mission Control_ und _Anwendungsfenster_, sodass Sie diese deaktivieren müssen, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Ende des Bereichs, den sie auswählen möchten, auswählen, indem sie die <kbd>Hoch</kbd>- und <kbd>Runter</kbd>-Pfeiltasten verwenden, um zwischen den Optionen zu wechseln.
- Die <kbd>Shift</kbd>-Taste gedrückt halten und dann die <kbd>Hoch</kbd>- und <kbd>Runter</kbd>-Pfeiltasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Hoch</kbd>- und <kbd>Runter</kbd>-Pfeiltasten verwenden, um die "fokussierte" Auswahlelement zu ändern, d.h. das, das ausgewählt wird, falls Sie es tun möchten. Die "fokussierte" Auswahlelement ist mit einer gepunkteten Umrandung hervorgehoben, ähnlich wie ein über die Tastatur fokussierter Link.
- <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahlelemente auszuwählen/abwählen.

## Styling mit CSS

Historisch war es notorisch schwierig, das `<select>`-Element produktiv mit CSS zu stylen, daher wurden Funktionen eingeführt, um [vollständig anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu erstellen.

### Altes Select-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in alten Codebasen, wo diese nicht verwendet werden können), sind Sie darauf beschränkt, das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/CSS_fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das Standard-Systemerscheinungsbild zu entfernen.

Es ist jedoch schwierig, mit traditionellen `<select>`-Elementen ein konsistentes Ergebnis über verschiedene Browser hinweg zu erzielen. Wenn Sie volle Kontrolle erreichen möchten, sollten Sie erwägen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formular-Widgets zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zur Bereitstellung von Semantiken zu erstellen.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im offenen Zustand zu stylen, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (diejenigen mit gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut) — sie tendieren dazu, als Scrolllistenfeld statt als Dropdown dargestellt zu werden, daher haben sie keinen offenen Zustand.

Für weitere Informationen zur alten `<select>`-Gestaltung siehe:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Zugänglichkeit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ angesehen werden, da es derzeit nicht im Barrierefreiheitsbaum sichtbar ist und daher nicht für unterstützende Technologien zugänglich ist.

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

- Mehrere Optionen ausgewählt werden können, da wir das `multiple`-Attribut beigefügt haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen zu sehen.
- Wir haben {{htmlelement("optgroup")}}-Elemente hinzugefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, ihre Darstellung besteht in der Regel darin, dass der Gruppenname fett hervorgehoben wird und die Optionen eingerückt sind.
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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasenbasierter Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
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
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}}-Elemente in traditionellen <code>&lt;select&gt;</code>-Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelementen</a>:
        <ul>
        <li>Das Auswahl-{{htmlelement("button")}} wird optional als Kind-<code>&lt;button&gt;</code>-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element eingefügt.</li>
        <li>Der Dropdown-Picker wird als beliebiger anderer Inhalt definiert, der null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noskript")}}-Elemente enthalten kann.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasenbasierte Inhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, andernfalls wird keine
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
