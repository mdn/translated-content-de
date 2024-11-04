---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein Steuerungselement, das ein Menü von Optionen bereitstellt.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt die typische Verwendung eines `<select>`. Es erhält ein `id`-Attribut, um es aus Gründen der Barrierefreiheit mit einem {{htmlelement("label")}} zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts zu repräsentieren, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}} Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value) Attribut enthalten, welches den Datenwert enthält, der an den Server gesendet wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den innerhalb des Elements enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut zu einem `<option>`-Element hinzufügen, um es standardmäßig beim ersten Laden der Seite auszuwählen.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) Objekt repräsentiert, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value) Eigenschaft, welche den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element verfügt über einige einzigartige Attribute, mit denen Sie es steuern können, wie zum Beispiel `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen auf einmal angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabeattribute, wie `required`, `disabled`, `autofocus`, etc.

Sie können zusätzlich {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennungen zu erstellen, die visuelle Unterbrechungen zwischen Optionen hinzufügen.

Für weitere Beispiele, siehe [Die nativen Formularelemente: Dropdown-Inhalte](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autocomplete-Funktion eines {{Glossary("user_agent", "User-Agenten")}} bereitstellt. Siehe [Das HTML Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste von Werten und Details zur Nutzung von Autocomplete.
- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, zum Beispiel dem {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit dem `disabled`-Attribut gibt, ist die Steuerung aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahren `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollbare Listbox anstelle eines einzelnen Zeilen-Dropdowns an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das angibt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn die Steuerung als scrollbare Listbox dargestellt ist (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollten. Browser sind nicht verpflichtet, ein select-Element als scrollbare Listbox darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut der HTML-Spezifikation sollte der Standardwert für size `1` sein; jedoch hat sich in der Praxis herausgestellt, dass dies einige Websites beeinträchtigt, und kein anderer Browser das derzeit tut, sodass Mozilla beschlossen hat, vorerst weiterhin `0` mit Firefox zu verwenden.

## Anwendungshinweise

### Mehrfachauswahl

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Umschalt</kbd>-Taste gedrückt halten (abhängig von Ihrem Betriebssystem) und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur funktioniert derzeit nur in Firefox.
>
> Auf macOS stehen die <kbd>Strg</kbd> + <kbd>Auf</kbd> und <kbd>Strg</kbd> + <kbd>Ab</kbd> Shortcuts im Konflikt mit den Standardeinstellungen des Betriebssystems für _Mission Control_ und _Anwendungsfenster_, sodass Sie diese deaktivieren müssen, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten in dem Bereich, den sie auswählen möchten, auswählen, indem sie die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> Cursortasten verwenden, um durch die Optionen zu navigieren.
- Die <kbd>Umschalt</kbd>-Taste gedrückt halten und dann die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> Cursortasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> Cursortasten verwenden, um die "fokussierte" Auswahloption zu ändern, also diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption ist mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- Die Leertaste drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist bekannt dafür, schwierig mit CSS produktiv zu stylen. Sie können gewisse Aspekte wie bei jedem Element beeinflussen — zum Beispiel durch Manipulation [des Boxmodells](/de/docs/Learn/CSS/Building_blocks/The_box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/CSS_fonts), etc., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-Aussehen zu entfernen.

Diese Eigenschaften ergeben jedoch kein konsistentes Ergebnis über verschiedenen Browser hinweg, und es ist schwer, Dinge wie die Ausrichtung verschiedener Arten von Formularelementen in einer Spalte zu kontrollieren. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu steuern. Wenn Sie die volle Kontrolle wünschen, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formularelementen zu verwenden, oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Für weitere nützliche Informationen zum Styling von `<select>`, siehe:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Zugänglichkeitsbaums freigelegt sind und daher nicht an unterstützende Technologien weitergegeben werden.

## Beispiele

### Einfaches Select

Das folgende Beispiel erstellt ein sehr einfaches Dropdown-Menü, bei dem die zweite Option standardmäßig ausgewählt ist.

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierungen, durch die Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}} um es für den Benutzer einfacher zu machen, den Inhalt im Dropdown zu verstehen.

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

Das folgende Beispiel ist komplexer und zeigt mehrere Funktionen, die Sie bei einem `<select>`-Element verwenden können:

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

- Mehrere Optionen ausgewählt werden können, da wir das `multiple`-Attribut inkludiert haben.
- Das `size`-Attribut bewirkt, dass gleichzeitig nur 4 Zeilen angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Darstellung in der Regel darin besteht, dass der Gruppenname fett dargestellt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option enthält ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >Phrasierung Inhalt</a
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
          >form-bezogenes </a
        >Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}} oder {{HTMLElement("hr")}} Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne
        <strong>kein</strong> <code>multiple</code> Attribut und
        <strong>kein</strong> <code>size</code> Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne
        <strong>kein</strong> <code>multiple</code> Attribut und
        <strong>kein</strong> <code>size</code> Attribut größer als 1, ansonsten keine
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
- Das {{HTMLElement("option")}} Element
- Das {{HTMLElement("optgroup")}} Element
