---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 63e3ee3ae32670f7ca9862727569891ebdf8cefd
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}, hängen die unterstützten Werte von dem Element ab, auf dem das Attribut gefunden wird.

Der Beziehungstyp wird durch den Wert des `rel`-Attributs angegeben, das, falls vorhanden, einen Wert haben muss, der eine ungeordnete Menge an eindeutigen, durch Leerzeichen getrennten Schlüsselwörtern ist. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Token enthalten, die sowohl für Maschinen als auch für Menschen semantisch gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei editierbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im microformats Wiki, [wie im Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wenn ein `rel`-Attribut verwendet wird, das in keiner der drei oben genannten Quellen enthalten ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung ausgeben.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte innerhalb dieses Wertes einzigartig sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                               | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                         | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                               | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächste Vorfahr-Abschnitt.                                                                                                                                                                                                               | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`compression-dictionary`](#compression-dictionary)               | Link zu einem {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren.                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Weist den Browser an, DNS-Auflösung für den Ursprung der Zielressource vorab durchzuführen.                                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument gehört nicht zum selben Standort wie das aktuelle Dokument.                                                                                                                                                                     | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                               | Erlaubt es der Seite, {{Glossary("Render_blocking", "Render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, damit sie einheitlich dargestellt wird.                                                                            | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                           | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist.                                                                                                                 | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Manifest einer Webanwendung.                                                                                                                                                                                                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person darstellt, der die verlinkte Inhalt gehört.                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Weist den Browser an, das Skript vorab abzurufen und im Modulkarten des Dokuments für eine spätere Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                        | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Autor des aktuellen Dokuments oder Herausgeber das referenzierte Dokument nicht unterstützt.                                                                                                                               | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen Top-Level-Browsing-Kontext, der kein zusätzlicher Browsing-Kontext ist, wenn der Hyperlink ursprünglich einen von beiden erstellt hätte (d.h. hat einen geeigneten `target`-Attributwert).                                                 | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer`-Header wird enthalten sein. Darüber hinaus hat es denselben Effekt wie `noopener`.                                                                                                                                                          | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                               | Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellt hätte, der kein zusätzlicher Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert).                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent proaktiv eine Verbindung zum Ursprung der Zielressource herstellen sollte.                                                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und im Cache speichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut (und der Priorität, die dem entsprechenden Ziel zugeordnet ist) vorab abrufen und im Cache speichern muss. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource vorab abrufen und in einer Weise verarbeiten sollte, die hilft, in Zukunft eine schnellere Antwort zu liefern, z.B. durch Abrufen ihrer Unterressourcen oder Durchführen einiger Renderings.             | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                      | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraktiken, die für das aktuelle Dokument gelten.                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Gibt einen Link zu einer Ressource, die verwendet werden kann, um das aktuelle Dokument und seine zugehörigen Seiten zu durchsuchen.                                                                                                                       | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                 | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt ein Tag an (identifiziert durch die angegebene Adresse), das für das aktuelle Dokument gilt.                                                                                                                                                          | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zur Vereinbarung oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument nutzen möchten.                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}-Elemente, aber einige Werte sind nur für einen Teil dieser Elemente relevant. Wie alle HTML-Attributwerte sind diese Werte nicht case-sensitiv.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder keiner der Werte im Attribut unterstützt wird, hat das Dokument keine spezielle Beziehung zur Zielressource, abgesehen davon, dass ein Hyperlink zwischen den beiden besteht. In diesem Fall erstellen {{htmlelement('link')}} und {{htmlelement('form')}} keine Links, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter hat oder nicht eines oder mehrere der oben durch Leerzeichen getrennten Schlüsselwörter existiert. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen dennoch Links, jedoch ohne definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.

    - Mit dem [`stylesheet`](#stylesheet)-Schlüsselwort bei einem `<link>` wird ein [alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) erstellt.

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
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut-Wert `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink, der auf einen Syndicationsfeed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)- und [`type`](/de/docs/Web/HTML/Element/link#type)-Attribute gegeben ist.

      - Wenn `hreflang` zusammen mit `alternate` gegeben ist und der Wert von `hreflang` sich von der Sprache des aktuellen Dokuments unterscheidet, zeigt es an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` gegeben ist, zeigt es an, dass das referenzierte Dokument ein alternatives Format hat (wie ein PDF).
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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bietet. Relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} gibt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren bietet, falls vorhanden, andernfalls über das gesamte Dokument.

    Bei {{htmlelement('link')}} steht es für den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächste Vorfahren {{htmlelement('article')}}-Element, falls vorhanden. Wenn kein Vorfahren `<article>`-Element vorhanden ist, gibt es einen Permalink für den Abschnitt, mit dem das verlinkende Element am engsten in Verbindung steht.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `compression-dictionary` {{experimental_inline}}
  - : Gültig für {{htmlelement('link')}}, es definiert ein {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}}, das verwendet werden kann, um zukünftige Downloads für Ressourcen auf dieser Seite zu komprimieren, damit die Downloadgrößen dieser Ressourcen kleiner sind als bei standardmäßiger Komprimierung.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource vorab durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigen wird, hilft es, Latenz zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der spezifizierten Ressource vorab durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, es zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu gestalten, dass dem Benutzer angezeigt wird, dass er die aktuelle Seite verlässt.
