---
title: "<select>: Das HTML-Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 57bda387ce26736e5265014887356ef25fde1b10
---

{{HTMLSidebar}}

Das **`<select>`**-[HTML](/de/docs/Web/HTML) Element repräsentiert ein Steuerungselement, das ein Menü mit Optionen bereitstellt.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt die typische Verwendung eines `<select>`. Es erhält ein `id`-Attribut, um es aus Gründen der Barrierefreiheit mit einem {{htmlelement("label")}} zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenelements darzustellen, das an den Server übermittelt wird. Jede Menüoption wird durch ein innerhalb des `<select>` verschachteltes {{htmlelement("option")}}-Element definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den zu übermittelnden Datenwert angibt, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird der Standardwert auf den innerhalb des Elements enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf einem `<option>`-Element einfügen, um es standardmäßig auszuwählen, wenn die Seite erstmals geladen wird. Wird kein `selected`-Attribut angegeben, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element verfügt über einige einzigartige Attribute, die Sie zur Steuerung verwenden können, wie z.B. `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um die Anzahl der gleichzeitig angezeigten Optionen zu bestimmen. Es akzeptiert auch die meisten allgemeinen Formular-Input-Attribute wie `required`, `disabled`, `autofocus`, etc.

Sie können weitere {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einschließen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Weitere Beispiele finden Sie unter [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Eine Zeichenkette, die einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bietet. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste von Werten und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Mit diesem booleschen Attribut können Sie angeben, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung die Einstellung von dem umgebenden Element, zum Beispiel {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit dem gesetzten `disabled`-Attribut gibt, ist die Steuerung aktiviert.
- `form`

  - : Das mit dieser `<select>` verknüpfte {{HTMLElement("form")}}-Element (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird `<select>` mit seinem übergeordneten `<form>`-Element verknüpft, sofern vorhanden.)

    Dieses Attribut ermöglicht es, `<select>` Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>` Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einfachen Dropdowns an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem nicht-leeren Zeichenfolgenwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn die Steuerung als scrollbares Listenfeld dargestellt wird (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollten. Browser sind nicht verpflichtet, ein Auswahl-Element als scrollbares Listenfeld darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; in der Praxis hat sich jedoch herausgestellt, dass dies einige Websites beeinträchtigt, und kein anderer Browser tut dies derzeit, so dass Mozilla sich entschieden hat, vorerst `0` in Firefox weiterhin zurückzugeben.

## Anwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die Tasten <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalt</kbd> (je nach Betriebssystem) gedrückt halten und dann auf mehrere Optionen klicken, um diese auszuwählen/abwählen.

> [!WARNING]
> Der Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur, der unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die <kbd>Strg</kbd> + <kbd>Auf</kbd> und <kbd>Strg</kbd> + <kbd>Ab</kbd> Tastenkombinationen in Konflikt mit den Standard-OS-Tastenkombinationen für _Mission Control_ und _App-Fenster_, daher müssen Sie diese deaktivieren, bevor sie funktionieren.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tabulator</kbd>).
- Ein Element oben oder unten in dem Bereich auswählen, den sie auswählen möchten, indem sie die <kbd>Aufwärts</kbd>- und <kbd>Abwärts</kbd>-Pfeiltasten verwenden, um durch die Optionen zu navigieren.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die <kbd>Aufwärts</kbd>-

  - und <kbd>Abwärts</kbd>-Pfeiltasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tabulator</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Aufwärts</kbd> und <kbd>Abwärts</kbd>-Pfeiltasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich entscheiden, sie auszuwählen. Die "fokussierte" Auswahloption wird mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist notorisch schwer mit CSS produktiv zu stylen. Sie können bestimmte Aspekte wie bei jedem anderen Element beeinflussen — z.B. die Manipulation des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/CSS_fonts), etc., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das Standard-Systemaussehen zu entfernen.

Diese Eigenschaften erzeugen jedoch keine konsistenten Ergebnisse über verschiedene Browser hinweg, und es ist schwierig, Dinge wie das Ausrichten verschiedener Arten von Formularelementen in einer Spalte zu erreichen. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu steuern. Wenn Sie die volle Kontrolle haben möchten, sollten Sie in Erwägung ziehen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formular-Widgets zu verwenden oder ein eigenes Dropdown-Menü mit nicht-sematischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) für die semantische Bedeutung zu erstellen.

Für weitere nützliche Informationen zum Styling von `<select>`, siehe:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht innerhalb des Zugänglichkeitbaums angezeigt wird und daher nicht für unterstützende Technologien sichtbar ist.

## Beispiele

### Einfaches Select

Das folgende Beispiel erstellt ein sehr einfaches Dropdown-Menü, dessen zweite Option standardmäßig ausgewählt ist.

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung unter Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown zu verstehen.

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

- Mehrere Optionen auswählbar sind, da das Attribut `multiple` enthalten ist.
- Das Attribut `size` bewirkt, dass jeweils nur 4 Zeilen angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dabei handelt es sich um eine rein visuelle Gruppierung; ihre Visualisierung besteht im Allgemeinen darin, dass der Gruppenname fett dargestellt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option beinhaltet ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >aufgeführt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
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
        {{HTMLElement("optgroup")}} oder {{HTMLElement("hr")}} Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Parents</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code> Attribut und <strong>kein</strong>
        <code>size</code> Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
        <code>multiple</code> Attribut und <strong>kein</strong>
        <code>size</code> Attribut größer als 1, andernfalls kein
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
