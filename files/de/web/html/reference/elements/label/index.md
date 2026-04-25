---
title: "`<label>` HTML-Label-Element"
short-title: <label>
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<label>`**-Element in [HTML](/de/docs/Web/HTML) stellt eine Beschriftung für ein Element in einer Benutzeroberfläche dar.

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
  - : Der Wert ist die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des [beschriftbaren](/de/docs/Web/HTML/Guides/Content_categories#labelable) Formularsteuerelements im selben Dokument, [wodurch das `<label>` mit diesem Formularsteuerelement verknüpft wird](#verknüpfung_eines_labels_mit_einem_formularsteuerelement). Beachten Sie, dass die JavaScript-Reflexionseigenschaft [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor) ist.

## Anwendungsnotizen

### Verknüpfung eines Labels mit einem Formularsteuerelement

Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Steuerelement_ für dieses `label`-Element — falls das Element mit dieser `id` tatsächlich ein [beschriftbares Element](/de/docs/Web/HTML/Guides/Content_categories#labelable) ist. Wenn es _keines_ ist, hat das `for`-Attribut keine Wirkung. Andere Elemente, die ebenfalls dem `id`-Wert entsprechen und weiter im Dokument vorkommen, werden nicht berücksichtigt.

Mehrere `<label>`-Elemente können mit demselben Formularsteuerelement verknüpft werden, indem mehrere `<label>`-Elemente den gleichen `for`-Attributwert haben, wodurch das Formularsteuerelement mehrere Beschriftungen erhält.

Das Verknüpfen eines `<label>` mit einem Formularsteuerelement, wie zum Beispiel {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wesentliche Vorteile:

- Der Labeltext ist nicht nur visuell mit seinem entsprechenden Texteingabefeld verbunden, sondern auch programmatisch verknüpft. Das bedeutet, dass beispielsweise ein Screenreader das Label vorliest, wenn der Benutzer auf das Formulareingabefeld fokussiert, was es Benutzern von unterstützender Technologie erleichtert, zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder es berührt/tippt, überträgt der Browser den Fokus auf die zugehörige Eingabe (das resultierende Ereignis wird auch für die Eingabe ausgelöst). Diese erweiterte Trefferfläche zum Fokussieren der Eingabe bietet jedem, der versucht, sie zu aktivieren, einen Vorteil – einschließlich derjenigen, die ein Touch-Gerät verwenden.

Es gibt zwei Möglichkeiten, ein `<label>` mit einem Formularsteuerelement zu verknüpfen, die üblicherweise als _explizite_ und _implizite_ Zuordnung bezeichnet werden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst dem `<input>`-Element das `id`-Attribut hinzufügen. Anschließend fügen Sie dem `<label>`-Element das `for`-Attribut hinzu, wobei der Wert von `for` derselbe ist wie die `id` im `<input>`-Element.

```html
<label for="peas">I like peas.</label>
<input type="checkbox" name="peas" id="peas" />
```

Alternativ können Sie das `<input>`-Element direkt innerhalb des `<label>`-Elements verschachteln, in diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Zuordnung implizit ist:

```html
<label>
  I like peas.
  <input type="checkbox" name="peas" />
</label>
```

> [!NOTE]
> Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement haben, solange das `for`-Attribut auf das enthaltene Steuerelement verweist.

Diese beiden Methoden sind gleichwertig, es gibt jedoch einige Überlegungen:

- Obwohl gängige Browser- und {{Glossary("screen_reader", "Screenreader")}}-Kombinationen die implizite Zuordnung unterstützen, tun dies nicht alle unterstützenden Technologien.
- Abhängig von Ihrem Design kann der Zuordnungstyp die Stilbarkeit beeinflussen. Wenn das `<label>` und das Formularsteuerelement nebeneinander statt als Eltern-Kind-Elemente positioniert sind, sind sie separate, benachbarte Boxen, was eine anpassbarere Anordnung ermöglicht, wie z.B. das Ausrichten mit Grid- oder Flex-Layout-Methoden.
- Eine explizite Zuordnung erfordert, dass das Formularsteuerelement eine `id` hat, die im gesamten Dokument eindeutig sein muss. Dies ist besonders in einer komponentenbasierten Anwendung schwierig. Frameworks bieten oft eigene Lösungen an, wie zum Beispiel Reacts [`useId()`](https://react.dev/reference/react/useId), doch es erfordert immer noch zusätzliche Abstimmung, um richtig zu funktionieren.

Im Allgemeinen empfehlen wir die Verwendung der expliziten Zuordnung mit dem `for`-Attribut, um die Kompatibilität mit externen Werkzeugen und unterstützenden Technologien sicherzustellen. Tatsächlich können Sie gleichzeitig verschachteln und `id`/`for` bereitstellen, um maximale Kompatibilität zu gewährleisten.

Das Formularsteuerelement, das ein Label beschriftet, wird als _beschriftetes Steuerelement_ des Label-Elements bezeichnet. Mehrere Labels können mit demselben Formularsteuerelement verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Barrierefreiheit

### Interaktive Inhalte

Abgesehen von dem [implizit zugeordneten](#verknüpfung_eines_labels_mit_einem_formularsteuerelement) Formularsteuerelement sollten keine zusätzlichen interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Buttons")}} innerhalb eines `<label>` platziert werden. Dadurch wird es für Benutzer schwierig, die mit dem `label` verknüpfte Formulareingabe zu aktivieren.

**Vermeiden Sie folgendes:**

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
> Es ist eine gute Praxis, jeglichen notwendigen Kontext, wie den Link zu den Geschäftsbedingungen, vor dem Formularsteuerelement zu platzieren, damit der Benutzer ihn lesen kann, bevor er mit dem Steuerelement interagiert.

### Überschriften

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützender Technologie, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form), oder ein Abschnitt eines Formulars, einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

**Vermeiden Sie folgendes:**

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

### Buttons

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt kein zugeordnetes Label. Dies könnte tatsächlich stören, wie unterstützende Technologie die Button-Eingabe interpretiert. Gleiches gilt für das {{HTMLElement("button")}}-Element.

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

## Technische Übersicht

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
          >Formularassoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, aber keine Nachkommenelemente vom Typ <code>label</code>. Keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbaren</a
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
          >Phrasierungsinhalt</a
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
