---
title: "`<h1>–<h6>` HTML Abschnittsüberschrift-Elemente"
short-title: <h1>–<h6>
slug: Web/HTML/Reference/Elements/Heading_Elements
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML) Elemente repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene und `<h6>` ist die niedrigste. Standardmäßig erzeugen alle Überschriftselemente ein {{Glossary("Block-level_content", "Block-Level")}} Rahmen im Layout, das auf einer neuen Zeile beginnt und die volle Breite des enthaltenen Blocks einnimmt.

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

Diese Elemente enthalten nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

Die globalen Attribute [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) und [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) können verwendet werden, um die berechnete Überschriftenebene dieser Elemente anzupassen.

## Nutzungshinweise

- Überschrifteninformationen können von Benutzeragenten verwendet werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie nicht Überschriftselemente, um Text zu vergrößern. Stattdessen verwenden Sie die {{Glossary("CSS", "CSS")}} {{cssxref("font-size")}} Eigenschaft.
- Überspringen Sie keine Überschriftenebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Vermeiden Sie die Verwendung mehrerer `<h1>`-Elemente auf einer Seite

Obwohl die Verwendung mehrerer `<h1>`-Elemente auf einer Seite vom HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachtelung) sind), wird dies nicht als Best Practice angesehen. Eine Seite sollte im Allgemeinen ein einzelnes `<h1>`-Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Reference/Elements/title) Element des Dokuments).

> [!NOTE]
> Die Verschachtelung mehrerer `<h1>`-Elemente in verschachtelten [Abschnittselementen](/de/docs/Web/HTML/Reference/Elements#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Dies wurde jedoch nie als Best Practice angesehen und ist jetzt nicht mehr konform. Lesen Sie mehr in [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Vermeiden Sie, mehr als ein `<h1>` pro Seite zu verwenden und [verschachteln Sie Überschriften](#verschachtelung), ohne Ebenen zu überspringen.

### Ein einheitliches Schriftgrößenformat für `<h1>` festlegen

Vor Mai 2025 spezifizierte der [HTML-Standard](https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings), dass `<h1>`-Elemente in einem `<section>`, `<article>`, `<aside>` oder `<nav>` Element als `<h2>` gerendert werden sollten (kleinere {{cssxref("font-size")}} mit einem angepassten {{cssxref("margin-block")}}), oder als `<h3>`, wenn sie eine weitere Ebene tiefer verschachtelt sind, und so weiter. Dieser kontextabhängige Standardstil wurde nun [entfernt](https://github.com/whatwg/html/issues/7867).

Um ein konsistentes `<h1>`-Rendering für Browser sicherzustellen, die den alten kontextabhängigen Standardstil implementieren, verwenden Sie die folgende Stilregel:

```css
h1 {
  margin-block: 0.67em;
  font-size: 2em;
}
```

Alternativ dazu können Sie {{cssxref(":where()")}} verwenden, das eine Null-Spezifität hat, um zu vermeiden, dass andere Stilregeln überschrieben werden, die sich auf `<h1>` beziehen:

```css
:where(h1) {
  margin-block: 0.67em;
  font-size: 2em;
}
```

## Barrierefreiheit

### Navigation

Eine häufige Navigationstechnik für Benutzer von Screenreading-Software ist es, schnell von Überschrift zu Überschrift zu springen, um den Inhalt der Seite zu bestimmen. Deshalb ist es wichtig, keine Überschriftenebenen zu überspringen. Andernfalls könnte Verwirrung entstehen, da die Person, die auf diese Weise navigiert, sich fragt, wo die fehlende Überschrift ist.

**Machen Sie das nicht:**

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

**Bevorzugen Sie das:**

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### Verschachtelung

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Seiteninhalts widerzuspiegeln. Die meisten Screenreader können auch eine geordnete Liste aller Überschriften auf einer Seite generieren, was einer Person helfen kann, die Inhaltshierarchie schnell zu bestimmen und zu verschiedenen Überschriften zu navigieren.

Gegeben ist die folgende Seitenstruktur:

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

Screenreader würden eine Liste wie diese generieren:

1. `h1` Käfer
   1. `h2` Etymologie
   2. `h2` Verbreitung und Vielfalt
   3. `h2` Evolution
      1. `h3` Spätpaleozoikum
      2. `h3` Jura
      3. `h3` Kreide
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

Wenn Überschriften verschachtelt sind, können Überschriftenebenen beim Schließen eines Unterabschnitts "übersprungen" werden.

- [Überschriften • Seitenstruktur • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Verständnis WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Verständnis WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Verständnis des Erfolgskriteriums 2.4.6 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Verständnis des Erfolgskriteriums 2.4.10 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Kennzeichnung von Abschnittsinhalten

Eine andere übliche Navigationstechnik für Benutzer von Screenreading-Software besteht darin, eine Liste von [Abschnittsinhalten](/de/docs/Web/HTML/Reference/Elements#content_sectioning) zu generieren und diese zu verwenden, um das Layout der Seite zu bestimmen.

Abschnittsinhalte können mithilfe einer Kombination aus den Attributen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) gekennzeichnet werden, wobei das Etikett den Zweck des Abschnitts prägnant beschreibt. Diese Technik ist nützlich in Situationen, in denen es mehr als ein Abschnittselement auf derselben Seite gibt.

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

In diesem Beispiel würde die Screenreading-Technologie ankündigen, dass es zwei {{HTMLElement("nav")}} Bereiche gibt, einen namens "Primärnavigation" und einen namens "Fußzeilennavigation". Wenn keine Etiketten bereitgestellt wurden, müsste die Person, die Screenreading-Software verwendet, möglicherweise jeden `nav`-Inhalt untersuchen, um deren Zweck zu bestimmen.

- [Die Verwendung des aria-labelledby-Attributs](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Bezeichnungen von Regionen • Seitenstruktur • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Beispiele

### Alle Überschriften

Der folgende Code zeigt alle Überschriftenebenen in Verwendung.

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

Der folgende Code zeigt einige Überschriften mit etwas Inhalt darunter.

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
          >Fließinhalt</a
        >, Überschrifteninhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
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
