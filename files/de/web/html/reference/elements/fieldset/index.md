---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

Das **`<fieldset>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um mehrere Steuerelemente sowie Labels ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

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

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, wobei ein verschachteltes {{htmlelement("legend")}}-Element eine Beschriftung für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen `form` das bemerkenswerteste ist. Dieses Attribut kann die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten, wodurch das `<fieldset>` Teil dieses `<form>` sein kann, auch wenn es nicht darin verschachtelt ist. Ebenfalls wichtig ist das Attribut `disabled`, welches ermöglicht, das `<fieldset>` und seinen gesamten Inhalt auf einmal zu deaktivieren.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formular-Steuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert. Das bedeutet, dass sie nicht bearbeitbar sind und nicht zusammen mit dem {{htmlelement("form")}} übermittelt werden. Diese Steuerelemente empfangen keine Browsing-Ereignisse wie Mausklicks oder Fokus-bezogene Ereignisse. Standardmäßig werden solche Steuerelemente von Browsern ausgegraut angezeigt. Beachten Sie, dass Formular-Elemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, zu dem das `<fieldset>` gehören soll, auch wenn es nicht innerhalb des Formulars ist. Beachten Sie bitte, dass die Verwendung dieses Attributs verwirrend ist - wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` dem Formular zugeordnet sind, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente einem Formular zugeordnet sind, indem Sie JavaScript verwenden, wie z.B. [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements).
- `name`
  - : Der mit der Gruppe verknüpfte Name.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste innerhalb geschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Styling mit CSS

Es gibt mehrere spezielle Styling-Überlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [block formatting context](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem linearen `display`-Wert gestylt wird, verhält es sich wie `inline-block`, andernfalls wie `block`. Standardmäßig gibt es einen `2px` breiten `groove`-Rahmen, der den Inhalt umgibt, und eine kleine Menge an Standard-Padding. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über den `block-start`-Rahmen platziert. Das `<legend>` passt sich an und stellt ebenfalls einen Formatting-Kontext dar. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird eine anonyme Box geben, die den Inhalt des `<fieldset>` hält und bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt wird, dann wird die anonyme Box einen Grid-Formatting-Kontext darstellen. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt wird, wird die anonyme Box einen Flex-Formatting-Kontext darstellen. Andernfalls etabliert es einen Block-Formatting-Kontext.

Sie können das `<fieldset>` und `<legend>` nach Belieben stylen, um das Design Ihrer Seite zu erfüllen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel enthält ein `<fieldset>` mit einem `<legend>`, mit einer einzigen Steuerung darin.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerungen darin. Beachten Sie, wie beide Steuerungen aufgrund der Platzierung in einem deaktivierten `<fieldset>` deaktiviert sind.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>,
        sectioning root,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">formularassoziiertes</a>
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von fließendem Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">fließenden Inhalt</a>
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
