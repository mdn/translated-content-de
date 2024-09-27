---
title: "<label>: Das Label-Element"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<label>`** [HTML](/de/docs/Web/HTML) Element stellt eine Beschriftung für ein Element in einer Benutzeroberfläche dar.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

Die Zuordnung eines `<label>` zu einem Formularelement, wie {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wichtige Vorteile:

- Der Label-Text ist nicht nur visuell mit seinem entsprechenden Texteingabefeld verbunden, sondern auch programmatisch. Das bedeutet, dass z.B. ein Screenreader das Label vorliest, wenn der Benutzer auf das Formulareingabefeld fokussiert, was es Nutzern von unterstützender Technologie erleichtert, zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder tippt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird auch für das Eingabefeld ausgelöst). Diese vergrößerte Anwendungsfläche für den Fokus bietet einen Vorteil für alle, die versuchen, es zu aktivieren — einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>` Element explizit einem `<input>` Element zuzuordnen, müssen Sie zunächst das `id` Attribut zum `<input>` Element hinzufügen. Anschließend fügen Sie dem `<label>` Element das `for` Attribut hinzu, wobei der Wert von `for` derselbe wie das `id` im `<input>` Element ist.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln, in diesem Fall sind die `for` und `id` Attribute nicht erforderlich, da die Zuordnung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das von einem Label beschriftet wird, wird als das _gelabelte Steuerelement_ des Label-Elements bezeichnet. Mehrere Labels können mit demselben Formularelement verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>` Element verknüpft werden können, schließen ein: {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer bei `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)

  - : Der Wert des `for` Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Global_attributes#id) für ein [labelbares](/de/docs/Web/HTML/Content_categories#labelable) Formularbezogenes Element im gleichen Dokument wie das `<label>` Element sein. So kann ein bestimmtes `label` Element nur mit einem Formularelement verknüpft werden.

    > [!NOTE]
    > Um das `for` Attribut programmatisch zu setzen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id` Attribut, das mit dem Wert des `for` Attributs übereinstimmt, ist das _gelabelte Steuerelement_ für dieses `label` Element — wenn das Element mit dieser `id` tatsächlich ein [labelbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Wenn es _kein_ labelbares Element ist, dann hat das `for` Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls dem `id` Wert entsprechen, werden diese später im Dokument nicht berücksichtigt.

    Mehrere `label` Elemente können denselben Wert für ihr `for` Attribut haben; dies führt dazu, dass das zugehörige Formularelement (das Formularelement, auf das der `for` Wert verweist) mehrere Labels hat.

    > [!NOTE]
    > Ein `<label>` Element kann sowohl ein `for` Attribut als auch ein enthaltenes Steuerelement haben, solange das `for` Attribut auf das enthaltene Steuerelement zeigt.

## Styling mit CSS

Es gibt keine speziellen Styling-Bedingungen für `<label>` Elemente — strukturell sind sie einfache Inline-Elemente, die ähnlich wie ein {{htmlelement("span")}} oder {{htmlelement("a")}} Element gestylt werden können. Sie können sie auf beliebige Weise stylen, solange der Text nicht schwer lesbar wird.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} in einem `label`. Dies erschwert es den Benutzern, das mit dem `label` verknüpfte Formulareingabefeld zu aktivieren.

**Tun Sie dies nicht:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

**Bevorzugen Sie dies:**

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions
</label>
<p>
  <a href="terms-and-conditions.html">Read our Terms and Conditions</a>
</p>
```

### Überschriften

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Element/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützender Technologie, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Element/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>` Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Element/form), oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}} Element, das innerhalb eines {{HTMLElement("fieldset")}} platziert wird.

**Tun Sie dies nicht:**

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**Bevorzugen Sie dies:**

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Schaltflächen

Ein {{HTMLElement("input")}} Element mit einer `type="button"` Deklaration und einem gültigen `value` Attribut benötigt kein zugehöriges Label. Andernfalls kann dies tatsächlich die Art und Weise stören, wie unterstützende Technologie die Schaltflächeneingabe analysiert. Dasselbe gilt für das {{HTMLElement("button")}} Element.

## Beispiele

### Definition eines impliziten Labels

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Simple_label_example', '200', '50')}}

### Definition eines expliziten Labels mit dem "for" Attribut

```html
<label for="username">Click me to focus on the input field</label>
<input type="text" id="username" />
```

{{EmbedLiveSample('Using_the_for_attribute', '200', '50')}}

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktive Inhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularelementassoziierte Inhalte</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, aber keine Nachkommen <code>label</code> Elemente. Keine
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >labelbaren</a
        >
        Elemente außer dem gelabelten Steuerelement sind erlaubt.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
