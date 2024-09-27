---
title: "<strong>: Das Strong Importance-Element"
slug: Web/HTML/Element/strong
l10n:
  sourceCommit: e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{HTMLSidebar}}

Das **`<strong>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass sein Inhalt von starker Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit ist. Browser rendern den Inhalt typischerweise in Fettdruck.

{{EmbedInteractiveExample("pages/tabbed/strong.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<strong>`-Element ist für Inhalte gedacht, die von "starker Wichtigkeit" sind, einschließlich Dingen von großer Ernsthaftigkeit oder Dringlichkeit (wie Warnungen). Dies könnte ein Satz sein, der für die gesamte Seite von großer Bedeutung ist, oder Sie könnten lediglich darauf hinweisen, dass einige Wörter im Vergleich zum umgebenden Inhalt von größerer Bedeutung sind.

Typischerweise wird dieses Element standardmäßig in einer fetten Schriftart gerendert. Es sollte jedoch _nicht_ verwendet werden, um eine fette Formatierung anzuwenden; verwenden Sie dafür die CSS-{{cssxref("font-weight")}}-Eigenschaft. Verwenden Sie das {{HTMLElement("b")}}-Element, um bestimmten Text hervorzuheben, ohne ein höheres Maß an Wichtigkeit anzugeben. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu markieren, der eine betonende Hervorhebung hat.

Eine weitere anerkannte Verwendung für `<strong>` ist die Kennzeichnung von Labels für Absätze, die im Text einer Seite Hinweise oder Warnungen darstellen.

### \<b> vs. \<strong>

Für neue Entwickler ist es oft verwirrend, warum es so viele Möglichkeiten gibt, dasselbe auf einer gerenderten Website auszudrücken. {{HTMLElement("b")}} und `<strong>` sind vielleicht eine der häufigsten Verwirrungsquellen, die Entwickler dazu bringt, zu fragen: "Soll ich `<b>` oder `<strong>` verwenden? Machen sie nicht beide dasselbe?"

Nicht genau. Das `<strong>`-Element ist für Inhalte, die von größerer Bedeutung sind, während das `<b>`-Element verwendet wird, um Text Aufmerksamkeit zu verleihen, ohne darauf hinzuweisen, dass er wichtiger ist.

Es kann hilfreich sein zu erkennen, dass beide gültige und semantische Elemente in HTML sind und dass es ein Zufall ist, dass sie in den meisten Browsern beide die gleiche Standardformatierung (Fettdruck) haben (obwohl einige ältere Browser `<strong>` tatsächlich unterstrichen). Jedes Element soll in bestimmten Szenarien verwendet werden, und wenn Sie Text aus dekorativen Gründen fett darstellen möchten, sollten Sie stattdessen tatsächlich die CSS-{{cssxref("font-weight")}}-Eigenschaft verwenden.

Die beabsichtigte Bedeutung oder der Zweck des eingeschlossenen Textes sollte bestimmen, welches Element Sie verwenden. Die Kommunikation von Bedeutungen ist das, worum es bei Semantik geht.

### \<em> vs. \<strong>

Zur Verwirrung trägt bei, dass während HTML 4 `<strong>` als stärkere Betonung definierte, HTML 5 `<strong>` als Darstellung "starker Wichtigkeit für seinen Inhalt" definiert. Dies ist ein wichtiger Unterschied.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes zu ändern, wie es eine gesprochene Betonung tut ("I _love_ carrots" vs. "I love _carrots_"), wird `<strong>` verwendet, um Teilen eines Satzes zusätzliche Wichtigkeit zu verleihen (z.B. "**Warning!** This is **very dangerous.**"). Sowohl `<strong>` als auch `<em>` können geschachtelt werden, um den relativen Grad der Wichtigkeit oder der betonenden Hervorhebung zu erhöhen.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Before proceeding, <strong>make sure you put on your safety goggles</strong>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Warnhinweise kennzeichnen

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, palpable content.
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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl ein Start- als auch ein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > zulässt, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">strong</a
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
