---
title: "<mark>: Das Markierungstext-Element"
slug: Web/HTML/Element/mark
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{HTMLSidebar}}

Das **`<mark>`**-[HTML](/de/docs/Web/HTML)-Element steht für Text, der **markiert** oder **hervorgehoben** ist, um auf seine Relevanz im umgebenden Kontext hinzuweisen oder ihn für Notationszwecke kenntlich zu machen.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Typische Anwendungsfälle für `<mark>` umfassen:

- Bei der Verwendung in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) wird normalerweise Text hervorgehoben, der von besonderem Interesse ist, aber im ursprünglichen Material nicht markiert war, oder Material, das besondere Aufmerksamkeit erfordert, obwohl der ursprüngliche Autor es nicht für besonders wichtig hielt. Das ist vergleichbar mit einem Textmarker, mit dem Sie in einem Buch Passagen markieren, die Sie interessant finden.
- Ansonsten zeigt `<mark>` einen Abschnitt des Inhalts des Dokuments an, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Dies könnte beispielsweise verwendet werden, um die Wörter zu kennzeichnen, die bei einer Suchoperation übereinstimmen.
- Verwenden Sie `<mark>` nicht für Syntax-Hervorhebungszwecke; stattdessen verwenden Sie das {{HTMLElement("span")}}-Element mit entsprechender CSS-Anwendung.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` kennzeichnet Inhalte, die eine gewisse _Relevanz_ haben, während `<strong>` Abschnitte von Text angibt, die _wichtig_ sind.

## Barrierefreiheit

Das Vorhandensein des `mark`-Elements wird in den meisten Bildschirmleseprogrammen in der Standardeinstellung nicht angekündigt. Es kann durch die Verwendung der CSS-{{cssxref("content")}}-Eigenschaft zusammen mit den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelementen angekündigt werden.

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

Einige Personen, die Bildschirmleser verwenden, deaktivieren absichtlich das Ankündigen von Inhalten, um zusätzliche Wortlastigkeit zu vermeiden. Aus diesem Grund ist es wichtig, diese Technik nicht übermäßig zu verwenden und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte hervorgehoben wurden, das Verständnis beeinträchtigen würde.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Hervorheben von besonders interessanten Texten

Im ersten Beispiel wird ein `<mark>`-Element verwendet, um innerhalb eines Zitats einen Textabschnitt zu markieren, der für den Benutzer von besonderem Interesse ist.

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

### Kennzeichnung kontextsensitiver Passagen

Dieses Beispiel zeigt die Verwendung von `<mark>`, um Suchergebnisse innerhalb einer Passage hervorzuheben.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen potenziellen Verwendungen zu unterscheiden, wendet dieses Beispiel die benutzerdefinierte Klasse `"match"` auf jede Übereinstimmung an.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
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
      <td>Jede</td>
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
