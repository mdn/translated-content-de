---
title: "<strong>: Das Element für starke Wichtigkeit"
slug: Web/HTML/Element/strong
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<strong>`**-[HTML](/de/docs/Web/HTML)-Element zeigt an, dass sein Inhalt hohe Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit besitzt. Browser rendern den Inhalt typischerweise in fetter Schrift.

{{InteractiveExample("HTML Demo: &lt;strong&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  ... the most important rule, the rule you can never forget, no matter how much
  he cries, no matter how much he begs:
  <strong>never feed him after midnight</strong>.
</p>
```

```css interactive-example
p {
  font-size: 1rem;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<strong>`-Element wird für Inhalte verwendet, die von "starker Wichtigkeit" sind, einschließlich Dingen von großer Ernsthaftigkeit oder Dringlichkeit (wie Warnungen). Dies kann ein Satz sein, der für die gesamte Seite von großer Bedeutung ist, oder Sie könnten lediglich versuchen, darauf hinzuweisen, dass einige Wörter im Vergleich zu nahen Inhalten von größerer Bedeutung sind.

Typischerweise wird dieses Element standardmäßig mit einer fetten Schriftart gerendert. Es sollte jedoch _nicht_ verwendet werden, um fette Darstellung anzuwenden; verwenden Sie dafür die CSS-Eigenschaft {{cssxref("font-weight")}}. Verwenden Sie das {{HTMLElement("b")}}-Element, um auf einen bestimmten Text aufmerksam zu machen, ohne ein höheres Maß an Wichtigkeit anzuzeigen. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu markieren, der eine Betonung darstellt.

Eine weitere akzeptierte Verwendung für `<strong>` ist die Kennzeichnung von Abschnitten, die Notizen oder Warnungen im Text einer Seite darstellen.

### \<b> vs. \<strong>

Es ist für neue Entwickler oft verwirrend, warum es so viele Möglichkeiten gibt, dasselbe auf einer gerenderten Website auszudrücken. {{HTMLElement("b")}} und `<strong>` sind vielleicht eine der häufigsten Verwirrungsquellen, die Entwickler dazu bringen zu fragen: "Soll ich `<b>` oder `<strong>` verwenden? Machen sie nicht beide dasselbe?"

Nicht genau. Das `<strong>`-Element ist für Inhalte, die von größerer Wichtigkeit sind, während das `<b>`-Element verwendet wird, um Text Aufmerksamkeit zu schenken, ohne anzuzeigen, dass er wichtiger ist.

Es kann hilfreich sein zu verstehen, dass beide in HTML gültige und semantische Elemente sind und dass es ein Zufall ist, dass sie beide in den meisten Browsern die gleiche Standardformatierung (fett) haben (obwohl einige ältere Browser `<strong>` tatsächlich unterstrichen). Jedes Element ist für bestimmte Arten von Szenarien gedacht, und wenn Sie Text zur Dekoration fett formatieren möchten, sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden.

Der beabsichtigte Sinn oder Zweck des eingeschlossenen Textes sollte bestimmen, welches Element Sie verwenden. Die Bedeutung zu kommunizieren, ist, worum es bei Semantik geht.

### \<em> vs. \<strong>

Hinzu kommt die Verwirrung darüber, dass HTML 4 `<strong>` als Hinweis auf eine stärkere Betonung definierte, während HTML 5 `<strong>` als Darstellung von "starker Wichtigkeit für seinen Inhalt" definiert. Dies ist ein wichtiger Unterschied, den es zu beachten gilt.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes zu ändern, wie es bei gesprochener Betonung der Fall ist ("Ich _liebe_ Karotten" vs. "Ich liebe _Karotten_"), wird `<strong>` verwendet, um Sätzen eine zusätzliche Bedeutung zu geben (z.B. "**Warnung!** Dies ist **sehr gefährlich.**"). Sowohl `<strong>` als auch `<em>` können verschachtelt werden, um den relativen Grad der Wichtigkeit bzw. der Betonen zu steigern.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Before proceeding, <strong>make sure you put on your safety goggles</strong>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Warnkennzeichnung

```html
<p>
  <strong>Important:</strong> Before proceeding, make sure you add plenty of
  butter.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Labeling_warnings", 650, 80)}}

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl ein Start- als auch ein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließende Inhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">strong</a
          ></code
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

## Siehe auch

- Das {{HTMLElement("b")}}-Element
- Das {{HTMLElement("em")}}-Element
- Die {{cssxref("font-weight")}}-Eigenschaft
