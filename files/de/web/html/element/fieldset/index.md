---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um mehrere Steuerungselemente sowie Labels ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, mit einem verschachtelten {{htmlelement("legend")}}-Element, das eine Beschriftung für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen das wichtigste `form` ist, das die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, wodurch Sie das `<fieldset>` zu diesem `<form>`-Teil machen können, selbst wenn es nicht darin verschachtelt ist, und `disabled`, das es Ihnen ermöglicht, das `<fieldset>` und alle seine Inhalte auf einmal zu deaktivieren.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, sind alle Formularsteuerungen, die Nachkommen des `<fieldset>` sind, deaktiviert, was bedeutet, dass sie nicht bearbeitet werden können und nicht zusammen mit dem {{htmlelement("form")}} übermittelt werden. Sie erhalten keine Browsing-Ereignisse, wie Maus-Klicks oder Fokus-bezogene Ereignisse. Standardmäßig werden solche Steuerungselemente von Browsern ausgegraut angezeigt. Beachten Sie, dass Formularelemente im {{HTMLElement("legend")}}-Element nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attributs eines {{HTMLElement("form")}}-Elements an, dem Sie das `<fieldset>` zuordnen möchten, selbst wenn es sich nicht im Formular befindet. Bitte beachten Sie, dass die Verwendung dieses Attributs verwirrend sein kann - wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente im `<fieldset>` mit dem Formular verbunden sind, müssen Sie das `form`-Attribut direkt für diese Elemente verwenden. Sie können überprüfen, welche Elemente mit einem Formular verbunden sind, indem Sie JavaScript verwenden, wie {{domxref("HTMLFormElement.elements")}}.
- `name`

  - : Der Name, der der Gruppe zugewiesen ist.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Styling mit CSS

Für `<fieldset>` gibt es einige besondere Styling-Überlegungen.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem Inline-Level-`display`-Wert gestylt ist, verhält es sich wie `inline-block`, andernfalls verhält es sich wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rahmen, der die Inhalte umgibt, und eine kleine Menge Standard-Padding. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rahmen platziert. Das `<legend>` zieht sich zusammen und etabliert ebenfalls einen Formatierungskontext. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird ein anonymer Kasten vorhanden sein, der den Inhalt des `<fieldset>` enthält, welcher bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt wird, dann wird der anonyme Kasten ein Gitter-Formatierungskontext. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt wird, dann wird der anonyme Kasten ein Flex-Formatierungskontext. Andernfalls etabliert es einen Block-Formatierungskontext.

Sie können das `<fieldset>` und `<legend>` auf jede beliebige Weise stylen, um Ihr Seitendesign anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel zeigt ein wirklich einfaches `<fieldset>`-Beispiel, mit einem `<legend>` und einem einzigen Steuerungselement darin.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerungselementen darin. Beachten Sie, dass beide Steuerungselemente aufgrund des deaktivierten `<fieldset>` deaktiviert sind.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von fließendem
        Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassung des Tags</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
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
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("legend")}}-Element
- Das {{HTMLElement("input")}}-Element
- Das {{HTMLElement("label")}}-Element
- Das {{HTMLElement("form")}}-Element
