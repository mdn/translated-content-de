---
title: HTML-Attribut `rel`
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Das Attribut **`rel`** definiert die Beziehung zwischen einer verknüpften Ressource und dem aktuellen Dokument. Es ist für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} gültig; die unterstützten Werte hängen von dem Element ab, auf dem sich das Attribut befindet.

Die Art der Beziehungen wird durch den Wert des Attributs `rel` angegeben, der, falls vorhanden, eine ungeordnete Menge eindeutiger, durch Leerzeichen getrennter Schlüsselwörter enthalten muss. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das Attribut `rel` Token ausdrücken, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des Attributs `rel` sind das [IANA-Register für Link-Beziehungen](https://www.iana.org/assignments/link-relations), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare Seite [existing-rel-values](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard vorgeschlagen. Wenn ein `rel`-Attribut verwendet wird, das in keiner der drei oben genannten Quellen enthalten ist, erzeugen einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte innerhalb dieses Werts eindeutig sein.

| `rel`-Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                 | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächsten übergeordneten Abschnitt.                                                                                                                                                                                                                                                         | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                    | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads von Ressourcen auf dieser Website zu komprimieren.                                                                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorsorglich durchzuführen.                                                                                                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument ist nicht Teil derselben Website wie das aktuelle Dokument.                                                                                                                                                                                                                       | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Ermöglicht bei Verwendung mit [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking), dass die Seite {{Glossary("Render_blocking", "am Rendern gehindert")}} wird, bis die wesentlichen Teile des Dokuments geparst sind, sodass sie konsistent gerendert wird.                           | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                             | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist.                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Weist den Browser an, das Skript vorsorglich abzurufen und es zur späteren Auswertung in der Modulzuordnung des Dokuments zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument der Serie das referenzierte Dokument ist.                                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht befürwortet.                                                                                                                                                                                 | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen Browsing-Kontext der obersten Ebene, der kein Hilfs-Browsing-Kontext ist, falls der Hyperlink ursprünglich einen dieser Kontexte erstellen würde (d.h. einen passenden `target`-Attributwert besitzt).                                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Es wird kein `Referer`-Header einbezogen. Außerdem hat dies dieselbe Wirkung wie `noopener`.                                                                                                                                                                                                                 | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfs-Browsing-Kontext, falls der Hyperlink andernfalls einen Browsing-Kontext der obersten Ebene erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. `"_blank"` als `target`-Attributwert besitzt).                                                                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet.                                                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Legt fest, dass der User-Agent vorsorglich eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Legt fest, dass der User-Agent die Zielressource vorsorglich abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Legt fest, dass der User-Agent die Zielressource für die aktuelle Navigation entsprechend dem durch das Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) angegebenen möglichen Ziel (und der mit dem entsprechenden Ziel verknüpften Priorität) vorsorglich abrufen und zwischenspeichern muss. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) {{deprecated_inline}}     | Legt fest, dass der User-Agent die Zielressource vorsorglich abrufen und auf eine Weise verarbeiten soll, die künftig eine schnellere Antwort ermöglicht. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.                                             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das vorherige Dokument der Serie das referenzierte Dokument ist.                                                                                                                                                                                | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Stellt einen Link zu Informationen über die Praktiken der Datenerhebung und -nutzung bereit, die für das aktuelle Dokument gelten.                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Stellt einen Link zu einer Ressource bereit, die zum Durchsuchen des aktuellen Dokuments und der zugehörigen Seiten verwendet werden kann.                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Stellt ein Tag bereit, das durch die angegebene Adresse identifiziert wird und für das aktuelle Dokument gilt.                                                                                                                                                                                               | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zur Vereinbarung bzw. zu den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und Benutzern, die das Dokument verwenden möchten.                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |

Das Attribut `rel` ist für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} relevant, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte unterscheiden diese Werte nicht zwischen Groß- und Kleinschreibung.

Das Attribut `rel` hat keinen Standardwert. Wenn das Attribut weggelassen wird oder keiner der Werte im Attribut unterstützt wird, besteht zwischen dem Dokument und der Zielressource keine besondere Beziehung, außer dass zwischen beiden ein Hyperlink besteht. In diesem Fall erstellen {{htmlelement('link')}} und {{htmlelement('form')}} keine Links, wenn das Attribut `rel` fehlt, keine Schlüsselwörter enthält oder keines oder mehrere der oben durch Leerzeichen getrennten Schlüsselwörter enthält. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, jedoch ohne definierte Beziehung.

## Wert

