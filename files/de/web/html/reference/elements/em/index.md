---
title: "<em>: Das Betonungselement"
slug: Web/HTML/Reference/Elements/em
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<em>`** [HTML](/de/docs/Web/HTML)-Element kennzeichnet Text, der eine Betonung expressiver Art erhält. Das `<em>`-Element kann verschachtelt werden, wobei jede Verschachtelungsebene eine stärkere Betonung anzeigt.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Das `<em>`-Element wird für Wörter verwendet, die im Vergleich zu umliegendem Text eine betonte Hervorhebung haben, oft beschränkt auf ein Wort oder Wörter eines Satzes und beeinflusst die Bedeutung des Satzes selbst.

Typischerweise wird dieses Element kursiv angezeigt. Es sollte allerdings nicht verwendet werden, um eine kursive Darstellung anzuwenden; nutzen Sie dafür die CSS-Eigenschaft {{cssxref("font-style")}}. Verwenden Sie das {{HTMLElement("cite")}}-Element, um den Titel eines Werks (Buch, Stück, Lied usw.) zu markieren. Nutzen Sie das {{HTMLElement("i")}}-Element, um Text zu kennzeichnen, der in einem alternativen Ton oder Stil ist, was viele gängige Situationen für Kursivschrift abdeckt, wie z.B. wissenschaftliche Namen oder Wörter in anderen Sprachen. Verwenden Sie das {{HTMLElement("strong")}}-Element, um Text zu markieren, der im Vergleich zu umliegendem Text eine größere Bedeutung hat.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt darüber sein, wie mehrere Elemente scheinbar ähnliche visuelle Ergebnisse erzeugen. `<em>` und `<i>` sind ein häufiges Beispiel, da beide Text kursiv darstellen. Was ist der Unterschied? Welches sollten Sie verwenden?

Standardmäßig ist das visuelle Ergebnis dasselbe. Allerdings unterscheidet sich die semantische Bedeutung. Das `<em>`-Element repräsentiert eine Betonung des Inhalts, wohingegen das `<i>`-Element Text darstellt, der aus dem normalen Fließtext hervorgehoben wird, wie ein fremdsprachiges Wort, Gedanken eines fiktiven Charakters oder wenn der Text sich auf die Definition eines Wortes bezieht, anstatt dessen semantische Bedeutung darzustellen. (Der Titel eines Werks, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Dies bedeutet, dass die richtige Verwendung von der Situation abhängt. Keines der beiden wird für rein dekorative Zwecke verwendet, dafür ist CSS-Styling da.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die kursiv geschriebenen Wörter mit einer Betonung aussprechen, indem sie dabei eine verbale Betonung verwendet.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Betonung oder Wichtigkeit auf das Wort "Queen Mary". Es wird lediglich angedeutet, dass es sich nicht um eine Königin namens Mary, sondern um ein Schiff namens "Queen Mary" handelt.

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
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
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
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis Gecko 1.9.2 (Firefox 4)
        einschließlich implementiert Firefox die
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
