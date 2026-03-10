---
title: "<mark>: Das Mark-Text-Element"
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Das **`<mark>`** [HTML](/de/docs/Web/HTML) Element repräsentiert Text, der **markiert** oder **hervorgehoben** ist, um auf eine Bedeutung oder Referenz hinzuweisen, die im Kontext des umgebenden Textes relevant ist.

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

## Verwendungshinweise

Typische Anwendungsfälle für `<mark>` umfassen:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es in der Regel Text an, der von besonderem Interesse ist, aber nicht im ursprünglichen Quellenmaterial markiert ist, oder Material, das besondere Prüfung benötigt, auch wenn der ursprüngliche Autor es nicht für besonders wichtig hielt. Dies ist vergleichbar mit der Verwendung eines Textmarkers in einem Buch, um Passagen zu markieren, die für Sie von Interesse sind.
- Ansonsten zeigt `<mark>` einen Teil des Inhalts eines Dokuments an, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Es könnte beispielsweise verwendet werden, um die Wörter hervorzuheben, die bei einer Suchoperation übereinstimmten.
- Verwenden Sie `<mark>` nicht für Syntaxhervorhebungszwecke; stattdessen sollte das {{HTMLElement("span")}} Element mit entsprechender CSS-Anwendung verwendet werden.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}} Element; `<mark>` wird verwendet, um Inhalte zu kennzeichnen, die einen gewissen Grad an _Relevanz_ haben, während `<strong>` Textabschnitte von _Wichtigkeit_ anzeigt.

## Barrierefreiheit

Das Vorhandensein des `mark` Elements wird von den meisten Screenreader-Technologien in ihrer Standardkonfiguration nicht angekündigt. Es kann jedoch angekündigt werden, indem man die CSS {{cssxref("content")}}-Eigenschaft zusammen mit den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelementen verwendet.

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

Einige Menschen, die Screenreader verwenden, deaktivieren bewusst die Ankündigung von Inhalten, die zusätzliche Wortfülle schaffen. Daher ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte hervorgehoben wurden, das Verständnis beeinträchtigen würde.

- [Short note on making your mark (more accessible) | Vispero](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markieren von interessantem Text

Im ersten Beispiel wird ein `<mark>` Element verwendet, um in einem Zitat Text zu markieren, der für den Benutzer von besonderem Interesse ist.

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

Dieses Beispiel zeigt, wie `<mark>` verwendet wird, um Suchergebnisse innerhalb eines Abschnitts zu markieren.

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

Um die Verwendung von `<mark>` für Suchergebnisse gegenüber anderen potenziellen Anwendungen zu unterscheiden, wendet dieses Beispiel die benutzerdefinierte Klasse `"match"` auf jede Übereinstimmung an.

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
          >Phrasierungsinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
