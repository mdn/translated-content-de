---
title: "<var>: Das Variable-Element"
slug: Web/HTML/Element/var
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<var>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den Namen einer Variablen in einem mathematischen Ausdruck oder in einem Programmierkontext. Es wird typischerweise in einer kursiven Version der aktuellen Schriftart präsentiert, obwohl dieses Verhalten vom Browser abhängt.

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

### Verwandte Elemente

Andere Elemente, die in Kontexten verwendet werden, in denen `<var>` oft verwendet wird, umfassen:

- {{HTMLElement("code")}}: Das HTML Code-Element
- {{HTMLElement("kbd")}}: Das HTML Tastatureingabe-Element
- {{HTMLElement("samp")}}: Das HTML Beispielausgabe-Element

Wenn Sie auf Code stoßen, der `<var>` fälschlicherweise für Stilzwecke anstelle von semantischen Zwecken verwendet, sollten Sie entweder ein {{HTMLElement("span")}} mit geeignetem CSS verwenden oder ein geeignetes semantisches Element aus den folgenden:

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### Standardstil

Die meisten Browser setzen {{cssxref("font-style")}} auf `"italic"` beim Rendern von `<var>`. Dies kann in CSS überschrieben werden, wie folgt:

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

Mit CSS können Sie den Standardstil für das `<var>`-Element überschreiben. In diesem Beispiel werden Variablennamen fett dargestellt, wobei Courier verwendet wird, falls verfügbar, andernfalls wird zur Standard-Monospace-Schriftart zurückgegriffen.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
      <td>Jede</td>
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
