---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{HTMLSidebar}}

Das **`rel`** Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, die unterstützten Werte hängen vom Element ab, an dem das Attribut gefunden wird.

Die Art der Beziehungen wird durch den Wert des `rel` Attributs angegeben, der, falls vorhanden, ein ungeordnetes Set von eindeutigen, durch Leerzeichen getrennten Schlüsselwörtern sein muss. Anders als ein `class` Name, der keine Semantik ausdrückt, muss das `rel` Attribut Token ausdrücken, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel` Attributs sind das [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vom Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wenn ein `rel` Attribut verwendet wird, das in keiner der drei oben genannten Quellen vorhanden ist, generieren einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung.

Die folgende Tabelle listet einige der wichtigsten existierenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte einzigartig sein.

| `rel` Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                                                            | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                                      | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                            | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                                                                             | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorwegnehmend durchzuführen.                                                                                                                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument ist nicht Teil derselben Seite wie das aktuelle Dokument.                                                                                                                                                                                                                                    | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                               | Erlaubt, dass die Seite {{Glossary("Render_blocking", "render-blocked")}} wird, bis die wesentlichen Teile des Dokuments geparst sind, damit es konsistent dargestellt wird.                                                                                                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Symbol, das das aktuelle Dokument darstellt.                                                                                                                                                                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist.                                                                                                                                                                              | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web App Manifest.                                                                                                                                                                                                                                                                                                       | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                                        | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Weist den Browser an, das Skript vorwegnehmend abzurufen und im Modulverzeichnis des Dokuments für spätere Auswertungen zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                     | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                                            | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen Top-Level-Browsing-Kontext, der kein zusätzlicher Browsing-Kontext ist, wenn der Hyperlink einen dieser erstellen würde (d.h., hat einen geeigneten `target` Attributwert).                                                                                                                              | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer` Header wird inkludiert. Zudem hat es den gleichen Effekt wie `noopener`.                                                                                                                                                                                                                                 | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                               | Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein zusätzlicher Browsing-Kontext ist (d.h., hat `"_blank"` als `target` Attributwert).                                                                                               | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument behandelt.                                                                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent vorwegnehmend eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource vorwegnehmend abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine folgende Navigation benötigt wird.                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource vorwegnehmend abrufen und zwischenspeichern muss, um die aktuelle Navigation gemäß dem potenziellen Ziel zu unterstützen, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) Attribut (und die Priorität in Verbindung mit dem entsprechenden Ziel) gegeben ist. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource vorwegnehmend abrufen und auf eine Weise verarbeiten soll, die hilft, zukünftig eine schnellere Antwort zu liefern.                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Bietet einen Link zu Informationen über die Datenbereitstellungs- und Nutzungspraktiken, die auf das aktuelle Dokument angewendet werden.                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Bietet einen Link zu einer Ressource, die zum Durchsuchen des aktuellen Dokuments und seiner zugehörigen Seiten verwendet werden kann.                                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt ein Tag an (identifiziert durch die angegebene Adresse), das auf das aktuelle Dokument angewendet wird.                                                                                                                                                                                                            | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zu den Nutzungsbedingungen oder Vereinbarungen zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument verwenden möchten.                                                                                                                                                                            | Link                    | Link                                             | Nicht erlaubt           |

Das `rel` Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}} Elemente, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht case-sensitive.