- `expect` {{experimental_inline}}

  - : Erlaubt der Seite, {{Glossary("Render_blocking", "Render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments geparst sind, so dass es einheitlich dargestellt wird. Beachten Sie, dass das Render-Blocking nur auftritt, wenn es zusammen mit dem [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking)-Attribut ergänzt wird.

    > [!NOTE]
    > Weitere Informationen zur Verwendung finden Sie unter [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `help`-Schlüsselwort zeigt an, dass der verlinkte Inhalt kontextsensitive Hilfe bietet und Informationen für das übergeordnete Element, das den Hyperlink definiert, und seine Kinder bereitstellt. Wenn es innerhalb von `<link>` verwendet wird, ist die Hilfe für das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} enthalten ist und unterstützt wird, wird der Standard-{{cssxref('cursor')}} `help` statt `pointer` sein.
- `icon`

  - : Gültig bei {{htmlelement('link')}}, die verlinkte Ressource stellt das Symbol dar, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn mehrere `<link rel="icon">` vorhanden sind, verwendet der Browser ihre [`media`](/de/docs/Web/HTML/Element/link#media)-, [`type`](/de/docs/Web/HTML/Element/link#type)- und [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das zuletzt angegebene verwendet. Wenn das am besten geeignete Symbol später als ungeeignet befunden wird, beispielsweise weil es ein nicht unterstütztes Format verwendet, fährt der Browser mit dem zweitbesten fort und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Link-Typ nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut, wie andere mobile Browser, um ein Webseiten-Symbol für Web Clip oder ein Startbild-Platzhalter auszuwählen. Stattdessen wird das nicht-standardmäßige [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) verwendet.

    > [!NOTE]
    > Der `shortcut`-Link-Typ wird oft vor `icon` gesehen, aber dieser Link-Typ ist nicht konform, ignoriert und **Web-Autoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}-Elementen, gibt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Wenn es nicht innerhalb des {{htmlelement("head")}}-Elements ist, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen spezifischen Teil des Dokuments oder auf das gesamte Dokument angewendet wird. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Manifest für Webanwendungen](/de/docs/Web/Progressive_web_apps/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Cross-Origin-Inhalten.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für das {{htmlelement('link')}} irgendwo im Dokument, das Festlegen von `rel="modulepreload"` weist den Browser an, das Skript (und Abhängigkeiten) vorzuziehen und es in der Modulkarten des Dokuments für eine spätere Auswertung zu speichern. `modulepreload`-Links können sicherstellen, dass das Netzwerkabrufen mit dem Modul fertiggestellt wird (aber nicht ausgewertet) in der Modulkarten, bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, gibt der `next`-Wert an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, dürfen Browser annehmen, dass das Dokument als nächstes abgerufen wird und es als eine Ressource-Andeutung behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, weist das `nofollow`-Schlüsselwort Suchmaschinen-Spider an, die Linkbeziehung zu ignorieren. Die nofollow-Beziehung kann anzeigen, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern aufgenommen, um vorzutäuschen, dass ihre Linkfarmen keine Spamseiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen Top-Level-Browsing-Kontext, der kein zusätzlicher Browsing-Kontext ist, wenn der Hyperlink ursächlich einen von beiden als Beginn erstellt hätte (d.h. hat einen geeigneten `target`-Attributwert). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, durch Einschließen dieses Wertes bleibt der Referrer unbekannt (kein `Referer`-Header wird enthalten sein), und es wird ein Top-Level-Browsing-Kontext erstellt, als ob `noopener` ebenfalls gesetzt wäre.
- `opener`
  - : Erstellt einen zusätzlichen Browsing-Kontext, wenn der Hyperlink sonst einen Top-Level-Browsing-Kontext erstellt hätte, der kein zusätzlicher Browsing-Kontext ist (d.h. hat `"_blank"` als `target`-Attributwert). Tatsächlich das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet einen Hinweis an den Browser, der darauf hindeutet, dass er eine Verbindung zur verlinkten Webseite im Voraus öffnen soll, ohne private Informationen preiszugeben oder irgendwelche Inhalte herunterzuladen, damit, wenn der Link gefolgt wird, der verlinkte Inhalt schneller abgerufen werden kann.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource proaktiv abrufen und im Cache speichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird. Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource proaktiv für die aktuelle Navigation abrufen und im Cache speichern muss, gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut gegeben ist (und der Priorität, die dem entsprechenden Ziel zugeordnet ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource proaktiv abrufen und in einer Weise verarbeiten sollte, die hilft, in Zukunft eine schnellere Antwort zu liefern, z.B. durch das Abrufen ihrer Unterressourcen oder das Durchführen einiger Renderings.
- `prev`

  - : Ähnlich wie das [`next`](#next)-Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, gibt der `prev`-Wert an, dass das aktuelle Dokument Teil einer Serie ist und dass der Link auf ein vorheriges Dokument in der Serie als das referenzierte Dokument verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `privacy-policy`-Wert gibt an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenverarbeitungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, das `search`-Schlüsselwort gibt an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell für die Suche im aktuellen Dokument, der Website und verwandten Ressourcen entworfen wurde und einen Link zu einer Ressource bietet, die verwendet werden kann, um nach Inhalten zu suchen.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das leicht in die Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}}-Element, es importiert eine externe Ressource zur Verwendung als Stylesheet. Das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut ist nicht erforderlich, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet vom Typ `text/css` handelt, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als ein Stylesheet definiert, wirkt sich die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel-Werts darauf aus, ob das Stylesheet heruntergeladen oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate)-Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall sollten ein nicht-leerer [`title`](/de/docs/Web/HTML/Element/link#title) enthalten sein.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media)-Attributs entspricht.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Cross-Origin-Inhalten.

- `tag`

  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, es gibt ein Tag an (identifiziert durch die angegebene Adresse), das für das aktuelle Dokument gilt. Der Tag-Wert zeigt an, dass der Link auf ein Dokument verweist, das ein auf das Dokument anwendbares Tag beschreibt, auf dem es sich befindet. Dieser Link-Typ ist nicht für Tags in einer Tag-Cloud gedacht, da diese Tags für eine Gruppe von Seiten gelten, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `terms-of-service`-Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreiben, die das bereitgestellte Dokument nutzen möchten.

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
