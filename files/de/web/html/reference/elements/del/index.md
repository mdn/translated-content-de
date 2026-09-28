---
title: "`<del>`: HTML-Element für gelöschten Text"
short-title: <del>
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Das **`<del>`**-Element von [HTML](/de/docs/Web/HTML) kennzeichnet einen Textbereich, der aus einem Dokument gelöscht wurde. Es kann beispielsweise verwendet werden, um nachverfolgte Änderungen oder Unterschiede zwischen Quellcodeversionen darzustellen. Das {{HTMLElement("ins")}}-Element dient dem gegenteiligen Zweck: Es kennzeichnet Text, der dem Dokument hinzugefügt wurde.

Dieses Element wird häufig, aber nicht zwingend, mit durchgestrichenem Text dargestellt.

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

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Ein URI für eine Ressource, die die Änderung erläutert, beispielsweise ein Sitzungsprotokoll.
- `datetime`
  - : Dieses Attribut gibt Datum und Uhrzeit der Änderung an. Sein Wert muss eine gültige Datumszeichenfolge mit optionaler Uhrzeit sein. Wenn der Wert nicht als Datum mit optionaler Uhrzeit interpretiert werden kann, ist dem Element kein Zeitstempel zugeordnet. Das Format einer Zeichenfolge ohne Uhrzeit wird unter [Datumszeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) beschrieben. Das Format einer Zeichenfolge mit Datum und Uhrzeit wird unter [Lokale Datums- und Uhrzeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

## Barrierefreiheit

Die meisten Screenreader kündigen das `del`-Element in ihrer Standardkonfiguration nicht an. Mithilfe der CSS-Eigenschaft {{cssxref("content")}} sowie der Pseudoelemente {{cssxref("::before")}} und {{cssxref("::after")}} lässt sich eine solche Ankündigung ergänzen.

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

Manche Menschen, die Screenreader verwenden, deaktivieren bewusst die Ankündigung zusätzlicher Inhalte, um übermäßig ausführliche Ausgaben zu vermeiden. Setzen Sie diese Technik daher sparsam und nur dann ein, wenn das Verständnis darunter leiden würde, dass die Löschung des Textes nicht erkennbar ist.

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
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing Content</a
        > zulässt.
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

- {{HTMLElement("ins")}}-Element zum Kennzeichnen von eingefügtem Text
- {{HTMLElement("s")}}-Element zum Durchstreichen von Text, ohne ihn als gelöscht zu kennzeichnen
