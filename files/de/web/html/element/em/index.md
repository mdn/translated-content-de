---
title: "<em>: Das Hervorhebungs-Element"
slug: Web/HTML/Element/em
l10n:
  sourceCommit: 43b11ebdc23e6d20b2387d13d280b5dc158933d0
---

{{HTMLSidebar}}

Das **`<em>`**-[HTML](/de/docs/Web/HTML)-Element markiert Text, der eine betonte Hervorhebung hat. Das `<em>`-Element kann verschachtelt werden, wobei jede Verschachtelungsebene ein größeres Maß an Hervorhebung angibt.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Das `<em>`-Element wird für Wörter verwendet, die im Vergleich zum umgebenden Text eine betonte Hervorhebung haben. Diese Hervorhebung beschränkt sich oft auf ein Wort oder mehrere Wörter eines Satzes und beeinflusst die Bedeutung des Satzes selbst.

Typischerweise wird dieses Element in kursiver Schrift dargestellt. Es sollte jedoch nicht verwendet werden, um kursiven Stil zu erzeugen; dafür sollte die CSS-Eigenschaft {{cssxref("font-style")}} verwendet werden. Das {{HTMLElement("cite")}}-Element sollte verwendet werden, um den Titel eines Werks (Buch, Theaterstück, Lied usw.) zu markieren. Das {{HTMLElement("i")}}-Element sollte verwendet werden, um Texte zu markieren, die in einem alternativen Ton oder einer anderen Stimmung stehen, was viele gängige Situationen für Kursivschrift abdeckt, wie wissenschaftliche Namen oder Wörter in anderen Sprachen. Das {{HTMLElement("strong")}}-Element sollte verwendet werden, um Text zu markieren, der im Vergleich zum umgebenden Text eine größere Bedeutung hat.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt sein, da mehrere Elemente scheinbar ähnliche visuelle Ergebnisse erzeugen. `<em>` und `<i>` sind ein häufiges Beispiel, da sie beide Text kursiv darstellen. Was ist der Unterschied? Welches sollten Sie verwenden?

Standardmäßig ist das visuelle Ergebnis dasselbe. Die semantische Bedeutung ist jedoch unterschiedlich. Das `<em>`-Element repräsentiert die betonende Hervorhebung seines Inhalts, während das `<i>`-Element Text darstellt, der vom normalen Schreibstil abweicht, wie beispielsweise ein fremdsprachiges Wort, Gedanken eines fiktiven Charakters oder wenn der Text die Definition eines Wortes bedeutet, anstatt dessen semantische Bedeutung darzustellen. (Der Titel eines Werks, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Das bedeutet, dass die richtige Verwendung von der Situation abhängt. Keines der beiden ist rein dekorativ, dafür ist das CSS-Styling gedacht.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die Wörter in Kursivschrift mit einer Betonung, also mit einem akzentuierten Ton, vorlesen.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Betonung oder Bedeutung für das Wort "Queen Mary". Es wird lediglich angezeigt, dass es sich bei dem betreffenden Objekt nicht um eine Königin namens Maria, sondern um ein Schiff namens "Queen Mary" handelt.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt.
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">emphasis</a
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
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis Gecko 1.9.2 (Firefox 4)
        inklusive, implementiert Firefox die
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle für dieses Element.
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
