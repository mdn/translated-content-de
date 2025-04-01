---
title: "<s>: Das Durchgestrichen-Element"
slug: Web/HTML/Element/s
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{HTMLSidebar}}

Das **`<s>`** [HTML](/de/docs/Web/HTML) Element stellt Text mit einem Durchstrich dar, also mit einer Linie durch den Text. Verwenden Sie das `<s>` Element, um Dinge darzustellen, die nicht mehr relevant oder nicht mehr korrekt sind. Das `<s>` ist jedoch nicht geeignet, um Dokumentänderungen anzuzeigen; dafür sollten Sie die {{HTMLElement("del")}} und {{HTMLElement("ins")}} Elemente verwenden, wo es angemessen ist.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Die Präsenz des `s` Elements wird von den meisten Bildschirmlesetechnologien in ihrer Standardkonfiguration nicht angekündigt. Es kann durch die Verwendung der CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudo-Elementen {{cssxref("::before")}} und {{cssxref("::after")}} angekündigt werden.

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

Einige Menschen, die Bildschirmleser verwenden, deaktivieren bewusst die Ansage von Inhalten, die zusätzliche Weitschweifigkeit erzeugen. Deshalb ist es wichtig, diese Technik nicht zu überbeanspruchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte durchgestrichen wurden, das Verständnis erheblich beeinträchtigen würde.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierung von Inhalten</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließende Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierung von Inhalten</a
        >.
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
          >Formulierung von Inhalten</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
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

## Siehe auch

- Das {{HTMLElement("strike")}} Element, das Alter Ego des `<s>` Elements, ist veraltet und sollte auf Websites nicht mehr verwendet werden.
- Das {{HTMLElement("del")}} Element sollte stattdessen verwendet werden, wenn Daten _gelöscht_ wurden.
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} sollte verwendet werden, um den früheren visuellen Aspekt des `<s>` Elements zu erreichen.
