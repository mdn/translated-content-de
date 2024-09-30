---
title: "<strong>: Das Element für starke Bedeutung"
slug: Web/HTML/Element/strong
l10n:
  sourceCommit: e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{HTMLSidebar}}

Das **`<strong>`** [HTML](/de/docs/Web/HTML)-Element weist darauf hin, dass sein Inhalt von großer Bedeutung, Ernsthaftigkeit oder Dringlichkeit ist. Browser stellen die Inhalte typischerweise in Fettdruck dar.

{{EmbedInteractiveExample("pages/tabbed/strong.html", "tabbed-shorter")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<strong>`-Element ist für Inhalte gedacht, die von "starker Bedeutung" sind, einschließlich Dingen von großer Ernsthaftigkeit oder Dringlichkeit (wie Warnungen). Dies könnte ein Satz sein, der für die gesamte Seite von großer Bedeutung ist, oder Sie könnten lediglich versuchen, darauf hinzuweisen, dass einige Wörter im Vergleich zu den umgebenden Inhalten von größerer Bedeutung sind.

Typischerweise wird dieses Element standardmäßig in einer fetten Schriftart dargestellt. Es sollte jedoch _nicht_ verwendet werden, um fette Stilisierung anzuwenden; verwenden Sie dazu die CSS-{{cssxref("font-weight")}}-Eigenschaft. Verwenden Sie das {{HTMLElement("b")}}-Element, um auf bestimmten Text aufmerksam zu machen, ohne ein höheres Maß an Bedeutung anzuzeigen. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu kennzeichnen, der eine Hervorhebung des Stresses hat.

Eine weitere anerkannte Verwendung für `<strong>` ist, um die Bezeichnungen von Absätzen zu kennzeichnen, die Notizen oder Warnungen innerhalb des Textes einer Seite darstellen.

### \<b> vs. \<strong>

Es ist oft verwirrend für neue Entwickler, warum es so viele Möglichkeiten gibt, dasselbe auf einer gerenderten Website auszudrücken. {{HTMLElement("b")}} und `<strong>` sind möglicherweise eine der häufigsten Quellen der Verwirrung und veranlassen Entwickler zu fragen: "Soll ich `<b>` oder `<strong>` verwenden? Machen sie nicht beide dasselbe?"

Nicht ganz. Das `<strong>`-Element ist für Inhalte gedacht, die von größerer Bedeutung sind, während das `<b>`-Element verwendet wird, um auf den Text aufmerksam zu machen, ohne anzuzeigen, dass er wichtiger ist.

Es kann hilfreich sein zu wissen, dass beide gültige und semantische Elemente in HTML sind und es ein Zufall ist, dass sie beide in den meisten Browsern die gleiche Standardstilisierung (Fettdruck) haben (obwohl einige ältere Browser tatsächlich `<strong>` unterstreichen). Jedes Element ist dazu gedacht, in bestimmten Szenarien verwendet zu werden, und wenn Sie Text aus dekorativen Gründen fett machen möchten, sollten Sie stattdessen tatsächlich die CSS-{{cssxref("font-weight")}}-Eigenschaft verwenden.

Der beabsichtigte Sinn oder Zweck des enthaltenen Textes sollte bestimmen, welches Element verwendet wird. Bedeutungen zu kommunizieren, ist der Kern der Semantik.

### \<em> vs. \<strong>

Zur Verwirrung trägt bei, dass während HTML 4 `<strong>` als Indikator für eine stärkere Betonung definierte, HTML 5 `<strong>` als Darstellung von "starker Bedeutung für seine Inhalte" definiert. Dies ist ein wichtiger Unterschied.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes wie sprachliche Betonung zu ändern ("Ich _liebe_ Möhren" gegen "Ich liebe _Möhren_"), wird `<strong>` verwendet, um Teilen eines Satzes zusätzliche Bedeutung zu geben (z.B. "**Warnung!** Dies ist **sehr gefährlich.**"). Sowohl `<strong>` als auch `<em>` können verschachtelt werden, um die relative Bedeutung oder Betonung des Stresses zu erhöhen.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Before proceeding, <strong>make sure you put on your safety goggles</strong>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Markieren von Warnungen

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
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl einen Start- als auch einen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
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
