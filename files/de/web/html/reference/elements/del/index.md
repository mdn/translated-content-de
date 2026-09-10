---
title: HTML-Element `<del>` für gelöschten Text
short-title: <del>
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Das [HTML](/de/docs/Web/HTML)-Element **`<del>`** stellt einen Textbereich dar, der aus einem Dokument gelöscht wurde. Dies kann beispielsweise beim Darstellen von Informationen zu „Änderungen nachverfolgen“ oder von Quellcode-Diffs verwendet werden. Das Element {{HTMLElement("ins")}} kann für den gegenteiligen Zweck verwendet werden: um Text anzugeben, der dem Dokument hinzugefügt wurde.

Dieses Element wird häufig (aber nicht zwingend) durch Anwenden eines Durchstreichungsstils auf den Text dargestellt.

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

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Ein URI für eine Ressource, die die Änderung erläutert (z. B. Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut gibt die Uhrzeit und das Datum der Änderung an und muss eine gültige Datumszeichenfolge mit optionaler Uhrzeit sein. Wenn der Wert nicht als Datum mit optionaler Uhrzeitzeichenfolge geparst werden kann, hat das Element keinen zugeordneten Zeitstempel. Informationen zum Format der Zeichenfolge ohne Uhrzeit finden Sie unter [Datumszeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings). Das Format der Zeichenfolge, wenn sie sowohl Datum als auch Uhrzeit enthält, wird unter [Lokale Datums- und Uhrzeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Das Vorhandensein des Elements `del` wird von den meisten Screenreader-Technologien in ihrer Standardkonfiguration nicht angesagt. Es kann durch Verwendung der CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} angesagt werden.

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

Einige Personen, die Screenreader verwenden, deaktivieren bewusst die Ansage von Inhalten, die zusätzliche Ausführlichkeit erzeugen. Deshalb ist es wichtig, diese Technik nicht missbräuchlich zu verwenden und sie nur in Situationen anzuwenden, in denen das Nichtwissen darüber, dass Inhalt gelöscht wurde, das Verständnis beeinträchtigen würde.

- [Kurzer Hinweis zum zugänglicheren Hervorheben von Änderungen | Vispero](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/)
- [Textstil auf Textebene anpassen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
      <th scope="row">Weglassen von Tags</th>
      <td>Keines, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert.
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
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLModElement`](/de/docs/Web/API/HTMLModElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Element {{HTMLElement("ins")}} für Einfügungen in einen Text
- Element {{HTMLElement("s")}} für Durchstreichungen, die nicht das Löschen von Text darstellen
