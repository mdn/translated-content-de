---
title: "<s>: Das Durchstreich-Element"
slug: Web/HTML/Element/s
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<s>`**-[HTML](/de/docs/Web/HTML)-Element rendert Text mit einem Durchstrich oder einer Linie. Verwenden Sie das `<s>`-Element, um Dinge darzustellen, die nicht mehr relevant oder nicht mehr zutreffend sind. `<s>` ist jedoch nicht geeignet, um Dokumentbearbeitungen anzuzeigen; dafür verwenden Sie die {{HTMLElement("del")}}- und {{HTMLElement("ins")}}-Elemente, je nach Bedarf.

{{InteractiveExample("HTML Demo: &lt;s&gt;", "tabbed-shorter")}}

```html interactive-example
<p><s>There will be a few tickets available at the box office tonight.</s></p>

<p>SOLD OUT!</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
s {
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Das Vorhandensein des `s`-Elements wird in der Standardeinstellung von den meisten Screenreading-Technologien nicht angekündigt. Es kann durch die Verwendung der CSS-Eigenschaft {{cssxref("content")}}, zusammen mit den Pseudo-Elementen {{cssxref("::before")}} und {{cssxref("::after")}}, angekündigt werden.

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

Einige Benutzer von Screenreadern deaktivieren absichtlich das Ankündigen von Inhalten, die zusätzliche Wortlast erzeugen. Aus diesem Grund ist es wichtig, diese Technik nicht zu missbrauchen und sie nur dort anzuwenden, wo das Nichterkennen von gestrichenem Inhalt das Verständnis beeinträchtigen würde.

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
          >Phrasing-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
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

## Siehe auch

- Das {{HTMLElement("strike")}}-Element, das Pendant zum `<s>`-Element, ist veraltet und sollte auf Webseiten nicht mehr verwendet werden.
- Das {{HTMLElement("del")}}-Element sollte verwendet werden, wenn Daten _gelöscht_ wurden.
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} sollte verwendet werden, um den früheren visuellen Aspekt des `<s>`-Elements zu erreichen.
