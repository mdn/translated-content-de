---
title: "<fieldset>: Das Feldset-Element"
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um mehrere Steuerelemente sowie Labels ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

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

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, mit einem verschachtelten {{htmlelement("legend")}}-Element, das eine Beschriftung für das `<fieldset>` bereitstellt. Es nimmt wenige Attribute an, von denen die bemerkenswertesten `form` sind, das die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, sodass Sie das `<fieldset>` Teil dieses `<form>` machen können, auch wenn es nicht darin verschachtelt ist, und `disabled`, was es Ihnen ermöglicht, das `<fieldset>` und dessen gesamten Inhalt auf einmal zu deaktivieren.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachfahren des `<fieldset>` sind, deaktiviert, das heißt, sie sind nicht bearbeitbar und werden nicht zusammen mit dem {{htmlelement("form")}} übermittelt. Sie erhalten keine Browsereignisse, wie Mausklicks oder fokusbezogene Ereignisse. Standardmäßig zeigen Browser solche Steuerelemente ausgegraut an. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, dem Sie das `<fieldset>` zuordnen möchten, auch wenn es nicht innerhalb des Formulars ist. Bitte beachten Sie, dass die Nutzung verwirrend ist — wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente im `<fieldset>` mit dem Formular verknüpft sind, müssen Sie das `form`-Attribut direkt an diesen Elementen verwenden. Sie können überprüfen, welche Elemente einem Formular zugeordnet sind, indem Sie JavaScript verwenden, mit [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements).
- `name`

  - : Der Name, der mit der Gruppe assoziiert ist.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Styling mit CSS

Für `<fieldset>` gibt es mehrere spezielle Styling-Überlegungen.

Der {{cssxref("display")}}-Wert ist standardmäßig `block`, und es wird ein [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Wenn das `<fieldset>` mit einem Displaywert auf Inline-Niveau gestylt wird, verhält es sich wie ein `inline-block`, andernfalls verhält es sich wie ein `block`. Standardmäßig gibt es einen `2px` `groove`-Rand um den Inhalt und eine kleine Menge an Standardabstand. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über den `block-start`-Rand platziert. Das `<legend>` wird in der Größe angepasst und erstellt ebenfalls einen Formatierungskontext. Der `display`-Wert wird in einen Block verwandelt. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird eine anonyme Box geben, die den Inhalt des `<fieldset>` hält, welche bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt ist, wird die anonyme Box ein Grid-Formatierungskontext. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt ist, wird die anonyme Box ein Flex-Formatierungskontext. Andernfalls wird ein Blockformatierungskontext erstellt.

Sie können das `<fieldset>` und `<legend>` nach Belieben stylen, um es dem Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel enthält ein `<fieldset>` mit einem `<legend>`, mit einem einzelnen Steuerelement darin.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerelementen darin. Beachten Sie, wie beide Steuerelemente deaktiviert sind, weil sie sich in einem deaktivierten `<fieldset>` befinden.

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
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formulierungsassoziiertes</a
        >
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Optionales {{HTMLElement("legend")}}-Element, gefolgt von Flussinhalt.
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
      <th scope="row">Implizierte ARIA-Rolle</th>
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
