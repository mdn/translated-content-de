---
title: "<label>: Das Label-Element"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<label>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Beschriftung für ein Element in einer Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

Die Verknüpfung eines `<label>` mit einem Formularsteuerelement, wie zum Beispiel {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wesentliche Vorteile:

- Der Label-Text ist nicht nur visuell mit seinem entsprechenden Texteingabefeld verbunden, sondern auch programmatisch. Das bedeutet, dass z.B. ein Screenreader das Label vorliest, wenn der Nutzer auf das Formulareingabefeld fokussiert ist, was es einem Benutzer mit unterstützender Technologie erleichtert zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder tippt, übergibt der Browser den Fokus an das zugehörige Eingabefeld. Das resultierende Ereignis wird auch für die Eingabe ausgelöst. Diese vergrößerte Trefffäche zum Fokussieren der Eingabe bietet einen Vorteil für jeden, der versucht, es zu aktivieren — einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>` Element explizit mit einem `<input>` Element zu verknüpfen, müssen Sie zunächst das Attribut `id` dem `<input>` Element hinzufügen. Anschließend fügen Sie das Attribut `for` dem `<label>` Element hinzu, wobei der Wert von `for` mit der `id` im `<input>` Element übereinstimmt.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` einbetten, in diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Zuordnung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularsteuerelement, das ein Label beschreibt, wird das _beschriftete Steuerelement_ des Label-Elements genannt. Mehrere Labels können mit dem gleichen Formularsteuerelement verbunden werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verbunden werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer mit `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)

  - : Der Wert des `for` Attributs muss eine einzelne [`id`](/de/docs/Web/HTML/Global_attributes/id) für ein [beschriftbares](/de/docs/Web/HTML/Content_categories#labelable) formularbezogenes Element im selben Dokument wie das `<label>` Element sein. Ein gegebenes `label` Element kann daher nur mit einem einzigen Formularsteuerelement verbunden sein.

    > [!NOTE]
    > Um das `for` Attribut programmatisch zu setzen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Steuerelement_ für dieses `label` Element — falls das Element mit dieser `id` tatsächlich ein [beschriftbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Wenn es _kein_ beschriftbares Element ist, dann hat das `for` Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls mit dem `id`-Wert übereinstimmen, werden diese später im Dokument nicht berücksichtigt.

    Mehrere `label` Elemente können denselben Wert für ihr `for` Attribut haben; dadurch erhält das zugehörige Formularsteuerelement (das Steuerelement, auf das `for` verweist) mehrere Labels.

    > [!NOTE]
    > Ein `<label>` Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement haben, solange das `for`-Attribut auf das enthaltene Steuerelement verweist.

## Gestaltung mit CSS

Es gibt keine besonderen Styling-Überlegungen für `<label>` Elemente — strukturell sind sie einfache Inline-Elemente und können ähnlich gestylt werden wie ein {{htmlelement("span")}} oder {{htmlelement("a")}} Element. Sie können sie auf jede Art und Weise gestalten, solange der Text nicht schwer lesbar wird.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} in einem `label`. Dies erschwert es Personen, die mit dem `label` verbundenen Formulareingabe zu aktivieren.

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Element/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützender Technologie, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Element/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>` Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}} Element, das innerhalb eines {{HTMLElement("fieldset")}} platziert wird.

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

Ein {{HTMLElement("input")}} Element mit einer `type="button"` Deklaration und einem gültigen `value` Attribut benötigt kein zugeordnetes Label. Das Hinzufügen eines Labels kann tatsächlich die Art und Weise beeinträchtigen, wie unterstützende Technologien die Schaltflächeneingabe parsen. Dasselbe gilt für das {{HTMLElement("button")}} Element.

## Beispiele

### Definieren eines impliziten Labels

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Simple_label_example', '200', '50')}}

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
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularbezogenes Element</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, aber keine Nachfahren <code>label</code> Elemente. Keine
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem beschrifteten Steuerelement sind erlaubt.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
