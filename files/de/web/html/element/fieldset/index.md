---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um mehrere Steuerungselemente sowie Labels ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, mit einem verschachtelten {{htmlelement("legend")}}-Element, das eine Überschrift für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen die bemerkenswertesten `form` sind, welches die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, sodass Sie das `<fieldset>` Teil dieses `<form>` machen können, auch wenn es nicht darin verschachtelt ist, und `disabled`, mit dem Sie das `<fieldset>` und alle seine Inhalte auf einmal deaktivieren können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, sind alle Formular-Steuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert, d. h., sie sind nicht editierbar und werden nicht zusammen mit dem {{htmlelement("form")}} gesendet. Sie erhalten keine Browsing-Ereignisse wie Mausklicks oder Fokus-bezogene Ereignisse. Standardmäßig werden solche Steuerelemente von den Browsern ausgegraut angezeigt. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attributs eines {{HTMLElement("form")}}-Elements an, dem das `<fieldset>` zugehören soll, auch wenn es sich nicht innerhalb des Formulars befindet. Bitte beachten Sie, dass die Verwendung verwirrend ist — wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verbunden sind, müssen Sie das `form`-Attribut direkt auf diese Elemente anwenden. Sie können überprüfen, welche Elemente mit einem Formular verknüpft sind, indem Sie JavaScript verwenden: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements).
- `name`

  - : Der Name, der der Gruppe zugeordnet ist.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Styling mit CSS

Für `<fieldset>` gibt es einige spezielle Styling-Besonderheiten.

Der {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wird das `<fieldset>` mit einem Inline-Level-`display`-Wert gestylt, verhält es sich wie `inline-block`, ansonsten wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rahmen, der die Inhalte umgibt, und eine kleine Menge Standard-Padding. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über der `block-start`-Grenze platziert. Das `<legend>` passt sich an und etabliert ebenfalls einen Formatting Context. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird eine anonyme Box geben, die den Inhalt des `<fieldset>` hält und bestimmte Eigenschaften von `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt ist, ist die anonyme Box ein Grid Formatting Context. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt ist, ist die anonyme Box ein Flex Formatting Context. Andernfalls etabliert es einen Block Formatting Context.

Sie können das `<fieldset>` und `<legend>` nach Belieben stylen, um das Design Ihrer Seite zu unterstützen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel zeigt ein wirklich einfaches `<fieldset>`-Beispiel, mit einem `<legend>`, und einem einzelnen Steuerungselement darin.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerungselementen darin. Beachten Sie, wie beide Steuerungselemente deaktiviert sind, da sie sich in einem deaktivierten `<fieldset>` befinden.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_root">Wurzel der Abschnittseinteilung</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content">formularbezogener</a>
        Inhalt, greifbarer Inhalt.
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind notwendig.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert.
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
