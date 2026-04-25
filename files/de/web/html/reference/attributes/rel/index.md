---
title: "`rel` HTML-Attribut"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}. Die unterstützten Werte hängen von dem Element ab, an dem das Attribut verwendet wird.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs angegeben, der, falls vorhanden, einen ungeordneten Satz von einzigartigen, leerzeichengetrennten Keywords haben muss. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Token ausdrücken, die sowohl für Maschinen als auch Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA Link Relations Registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare Seite [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im microformats wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel`-Attribut verwendet wird, das in keiner der drei oben genannten Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten existierenden Keywords auf. Jedes Keyword innerhalb eines leerzeichengetrennten Wertes sollte innerhalb dieses Wertes einzigartig sein.

| `rel`-Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                         | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                                   | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                         | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächsten übergeordneten Abschnitt.                                                                                                                                                                                                                                                                 | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das genutzt werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren.                                                                                                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Weist den Browser an, die DNS-Auflösung für die Herkunft der Zielressource vorsorglich durchzuführen.                                                                                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument ist nicht Teil der gleichen Webseite wie das aktuelle Dokument.                                                                                                                                                                                                                           | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Ermöglicht, dass die Seite für das Rendern blockiert wird, bis die wesentlichen Teile des Dokuments analysiert sind, damit es konsistent gerendert wird. Funktioniert nur, wenn mit [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) ergänzt.                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextspezifischer Hilfe.                                                                                                                                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz beschrieben ist, die im referenzierten Dokument beschrieben wird.                                                                                                                                                                | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                                    | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                                     | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Weist den Browser an, das Skript vorsorglich abzurufen und es im Modulplan des Dokuments für spätere Auswertungen zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                                         | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink einen von beiden erstellen würde (d.h. hat einen geeigneten Wert für das `target`-Attribut).                                                                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer`-Header wird enthalten sein. Zusätzlich hat es denselben Effekt wie `noopener`.                                                                                                                                                                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink ansonsten einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert).                                                                                                              | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der die Pingbacks für das aktuelle Dokument verarbeitet.                                                                                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der User Agent vorsorglich eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                                             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der User Agent die Zielressource vorsorglich abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine spätere Navigation benötigt wird.                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der User Agent die Zielressource vorzeitig abrufen und zwischenspeichern muss, um die aktuelle Navigation entsprechend dem potenziellen Ziel gemäß dem [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut (und der Priorität, die mit dem entsprechenden Ziel verbunden ist) vorzubereiten. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) {{deprecated_inline}}     | Gibt an, dass der User Agent die Zielressource vorsorglich abrufen und sie so verarbeiten soll, dass sie in Zukunft schneller ausgeliefert werden kann. Diese Funktion wird von der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenerfassungs- und Nutzungspraktiken an, die für das aktuelle Dokument gelten.                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um das aktuelle Dokument und seine verwandten Seiten zu durchsuchen.                                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft.                                                                                                                                                                                                                | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zur Vereinbarung oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument verwenden möchten.                                                                                                                                                                          | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}-Elemente, jedoch sind einige Werte nur für einen Teil dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht case-sensitiv.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, dann hat das Dokument keine besondere Beziehung zur Zielressource, abgesehen davon, dass es einen Hyperlink zwischen beiden gibt. In diesem Fall, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter hat oder wenn nicht einer oder mehr der oben genannten leerzeichengetrennten Schlüsselwörter, dann erstellt das {{htmlelement('link')}} und {{htmlelement('form')}}-Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, jedoch ohne eine definierte Beziehung.

## Wert

- `alternate`
  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.
    - Mit dem [`stylesheet`](#stylesheet)-Keyword auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)-Attribut, das sich von der Dokumentsprache unterscheidet, weist es auf eine Übersetzung hin.
    - Mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attributwert `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink, der auf einen Syndikations-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, dessen Art durch die [`hreflang`](/de/docs/Web/HTML/Reference/Elements/link#hreflang)- und [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribute angegeben wird.
      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, weist dies darauf hin, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, zeigt dies an, dass das referenzierte Dokument ein alternatives Format ist (wie ein PDF).
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
  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren bereitstellt, falls vorhanden, ansonsten für das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächste übergeordnete {{htmlelement('article')}}-Element an, falls vorhanden. Wenn kein übergeordnetes `<article>`-Element vorhanden ist, gibt es einen Permalink für den Abschnitt an, dem das verlinkende Element am nächsten zugeordnet ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert es die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen dabei hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, definiert ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren, sodass die Download-Größen dieser Ressourcen kleiner als bei standardmäßiger Kompression sind.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, teilt es dem Browser mit, die DNS-Auflösung für die Herkunft der Zielressource vorsorglich durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und damit die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich aufruft, da der Browser die DNS-Auflösung für die Herkunft der angegebenen Ressource vorsorglich durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) beschrieben in [resource hints](https://w3c.github.io/resource-hints/).

- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu gestalten, dass sie dem Benutzer anzeigen, dass sie die aktuelle Seite verlassen werden.
- `expect` {{experimental_inline}}
  - : Ermöglicht es, die Seite blockierend zu rendern, bis die wesentlichen Teile des Dokuments analysiert sind, damit diese konsistent dargestellt werden. Beachten Sie, dass das Blockieren des Renderns nur dann auftritt, wenn es mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking) Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilisierung des Seitenzustands, um konsistente Dokumentübergänge zu ermöglichen](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zur Nutzung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help`-Keyword gibt an, dass der verlinkte Inhalt kontextsensitive Hilfe bietet, die Informationen für das übergeordnete Element des Hyperlink-definierenden Elements und seine Kinder bereitstellt. Wenn innerhalb von `<link>` verwendet, bezieht sich die Hilfe auf das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} eingeschlossen ist und unterstützt wird, wird der Standard-{{cssxref('cursor')}} `help` anstelle von `pointer` sein.

