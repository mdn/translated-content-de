---
title: "<label>: Das Label-Element"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<label>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschriftung für ein Element in einer Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

Die Verknüpfung eines `<label>` mit einem Formularelement, wie z.B. {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wesentliche Vorteile:

- Der Labeltext wird nicht nur visuell mit seinem entsprechenden Texteingabefeld assoziiert, sondern auch programmatisch. Das bedeutet beispielsweise, dass ein Screenreader das Label vorliest, wenn der Benutzer sich auf das Formulareingabefeld fokussiert, was es einem Nutzer mit unterstützender Technologie erleichtert zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder tippt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird ebenfalls für das Eingabefeld ausgelöst). Diese vergrößerte Trefferfläche zum Fokussieren des Eingabefeldes bietet jedem, der versucht, es zu aktivieren, einen Vorteil – einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Anschließend fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` mit der `id` im `<input>`-Element identisch ist.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln, in diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Zuordnung implizit ist:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das von einem Label bezeichnet wird, wird als _beschriftetes Kontroll-Element_ des Label-Elements bezeichnet. Mehrere Labels können mit dem gleichen Formularelement verknüpft werden:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)

  - : Der Wert des `for`-Attributs muss eine einzige [`id`](/de/docs/Web/HTML/Global_attributes#id) für ein [beschriftbares](/de/docs/Web/HTML/Content_categories#labelable) formularbezogenes Element im selben Dokument wie das `<label>`-Element sein. Somit kann ein gegebenes `label`-Element nur mit einem Formularelement verbunden sein.

    > [!NOTE]
    > Um das `for`-Attribut programmatisch festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Kontroll-Element_ für dieses `label`-Element — wenn das Element mit dieser `id` tatsächlich ein [beschriftbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Wenn es _kein_ beschriftbares Element ist, hat das `for`-Attribut keine Wirkung. Wenn es später im Dokument andere Elemente gibt, die ebenfalls mit dem `id`-Wert übereinstimmen, werden diese nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut haben; dies führt dazu, dass das zugehörige Formularelement (das Formularelement, auf das der `for`-Wert verweist) mehrere Labels hat.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Kontrollelement haben, solange das `for`-Attribut auf das enthaltene Kontrollelement zeigt.

## Styling mit CSS

Es gibt keine besonderen Stilüberlegungen für `<label>`-Elemente — strukturell sind sie einfache Inline-Elemente und können daher in ähnlicher Weise wie ein {{htmlelement("span")}} oder {{htmlelement("a")}}-Element gestylt werden. Sie können sie auf jede erdenkliche Weise stylen, solange Sie den Text nicht schwer lesbar machen.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `label`. Dies erschwert es Personen, die mit dem `label` verknüpfte Formulareingabe zu aktivieren.

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

Das Platzieren von [Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützenden Technologien, weil Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Element/Heading_Elements#navigation) verwendet werden. Wenn der Text des Labels visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Element/form), oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

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

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt kein damit verbundenes Label. Dies kann tatsächlich stören, wie unterstützende Technologien die Schaltfächeneingabe interpretieren. Das Gleiche gilt für das {{HTMLElement("button")}}-Element.

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

## Technische Übersicht

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
          >interaktive Inhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, aber keine nachgeordneten <code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem beschrifteten Kontrollelement sind erlaubt.
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
