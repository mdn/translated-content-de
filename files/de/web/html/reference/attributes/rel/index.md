---
title: "`rel` HTML-Attribut"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

Das Attribut **`rel`** definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Das Attribut ist gültig auf {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}. Die unterstützten Werte hängen vom Element ab, auf dem das Attribut gefunden wird.

Der Beziehungstyp wird durch den Wert des `rel`-Attributs angegeben, das, falls vorhanden, einen Wert haben muss, der eine ungeordnete Menge von einzigartigen, durch Leerzeichen getrennten Schlüsselwörtern ist. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Token enthalten, die semantisch sowohl für Maschinen als auch Menschen gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA-Link-Beziehungsregister](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values-Seite](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie im Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wenn ein `rel`-Attribut verwendet wird, das nicht in einer der drei oben genannten Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten existierenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte innerhalb dieses Wertes einzigartig sein.

| `rel`-Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                               | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                         | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächstgelegenen Vorgängerabschnitt.                                                                                                                                                                                                                                      | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads von Ressourcen auf dieser Seite zu komprimieren.                                                                                              | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Teilt dem Browser mit, die DNS-Auflösung für den Ursprung der Zielressource vorauseilend durchzuführen.                                                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument gehört nicht zur gleichen Seite wie das aktuelle Dokument.                                                                                                                                                                                                      | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`expect`](#expect)                                                                           | Wenn mit [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) verwendet, erlaubt es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, sodass es konsistent gerendert wird.                 | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextabhängiger Hilfe.                                                                                                                                                                                                                                                           | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Weist darauf hin, dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz abgedeckt ist, die im referenzierten Dokument beschrieben wird.                                                                                                                               | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Weist darauf hin, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                    | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Teilt dem Browser mit, das Skript vorauseilend zu holen und es im Modul-Map-Cache des Dokuments für eine spätere Bewertung zu speichern. Optional können die Abhängigkeiten des Moduls ebenfalls abgerufen werden.                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Weist darauf hin, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Weist darauf hin, dass der ursprüngliche Autor oder Anbieter des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                         | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen obersten Browsing-Kontext, der kein Hilfskontext ist, wenn der Hyperlink einen der beiden erstellen würde, um zu beginnen (d.h. ein entsprechender `target`-Attributswert hat).                                                                                             | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer`-Header wird enthalten sein. Zusätzlich hat es die gleiche Wirkung wie `noopener`.                                                                                                                                                                                           | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink andernfalls einen obersten Browsing-Kontext erstellen würde, der kein Hilfskontext ist (d.h. hat `"_blank"` als `target`-Attributwert).                                                                                           | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der Pingbacks zu dem aktuellen Dokument bearbeitet.                                                                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der Benutzeragent vorauseilend eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und im Cache speichern soll, da es wahrscheinlich für eine Folgenavigation benötigt wird.                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der Benutzeragent vorauseilend die Zielressource für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut (und die damit verbundene Priorität) gegeben ist, abrufen und im Cache speichern muss. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) {{deprecated_inline}}     | Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und sie in einer Weise verarbeiten soll, die in der Zukunft eine schnellere Antwort liefert. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) abgelöst.                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Weist darauf hin, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                             | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenschutz- und Nutzungspraktiken, die für das aktuelle Dokument gelten.                                                                                                                                                                        | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um durch das aktuelle Dokument und seine verwandten Seiten zu suchen.                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft.                                                                                                                                                                                      | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zur Vereinbarung oder zu den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und Nutzern, die das Dokument verwenden möchten.                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} Elemente, jedoch sind einige Werte nur für eine Teilmenge dieser Elemente relevant. Wie bei allen HTML-Keyword-Attributwerten sind diese Werte nicht unterscheidend nach Groß- und Kleinschreibung.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, besteht keine spezielle Beziehung zwischen dem Dokument und der Zielressource, außer dass ein Hyperlink zwischen beiden besteht. In diesem Fall erstellt das Element auf {{htmlelement('link')}} und {{htmlelement('form')}} keine Links, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter enthält oder wenn nicht eines oder mehrere der oben durch Leerzeichen getrennten Schlüsselwörter vorhanden sind. {{htmlelement('a')}} und {{htmlelement('area')}} werden immer noch Links erstellen, jedoch ohne eine definierte Beziehung.

## Wert

- `alternate`
  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.
    - Mit dem [`stylesheet`](#stylesheet)-Schlüsselwort auf einem `<link>` wird ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)-Attribut, das sich von der Sprache des Dokuments unterscheidet, wird eine Übersetzung angegeben.
    - Mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attributswert `"application/rss+xml"` oder `"application/atom+xml"` wird ein Hyperlink zu einem Syndikations-Feed erstellt.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls wird ein Hyperlink erstellt, der auf eine alternative Darstellung des aktuellen Dokuments verweist, dessen Natur durch die [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribute gegeben ist.
      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt dies an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben wird, zeigt es an, dass das referenzierte Dokument ein alternatives Format darstellt (wie etwa ein PDF).
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
  - : Indiziert, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels liefert. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren liefert, falls vorhanden, andernfalls für das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Gibt einen Permalink für das nächstgelegene Vorfahren-{{htmlelement('article')}}-Element, falls vorhanden, an. Wenn es kein Vorfahren-`<article>`-Element gibt, wird ein Permalink für den Abschnitt angegeben, dem das verlinkende Element am nächsten zugeordnet ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen dabei hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren, sodass die Download-Größen dieser Ressourcen kleiner als die Standardkompression sind.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, teilt es dem Browser mit, die DNS-Auflösung für den Ursprung der Zielressource vorauseilend durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorauseilend durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) beschrieben in [Resource Hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es deutet darauf hin, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links auf eine Weise zu stylen, die dem Benutzer signalisiert, dass er die aktuelle Seite verlässt.
- `expect` {{experimental_inline}}
  - : Erlaubt es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, sodass es konsistent gerendert wird. Beachten Sie, dass Render-Blocking nur in Verbindung mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking)-Attribut auftritt.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zu seiner Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help`-Schlüsselwort gibt an, dass die verlinkten Inhalte kontextabhängige Hilfe bieten, Informationen für das übergeordnete Element des Elements, das den Hyperlink definiert, und seine Unterelemente bereithalten. Wenn es in `<link>` verwendet wird, bezieht sich die Hilfe auf das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} verwendet wird und unterstützt wird, ist die Standard-{{cssxref('cursor')}} `help` anstelle von `pointer`.
- `icon`
  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource repräsentiert das Icon, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribute, um das am besten geeignete Icon auszuwählen. Wenn mehrere Icons gleichermaßen geeignet sind, wird das letzte verwendet. Wenn das am besten geeignete Icon später als ungeeignet erkannt wird, zum Beispiel weil es ein nicht unterstütztes Format verwendet, fährt der Browser mit dem nächstbesten fort und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe die [offene Chromium-Issue](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut, wie andere mobile Browser dies tun, um ein Webseiten-Icon für Web Clip oder einen Startbildschirm-Platzhalter auszuwählen.
    > Stattdessen verwendet es den nicht-standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) jeweils.

    > [!NOTE]
    > Der `shortcut`-Link-Typ wird häufig vor `icon` gesehen, aber dieser Link-Typ ist nicht konform, wird ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`
  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}-Elementen, gibt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz abgedeckt ist, die im referenzierten Dokument beschrieben wird. Wenn nicht innerhalb des {{HTMLElement("head")}}-Elements, unterscheidet der Standard nicht zwischen einem Hyperlink, der für einen bestimmten Teil des Dokuments oder das Dokument als Ganzes gilt. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen von externen Quellen.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für das {{htmlelement('link')}} überall im Dokument, das Setzen von `rel="modulepreload"` Teilt dem Browser mit, das Skript (und Abhängigkeiten) vorauseilend zu holen und es im Modul-Map-Cache des Dokuments für eine spätere Bewertung zu speichern. `modulepreload`-Links können sicherstellen, dass die Netzwerkabrufung mit dem Modul bereit (aber nicht bewertet) im Modul-Map-Cache erfolgt, bevor es notwendig ist. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, gibt der `next`-Wert an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser annehmen, dass dieses Dokument als nächstes abgerufen wird und es als Resource-Hint behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort teilt Suchmaschinenspider mit, die Beziehungslinks zu ignorieren. Die nofollow-Beziehung kann anzeigen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern einbezogen, indem sie ihre Linkfarmen nicht als Spamseiten bezeichnen.
- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink einen der beiden erstellen würde, um zu beginnen (d.h. hat einen entsprechenden `target`-Attributswert). Mit anderen Worten, es lässt den Link so funktionieren, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das Einschließen dieses Wertes macht den Referrer unbekannt (kein `Referer`-Header wird enthalten), und erstellt einen obersten Browsing-Kontext, als ob auch `noopener` gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink andernfalls einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Im Grunde das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zu dem aktuellen Dokument bearbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser einen Hinweis darauf, dass er im Voraus eine Verbindung zur verlinkten Website herstellen soll, ohne private Informationen weiterzugeben oder Inhalte herunterzuladen, sodass bei der Verfolgung des Links die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und im Cache speichern soll, da sie wahrscheinlich für eine Folgenavigation erforderlich ist. Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent vorauseilend die Zielressource für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut (und die damit verbundene Priorität) gegeben ist, abrufen und im Cache speichern muss. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und sie in einer Weise verarbeiten soll, die in der Zukunft eine schnellere Antwort liefert, zum Beispiel durch Abrufen seiner Unterressourcen oder durch Ausführen einiger Rendering. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) abgelöst.
- `prev`
  - : Ähnlich wie das [`next`](#next)-Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, gibt der `prev`-Wert an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link ein vorheriges Dokument in der Serie referenziert.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für die {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}} Elemente, gibt der `privacy-policy`-Wert an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenbestimmungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} Elemente, gibt die `search`-Schlüsselwörter an, dass der Hyperlink ein Dokument referenziert, dessen Schnittstelle speziell für die Suche im aktuellen Dokument, auf der Seite und in verwandten Ressourcen konzipiert ist und einen Link zu einer Ressource bereitstellt, die für die Suche verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das leicht zur Oberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`
  - : Gültig für das {{htmlelement('link')}}-Element, es importiert eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut ist nicht erforderlich, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet vom Typ `text/css` handelt, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als Stylesheet definiert, wirkt sich die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel-Werts darauf aus, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate)-Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall fügen Sie ein nicht-leeres [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) hinzu.

    Das externe Stylesheet wird nicht verwendet oder sogar nicht heruntergeladen, wenn die Medien nicht dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attributs entsprechen.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen von externen Quellen.

- `tag`
  - : Gültig für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente, es gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein auf das Dokument, in dem es sich befindet, zutreffendes Tag beschreibt. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Cloud gedacht, da diese Tags auf eine Gruppe von Seiten anwendbar sind, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}} Elemente, der `terms-of-service`-Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen beschreibt, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern beschreiben, die das bereitgestellte Dokument verwenden möchten.

### Nicht-standardisierte Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Bestimmt das Icon für eine Webanwendung auf einem iOS-Gerät.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
