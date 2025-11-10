---
title: "<mark>: Das Mark Text-Element"
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<mark>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Text, der **markiert** oder **hervorgehoben** ist für Referenz- oder Notationszwecke, aufgrund der Relevanz des markierten Abschnitts im umgebenden Kontext.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anwendungshinweise

Typische Anwendungsfälle für `<mark>` umfassen:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es im Allgemeinen Text an, der von besonderem Interesse ist, aber im Originalmaterial nicht markiert wurde, oder Material, das besondere Aufmerksamkeit erfordert, auch wenn der ursprüngliche Autor es nicht für besonders wichtig hielt. Denken Sie dabei an die Verwendung eines Textmarkers in einem Buch, um Passagen zu markieren, die Sie für interessant halten.
- Andernfalls zeigt `<mark>` einen Teil des Dokuments an, der wahrscheinlich für die aktuelle Aktivität des Nutzers relevant ist. Dies könnte beispielsweise verwendet werden, um die Wörter hervorzuheben, die mit einer Suchoperation übereinstimmen.
- Verwenden Sie `<mark>` nicht für Syntaxhervorhebungszwecke; verwenden Sie stattdessen das {{HTMLElement("span")}}-Element mit entsprechendem CSS.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` wird verwendet, um Inhalte mit einem gewissen Grad an _Relevanz_ zu kennzeichnen, während `<strong>` Textabschnitte von _Wichtigkeit_ anzeigt.

## Barrierefreiheit

Das Vorhandensein des `mark`-Elements wird von den meisten Screenreader-Technologien in der Standardkonfiguration nicht angekündigt. Es kann durch Verwendung der CSS-{{cssxref("content")}}-Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elementen angekündigt werden.

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

Einige Personen, die Screenreader verwenden, deaktivieren bewusst das Ankündigen von Inhalten, die zusätzliche Redundanz schaffen. Aus diesem Grund ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalt hervorgehoben wurde, das Verständnis erheblich beeinträchtigen würde.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markieren von interessantem Text

In diesem ersten Beispiel wird ein `<mark>`-Element verwendet, um einen Text innerhalb eines Zitats zu markieren, der für den Benutzer von besonderem Interesse ist.

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

### Identifizieren kontextabhängiger Passagen

Dieses Beispiel demonstriert die Verwendung von `<mark>`, um Suchergebnisse innerhalb einer Passage zu markieren.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen potenziellen Nutzungen zu unterscheiden, wendet dieses Beispiel die benutzerdefinierte Klasse `"match"` auf jeden Treffer an.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, wahrnehmbarer Inhalt.
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
