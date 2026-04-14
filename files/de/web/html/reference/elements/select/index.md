---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: dea6ca35b4cba685b7353a92b77f55e3fd6937c1
---

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein Steuerelement, das ein Menü von Optionen bietet.

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

Das obige Beispiel zeigt eine typische Verwendung von `<select>`. Es wird ein `id`-Attribut zugewiesen, damit es aus Gründen der Barrierefreiheit mit einem {{htmlelement("label")}} verknüpft werden kann, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunktes darzustellen, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut haben, das den Datenwert enthält, der an den Server übermittelt wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den innerhalb des Elements enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf ein `<option>`-Element anwenden, um es standardmäßig ausgewählt zu machen, wenn die Seite erstmalig geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie verwenden können, um es zu steuern, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabe-Attribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdown-Menüs zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einschließen, um Trennlinien hinzuzufügen, die visuelle Pausen zwischen den Optionen schaffen.

Weitere Beispiele finden Sie unter [Die nativen Formular-Widgets: Drop-down-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bereitstellt. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung der Autovervollständigung.
- `autofocus`
  - : Dieses Boolean-Attribut erlaubt es, festzulegen, dass ein Formularelement den Eingabefokus erhält, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel {{htmlelement("fieldset")}}; wenn kein umgebendes Element mit dem `disabled`-Attribut gesetzt ist, ist das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>`-Element verknüpft werden soll (sein _form owner_). Der Wert dieses Attributs muss das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahren-`<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolean-Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollendes Listenfeld anstelle eines einzeiligen Dropdown-Menüs. Mehrere ausgewählte Optionen werden nach der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Array-Konvention übermittelt, d.h. `name=value1&name=value2`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Wenn das Steuerelement als scrollende Liste dargestellt wird (z. B. wenn `multiple` angegeben ist), gibt dieses Attribut die Anzahl der Zeilen in der Liste an, die gleichzeitig sichtbar sein sollten. Browser müssen ein Select-Element nicht zwangsläufig als scrollendes Listenfeld präsentieren. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut HTML-Spezifikation sollte der Standardwert für size `1` sein; in der Praxis wurde jedoch festgestellt, dass dies einige Webseiten bricht, und kein anderer Browser macht das derzeit so, daher hat sich Mozilla entschieden, vorerst weiterhin `0` in Firefox zurückzugeben.

## Hinweise zur Verwendung

### Auswählen mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd>- oder <kbd>Umschalt</kbd>-Tasten gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann mehrere Optionen anklicken, um diese auszuwählen/abwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die <kbd>Strg</kbd> + <kbd>Pfeil hoch</kbd> und <kbd>Strg</kbd> + <kbd>Pfeil runter</kbd>-Tastenkombinationen in Konflikt mit den Standard-Tastenkombinationen des Betriebssystems für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, indem sie die <kbd>Pfeil hoch</kbd> und <kbd>Pfeil runter</kbd>-Tasten verwenden, um nach oben und unten durch die Optionen zu navigieren.
- Die <kbd>Umschalt</kbd>-Taste gedrückt halten und dann die <kbd>Pfeil hoch</kbd> und <kbd>Pfeil runter</kbd>-Tasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Pfeil hoch</kbd> und <kbd>Pfeil runter</kbd>-Tasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. die, die ausgewählt wird, wenn Sie sich entscheiden, dies zu tun. Die "fokussierte" Auswahloption ist mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- Die <kbd>Leertaste</kbd> drücken, um die "fokussierte" Auswahloption auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element war historisch schwer effektiv mit CSS zu stylen.
Die folgenden Leitfäden enthalten Informationen über Funktionen, die vollständig anpassbare Select-Elemente ermöglichen:

- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare Select-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Legacy Select-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in älteren Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-Aussehen zu entfernen.

Es ist jedoch schwer, ein konsistentes Ergebnis über Browser hinweg mit traditionellen `<select>`-Elementen zu erzielen. Wenn Sie die vollständige Kontrolle haben möchten, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im offenen Zustand zu stylen, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt jedoch nicht für mehrzeilige `<select>`-Elemente (solche mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut), da diese dazu neigen, als scrollende Liste anstelle eines Dropdowns gerendert zu werden und daher keinen offenen Zustand haben.

Für weitere Informationen zum Legacy-`<select>`-Styling siehe:

- [Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die kontrolliert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht innerhalb des Barrierefreiheitsbaums zugänglich gemacht wird und daher nicht für unterstützende Technologien sichtbar ist.

## Beispiele

### Basis-Select

Das folgende Beispiel erstellt ein Dropdown-Menü mit drei Werten. Die zweite Option enthält das `selected`-Attribut, wodurch diese Option standardmäßig ausgewählt wird.

```html
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

#### Ergebnis

{{EmbedLiveSample("Basic_select", "", "100")}}

### Select mit Gruppierungsoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung mittels {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown-Menü zu verstehen.

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

- Das `multiple`-Attribut ermöglicht die Auswahl von mehr als einer Option.
- Das `size`-Attribut ist auf `4` gesetzt, was bedeutet, dass 4 Zeilen gleichzeitig angezeigt werden. Benutzer können scrollen, um alle Optionen anzuzeigen.
- Zwei {{htmlelement("optgroup")}}-Elemente sind enthalten, die zwei visuelle Gruppierungen erzeugen, wobei der Gruppenname in der Regel fett und die verschachtelten Optionen eingerückt sind.
- Das `disabled`-Attribut ist bei der Option "Hamster" enthalten, wodurch diese Option nicht auswählbar ist.

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
          >einreichbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >Formular-assoziiertes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <ul>
          <li>{{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}}-Elemente, optional vorangestellt von einem {{htmlelement("button")}}-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element, wenn es sich um ein Dropdown-Feld handelt.</li>
          <li>{{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}}-Elemente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>keines</strong>
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, ansonsten ist <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
        erlaubt, aber nicht empfohlen.
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

- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- Von `<select>` ausgelöste Ereignisse: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
