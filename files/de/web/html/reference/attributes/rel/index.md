---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Gültig bei {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, hängen die unterstützten Werte vom Element ab, auf dem das Attribut zu finden ist.

Die Art der Beziehung wird durch den Wert des `rel`-Attributs angegeben, das, falls vorhanden, einen Wert haben muss, der eine ungeordnete Menge einzigartiger, durch Leerzeichen getrennter Schlüsselwörter ist. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens ausdrücken, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) durch den Living Standard. Wenn ein `rel`-Attribut verwendet wird, das in keiner der obigen Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte innerhalb dieses Werts einzigartig sein.

| `rel`-Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                     | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                     | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächsten Vorfahrenabschnitt.                                                                                                                                                                                                                                                                   | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                        | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompremierungs-Wörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren.                                                                                                                 | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Sagt dem Browser, dass er präventiv eine DNS-Auflösung für den Ursprungsort der Zielressource durchführen soll.                                                                                                                                                                                                  | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument ist nicht Teil der gleichen Website wie das aktuelle Dokument.                                                                                                                                                                                                                        | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`expect`](#expect)                                                                           | Wenn verwendet mit [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking), ermöglicht es der Seite {{Glossary("Render_blocking", "Render-Blockierung")}}, bis die wesentlichen Teile des Dokuments analysiert werden, sodass sie konsistent gerendert wird.                                   | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextbezogener Hilfe.                                                                                                                                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Icon, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz des referenzierten Dokuments abgedeckt ist.                                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                                | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Sagt dem Browser, dass er das Skript präventiv abrufen und es in der Modulkarte des Dokuments für eine spätere Auswertung speichern soll. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                              | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                                     | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen übergeordneten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, falls der Hyperlink einen der beiden von Anfang an erstellen würde (d.h. ein entsprechender `target`-Attributwert hat).                                                                                                     | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer`-Header wird enthalten sein. Darüber hinaus hat es den gleichen Effekt wie `noopener`.                                                                                                                                                                                                             | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink andernfalls einen übergeordneten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. `"_blank"` als `target`-Attributwert hat).                                                                                                 | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument behandelt.                                                                                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der Benutzeragent präventiv eine Verbindung zum Ursprungsort der Zielressource herstellen soll.                                                                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der Benutzeragent präventiv die Zielressource abrufen und zwischenspeichern soll, da es wahrscheinlich ist, dass sie für eine nachfolgende Navigation benötigt wird.                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation präventiv abrufen und zwischenspeichern muss, entsprechend der potenziellen Zielangabe durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)                           | Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und in einer Weise verarbeiten soll, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern.                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument ein Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraxis an, die für das aktuelle Dokument gelten.                                                                                                                                                                                       | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um im aktuellen Dokument und auf den zugehörigen Seiten zu suchen.                                                                                                                                                                             | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Gibt ein Tag an (identifiziert durch die angegebene Adresse), das für das aktuelle Dokument gilt.                                                                                                                                                                                                                | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zu den Vereinbarungen oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument verwenden möchten.                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}-Elemente, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie bei allen HTML-Schlüsselwort-Attributwerten sind diese Werte nicht fall-sensitiv.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut ausgelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource außer der Tatsache, dass ein Hyperlink zwischen den beiden besteht. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter enthält oder nicht eines oder mehr der oben genannten Leerzeichentrennenden Schlüsselwörter vorhanden sind, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} werden weiterhin Links erstellen, jedoch ohne eine definierte Beziehung.

## Wert

- `alternate`
  - : Weist auf eine alternative Darstellung des aktuellen Dokuments hin. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.
    - Mit dem [`stylesheet`](#stylesheet)-Schlüsselwort auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)-Attribut, das sich von der Dokumentensprache unterscheidet, zeigt es eine Übersetzung an.
    - Mit einem [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attributwert von `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink zu einem Syndication-Feed.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der eine alternative Darstellung des aktuellen Dokuments referenziert, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)- und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribute angegeben wird.
      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, wird angezeigt, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, zeigt es an, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Die `hreflang`- und `type`-Attribute können beide zusammen mit `alternate` angegeben werden.

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
  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren bereitstellt, wenn es einen gibt, andernfalls über das gesamte Dokument.

    Bei {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevanter `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächste Vorfahren-{{htmlelement('article')}}-Element an, falls eines vorhanden ist. Wenn kein Vorfahren-`<article>`-Element vorhanden ist, gibt es einen Permalink für den Abschnitt an, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompremierungs-Wörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren, sodass die Download-Größen dieser Ressourcen kleiner sind als bei standardmäßiger Komprimierung.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, erzählt es dem Browser, dass er präventiv eine DNS-Auflösung für den Ursprungsort der Zielressource durchführen soll. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer auf die Ressourcen zugreift, da der Browser präventiv eine DNS-Auflösung für den Ursprung der angegebenen Ressource durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Dies kann mit Attributselektoren verwendet werden, um externe Links in einer Weise zu gestalten, die dem Benutzer anzeigt, dass er die aktuelle Website verlässt.
- `expect` {{experimental_inline}}
  - : Ermöglicht der Seite, {{Glossary("Render_blocking", "Render-Blockierung")}}, bis die wesentlichen Teile des Dokuments analysiert werden, sodass sie konsistent gerendert wird. Beachten Sie, dass die Render-Blockierung nur erfolgt, wenn sie mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking)-Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zu ihrer Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `help`-Schlüsselwort zeigt an, dass der verlinkte Inhalt kontextbezogene Hilfe bietet und Informationen für das übergeordnete Element des Hyperlink-definierenden Elements und deren Kinder bereitstellt. Bei Verwendung innerhalb eines `<link>` dient die Hilfe für das gesamte Dokument. Bei {{htmlelement('a')}} und {{htmlelement('area')}} wird bei Unterstützung der Standard-{{cssxref('cursor')}} `help` anstelle von `pointer` sein.
- `icon`
  - : Gültig bei {{htmlelement('link')}}, stellt die verlinkte Ressource das Icon dar, eine Ressource, um die Seite in der Benutzeroberfläche für das aktuelle Dokument darzustellen.

    Der häufigste Gebrauch des `icon`-Werts ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type), und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribute um das am besten passende Icon auszuwählen. Wenn mehrere Icons gleichermaßen geeignet sind, wird das letzte verwendet. Wenn das am besten passende Icon später als ungeeignet gefunden wird, zum Beispiel weil es ein nicht unterstütztes Format verwendet, kehrt der Browser zum nächsten am besten passenden zurück, und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut wird in Chromium-basierten Browsern für `rel="icon"` nicht unterstützt. Siehe die [open Chromium issue](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut, wie es andere mobile Browser tun, um ein Webseiten-Icon für Web Clip oder einen Startbildschirm-Platzhalter auszuwählen.
    > Stattdessen verwendet es das nicht standardmäßige [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) entsprechend.

    > [!NOTE]
    > Der `shortcut` Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht konform, ignoriert und **Web-Autoren dürfen ihn nicht mehr verwenden**.

- `license`
  - : Gültig bei den {{htmlelement('a')}}, {{htmlelement('area')}}, {{htmlelement('form')}}, {{htmlelement('link')}} Elementen, zeigt der `license` Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz des referenzierten Dokuments abgedeckt wird. Wenn es sich nicht im {{htmlelement('head')}}-Element befindet, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen bestimmten Teil des Dokuments oder auf das gesamte Dokument angewendet wird. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` nicht korrekt und sollte vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Cross-Origin-Inhalten.
- `modulepreload`
  - : Nützlich zur Verbesserung der Leistung und relevant für das {{htmlelement('link')}} überall im Dokument, das Setzen von `rel="modulepreload"` sagt dem Browser, dass er das Skript (und Abhängigkeiten) präventiv abrufen und es in der Modulkarte des Dokuments zur späteren Auswertung speichern soll. `modulepreload`-Links können sicherstellen, dass das Netzwerkabrufen mit dem Modul bereit (aber nicht ausgewertet) in der Modulkarte erfolgt, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, zeigt der `next`-Wert an, dass das aktuelle Dokument ein Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Bei Aufnahme in einem `<link>`, können Browser annehmen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcentipp behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort weist Suchmaschinen-Crawler an, die Link-Beziehung zu ignorieren. Die nofollow-Beziehung kann darauf hinweisen, dass der Inhaber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern eingefügt, die vorgeben, dass ihre Linkfarmen keine Spam-Seiten sind.
- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen übergeordneten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink entweder einen dieser Kontexte von Anfang an erstellen würde (d.h. ein entsprechender `target`-Attributwert hat). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, einschließlich dieses Werts macht den Referrer unbekannt (kein `Referer`-Header wird enthalten sein), und erstellt einen übergeordneten Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowsing-Kontext, falls der Hyperlink andernfalls einen übergeordneten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument behandelt. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser einen Tipp, dass er im Voraus eine Verbindung zur verlinkten Website herstellen soll, ohne private Informationen offenzulegen oder Inhalte herunterzuladen, sodass die verlinkten Inhalte schneller abgerufen werden können, wenn der Link gefolgt wird.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und zwischenspeichern soll, da es wahrscheinlich ist, dass sie für eine nachfolgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation präventiv abrufen und zwischenspeichern muss, entsprechend der potenziellen Zielangabe durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und in einer Weise verarbeiten soll, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern, z. B. durch Abrufen seiner Unterressourcen oder der Durchführung einiger Rendering-Prozesse.
- `prev`
  - : Ähnlich wie das Schlüsselwort [`next`](#next), relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, zeigt der `prev`-Wert an, dass das aktuelle Dokument ein Teil einer Serie ist und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist nicht korrekt und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, zeigt der `privacy-policy`-Wert an, dass das referenzierte Dokument die Datenschutzrichtlinie ist, die die Datenverarbeitungs- und Nutzungspraxis des aktuellen Dokuments beschreibt.

- `search`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, zeigt das `search`-Schlüsselwort an, dass der Hyperlink auf ein Dokument verweist, deren Oberfläche speziell zum Durchsuchen des aktuellen Dokuments, der Website und der verwandten Ressourcen entwickelt wurde, und bietet einen Link zu einer Ressource, die für die Suche verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, handelt es sich bei der Ressource um ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das leicht zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`
  - : Gültig für das {{htmlelement('link')}}-Element, importiert es eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut ist nicht erforderlich, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein `text/css`-Stylesheet handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als ein Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des `rel`-Werts, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate)-Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall sollte ein nichtleeres [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) hinzugefügt werden.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Cross-Origin-Inhalten.

- `tag`
  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, gibt es ein Tag an (identifiziert durch die angegebene Adresse), das für das aktuelle Dokument gilt. Der Tagwert zeigt an, dass der Link auf ein Dokument verweist, das ein auf das Dokument anwendbares Tag beschreibt, auf dem es sich befindet. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten angewendet werden, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, zeigt der `terms-of-service`-Wert an, dass das referenzierte Dokument die Nutzungsbedingungen darstellt, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreiben, die das bereitgestellte Dokument verwenden möchten.

### Nicht-standardmäßige Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Gibt das Symbol für eine Webanwendung auf einem iOS-Gerät an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
