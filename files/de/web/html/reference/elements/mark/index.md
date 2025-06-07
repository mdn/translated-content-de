---
title: "<mark>: Das Mark-Text-Element"
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<mark>`**-Element im [HTML](/de/docs/Web/HTML) stellt Text dar, der **markiert** oder **hervorgehoben** ist, um aus Referenz- oder Notationsgründen auf die Relevanz der markierten Passage im umgebenden Kontext hinzuweisen.

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

## Nutzungshinweise

Typische Anwendungsfälle für `<mark>` beinhalten:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder einem Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es in der Regel Text an, der von besonderem Interesse ist, aber im Originalmaterial nicht markiert ist, oder Material, das besonderer Aufmerksamkeit bedarf, auch wenn der ursprüngliche Autor es nicht als besonders wichtig erachtete. Denken Sie daran wie ein Textmarker in einem Buch, um Passagen zu markieren, die Sie für interessant halten.
- Ansonsten kennzeichnet `<mark>` einen Teil des Inhalts des Dokuments, der für die aktuelle Aktivität des Benutzers relevant sein könnte. Es könnte beispielsweise verwendet werden, um die Wörter anzuzeigen, die einer Suchoperation entsprechen.
- Verwenden Sie `<mark>` nicht für die Syntaxhervorhebung; stattdessen verwenden Sie das {{HTMLElement("span")}}-Element mit entsprechend angewendetem CSS.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` wird verwendet, um Inhalte mit einem Grad an _Relevanz_ zu kennzeichnen, während `<strong>` Textbereiche von _Bedeutung_ anzeigt.

## Barrierefreiheit

Das Vorhandensein des `mark`-Elements wird von den meisten Bildschirmlesetechnologien in der Standardeinstellung nicht angekündigt. Es kann so eingestellt werden, dass es angekündigt wird, indem die CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} verwendet wird.

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

Einige Benutzer von Bildschirmlesern deaktivieren absichtlich die Ankündigung von Inhalten, die zusätzliche Redundanz schaffen. Deshalb ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte hervorgehoben wurden, das Verständnis nachteilig beeinflussen würde.

- [Kurze Notiz zur besseren Zugänglichkeit Ihres Marks | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Anpassung von Textstil-Ebenen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markierung von interessantem Text

Im ersten Beispiel wird ein `<mark>`-Element verwendet, um einige Texte innerhalb eines Zitats zu markieren, die für den Benutzer von besonderem Interesse sind.

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

### Kontextsensitive Passagen identifizieren

Dieses Beispiel demonstriert die Verwendung von `<mark>`, um Suchergebnisse innerhalb eines Abschnitts zu markieren.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen möglichen Verwendungen zu unterscheiden, wird in diesem Beispiel die benutzerdefinierte Klasse `"match"` auf jedes Ergebnis angewendet.

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
          >Formulierung von Inhalten</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierung von Inhalten</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierung von Inhalten</a
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
