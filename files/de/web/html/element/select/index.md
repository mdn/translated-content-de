---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein Steuerelement, das ein Menü mit Optionen bereitstellt.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es hat ein `id`-Attribut, um es mit einem {{htmlelement("label")}} für Barrierefreiheitszwecke zu assoziieren, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunktes darzustellen, der an den Server gesendet wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb von `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den Datenwert enthält, der an den Server übermittelt wird, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird standardmäßig der Text innerhalb des Elements als Wert verwendet. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut zu einem `<option>`-Element hinzufügen, um es standardmäßig auszuwählen, wenn die Seite erstmals geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt verfügt über eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Steuerung verwenden können, wie z.B. `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formular-Input-Attribute wie `required`, `disabled`, `autofocus`, etc.

Sie können {{HTMLElement("option")}}-Elemente weiter innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennelemente zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User Agents")}} bietet. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung der Autovervollständigung.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, zum Beispiel {{htmlelement("fieldset")}}; wenn kein umgebendes Element mit dem `disabled`-Attribut gesetzt ist, dann ist die Steuerung aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verknüpft werden soll (sein _Formulareigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahren-`<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses Boolean-Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdown-Menüs.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn die Steuerung als scrollbare Liste dargestellt wird (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Select-Element als scrollbare Liste darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für size `1` sein; jedoch wurde in der Praxis festgestellt, dass dies einige Websites beschädigt, und kein anderer Browser tut dies derzeit, sodass sich Mozilla entschieden hat, vorerst in Firefox `0` zurückzugeben.

## Verwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Umschalt</kbd>-Tasten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) gedrückt halten und dann auf mehrere Optionen klicken, um sie auszuwählen/abwählen.

> [!WARNING]
> Die Mechanik zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur, die unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die <kbd>Strg</kbd> + <kbd>Nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Nach unten</kbd> Shortcuts im Konflikt mit den standardmäßigen Betriebssystem-Shortcuts für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor sie funktionieren.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen durch:

- Fokussierung auf das `<select>`-Element (z.B. durch Drücken von <kbd>Tab</kbd>).
- Auswahl eines Elements am oberen oder unteren Ende des Bereichs, den sie auswählen möchten, indem sie die Tasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> verwenden, um durch die Optionen nach oben und unten zu gehen.
- Halten der <kbd>Umschalt</kbd>-Taste und Verwenden der Tasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen durch:

- Fokussierung auf das `<select>`-Element (z.B. durch Drücken von <kbd>Tab</kbd>).
- Halten der <kbd>Strg</kbd>-Taste und Verwenden der Tasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, falls Sie sich dafür entscheiden dies zu tun. Die "fokussierte" Auswahloption wird mit einer gestrichelten Umrandung hervorgehoben, ähnlich wie bei einem tastaturfokussierten Link.
- Drücken der <kbd>Leertaste</kbd>, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist berüchtigt dafür, dass es schwierig ist, es produktiv mit CSS zu stylen. Sie können bestimmte Aspekte wie bei jedem Element beeinflussen — zum Beispiel die [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) Manipulation, die angezeigte [Schriftart](/de/docs/Web/CSS/CSS_fonts), etc., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemerscheinungsbild zu entfernen.

Diese Eigenschaften führen jedoch nicht zu einem konsistenten Ergebnis in verschiedenen Browsern, und es ist schwierig, Dinge wie das Ausrichten verschiedener Arten von Formularelementen in einer Spalte zu erledigen. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu kontrollieren. Wenn Sie die volle Kontrolle haben möchten, sollten Sie überlegen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formular-Widgets zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zur Bereitstellung von Semantik zu erstellen.

Sie können auch die {{cssxref(":open")}}-Pseudo-Klasse verwenden, um ein `<select>`-Element zu stylen, wenn es sich im offenen Zustand befindet, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (d.h. solche mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut) — diese neigen dazu, als scrollbare Listenbox anstelle eines Dropdown-Menüs angezeigt zu werden, daher haben sie keinen offenen Zustand.

Für nützliche Informationen zum Styling von `<select>`, siehe:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Barrierefreiheitsbaums angezeigt werden und daher nicht für assistive Technologien zugänglich sind.

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierungen, indem {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}} verwendet werden, um es dem Benutzer leichter zu machen, den Inhalt im Dropdown zu verstehen.

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

- Mehrere Optionen auswählbar sind, da wir das `multiple`-Attribut eingefügt haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir {{htmlelement("optgroup")}}-Elemente eingefügt haben, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Visualisierung besteht im Allgemeinen darin, dass der Gruppenname fett dargestellt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option ein `disabled`-Attribut enthält und daher überhaupt nicht ausgewählt werden kann.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließ-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasen-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#interactive_content">interaktiver Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#listed">gelistet</a>,
        <a href="/de/docs/Web/HTML/Content_categories#labelable">labelbar</a>,
        <a href="/de/docs/Web/HTML/Content_categories#resettable">zurücksetzbar</a>, und
        <a href="/de/docs/Web/HTML/Content_categories#submittable">übermittelbar</a>
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content">formularassoziiertes </a
        >Element
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
      <th scope="row">Tag-Ausschluss</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das akzeptiert
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasen-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne <strong>keine</strong>
        <code>multiple</code>-Attribut und <strong>keine</strong>
        <code>size</code>-Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <strong>keine</strong>
        <code>multiple</code>-Attribut und <strong>keine</strong>
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

- Von `<select>` ausgelöste Ereignisse: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
