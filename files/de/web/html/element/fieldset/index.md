---
title: "<fieldset>: Das Field Set Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um mehrere Steuerelemente sowie Labels ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, wobei ein verschachteltes {{htmlelement("legend")}}-Element eine Beschriftung für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen die bemerkenswertesten `form` sind, welches die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, um das `<fieldset>` Teil dieses `<form>`s zu machen, auch wenn es nicht darin verschachtelt ist, und `disabled`, welches es ermöglicht, das `<fieldset>` und seinen gesamten Inhalt in einem Schritt zu deaktivieren.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formular-Steuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert, was bedeutet, dass sie nicht bearbeitet werden können und nicht zusammen mit dem {{htmlelement("form")}} gesendet werden. Sie empfangen keine Browser-Ereignisse, wie Mausklicks oder Fokus-bezogene Ereignisse. In der Standardeinstellung zeigen Browser solche Steuerelemente ausgegraut an. Beachten Sie, dass Formular-Elemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, von dem Sie möchten, dass das `<fieldset>` Teil ist, auch wenn es sich nicht innerhalb des Formulars befindet. Bitte beachten Sie, dass die Verwendung verwirrend ist – wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft sind, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente mit einem Formular verbunden sind, indem Sie JavaScript verwenden und [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) abfragen.
- `name`

  - : Der Name, der mit der Gruppe verbunden ist.

    > [!NOTE]
    > Die Beschriftung für das Feldset wird durch das erste {{HTMLElement("legend")}}-Element gegeben, das darin verschachtelt ist.

## Gestaltung mit CSS

Es gibt einige spezielle Stilüberlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem Inline-Level-`display`-Wert gestylt wird, verhält es sich wie `inline-block`, andernfalls wie `block`. Standardmäßig gibt es einen `2px` breiten `groove`-Rahmen um den Inhalt und eine kleine Menge Standard-Polsterung. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rahmen platziert. Das `<legend>` wird entsprechend seinem Inhalt verkleinert und etabliert ebenfalls einen Formatierungskontext. Der `display`-Wert wird blockiert. (Zum Beispiel verhält sich `display: inline` als `block`.)

Es wird eine anonyme Box geben, die den Inhalt des `<fieldset>` hält, welche bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt wird, dann wird die anonyme Box ein Grid-Formatierungskontext sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt wird, dann wird die anonyme Box ein Flex-Formatierungskontext sein. Andernfalls etabliert es einen Blockformatierungskontext.

Sie können das `<fieldset>` und `<legend>` nach Belieben stylen, um das Design Ihrer Seite zu unterstützen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel zeigt ein sehr einfaches `<fieldset>`-Beispiel mit einem `<legend>` und einem einzigen Steuerelement darin.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_root"
          >Abschnittswurzel</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgeführt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von fließendem
        Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassung von Tags</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
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
