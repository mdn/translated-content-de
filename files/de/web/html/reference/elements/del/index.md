---
title: "<del>: Das Deleted Text-Element"
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<del>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen Textbereich, der aus einem Dokument gelöscht wurde. Dies kann beispielsweise bei der Wiedergabe von "Änderungen nachverfolgen" oder Quellcode-Differenzinformationen verwendet werden. Das {{HTMLElement("ins")}}-Element kann für den gegenteiligen Zweck verwendet werden: um Text anzuzeigen, der dem Dokument hinzugefügt wurde.

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

Dieses Element wird oft (aber nicht zwingend) durch Anwenden eines Durchstreichstils auf den Text angezeigt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Eine URI für eine Ressource, die die Änderung erklärt (zum Beispiel Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut gibt die Zeit und das Datum der Änderung an und muss ein gültiger Datumsstring mit einer optionalen Uhrzeit sein. Wenn der Wert nicht als Datum mit optionalem Zeitstring geparst werden kann, hat das Element keinen zugeordneten Zeitstempel. Für das Format des Strings ohne Zeitangabe siehe [Datums-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings). Das Format des Strings, wenn er sowohl Datum als auch Zeit enthält, wird in [Lokale Datums- und Zeit-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Die Anwesenheit des `del`-Elements wird in den Standardeinstellungen von den meisten Screenreader-Technologien nicht angekündigt. Es kann angekündigt werden, indem die CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} verwendet wird.

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

Einige Menschen, die Screenreader verwenden, deaktivieren bewusst die Ankündigung von Inhalten, die zusätzliche Ausführlichkeit erzeugen. Aus diesem Grund ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen um den gelöschten Inhalt das Verständnis beeinträchtigen würde.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
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
          >Phrasing Content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow Content</a
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
      <th scope="row">Tag-Ausschluss</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing Content</a
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
- {{HTMLElement("s")}}-Element für Durchstreichungen, die getrennt von der Darstellung der Textlöschung sind
