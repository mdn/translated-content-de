---
title: "<del>: Das Deleted Text-Element"
slug: Web/HTML/Element/del
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}

Das **`<del>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Bereich von Text, der aus einem Dokument gelöscht wurde. Dies kann beispielsweise beim Rendern von "Änderungen nachverfolgen" oder Quellcode-Diff-Informationen verwendet werden. Das {{HTMLElement("ins")}}-Element kann für den entgegengesetzten Zweck verwendet werden: Um Text anzuzeigen, der dem Dokument hinzugefügt wurde.

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

Dieses Element wird häufig (aber nicht zwingend) durch eine Durchstreich-Formatierung des Textes dargestellt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `cite`
  - : Ein URI für eine Ressource, die die Änderung erklärt (zum Beispiel Sitzungsprotokolle).
- `datetime`
  - : Dieses Attribut gibt die Zeit und das Datum der Änderung an und muss ein gültiger Datumsstring mit optionaler Zeit sein. Wenn der Wert nicht als Datum mit optionalem Zeitstring analysiert werden kann, hat das Element keinen zugeordneten Zeitstempel. Für das Format des Strings ohne Zeit siehe [Datumsstrings](/de/docs/Web/HTML/Date_and_time_formats#date_strings). Das Format des Strings, wenn sowohl Datum als auch Zeit enthalten sind, wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) behandelt.

## Barrierefreiheit

Das Vorhandensein des `del`-Elements wird von den meisten Bildschirmlesern in ihrer Standardeinstellung nicht angekündigt. Es kann angekündigt werden, indem die CSS-{{cssxref("content")}}-Eigenschaft zusammen mit den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelementen verwendet wird.

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

Einige Personen, die Bildschirmleser verwenden, deaktivieren bewusst die Ankündigung von Inhalten, die zusätzliche Wortfülle erzeugen. Aufgrund dessen ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalt gelöscht wurde, das Verständnis beeinträchtigen würde.

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
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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
          >Phrasierungsinhalt</a
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
- {{HTMLElement("s")}}-Element für Durchstreichungen, die nicht die Löschung von Text darstellen
