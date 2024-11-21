---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element stellt eine Steuerung dar, die ein Menü von Optionen bietet.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt eine typische Verwendung von `<select>`. Es wird ein `id`-Attribut festgelegt, um es mit einem {{htmlelement("label")}} für Barrierefreiheitszwecke zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts zu repräsentieren, der an den Server gesendet wird. Jede Menüoption wird durch ein innerhalb von `<select>` verschachteltes {{htmlelement("option")}}-Element definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den Datenwert enthält, der an den Server gesendet werden soll, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den innerhalb des Elements enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf ein `<option>`-Element aufnehmen, um es standardmäßig auszuwählen, wenn die Seite zum ersten Mal geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie verwenden können, um es zu steuern, wie `multiple`, um festzulegen, ob mehrere Optionen ausgewählt werden können, und `size`, um festzulegen, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formular-Input-Attribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente integrieren, um Trennlinien zu erstellen, die visuelle Pausen zwischen den Optionen hinzufügen.

Weitere Beispiele finden Sie unter [Die nativen Formular-Widgets: Drop-down-Inhalte](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "Benutzeragenten")}} bereitstellt. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Anweisungen zur Verwendung von Autovervollständigung.
- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen anzugeben, dass ein Formularelement beim Laden der Seite den Fokuseingang haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom umgebenden Element, z. B. {{htmlelement("fieldset")}}; wenn kein enthaltendes Element das `disabled`-Attribut gesetzt hat, ist die Steuerung aktiviert.
- `form`

  - : Das {{HTMLElement("form")}} Element, mit dem das `<select>` verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahren-`<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht Ihnen, `<select>`-Elemente mit `<form>`-Elementen im gesamten Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wird es nicht angegeben, kann nur eine Option gleichzeitig ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdowns an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem Nicht-Leerstring-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als scrollbare Liste dargestellt wird (z. B. wenn `multiple` angegeben ist), repräsentiert dieses Attribut die Anzahl der Zeilen in der Liste, die gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Select-Element als scrollbare Liste darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; jedoch wurde in der Praxis festgestellt, dass dies einige Websites stört und kein anderer Browser dies aktuell tut, weshalb Mozilla sich entschieden hat, vorerst `0` mit Firefox zurückzugeben.

## Verwendungshinweise

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es verschiedene Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd>- oder <kbd>Umschalttaste</kbd> (je nach Betriebssystem) gedrückt halten und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur, der unten beschrieben wird, scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS kollidieren die <kbd>Strg</kbd> + <kbd>Auf</kbd> und <kbd>Strg</kbd> + <kbd>Ab</kbd> Tastaturkürzel mit den OS-Standardkürzeln für _Mission Control_ und _Anwendungsfenster_, daher müssen diese deaktiviert werden, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie Folgendes tun:

- Den Fokus auf das `<select>`-Element setzen (z. B. mit <kbd>Tab</kbd>).
- Ein Element am oberen oder unteren Rand des Bereichs auswählen, den sie auswählen möchten, indem sie mit den <kbd>Aufwärts</kbd>- und <kbd>Abwärts</kbd>-Pfeiltasten die Optionen durchgehen.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die <kbd>Aufwärts</kbd>- und <kbd>Abwärts</kbd>-Pfeiltasten verwenden, um den Umfang der ausgewählten Elemente zu erhöhen oder zu verringern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie Folgendes tun:

- Den Fokus auf das `<select>`-Element setzen (z. B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Aufwärts</kbd>- und <kbd>Abwärts</kbd>-Pfeiltasten verwenden, um die "fokussierte" Auswahloption zu ändern, d. h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption wird mit einem gepunkteten Umriss hervorgehoben, ebenso wie ein tastaturfokussierter Link.
- <kbd>Leertaste</kbd> drücken, um die "fokussierte" Auswahloption zu wählen/abwählen.

## Styling mit CSS

Das `<select>`-Element ist bekanntlich schwer produktiv mit CSS zu stylen. Sie können bestimmte Aspekte wie bei jedem anderen Element beeinflussen — z.B. die Steuerung des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/CSS_fonts) usw., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-Aussehen zu entfernen.

Diese Eigenschaften führen jedoch nicht zu einem konsistenten Ergebnis über die Browser hinweg, und es ist schwierig, Elemente verschiedener Formulartypen in einer Spalte auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu kontrollieren. Wenn Sie die volle Kontrolle wünschen, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-sematischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zur Bereitstellung von Semantik zu entwickeln.

Weitere nützliche Informationen zum Styling von `<select>` finden Sie unter:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht im Barrierefreiheitsbaum sichtbar gemacht werden und daher nicht an Hilfstechnologien weitergegeben werden.

## Beispiele

### Einfacher Select

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

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung mittels {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um es dem Benutzer zu erleichtern, den Inhalt im Dropdown zu verstehen.

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

- Mehrere Optionen aus gewählt werden können, da wir das `multiple`-Attribut enthalten haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingebaut, um die Optionen in verschiedene Gruppen aufzuteilen. Dies ist eine rein visuelle Gruppierung, die Visualisierung besteht im Allgemeinen darin, dass der Gruppenname fett angezeigt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option enthält ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließende Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierte Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#interactive_content">interaktive Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed">gelistete</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable">beschriftbare</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable">zurücksetzbare</a>, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable">einreichbare</a>
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_">formulareigene</a> Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} oder {{HTMLElement("hr")}} Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierte Inhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code> Attribut und <strong>kein</strong>
        <code>size</code> Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
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

- Ereignisse ausgelöst von `<select>`: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}} Element
- Das {{HTMLElement("optgroup")}} Element
