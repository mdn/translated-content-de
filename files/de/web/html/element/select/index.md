---
title: "<select>: Das HTML-Selektierelement"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element stellt ein Steuerungselement dar, das ein Auswahlmenü bietet.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt eine typische Nutzung von `<select>`. Es erhält ein `id`-Attribut, um es mit einem {{htmlelement("label")}} für Barrierefreiheitszwecke zu verbinden, sowie ein `name`-Attribut, um den Namen des zugeordneten Datenpunkts zu repräsentieren, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` geschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den Datenwert enthält, der an den Server gesendet wird, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den innerhalb des Elements enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut bei einem `<option>`-Element hinzufügen, damit es beim ersten Laden der Seite standardmäßig ausgewählt ist.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Steuerung nutzen können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen auf einmal angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formular-Eingabeattribute wie `required`, `disabled`, `autofocus` etc.

Darüber hinaus können Sie {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen schachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Weitere Beispiele finden Sie unter [Die nativen Formular-Widgets: Inhalte im Dropdown-Menü](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User Agents")}} bietet. Siehe [Das HTML-Autovervollständigungsattribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Nutzung von Autovervollständigung.
- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom enthaltenen Element, zum Beispiel {{htmlelement("fieldset")}}; wenn es kein enthaltendes Element mit dem gesetzten `disabled`-Attribut gibt, ist die Steuerung aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verknüpft ist (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahren-`<form>`-Element verbunden, sofern vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollbare Listbox anstelle eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem nicht leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn die Steuerung als scrollbare Listbox dargestellt wird (z.B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die auf einmal sichtbar sein sollten. Browser sind nicht verpflichtet, ein Selektierelement als scrollbare Listbox darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut der HTML-Spezifikation sollte der Standardwert für `size` `1` sein; jedoch hat sich in der Praxis gezeigt, dass dies einige Websites unterbricht, und kein anderer Browser macht das derzeit, daher hat sich Mozilla entschieden, vorerst `0` mit Firefox zurückzugeben.

## Nutzungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Ctrl</kbd>-, <kbd>Command</kbd>-, oder <kbd>Shift</kbd>-Tasten gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur, der unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die Tastenkombinationen <kbd>Ctrl</kbd> + <kbd>Up</kbd> und <kbd>Ctrl</kbd> + <kbd>Down</kbd> in Konflikt mit den OS-Standardkürzeln für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. durch

  <kbd>Tab</kbd>

  ).

- Ein Element am oberen oder unteren Rand des Bereichs, den sie auswählen möchten, auswählen, indem sie die

  <kbd>Up</kbd>

  und

  <kbd>Down</kbd>

  Pfeiltasten verwenden, um durch die Optionen zu navigieren.

- Die

  <kbd>Shift</kbd>

  Taste gedrückt halten und dann die

  <kbd>Up</kbd>

  und

  <kbd>Down</kbd>

  Pfeiltasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. durch

  <kbd>Tab</kbd>

  ).

- Die

  <kbd>Ctrl</kbd>

  Taste gedrückt halten und dann die

  <kbd>Up</kbd>

  und

  <kbd>Down</kbd>

  Pfeiltasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. die Option, die ausgewählt wird, wenn Sie sich entscheiden, dies zu tun. Die "fokussierte" Auswahloption wird mit einem gestrichelten Umriss hervorgehoben, ähnlich wie ein mit der Tastatur fokussierter Link.

- Durch Drücken von

  <kbd>Space</kbd>

  die "fokussierten" Auswahloptionen auswählen/abwählen.

## Styling mit CSS

Das `<select>`-Element ist notorisch schwer produktiv mit CSS zu stylen. Sie können bestimmte Aspekte wie jedes Element beeinflussen - zum Beispiel das Manipulieren des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/CSS_fonts) usw., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemaussehen zu entfernen.

Diese Eigenschaften erzeugen jedoch kein konsistentes Ergebnis über verschiedene Browser hinweg und es ist schwierig, Elemente wie unterschiedliche Typen von Formularelementen in einer Spalte auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu kontrollieren. Wenn Sie volle Kontrolle erlangen möchten, sollten Sie in Erwägung ziehen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Für nützliche Informationen zum Styling von `<select>`, sehen Sie:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweiterte Stylingmöglichkeiten für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Barrierefreiheitsbaums exponiert sind und daher nicht für unterstützende Technologien zugänglich sind.

## Beispiele

### Einfaches Auswahlmenü

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

### Auswahlmenü mit Gruppenoptionen

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

### Fortgeschrittenes Auswahlmenü mit mehreren Funktionen

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

- Mehrere Optionen ausgewählt werden können, da wir das `multiple`-Attribut eingeschlossen haben.
- Das `size`-Attribut dazu führt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingefügt, um die Optionen in verschiedene Gruppen einzuteilen. Dies ist eine rein visuelle Gruppierung, ihre Darstellung besteht im Allgemeinen darin, dass der Gruppenname fett dargestellt wird und die Optionen eingerückt sind.
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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >benennbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittlungsfähig</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >formular-assoziiertes</a
        > Element
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalte</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne
        <code>multiple</code>-Attribut und ohne
        <code>size</code>-Attribut größer als 1, ansonsten keine
        <code>role</code> zugelassen
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
