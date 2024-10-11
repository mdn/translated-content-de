---
title: "<h1>–<h6>: Die HTML Abschnittsüberschrift-Elemente"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML)-Elemente repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene und `<h6>` die niedrigste. Standardmäßig erzeugen alle Überschrift-Elemente eine {{Glossary("Block-level_content", "Block-Level")}}-Box im Layout, beginnend in einer neuen Zeile und nehmen die gesamte verfügbare Breite in ihrem umgebenden Block ein.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

## Attribute

Diese Elemente beinhalten nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

- Überschrifteninformationen können von Benutzeragenten genutzt werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie Überschrift-Elemente nicht, um Text zu vergrößern. Stattdessen sollten Sie die {{Glossary("CSS", "CSS")}} {{cssxref("font-size")}}-Eigenschaft verwenden.
- Überspringen Sie keine Überschriftsebenen: Beginnen Sie stets mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Verwenden Sie nicht mehrere `<h1>`-Elemente auf einer Seite

Obwohl die Verwendung mehrerer `<h1>`-Elemente auf einer Seite vom HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachtelung) sind), wird dies nicht als Best Practice angesehen. Eine Seite sollte in der Regel ein einzelnes `<h1>`-Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Element/title)-Element des Dokuments).

> [!NOTE]
> Das Verschachteln mehrerer `<h1>`-Elemente in verschachtelten [Inhaltsabschnitts-Elementen](/de/docs/Web/HTML/Element#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Es wurde jedoch nie als Best Practice angesehen und ist nun nicht mehr normkonform. Lesen Sie mehr in [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Bevorzugen Sie die Verwendung eines einzigen `<h1>` pro Seite und [verschachteln Sie Überschriften](#verschachtelung), ohne Ebenen zu überspringen.

## Barrierefreiheit

### Navigation

Eine gängige Navigationstechnik für Benutzer von Screenreading-Software ist das schnelle Springen von Überschrift zu Überschrift, um den Inhalt der Seite zu bestimmen. Aus diesem Grund ist es wichtig, keine Überschriftsebene zu überspringen. Wenn dies geschieht, kann es zu Verwirrung führen, da die Person, die auf diese Weise navigiert, sich fragen könnte, wo die fehlende Überschrift ist.

**Vermeiden Sie dies:**

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

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Inhalts der Seite widerzuspiegeln. Die meisten Screenreader können auch eine geordnete Liste aller Überschriften auf einer Seite erstellen, die einer Person hilft, die Inhaltsstruktur schnell zu bestimmen und zu verschiedenen Überschriften zu navigieren.

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

Würden Screenreader eine Liste wie diese erstellen:

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

         1. `h4` Mundteile

      2. `h3` Thorax

         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Beine
      4. `h3` Flügel
      5. `h3` Abdomen

Wenn Überschriften verschachtelt sind, können Überschriftsebenen beim Schließen eines Unterabschnitts "übersprungen" werden.

- [Überschriften • Seitenstruktur • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Verständnis von WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Verständnis von WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Verständnis des Erfolgskriteriums 2.4.6 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Verständnis des Erfolgskriteriums 2.4.10 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Bereichsinhalte beschriften

Eine weitere gängige Navigationstechnik für Benutzer von Screenreading-Software ist es, eine Liste von [Bereichsinhalten](/de/docs/Web/HTML/Element#content_sectioning) zu generieren und diese zu verwenden, um das Layout der Seite zu bestimmen.

Bereichsinhalte können unter Verwendung einer Kombination der Attribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Global_attributes/id) beschriftet werden, wobei die Beschriftung den Zweck des Bereichs knapp beschreibt. Diese Technik ist nützlich in Situationen, in denen mehr als ein Abschnittselement auf derselben Seite vorhanden ist.

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

In diesem Beispiel würde die Screenreader-Technologie ankündigen, dass es zwei {{HTMLElement("nav")}} Bereiche gibt, einen mit dem Namen "Primäre Navigation" und einen mit dem Namen "Fußzeilen-Navigation". Wenn keine Beschriftungen bereitgestellt würden, müsste die Person, die Screenreading-Software verwendet, möglicherweise den Inhalt jedes `nav`-Elements untersuchen, um dessen Zweck zu bestimmen.

- [Verwendung des aria-labelledby Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Bereiche Beschriften • Seitenstruktur • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

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

Der folgende Code zeigt einige Überschriften mit einigen Inhalten darunter.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, Überschrift-Inhalt, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließenden Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/heading_role">Überschrift</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> oder
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
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
