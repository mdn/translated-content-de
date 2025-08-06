---
title: "<fieldset>: Das Field Set Element"
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um mehrere Steuerelemente sowie Beschriftungen ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

{{InteractiveExample("HTML Demo: &lt;fieldset&gt;", "tabbed-standard")}}

```html interactive-example
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

```css interactive-example
legend {
  background-color: black;
  color: white;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, wobei ein verschachteltes {{htmlelement("legend")}}-Element eine Beschriftung für das `<fieldset>` bereitstellt. Es nimmt wenige Attribute an, von denen das bemerkenswerteste `form` ist, das die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, sodass Sie das `<fieldset>` als Teil dieses `<form>`s machen können, selbst wenn es nicht darin verschachtelt ist, und `disabled`, mit dem Sie das `<fieldset>` und seinen gesamten Inhalt auf einmal deaktivieren können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert. Das bedeutet, sie sind nicht editierbar und werden nicht zusammen mit dem {{htmlelement("form")}} übermittelt. Sie empfangen keine Browserereignisse wie Mausklicks oder fokussierungsbezogene Ereignisse. Standardmäßig zeigen Browser solche Steuerelemente ausgegraut an. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements, dem Sie das `<fieldset>` zuordnen möchten, selbst wenn es sich nicht innerhalb des Formulars befindet. Bitte beachten Sie, dass diese Nutzung verwirrend sein kann – wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft sind, müssen Sie das `form`-Attribut direkt an diesen Elementen verwenden. Sie können über JavaScript, mithilfe von [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements), überprüfen, welche Elemente mit einem Formular verknüpft sind.
- `name`
  - : Der mit der Gruppe verknüpfte Name.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Gestaltung mit CSS

Es gibt einige spezielle Stilüberlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem `display`-Wert auf Inline-Ebene stilisiert ist, verhält es sich wie `inline-block`, ansonsten verhält es sich wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rand, der den Inhalt umgibt, und eine kleine Menge an Standardabstand. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rand platziert. Das `<legend>` passt sich an und etabliert ebenfalls einen Formatierungskontext. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird ein anonymes Kästchen geben, das den Inhalt des `<fieldset>` hält und bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt ist, wird das anonyme Kästchen ein Grid-Formatierungskontext sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt ist, wird das anonyme Kästchen ein Flex-Formatierungskontext sein. Andernfalls wird ein Blockformatierungskontext etabliert.

Sie können das `<fieldset>` und `<legend>` gerne in beliebiger Weise gestalten, um das Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel enthält ein `<fieldset>` mit einem `<legend>` und einem einzigen Steuerelement darin.

```html
<form action="#">
  <fieldset>
    <legend>Do you agree?</legend>
    <input type="checkbox" id="chbx" name="agree" value="Yes!" />
    <label for="chbx">I agree</label>
  </fieldset>
</form>
```

#### Ergebnis

{{ EmbedLiveSample('Basic_fieldset', '100%', '80') }}

### Deaktiviertes Fieldset

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerelementen darin. Beachten Sie, wie beide Steuerelemente aufgrund der Position in einem deaktivierten `<fieldset>` deaktiviert sind.

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled login fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" value="Chris" />
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="pwd" value="Wookie" />
    </div>
  </fieldset>
</form>
```

#### Ergebnis

{{ EmbedLiveSample('Disabled_fieldset', '100%', '110') }}

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
        Abschnittswurzel,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularzugehöriger</a
        >
        Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von
        Flussinhalt.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("legend")}}-Element
- Das {{HTMLElement("input")}}-Element
- Das {{HTMLElement("label")}}-Element
- Das {{HTMLElement("form")}}-Element
