---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<select>`**- [HTML](/de/docs/Web/HTML) Element stellt ein Steuerelement dar, das ein Optionsmenü anbietet.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es hat ein `id`-Attribut, um für Barrierefreiheitszwecke mit einem {{htmlelement("label")}} verknüpft zu werden, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts zu vertreten, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, das den Datenwert enthält, der an den Server übermittelt wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, ist der Standardwert der im Element enthaltene Text. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf einem `<option>`-Element einfügen, um es standardmäßig beim ersten Laden der Seite auszuwählen. Wenn kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige spezifische Attribute, mit denen Sie es steuern können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen auf einmal angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Eingabe-Formulareigenschaften wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um visuelle Trennungen zwischen Optionen zu schaffen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Auto-Vervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bereitstellt. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung der Autovervollständigung.
- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen, festzulegen, dass ein Formular-Steuerelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel von {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- `form`
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verknüpft wird (sein _Formularinhaber_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahren-`<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element außer Kraft setzen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdown-Menüs.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolesches Attribut, das angibt, dass eine Option mit einem nicht leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Wenn das Steuerelement als scrollbares Listenfeld präsentiert wird (z. B. wenn `multiple` angegeben ist), stellt dieses Attribut die Anzahl der Zeilen dar, die gleichzeitig sichtbar sein sollten. Browser sind nicht verpflichtet, ein Select-Element als scrollbares Listenfeld darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; jedoch wurde in der Praxis festgestellt, dass dies einige Websites bricht, und kein anderer Browser macht das derzeit, sodass sich Mozilla entschieden hat, vorerst weiterhin `0` in Firefox zu verwenden.

## Verwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>` Element mit einem `multiple` Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd>- oder <kbd>Umschalttaste</kbd> (je nachdem, was für Ihr Betriebssystem sinnvoll ist) gedrückt halten und dann mehrere Optionen anklicken, um sie auszuwählen/deselektieren.

> [!WARNING]
> Der unten beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS kollidieren die Kürzel <kbd>Strg</kbd> + <kbd>Pfeil-oben</kbd> und <kbd>Strg</kbd> + <kbd>Pfeil-unten</kbd> mit den Standardtastenkürzeln des Betriebssystems für _Mission Control_ und _Anwendungsfenster_, sodass Sie diese ausschalten müssen, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Ende des Bereichs auswählen, den sie auswählen möchten, und dabei die <kbd>Pfeil–oben</kbd> und <kbd>Pfeil–unten</kbd>-Tasten verwenden, um die Optionen nach oben und unten zu gehen.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die <kbd>Pfeil–oben</kbd> und <kbd>Pfeil–unten</kbd>-Tasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente durch folgende Schritte auswählen:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und die <kbd>Pfeil–oben</kbd> und <kbd>Pfeil–unten</kbd>-Tasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption wird mit einer gepunkteten Umrandung hervorgehoben, ähnlich wie bei einem tastaturfokussierten Link.
- Durch Drücken der <kbd>Leertaste</kbd> können Sie "fokussierte" Auswahloptionen auswählen/deselektieren.

## Stilgestaltung mit CSS

Das `<select>`-Element war historisch gesehen notorisch schwer mit CSS produktiv zu gestalten. Daher wurden Funktionen eingeführt, um [vollständig anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu erstellen.

### Legacy-Select-Stilgestaltung

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in Legacy-Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/CSS_fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemaussehen zu entfernen.

Es ist jedoch schwierig, mit traditionellen `<select>`-Elementen ein konsistentes Ergebnis über verschiedene Browser hinweg zu erzielen. Wenn Sie die volle Kontrolle haben möchten, sollten Sie erwägen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Form-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um die Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im offenen Zustand zu gestalten, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (die mit dem gesetzten [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut); sie werden als scrollbares Listenfeld anstelle eines Dropdowns dargestellt, und haben daher keinen offenen Zustand.

Für mehr Informationen über die Legacy-Stilgestaltung von `<select>` siehe:

- [Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stilgestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ angesehen werden, da es derzeit nicht im Barrierefreiheitsbaum sichtbar und daher nicht zugänglich für unterstützende Technologien ist.

## Beispiele

### Einfacher Select

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

### Auswahl mit Gruppierungsoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung anhand von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer einfacher zu machen, den Inhalt im Dropdown zu verstehen.

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

### Erweiterte Auswahl mit mehreren Funktionen

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

- Mehrere Optionen auswählbar sind, weil wir das `multiple` Attribut eingeschlossen haben.
- Das `size` Attribut dafür sorgt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir {{htmlelement("optgroup")}}-Elemente eingefügt haben, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, die Visualisierung besteht im Allgemeinen darin, dass der Gruppenname fett dargestellt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option enthält ein `disabled` Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgeführt</a
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
        <li>Das Select {{htmlelement("button")}} wird optional als Kind <code>&lt;button&gt;</code> Element mit einem verschachtelten {{htmlelement("selectedcontent")}} Element enthalten.</li>
        <li>Der Dropdown-Picker wird als beliebiger anderer Inhalt definiert, der null oder mehr <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}} Elemente beinhalten kann.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
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

- Ereignisse, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
