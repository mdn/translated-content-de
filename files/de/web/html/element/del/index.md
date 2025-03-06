---
title: "<del>: Das Deleted Text-Element"
slug: Web/HTML/Element/del
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<del>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen Textbereich, der aus einem Dokument gelöscht wurde. Dies kann verwendet werden, um beispielsweise "Änderungen verfolgen" oder Quellcode-Differenzinformationen darzustellen. Das {{HTMLElement("ins")}}-Element kann für den gegensätzlichen Zweck verwendet werden: um anzuzeigen, dass Text dem Dokument hinzugefügt wurde.

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

Dieses Element wird oft (aber nicht notwendigerweise) durch Anwenden eines Durchstreich-Stils auf den Text gerendert.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `cite`
  - : Ein URI für eine Ressource, die die Änderung erklärt (zum Beispiel Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut gibt die Zeit und das Datum der Änderung an und muss eine gültige Datumszeichenfolge mit optionaler Zeit sein. Wenn der Wert nicht als Datum mit optionaler Zeitzeichenfolge geparst werden kann, hat das Element keinen zugeordneten Zeitstempel. Für das Format der Zeichenfolge ohne Zeit siehe [Date Strings](/de/docs/Web/HTML/Date_and_time_formats#date_strings). Das Format der Zeichenfolge, wenn sowohl Datum als auch Zeit enthalten sind, wird in [Lokale Datums- und Zeitzeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Das Vorhandensein des `del`-Elements wird in der Standardkonfiguration von den meisten Bildschirmlesetechnologien nicht angekündigt. Es kann angekündigt werden, indem die CSS-{{cssxref("content")}}-Eigenschaft zusammen mit den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelementen verwendet wird.

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

Einige Personen, die Bildschirmlesegeräte verwenden, deaktivieren absichtlich das Ankündigen von Inhalten, die zusätzliche Wortfülle erzeugen. Aus diesem Grund ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Unwissen über gelöschte Inhalte das Verständnis nachteilig beeinflussen würde.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing Content</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow Content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
- {{HTMLElement("s")}}-Element für Durchstreichung, die sich nicht auf die Löschung von Text bezieht
