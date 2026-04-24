---
title: "`<h1>–<h6>` HTML-Bereichsüberschriftselemente"
short-title: <h1>–<h6>
slug: Web/HTML/Reference/Elements/Heading_Elements
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML) Elemente repräsentieren sechs Ebenen von Bereichsüberschriften. `<h1>` ist die höchste Ebene und `<h6>` die niedrigste. Standardmäßig erstellen alle Überschriftselemente einen {{Glossary("Block-level_content", "Block-Level")}} Kasten im Layout, der auf einer neuen Zeile beginnt und die volle verfügbare Breite in ihrem umschließenden Block einnimmt.

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

Diese Elemente umfassen nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Überschrifteninformationen können von Benutzeragenten verwendet werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie keine Überschriftselemente, um Text zu verkleinern oder zu vergrößern. Verwenden Sie stattdessen die {{Glossary("CSS", "CSS")}} {{cssxref("font-size")}} Eigenschaft.
- Überspringen Sie keine Überschriftenebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` usw.

### Vermeiden Sie die Verwendung mehrerer `<h1>` Elemente auf einer Seite

Obwohl die Verwendung mehrerer `<h1>` Elemente auf einer Seite durch den HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachteln) sind), wird dies nicht als Best Practice angesehen. Eine Seite sollte im Allgemeinen ein einzelnes `<h1>` Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Reference/Elements/title) Element des Dokuments).

> [!NOTE]
> Das Verschachteln mehrerer `<h1>` Elemente in verschachtelten [Bereichselementen](/de/docs/Web/HTML/Reference/Elements#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Dies wurde jedoch nie als Best Practice angesehen und ist jetzt nicht mehr konform. Lesen Sie mehr unter [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Es wird bevorzugt, nur ein `<h1>` pro Seite zu verwenden und [Überschriften zu verschachteln](#verschachteln), ohne Ebenen zu überspringen.

### Festlegen einer einheitlichen Schriftgröße für `<h1>`

Vor Mai 2025 spezifizierte der [HTML-Standard](https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings), dass `<h1>` Elemente in einem `<section>`, `<article>`, `<aside>`, oder `<nav>` Element als `<h2>` dargestellt werden sollten (kleinere {{cssxref("font-size")}} mit angepasstem {{cssxref("margin-block")}}), oder als `<h3>`, wenn sie eine weitere Ebene verschachtelt sind usw. Dieser kontextabhängige Standardstil wurde nun [entfernt](https://github.com/whatwg/html/issues/7867).

Um eine konsistente `<h1>` Darstellung bei Browsern zu gewährleisten, die den alten kontextabhängigen Standardstil implementieren, verwenden Sie die folgende Style-Regel:

```css
h1 {
  margin-block: 0.67em;
  font-size: 2em;
}
```

Alternativ, um andere Style-Regeln, die auf `<h1>` abzielen, nicht zu überschreiben, können Sie {{cssxref(":where()")}} verwenden, welches keine Spezifität hat:

```css
:where(h1) {
  margin-block: 0.67em;
  font-size: 2em;
}
```

## Barrierefreiheit

### Navigation

Eine gängige Navigationstechnik für Benutzer von Bildschirmlesesoftware ist das schnelle Springen von einer Überschrift zur nächsten, um den Inhalt der Seite zu bestimmen. Aus diesem Grund ist es wichtig, keine Überschriftenebenen zu überspringen. Dies könnte Verwirrung stiften, da die Person, die auf diese Weise navigiert, sich fragen könnte, wo die fehlende Überschrift geblieben ist.

**Machen Sie das nicht:**

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

#### Verschachteln

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Inhalts der Seite widerzuspiegeln. Die meisten Bildschirmleser können auch eine geordnete Liste aller Überschriften auf einer Seite generieren, was einer Person helfen kann, die Inhaltsstruktur schnell zu bestimmen und zu verschiedenen Überschriften zu navigieren.

Angesichts der folgenden Seitenstruktur:

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

Würden Bildschirmleser eine Liste wie diese erzeugen:

1. `h1` Käfer
   1. `h2` Etymologie
   2. `h2` Verbreitung und Vielfalt
   3. `h2` Evolution
      1. `h3` Spätpaläozoikum
      2. `h3` Jura
      3. `h3` Kreidezeit
      4. `h3` Känozoikum

   4. `h2` Externe Morphologie
      1. `h3` Kopf
         1. `h4` Mundwerkzeuge

      2. `h3` Thorax
         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Beine
      4. `h3` Flügel
      5. `h3` Abdomen

Wenn Überschriften verschachtelt sind, dürfen bei Schließen eines Unterabschnitts Überschriftenebenen "übersprungen" werden.

- [Headings • Page Structure • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Kennzeichnung von Bereichsinhalten

Eine weitere gängige Navigationstechnik für Benutzer von Bildschirmlesesoftware ist das Erzeugen einer Liste von [Bereichsinhalten](/de/docs/Web/HTML/Reference/Elements#content_sectioning) und die Verwendung, um das Layout der Seite zu bestimmen.

Bereichsinhalte können mit einer Kombination der Attribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) gekennzeichnet werden, wobei das Label den Zweck des Abschnitts prägnant beschreibt. Diese Technik ist nützlich für Situationen, in denen mehr als ein Bereichselement auf derselben Seite vorhanden ist.

#### Beispiele für Bereichsinhalte

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

In diesem Beispiel würde die Bildschirmlesetechnologie ankündigen, dass es zwei {{HTMLElement("nav")}} Abschnitte gibt, einen namens "Hauptnavigation" und einen namens "Fußzeilennavigation". Wenn keine Labels bereitgestellt würden, müsste die Person, die Bildschirmlesesoftware verwendet, möglicherweise den Inhalt jedes `nav` Elements untersuchen, um deren Zweck zu bestimmen.

- [Using the aria-labelledby attribute](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Beispiele

### Alle Überschriften

Der folgende Code zeigt alle verwendeten Überschriftenebenen.

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
          >Flow-Inhalt</a
        >, Überschrifteninhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role"
          >heading</a
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
