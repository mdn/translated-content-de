---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig bei {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}. Die unterstützten Werte hängen vom Element ab, auf dem das Attribut verwendet wird.

Die Art der Beziehungen wird durch den Wert des `rel`-Attributs festgelegt, das, falls vorhanden, einen Wert haben muss, der eine ungeordnete Menge von eindeutigen, mit Leerzeichen getrennten Schlüsselwörtern ist. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut Tokens enthalten, die sowohl für Maschinen als auch für Menschen semantisch valide sind. Die aktuellen Registrierungen für die möglichen Werte des `rel`-Attributs sind das [IANA Link Relation Registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) im microformats-Wiki, [wie vom Living Standard vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types). Wird ein `rel`-Attribut verwendet, das in keiner der drei oben genannten Quellen vorhanden ist, erzeugen einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung.

Die folgende Tabelle listet einige der wichtigsten existierenden Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Wertes sollte innerhalb dieses Wertes einzigartig sein.

| `rel`-Wert                                                           | Beschreibung                                                                                                                                                                                                                                                                            | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                            | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                      | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                  | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                            | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                              | Permalink für den nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                                             | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                            | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Weist den Browser an, die DNS-Auflösung für die Herkunft der Zielressource vorzeitig durchzuführen.                                                                                                                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                              | Das referenzierte Dokument gehört nicht zur gleichen Website wie das aktuelle Dokument.                                                                                                                                                                                                 | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                  | Erlaubt, dass die Seite {{Glossary("Render_blocking", "render-blocked")}} wird, bis die wesentlichen Teile des Dokuments geparst sind, sodass sie konsistent gerendert wird.                                                                                                        | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                      | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                         | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                      | Ein Symbol, das das aktuelle Dokument darstellt.                                                                                                                                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz des referenzierten Dokuments abgedeckt ist.                                                                                                                                                          | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web App Manifest.                                                                                                                                                                                                                                                                       | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                           | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Weist den Browser an, das Skript vorab zu laden und es im Modul-Map des Dokuments für eine spätere Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls vorab geladen werden.                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                      | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                          | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                              | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                            | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowserkontext ist, wenn der Hyperlink einen solchen erstellen würde (d. h. hat einen geeigneten `target`-Attributwert).                                                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer`-Header wird enthalten sein. Hat zusätzlich denselben Effekt wie `noopener`.                                                                                                                                                                                              | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                  | Erstellt einen Hilfsbrowserkontext, wenn der Hyperlink ansonsten einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowserkontext ist (d. h. hat `"_blank"` als `target`-Attributwert).                                                                                    | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                              | Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument verarbeitet.                                                                                                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent eine Verbindung zu der Herkunft der Zielressource vorzeitig herstellen soll.                                                                                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource vorab holen und zwischenspeichern soll, da sie höchstwahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource vorzeitig holen und zwischenspeichern muss für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut (und die mit dem entsprechenden Ziel verbundene Priorität) angegeben ist. | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource vorab holen und so verarbeiten soll, dass in Zukunft eine schnellere Reaktion geliefert werden kann.                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                      | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                  | Gibt einen Link zu Informationen über die Datenschutzpraktiken, die für das aktuelle Dokument gelten.                                                                                                                                                                                   | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                  | Gibt einen Link zu einer Ressource, die verwendet werden kann, um das aktuelle Dokument und seine verwandten Seiten zu durchsuchen.                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                          | Importiert ein Stylesheet.                                                                                                                                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                        | Gibt ein Tag (identifiziert durch die angegebene Adresse) an, das auf das aktuelle Dokument zutrifft.                                                                                                                                                                                   | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                              | Link zur Vereinbarung oder Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument nutzen möchten.                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}} Elemente, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwort-Attributwerte sind diese Werte nicht groß- und kleinschreibungsempfindlich.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder wenn keiner der Werte im Attribut unterstützt wird, dann hat das Dokument keine besondere Beziehung zur Zielressource, außer dass ein Hyperlink zwischen beiden besteht. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel`-Attribut fehlt, keine Schlüsselwörter hat oder wenn nicht ein oder mehrere der oben genannten, durch Leerzeichen getrennten Schlüsselwörter, dann erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen dennoch Links, aber ohne definierte Beziehung.

