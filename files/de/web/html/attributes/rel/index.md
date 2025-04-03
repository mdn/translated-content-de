---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 3b950288ff28e6984e35acd8fa56fa885a935978
---

{{HTMLSidebar}}

Das **`rel`** Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig auf {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}, wobei die unterstützten Werte vom Element abhängen, auf dem das Attribut gefunden wird.

Die Art der Beziehungen wird durch den Wert des `rel` Attributs angegeben, der, falls vorhanden, ein Wert sein muss, der aus einer ungeordneten Menge von einzigartigen, durch Leerzeichen getrennten Schlüsselwörtern besteht. Anders als ein `class` Name, der keine Semantik ausdrücken, muss das `rel` Attribut Token ausdrücken, die sowohl für Maschinen als auch Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel` Attributs sind das [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel` Attribut verwendet wird, das in einer der drei oben genannten Quellen nicht vorhanden ist, erzeugen einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung.

Die folgende Tabelle listet einige der wichtigsten existierenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte einzigartig innerhalb dieses Wertes sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                                                   | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                             | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                   | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächsten übergeordneten Abschnitt.                                                                                                                                                                                                                                                           | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                      | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](#compression-dictionary)               | Link zu einem {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren.                                                                                                                | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Teilt dem Browser mit, dass er DNS-Auflösungen für den Ursprung der Zielressource vorsorglich durchführen soll.                                                                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument gehört nicht zur selben Seite wie das aktuelle Dokument.                                                                                                                                                                                                                            | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`expect`](#expect)                                               | Ermöglicht der Seite das {{Glossary("Render_blocking", "Render-Blockierung")}} bis die wesentlichen Teile des Dokuments analysiert wurden, so dass es konsistent gerendert wird.                                                                                                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz abgedeckt ist, die durch das referenzierte Dokument beschrieben wird.                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web-App-Manifest.                                                                                                                                                                                                                                                                                              | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Teilt dem Browser mit, das Skript vorsorglich abzurufen und in der Modulkarte des Dokuments zu speichern, um es später auszuwerten. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                 | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                                   | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen obersten Browsing-Kontext, der kein zusätzlicher Browsing-Kontext ist, wenn der Hyperlink entweder von diesen erstellt würde (d.h. hat einen geeigneten `target`-Attributswert).                                                                                                                | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer`-Header wird eingeschlossen. Zusätzlich hat es die gleiche Wirkung wie `noopener`.                                                                                                                                                                                                               | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`opener`](#opener)                                               | Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink ansonsten einen obersten Browsing-Kontext erstellt, der kein zusätzlicher Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributswert).                                                                                              | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent vorsorglich eine Verbindung zum Ursprung der Zielressource herstellen sollte.                                                                                                                                                                                                  | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource vorsorglich für die aktuelle Navigation abrufen und zwischenspeichern muss, gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und auf eine Weise verarbeiten sollte, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern.                                                                                                                             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Gibt einen Link zu Informationen über die Datensammlung und Nutzungspraktiken an, die für das aktuelle Dokument gelten.                                                                                                                                                                                        | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um das aktuelle Dokument und seine verwandten Seiten zu durchsuchen.                                                                                                                                                                         | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument angewendet wird.                                                                                                                                                                                                   | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zum Vertrag oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument verwenden möchten.                                                                                                                                                                       | Link                    | Link                                             | Nicht erlaubt           |

Das `rel` Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}} Elemente, aber einige Werte sind nur für eine Teilmenge dieser Elemente von Bedeutung. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht case-sensitiv.

