---
title: "`<select>`: HTML-Auswahlelement"
short-title: <select>
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: fd0b11ad5b5014a9333578adcc4bc98fb9024da3
---

Das **`<select>`**-Element von [HTML](/de/docs/Web/HTML) stellt ein Steuerelement mit einem Menü aus Optionen dar.

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

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Eine Zeichenfolge, die der Autovervollständigungsfunktion eines {{Glossary("user_agent", "User Agents")}} einen Hinweis gibt. Eine vollständige Liste der Werte und Einzelheiten zur Verwendung finden Sie unter [Das HTML-Attribut autocomplete](/de/docs/Web/HTML/Reference/Attributes/autocomplete).
- `autofocus`
  - : Dieses boolesche Attribut legt fest, dass ein Formularsteuerelement beim Laden der Seite den Eingabefokus erhalten soll. Nur ein Formularelement pro Dokument kann das Attribut `autofocus` besitzen.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass Benutzer nicht mit dem Steuerelement interagieren können. Ist es nicht angegeben, übernimmt das Steuerelement die Einstellung des umgebenden Elements, beispielsweise {{htmlelement("fieldset")}}. Gibt es kein umgebendes Element mit gesetztem `disabled`-Attribut, ist das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, dem `<select>` zugeordnet werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>`-Elements im selben Dokument sein. (Ist das Attribut nicht gesetzt, wird `<select>` seinem übergeordneten `<form>`-Element zugeordnet, sofern eines vorhanden ist.)

    Mit diesem Attribut können Sie `<select>`-Elemente einem `<form>` an beliebiger Stelle im Dokument zuordnen, nicht nur innerhalb eines `<form>`-Elements. Es kann auch ein übergeordnetes `<form>`-Element außer Kraft setzen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses boolesche Attribut gibt an, dass null oder mehr Optionen aus der Liste ausgewählt werden können. Ist es nicht angegeben, kann jeweils nur eine Option ausgewählt werden. Mehrere ausgewählte Optionen werden gemäß der Array-Konvention von [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) übermittelt, also als `name=value1&name=value2`. Wenn `multiple` angegeben ist, beträgt der Standardwert von `size` `4` statt `1`.
- `name`
  - : Dieses Attribut gibt den Namen des Steuerelements an.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses boolesche Attribut gibt an, dass Benutzer mindestens eine Option auswählen müssen, bevor das Formular abgesendet werden kann. Für `<select>` ist keine Option ausgewählt, wenn es keine Optionen enthält, wenn `multiple` angegeben ist und Benutzer alle Optionen abwählen, wenn der Wert von `<select>` programmatisch auf `""` gesetzt wird oder wenn nur die _Platzhalteroption_ ausgewählt ist. Jede andere Option gilt als gültig, selbst wenn auch ihr Wert leer ist.

    Die Platzhalteroption ist der Text, der im Feld angezeigt wird, bevor Benutzer eine Auswahl treffen – etwa „--Please choose an option--“ im obigen [interaktiven Beispiel](#try_it). Semantisch entspricht sie dem Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder) und gilt nicht als tatsächliche Option. Sie ist die erste Option in der Optionsliste, die ein direktes Kindelement von `<select>` ist (sich also nicht innerhalb eines `<optgroup>` befindet) und deren Wert eine leere Zeichenfolge ist. Sie ist nur relevant, wenn `size` den Wert `1` hat und `multiple` nicht angegeben ist. In allen anderen Fällen wird ein solches `<option>` aufgrund der Darstellung von `<select>` wie eine gewöhnliche Option behandelt.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gibt als positive Ganzzahl an, wie viele Optionen im geschlossenen Zustand angezeigt werden. Ist das Attribut nicht angegeben, beträgt der Standardwert `1`, es sei denn, das Attribut `multiple` ist angegeben; dann beträgt er `4`. Ist der Wert größer als `1` oder das Attribut `multiple` vorhanden, stellen Browser ein scrollbares Listenfeld mit der angegebenen Anzahl sichtbarer Zeilen dar. Andernfalls werden die Optionen als Dropdown-Liste dargestellt. Aus Gründen der Abwärtskompatibilität gibt die Eigenschaft [`size`](/de/docs/Web/API/HTMLSelectElement/size) als Standardwert stets `0` zurück.

## Hinweise zur Verwendung

Wie andere Formularsteuerelemente wird ein `<select>`-Element aus Gründen der Barrierefreiheit üblicherweise mit einem {{htmlelement("label")}} verknüpft. Außerdem erhält es ein `name`-Attribut, das den Namen des zugehörigen, an den Server übermittelten Datenfelds angibt. Jede Menüoption wird durch ein {{htmlelement("option")}}-Element innerhalb von `<select>` definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut enthalten, dessen Wert an den Server übermittelt wird, wenn die Option ausgewählt ist. Fehlt das Attribut `value`, wird standardmäßig der im Element enthaltene Text als Wert verwendet. Mit einem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf einem `<option>`-Element können Sie festlegen, dass diese Option beim ersten Laden der Seite standardmäßig ausgewählt ist. Ist kein `selected`-Attribut angegeben, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt repräsentiert. Dessen Eigenschaft [`value`](/de/docs/Web/API/HTMLSelectElement/value) enthält den Wert des ausgewählten `<option>`-Elements.

Sie können {{HTMLElement("option")}}-Elemente auch in {{HTMLElement("optgroup")}}-Elemente verschachteln, um innerhalb des Dropdown-Menüs getrennte Optionsgruppen zu erstellen. Mit {{HTMLElement("hr")}}-Elementen können Sie außerdem Trennlinien einfügen, die die Optionen visuell voneinander abgrenzen.

Weitere Beispiele finden Sie unter [Native Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

### Optionen innerhalb umschließender Elemente

Das `<select>`-Element erstellt seine Optionsliste aus allen untergeordneten `<option>`-Elementen, nicht nur aus seinen direkten Kindelementen.
Optionen können daher in andere Elemente wie {{HTMLElement("div")}} eingeschlossen sein. Sie erscheinen trotzdem als auswählbare Optionen im Dropdown-Menü und werden beim Absenden des Formulars berücksichtigt.
Umschließende Elemente sind für die Gestaltung [anpassbarer select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) nützlich, beeinflussen aber das Verhalten von `<select>` nicht: Sie erzeugen weder Gruppen noch Beschriftungen oder Trennlinien.
Um Optionen unter einer Überschrift zusammenzufassen, verwenden Sie {{HTMLElement("optgroup")}}. Ein {{HTMLElement("option")}} gehört zu einem `<optgroup>`, wenn die Gruppe eines seiner übergeordneten Elemente ist. Daher können auch innerhalb einer Gruppe umschließende Elemente verwendet werden, ohne die Zuordnung aufzuheben.

> [!NOTE]
> Browser mit modernem Parsing-Verhalten behalten alle innerhalb eines `<select>` notierten Elemente im DOM bei – auch umschließende Elemente, {{HTMLElement("button")}} und {{HTMLElement("selectedcontent")}}.
> Ältere Browser entfernen beim Parsen dagegen nicht zulässige Elemente und behalten nur die Struktur aus `<option>`, `<optgroup>` und `<hr>` bei.
> Gestaltung, Markup oder Skripte, die von den entfernten Elementen abhängen, funktionieren deshalb in älteren Browsern nicht.

### Mehrere Optionen auswählen

Mit dem Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) können Benutzer in einem `<select>`-Element null oder mehr Optionen auswählen. Wie das Steuerelement dargestellt wird, hängt vom Attribut [`size`](#size) ab:

- Wenn das Attribut `multiple` gesetzt ist, zeigen Browser ein scrollbares Listenfeld an, sofern `size` nicht auf `1` gesetzt ist. Fehlt `size`, ist das Listenfeld vier Optionszeilen hoch, auch wenn es weniger Optionen enthält.
- Wenn `size` den Wert `1` hat, zeigen Browser, die diese Funktion unterstützen, ein Dropdown-Menü an, in dem Benutzer bei aktiviertem Steuerelement mehr als eine Option auswählen können. Ist genau eine Option ausgewählt, wird diese angezeigt. Andernfalls zeigt das Steuerelement die Anzahl der ausgewählten Optionen in einem einzeiligen Listenfeld an. Browser, die diese Funktionen nicht unterstützen, zeigen eine Menüliste mit mehreren Optionen in einem Steuerelement an, das nur so hoch wie ein einzeiliges Feld ist.

Informieren Sie Benutzer bei Verwendung des Attributs `multiple` immer darüber, dass sie mehr als eine Option auswählen können.

Im folgenden Beispiel wird mit `<select multiple size="1">` ein Dropdown-Menü erstellt, das eine Mehrfachauswahl ermöglicht:

```html
<label for="flavors">Choose one or more ice cream flavors:</label>
<select id="flavors" name="flavors" multiple size="1">
  <option value="chocolate">Chocolate</option>
  <option value="strawberry">Strawberry</option>
  <option value="vanilla">Vanilla</option>