- `icon`
  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource stellt das Symbol dar, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche für das aktuelle Dokument.

    Der häufigste Einsatz für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn sich das geeignetste Symbol später als ungeeignet erweist, zum Beispiel weil es ein nicht unterstütztes Format verwendet, wählt der Browser das nächstgeeignete aus, und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Issue](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet nicht diesen Linktyp, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut, wie es andere mobile Browser tun, um ein Webseiten-Symbol für Web Clip oder einen Startbildschirm-Placeholder auszuwählen. Stattdessen verwendet es die nicht-standardmäßigen [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) Standards.

    > [!NOTE]
    > Die `shortcut` Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht konform, wird ignoriert und **Webautoren sollten ihn nicht mehr verwenden**.

- `license`
  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen, der `license` Wert gibt an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz gedeckt ist, die im referenzierten Dokument beschrieben wird. Wenn nicht innerhalb des {{HTMLElement("head")}} Elements, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen spezifischen Teil des Dokuments zutrifft oder auf das Dokument als Ganzes. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` inkorrekt und sollte vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen aus fremden Quellen.

- `modulepreload`
  - : Nützlich für eine verbesserte Leistung und relevant für den {{htmlelement('link')}} irgendwo im Dokument, indem `rel="modulepreload"` gesetzt wird, weist es den Browser an, das Skript (und Abhängigkeiten) vorsorglich abzurufen und es im Modulplan des Dokuments zur späteren Auswertung zu speichern. `modulepreload` Links können sicherstellen, dass das Netzabrufen erledigt ist, mit dem Modul bereit (aber nicht ausgewertet) im Modulplan, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).

- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, gibt der `next`-Wert an, dass das aktuelle Dokument Teil einer Serie ist, und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wird es in einem `<link>` eingeschlossen, können Browser annehmen, dass das Dokument als nächstes abgerufen werden soll und es als einen Ressourcen-Hinweis behandeln.

- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `nofollow`-Keyword weist Suchmaschinen-Spider an, die Link-Beziehung zu ignorieren. Die nofollow-Beziehung kann anzeigen, dass der aktuelle Dokumenteninhaber das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern eingeschlossen, die so tun, als ob ihre Linkfarmen keine Spam-Seiten sind.

- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt es einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink einen dieser beiden erstellen würde, mit einem geeigneten `target`-Attributwert. Mit anderen Worten, es lässt den Link verhalten, als wäre [`window.opener`](/de/docs/Web/API/Window/opener) null und `target="_parent"` wäre gesetzt.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die Aufnahme dieses Wertes macht den Referrer unbekannt (es wird kein `Referer`-Header aufgenommen) und erstellt einen obersten Browsing-Kontext, als wäre `noopener` ebenfalls gesetzt.

- `opener`
  - : Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink ansonsten einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).

- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der die Pingbacks für das aktuelle Dokument verwaltet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).

- `preconnect`
  - : Bietet dem Browser einen Hinweis, um vorzuschlagen, dass er im Voraus eine Verbindung zur verlinkten Website herstellt, ohne private Informationen offen zu legen oder Inhalte herunterzuladen, so dass die verlinkten Inhalte schneller abgerufen werden können, wenn der Link gefolgt wird.

- `prefetch`
  - : Gibt an, dass der User Agent die Zielressource vorsorglich abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine spätere Navigation erforderlich ist. Mehr Informationen unter {{Glossary("prefetch", "prefetch")}}.

- `preload`
  - : Gibt an, dass der User Agent die Zielressource vorzeitig abrufen und zwischenspeichern muss, um die aktuelle Navigation entsprechend dem potenziellen Ziel gemäß dem [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut (und der Priorität, die mit dem entsprechenden Ziel verbunden ist) vorzubereiten. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)-Wert.

- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der User Agent die Zielressource vorsorglich abrufen und sie so verarbeiten soll, dass sie in Zukunft schneller ausgeliefert werden kann, zum Beispiel indem ihre Unterressourcen abgerufen oder ein gewisses Rendering durchgeführt wird. Diese Funktion wird von der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.

- `prev`
  - : Ähnlich wie das [`next`](#next)-Keyword, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, zeigt der `prev` Wert an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist inkorrekt und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `privacy-policy` Wert gibt an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenerfassungs- und Verwendungspraktiken des aktuellen Dokuments beschreibt.

- `search`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, die `search` Keywords geben an, dass der Hyperlink auf ein Dokument verweist, dessen Oberfläche speziell zum Suchen im aktuellen Dokument, in der Webseite und in verwandten Ressourcen entwickelt wurde und einen Link zu einer Ressource bereitstellt, die zum Suchen verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das leicht zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`
  - : Gültig für das {{htmlelement('link')}}-Element, importiert es eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut ist nicht notwendig, wenn es ein `text/css` Stylesheet ist, da das der Standardwert ist. Wenn es kein Stylesheet des Typs `text/css` ist, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als Stylesheet definiert, wirkt sich die Interaktion mit anderen Attributen und anderen Schlüsselelementen im rel-Wert darauf aus, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn in Verbindung mit dem [`alternate`](#alternate)-Keyword verwendet, definiert es ein alternatives Style Sheet. In diesem Fall sollten Sie ein nicht-leeres [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) angeben.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls zum Abrufen aus fremden Quellen.

- `tag`
  - : Gültig für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, gibt es ein Tag an (identifiziert durch die angegebene Adresse), das auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein Tag beschreibt, das auf das Dokument zutrifft, an dem es sich befindet. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten zutreffen, während der `tag`-Wert des `rel` Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `terms-of-service` Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen beschreibt, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern, die das bereitgestellte Dokument verwenden möchten, beschreibt.

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
