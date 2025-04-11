---
title: "<mark>: Das Mark Text Element"
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<mark>`** [HTML](/de/docs/Web/HTML) Element repräsentiert Text, der **markiert** oder **hervorgehoben** wird, zum Zwecke der Referenz oder Notation wegen der Relevanz der markierten Passage im umgebenden Kontext.

{{InteractiveExample("HTML Demo: &lt;mark&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Search results for "salamander":</p>

<hr />

<p>
  Several species of <mark>salamander</mark> inhabit the temperate rainforest of
  the Pacific Northwest.
</p>

<p>
  Most <mark>salamander</mark>s are nocturnal, and hunt for insects, worms, and
  other small creatures.
</p>
```

```css interactive-example
mark {
  /* Add your styles here */
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Typische Anwendungsfälle für `<mark>` umfassen:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder einem Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es normalerweise Text an, der von besonderem Interesse ist, aber nicht im ursprünglichen Quellenmaterial markiert ist, oder Material, das besondere Aufmerksamkeit erfordert, obwohl der ursprüngliche Autor es nicht als besonders wichtig erachtete. Dies kann mit einem Textmarker verglichen werden, um Passagen in einem Buch zu kennzeichnen, die für Sie von Interesse sind.
- Ansonsten zeigt `<mark>` einen Teil des Inhalts des Dokuments an, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Dies könnte beispielsweise verwendet werden, um Wörter zu kennzeichnen, die mit einer Suchoperation übereinstimmen.
- Verwenden Sie `<mark>` nicht für Syntaxhervorhebungszwecke; stattdessen sollten Sie das {{HTMLElement("span")}} Element mit entsprechend angewendetem CSS verwenden.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}} Element; `<mark>` wird verwendet, um Inhalte zu markieren, die einen Grad _der Relevanz_ haben, während `<strong>` Textabschnitte von _Wichtigkeit_ angibt.

## Barrierefreiheit

Das Vorhandensein des `mark` Elements wird von den meisten Bildschirmlesegeräten in der Standardeinstellung nicht angesagt. Es kann durch Verwendung der CSS {{cssxref("content")}} Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elementen angesagt werden.

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

Einige Benutzer, die Bildschirmlesegeräte verwenden, deaktivieren absichtlich die Ansage von Inhalten, die zusätzliche Wortfülle erzeugen. Daher ist es wichtig, diese Technik nicht übermäßig zu verwenden und sie nur in Situationen anzuwenden, in denen die Unkenntnis der hervorgehobenen Inhalte das Verstehen beeinträchtigen würde.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markieren von interessantem Text

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

### Identifizieren kontextsensitiver Passagen

Dieses Beispiel zeigt die Verwendung von `<mark>`, um Suchergebnisse innerhalb einer Passage zu markieren.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderer möglicher Nutzung zu unterscheiden, wird in diesem Beispiel die benutzerdefinierte Klasse `"match"` auf jede Übereinstimmung angewendet.

#### Ergebnis

{{EmbedLiveSample("Identifying_context-sensitive_passages", 650, 130)}}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
