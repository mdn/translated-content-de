---
title: "<label>: Das Label-Element"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: 7b8768d410a281446b0b95627c531d852e624353
---

Das **`<label>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Beschriftung für ein Element in einer Benutzeroberfläche.

{{InteractiveExample("HTML Demo: &lt;label&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="preference">
  <label for="cheese">I like cheese.</label>
  <input type="checkbox" name="cheese" id="cheese" />
</div>

<div class="preference">
  <label for="peas">I like peas.</label>
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

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Der Wert ist die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des [labelbaren](/de/docs/Web/HTML/Guides/Content_categories#labelable) Formularsteuerungselements im selben Dokument, das [die `<label>` mit dieser Formularsteuerung verbindet](#verknüpfung_eines_labels_mit_einem_formularsteuerelement). Beachten Sie, dass die JavaScript-Reflexionseigenschaft [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor) ist.

## Nutzungshinweise

### Verknüpfung eines Labels mit einem Formularsteuerelement

Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Steuerelement_ für dieses `label`-Element – wenn das Element mit dieser `id` tatsächlich ein [labelbares Element](/de/docs/Web/HTML/Guides/Content_categories#labelable) ist. Wenn es _kein_ labelbares Element ist, hat das `for`-Attribut keine Wirkung. Wenn es weitere Elemente gibt, die ebenfalls den `id`-Wert haben, werden diese später im Dokument nicht berücksichtigt.

Mehrere `<label>`-Elemente können mit demselben Formularsteuerelement assoziiert werden, indem mehrere `<label>`-Elemente denselben `for`-Attributwert haben, was dem Formularsteuerelement mehrere Beschriftungen gibt.

Die Verknüpfung eines `<label>` mit einem Formularsteuerelement, wie zum Beispiel {{htmlelement("input")}} oder {{htmlelement("textarea")}} bietet einige große Vorteile:

- Der Beschriftungstext ist nicht nur visuell mit seinem entsprechenden Texteingabe verbunden; es ist auch programmatisch damit verknüpft. Das bedeutet zum Beispiel, dass ein Screenreader die Beschriftung vorliest, wenn der Benutzer auf den Formulareingaben fokusiert ist, was es einem Benutzer mit unterstützender Technologie erleichtert, die einzugebenden Daten zu verstehen.
- Wenn ein Benutzer auf eine Beschriftung klickt oder tippt, übergibt der Browser den Fokus auf die zugehörige Eingabe (das resultierende Ereignis wird auch für die Eingabe ausgelöst). Dieser erweiterte Berührungsbereich zum Fokussieren der Eingabe bietet jedem, der versucht sie zu aktivieren, einen Vorteil - einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Es gibt zwei Möglichkeiten, ein `<label>` mit einem Formularsteuerelement zu verknüpfen, allgemein auch als _explizite_ und _implizite_ Verknüpfung bezeichnet.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Fügen Sie anschließend das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` derselbe wie die `id` im `<input>`-Element ist.

```html
<label for="peas">I like peas.</label>
<input type="checkbox" name="peas" id="peas" />
```

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln, in diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Verknüpfung implizit ist:

```html
<label>
  I like peas.
  <input type="checkbox" name="peas" />
</label>
```

> [!NOTE]
> Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement haben, solange das `for`-Attribut auf das enthaltene Steuerelement verweist.

Diese beiden Methoden sind gleichwertig, jedoch gibt es einige Überlegungen:

- Während gängige Browser- und {{Glossary("screen_reader", "Screenreader")}}-Kombinationen die implizite Verknüpfung unterstützen, tun dies nicht alle unterstützenden Technologien.
- Abhängig von Ihrem Design kann die Art der Verknüpfung die Stilbarkeit beeinflussen. Indem das `<label>` und das Formularsteuerelement als Geschwisterelemente und nicht als Eltern-Kind beibehalten werden, sind sie separate, benachbarte Boxen, die ein anpassungsfähigeres Layout ermöglichen, wie das Ausrichten mit Grid- oder Flex-Layout-Methoden.
- Die explizite Verknüpfung erfordert, dass das Formularsteuerelement eine `id` hat, die im gesamten Dokument eindeutig sein muss. Dies ist vor allem in einer komponentisierten Anwendung schwierig. Frameworks bieten oft ihre eigenen Lösungen, wie React's [`useId()`](https://react.dev/reference/react/useId), es erfordert jedoch immer noch zusätzliche Orchestrierung, um es richtig zu machen.

Generell empfehlen wir, die explizite Verknüpfung mit dem `for`-Attribut zu verwenden, um die Kompatibilität mit externen Werkzeugen und unterstützenden Technologien sicherzustellen. Tatsächlich können Sie gleichzeitig verschachteln _und_ `id`/`for` für maximale Kompatibilität bereitstellen.

Das Formularsteuerelement, für das ein Label eine Beschriftung ist, wird als _beschriftetes Steuerelement_ des Labelelements bezeichnet. Mehrere Beschriftungen können mit demselben Formularsteuerelement assoziiert werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Barrierefreiheit

### Interaktive Inhalte

Abgesehen von der [implizit verknüpften](#verknüpfung_eines_labels_mit_einem_formularsteuerelement) Formularsteuerung sollten keine zusätzlichen interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `<label>` platziert werden. Dies erschwert es den Benutzern, das Formularfeld zu aktivieren, das mit dem `label` verknüpft ist.

**Nicht so machen:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

**So bevorzugen:**

```html example-good
<p>
  <a href="terms-and-conditions.html">Read our Terms and Conditions</a>
</p>
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions
</label>
```

> [!NOTE]
> Es ist eine gute Praxis, jeglichen notwendigen Kontext, wie den Link zu den Geschäftsbedingungen, vor dem Formularsteuerelement zu platzieren, damit der Benutzer es lesen kann, bevor er mit dem Steuerelement interagiert.

### Überschriften

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb eines `<label>` beeinträchtigt viele Arten von unterstützender Technologie, da Überschriften oft als [Navigationselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element, das innerhalb eines {{HTMLElement("fieldset")}} platziert wird.

**Nicht so machen:**

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**So bevorzugen:**

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Schaltflächen

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt kein zugehöriges Label. Dies könnte tatsächlich die Art und Weise beeinträchtigen, wie unterstützende Technologien die Schaltflächeneingabe analysieren. Dasselbe gilt für das {{HTMLElement("button")}}-Element.

## Beispiele

### Implizites Label definieren

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Defining an implicit label', '200', '50')}}

### Explizites Label mit dem "for"-Attribut definieren

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
          >Phrasing-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >form-assoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, aber keine nachgeordneten <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >labelbaren</a
        >
        Elemente außer dem beschrifteten Steuerelement sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Anfangs- als auch End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
