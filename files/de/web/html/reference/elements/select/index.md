---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein Steuerelement, das ein Menü mit Auswahlmöglichkeiten bietet.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es wird ein `id`-Attribut zugewiesen, um es aus Gründen der Barrierefreiheit mit einem {{htmlelement("label")}} zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zur serverseitigen Weiterverarbeitung zu übermittelnden Datenelements darzustellen. Jede Auswahlmöglichkeit im Menü wird durch ein im `<select>` verschachteltes {{htmlelement("option")}}-Element definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, das den Datenwert enthält, der beim Auswählen dieser Option an den Server übermittelt werden soll. Wenn kein `value`-Attribut enthalten ist, wird standardmäßig der im Element enthaltene Text als Wert verwendet. Sie können einem `<option>`-Element ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut hinzufügen, damit es standardmäßig ausgewählt ist, wenn die Seite geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert, und dieses Objekt verfügt über eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Steuerung verwenden können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formular-Eingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können außerdem {{HTMLElement("option")}}-Elemente weiter innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um getrennte Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu schaffen, die visuelle Unterbrechungen zwischen Optionen hinzufügen.

Für weitere Beispiele, siehe [Die nativen Formular-Widgets: Drop-down-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} liefert. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es, dass ein Formularelement bei Seitenaufruf den Eingabefokus hat. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, beispielsweise {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit dem gesetzten `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verbunden werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` seinem Vorfahren `<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`s überall im Dokument zu verbinden, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolean-Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option zur gleichen Zeit ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser statt eines einzeiligen Dropdowns ein Scrollfeld an. Mehrere ausgewählte Optionen werden unter Verwendung des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Arraykonvention gesendet, d.h. `name=value1&name=value2`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolean-Attribut, das anzeigt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Wenn das Steuerelement als Scrollfeld dargestellt ist (z.B., wenn `multiple` festgelegt ist), stellt dieses Attribut die Anzahl der Zeilen in der Liste dar, die gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Select-Element als Scrollfeld darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; jedoch wurde in der Praxis festgestellt, dass dies einige Websites beschädigen kann. Kein anderer Browser tut dies derzeit, daher hat Mozilla sich entschieden, vorerst in Firefox weiterhin `0` zurückzugeben.

## Anwendungshinweise

### Auswählen mehrerer Optionen

Auf einem Desktop-Computer gibt es verschiedene Möglichkeiten, um mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausnutzende können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd> oder <kbd>Umschalttaste</kbd> gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann auf mehrere Optionen klicken, um diese auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur, wie unten beschrieben, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die Tastenkombinationen <kbd>Strg</kbd> + <kbd>Nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Nach unten</kbd> mit den Standard-Tastenkombinationen des Betriebssystems für _Mission Control_ und _Fenster verwalten_ in Konflikt, sodass Sie diese deaktivieren müssen, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten im gewünschten Bereich auswählen, indem sie die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> Pfeiltasten verwenden, um durch die Optionen zu navigieren.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> Pfeiltasten verwenden, um den Bereich der ausgewählten Elemente zu erweitern oder zu verringern.

Tastaturnutzende können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element legen (z.B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> Pfeiltasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich entscheiden, dies zu tun. Die "fokussierte" Auswahlmöglichkeit wird mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahlmöglichkeiten auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist traditionell bekannt dafür, dass es schwierig ist, es produktiv mit CSS zu stylen. Daher wurden Features eingeführt, um die Erstellung von [vollständig anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu ermöglichen.

### Styling von Legacy-Select

In Browsern, die die modernen Anpassungsfeatures nicht unterstützen (oder in älteren Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das Standard-Systemaussehen zu entfernen.

Es ist jedoch schwer, ein konsistentes Ergebnis über verschiedene Browser mit traditionellen `<select>`-Elementen zu erzielen. Wenn Sie volle Kontrolle haben möchten, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formular-Widgets zu verwenden, oder versuchen, Ihre eigene Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik zu bieten.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im offenen Zustand zu stylen, das heißt, wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente ( diejenigen mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut gesetzt) — sie werden in der Regel als Scrollfeld gerendert und haben daher keinen offenen Zustand.

Für weitere Informationen zum Legacy-`<select>`-Styling, siehe:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte rein dekorativ betrachtet werden, da sie derzeit nicht im Barrierefreiheitsbaum sichtbar sind und daher nicht assistiven Technologien zugänglich gemacht werden.

## Beispiele

### Basis-Select

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppen durch die Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um dem Benutzer das Verständnis des Inhalts im Dropdown zu erleichtern.

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

Das folgende Beispiel ist komplexer und zeigt weitere Funktionen, die Sie auf einem `<select>`-Element verwenden können:

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

- Mehrere Optionen sind auswählbar, da wir das `multiple`-Attribut hinzugefügt haben.
- Das `size`-Attribut sorgt dafür, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen zu sehen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, bei der der Gruppenname normalerweise fett dargestellt wird und die Optionen eingerückt sind.
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
          >Fluss-Inhalt</a
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
          >_formularassoziiertes_</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Null oder mehr {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}}-Elemente in traditionellen `<select>`-Elementen. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elementen</a>:
        <ul>
          <li>Das {{htmlelement("button")}}-Auswahlelement wird optional als untergeordnetes <code>&lt;button&gt;</code>-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element eingefügt.</li>
          <li>Der Dropdown-Auswahlbereich ist als beliebiger anderer Inhalt definiert, der null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}}-Elemente enthalten kann.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, ohne <strong></strong>
        <code>multiple</code>-Attribut und ohne <strong></strong>
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Genehmigte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <strong></strong>
        <code>multiple</code>-Attribut und ohne <strong></strong>
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

- Events, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
