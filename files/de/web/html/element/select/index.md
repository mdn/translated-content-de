---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<select>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Steuerung, die ein Optionsmenü bereitstellt.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es wird ein `id`-Attribut zugewiesen, um die Barrierefreiheit in Verbindung mit einem {{htmlelement("label")}} zu ermöglichen, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts zu repräsentieren, der an den Server übermittelt wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das innerhalb des `<select>`-Elements geschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value) Attribut haben, das den Datenwert enthält, der an den Server gesendet wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, wird der Standardwert auf den innerhalb des Elements enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut zu einem `<option>`-Element hinzufügen, um es standardmäßig ausgewählt zu machen, wenn die Seite erstmals geladen wird.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value) Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige einzigartige Attribute, die Sie zur Steuerung verwenden können, wie zum Beispiel `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können auch {{HTMLElement("option")}} Elemente innerhalb von {{HTMLElement("optgroup")}} Elementen schachteln, um separate Gruppen von Optionen im Dropdown-Menü zu erstellen. Außerdem können {{HTMLElement("hr")}} Elemente hinzugefügt werden, um visuelle Trennlinien zwischen den Optionen zu setzen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines [Benutzeragenten](/de/docs/Glossary/user_agent) bietet. Siehe [Das HTML Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses Boolesche Attribut ermöglicht es, dass ein Formularelement den Eingabefokus hat, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, wie z.B. {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit dem `disabled`-Attribut gibt, wird das Steuerelement aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` assoziiert werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahren `<form>`-Element, falls vorhanden, assoziiert.)

    Dieses Attribut ermöglicht, `<select>` Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses Boolesche Attribut gibt an, dass in der Liste mehrere Optionen ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option auf einmal ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser anstelle eines einzeiligen Dropdowns ein scrollendes Listenfeld an.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein Boolesches Attribut, das anzeigt, dass eine Option mit einem nicht-leeren Stringwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als scrollendes Listenfeld präsentiert wird (z.B. wenn `multiple` angegeben ist), stellt dieses Attribut die Anzahl der Zeilen dar, die in der Liste gleichzeitig sichtbar sein sollen. Browser sind nicht verpflichtet, ein Select-Element als gescrolltes Listenfeld darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; jedoch hat sich in der Praxis herausgestellt, dass dies einige Websites beeinträchtigt, und kein anderer Browser macht das derzeit, daher hat sich Mozilla dazu entschieden, vorläufig weiterhin `0` in Firefox zurückzugeben.

## Anwendungshinweise

### Auswählen mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, um in einem `<select>`-Element mit einem `multiple`-Attribut mehrere Optionen auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Umschalt</kbd>-Tasten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) halten und dann auf mehrere Optionen klicken, um diese auszuwählen/auszuwählen.

> [!WARNING]
> Der im Folgenden beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS stehen die <kbd>Strg</kbd> + <kbd>Nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Nach unten</kbd> Tastenkombinationen in Konflikt mit den standardmäßigen Betriebssystem-Tastenkombinationen für _Mission Control_ und _Anwendungsfenster_. Diese müssen deaktiviert werden, bevor die Tastenkombinationen funktionieren.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen durch:

- Den Fokus auf das `<select>`-Element (z.B. durch

  <kbd>Tab</kbd>

  ).

- Auswahl eines Elements am Anfang oder Ende des Bereichs, den sie auswählen möchten, unter Verwendung der

  <kbd>Pfeil oben</kbd>

  und

  <kbd>Pfeil unten</kbd>

  Tasten, um in der Liste nach oben und unten zu navigieren.

- Halten der

  <kbd>Umschalt</kbd>

  Taste und anschließender Verwendung der

  <kbd>Pfeil oben</kbd>

  und

  <kbd>Pfeil unten</kbd>

  Tasten, um den Bereich der ausgewählten Elemente zu erweitern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen durch:

- Den Fokus auf das `<select>`-Element (z.B. durch

  <kbd>Tab</kbd>

  ).

- Halten der

  <kbd>Strg</kbd>

  Taste und anschließende Verwendung der

  <kbd>Pfeil oben</kbd>

  und

  <kbd>Pfeil unten</kbd>

  Tasten, um die "fokussierte" Auswahloption zu ändern, d.h. die, die ausgewählt wird, wenn man sich entscheidet, es zu tun. Die "fokussierte" Auswahloption wird mit einem gepunkteten Umriss hervorgehoben, ähnlich wie ein tastaturfokussierter Link.

- Drücken von

  <kbd>Space</kbd>

  , um die "fokussierte" Auswahloption auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element ist bekanntermaßen schwer effektiv mit CSS zu gestalten. Sie können bestimmte Aspekte wie jedes Element beeinflussen – zum Beispiel das Manipulieren des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model), der [angezeigten Schrift](/de/docs/Web/CSS/CSS_fonts) usw., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um die Standardsystemdarstellung zu entfernen.

Diese Eigenschaften führen jedoch nicht zu konsistenten Ergebnissen über verschiedene Browser hinweg, und es ist schwer, verschiedene Formularelementtypen in einer Spalte auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu kontrollieren. Wenn Sie die vollständige Kontrolle wünschen, sollten Sie überlegen, eine Bibliothek mit guten Styling-Möglichkeiten für Formularelemente zu verwenden oder Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Für weitere nützliche Informationen zum Styling von `<select>` siehe:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht in den Barrierefreiheitsbaum eingebunden sind und daher nicht für unterstützende Technologien zugänglich sind.

## Beispiele

### Einfaches Select

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

### Select mit Gruppierungsoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierungen, indem {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}} verwendet werden, um dem Benutzer das Verständnis des Inhalts im Dropdown-Menü zu erleichtern.

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

- Mehrere Optionen ausgewählt werden können, da wir das `multiple`-Attribut hinzugefügt haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können nach unten scrollen, um alle Optionen zu sehen.
- Wir haben {{htmlelement("optgroup")}}-Elemente hinzugefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist ein rein visuelles Gruppieren, die Visualisierung besteht allgemein darin, dass der Gruppenname fett angezeigt wird und die Optionen eingerückt werden.
- Die "Hamster"-Option enthält ein `disabled` Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
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
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >Formular-assoziiertes </a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind Pflicht.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code> Attribut und <strong>keine</strong>
        <code>size</code> Attribut größer als 1, sonst
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

- Ereignisse, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}} Element
- Das {{HTMLElement("optgroup")}} Element
