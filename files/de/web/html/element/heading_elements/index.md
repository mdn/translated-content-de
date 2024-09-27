---
title: "<h1>–<h6>: Die HTML Abschnittsüberschrift-Elemente"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: 4e4ec447add8295411b75e8a9c0bf0c5c7eab786
---

{{HTMLSidebar}}

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML) Elemente repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene und `<h6>` ist die niedrigste. Standardmäßig erstellen alle Überschriftselemente eine [Block-Level](/de/docs/Glossary/Block-level_content) Box im Layout, die auf einer neuen Zeile beginnt und die volle Breite ihres umgebenden Blocks einnimmt.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

## Attribute

Diese Elemente beinhalten nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Gebrauchshinweise

- Überschrifteninformationen können von Benutzeragenten verwendet werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie keine Überschriftselemente, um Text zu vergrößern. Verwenden Sie stattdessen die [CSS](/de/docs/Glossary/CSS) {{cssxref("font-size")}} Eigenschaft.
- Überspringen Sie keine Überschriftenebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Verwenden Sie nicht mehrere `<h1>` Elemente auf einer Seite

Obwohl die Verwendung mehrerer `<h1>` Elemente auf einer Seite durch den HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachtelung) sind), wird dies nicht als Best Practice angesehen. Eine Seite sollte im Allgemeinen ein einzelnes `<h1>` Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Element/title) Element des Dokuments).

> [!NOTE]
> Die Verschachtelung mehrerer `<h1>` Elemente in geschachtelten [Abschnittselementen](/de/docs/Web/HTML/Element#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Dies wurde jedoch nie als Best Practice angesehen und ist jetzt nicht konform. Mehr in [Es gibt keinen Dokument-Outline-Algorithmus](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Es wird empfohlen, nur ein `<h1>` pro Seite zu verwenden und [Überschriften zu verschachteln](#verschachtelung), ohne Ebenen zu überspringen.

## Barrierefreiheit

### Navigation

Eine gängige Navigationstechnik für Benutzer von Bildschirmlesesoftware besteht darin, schnell von Überschrift zu Überschrift zu springen, um den Inhalt der Seite zu erfassen. Aus diesem Grund ist es wichtig, keine Überschriftenebenen zu überspringen. Andernfalls könnte Verwirrung entstehen, da die Person, die auf diese Weise navigiert, sich fragen könnte, wo die fehlende Überschrift ist.

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

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Seiteninhalts widerzuspiegeln. Die meisten Bildschirmleser können auch eine geordnete Liste aller Überschriften auf einer Seite erzeugen, was einer Person helfen kann, die Inhalts-Hierarchie schnell zu erfassen und zu unterschiedlichen Überschriften zu navigieren.

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
- [MDN Verständnis WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Verständnis WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Verständnis des Erfolgskriteriums 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Verständnis des Erfolgskriteriums 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Kennzeichnung von Abschnittsinhalten

Eine weitere häufige Navigationstechnik für Benutzer von Bildschirmlesesoftware besteht darin, eine Liste von [Abschnittsinhalten](/de/docs/Web/HTML/Element#content_sectioning) zu erstellen und diese zu verwenden, um das Layout der Seite zu bestimmen.

Abschnittsinhalte können mit einer Kombination aus den Attributen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Global_attributes#id) gekennzeichnet werden, wobei das Label den Zweck des Abschnitts prägnant beschreibt. Diese Technik ist nützlich, wenn es mehr als ein Abschnittselement auf derselben Seite gibt.

#### Abschnittsinhalt-Beispiele

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

In diesem Beispiel würde die Bildschirmlesetechnologie ankündigen, dass es zwei {{HTMLElement("nav")}} Abschnitte gibt, einen namens "Primäre Navigation" und einen namens "Fußzeilen-Navigation". Wenn keine Beschriftungen zur Verfügung gestellt würden, müsste die Person, die Bildschirmlesesoftware verwendet, möglicherweise jeden `nav`-Inhalt durchsuchen, um seinen Zweck zu bestimmen.

- [Verwendung des aria-labelledby Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Kennzeichnung von Regionen • Seitenstruktur • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Beispiele

### Alle Überschriften

Der folgende Code zeigt alle verwendeten Überschriftsstufen.

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

Der folgende Code zeigt einige Überschriften mit einigem Inhalt darunter.

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
          >Flussinhalt</a
        >, Überschriftsinhalt, fühlbarer Inhalt.
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
