---
title: "<del>: Das Deleted Text Element"
slug: Web/HTML/Element/del
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<del>`**-[HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus einem Dokument gelöscht wurde. Dies kann beispielsweise verwendet werden, um "Änderungen nachverfolgen" oder Quellcodedifferenzinformationen darzustellen. Das {{HTMLElement("ins")}} Element kann für den gegenteiligen Zweck verwendet werden: um Text anzugeben, der dem Dokument hinzugefügt wurde.

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

Dieses Element wird häufig (aber nicht zwingend) durch Anwenden eines Durchstreichstils auf den Text dargestellt.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `cite`
  - : Eine URI für eine Ressource, die die Änderung erklärt (zum Beispiel Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut gibt die Zeit und das Datum der Änderung an und muss eine gültige Datumszeichenfolge mit optionaler Zeit sein. Wenn der Wert nicht als Datum mit optionaler Zeitzeichenfolge analysiert werden kann, hat das Element keinen zugeordneten Zeitstempel. Für das Format der Zeichenfolge ohne Zeit siehe [Datumszeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#date_strings). Das Format der Zeichenfolge, falls es sowohl Datum als auch Zeit enthält, ist in [Lokale Datums- und Zeitzeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) abgedeckt.

## Barrierefreiheit

Das Vorhandensein des `del`-Elements wird von den meisten Bildschirmlesetechnologien in ihrer Standardkonfiguration nicht angekündigt. Es kann durch die Verwendung der CSS {{cssxref("content")}}-Eigenschaft sowie der {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente angekündigt werden.

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

Einige Personen, die Bildschirmleser verwenden, deaktivieren absichtlich das Ankündigen von Inhalten, die zusätzliche Wortfülle erzeugen. Aus diesem Grund ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalt gelöscht wurde, das Verständnis negativ beeinflussen würde.

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
          >Phrasing content</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
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

- Das {{HTMLElement("ins")}} Element für Einfügungen in einen Text
- Das {{HTMLElement("s")}} Element für Durchstreichung, getrennt von der Repräsentation der Löschung von Text
