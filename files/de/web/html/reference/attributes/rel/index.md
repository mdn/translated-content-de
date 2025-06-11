---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das **`rel`** Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig in {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, wobei die unterstützten Werte vom Element abhängen, auf dem das Attribut gefunden wird.

Die Art der Beziehungen wird durch den Wert des `rel` Attributs bestimmt, das, wenn vorhanden, einen Wert haben muss, der eine ungeordnete Menge von einzigartigen, durch Leerzeichen getrennten Schlüsselwörtern ist. Im Gegensatz zu einem `class` Namen, der keine Semantik ausdrückt, muss das `rel` Attribut Token enthalten, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für mögliche Werte des `rel` Attributs sind das [IANA Link Relation Registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei editierbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im Mikroformat-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) von der Living Standard. Wenn ein `rel` Wert, der in keiner der drei obigen Quellen vorhanden ist, verwendet wird, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten existierenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines leerzeichengetrennten Wertes sollte innerhalb dieses Wertes einzigartig sein.

| `rel` Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                     | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                     | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächsten umgebenden Abschnitt.                                                                                                                                                                                                                                                 | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                        | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompressions-Wörterbuch")}}, das für die Komprimierung zukünftiger Downloads von Ressourcen auf dieser Seite verwendet werden kann.                                                                                                | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Sagt dem Browser, dass er die DNS-Auflösung für den Ursprung der Zielressource präventiv durchführen soll.                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument gehört nicht zur gleichen Seite wie das aktuelle Dokument.                                                                                                                                                                                                            | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Ermöglicht, dass die Seite {{Glossary("Render_blocking", "render-blocked")}} werden kann, bis die wesentlichen Teile des Dokuments geparst sind, sodass es konsistent dargestellt wird.                                                                                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                 | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Lizenz abgedeckt ist.                                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web App Manifest.                                                                                                                                                                                                                                                                                | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                                   | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Sagt dem Browser, dass er das Skript präventiv laden und im Modul-Map des Dokuments speichern soll, um es später zu evaluieren. Optional können auch die Abhängigkeiten des Moduls geladen werden.                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                              | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                     | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink entweder von diesen beiden erstellt würde (d.h. wenn er einen geeigneten `target` Attributswert hat).                                                                                           | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Es wird kein `Referer`-Header enthalten sein. Zusätzlich hat dies die gleiche Wirkung wie `noopener`.                                                                                                                                                                                            | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink ansonsten einen obersten Browsing-Kontext erstellen würde, der nicht ein Hilfsbrowsing-Kontext ist (d.h. wenn `"_blank"` als `target` Attributwert gesetzt ist).                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument verarbeitet.                                                                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der User-Agent präventiv eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der User-Agent die Zielressource präventiv abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der User-Agent die Zielressource präventiv abrufen und zwischenspeichern muss, um sie gemäß dem potenziellen Ziel zu nutzen, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut (und die mit dem entsprechenden Ziel verbundene Priorität) angegeben ist. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)                           | Gibt an, dass der User-Agent die Zielressource präventiv abrufen und sie in einer Weise verarbeiten soll, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern.                                                                                                                  | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorhergehende Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraktiken, die auf das aktuelle Dokument zutreffen.                                                                                                                                                                    | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um im aktuellen Dokument und seinen verwandten Seiten zu suchen.                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Gibt ein Tag an (durch die angegebene Adresse identifiziert), das auf das aktuelle Dokument zutrifft.                                                                                                                                                                                            | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zur Vereinbarung oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument verwenden wollen.                                                                                                                                                       | Link                    | Link                                             | Nicht erlaubt           |

Das `rel` Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} Elemente, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML Schlüsselwortattributwerte sind diese Werte nicht groß- und kleinschreibungssensitiv.

