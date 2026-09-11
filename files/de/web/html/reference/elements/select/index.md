---
title: "`<select>`-HTML-Auswahlelement"
short-title: <select>
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: b341b02b03d57a48ecffee60ddea21e9995a272b
---

Das [HTML](/de/docs/Web/HTML)-Element **`<select>`** stellt ein Steuerelement dar, das ein Menü mit Optionen bereitstellt.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Eine Zeichenfolge, die einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bereitstellt. Eine vollständige Liste der Werte und Details zur Verwendung der Autovervollständigung finden Sie unter [Das HTML-Attribut autocomplete](/de/docs/Web/HTML/Reference/Attributes/autocomplete).
- `autofocus`
  - : Mit diesem booleschen Attribut können Sie angeben, dass ein Formular-Steuerelement beim Laden der Seite den Eingabefokus erhalten soll. Nur ein Formularelement in einem Dokument kann das Attribut `autofocus` haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, übernimmt das Steuerelement seine Einstellung vom enthaltenden Element, beispielsweise {{htmlelement("fieldset")}}; wenn kein enthaltendes Element mit gesetztem Attribut `disabled` vorhanden ist, ist das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, dem das `<select>` zugeordnet werden soll (sein _form owner_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` seinem übergeordneten `<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente `<form>`s an beliebiger Stelle im Dokument zuzuordnen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass null oder mehr Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Mehrere ausgewählte Optionen werden unter Verwendung der Array-Konvention von [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) übermittelt, d.h. `name=value1&name=value2`. Wenn `multiple` angegeben ist, ist `size` standardmäßig `4` statt `1`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer mindestens eine Option auswählen muss, bevor das Formular übermittelt werden kann. Das `<select>` hat keine ausgewählten Optionen, wenn es keine Optionen hat, `multiple` angegeben ist und der Benutzer alle Optionen abwählt, der Wert des Selects programmatisch auf `""` gesetzt wird oder nur die _Platzhalterbeschriftungsoption_ ausgewählt ist. Jede Option außer der Platzhalterbeschriftungsoption wird als gültig betrachtet, selbst wenn ihr Wert ebenfalls leer ist.

    Die Platzhalterbeschriftungsoption ist der Text, der im Feld angezeigt wird, bevor der Benutzer eine Auswahl trifft, etwa das "--Please choose an option--" in der obigen [Ausprobieren](#try_it)-Demo. Semantisch wird sie als dem Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder) gleichwertig betrachtet und nicht als tatsächliche Option angesehen. Sie ist definiert als die erste Option in der Optionsliste, die ein direktes Kindelement des `<select>` ist (nicht innerhalb eines `<optgroup>`) und eine leere Zeichenfolge als Wert hat. Sie ist nur relevant, wenn `size` den Wert `1` hat und `multiple` nicht angegeben ist; in allen anderen Fällen ist ein solches `<option>` aufgrund der Art, wie das `<select>` gerendert wird, lediglich eine reguläre Option.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Dieses Attribut stellt die Anzahl der gleichzeitig anzuzeigenden Optionen dar und muss eine positive Ganzzahl sein. Wenn der Wert `1` ist, rendern Browser eine Dropdown-Liste. Wenn der Wert größer als `1` ist, rendern Browser ein scrollbares Listenfeld, in dem die angegebene Anzahl von Zeilen sichtbar ist. Wenn das Attribut nicht angegeben ist, beträgt der Standardwert `1`. Wenn das Attribut `multiple` angegeben ist, beträgt der Standardwert `4`. Aus Gründen der Abwärtskompatibilität gibt die Eigenschaft [`size`](/de/docs/Web/API/HTMLSelectElement/size) jedoch immer `0` als Standardwert zurück.

## Hinweise zur Verwendung

Typischerweise wird ein `<select>`-Element wie andere Formular-Steuerelemente aus Gründen der Barrierefreiheit mit einem {{htmlelement("label")}} sowie mit einem Attribut `name` verknüpft, das den Namen des zugehörigen Datenpunkts darstellt, der an den Server übermittelt wird. Jede Menüoption wird durch ein innerhalb des `<select>` verschachteltes {{htmlelement("option")}}-Element definiert.

Jedes `<option>`-Element sollte ein Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) haben, das den Datenwert enthält, der an den Server übermittelt werden soll, wenn diese Option ausgewählt ist. Wenn kein Attribut `value` enthalten ist, ist der Wert standardmäßig der im Element enthaltene Text. Sie können ein Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) in ein `<option>`-Element aufnehmen, damit es beim ersten Laden der Seite standardmäßig ausgewählt ist. Wenn kein Attribut `selected` angegeben ist, wird das erste `<option>`-Element standardmäßig ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt verfügt über eine Eigenschaft [`value`](/de/docs/Web/API/HTMLSelectElement/value), die den Wert des ausgewählten `<option>` enthält.

