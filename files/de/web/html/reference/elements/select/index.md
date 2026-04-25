---
title: "`<select>` HTML select Element"
short-title: <select>
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<select>`**-Element des [HTML](/de/docs/Web/HTML) repräsentiert ein Steuerelement, das ein Menü mit Optionen bereitstellt.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es erhält ein `id`-Attribut, um für Barrierefreiheitszwecke mit einem {{htmlelement("label")}} in Verbindung gebracht werden zu können, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunktes zu repräsentieren, der an den Server gesendet wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, das den zu übermittelnden Datenwert an den Server enthält, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den im Element enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut an einem `<option>`-Element einschließen, um es standardmäßig auszuwählen, wenn die Seite erstmals geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) Objekt repräsentiert, und dieses Objekt besitzt eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert des ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Steuerung verwenden können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um festzulegen, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten der allgemeinen Formular-Eingabe-Attribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiter {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativem Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bereitstellt. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung der Autovervollständigung.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht Ihnen anzugeben, dass ein Formularfeld beim Laden der Seite den Eingabefokus haben sollte. Nur ein einziges Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umschließenden Element, zum Beispiel {{htmlelement("fieldset")}}; wenn kein umschließendes Element mit gesetztem `disabled`-Attribut vorhanden ist, ist das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>`-Element verknüpft ist (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahren `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<select>`-Elemente mit `<form>`s an beliebiger Stelle im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolean-Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, wird in den meisten Browsern eine scrollbare Listbox anstelle eines einzeiligen Dropdown-Menüs angezeigt. Mehrfach ausgewählte Optionen werden unter Verwendung der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Array-Konvention übermittelt, d.h. `name=value1&name=value2`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren Zeichenfolgenwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Wenn das Steuerelement als Scroll-Liste präsentiert wird (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollen. Browser müssen ein Select-Element nicht als Scroll-Liste präsentieren. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; in der Praxis wurde jedoch festgestellt, dass dies einige Websites bricht, und kein anderer Browser macht das derzeit so, deshalb hat sich Mozilla dafür entschieden, vorerst `0` in Firefox zurückzugeben.

## Anwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es verschiedene Möglichkeiten, um mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die Tasten <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalt</kbd> drücken (abhängig von Ihrem Betriebssystem) und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus, um mehrere nicht-kontinuierliche Elemente über die Tastatur auszuwählen, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die Tastenkombinationen <kbd>Strg</kbd> + <kbd>Nach-oben</kbd> und <kbd>Strg</kbd> + <kbd>Nach-unten</kbd> im Konflikt mit den voreingestellten Betriebssystem-Kurzbefehlen für _Mission Control_ und _Anwendungsfenster_, die deaktiviert werden müssen, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. durch Drücken von <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Ende des Bereichs auswählen, den sie auswählen möchten, indem sie die Pfeiltasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> verwenden, um zwischen den Optionen nach oben und unten zu navigieren.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die Pfeiltasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht-zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. durch Drücken von <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die Pfeiltasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption wird mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein link, der über die Tastatur fokussiert wird.
- Die <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Stilierung mit CSS

Das `<select>`-Element war historisch schwer effektiv mit CSS zu stilisieren.
Die folgenden Leitfäden enthalten Informationen über Funktionen, die vollständig anpassbare Select-Elemente ermöglichen:

- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare Auswahllisten-Boxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Legacy Select-Stilierung

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in Altsystemen, wo sie nicht eingesetzt werden können), sind Sie darauf beschränkt, das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) zu manipulieren, die [angezeigte Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemaussehen zu entfernen.

Es ist jedoch schwer, ein konsistentes Ergebnis über verschiedene Browser hinweg mit traditionell `<select>`-Elementen zu erzielen. Wenn Sie die volle Kontrolle haben möchten, sollten Sie erwägen, eine Bibliothek mit guten Möglichkeiten zur Stilierung von Form-Widgets zu verwenden, oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im geöffneten Zustand zu stilisieren, also wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (diejenigen mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut), da sie in der Regel als Scroll-Liste angezeigt werden und daher keinen offenen Zustand haben.

Für weitere Informationen zur Legacy-`<select>`-Stilierung siehe:

- [HTML-Formulare stilisieren](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stilierung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>`-Elements sollte als rein dekorativ betrachtet werden, da es derzeit nicht innerhalb der Barrierefreiheitsstruktur angezeigt wird und daher nicht an unterstützende Technologien weitergegeben wird.

## Beispiele

### Einfaches Select

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

### Select mit gruppierten Optionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierungen unter Verwendung von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown-Menü zu verstehen.

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

Das folgende Beispiel ist komplexer und zeigt weitere Funktionen, die Sie in einem `<select>`-Element verwenden können:

- Das `multiple`-Attribut ermöglicht die Auswahl von mehr als einer Option.
- Das `size`-Attribut ist auf `4` gesetzt, was bedeutet, dass 4 Linien gleichzeitig angezeigt werden. Benutzer können scrollen, um alle Optionen anzuzeigen.
- Zwei {{htmlelement("optgroup")}}-Elemente sind enthalten und schaffen zwei visuelle Gruppierungen, generell mit dem Gruppennamen fettgedruckt und den verschachtelten Optionen eingerückt.
- Das `disabled`-Attribut ist auf der "Hamster"-Option enthalten, was bedeutet, dass diese Option nicht wählbar ist.

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

## Technische Übersicht

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
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktive Inhalte</a
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
          >form-associated</a
        >-Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <ul>
          <li>{{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}} Elemente, optional vorangestellt von einem {{htmlelement("button")}} Element mit verschachteltem {{htmlelement("selectedcontent")}} Element, falls eine Dropdown-Box.</li>
          <li>{{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}} Elemente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne <code>multiple</code>-Attribut und <strong>ohne</strong> <code>size</code>-Attribut größer als 1, andernfalls <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne <code>multiple</code>-Attribut und <strong>ohne</strong> <code>size</code>-Attribut größer als 1, andernfalls <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ist erlaubt, aber nicht empfohlen.
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
- Ereignisse ausgelöst durch `<select>`: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
