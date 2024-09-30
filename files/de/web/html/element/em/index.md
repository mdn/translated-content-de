---
title: "<em>: Das Emphasis-Element"
slug: Web/HTML/Element/em
l10n:
  sourceCommit: 20ddfa26482697dff78a9af0a63b609a4d67284d
---

{{HTMLSidebar}}

Das **`<em>`** [HTML](/de/docs/Web/HTML) Element kennzeichnet Text mit besonders betonter Hervorhebung. Das `<em>` Element kann geschachtelt werden, wobei jede Schachtelungsebene ein höheres Maß an Betonung anzeigt.

{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<em>` Element dient für Wörter, die im Vergleich zum umgebenden Text eine betonte Hervorhebung haben. Diese Hervorhebung bezieht sich oft nur auf ein Wort oder einige Wörter eines Satzes und beeinflusst die Bedeutung des Satzes selbst.

Typischerweise wird dieses Element kursiv dargestellt. Es sollte jedoch nicht zur Anwendung von Kursivstil verwendet werden; hierfür ist die CSS-Eigenschaft {{cssxref("font-style")}} zu nutzen. Verwenden Sie das {{HTMLElement("cite")}} Element, um den Titel eines Werkes (Buch, Theaterstück, Lied usw.) zu markieren. Verwenden Sie das {{HTMLElement("i")}} Element, um Text zu kennzeichnen, der in einem alternativen Ton oder einer anderen Stimmung steht, was viele allgemeine Situationen für Kursivschrift abdeckt, wie z.B. wissenschaftliche Namen oder Wörter in anderen Sprachen. Verwenden Sie das {{HTMLElement("strong")}} Element, um Text zu markieren, der wichtiger ist als der umgebende Text.

### \<i> vs. \<em>

Einige Entwickler könnten verwirrt sein, da mehrere Elemente scheinbar ähnliche visuelle Ergebnisse erzeugen. `<em>` und `<i>` sind ein häufiges Beispiel, da beide Text kursiv darstellen. Was ist der Unterschied? Welches sollte man verwenden?

Standardmäßig ist das visuelle Ergebnis dasselbe. Die semantische Bedeutung ist jedoch unterschiedlich. Das `<em>` Element repräsentiert die Betonung des Inhalts, während das `<i>` Element Text darstellt, der vom normalen Prosatext abgesetzt ist, wie z.B. ein Fremdwort, Gedanken einer fiktiven Figur oder wenn der Text auf die Definition eines Wortes verweist statt auf seine semantische Bedeutung. (Der Titel eines Werkes, wie der Name eines Buches oder Films, sollte `<cite>` verwenden.)

Das bedeutet, dass je nach Situation das richtige Element gewählt werden sollte. Keines der beiden dient rein dekorativen Zwecken, dafür ist die CSS-Stilgestaltung da.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text liest, würde die kursiv geschriebenen Wörter mit Betonung, also mit verbaler Hervorhebung, aussprechen.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier gibt es keine zusätzliche Betonung oder Wichtigkeit für das Wort "Queen Mary". Es wird lediglich angegeben, dass es sich bei dem Objekt nicht um eine Königin namens Mary handelt, sondern um ein Schiff namens "Queen Mary".

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">Betonung</a
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