## Werte

- `alternate`

  - : Zeigt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Mit dem [`stylesheet`](#stylesheet)-Schlüsselwort auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)-Attribut, das sich von der Dokumentsprache unterscheidet, zeigt es eine Übersetzung an.
    - Mit einem [`type`](/de/docs/Web/HTML/Element/link#type)-Attributwert von `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink, der auf einen Syndikationsfeed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, dessen Natur durch die [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type)-Attribute angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` angegeben wird und der Wert von `hreflang` sich von der aktuellen Dokumentsprache unterscheidet, zeigt dies an, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben wird, zeigt dies an, dass das referenzierte Dokument ein alternatives Format ist (z. B. ein PDF).
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

  - : Zeigt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels bereitstellt. Relevant für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}} zeigt es an, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächsten {{htmlelement('article')}}-Vorfahren bereitstellt, falls vorhanden, ansonsten über das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Gibt einen Permalink für das nächstgelegene vorfahren {{htmlelement('article')}}-Element an, falls vorhanden. Gibt bei Abwesenheit eines Vorfahren-`<article>`-Elements einen Permalink für den Abschnitt an, mit dem das verlinkende Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen dabei hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, weist den Browser an, die DNS-Auflösung für die Herkunft der Zielressource vorzeitig durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und damit die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich aufruft, da der Browser die DNS-Auflösung für die Herkunft der angegebenen Ressource bereits durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, zeigt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu stylen, dass der Benutzer erkennt, dass die aktuelle Website verlassen wird.
