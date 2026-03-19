---
title: "<mark>: Das Mark Text-Element"
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: 17813cceb76950fea2acc1a39eb64ae3c57f038c
---

Das **`<mark>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Text, der für Referenz- oder Notationszwecke **markiert** oder **hervorgehoben** wird, da der markierte Abschnitt im umgebenden Kontext relevant ist.

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

Typische Anwendungsfälle für `<mark>` umfassen:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es in der Regel Text an, der von besonderem Interesse ist, aber nicht im Originalmaterial markiert ist, oder Material, das besondere Beachtung benötigt, obwohl der ursprüngliche Autor es nicht als besonders wichtig erachtete. Dies ist vergleichbar mit der Verwendung eines Textmarkers in einem Buch, um Passagen zu markieren, die Sie interessant finden.
- Andernfalls zeigt `<mark>` einen Teil des Inhalts des Dokuments an, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Dies könnte beispielsweise verwendet werden, um die Wörter zu kennzeichnen, die bei einer Suchoperation übereinstimmten.
- Verwenden Sie `<mark>` nicht für Syntaxhervorhebungszwecke; verwenden Sie stattdessen das {{HTMLElement("span")}}-Element mit entsprechend angewendetem CSS.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` wird verwendet, um Inhalt zu kennzeichnen, der einen Grad an _Relevanz_ hat, während `<strong>` Textabschnitte von _Bedeutung_ anzeigt.

## Barrierefreiheit

Die Anwesenheit des `mark`-Elements wird von den meisten Bildschirmlesetechnologien in ihrer Standardkonfiguration nicht angekündigt. Es kann so gestaltet werden, dass es angekündigt wird, indem die CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} verwendet wird.

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

Einige Personen, die Bildschirmleser verwenden, deaktivieren absichtlich die Ankündigung von Inhalten, die zusätzliche Redundanz erzeugen. Aus diesem Grund ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Fehlen der hervorgehobenen Inhalte das Verständnis erheblich beeinträchtigen würde.

- [Tweaking Text Level Styles, Reprised](https://adrianroselli.com/2025/04/tweaking-text-level-styles-reprised.html) via Adrian Roselli (2025)
- [Short note on making your mark (more accessible)](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/) via Vispero (2017)

## Beispiele

### Markieren von interessantem Text

In diesem ersten Beispiel wird ein `<mark>`-Element verwendet, um Text innerhalb eines Zitats zu markieren, der von besonderem Interesse für den Benutzer ist.

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

### Identifizieren kontextspezifischer Passagen

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen potenziellen Verwendungen zu unterscheiden, verwendet dieses Beispiel die benutzerdefinierte Klasse `"match"` für jede Übereinstimmung.

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
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
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
