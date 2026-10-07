---
title: HTML-Attribut `rel`
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: bf7ff749b987d530e9a6c07f23ac66f94d968e57
---

Das Attribut **`rel`** definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} gültig. Welche Werte unterstützt werden, hängt vom jeweiligen Element ab.

Die Art der Beziehung wird durch den Wert des Attributs `rel` angegeben. Ist das Attribut vorhanden, muss sein Wert aus einer ungeordneten Menge eindeutiger, durch Leerzeichen getrennter Schlüsselwörter bestehen. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das Attribut `rel` Schlüsselwörter enthalten, die sowohl für Maschinen als auch für Menschen semantisch sinnvoll sind. Die aktuellen Verzeichnisse möglicher Werte für das Attribut `rel` sind das [IANA-Verzeichnis für Linkbeziehungen](https://www.iana.org/assignments/link-relations), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare Seite [existing-rel-values](https://microformats.org/wiki/existing-rel-values) im microformats-Wiki, [wie im Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wird ein `rel`-Wert verwendet, der in keiner dieser drei Quellen aufgeführt ist, geben manche HTML-Validatoren, etwa der [W3C Markup Validation Service](https://validator.w3.org/), eine Warnung aus.

Die folgende Tabelle enthält einige der wichtigsten vorhandenen Schlüsselwörter. Jedes Schlüsselwort sollte innerhalb eines durch Leerzeichen getrennten Werts nur einmal vorkommen.

| `rel`-Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                          | Link                    | Link                                             | Nicht zulässig          |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                | Link                    | Link                                             | Nicht zulässig          |
| [`bookmark`](#bookmark)                                                                       | Permanenter Link zum nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                              | Nicht zulässig          | Link                                             | Nicht zulässig          |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                   | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, mit dem künftige Downloads von Ressourcen dieser Website komprimiert werden können.                                                                                             | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorzeitig durchzuführen.                                                                                                                                                                         | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`external`](#external)                                                                       | Das referenzierte Dokument gehört nicht zu derselben Website wie das aktuelle Dokument.                                                                                                                                                                                     | Nicht zulässig          | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Ermöglicht zusammen mit [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking), das {{Glossary("Render_blocking", "Rendering der Seite zu blockieren")}}, bis die wesentlichen Teile des Dokuments geparst wurden, damit die Darstellung konsistent ist. | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`help`](#help)                                                                               | Link zu kontextbezogener Hilfe.                                                                                                                                                                                                                                             | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                        | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments unter der im referenzierten Dokument beschriebenen urheberrechtlichen Lizenz steht.                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                           | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                              | Link                    | Link                                             | Nicht zulässig          |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Weist den Browser an, das Skript vorzeitig abzurufen und zur späteren Auswertung in der Modulzuordnung des Dokuments zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                     | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Reihe ist und das referenzierte Dokument das nächste Dokument dieser Reihe ist.                                                                                                                                              | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                | Nicht zulässig          | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen Browsing-Kontext auf oberster Ebene, der kein zusätzlicher Browsing-Kontext ist, sofern der Hyperlink andernfalls einen dieser Kontexte erstellen würde (d.h. einen geeigneten Wert für das Attribut `target` hat).                                          | Nicht zulässig          | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Es wird kein `Referer`-Header gesendet. Hat außerdem dieselbe Wirkung wie `noopener`.                                                                                                                                                                                       | Nicht zulässig          | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink andernfalls einen Browsing-Kontext auf oberster Ebene erstellen würde, der kein zusätzlicher Browsing-Kontext ist (d.h. wenn das Attribut `target` den Wert `"_blank"` hat).                               | Nicht zulässig          | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet.                                                                                                                                                                              | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der User Agent vorzeitig eine Verbindung zum Ursprung der Zielressource herstellen sollte.                                                                                                                                                                    | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der User Agent die Zielressource vorzeitig abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine anschließende Navigation benötigt wird.                                                                                                       | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der User Agent die Zielressource für die aktuelle Navigation vorzeitig abrufen und zwischenspeichern muss, entsprechend dem durch das Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) angegebenen möglichen Zieltyp und dessen Priorität.       | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) {{deprecated_inline}}     | Gibt an, dass der User Agent die Zielressource vorzeitig abrufen und so verarbeiten sollte, dass sie künftig schneller bereitgestellt werden kann. Diese Funktion wurde durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) abgelöst.                 | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Reihe ist und das referenzierte Dokument das vorherige Dokument dieser Reihe ist.                                                                                                                                            | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Verlinkt Informationen über die für das aktuelle Dokument geltenden Praktiken zur Datenerhebung und -nutzung.                                                                                                                                                               | Link                    | Link                                             | Nicht zulässig          |
| [`search`](#search)                                                                           | Verlinkt eine Ressource, mit der das aktuelle Dokument und zugehörige Seiten durchsucht werden können.                                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                  | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`tag`](#tag)                                                                                 | Gibt ein Tag an, das durch die angegebene Adresse identifiziert wird und für das aktuelle Dokument gilt.                                                                                                                                                                    | Nicht zulässig          | Link                                             | Nicht zulässig          |
| [`terms-of-service`](#terms-of-service)                                                       | Link zur Vereinbarung beziehungsweise zu den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Nutzern, die es verwenden möchten.                                                                                                                             | Link                    | Link                                             | Nicht zulässig          |

Das Attribut `rel` ist für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} relevant. Einige Werte gelten jedoch nur für einen Teil dieser Elemente. Wie bei allen HTML-Attributwerten, die Schlüsselwörter sind, wird bei diesen Werten nicht zwischen Groß- und Kleinschreibung unterschieden.

Das Attribut `rel` hat keinen Standardwert. Wird es weggelassen oder wird keiner seiner Werte unterstützt, besteht zwischen dem Dokument und der Zielressource keine bestimmte Beziehung – abgesehen von einem Hyperlink zwischen beiden. Bei {{htmlelement('link')}} und {{htmlelement('form')}} erstellt das Element in diesem Fall keinen Link, wenn das Attribut `rel` fehlt, keine Schlüsselwörter enthält oder keines seiner durch Leerzeichen getrennten Schlüsselwörter unterstützt wird. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, allerdings ohne definierte Beziehung.

## Wert

- `alternate`
  - : Kennzeichnet eine alternative Darstellung des aktuellen Dokuments. Der Wert ist für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} gültig; seine Bedeutung hängt von den Werten der anderen Attribute ab.
    - Zusammen mit dem Schlüsselwort [`stylesheet`](#stylesheet) auf einem `<link>` wird ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Zusammen mit einem Attribut [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang), dessen Wert von der Sprache des Dokuments abweicht, kennzeichnet es eine Übersetzung.
    - Zusammen mit dem Wert `"application/rss+xml"` oder `"application/atom+xml"` für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) wird ein Hyperlink zu einem Syndication-Feed erstellt.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls wird ein Hyperlink zu einer alternativen Darstellung des aktuellen Dokuments erstellt, deren Art durch die Attribute [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) angegeben wird.
      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und sein Wert von der Sprache des aktuellen Dokuments abweicht, ist das referenzierte Dokument eine Übersetzung.
      - Wenn `type` zusammen mit `alternate` angegeben wird, liegt das referenzierte Dokument in einem alternativen Format vor, beispielsweise als PDF.
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
  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels enthält. Relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} gibt der Wert an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen übergeordneten {{htmlelement('article')}}-Elements enthält, sofern ein solches vorhanden ist. Andernfalls beziehen sich die Informationen auf das gesamte Dokument.

    Bei {{htmlelement('link')}} bezieht sich der Wert auf den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` wie `rel="author"` behandelt.

- `bookmark`
  - : Relevant als Wert des Attributs `rel` für die Elemente {{htmlelement('a')}} und {{htmlelement('area')}}. Gibt einen permanenten Link zum nächstgelegenen übergeordneten {{htmlelement('article')}}-Element an, sofern eines vorhanden ist. Gibt es kein übergeordnetes `<article>`-Element, verweist der permanente Link auf den Abschnitt, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}. Definiert die bevorzugte URL für das aktuelle Dokument und hilft Suchmaschinen so, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}. Definiert ein {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, mit dem künftige Downloads von Ressourcen dieser Website so komprimiert werden können, dass sie kleiner sind als bei einer Standardkomprimierung.
- `dns-prefetch`
  - : Relevant für das Element {{htmlelement('link')}} sowohl in {{htmlelement('body')}} als auch in {{htmlelement('head')}}. Weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorzeitig durchzuführen. Dies ist nützlich für Ressourcen, die Nutzer wahrscheinlich benötigen: Weil der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource bereits durchgeführt hat, verringert sich beim Zugriff auf die Ressource die Latenz und die Leistung verbessert sich. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) in der Beschreibung der [Resource Hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Gibt an, dass das referenzierte Dokument nicht zur aktuellen Website gehört. Mit Attributselektoren können externe Links so gestaltet werden, dass Nutzer erkennen, dass sie die aktuelle Website verlassen.
- `expect`
  - : Ermöglicht, das {{Glossary("Render_blocking", "Rendering der Seite zu blockieren")}}, bis die wesentlichen Teile des Dokuments geparst wurden, damit die Darstellung konsistent ist. Das Rendering wird allerdings nur blockiert, wenn zusätzlich das Attribut [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) angegeben ist.

    > [!NOTE]
    > Weitere Informationen zur Verwendung finden Sie unter [Seitenzustand stabilisieren, um dokumentübergreifende Übergänge konsistent zu gestalten](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Das Schlüsselwort `help` gibt an, dass der verlinkte Inhalt kontextbezogene Hilfe für das übergeordnete Element des Elements, das den Hyperlink definiert, sowie für dessen untergeordnete Elemente bereitstellt. Bei Verwendung in `<link>` bezieht sich die Hilfe auf das gesamte Dokument. Wird es bei {{htmlelement('a')}} oder {{htmlelement('area')}} angegeben und unterstützt, ist der Standardwert für {{cssxref('cursor')}} `help` statt `pointer`.
- `icon`
  - : Gültig für {{htmlelement('link')}}. Die verlinkte Ressource ist das Symbol, mit dem das aktuelle Dokument in der Benutzeroberfläche dargestellt wird.

    Die häufigste Verwendung des Werts `icon` ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Sind mehrere `<link rel="icon">`-Elemente vorhanden, wählt der Browser anhand ihrer Attribute [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) das am besten geeignete Symbol aus. Sind mehrere Symbole gleichermaßen geeignet, wird das letzte verwendet. Stellt sich später heraus, dass das am besten geeignete Symbol doch ungeeignet ist, etwa weil es ein nicht unterstütztes Format verwendet, prüft der Browser das nächstgeeignete Symbol und so weiter.

    > [!NOTE]
    > Das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe den [offenen Chromium-Fehlerbericht](https://crbug.com/1121645).

    > [!NOTE]
    > Anders als andere mobile Browser verwendet Apples iOS weder diesen Linktyp noch das Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes), um ein Webseitensymbol für einen Web Clip oder einen Platzhalter beim Start auszuwählen.
    > Stattdessen verwendet es die nicht standardisierten Werte [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) beziehungsweise [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6).

    > [!NOTE]
    > Der Linktyp `shortcut` steht häufig vor `icon`. Er entspricht jedoch nicht dem Standard, wird ignoriert und **darf von Webentwicklern nicht mehr verwendet werden**.

- `license`
  - : Gültig für die Elemente {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}} und {{HTMLElement("link")}}. Der Wert `license` gibt an, dass der Hyperlink zu einem Dokument mit Lizenzinformationen führt: Der Hauptinhalt des aktuellen Dokuments steht unter der im referenzierten Dokument beschriebenen urheberrechtlichen Lizenz. Befindet sich der Link nicht innerhalb des Elements {{HTMLElement("head")}}, unterscheidet der Standard nicht, ob er für einen bestimmten Teil des Dokuments oder für das gesamte Dokument gilt. Das lässt sich nur anhand der Daten auf der Seite feststellen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Das Synonym `copyright` wird zwar erkannt, ist aber falsch und sollte vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Für das Abrufen über Ursprungsgrenzen hinweg muss das CORS-Protokoll verwendet werden.
- `modulepreload`
  - : Nützlich zur Leistungsverbesserung und für {{htmlelement('link')}} an jeder Stelle im Dokument relevant. Mit `rel="modulepreload"` wird der Browser angewiesen, das Skript und seine Abhängigkeiten vorzeitig abzurufen und zur späteren Auswertung in der Modulzuordnung des Dokuments zu speichern. `modulepreload`-Links können sicherstellen, dass das Modul bereits über das Netzwerk abgerufen wurde und unausgewertet in der Modulzuordnung bereitsteht, bevor es benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Der Wert `next` gibt an, dass das aktuelle Dokument Teil einer Reihe ist und das referenzierte Dokument als Nächstes folgt. In einem `<link>` können Browser annehmen, dass dieses Dokument als Nächstes abgerufen wird, und den Link als Resource Hint behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Das Schlüsselwort `nofollow` weist Suchmaschinen-Crawler an, die Linkbeziehung zu ignorieren. Die Beziehung kann darauf hinweisen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Sie wird häufig von Suchmaschinenoptimierern verwendet, die ihre Linkfarmen als Nicht-Spam-Seiten ausgeben möchten.
- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Erstellt einen Browsing-Kontext auf oberster Ebene, der kein zusätzlicher Browsing-Kontext ist, sofern der Hyperlink andernfalls einen dieser Kontexte erstellen würde (d.h. einen geeigneten Wert für das Attribut `target` hat). Anders ausgedrückt verhält sich der Link so, als wäre [`window.opener`](/de/docs/Web/API/Window/opener) null und `target="_parent"` gesetzt.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Dieser Wert verhindert die Übermittlung des Referrers (es wird kein `Referer`-Header gesendet) und erstellt einen Browsing-Kontext auf oberster Ebene, als wäre auch `noopener` gesetzt.
- `opener`
  - : Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink andernfalls einen Browsing-Kontext auf oberster Ebene erstellen würde, der kein zusätzlicher Browsing-Kontext ist (d.h. wenn das Attribut `target` den Wert `"_blank"` hat). Dies ist praktisch das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Gibt dem Browser einen Hinweis, vorab eine Verbindung zur verlinkten Website herzustellen, ohne private Informationen preiszugeben oder Inhalte herunterzuladen. Wird dem Link später gefolgt, können die verlinkten Inhalte dadurch schneller abgerufen werden.
- `prefetch`
  - : Gibt an, dass der User Agent die Zielressource vorzeitig abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine anschließende Navigation benötigt wird.
    Weitere Informationen finden Sie unter {{Glossary("prefetch", "prefetch")}}.
- `preload`
  - : Gibt an, dass der User Agent die Zielressource für die aktuelle Navigation vorzeitig abrufen und zwischenspeichern muss, entsprechend dem durch das Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) angegebenen möglichen Zieltyp und dessen Priorität. Siehe die Seite zum Wert [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der User Agent die Zielressource vorzeitig abrufen und so verarbeiten sollte, dass sie künftig schneller bereitgestellt werden kann, beispielsweise indem er ihre Unterressourcen abruft oder Teile des Renderings ausführt. Diese Funktion wurde durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) abgelöst.
- `prev`
  - : Ähnlich wie das Schlüsselwort [`next`](#next) ist `prev` für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} relevant. Der Wert gibt an, dass das aktuelle Dokument Teil einer Reihe ist und der Link auf ein vorheriges Dokument dieser Reihe verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für die Elemente {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}. Der Wert `privacy-policy` gibt an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Praktiken zur Datenerhebung und -nutzung für das aktuelle Dokument beschreibt.

- `search`
  - : Relevant für die Elemente {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Das Schlüsselwort `search` gibt an, dass der Hyperlink auf eine Ressource mit einer speziell für die Suche im aktuellen Dokument, auf der Website und in verwandten Ressourcen entwickelten Oberfläche verweist.

    Ist das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) auf `application/opensearchdescription+xml` gesetzt, handelt es sich bei der Ressource um ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das sich einfach zur Firefox-Oberfläche hinzufügen lässt.

- `stylesheet`
  - : Gültig für das Element {{htmlelement('link')}}. Importiert eine externe Ressource, die als Stylesheet verwendet wird. Bei einem Stylesheet vom Typ `text/css` ist das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) nicht erforderlich, da dies der Standardwert ist. Bei einem anderen Typ sollte der Typ angegeben werden.

    Dieses Attribut kennzeichnet den Link zwar als Stylesheet, doch das Zusammenspiel mit anderen Attributen und Schlüsselwörtern im `rel`-Wert bestimmt, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Zusammen mit dem Schlüsselwort [`alternate`](#alternate) definiert es ein alternatives Stylesheet. Geben Sie in diesem Fall ein nicht leeres Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) an.

    Das externe Stylesheet wird weder verwendet noch heruntergeladen, wenn das Medium nicht zum Wert des Attributs [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) passt.

    Für das Abrufen über Ursprungsgrenzen hinweg muss das CORS-Protokoll verwendet werden.

- `tag`
  - : Gültig für die Elemente {{htmlelement('a')}} und {{htmlelement('area')}}. Gibt ein Tag an, das durch die angegebene Adresse identifiziert wird und für das aktuelle Dokument gilt. Der Wert `tag` bedeutet, dass der Link auf ein Dokument verweist, das ein für das aktuelle Dokument geltendes Tag beschreibt. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Cloud gedacht: Solche Tags gelten für eine Gruppe von Seiten, während sich der Wert `tag` des Attributs `rel` auf ein einzelnes Dokument bezieht.

- `terms-of-service`
  - : Gültig für die Elemente {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}. Der Wert `terms-of-service` gibt an, dass das referenzierte Dokument die Nutzungsbedingungen enthält, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern beschreiben, die es verwenden möchten.

### Nicht standardisierte Werte

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
