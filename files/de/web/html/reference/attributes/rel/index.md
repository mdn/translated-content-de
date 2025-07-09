---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, hängen die unterstützten Werte vom Element ab, zu dem das Attribut gehört.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs bestimmt, der, wenn vorhanden, einen Wert haben muss, der eine ungeordnete Menge von durch Leerzeichen getrennten eindeutigen Schlüsselwörtern ist. Im Gegensatz zu einem `class`-Namen, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens ausdrücken, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA-Link-Beziehungsregister](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values Seite](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie im Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wenn ein `rel`-Attribut, das nicht in einer der drei oben genannten Quellen vorhanden ist, verwendet wird, generieren einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung.

Die folgende Tabelle listet einige der wichtigsten bestehenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte innerhalb dieses Werts eindeutig sein.

| `rel`-Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                               | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                                         | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                                                                                | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads von Ressourcen auf dieser Seite zu komprimieren.                                                                                                                              | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Teilt dem Browser mit, dass er die DNS-Auflösung für den Ursprung der Zielressource vorab durchführen soll.                                                                                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument ist nicht Teil derselben Website wie das aktuelle Dokument.                                                                                                                                                                                                                                     | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Ermöglicht es der Seite, {{Glossary("Render_blocking", "Render-Block")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, damit es konsistent gerendert wird.                                                                                                                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                                           | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Symbol, das das aktuelle Dokument darstellt.                                                                                                                                                                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist.                                                                                                                                                                                 | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person darstellt, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Teilt dem Browser mit, dass das Skript vorab abgerufen und im Modul-Map des Dokuments für eine spätere Auswertung gespeichert werden soll. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht befürwortet.                                                                                                                                                                                               | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen Haupt-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink entweder davon erstellen würde, um zu beginnen (d.h. hat einen geeigneten `target`-Attributwert).                                                                                                                          | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer`-Header wird enthalten. Darüber hinaus hat es denselben Effekt wie `noopener`.                                                                                                                                                                                                                               | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink andernfalls einen Haupt-Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert).                                                                                                                  | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der Benutzeragent vorab eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine Folgenavigation benötigt wird.                                                                                                                                                                  | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation entsprechend dem potenziellen Ziel, das durch das Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) angegeben wird (und die Priorität, die mit dem entsprechenden Ziel verbunden ist), vorab abrufen und zwischenspeichern muss. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)                           | Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und in einer Weise verarbeiten soll, die eine schnellere Antwort in der Zukunft ermöglicht.                                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraktiken, die für das aktuelle Dokument gelten, an.                                                                                                                                                                                             | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource an, die zum Durchsuchen des aktuellen Dokuments und seiner zugehörigen Seiten verwendet werden kann.                                                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt.                                                                                                                                                                                                                          | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zu der Vereinbarung oder den Nutzungsbedingungen (Terms of Service) zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument verwenden möchten.                                                                                                                                                          | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}-Elemente, aber einige Werte sind nur für eine Untermenge dieser Elemente relevant. Wie alle HTML-Schlüsselwort-Attributwerte sind diese Werte nicht zwischen Groß- und Kleinschreibung unterscheidend.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zu der Zielressource, außer dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter enthält oder wenn nicht eines oder mehrere der oben getrennten Schlüsselwörter erfüllt sind, erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, jedoch ohne eine definierte Beziehung.

## Wert

- `alternate`
  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.
    - Mit dem Schlüsselwort [`stylesheet`](#stylesheet) auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)-Attribut, das sich von der Sprach des Dokuments unterscheidet, gibt es eine Übersetzung an.
    - Mit dem `type`-Attributswert von `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink, der auf einen Syndikationsfeed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, dessen Art durch die `hreflang`- und `type`-Attribute angegeben wird.
      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und der Wert von `hreflang` sich von der aktuellen Sprachversion des Dokuments unterscheidet, gibt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben wird, gibt es an, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Sowohl die Attribute `hreflang` als auch `type` können zusammen mit `alternate` angegeben werden.

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
  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für die {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} wird angegeben, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren bereitstellt, falls vorhanden, andernfalls über das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als Attributwert `rel` für die {{htmlelement('a')}}- und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das dem Element am nächsten stehende {{htmlelement('article')}}-Element, falls vorhanden. Falls kein Vorfahr-`<article>`-Element vorhanden ist, gibt es einen Permalink für den Abschnitt an, dem das verlinkende Element am nächsten steht.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen dabei hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads von Ressourcen auf dieser Seite zu komprimieren, sodass die Downloadgrößen dieser Ressourcen kleiner als bei Standardkompressionen sind.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es teilt dem Browser mit, die DNS-Auflösung für den Ursprung der Zielressource proaktiv durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu verringern und damit die Leistung zu verbessern, wenn der Benutzer tatsächlich auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource proaktiv durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [Ressourcenhinweisen](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es gibt an, dass das referenzierte Dokument nicht Teil derselben Website wie das aktuelle Dokument ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu stylen, dass dem Benutzer angezeigt wird, dass er die aktuelle Website verlässt.
- `expect` {{experimental_inline}}
  - : Ermöglicht es der Seite, {{Glossary("Render_blocking", "Render-Block")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, sodass es konsistent gerendert wird. Beachten Sie, dass Render-Blocking nur auftritt, wenn es mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilisieren des Seitenstatus, um die Konsistenz von Dokumentenübergängen zu gewährleisten](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zur Nutzung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help`-Schlüsselwort gibt an, dass die verlinkte Ressource kontext-sensitive Hilfe bietet, Informationen für das übergeordnete Element des Hyperlinks definierenden Elements und dessen Kinder bereitstellt. Wenn es innerhalb von `<link>` verwendet wird, ist die Hilfe für das gesamte Dokument. Wenn es bei {{htmlelement('a')}} und {{htmlelement('area')}} enthalten ist und unterstützt wird, ist das Standard-{{cssxref('cursor')}} `help` statt `pointer`.
- `icon`
  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource repräsentiert das Icon, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung des Werts `icon` ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribute, um das am besten geeignete Icon auszuwählen. Wenn mehrere Icons gleichermaßen geeignet sind, wird das letzte verwendet. Wenn das am besten geeignete Icon später als ungeeignet befunden wird, z. B. weil es ein nicht unterstütztes Format verwendet, geht der Browser zum nächstbesten über und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut wird in Chromium-basierten Browsern für `rel="icon"` nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribut, wie es andere mobile Browser tun, um ein Webseiten-Icon für Web Clip oder ein Startbild -platzhalter auszuwählen.
    > Stattdessen werden das nicht standardisierte [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) verwendet.

    > [!NOTE]
    > Der Linktyp `shortcut` wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht-konform, wird ignoriert und **Web-Autoren dürfen ihn nicht mehr verwenden**.

- `license`
  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen, gibt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Wenn das Element nicht im {{HTMLElement("head")}} enthalten ist, unterscheidet der Standard nicht zwischen einem Hyperlink, der für einen bestimmten Teil des Dokuments gilt, oder für das gesamte Dokument. Nur die Daten auf der Seite können dies angeben.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen über Ursprungsgrenzen hinweg.
- `modulepreload`
  - : Nützlich zur Verbesserung der Leistung und relevant für {{htmlelement('link')}} überall im Dokument, durch das Setzen von `rel="modulepreload"` teilt es dem Browser mit, das Skript (sowie Abhängigkeiten) vorab abzurufen und es in der Modulkarte des Dokuments für eine spätere Auswertung zu speichern. `modulepreload`-Links können sicherstellen, dass das Netzwerk-Fetching mit dem Modul abgeschlossen ist (aber nicht ausgewertet) in der Modulkarte, bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, der `next`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser annehmen, dass dieses Dokument als nächstes abgerufen wird und es als Ressourcenhinweis behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort teilt Suchmaschinen-Spidern mit, die Link-Beziehung zu ignorieren. Die nofollow-Beziehung kann angeben, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht befürwortet. Es wird häufig von Suchmaschinenoptimierern einbezogen, die behaupten, ihre Link-Farmen seien keine Spam-Seiten.
- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt einen Haupt-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, falls der Hyperlink entweder einen dieser (d.h. hat einen geeigneten `target`-Attributwert) erstellen würde. Mit anderen Worten, es bewirkt, dass sich der Link verhält, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das Einschließen dieses Werts macht den Referrer unbekannt (es wird kein `Referer`-Header enthalten), und erstellt einen Haupt-Browsing-Kontext, als ob `noopener` ebenfalls gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink andernfalls einen Haupt-Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Gibt einen Hinweis an den Browser, dass er vorab eine Verbindung zur verlinkten Website herstellen soll, ohne private Informationen offenzulegen oder Inhalte herunterzuladen, damit beim Folgen des Links die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine Folgenavigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation entsprechend dem potenziellen Ziel, das durch das Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) angegeben wird (und die Priorität, die mit dem entsprechenden Ziel verbunden ist), vorab abrufen und zwischenspeichern muss. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und in einer Weise verarbeiten soll, die eine schnellere Antwort in der Zukunft ermöglicht, indem beispielsweise Unterressourcen abgerufen oder einige Rendering durchgeführt werden.
- `prev`
  - : Ähnlich wie das [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, der `prev`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente, der Wert `privacy-policy` gibt an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenverarbeitungs- und Nutzungspraktiken beschreibt, die für das aktuelle Dokument gelten.

- `search`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, die `search`-Schlüsselwörter geben an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell zum Suchen im aktuellen Dokument, der Site und den zugehörigen Ressourcen ausgelegt ist, indem ein Link zu einer Ressource bereitgestellt wird, die zum Suchen verwendet werden kann.

    Wenn das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) Plugin, das einfach in die Firefox-Oberfläche hinzugefügt werden kann.

- `stylesheet`
  - : Gültig für das {{htmlelement('link')}}-Element, es importiert eine externe Ressource, die als Stylesheet verwendet werden soll. Das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) ist nicht erforderlich, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es nicht ein Stylesheet des Typs `text/css` ist, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel-Werts, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es zusammen mit dem [alternate](#alternate) Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall verwenden Sie einen nicht-leeren [`title`](/de/docs/Web/HTML/Reference/Elements/link#title).

    Das externe Stylesheet wird nicht verwendet oder heruntergeladen, wenn das Medium nicht dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attributs entspricht.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen über Ursprungsgrenzen hinweg.

- `tag`
  - : Gültig für die {{htmlelement('a')}}- und {{htmlelement('area')}}-Elemente, es gibt ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein für das Dokument, auf dem es sich befindet, geltendes Tag beschreibt. Dieser Link-Typ ist nicht für Tags in einer Tag-Cloud gedacht, da diese Tags für eine Gruppe von Seiten gelten, während der Tag-Wert des rel-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente, der `terms-of-service`-Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen (Terms of Service) ist, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern beschreibt, die das bereitgestellte Dokument nutzen möchten.

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
