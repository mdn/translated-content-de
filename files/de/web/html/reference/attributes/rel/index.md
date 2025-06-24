---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`rel`** Attribut definiert die Beziehung zwischen einer verknüpften Ressource und dem aktuellen Dokument. Es kann auf den Elementen {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}} verwendet werden. Welche Werte unterstützt werden, hängt davon ab, auf welchem Element das Attribut verwendet wird.

Die Art der Beziehungen wird durch den Wert des `rel` Attributs angegeben, der, falls vorhanden, ein ungeordnetes Set von einzigartigen, durch Leerzeichen getrennten Schlüsselwörtern sein muss. Im Gegensatz zu einem `class` Namen, der keine Semantik ausdrückt, muss das `rel` Attribut semantisch gültige Tokens sowohl für Maschinen als auch für Menschen ausdrücken. Die aktuellen Register für die möglichen Werte des `rel` Attributs sind das [IANA Link-Beziehungsregister](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes), und die frei bearbeitbare [existing-rel-values Seite](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel` Attribut verwendet wird, das in keiner der drei oben genannten Quellen vorhanden ist, wird ein HTML-Validator (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte innerhalb dieses Werts einzigartig sein.

| `rel` Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                                  | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                                            | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                                  | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permanent-Link für den nächsten übergeordneten Abschnitt.                                                                                                                                                                                                                                                                     | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                                     | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das zur Komprimierung künftiger Downloads für Ressourcen auf dieser Seite verwendet werden kann.                                                                                                                                    | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Weist den Browser an, präventiv eine DNS-Auflösung für den Ursprung der Zielressource durchzuführen.                                                                                                                                                                                                                          | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument gehört nicht zur gleichen Seite wie das aktuelle Dokument.                                                                                                                                                                                                                                         | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Erlaubt, dass die Seite {{Glossary("Render_blocking", "blockierend gerendert")}} wird, bis die wesentlichen Teile des Dokuments analysiert sind, damit es konsistent gerendert wird.                                                                                                                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                                              | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Icon, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist.                                                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                                             | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                                              | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Weist den Browser an, das Skript präventiv zu laden und im Modul-Map des Dokuments für eine spätere Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls geladen werden.                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                           | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht befürwortet.                                                                                                                                                                                                  | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen übergeordneten Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink von Anfang an entweder einen von beiden erstellen würde (d.h. wenn er einen geeigneten `target` Attributwert hat).                                                                                                    | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer` Header wird eingeschlossen. Zudem hat es den gleichen Effekt wie `noopener`.                                                                                                                                                                                                                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink andernfalls einen übergeordneten Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. wenn `"_blank"` als `target` Attributwert angegeben ist).                                                                                              | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der die Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der Nutzeragent präventiv eine Verbindung zum Ursprung der Zielressource herstellen sollte.                                                                                                                                                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der Nutzeragent die Zielressource präventiv abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der Nutzeragent die Zielressource präventiv abrufen und zwischenspeichern muss für die aktuelle Navigation gemäß der potenziellen Destination, die durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut (und der Priorität, die der entsprechenden Destination zugeordnet ist) gegeben wird. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)                           | Gibt an, dass der Nutzeragent die Zielressource präventiv abrufen und auf eine Weise verarbeiten sollte, die dazu beiträgt, eine schnellere Antwort in der Zukunft zu liefern.                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                         | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraxen an, die für das aktuelle Dokument gelten.                                                                                                                                                                                                    | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource, die verwandt werden kann, um das aktuelle Dokument und seine verwandten Seiten zu durchsuchen.                                                                                                                                                                                            | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Gibt ein Tag (identifiziert durch die gegebene Adresse) an, das auf das aktuelle Dokument angewandt wird.                                                                                                                                                                                                                     | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zum Vertrag oder den Nutzungsbedingungen, zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument verwenden möchten.                                                                                                                                                                                       | Link                    | Link                                             | Nicht erlaubt           |

Das `rel` Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}} Elemente, jedoch sind einige Werte nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwort-Attributwerte sind diese Werte nicht case-sensitiv.

