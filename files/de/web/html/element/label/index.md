---
title: "`<label>`: Das Label-Element"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

Das **`<label>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Beschriftung für ein Element in einer Benutzeroberfläche.

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

Die Zuordnung eines `<label>` zu einem Formularelement, wie z.B. {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige große Vorteile:

- Der Labeltext wird nicht nur visuell mit seinem entsprechenden Texteingabefeld verknüpft, sondern auch programmatisch. Das bedeutet, dass beispielsweise ein Screenreader das Label vorliest, wenn der Benutzer auf dem Formulareingang fokussiert ist, was es Benutzern unterstützender Technologien erleichtert zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder es berührt/tippt, überträgt der Browser den Fokus auf das zugeordnete Eingabeelement (das resultierende Ereignis wird auch für das Eingabeelement ausgelöst). Diese erweiterte Trefferfläche zum Fokussieren des Eingabeelements bietet einen Vorteil für alle, die versuchen, es zu aktivieren — einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit einem `<input>`-Element zuzuordnen, müssen Sie zunächst das `id`-Attribut zum `<input>`-Element hinzufügen. Anschließend fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` mit dem `id` im `<input>`-Element übereinstimmen muss.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln, in diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Zuordnung implizit erfolgt:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das ein Label beschriftet, wird als _labeled control_ des Label-Elements bezeichnet. Mehrere Label können demselben Formularelement zugeordnet sein:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)

  - : Der Wert des `for`-Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Global_attributes/id) für ein [labelable](/de/docs/Web/HTML/Content_categories#labelable) formularbezogenes Element im selben Dokument wie das `<label>`-Element sein. Jedes `label`-Element kann daher nur einem Formularelement zugeordnet werden.

    > [!NOTE]
    > Um das `for`-Attribut programmatisch zu setzen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributes übereinstimmt, ist das _labeled control_ für dieses `label`-Element — wenn das Element mit dieser `id` tatsächlich ein [labelable element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Falls es _kein_ labelbares Element ist, hat das `for`-Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls den `id`-Wert später im Dokument übereinstimmen, werden sie nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut haben; doing so bewirkt, dass das zugeordnete Formularelement (das Formularsteuerelement, auf das der `for`-Wert verweist) mehrere Labels hat.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement haben, solange sich das `for`-Attribut auf das enthaltene Steuerelement bezieht.

## Styling mit CSS

Es gibt keine speziellen Stilüberlegungen für `<label>`-Elemente — strukturell sind sie Inline-Elemente und können auf ähnliche Weise wie ein {{htmlelement("span")}} oder {{htmlelement("a")}} Element gestaltet werden. Sie können sie in jeder gewünschten Weise stylen, solange Sie nicht den Text schwer lesbar machen.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `label`. Dies erschwert es, das mit dem `label` verknüpfte Formularelement zu aktivieren.

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Element/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützenden Technologien, da Überschriften häufig als [Navigation Hilfe](/de/docs/Web/HTML/Element/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}} Element innerhalb eines {{HTMLElement("fieldset")}}.

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

Ein {{HTMLElement("input")}}-Element mit einer `type="button"` Deklaration und einem gültigen `value`-Attribut benötigt kein zugeordnetes Label. Dies könnte tatsächlich die Art und Weise stören, wie assistive Technologie die Schaltflächeneingabe parst. Dasselbe gilt für das {{HTMLElement("button")}} Element.

## Beispiele

### Definition eines impliziten Labels

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Defining an implicit label', '200', '50')}}

### Definition eines expliziten Labels mit dem "for"-Attribut

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularverknüpftes Element</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, aber keine nachgeordneten <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >labelbaren</a
        >
        Elemente außer dem beschrifteten Steuerelement sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
