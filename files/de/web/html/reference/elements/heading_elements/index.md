---
title: "<h1>–<h6>: Die HTML-Abschnittsüberschriftselemente"
slug: Web/HTML/Reference/Elements/Heading_Elements
l10n:
  sourceCommit: 9d28a3ed06d1238750206e0150e4439888592969
---

{{HTMLSidebar}}

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML) Elemente repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene und `<h6>` die niedrigste. Standardmäßig erzeugen alle Überschriftselemente ein {{Glossary("Block-level_content", "Block-Level")}} Box in der Anordnung, die in einer neuen Zeile beginnt und die volle verfügbare Breite in ihrem umgebenden Block einnimmt.

{{InteractiveExample("HTML Demo: &lt;h1-h6&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Beetles</h1>
<h2>External morphology</h2>
<h3>Head</h3>
<h4>Mouthparts</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
```

```css interactive-example
h1,
h2,
h3,
h4 {
  margin: 0.1rem 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  padding-left: 20px;
}

h3 {
  font-size: 1.2rem;
  padding-left: 40px;
}

h4 {
  font-size: 1rem;
  font-style: italic;
  padding-left: 60px;
}
```

## Attribute

Diese Elemente beinhalten nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Verwendung

- Überschrifteninformationen können von Benutzeragenten verwendet werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie Überschriftselemente nicht, um Text zu verkleinern. Verwenden Sie stattdessen die {{Glossary("CSS", "CSS")}} {{cssxref("font-size")}} Eigenschaft.
- Überspringen Sie keine Überschriftenebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Vermeiden Sie die Verwendung mehrerer `<h1>` Elemente auf einer Seite

Obwohl die Verwendung mehrerer `<h1>` Elemente auf einer Seite durch den HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachtelung) sind), wird dies nicht als Best Practice angesehen. Eine Seite sollte im Allgemeinen ein einzelnes `<h1>` Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Reference/Elements/title) Element des Dokuments).

> [!NOTE]
> Die Verschachtelung mehrerer `<h1>` Elemente in verschachtelten [Abschnittselementen](/de/docs/Web/HTML/Reference/Elements#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Dies wurde jedoch nie als Best Practice betrachtet und ist jetzt nicht mehr konform. Lesen Sie mehr in [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Es wird bevorzugt, nur ein `<h1>` pro Seite zu verwenden und [Überschriften zu verschachteln](#verschachtelung), ohne Ebenen zu überspringen.

### Einheitliche Schriftgröße für `<h1>` spezifizieren

Vor Mai 2025 spezifizierte der [HTML-Standard](https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings), dass `<h1>` Elemente in einem `<section>`, `<article>`, `<aside>`, oder `<nav>` Element als `<h2>` (kleinere {{cssxref("font-size")}} mit angepasstem {{cssxref("margin-block")}}), oder als `<h3>` gerendert werden sollten, wenn sie eine Ebene tiefer verschachtelt sind, usw. Dieser speziell kontextabhängige Standardstil wurde nun [entfernt](https://github.com/whatwg/html/issues/7867).

Um ein konsistentes `<h1>` Rendering für Browser zu gewährleisten, die den alten kontextabhängigen Standardstil implementieren, verwenden Sie die folgende Stilregel:

```css
h1 {
  margin-block: 0.67em;
  font-size: 2em;
}
```

Alternativ können Sie zur Vermeidung der Überschreibung anderer Stilregeln, die auf `<h1>` abzielen, {{cssxref(":where()")}}, das keine Spezifität hat, verwenden:

```css
:where(h1) {
  margin-block: 0.67em;
  font-size: 2em;
}
```

## Barrierefreiheit

### Navigation

Eine häufige Navigationstechnik für Benutzer von Screenreadern ist das schnelle Springen von Überschrift zu Überschrift, um den Inhalt der Seite zu bestimmen. Deshalb ist es wichtig, keine oder mehrere Überschriftenebenen zu überspringen. Andernfalls kann es zu Verwirrung kommen, da die Person, die auf diese Weise navigiert, möglicherweise nicht weiß, wo die fehlende Überschrift ist.

**Tun Sie dies nicht:**

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

**Bevorzugen Sie dies:**

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### Verschachtelung

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Inhalts der Seite widerzuspiegeln. Die meisten Screenreader können auch eine geordnete Liste aller Überschriften auf einer Seite generieren, die einer Person helfen kann, sich schnell über die Inhaltsstruktur zu orientieren und zu verschiedenen Überschriften zu navigieren.

Bei der folgenden Seitenstruktur:

```html
<h1>Beetles</h1>

<h2>Etymology</h2>

<h2>Distribution and Diversity</h2>

<h2>Evolution</h2>
<h3>Late Paleozoic</h3>
<h3>Jurassic</h3>
<h3>Cretaceous</h3>
<h3>Cenozoic</h3>

<h2>External Morphology</h2>
<h3>Head</h3>
<h4>Mouthparts</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
<h3>Legs</h3>
<h3>Wings</h3>
<h3>Abdomen</h3>
```

Würde ein Screenreader eine Liste wie diese erzeugen:

1. `h1` Käfer

   1. `h2` Etymologie
   2. `h2` Verbreitung und Vielfalt
   3. `h2` Evolution

      1. `h3` Spät-Paläozoikum
      2. `h3` Jura
      3. `h3` Kreidezeit
      4. `h3` Känozoikum

   4. `h2` Äußere Morphologie

      1. `h3` Kopf

         1. `h4` Mundwerkzeuge

      2. `h3` Thorax

         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Beine
      4. `h3` Flügel
      5. `h3` Abdomen

Wenn Überschriften verschachtelt sind, können beim Schließen eines Unterabschnitts Überschriftenebenen "übersprungen" werden.

- [Überschriften • Seitenstruktur • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Verständnis WCAG, Richtlinien 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis von Erfolgskriterium 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Verständnis WCAG, Richtlinien 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis von Erfolgskriterium 2.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Verständnis von Erfolgskriterium 2.4.6 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Verständnis von Erfolgskriterium 2.4.10 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Markierung von Abschnittsinhalten

Eine weitere häufige Navigationstechnik für Benutzer von Screenreadern besteht darin, eine Liste von [abschnittsweisem Inhalt](/de/docs/Web/HTML/Reference/Elements#content_sectioning) zu generieren und diese zur Bestimmung des Seitenlayouts zu nutzen.

Abschnittsinhalte können mit einer Kombination der Attribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) markiert werden, wobei die Bezeichnung den Zweck des Abschnitts treffend beschreibt. Diese Technik ist nützlich in Situationen, in denen es auf derselben Seite mehr als ein Abschnittselement gibt.

#### Beispiele für Abschnittsinhalte

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Primary navigation</h2>
    <!-- navigation items -->
  </nav>
</header>

<!-- page content -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Footer navigation</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

{{EmbedLiveSample('Sectioning_content_examples')}}

In diesem Beispiel würde die Screenreader-Technologie ankündigen, dass es zwei {{HTMLElement("nav")}} Abschnitte gibt, einer namens "Hauptnavigation" und einer namens "Fußzeilennavigation". Wenn keine Beschriftungen vorhanden wären, müsste die Person, die eine Screenreader-Software verwendet, unter Umständen den Inhalt jedes `nav` Elements untersuchen, um ihren Zweck zu bestimmen.

- [Verwendung des aria-labelledby Attributs](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Beschriftung von Regionen • Seitenstruktur • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Beispiele

### Alle Überschriften

Der folgende Code zeigt alle verwendeten Überschriftsebenen.

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

{{EmbedLiveSample('All_headings', '280', '300')}}

### Beispielseite

Der folgende Code zeigt einige Überschriften mit Inhalt darunter.

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here…</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here…</p>

<h3>Example 2</h3>
<p>Some text here…</p>

<h2>See also</h2>
<p>Some text here…</p>
```

{{EmbedLiveSample('Example_page', '280', '480')}}

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
          >Fluß-Inhalt</a
        >, Überschrifteninhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role"
          >Überschrift</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> oder
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLHeadingElement`](/de/docs/Web/API/HTMLHeadingElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
