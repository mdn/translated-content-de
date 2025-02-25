---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Gültig bei {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}; die unterstützten Werte hängen von dem Element ab, auf dem das Attribut eingesetzt wird.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs angegeben. Wenn es vorhanden ist, muss es einen Wert haben, der eine ungeordnete Menge von eindeutigen, durch Leerzeichen getrennten Schlüsselwörtern ist. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Token ausdrücken, die semantisch sowohl für Maschinen als auch für Menschen gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA Link Relation Registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values-Seite](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel`-Attribut verwendet wird, das nicht in einer der drei oben genannten Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung ausgeben.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte innerhalb dieses Wertes eindeutig sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                                                       | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                       | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                                                                        | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Sagt dem Browser, dass er die DNS-Auflösung für den Ursprung der Zielressource vorab durchführen soll.                                                                                                                                                                                                             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument ist nicht Teil derselben Seite wie das aktuelle Dokument.                                                                                                                                                                                                                               | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                               | Ermöglicht es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, damit es konsistent gerendert wird.                                                                                                                                     | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Copyright-Lizenz abgedeckt ist.                                                                                                                                                                            | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web-App-Manifest.                                                                                                                                                                                                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                                                     | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Sagt dem Browser, dass er das Skript vorab abrufen und es im Modul-Map des Dokuments für eine spätere Auswertung speichern soll. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument der Serie das referenzierte Dokument ist.                                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                                       | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen eigenständigen Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink zu Beginn entweder davon erstellen würde (d.h. ein entsprechender `target`-Attributwert hat).                                                                                                              | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer`-Header wird hinzugefügt. Hat zusätzlich die gleiche Wirkung wie `noopener`.                                                                                                                                                                                                                         | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                               | Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink ansonsten einen eigenständigen Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert).                                                                                                    | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet.                                                                                                                                                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent vorab eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und im Cache speichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation vorab abrufen und im Cache speichern muss, entsprechend dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) -Attribut vorgegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und in einer Weise verarbeiten soll, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern.                                                                                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Gibt einen Link zu Informationen über die Datenerfassungs- und -nutzungspraktiken, die für das aktuelle Dokument gelten.                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um im aktuellen Dokument und auf den zugehörigen Seiten zu suchen.                                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt.                                                                                                                                                                                                                  | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zu der Vereinbarung oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument nutzen möchten.                                                                                                                                                                        | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, jedoch sind einige Werte nur für eine Untermenge dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht case-sensitive.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource, abgesehen davon, dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}: Ist das `rel`-Attribut nicht vorhanden, hat keine Schlüsselwörter oder sind nicht eins oder mehr der oben erwähnten space-separated Schlüsselwörter vorhanden, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, jedoch ohne eine definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Mit dem Schlüsselwort [`stylesheet`](#stylesheet) auf einem `<link>` wird ein [alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)-Attribut, das sich von der Dokumentsprache unterscheidet, wird eine Übersetzung angegeben.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type)-Attributwert von `"application/rss+xml"` oder `"application/atom+xml"` wird ein Hyperlink erstellt, der auf einen Syndikations-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls wird ein Hyperlink erstellt, der auf eine alternative Darstellung des aktuellen Dokuments verweist, dessen Art durch die Attribute [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type) angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und der Wert von `hreflang` von der Sprache des aktuellen Dokuments abweicht, zeigt dies an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, zeigt dies an, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Die Attribute `hreflang` und `type` können beide zusammen mit `alternate` angegeben werden.

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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen {{htmlelement('article')}}-Vorfahr bereitstellt, falls es einen gibt, andernfalls über das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die Elemente {{htmlelement('a')}} und {{htmlelement('area')}}. Gibt einen Permalink für das nächstgelegene übergeordnete {{htmlelement('article')}}-Element, sofern vorhanden. Wenn kein übergeordnetes `<article>`-Element vorhanden ist, gibt es einen Permalink für den Abschnitt, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert es die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, sagt es dem Browser, dass er die DNS-Auflösung für den Ursprung der Zielressource vorab durchführen soll. Nützlich für Ressourcen, die Benutzer wahrscheinlich benötigen werden, hilft es, die Latenz zu reduzieren und damit die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich abruft, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorab durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links in einer Weise zu gestalten, die dem Benutzer anzeigt, dass er die aktuelle Seite verlassen wird.
- `expect` {{experimental_inline}}

  - : Ermöglicht es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, damit es konsistent gerendert wird. Beachten Sie, dass das Render-Blocking nur auftritt, wenn es mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking) ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zur Verwendung.

