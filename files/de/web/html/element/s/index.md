---
title: "<s>: Das Durchstreich-Element"
slug: Web/HTML/Element/s
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<s>`** [HTML](/de/docs/Web/HTML)-Element zeigt Text mit einem Durchstrich oder einer Linie durch den Text an. Verwenden Sie das `<s>`-Element, um Dinge darzustellen, die nicht mehr relevant oder nicht mehr korrekt sind. Verwenden Sie `<s>` jedoch nicht, um Dokumentenänderungen anzuzeigen; dafür verwenden Sie die Elemente {{HTMLElement("del")}} und {{HTMLElement("ins")}}, je nach Bedarf.

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Das Vorhandensein des `s`-Elements wird von den meisten Screenreader-Technologien in ihrer Standardkonfiguration nicht angekündigt. Es kann mithilfe der CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} zur Ankündigung gebracht werden.

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

Einige Personen, die Screenreader verwenden, deaktivieren bewusst das Ankündigen von Inhalten, die zusätzliche Wortfülle erzeugen. Aus diesem Grund ist es wichtig, diese Technik nicht zu übertreiben und sie nur in Situationen anzuwenden, in denen Unkenntnis über den durchgestrichenen Inhalt das Verständnis erheblich beeinträchtigen würde.

- [Kurzer Hinweis zur Zugänglichkeit Ihres Zeichens | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Anpassung von Textstilebenen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
          >Textinhalt</a
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
          >Textinhalt</a
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
          >Textinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

## Siehe auch

- Das {{HTMLElement("strike")}}-Element, das Alter Ego des `<s>`-Elements, ist veraltet und sollte auf Webseiten nicht mehr verwendet werden.
- Das {{HTMLElement("del")}}-Element sollte stattdessen verwendet werden, wenn Daten _gelöscht_ wurden.
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} sollte verwendet werden, um den früheren visuellen Aspekt des `<s>`-Elements zu erreichen.