Das `rel` Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der im Attribut angegebenen Werte unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource, außer dass ein Hyperlink zwischen beiden besteht. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, falls das `rel` Attribut fehlt, keine Schlüsselwörter enthält oder nicht eines oder mehrere der oben genannten durch Leerzeichen getrennten Schlüsselwörter enthält, erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, jedoch ohne eine definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.

    - Mit dem [`stylesheet`](#stylesheet)-Schlüsselwort auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) Attribut, das sich von der Sprach des Dokuments unterscheidet, weist es auf eine Übersetzung hin.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type) Attributwert von `"application/rss+xml"` oder `"application/atom+xml"` wird ein Hyperlink erstellt, der auf einen Syndikationsfeed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls wird ein Hyperlink erstellt, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type) Attribute angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, wird angezeigt, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben wird, wird angezeigt, dass das referenzierte Dokument ein alternatives Format (z.B. ein PDF) ist.
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

  - : Zeigt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bietet. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten übergeordneten {{htmlelement('article')}} Elements bietet, falls vorhanden, ansonsten das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel` Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Gibt einen Permalink für das nächstliegende übergeordnete {{htmlelement('article')}} Element an, falls vorhanden. Wenn kein übergeordnetes `<article>` Element vorhanden ist, gibt es einen Permalink für den Abschnitt an, mit dem das verknüpfende Element am engsten in Verbindung steht.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert es die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelten Inhalt zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, definiert ein {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren, sodass die Downloadgrößen dieser Ressourcen kleiner sind als bei der Standardkomprimierung.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}} Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, teilt es dem Browser mit, dass er DNS-Auflösungen für den Ursprung der Zielressource vorsorglich durchführen soll. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, trägt es dazu bei, die Latenz zu verringern und die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich aufruft, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorsorglich durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu stilisieren, dass sie den Benutzer darauf hinweisen, dass sie die aktuelle Seite verlassen werden.
- `expect` {{experimental_inline}}

  - : Ermöglicht der Seite, bis die wesentlichen Teile des Dokuments analysiert wurden, render-blockiert zu bleiben, damit es konsistent gerendert wird. Beachten Sie, dass eine Render-Blockierung nur auftritt, wenn sie mit dem [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking) Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zur Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, zeigt das Schlüsselwort `help` an, dass der verlinkte Inhalt kontextbezogene Hilfe bietet, indem er Informationen für das übergeordnete Element des Hyperlink-definierenden Elements und seine untergeordneten Elemente bereitstellt. Bei Verwendung in `<link>` ist die Hilfe für das gesamte Dokument. Bei Verwendung mit {{htmlelement('a')}} und {{htmlelement('area')}} und unterstützt, wird der Standard-{{cssxref('cursor')}} `help` anstelle von `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Symbol, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser ihre [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type) und [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn festgestellt wird, dass das am besten geeignete Symbol später ungeeignet ist, beispielsweise weil es ein nicht unterstütztes Format verwendet, geht der Browser zum nächst geeigneteren über und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut wird bei `rel="icon"` in auf Chromium basierenden Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribut, wie es mobile Browser tun, um ein Webseiten-Symbol für Web Clip oder ein Start-Up-Platzhalter auszuwählen.
    > Stattdessen verwendet es das nicht-standardisierte [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6).

    > [!NOTE]
    > Der `shortcut` Linktyp wird oft vor `icon` gesehen, ist jedoch nicht normkonform, ignoriert und **Web-Autoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den {{HTMLElement('a')}}, {{HTMLElement('area')}}, {{HTMLElement('form')}}, {{HTMLElement('link')}} Elementen, weist der `license` Wert darauf hin, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments von der Urheberrechtslizenz abgedeckt ist, die durch das referenzierte Dokument beschrieben wird. Wenn es sich nicht innerhalb des {{HTMLElement('head')}} Elements befindet, unterscheidet der Standard nicht zwischen einem Hyperlink, der sich auf einen bestimmten Teil des Dokuments bezieht, oder auf das Dokument als Ganzes. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` inkorrekt und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Ursprung-übergreifenden Inhalt.
- `modulepreload`
  - : Nützlich zur Leistungsverbesserung und relevant für {{htmlelement('link')}} überall im Dokument, `rel="modulepreload"` besagt dem Browser, das Skript vorsorglich (mit Abhängigkeiten) abzurufen und es in der Modulkarte des Dokuments für eine spätere Bewertung zu speichern. `modulepreload` Links können gewährleisten, dass die Netzwerkabfrage mit dem Modul ausführbereit (aber nicht ausgewertet) in der Modulkarte liegt, bevor es notwendig ist. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, zeigt `next` an, dass das aktuelle Dokument Teil einer Serie ist, und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn in einem `<link>` enthalten, könnten Browser annehmen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcentipp behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, teilt das `nofollow` Schlüsselwort den Suchmaschinenspinnen mit, die Link-Beziehung zu ignorieren. Die nofollow Beziehung kann darauf hindeuten, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird häufig von Suchmaschinenoptimierern verwendet, die vortäuschen, dass ihre Linkfarmen keine Spamseiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt einen obersten Browsing-Kontext, der nicht ein zusätzlicher Browsing-Kontext ist, wenn der Hyperlink entweder von diesen beiden erstellt würde (d.h. hat einen geeigneten `target` Attributswert). Mit anderen Worten, es lässt den Link verhalten, als wäre [`window.opener`](/de/docs/Web/API/Window/opener) null und `target="_parent"` wäre gesetzt.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, einschließlich dieses Wertes macht den Referrer unbekannt (kein `Referer`-Header wird eingeschlossen) und erstellt einen obersten Browsing-Kontext, als ob auch `noopener` gesetzt wäre.
- `opener`
  - : Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink sonst einen obersten Browsing-Kontext erstellt, der kein zusätzlicher Browsing-Kontext ist (d.h. hat `"_blank"` als `target` Attributswert). Im Wesentlichen das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser ein Signal, dass er in Voraus eine Verbindung zur verlinkten Webseite öffnen soll, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, so dass, wenn der Link verfolgt wird, der verlinkte Inhalt schneller abgerufen werden kann.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource vorsorglich für die aktuelle Navigation abrufen und zwischenspeichern muss, gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und auf eine Weise verarbeiten sollte, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern, indem er zum Beispiel dessen Unterressourcen abruft oder eine erste Verarbeitung durchführt.
- `prev`

  - : Ähnlich dem [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, zeigt `prev` an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}} Elemente, zeigt der `privacy-policy` Wert an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datensammlungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} Elemente, zeigt der `search` Schlüsselwörter an, dass der Hyperlink auf ein Dokument verweist, dessen Benutzeroberfläche speziell für die Suche im aktuellen Dokument, auf der Seite und verwandten Ressourcen ausgelegt ist, und bietet einen Link zu einer Ressource, die dafür verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) Plugin, das einfach zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}} Element, importiert es eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut ist nicht nötig, wenn es sich um ein `text/css` Stylesheet handelt, da das der Standardwert ist. Wenn es sich nicht um ein Stylesheet vom Typ `text/css` handelt, ist es am besten, den Typ anzugeben.

    Obwohl dieses Attribut den Link als ein Stylesheet definiert, beeinflussen die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Bei Verwendung mit dem [`alternate`](#alternate) Schlüsselwort, definiert es ein alternatives Stylesheet. In diesem Fall sollte ein nicht-leerer [`title`](/de/docs/Web/HTML/Element/link#title) eingeschlossen werden.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medienattribut nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media) Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Ursprung-übergreifendem Inhalt.

- `tag`

  - : Gültig für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente, gibt es ein Tag an (identifiziert durch die angegebene Adresse), das auf das aktuelle Dokument angewendet wird. Der Tag-Wert zeigt an, dass sich der Link auf ein Dokument bezieht, das ein auf das Dokument angewendetes Tag beschreibt. Dieser Linktyp ist nicht für Tags innerhalb einer Tagcloud gedacht, da jene Tags auf eine Gruppe von Seiten angewendet werden, während der `tag` Wert des `rel` Attributs für ein einziges Dokument ist.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}} Elemente, zeigt der `terms-of-service` Wert an, dass das referenzierte Dokument die Nutzungsbedingungen beschreibt, die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern, die das Dokument verwenden möchten, beschreiben.

### Nicht-standardisierte Werte

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