- `help`
  - : Relevant für die Elemente {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; das Schlüsselwort `help` gibt an, dass die verlinkten Inhalte kontextsensitive Hilfe bieten, wobei Informationen für das übergeordnete Element des Hyperlink-definierenden Elements und dessen Kinder bereitgestellt werden. Wenn es innerhalb von `<link>` verwendet wird, ist die Hilfe für das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} verwendet wird und unterstützt wird, ist der Standard-{{cssxref('cursor')}} `help` statt `pointer`.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Symbol, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung des `icon`-Wertes ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser ihre [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type) und [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribute, um das passendste Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen passend sind, wird das letzte verwendet. Wenn sich später herausstellt, dass das passendste Symbol unpassend ist, weil es beispielsweise ein unterstütztes Format verwendet, fährt der Browser mit dem zweitbesten fort und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut wird für `rel="icon"` in auf Chromium basierenden Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut, wie es andere mobile Browser tun, um ein Webseiten-Symbol für Web Clip oder einen Startscreen-Platzhalter auszuwählen.
    > Stattdessen wird der nicht-standardmäßige [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) verwendet.

    > [!NOTE]
    > Der `shortcut`-Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht konform, wird ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den Elementen {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}, gibt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Copyright-Lizenz abgedeckt ist. Wenn es nicht im {{HTMLElement("head")}}-Element enthalten ist, unterscheidet der Standard nicht zwischen einem Hyperlink, der für einen bestimmten Teil des Dokuments gilt, oder für das gesamte Dokument. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen von ressources die von einer anderen Domain stammen.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für das {{htmlelement('link')}} an jeder Stelle im Dokument; das Setzen von `rel="modulepreload"` sagt dem Browser, dass er das Skript (und dessen Abhängigkeiten) vorab abrufen und im Modul-Map des Dokuments für eine spätere Auswertung speichern soll. `modulepreload`-Links können sicherstellen, dass die Netzwerkabrufe durchgeführt werden, wobei das Modul in der Modul-Map bereit (aber nicht ausgewertet) ist, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, gibt der `next`-Wert an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser davon ausgehen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcenvorschlag behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, sagt das Schlüsselwort `nofollow` den Suchmaschinen-Spidern, die Linkbeziehung zu ignorieren. Die `nofollow`-Beziehung kann anzeigen, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinen-Optimierern eingeschlossen, die vorgeben, dass ihre Linkfarmen keine Spam-Seiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; erstellt es einen eigenständigen Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink entweder davon zu Beginn erstellen würde (d.h. ein entsprechender `target`-Attributwert hat). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; durch die Aufnahme dieses Wertes wird der Referrer unbekannt (kein `Referer`-Header wird hinzugefügt), und es wird ein eigenständiger Browsing-Kontext erstellt, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink andernfalls einen eigenständigen Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h., hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Gibt einen Hinweis an den Browser, der vorschlägt, dass er eine Verbindung zur verlinkten Webseite im Voraus öffnet, ohne private Informationen offenzulegen oder Inhalte herunterzuladen, damit, wenn der Link gefolgt wird, die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und im Cache speichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation vorab abrufen und im Cache speichern muss, entsprechend dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) -Attribut vorgegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den Wert [`preload`](/de/docs/Web/HTML/Attributes/rel/preload).
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und in einer Weise verarbeiten soll, die dazu beiträgt, in der Zukunft eine schnellere Antwort zu liefern, zum Beispiel durch das Abrufen seiner Unterressourcen oder das Durchführen einiger Rendering-Prozesse.
- `prev`

  - : Ähnlich dem Schlüsselwort [`next`](#next), relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; der `prev`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link ein vorheriges Dokument in der Serie referenziert, welches das referenzierte Dokument ist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für die Elemente {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}; der `privacy-policy`-Wert zeigt an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenverarbeitungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für die Elemente {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; die `search`-Schlüsselwörter zeigen an, dass der Hyperlink ein Dokument referenziert, dessen Schnittstelle speziell für die Suche im aktuellen Dokument, der Website und verwandten Ressourcen gestaltet ist, indem er einen Link zu einer Ressource bereitstellt, die für die Suche verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das der Firefox-Benutzeroberfläche leicht hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das Element {{htmlelement('link')}}, es importiert eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut wird nicht benötigt, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als ein Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des `rel`-Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem Schlüsselwort [`alternate`](#alternate) verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall sollte ein nicht-leerer [`title`](/de/docs/Web/HTML/Element/link#title) angegeben werden.

    Das externe Stylesheet wird nicht verwendet oder heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media)-Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Ressourcen, die von einer anderen Domain stammen.

- `tag`

  - : Gültig für die Elemente {{htmlelement('a')}} und {{htmlelement('area')}}, es gibt ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt. Der Tag-Wert zeigt an, dass der Link auf ein Dokument verweist, dass ein auf das Dokument anzuwendendes Tag beschreibt, auf dem es sich befindet. Dieser Linktyp ist nicht für Tags in einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten angewendet werden, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument vorgesehen ist.

- `terms-of-service`

  - : Gültig für die Elemente {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}; der `terms-of-service`-Wert zeigt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern, die das bereitgestellte Dokument verwenden möchten, beschreiben.

### Nicht-standardisierte Werte

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
