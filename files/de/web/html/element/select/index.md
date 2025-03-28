---
title: "<select>: Das HTML-Auswahlelement"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element stellt ein Steuerelement dar, das ein Menü mit Auswahlmöglichkeiten bietet.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es hat ein `id`-Attribut, um es aus Gründen der Barrierefreiheit mit einem {{htmlelement("label")}} zu verbinden, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts darzustellen, der an den Server gesendet wird. Jede Menüoption wird durch ein verschachteltes {{htmlelement("option")}}-Element innerhalb des `<select>` definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den zu übermittelnden Datenwert enthält, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den Text innerhalb des Elements gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut in einem `<option>`-Element hinzufügen, um es standardmäßig auszuwählen, wenn die Seite geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie verwenden können, um es zu steuern, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten der allgemeinen Formulareingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können weitere {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente hinzufügen, um Trennlinien zu schaffen, die visuelle Unterbrechungen zwischen den Optionen bieten.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bietet. Siehe [Das HTML Autovervollständigungs-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung der Autovervollständigung.
- `autofocus`
  - : Dieses boolesche Attribut lässt Sie festlegen, dass ein Formularelement den Eingabefokus erhält, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umschließenden Element, beispielsweise {{htmlelement("fieldset")}}; wenn es kein umschließendes Element mit dem `disabled`-Attribut gibt, ist die Steuerung aktiviert.
- `form`

  - : Das {{HTMLElement("form")}} Element, mit dem das `<select>` verknüpft ist (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit einem Vorfahren `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<select>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollende Listbox anstelle eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn die Steuerung als scrollende Listbox dargestellt wird (z. B. wenn `multiple` angegeben ist), steht dieses Attribut für die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Auswahl-Element als gescrollte Listbox darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut der HTML-Spezifikation sollte der Standardwert für size `1` sein; jedoch hat sich in der Praxis gezeigt, dass dies einige Webseiten beeinträchtigt, und kein anderer Browser tut das derzeit, daher hat sich Mozilla entschieden, für die aktuelle Zeit in Firefox `0` beizubehalten.

## Verwendungshinweise

### Auswählen mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, im `<select>` mit einem `multiple`-Attribut mehrere Optionen auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd>- oder <kbd>Umschalttaste</kbd> (je nach Betriebssystem) gedrückt halten und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur, der unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS kollidieren die Kürzel <kbd>Strg</kbd> + <kbd>Pfeil nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Pfeil nach unten</kbd> mit den Standardkürzeln des Betriebssystems für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Ende des Bereichs, den sie auswählen möchten, mit den Pfeiltasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> auswählen.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die Pfeiltasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> verwenden, um den Bereich der ausgewählten Elemente zu erhöhen oder zu verringern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die Pfeiltasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie dies tun. Die "fokussierte" Auswahloption wird mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein mit der Tastatur fokussierter Link.
- <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element war historisch gesehen notorisch schwer produktiv mit CSS zu stylen, daher werden Funktionen eingeführt, um die Erstellung von [vollständig anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu ermöglichen.

### Legacy-Select-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in älteren Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/CSS_fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-`appearance`-Erscheinungsbild zu entfernen.

Es ist jedoch schwer, ein konsistentes Ergebnis über verschiedene Browser hinweg mit traditionellen `<select>`-Elementen zu erzielen. Wenn Sie die volle Kontrolle haben möchten, sollten Sie überlegen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets zu verwenden oder ein eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um semantische Informationen bereitzustellen.

Sie können die {{cssxref(":open")}} Pseudoklasse verwenden, um `<select>`-Elemente im offenen Zustand zu stylen, das heißt, wenn die Dropdown-Optionenliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (die mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut gesetzt sind) - sie neigen dazu, als scrollende Listbox statt als Dropdown gerendert zu werden und haben daher keinen offenen Zustand.

Für weitere Informationen über legacy `<select>`-Styling siehe:

- [Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Barrierefreiheits-Baumes angezeigt werden und daher nicht für unterstützende Technologien zugänglich sind.

## Beispiele

### Grundlegendes Select

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

### Select mit gruppierten Optionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung unter Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es Benutzern einfacher zu machen, den Inhalt im Dropdown zu verstehen.

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

Das folgende Beispiel ist komplexer und zeigt mehr Funktionen, die Sie in einem `<select>`-Element verwenden können:

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
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente hinzugefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Visualisierung besteht im Allgemeinen darin, dass der Gruppenname fettgedruckt ist und die Optionen eingerückt sind.
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
          >Fließfähiger Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textglied-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >etikettierbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#resettable"
          >zurücksetzbar</a
        > und
        <a href="/de/docs/Web/HTML/Content_categories#submittable"
          >einreichbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziiertes </a
        >Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}} Elemente in traditionellen <code>&lt;select&gt;</code> Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elementen</a>:
        <ul>
        <li>Der Auswahl-{{htmlelement("button")}} ist optional als untergeordnetes <code>&lt;button&gt;</code> Element mit einem verschachtelten {{htmlelement("selectedcontent")}} Element enthalten.</li>
        <li>Der Dropdown-Auswahlschalter ist als beliebiger anderer Inhalt definiert, der null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}} Elemente enthalten kann.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textglied-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code> Attribut und <strong>kein</strong>
        <code>size</code> Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
        <code>multiple</code> Attribut und <strong>kein</strong>
        <code>size</code> Attribut größer als 1, ansonsten keine
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

- Ereignisse, die durch `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}} Element
- Das {{HTMLElement("optgroup")}} Element
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
