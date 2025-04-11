---
title: "<del>: Das gelöschte Textelement"
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<del>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Bereich von Text, der aus einem Dokument gelöscht wurde. Dies kann beispielsweise beim Anzeigen von "Änderungen nachverfolgen" oder Quellcode-Diff-Informationen verwendet werden. Das {{HTMLElement("ins")}} Element kann für den entgegengesetzten Zweck verwendet werden: um anzuzeigen, dass Text dem Dokument hinzugefügt wurde.

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
  background-color: #fbb;
  color: #555;
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

Dieses Element wird oft (aber nicht zwingend) so gerendert, dass ein Durchstreich-Stil auf den Text angewendet wird.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Ein URI für eine Ressource, die die Änderung erklärt (zum Beispiel Protokolle eines Treffens).
- `datetime`
  - : Dieses Attribut gibt die Zeit und das Datum der Änderung an und muss ein gültiger Datums-String mit optionaler Zeit sein. Wenn der Wert nicht als Datum mit optionalem Zeitstring geparst werden kann, hat das Element keinen zugeordneten Zeitstempel. Für das Format des Strings ohne Zeit siehe [Datums-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings). Das Format des Strings, wenn sowohl Datum als auch Zeit enthalten sind, wird in [Lokale Datums- und Zeit-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Das Vorhandensein des `del` Elements wird von den meisten Screenreadern in ihrer Standardkonfiguration nicht angesagt. Es kann durch die Verwendung der CSS {{cssxref("content")}} Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelementen angesagt werden.

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

Einige Personen, die Screenreader verwenden, deaktivieren bewusst die Ankündigung von Inhalten, die zusätzliche Wortfülle erzeugen. Aufgrund dessen ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen über gelöschte Inhalte das Verständnis erheblich beeinträchtigen würde.

- [Kurzer Hinweis, um Ihr Zeichen zugänglicher zu machen | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Text-Level-Stile anpassen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
          >Phrasing-Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalte</a
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalte</a
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
      <td>Alle</td>
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

- {{HTMLElement("ins")}} Element für Einfügungen in einen Text
- {{HTMLElement("s")}} Element für Durchstreichungen, getrennt von der Darstellung der Löschung eines Textes
