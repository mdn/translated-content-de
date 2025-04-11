---
title: "<em>: Das betonte Element"
slug: Web/HTML/Reference/Elements/em
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<em>`** [HTML](/de/docs/Web/HTML)-Element markiert Text, der betont wird. Das `<em>`-Element kann geschachtelt werden, wobei jede Verschachtelungsebene ein höheres Maß an Betonung anzeigt.

{{InteractiveExample("HTML Demo: &lt;em&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

```css interactive-example
em {
  /* Add your styles here */
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<em>`-Element ist für Wörter gedacht, die im Vergleich zum umgebenden Text eine betonte Betonung haben. Dies bezieht sich häufig auf ein Wort oder Wörter eines Satzes und beeinflusst die Bedeutung des Satzes selbst.

Typischerweise wird dieses Element in kursiver Schrift angezeigt. Es sollte jedoch nicht verwendet werden, um eine kursive Formatierung anzuwenden; hierfür verwenden Sie die CSS-Eigenschaft {{cssxref("font-style")}}. Verwenden Sie das {{HTMLElement("cite")}}-Element, um den Titel eines Werkes (Buch, Theaterstück, Lied usw.) zu kennzeichnen. Verwenden Sie das {{HTMLElement("i")}}-Element, um Text zu markieren, der in einem alternativen Ton oder einer anderen Stimmung steht, was viele übliche Situationen für Kursivschrift abdeckt, wie wissenschaftliche Namen oder Wörter in anderen Sprachen. Verwenden Sie das {{HTMLElement("strong")}}-Element, um Text zu markieren, der im Vergleich zum umgebenden Text größere Wichtigkeit hat.

### \<i> vs. \<em>

Einige Entwickler können verwirrt sein, dass mehrere Elemente scheinbar ähnliche visuelle Ergebnisse produzieren. `<em>` und `<i>` sind ein häufiges Beispiel, da sie beide Text kursiv darstellen. Was ist der Unterschied? Welches sollen Sie verwenden?

Standardmäßig ist das visuelle Ergebnis dasselbe. Der semantische Unterschied besteht jedoch. Das `<em>`-Element repräsentiert die betonte Betonung seines Inhalts, während das `<i>`-Element Text darstellt, der von der normalen Prosa abgegrenzt ist, wie ein fremdes Wort, die Gedanken eines fiktiven Charakters oder wenn der Text sich auf die Definition eines Wortes bezieht, anstatt seine semantische Bedeutung darzustellen. (Der Titel eines Werkes, wie der Name eines Buches oder eines Films, sollte `<cite>` verwenden.)

Das bedeutet, dass das jeweils richtige Element je nach Situation verwendet werden sollte. Keines von beiden ist für rein dekorative Zwecke geeignet, dafür ist das CSS-Styling zuständig.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die Worte in Kursivschrift mit einer Hervorhebung aussprechen, indem sie verbalen Stress nutzt.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Betonung oder Wichtigkeit auf das Wort "Queen Mary". Es wird lediglich angezeigt, dass es sich nicht um eine Königin namens Mary, sondern um ein Schiff namens "Queen Mary" handelt.

## Beispiele

In diesem Beispiel wird das `<em>`-Element verwendet, um einen impliziten oder expliziten Kontrast zwischen zwei Zutatenlisten hervorzuheben:

```html
<p>
  Ice cream is made with milk, sweetener, and cream. Frozen custard, on the
  other hand, is made of milk, cream, sweetener, and <em>egg yolks</em>.
</p>
```

### Ergebnis

{{EmbedLiveSample("Example")}}

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">Betonung</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis Gecko 1.9.2 (Firefox 4)
        einschließlich implementiert Firefox die
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) Schnittstelle für dieses Element.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("i")}}
