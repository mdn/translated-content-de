---
title: "<h1>–<h6>: Die HTML-Abschnittsüberschriftselemente"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: 4e4ec447add8295411b75e8a9c0bf0c5c7eab786
---

{{HTMLSidebar}}

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML) Elemente repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene und `<h6>` ist die niedrigste. Standardmäßig erzeugen alle Überschriftselemente einen [Block-Level](/de/docs/Glossary/Block-level_content) Block im Layout, beginnen in einer neuen Zeile und nehmen die gesamte verfügbare Breite ihres enthaltenen Blocks ein.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

## Attribute

Diese Elemente beinhalten nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Überschriftinformationen können von Benutzeragenten verwendet werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie keine Überschriftselemente, um Text zu verkleinern. Verwenden Sie stattdessen die [CSS](/de/docs/Glossary/CSS) {{cssxref("font-size")}} Eigenschaft.
- Überspringen Sie keine Überschriftsebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Vermeiden Sie die Verwendung mehrerer `<h1>` Elemente auf einer Seite

Obwohl die Verwendung mehrerer `<h1>` Elemente auf einer Seite vom HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachtelung) sind), wird dies nicht als bewährte Praxis angesehen. Eine Seite sollte im Allgemeinen ein einzelnes `<h1>` Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Element/title) Element des Dokuments).

> [!NOTE]
> Das Verschachteln mehrerer `<h1>` Elemente in verschachtelten [Abschnittselementen](/de/docs/Web/HTML/Element#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Dies wurde jedoch nie als bewährte Praxis angesehen und ist jetzt nicht konform. Lesen Sie mehr unter [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Es ist vorzuziehen, nur ein `<h1>` pro Seite zu verwenden und [Überschriften zu verschachteln](#verschachtelung), ohne Ebenen zu überspringen.

## Barrierefreiheit

### Navigation

Eine gängige Navigationstechnik für Benutzer von Bildschirmlesesoftware ist es, schnell von Überschrift zu Überschrift zu springen, um den Inhalt der Seite zu bestimmen. Deshalb ist es wichtig, keine eine oder mehrere Überschriftsebenen zu überspringen. Andernfalls kann Verwirrung entstehen, da die Person, die auf diese Weise navigiert, sich fragt, wo die fehlende Überschrift ist.

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

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Inhalts der Seite widerzuspiegeln. Die meisten Bildschirmleser können auch eine geordnete Liste aller Überschriften auf einer Seite erzeugen, was einer Person hilft, die Inhaltsstruktur schnell zu bestimmen und zu verschiedenen Überschriften zu navigieren.

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

würden Bildschirmleser eine Liste wie diese erzeugen:

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

Wenn Überschriften verschachtelt werden, können Überschriftsebenen "übersprungen" werden, wenn ein Unterabschnitt geschlossen wird.

- [Headings • Page Structure • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Abschnittsinhalte beschriften

Eine weitere gängige Navigationstechnik für Benutzer von Bildschirmlesesoftware ist es, eine Liste von [Inhaltsabschnitten](/de/docs/Web/HTML/Element#content_sectioning) zu generieren und diese zu verwenden, um das Layout der Seite zu bestimmen.

Inhaltsbereiche können durch eine Kombination der Attribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Global_attributes#id) beschriftet werden, wobei die Beschriftung den Zweck des Abschnitts prägnant beschreibt. Diese Technik ist nützlich in Situationen, in denen mehr als ein Abschnittselement auf derselben Seite vorhanden ist.

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

In diesem Beispiel würde Bildschirmlesetechnologie ankündigen, dass es zwei {{HTMLElement("nav")}} Abschnitte gibt, einen namens "Primäre Navigation" und einen namens "Fußzeilennavigation". Wenn keine Beschriftungen bereitgestellt würden, müsste die Person, die Bildschirmlesesoftware verwendet, den Inhalt jedes `nav` Elements überprüfen, um deren Zweck zu ermitteln.

- [Using the aria-labelledby attribute](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Beispiele

### Alle Überschriften

Der folgende Code zeigt alle Überschriftsebenen in Verwendung.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, Überschrifteninhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Eröffnungs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/heading_role"
          >Überschrift</a
        >
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
