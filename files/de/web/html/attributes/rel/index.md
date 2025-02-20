---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}, hängen die unterstützten Werte vom Element ab, auf dem das Attribut verwendet wird.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs angegeben, das, wenn vorhanden, einen Wert haben muss, der eine ungeordnete Menge von einzigartigen, durch Leerzeichen getrennten Schlüsselwörtern ist. Im Gegensatz zu einem `class`-Namen, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens enthalten, die semantisch sowohl für Maschinen als auch für Menschen gültig sind. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel`-Attribut verwendet wird, das in keiner der drei oben genannten Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung ausgeben.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort in einem durch Leerzeichen getrennten Wert sollte innerhalb dieses Wertes einzigartig sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                                      | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                      | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächstgelegenen Vorfahrensektion.                                                                                                                                                                                                                                               | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                         | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Weist den Browser an, die DNS-Auflösung für die Ursprungsadresse der Zielressource präventiv durchzuführen.                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument gehört nicht zur selben Website wie das aktuelle Dokument.                                                                                                                                                                                                             | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`expect`](#expect)                                               | Ermöglicht es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments analysiert sind, sodass es konsistent gerendert wird.                                                                                                                | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments unter der Urheberrechtslizenz steht, die im referenzierten Dokument beschrieben wird.                                                                                                                                                       | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web-App-Manifest.                                                                                                                                                                                                                                                                                 | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, die den verlinkten Inhalt besitzt.                                                                                                                                                                                                  | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Weist den Browser an, das Skript präventiv zu laden und es im Modulverzeichnis des Dokuments für spätere Auswertungen zu speichern. Optional können auch die Abhängigkeiten des Moduls geladen werden.                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Verfasser oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                                  | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen Top-Level-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink entweder dies oder das erstellt (d. h. ein entsprechender `target`-Attributwert vorhanden ist).                                                                                                | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Es wird kein `Referer`-Header gesendet. Hat zusätzlich dieselbe Wirkung wie `noopener`.                                                                                                                                                                                                           | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`opener`](#opener)                                               | Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellt, der kein Hilfs-Browsing-Kontext ist (d. h. `"_blank"` als `target`-Attributwert hat).                                                                                              | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet.                                                                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der User Agent präventiv eine Verbindung zum Ursprungsort der Zielressource herstellen soll.                                                                                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der User Agent die Zielressource präventiv abrufen und zwischenlagern sollte, da sie wahrscheinlich für eine nachfolgende Navigation erforderlich sein wird.                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der User Agent die Zielressource präventiv für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut angegeben wird (und die mit dem entsprechenden Ziel verbundene Priorität), abrufen und zwischenspeichern muss. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der User Agent die Zielressource präventiv abrufen und in einer Weise verarbeiten soll, die bei einem künftigen Abruf eine schnellere Antwort ermöglicht.                                                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                  | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Gibt einen Link zu Informationen über die Datenverarbeitungs- und Nutzungspraktiken, die auf das aktuelle Dokument angewendet werden.                                                                                                                                                             | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um durch das aktuelle Dokument und seine verwandten Seiten zu suchen.                                                                                                                                                           | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt einen Tag (identifiziert durch die angegebene Adresse) an, der auf das aktuelle Dokument zutrifft.                                                                                                                                                                                           | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zu den Vereinbarungen oder Nutzungsbedingungen zwischen dem Anbieter des Dokuments und Benutzern, die das Dokument nutzen möchten.                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} relevant, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht groß-/klein-schreibungsempfindlich.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource außer der Tatsache, dass ein Hyperlink zwischen beiden besteht. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel`-Attribut nicht vorhanden ist, keine Schlüsselwörter hat oder keines der oben genannten, durch Leerzeichen getrennten Schlüsselwörter enthält, erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} werden weiterhin Links erstellen, jedoch ohne definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, hängt die Bedeutung von den Werten der anderen Attribute ab.

    - Mit dem `stylesheet`-Schlüsselwort auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)-Attribut, das von der Dokumentensprache abweicht, gibt es eine Übersetzung an.
    - Mit einem `type`-Attributwert von `"application/rss+xml"` oder `"application/atom+xml"`, erstellt es einen Hyperlink zu einem Syndikationsfeed.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die Attribute `hreflang` und `type` angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und der Wert von `hreflang` von der aktuellen Dokumentensprache abweicht, wird angegeben, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben wird, gibt es an, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels liefert. Relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} wird angegeben, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen {{htmlelement('article')}}-Vorfahren liefert, wenn es einen gibt. Andernfalls gilt dies für das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente. Gibt einen Permalink für das nächstgelegene {{htmlelement('article')}}-Element an, falls vorhanden. Gibt sonst einen Permalink für den Abschnitt, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, instruiert es den Browser, die DNS-Auflösung für die Ursprungsadresse der Zielressource präventiv durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, trägt es zur Reduzierung der Latenz bei und verbessert die Leistung, falls der Benutzer auf die Ressourcen zugreift, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource präventiv durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, gibt es an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu gestalten, dass sie dem Benutzer anzeigen, dass er die aktuelle Site verlässt.
