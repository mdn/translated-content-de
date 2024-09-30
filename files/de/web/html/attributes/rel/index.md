---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig auf {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, wobei die unterstützten Werte vom Element abhängen, auf dem das Attribut gefunden wird.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs bestimmt, der, falls vorhanden, einen Wert haben muss, der aus einer ungeordneten Menge einzigartiger, durch Leerzeichen getrennter Schlüsselwörter besteht. Im Gegensatz zu einem `class`-Namen, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens ausdrücken, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA-Linkrelationen-Register](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [Seite zu bestehenden rel-Werten](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vom Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wenn ein `rel`-Attribut verwendet wird, das nicht in einer der drei oben genannten Quellen vorhanden ist, werden einige HTML-Validierer (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten existierenden Schlüsselwörter. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte innerhalb dieses Werts einzigartig sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                          | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                            | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                     | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                  | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                              | Permalink für den nächstgelegenen Vorfahren-Abschnitt.                                                                                                                                                                                                                                  | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                            | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                              | Link                    | Nicht erlaubt                                      | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource im Voraus auszuführen.                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`external`](#external)                                              | Das referenzierte Dokument gehört nicht zur gleichen Website wie das aktuelle Dokument.                                                                                                                                                                                                | Nicht erlaubt           | Anmerkung                                         | Anmerkung               |
| [`expect`](#expect)                                                  | Ermöglicht, dass die Seite blockiert wird, bis die wesentlichen Teile des Dokuments analysiert sind, sodass es konsistent gerendert wird.                                                                                                                                               | Link                    | Nicht erlaubt                                      | Nicht erlaubt           |
| [`help`](#help)                                                      | Link zur kontextsensitiven Hilfe.                                                                                                                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                      | Ein Symbol, das das aktuelle Dokument darstellt.                                                                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`license`](#license)                                                | Gibt an, dass der Hauptinhalt des aktuellen Dokuments von der im referenzierten Dokument beschriebenen Copyright-Lizenz abgedeckt ist.                                                                                                                                                | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web-App-Manifest.                                                                                                                                                                                                                                                                      | Link                    | Nicht erlaubt                                      | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Weist den Browser an, das Skript im Voraus abzurufen und es in der Modulkarte des Dokuments zur späteren Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`next`](#next)                                                      | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                     | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                              | Gibt an, dass der ursprüngliche Autor oder Verleger des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                               | Nicht erlaubt           | Anmerkung                                         | Anmerkung               |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink entweder davon erstellt werden würde (d. h. hat einen geeigneten `target`-Attributwert).                                                                                             | Nicht erlaubt           | Anmerkung                                         | Anmerkung               |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Es wird kein `Referer`-Header enthalten sein. Darüber hinaus hat es denselben Effekt wie `noopener`.                                                                                                                                                                                   | Nicht erlaubt           | Anmerkung                                         | Anmerkung               |
| [`opener`](#opener)                                                  | Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink sonst einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d. h. hat `"_blank"` als `target`-Attributwert).                                                                                  | Nicht erlaubt           | Anmerkung                                         | Anmerkung               |
| [`pingback`](#pingback)                                              | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                                            | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent eine Verbindung zum Ursprung der Zielressource im Voraus herstellen sollte.                                                                                                                                                                             | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und zwischenspeichern sollte, da diese wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                             | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation im Voraus abrufen und zwischenspeichern muss, basierend auf dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) Attribut vorgegeben ist (und der Priorität, die mit dem entsprechenden Ziel verbunden ist).                                            | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und so verarbeiten sollte, dass eine schnellere Reaktion in der Zukunft möglich ist.                                                                                                                              | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`prev`](#prev)                                                      | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorhergehende Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                              | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                  | Gibt einen Link zu Informationen über die Datenaufnahme- und Nutzungspraktiken, die für das aktuelle Dokument gelten.                                                                                                                                                                  | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                  | Gibt einen Link zu einer Ressource, die verwendet werden kann, um im aktuellen Dokument und seinen verwandten Seiten zu suchen.                                                                                                                                                         | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                          | Importiert ein Stylesheet.                                                                                                                                                                                                                                                             | Externe Ressource       | Nicht erlaubt                                      | Nicht erlaubt           |
| [`tag`](#tag)                                                        | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft.                                                                                                                                                                                  | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                              | Link zur Vereinbarung oder zu den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument verwenden möchten.                                                                                                                                         | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, aber einige Werte gelten nur für eine Teilmenge dieser Elemente. Wie alle HTML-Schlüsselwort-Attributwerte, sind diese Werte nicht groß-/klein-schreibungssensitiv.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource, außer dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, auf {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter hat, oder nicht eines oder mehrere der obigen durch Leerzeichen getrennten Schlüsselwörter enthält, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen immer noch Links, jedoch ohne eine definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Mit dem [`stylesheet`](#stylesheet)-Schlüsselwort auf einem `<link>` wird ein [alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)-Attribut, das sich von der Dokumentensprache unterscheidet, zeigt es eine Übersetzung an.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type)-Attributwert `"application/rss+xml"` oder `"application/atom+xml"` wird ein Hyperlink erstellt, der auf einen Syndikationsfeed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Ansonsten wird ein Hyperlink erstellt, der auf eine alternative Darstellung des aktuellen Dokuments verweist, dessen Art durch die [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type)-Attribute gegeben ist.

      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, weist es darauf hin, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Die Attribute `hreflang` und `type` können beide zusammen mit `alternate` angegeben sein.

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

  - : Zeigt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen {{htmlelement('article')}}-Vorfahren bereitstellt, falls vorhanden, andernfalls für das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächstgelegene Vorfahren-{{htmlelement('article')}}-Element an, falls vorhanden. Wenn kein Vorfahren-`<article>`-Element vorhanden ist, gibt es einen Permalink für den Abschnitt an, dem das verlinkende Element am nächsten ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert es die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, weist es den Browser an, die DNS-Auflösung für den Ursprung der Zielressource im Voraus durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, Latenzzeiten zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich aufruft, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource im Voraus durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/dns-prefetch) beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, zeigt es an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu stylen, dass dem Benutzer angezeigt wird, dass er die aktuelle Website verlässt.
- `expect` {{experimental_inline}}

  - : Ermöglicht der Seite, blockiert zu werden, bis die wesentlichen Teile des Dokuments analysiert sind, sodass es konsistent gerendert wird. Beachten Sie, dass die Blockierung nur beim Setzen des [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking)-Attributs stattfindet.

    > [!NOTE]
    > Siehe [Stabilisierung des Seitenzustands, um konsistente Übergänge zwischen Dokumenten zu gewährleisten](/de/docs/Web/API/View_Transitions_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zur Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; das `help`-Schlüsselwort gibt an, dass der verlinkte Inhalt kontextsensitive Hilfe bietet und Informationen für das Elternteil des das Hyperlink definierenden Elements und dessen Kinder liefert. Wenn es innerhalb von `<link>` verwendet wird, bezieht sich die Hilfe auf das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} verwendet wird und unterstützt wird, wird der Standard-{{cssxref('cursor')}} stattdessen `help` anstelle von `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Symbol, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser ihre [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type) und [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleich geeignet sind, wird das letzte verwendet. Wenn das geeignetste Symbol später als unangemessen befunden wird, zum Beispiel weil es ein nicht unterstütztes Format hat, fährt der Browser mit dem nächsten am besten geeigneten fort usw.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut, wie andere mobile Browser es tun, um ein Webseiten-Symbol für Web Clip oder ein Startbildplatzhalter zu wählen.
    > Stattdessen verwendet es das nicht standardisierte [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) entsprechend.

    > [!NOTE]
    > Der `shortcut`-Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht konform, ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}-Elementen zeigt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments unter der im referenzierten Dokument beschriebenen Copyright-Lizenz abgedeckt ist. Wenn er nicht innerhalb des {{HTMLElement("head")}}-Elements ist, unterscheidet die Norm nicht zwischen einem Hyperlink, der sich auf einen bestimmten Teil des Dokuments bezieht, oder auf das Dokument als Ganzes. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Manifest). Erfordert die Verwendung des CORS-Protokolls für die stationsübergreifende Abfrage.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für die {{htmlelement('link')}} überall im Dokument, indem `rel="modulepreload"` gesetzt wird, weist der Browser an, das Skript (und die Abhängigkeiten) im Voraus abzurufen und es in der Modulkarte des Dokuments zur späteren Ausführung zu speichern. `modulepreload`-Links können sicherstellen, dass die Netzwerkabfrage mit dem Modul abgeschlossen ist (aber nicht bewertet) in der Modulkarte, bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die `next`-Werte geben an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte ist. Wenn es in einem `<link>` enthalten ist, können Browser annehmen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcentipp behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort sagt Suchmaschinen-Crawlern, die Link-Beziehung zu ignorieren. Die nofollow-Beziehung kann darauf hinweisen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern eingebaut, die so tun, als wären ihre Link-Farmen keine Spam-Seiten.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink entweder davon erstellt wird, um mit (d. h. hat einen geeigneten `target`-Attributwert) zu beginnen. Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, einschließlich dieses Werts macht den Referrer unbekannt (es wird kein `Referer`-Header enthalten), und erstellt einen obersten Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink sonst einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d. h. hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet einen Hinweis für den Browser, dass er im Voraus eine Verbindung zur verlinkten Website herstellen sollte, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, sodass beim Folgen des Links die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation erforderlich ist.
    Siehe [prefetch](/de/docs/Glossary/prefetch) für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation im Voraus abrufen und zwischenspeichern muss, gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut vorgegeben ist (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und so verarbeiten sollte, dass eine schnellere Antwort in der Zukunft möglich ist, zum Beispiel durch Abrufen seiner Unterressourcen oder Durchführung einiger Renderings.
- `prev`

  - : Ähnlich wie das [`next`](#next)-Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}; die `prev`-Werte geben an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link ein vorhergehendes Dokument in der Serie referenziert.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente, der `privacy-policy`-Wert gibt an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenaufnahme- und Nutzungspraktiken im aktuellen Dokument beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, die `search`-Schlüsselwörter geben an, dass der Hyperlink auf ein Dokument verweist, dessen Oberfläche speziell zum Suchen im aktuellen Dokument, auf der Seite und verwandten Ressourcen entwickelt wurde und einen Link zu einer Ressource bereitstellt, die zum Suchen verwendet werden kann.

    Falls das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/OpenSearch) Plugin, das leicht in die Oberfläche von Firefox integriert werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}}-Element, es importiert eine externe Ressource, die als Stylesheet verwendet wird. Das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut ist nicht notwendig, wenn es ein `text/css`-Stylesheet ist, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselwerten innerhalb des rel-Werts, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn er mit dem [`alternate`](#alternate)-Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall sollten Sie einen nicht-leeren [`title`](/de/docs/Web/HTML/Element/link#title) einschließen.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media)-Attributs entspricht.

    Erfordert die Verwendung des CORS-Protokolls für grenzüberschreitende Abfragen.

- `tag`

  - : Gültig für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, es gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein für das Dokument, auf dem sich der Link befindet, zutreffendes Tag beschreibt. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags für eine Gruppe von Seiten gelten, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente, der `terms-of-service`-Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreibt, die das bereitgestellte Dokument verwenden möchten.

### Nicht standardmäßige Werte

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
