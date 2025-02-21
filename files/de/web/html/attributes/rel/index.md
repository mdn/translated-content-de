---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig auf {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}. Die unterstützten Werte hängen vom Element ab, auf dem das Attribut gefunden wird.

Die Art der Beziehung wird durch den Wert des `rel`-Attributs festgelegt. Wenn es vorhanden ist, muss der Wert eine ungeordnete Menge von eindeutigen, durch Leerzeichen getrennten Schlüsselwörtern sein. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens ausdrücken, die semantisch sowohl für Maschinen als auch für Menschen gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA-Link Relations-Register](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel`-Attribut verwendet wird, das in einer der drei oben genannten Quellen nicht vorhanden ist, werden einige HTML-Validierer (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten existierenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte einzigartig sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                                                         | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                                   | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                         | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                                                                          | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorab durchzuführen.                                                                                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument gehört nicht zur selben Website wie das aktuelle Dokument.                                                                                                                                                                                                                                | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                               | Ermöglicht es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, sodass es konsistent gerendert wird.                                                                                                                                      | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                                     | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Icon, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist.                                                                                                                                                                           | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web App Manifest.                                                                                                                                                                                                                                                                                                    | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die die verlinkte Ressource besitzt.                                                                                                                                                                                                                   | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Weist den Browser an, das Skript vorab zu holen und es in der Modulkarte des Dokuments für eine spätere Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls geholt werden.                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                       | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht befürwortet.                                                                                                                                                                                         | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen Top-Level-Browsingkontext, der kein Hilfsbrowsingkontext ist, wenn der Hyperlink einen dieser Kontexte erstellen würde (d.h. hat einen passenden `target`-Attributwert).                                                                                                                              | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer`-Header wird inkludiert. Zusätzlich hat es denselben Effekt wie `noopener`.                                                                                                                                                                                                                            | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                               | Erstellt einen Hilfsbrowsingkontext, wenn der Hyperlink andernfalls einen Top-Level-Browsingkontext erzeugen würde, der kein Hilfsbrowsingkontext ist (d.h. hat `"_blank"` als `target`-Attributwert).                                                                                                               | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der die Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent sich vorab mit dem Ursprung der Zielressource verbinden soll.                                                                                                                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource vorab holen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource vorab holen und zwischenspeichern muss, um die aktuelle Navigation entsprechend dem potenziellen Ziel anzugeben, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut gegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource vorab holen und verarbeiten soll, um in der Zukunft eine schnellere Reaktion zu ermöglichen.                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                     | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Gibt einen Link zu Informationen über die Datenerfassungs- und Nutzungspraktiken, die für das aktuelle Dokument gelten, an.                                                                                                                                                                                          | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Gibt einen Link zu einer Ressource an, die zum Durchsuchen des aktuellen Dokuments und seiner verwandten Seiten verwendet werden kann.                                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt.                                                                                                                                                                                                                    | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zu den Geschäftsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument nutzen möchten.                                                                                                                                                                                             | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}. Einige Werte sind jedoch nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwort-Attributwerte sind diese Werte nicht case-sensitiv.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keine der Werte im Attribut unterstützt werden, hat das Dokument keine bestimmte Beziehung mit der Zielressource außer der Existenz eines Hyperlinks. In diesem Fall erstellen {{htmlelement('link')}} und {{htmlelement('form')}} keine Links, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter hat oder wenn nicht eins oder mehrere der oben genannten Leerzeichen-getrennten Schlüsselwörter vorhanden sind. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, jedoch ohne eine definierte Beziehung.

## Werte

