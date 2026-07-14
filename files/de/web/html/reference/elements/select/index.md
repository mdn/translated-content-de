---
title: "`<select>` HTML-Selektieren-Element"
short-title: <select>
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 9edb26a033a11bcc1e101814a466c30d13e09f43
---

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein Steuerungselement, das ein Menü mit Optionen bietet.

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

Das obige Beispiel zeigt die typische Verwendung von `<select>`. Es hat ein `id`-Attribut, um es mit einem {{htmlelement("label")}} für Barrierefreiheitszwecke zu verbinden, sowie ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts zu repräsentieren, der an den Server übermittelt wird. Jede Menüoption wird durch ein innerhalb von `<select>` verschachteltes {{htmlelement("option")}}-Element definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, das den zu übermittelnden Datenwert an den Server enthält, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, wird der Wert standardmäßig auf den im Element enthaltenen Text gesetzt. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf ein `<option>`-Element setzen, um es standardmäßig ausgewählt zu machen, wenn die Seite geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert, und dieses Objekt besitzt eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Das `<select>`-Element verfügt über einige einzigartige Attribute, die Sie verwenden können, um es zu steuern, wie z.B. `multiple`, um anzugeben, ob mehrere Optionen ausgewählt werden können, und `size`, um anzugeben, wie viele Optionen gleichzeitig angezeigt werden sollen. Es akzeptiert auch die meisten allgemeinen Formular-Eingabeattribute wie `required`, `disabled`, `autofocus` usw.

