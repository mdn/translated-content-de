---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<fieldset>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um mehrere Steuerelemente sowie Beschriftungen ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, wobei ein verschachteltes {{htmlelement("legend")}}-Element eine Überschrift für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen die bemerkenswertesten `form` sind, das die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann. Dadurch können Sie das `<fieldset>` zu einem Teil dieses `<form>` machen, selbst wenn es nicht darin verschachtelt ist. Mit dem Attribut `disabled` können Sie das `<fieldset>` und alle seine Inhalte auf einmal deaktivieren.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert, was bedeutet, dass sie nicht bearbeitbar sind und nicht zusammen mit dem {{htmlelement("form")}} übermittelt werden. Sie werden keine Browsing-Ereignisse wie Mausklicks oder fokussierte Ereignisse empfangen. Standardmäßig zeigen Browser solche Steuerelemente ausgegraut an. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, dem Sie das `<fieldset>` zuordnen möchten, selbst wenn es nicht innerhalb des Formulars ist. Bitte beachten Sie, dass die Verwendung verwirrend ist — wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft werden, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente mit einem Formular über JavaScript verknüpft sind, indem Sie [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) verwenden.
- `name`

  - : Der Name, der der Gruppe zugeordnet ist.

    > [!NOTE]
    > Die Überschrift für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Gestaltung mit CSS

Es gibt mehrere spezielle Stilüberlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem inline-level-`display`-Wert gestaltet ist, wird es sich wie `inline-block` verhalten, andernfalls wird es sich wie `block` verhalten. Standardmäßig gibt es einen `2px`-`groove`-Rand, der den Inhalt umgibt, und eine kleine Menge an Standard-Abstand. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rand platziert. Das `<legend>` passt sich zusammen und etabliert auch einen Formatierungskontext. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird eine anonyme Box geben, die die Inhalte des `<fieldset>` hält, die bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestaltet ist, dann wird die anonyme Box ein Raster-Formatierungskontext sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestaltet ist, dann wird die anonyme Box ein flexibler Formatierungskontext sein. Andernfalls etabliert es einen Block-Formatierungskontext.

Sie können das `<fieldset>` und `<legend>` nach Belieben stylen, um es an das Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel enthält ein `<fieldset>` mit einem `<legend>` und einem einzelnen Steuerelement darin.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerelementen darin. Beachten Sie, dass beide Steuerelemente durch das deaktivierte `<fieldset>` deaktiviert sind.

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
          >Abschnitts-Wurzel</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von
        Flussinhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
