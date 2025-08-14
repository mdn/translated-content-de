---
title: "<label>: Das Label-Element"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: aacd6e50f2e3d5c311d69649d9f2723577a464ec
---

Das **`<label>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschriftung für ein Element in einer Benutzeroberfläche.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Der Wert ist die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des [beschriftbaren](/de/docs/Web/HTML/Guides/Content_categories#labelable) Formularfelds im selben Dokument, [die das `<label>` mit diesem Formularfeld verknüpft](#verknüpfung_eines_labels_mit_einem_formularfeld). Beachten Sie, dass die JavaScript-Reflexionseigenschaft [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor) ist.

## Verwendungshinweise

### Verknüpfung eines Labels mit einem Formularfeld

Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Kontrollfeld_ für dieses `label`-Element — falls das Element mit dieser `id` tatsächlich ein [beschriftbares Element](/de/docs/Web/HTML/Guides/Content_categories#labelable) ist. Falls es _kein_ beschriftbares Element ist, hat das `for`-Attribut keine Wirkung. Falls es andere Elemente gibt, die ebenfalls dem `id`-Wert entsprechen, die später im Dokument vorhanden sind, werden sie nicht berücksichtigt.

Mehrere `<label>`-Elemente können mit demselben Formularfeld verknüpft werden, indem mehrere `<label>`-Elemente mit demselben `for`-Attributwert verwendet werden, was dem Formularfeld mehrere Beschriftungen gibt.

Die Verknüpfung eines `<label>` mit einem Formularfeld, wie z.B. {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wesentliche Vorteile:

- Der Beschriftungstext ist nicht nur visuell mit seinem entsprechenden Texteingabe verbunden; er ist auch programmatisch damit verknüpft. Das bedeutet zum Beispiel, dass ein Screenreader die Beschriftung vorliest, wenn der Benutzer auf das Formulareingabe fokussiert ist, was es einem Benutzer unterstützender Technologien erleichtert zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf eine Beschriftung klickt oder diese berührt/antippt, überträgt der Browser den Fokus auf die zugehörige Eingabe (das resultierende Ereignis wird auch für die Eingabe ausgelöst). Diese vergrößerte Trefferfläche zum Fokussieren der Eingabe bietet einen Vorteil für jeden, der versucht, diese zu aktivieren — einschließlich denen, die ein Touchscreen-Gerät verwenden.

Es gibt zwei Möglichkeiten, ein `<label>` mit einem Formularfeld zu verknüpfen, die üblicherweise als _explizite_ und _implizite_ Verknüpfung bezeichnet werden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Danach fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` derselbe ist wie die `id` im `<input>`-Element.

```html
<label for="peas">I like peas.</label>
<input type="checkbox" name="peas" id="peas" />
```

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` einfügen, in diesem Fall sind die `for`- und `id`-Attribute nicht erforderlich, da die Verknüpfung implizit erfolgt:

```html
<label>
  I like peas.
  <input type="checkbox" name="peas" />
</label>
```

> [!NOTE]
> Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Kontrollelement haben, solange das `for`-Attribut auf das enthaltene Kontrollelement verweist.

Diese beiden Methoden sind gleichwertig, aber es gibt einige Überlegungen:

- Während gängige Browser- und {{Glossary("screen_reader", "Screenreader")}}-Kombinationen implizite Verknüpfung unterstützen, tun dies nicht alle assistierenden Technologien.
- Je nach Ihrem Design kann der Verknüpfungstyp die Stilbarkeit beeinflussen. Indem die `<label>`- und Formularsteuerelement-Geschwisterelemente anstelle von Eltern-Kind-Elementen sind, bedeutet dies, dass sie separate, benachbarte Boxen sind, die ein anpassbareres Layout ermöglichen, wie das Ausrichten mit Grid- oder Flexlayout-Methoden.
- Die explizite Verknüpfung erfordert, dass das Formularfeld eine `id` hat, die im gesamten Dokument eindeutig sein muss. Dies ist besonders in einer komponentenbasierten Anwendung schwierig. Frameworks bieten oft ihre eigenen Lösungen an, wie Reacts [`useId()`](https://react.dev/reference/react/useId), aber es erfordert immer noch zusätzliche Koordination, um es richtig zu machen.

Im Allgemeinen empfehlen wir die Verwendung der expliziten Verknüpfung mit dem `for`-Attribut, um die Kompatibilität mit externen Werkzeugen und assistierenden Technologien sicherzustellen. Tatsächlich können Sie _und_ gleichzeitig `id`/`for` bereitstellen, um maximale Kompatibilität zu erreichen.

Das Formularfeld, das ein Label beschriftet, wird das _beschriftete Kontrollfeld_ des Label-Elements genannt. Mehrere Labels können mit demselben Formularfeld verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Barrierefreiheit

### Interaktive Inhalte

Außer dem [implizit verknüpften](#verknüpfung_eines_labels_mit_einem_formularfeld) Formularfeld sollten keine zusätzlichen interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `<label>` platziert werden. Andernfalls wird es für Menschen schwierig, das dem `label` zugeordnete Formulareingabefeld zu aktivieren.

**Nicht so machen:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

**Bevorzugen Sie dies:**

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
> Es ist eine gute Praxis, alle erforderlichen Kontexte, wie den Link zu den Bedingungen und Konditionen, vor dem Formularelement zu platzieren, damit der Benutzer diese lesen kann, bevor er mit dem Kontrollfeld interagiert.

### Überschriften

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb eines `<label>` beeinträchtigt viele Arten von assistiver Technologie, da Überschriften üblicherweise als [Navigationshilfe](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) verwendet werden. Wenn der Text der Beschriftung visuell angepasst werden muss, sollten stattdessen CSS-Klassen auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

**Nicht so machen:**

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

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt keine damit verbundene Beschriftung. Andernfalls kann es tatsächlich die Art und Weise, wie assistive Technologie den Schaltflächeneingang analysiert, beeinträchtigen. Dasselbe gilt für das {{HTMLElement("button")}}-Element.

## Beispiele

### Definition eines impliziten Labels

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Defining an implicit label', '200', '50')}}

### Definition einer expliziten Beschriftung mit dem "for"-Attribut

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
          >Phrasing-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >mit Formular verknüpftes Element</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, aber keine Nachkommen-<code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem beschrifteten Kontrollfeld sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
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
