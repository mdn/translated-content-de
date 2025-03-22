---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{HTMLSidebar}}

Das **`<fieldset>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um mehrere Steuerungselemente sowie Labels ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

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

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars mit einem verschachtelten {{htmlelement("legend")}}-Element, das eine Beschriftung für das `<fieldset>` liefert. Es besitzt nur wenige Attribute, wobei `form` und `disabled` die bemerkenswertesten sind. `form` kann die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten, sodass Sie das `<fieldset>` zu einem Bestandteil dieses `<form>` machen können, selbst wenn es nicht darin verschachtelt ist. `disabled` erlaubt es Ihnen, das `<fieldset>` und seinen gesamten Inhalt auf einmal zu deaktivieren.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert. Das bedeutet, dass sie nicht bearbeitbar sind und nicht mit dem {{htmlelement("form")}} abgesendet werden. Sie erhalten keine Browsereignisse wie Mausklicks oder Fokus-bezogene Ereignisse. Standardmäßig zeigen Browser solche Steuerelemente ausgegraut an. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, dessen Bestandteil das `<fieldset>` werden soll, selbst wenn es nicht innerhalb des Formulars liegt. Beachten Sie, dass die Verwendung verwirrend ist: Wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft sind, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente mit einem Formular verbunden sind, indem Sie JavaScript verwenden, wie z.B. [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements).
- `name`

  - : Der Name, der mit der Gruppe verbunden ist.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element festgelegt.

## Styling mit CSS

Es gibt mehrere spezielle Styling-Überlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem Inline-Level-`display`-Wert gestylt wird, verhält es sich wie `inline-block`, ansonsten wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rand um den Inhalt und eine kleine Menge an Standardauffüllung. Das Element hat {{cssxref("min-inline-size", "min-inline-size: min-content")}} standardmäßig.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rand platziert. Der `<legend>`-Bereich passt sich der Breite an und etabliert ebenfalls einen Formatierungskontext. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es gibt ein anonymes Feld, das den Inhalt des `<fieldset>` hält und gewisse Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt wird, dann wird das anonyme Feld ein Grid-Formatierungskontext. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt wird, dann wird das anonyme Feld ein Flex-Formatierungskontext. Ansonsten etabliert es einen Block-Formatierungskontext.

Sie können das `<fieldset>` und `<legend>` nach Belieben stylen, um das Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel enthält ein `<fieldset>` mit einem `<legend>`, das ein einzelnes Steuerelement darin enthält.

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

{{EmbedLiveSample('Basic_fieldset', '100%', '80')}}

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

{{EmbedLiveSample('Disabled_fieldset', '100%', '110')}}

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
          >Segmentierungswurzel</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziertes</a
        >
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von Flussinhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
