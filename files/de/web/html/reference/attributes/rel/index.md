---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verknüpften Ressource und dem aktuellen Dokument. Es ist gültig bei {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}; die unterstützten Werte hängen von dem Element ab, auf dem das Attribut gefunden wird.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs angegeben, das, wenn es vorhanden ist, einen Wert haben muss, der eine ungeordnete Menge von eindeutigen durch Leerzeichen getrennten Schlüsselwörtern ist. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens ausdrücken, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values-Seite](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel`-Attribut verwendet wird, das in keiner der drei oben genannten Quellen vorhanden ist, werden einige HTML-Validierungsprogramme (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten bestehenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte innerhalb dieses Werts einzigartig sein.

| `rel`-Wert                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                           | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Alternative Repräsentationen des aktuellen Dokuments.                                                                                                                                                                                                                                                                  | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                                           | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                                                       | Permalink für den nächstgelegenen vorfahren Abschnitt.                                                                                                                                                                                                                                                                 | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                                                     | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                              | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Verlinkung zu einem {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren.                                                                                                                    | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Teilt dem Browser mit, dass er vorsorglich die DNS-Auflösung für den Ursprung der Zielressource durchführen soll.                                                                                                                                                                                                      | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                                                       | Das referenzierte Dokument ist nicht Teil derselben Seite wie das aktuelle Dokument.                                                                                                                                                                                                                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Wenn verwendet mit [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/link#blocking), erlaubt es, die Seite {{Glossary("Render_blocking", "render-blockiert")}} zu halten, bis die wesentlichen Teile des Dokuments geparst sind, damit es konsistent gerendert wird.                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                                               | Link zu kontextbezogener Hilfe.                                                                                                                                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                                               | Ein Icon, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                                         | Gibt an, dass der Hauptinhalt des aktuellen Dokuments von der urheberrechtlichen Lizenz des referenzierten Dokuments abgedeckt ist.                                                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Web-App-Manifest.                                                                                                                                                                                                                                                                                                      | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verknüpfte Inhalt gehört.                                                                                                                                                                                                                        | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Weist den Browser an, das Skript vorsorglich herunterzuladen und es im Modul-Map des Dokuments für eine spätere Ausführung zu speichern. Optional können auch die Abhängigkeiten des Moduls heruntergeladen werden.                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                                                       | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                                           | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Erstellt einen Top-Level-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink entweder von diesen erstellen würde (d.h. hat einen entsprechenden `target`-Attributswert).                                                                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Kein `Referer`-Header wird inkludiert. Zusätzlich hat es denselben Effekt wie `noopener`.                                                                                                                                                                                                                              | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributswert).                                                                                                           | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Gibt die Adresse des Pingback-Servers an, der die Pingbacks zu dem aktuellen Dokument behandelt.                                                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Gibt an, dass der Benutzeragent vorsorglich eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und für die aktuelle Navigation zwischenspeichern muss, gemäß dem möglichen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) {{deprecated_inline}}     | Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und auf eine Weise verarbeiten soll, die hilft, in Zukunft eine schnellere Antwort zu liefern. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                                               | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                                           | Gibt einen Link zu Informationen über die Datenanwendungs- und Datenerhebungspraktiken des aktuellen Dokuments.                                                                                                                                                                                                        | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                                           | Gibt einen Link zu einer Ressource, die verwendet werden kann, um im aktuellen Dokument und seinen verwandten Seiten zu suchen.                                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                                                   | Importiert eine Stylesheet.                                                                                                                                                                                                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                                                 | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft.                                                                                                                                                                                                                  | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                                                       | Link zur Vereinbarung oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument verwenden möchten.                                                                                                                                                                          | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}-Elemente, aber einige Werte sind nur relevant für eine Teilmenge dieser Elemente. Wie alle HTML-Schlüsselwort-Attributwerte sind diese Werte nicht case-sensitive.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, dann hat das Dokument keine bestimmte Beziehung zur Zielressource, außer dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, falls das `rel`-Attribut fehlt, keine Schlüsselwörter hat oder wenn keine oder mehrere der oben genannten durch Leerzeichen getrennten Schlüsselwörter nicht vorhanden sind, dann erzeugt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen jedoch weiterhin Links, jedoch ohne eine definierte Beziehung.

## Wert

- `alternate`
  - : Gibt eine alternative Repräsentation des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.
    - Mit dem `stylesheet`-Schlüsselwort auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem `hreflang`-Attribut, das sich von der Dokumentsprache unterscheidet, zeigt es eine Übersetzung an.
    - Mit einem `type`-Attribut mit dem Wert `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink, der auf einen Syndikations-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink auf eine alternative Darstellung des aktuellen Dokuments, deren Art durch die `hreflang`- und `type`-Attribute angegeben wird.
      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt dies an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben wird, zeigt dies an, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Die `hreflang`- und `type`-Attribute können beide zusammen mit `alternate` angegeben werden.

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
  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevanz für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren liefert, falls vorhanden, ansonsten das gesamte Dokument.

    Bei {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}}- und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächstgelegene Vorfahren-{{htmlelement('article')}}-Element an, falls vorhanden. Wenn kein Vorfahren-`<article>`-Element vorhanden ist, gibt es einen Permalink für den Abschnitt an, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren, so dass die Downloadgrößen dieser Ressourcen kleiner sind als bei regulärer Kompression.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es teilt dem Browser mit, dass er vorsorglich die DNS-Auflösung für den Ursprung der Zielressource durchführen soll. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorsorglich durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevanz für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links auf eine Weise zu gestalten, die dem Benutzer anzeigt, dass sie die aktuelle Website verlassen werden.
