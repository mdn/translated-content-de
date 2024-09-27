---
title: "<var>: Das Variable-Element"
slug: Web/HTML/Element/var
l10n:
  sourceCommit: 4de810dd8ec0d4a2a62f63991a6897fb5f5ac3e3
---

{{HTMLSidebar}}

Das **`<var>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den Namen einer Variablen in einem mathematischen Ausdruck oder in einem Programmierkontext. Es wird typischerweise in einer kursiven Version der aktuellen Schriftart dargestellt, obwohl dieses Verhalten browserabhängig ist.

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise zur Verwendung

### Verwandte Elemente

Andere Elemente, die in Kontexten verwendet werden, in denen `<var>` üblicherweise eingesetzt wird, sind:

- {{HTMLElement("code")}}: Das HTML-Code-Element
- {{HTMLElement("kbd")}}: Das HTML-Tastatureingabe-Element
- {{HTMLElement("samp")}}: Das HTML-Beispielausgabe-Element

Wenn Sie auf Code stoßen, der `<var>` fälschlicherweise für stilistische Zwecke anstelle von semantischen Zwecken verwendet, sollten Sie entweder ein {{HTMLElement("span")}} mit geeigneten CSS verwenden oder ein geeignetes semantisches Element unter den folgenden:

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### Standardstil

Die meisten Browser wenden {{cssxref("font-style")}} mit dem Wert `"italic"` an, wenn `<var>` gerendert wird. Dies kann in CSS wie folgt überschrieben werden:

```css
var {
  font-style: normal;
}
```

## Beispiele

### Einfaches Beispiel

Hier ist ein einfaches Beispiel, das `<var>` verwendet, um Variablennamen in einer mathematischen Gleichung zu kennzeichnen.

```html
<p>A simple equation: <var>x</var> = <var>y</var> + 2</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650,80)}}

### Überschreiben des Standardstils

Mit CSS können Sie den Standardstil für das `<var>`-Element überschreiben. In diesem Beispiel werden Variablennamen fettgedruckt dargestellt und verwenden, wenn verfügbar, Courier, andernfalls fällt es auf die Standardschriftart im Monospace zurück.

#### CSS

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```html
<p>
  The variables <var>minSpeed</var> and <var>maxSpeed</var> control the minimum
  and maximum speed of the apparatus in revolutions per minute (RPM).
</p>
```

Dieses HTML verwendet `<var>`, um die Namen von zwei Variablen einzuschließen.

#### Ergebnis

{{EmbedLiveSample("Overriding_the_default_style", 650, 140)}}

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
