---
title: "<fieldset>: Das Fieldset-Element"
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
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
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, mit einem verschachtelten {{htmlelement("legend")}}-Element, das eine Beschriftung für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen das bemerkenswerteste `form` ist, das die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann. Dadurch können Sie das `<fieldset>` Teil dieses `<form>` machen, selbst wenn es nicht darin verschachtelt ist, und `disabled`, das es Ihnen ermöglicht, das `<fieldset>` und all seine Inhalte auf einmal zu deaktivieren.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachfahren des `<fieldset>` sind, deaktiviert, was bedeutet, dass sie nicht bearbeitet werden können und nicht mit dem {{htmlelement("form")}} eingereicht werden. Sie erhalten keine Browsing-Events, wie Mausklicks oder focus-bezogene Events. Standardmäßig werden solche Steuerelemente in Browsern ausgegraut angezeigt. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, dessen Teil das `<fieldset>` sein soll, selbst wenn es nicht im Formular ist. Beachten Sie, dass die Verwendung dieses Attributs verwirrend ist — wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft werden, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente einem Formular zugeordnet sind, indem Sie JavaScript verwenden: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements).
- `name`
  - : Der Name, der mit der Gruppe assoziiert ist.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste innerhalb verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Styling mit CSS

Es gibt mehrere spezielle Styling-Überlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem zeilenbasierten `display`-Wert gestyled wird, verhält es sich wie `inline-block`, ansonsten verhält es sich wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rahmen, der die Inhalte umgibt, und eine kleine Menge Standard-Padding. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über den `block-start`-Rahmen platziert. Das `<legend>` zieht sich zusammen und etabliert ebenfalls einen Formatting Context. Der `display`-Wert wird in `block` umgewandelt (z.B. verhält sich `display: inline` wie `block`).

Es wird eine anonyme Box geben, die die Inhalte des `<fieldset>` hält und bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestyled wird, dann wird die anonyme Box ein Grid Formatting Context sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestyled wird, dann wird die anonyme Box ein Flex Formatting Context sein. Andernfalls etabliert es einen Block Formatting Context.

Sie können das `<fieldset>` und `<legend>` nach Belieben stylen, um das Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel enthält ein `<fieldset>` mit einem `<legend>`, mit einem einzigen Steuerelement darin.

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

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerelementen darin. Beachten Sie, wie beide Steuerelemente aufgrund des deaktivierten `<fieldset>` ebenfalls deaktiviert sind.

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
          >Fließender Inhalt</a
        >,
        sectioning root,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >form-assoziiertes</a
        >
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließenden Inhalt</a
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