- `expect` {{experimental_inline}}
  - : Erlaubt der Seite, {{Glossary("Render_blocking", "render-blockiert")}} zu werden, bis die wesentlichen Teile des Dokuments geparst werden, so dass es konsistent gerendert wird. Beachten Sie, dass das Render-Blocking nur auftritt, wenn es mit dem `blocking="render"`-Attribut ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilize page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zur Verwendung.

- `help`
  - : Relevanz für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help`-Schlüsselwort gibt an, dass der verlinkte Inhalt kontextbezogene Hilfe bietet und Informationen für das übergeordnete Element des Elements liefert, das den Hyperlink definiert, sowie dessen Kinder. Wenn innerhalb von `<link>` verwendet, ist die Hilfe für das gesamte Dokument. Wenn es bei {{htmlelement('a')}} und {{htmlelement('area')}} enthalten ist und unterstützt wird, ist der Standard-{{cssxref('cursor')}} `help` anstelle von `pointer`.
- `icon`
  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource repräsentiert das Icon, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Der häufigste Gebrauch für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Reference/Elements/link#media), [`type`](/de/docs/Web/HTML/Reference/Elements/link#type) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribute, um das am besten geeignete Icon auszuwählen. Wenn mehrere Icons gleichermaßen geeignet sind, wird das letzte verwendet. Wenn das am besten geeignete Icon später als ungeeignet erkannt wird, zum Beispiel weil es ein nicht unterstütztes Format verwendet, fährt der Browser mit dem nächst best geeigneten fort und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe den [offenen Chromium-Issue](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Link-Typ nicht, noch das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut, wie es andere mobile Browser tun, um ein Webseiten-Icon für Web Clip oder einen Startplatzhalter auszuwählen.
    > Stattdessen verwendet es das nicht standardmäßige [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) jeweils.

    > [!NOTE]
    > Der `shortcut`-Link-Typ wird häufig vor `icon` gesehen, aber dieser Link-Typ ist nicht konform, wird ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`
  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen, der `license`-Wert gibt an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene urheberrechtliche Lizenz abgedeckt ist. Wenn nicht im {{HTMLElement("head")}}-Element, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen spezifischen Teil des Dokuments oder auf das Dokument als Ganzes anzuwenden ist. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für eine Domain-übergreifende Abfrage.
- `modulepreload`
  - : Nützlich zur Verbesserung der Leistung, und relevant für das {{htmlelement('link')}} irgendwo im Dokument, das Setzen von `rel="modulepreload"` teilt dem Browser mit, dass er das Skript (und Abhängigkeiten) vorsorglich abrufen und es im Modul-Map des Dokuments für eine spätere Auswertung speichern soll. `modulepreload`-Links können sicherstellen, dass das Netzwerkabrufen mit dem Modul bereit (aber nicht ausgewertet) im Modul-Map erfolgt, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `next`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser davon ausgehen, dass das Dokument als nächstes abgerufen wird und es als Ressourcenzuschlag behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort teilt Suchmaschinen-Suchbots mit, die Link-Beziehung zu ignorieren. Die nofollow-Beziehung kann darauf hinweisen, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern eingefügt, die ihren Link-Farmen vortäuschen, keine Spam-Seiten zu sein.
- `noopener`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen Top-Level-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink entweder von diesen erstellen würde (d.h. hat einen entsprechenden `target`-Attributswert). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, einschließlich dieses Werts macht den Referrer unbekannt (kein `Referer`-Header wird inkludiert) und erstellt einen Top-Level-Browsing-Kontext, als ob auch `noopener` gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellen würde, der kein Hilfs-Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributswert). Effektiv ist das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der die Pingbacks zu dem aktuellen Dokument behandelt. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser einen Hinweis, dass er im Voraus eine Verbindung zur verlinkten Website herstellen soll, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, damit, wenn der Link gefolgt wird, der verlinkte Inhalt schneller abgerufen werden kann.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für mehr Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und für die aktuelle Navigation zwischenspeichern muss, gemäß dem möglichen Ziel, das durch das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorsorglich abrufen und auf eine Weise verarbeiten soll, die hilft, in Zukunft eine schnellere Antwort zu liefern, zum Beispiel durch Abrufen seiner Unterressourcen oder durch Rendering. Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.
- `prev`
  - : Ähnlich dem [`next`](#next)-Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `prev`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `privacy-policy`-Wert gibt an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenanwendungs- und Datenerhebungspraktiken des aktuellen Dokuments beschreibt.

- `search`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, die `search`-Schlüsselwörter geben an, dass der Hyperlink auf ein Dokument verweist, dessen Oberfläche speziell zum Durchsuchen im aktuellen Dokument, der Seite und den verwandten Ressourcen gestaltet ist und einen Link zu einer Ressource bietet, die zum Suchen verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das einfach zur Oberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`
  - : Gültig für das {{htmlelement('link')}}-Element, importiert es eine externe Ressource als Stylesheet. Das [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut ist nicht notwendig, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es kein Stylesheet des Typs `text/css` ist, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als ein Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselwörtern innerhalb des rel-Werts, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem `alternate`-Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall sollte ein nicht-leerer [`title`](/de/docs/Web/HTML/Reference/Elements/link#title) enthalten sein.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medienattribut den Wert des [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) nicht entspricht.

    Erfordert die Verwendung des CORS-Protokolls für eine Domain-übergreifende Abfrage.

- `tag`
  - : Gültig für die {{htmlelement('a')}}- und {{htmlelement('area')}}-Elemente, gibt es ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein Tag beschreibt, das auf das Dokument zutrifft, in dem er sich befindet. Dieser Link-Typ ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten zutreffen, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`
  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `terms-of-service`-Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen beschreibt, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreibt, die das bereitgestellte Dokument verwenden möchten.

### Nicht-standardgemäße Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Gibt das Icon für eine Web-Anwendung auf einem iOS-Gerät an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
