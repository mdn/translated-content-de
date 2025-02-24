---
title: "<mark>: Das Mark Text-Element"
slug: Web/HTML/Element/mark
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<mark>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Text, der **markiert** oder **hervorgehoben** ist, um ihn aufgrund seiner Relevanz im umgebenden Kontext zu kennzeichnen oder zu notieren.

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
/* stylelint-disable-next-line block-no-empty */
mark {
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Typische Anwendungsfälle für `<mark>` beinhalten:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es in der Regel Text an, der von besonderem Interesse ist, aber nicht im Originalmaterial markiert ist, oder Material, das besondere Aufmerksamkeit erfordert, auch wenn der ursprüngliche Autor es nicht für besonders wichtig hielt. Dies ist vergleichbar mit der Verwendung eines Textmarkers in einem Buch, um Passagen zu markieren, die für einen selbst von Interesse sind.
- Ansonsten zeigt `<mark>` einen Teil des Inhalts des Dokuments an, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Dies kann beispielsweise verwendet werden, um die Wörter zu kennzeichnen, die bei einer Suchoperation übereinstimmten.
- Verwenden Sie `<mark>` nicht für Syntax-Hervorhebungen; verwenden Sie stattdessen das {{HTMLElement("span")}}-Element mit entsprechender CSS-Anwendung.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` wird verwendet, um Inhalte zu kennzeichnen, die eine gewisse _Relevanz_ haben, während `<strong>` Textspannen von _Bedeutung_ kennzeichnet.

## Barrierefreiheit

Die Anwesenheit des `mark`-Elements wird von den meisten Bildschirmlesetechnologien in ihrer Standardkonfiguration nicht angekündigt. Es kann jedoch angekündigt werden, indem die CSS-{{cssxref("content")}}-Eigenschaft zusammen mit den {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elementen verwendet wird.

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

Einige Menschen, die Bildschirmlesegeräte nutzen, deaktivieren absichtlich die Ankündigung von Inhalten, die zusätzliche Redundanz erzeugen. Aufgrund dessen ist es wichtig, diese Technik nicht missbräuchlich zu verwenden und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte hervorgehoben wurden, das Verständnis negativ beeinflussen würde.

- [Kurze Notiz zur Verbesserung der Barrierefreiheit von Markierungen | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Feineinstellungen bei Textstilarbeiten | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markierung von interessanten Textstellen

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

### Identifizierung kontextsensitiver Passagen

Dieses Beispiel demonstriert die Verwendung von `<mark>`, um Suchergebnisse in einem Textabschnitt zu markieren.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen potenziellen Nutzungen zu unterscheiden, wendet dieses Beispiel die benutzerdefinierte Klasse `"match"` auf jedes Ergebnis an.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > zulässt.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
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