Sie können weiterhin {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einschließen, um Trennlinien zu schaffen, die optische Abgrenzungen zwischen Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "user agent's")}} bereitstellt. Siehe [Das HTML-Autovervollständigungsattribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste von Werten und Details zur Verwendung von Autovervollständigung.
- `autofocus`
  - : Dieses Boolesche Attribut erlaubt es Ihnen anzugeben, dass ein Formularsteuerelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement die Einstellung vom enthaltenen Element, z.B. {{htmlelement("fieldset")}}; wenn es kein enthaltenes Element mit gesetztem `disabled`-Attribut gibt, dann ist das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>`-Element verbunden werden soll (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem Vorfahren-`<form>`-Element verbunden, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente mit `<form>`s irgendwo im Dokument zu verbinden, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolesche Attribut zeigt an, dass mehrere Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann nur eine Option auf einmal ausgewählt werden. Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollende Listenbox anstelle eines einzeiligen Dropdowns. Mehrere ausgewählte Optionen werden unter Verwendung des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Array-Konvention übermittelt, z.B., `name=value1&name=value2`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Ein Boolesches Attribut, das anzeigt, dass eine Option mit einem nicht-leeren Stringwert ausgewählt werden muss.
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Wenn das Steuerelement als scrollende Listenbox dargestellt wird (z.B. wenn `multiple` angegeben ist), gibt dieses Attribut die Anzahl der Zeilen in der Liste an, die gleichzeitig sichtbar sein sollen. Browser müssen ein Selektions-Element nicht als scrollende Listenbox anzeigen. Der Standardwert ist `0`.

    > [!NOTE]
    > Gemäß der HTML-Spezifikation sollte der Standardwert für Size `1` sein; jedoch hat sich in der Praxis gezeigt, dass dies einige Websites bricht, und kein anderer Browser tut das derzeit, also hat sich Mozilla dazu entschieden, mit Firefox vorerst weiterhin `0` zurückzugeben.

## Verwendungshinweise

### Optionen innerhalb von Umhüllungselementen

Das `<select>`-Element baut seine Liste von Optionen aus allen `<option>`-Nachkommen auf, nicht nur aus seinen direkten Kindern.
Dies bedeutet, dass Optionen in andere Elemente wie {{HTMLElement("div")}}-Elemente eingewickelt werden können und sie dennoch als auswählbare Optionen im Dropdown erscheinen und in das Formular eingegliedert werden.
Umhüllungselemente sind nützlich zum Gestalten in [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), haben jedoch keinen Einfluss auf das Verhalten der Auswahl: sie erstellen keine Gruppen, Beschriftungen oder Trennlinien.
Um Optionen unter einer Überschrift zu gruppieren, verwenden Sie ein {{HTMLElement("optgroup")}}; ein {{HTMLElement("option")}} zählt als Teil eines `<optgroup>`, wenn die Gruppe ein Vorfahre ist, sodass Umhüllungselemente auch innerhalb einer Gruppe verwendet werden können, ohne die Zuordnung zu brechen.

> [!NOTE]
> Browser mit modernem Parsing-Verhalten bewahren alle Elemente innerhalb eines `<select>` im DOM auf — einschließlich Umhüllungselementen, {{HTMLElement("button")}} und {{HTMLElement("selectedcontent")}}.
> Ältere Browser entfernen stattdessen nicht erlaubte Elemente beim Parsen, wobei nur die `<option>`, `<optgroup>`, und `<hr>`-Struktur erhalten bleibt.
> Infolgedessen funktionieren Gestaltung, Markup oder Skripte, die auf den entfernten Elementen basieren, nicht in älteren Browsern.

### Auswahl mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen:

Maus-Benutzer können die <kbd>Strg</kbd>-, <kbd>Befehl</kbd>- oder <kbd>Umschalt</kbd>-Tasten gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der Mechanismus zum Auswählen mehrerer nicht angrenzender Elemente über die Tastatur, die unten beschrieben werden, scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS stehen die <kbd>Strg</kbd> + <kbd>Nach oben</kbd>- und <kbd>Strg</kbd> + <kbd>Nach unten</kbd>-Shortcuts im Konflikt mit den OS-Standards für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, mit den <kbd>Nach oben</kbd>- und <kbd>Nach unten</kbd>-Pfeiltasten, um durch die Optionen zu navigieren.
- Die <kbd>Umschalt</kbd>-Taste gedrückt halten und dann die <kbd>Nach oben</kbd>- und <kbd>Nach unten</kbd>-Pfeiltasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Das `<select>`-Element fokussieren (z.B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Nach oben</kbd>- und <kbd>Nach unten</kbd>-Pfeiltasten verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn sie dies tun. Die "fokussierte" Auswahloption wird mit einer gepunkteten Umrandung hervorgehoben, genauso wie ein mit der Tastatur fokussierter Link.
- Die <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Gestaltung mit CSS

Das `<select>`-Element war historisch schwer effektiv mit CSS zu gestalten.
Die folgenden Leitfäden enthalten Informationen zu Funktionen, die vollständig anpassbare Auswahl-Elemente ermöglichen:

- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare Auswahl-Listenboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Traditionelle Auswahlgestaltung

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder bei älteren Codebasen, wo sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-`appearance` zu entfernen.

Es ist jedoch schwierig, ein konsistentes Ergebnis über verschiedene Browser hinweg mit traditionellen `<select>`-Elementen zu erzielen. Wenn Sie volle Kontrolle erhalten möchten, sollten Sie erwägen, eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formularelementen zu verwenden, oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-sematischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um die Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudo-Klasse verwenden, um `<select>`-Elemente im geöffneten Zustand zu gestalten, das heißt, wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (diese mit dem gesetzten [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut) — sie neigen dazu, sich als scrollende Listenbox anstelle eines Dropdowns darzustellen, daher haben sie keinen offenen Zustand.

Für weitere Informationen zur Gestaltung traditioneller `<select>`-Elemente siehe:

- [Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die kontrolliert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert sind.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da sie derzeit nicht innerhalb des Barrierefreiheitsbaums exponiert sind und daher nicht von unterstützenden Technologien erkannt werden.

## Beispiele

### Einfaches Select

Im folgenden Beispiel wird ein Dropdown-Menü mit drei Werten erstellt. Die zweite Option enthält das `selected`-Attribut, wodurch diese Option standardmäßig ausgewählt wird.

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

Das folgende Beispiel ist komplexer und zeigt mehr Funktionen, die Sie auf einem `<select>`-Element verwenden können:

- Das `multiple`-Attribut ermöglicht die Auswahl von mehr als einer Option.
- Das `size`-Attribut ist auf `4` gesetzt, was bedeutet, dass 4 Zeilen gleichzeitig angezeigt werden. Benutzer können scrollen, um alle Optionen anzuzeigen.
- Zwei {{htmlelement("optgroup")}}-Elemente sind enthalten, die zwei visuelle Gruppierungen schaffen, in der Regel mit dem Gruppenname fett gedruckt und die verschachtelten Optionen eingerückt.
- Das `disabled`-Attribut ist bei der "Hamster"-Option enthalten, wodurch diese Option nicht auswählbar ist.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >etikettierbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >Formular-assoziiertes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <ul>
          <li>{{HTMLElement("option")}}, {{HTMLElement("optgroup")}} oder {{HTMLElement("hr")}}-Elemente, optional vorangestellt durch ein {{htmlelement("button")}}-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element, wenn eine Dropdown-Box.</li>
          <li>{{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}} und {{htmlelement("noscript")}}-Elemente.</li>
        </ul>
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
        ohne <strong>kein</strong> <code>multiple</code>-Attribut und <strong>keines</strong>
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>
        ohne <strong>kein</strong> <code>multiple</code>-Attribut und <strong>keines</strong>
        <code>size</code>-Attribut größer als 1, ansonsten <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
        ist erlaubt, wird aber nicht empfohlen.
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
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- Ereignisse, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
