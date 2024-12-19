---
title: "`<select>`: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<select>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert ein Steuerungselement, das ein Menü mit Optionen bietet.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es wird ein `id`-Attribut zugewiesen, um es mit einem {{htmlelement("label")}} für Barrierefreiheitszwecke zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zu übermittelnden Datenpunkts an den Server darzustellen. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das im `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den Datenwert enthält, der an den Server übermittelt wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, wird der Wert standartmäßig auf den im Element enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut in einem `<option>`-Element einfügen, damit es standardmäßig ausgewählt ist, wenn die Seite erstmals geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert. Dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige eindeutige Attribute, die Sie zur Steuerung verwenden können, wie z. B. `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Eingabe-Formularattribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdown-Menüs zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennzeichen hinzuzufügen, die visuelle Abstände zwischen den Optionen darstellen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalt](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agent")}} bietet. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen anzugeben, dass ein Formularsteuerelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel {{htmlelement("fieldset")}}; gibt es kein umgebendes Element mit gesetztem `disabled`-Attribut, ist das Steuerelement aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verknüpft ist (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem übergeordneten `<form>`-Element verknüpft, sofern vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses Boolean-Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben wird, zeigen die meisten Browser ein Scrolllistenfeld anstatt eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als Scrolllistenfeld dargestellt wird (z. B. wenn `multiple` angegeben ist), stellt dieses Attribut die Anzahl der in der Liste sichtbaren Zeilen dar, die gleichzeitig sichtbar sein sollen. Browser müssen kein Scrolllistenfeld darstellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; in der Praxis wurde jedoch festgestellt, dass dies einige Websites beeinträchtigt. Da kein anderer Browser dies derzeit tut, hat sich Mozilla entschieden, vorerst weiterhin `0` mit Firefox zurückzugeben.

## Anwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, um im `<select>`-Element mit einem `multiple`-Attribut mehrere Optionen auszuwählen:

Mausnutzer können die Tasten <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalt</kbd> gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS kommen die Kürzel <kbd>Strg</kbd> + <kbd>Nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Nach unten</kbd> mit den OS-Standardeinstellungen für _Mission Control_ und _Anwendungsfenster_ in Konflikt, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen durch:

- Fokussieren auf das `<select>`-Element (z. B. mit <kbd>Tab</kbd>).
- Auswählen eines Elements am oberen oder unteren Ende des Bereichs, den sie auswählen möchten, mit den Tasten <kbd>Oben</kbd> und <kbd>Unten</kbd> zur Navigation durch die Optionen.
- Halten der <kbd>Umschalt</kbd>-Taste und Verwenden der Tasten <kbd>Oben</kbd> und <kbd>Unten</kbd>, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen durch:

- Fokussieren auf das `<select>`-Element (z. B. mit <kbd>Tab</kbd>).
- Halten der <kbd>Strg</kbd>-Taste und Verwenden der Tasten <kbd>Oben</kbd> und <kbd>Unten</kbd>, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, falls Sie sich dazu entscheiden. Die "fokussierte" Auswahloption wird mit einem gepunkteten Umriss hervorgehoben, ähnlich einem tastaturfokussierten Link.
- Drücken der <kbd>Leertaste</kbd>, um die "fokussierten" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist bekanntermaßen schwer produktiv mit CSS zu gestalten. Sie können gewisse Aspekte wie bei jedem Element beeinflussen — zum Beispiel die [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/CSS_fonts) usw., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das Standardsystemaussehen zu entfernen.

Diese Eigenschaften führen jedoch nicht zu konsistenten Ergebnissen in verschiedenen Browsern, und es ist schwierig, unterschiedliche Formularelemente miteinander in einer Spalte auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und nur schwer zu kontrollieren. Wenn Sie die volle Kontrolle wünschen, sollten Sie in Erwägung ziehen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zur Bereitstellung von Semantik zu erstellen.

Für weitere nützliche Informationen zum Styling von `<select>`, siehe:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>`-Element innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht innerhalb des Accessibility Trees offengelegt wird und daher nicht für unterstützende Technologien zugänglich ist.

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung mithilfe von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt des Dropdowns zu verstehen.

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

- Mehrere Optionen auswählbar sind, weil wir das `multiple`-Attribut eingeschlossen haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, ihre Visualisierung besteht in der Regel daraus, dass der Gruppenname fett dargestellt wird und die Optionen eingerückt werden.
- Die Option "Hamster" enthält ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
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
          >einreichbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          > Formular-assoziiertes </a
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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne
        <code>multiple</code>-Attribut und <strong>keine</strong>
        <code>size</code>-Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne
        <code>multiple</code>-Attribut und <strong>keine</strong>
        <code>size</code>-Attribut größer als 1, andernfalls keine
        <code>role</code> erlaubt
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
