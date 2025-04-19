---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}; die unterstützten Werte hängen vom Element ab, auf dem das Attribut zu finden ist.

Der Typ der Beziehungen wird durch den Wert des `rel`-Attributs angegeben, der, falls vorhanden, einen Wert haben muss, der eine ungeordnete Menge einzigartiger, mit Leerzeichen getrennter Schlüsselwörter darstellt. Im Gegensatz zu einem `class`-Namen, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens ausdrücken, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei editierbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vom Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wenn ein `rel`-Attribut verwendet wird, das in keiner der oben genannten drei Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten bestehenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines wertgetrennten Wertes sollte einzigartig sein.

| `rel`-Wert                                                                                       | Beschreibung                                                                                                                                                                                                                                                                                       | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                        | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                              | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                       | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                          | Permalink für den nächstgelegenen Vorfahrabschnitt.                                                                                                                                                                                                                                                 | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                        | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                           | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren.                                                                                                      | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Weisung an den Browser, die DNS-Auflösung für den Ursprungsort der Zielressource vorauseilend durchzuführen.                                                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                          | Das referenzierte Dokument gehört nicht zur selben Seite wie das aktuelle Dokument.                                                                                                                                                                                                                | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                              | Erlaubt, die Seite {{Glossary("Render_blocking", "render-blocked")}} zu halten, bis die wesentlichen Teile des Dokuments analysiert wurden, sodass es konsistent gerendert wird.                                                                                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                                  | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                                  | Ein Symbol, das das aktuelle Dokument darstellt.                                                                                                                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                            | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch das Copyright-Lizenzdokument abgedeckt ist, das im referenzierten Dokument beschrieben wird.                                                                                                                                             | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                    | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Weist den Browser an, das Skript vorauseilend abzurufen und es im Modul-Map des Dokuments zum späteren Auswerten zu speichern. Optional können auch die Abhängigkeiten des Moduls vorab abgerufen werden.                                                                                             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                                  | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                 | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                          | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen Top-Level-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink entweder von Anfang an einen dieser beiden erstellen würde (d.h. er hat einen geeigneten `target`-Attributwert).                                                                               | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer`-Header wird inkludiert. Zusätzlich hat es denselben Effekt wie `noopener`.                                                                                                                                                                                                          | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                              | Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. er hat `"_blank"` als `target`-Attributwert).                                                                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                          | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument bearbeitet.                                                                                                                                                                                                          | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der Benutzeragent vorauseilend eine Verbindung zum Ursprungsort der Zielressource herstellen sollte.                                                                                                                                                                                  | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine folgende Navigation benötigt wird.                                                                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und für die aktuelle Navigation entsprechend dem möglichen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist), zwischenspeichern muss. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)                           | Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und in einer Weise verarbeiten sollte, die hilft, zukünftig eine schnellere Antwort zu liefern.                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                                  | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                              | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraktiken, die für das aktuelle Dokument gelten.                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                              | Gibt einen Link zu einer Ressource, die zur Suche durch das aktuelle Dokument und seine verwandten Seiten verwendet werden kann.                                                                                                                                                                     | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                      | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                    | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt.                                                                                                                                                                                                   | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                          | Link zur Vereinbarung oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument nutzen möchten.                                                                                                                                                             | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}-Elemente, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwort-Attributwerte sind diese Werte nicht casesensitiv.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource außer, dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, auf {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter hat oder wenn nicht eines oder mehrere der oben genannten leerzeichengetrennten Schlüsselwörter vorliegen, erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen trotzdem Links, jedoch ohne definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Bei Verwendung des [`stylesheet`](#stylesheet)-Schlüsselworts an einem `<link>` wird ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) erstellt.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Wenn ein [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)-Attribut vorhanden ist, das sich von der Sprache des Dokuments unterscheidet, zeigt es eine Übersetzung an.
    - Mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attributwert von `"application/rss+xml"` oder `"application/atom+xml"` wird ein Hyperlink erstellt, der auf einen Syndikations-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Ansonsten erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribute angegeben wird.

      - Wenn `hreflang` neben `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` neben `alternate` angegeben ist, gibt es an, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahr bereitstellt, wenn es einen gibt, sonst über das gesamte Dokument.

    Bei {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächstgelegene Vorfahr-{{htmlelement('article')}}-Element an, falls vorhanden. Wenn kein Vorfahr-`<article>`-Element vorhanden ist, wird ein Permalink für den Abschnitt angegeben, mit dem das verlinkende Element am stärksten assoziiert ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das zur Komprimierung zukünftiger Downloads für Ressourcen auf dieser Seite verwendet werden kann, damit die Download-Größen dieser Ressourcen kleiner sind als bei der Standardkomprimierung.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es gibt dem Browser an, die DNS-Auflösung für den Ursprungsort der Zielressource vorauseilend durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und die Leistung zu verbessern, wenn der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorauseilend durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [Ressourcenvorläufen](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Dies kann mit Attributselektoren verwendet werden, um externe Links in einer Weise zu gestalten, die dem Benutzer anzeigt, dass er die aktuelle Website verlässt.
- `expect` {{experimental_inline}}

  - : Erlaubt die Seite, {{Glossary("Render_blocking", "render-blocked")}} zu bleiben, bis die wesentlichen Teile des Dokuments analysiert wurden, sodass sie konsistent gerendert wird. Beachten Sie, dass das Render-Blocking nur dann auftritt, wenn es mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking)-Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zu seiner Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help`-Schlüsselwort gibt an, dass der verlinkte Inhalt kontext-sensitive Hilfe bietet, die Informationen für das Elternelement des Elements, das den Hyperlink definiert, und dessen Kinder bereitstellt. Wenn es innerhalb von `<link>` verwendet wird, ist die Hilfe für das gesamte Dokument. Wenn es in {{htmlelement('a')}} und {{htmlelement('area')}} enthalten ist und unterstützt wird, wird der Standard-{{cssxref('cursor')}} `help` anstelle von `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource stellt das Symbol dar, eine Ressource, die das aktuelle Dokument in der Benutzeroberfläche repräsentiert.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn sich herausstellt, dass das geeignetste Symbol unpassend ist, zum Beispiel weil es ein nicht unterstütztes Format verwendet, wählt der Browser das nächstbeste Symbol und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apple's iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut, wie es andere mobile Browser tun, um ein Webseiten-Symbol für Web Clip oder ein Startbild auszuwählen.
    > Stattdessen verwendet es die nicht-standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) respektive.

    > [!NOTE]
    > Der `shortcut`-Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht konform, ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig für die {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}-Elemente, gibt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments von der Urheberrechtslizenz abgedeckt wird, die im referenzierten Dokument beschrieben wird. Wenn es sich nicht innerhalb des {{HTMLElement("head")}}-Elements befindet, unterscheidet die Norm nicht zwischen einem Hyperlink, der für einen bestimmten Teil des Dokuments gilt, oder dem Dokument als Ganzes. Nur die Daten auf der Seite können dies angeben.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` inkorrekt und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für die abteilungsübergreifende Abrufen.
