---
title: "`<em>` HTML Hervorhebungselement"
short-title: <em>
slug: Web/HTML/Reference/Elements/em
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<em>`** [HTML](/de/docs/Web/HTML) Element markiert Text, der betont werden soll. Das `<em>` Element kann geschachtelt werden, wobei jede Ebene der Verschachtelung einen stärkeren Grad der Betonung anzeigt.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<em>` Element wird für Wörter verwendet, die eine betonte Betonung im Vergleich zum umgebenden Text haben, was oft auf ein Wort oder Wörter eines Satzes beschränkt ist und die Bedeutung des Satzes selbst beeinflusst.

Typischerweise wird dieses Element kursiv dargestellt. Es sollte jedoch nicht verwendet werden, um eine kursive Formatierung anzuwenden; verwenden Sie dafür die CSS-Eigenschaft {{cssxref("font-style")}}. Verwenden Sie das {{HTMLElement("cite")}} Element, um den Titel eines Werks (Buch, Theaterstück, Lied usw.) zu markieren. Verwenden Sie das {{HTMLElement("i")}} Element, um Text zu markieren, der in einem alternativen Ton oder Stimmung ist, was viele gängige Situationen für Kursivschrift abdeckt, wie wissenschaftliche Namen oder Wörter in anderen Sprachen. Verwenden Sie das {{HTMLElement("strong")}} Element, um Text zu markieren, der eine größere Bedeutung als der umgebende Text hat.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt sein, wie mehrere Elemente scheinbar ähnliche visuelle Ergebnisse erzielen. `<em>` und `<i>` sind ein häufiges Beispiel, da beide Text kursiv darstellen. Was ist der Unterschied? Welche sollten Sie verwenden?

Standardmäßig ist das visuelle Ergebnis gleich. Der semantische Unterschied liegt jedoch darin, dass das `<em>` Element angibt, dass der Inhalt betont hervorgehoben wird, während das `<i>` Element Text darstellt, der von der normalen Prosa abgesetzt ist, wie ein fremdes Wort, Gedanken einer fiktiven Figur oder wenn der Text sich auf die Definition eines Wortes bezieht, anstatt seine semantische Bedeutung darzustellen. (Der Titel eines Werks, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Das bedeutet, dass die richtige Verwendung vom Kontext abhängt. Keins der beiden ist für rein dekorative Zwecke gedacht, dafür ist CSS-Styling gedacht.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die kursiven Wörter mit Betonung aussprechen, indem sie verbalen Stress verwenden.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Betonung oder Wichtigkeit bei dem Wort "Queen Mary". Es wird lediglich angezeigt, dass es sich bei dem Objekt nicht um eine Königin namens Mary, sondern um ein Schiff namens "Queen Mary" handelt.

## Beispiele

In diesem Beispiel wird das `<em>` Element verwendet, um einen impliziten oder expliziten Kontrast zwischen zwei Zutatenlisten hervorzuheben:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierender Inhalt</a>, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierender Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierenden Inhalt</a> akzeptiert.
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
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
