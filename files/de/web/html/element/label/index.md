---
title: "<label>: Das Label-Element"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<label>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschriftung für ein Element in einer Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

Das Verknüpfen eines `<label>` mit einem Formularelement, wie {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wesentliche Vorteile:

- Der Beschriftungstext ist nicht nur visuell mit seinem entsprechenden Texteingabefeld verknüpft, sondern auch programmatisch. Dies bedeutet zum Beispiel, dass ein Screenreader die Beschriftung vorliest, wenn der Benutzer sich auf das Formulareingabefeld fokussiert, was es Benutzern von Unterstützungstechnologien erleichtert, zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf eine Beschriftung klickt oder tippt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird auch für das Eingabefeld ausgelöst). Diese vergrößerte Trefferfläche, um den Fokus auf das Eingabefeld zu setzen, bietet jedem, der versucht, es zu aktivieren, einen Vorteil - einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst dem `<input>`-Element das `id`-Attribut hinzufügen. Danach fügen Sie dem `<label>`-Element das `for`-Attribut hinzu, wobei der Wert von `for` derselbe wie das `id` im `<input>`-Element ist.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln. In diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Beziehung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das von einem Label beschrieben wird, wird als _labeled control_ des Label-Elements bezeichnet. Mehrere Labels können mit demselben Formularelement verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)

  - : Der Wert des `for`-Attributs muss ein einzelnes [`id`](/de/docs/Web/HTML/Global_attributes/id) für ein [beschriftbares](/de/docs/Web/HTML/Content_categories#labelable) formularbezogenes Element im selben Dokument wie das `<label>`-Element sein. So kann jedes `label`-Element nur mit einem Formularelement verknüpft werden.

    > [!NOTE]
    > Um das `for`-Attribut programmatisch zu setzen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das dem Wert des `for`-Attributs entspricht, ist das _labeled control_ für dieses `label`-Element – wenn das Element mit diesem `id` tatsächlich ein [labelable element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Wenn es sich _nicht_ um ein beschriftbares Element handelt, hat das `for`-Attribut keine Auswirkung. Wenn es andere Elemente gibt, die ebenfalls dem `id`-Wert entsprechen, werden sie später im Dokument nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut erhalten; dadurch wird das zugeordnete Formularelement (das Formularelement, auf das sich der `for`-Wert bezieht) mehreren Beschriftungen zugeordnet.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelement haben, solange das `for`-Attribut auf das enthaltene Steuerelement verweist.

## Gestaltung mit CSS

Es gibt keine speziellen stilistischen Überlegungen für `<label>`-Elemente — strukturell sind sie einfache Inline-Elemente und können daher auf ähnliche Weise wie ein {{htmlelement("span")}} oder {{htmlelement("a")}}-Element gestaltet werden. Sie können sie stylen, wie Sie möchten, solange der Text nicht schwer lesbar wird.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} in einem `label`. Dies erschwert es Benutzern, das mit dem `label` verknüpfte Formulareingabefeld zu aktivieren.

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Element/Heading_Elements) innerhalb eines `<label>` stört viele Arten von Unterstützungstechnologien, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Element/Heading_Elements#navigation) verwendet werden. Wenn der Text der Beschriftung visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element, das innerhalb eines {{HTMLElement("fieldset")}} platziert wird.

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

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt keine Beschriftung. Dies kann tatsächlich stören, wie Unterstützungstechnologien die Schaltflächeneingabe parsen. Dasselbe gilt für das {{HTMLElement("button")}}-Element.

## Beispiele

### Festlegen einer impliziten Beschriftung

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Defining an implicit label', '200', '50')}}

### Festlegen einer expliziten Beschriftung mit dem "for"-Attribut

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
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >Formular-assoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, aber keine nachgeordneten <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem beschriebenen Steuerelement sind erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
