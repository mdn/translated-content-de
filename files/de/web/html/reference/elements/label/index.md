---
title: "<label>: Das Label-Element"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

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

Ein `<label>` mit einem Formularsteuerungselement wie {{htmlelement("input")}} oder {{htmlelement("textarea")}} zu verknüpfen, bietet einige wesentliche Vorteile:

- Der Labeltext ist nicht nur visuell mit seinem entsprechenden Texteingabefeld verbunden; er ist auch programmatisch damit verknüpft. Das bedeutet zum Beispiel, dass ein Screenreader das Label vorliest, wenn der Benutzer sich auf das Formulareingabefeld konzentriert, sodass ein Benutzer mit einer unterstützenden Technologie besser verstehen kann, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder tippt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird auch für das Eingabefeld ausgelöst). Dieser erweiterte Trefferbereich ermöglicht es jedem, der versucht, es zu aktivieren, einen Vorteil — einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zunächst das `id`-Attribut zum `<input>`-Element hinzufügen. Danach fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` derselbe wie die `id` im `<input>`-Element ist.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln, in diesem Fall sind das `for`- und `id`-Attribut nicht erforderlich, da die Verknüpfung implizit erfolgt:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularsteuerelement, das ein Label kennzeichnet, wird als das _gekennzeichnete Steuerelement_ des Label-Elements bezeichnet. Mehrere Labels können mit demselben Formularsteuerelement verknüpft sein:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Der Wert des `for`-Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) für ein [beschriftbares](/de/docs/Web/HTML/Guides/Content_categories#labelable) formularbezogenes Element im selben Dokument wie das `<label>`-Element sein. Damit kann jedes `label`-Element nur mit einem Formularsteuerungselement verknüpft werden.

    > [!NOTE]
    > Um das `for`-Attribut programmgesteuert festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem mit dem `for`-Attribut übereinstimmenden `id`-Attribut ist das _gekennzeichnete Steuerelement_ für dieses `label`-Element – sofern das Element mit dieser `id` tatsächlich ein [beschriftbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Ist es kein beschriftbares Element, hat das `for`-Attribut keine Wirkung. Wenn es andere Elemente mit demselben `id`-Wert später im Dokument gibt, werden sie nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut erhalten; dadurch erhält das zugehörige Formularsteuerelement (das Formularsteuerelement, das im `for`-Wert referenziert wird) mehrere Beschriftungen.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement haben, solange das `for`-Attribut auf das enthaltene Steuerelement zeigt.

## Gestaltung mit CSS

Es gibt keine besonderen Stilüberlegungen für `<label>`-Elemente – strukturell sind sie Inline-Elemente und können daher ähnlich wie ein {{htmlelement("span")}} oder {{htmlelement("a")}}-Element gestaltet werden. Sie können sie auf jede gewünschte Weise gestalten, solange Sie nicht verhindern, dass der Text schwer lesbar wird.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} in einem `label`. Dies erschwert es Menschen, das mit dem `label` verknüpfte Formulareingabeelement zu aktivieren.

**Nicht so:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

**Bevorzugt so:**

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem `<label>` stört viele Arten von unterstützenden Technologien, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

**Nicht so:**

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**Bevorzugt so:**

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Schaltflächen

Ein {{HTMLElement("input")}}-Element mit einer Deklaration `type="button"` und einem gültigen `value`-Attribut benötigt kein zugeordnetes Label. Das Hinzufügen eines Labels kann tatsächlich stören, wie unterstützende Technologien die Schaltflächeneingabe interpretieren. Gleiches gilt für das {{HTMLElement("button")}}-Element.

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
        >, aber keine nachfolgenden <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem gekennzeichneten Steuerelement sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