- `alternate`
  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; die Bedeutung hängt von den Werten der anderen Attribute ab.
    - Mit dem Schlüsselwort [`stylesheet`](#stylesheet) auf einem `<link>` wird ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)-Attribut, das sich von der Dokumentsprache unterscheidet, gibt es eine Übersetzung an.
    - Mit dem Wert `"application/rss+xml"` oder `"application/atom+xml"` für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) wird ein Hyperlink erstellt, der auf einen Syndication-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls wird ein Hyperlink erstellt, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die Attribute [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) angegeben wird.
      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und der Wert von `hreflang` von der Sprache des aktuellen Dokuments abweicht, gibt dies an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben wird, gibt dies an, dass das referenzierte Dokument ein alternatives Format ist, beispielsweise ein PDF.
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

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} gibt dies an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten übergeordneten {{htmlelement('article')}}-Elements bereitstellt, falls eines vorhanden ist; andernfalls über das gesamte Dokument.

    Bei {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` wie `rel="author"` behandelt.

- `bookmark`
  - : Relevant als Wert des Attributs `rel` für die Elemente {{htmlelement('a')}} und {{htmlelement('area')}}. Stellt einen Permalink für das nächste übergeordnete {{htmlelement('article')}}-Element bereit, falls eines vorhanden ist. Falls kein übergeordnetes `<article>`-Element vorhanden ist, stellt es einen Permalink für den Abschnitt bereit, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}; definiert die bevorzugte URL für das aktuelle Dokument, wodurch Suchmaschinen doppelte Inhalte reduzieren können.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}; definiert ein {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads von Ressourcen auf dieser Website zu komprimieren, sodass die Downloadgrößen dieser Ressourcen kleiner sind als bei der Standardkomprimierung.
- `dns-prefetch`
  - : Relevant für das Element {{htmlelement('link')}} sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}; weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorsorglich durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt: Es hilft, die Latenz zu verringern und verbessert dadurch die Leistung, wenn der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorsorglich durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [Resource Hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu gestalten, dass dem Benutzer angezeigt wird, dass er die aktuelle Website verlässt.
- `expect` {{experimental_inline}}
  - : Ermöglicht, dass die Seite {{Glossary("Render_blocking", "am Rendern gehindert")}} wird, bis die wesentlichen Teile des Dokuments geparst sind, sodass sie konsistent gerendert wird. Beachten Sie, dass das Rendern nur dann blockiert wird, wenn es durch das Attribut [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) ergänzt wird.

    > [!NOTE]
    > Weitere Informationen zur Verwendung finden Sie unter [Stabilisieren des Seitenzustands, um dokumentübergreifende Übergänge konsistent zu gestalten](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; das Schlüsselwort `help` gibt an, dass der verlinkte Inhalt kontextsensitive Hilfe bereitstellt, die Informationen für das übergeordnete Element des Elements, das den Hyperlink definiert, und dessen Kindelemente liefert. Bei Verwendung innerhalb von `<link>` gilt die Hilfe für das gesamte Dokument. Bei Verwendung mit {{htmlelement('a')}} und {{htmlelement('area')}} und entsprechender Unterstützung ist der Standardwert von {{cssxref('cursor')}} `help` statt `pointer`.
- `icon`
  - : Gültig mit {{htmlelement('link')}}; die verlinkte Ressource repräsentiert das Symbol für das aktuelle Dokument, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche.

    Die häufigste Verwendung des Werts `icon` ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn mehrere `<link rel="icon">` vorhanden sind, verwendet der Browser deren Attribute [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes), um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn sich später herausstellt, dass das am besten geeignete Symbol ungeeignet ist, beispielsweise weil es ein nicht unterstütztes Format verwendet, fährt der Browser mit dem nächstgeeigneten fort und so weiter.

    > [!NOTE]
    > Das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Issue](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Link-Typ ebenso wenig wie das Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes), wie es andere mobile Browser tun, um ein Webseiten-Symbol für einen Web Clip oder einen Startplatzhalter auszuwählen.
    > Stattdessen verwendet es jeweils die nicht standardmäßigen Werte [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6).

    > [!NOTE]
    > Der Link-Typ `shortcut` ist häufig vor `icon` zu sehen, aber dieser Link-Typ ist nicht konform, wird ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`
  - : Gültig für die Elemente {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}} und {{HTMLElement("link")}}; der Wert `license` gibt an, dass der Hyperlink zu einem Dokument führt, das Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Wenn er sich nicht innerhalb des Elements {{HTMLElement("head")}} befindet, unterscheidet der Standard nicht zwischen einem Hyperlink, der für einen bestimmten Teil des Dokuments gilt, und einem, der für das gesamte Dokument gilt. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl das Synonym `copyright` erkannt wird, ist es falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert für Abrufe über verschiedene Ursprünge die Verwendung des CORS-Protokolls.