Das `rel` Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, dann hat das Dokument keine besondere Beziehung zur Zielressource außer, dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel` Attribut fehlt, keine Schlüsselwörter hat, oder nicht eines oder mehrere der oben genannten durch Leerzeichen getrennten Schlüsselwörter enthält, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen immer noch Links, aber ohne eine definierte Beziehung.

## Wert

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.

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

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) Attribut, das von der Dokumentsprache abweicht, zeigt es eine Übersetzung an.
    - Mit einem [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attributwert von `"application/rss+xml"` oder `"application/atom+xml"`, erstellt es einen Hyperlink, der einen Syndikations-Feed referenziert.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der eine alternative Darstellung des aktuellen Dokuments referenziert, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang) und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribute gegeben ist.

      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt dies an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, zeigt es an, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Die `hreflang` und `type` Attribute können beide zusammen mit `alternate` angegeben werden.

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

  - : Gibt an, dass das referenzierte Dokument zusätzliche Informationen über den Autor des aktuellen Dokuments oder Artikels bietet. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten übergeordneten {{htmlelement('article')}} Elements bietet, sofern vorhanden, andernfalls für das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel` Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Gibt einen Permanent-Link für das nächste übergeordnete {{htmlelement('article')}} Element an, sofern vorhanden. Wenn kein übergeordnetes `<article>` Element vorhanden ist, gibt es einen Permanent-Link für den Abschnitt an, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das zur Komprimierung künftiger Downloads für Ressourcen auf dieser Seite verwendet werden kann, sodass die Downloadgrößen dieser Ressourcen kleiner sind als bei normaler Kompression.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}} Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es teilt dem Browser mit, die DNS-Auflösung für den Ursprung der Zielressource präventiv durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt. Es hilft dabei, die Latenz zu verringern und die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich abruft, da der Browser präventiv die DNS-Auflösung für den Ursprung der angegebenen Ressource durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, es gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu gestalten, dass dem Benutzer angezeigt wird, dass er die aktuelle Seite verlässt.
- `expect` {{experimental_inline}}

  - : Erlaubt, dass die Seite {{Glossary("Render_blocking", "blockierend gerendert")}} wird, bis die wesentlichen Teile des Dokuments analysiert sind, damit es konsistent gerendert wird. Beachten Sie, dass das blockierende Rendering nur erfolgt, wenn es mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) Attribut ergänzt wird.

    > [!NOTE]
    > Für weitere Informationen zur Verwendung siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das Schlüsselwort `help` gibt an, dass der verlinkte Inhalt kontextbezogene Hilfe bietet, die Informationen für das übergeordnete Element des definierenden Hyperlinks und dessen Kinder bereitstellt. Wenn es innerhalb eines `<link>` verwendet wird, ist die Hilfe für das gesamte Dokument gedacht. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} enthalten ist und unterstützt wird, wird der Standard-{{cssxref('cursor')}} `help` statt `pointer` sein.
