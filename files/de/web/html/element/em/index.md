---
title: "<em>: Das Emphasis-Element"
slug: Web/HTML/Element/em
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<em>`** [HTML](/de/docs/Web/HTML) Element markiert Text, der betont werden soll. Das `<em>`-Element kann verschachtelt werden, wobei jede Ebene der Verschachtelung einen höheren Grad der Betonung anzeigt.

{{InteractiveExample("HTML Demo: &lt;em&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
em {
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise zur Verwendung

Das `<em>` Element ist für Wörter gedacht, die im Vergleich zum umgebenden Text eine betonte Betonung erhalten, was oft auf ein Wort oder Wörter eines Satzes beschränkt ist und die Bedeutung des Satzes selbst beeinflusst.

Typischerweise wird dieses Element kursiv dargestellt. Jedoch sollte es nicht verwendet werden, um eine kursive Darstellung zu erzwingen; hierfür sollte die CSS-Eigenschaft {{cssxref("font-style")}} verwendet werden. Verwenden Sie das {{HTMLElement("cite")}}-Element, um den Titel eines Werkes (Buch, Theaterstück, Lied usw.) zu markieren. Verwenden Sie das {{HTMLElement("i")}}-Element, um Text zu markieren, der in einem anderen Ton oder einer anderen Stimmung steht, was viele gängige Situationen für Kursivschrift abdeckt, wie z. B. wissenschaftliche Namen oder Wörter in anderen Sprachen. Verwenden Sie das {{HTMLElement("strong")}}-Element, um Text zu markieren, der eine größere Wichtigkeit als der umgebende Text hat.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt sein, wie mehrere Elemente scheinbar ähnliche visuelle Ergebnisse produzieren. `<em>` und `<i>` sind ein gängiges Beispiel, da beide Text kursiv darstellen. Wo liegt der Unterschied? Welches sollten Sie verwenden?

Standardmäßig ist das visuelle Ergebnis das gleiche. Jedoch ist die semantische Bedeutung unterschiedlich. Das `<em>`-Element stellt die betonte Betonung seines Inhalts dar, während das `<i>`-Element Text darstellt, der vom normalen Fließtext abgesetzt ist, wie ein Fremdwort, Gedanken einer fiktiven Figur oder wenn sich der Text auf die Definition eines Wortes statt auf dessen semantische Bedeutung bezieht. (Der Titel eines Werkes, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Das bedeutet, die richtige Wahl hängt von der Situation ab. Keiner von beiden ist für rein dekorative Zwecke gedacht, dafür ist die CSS-Stilistik zuständig.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die Worte in Kursivschrift mit einem Akzent aussprechen, unter Verwendung von verbalem Stress.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Betonung oder Wichtigkeit auf das Wort "Queen Mary". Es wird lediglich angezeigt, dass das Objekt in Frage nicht eine Königin namens Mary, sondern ein Schiff namens "Queen Mary" ist.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">emphasis</a
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis inklusive Gecko 1.9.2 (Firefox 4) implementiert Firefox die
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
