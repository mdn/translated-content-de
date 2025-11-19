---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das **`rel`** Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig auf {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}, die unterstützten Werte hängen von dem Element ab, auf dem das Attribut zu finden ist.

Der Typ der Beziehungen wird durch den Wert des `rel` Attributs angegeben, das, falls vorhanden, einen Wert haben muss, der eine ungeordnete Menge an eindeutigen, durch Leerzeichen getrennten Schlüsselwörtern darstellt. Anders als ein `class` Name, der keine Semantik ausdrückt, muss das `rel` Attribut Tokens ausdrücken, die sowohl für Maschinen als auch Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel` Attributs sind das [IANA-Link-Beziehungsregister](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [Seite bestehender rel-Werte](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) durch den Living Standard. Wird ein `rel` Attribut verwendet, das in keiner der drei oben genannten Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung erzeugen.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte in diesem Wert einzigartig sein.

| `rel` Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                              | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                        | Link                    | Link                                             | Nicht zulässig          |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                              | Link                    | Link                                             | Nicht zulässig          |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                                                               | Nicht zulässig          | Link                                             | Nicht zulässig          |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                 | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren.                                                                                                             | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource präventiv durchzuführen.                                                                                                                                                                                                       | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`external`](#external)                                                                       | Das referenzierte Dokument gehört nicht zur selben Seite wie das aktuelle Dokument.                                                                                                                                                                                                                       | Nicht zulässig          | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Wenn es zusammen mit [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) verwendet wird, erlaubt es, dass die Seite {{Glossary("Render_blocking", "Render-Blockade")}} aktiviert wird, bis die wesentlichen Teile des Dokuments geparst sind, sodass sie konsistent gerendert wird. | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`help`](#help)                                                                               | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                          | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Icon, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                        | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`license`](#license)                                                                         | Zeigt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist.                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                         | Link                    | Nicht zulässig                                   | Nicht zulässig          |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Zeigt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                                           | Link                    | Link                                             | Nicht zulässig          |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Weist den Browser an, das Skript präventiv abzurufen und es im Modul-Map des Dokuments zur späteren Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                         | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`next`](#next)                                                                               | Zeigt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                           | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Zeigt an, dass der Originalautor oder Verleger des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                                      | Nicht zulässig          | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen Top-Level-Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink zu einem dieser führen würde (d.h. einen entsprechenden `target` Attributwert hat).                                                                                                                     | Nicht zulässig          | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer` Header wird eingeschlossen. Zusätzlich hat es die gleiche Wirkung wie `noopener`.                                                                                                                                                                                                          | Nicht zulässig          | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. `"_blank"` als `target` Attributwert hat).                                                                                                  | Nicht zulässig          | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                                                               | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der Benutzeragent den Ursprung der Zielressource präventiv verbinden sollte.                                                                                                                                                                                                                | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine folgende Navigation benötigt wird.                                                                                                                                       | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und für die aktuelle Navigation zwischenspeichern muss, gemäß dem potentiellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut angegeben ist.                                                       | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) {{deprecated_inline}}     | Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und sie so verarbeiten sollte, dass eine schnellere Antwort in der Zukunft geliefert wird. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.                                     | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`prev`](#prev)                                                                               | Zeigt an, dass das aktuelle Dokument Teil einer Serie ist und das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                         | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenerfassungs- und Nutzungspraktiken an, die für das aktuelle Dokument gelten.                                                                                                                                                                                | Link                    | Link                                             | Nicht zulässig          |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um im aktuellen Dokument und seinen verwandten Seiten zu suchen.                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                | Externe Ressource       | Nicht zulässig                                   | Nicht zulässig          |
| [`tag`](#tag)                                                                                 | Gibt einen Tag (identifiziert durch die gegebene Adresse) an, der für das aktuelle Dokument gilt.                                                                                                                                                                                                         | Nicht zulässig          | Link                                             | Nicht zulässig          |
| [`terms-of-service`](#terms-of-service)                                                       | Link zu der Vereinbarung oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument nutzen möchten.                                                                                                                                                             | Link                    | Link                                             | Nicht zulässig          |

Das `rel` Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} Elemente, aber einige Werte sind nur für eine Untermenge dieser Elemente relevant. Wie alle HTML-Schlüsselwort-Attributwerte sind diese Werte nicht case-sensitive.

Das `rel` Attribut hat keinen Standardwert. Wird das Attribut weggelassen oder ist keiner der Werte im Attribut unterstützt, hat das Dokument keine besondere Beziehung zur Zielressource, außer dass ein Hyperlink zwischen beiden besteht. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel` Attribut fehlt, keine Schlüsselwörter vorhanden sind oder wenn keiner oder mehr der oben stehenden, mit Leerzeichen getrennten Schlüsselwörter vorhanden sind, erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} werden weiterhin Links erstellen, aber ohne definierte Beziehung.

## Wert

- `alternate`
  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}. Die Bedeutung hängt von den Werten der anderen Attribute ab.
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

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) Attribut, das sich von der Sprache des Dokuments unterscheidet, zeigt es eine Übersetzung an.
    - Mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attributwert von `"application/rss+xml"` oder `"application/atom+xml"`, erstellt es einen Hyperlink zur Syndikation eines Feeds.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink zu einer alternativen Darstellung des aktuellen Dokuments, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribute angegeben ist.
      - Ist `hreflang` zusammen mit `alternate` gegeben, und der Wert von `hreflang` unterscheidet sich von der Sprache des aktuellen Dokuments, zeigt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, zeigt es an, dass das referenzierte Dokument ein alternatives Format (wie z.B. eine PDF-Datei) ist.
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
  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen {{htmlelement('article')}} Vorgängers liefert, falls vorhanden, andernfalls über das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel` Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Gibt einen Permalink für das nächstgelegene übergeordnete {{htmlelement('article')}} Element an, falls vorhanden. Wenn kein übergeordnetes `<article>` Element vorhanden ist, gibt es einen Permalink für den Abschnitt an, dem das verlinkende Element am nächsten zugeordnet ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren, sodass die Downloadgrößen dieser Ressourcen kleiner als die Standardkompression sind.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}} Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource präventiv durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource präventiv durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu stylen, dass dem Benutzer angezeigt wird, dass er die aktuelle Seite verlassen wird.
