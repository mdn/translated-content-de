---
title: "<s>: Das Strikethrough-Element"
slug: Web/HTML/Element/s
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<s>`** [HTML](/de/docs/Web/HTML)-Element Darstellung von Text mit einem Strikethrough, oder einer Linie durch den Text. Verwenden Sie das `<s>`-Element, um Dinge darzustellen, die nicht mehr relevant oder nicht mehr zutreffend sind. `<s>` ist jedoch nicht geeignet, um Dokumentänderungen anzuzeigen; hierfür verwenden Sie die {{HTMLElement("del")}} und {{HTMLElement("ins")}} Elemente, je nach Bedarf.

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Das Vorhandensein des `s` Elements wird von den meisten Bildschirmlesetechnologien in der Standardeinstellung nicht angesagt. Es kann angesagt werden, indem man die CSS {{cssxref("content")}} Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelementen verwendet.

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

Einige Personen, die Bildschirmlesegeräte verwenden, deaktivieren bewusst das Ansagen von Inhalten, die zusätzliche Ausführlichkeit erzeugen. Deshalb ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Fehlen der Information, dass ein Inhalt durchgestrichen wurde, das Verständnis negativ beeinflussen würde.

- [Kurze Notiz, um Ihr Zeichen (zugänglicher) zu machen | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Anpassen von Textlevelstilen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
          >Phraseninhalt</a
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
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
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

- Das {{HTMLElement("strike")}} Element, das Alter Ego des `<s>` Elements, ist veraltet und sollte nicht mehr auf Websites verwendet werden.
- Das {{HTMLElement("del")}} Element sollte verwendet werden, wenn die Daten _gelöscht_ wurden.
- Die CSS {{cssxref("text-decoration-line")}} Eigenschaft sollte verwendet werden, um den früheren visuellen Aspekt des `<s>` Elements zu erreichen.
