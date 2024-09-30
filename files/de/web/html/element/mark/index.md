---
title: "<mark>: Das Mark-Text-Element"
slug: Web/HTML/Element/mark
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<mark>`** [HTML](/de/docs/Web/HTML) Element stellt Text dar, der **markiert** oder **hervorgehoben** wird, um auf Referenz- oder Notationszwecke hinzuweisen, aufgrund der Relevanz der markierten Passage im umgebenden Kontext.

{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Typische Anwendungsfälle für `<mark>` umfassen:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder einem Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es in der Regel Text an, der von besonderem Interesse ist, aber im ursprünglichen Quellmaterial nicht markiert wurde, oder Material, das besondere Beachtung verdient, obwohl der ursprüngliche Autor es nicht für besonders wichtig hielt. Dies ist vergleichbar mit der Verwendung eines Textmarkers in einem Buch, um Passagen zu markieren, die Sie für interessant halten.
- Ansonsten weist `<mark>` auf einen Teil des Inhalts des Dokuments hin, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Dies könnte beispielsweise verwendet werden, um die Wörter zu kennzeichnen, die mit einer Suchoperation übereinstimmen.
- Verwenden Sie `<mark>` nicht für Zwecke der Syntaxhervorhebung; verwenden Sie stattdessen das {{HTMLElement("span")}} Element mit entsprechender CSS-Anwendung.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}} Element; `<mark>` wird verwendet, um Inhalte zu kennzeichnen, die einen Grad der _Relevanz_ haben, während `<strong>` Textbereiche von _Bedeutung_ anzeigt.

## Barrierefreiheit

Das Vorhandensein des `mark`-Elements wird von den meisten Bildschirmlesetechnologien in ihrer Standardkonfiguration nicht angekündigt. Es kann so eingerichtet werden, dass es durch die Verwendung der CSS-{{cssxref("content")}} Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelementen angekündigt wird.

```css
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [highlight start] ";
}

mark::after {
  content: " [highlight end] ";
}
```

Einige Personen, die Bildschirmleser verwenden, deaktivieren bewusst die Ankündigung von Inhalten, die zusätzliche Redundanz verursachen. Aus diesem Grund ist es wichtig, diese Technik nicht missbräuchlich einzusetzen und sie nur in Situationen anzuwenden, in denen das Nichtwissen darüber, dass Inhalt hervorgehoben wurde, das Verständnis nachteilig beeinflussen würde.

- [Kurzer Hinweis zur Barrierefreiheit von Markierungen | Die Paciello-Gruppe](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Anpassung von Textstilen auf niedriger Ebene | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markierung von interessanten Texten

Im ersten Beispiel wird ein `<mark>` Element verwendet, um Text innerhalb eines Zitats zu markieren, der für den Benutzer von besonderem Interesse ist.

```html
<blockquote>
  It is a period of civil war. Rebel spaceships, striking from a hidden base,
  have won their first victory against the evil Galactic Empire. During the
  battle, <mark>Rebel spies managed to steal secret plans</mark> to the Empire's
  ultimate weapon, the DEATH STAR, an armored space station with enough power to
  destroy an entire planet.
</blockquote>
```

#### Ergebnis

{{EmbedLiveSample("Marking_text_of_interest", 650, 130)}}

### Identifizierung kontextsensitiver Passagen

Dieses Beispiel veranschaulicht die Verwendung von `<mark>`, um Suchergebnisse innerhalb einer Passage zu markieren.

```html
<p>
  It is a dark time for the Rebellion. Although the Death Star has been
  destroyed, <mark class="match">Imperial</mark> troops have driven the Rebel
  forces from their hidden base and pursued them across the galaxy.
</p>

<p>
  Evading the dreaded <mark class="match">Imperial</mark> Starfleet, a group of
  freedom fighters led by Luke Skywalker has established a new secret base on
  the remote ice world of Hoth.
</p>
```

Um die Verwendung von `<mark>` für Suchergebnisse von anderen möglichen Verwendungen zu unterscheiden, wird in diesem Beispiel die benutzerdefinierte Klasse `"match"` auf jede Übereinstimmung angewendet.

#### Ergebnis

{{EmbedLiveSample("Identifying_context-sensitive_passages", 650, 130)}}

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
