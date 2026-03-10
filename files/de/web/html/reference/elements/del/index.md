---
title: "<del>: Das Deleted Text Element"
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Das **`<del>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus einem Dokument gelöscht wurde. Dies kann beispielsweise verwendet werden, um "Änderungen nachverfolgen" darzustellen oder Quellcode-Unterschiedsinformationen anzuzeigen. Das {{HTMLElement("ins")}}-Element kann für den gegenteiligen Zweck verwendet werden: Um anzuzeigen, welcher Text dem Dokument hinzugefügt wurde.

{{InteractiveExample("HTML Demo: &lt;del&gt;", "tabbed-standard")}}

```html interactive-example
<blockquote>
  There is <del>nothing</del> <ins>no code</ins> either good or bad, but
  <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

```css interactive-example
del {
  text-decoration: line-through;
  background-color: #ffbbbb;
  color: #555555;
}

ins {
  text-decoration: none;
  background-color: #d4fcbc;
}

blockquote {
  padding-left: 15px;
  border-left: 3px solid #d7d7db;
  font-size: 1rem;
}
```

Dieses Element wird oft (aber nicht zwingend) durch das Anwenden eines Durchstreich-Stils auf den Text dargestellt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Eine URI für eine Ressource, die die Änderung erklärt (zum Beispiel Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut gibt die Zeit und das Datum der Änderung an und muss eine gültige Datumszeichenfolge mit optionaler Zeit sein. Wenn der Wert nicht als Datum mit einer optionalen Zeitzeichenfolge geparst werden kann, hat das Element keinen zugeordneten Zeitstempel. Das Format der Zeichenfolge ohne Zeit finden Sie unter [Datumszeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings). Das Format der Zeichenfolge, wenn es sowohl Datum als auch Zeit beinhaltet, wird in [Lokale Datums- und Zeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Das Vorhandensein des `del`-Elements wird in den meisten Bildschirmlesetechnologien in ihrer Standardkonfiguration nicht angekündigt. Es kann durch Verwendung der CSS {{cssxref("content")}}-Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elementen angekündigt werden.

```css
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: " [deletion start] ";
}

del::after {
  content: " [deletion end] ";
}
```

Manche Menschen, die Bildschirmleser verwenden, deaktivieren absichtlich die Ankündigung von Inhalten, die zusätzliche Wortlast schaffen. Daher ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen der fehlende Hinweis auf gelöschte Inhalte das Verständnis beeinträchtigen würde.

- [Short note on making your mark (more accessible) | Vispero](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

```html
<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
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
          >Phrasing-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLModElement`](/de/docs/Web/API/HTMLModElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("ins")}}-Element für Einfügungen in einen Text
- {{HTMLElement("s")}}-Element für Durchstreichungen, die nicht das Löschen von Text darstellen