- `expect` {{experimental_inline}}

  - : Erlaubt es der Seite, {{Glossary("Render_blocking", "render-blocked")}} zu sein, bis die wesentlichen Teile des Dokuments analysiert sind, sodass es konsistent gerendert wird. Beachten Sie, dass das Render-Blocking nur auftritt, wenn es mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking) ergänzt wird.

    > [!NOTE]
    > Weitere Informationen zur Verwendung finden Sie unter [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `help`-Schlüsselwort zeigt an, dass der verlinkte Inhalt kontextbezogene Hilfe bietet, die Informationen für das Elternelement des Elements, das den Hyperlink definiert, und seine Kinder bereitstellt. Wenn es innerhalb eines `<link>`-Tags verwendet wird, bezieht sich die Hilfe auf das gesamte Dokument. Bei Verwendung mit {{htmlelement('a')}} und {{htmlelement('area')}} und sofern unterstützt, wird der Standard-{{cssxref('cursor')}} `help` statt `pointer` sein.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Symbol, eine Ressource zur Repräsentation der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Der häufigste Gebrauch des `icon`-Wertes ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren `media`-, `type`- und `sizes`-Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Wenn das am besten geeignete Symbol später als ungeeignet befunden wird, beispielsweise weil es ein nicht unterstütztes Format verwendet, geht der Browser zum nächsten geeignetsten über, und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apple iOS verwendet diesen Link-Typ nicht, ebenso wenig das `sizes`-Attribut, wie andere mobile Browser, um ein Webseiten-Symbol für Web Clip oder einen Startplatzhalter auszuwählen.
    > Stattdessen wird das nicht-standardkonforme [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) verwendet.

    > [!NOTE]
    > Der Link-Typ `shortcut` wird oft vor `icon` gesehen, dieser Link-Typ ist jedoch nicht konform, ignoriert, und **Webautoren müssen ihn nicht mehr verwenden.**

- `license`

  - : Gültig auf den Elementen {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}, der `license`-Wert zeigt an, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments unter der Urheberrechtslizenz steht, die im referenzierten Dokument beschrieben wird. Wenn es sich nicht innerhalb des {{HTMLElement("head")}}-Elements befindet, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen bestimmten Teil des Dokuments oder auf das gesamte Dokument zutrifft. Nur die Daten auf der Seite können dies angeben.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen von Ressourcen über verschiedene Ursprünge.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für das {{htmlelement('link')}} an beliebiger Stelle im Dokument; das Setzen von `rel="modulepreload"` weist den Browser an, das Skript (und Abhängigkeiten) präventiv abzurufen und es im Modulverzeichnis des Dokuments für eine spätere Auswertung zu speichern. `modulepreload`-Links können sicherstellen, dass das Netzwerkabrufen mit dem Modul bereit (aber nicht ausgewertet) im Modulverzeichnis abgeschlossen ist, bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, der `next`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Bei Einbindung in ein `<link>` können Browser annehmen, dass das Dokument als Nächstes abgerufen wird und als Ressourcentipp behandelt wird.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort weist Suchmaschinenspider an, die Beziehung des Links zu ignorieren. Die Beziehung nofollow kann darauf hindeuten, dass der Eigentümer des aktuellen Dokuments das referenzierte Dokument nicht gutheißt. Es wird oft von Suchmaschinenoptimierern eingeschlossen, die vortäuschen, dass ihre Linkfarmen keine Spammseiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, erstellt es einen Top-Level-Browsing-Kontext, der kein Hilfs-Browsing-Kontext ist, wenn der Hyperlink entweder dies oder das erstellt (d. h. ein entsprechender `target`-Attributwert vorhanden ist). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener)

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, wenn dieser Wert enthalten ist, wird der Referrer unbekannt (es wird kein `Referer`-Header gesendet), und es wird ein Top-Level-Browsing-Kontext erstellt, als wäre auch `noopener` gesetzt.
- `opener`
  - : Erstellt einen Hilfs-Browsing-Kontext, wenn der Hyperlink ansonsten einen Top-Level-Browsing-Kontext erstellt, der kein Hilfs-Browsing-Kontext ist (d. h. `"_blank"` als `target`-Attributwert hat). Im Endeffekt das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks für das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Stellt dem Browser einen Hinweis zur Verfügung, dass er vorschlägt, eine Verbindung zur verlinkten Website im Voraus zu öffnen, ohne persönliche Informationen preiszugeben oder Inhalte herunterzuladen, sodass der verlinkte Inhalt schneller abgerufen werden kann, wenn der Link gefolgt wird.
