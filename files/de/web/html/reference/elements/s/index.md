---
title: "<s>: Das Durchstreichungselement"
slug: Web/HTML/Reference/Elements/s
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<s>`**-Element von [HTML](/de/docs/Web/HTML) stellt Text mit einer Durchstreichung dar, oder anders gesagt einem Strich hindurch. Verwenden Sie das `<s>`-Element, um Dinge darzustellen, die nicht mehr relevant oder nicht mehr korrekt sind. `<s>` ist jedoch nicht geeignet, um Dokumentänderungen anzuzeigen; dafür sollten die {{HTMLElement("del")}}- und {{HTMLElement("ins")}}-Elemente wie passend verwendet werden.

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

## Barrierefreiheit

Die Anwesenheit des `s`-Elements wird von den meisten Screenreader-Technologien in ihrer Standardkonfiguration nicht angekündigt. Es kann jedoch durch die Verwendung der CSS-{{cssxref("content")}}-Eigenschaft zusammen mit den Pseudo-Elementen {{cssxref("::before")}} und {{cssxref("::after")}} angekündigt werden.

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

Einige Personen, die Screenreader verwenden, deaktivieren bewusst die Ankündigung von Inhalten, die zusätzliche Wortfülle schaffen. Daher ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte durchgestrichen wurden, das Verständnis nachteilig beeinflussen würde.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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

- Das {{HTMLElement("strike")}}-Element, das Alter Ego des `<s>`-Elements, ist veraltet und sollte auf Webseiten nicht mehr verwendet werden.
- Das {{HTMLElement("del")}}-Element sollte stattdessen verwendet werden, wenn Daten _gelöscht_ wurden.
- Die CSS-{{cssxref("text-decoration-line")}}-Eigenschaft sollte verwendet werden, um den früheren visuellen Aspekt des `<s>`-Elements zu erreichen.
