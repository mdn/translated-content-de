---
title: "<fieldset>: Das Fieldset-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
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

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, mit einem verschachtelten {{htmlelement("legend")}}-Element, das eine Beschriftung für das `<fieldset>` bereitstellt. Es nimmt nur wenige Attribute, von denen die bemerkenswertesten `form` sind, welches die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann. So kann das `<fieldset>` Teil dieses `<form>` sein, auch wenn es nicht darin verschachtelt ist, und `disabled`, welches es ermöglicht, das `<fieldset>` und all seinen Inhalt auf einmal zu deaktivieren.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachfahren des `<fieldset>` sind, deaktiviert. Das bedeutet, sie sind nicht editierbar und werden nicht zusammen mit dem {{htmlelement("form")}} übermittelt. Sie werden keine Browsereignisse erhalten, wie Mausklicks oder fokusbezogene Ereignisse. Standardmäßig zeigen Browser solche Steuerelemente grau an. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, zu dem das `<fieldset>` gehören soll, auch wenn es nicht innerhalb des Formulars ist. Bitte beachten Sie, dass die Verwendung davon verwirrend ist – wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` dem Formular zugeordnet sind, müssen Sie das `form`-Attribut direkt an diesen Elementen verwenden. Sie können überprüfen, welche Elemente über JavaScript einem Formular zugeordnet sind, indem Sie [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) verwenden.
- `name`

  - : Der mit der Gruppe verknüpfte Name.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Stil mit CSS

Es gibt einige spezielle stilistische Überlegungen für `<fieldset>`.

Der Wert von {{cssxref("display")}} ist standardmäßig `block` und es erstellt einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem Ebenenniveau-`display`-Wert gestylt ist, verhält es sich als `inline-block`, andernfalls verhält es sich als `block`. Standardmäßig gibt es einen `2px` `groove`-Rahmen um den Inhalt und eine kleine Menge an Standard-Abstand. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rahmen platziert. Das `<legend>` wird in der Größe angepasst und erstellt ebenfalls einen Formatierungskontext. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` als `block`.)

Es wird eine anonyme Box geben, die den Inhalt des `<fieldset>` enthält, welches bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt ist, wird die anonyme Box ein Gitterformatierungskontext sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt ist, wird die anonyme Box ein Flexformatierungskontext sein. Andernfalls erstellt es einen Blockformatierungskontext.

Sie können das `<fieldset>` und `<legend>` nach Belieben so stylen, dass es zu Ihrem Seitendesign passt.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerelementen darin. Beachten Sie, dass beide Steuerelemente aufgrund der Tatsache, dass sie sich in einem deaktivierten `<fieldset>` befinden, deaktiviert sind.

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
          >Abschnitts-Root</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, fühlbarer Inhalt.
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
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