Das `rel` Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource, abgesehen davon, dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel` Attribut fehlt, keine Schlüsselwörter hat oder wenn nicht eines oder mehrere der oben aufgeführten durch Leerzeichen getrennten Schlüsselwörter vorhanden sind, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} werden trotzdem Links erstellen, aber ohne eine definierte Beziehung.

## Wert

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Mit dem [`stylesheet`](#stylesheet) Schlüsselwort auf einem `<link>`, erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) Attribut, das sich von der Sprachversion des Dokuments unterscheidet, zeigt es eine Übersetzung an.
    - Mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attributswert `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink, der auf einen Syndizierungs-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribute angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, zeigt es an, dass das referenzierte Dokument ein alternatives Format ist (wie ein PDF).
      - Die `hreflang` und `type` Attribute können beide zusammen mit `alternate` angegeben werden.

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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen {{htmlelement('article')}} Vorfahren, falls vorhanden, bereitstellt, andernfalls über das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributswert `rev="made"` wie `rel="author"` behandelt.

- `bookmark`
  - : Relevanter Wert des `rel` Attributs für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Gibt einen Permalink für das nächstgelegene umgebende {{htmlelement('article')}} Element, falls vorhanden. Falls kein Vorfahr `<article>` Element existiert, gibt einen Permalink für den Abschnitt, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompressions-Wörterbuch")}}, das für die Komprimierung zukünftiger Downloads von Ressourcen auf dieser Seite verwendet werden kann, sodass die Download-Größen dieser Ressourcen kleiner sind als bei der Standardkomprimierung.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}} Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es sagt dem Browser, dass er die DNS-Auflösung für den Ursprung der Zielressource präventiv durchführen soll. Nützlich für Ressourcen, die der Nutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und damit die Leistung zu verbessern, wenn der Nutzer tatsächlich auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource präventiv durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), wie in [resource hints](https://w3c.github.io/resource-hints/) beschrieben.
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links in einer Weise zu gestalten, die dem Nutzer anzeigt, dass er die aktuelle Seite verlassen wird.
- `expect` {{experimental_inline}}

  - : Ermöglicht es, dass die Seite {{Glossary("Render_blocking", "render-blocked")}} wird, bis die wesentlichen Teile des Dokuments geparst sind, sodass sie konsistent dargestellt wird. Beachten Sie, dass Render-Blocking nur auftritt, wenn es mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen über dessen Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help` Schlüsselwort gibt an, dass der verlinkte Inhalt kontext-sensitive Hilfe bietet und Informationen für das Elternelement des Elementes, das den Hyperlink definiert, und dessen Kinder bereitstellt. Wenn innerhalb eines `<link>` verwendet, ist die Hilfe für das gesamte Dokument. Wenn in {{htmlelement('a')}} und {{htmlelement('area')}} eingeschlossen und unterstützt, wird der Standard-{{cssxref('cursor')}} `help` anstelle von `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource repräsentiert das Symbol, eine Ressource zur Repräsentation der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon` Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser ihre [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type), und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribute, um das geeignetste Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn sich später herausstellt, dass das geeignetste Symbol ungeeignet ist, weil es beispielsweise ein nicht unterstütztes Format verwendet, geht der Browser zum nächstgeeigneten Symbol über und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut wird nicht in Chromium-basierten Browsern für `rel="icon"` unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribut, wie es andere mobile Browser tun, um ein Webseiten-Symbol für Web Clip oder einen Startplatzhalter auszuwählen.
    > Stattdessen verwendet es den nicht standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) entsprechend.

    > [!NOTE]
    > Der `shortcut` Linktyp wird oft vor `icon` gesehen, dieser Linktyp ist jedoch nicht konform, wird ignoriert und **Web-Autoren sollten ihn nicht mehr verwenden**.

- `license`

  - : Gültig in den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen. Der `license` Wert zeigt an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Wenn nicht innerhalb des {{HTMLElement("head")}} Elements, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen bestimmten Teil des Dokuments oder auf das gesamte Dokument anwendbar ist. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und sollte vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen über verschiedene Ursprünge.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für das {{htmlelement('link')}} überall im Dokument, das Setzen von `rel="modulepreload"` weist den Browser an, das Skript (und die Abhängigkeiten) präventiv zu laden und es in der Modultabelle des Dokuments für eine spätere Bewertung zu speichern. `modulepreload` Links können sicherstellen, dass das Netzwerk-Abrufen mit dem Modul fertig ist (aber nicht ausgewertet) in der Modulkarte, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, der `next` Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn in einem `<link>` enthalten, können Browser annehmen, dass das Dokument als nächstes abgerufen wird und es als Ressourcentipp behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `nofollow` Schlüsselwort sagt Suchmaschinen-Spidern, dass sie die Linkbeziehung ignorieren sollen. Die no-follow-Beziehung kann anzeigen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinen-Optimierern einbezogen, die vorgeben, dass ihre Linkfarmen keine Spam-Seiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink entweder von diesen beiden erstellt würde (d.h. hat einen geeigneten `target` Attributswert). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das Einschließen dieses Wertes macht den Referer unbekannt (es wird kein `Referer`-Header enthalten), und erzeugt einen obersten Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink ansonsten einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat `"_blank"` als `target` Attributwert). Im Wesentlichen das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser einen Hinweis, dass er eine Verbindung zur verlinkten Website im Voraus herstellen soll, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, sodass, wenn der Link gefolgt wird, der verlinkte Inhalt schneller abgerufen werden kann.
- `prefetch`
  - : Gibt an, dass der User-Agent die Zielressource präventiv abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der User-Agent die Zielressource präventiv abrufen und zwischenspeichern muss für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut (und die Priorität, die dem entsprechenden Ziel zugeordnet ist) gegeben ist. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der User-Agent die Zielressource präventiv abrufen und sie in einer Weise verarbeiten soll, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern, indem er beispielsweise ihre Unterressourcen abruft oder einige Rendering-Aufgaben durchführt.
- `prev`

  - : Ähnlich dem [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, der `prev` Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link ein vorhergehendes Dokument in der Serie referenziert.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}} Elemente, der `privacy-policy` Wert gibt an, dass das referenzierte Dokument die Datenschutzrichtlinie ist, die die Datenverarbeitungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} Elemente, die `search` Schlüsselwörter zeigen an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell für die Suche im aktuellen Dokument, der Seite und verwandten Ressourcen entwickelt wurde und einen Link zu einer Ressource bietet, die für die Suche verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) Plugin, das leicht zur Schnittstelle von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}} Element, es importiert eine externe Ressource, die als Stylesheet verwendet wird. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribut ist nicht erforderlich, wenn es sich um ein `text/css` Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselwörtern innerhalb des `rel` Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Bei Verwendung mit dem [`alternate`](#alternate) Schlüsselwort, definiert es ein alternatives Stylesheet. In diesem Fall sollte ein nicht-leerer [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) enthalten sein.

    Das externe Stylesheet wird weder verwendet noch heruntergeladen, wenn die Medien nicht dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attributs entsprechen.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen über verschiedene Ursprünge.

- `tag`

  - : Gültig für das {{htmlelement('a')}} und {{htmlelement('area')}} Elemente, es gibt einen Tag an (durch die gegebene Adresse identifiziert), der auf das aktuelle Dokument zutrifft. Der Tagwert gibt an, dass der Link auf ein Dokument verweist, das einen auf das Dokument anwendbaren Tag beschreibt, auf dem es sich befindet. Dieser Linktyp ist nicht für Tags innerhalb einer Tagwolke gedacht, da diese Tags auf eine Gruppe von Seiten zutreffen, während der `tag` Wert des `rel` Attributs für ein einziges Dokument gedacht ist.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}} Elemente, der `terms-of-service` Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen beschreibt, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und Nutzern, die das Dokument verwenden möchten, beschreiben.

### Nicht-standardisierte Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Spezifiziert das Symbol für eine Webanwendung auf einem iOS-Gerät.

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
