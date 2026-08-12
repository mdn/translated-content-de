---
title: "`<select>` HTML-Auswahlelement"
short-title: <select>
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 221ca1f7a86235a442dc8312a56e4151a85fcf29
---

Das **`<select>`**-Element in [HTML](/de/docs/Web/HTML) steht für ein Steuerelement, das ein Menü von Optionen bereitstellt.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Ein String, der einen Hinweis für die Autovervollständigungsfunktion eines {{Glossary("user_agent", "User-Agents")}} bereitstellt. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für eine vollständige Liste von Werten und Details zur Verwendung von Autocomplete.
- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formularelement in einem Dokument kann das `autofocus`-Attribut haben.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement die Einstellung vom umgebenden Element, zum Beispiel vom {{htmlelement("fieldset")}}; wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt, ist das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<select>`-Element verknüpft werden soll (sein _formularbesitzender_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>`-Elements im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<select>` mit seinem übergeordneten `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<select>`-Elemente an `<form>`-Elemente überall im Dokument zu binden, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Dieses Boolean-Attribut gibt an, dass null oder mehr Optionen in der Liste ausgewählt werden können. Wenn es nicht angegeben ist, kann jeweils nur eine Option ausgewählt werden. Mehrfach ausgewählte Optionen werden mit dem [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Array-Konvention übermittelt, d.h. `name=value1&name=value2`. Wenn `multiple` angegeben ist, ist der Standardwert von `size` `4` statt `1`.
- `name`
  - : Dieses Attribut wird verwendet, um den Namen des Steuerelements anzugeben.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer mindestens eine Option auswählen muss, bevor das Formular übermittelt werden kann. Das `<select>` hat keine ausgewählten Optionen, wenn es keine Optionen hat, `multiple` angegeben ist und der Benutzer alle Optionen deselektiert, der Wert des Selects programmgesteuert auf `""` gesetzt wird oder nur die _Platzhalter-Labeloption_ ausgewählt ist. Jede andere Option als die Platzhalter-Labeloption wird als gültig betrachtet, auch wenn ihr Wert ebenfalls leer ist.

    Die Platzhalter-Labeloption ist der Text, der in der Box angezeigt wird, bevor der Benutzer eine Auswahl trifft, wie das "--Bitte wählen Sie eine Option--" im obigen [Try it](#try_it)-Demo. Semantisch wird sie als äquivalent zum [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)-Attribut betrachtet und nicht als tatsächliche Option angesehen. Sie ist die erste Option in der Optionsliste, die ein direktes Kind von `<select>` ist (nicht innerhalb eines `<optgroup>`) und deren Wert ein leerer String ist. Sie ist nur relevant, wenn `size` `1` ist und `multiple` nicht angegeben ist; in allen anderen Fällen ist eine solche `<option>`-Option nur eine reguläre Option, da `<select>` so dargestellt wird.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Dieses Attribut steht für die Anzahl der gleichzeitig anzuzeigenden Optionen und muss eine positive Ganzzahl sein. Wenn der Wert `1` ist, stellen Browser eine Dropdown-Liste dar. Wenn der Wert größer als `1` ist, stellen Browser eine Scroll-Liste dar, die die angegebene Anzahl sichtbarer Zeilen anzeigt. Wenn das Attribut nicht angegeben ist, beträgt der Standardwert `1`. Wenn das `multiple`-Attribut angegeben ist, beträgt der Standardwert `4`. Aufgrund der Abwärtskompatibilität wird die [`size`](/de/docs/Web/API/HTMLSelectElement/size)-Eigenschaft jedoch immer `0` als Standardwert zurückgeben.

## Nutzungshinweise

Typischerweise wird, wie andere Formularelemente, ein `<select>`-Element für Zugänglichkeitszwecke mit einem {{htmlelement("label")}} verknüpft, sowie mit einem `name`-Attribut, das den Namen des verknüpften Datenelements darstellt, das an den Server übermittelt wird. Jede Menüoption wird durch ein innerhalb des `<select>` verschachteltes {{htmlelement("option")}}-Element definiert.

Jedes `<option>`-Element sollte ein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut haben, das den Datenwert enthält, der an den Server übermittelt wird, wenn diese Option ausgewählt ist. Wenn kein `value`-Attribut enthalten ist, ist der Standardwert der Text, der im Element enthalten ist. Sie können ein [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut in ein `<option>`-Element aufnehmen, um es standardmäßig auszuwählen, wenn die Seite geladen wird. Wenn kein `selected`-Attribut angegeben ist, wird standardmäßig das erste `<option>`-Element ausgewählt.

Ein `<select>`-Element wird in JavaScript durch ein [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Objekt dargestellt, und dieses Objekt hat eine [`value`](/de/docs/Web/API/HTMLSelectElement/value)-Eigenschaft, die den Wert der ausgewählten `<option>` enthält.

Sie können zusätzlich {{HTMLElement("option")}}-Elemente innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachteln, um separate Gruppen von Optionen innerhalb des Dropdowns zu erstellen. Sie können auch {{HTMLElement("hr")}}-Elemente einfügen, um visuelle Trennlinien zwischen den Optionen zu schaffen.

Weitere Beispiele finden Sie unter [Die nativen Formular-Widgets: Dropdown-Inhalte](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

### Optionen innerhalb von Wrapper-Elementen

Das `<select>`-Element erstellt seine Liste von Optionen aus allen `<option>`-Nachfahren, nicht nur aus seinen direkten Kindern.
Das bedeutet, dass Optionen in andere Elemente, wie {{HTMLElement("div")}}-Elemente, eingebettet werden können und sie trotzdem als auswählbare Optionen im Dropdown erscheinen und in die Formularübermittlung einbezogen werden.
Wrapper-Elemente sind nützlich zum Stylen in [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), haben aber keinen Einfluss auf das Verhalten der Auswahl: Sie erstellen keine Gruppen, Labels oder Trennlinien.
Um Optionen unter einer Überschrift zu gruppieren, verwenden Sie ein {{HTMLElement("optgroup")}}; ein {{HTMLElement("option")}} zählt als Teil eines `<optgroup>`, wenn die Gruppe ein Vorfahr ist, daher können auch Wrapper-Elemente innerhalb einer Gruppe verwendet werden, ohne die Zuordnung zu brechen.

> [!NOTE]
> Browser mit modernem Parsing-Verhalten bewahren alle Elemente im DOM auf, die innerhalb eines `<select>` geschrieben werden – einschließlich Wrapper-Elemente, {{HTMLElement("button")}} und {{HTMLElement("selectedcontent")}}.
> Ältere Browser entfernen stattdessen nicht zugelassene Elemente beim Parsen, wobei nur die Struktur `<option>`, `<optgroup>` und `<hr>` erhalten bleibt.
> Folglich werden Styling, Markup oder Scripting, das von den entfernten Elementen abhängt, in älteren Browsern nicht funktionieren.

### Auswählen mehrerer Optionen

Auf einem Desktop-Computer gibt es mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit dem `multiple`-Attribut und einem `size`-Attribut größer als `1` auszuwählen.

Mausbenutzer können die <kbd>Strg</kbd>-, <kbd>Command</kbd>-, oder <kbd>Shift</kbd>-Tasten gedrückt halten (abhängig davon, was für Ihr Betriebssystem sinnvoll ist) und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen.

> [!WARNING]
> Der unten beschriebene Mechanismus zum Auswählen mehrerer nicht zusammenhängender Elemente über die Tastatur scheint derzeit nur in Firefox zu funktionieren.
>
> Unter macOS kollidieren die Tastenkombinationen <kbd>Strg</kbd> + <kbd>Auf</kbd> und <kbd>Strg</kbd> + <kbd>Ab</kbd> mit den Standardtastenkombinationen für _Mission Control_ und _Anwendungsfenster_, daher müssen Sie diese deaktivieren, bevor sie funktionieren.

Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element richten (z. B. durch Verwenden von <kbd>Tab</kbd>).
- Ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, indem sie die Tasten <kbd>Auf</kbd> und <kbd>Ab</kbd> verwenden, um die Optionen nach oben und unten zu gehen.
- Die <kbd>Shift</kbd>-Taste halten und dann die Tasten <kbd>Auf</kbd> und <kbd>Ab</kbd> verwenden, um den Bereich der ausgewählten Elemente zu vergrößern oder zu verkleinern.

Tastaturbenutzer können mehrere nicht zusammenhängende Elemente auswählen, indem sie:

- Den Fokus auf das `<select>`-Element richten (z. B. durch Verwenden von <kbd>Tab</kbd>).
- Die <kbd>Strg</kbd>-Taste gedrückt halten und dann die Tasten <kbd>Auf</kbd> und <kbd>Ab</kbd> verwenden, um die "fokussierte" Auswahloption zu ändern, d.h. diejenige, die ausgewählt wird, wenn Sie sich dafür entscheiden, dies zu tun. Die "fokussierte" Auswahloption wird mit einem gestrichelten Umriss hervorgehoben, ähnlich wie ein tastaturfokussierter Link.
- <kbd>Leertaste</kbd> drücken, um "fokussierte" Auswahloptionen auszuwählen/deselektieren.

## Styling mit CSS

Das `<select>`-Element war historisch gesehen schwierig, effektiv mit CSS zu stylen.
Die folgenden Leitfäden enthalten Informationen über Funktionen, die vollständig anpassbare Auswahlelemente ermöglichen:

- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Anpassbare Auswahllistenkästchen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)

### Legacy-Auswahl-Styling

In Browsern, die moderne Anpassungsfunktionen nicht unterstützen (oder alten Codebasen, in denen sie nicht verwendet werden können), sind Sie darauf beschränkt, das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), die [angezeigte Schriftart](/de/docs/Web/CSS/Guides/Fonts), usw. zu manipulieren. Sie können auch die {{cssxref("appearance")}}-Eigenschaft verwenden, um das Aussehen des Standard-Systems zu entfernen.

Es ist jedoch schwierig, ein konsistentes Ergebnis über verschiedene Browser mit traditionellen `<select>`-Elementen zu erzielen. Wenn Sie vollständige Kontrolle benötigen, sollten Sie in Erwägung ziehen, eine Bibliothek mit guten Möglichkeiten zum Stylen von Formularelementen zu verwenden oder versuchen, Ihr eigenes Dropdown-Menü mit nicht-semantischen Elementen, JavaScript und [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu erstellen, um Semantik bereitzustellen.

Sie können die {{cssxref(":open")}}-Pseudoklasse verwenden, um `<select>`-Elemente im geöffneten Zustand zu stylen, d.h. wenn die Dropdown-Optionsliste angezeigt wird. Dies gilt nicht für Mehrzeilen-`<select>`-Elemente (die mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut gesetzt sind) – diese werden tendenziell als Scroll-Liste statt als Dropdown gerendert und haben daher keinen offenen Zustand.

Weitere Informationen über das Legacy-`<select>`-Styling finden Sie unter:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Die {{cssxref("field-sizing")}}-Eigenschaft, die steuert, wie `<select>`-Elemente im Verhältnis zu ihren enthaltenen Optionen dimensioniert werden.

## Barrierefreiheit

Das `<hr>` innerhalb eines `<select>` sollte als rein dekorativ betrachtet werden, da es derzeit nicht im Barrierefreiheitsbaum dargestellt und daher nicht an unterstützende Technologien weitergegeben wird.

## Beispiele

### Basisauswahl

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

### Auswahl mit Gruppenoptionen

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

### Erweiterte Auswahl mit mehreren Funktionen

Das folgende Beispiel ist komplexer und zeigt mehr Features, die Sie auf einem `<select>`-Element verwenden können:

- Das `multiple`-Attribut ermöglicht die Auswahl von mehr als einer Option.
- Das `size`-Attribut ist auf `4` gesetzt, was bedeutet, dass 4 Zeilen gleichzeitig angezeigt werden. Benutzer können scrollen, um alle Optionen anzuzeigen.
- Zwei {{htmlelement("optgroup")}}-Elemente sind enthalten, die zwei visuelle Gruppierungen erstellen, wobei der Gruppenname in der Regel fett ist und die verschachtelten Optionen eingerückt sind.
- Das `disabled`-Attribut ist bei der Option "Hamster" enthalten, wodurch diese Option nicht auswählbar ist.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satzinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
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
          >übermittlungsfähig</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >form-bezogenes</a
        >-Element
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <ul>
          <li>{{HTMLElement("option")}}, {{HTMLElement("optgroup")}} oder {{HTMLElement("hr")}}-Elemente, optional vorangestellt von einem {{htmlelement("button")}}-Element mit einem verschachtelten {{htmlelement("selectedcontent")}}-Element, wenn eine Dropdown-Box.</li>
          <li>{{htmlelement("div")}}, {{htmlelement("script")}}, {{htmlelement("template")}} und {{htmlelement("noscript")}}-Elemente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satzinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> ohne
        <code>multiple</code>-Attribut und ohne
        <code>size</code>-Attribut größer als 1, sonst
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> ohne
        <code>multiple</code>-Attribut und ohne
        <code>size</code>-Attribut größer als 1, sonst <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
        ist erlaubt, aber nicht empfohlen.
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
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- Ereignisse, die von `<select>` ausgelöst werden: [`change`](/de/docs/Web/API/HTMLElement/change_event), [`input`](/de/docs/Web/API/Element/input_event)
