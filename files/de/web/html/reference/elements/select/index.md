---
title: "`<select>` HTML select element"
short-title: <select>
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Das **`<select>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Steuerung, die ein Menü von Optionen bietet.

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

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "Nutzeragenten")}} bietet. Siehe [Das HTML autocomplete Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste der Werte und Details zur Nutzung von Autovervollständigung.
- `autofocus`
  - : Dieses boolesche Attribut lässt Sie festlegen, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut besitzen.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung die Einstellung vom umgebenden Element, zum Beispiel {{htmlelement("fieldset")}}; ist kein umgebendes Element mit festgelegtem `disabled`-Attribut vorhanden, ist die Steuerung aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>` verbunden werden soll (sein _Formulareigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<select>` mit seinem Vorfahren `<form>`-Element verbunden, falls vorhanden.)

    Dieses Attribut erlaubt es Ihnen, `<select>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahr-`<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses boolesche Attribut zeigt an, dass null oder mehr Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Mehrfach ausgewählte Optionen werden mit der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Array-Konvention übermittelt, d.h. `name=value1&name=value2`. Wenn `multiple` festgelegt ist, ist der Standardwert von `size` `4` anstelle von `1`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen der Steuerung anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer mindestens eine Option auswählen muss, bevor das Formular abgesendet werden kann. Das `<select>` hat keine ausgewählten Optionen, wenn es keine Optionen hat, `multiple` angegeben ist und der Benutzer alle Optionen abwählt, der Wert des Selects programmatisch auf `""` gesetzt wird, oder nur die _Platzhalter-Label-Option_ ausgewählt ist. Eine andere Option als die Platzhalter-Label-Option wird als gültig angesehen, auch wenn ihr Wert ebenfalls leer ist.

    Die Platzhalter-Label-Option ist der Text, der in der Box angezeigt wird, bevor der Benutzer eine Auswahl trifft, wie das "--Bitte wählen Sie eine Option--" im obigen [Demo](#try_it). Semantisch wird sie als gleichwertig mit dem [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)-Attribut angesehen und nicht als tatsächliche Option betrachtet. Sie ist definiert als die erste Option in der Optionsliste, die ein direktes Kind des `<select>` ist (nicht innerhalb einer `<optgroup>`) und einen leeren String als Wert hat. Sie ist nur relevant, wenn die `size` `1` ist und `multiple` nicht angegeben ist; in allen anderen Fällen ist eine solche `<option>` aufgrund der Art und Weise, wie das `<select>` gerendert wird, einfach eine normale Option.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Dieses Attribut repräsentiert die Anzahl der Optionen, die auf einmal angezeigt werden sollen, und muss eine positive ganze Zahl sein. Wenn der Wert `1` ist, werden Browser ein Dropdown-Liste darstellen. Wenn der Wert größer als `1` ist, werden Browser eine scrollbare Listenbox rendern, die die angegebene Anzahl sichtbarer Zeilen hat. Wenn das Attribut nicht angegeben ist, ist der Standardwert `1`. Wenn das `multiple`-Attribut angegeben ist, ist der Standardwert `4`. Aufgrund der Abwärtskompatibilität wird die [`size`](/de/docs/Web/API/HTMLSelectElement/size)-Eigenschaft jedoch immer `0` als Standardwert zurückgeben.

## Verwendungshinweise

Typischerweise wird ein `<select>`-Element, wie andere Formularelemente, für Barrierefreiheitszwecke mit einem {{htmlelement("label")}} verbunden, sowie mit einem `name`-Attribut, um den Namen des zu übermittelnden Datenpunkts an den Server zu repräsentieren. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element innerhalb des `<select>` definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut haben, das den Datenwert enthält, der an den Server übermittelt wird, wenn diese Option ausgewählt wird. Wenn kein `value`-Attribut angegeben ist, entspricht der Wert standardmäßig dem innerhalb des Elements enthaltenen Text. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf ein `<option>` setzen, damit diese Option standardmäßig ausgewählt ist, wenn die Seite geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Sie können {{HTMLElement("option")}}-Elemente weiter in {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Separatoren zu schaffen, die visuelle Unterbrechungen zwischen Optionen hinzufügen.

Für weitere Beispiele siehe [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

### Optionen in Wrapper-Elementen

Das `<select>`-Element erstellt seine Liste von Optionen aus allen `<option>`-Nachkommen, nicht nur aus seinen direkten Kindern.
Dies bedeutet, dass Optionen in anderen Elementen, wie zum Beispiel {{HTMLElement("div")}}-Elementen, eingebettet sein können und sie dennoch als auswählbare Optionen im Dropdown erscheinen und in der Formularübermittlung enthalten sind.
Wrapper-Elemente sind nützlich für das Styling in [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), haben jedoch keinen Einfluss auf das Verhalten des Selects: sie erstellen keine Gruppen, Labels oder Separatoren.
Um Optionen unter einem Titel zu gruppieren, verwenden Sie ein {{HTMLElement("optgroup")}}; ein {{HTMLElement("option")}} zählt als Teil einer `<optgroup>`, wenn die Gruppe ein Vorfahr ist, sodass Wrapper-Elemente auch innerhalb einer Gruppe benutzt werden können, ohne die Verbindung zu beeinträchtigen.

> [!NOTE]
> Browser mit modernem Parsverhalten erhalten alle innerhalb eines `<select>` geschriebenen Elemente im DOM — einschließlich Wrapper-Elemente, {{HTMLElement("button")}} und {{HTMLElement("selectedcontent")}}.
> Ältere Browser entfernen stattdessen nicht zulässige Elemente beim Parsen und behalten nur die Struktur `<option>`, `<optgroup>` und `<hr>`.
> Daher funktionieren Styling, Markup oder Scripting, die von den entfernten Elementen abhängen, nicht in älteren Browsern.

### Auswahl mehrerer Optionen

Auf einem Desktop-Computer gibt es eine Reihe von Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut und einem `size`-Attribut größer als `1` auszuwählen.

Mausnutzer können die <kbd>Strg</kbd>-, <kbd>Befehlstaste</kbd>-, oder <kbd>Umschalttaste</kbd> (je nachdem, was für Ihr Betriebssystem sinnvoll ist) gedrückt halten und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zur Auswahl mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Auf macOS kollidieren die <kbd>Strg</kbd> + <kbd>Nach oben</kbd> und <kbd>Strg</kbd> + <kbd>Nach unten</kbd>-Tastenkombinationen mit den standardmäßig verwendeten OS-Verknüpfungen für _Mission Control_ und _Anwendungsfenster_, sodass Sie diese deaktivieren müssen, bevor es funktioniert.

Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element setzen (z.B. mit <kbd>Tab</kbd>).
- Ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, indem sie die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>-Pfeiltasten verwenden, um die Optionen nach oben und unten zu durchlaufen.
- Die <kbd>Umschalttaste</kbd> gedrückt halten und dann die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>-Pfeiltasten verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturnutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element setzen (z.B. mit <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd>-Pfeiltasten verwenden, um die "fokussierte" optionale Option zu ändern, d.h. diejenige, die ausgewählt wird, falls Sie dies tun möchten. Die "fokussierte" Auswahloption ist mit einer gepunkteten Umrandung hervorgehoben, ähnlich wie ein über die Tastatur fokussierter Link.
- Die <kbd>Leerzeichen</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/abzuwählen.

## Styling mit CSS

Das `<select>`-Element war historisch gesehen schwer effektiv mit CSS zu stylen.
Die folgenden Leitfäden enthalten Informationen über Funktionen, die vollständig anpassbare Select-Elemente ermöglichen:

- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare Select-Listenfelder](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Legacy-Select-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in alten Codebasen, in denen sie nicht verwendet werden können), sind Sie auf die Manipulation des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), der [angezeigten Schrift](/de/docs/Web/CSS/Guides/Fonts) etc. beschränkt. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das standardmäßige System-`appearance` zu entfernen.

Es ist jedoch schwierig, ein konsistentes Ergebnis in verschiedenen Browsern mit traditionellen `<select>`-Elementen zu erzielen. Wenn Sie die volle Kontrolle erhalten möchten, sollten Sie in Betracht ziehen, eine Bibliothek mit guten Funktionen zum Stylen von Formular-Widgets zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics), um Semantik bereitzustellen, zu erstellen.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im geöffneten Zustand zu stylen, d.h. wenn die Liste der Dropdown-Optionen angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (jene mit gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut) — sie haben tendenziell das Aussehen einer scrollbaren Listenbox statt eines Dropdowns und haben daher keinen geöffneten Zustand.

Für weitere Informationen zum Legacy-`<select>`-Styling siehe:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente in Bezug auf ihre enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ angesehen werden, da sie derzeit nicht innerhalb des Barrierefreiheitsbaums exponiert und daher nicht an Hilfstechnologien weitergegeben werden.

## Beispiele

### Einfaches Select

Das folgende Beispiel erstellt ein Dropdown-Menü mit drei Werten. Die zweite Option enthält das `selected`-Attribut, wodurch diese Option standardmäßig ausgewählt ist.

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

### Fortgeschrittenes Select mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt weitere Funktionen, die Sie auf einem `<select>`-Element verwenden können:

- Das `multiple`-Attribut ermöglicht es, mehr als eine Option auszuwählen.
- Das `size`-Attribut ist auf `4` gesetzt, was bedeutet, dass 4 Zeilen auf einmal angezeigt werden. Benutzer können scrollen, um alle Optionen anzuzeigen.
- Zwei {{htmlelement("optgroup")}}-Elemente sind enthalten, was zwei visuelle Gruppierungen erstellt, wobei der Gruppenname im Allgemeinen fett dargestellt wird und verschachtelte Optionen eingerückt sind.
- Das `disabled`-Attribut ist bei der "Hamster"-Option enthalten, was diese Option nicht auswählbar macht.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textflussinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
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
          >formulargestütztes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <ul>
          <li>{{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, oder {{HTMLElement("hr")}}-Elemente, optional gefolgt von einem {{htmlelement("button")}}-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element, wenn es sich um eine Dropdown-Box handelt.</li>
          <li>{{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}}, und {{htmlelement("noscript")}}-Elemente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textflussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne
        <code>multiple</code>-Attribut und
        <strong>ohne</strong>
        <code>size</code>-Attribut größer als 1, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> mit <strong>keinem</strong>
        <code>multiple</code>-Attribut und <strong>keinem</strong>
        <code>size</code>-Attribut größer als 1, ansonsten <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
        ist erlaubt aber nicht empfohlen.
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
