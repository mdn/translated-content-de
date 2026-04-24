---
title: "`<fieldset>` HTML-Feldsatz-Element"
short-title: <fieldset>
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<fieldset>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um mehrere Steuerungselemente sowie Labels ({{HTMLElement("label")}}) innerhalb eines Webformulars zu gruppieren.

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
  background-color: black;
  color: white;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, wobei ein verschachteltes {{htmlelement("legend")}}-Element eine Beschriftung für das `<fieldset>` angibt. Es verfügt über wenige Attribute, von denen die bemerkenswertesten `form` sind, das die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, sodass das `<fieldset>` Teil dieses `<form>` sein kann, auch wenn es nicht darin verschachtelt ist, und `disabled`, das es Ihnen ermöglicht, das `<fieldset>` und seinen gesamten Inhalt auf einmal zu deaktivieren.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, sind alle Formularsteuerelemente, die Nachkommen des `<fieldset>` sind, deaktiviert, d.h. sie sind nicht bearbeitbar und werden nicht zusammen mit dem {{htmlelement("form")}} übermittelt. Sie erhalten keine Browsereignisse, wie Mausklicks oder fokusbezogene Ereignisse. Standardmäßig werden solche Steuerelemente von Browsern ausgegraut dargestellt. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}}-Elements nicht deaktiviert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs eines {{HTMLElement("form")}}-Elements an, dem Sie das `<fieldset>` zuordnen möchten, auch wenn es nicht innerhalb des Formulars ist. Beachten Sie bitte, dass die Verwendung verwirrend ist – wenn Sie möchten, dass die {{HTMLElement("input")}}-Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft sind, müssen Sie das `form`-Attribut direkt an diesen Elementen verwenden. Sie können überprüfen, welche Elemente einem Formular zugeordnet sind, indem Sie JavaScript verwenden und [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) nutzen.
- `name`
  - : Der Name, der der Gruppe zugeordnet ist.

    > [!NOTE]
    > Die Beschriftung für das Fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}}-Element angegeben.

## Gestaltung mit CSS

Für `<fieldset>` gibt es mehrere spezielle gestalterische Überlegungen.

Sein {{cssxref("display")}}-Wert ist standardmäßig `block`, und es etabliert einen [block formatting context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Wenn das `<fieldset>` mit einem inline-level `display`-Wert gestaltet wird, verhält es sich als `inline-block`, andernfalls verhält es sich als `block`. Standardmäßig gibt es eine `2px` `groove`-Rahmen, der den Inhalt umgibt, und eine geringe Menge an Standardabstand. Das Element besitzt standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über der `block-start`-Rahmen platziert. Das `<legend>` passt sich der Größe an und etabliert ebenfalls einen Formatierungskontext. Der `display`-Wert wird blockiert. (Zum Beispiel verhält sich `display: inline` als `block`.)

Es wird ein anonymes Box-Element geben, das den Inhalt des `<fieldset>` hält, welches bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestaltet wird, ist das anonyme Box-Element ein Grid-Formatierungskontext. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestaltet wird, ist das anonyme Box-Element ein Flex-Formatierungskontext. Andernfalls etabliert es einen Block-Formatierungskontext.

Sie können das `<fieldset>` und `<legend>` nach Belieben gestalten, um Ihrem Seitendesign zu entsprechen.

## Beispiele

### Einfaches Fieldset

Dieses Beispiel beinhaltet ein `<fieldset>` mit einem `<legend>`, mit einem einzelnen Steuerelement darin.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        Wurzel der Abschnittbildung,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularbezogenes</a
        >
        Element, greifbarer Inhalt.
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
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
