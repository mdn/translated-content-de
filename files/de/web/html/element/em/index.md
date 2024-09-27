---
title: "<em>: Das Emphasis-Element"
slug: Web/HTML/Element/em
l10n:
  sourceCommit: 20ddfa26482697dff78a9af0a63b609a4d67284d
---

{{HTMLSidebar}}

Das **`<em>`** [HTML](/de/docs/Web/HTML) Element markiert Text, der eine betonte Hervorhebung hat. Das `<em>`-Element kann verschachtelt werden, wobei jede Verschachtelungsebene ein höheres Maß an Hervorhebung anzeigt.

{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<em>`-Element wird für Wörter verwendet, die eine betonte Hervorhebung im Vergleich zum umgebenden Text haben, was oft auf ein Wort oder Wörter eines Satzes beschränkt ist und die Bedeutung des Satzes selbst beeinflusst.

Typischerweise wird dieses Element kursiv dargestellt. Es sollte jedoch nicht verwendet werden, um eine Kursivdarstellung anzuwenden; hierfür sollte die CSS {{cssxref("font-style")}}-Eigenschaft verwendet werden. Verwenden Sie das {{HTMLElement("cite")}}-Element, um den Titel eines Werks (Buch, Theaterstück, Lied, etc.) zu kennzeichnen. Verwenden Sie das {{HTMLElement("i")}}-Element, um Text zu kennzeichnen, der in einem alternativen Ton oder in einer anderen Stimmung steht, was viele übliche Situationen für Kursivschrift abdeckt, wie wissenschaftliche Namen oder Wörter in anderen Sprachen. Verwenden Sie das {{HTMLElement("strong")}}-Element, um Text hervorzuheben, der wichtiger ist als der umgebende Text.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt sein, weil mehrere Elemente scheinbar ähnliche visuelle Ergebnisse liefern. `<em>` und `<i>` sind ein häufiges Beispiel, da beide Texte kursiv darstellen. Was ist der Unterschied? Welches sollte man verwenden?

Standardmäßig ist das visuelle Ergebnis dasselbe. Der semantische Unterschied besteht jedoch darin, dass das `<em>`-Element eine betonte Hervorhebung seines Inhalts darstellt, während das `<i>`-Element Text darstellt, der vom normalen Textsatz abhebt, wie z. B. ein fremdes Wort, Gedanken einer fiktiven Figur oder wenn der Text auf die Definition eines Wortes verweist statt dessen semantische Bedeutung darzustellen. (Der Titel eines Werks, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Das richtige Element zu verwenden, hängt also von der Situation ab. Keines davon dient rein dekorativen Zwecken; dafür ist die CSS-Stilgebung gedacht.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die kursiv geschriebenen Wörter betont aussprechen und dabei den verbalen Akzent setzen.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Hervorhebung oder Bedeutung für das Wort "Queen Mary". Es wird lediglich angezeigt, dass es sich bei dem Objekt nicht um eine Königin namens Mary, sondern um ein Schiff namens "Queen Mary" handelt.

## Beispiele

In diesem Beispiel wird das `<em>`-Element verwendet, um einen impliziten oder expliziten Gegensatz zwischen zwei Zutatenlisten hervorzuheben:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung</a
        >, fühlender Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">Emphasis</a
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis zu Gecko 1.9.2 (Firefox 4)
        inklusive implementiert Firefox die
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