Sie können {{HTMLElement("option")}}-Elemente weiter innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Optionsgruppen innerhalb des Dropdown-Menüs zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um Trennlinien zu erstellen, die visuelle Unterbrechungen zwischen Optionen hinzufügen.

Weitere Beispiele finden Sie unter [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

### Optionen innerhalb von Wrapper-Elementen

Das `<select>`-Element erstellt seine Optionsliste aus allen `<option>`-Nachfahren, nicht nur aus seinen direkten Kindelementen.
Das bedeutet, dass Optionen in andere Elemente, etwa {{HTMLElement("div")}}-Elemente, eingeschlossen werden können und dennoch als auswählbare Optionen im Dropdown erscheinen und bei der Formularübermittlung berücksichtigt werden.
Wrapper-Elemente sind für die Gestaltung in [anpassbaren select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) nützlich, haben jedoch keinen Einfluss auf das Verhalten des Selects: Sie erstellen keine Gruppen, Beschriftungen oder Trennlinien.
Um Optionen unter einer Überschrift zu gruppieren, verwenden Sie ein {{HTMLElement("optgroup")}}; ein {{HTMLElement("option")}} gilt als Teil eines `<optgroup>`, wenn die Gruppe ein Vorfahr ist. Daher können Wrapper-Elemente auch innerhalb einer Gruppe verwendet werden, ohne die Zuordnung zu unterbrechen.

> [!NOTE]
> Browser mit modernem Parsing-Verhalten behalten alle innerhalb eines `<select>` geschriebenen Elemente im DOM bei — einschließlich Wrapper-Elementen, {{HTMLElement("button")}} und {{HTMLElement("selectedcontent")}}.
> Ältere Browser entfernen hingegen beim Parsen nicht zulässige Elemente und behalten nur die Struktur aus `<option>`, `<optgroup>` und `<hr>` bei.
> Daher funktionieren Styling, Markup oder Skripting, die von den entfernten Elementen abhängen, in älteren Browsern nicht.

### Mehrere Optionen auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem Attribut `multiple` und einem Attribut `size` größer als `1` auszuwählen.

Mausbenutzer können die Taste <kbd>Ctrl</kbd> (<kbd>Command</kbd> unter macOS) oder <kbd>Shift</kbd> gedrückt halten (je nachdem, was für Ihr Betriebssystem sinnvoll ist) und dann mehrere Optionen anklicken, um sie aus- oder abzuwählen.

> [!NOTE]
> Die unten beschriebenen Tastaturmechanismen sind nicht standardisiert und hängen vom Browser und Betriebssystem ab.
>
> Beispielsweise unterstützt Firefox unter macOS zusätzlich die Verwendung von <kbd>Ctrl</kbd>, während Safari unter macOS die Verwendung von <kbd>Space</kbd> für eine nicht zusammenhängende Auswahl nicht unterstützt.

Tastaturbenutzer können mehrere zusammenhängende Elemente wie folgt auswählen:

- Fokussieren Sie das `<select>`-Element (z. B. mit <kbd>Tab</kbd>).
- Wählen Sie ein Element am Anfang oder Ende des Bereichs aus, den Sie auswählen möchten, indem Sie mit den Pfeiltasten <kbd>Up</kbd> und <kbd>Down</kbd> in den Optionen nach oben und unten navigieren.
- Halten Sie die Taste <kbd>Shift</kbd> gedrückt und verwenden Sie dann die Pfeiltasten <kbd>Up</kbd> und <kbd>Down</kbd>, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente wie folgt auswählen:

- Fokussieren Sie das `<select>`-Element (z. B. mit <kbd>Tab</kbd>).
- Halten Sie die Taste <kbd>Ctrl</kbd> (<kbd>Command</kbd> unter macOS) gedrückt und verwenden Sie dann die Pfeiltasten <kbd>Up</kbd> und <kbd>Down</kbd>, um die „fokussierte“ Select-Option zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie dies tun. Die „fokussierte“ Select-Option wird mit einer gepunkteten Umrandung hervorgehoben, genauso wie ein per Tastatur fokussierter Link.
- Drücken Sie <kbd>Space</kbd>, um „fokussierte“ Select-Optionen aus- oder abzuwählen.

## Styling mit CSS

Das `<select>`-Element war in der Vergangenheit mit CSS nur schwer effektiv zu gestalten.
Die folgenden Leitfäden enthalten Informationen zu Funktionen, die vollständig anpassbare select-Elemente ermöglichen:

- [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare select-Listenfelder](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Legacy-Select-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in Legacy-Codebasen, in denen sie nicht verwendet werden können), sind Sie auf die Manipulation des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), der [angezeigten Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. beschränkt. Sie können auch die Eigenschaft {{cssxref("appearance")}} verwenden, um das Standard-System-`appearance` zu entfernen.

Mit traditionellen `<select>`-Elementen ist es jedoch schwierig, browserübergreifend ein einheitliches Ergebnis zu erzielen. Wenn Sie vollständige Kontrolle erhalten möchten, sollten Sie die Verwendung einer Bibliothek mit guten Möglichkeiten zur Gestaltung von Formular-Widgets in Betracht ziehen oder versuchen, Ihr eigenes Dropdown-Menü mithilfe nicht-semantischer Elemente, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die Pseudoklasse {{cssxref(":open")}} verwenden, um `<select>`-Elemente im geöffneten Zustand zu gestalten, also wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (solche mit gesetztem Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)) — diese werden in der Regel als scrollbares Listenfeld statt als Dropdown gerendert und haben daher keinen geöffneten Zustand.