</select>
```

{{EmbedLiveSample("Selecting_multiple_options", "", "100")}}

#### Optionen in einem Listenfeld auswählen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, in einem `<select>`-Element mit dem Attribut `multiple` und einem `size`-Wert größer als `1` mehrere Optionen auszuwählen.

Wer eine Maus verwendet, kann die Taste <kbd>Ctrl</kbd> (unter macOS <kbd>Command</kbd>) oder <kbd>Shift</kbd> gedrückt halten – je nachdem, was unter dem verwendeten Betriebssystem sinnvoll ist – und dann mehrere Optionen anklicken, um sie aus- oder abzuwählen.

> [!NOTE]
> Die nachfolgend beschriebenen Tastaturmechanismen sind nicht standardisiert und hängen vom Browser und Betriebssystem ab.
>
> Beispielsweise unterstützt Firefox unter macOS zusätzlich die Verwendung von <kbd>Ctrl</kbd>, während Safari unter macOS <kbd>Space</kbd> nicht für die Auswahl nicht zusammenhängender Optionen unterstützt.

Mit der Tastatur können Sie mehrere aufeinanderfolgende Einträge wie folgt auswählen:

- Setzen Sie den Fokus auf das `<select>`-Element, beispielsweise mit <kbd>Tab</kbd>.
- Wählen Sie mit den Pfeiltasten <kbd>Up</kbd> und <kbd>Down</kbd> einen Eintrag am Anfang oder Ende des gewünschten Bereichs aus.
- Halten Sie <kbd>Shift</kbd> gedrückt und vergrößern oder verkleinern Sie mit den Pfeiltasten <kbd>Up</kbd> und <kbd>Down</kbd> den ausgewählten Bereich.

Mit der Tastatur können Sie mehrere nicht aufeinanderfolgende Einträge wie folgt auswählen:

- Setzen Sie den Fokus auf das `<select>`-Element, beispielsweise mit <kbd>Tab</kbd>.
- Halten Sie <kbd>Ctrl</kbd> (unter macOS <kbd>Command</kbd>) gedrückt und wechseln Sie mit den Pfeiltasten <kbd>Up</kbd> und <kbd>Down</kbd> die Option mit Fokus – also die Option, die Sie als Nächstes auswählen können. Diese Option wird durch eine gepunktete Umrandung hervorgehoben, ähnlich wie ein Link mit Tastaturfokus.
- Drücken Sie <kbd>Space</kbd>, um Optionen mit Fokus aus- oder abzuwählen.

## Gestaltung mit CSS

Das `<select>`-Element ließ sich mit CSS lange Zeit nur schwer wirksam gestalten.
Die folgenden Leitfäden beschreiben Funktionen, mit denen sich vollständig anpassbare select-Elemente erstellen lassen:

- [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare select-Listenfelder](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Herkömmliche Gestaltung von select-Elementen

In Browsern, die moderne Anpassungsfunktionen nicht unterstützen (oder in älteren Codebasen, in denen sie nicht verwendet werden können), sind Sie auf Änderungen am [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), an der [angezeigten Schriftart](/de/docs/Web/CSS/Guides/Fonts) usw. beschränkt. Sie können auch die Eigenschaft {{cssxref("appearance")}} verwenden, um die systemseitige Standarddarstellung zu entfernen.

Mit herkömmlichen `<select>`-Elementen ist es jedoch schwierig, über verschiedene Browser hinweg ein einheitliches Ergebnis zu erzielen. Wenn Sie die volle Kontrolle benötigen, sollten Sie eine Bibliothek mit guten Möglichkeiten zur Gestaltung von Formularsteuerelementen in Betracht ziehen. Alternativ können Sie mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) ein eigenes Dropdown-Menü erstellen und ihm so Semantik verleihen.

Mit der Pseudoklasse {{cssxref(":open")}} können Sie `<select>`-Elemente im geöffneten Zustand gestalten, also wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für mehrzeilige `<select>`-Elemente (solche mit gesetztem Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)). Sie werden in der Regel als scrollbares Listenfeld statt als Dropdown-Menü dargestellt und haben daher keinen geöffneten Zustand.

Weitere Informationen zur herkömmlichen Gestaltung von `<select>` finden Sie unter:

- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittene Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Der Eigenschaft {{cssxref("field-sizing")}}, die steuert, wie die Größe von `<select>`-Elementen im Verhältnis zu den enthaltenen Optionen bestimmt wird.

## Barrierefreiheit

`<hr>`-Elemente innerhalb eines `<select>` sollten als rein dekorativ betrachtet werden, da sie derzeit nicht im Accessibility Tree erscheinen und somit assistiven Technologien nicht zugänglich sind.

Wenn Sie bei einem `<select>` mit Mehrfachauswahl `size="1"` setzen (also `<select multiple size="1">`), wird ein Dropdown-Menü dargestellt, in dem Benutzer mehrere Optionen auswählen können. Manche Browser erweitern die Optionsliste nicht, wenn das Steuerelement aktiv ist, sondern zeigen mehrere Optionen in einer Menüliste an, die nur so hoch wie ein einzeiliges Feld ist. Das beeinträchtigt die Benutzerfreundlichkeit. Wenn Sie ein `<select>` mit Mehrfachauswahl verwenden, informieren Sie Benutzer darüber, dass sie mehr als eine Option auswählen können – auch dann, wenn mehrere Optionen angezeigt werden.

## Beispiele

### Einfaches select-Element

Das folgende Beispiel erstellt ein Dropdown-Menü mit drei Werten. Die zweite Option besitzt das Attribut `selected` und ist daher standardmäßig ausgewählt.

```html
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

