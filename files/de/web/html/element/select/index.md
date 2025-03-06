---
title: "<select>: Das HTML-Selekt-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<select>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine Steuerung, die ein Menü von Optionen bereitstellt.

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

Das obige Beispiel zeigt eine typische Verwendung von `<select>`. Es wird ein `id`-Attribut verwendet, um es mit einem {{htmlelement("label")}} für Barrierefreiheitszwecke zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zugeordneten Datenpunkts darzustellen, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>`-Elements verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den Datenwert enthält, der an den Server übermittelt wird, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den Text innerhalb des Elements gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf ein `<option>`-Element setzen, um es standardmäßig auszuwählen, wenn die Seite zuerst geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige spezielle Attribute, mit denen Sie es steuern können, wie zum Beispiel `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können {{HTMLElement("option")}}-Elemente weiter innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Drop-down-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bietet. Details zur Verwendung von Autovervollständigung sowie eine vollständige Liste der Wertemöglichkeiten finden Sie unter [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete).
- `autofocus`
  - : Dieses boolesche Attribut lässt Sie angeben, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut weist darauf hin, dass der Benutzer nicht mit dem Element interagieren kann. Wenn dieses Attribut nicht angegeben ist, übernimmt das Element die Einstellung vom umgebenden Element, z. B. {{htmlelement("fieldset")}}; wenn kein umgebendes Element mit dem gesetzten `disabled`-Attribut vorhanden ist, ist das Element aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verbunden ist (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` seinem übergeordneten `<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut erlaubt es Ihnen, `<select>`-Elemente an `<form>`-Elemente irgendwo im Dokument zu binden, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser eine Scrollliste anstelle eines einzeiligen Dropdowns an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das angibt, dass eine Option mit einem nicht-leeren Zeichenfolgewert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als Scrollliste dargestellt wird (z. B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der sichtbaren Zeilen in der Liste. Browser sind nicht verpflichtet, ein Select-Element als Scrollliste darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein. In der Praxis wurde jedoch festgestellt, dass dies einige Websites beeinträchtigt, und kein anderer Browser tut dies derzeit, daher hat sich Mozilla entschieden, vorerst mit Firefox weiterhin `0` zurückzugeben.

## Nutzungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es verschiedene Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die Tasten <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalt</kbd> (je nachdem, was für Ihr Betriebssystem sinnvoll ist) gedrückt halten und dann auf mehrere Optionen klicken, um sie auszuwählen oder abzuwählen.

> [!WARNING]
> Der Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur, der unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die Tastenkombinationen <kbd>Strg</kbd> + <kbd>Hoch</kbd> und <kbd>Strg</kbd> + <kbd>Runter</kbd> in Konflikt mit den standardmäßigen Betriebssystem-Tastenkombinationen für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor sie funktionieren.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten im Bereich, den sie auswählen möchten, mit den Tasten <kbd>Hoch</kbd> und <kbd>Runter</kbd> auswählen, um die Optionen hoch und runter zu gehen.
- Die <kbd>Umschalt</kbd>-Taste gedrückt halten und dann die Tasten <kbd>Hoch</kbd> und <kbd>Runter</kbd> verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die Tasten <kbd>Hoch</kbd> und <kbd>Runter</kbd> verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption ist mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- <kbd>Leertaste</kbd> drücken, um die "fokussierten" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist notorisch schwer effektiv mit CSS zu stylen. Sie können bestimmte Aspekte wie jedes andere Element beeinflussen – zum Beispiel die Manipulation des [Boxmodells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/CSS_fonts), usw., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-Aussehen zu entfernen.

Diese Eigenschaften erzeugen jedoch kein konsistentes Ergebnis über verschiedene Browser hinweg, und es ist schwierig, verschiedene Arten von Formularelementen in einer Spalte auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu kontrollieren. Wenn Sie die vollständige Kontrolle erlangen möchten, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formular-Widgets zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um die Semantik bereitzustellen.

Sie können auch die {{cssxref(":open")}}-Pseudoklasse verwenden, um ein `<select>`-Element zu stylen, wenn es im offenen Zustand ist, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (diejenigen mit dem gesetzten [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut) — diese werden tendenziell als Scrollliste anstelle eines Dropdowns angezeigt und haben daher keinen offenen Zustand.

Weitere nützliche Informationen zum Styling von `<select>` finden Sie unter:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht innerhalb des Barrierefreiheitsbaums angezeigt wird und daher nicht für unterstützende Technologien zugänglich ist.

## Beispiele

### Einfaches Select

Das folgende Beispiel erstellt ein Dropdown-Menü mit drei Werten, von denen die zweite Option standardmäßig ausgewählt ist.

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppenbildung mit Hilfe von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um dem Benutzer das Verständnis des Inhalts im Dropdown zu erleichtern.

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

- Mehrere Optionen auswählbar sind, da wir das `multiple`-Attribut enthalten haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingeschlossen, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Darstellung im Allgemeinen darin besteht, dass der Gruppenname fett dargestellt wird und die Optionen eingezogen sind.
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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >das Etikett tragend</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einreichbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >form-assoziiertes</a
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
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne
        <code>multiple</code>-Attribut und
        <code>size</code>-Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne
        <code>multiple</code>-Attribut und
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
