---
title: "<s>: Das Durchstreich-Element"
slug: Web/HTML/Reference/Elements/s
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Das **`<s>`** [HTML](/de/docs/Web/HTML) Element rendert Text mit einem Durchstrich. Verwenden Sie das `<s>` Element, um Dinge darzustellen, die nicht mehr relevant oder nicht mehr korrekt sind. Das `<s>` Element ist jedoch nicht geeignet, um Änderungen im Dokument anzuzeigen. Dafür sollten Sie die {{HTMLElement("del")}} und {{HTMLElement("ins")}} Elemente verwenden, je nach Bedarf.

{{InteractiveExample("HTML Demo: &lt;s&gt;", "tabbed-shorter")}}

```html interactive-example
<p><s>There will be a few tickets available at the box office tonight.</s></p>

<p>SOLD OUT!</p>
```

```css interactive-example
s {
  /* Add your styles here */
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Das Vorhandensein des `s` Elements wird in der Standardeinstellung von den meisten Screenreader-Technologien nicht angekündigt. Es kann mithilfe der CSS-Eigenschaft {{cssxref("content")}} sowie den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} dazu gebracht werden, angekündigt zu werden.

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [start of stricken text] ";
}

s::after {
  content: " [end of stricken text] ";
}
```

Einige Personen, die Screenreader verwenden, deaktivieren bewusst das Ankündigen von Inhalten, die zusätzliche Sprachlast erzeugen. Daher ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen von durchgestrichenen Inhalten das Verständnis beeinträchtigen würde.

- [Kurze Notiz dazu, wie Sie Ihren Markup (zugänglicher) machen | Vispero](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/)
- [Anpassung von Textstilen auf Ebene | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

```css
.sold-out {
  text-decoration: line-through;
}
```

```html
<s>Today's Special: Salmon</s> SOLD OUT<br />
<span class="sold-out">Today's Special: Salmon</span> SOLD OUT
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

## Siehe auch

- Das {{HTMLElement("strike")}} Element, alter Ego des `<s>` Elements, ist veraltet und sollte auf Websites nicht mehr verwendet werden.
- Das {{HTMLElement("del")}} Element sollte verwendet werden, wenn Daten _gelöscht_ wurden.
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} sollte verwendet werden, um den früheren visuellen Aspekt des `<s>` Elements zu erreichen.
