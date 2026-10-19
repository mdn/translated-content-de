---
title: HTML-Abschnittsüberschriftenelemente `<h1>`–`<h6>`
short-title: <h1>–<h6>
slug: Web/HTML/Reference/Elements/Heading_Elements
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

Die [HTML](/de/docs/Web/HTML)-Elemente **`<h1>`** bis **`<h6>`** repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste und `<h6>` die niedrigste Ebene. Standardmäßig erzeugen alle Überschriftenelemente im Layout eine {{Glossary("Block-level_content", "Block-Level")}}-Box. Sie beginnt in einer neuen Zeile und nimmt die gesamte verfügbare Breite ihres umschließenden Blocks ein.

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

Diese Elemente unterstützen nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

Mit den globalen Attributen [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) und [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) lässt sich die berechnete Überschriftenebene dieser Elemente anpassen.

## Verwendungshinweise

- User Agents können anhand der Überschrifteninformationen automatisch ein Inhaltsverzeichnis für ein Dokument erstellen.
- Verwenden Sie Überschriftenelemente nicht, um die Textgröße zu ändern. Verwenden Sie stattdessen die {{Glossary("CSS", "CSS")}}-Eigenschaft {{cssxref("font-size")}}.
- Überspringen Sie keine Überschriftenebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Vermeiden Sie mehrere `<h1>`-Elemente auf einer Seite

Der HTML-Standard erlaubt zwar mehrere `<h1>`-Elemente auf einer Seite, sofern sie nicht [verschachtelt](#verschachtelung) sind. Dies gilt jedoch nicht als Best Practice. Eine Seite sollte in der Regel ein einzelnes `<h1>`-Element haben, das ihren Inhalt beschreibt – ähnlich wie das [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element des Dokuments.

> [!NOTE]
> Die Verschachtelung mehrerer `<h1>`-Elemente in ineinander verschachtelten [Elementen zur Inhaltsgliederung](/de/docs/Web/HTML/Reference/Elements#content_sectioning) war in älteren Versionen des HTML-Standards zulässig. Sie galt jedoch nie als Best Practice und entspricht heute nicht mehr dem Standard. Weitere Informationen finden Sie unter [Es gibt keinen Algorithmus für die Dokumentgliederung](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Verwenden Sie möglichst nur ein `<h1>`-Element pro Seite und [ordnen Sie Überschriften hierarchisch an](#verschachtelung), ohne Ebenen zu überspringen.

### Eine einheitliche Schriftgröße für `<h1>` festlegen

Vor Mai 2025 legte der [HTML-Standard](https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings) fest, dass `<h1>`-Elemente innerhalb eines `<section>`-, `<article>`-, `<aside>`- oder `<nav>`-Elements wie ein `<h2>` dargestellt werden sollten (mit kleinerem {{cssxref("font-size")}} und angepasstem {{cssxref("margin-block")}}). Bei einer weiteren Verschachtelungsebene sollten sie wie ein `<h3>` dargestellt werden und so weiter. Dieser spezielle, kontextabhängige Standardstil wurde inzwischen [entfernt](https://github.com/whatwg/html/issues/7867).

Damit `<h1>` auch in Browsern einheitlich dargestellt wird, die den alten kontextabhängigen Standardstil verwenden, nutzen Sie die folgende Stilregel:

```css
h1 {
  margin-block: 0.67em;
  font-size: 2em;
}
```

Wenn Sie andere Stilregeln für `<h1>` nicht überschreiben möchten, können Sie alternativ {{cssxref(":where()")}} verwenden. Dieser Selektor hat eine Spezifität von null:

```css
:where(h1) {
  margin-block: 0.67em;
  font-size: 2em;
}
```

## Barrierefreiheit

### Navigation

Personen, die Screenreader verwenden, springen häufig schnell von Überschrift zu Überschrift, um sich einen Überblick über den Seiteninhalt zu verschaffen. Deshalb ist es wichtig, keine Überschriftenebenen zu überspringen. Andernfalls kann Verwirrung entstehen, weil sich die navigierende Person möglicherweise fragt, wo die fehlende Überschrift ist.

**So nicht:**

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

**Stattdessen:**

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### Verschachtelung

Überschriften können als Unterabschnitte hierarchisch angeordnet werden, um die Struktur des Seiteninhalts abzubilden. Die meisten Screenreader können außerdem eine geordnete Liste aller Überschriften einer Seite erstellen. So lässt sich die Inhaltshierarchie schnell erfassen und zu verschiedenen Überschriften navigieren.

Bei folgender Seitenstruktur:

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

würden Screenreader eine Liste wie diese erstellen:

1. `h1` Käfer
   1. `h2` Etymologie
   2. `h2` Verbreitung und Vielfalt
   3. `h2` Evolution
      1. `h3` Spätes Paläozoikum
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

Bei hierarchisch angeordneten Überschriften dürfen beim Verlassen eines Unterabschnitts Überschriftenebenen „übersprungen“ werden.

- [Überschriften • Seitenstruktur • WAI-Tutorials zur Barrierefreiheit im Web](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 1.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.1 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erfolgskriterium 2.4.1 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Erfolgskriterium 2.4.6 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Erfolgskriterium 2.4.10 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Abschnitte beschriften

Eine weitere häufige Navigationstechnik für Personen, die Screenreader verwenden, besteht darin, eine Liste der [Elemente zur Inhaltsgliederung](/de/docs/Web/HTML/Reference/Elements#content_sectioning) zu erstellen und daraus den Aufbau der Seite zu erschließen.

Solche Abschnitte können mit einer Kombination aus den Attributen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) beschriftet werden. Die Beschriftung sollte den Zweck des Abschnitts knapp beschreiben. Diese Technik ist nützlich, wenn sich mehrere gliedernde Elemente auf derselben Seite befinden.

#### Beispiele für beschriftete Abschnitte

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

In diesem Beispiel würde ein Screenreader ansagen, dass es zwei {{HTMLElement("nav")}}-Abschnitte gibt: einen mit der Bezeichnung „Primäre Navigation“ und einen mit der Bezeichnung „Footer-Navigation“. Ohne diese Beschriftungen müsste die Person möglicherweise den Inhalt jedes `nav`-Elements untersuchen, um dessen Zweck zu erkennen.

- [Das Attribut aria-labelledby verwenden](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Bereiche beschriften • Seitenstruktur • W3C-WAI-Tutorials zur Barrierefreiheit im Web](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

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

Der folgende Code zeigt einige Überschriften mit zugehörigem Inhalt.

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
          >Flussinhalt</a
        >, Überschrifteninhalt, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Nicht zulässig; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role"
          >heading</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
