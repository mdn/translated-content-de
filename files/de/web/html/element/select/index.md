---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element stellt ein Steuerungselement dar, das ein Menü mit Optionen bietet.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es erhält ein `id`-Attribut, um es zu Zugänglichkeitszwecken mit einem {{htmlelement("label")}} zu verknüpfen, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts darzustellen, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut enthalten, das den zu übermittelnden Datenwert enthält, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den Text innerhalb des Elements gesetzt. Sie können auf einem `<option>`-Element ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut einfügen, um es standardmäßig auszuwählen, wenn die Seite zuerst geladen wird.

Ein `<select>`-Element wird in JavaScript durch ein {{domxref("HTMLSelectElement")}}-Objekt dargestellt, und dieses Objekt hat eine {{domxref("HTMLSelectElement.value", "value")}}-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Kontrolle verwenden können, wie `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formular-Eingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können ferner {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen im Dropdown zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen den Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion des {{Glossary("user agent", "Benutzeragenten")}} bietet. Details zur Verwendung der Autovervollständigung finden Sie unter [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete).
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement bei Seiteaufruf den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umschließenden Element, z.B. vom {{htmlelement("fieldset")}}; wenn es kein umschließendes Element mit gesetztem `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- `form`
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verknüpft ist (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahr-`<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahr-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses Boolean-Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option gleichzeitig ausgewählt werden. Bei Angabe von `multiple` zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn die Steuerung als scrollbare Liste präsentiert wird (z.B. wenn `multiple` angegeben ist), stellt dieses Attribut die Anzahl der Zeilen in der Liste dar, die gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Select-Element als scrollbare Liste darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut Spezifikation sollte der Standardwert für size `1` sein; jedoch wurde festgestellt, dass dies einige Websites beeinträchtigt, und kein anderer Browser dies derzeit tut, so dass sich Mozilla entschlossen hat, vorerst weiterhin `0` für Firefox zu verwenden.

## Verwendungsnotizen

### Auswahl mehrerer Optionen

Auf einem Desktop-Computer gibt es verschiedene Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd>- oder <kbd>Shift</kbd>-Tasten gedrückt halten (je nachdem, was für Ihr Betriebssystem sinnvoll ist) und dann mehrere Optionen anklicken, um sie auszuwählen/abwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS kollidieren die Tastenkombinationen <kbd>Strg</kbd> + <kbd>Pfeil hoch</kbd> und <kbd>Strg</kbd> + <kbd>Pfeil runter</kbd> mit den standardmäßigen OS-Verknüpfungen für _Mission Control_ und _Anwendungsfenster_, so dass Sie diese deaktivieren müssen, bevor es funktioniert.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. mit

  <kbd>Tab</kbd>

  ).

- Ein Element am Anfang oder Ende des Bereichs auswählen, den sie auswählen möchten, indem sie die

  <kbd>Pfeil hoch</kbd>

  und

  <kbd>Pfeil runter</kbd>

  Cursor-Tasten verwenden, um durch die Optionen zu navigieren.

- Die

  <kbd>Shift</kbd>

  Taste gedrückt halten und dann die

  <kbd>Pfeil hoch</kbd>

  und

  <kbd>Pfeil runter</kbd>

  Cursor-Tasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen durch:

- Das `<select>`-Element fokussieren (z.B. mit

  <kbd>Tab</kbd>

  ).

- Die

  <kbd>Strg</kbd>

  Taste gedrückt halten, dann die

  <kbd>Pfeil hoch</kbd>

  und

  <kbd>Pfeil runter</kbd>

  Cursor-Tasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption wird mit einem punktierten Umriss hervorgehoben, ähnlich wie ein fokussierter Link über die Tastatur.

- Drücken Sie

  <kbd>Leertaste</kbd>

  um "fokussierte" Optionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist bekanntermaßen schwierig produktiv mit CSS zu gestalten. Sie können bestimmte Aspekte beeinflussen wie jedes andere Element – zum Beispiel die Manipulation des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/CSS_fonts) usw., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige Systemaussehen zu entfernen.

Diese Eigenschaften führen jedoch nicht zu einem konsistenten Ergebnis in allen Browsern, und es ist schwierig, verschiedene Typen von Formularelementen in einer Spalte auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu kontrollieren. Wenn Sie die volle Kontrolle haben möchten, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zur Bereitstellung von Semantik zu erstellen.

Für nützliche Informationen zur Gestaltung von `<select>` siehe:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>`-Element innerhalb eines `<select>` sollte rein dekorativ betrachtet werden, da es derzeit nicht im Barrierefreiheitsbaum sichtbar ist und daher nicht für unterstützende Technologien sichtbar ist.

## Beispiele

### Einfaches Select

Das folgende Beispiel erstellt ein sehr einfaches Dropdown-Menü, bei dem die zweite Option standardmäßig ausgewählt ist.

```html
<!-- Der zweite Wert wird anfänglich ausgewählt sein -->
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

#### Ergebnis

{{EmbedLiveSample("Basic_select", "", "100")}}

### Select mit Gruppierungsoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung mithilfe von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, um dem Benutzer das Verständnis der Inhalte im Dropdown zu erleichtern.

```html
<label for="hr-select">Ihr Lieblingsessen</label> <br />

<select name="foods" id="hr-select">
  <option value="">Wählen Sie ein Essen</option>
  <hr />
  <optgroup label="Obst">
    <option value="apple">Äpfel</option>
    <option value="banana">Bananen</option>
    <option value="cherry">Kirschen</option>
    <option value="damson">Pflaumen</option>
  </optgroup>
  <hr />
  <optgroup label="Gemüse">
    <option value="artichoke">Artischocken</option>
    <option value="broccoli">Brokkoli</option>
    <option value="cabbage">Kohl</option>
  </optgroup>
  <hr />
  <optgroup label="Fleisch">
    <option value="beef">Rindfleisch</option>
    <option value="chicken">Hähnchen</option>
    <option value="pork">Schweinefleisch</option>
  </optgroup>
  <hr />
  <optgroup label="Fisch">
    <option value="cod">Kabeljau</option>
    <option value="haddock">Schellfisch</option>
    <option value="salmon">Lachs</option>
    <option value="turbot">Steinbutt</option>
  </optgroup>
</select>
```

#### Ergebnis

{{EmbedLiveSample("select_with_grouping_options", "", "100")}}

### Erweitertes Select mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt weitere Funktionen, die Sie an einem `<select>`-Element verwenden können:

```html
<label>
  Bitte wählen Sie ein oder mehrere Haustiere:
  <select name="pets" multiple size="4">
    <optgroup label="Vierbeinige Haustiere">
      <option value="dog">Hund</option>
      <option value="cat">Katze</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Fliegende Haustiere">
      <option value="parrot">Papagei</option>
      <option value="macaw">Ara</option>
      <option value="albatross">Albatros</option>
    </optgroup>
  </select>
</label>
```

#### Ergebnis

{{EmbedLiveSample("Advanced_select_with_multiple_features", "", "100")}}

Sie werden sehen, dass:

- Mehrere Optionen auswählbar sind, da wir das `multiple`-Attribut hinzugefügt haben.
- Das `size`-Attribut sorgt dafür, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente hinzugefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Visualisierung im Allgemeinen darin besteht, dass der Gruppenname fettgedruckt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option enthält ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Content-Kategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierender Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >listenfähig</a
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
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierenden Inhalt</a
        > erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne <strong>mehrfaches</strong>
        <code>multiple</code>-Attribut und kein
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne <strong>mehrfaches</strong>
        <code>multiple</code>-Attribut und kein
        <code>size</code>-Attribut größer als 1, ansonsten keine
        <code>role</code> erlaubt
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLSelectElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Ereignisse ausgelöst durch `<select>`: {{domxref("HTMLElement/change_event", "change")}}, {{domxref("Element/input_event", "input")}}
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
