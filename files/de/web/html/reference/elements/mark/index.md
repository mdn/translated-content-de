---
title: "`<mark>` HTML-Markierungselement"
short-title: <mark>
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<mark>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert Text, der **markiert** oder **hervorgehoben** ist, um auf die Relevanz des markierten Abschnitts im umgebenden Kontext hinzuweisen.

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

- Wenn es in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) verwendet wird, zeigt es in der Regel Text an, der von besonderem Interesse ist, aber im ursprünglichen Quellenmaterial nicht markiert ist, oder Material, das besondere Beachtung benötigt, auch wenn der ursprüngliche Autor es nicht für besonders wichtig hielt. Man kann es sich ähnlich wie einen Textmarker in einem Buch vorstellen, mit dem Passagen markiert werden, die von Interesse sind.
- Ansonsten zeigt `<mark>` einen Abschnitt des Inhalts des Dokuments an, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Dies könnte beispielsweise verwendet werden, um die Wörter anzugeben, die mit einem Suchvorgang übereinstimmen.
- Verwenden Sie `<mark>` nicht für Syntaxhervorhebung; verwenden Sie stattdessen das {{HTMLElement("span")}}-Element mit entsprechend angewendetem CSS.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` dient zur Kennzeichnung von Inhalten mit einem gewissen Grad an _Relevanz_, während `<strong>` Textstellen von _Wichtigkeit_ kennzeichnet.

## Barrierefreiheit

Das Vorhandensein des `mark`-Elements wird von den meisten Bildschirmlesegeräten in der Standardeinstellung nicht angekündigt. Es kann durch die Verwendung der CSS-{{cssxref("content")}}-Eigenschaft zusammen mit den Pseudo-Elementen {{cssxref("::before")}} und {{cssxref("::after")}} angekündigt werden.

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

Einige Personen, die Bildschirmlesegeräte nutzen, deaktivieren absichtlich die Ankündigung von Inhalten, die zusätzliche Wortfülle erzeugen. Deshalb ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen ein fehlender Hinweis darauf, dass Inhalte hervorgehoben wurden, das Verständnis negativ beeinflussen würde.

- [Tweaking Text Level Styles, Reprised](https://adrianroselli.com/2025/04/tweaking-text-level-styles-reprised.html) von Adrian Roselli (2025)
- [Kurzer Hinweis zur besseren Barrierefreiheit Ihrer Markierungen](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/) von Vispero (2017)

## Beispiele

### Markierung eines interessanten Textes

In diesem ersten Beispiel wird ein `<mark>`-Element verwendet, um Text innerhalb eines Zitats zu markieren, das für den Benutzer von besonderem Interesse ist.

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

### Markierung kontextsensitiver Abschnitte

Dieses Beispiel zeigt die Verwendung von `<mark>`, um Suchergebnisse innerhalb eines Abschnitts zu markieren.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen möglichen Anwendungen zu unterscheiden, erhält jedes Übereinstimmungsergebnis die benutzerdefinierte Klasse `"match"`.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Strukturierter Inhalt</a
        >, erkennbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Strukturierter Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >strukturierten Inhalt</a
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
