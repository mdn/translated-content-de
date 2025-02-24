---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um mehrere Steuerelemente sowie Bezeichnungen ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

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
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, wobei ein verschachteltes {{htmlelement("legend")}}-Element eine Beschriftung für das `<fieldset>` bereitstellt. Es nimmt nur wenige Attribute an, von denen `form` das bemerkenswerteste ist. Dieses Attribut kann die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten, wodurch Sie das `<fieldset>` Teil dieser `<form>` machen können, selbst wenn es nicht darin verschachtelt ist. Mit `disabled` können Sie das `<fieldset>` und seinen gesamten Inhalt auf einmal deaktivieren.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachfahren des `<fieldset>` sind, deaktiviert, was bedeutet, dass sie nicht bearbeitbar sind und nicht zusammen mit dem {{htmlelement("form")}} übermittelt werden. Sie erhalten keine Browsereignisse wie Mausklicks oder fokussierte Ereignisse. Standardmäßig zeigen Browser solche Steuerelemente grau an. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, dem das `<fieldset>` zugeordnet werden soll, selbst wenn es nicht innerhalb des Formulars ist. Beachten Sie, dass die Verwendung dieses Attributs verwirrend ist - wenn Sie die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpfen möchten, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente mit einem Formular verbunden sind, indem Sie JavaScript verwenden, und zwar [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements).
- `name`

  - : Der mit der Gruppe verknüpfte Name.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste innerhalb verschachtelte {{HTMLElement("legend")}}-Element gegeben.

## Styling mit CSS

Es gibt mehrere spezielle Stilüberlegungen für `<fieldset>`.

Der Standardwert von {{cssxref("display")}} ist `block`, und es etabliert einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem Inline-Level-`display`-Wert gestaltet wird, verhält es sich wie `inline-block`, andernfalls wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rahmen um den Inhalt herum und eine kleine Menge an Standardauffüllung. Das Element hat {{cssxref("min-inline-size", "min-inline-size: min-content")}} als Standardwert.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über der `block-start`-Rahmenlinie platziert. Das `<legend>` zieht sich zusammen und etabliert ebenfalls einen Formatierungskontext. Der `display`-Wert wird zu `block` geändert. (Beispielsweise verhält sich `display: inline` wie `block`.)

Es gibt eine anonyme Box, die den Inhalt des `<fieldset>` hält, welche bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestaltet wird, wird die anonyme Box ein Gitterformatierungskontext sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestaltet wird, wird die anonyme Box ein Flexformatierungskontext sein. Andernfalls wird ein Blockformatierungskontext etabliert.

Sie können das `<fieldset>` und `<legend>` frei gestalten, um das Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel beinhaltet ein `<fieldset>` mit einem `<legend>`, mit einem einzelnen Steuerelement darin.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerelementen darin. Beachten Sie, wie beide Steuerelemente deaktiviert sind, da sie sich in einem deaktivierten `<fieldset>` befinden.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_root"
          >Abschnittsroot</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularzugeordnete</a
        >
        Elemente, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von Fließinhalten.
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
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
