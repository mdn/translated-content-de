---
title: "<strong>: Das Strong Importance-Element"
slug: Web/HTML/Element/strong
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<strong>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass sein Inhalt von großer Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit ist. Browser stellen den Inhalt typischerweise in Fettdruck dar.

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

## Nutzungshinweise

Das `<strong>`-Element ist für Inhalte gedacht, die von "großer Wichtigkeit" sind, einschließlich Dinge von großer Ernsthaftigkeit oder Dringlichkeit (wie Warnungen). Dies könnte ein Satz sein, der für die gesamte Seite von großer Bedeutung ist, oder lediglich ein Versuch, darauf hinzuweisen, dass einige Wörter im Vergleich zu nahem Inhalt von größerer Bedeutung sind.

Typischerweise wird dieses Element standardmäßig mit einer fetten Schriftart dargestellt. Es sollte jedoch _nicht_ verwendet werden, um fettgedrucktes Styling anzuwenden; nutzen Sie dafür die CSS-Eigenschaft {{cssxref("font-weight")}}. Verwenden Sie das {{HTMLElement("b")}}-Element, um auf bestimmten Text hinzuweisen, ohne ein höheres Maß an Bedeutung anzuzeigen. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu markieren, der eine Betonung des Ausdrucks hat.

Ein weiterer anerkannter Gebrauch für `<strong>` ist, Labels von Absätzen zu kennzeichnen, die Notizen oder Warnungen innerhalb des Textes einer Seite darstellen.

### \<b> vs. \<strong>

Es ist für neue Entwickler oft verwirrend, warum es so viele Möglichkeiten gibt, dasselbe auf einer gerenderten Webseite auszudrücken. {{HTMLElement("b")}} und `<strong>` sind möglicherweise eine der häufigsten Verwirrungsquellen, die Entwickler dazu bringen zu fragen: "Soll ich `<b>` oder `<strong>` verwenden? Erfüllen sie nicht beide denselben Zweck?"

Nicht genau. Das `<strong>`-Element ist für Inhalte, die von größerer Bedeutung sind, während das `<b>`-Element verwendet wird, um die Aufmerksamkeit auf Text zu lenken, ohne anzuzeigen, dass er wichtiger ist.

Es kann helfen zu verstehen, dass beide gültige und semantische Elemente in HTML sind und dass es ein Zufall ist, dass sie beide in den meisten Browsern in der gleichen Standarddarstellung (Fettdruck) erscheinen (obwohl einige ältere Browser `<strong>` tatsächlich unterstreichen). Jedes Element ist dazu bestimmt, in bestimmten Szenarien verwendet zu werden, und wenn Sie Text zur Dekoration fett hervorheben möchten, sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden.

Die beabsichtigte Bedeutung oder der Zweck des umschlossenen Textes sollte bestimmen, welches Element Sie verwenden. Die Bedeutung zu vermitteln ist das, worum es bei Semantik geht.

### \<em> vs. \<strong>

Zur Verwirrung trägt auch bei, dass während HTML 4 `<strong>` als stärkere Betonung definierte, HTML 5 `<strong>` als Darstellung "starker Wichtigkeit für seinen Inhalt" definiert. Dies ist ein wichtiger Unterschied.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes zu ändern, so wie gesprochene Betonung dies tut ("Ich _liebe_ Möhren" vs. "Ich liebe _Möhren_"), wird `<strong>` verwendet, um Teilen eines Satzes mehr Bedeutung zu verleihen (z.B. "**Warnung!** Dies ist **sehr gefährlich.**"). Sowohl `<strong>` als auch `<em>` können verschachtelt werden, um den relativen Grad der Bedeutung oder Betonung zu erhöhen.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Before proceeding, <strong>make sure you put on your safety goggles</strong>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Warnhinweise etikettieren

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierungstypischer Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierungstypischer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl ein Anfangstag als auch ein Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierungstypischen Inhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
- Die {{cssxref("font-weight")}}-Eigenschaft
