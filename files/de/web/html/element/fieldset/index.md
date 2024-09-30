---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um mehrere Steuerungen sowie Beschriftungen ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, wobei ein verschachteltes {{htmlelement("legend")}}-Element eine Beschriftung für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen das bemerkenswerteste `form` ist, das die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, sodass Sie das `<fieldset>` Teil dieses `<form>`-Elements machen können, auch wenn es nicht darin verschachtelt ist, und `disabled`, das es ermöglicht, das `<fieldset>` und alle seine Inhalte auf einmal zu deaktivieren.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert, was bedeutet, dass sie nicht bearbeitbar sind und nicht zusammen mit dem {{htmlelement("form")}} übermittelt werden. Sie werden keine Browsing-Ereignisse erhalten, wie Mausklicks oder fokusbezogene Ereignisse. Standardmäßig werden solche Steuerungen von Browsern ausgegraut angezeigt. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attributs eines {{HTMLElement("form")}}-Elements an, dem das `<fieldset>` angehören soll, auch wenn es sich nicht innerhalb des Formulars befindet. Bitte beachten Sie, dass die Verwendung dieses Attributs verwirrend sein kann – wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` dem Formular zugeordnet sind, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente einem Formular zugeordnet sind, indem Sie JavaScript verwenden, und zwar [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements).
- `name`

  - : Der mit der Gruppe verknüpfte Name.

    > [!NOTE]
    > Die Beschriftung für das fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Styling mit CSS

Es gibt einige spezielle Styling-Überlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block` und es etabliert einen [block formatting context](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem `display`-Wert auf Inline-Level gestylt ist, verhält es sich wie `inline-block`, andernfalls verhält es sich wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rahmen, der die Inhalte umgibt, und eine kleine Menge an Standardabstand. Das Element hat {{cssxref("min-inline-size", "min-inline-size: min-content")}} standardmäßig.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über der `block-start` Grenze platziert. Der `<legend>` passt sich an und etabliert auch einen Formatierungskontext. Der `display`-Wert wird blockiert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird eine anonyme Box geben, die die Inhalte des `<fieldset>` hält, welche bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt ist, dann ist die anonyme Box ein Grid-Formatierungskontext. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt ist, dann ist die anonyme Box ein Flex-Formatierungskontext. Andernfalls etabliert es einen Block-Formatierungskontext.

Sie können das `<fieldset>` und `<legend>` gerne nach Belieben stylen, um das Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel zeigt ein wirklich einfaches `<fieldset>`-Beispiel mit einem `<legend>` und einem einzigen Steuerelement darin.

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

{{ EmbedLiveSample('Simple_fieldset', '100%', '80') }}

### Deaktiviertes Fieldset

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerelementen darin. Beachten Sie, wie beide Steuerelemente aufgrund des deaktivierten `<fieldset>` deaktiviert sind.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_root"
          >Sectioning root</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziiertes</a
        >
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von Flussinhalt.
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
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
