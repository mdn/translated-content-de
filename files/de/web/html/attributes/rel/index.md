---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTMLSidebar}}

Das **`rel`** Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig auf {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}. Die unterstützten Werte hängen vom Element ab, auf dem das Attribut zu finden ist.

Die Art der Beziehungen wird durch den Wert des `rel` Attributs angegeben, der, falls vorhanden, einen nicht sortierten Satz von eindeutigen, durch Leerzeichen getrennten Schlüsselwörtern haben muss. Anders als ein `class` Name, der keine Semantik ausdrückt, muss das `rel` Attribut Tokens ausdrücken, die semantisch sowohl für Maschinen als auch für Menschen gültig sind. Die aktuellen Register für die möglichen Werte des `rel` Attributs sind das [IANA Link Relation Registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values Seite](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel` Attribut verwendet wird, das in keiner der oben genannten drei Quellen vorhanden ist, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte innerhalb dieses Werts eindeutig sein.

| `rel` Wert                                                           | Beschreibung                                                                                                                                                                                                                                                                             | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                            | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                      | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                                  | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                            | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                              | Permalink für den nächstliegenden Vorfahrenabschnitt.                                                                                                                                                                                                                                    | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                            | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                               | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Fordert den Browser auf, die DNS-Auflösung für den Ursprung der Zielressource proaktiv durchzuführen.                                                                                                                                                                                   | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                              | Das referenzierte Dokument gehört nicht zur gleichen Seite wie das aktuelle Dokument.                                                                                                                                                                                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                  | Erlaubt es der Seite, [render-blocked](/de/docs/Glossary/Render_blocking) zu sein, bis die wesentlichen Teile des Dokuments geparst sind, damit es konsistent gerendert wird.                                                                                                        | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                      | Link zu kontextbezogener Hilfe.                                                                                                                                                                                                                                                          | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                      | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                     | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                                | Gibt an, dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz gedeckt ist, die im referenzierten Dokument beschrieben wird.                                                                                                                                       | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web App Manifest.                                                                                                                                                                                                                                                                       | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                          | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Fordert den Browser auf, das Skript vorab abzurufen und im Modul-Map des Dokuments zur späteren Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                           | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                      | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                              | Weist darauf hin, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht unterstützt.                                                                                                                                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink einen dieser erstellen würde (d.h. ein entsprechender `target` Attributwert vorhanden ist).                                                                                            | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer` Header wird enthalten sein. Zusätzlich hat es den gleichen Effekt wie `noopener`.                                                                                                                                                                                        | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                  | Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink sonst einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat "`_blank`" als `target` Attributwert).                                                                                   | Nicht erlaubt           | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                              | Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet.                                                                                                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent proaktiv eine Verbindung zum Ursprung der Zielressource herstellen soll.                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource proaktiv abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation erforderlich sein wird.                                                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und zwischenspeichern muss, um für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) Attribut angegeben wird, bereit zu sein (und die Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource proaktiv abrufen und in einer Weise verarbeiten soll, die eine schnellere Antwort in der Zukunft ermöglicht.                                                                                                                          | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                      | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                  | Gibt einen Link zu Informationen über die Datensammlung und Nutzungspraktiken an, die für das aktuelle Dokument gelten.                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                                  | Gibt einen Link zu einer Ressource, die verwendet werden kann, um das aktuelle Dokument und seine zugehörigen Seiten zu durchsuchen.                                                                                                                                                    | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                          | Importiert ein Stylesheet.                                                                                                                                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                        | Gibt ein Tag (identifiziert durch die angegebene Adresse), das auf das aktuelle Dokument zutrifft.                                                                                                                                                                                     | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                              | Link zum Vertrag oder den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Nutzern, die das Dokument nutzen möchten.                                                                                                                                                    | Link                    | Link                                             | Nicht erlaubt           |

Das `rel` Attribut ist relevant für die {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}} Elemente, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht case-sensitiv.