- `icon`

  - : Gültig für {{htmlelement('link')}}, die verlinkte Ressource repräsentiert das Icon, eine Ressource, die die Seite im Benutzerinterface für das aktuelle Dokument darstellt.

    Die häufigste Verwendung für den `icon` Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type), und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribute, um das am besten geeignete Icon auszuwählen. Wenn mehrere Icons gleichermaßen geeignet sind, wird das letzte verwendet. Wenn das am besten geeignete Icon später als ungeeignet befunden wird, z.B. weil es ein nicht unterstütztes Format verwendet, fährt der Browser mit dem nächstbesten Icon fort.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut wird für `rel="icon"` in auf Chromium-basierenden Browsern nicht unterstützt. Siehe das [offene Chromium Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribut, wie es andere mobile Browser tun, um ein Webseiten-Icon für Webclips oder einen Start-Platzhalter auszuwählen.
    > Stattdessen verwendet es die nicht standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6).

    > [!NOTE]
    > Der `shortcut` Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht konform, wird ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig für die {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elemente, der `license` Wert gibt an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz abgedeckt ist, die im referenzierten Dokument beschrieben wird. Wenn sich nicht innerhalb des {{HTMLElement("head")}} Elements, unterscheidet der Standard nicht zwischen einem Hyperlink, der sich auf einen bestimmten Teil des Dokuments bezieht, oder auf das Dokument als Ganzes. Nur die Daten auf der Seite können dies angeben.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen von fremden Ursprüngen.
- `modulepreload`
  - : Nützlich für verbesserte Leistung, und relevant für das {{htmlelement('link')}} an jeder Stelle im Dokument, gibt `rel="modulepreload"` an, dass der Browser das Skript (und Abhängigkeiten) präventiv abrufen und im Modul-Map des Dokuments für eine spätere Auswertung speichern soll. `modulepreload` Links können sicherstellen, dass das Netzwerken beendet ist, bevor das Modul bereit ist (aber nicht ausgewertet) im Modul-Map, bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `next` Wert zeigt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn in einem `<link>` enthalten, können Browser davon ausgehen, dass das Dokument als nächstes abgerufen wird und dies als Ressource Hinweis behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das Schlüsselwort `nofollow` teilt Suchmaschinen-Spidern mit, die Linkbeziehung zu ignorieren. Die nofollow-Beziehung kann darauf hinweisen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht befürwortet. Es wird oft von Suchmaschinenoptimierern eingeschlossen, die behaupten, dass ihre Linkfarmen keine Spampages sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen übergeordneten Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink von Anfang an entweder einen von beiden erstellen würde (d.h. hat einen geeigneten `target` Attributwert). Mit anderen Worten, es lässt den Link sich verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, inklusive dieses Werts macht den Referrer unbekannt (kein `Referer` Header wird eingeschlossen), und erstellt einen übergeordneten Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink andernfalls einen übergeordneten Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. hat `"_blank"` als `target` Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der die Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser einen Hinweis, dass er im Voraus eine Verbindung zur verlinkten Website öffnen soll, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, sodass der verlinkte Inhalt schneller abgerufen werden kann, wenn der Link verfolgt wird.
- `prefetch`
  - : Gibt an, dass der Nutzeragent die Zielressource präventiv abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Für weitere Informationen siehe {{Glossary("prefetch", "prefetch")}}.
- `preload`
  - : Gibt an, dass der Nutzeragent die Zielressource für die aktuelle Navigation gemäß der potenziellen Destination, die durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut (und der Priorität, die der entsprechenden Destination zugeordnet ist) gegeben wird, präventiv abrufen und zwischenspeichern muss. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Nutzeragent die Zielressource präventiv abrufen und auf eine Weise verarbeiten sollte, die dazu beiträgt, eine schnellere Antwort in der Zukunft zu liefern, zum Beispiel durch das Abrufen ihrer Unterressourcen oder die Durchführung einiger Renderings.
- `prev`

  - : Ähnlich dem [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die `prev` Werte gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link auf ein vorheriges Dokument in der Serie verweist, das das referenzierte Dokument ist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, der `privacy-policy` Wert gibt an, dass das referenzierte Dokument die Datenschutzrichtlinie ist, die die Datenverarbeitungs- und Nutzungspraxen des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, die `search` Schlüsselwörter geben an, dass der Hyperlink auf ein Dokument verweist, dessen Oberfläche speziell für die Suche im aktuellen Dokument, auf der Webseite und in verwandten Ressourcen gestaltet wurde und einen Link zu einer Ressource bietet, die für die Suche verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) Plugin, das leicht zur Oberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}} Element, es importiert eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) Attribut ist nicht erforderlich, wenn es sich um ein `text/css` Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel-Werts, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate) Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall muss ein nicht-leerer [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) angegeben werden.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen von fremden Ursprüngen.

- `tag`

  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, es gibt ein Tag an (identifiziert durch die gegebene Adresse), das auf das aktuelle Dokument angewandt wird. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein Tag beschreibt, das auf das Dokument angewandt wird, in dem es sich befindet. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten angewandt werden, wohingegen der `tag` Wert des `rel` Attributs für ein einziges Dokument bestimmt ist.

- `terms-of-service`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, der `terms-of-service` Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern beschreiben, die das bereitgestellte Dokument verwenden möchten.

### Nicht standardisierte Werte

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
