---
title: "<mark>: Das Markierungstext-Element"
slug: Web/HTML/Element/mark
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<mark>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert Text, der aus Referenz- oder Notationsgründen als **markiert** oder **hervorgehoben** dargestellt wird, aufgrund der Relevanz des markierten Abschnitts im umgebenden Kontext.

{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Typische Anwendungsfälle für `<mark>` umfassen:

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, deutet es im Allgemeinen auf Text hin, der von besonderem Interesse ist, aber nicht im Originalmaterial markiert ist, oder Material, das besondere Aufmerksamkeit erfordert, auch wenn der ursprüngliche Autor es nicht als besonders wichtig erachtete. Dies ist vergleichbar mit der Verwendung eines Textmarkers in einem Buch, um Passagen zu markieren, die für Sie von Interesse sind.
- Ansonsten kennzeichnet `<mark>` einen Teil des Inhalts der Seite, der wahrscheinlich für die aktuelle Aktivität des Nutzers relevant ist. Dies könnte zum Beispiel verwendet werden, um die Wörter zu kennzeichnen, die mit einer Suchoperation übereinstimmen.
- Verwenden Sie `<mark>` nicht für Syntaxhervorhebungszwecke; verwenden Sie stattdessen das {{HTMLElement("span")}}-Element mit entsprechend angewendetem CSS.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` wird verwendet, um Inhalte zu kennzeichnen, die eine gewisse _Relevanz_ haben, während `<strong>` Textbereiche von _Bedeutung_ hervorhebt.

## Barrierefreiheit

Das Vorhandensein des `mark`-Elements wird von den meisten Screenreader-Technologien in ihrer Standardkonfiguration nicht angesagt. Es kann allerdings angekündigt werden, indem die CSS-Eigenschaft {{cssxref("content")}} zusammen mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} verwendet wird.

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

Einige Personen, die Screenreader benutzen, deaktivieren bewusst das Ankündigen von Inhalten, die zusätzliche Geschwätzigkeit erzeugen. Deshalb ist es wichtig, diese Technik nicht übermäßig zu verwenden und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte hervorgehoben wurden, das Verständnis negativ beeinflussen würde.

- [Kurze Anmerkung zum barrierefreieren Hervorheben | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Feinabstimmung von Textstil-Ebenen | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markierung interessanter Texte

Im ersten Beispiel wird ein `<mark>`-Element verwendet, um einen Text innerhalb eines Zitats zu markieren, der für den Benutzer von besonderem Interesse ist.

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

Dieses Beispiel zeigt, wie `<mark>` verwendet wird, um Suchergebnisse innerhalb eines Abschnitts zu kennzeichnen.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen potenziellen Verwendungen zu unterscheiden, wird in diesem Beispiel die benutzerdefinierte Klasse `"match"` auf jede Übereinstimmung angewandt.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