#### Ergebnis

{{EmbedLiveSample("Basic_select", "", "100")}}

### Select-Element mit gruppierten Optionen

Das folgende Beispiel erstellt ein Dropdown-Menü, in dem {{HTMLElement("optgroup")}} und {{HTMLElement("hr")}} die Optionen gruppieren und Benutzern das Verständnis der Inhalte erleichtern.

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

### Erweitertes select-Element mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt weitere Funktionen, die Sie für ein `<select>`-Element verwenden können:

- Das Attribut `multiple` ermöglicht die Auswahl mehrerer Optionen.
- Das Attribut `size` ist auf `4` gesetzt. Dadurch werden jeweils vier Zeilen angezeigt. Benutzer können scrollen, um alle Optionen zu sehen.
- Zwei {{htmlelement("optgroup")}}-Elemente erzeugen zwei visuelle Gruppen. In der Regel wird der Gruppenname fett dargestellt und die enthaltenen Optionen werden eingerückt.
- Die Option „Hamster“ besitzt das Attribut `disabled` und kann daher nicht ausgewählt werden.

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
          >auflistbares</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbares</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbares</a
        > und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >absendbares</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        > Element
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <ul>
          <li>{{HTMLElement("option")}}-, {{HTMLElement("optgroup")}}- oder {{HTMLElement("hr")}}-Elemente, denen bei einem Dropdown-Feld optional ein {{htmlelement("button")}}-Element mit einem darin verschachtelten {{htmlelement("selectedcontent")}}-Element vorangestellt sein kann.</li>
          <li>{{htmlelement("div")}}-, {{htmlelement("script")}}-, {{htmlelement("template")}}- und {{htmlelement("noscript")}}-Elemente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, wenn <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut mit einem Wert größer als 1 vorhanden ist; andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>, wenn <strong>kein</strong>
        <code>multiple</code>-Attribut und <strong>kein</strong>
        <code>size</code>-Attribut mit einem Wert größer als 1 vorhanden ist; andernfalls ist <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
        zulässig, aber nicht empfohlen.
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
