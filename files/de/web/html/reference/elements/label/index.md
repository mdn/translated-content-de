---
title: "<label>: Das Label-Element"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<label>`** [HTML](/de/docs/Web/HTML)-Element stellt eine Beschriftung für ein Element in einer Benutzeroberfläche dar.

{{InteractiveExample("HTML Demo: &lt;label&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="preference">
  <label for="cheese">Do you like cheese?</label>
  <input type="checkbox" name="cheese" id="cheese" />
</div>

<div class="preference">
  <label for="peas">Do you like peas?</label>
  <input type="checkbox" name="peas" id="peas" />
</div>
```

```css interactive-example
.preference {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0.5rem;
}
```

Die Zuordnung eines `<label>` zu einem Formular-Steuerelement, wie z.B. {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige große Vorteile:

- Der Beschriftungstext ist nicht nur visuell mit dem entsprechenden Texteingabefeld verbunden, sondern auch programmatisch. Dies bedeutet beispielsweise, dass ein Screenreader die Beschriftung vorliest, wenn der Benutzer auf das Formulareingabefeld fokussiert ist. Dies erleichtert es Benutzern unterstützender Technologien, zu verstehen, welche Daten eingegeben werden sollten.
- Wenn ein Benutzer auf ein Label klickt oder es berührt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird auch für das Eingabefeld ausgelöst). Diese vergrößerte Trefferfläche zum Fokussieren des Eingabefeldes bietet jedem, der versucht, es zu aktivieren, einen Vorteil — einschließlich solcher, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Danach fügen Sie dem `<label>`-Element das `for`-Attribut hinzu, wobei der Wert des `for`-Attributs mit dem `id` im `<input>`-Element übereinstimmt.

Alternativ können Sie das `<input>` direkt im `<label>` verschachteln, in diesem Fall sind die `for`- und `id`-Attribute nicht erforderlich, da die Zuordnung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formular-Steuerelement, das ein Label beschriftet, wird als das _beschriftete Steuerelement_ des Label-Elements bezeichnet. Mehrere Labels können mit demselben Formular-Steuerelement verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)

  - : Der Wert des `for`-Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines [labelbaren](/de/docs/Web/HTML/Guides/Content_categories#labelable) formularbezogenen Elements im selben Dokument wie das `<label>`-Element sein. Jedes `label`-Element kann daher nur mit einem Formular-Steuerelement verknüpft werden.

    > [!NOTE]
    > Um das `for`-Attribut programmatisch zu setzen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Steuerelement_ für dieses `label`-Element — wenn das Element mit dieser `id` tatsächlich ein [labelbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Wenn es _kein_ labelbares Element ist, hat das `for`-Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls mit dem `id`-Wert übereinstimmen, die später im Dokument erscheinen, werden diese nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut besitzen; dadurch wird das zugehörige Formular-Steuerelement (das Formular-Steuerelement, auf das der `for`-Wert verweist) mit mehreren Labels versehen.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement-Element besitzen, solange das `for`-Attribut auf das enthaltene Steuerelement-Element verweist.

## Styling mit CSS

Es gibt keine besonderen Styling-Überlegungen für `<label>`-Elemente — strukturell sind sie Inline-Elemente und können daher ähnlich wie ein {{htmlelement("span")}} oder {{htmlelement("a")}}-Element gestaltet werden. Sie können das Styling auf jede gewünschte Weise anwenden, solange Sie nicht dazu führen, dass der Text schwer lesbar wird.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `label`. Dies erschwert es den Leuten, das Formular-Eingabefeld, das mit dem `label` verknüpft ist, zu aktivieren.

**So nicht:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

**Besser so:**

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützender Technologie, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element, das innerhalb eines {{HTMLElement("fieldset")}} platziert wird.

**So nicht:**

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**Besser so:**

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Schaltflächen

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt kein zugeordnetes Label. Dies kann tatsächlich stören, wie unterstützende Technologie die Schaltflächeneingabe verarbeitet. Dasselbe gilt für das {{HTMLElement("button")}}-Element.

## Beispiele

### Definieren eines impliziten Labels

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Defining an implicit label', '200', '50')}}

### Definieren eines expliziten Labels mit dem "for"-Attribut

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Redefluss-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktive Inhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >Formular-assoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Redefluss-Inhalt</a
        >, aber keine Nachfahren <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >labelbaren</a
        >
        Elemente außer dem beschrifteten Steuerelement sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Redefluss-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
