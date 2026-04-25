---
title: "`<strong>` HTML starkes Wichtigkeitselement"
short-title: <strong>
slug: Web/HTML/Reference/Elements/strong
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<strong>`** [HTML](/de/docs/Web/HTML)-Element gibt an, dass sein Inhalt starke Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit hat. Browser rendern den Inhalt typischerweise in Fettschrift.

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

Das `<strong>`-Element ist für Inhalte gedacht, die von "starker Wichtigkeit" sind, einschließlich Dinge von großer Ernsthaftigkeit oder Dringlichkeit (wie Warnungen). Dies könnte ein Satz sein, der für die gesamte Seite von großer Bedeutung ist, oder Sie könnten lediglich darauf hinweisen, dass einige Wörter im Vergleich zum nahen Inhalt von größerer Bedeutung sind.

Typischerweise wird dieses Element standardmäßig mit einem fetten Schriftgewicht gerendert. Es sollte jedoch _nicht_ verwendet werden, um Fettformatierungen anzuwenden; dafür verwenden Sie die CSS-Eigenschaft {{cssxref("font-weight")}}. Verwenden Sie das {{HTMLElement("b")}}-Element, um bestimmten Text hervorzuheben, ohne ein höheres Maß an Bedeutung anzuzeigen. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu markieren, der eine betonte Betonung aufweist.

Eine weitere akzeptierte Verwendung für `<strong>` ist die Bezeichnung von Beschriftungen von Absätzen, die Notizen oder Warnungen im Text einer Seite darstellen.

### \<b> vs. \<strong>

Es ist oft verwirrend für neue Entwickler, warum es so viele Möglichkeiten gibt, dasselbe auf einer gerenderten Webseite auszudrücken. {{HTMLElement("b")}} und `<strong>` sind möglicherweise eine der häufigsten Quellen von Verwirrung und führen dazu, dass Entwickler fragen: "Sollte ich `<b>` oder `<strong>` verwenden? Machen sie nicht beide dasselbe?"

Nicht ganz. Das `<strong>`-Element ist für Inhalte von größerer Bedeutung, während das `<b>`-Element verwendet wird, um auf Text aufmerksam zu machen, ohne darauf hinzuweisen, dass er wichtiger ist.

Es kann hilfreich sein, sich klarzumachen, dass beide gültige und semantische Elemente in HTML sind und dass es ein Zufall ist, dass sie beide in den meisten Browsern die gleiche Standardformatierung (Fettschrift) haben (obwohl einige ältere Browser `<strong>` tatsächlich unterstreichen). Jedes Element ist dafür gedacht, in bestimmten Szenarien verwendet zu werden, und wenn Sie Text aus dekorativen Gründen fett hervorheben möchten, sollten Sie stattdessen tatsächlich die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden.

Die beabsichtigte Bedeutung oder der Zweck des eingeschlossenen Textes sollte bestimmen, welches Element Sie verwenden. Bedeutungen zu vermitteln, ist das, worum es bei Semantik geht.

### \<em> vs. \<strong>

Zur Verwirrung trägt bei, dass HTML 4 `<strong>` als stärkere Betonung definiert hat, während HTML 5 `<strong>` als Darstellung von "starker Wichtigkeit für seinen Inhalt" definiert. Dies ist ein wichtiger Unterschied.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes zu ändern, wie es die gesprochene Betonung tut ("Ich _liebe_ Karotten" vs. "Ich liebe _Karotten_"), wird `<strong>` verwendet, um Teilen eines Satzes zusätzliche Bedeutung zu verleihen (z.B. "**Achtung!** Dies ist **sehr gefährlich.**"). Sowohl `<strong>` als auch `<em>` können verschachtelt werden, um den relativen Grad der Bedeutung oder der betonten Betonung zu erhöhen.

## Beispiele

### Grundlegendes Beispiel

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
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
      <td>Keine; muss sowohl ein Anfangs- als auch ein Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
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
- Die {{cssxref("font-weight")}}-Eigenschaft