Das `rel` Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder keiner der im Attribut angegebenen Werte unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource, abgesehen davon, dass ein Hyperlink zwischen den beiden besteht. In diesem Fall, falls das `rel` Attribut bei {{htmlelement('link')}} und {{htmlelement('form')}} fehlt, keine Schlüsselwörter enthält oder keines der oben genannten Leerzeichen-getrennten Schlüsselwörter vorhanden ist, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} werden weiterhin Links erstellen, jedoch ohne eine definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, abhängig von den Werten der anderen Attribute.

    - Mit dem [`stylesheet`](#stylesheet) Schlüsselwort auf einem `<link>`, wird ein [alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) Attribut, das sich von der Sprache des Dokuments unterscheidet, wird auf eine Übersetzung hingewiesen.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type) Attributwert `"application/rss+xml"` oder `"application/atom+xml"`, wird ein Hyperlink erstellt, der auf einen Syndikations-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls wird ein Hyperlink erstellt, der auf eine alternative Darstellung des aktuellen Dokuments verweist, dessen Art durch die [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type) Attribute gegeben ist.

      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, wird angegeben, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, wird angegeben, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Die `hreflang` und `type` Attribute können beide zusammen mit `alternate` angegeben sein.

      ```html
      <link
        rel="alternate"
        href="/fr/html/print"
        hreflang="fr"
        type="text/html"
        media="print"
        title="French HTML (for printing)" />
      <link
        rel="alternate"
        href="/fr/pdf"
        hreflang="fr"
        type="application/pdf"
        title="French PDF" />
      ```

- `author`

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}} Vorfahren bereitstellt, falls es einen gibt, andernfalls über das gesamte Dokument.

    Mit {{htmlelement('link')}} stellt es den Autor des gesamten Dokuments dar.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel` Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Gibt einen Permalink für das nächste übergeordnete {{htmlelement('article')}} Element an, falls es eines gibt. Wenn es keinen Vorfahren `<article>` Element gibt, gibt es einen Permalink für den Abschnitt, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert es die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}} Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorwegnehmend durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu verringern und dadurch die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich aufruft, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorwegnehmend durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links auf eine Weise zu gestalten, die dem Benutzer signalisiert, dass er die aktuelle Seite verlassen wird.
- `expect` {{experimental_inline}}

  - : Erlaubt, dass die Seite {{Glossary("Render_blocking", "render-blocked")}} wird, bis die wesentlichen Teile des Dokuments geparst sind, damit es konsistent dargestellt wird. Beachten Sie, dass das Render-Blocking nur auftritt, wenn es mit dem [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking) Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für mehr Informationen über seine Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `help` Schlüsselwort zeigt an, dass der verlinkte Inhalt kontextbezogene Hilfe bietet, indem er Informationen für das übergeordnete Element des Hyperlink-definierenden Elements und dessen Kind-Elemente bereitstellt. Wenn in `<link>` verwendet, bezieht sich die Hilfe auf das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} eingeschlossen ist und unterstützt wird, wird der Standard-{{cssxref('cursor')}} `help` statt `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Symbol, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon` Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type), und [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn sich später herausstellt, dass das am besten geeignete Symbol ungeeignet ist, weil es beispielsweise ein nicht unterstütztes Format verwendet, geht der Browser zum nächstbesten Kandidaten über usw.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apple iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribut, wie andere mobile Browser es tun, um ein Webseite-Symbol für Web Clip oder ein Platzhalter-Bild zu wählen.
    > Stattdessen verwendet es die nicht-standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) Links.

    > [!NOTE]
    > Der `shortcut` Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht-konform, wird ignoriert und **Web-Autoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig für die {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elemente, der `license` Wert gibt an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Wenn es sich nicht im {{HTMLElement("head")}} Element befindet, unterscheidet der Standard nicht, ob ein Hyperlink für einen bestimmten Teil des Dokuments oder für das gesamte Dokument gilt. Nur die Daten auf der Seite können dies angeben.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web App Manifest](/de/docs/Web/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen über verschiedene Ursprünge.
- `modulepreload`
  - : Nützlich zur verbesserten Leistung, und relevant für die {{htmlelement('link')}} überall im Dokument, das Setzen von `rel="modulepreload"` weist den Browser an, das Skript (und die Abhängigkeiten) vorwegnehmend abzurufen und im Modulverzeichnis des Dokuments für spätere Auswertungen zu speichern. `modulepreload` Links können sicherstellen, dass das Abrufen des Netzwerks mit dem Modul bereit (aber nicht ausgewertet) im Modulverzeichnis erfolgt, bevor es notwendig wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `next` Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` eingefügt ist, können Browser annehmen, dass das Dokument als nächstes abgerufen wird und es als Ressourcenvorabruf behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `nofollow` Schlüsselwort weist Suchmaschinen-Spider an, die Beziehung des Links zu ignorieren. Die nofollow Beziehung kann anzeigen, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Oft wird es von Suchmaschinenoptimierern genutzt, die behaupten, ihre Linkfarmen seien keine Spam-Seiten.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen Top-Level-Browsing-Kontext, der kein zusätzlicher Browsing-Kontext ist, wenn der Hyperlink einen dieser zu Beginn erstellen würde (d.h., hat einen geeigneten `target` Attributwert). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, indem dieser Wert einbezogen wird, wird der Referrer unbekannt gemacht (kein `Referer` Header wird hinzugefügt) und ein Top-Level-Browsing-Kontext erstellt, als ob `noopener` ebenfalls gesetzt wäre.
- `opener`
  - : Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein zusätzlicher Browsing-Kontext ist (d.h., hat `"_blank"` als `target` Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der die Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Gibt einen Hinweis an den Browser, der vorschlägt, dass er im Voraus eine Verbindung zur verlinkten Webseite öffnen soll, ohne private Informationen offenzulegen oder Inhalte herunterzuladen, sodass, wenn der Link gefolgt wird, die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorwegnehmend abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine folgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für mehr Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource vorwegnehmend abrufen und zwischenspeichern muss, um die aktuelle Navigation gemäß dem potenziellen Ziel zu unterstützen, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) Attribut (und die Priorität in Verbindung mit dem entsprechenden Ziel) gegeben ist. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorwegnehmend abrufen und auf eine Weise verarbeiten soll, die hilft, in der Zukunft eine schnellere Antwort zu liefern, zum Beispiel, indem er seine Subressourcen abruft oder ein Rendering durchführt.
- `prev`

  - : Ähnlich wie das [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `prev` Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link auf ein vorheriges Dokument in der Serie verweist, das das referenzierte Dokument ist.

    Hinweis: Das Synonym `previous` ist inkorrekt und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für die Elemente {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}, der `privacy-policy` Wert gibt an, dass das referenzierte Dokument die Datenschutzrichtlinie ist, die die Datenbereitstellungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für die Elemente {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `search` Schlüsselwort gibt an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell für die Suche im aktuellen Dokument, der Seite und verwandten Ressourcen entwickelt wurde.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) Plugin, das einfach zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}} Element, es importiert eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut ist nicht erforderlich, wenn es sich um ein `text/css` Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als ein Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate) Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall schließen Sie ein nicht-leeres [`title`](/de/docs/Web/HTML/Element/link#title) ein.

    Das externe Stylesheet wird weder verwendet noch sogar heruntergeladen, wenn die Medien nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media) Attributs übereinstimmen.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen über verschiedene Ursprünge.

- `tag`

  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, es gibt ein Tag an (identifiziert durch die angegebene Adresse), das auf das aktuelle Dokument angewendet wird. Der tag Wert gibt an, dass der Link auf ein Dokument verweist, das ein Tag beschreibt, das auf das Dokument angewendet wird, auf dem es sich befindet. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten angewendet werden, während der `tag` Wert des `rel` Attributs für ein einzelnes Dokument gedacht ist.

- `terms-of-service`

  - : Gültig für die {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, der `terms-of-service` Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern, die das Dokument verwenden möchten, beschreiben.

### Nicht-Standard-Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Gibt das Symbol für eine Web-Anwendung auf einem iOS-Gerät an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
