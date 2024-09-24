---
title: "<h1>–<h6>: Die HTML Abschnittsüberschrift-Elemente"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: 4e4ec447add8295411b75e8a9c0bf0c5c7eab786
---

{{HTMLSidebar}}

Die **`<h1>`** bis **`<h6>`** [HTML](/de/docs/Web/HTML)-Elemente repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene und `<h6>` ist die niedrigste. Standardmäßig erstellen alle Überschriftselemente einen [Block-Level](/de/docs/Glossary/Block-level_content)-Block im Layout, der auf einer neuen Zeile beginnt und die volle Breite des umgebenden Blocks einnimmt.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

## Attribute

Diese Elemente enthalten nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Überschrifteninformationen können von Benutzeragenten verwendet werden, um automatisch ein Inhaltsverzeichnis für ein Dokument zu erstellen.
- Verwenden Sie keine Überschriftselemente, um Text zu vergrößern. Verwenden Sie stattdessen die {{glossary("CSS")}}-{{cssxref("font-size")}}-Eigenschaft.
- Überspringen Sie keine Überschriftsebenen: Beginnen Sie immer mit `<h1>`, gefolgt von `<h2>` und so weiter.

### Mehrfache Verwendung von `<h1>`-Elementen auf einer Seite vermeiden

