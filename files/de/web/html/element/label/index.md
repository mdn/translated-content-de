---
title: "<label>: Das Label-Element"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
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

Ein `<label>` mit einem Formularelement zu verknüpfen, wie z. B. {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wesentliche Vorteile:

- Der Labeltext ist nicht nur visuell mit seinem entsprechenden Textinput verbunden, sondern auch programmatisch. Das bedeutet, dass zum Beispiel ein Screenreader das Label liest, wenn der Benutzer sich auf das Formularelement fokussiert, wodurch es einem Benutzer von unterstützender Technologie einfacher gemacht wird, zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder es berührt/antippt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird auch für das Eingabeelement ausgelöst). Diese vergrößerte Trefferfläche für das Fokussieren der Eingabe bietet allen, die versuchen, es zu aktivieren — einschließlich derjenigen, die ein Touchscreen-Gerät verwenden — einen Vorteil.

Um ein `<label>` Element explizit mit einem `<input>` Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Anschließend fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` derselbe wie das `id` im `<input>`-Element ist.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln. In diesem Fall sind die Attribute `for` und `id` nicht notwendig, da die Verbindung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das ein Label beschriftet, wird das _gelabelte Element_ des Label-Elements genannt. Mehrere Labels können mit demselben Formularelement verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)

  - : Der Wert des `for`-Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Global_attributes/id) für ein [beschriftbares](/de/docs/Web/HTML/Content_categories#labelable) formbezogenes Element im selben Dokument wie das `<label>`-Element sein. Somit kann jedes `label`-Element nur mit einem Formularelement verknüpft werden.

    > [!NOTE]
    > Um das `for`-Attribut programmatisch festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das dem Wert des `for`-Attributs entspricht, ist das _gelabelte Element_ für dieses `label`-Element — wenn das Element mit dieser `id` tatsächlich ein [beschriftbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Falls es _kein_ beschriftbares Element ist, hat das `for`-Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls dem `id`-Wert entsprechen und später im Dokument vorkommen, werden diese nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut erhalten; dies führt dazu, dass das zugehörige Formularelement (das Formularelement, auf das der `for`-Wert verweist) mehrere Labels hat.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Kontrollelement haben, solange das `for`-Attribut auf das enthaltene Kontrollelement verweist.

## Gestaltung mit CSS

Es gibt keine speziellen Stilüberlegungen für `<label>`-Elemente — strukturell sind sie einfache Inline-Elemente und können daher ähnlich wie ein {{htmlelement("span")}} oder {{htmlelement("a")}} Element gestylt werden. Sie können sie auf jede gewünschte Weise gestalten, solange Sie nicht das Lesen des Textes erschweren.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `label`. Dies erschwert es Personen, das mit dem `label` verbundene Formularelement zu aktivieren.

**Das sollten Sie nicht tun:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

**Bevorzugt dies:**

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Element/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützender Technologie, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Element/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

**Das sollten Sie nicht tun:**

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**Bevorzugt dies:**

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Schaltflächen

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt kein damit verbundenes Label. Dies könnte tatsächlich die Art und Weise, wie unterstützende Technologie das Eingabe-Element interpretiert, stören. Gleiches gilt für das {{HTMLElement("button")}}-Element.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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
          >Formular-assoziiertes Element</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, aber keine nachgeordneten <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem gelabelten Kontrollfeld sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
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
