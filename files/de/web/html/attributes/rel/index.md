---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}. Die unterstützten Werte hängen vom Element ab, auf dem das Attribut zu finden ist.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs angegeben. Wenn vorhanden, muss es einen Wert haben, der eine ungeordnete Menge eindeutiger, durch Leerzeichen getrennter Schlüsselwörter ist. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens enthalten, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA-Link-Beziehungsregister](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare Seite [existing-rel-values](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vom Living Standard empfohlen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wenn ein `rel`-Attribut verwendet wird, das in einer der drei oben genannten Quellen nicht vorhanden ist, generieren einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte innerhalb dieses Wertes einzigartig sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                                 | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächstgelegenen Vorfahrenabschnitt.                                                                                                                                                                                                                                        | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                    | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](#compression-dictionary)               | Link zu einem {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads von Ressourcen auf dieser Seite zu komprimieren.                                                                                                | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Weist den Browser an, präemptiv eine DNS-Auflösung für den Ursprung der Zielressource durchzuführen.                                                                                                                                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument gehört nicht zur gleichen Seite wie das aktuelle Dokument.                                                                                                                                                                                                        | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`expect`](#expect)                                               | Erlaubt der Seite, {{Glossary("Render_blocking", "blockierend zu rendern")}}, bis die wesentlichen Teile des Dokuments analysiert sind, damit es konsistent gerendert wird.                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                             | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Symbol, das das aktuelle Dokument darstellt.                                                                                                                                                                                                                                             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Copyright-Lizenz abgedeckt ist.                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web-App-Manifest.                                                                                                                                                                                                                                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person darstellt, der die verlinkten Inhalte gehören.                                                                                                                                                                                                | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Weist den Browser an, das Skript präventiv zu laden und im Modul-Map des Dokuments für die spätere Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls geladen werden.                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                          | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                 | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen Top-Level-Browsing-Kontext, der kein Hilfskontext ist, wenn der Hyperlink entweder diese erstellen würde oder als erstes erstellt wird (d.h. hat einen passenden `target`-Attributwert).                                                                                      | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer`-Header wird eingefügt. Zusätzlich hat es die gleiche Wirkung wie `noopener`.                                                                                                                                                                                                  | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`opener`](#opener)                                               | Erstellt einen Hilfsbrowserkontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfskontext ist (d.h. hat `"_blank"` als `target`-Attributwert).                                                                                                | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet.                                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent präventiv eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource präventiv laden und cachen soll, da sie wahrscheinlich für eine folgende Navigation erforderlich sein wird.                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation präventiv laden und cachen muss, gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut gegeben ist (und die Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource präventiv laden und in einer Weise verarbeiten soll, die eine schnellere Antwort in Zukunft unterstützt.                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraktiken, die für das aktuelle Dokument gelten.                                                                                                                                                                   | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Gibt einen Link zu einer Ressource, die verwendet werden kann, um das aktuelle Dokument und seine verwandten Seiten zu durchsuchen.                                                                                                                                                          | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt einen Tag (identifiziert durch die angegebene Adresse), der auf das aktuelle Dokument zutrifft.                                                                                                                                                                                         | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zu den Bedingungen oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument verwenden möchten.                                                                                                                                              | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}-Elemente, aber einige Werte sind nur für einen Teil dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht zwischen Groß- und Kleinschreibung zu unterscheiden.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder keiner der Werte im Attribut unterstützt wird, dann hat das Dokument keine besondere Beziehung zur Zielressource, außer dass ein Hyperlink zwischen beiden besteht. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter enthält oder nicht eines oder mehrere der oben durch Leerzeichen getrennten Schlüsselwörter, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen weiterhin Links, aber ohne eine definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Mit dem [`stylesheet`](#stylesheet)-Schlüsselwort auf einem `<link>`, erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)-Attribut, das sich von der Dokumentensprache unterscheidet, weist es auf eine Übersetzung hin.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type)-Attributwert von `"application/rss+xml"` oder `"application/atom+xml"`, erstellt es einen Hyperlink, der einen Syndikations-Feed referenziert.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der eine alternative Darstellung des aktuellen Dokuments referenziert, dessen Art durch die [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)- und [`type`](/de/docs/Web/HTML/Element/link#type)-Attribute angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` gegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` gegeben ist, zeigt es an, dass das referenzierte Dokument ein alternatives Format ist (wie beispielsweise ein PDF).
      - Die `hreflang`- und `type`-Attribute können beide zusammen mit `alternate` gegeben werden.

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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels liefert. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren liefert, wenn es einen gibt, andernfalls über das gesamte Dokument.

    Bei {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächstgelegene {{htmlelement('article')}}-Element, falls es eines gibt. Wenn es kein Vorfahren-`<article>`-Element gibt, gibt es einen Permalink für den Abschnitt, dem das verlinkende Element am nächsten steht.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary`
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads von Ressourcen auf dieser Seite zu komprimieren, sodass die Downloadgrößen dieser Ressourcen kleiner sind als die Standardkompression.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es weist den Browser an, präemptiv eine DNS-Auflösung für den Ursprung der Zielressource durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und verbessert somit die Leistung, wenn der Benutzer die Ressourcen tatsächlich aufruft, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource präemptiv durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [Ressourcenhinweisen](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu gestalten, dass sie dem Benutzer anzeigen, dass sie die aktuelle Seite verlassen werden.
- `expect` {{experimental_inline}}

  - : Erlaubt der Seite, {{Glossary("Render_blocking", "blockierend zu rendern")}}, bis die wesentlichen Teile des Dokuments analysiert sind, sodass es konsistent gerendert wird. Beachten Sie, dass das Render-Blocking nur auftritt, wenn es mit dem [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking)-Attribut ergänzt wird.

    > [!NOTE]
    > Weitere Informationen zur Verwendung finden Sie unter [Stabilisierung des Seitenstatus, um konsistente Übergänge zwischen Dokumenten zu machen](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, das `help`-Schlüsselwort zeigt an, dass der verlinkte Inhalt kontextsensitive Hilfe bietet und Informationen für das übergeordnete Element des Elements bereitstellt, das den Hyperlink definiert, und seine Kinder. Wenn innerhalb von `<link>` verwendet, ist die Hilfe für das ganze Dokument. Bei Einfügung mit {{htmlelement('a')}} und {{htmlelement('area')}} und bei Unterstützung wird der Standard-{{cssxref('cursor')}} `help` statt `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource repräsentiert das Symbol, eine Ressource, die die Seite in der Benutzeroberfläche für das aktuelle Dokument darstellt.

    Der häufigste Gebrauch des `icon`-Wertes ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser ihre [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type) und [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribute, um das passendste Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn sich das passendste Symbol später als unangemessen erweist, beispielsweise weil es ein nicht unterstütztes Format verwendet, geht der Browser zum nächsten am besten geeigneten über und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp, wie andere mobile Browser, nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut, um ein Webbseiten-Symbol für den Webclip oder einen Startplatzhalter auszuwählen.
    > Stattdessen wird der nicht standardisierte [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) entsprechend verwendet.

    > [!NOTE]
    > Der `shortcut`-Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp entspricht nicht den Standards, wird ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}-Elementen zeigt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments von der im referenzierten Dokument beschriebenen Copyright-Lizenz abgedeckt ist. Wenn nicht innerhalb des {{HTMLElement("head")}} Elements, unterscheidet die Norm nicht zwischen einem Hyperlink, der auf einen spezifischen Teil des Dokuments oder das gesamte Dokument angewandt wird. Nur die Daten auf der Seite können dies angeben.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` inkorrekt und sollte vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen aus fremden Ursprüngen.
- `modulepreload`
  - : Nützlich für verbesserte Leistung, und relevant für das {{htmlelement('link')}}-Element überall im Dokument, durch das Setzen von `rel="modulepreload"` wird dem Browser gesagt, dass er das Skript (und die Abhängigkeiten) präventiv laden und im Modul-Map des Dokuments für die spätere Auswertung speichern soll. `modulepreload`-Links können sicherstellen, dass das Abrufen der Netzwerkressourcen mit dem bereitstehenden (aber nicht ausgewerteten) Modul im Modul-Map erfolgt, bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente zeigt der `next`-Wert an, dass das aktuelle Dokument Teil einer Serie ist, und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser annehmen, dass das Dokument als nächstes abgerufen wird, und es als Ressourcenhinweis behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente teilt das `nofollow`-Schlüsselwort Suchmaschinen-Spidern mit, die Linkbeziehung zu ignorieren. Die `nofollow`-Beziehung kann darauf hinweisen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern eingefügt, die vorgeben, dass ihre Linkfarmen keine Spamseiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente erstellt es einen Top-Level-Browsing-Kontext, der kein Hilfskontext ist, wenn der Hyperlink entweder diese zu Beginn erstellen würde (d.h. hat einen passenden `target`-Attributwert). Mit anderen Worten, es lässt den Link so verhalten, als wäre [`window.opener`](/de/docs/Web/API/Window/opener) null und `target="_parent"` gesetzt.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente bewirkt das Einfügen dieses Wertes, dass der Referrer unbekannt ist (kein `Referer`-Header wird eingefügt), und erstellt einen Top-Level-Browsing-Kontext, als ob `noopener` ebenfalls gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowserkontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfskontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Liefert einen Vorschlag an den Browser, dass er eine Verbindung zur verlinkten Website im Voraus herstellen soll, ohne private Informationen offenzulegen oder Inhalte herunterzuladen, sodass, wenn der Link gefolgt wird, die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource präventiv laden und cachen soll, da sie wahrscheinlich für eine folgende Navigation benötigt wird. Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource für die aktuelle Navigation präventiv laden und cachen muss, gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut angegeben ist (und die Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource präventiv laden und in einer Weise verarbeiten soll, die eine schnellere Antwort in Zukunft unterstützt, beispielsweise durch das Abrufen seiner Unterressourcen oder durch eine Teilrenderung.
- `prev`

  - : Ähnlich dem [`next`](#next)-Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente zeigt der `prev`-Wert an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link auf ein vorheriges Dokument in der Serie verweist ist das referenzierte Dokument.

    Hinweis: Das Synonym `previous` ist inkorrekt und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente zeigt der `privacy-policy`-Wert an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenverarbeitungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente zeigt das `search`-Schlüsselwort an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell dafür gestaltet ist, im aktuellen Dokument, auf der Website und in verwandten Ressourcen zu suchen, und bietet einen Link zu einer Ressource, die zum Suchen verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das einfach zur Schnittstelle von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}}-Element, es importiert eine externe Ressource als Stylesheet. Das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut wird nicht benötigt, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet vom Typ `text/css` handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als ein Stylesheet definiert, beeinflussen die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des `rel`-Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate)-Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall, geben Sie einen nicht leeren [`title`](/de/docs/Web/HTML/Element/link#title) an.

    Das externe Stylesheet wird weder verwendet noch heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media)-Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen aus fremden Ursprüngen.

- `tag`

  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente gibt es einen Tag (identifiziert durch die gegebene Adresse) an, der auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das einen Tag beschreibt, der auf das Dokument angewendet wird, auf dem es sich befindet. Dieser Linktyp ist nicht für Tags in einer Tag-Cloud gedacht, da diese Tags auf eine Gruppe von Seiten angewendet werden, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente zeigt der `terms-of-service`-Wert an, dass das referenzierte Dokument die Nutzungsbedingungen ist, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern, die das bereitgestellte Dokument verwenden möchten, beschreibt.

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
