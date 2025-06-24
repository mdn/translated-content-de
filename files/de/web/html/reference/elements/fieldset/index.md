---
title: "<fieldset>: Das Field Set-Element"
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

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
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

Wie das obige Beispiel zeigt, bietet das `<fieldset>`-Element eine Gruppierung für einen Teil eines HTML-Formulars, mit einem verschachtelten {{htmlelement("legend")}} Element, das eine Beschriftung für das `<fieldset>` bereitstellt. Es hat nur wenige Attribute, von denen die bemerkenswertesten `form` sind, welches die `id` eines {{htmlelement("form")}} auf derselben Seite enthalten kann, damit Sie das `<fieldset>` Teil dieses `<form>` machen können, selbst wenn es nicht darin verschachtelt ist, und `disabled`, welches es Ihnen erlaubt, das `<fieldset>` und all seine Inhalte auf einmal zu deaktivieren.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses Boolesche Attribut gesetzt ist, sind alle Formularsteuerungen, die Nachkommen des `<fieldset>` sind, deaktiviert, was bedeutet, dass sie nicht bearbeitbar sind und nicht zusammen mit dem {{htmlelement("form")}} übermittelt werden. Sie erhalten keine Browsing-Ereignisse wie Mausklicks oder fokusbezogene Ereignisse. Standardmäßig zeigen Browser solche Steuerungselemente ausgegraut an. Beachten Sie, dass Formularelemente innerhalb des {{HTMLElement("legend")}} Elements nicht deaktiviert werden.
- `form`
  - : Dieses Attribut nimmt den Wert des [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributs eines {{HTMLElement("form")}} Elements an, dessen Teil das `<fieldset>` sein soll, auch wenn es nicht im Formular enthalten ist. Bitte beachten Sie, dass die Verwendung dieser Methode verwirrend ist – wenn Sie möchten, dass die {{HTMLElement("input")}} Elemente innerhalb des `<fieldset>` mit dem Formular verknüpft werden, müssen Sie das `form`-Attribut direkt an diesen Elementen verwenden. Sie können überprüfen, welche Elemente mit einem Formular verknüpft sind, indem Sie JavaScript und [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) verwenden.
- `name`

  - : Der Name, der der Gruppe zugeordnet ist.

    > [!NOTE]
    > Die Beschriftung für das fieldset wird durch das erste verschachtelte {{HTMLElement("legend")}} Element angegeben.

## Styling mit CSS

Es gibt einige spezielle Styling-Überlegungen für `<fieldset>`.

Sein {{cssxref("display")}} Wert ist standardmäßig `block`, und es etabliert einen [block formatierten Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Wenn das `<fieldset>` mit einem auf Inlinestufe gestylten `display`-Wert versehen ist, verhält es sich wie `inline-block`, ansonsten verhält es sich wie `block`. Standardmäßig gibt es einen `2px` `groove`-Rahmen, der den Inhalt umgibt, und eine kleine Menge Standardabstand. Das Element hat standardmäßig {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Wenn ein {{htmlelement("legend")}} vorhanden ist, wird es über dem `block-start`-Rand platziert. Das `<legend>` wird zusammengeschrumpft und erstellt ebenfalls einen formatierten Kontext. Der `display`-Wert wird blockifiziert. (Zum Beispiel verhält sich `display: inline` wie `block`.)

Es wird eine anonyme Box geben, die den Inhalt des `<fieldset>` enthält und bestimmte Eigenschaften vom `<fieldset>` erbt. Wenn das `<fieldset>` mit `display: grid` oder `display: inline-grid` gestylt wird, dann wird die anonyme Box ein Grid formatierter Kontext sein. Wenn das `<fieldset>` mit `display: flex` oder `display: inline-flex` gestylt wird, dann wird die anonyme Box ein Flex formatierter Kontext sein. Andernfalls etabliert es einen block formatierten Kontext.

Sie können das `<fieldset>` und `<legend>` frei nach Ihren Wünschen gestalten, um es an Ihr Seitendesign anzupassen.

## Beispiele

### Einfaches fieldset

Dieses Beispiel beinhaltet ein `<fieldset>` mit einem `<legend>` und einem einzigen Steuerungselement darin.

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

### Deaktiviertes fieldset

Dieses Beispiel zeigt ein deaktiviertes `<fieldset>` mit zwei Steuerungselementen darin. Beachten Sie, wie beide Steuerungselemente aufgrund der Platzierung in einem deaktivierten `<fieldset>` deaktiviert sind.

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
        Abschnitts-Wurzel,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein optionales {{HTMLElement("legend")}} Element, gefolgt von Flussinhalt.
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

- Das {{HTMLElement("legend")}} Element
- Das {{HTMLElement("input")}} Element
- Das {{HTMLElement("label")}} Element
- Das {{HTMLElement("form")}} Element