- `prefetch`
  - : Gibt an, dass der User Agent die Zielressource präventiv abrufen und zwischenlagern soll, da sie wahrscheinlich für eine nachfolgende Navigation erforderlich sein wird.
    Weitere Informationen finden Sie unter {{Glossary("prefetch", "prefetch")}}.
- `preload`
  - : Gibt an, dass der User Agent die Zielressource präventiv für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut angegeben wird (und die mit dem entsprechenden Ziel verbundene Priorität), abrufen und zwischenspeichern muss. Weitere Informationen zur [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)-Wertseite finden Sie auf der Seite.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der User Agent die Zielressource präventiv abrufen und auf eine Weise verarbeiten soll, die bei einem künftigen Abruf eine schnellere Antwort ermöglicht, indem beispielsweise ihre Subressourcen abgerufen oder einige Rendering-Vorgänge durchgeführt werden.
- `prev`

  - : Ähnlich dem Schlüsselwort [`next`](#next), relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}, der `prev`-Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für die {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente, gibt der `privacy-policy`-Wert an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Datenverarbeitungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für die {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, das `search`-Schlüsselwort gibt an, dass der Hyperlink auf ein Dokument verweist, dessen Benutzeroberfläche speziell zum Durchsuchen des aktuellen Dokuments, der Website und verwandter Ressourcen entwickelt wurde, und bietet einen Link zu einer Ressource, die zum Suchen verwendet werden kann.

    Wenn das `type`-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch)-Plugin, das einfach zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}}-Element, importiert es eine externe Ressource, die als Stylesheet verwendet werden soll. Das `type`-Attribut wird nicht benötigt, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet vom Typ `text/css` handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel-Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn das Attribut mit dem Schlüsselwort `alternate` verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall fügen Sie einen nicht-leeren `title` hinzu.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht dem Wert des `media`-Attributs entspricht.

    Erfordert die Verwendung des CORS-Protokolls zum Abrufen von Ressourcen über verschiedene Ursprünge.

- `tag`

  - : Gültig für die {{htmlelement('a')}} und {{htmlelement('area')}}-Elemente, gibt es einen Tag (identifiziert durch die angegebene Adresse) an, der auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das einen Tag beschreibt, der auf das Dokument angewendet wird, auf dem es sich befindet. Dieser Link-Typ ist nicht für Tags innerhalb einer Tag Cloud gedacht, da diese Tags auf eine Gruppe von Seiten zutreffen, während der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument vorgesehen ist.

- `terms-of-service`

  - : Gültig für die {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('link')}}-Elemente, gibt der `terms-of-service`-Wert an, dass das referenzierte Dokument die Nutzungsbedingungen beschreibt, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern, die das bereitgestellte Dokument nutzen möchten, beschreiben.

### Nicht-standardmäßige Werte

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