Das `rel` Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder keiner der Werte im Attribut unterstützt wird, dann hat das Dokument keine besondere Beziehung zur Zielressource, außer dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall, bei {{htmlelement('link')}} und {{htmlelement('form')}}, wenn das `rel` Attribut fehlt, keine Schlüsselwörter hat oder nicht eines oder mehrere der oben genannten, durch Leerzeichen getrennten Schlüsselwörter enthält, erstellt das Element keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} erstellen jedoch weiterhin Links, aber ohne eine definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}} und {{htmlelement('area')}}. Die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Mit dem [`stylesheet`](#stylesheet) Schlüsselwort auf einem `<link>`, erstellt es ein [alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).

      ```html
      <!-- ein dauerhaftes Stylesheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternative Stylesheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) Attribut, das sich von der Dokumentsprache unterscheidet, deutet es auf eine Übersetzung hin.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type) Attributwert von `"application/rss+xml"` oder `"application/atom+xml"`, erstellt es einen Hyperlink, der auf einen Syndikations-Feed verweist.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type) Attribute angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` angegeben ist und sich der Wert von `hreflang` von der Sprache des aktuellen Dokuments unterscheidet, weist dies darauf hin, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, weist es darauf hin, dass das referenzierte Dokument ein alternatives Format hat (z. B. ein PDF).
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

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels liefert. Relevante für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente.

    Mit {{htmlelement('a')}} und {{htmlelement('area')}}, weist es darauf hin, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen {{htmlelement('article')}} Vorfahren liefert, falls vorhanden, andernfalls über das gesamte Dokument.

    Mit {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevante als `rel` Attributwert für die {{htmlelement('a')}} und {{htmlelement('area')}} Elemente. Bietet einen Permalink für das nächstliegende Vorfahren {{htmlelement('article')}} Element, falls vorhanden. Wenn kein Vorfahren `<article>` Element vorhanden ist, bietet es einen Permalink für den Abschnitt, mit dem das verlinkende Element am nächsten assoziiert ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, es definiert die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}} Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es weist den Browser an, die DNS-Auflösung für den Ursprung der Zielressource proaktiv durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigt, hilft es, die Latenz zu reduzieren und dadurch die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich aufruft, da der Browser die DNS-Auflösung für den Ursprung der angegebenen Ressource vorausschauend durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/dns-prefetch) beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Seite ist. Dies kann mit Attributselektoren verwendet werden, um externe Links so zu stylen, dass der Benutzer wissen, dass er die aktuelle Seite verlassen wird.
- `expect` {{experimental_inline}}

  - : Erlaubt es der Seite, [render-blocked](/de/docs/Glossary/Render_blocking) zu sein, bis die wesentlichen Teile des Dokuments geparst sind, so dass es konsistent gerendert wird. Beachten Sie, dass Render-Blocking nur auftritt, wenn es durch das [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking) Attribut ergänzt wird.

    > [!NOTE]
    > Weitere Informationen zur Verwendung finden Sie unter [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transitions_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent).

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `help` Schlüsselwort weist darauf hin, dass der verlinkte Inhalt kontextsensitiv Hilfe bietet, mit Informationen für das übergeordnete Element des Hyperlink-definierenden Elements und seine Kinder. Wenn es innerhalb eines `<link>` verwendet wird, ist die Hilfe für das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} verwendet wird, ist der Standard-{{cssxref('cursor')}} bei Unterstützung `help` anstelle von `pointer`.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Symbol, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Der häufigste Verwendungszweck für den `icon` Wert ist das Favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Wenn mehrere `<link rel="icon">`s vorhanden sind, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Element/link#media), [`type`](/de/docs/Web/HTML/Element/link#type), und [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribute, um das passendste Symbol auszuwählen. Wenn mehrere Symbole gleichermaßen geeignet sind, wird das letzte verwendet. Sollte sich das passendste Symbol später als ungeeignet erweisen, beispielsweise da es ein nicht unterstütztes Format verwendet, fährt der Browser mit dem nächsten geeignetsten fort usw.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apple's iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes) Attribut, wie es andere mobile Browser tun, um ein Webseiten-Symbol für Web Clip oder einen Startbildschirm-Platzhalter zu wählen.
    > Stattdessen verwendet es die nicht-standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) entsprechend.

    > [!NOTE]
    > Der `shortcut` Linktyp wird häufig vor `icon` gesehen, aber dieser Linktyp ist nicht konform, ignoriert und **Webautoren dürfen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} Elementen, weist der `license` Wert darauf hin, dass der Hyperlink zu einem Dokument führt, das die Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die Urheberrechtslizenz gedeckt ist, die im referenzierten Dokument beschrieben wird. Wenn es nicht innerhalb des {{HTMLElement("head")}} Elements ist, unterscheidet der Standard nicht zwischen einem Hyperlink, der auf einen bestimmten Teil des Dokuments oder auf das gesamte Dokument anwendbar ist. Nur die Daten auf der Seite können dies anzeigen.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Obwohl anerkannt, ist das Synonym `copyright` falsch und sollte vermieden werden.

