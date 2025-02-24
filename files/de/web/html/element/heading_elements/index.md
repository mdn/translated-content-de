---
title: "`<h1>`–`<h6>`: Die HTML-Abschnittsüberschriftselemente"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML)-Elemente repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene und `<h6>` ist die niedrigste. Standardmäßig erzeugen alle Überschriftselemente ein {{Glossary("Block-level_content", "Block-Level")}}-Box-Layout, das auf einer neuen Zeile beginnt und die volle verfügbare Breite innerhalb ihres Containing-Blocks einnimmt.

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

Diese Elemente beinhalten nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Überschrifteninformationen können von Benutzeragenten verwendet werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie keine Überschriftselemente, um Text zu vergrößern. Stattdessen nutzen Sie die {{Glossary("CSS", "CSS")}} {{cssxref("font-size")}}-Eigenschaft.
- Überspringen Sie keine Überschriftenebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Vermeiden Sie die Verwendung mehrerer `<h1>`-Elemente auf einer Seite

Obwohl die Verwendung mehrerer `<h1>`-Elemente auf einer Seite gemäß dem HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachtelung) sind), wird dies nicht als Best Practice angesehen. Eine Seite sollte generell ein einziges `<h1>`-Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Element/title)-Element des Dokuments).

> [!NOTE]
> Das Verschachteln mehrerer `<h1>`-Elemente in verschachtelten [Abschnittselementen](/de/docs/Web/HTML/Element#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Dies wurde jedoch nie als Best Practice angesehen und wird jetzt als nicht konform angesehen. Weitere Informationen finden Sie in [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Bevorzugen Sie die Verwendung eines einzigen `<h1>` pro Seite und [verschachteln Sie Überschriften](#verschachtelung), ohne Ebenen zu überspringen.

### Angabe einer einheitlichen Schriftgröße für `<h1>`

Der [HTML-Standard](https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings) spezifiziert, dass `<h1>`-Elemente in einem `<section>`, `<article>`, `<aside>` oder `<nav>`-Element als `<h2>` gerendert werden sollten (kleinere {{cssxref("font-size")}} mit angepasstem {{cssxref("margin-block")}}) oder als `<h3>`, wenn sie eine Ebene tiefer verschachtelt sind, und so weiter.

> [!NOTE]
> Es gibt einen [Vorschlag](https://github.com/whatwg/html/issues/7867), diesen speziellen Standardstil zu entfernen, sodass `<h1>` immer denselben Standardstil hat. Dieser Vorschlag ist derzeit in [Firefox Nightly implementiert](/de/docs/Mozilla/Firefox/Experimental_features#ua_styles_for_h1_nested_in_sectioning_elements).

Um eine konsistente `<h1>`-Darstellung sicherzustellen, verwenden Sie die folgende Stilregel:

```css
h1 {
  margin-block: 0.67em;
  font-size: 2em;
}
```

Alternativ können Sie, um das Überschreiben anderer Stilregeln, die `<h1>` anvisieren, zu vermeiden, {{cssxref(":where()")}} verwenden, das keine Spezifität hat:

```css
:where(h1) {
  margin-block: 0.67em;
  font-size: 2em;
}
```

## Barrierefreiheit

### Navigation

Eine häufige Navigationstechnik für Benutzer von Screenreader-Software besteht darin, schnell von Überschrift zu Überschrift zu springen, um den Inhalt der Seite zu bestimmen. Aus diesem Grund ist es wichtig, keine oder mehr Überschriftenebenen auszulassen. Dies kann zu Verwirrung führen, da die Person, die auf diese Weise navigiert, sich fragen kann, wo die fehlende Überschrift ist.

**Machen Sie dies nicht:**

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

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Inhalts der Seite widerzuspiegeln. Die meisten Screenreader können auch eine geordnete Liste aller Überschriften auf einer Seite erzeugen, was einer Person helfen kann, die Inhaltshierarchie schnell zu bestimmen und zu verschiedenen Überschriften zu navigieren.

Angenommen, folgende Seitenstruktur:

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

Screenreader würden eine Liste wie diese erzeugen:

1. `h1` Käfer

   1. `h2` Etymologie
   2. `h2` Verteilung und Vielfalt
   3. `h2` Evolution

      1. `h3` Spätpaleozoikum
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

Wenn Überschriften verschachtelt sind, können Ebenen beim Schließen eines Unterabschnitts "übersprungen" werden.

- [Überschriften • Seitenstruktur • WAI Web-Accessibility-Anleitungen](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN-Verständnis von WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%E2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN-Verständnis von WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%E2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erklärung des Erfolgskriteriums 2.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Erklärung des Erfolgskriteriums 2.4.6 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Erklärung des Erfolgskriteriums 2.4.10 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Beschriftung von Abschnittsinhalten

Eine weitere häufige Navigationstechnik für Benutzer von Screenreader-Software besteht darin, eine Liste von [Abschnittsinhalten](/de/docs/Web/HTML/Element#content_sectioning) zu generieren und diese zu verwenden, um das Layout der Seite zu bestimmen.

Abschnittsinhalte können mittels einer Kombination der [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribute beschriftet werden, wobei die Beschriftung den Zweck des Abschnitts kurz beschreibt. Diese Technik ist nützlich für Situationen, in denen sich mehr als ein Abschnittselement auf derselben Seite befindet.

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

In diesem Beispiel würde die Screenreader-Technologie ankündigen, dass es zwei {{HTMLElement("nav")}}-Abschnitte gibt, einen namens „Primäre Navigation“ und einen namens „Fußzeilen-Navigation“. Ohne bereitgestellte Beschriftungen müsste die Person, die Screenreader-Software verwendet, möglicherweise den Inhalt jedes `nav`-Elementes untersuchen, um deren Zweck zu bestimmen.

- [Verwendung des aria-labelledby-Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Beschriftung von Regionen • Seitenstruktur • W3C WAI Web-Accessibility-Anleitungen](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Beispiele

### Alle Überschriften

Der folgende Code zeigt die Verwendung aller Überschriftenebenen.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        >, Überschriftsinhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/heading_role"
          >heading</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
