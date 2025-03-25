---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{HTMLSidebar}}

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um mehrere Steuerungselemente sowie Beschriftungen ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

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

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, mit einem verschachtelten {{htmlelement("legend")}}-Element, das eine Beschriftung für das `<fieldset>` liefert. Es hat wenige Attribute, wobei `form` das bemerkenswerteste ist, welches die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann und es Ihnen ermöglicht, das `<fieldset>` zu einem Teil dieses `<form>` zu machen, auch wenn es sich nicht darin befindet. Das Attribut `disabled` ermöglicht es Ihnen, das `<fieldset>` und all seine Inhalte auf einmal zu deaktivieren.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, sind alle Formularsteuerungselemente, die Nachfahren des `<fieldset>` sind, deaktiviert. Das bedeutet, dass sie nicht bearbeitet werden können und nicht zusammen mit dem {{htmlelement("form")}} übermittelt werden. Sie werden keine Browsing-Ereignisse wie Mausklicks oder fokusbezogene Ereignisse empfangen. Standardmäßig werden solche Steuerelemente in Browsern ausgegraut angezeigt. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id) Attributs eines {{HTMLElement("form")}}-Elements an, dem Sie das `<fieldset>` zuordnen möchten, selbst wenn es nicht innerhalb des Formulars ist. Beachten Sie, dass die Nutzung verwirrend sein kann — wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft sind, müssen Sie das `form`-Attribut direkt auf diesen Elementen verwenden. Sie können überprüfen, welche Elemente mit einem Formular verknüpft sind, indem Sie JavaScript und [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) verwenden.
- `name`

  - : Der mit der Gruppe assoziierte Name.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Gestaltung mit CSS

Es gibt einige spezielle stilistische Überlegungen für `<fieldset>`.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block` und es etabliert einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem zeilenweiser `display`-Wert gestylt wird, verhält es sich wie `inline-block`, andernfalls wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rand, der den Inhalt umgibt, und eine kleine Menge an Standard-Abstand. Das Element hat {{cssxref("min-inline-size", "min-inline-size: min-content")}} als Standard.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rand platziert. Das `<legend>` passt sich an dessen Inhalt an und etabliert ebenfalls einen Formatierungskontext. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird einen anonymen Kasten geben, der den Inhalt des `<fieldset>` hält, welcher bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt wird, dann wird der anonyme Kasten ein Rasterformatierungskontext sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt wird, dann wird der anonyme Kasten ein Flexformatierungskontext sein. Andernfalls etabliert es einen Blockformatierungskontext.

Sie können das `<fieldset>` und `<legend>` in jeder gewünschten Weise gestalten, um es an das Design Ihrer Seite anzupassen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel enthält ein `<fieldset>` mit einem `<legend>` und einem einzigen Steuerelement darin.

```html
<form action="#">
  <fieldset>
    <legend>Do you agree?</legend>
    <input type="checkbox" id="chbx" name="agree" value="Yes!" />
    <label for="chbx">I agree</label>
  </fieldset>
</form>
```

#### Resultat

{{ EmbedLiveSample('Basic_fieldset', '100%', '80') }}

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

#### Resultat

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
          >Flow-Inhalt</a
        >,
        sectioning root,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >aufgelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularbezogener</a
        >
        Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}}-Element, gefolgt von Flow-Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
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
