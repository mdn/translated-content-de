---
title: "<del>: Das gelöschte Textelement"
slug: Web/HTML/Element/del
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}

Das **`<del>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textbereich, der aus einem Dokument gelöscht wurde. Dies kann z.B. verwendet werden, um "Änderungen nachverfolgen" oder Quellcode-Differenzinformationen darzustellen. Das {{HTMLElement("ins")}} Element kann für den gegenteiligen Zweck verwendet werden: um anzuzeigen, dass Text dem Dokument hinzugefügt wurde.

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

Dieses Element wird häufig (muss aber nicht) durch Anwenden eines Durchstreich-Stils auf den Text dargestellt.

## Attribute

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `cite`
  - : Eine URI für eine Ressource, die die Änderung erklärt (z.B. Protokolle von Besprechungen).
- `datetime`
  - : Dieses Attribut gibt Zeit und Datum der Änderung an und muss eine gültige Datumszeichenfolge mit optionaler Uhrzeit sein. Wenn der Wert nicht als Datum mit optionaler Uhrzeit erkannt werden kann, hat das Element keinen zugeordneten Zeitstempel. Für das Format der Zeichenfolge ohne Uhrzeit siehe [Datumszeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#date_strings). Das Format der Zeichenfolge, wenn sowohl Datum als auch Uhrzeit enthalten sind, ist in [Lokale Datum- und Uhrzeitzeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

## Barrierefreiheit

Die Anwesenheit des `del` Elements wird in der Standardeinstellung von den meisten Bildschirmlesetechnologien nicht angesagt. Es kann angesagt werden, indem die CSS-Eigenschaft {{cssxref("content")}}, zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}}, verwendet wird.

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

Einige Menschen, die Bildschirmleser verwenden, deaktivieren absichtlich das Ansagen von Inhalten, die zusätzliche Ausführlichkeit schaffen. Daher ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nicht-Wissen, dass Inhalte gelöscht wurden, das Verständnis erheblich beeinträchtigen würde.

- [Kurze Notiz zum barrierefreierem Markieren | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Anpassung der Textstil-Ebenen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

```html
<p><del>Dieser Text wurde gelöscht</del>, hier ist der Rest des Absatzes.</p>
<del><p>Dieser Absatz wurde gelöscht.</p></del>
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
          >Satz-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
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
          >Satz-Inhalt</a
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
      <td>{{domxref("HTMLModElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("ins")}} Element für Einfügungen in einen Text
- {{HTMLElement("s")}} Element für Durchstreichung, unabhängig von der Darstellung des Löschens von Text
