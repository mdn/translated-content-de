---
title: "<em>: Das Hervorhebungselement"
slug: Web/HTML/Element/em
l10n:
  sourceCommit: 20ddfa26482697dff78a9af0a63b609a4d67284d
---

{{HTMLSidebar}}

Das **`<em>`**-[HTML](/de/docs/Web/HTML)-Element markiert Text, der eine betonte Hervorhebung hat. Das `<em>`-Element kann verschachtelt werden, wobei jede Verschachtelungsebene auf einen höheren Grad der Hervorhebung hinweist.

{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<em>`-Element wird für Wörter verwendet, die im Vergleich zum umgebenden Text eine betonte Hervorhebung haben. Dies beschränkt sich oft auf ein Wort oder Worte eines Satzes und beeinflusst die Bedeutung des Satzes selbst.

Typischerweise wird dieses Element kursiv dargestellt. Es sollte jedoch nicht verwendet werden, um eine kursive Formatierung anzuwenden; verwenden Sie hierfür die CSS-Eigenschaft {{cssxref("font-style")}}. Verwenden Sie das {{HTMLElement("cite")}}-Element, um den Titel eines Werkes (Buch, Theaterstück, Lied, etc.) zu markieren. Verwenden Sie das {{HTMLElement("i")}}-Element, um Text zu markieren, der in einem alternativen Ton oder Modus dargestellt wird, was viele gängige Situationen für Kursivschrift abdeckt, wie wissenschaftliche Namen oder Worte in anderen Sprachen. Verwenden Sie das {{HTMLElement("strong")}}-Element, um Text zu markieren, der eine größere Bedeutung hat als der umgebende Text.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt sein, wie mehrere Elemente scheinbar ähnliche visuelle Ergebnisse erzeugen. `<em>` und `<i>` sind ein häufiges Beispiel, da beide Text kursiv darstellen. Wo liegt der Unterschied? Welches sollten Sie verwenden?

Standardmäßig ist das visuelle Ergebnis dasselbe. Der semantische Unterschied ist jedoch vorhanden. Das `<em>`-Element repräsentiert die betonte Hervorhebung seines Inhalts, während das `<i>`-Element Text repräsentiert, der vom normalen Prosatext abgesetzt ist, wie ein Fremdwort, Gedanken einer fiktionalen Figur oder wenn der Text sich auf die Definition eines Wortes bezieht, statt seine semantische Bedeutung darzustellen. (Der Titel eines Werkes, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Das bedeutet, dass das richtige zu verwendende Element von der Situation abhängt. Keines ist für rein dekorative Zwecke gedacht, dafür ist das CSS-Styling da.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die in Kursivschrift geschriebenen Wörter mit Betonung, unter Verwendung von verbalem Stress, aussprechen.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keinen zusätzlichen Nachdruck oder Bedeutung auf das Wort "Queen Mary". Es wird lediglich angegeben, dass das Objekt in Frage kein Königreich namens Mary ist, sondern ein Schiff namens "Queen Mary".

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">emphasis</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Alle</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        {{domxref("HTMLElement")}} Bis Gecko 1.9.2 (Firefox 4)
        inklusive, implementiert Firefox die
        {{domxref("HTMLSpanElement")}}-Schnittstelle für dieses Element.
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
