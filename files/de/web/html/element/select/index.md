---
title: "`<select>`: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 41f2977624562dde84c0ef5956a80ee2575c80f0
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein Steuerelement, das ein Menü mit Optionen bietet.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt die typische Verwendung eines `<select>`. Es besitzt ein `id`-Attribut, um es aus Barrierefreiheitsgründen mit einem {{htmlelement("label")}} zu verbinden, sowie ein `name`-Attribut, um den Namen des damit verbundenen Datenpunkts, der an den Server gesendet wird, darzustellen. Jede Menüoption wird durch ein {{htmlelement("option")}} Element definiert, das innerhalb des `<select>` geschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut haben, das den zu sendenden Datenwert an den Server enthält, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut angegeben ist, wird der Wert standardmäßig als der im Element enthaltene Text festgelegt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf einem `<option>`-Element einfügen, um es standardmäßig auszuwählen, wenn die Seite zum ersten Mal geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt verfügt über eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie verwenden können, um es zu steuern, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen auf einmal angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen schachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Drop-down-Inhalt](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bietet. Siehe [Das HTML Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste von Werten und Details zur Verwendung der Autovervollständigung.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom enthaltenen Element, zum Beispiel {{htmlelement("fieldset")}}; wenn es kein enthaltenes Element mit dem `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, das mit dem `<select>` verbunden werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahren `<form>`-Element verbunden, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`s an beliebiger Stelle im Dokument zu verbinden, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses Boolean-Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein Scroll-Listenfeld anstelle eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein Boolean-Attribut, das anzeigt, dass eine Option mit einem nicht leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als Scroll-Listenfeld dargestellt wird (z. B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Reihen in der Liste, die gleichzeitig sichtbar sein sollten. Browser sind nicht verpflichtet, ein Select-Element als Scroll-Listenfeld darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut der HTML-Spezifikation sollte der Standardwert für size `1` sein; in der Praxis wurde jedoch festgestellt, dass dies einige Websites beeinträchtigt, und kein anderer Browser tut dies derzeit, daher hat Mozilla beschlossen, in Firefox vorerst weiterhin `0` zurückzugeben.

## Nutzungshinweise

### Auswählen mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Umschalt</kbd>-Tasten gedrückt halten (je nachdem, was für Ihr Betriebssystem sinnvoll ist), und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die <kbd>Strg</kbd> + <kbd>Hoch</kbd> und <kbd>Strg</kbd> + <kbd>Runter</kbd> Tastenkombinationen in Konflikt mit den systemeigenen Tastenkombinationen für _Mission Control_ und _Anwendungsfenster_. Sie müssen diese deaktivieren, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, indem sie die <kbd>Hoch</kbd>- und <kbd>Runter</kbd>-Pfeiltasten verwenden, um in den Optionen nach oben und unten zu gehen.
- Die <kbd>Umschalt</kbd>-Taste gedrückt halten und dann die <kbd>Hoch</kbd>- und <kbd>Runter</kbd>-Pfeiltasten verwenden, um den Auswahlsbereich zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den `<select>`-Element fokussieren (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Hoch</kbd>- und <kbd>Runter</kbd>-Pfeiltasten verwenden, um die "fokussierte" Auswahloption zu ändern, d. h. diejenige, die ausgewählt wird, falls Sie dies tun möchten. Die "fokussierte" Auswahloption wird mit einer gepunkteten Umrandung hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- Drücken Sie <kbd>Leertaste</kbd>, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist bekanntlich schwierig, produktiv mit CSS zu stylen. Sie können bestimmte Aspekte wie bei jedem Element beeinflussen — zum Beispiel das Manipulieren des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/CSS_fonts), etc., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemaussehen zu entfernen.

Diese Eigenschaften erzeugen jedoch kein konsistentes Ergebnis in allen Browsern, und es ist schwierig, unterschiedliche Arten von Formularelementen in einer Spalte aneinander auszurichten. Die innere Struktur des `<select>`-Elements ist komplex und schwer zu steuern. Wenn Sie die volle Kontrolle erhalten möchten, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mithilfe nicht-semantischer Elemente, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können auch die {{cssxref(":open")}}-Pseudoklasse verwenden, um ein `<select>`-Element zu stylen, wenn es im offenen Zustand ist, d. h. wenn die Dropdown-Liste der Optionen angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (diejenigen, bei denen das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut gesetzt ist) — sie neigen dazu, als Scroll-Listenfeld dargestellt zu werden, nicht als Dropdown, und haben daher keinen offenen Zustand.

Für weitere nützliche Informationen zum Styling von `<select>` siehe:

- [Formulare mit HTML stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ angesehen werden, da es derzeit nicht im Zugänglichkeitsbaum exponiert wird und daher nicht zu unterstützenden Technologien zugänglich ist.

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

### Select mit Gruppierungsoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung mit {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, die Inhalte im Dropdown zu verstehen.

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

Das folgende Beispiel ist komplexer und zeigt weitere Funktionen, die Sie auf ein `<select>`-Element anwenden können:

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

Sie werden feststellen, dass:

- Mehrere Optionen auswählbar sind, da wir das `multiple`-Attribut eingeschlossen haben.
- Das `size`-Attribut bewirkt, dass gleichzeitig nur 4 Zeilen angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente hinzugefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Visualisierung im Allgemeinen darin besteht, dass der Gruppenname fett hervorgehoben wird und die Optionen eingerückt sind.
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
          >formularassoziiertes </a
        >Element
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
      <td>Keine, sowohl das Anfangs- als auch das Endtag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
        <code>multiple</code>-Attribut und ohne
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne
        <code>multiple</code>-Attribut und ohne
        <code>size</code>-Attribut größer als 1, ansonsten kein
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

- Ereignisse, ausgelöst von `<select>`: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
