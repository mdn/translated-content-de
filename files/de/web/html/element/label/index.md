---
title: "<label>: Das Label-Element"
slug: Web/HTML/Element/label
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<label>`**-Element des [HTML](/de/docs/Web/HTML) steht für eine Beschriftung eines Elements in einer Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

Die Verknüpfung eines `<label>` mit einem Formularelement, wie z.B. {{htmlelement("input")}} oder {{htmlelement("textarea")}}, bietet einige wesentliche Vorteile:

- Der Beschriftungstext ist nicht nur visuell mit seinem entsprechenden Texteingabefeld verbunden, sondern auch programmgesteuert. Dies bedeutet zum Beispiel, dass ein Screenreader die Beschriftung vorliest, wenn der Benutzer auf das Formularelement fokussiert, was es einer assistiven Technologie erleichtert, zu verstehen, welche Daten eingegeben werden sollen.
- Wenn ein Benutzer auf ein Label klickt oder es berührt/antippt, überträgt der Browser den Fokus auf das zugehörige Eingabefeld (das resultierende Ereignis wird auch für das Eingabefeld ausgelöst). Dieser vergrößerte Trefferbereich zum Fokussieren des Eingabefelds bietet einen Vorteil für jeden, der versucht, es zu aktivieren — einschließlich derjenigen, die ein Touchscreen-Gerät verwenden.

Um ein `<label>`-Element explizit mit einem `<input>`-Element zu verknüpfen, müssen Sie zuerst das `id`-Attribut zum `<input>`-Element hinzufügen. Anschließend fügen Sie das `for`-Attribut zum `<label>`-Element hinzu, wobei der Wert von `for` derselbe ist wie das `id` im `<input>`-Element.

Alternativ können Sie das `<input>` direkt innerhalb des `<label>` verschachteln; in diesem Fall sind die Attribute `for` und `id` nicht erforderlich, da die Zuordnung implizit erfolgt:

```html
<label>
  Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

Das Formularelement, das von einem Label beschriftet wird, wird als das _beschriftete Steuerelement_ des Label-Elements bezeichnet. Mehrere Labels können demselben Formularelement zugeordnet sein:

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elemente, die mit einem `<label>`-Element verknüpft werden können, umfassen {{HTMLElement('button')}}, {{HTMLElement('input')}} (außer `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)

  - : Der Wert des `for`-Attributs muss ein einzelnes [`id`](/de/docs/Web/HTML/Global_attributes#id) für ein [beschriftbares](/de/docs/Web/HTML/Content_categories#labelable) formularbezogenes Element im selben Dokument wie das `<label>`-Element sein. Daher kann ein beliebiges `label`-Element nur mit einem Formularelement verbunden sein.

    > [!NOTE]
    > Um das `for`-Attribut programmgesteuert festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

    Das erste Element im Dokument mit einem `id`-Attribut, das mit dem Wert des `for`-Attributs übereinstimmt, ist das _beschriftete Steuerelement_ für dieses `label`-Element — wenn das Element mit dieser `id` tatsächlich ein [beschriftbares Element](https://html.spec.whatwg.org/multipage/forms.html#category-label) ist. Wenn es _kein_ beschriftbares Element ist, hat das `for`-Attribut keine Wirkung. Wenn es andere Elemente gibt, die ebenfalls mit dem `id`-Wert übereinstimmen, die jedoch später im Dokument erscheinen, werden diese nicht berücksichtigt.

    Mehrere `label`-Elemente können denselben Wert für ihr `for`-Attribut erhalten; dies führt dazu, dass das zugeordnete Formularelement (das Formularelement, auf welches der `for`-Wert verweist) mehrere Beschriftungen hat.

    > [!NOTE]
    > Ein `<label>`-Element kann sowohl ein `for`-Attribut als auch ein enthaltenes Steuerelementelement haben, solange das `for`-Attribut auf das enthaltene Steuerelementelement zeigt.

## Gestaltung mit CSS

Es gibt keine speziellen Stilüberlegungen für `<label>`-Elemente — strukturell sind sie einfache Inline-Elemente und können daher auf ähnliche Weise wie ein {{htmlelement("span")}}- oder {{htmlelement("a")}}-Element gestaltet werden. Sie können ihnen auf jede gewünschte Weise Stil verleihen, solange der Text nicht schwer lesbar wird.

## Barrierefreiheit

### Interaktive Inhalte

Platzieren Sie keine interaktiven Elemente wie {{HTMLElement("a", "Anker")}} oder {{HTMLElement("button", "Schaltflächen")}} innerhalb eines `label`. Dies erschwert es Menschen, das mit dem `label` verknüpfte Formularelement zu aktivieren.

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

Das Platzieren von [Überschriftselementen](/de/docs/Web/HTML/Element/Heading_Elements) innerhalb eines `<label>` stört viele Arten von unterstützenden Technologien, da Überschriften häufig als [Navigationshilfe](/de/docs/Web/HTML/Element/Heading_Elements#navigation) verwendet werden. Wenn der Text der Beschriftung visuell angepasst werden muss, verwenden Sie stattdessen CSS-Klassen, die auf das `<label>`-Element angewendet werden.

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) oder ein Abschnitt eines Formulars einen Titel benötigt, verwenden Sie das {{HTMLElement("legend")}}-Element innerhalb eines {{HTMLElement("fieldset")}}.

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

Ein {{HTMLElement("input")}}-Element mit einer `type="button"`-Deklaration und einem gültigen `value`-Attribut benötigt keine zugehörige Beschriftung. Dies könnte tatsächlich beeinträchtigen, wie unterstützende Technologien den Button-Eingang interpretieren. Das Gleiche gilt für das {{HTMLElement("button")}}-Element.

## Beispiele

### Eine implizite Beschriftung definieren

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Simple_label_example', '200', '50')}}

### Eine explizite Beschriftung mit dem "for"-Attribut definieren

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
          >formularzugehöriges Element</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, aber keine Nachkommen-<code>label</code>-Elemente. Keine
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbaren</a
        >
        Elemente außer dem beschrifteten Steuerelement sind erlaubt.
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
      <td>{{domxref("HTMLLabelElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