- `modulepreload`
  - : Nützlich für eine verbesserte Leistung und relevant für {{htmlelement('link')}} überall im Dokument: Das Setzen von `rel="modulepreload"` weist den Browser an, das Skript (und Abhängigkeiten) vorsorglich abzurufen und zur späteren Auswertung in der Modulzuordnung des Dokuments zu speichern. `modulepreload`-Links können sicherstellen, dass der Netzwerkabruf durchgeführt wird und das Modul in der Modulzuordnung bereitsteht (aber nicht ausgewertet ist), bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; der Wert `next` gibt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument der Serie das referenzierte Dokument ist. Bei Verwendung in einem `<link>` können Browser annehmen, dass dieses Dokument als Nächstes abgerufen wird, und es als Resource Hint behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; das Schlüsselwort `nofollow` weist Suchmaschinen-Crawler an, die Link-Beziehung zu ignorieren. Die `nofollow`-Beziehung kann darauf hinweisen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht befürwortet. Sie wird häufig von Suchmaschinenoptimierern eingefügt, die vorgeben, dass ihre Linkfarmen keine Spam-Seiten sind.
- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; erstellt einen Browsing-Kontext der obersten Ebene, der kein Hilfs-Browsing-Kontext ist, falls der Hyperlink ursprünglich einen dieser Kontexte erstellen würde (d.h. einen passenden `target`-Attributwert besitzt). Mit anderen Worten verhält sich der Link so, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; das Einfügen dieses Werts macht den Referrer unbekannt (es wird kein `Referer`-Header einbezogen) und erstellt einen Browsing-Kontext der obersten Ebene, als wäre auch `noopener` gesetzt.
- `opener`
  - : Erstellt einen Hilfs-Browsing-Kontext, falls der Hyperlink andernfalls einen Browsing-Kontext der obersten Ebene erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. `"_blank"` als `target`-Attributwert besitzt). Dies ist effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Stellt dem Browser einen Hinweis bereit, der nahelegt, vorab eine Verbindung zur verlinkten Website zu öffnen, ohne private Informationen offenzulegen oder Inhalte herunterzuladen, damit der verlinkte Inhalt beim Folgen des Links schneller abgerufen werden kann.
- `prefetch`
  - : Legt fest, dass der User-Agent die Zielressource vorsorglich abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Weitere Informationen finden Sie unter {{Glossary("prefetch", "prefetch")}}.
- `preload`
  - : Legt fest, dass der User-Agent die Zielressource für die aktuelle Navigation entsprechend dem durch das Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) angegebenen möglichen Ziel (und der mit dem entsprechenden Ziel verknüpften Priorität) vorsorglich abrufen und zwischenspeichern muss. Siehe die Seite für den Wert [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Legt fest, dass der User-Agent die Zielressource vorsorglich abrufen und auf eine Weise verarbeiten soll, die künftig eine schnellere Antwort ermöglicht, beispielsweise durch das Abrufen ihrer Unterressourcen oder durch Ausführen einiger Rendering-Vorgänge. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.
- `prev`
  - : Ähnlich wie das Schlüsselwort [`next`](#next) und relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} gibt der Wert `prev` an, dass das aktuelle Dokument Teil einer Serie ist und der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für die Elemente {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}; der Wert `privacy-policy` gibt an, dass das referenzierte Dokument die Datenschutzerklärung ist, welche die Praktiken der Datenerhebung und -nutzung des aktuellen Dokuments beschreibt.

- `search`
  - : Relevant für die Elemente {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; das Schlüsselwort `search` gibt an, dass der Hyperlink auf ein Dokument verweist, dessen Benutzeroberfläche speziell für die Suche im aktuellen Dokument, auf der Website und in zugehörigen Ressourcen konzipiert ist, und stellt einen Link zu einer Ressource bereit, die für die Suche verwendet werden kann.

    Wenn das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das einfach zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`
  - : Gültig für das Element {{htmlelement('link')}}; importiert eine externe Ressource zur Verwendung als Stylesheet. Das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) wird nicht benötigt, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet vom Typ `text/css` handelt, sollten Sie den Typ angeben.

    Obwohl dieses Attribut den Link als Stylesheet definiert, bestimmen die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des `rel`-Werts, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Bei Verwendung mit dem Schlüsselwort [`alternate`](#alternate) definiert es ein alternatives Stylesheet. Schließen Sie in diesem Fall ein nicht leeres Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) ein.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht mit dem Wert des Attributs [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) übereinstimmt.

    Erfordert für Abrufe über verschiedene Ursprünge die Verwendung des CORS-Protokolls.

- `tag`
  - : Gültig für die Elemente {{htmlelement('a')}} und {{htmlelement('area')}}; stellt ein Tag bereit, das durch die angegebene Adresse identifiziert wird und für das aktuelle Dokument gilt. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein Tag beschreibt, das für das Dokument gilt, auf dem er sich befindet. Dieser Link-Typ ist nicht für Tags innerhalb einer Tag-Cloud vorgesehen, da diese Tags für eine Gruppe von Seiten gelten, während der `tag`-Wert des Attributs `rel` für ein einzelnes Dokument bestimmt ist.

- `terms-of-service`
  - : Gültig für die Elemente {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}; der Wert `terms-of-service` gibt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, welche die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreiben, die das bereitgestellte Dokument verwenden möchten.

### Nicht standardmäßige Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Legt das Symbol für eine Webanwendung auf einem iOS-Gerät fest.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