Obwohl die Verwendung mehrerer `<h1>`-Elemente auf einer Seite durch den HTML-Standard erlaubt ist (solange sie nicht [verschachtelt](#verschachtelung) sind), gilt dies nicht als Best Practice. Eine Seite sollte im Allgemeinen ein einziges `<h1>`-Element haben, das den Inhalt der Seite beschreibt (ähnlich dem [`<title>`](/de/docs/Web/HTML/Element/title)-Element des Dokuments).

> [!NOTE]
> Das Verschachteln mehrerer `<h1>`-Elemente in verschachtelten [Abschnittelementen](/de/docs/Web/HTML/Element#content_sectioning) war in älteren Versionen des HTML-Standards erlaubt. Dies wurde jedoch nie als Best Practice angesehen und ist jetzt nicht konform. Lesen Sie mehr unter [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Bevorzugen Sie die Verwendung eines einzigen `<h1>` pro Seite und [verschachteln Sie Überschriften](#verschachtelung), ohne Ebenen zu überspringen.

## Barrierefreiheit

### Navigation

Eine gängige Navigationstechnik für Benutzer von Bildschirmlesesoftware besteht darin, schnell von Überschrift zu Überschrift zu springen, um den Inhalt der Seite zu bestimmen. Aus diesem Grund ist es wichtig, keine Überschriftsebenen zu überspringen. Andernfalls kann es zu Verwirrung kommen, da die Person, die auf diese Weise navigiert, sich fragt, wo die fehlende Überschrift ist.

**Das sollten Sie vermeiden:**

```html example-bad
<h1>Überschriftenebene 1</h1>
<h3>Überschriftenebene 3</h3>
<h4>Überschriftenebene 4</h4>
```

**Das ist vorzuziehen:**

```html example-good
<h1>Überschriftenebene 1</h1>
<h2>Überschriftenebene 2</h2>
<h3>Überschriftenebene 3</h3>
```

#### Verschachtelung

Überschriften können als Unterabschnitte verschachtelt werden, um die Organisation des Inhalts der Seite widerzuspiegeln. Die meisten Screenreader können auch eine geordnete Liste aller Überschriften auf einer Seite generieren, was einer Person schnell helfen kann, die Inhaltshierarchie zu bestimmen und zu verschiedenen Überschriften zu navigieren.

Gegeben die folgende Seitenstruktur:

```html
<h1>Käfer</h1>

<h2>Etymologie</h2>

<h2>Verteilung und Vielfalt</h2>

<h2>Evolution</h2>
<h3>Spätes Paläozoikum</h3>
<h3>Jura</h3>
<h3>Kreide</h3>
<h3>Känozoikum</h3>

<h2>Äußere Morphologie</h2>
<h3>Kopf</h3>
<h4>Mundwerkzeuge</h4>
<h3>Brust</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
<h3>Beine</h3>
<h3>Flügel</h3>
<h3>Abdomen</h3>
```

Screenreader würden eine Liste wie diese generieren:

1. `h1` Käfer

   1. `h2` Etymologie
   2. `h2` Verteilung und Vielfalt
   3. `h2` Evolution

      1. `h3` Spätes Paläozoikum
      2. `h3` Jura
      3. `h3` Kreide
      4. `h3` Känozoikum

   4. `h2` Äußere Morphologie

      1. `h3` Kopf

         1. `h4` Mundwerkzeuge

      2. `h3` Brust

         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Beine
      4. `h3` Flügel
      5. `h3` Abdomen

Wenn Überschriften verschachtelt sind, können Ebene "übersprungen" werden, wenn ein Unterabschnitt geschlossen wird.

- [Überschriften • Seitenstruktur • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Understanding WCAG, Guideline 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgs Kriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Understanding WCAG, Guideline 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgs Kriteriums 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Verständnis des Erfolgs Kriteriums 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Verständnis des Erfolgs Kriteriums 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Abschnittsinhalte kennzeichnen

Eine weitere gängige Navigationstechnik für Benutzer von Bildschirmlesesoftware besteht darin, eine Liste von [Abschnittsinhalten](/de/docs/Web/HTML/Element#content_sectioning) zu erstellen und diese zu verwenden, um das Layout der Seite zu bestimmen.

Abschnittsinhalte können mit einer Kombination der [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribute gekennzeichnet werden, wobei das Label den Zweck des Abschnitts kurz beschreibt. Diese Technik ist nützlich für Situationen, in denen mehr als ein Abschnittselement auf derselben Seite vorhanden ist.

#### Beispiele für Abschnittsinhalte

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Primärnavigation</h2>
    <!-- Navigationspunkte -->
  </nav>
</header>

<!-- Seiteninhalt -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Fußzeilennavigation</h2>
    <!-- Navigationspunkte -->
  </nav>
</footer>
```

{{EmbedLiveSample('Sectioning_content_examples')}}

In diesem Beispiel würde die Screenreader-Technologie ankündigen, dass es zwei {{HTMLElement("nav")}}-Abschnitte gibt, einer namens "Primärnavigation" und einer namens "Fußzeilennavigation". Wenn keine Labels bereitgestellt würden, müsste die Person, die Bildschirmlesesoftware verwendet, möglicherweise den Inhalt jedes `nav`-Elements untersuchen, um deren Zweck zu bestimmen.

- [Verwendung des aria-labelledby-Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Markieren von Regionen • Seitenstruktur • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Beispiele

### Alle Überschriften

Der folgende Code zeigt alle Überschriftenebenen in Gebrauch.

```html
<h1>Überschriftenebene 1</h1>
<h2>Überschriftenebene 2</h2>
<h3>Überschriftenebene 3</h3>
<h4>Überschriftenebene 4</h4>
<h5>Überschriftenebene 5</h5>
<h6>Überschriftenebene 6</h6>
```

{{EmbedLiveSample('All_headings', '280', '300')}}

### Beispielseite

Der folgende Code zeigt einige Überschriften mit etwas Inhalt unter ihnen.

```html
<h1>Überschriftselemente</h1>
<h2>Zusammenfassung</h2>
<p>Hier steht etwas Text…</p>

<h2>Beispiele</h2>
<h3>Beispiel 1</h3>
<p>Hier steht etwas Text…</p>

<h3>Beispiel 2</h3>
<p>Hier steht etwas Text…</p>

<h2>Siehe auch</h2>
<p>Hier steht etwas Text…</p>
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
        >, Überschrifteninhalt, greifbarer Inhalt.
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
      <th scope="row">Tags-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
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
