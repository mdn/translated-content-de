---
title: "`<s>` HTML-Durchstreichungs-Element"
short-title: <s>
slug: Web/HTML/Reference/Elements/s
l10n:
  sourceCommit: 2bb6edfe996e099d7cbe0d0e2635a76e00a788cc
---

Das **`<s>`** [HTML](/de/docs/Web/HTML)-Element rendert Text mit einem Durchstrich oder einer Linie durch den Text. Verwenden Sie das `<s>`-Element, um Dinge darzustellen, die nicht mehr relevant oder genau sind. Das `<s>`-Element eignet sich jedoch nicht, um Dokumentänderungen anzuzeigen; dafür verwenden Sie die {{HTMLElement("del")}} und {{HTMLElement("ins")}} Elemente, wie entsprechend notwendig.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Zugänglichkeit

Die Anwesenheit des `s`-Elements wird in der Standardkonfiguration von den meisten Screen-Reader-Technologien nicht angekündigt. Es kann mittels der CSS {{cssxref("content")}}-Eigenschaft in Kombination mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elementen angekündigt werden.

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

Einige Personen, die Screen-Reader verwenden, deaktivieren absichtlich das Ankündigen von Inhalten, die zusätzliche Ausführlichkeit erzeugen. Aus diesem Grund ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen die Kenntnis des durchgestrichenen Inhalts essentiell für das Verständnis ist.

- [Short note on making your mark (more accessible) | Vispero](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles, Reprised | Adrian Roselli](https://adrianroselli.com/2025/04/tweaking-text-level-styles-reprised.html)

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a></code>
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

## Siehe auch

- Das {{HTMLElement("strike")}} Element, das Gegenstück zum `<s>`-Element, ist veraltet und sollte nicht mehr auf Webseiten verwendet werden.
- Das {{HTMLElement("del")}} Element sollte verwendet werden, wenn Daten _gelöscht_ wurden.
- Die CSS {{cssxref("text-decoration-line")}} Eigenschaft sollte verwendet werden, um den früheren visuellen Aspekt des `<s>`-Elements zu erreichen.
