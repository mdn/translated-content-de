---
title: "<s>: Das Strikethrough-Element"
slug: Web/HTML/Element/s
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<s>`**-Element [HTML](/de/docs/Web/HTML) rendert Text mit einem Strikethrough oder einem Durchstrich. Verwenden Sie das `<s>`-Element, um Dinge darzustellen, die nicht mehr relevant oder nicht mehr korrekt sind. Das `<s>`-Element ist jedoch nicht geeignet, um Dokumentänderungen anzuzeigen; für diesen Zweck verwenden Sie die {{HTMLElement("del")}}- und {{HTMLElement("ins")}}-Elemente entsprechend.

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Das Vorhandensein des `s`-Elements wird von den meisten Screenreader-Technologien in ihrer Standardeinstellung nicht angekündigt. Es kann so konfiguriert werden, dass es angekündigt wird, indem die CSS-Eigenschaft {{cssxref("content")}}, zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}}, verwendet wird.

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

Einige Nutzer von Screenreadern deaktivieren bewusst die Ankündigung von Inhalten, die zusätzliche Redundanz schaffen. Aus diesem Grund ist es wichtig, diese Technik nicht übermäßig zu verwenden und sie nur in Situationen anzuwenden, in denen es das Verständnis beeinträchtigen würde, wenn der durchgestrichene Inhalt nicht bekannt ist.

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
          >Text-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Text-Inhalt</a
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
          >Text-Inhalt</a
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

- Das {{HTMLElement("strike")}}-Element, das alter Ego des `<s>`-Elements, ist veraltet und sollte nicht mehr auf Webseiten verwendet werden.
- Verwenden Sie das {{HTMLElement("del")}}-Element, wenn Daten _gelöscht_ wurden.
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} sollte verwendet werden, um den ehemaligen visuellen Aspekt des `<s>`-Elements zu erreichen.