- `manifest`
  - : [Web App Manifest](/de/docs/Web/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen über verschiedene Ursprünge hinweg.
- `modulepreload`
  - : Nützlich zur Leistungsverbesserung und relevant für den {{htmlelement('link')}} überall im Dokument, das Setzen von `rel="modulepreload"` weist den Browser an, das Skript (und seine Abhängigkeiten) proaktiv abzurufen und im Modul-Map des Dokuments für die spätere Auswertung zu speichern. `modulepreload` Links können sicherstellen, dass das Netzwerkabrufen mit dem Modul fertiggestellt ist (aber nicht ausgewertet) im Modul-Map ist, bevor es notwendigerweise benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, der `next` Wert gibt an, dass das aktuelle Dokument Teil einer Serie ist, und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser davon ausgehen, dass das Dokument als Nächstes abgerufen wird und es als Ressourcentrick behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `nofollow` Schlüsselwort weist Suchmaschinenspinnen an, die Link-Beziehung zu ignorieren. Die nofollow Beziehung kann darauf hinweisen, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht unterstützt. Es wird oft von Suchmaschinenoptimierern eingefügt, die vorgeben, dass ihre Linkfarmen keine Spam-Seiten sind.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen obersten Browsing-Kontext, der kein Hilfsbrowsing-Kontext ist, wenn der Hyperlink einen dieser erstellen würde, um zu beginnen (d.h. ein entsprechender `target` Attributwert vorhanden ist). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, einschließlich dieses Werts macht den Referrer unbekannt (kein `Referer` Header wird enthalten sein) und erstellt einen obersten Browsing-Kontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowsing-Kontext, wenn der Hyperlink sonst einen obersten Browsing-Kontext erstellen würde, der kein Hilfsbrowsing-Kontext ist (d.h. hat "`_blank`" als `target` Attributwert). Tatsächlich das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks zum aktuellen Dokument verarbeitet. Siehe die [Pingback Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Gibt dem Browser einen Hinweis, dass er im Voraus eine Verbindung zur verlinkten Webseite herstellen soll, ohne private Informationen preiszugeben oder Inhalte herunterzuladen, so dass beim Folgen des Links die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource proaktiv abrufen und zwischenspeichern sollte, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Siehe {{Glossary("prefetch")}} für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und zwischenspeichern muss, um für die aktuelle Navigation gemäß dem potenziellen Ziel, das durch das [`as`](/de/docs/Web/HTML/Element/link#as) Attribut angegeben wird, bereit zu sein (und die Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload) Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource proaktiv abrufen und

in einer Weise verarbeiten soll, die hilft, eine schnellere Antwort in der Zukunft zu liefern, zum Beispiel durch das Abrufen seiner Unterressourcen oder das Durchführen von Rendering.

- `prev`

  - : Ähnlich wie das [`next`](#next) Schlüsselwort, relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, gibt der `prev` Wert an, dass das aktuelle Dokument Teil einer Serie ist, und dass der Link auf ein vorheriges Dokument in der Serie verwiesen wird.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, der `privacy-policy` Wert gibt an, dass das referenzierte Dokument die Datenschutzrichtlinie ist, die die Datensammel- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, die `search` Schlüsselwörter gibt an, dass der Hyperlink auf ein Dokument verweist, dessen Schnittstelle speziell für die Suche im aktuellen Dokument, der Website und verwandten Ressourcen entwickelt wurde und einen Link zu einer Ressource bietet, die zum Durchsuchen verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut auf `application/opensearchdescription+xml` eingestellt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/OpenSearch) Plugin, das leicht zur Schnittstelle von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}} Element, importiert eine externe Ressource, die als Stylesheet verwendet wird. Das [`type`](/de/docs/Web/HTML/Element/link#type) Attribut ist nicht erforderlich, wenn es sich um ein `text/css` Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein Stylesheet des Typs `text/css` handelt, ist es am besten, den Typ zu deklarieren.

    Während dieses Attribut den Link als ein Stylesheet definiert, beeinflusst die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel Wertes, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn es mit dem [`alternate`](#alternate) Schlüsselwort verwendet wird, definiert es ein alternatives Stylesheet. In diesem Fall geben Sie einen nicht-leeren [`title`](/de/docs/Web/HTML/Element/link#title) an.

    Das externe Stylesheet wird nicht verwendet oder sogar heruntergeladen, wenn das Medium nicht mit dem Wert des [`media`](/de/docs/Web/HTML/Element/link#media) Attributs übereinstimmt.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen über verschiedene Ursprünge hinweg.

- `tag`

  - : Gültig für die {{htmlelement('a')}}, und {{htmlelement('area')}} Elemente, gibt es ein Tag (identifiziert durch die angegebene Adresse), das auf das aktuelle Dokument zutrifft. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das ein auf das Dokument anwendbares Tag beschreibt, auf dem es sich befindet. Dieser Linktyp ist nicht für Tags innerhalb einer Tag-Wolke gedacht, da diese Tags auf eine Gruppe von Seiten zutreffen, während der `tag` Wert des `rel` Attributs für ein einzelnes Dokument gilt.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}} Elemente, gibt der `terms-of-service` Wert an, dass das referenzierte Dokument die Nutzungsbedingungen ist, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Nutzern beschreibt, die das bereitgestellte Dokument nutzen möchten.

### Nicht-standardisierte Werte

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Gibt das Symbol für eine Webanwendung auf einem iOS-Gerät an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLAreaElement.relList")}}
