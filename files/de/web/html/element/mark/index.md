---
title: "<mark>: Das Mark-Text-Element"
slug: Web/HTML/Element/mark
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<mark>`** [HTML](/de/docs/Web/HTML)-Element stellt Text dar, der aus Referenz- oder Notationsgründen **markiert** oder **hervorgehoben** ist, aufgrund der Relevanz der markierten Passage im umgebenden Kontext.

{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Typische Anwendungsfälle für `<mark>` umfassen:

- Bei Verwendung in einem Zitat ({{HTMLElement("q")}}) oder Blockzitat ({{HTMLElement("blockquote")}}) weist es in der Regel auf Text hin, der von besonderem Interesse ist, aber im Originalmaterial nicht markiert ist, oder Material, das besondere Aufmerksamkeit erfordert, obwohl der ursprüngliche Autor es nicht für besonders wichtig hielt. Dies ist vergleichbar mit dem Verwenden eines Textmarkers, um Passagen in einem Buch zu markieren, die Sie interessant finden.
- Andernfalls kennzeichnet `<mark>` einen Teil des Dokumenteninhalts, der wahrscheinlich für die aktuelle Aktivität des Benutzers relevant ist. Dies könnte zum Beispiel verwendet werden, um die Wörter zu kennzeichnen, die bei einer Suchoperation übereinstimmen.
- Verwenden Sie `<mark>` nicht zu Syntax-Hervorhebungszwecken; verwenden Sie stattdessen das {{HTMLElement("span")}}-Element mit entsprechend angewendetem CSS.

> [!NOTE]
> Verwechseln Sie `<mark>` nicht mit dem {{HTMLElement("strong")}}-Element; `<mark>` wird verwendet, um Inhalte zu kennzeichnen, die eine gewisse _Relevanz_ haben, während `<strong>` Textstellen von _Bedeutung_ hervorhebt.

## Barrierefreiheit

Das Vorhandensein des `mark`-Elements wird von den meisten Screenreader-Technologien in ihrer Standardkonfiguration nicht angekündigt. Es kann jedoch durch die Verwendung der CSS-Eigenschaft {{cssxref("content")}} sowie der Pseudoelemente {{cssxref("::before")}} und {{cssxref("::after")}} angekündigt werden.

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

Einige Personen, die Screenreader verwenden, deaktivieren absichtlich die Ankündigung von Inhalten, die zu weiterer Wortfülle führen. Aufgrund dessen ist es wichtig, diese Technik nicht zu missbrauchen und sie nur in Situationen anzuwenden, in denen das Nichtwissen, dass Inhalte hervorgehoben wurden, das Verständnis beeinträchtigen würde.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Beispiele

### Markieren von interessantem Text

Im ersten Beispiel wird ein `<mark>`-Element verwendet, um einen Text in einem Zitat zu markieren, der für den Benutzer von besonderem Interesse ist.

```html
<blockquote>
  Es ist eine Zeit des Bürgerkriegs. Rebellenraumschiffe, die von einer
  versteckten Basis aus zuschlagen, haben ihren ersten Sieg gegen das böse
  Galaktische Imperium errungen. Während der Schlacht ist es
  <mark>Rebellen-Spionen gelungen, geheime Pläne</mark> der ultimativen Waffe des
  Imperiums zu stehlen, des TODESSTERN, einer gepanzerten Raumstation mit genug
  Kraft, um einen ganzen Planeten zu zerstören.
</blockquote>
```

#### Ergebnis

{{EmbedLiveSample("Marking_text_of_interest", 650, 130)}}

### Identifizieren kontextsensitiver Passagen

Dieses Beispiel zeigt die Verwendung von `<mark>`, um Suchergebnisse innerhalb eines Abschnitts zu markieren.

```html
<p>
  Es ist eine dunkle Zeit für die Rebellion. Obwohl der Todesstern zerstört
  wurde, haben <mark class="match">imperiale</mark> Truppen die Rebellenkräfte
  von ihrer versteckten Basis vertrieben und quer durch die Galaxie verfolgt.
</p>

<p>
  Durch die gefürchtete <mark class="match">imperiale</mark> Sternenflotte
  ausweichend, haben Freiheitskämpfer unter der Führung von Luke Skywalker eine
  neue geheime Basis auf dem abgelegenen Eisplaneten Hoth errichtet.
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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierenden Inhalt</a
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
