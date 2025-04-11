---
title: "<label>: Das Label-Element"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
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

Ein `<label>` mit einem Formularelement wie {{htmlelement("input")}} oder {{htmlelement("textarea")}} zu verknüpfen, bietet einige wesentliche Vorteile:

- Der Label-Text ist nicht nur optisch mit seinem entsprechenden Texteingabefeld verbunden, sondern auch programmatisch. Das bedeutet zum Beispiel, dass ein Screenreader das Label liest, wenn der Benutzer auf das Formulareingabefeld fokussiert ist, was es einem Benutzer mit assistiver Technologie erleichtert zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer ein Label anklickt oder berührt/tippt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird auch für das Eingabefeld ausgelöst). Diese vergrößerte Trefferfläche zur Fokussierung des Eingabefeldes bietet einen Vorteil für jeden, der versucht, es zu aktivieren – einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Anschließend fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` identisch mit dem `id` im `<input>`-Element sein muss.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln, in welchem Fall `for`- und `id`-Attribute nicht benötigt werden, da die Zuordnung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das ein Label beschriftet, wird als _beschriftetes Steuerelement_ des Label-Elements bezeichnet. Mehrere Labels können mit demselben Formularelement verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)

  - : Der Wert des `for`-Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) für ein [beschriftbares](/de/docs/Web/HTML/Guides/Content_categories#labelable) formularbezogenes Element im selben Dokument wie das `<label>`-Element sein. Jedes einzelne `label`-Element kann nur mit einem Formularelement verknüpft werden.

    > [!NOTE]
    > Um das `for`-Attribut programmatisch festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Steuerelement_ für dieses `label`-Element — wenn das Element mit dieser `id` tatsächlich ein [beschriftbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Ist es kein beschriftbares Element, hat das `for`-Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls mit dem `id`-Wert übereinstimmen, die später im Dokument erscheinen, werden sie nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut erhalten; dadurch erhält das zugehörige Formularelement (das Formularelement, auf das der `for`-Wert verweist) mehrere Labels.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein darin enthaltenes Steuerelement-Element haben, solange das `for`-Attribut auf das darin enthaltene Steuerelement-Element verweist.

## Styling mit CSS

Es gibt keine besonderen Styling-Anforderungen für `<label>`-Elemente — strukturell sind sie Inline-Elemente und können daher auf gleiche Weise wie ein {{htmlelement("span")}}- oder {{htmlelement("a")}}-Element gestaltet werden. Sie können sie beliebig gestalten, solange der Text nicht schwer lesbar wird.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} in einem `label`. Dadurch wird es schwierig, das mit dem `label` verknüpfte Formulareingabefeld zu aktivieren.

**Nicht so machen:**

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb eines `<label>` stört viele Arten von assistiver Technologie, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

**Nicht so machen:**

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

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt kein verknüpftes Label. Das tun könnte tatsächlich stören, wie assistive Technologien den Schaltflächeneingang analysieren. Dasselbe gilt für das {{HTMLElement("button")}}-Element.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, aber keine Nachkommenelemente <code>label</code>. Keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem beschrifteten Steuerungselement sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