Weitere Informationen zum Legacy-`<select>`-Styling finden Sie unter:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die Eigenschaft {{cssxref("field-sizing")}}, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht im Barrierefreiheitsbaum verfügbar ist und daher auch assistiven Technologien nicht zugänglich gemacht wird.

## Beispiele

### Einfaches Select

Das folgende Beispiel erstellt ein Dropdown-Menü mit drei Werten. Die zweite Option enthält das Attribut `selected`, wodurch diese Option standardmäßig ausgewählt wird.

```html
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

#### Ergebnis

{{EmbedLiveSample("Basic_select", "", "100")}}

### Select mit Gruppierungsoptionen

Das folgende Beispiel erstellt ein Dropdown-Menü mit Gruppierung mithilfe von {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}}, damit der Benutzer den Inhalt im Dropdown leichter verstehen kann.

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

- Das Attribut `multiple` ermöglicht die Auswahl von mehr als einer Option.
- Das Attribut `size` ist auf `4` gesetzt, was bedeutet, dass jeweils 4 Zeilen angezeigt werden. Benutzer können scrollen, um alle Optionen anzuzeigen.
- Zwei {{htmlelement("optgroup")}}-Elemente sind enthalten und erstellen zwei visuelle Gruppierungen, wobei der Gruppenname im Allgemeinen fett dargestellt und verschachtelte Optionen eingerückt werden.
- Das Attribut `disabled` ist bei der Option „Hamster“ enthalten, wodurch diese Option nicht auswählbar ist.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        > und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularzugeordnetes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <ul>
          <li>{{HTMLElement("option")}}, {{HTMLElement("optgroup")}} oder {{HTMLElement("hr")}}-Elemente, denen bei einem Dropdown-Feld optional ein {{htmlelement("button")}}-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element vorangestellt sein kann.</li>
          <li>{{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}} und {{htmlelement("noscript")}}-Elemente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassung von Tags</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne Attribut <code>multiple</code> und ohne ein
        <code>size</code>-Attribut größer als 1, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne Attribut <code>multiple</code> und ohne ein
        <code>size</code>-Attribut größer als 1; andernfalls ist <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
        zulässig, wird jedoch nicht empfohlen.
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
- [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- Von `<select>` ausgelöste Ereignisse: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
