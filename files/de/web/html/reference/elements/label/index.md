---
title: HTML-Element `<label>`
short-title: <label>
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [HTML](/de/docs/Web/HTML)-Element **`<label>`** stellt eine Beschriftung für ein Element einer Benutzeroberfläche dar.

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

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Der Wert ist die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des [beschriftbaren](/de/docs/Web/HTML/Guides/Content_categories#labelable) Formularsteuerelements im selben Dokument. Dadurch wird [das `<label>` mit diesem Formularsteuerelement verknüpft](#verknüpfen-einer-beschriftung-mit-einem-formularsteuerelement). Beachten Sie, dass die entsprechende JavaScript-Eigenschaft [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor) heißt.

## Hinweise zur Verwendung

### Verknüpfen einer Beschriftung mit einem Formularsteuerelement

Das erste Element im Dokument, dessen `id`-Attribut mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Steuerelement_ dieses `label`-Elements – sofern es sich bei dem Element mit dieser `id` tatsächlich um ein [beschriftbares Element](/de/docs/Web/HTML/Guides/Content_categories#labelable) handelt. Ist es _kein_ beschriftbares Element, hat das `for`-Attribut keine Wirkung. Weitere Elemente mit demselben `id`-Wert, die später im Dokument stehen, werden nicht berücksichtigt.

Mehrere `<label>`-Elemente können mit demselben Formularsteuerelement verknüpft werden, indem sie denselben Wert für das `for`-Attribut verwenden. Das Formularsteuerelement hat dann mehrere Beschriftungen.

Die Verknüpfung eines `<label>` mit einem Formularsteuerelement wie {{htmlelement("input")}} oder {{htmlelement("textarea")}} bietet wesentliche Vorteile:

- Der Beschriftungstext ist dem zugehörigen Eingabefeld nicht nur visuell, sondern auch programmatisch zugeordnet. So liest beispielsweise ein Screenreader die Beschriftung vor, wenn der Fokus auf dem Formularsteuerelement liegt. Das erleichtert Menschen, die assistive Technologien verwenden, zu erkennen, welche Daten einzugeben sind.
- Wenn jemand auf eine Beschriftung klickt oder sie berührt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das entsprechende Ereignis wird auch für das Eingabefeld ausgelöst). Die dadurch vergrößerte anklickbare Fläche erleichtert es allen, das Eingabefeld zu aktivieren – auch auf Geräten mit Touchscreen.

Es gibt zwei Möglichkeiten, ein `<label>` mit einem Formularsteuerelement zu verknüpfen: eine _explizite_ und eine _implizite_ Verknüpfung.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, fügen Sie zunächst dem `<input>`-Element ein `id`-Attribut hinzu. Fügen Sie anschließend dem `<label>`-Element ein `for`-Attribut hinzu, dessen Wert mit der `id` des `<input>`-Elements übereinstimmt.

```html
<label for="peas">I like peas.</label>
<input type="checkbox" name="peas" id="peas" />
```

Alternativ können Sie das `<input>`-Element direkt in das `<label>`-Element einbetten. In diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Verknüpfung implizit ist:

```html
<label>
  I like peas.
  <input type="checkbox" name="peas" />
</label>
```

> [!NOTE]
> Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein darin enthaltenes Steuerelement haben, solange das `for`-Attribut auf dieses Steuerelement verweist.

Die beiden Methoden sind gleichwertig, allerdings gibt es einige Punkte zu beachten:

- Gängige Kombinationen aus Browsern und {{Glossary("screen_reader", "Screenreadern")}} unterstützen die implizite Verknüpfung, aber nicht alle assistiven Technologien tun dies.
- Je nach Gestaltung kann sich die Art der Verknüpfung auf die Gestaltungsmöglichkeiten auswirken. Wenn `<label>` und Formularsteuerelement gleichgeordnete statt ineinander verschachtelte Elemente sind, bilden sie getrennte, nebeneinanderliegende Boxen. Das ermöglicht flexiblere Layouts, etwa eine Ausrichtung mit Grid oder Flexbox.
- Für eine explizite Verknüpfung benötigt das Formularsteuerelement eine `id`, die im gesamten Dokument eindeutig sein muss. Besonders in komponentenbasierten Anwendungen kann das schwierig sein. Frameworks bieten dafür häufig eigene Lösungen wie [`useId()`](https://react.dev/reference/react/useId) in React. Dennoch ist zusätzlicher Abstimmungsaufwand nötig, um die korrekte Zuordnung sicherzustellen.

Im Allgemeinen empfehlen wir die explizite Verknüpfung mit dem `for`-Attribut, um die Kompatibilität mit externen Werkzeugen und assistiven Technologien sicherzustellen. Für maximale Kompatibilität können Sie das Steuerelement zugleich einbetten _und_ `id`/`for` angeben.

Das Formularsteuerelement, das ein Label beschriftet, wird als _beschriftetes Steuerelement_ des Label-Elements bezeichnet. Mehrere Labels können mit demselben Formularsteuerelement verknüpft sein:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Zu den Elementen, die mit einem `<label>`-Element verknüpft werden können, gehören {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer bei `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie außer dem [implizit verknüpften](#verknüpfen-einer-beschriftung-mit-einem-formularsteuerelement) Formularsteuerelement keine weiteren interaktiven Elemente wie {{HTMLElement("a", "anchors")}} oder {{HTMLElement("button", "buttons")}} innerhalb eines `<label>`. Andernfalls wird es schwieriger, das mit dem `label` verknüpfte Formularsteuerelement zu aktivieren.

**Vermeiden Sie Folgendes:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

**Bevorzugen Sie Folgendes:**

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
> Platzieren Sie notwendige Kontextinformationen, etwa einen Link zu den Geschäftsbedingungen, möglichst vor dem Formularsteuerelement. So können Nutzende sie lesen, bevor sie mit dem Steuerelement interagieren.

### Überschriften

[Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb eines `<label>` beeinträchtigen viele Arten assistiver Technologien, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation) dienen. Wenn der Beschriftungstext optisch angepasst werden soll, verwenden Sie stattdessen CSS-Klassen für das `<label>`-Element.

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) oder ein Formularabschnitt einen Titel benötigt, verwenden Sie ein {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

**Vermeiden Sie Folgendes:**

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**Bevorzugen Sie Folgendes:**

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Buttons

Ein {{HTMLElement("input")}}-Element mit `type="button"` und einem gültigen `value`-Attribut benötigt kein zugeordnetes Label. Eine solche Zuordnung kann sogar beeinträchtigen, wie assistive Technologien das Eingabeelement als Button interpretieren. Dasselbe gilt für das {{HTMLElement("button")}}-Element.

## Beispiele

### Eine implizite Beschriftung definieren

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Defining an implicit label', '200', '50')}}

### Eine explizite Beschriftung mit dem Attribut „for“ definieren

```html
<label for="username">Click me to focus on the input field</label>
<input type="text" id="username" />
```

{{EmbedLiveSample('defining_an_explicit_label_with_the_for_attribute', '200', '50')}}

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes Element</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >, jedoch keine untergeordneten <code>label</code>-Elemente. Andere
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbare</a
        >
        Elemente als das beschriftete Steuerelement sind nicht zulässig.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >
        zulässt.
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
      <td>Kein <code>role</code> zulässig</td>
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