- `expect` {{experimental_inline}}

  - : Erlaubt, dass die Seite {{Glossary("Render_blocking", "render-blocked")}} wird, bis die wesentlichen Teile des Dokuments geparst sind, sodass sie konsistent gerendert wird. Beachten Sie, dass Render-Blocking nur auftritt, wenn es mit dem [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking)-Attribut ergänzt wird.

    > [!NOTE]
    > Weitere Informationen finden Sie in [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transition_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `help`-Schlüsselwort zeigt an, dass der verlinkte Inhalt kontextsensitive Hilfe bietet, die Informationen für das übergeordnete Element des Elements, das den Hyperlink definiert, und seine Kinder bereitstellt. Wird es innerhalb eines `<link>` verwendet, gilt die Hilfe für das gesamte Dokument. Bei Verwendung mit {{htmlelement('a')}} und {{htmlelement('area')}} und wenn es unterstützt wird, ist der Standard-{{cssxref('cursor')}} `help` statt `pointer`.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, die verlinkte Ressource stellt das Symbol dar, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn es mehrere `<link rel="icon">` gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type), und [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das zuletzt genannte verwendet. Wenn das am besten geeignete Symbol später als ungeeignet befunden wird, zum Beispiel weil es ein nicht unterstütztes Format verwendet, geht der Browser zum nächstbesten über und so weiter.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe den [offenen Chromium-Issue](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Link-Typ nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribut, wie es andere mobile Browser tun, um ein Webseiten-Symbol für Web Clip oder ein Start-Platzhalter auszuwählen.
    > Stattdessen verwendet es die nicht standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6).

    > [!NOTE]
    > Der `shortcut`-Link-Typ wird oft vor `icon` gesehen, aber dieser Link-Typ ist nicht konform, ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen, zeigt der `license`-Wert an, dass der Hyperlink zu einem Dokument führt, das die Lizenzierungsinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments unter der Urheberrechtslizenz des referenzierten Dokuments abgedeckt ist. Wenn nicht innerhalb des {{HTMLElement("head")}} Elements, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen bestimmten Teil des Dokuments oder das gesamte Dokument angewendet wird. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` inkorrekt und muss vermieden werden.

- `manifest`
  - : [Web App Manifest](/de/docs/Web/Manifest). Erfordert die Verwendung des CORS-Protokolls für Fetching aus externen Quellen.
- `modulepreload`
  - : Nützlich für verbesserte Leistung, und relevant für das {{htmlelement('link')}} überall im Dokument, festlegen von `rel="modulepreload"` weist den Browser an, das Skript (und Abhängigkeiten) vorzeitig abzurufen und im Modul-Map des Dokuments für eine spätere Auswertung zu speichern. `modulepreload` Links können sicherstellen, dass das Netzwerkabrufen mit dem Modul bereit (aber nicht ausgewertet) im Modul-Map durchgeführt ist, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `next` Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist, und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Bei Verwendung in einem `<link>` dürfen Browser annehmen, dass das Dokument als Nächstes abgerufen wird, und es als Ressourcentipp behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort weist Suchmaschinen-Spider an, die Link-Beziehung zu ignorieren. Die nofollow-Beziehung kann anzeigen, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern verwendet, die vorgaukeln, dass ihre Link-Farmen keine Spam-Seiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowserkontext ist, wenn der Hyperlink einen solchen erstellen würde (d. h. hat einen geeigneten `target`-Attributwert). Mit anderen Worten, es lässt den Link verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das Einschließen dieses Wertes macht den Referrer unbekannt (kein `Referer`-Header wird enthalten sein) und erstellt einen obersten Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowserkontext, wenn der Hyperlink ansonsten einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowserkontext ist (d. h. hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser einen Hinweis, dass er im Voraus eine Verbindung zur verlinkten Website öffnen soll, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, so dass beim Folgen des Links die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent den Zielressource vorab holen und zwischenspeichern soll, da sie höchstwahrscheinlich für eine Folge-Navigation benötigt wird.
    Siehe {{Glossary("prefetch", "prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource vorzeitig holen und zwischenspeichern muss für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut (und die mit dem entsprechenden Ziel verbundene Priorität) angegeben ist. Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource vorab holen und so verarbeiten soll, dass in Zukunft eine schnellere Reaktion geliefert werden kann, zum Beispiel durch Abrufen seiner Unterressourcen oder durch etwas Rendern.
- `prev`

  - : Ähnlich dem [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `prev` Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link auf ein vorheriges Dokument in der Serie verweist.

    Hinweis: Das Synonym `previous` ist inkorrekt und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, zeigt der `privacy-policy` Wert an, dass das referenzierte Dokument die Datenschutzerklärung ist, die die Praktiken zur Datenerhebung und -nutzung des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, die `search` Schlüsselwörter zeigen an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell für die Suche im aktuellen Dokument, auf der Website und in verwandten Ressourcen entworfen ist, ein Link zu einer Ressource bereithält, die zur Suche verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/OpenSearch) Plugin, das leicht zur Firefox-Schnittstelle hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}} Element, importiert es eine externe Ressource zur Verwendung als Stylesheet. Das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut ist nicht erforderlich, wenn es sich um ein `text/css` Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als Stylesheet definiert, wirkt sich die Wechselwirkung mit anderen Attributen und anderen Schlüsselwörtern innerhalb des rel-Wertes darauf aus, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn zusammen mit dem [`alternate`](#alternate) Schlüsselwort verwendet, definiert es ein alternatives Stylesheet. In diesem Fall geben Sie einen nicht leeren [`title`](/de/docs/Web/HTML/Element/link#title) an.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media) Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für Fetching aus externen Quellen.

- `tag`

  - : Gültig für die {{htmlelement('a')}}- und {{htmlelement('area')}}-Elemente, gibt es ein Tag an (identifiziert durch die angegebene Adresse), das auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein auf dieses befindliches Dokument zutreffendes Tag beschreibt. Dieser Link-Typ ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten zutreffen, während der `tag` Wert des `rel`-Attributs für ein einzelnes Dokument ist.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, zeigt der `terms-of-service` Wert an, dass das referenzierte Dokument die Nutzungsbedingungen sind, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreiben, die das bereitgestellte Dokument nutzen möchten.

### Nicht-standardisierte Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Gibt das Symbol einer Webanwendung auf einem iOS-Gerät an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
