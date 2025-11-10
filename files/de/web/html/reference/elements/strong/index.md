---
title: "<strong>: Das Element für starke Wichtigkeit"
slug: Web/HTML/Reference/Elements/strong
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<strong>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass sein Inhalt von großer Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit ist. Browser stellen den Inhalt typischerweise fett dar.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<strong>`-Element ist für Inhalte, die von "starker Wichtigkeit" sind, einschließlich solcher von großer Ernsthaftigkeit oder Dringlichkeit (wie Warnungen). Dies könnte ein Satz sein, der für die gesamte Seite von großer Bedeutung ist, oder es könnte einfach darauf hingewiesen werden, dass einige Wörter im Vergleich zu nahegelegenem Inhalt wichtiger sind.

Typischerweise wird dieses Element standardmäßig mit einer fetten Schriftart gerendert. Es sollte jedoch _nicht_ verwendet werden, um eine fette Formatierung anzuwenden; verwenden Sie dafür die CSS-Eigenschaft {{cssxref("font-weight")}}. Verwenden Sie das {{HTMLElement("b")}}-Element, um die Aufmerksamkeit auf bestimmten Text zu lenken, ohne eine höhere Bedeutung anzuzeigen. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu markieren, der betont wird.

Eine weitere akzeptierte Verwendung von `<strong>` ist die Kennzeichnung von Überschriften von Absätzen, die Notizen oder Warnungen im Text einer Seite darstellen.

### \<b> vs. \<strong>

Es ist oft verwirrend für neue Entwickler, warum es so viele Wege gibt, dasselbe auf einer gerenderten Website auszudrücken. {{HTMLElement("b")}} und `<strong>` sind vielleicht eine der häufigsten Verwirrungsquellen, die Entwickler fragen lässt, "Sollte ich `<b>` oder `<strong>` verwenden? Machen sie nicht beide dasselbe?"

Nicht ganz. Das `<strong>`-Element ist für Inhalte, die von größerer Bedeutung sind, während das `<b>`-Element verwendet wird, um die Aufmerksamkeit auf Text zu lenken, ohne anzuzeigen, dass er wichtiger ist.

Es kann helfen, sich klarzumachen, dass beide valide und semantische Elemente in HTML sind und dass es ein Zufall ist, dass sie beide in den meisten Browsern die gleiche Standardformatierung (fett) haben (obwohl einige ältere Browser tatsächlich `<strong>` unterstreichen). Jedes Element ist für bestimmte Szenarien gedacht, und wenn Sie Text zur Dekoration in Fett darstellen möchten, sollten Sie stattdessen wirklich die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden.

Die beabsichtigte Bedeutung oder der Zweck des eingeschlossenen Textes sollte bestimmen, welches Element Sie verwenden. Bedeutung zu kommunizieren ist das, worum es bei Semantik geht.

### \<em> vs. \<strong>

Zusätzlich zur Verwirrung kommt hinzu, dass, während HTML 4 `<strong>` als stärkere Betonung definierte, HTML 5 `<strong>` als Darstellung von "starker Wichtigkeit für seinen Inhalt" definiert. Dies ist ein wichtiger Unterschied, den es zu beachten gilt.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes durch gesprochene Betonung zu ändern ("Ich _liebe_ Karotten" vs. "Ich liebe _Karotten_"), wird `<strong>` verwendet, um Teilen eines Satzes zusätzliche Bedeutung zu verleihen (z. B., "**Achtung!** Das ist **sehr gefährlich.**"). Sowohl `<strong>` als auch `<em>` können geschachtelt werden, um den relativen Grad der Wichtigkeit oder Betonung zu erhöhen.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Before proceeding, <strong>make sure you put on your safety goggles</strong>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Warnungen beschriften

```html
<p>
  <strong>Important:</strong> Before proceeding, make sure you add plenty of
  butter.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Labeling_warnings", 650, 80)}}

## Technische Übersicht

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
          >Phrasierungselemente</a
        >, erfühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungselemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss ein Start-Tag und ein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungselemente</a
        > akzeptiert oder jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">strong</a
          ></code
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

## Siehe auch

- Das {{HTMLElement("b")}}-Element
- Das {{HTMLElement("em")}}-Element
- Die CSS-Eigenschaft {{cssxref("font-weight")}}