- `alternate`

  - : Gibt an, dass es eine alternative Darstellung des aktuellen Dokuments gibt. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.

    - Mit dem Schlüsselwort [`stylesheet`](#stylesheet) auf einem `<link>` wird ein [altes Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)-Attribut, das sich von der Dokumentsprache unterscheidet, wird eine Übersetzung angezeigt.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type)-Attributwert `"application/rss+xml"` oder `"application/atom+xml"` wird ein Hyperlink erstellt, der auf ein Syndikations-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls wird ein Hyperlink erstellt, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die Attribute [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type) angegeben wird.

      - Wenn `hreflang` neben `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` neben `alternate` angegeben ist, zeigt es an, dass das referenzierte Dokument ein alternatives Format hat (z.B. ein PDF).
      - Die Attribute `hreflang` und `type` können beide neben `alternate` angegeben werden.

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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels liefert. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren enthält, falls es einen gibt, andernfalls über das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` wie `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächste {{htmlelement('article')}}-Vorfahren-Element, falls vorhanden, an. Falls kein Vorfahre `<article>`-Element existiert, wird ein Permalink für den Abschnitt angegeben, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorab durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, Latenz zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorab durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/dns-prefetch) beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu gestalten, dass sie dem Benutzer anzeigen, dass sie die aktuelle Seite verlassen.
- `expect` {{experimental_inline}}

  - : Ermöglicht es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, sodass es konsistent gerendert wird. Beachten Sie, dass Render-Blocking nur auftritt, wenn es durch das [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking)-Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Den Seitenstatus stabilisieren, um konsistente Übergänge zwischen Dokumenten zu ermöglichen](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zu seiner Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das Schlüsselwort `help` zeigt an, dass der verlinkte Inhalt kontext-sensitive Hilfe bietet und Informationen für das übergeordnete Element des Hyperlink-definierenden Elements und seine Kinder bereitstellt. Wenn innerhalb von `<link>` verwendet, bezieht sich die Hilfe auf das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} enthalten ist und unterstützt wird, wird der Standard-{{cssxref('cursor')}} `help` anstelle von `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Icon, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type) und [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribute, um das geeignetste Icon auszuwählen. Wenn mehrere Icons gleich geeignet sind, wird das letzte verwendet. Wenn das am besten geeignete Icon später als ungeeignet befunden wird, weil beispielsweise ein nicht unterstütztes Format verwendet wird, fährt der Browser mit dem nächstbesten geeigneten fort, und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Thema](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut, wie andere mobile Browser, um ein Webseitenicon für Web Clip oder ein Start-Placeholder auszuwählen.
    > Stattdessen verwendet es die nicht standardmäßigen [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) entsprechend.

    > [!NOTE]
    > Der `shortcut`-Link-Typ wird oft vor `icon` gesehen, aber dieser Link-Typ ist nicht konform, ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen, gibt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Wenn es sich nicht im {{HTMLElement("head")}}-Element befindet, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen spezifischen Teil des Dokuments oder auf das gesamte Dokument angewendet wird. Nur die Daten auf der Seite können das angeben.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für Cross-Origin-Fetching.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für das {{htmlelement('link')}} überall im Dokument, informiert `rel="modulepreload"` den Browser, das Skript vorab zu holen (und Abhängigkeiten) und es in der Modulkarte des Dokuments für eine spätere Auswertung zu speichern. `modulepreload` Links können sicherstellen, dass das Netzwerk-Fetching durchgeführt wird, mit dem Modul bereit (aber nicht ausgewertet) in der Modulkarte, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, gibt der `next`-Wert an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser annehmen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcentipp behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, sagt das Schlüsselwort `nofollow` Suchmaschinen-Crawlern, die Link-Beziehung zu ignorieren. Die nofollow-Beziehung kann angeben, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht befürwortet. Es wird oft von Suchmaschinenoptimierern inkludiert, die so tun, als wären ihre Linkfarm keine Spam-Seiten.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt einen Top-Level-Browsingkontext, der kein Hilfsbrowsingkontext ist, wenn der Hyperlink einen dieser Kontexte erstellen würde (d.h. hat einen passenden `target`-Attributwert). Mit anderen Worten, es lässt den Link verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, inklusive dieses Wertes wird der Referrer unbekannt gemacht (kein `Referer`-Header wird inkludiert) und erstellt einen Top-Level-Browsingkontext, als ob auch `noopener` gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowsingkontext, wenn der Hyperlink andernfalls einen Top-Level-Browsingkontext erzeugen würde, der kein Hilfsbrowsingkontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Praktisch das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der die Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback Specification](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet einen Hinweis an den Browser, dass er im Voraus eine Verbindung zur verlinkten Website öffnen soll, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, sodass das verlinkte Inhalte schneller abgerufen werden können, wenn der Link gefolgt wird.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorab holen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für mehr Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource vorab holen und zwischenspeichern muss, für die aktuelle Navigation entsprechend dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorab holen und auf eine Weise verarbeiten soll, die hilft, in der Zukunft eine schnellere Antwort zu liefern, beispielsweise indem er seine Unterressourcen holt oder ein Rendering vornimmt.
- `prev`

  - : Ähnlich wie das Schlüsselwort [`next`](#next), relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, gibt der `prev`-Wert an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link ein vorheriges Dokument in der Serie referenziert.

    Hinweis: Das Synonym `previous` ist nicht korrekt und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente gibt der `privacy-policy`-Wert an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenerfassungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, das `search`-Schlüsselwörter gibt an, dass der Hyperlink ein Dokument referenziert, dessen Schnittstelle speziell zum Durchsuchen im aktuellen Dokument, der Website und den verwandten Ressourcen gestaltet wurde, und bietet einen Link zu einer Ressource, die zum Suchen verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das einfach zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}}-Element, importiert es eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut ist nicht erforderlich, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des `rel`-Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem Schlüsselwort [`alternate`](#alternate) verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall sollte ein nicht-leerer [`title`](/de/docs/Web/HTML/Element/link#title) enthalten sein.

    Das externe Stylesheet wird weder verwendet noch heruntergeladen, wenn Medien nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media)-Attributs übereinstimmen.

    Erfordert die Verwendung des CORS-Protokolls für Cross-Origin-Fetching.

- `tag`

  - : Gültig für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, gibt es ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt. Der Tag-Wert bedeutet, dass der Link auf ein Dokument verweist, das ein Tag beschreibt, das für das Dokument gilt, auf dem es sich befindet. Dieser Link-Typ ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags für eine Gruppe von Seiten gelten, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gedacht ist.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente gibt der `terms-of-service`-Wert an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreiben, die das bereitgestellte Dokument nutzen möchten.

### Nicht standardmäßige Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Gibt das Icon für eine Webanwendung auf einem iOS-Gerät an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
