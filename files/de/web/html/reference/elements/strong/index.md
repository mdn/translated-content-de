---
title: "<strong>: Das Element für starke Wichtigkeit"
slug: Web/HTML/Reference/Elements/strong
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<strong>`**-Element in [HTML](/de/docs/Web/HTML) weist darauf hin, dass sein Inhalt von starker Wichtigkeit, Ernsthaftigkeit oder Dringlichkeit ist. Browser stellen den Inhalt typischerweise in Fettschrift dar.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<strong>`-Element ist für Inhalte gedacht, die von "starker Wichtigkeit" sind, einschließlich Dingen von großer Ernsthaftigkeit oder Dringlichkeit (wie z.B. Warnungen). Dies könnte ein Satz sein, der für die gesamte Seite von großer Bedeutung ist, oder Sie könnten lediglich darauf hinweisen, dass einige Wörter im Vergleich zu benachbarten Inhalten von größerer Bedeutung sind.

Typischerweise wird dieses Element standardmäßig in einer fetten Schriftart dargestellt. Es sollte jedoch _nicht_ zum Anwenden von Fettschrift-Styling verwendet werden; hierfür sollte die CSS-Eigenschaft {{cssxref("font-weight")}} genutzt werden. Verwenden Sie das {{HTMLElement("b")}}-Element, um bestimmte Texte hervorzuheben, ohne ein höheres Wichtigkeitsniveau anzuzeigen. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu kennzeichnen, der eine Betonung aufweist.

Eine weitere akzeptierte Verwendung von `<strong>` ist die Kennzeichnung von Absätzen, die Anmerkungen oder Warnungen innerhalb des Textes einer Seite darstellen.

### \<b> vs. \<strong>

Für neue Entwickler ist es oft verwirrend, warum es so viele Möglichkeiten gibt, dasselbe auf einer gerenderten Website auszudrücken. {{HTMLElement("b")}} und `<strong>` sind vielleicht eine der häufigsten Quellen der Verwirrung, die Entwickler zu der Frage veranlassen: "Sollte ich `<b>` oder `<strong>` verwenden? Machen sie nicht beide dasselbe?"

Nicht genau. Das `<strong>`-Element ist für Inhalte von größerer Wichtigkeit gedacht, während das `<b>`-Element verwendet wird, um auf Text aufmerksam zu machen, ohne anzuzeigen, dass er wichtiger ist.

Es kann helfen zu verstehen, dass beide gültige und semantische Elemente in HTML sind und dass es ein Zufall ist, dass sie beide in den meisten Browsern die gleiche Standarddarstellung (Fettschrift) haben (obwohl einige ältere Browser `<strong>` tatsächlich unterstreichen). Jedes Element soll in bestimmten Szenarien verwendet werden, und wenn Sie Text zur Dekoration fett darstellen möchten, sollten Sie stattdessen tatsächlich die CSS-Eigenschaft {{cssxref("font-weight")}} verwenden.

Der beabsichtigte Sinn oder Zweck des eingeschlossenen Textes sollte bestimmen, welches Element Sie verwenden. Bedeutung zu kommunizieren, darum geht es bei Semantik.

### \<em> vs. \<strong>

Zur Verwirrung trägt bei, dass während HTML 4 `<strong>` als Indikator für eine stärkere Betonung definierte, HTML 5 `<strong>` als Darstellung von "starker Wichtigkeit für seinen Inhalt" definiert. Dies ist eine wichtige Differenzierung.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes zu ändern, so wie gesprochene Betonung es tut ("Ich _liebe_ Karotten" vs. "Ich liebe _Karotten_"), wird `<strong>` verwendet, um Teilen eines Satzes zusätzliche Wichtigkeit zu verleihen (z.B., "**Achtung!** Dies ist **sehr gefährlich.**"). Sowohl `<strong>` als auch `<em>` können geschachtelt werden, um den relativen Grad der Wichtigkeit bzw. der Betonung zu erhöhen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; es muss sowohl ein Start- als auch ein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        > oder
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalte</a
        > erlaubt.
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

## Siehe auch

- Das {{HTMLElement("b")}}-Element
- Das {{HTMLElement("em")}}-Element
- Die {{cssxref("font-weight")}}-Eigenschaft
