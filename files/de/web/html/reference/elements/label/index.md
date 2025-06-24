---
title: "<label>: Das Label-Element"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<label>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschriftung für ein Element in einer Benutzeroberfläche.

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

Das Verknüpfen eines `<label>` mit einem Eingabeelement, wie z.B. {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wichtige Vorteile:

- Der Beschriftungstext ist nicht nur visuell mit seinem entsprechenden Eingabefeld verbunden, sondern auch programmatisch. Das bedeutet zum Beispiel, dass ein Screenreader die Beschriftung ausliest, wenn sich der Fokus des Benutzers auf dem Eingabefeld befindet. Das erleichtert es einem Benutzer mit Unterstützungstechnologie zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder es berührt/tippt, übergibt der Browser den Fokus an das zugeordnete Eingabefeld (das daraus resultierende Ereignis wird auch für das Eingabefeld ausgelöst). Diese erhöhte Trefffäche für den Fokus auf das Eingabefeld bietet einen Vorteil für alle, die versuchen, es zu aktivieren – einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Als nächstes fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` derselbe ist wie die `id` im `<input>`-Element.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` einschließen, in diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Verknüpfung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das ein `label` beschriftet, wird als _beschriftetes Element_ des `label`-Elements bezeichnet. Mehrere Labels können mit demselben Formularelement verbunden werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verbunden werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)

  - : Der Wert des `for`-Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) für ein [beschriftbares](/de/docs/Web/HTML/Guides/Content_categories#labelable) Formular-bezogenes Element im selben Dokument wie das `<label>`-Element sein. Somit kann jedes `label`-Element nur mit einem Formularelement verknüpft werden.

    > [!NOTE]
    > Um das `for`-Attribut programmatisch festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Element_ für dieses `label`-Element – wenn das Element mit dieser `id` tatsächlich ein [beschriftbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Wenn es _kein_ beschriftbares Element ist, hat das `for`-Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls mit dem `id`-Wert übereinstimmen, später im Dokument, werden diese nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut haben; dadurch erhält das zugeordnete Formularelement (das Element, auf das der `for`-Wert verweist) mehrere Beschriftungen.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement haben, solange das `for`-Attribut auf das enthaltene Steuerelement zeigt.

## Styling mit CSS

Es gibt keine besonderen Überlegungen zum Styling von `<label>`-Elementen - strukturell handelt es sich um Inline-Elemente, die daher ähnlich wie ein {{htmlelement("span")}} oder {{htmlelement("a")}}-Element gestylt werden können. Sie können sie auf jede beliebige Weise stylen, solange Sie den Text nicht schwer lesbar machen.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `label`. Dies erschwert es, das mit dem `label` verknüpfte Formularelement zu aktivieren.

**Machen Sie dies nicht:**

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

Das Platzieren von [Überschriftenelementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb eines `<label>` stört viele Arten von Unterstützungstechnologien, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

**Machen Sie dies nicht:**

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

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt keine Zuordnung zu einem Label. Dies kann tatsächlich stören, wie Unterstützungstechnologien die Schaltflächeneingabe interpretieren. Das Gleiche gilt für das {{HTMLElement("button")}}-Element.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
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
          >Phraseninhalt</a
        >, aber keine untergeordneten <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem beschrifteten Element sind erlaubt.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
