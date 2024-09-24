---
title: "<var>: Das Variable-Element"
slug: Web/HTML/Element/var
l10n:
  sourceCommit: 4de810dd8ec0d4a2a62f63991a6897fb5f5ac3e3
---

{{HTMLSidebar}}

Das **`<var>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert den Namen einer Variablen in einem mathematischen Ausdruck oder einem Programmierkontext. Es wird typischerweise in einer kursiven Version der aktuellen Schriftart dargestellt, obwohl dieses Verhalten von Browser zu Browser unterschiedlich sein kann.

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

### Verwandte Elemente

Andere Elemente, die in Zusammenhängen verwendet werden, in denen `<var>` häufig vorkommt, sind:

- {{HTMLElement("code")}}: Das HTML Code-Element
- {{HTMLElement("kbd")}}: Das HTML Tastatureingabenelement
- {{HTMLElement("samp")}}: Das HTML Beispielausgabe-Element

Falls Sie auf Code stoßen, der `<var>` aus stilistischen Gründen statt aus semantischen Gründen fälschlicherweise verwendet, sollten Sie entweder ein {{HTMLElement("span")}} mit entsprechendem CSS verwenden oder eines der folgenden geeigneten semantischen Elemente:

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### Standardstil

Die meisten Browser wenden {{cssxref("font-style")}} mit dem Wert `"italic"` an, wenn sie `<var>` rendern. Dies kann in CSS wie folgt überschrieben werden:

```css
var {
  font-style: normal;
}
```

## Beispiele

### Einfaches Beispiel

Hier ist ein einfaches Beispiel, das `<var>` verwendet, um Variablennamen in einer mathematischen Gleichung darzustellen.

```html
<p>Eine einfache Gleichung: <var>x</var> = <var>y</var> + 2</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650,80)}}

### Überschreiben des Standardstils

Mit CSS können Sie den Standardstil für das `<var>`-Element überschreiben. In diesem Beispiel werden Variablennamen fett dargestellt, wobei Courier verwendet wird, falls verfügbar, andernfalls wird auf die standardmäßige monospace-Schriftart zurückgegriffen.

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
  Die Variablen <var>minSpeed</var> und <var>maxSpeed</var> steuern die
  minimale und maximale Geschwindigkeit des Apparats in Umdrehungen pro Minute
  (RPM).
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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
