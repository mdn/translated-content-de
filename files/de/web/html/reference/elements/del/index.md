---
title: "<del>: Das gelöschte Textelement"
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<del>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert einen Textbereich, der aus einem Dokument entfernt wurde. Dies kann verwendet werden, um beispielsweise "Änderungen nachverfolgen" oder Quellcode-Differenzen darzustellen. Das {{HTMLElement("ins")}}-Element kann für den gegenteiligen Zweck verwendet werden: um anzugeben, dass Text zum Dokument hinzugefügt wurde.

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

Dieses Element wird oft (aber nicht unbedingt) durch die Anwendung eines Durchstreichstils auf den Text dargestellt.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Ein URI zu einer Ressource, die die Änderung erklärt (zum Beispiel Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut gibt die Zeit und das Datum der Änderung an und muss eine gültige Datumszeichenkette mit einer optionalen Zeit sein. Wenn der Wert nicht als Datum mit einer optionalen Zeitzeichenkette geparst werden kann, hat das Element keinen zugehörigen Zeitstempel. Für das Format der Zeichenkette ohne Zeit siehe [Datumszeichenketten](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings). Das Format der Zeichenkette, falls sie sowohl Datum als auch Zeit enthält, wird in [Lokale Datums- und Zeitzeichenketten](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Die Existenz des `del`-Elements wird von den meisten Screenreader-Technologien in ihrer Standardeinstellung nicht angesagt. Es kann angesagt werden, indem die CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} verwendet wird.

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

Einige Menschen, die Screenreader verwenden, deaktivieren das Ansagen von Inhalten, die zusätzliche Wortfülle erzeugen. Deshalb ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtkennen gelöschter Inhalte das Verständnis beeinträchtigen würde.

- [Kurzer Hinweis zur besseren Zugänglichkeit Ihrer Markierungen | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Anpassung von Textebenenstilen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
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
- {{HTMLElement("s")}}-Element für Durchstreichungen, die von der Darstellung gelöschten Texts getrennt sind
