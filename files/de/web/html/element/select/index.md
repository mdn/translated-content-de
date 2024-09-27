---
title: "<select>: Das HTML Select-Element"
slug: Web/HTML/Element/select
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<select>`**-Element in [HTML](/de/docs/Web/HTML) stellt ein Steuerelement dar, das ein Auswahlmenü bereitstellt.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es hat ein `id`-Attribut, um es mit einem {{htmlelement("label")}} für Zugänglichkeitszwecke zu verbinden, sowie ein `name`-Attribut, um den Namen des verbundenen Datenpunkts darzustellen, der an den Server gesendet wird. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element definiert, das im `<select>` verschachtelt ist.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut haben, das den Datenwert enthält, der an den Server gesendet wird, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut enthalten ist, ist der Wert standardmäßig der im Element enthaltene Text. Sie können ein [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf einem `<option>`-Element einfügen, um es standardmäßig auszuwählen, wenn die Seite zum ersten Mal geladen wird.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element hat einige eindeutige Attribute, die Sie nutzen können, um es zu steuern, wie z. B. `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um festzulegen, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formulareingabe-Attribute wie `required`, `disabled`, `autofocus` usw.

Sie können weitere {{HTMLElement("option")}}-Elemente in {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um visuelle Trennungen zwischen Optionen hinzuzufügen.

Für weitere Beispiele siehe [Die nativen Formularelemente: Dropdown-Inhalte](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines [User-Agents](/de/docs/Glossary/user_agent) bietet. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umschließenden Element, z. B. {{htmlelement("fieldset")}}; wenn es kein umschließendes Element mit gesetztem `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- `form`

  - : Das {{HTMLElement("form")}}-Element, das mit dem `<select>` verknüpft werden soll (sein _Formularinhaber_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem übergeordneten `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdowns.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Ein boolesches Attribut, das angibt, dass eine Option mit nicht leerem Zeichenfolgenwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Wenn das Steuerelement als scrollbares Listenfeld präsentiert wird (z. B., wenn `multiple` angegeben ist), stellt dieses Attribut die Anzahl der Zeilen in der Liste dar, die gleichzeitig sichtbar sein sollten. Browser sind nicht verpflichtet, ein Select-Element als gescrollte Liste darzustellen. Der Standardwert ist `0`.

    > [!NOTE]
    > Laut HTML-Spezifikation sollte der Standardwert für die Größe `1` sein; in der Praxis wurde jedoch festgestellt, dass dies einige Webseiten beschädigt, und kein anderer Browser tut dies derzeit, sodass Mozilla beschlossen hat, vorerst `0` mit Firefox zurückzugeben.

## Hinweise zur Verwendung

### Auswahl mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Umschalt</kbd>-Tasten (je nachdem, was für Ihr Betriebssystem sinnvoll ist) halten und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur, wie unten beschrieben, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die <kbd>Strg</kbd> + <kbd>Pfeil hoch</kbd> und <kbd>Strg</kbd> + <kbd>Pfeil runter</kbd> Tastenkombinationen im Konflikt mit den OS-Standardtastenkombinationen für _Mission Control_ und _Anwendungsfenster_, sodass Sie diese ausschalten müssen, bevor sie funktionieren.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem Sie:

- Das `<select>`-Element fokussieren (z. B. mit

  <kbd>Tab</kbd>

  ).

- Ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, indem sie die

  <kbd>Pfeil hoch</kbd>

  und

  <kbd>Pfeil runter</kbd>

  Cursor-Tasten verwenden, um in den Optionen nach oben und unten zu gehen.

- Die

  <kbd>Umschalt</kbd>

  -Taste gedrückt halten und dann die

  <kbd>Pfeil hoch</kbd>

  und

  <kbd>Pfeil runter</kbd>

  Cursor-Tasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z. B. mit

  <kbd>Tab</kbd>

  ).

- Die

  <kbd>Strg</kbd>

  -Taste gedrückt halten und dann die

  <kbd>Pfeil hoch</kbd>

  und

  <kbd>Pfeil runter</kbd>

  Cursor-Tasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden. Die "fokussierte" Auswahloption ist mit einer gepunkteten Umrandung hervorgehoben, ebenso wie ein tastaturfokussierter Link.

- Drücken Sie

  <kbd>Leertaste</kbd>

  , um ausgewählte Optionen ein-/auszuschalten.

## Styling mit CSS

Das `<select>`-Element ist notorisch schwer mit CSS produktiv zu stylen. Sie können bestimmte Aspekte wie bei allen Elementen beeinflussen - zum Beispiel die Manipulation des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model), der angezeigten Schriftart, etc., und Sie können die {{cssxref("appearance")}}-Eigenschaft verwenden, um das Standardsystem-Aussehen zu entfernen.

Diese Eigenschaften führen jedoch nicht zu einem konsistenten Ergebnis über verschiedene Browser hinweg, und es ist schwierig, verschiedene Arten von Formular-Elementen in einer Spalte aneinander auszurichten. Die interne Struktur des `<select>`-Elements ist komplex und schwer zu kontrollieren. Wenn Sie volle Kontrolle erlangen möchten, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formularelementen zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Für nützliche Informationen zum Styling von `<select>`, siehe:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` in einem `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Barrierefreiheitsbaums exponiert sind und daher nicht für unterstützende Technologien sichtbar sind.

## Beispiele

### Einfaches select

Das folgende Beispiel erstellt ein sehr einfaches Dropdown-Menü, bei dem die zweite Option standardmäßig ausgewählt ist.

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

### Select mit gruppierten Optionen

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

### Erweitertes Select mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt mehr Funktionen, die Sie mit einem `<select>`-Element verwenden können:

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

- Mehrere Optionen sind auswählbar, da wir das `multiple`-Attribut eingefügt haben.
- Das `size`-Attribut bewirkt, dass nur 4 Zeilen gleichzeitig angezeigt werden; Sie können scrollen, um alle Optionen anzuzeigen.
- Wir haben {{htmlelement("optgroup")}}-Elemente eingefügt, um die Optionen in verschiedene Gruppen zu unterteilen. Dies ist eine rein visuelle Gruppierung, deren Visualisierung typischerweise daraus besteht, dass der Gruppenname fett dargestellt wird und die Optionen eingerückt sind.
- Die "Hamster"-Option beinhaltet ein `disabled`-Attribut und kann daher überhaupt nicht ausgewählt werden.

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
          >Phrasierungsinhalt</a
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
          >formularassoziiertes </a
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
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> ohne <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
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

- Ereignisse, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
