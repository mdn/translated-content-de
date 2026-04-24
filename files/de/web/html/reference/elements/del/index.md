---
title: "`<del>` HTML gelöschtes Textelement"
short-title: <del>
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<del>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus einem Dokument entfernt wurde. Dies kann beispielsweise verwendet werden, wenn "Änderungen nachverfolgen" oder Informationen über Unterschiede im Quellcode gerendert werden. Das {{HTMLElement("ins")}} Element kann für das Gegenteil verwendet werden: um anzuzeigen, dass Text zum Dokument hinzugefügt wurde.

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

Dieses Element wird oft (aber nicht notwendigerweise) durch die Anwendung eines Durchstreichstils auf den Text gerendert.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Ein URI für eine Ressource, die die Änderung erklärt (zum Beispiel Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut zeigt die Zeit und das Datum der Änderung an und muss ein gültiger Datumsstring mit optionaler Uhrzeit sein. Wenn der Wert nicht als Datum mit optionalem Zeitstring geparst werden kann, hat das Element keinen zugeordneten Zeitstempel. Für das Format des Strings ohne Uhrzeit siehe [Datumsstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings). Das Format des Strings, wenn es sowohl Datum als auch Uhrzeit enthält, wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Das Vorhandensein des `del` Elements wird in der Standardeinstellung von den meisten Screenreader-Technologien nicht angekündigt. Es kann zur Ankündigung gebracht werden, indem die CSS {{cssxref("content")}} Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elementen verwendet wird.

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

Einige Personen, die Screenreader verwenden, deaktivieren absichtlich die Ankündigung von Inhalten, die zusätzliche Ausführlichkeit schaffen. Daher ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen von gelöschten Inhalten das Verständnis negativ beeinflussen würde.

- [Kurze Notiz zur Verbesserung der Markierung (zugänglicher) | Vispero](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/)
- [Text Level Styles anpassen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
          >Phrasierung von Inhalten</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassener Inhalt</th>
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
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- {{HTMLElement("ins")}} Element für Einfügungen in einen Text
- {{HTMLElement("s")}} Element für Durchstreichungen, die sich von der Darstellung gelöschten Textes unterscheiden