- `expect` {{experimental_inline}}
  - : Erlaubt es, dass die Seite {{Glossary("Render_blocking", "Render-Blockade")}} aktiviert wird, bis die wesentlichen Teile des Dokuments geparst werden, sodass sie konsistent gerendert wird. Beachten Sie, dass die Render-Blockade nur auftritt, wenn sie mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) Attribut ergänzt wird.

    > [!NOTE]
    > Weitere Informationen zur Verwendung finden Sie unter [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help` Schlüsselwort zeigt an, dass der verlinkte Inhalt kontextsensitive Hilfe bietet, Informationen für das übergeordnete Element, das den Hyperlink definiert, und dessen Kinder. Wenn es innerhalb von `<link>` verwendet wird, ist die Hilfe für das ganze Dokument. Wenn es bei {{htmlelement('a')}} und {{htmlelement('area')}} enthalten ist und unterstützt wird, ist der Standard {{cssxref('cursor')}} `help` anstatt `pointer`.
- `icon`
  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource stellt das Icon dar, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung des `icon` Wertes ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribute, um das am besten geeignete Icon auszuwählen. Wenn mehrere Icons gleichermaßen geeignet sind, wird das letzte verwendet. Wenn das am besten geeignete Icon später als ungeeignet empfunden wird, zum Beispiel weil es ein nicht unterstütztes Format verwendet, geht der Browser zum nächstbesten Icon über, und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut wird nicht für `rel="icon"` in Chromium-basierten Browsern unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Link-Typ nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribut, wie andere mobile Browser es tun, um ein Webseiten-Icon für ein Web Clip oder einen Start-Platzhalter auszuwählen. Stattdessen verwendet es das nicht-standardisierte [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) entsprechend.

    > [!NOTE]
    > Der `shortcut` Link-Typ wird häufig vor `icon` gesehen, aber dieser Link-Typ ist nicht konform, ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`
  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen, der `license` Wert zeigt an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Befindet sich nicht innerhalb des {{HTMLElement("head")}} Elements, macht der Standard keinen Unterschied zwischen einem Hyperlink, der auf einen bestimmten Teil des Dokuments angewendet wird, oder auf das gesamte Dokument. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und sollte vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen aus anderen Ursprüngen.
- `modulepreload`
  - : Nützlich für verbesserte Leistung, und relevant für das {{htmlelement('link')}} überall im Dokument, durch das Setzen von `rel="modulepreload"` fordert es den Browser auf, das Skript (und seine Abhängigkeiten) präventiv abzurufen und es im Modul-Map des Dokuments für die spätere Auswertung zu speichern. Mit `modulepreload` Links kann sichergestellt werden, dass das Netzwerkabrufen durchgeführt wird und das Modul bereit (aber nicht ausgewertet) im Modul-Map ist, bevor es notwendig ist. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die `next` Werte zeigt an, dass das aktuelle Dokument Teil einer Serie ist, und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser davon ausgehen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcenhinweis behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `nofollow` Schlüsselwort teilt Suchmaschinen-Spidern mit, die Link-Beziehung zu ignorieren. Die nofollow Beziehung kann darauf hinweisen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern verwendet, die so tun, als wären ihre Link-Farmen keine Spam-Seiten.
- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt einen Top-Level-Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink zu einem dieser führen würde (d.h. hat einen entsprechenden `target` Attributwert). Mit anderen Worten, es lässt den Link so handeln, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das Einschließen dieses Wertes macht den Referrer unbekannt (kein `Referer` Header wird eingeschlossen), und erstellt einen Top-Level-Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat `"_blank"` als `target` Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet einen Hinweis an den Browser, durch den angeregt wird, dass eine Verbindung zur verlinkten Website im Voraus geöffnet wird, ohne dass private Informationen offengelegt oder Inhalte heruntergeladen werden, sodass beim Folgen des Links die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine folgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für mehr Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und für die aktuelle Navigation zwischenspeichern muss, gemäß dem potentiellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut angegeben ist (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource präventiv abrufen und sie so verarbeiten soll, dass eine schnellere Antwort in der Zukunft geliefert wird, zum Beispiel durch das Abrufen ihrer Unterressourcen oder das Durchführen von Rendering. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.
- `prev`
  - : Ähnlich dem [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die `prev` Werte zeigt an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, der `privacy-policy` Wert zeigt an, dass das referenzierte Dokument die Datenschutzerklärung ist, welche die Datenerfassungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, das `search` Schlüsselwort zeigt an, dass der Hyperlink auf ein Dokument verweist, dessen Oberfläche speziell für die Suche im aktuellen Dokument, auf der Seite und in verwandten Ressourcen ausgelegt ist, indem ein Link zu einer Ressource bereitgestellt wird, die verwendet werden kann, um zu suchen.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) Plugin, das einfach zur Oberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`
  - : Gültig für das {{htmlelement('link')}} Element, es importiert eine externe Ressource, die als Stylesheet verwendet wird. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribut ist nicht erforderlich, wenn es sich um ein `text/css` Stylesheet handelt, da dies der Standardwert ist. Ist es kein Stylesheet vom Typ `text/css`, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel-Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate) Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall, geben Sie einen nicht-leeren [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) an.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attributs entspricht.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen aus anderen Ursprüngen.

- `tag`
  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, es gibt einen Tag (identifiziert durch die gegebene Adresse) an, der für das aktuelle Dokument gilt. Der Tag-Wert bedeutet, dass der Link auf ein Dokument verweist, das einen Tag beschreibt, der auf das Dokument zutrifft, auf dem er sich befindet. Dieser Link-Typ ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten zutreffen, während der `tag` Wert des `rel` Attributs für ein einzelnes Dokument ist.

- `terms-of-service`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, der `terms-of-service` Wert zeigt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, welche die Vereinbarungen zwischen dem Anbieter und den Benutzern des aktuellen Dokuments beschreiben, die das bereitgestellte Dokument verwenden möchten.

### Nicht-standardisierte Werte

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
