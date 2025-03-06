---
title: "<em>: Das Emphasis-Element"
slug: Web/HTML/Element/em
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<em>`** [HTML](/de/docs/Web/HTML)-Element markiert Text, der betont hervorgehoben wird. Das `<em>`-Element kann verschachtelt werden, wobei jede Verschachtelungsebene einen höheren Grad der Betonung anzeigt.

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

Dieses Element schließt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

## Verwendungshinweise

Das `<em>`-Element wird für Wörter verwendet, die im Vergleich zum umgebenden Text eine betonte Hervorhebung haben. Dies ist oft auf ein oder mehrere Wörter eines Satzes beschränkt und beeinflusst die Bedeutung des Satzes selbst.

Typischerweise wird dieses Element in kursiver Schrift angezeigt. Es sollte jedoch nicht verwendet werden, um kursiven Stil anzuwenden; verwenden Sie dafür die CSS-Eigenschaft {{cssxref("font-style")}}. Verwenden Sie das {{HTMLElement("cite")}}-Element, um den Titel eines Werkes (Buch, Theaterstück, Lied usw.) zu kennzeichnen. Verwenden Sie das {{HTMLElement("i")}}-Element, um Text zu kennzeichnen, der in einem anderen Ton oder einer anderen Stimmung steht, was viele gängige Situationen für Kursivschrift wie wissenschaftliche Namen oder Wörter in anderen Sprachen abdeckt. Verwenden Sie das {{HTMLElement("strong")}}-Element, um Text zu kennzeichnen, der wichtiger ist als der umgebende Text.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt sein, wie mehrere Elemente scheinbar ähnliche visuelle Ergebnisse erzeugen. `<em>` und `<i>` sind ein häufiges Beispiel, da sie beide Text kursiv anzeigen. Was ist der Unterschied? Welches sollten Sie verwenden?

Standardmäßig ist das visuelle Ergebnis dasselbe. Jedoch ist die semantische Bedeutung unterschiedlich. Das `<em>`-Element stellt eine betonte Hervorhebung seines Inhalts dar, während das `<i>`-Element Text darstellt, der vom normalen Prosatext abgesetzt ist, wie etwa ein Fremdwort, Gedanken eines fiktiven Charakters oder wenn sich der Text auf die Definition eines Wortes bezieht anstatt dessen semantische Bedeutung darzustellen. (Der Titel eines Werkes, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Das bedeutet, dass das richtige Element von der Situation abhängt. Keines der beiden ist für rein dekorative Zwecke gedacht, dafür ist die CSS-Stilgestaltung da.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die kursiv geschriebenen Wörter mit einem betonten Akzent aussprechen, wobei der verbale Akzent verwendet wird.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Betonung oder Wichtigkeit beim Wort "Queen Mary". Es wird lediglich angezeigt, dass es sich bei dem fraglichen Objekt nicht um eine Königin namens Mary handelt, sondern um ein Schiff namens "Queen Mary".

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
          >Phrasen-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4) implementiert Firefox die
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
