---
title: "`<mark>`: HTML-Element zum Markieren von Text"
short-title: <mark>
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Das **`<mark>`**-[HTML-Element](/de/docs/Web/HTML) stellt Text dar, der zu Referenz- oder Anmerkungszwecken **markiert** oder **hervorgehoben** wird, weil die betreffende Textstelle im umgebenden Kontext relevant ist.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Typische Anwendungsfälle für `<mark>` sind:

- Innerhalb eines Zitats ({{HTMLElement("q")}}) oder eines Blockzitats ({{HTMLElement("blockquote")}}) kennzeichnet es in der Regel Text, der von besonderem Interesse ist, aber im Original nicht markiert wurde, oder Text, der genauer betrachtet werden sollte, obwohl die ursprüngliche Autorin oder der ursprüngliche Autor ihn nicht für besonders wichtig hielt. Das ist vergleichbar damit, interessante Stellen in einem Buch mit einem Textmarker hervorzuheben.
- Ansonsten kennzeichnet `<mark>` einen Teil des Dokumentinhalts, der für die aktuelle Tätigkeit der nutzenden Person wahrscheinlich relevant ist. So können beispielsweise Wörter markiert werden, die einer Suchanfrage entsprechen.
- Verwenden Sie `<mark>` nicht zur Syntaxhervorhebung. Verwenden Sie stattdessen das Element {{HTMLElement("span")}} mit entsprechendem CSS.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem Element {{HTMLElement("strong")}}: `<mark>` kennzeichnet Inhalte mit einer gewissen _Relevanz_, während `<strong>` Textstellen von _Wichtigkeit_ kennzeichnet.

## Barrierefreiheit

Die meisten Screenreader geben das Vorhandensein des Elements `mark` in ihrer Standardkonfiguration nicht bekannt. Mithilfe der CSS-Eigenschaft {{cssxref("content")}} und der Pseudoelemente {{cssxref("::before")}} und {{cssxref("::after")}} lässt sich eine entsprechende Ansage ergänzen.

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

Manche Menschen, die Screenreader verwenden, deaktivieren bewusst die Ansage von Inhalten, die zu zusätzlichen Ausgaben führen. Setzen Sie diese Technik daher sparsam und nur dann ein, wenn die fehlende Information über eine Hervorhebung das Verständnis beeinträchtigen würde.

- [Tweaking Text Level Styles, Reprised](https://adrianroselli.com/2025/04/tweaking-text-level-styles-reprised.html) von Adrian Roselli (2025)

## Beispiele

### Interessante Textstellen markieren

In diesem ersten Beispiel wird ein `<mark>`-Element verwendet, um eine Textstelle innerhalb eines Zitats zu markieren, die für die nutzende Person von besonderem Interesse ist.

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

### Kontextabhängige Textstellen kennzeichnen

Dieses Beispiel zeigt, wie `<mark>` verwendet wird, um Suchergebnisse innerhalb einer Textpassage zu markieren.

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

Um die Verwendung von `<mark>` für Suchergebnisse von anderen Einsatzmöglichkeiten zu unterscheiden, weist dieses Beispiel jedem Treffer die benutzerdefinierte Klasse `"match"` zu.

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
          >formulierender Inhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >formulierenden Inhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Alle</td>
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