- `modulepreload`
  - : Nützlich für verbesserte Leistung, und relevant für die {{htmlelement('link')}} überall im Dokument, das Setzen von `rel="modulepreload"` weist den Browser an, das Skript (und Abhängigkeiten) vorauseilend abzurufen und es im Modul-Map des Dokuments für die spätere Auswertung zu speichern. `modulepreload`-Links können sicherstellen, dass das Netzwerkabrufen mit dem bereit (aber nicht ausgewerteten) Modul im Modul-Map abgeschlossen ist, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `next`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser annehmen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcentipp behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort weist Suchmaschinenspider an, die Linkbeziehung zu ignorieren. Die nofollow-Beziehung kann darauf hinweisen, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern aufgenommen, die vorgeben, dass ihre Linkfarmen keine Spamseiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen Top-Level-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink einen dieser beiden von Anfang an erstellen würde (d.h. hat einen geeigneten `target`-Attributwert). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, einschließlich dieses Werts macht den Referrer unbekannt (kein `Referer`-Header wird inkludiert), und erstellt einen Top-Level-Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument bearbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet einen Hinweis an den Browser, der vorschlägt, dass er eine Verbindung zur verlinkten Website im Voraus öffnet, ohne private Informationen offenzulegen oder Inhalte herunterzuladen, sodass beim Verfolgen des Links der verlinkte Inhalt schneller abgerufen werden kann.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine folgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und für die aktuelle Navigation gemäß dem möglichen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist), zwischenspeichern muss. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorauseilend abrufen und auf eine Weise verarbeiten sollte, die hilft, in der Zukunft eine schnellere Antwort zu liefern, zum Beispiel durch Abrufen ihrer Unterressourcen oder das Ausführen einiger Rendering-Vorgänge.
- `prev`

  - : Ähnlich wie das [`next`](#next)-Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die `prev`-Werte gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist inkorrekt und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `privacy-policy`-Wert gibt an, dass das referenzierte Dokument die Datenschutzrichtlinie ist, die die Datenverarbeitungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, das `search`-Schlüsselwort gibt an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell zum Suchen im aktuellen Dokument, in der Seite und in verwandten Ressourcen entwickelt wurde, bietet einen Link zu einer Ressource, die zur Suche verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das leicht in die Benutzeroberfläche von Firefox integriert werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}}-Element, es importiert eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut ist nicht erforderlich, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein `text/css`-Stylesheet handelt, sollte der Typ angegeben werden.

    Während dieses Attribut den Link als Stylesheet definiert, wirkt sich die Interaktion mit anderen Attributen und anderen Schlüsselwörtern innerhalb des rel-Wertes darauf aus, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate)-Schlüsselwort verwendet wird, wird ein alternatives Stylesheet definiert. In diesem Fall wird ein nicht-leerer [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) benötigt.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für abteilungsübergreifendes Abrufen.

- `tag`

  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, er gibt ein Tag (identifiziert durch die angegebene Adresse) an, das für das aktuelle Dokument gilt. Der tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein Tag beschreibt, das auf das Dokument, auf dem es sich befindet, angewendet wird. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten angewendet werden, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `terms-of-service`-Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und Benutzern, die das bereitgestellte Dokument verwenden möchten, beschreibt.

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
