---
title: "HTML-Attribut: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`rel`**-Attribut definiert die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument. Es ist gültig bei {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} und {{htmlelement('form')}}. Die unterstützten Werte hängen davon ab, auf welchem Element sich das Attribut befindet.

Die Art der Beziehung wird durch den Wert des `rel`-Attributs angegeben, der, falls vorhanden, eine ungeordnete Menge eindeutiger, durch Leerzeichen getrennter Schlüsselwörter sein muss. Anders als ein `class`-Name, der keine Semantik ausdrückt, muss das `rel`-Attribut semantisch gültige Token sowohl für Maschinen als auch Menschen ausdrücken. Die aktuellen Register für die möglichen Werte des `rel`-Attributs sind das [IANA-Link-Beziehungsregister](https://www.iana.org/assignments/link-relations/link-relations.xhtml), der [HTML-Living-Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) und die frei bearbeitbare [existing-rel-values-Seite](https://microformats.org/wiki/existing-rel-values) im Microformats-Wiki, [wie vorgeschlagen](https://html.spec.whatwg.org/multipage/links.html#other-link-types) vom Living Standard. Wenn ein `rel`-Attribut, das in einer der drei obigen Quellen nicht enthalten ist, verwendet wird, werden einige HTML-Validatoren (wie der [W3C Markup Validation Service](https://validator.w3.org/)) eine Warnung generieren.

Die folgende Tabelle listet einige der wichtigsten vorhandenen Schlüsselwörter auf. Jedes Schlüsselwort innerhalb eines durch Leerzeichen getrennten Werts sollte innerhalb dieses Werts einzigartig sein.

| `rel`-Wert                                                        | Beschreibung                                                                                                                                                                                                                                                                                                       | {{htmlelement('link')}} | {{htmlelement('a')}} und {{htmlelement('area')}} | {{htmlelement('form')}} |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                         | Alternative Darstellungen des aktuellen Dokuments.                                                                                                                                                                                                                                                                 | Link                    | Link                                             | Nicht erlaubt           |
| [`author`](#author)                                               | Autor des aktuellen Dokuments oder Artikels.                                                                                                                                                                                                                                                                       | Link                    | Link                                             | Nicht erlaubt           |
| [`bookmark`](#bookmark)                                           | Permalink für den nächstgelegenen übergeordneten Abschnitt.                                                                                                                                                                                                                                                        | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`canonical`](#canonical)                                         | Bevorzugte URL für das aktuelle Dokument.                                                                                                                                                                                                                                                                          | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Teilt dem Browser mit, dass er die DNS-Auflösung der Herkunft der Zielressource im Voraus durchführen soll.                                                                                                                                                                                                        | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`external`](#external)                                           | Das referenzierte Dokument ist nicht Teil derselben Website wie das aktuelle Dokument.                                                                                                                                                                                                                             | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`expect`](#expect)                                               | Ermöglicht das [Render-Blockieren](/de/docs/Glossary/Render_blocking) der Seite, bis die wesentlichen Teile des Dokuments analysiert sind, sodass es konsistent dargestellt wird.                                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`help`](#help)                                                   | Link zu kontextsensitiver Hilfe.                                                                                                                                                                                                                                                                                   | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                   | Ein Symbol, das das aktuelle Dokument repräsentiert.                                                                                                                                                                                                                                                               | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`license`](#license)                                             | Gibt an, dass der Hauptinhalt des aktuellen Dokuments unter der Urheberrechtslizenz steht, die im referenzierten Dokument beschrieben wird.                                                                                                                                                                        | Link                    | Link                                             | Link                    |
| [`manifest`](/de/docs/Web/HTML/Attributes/rel/manifest)           | Web-App-Manifest.                                                                                                                                                                                                                                                                                                  | Link                    | Nicht erlaubt                                    | Nicht erlaubt           |
| [`me`](/de/docs/Web/HTML/Attributes/rel/me)                       | Gibt an, dass das aktuelle Dokument die Person repräsentiert, der der verlinkte Inhalt gehört.                                                                                                                                                                                                                     | Link                    | Link                                             | Nicht erlaubt           |
| [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Teilt dem Browser mit, das Skript im Voraus abzurufen und es in der Modulkarte des Dokuments zur späteren Auswertung zu speichern. Optional können auch die Abhängigkeiten des Moduls abgerufen werden.                                                                                                            | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`next`](#next)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das nächste Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                                | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                           | Gibt an, dass der ursprüngliche Autor oder Herausgeber des aktuellen Dokuments das referenzierte Dokument nicht befürwortet.                                                                                                                                                                                       | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noopener`](/de/docs/Web/HTML/Attributes/rel/noopener)           | Erstellt einen obersten Browserkontext, der kein Hilfsbrowserkontext ist, wenn der Hyperlink zu einem dieser führen würde (d. h., hat einen geeigneten `target`-Attributwert).                                                                                                                                     | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer)       | Kein `Referer`-Header wird enthalten sein. Hat zusätzlich denselben Effekt wie `noopener`.                                                                                                                                                                                                                         | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`opener`](#opener)                                               | Erstellt einen Hilfsbrowserkontext, wenn der Hyperlink ansonsten einen obersten Browserkontext erstellt, der kein Hilfsbrowserkontext ist (d. h., hat `"_blank"` als `target`-Attributwert).                                                                                                                       | Nicht erlaubt           | Anmerkung                                        | Anmerkung               |
| [`pingback`](#pingback)                                           | Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument bearbeitet.                                                                                                                                                                                                                       | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Gibt an, dass der Benutzeragent vorab eine Verbindung zur Herkunft der Zielressource herstellen soll.                                                                                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.                                                                                                                                              | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)             | Gibt an, dass der Benutzeragent die Zielressource im Voraus für die aktuelle Navigation gemäß der möglichen Zielbestimmung abrufen und zwischenspeichern muss, die durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut angegeben wird (und der Priorität, die mit dem entsprechenden Ziel verbunden ist). | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prerender`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und so verarbeiten soll, dass eine schnellere Antwort in der Zukunft geliefert werden kann.                                                                                                                                                    | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`prev`](#prev)                                                   | Gibt an, dass das aktuelle Dokument Teil einer Serie ist und dass das vorherige Dokument in der Serie das referenzierte Dokument ist.                                                                                                                                                                              | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                               | Gibt einen Link zu Informationen über die Datenerfassungs- und Nutzungspraktiken an, die für das aktuelle Dokument gelten.                                                                                                                                                                                         | Link                    | Link                                             | Nicht erlaubt           |
| [`search`](#search)                                               | Gibt einen Link zu einer Ressource an, die verwendet werden kann, um das aktuelle Dokument und seine verwandten Seiten zu durchsuchen.                                                                                                                                                                             | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                       | Importiert ein Stylesheet.                                                                                                                                                                                                                                                                                         | Externe Ressource       | Nicht erlaubt                                    | Nicht erlaubt           |
| [`tag`](#tag)                                                     | Gibt einen Tag (identifiziert durch die angegebene Adresse) an, der auf das aktuelle Dokument angewendet wird.                                                                                                                                                                                                     | Nicht erlaubt           | Link                                             | Nicht erlaubt           |
| [`terms-of-service`](#terms-of-service)                           | Link zu den Nutzungsbedingungen zwischen dem Anbieter des Dokuments und den Benutzern, die das Dokument nutzen möchten.                                                                                                                                                                                            | Link                    | Link                                             | Nicht erlaubt           |

Das `rel`-Attribut ist relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('form')}}, aber einige Werte sind nur für eine Teilmenge dieser Elemente relevant. Wie alle HTML-Schlüsselwortattributwerte sind diese Werte nicht case-sensitiv.

Das `rel`-Attribut hat keinen Standardwert. Wenn das Attribut weggelassen wird oder keiner der Werte im Attribut unterstützt wird, hat das Dokument keine besondere Beziehung zur Zielressource, außer dass es einen Hyperlink zwischen den beiden gibt. In diesem Fall erzeugen {{htmlelement('link')}} und {{htmlelement('form')}} bei Abwesenheit des `rel`-Attributs, ohne Schlüsselwörter oder wenn nicht einer oder mehrere der oben genannten durch Leerzeichen getrennten Schlüsselwörter vorhanden sind, keine Links. {{htmlelement('a')}} und {{htmlelement('area')}} werden weiterhin Links erstellen, jedoch ohne definierte Beziehung.

## Werte

- `alternate`

  - : Gibt eine alternative Darstellung des aktuellen Dokuments an. Gültig für {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die Bedeutung hängt von den Werten der anderen Attribute ab.

    - Mit dem Schlüsselwort [`stylesheet`](#stylesheet) auf einem `<link>` erstellt es ein [alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).

    - Mit einem [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang)-Attribut, das von der Dokumentsprache abweicht, deutet es auf eine Übersetzung hin.
    - Mit dem [`type`](/de/docs/Web/HTML/Element/link#type)-Attributwert `"application/rss+xml"` oder `"application/atom+xml"` erstellt es einen Hyperlink, der auf einen Syndikations-Feed verweist.

    - Andernfalls erstellt es einen Hyperlink, der auf eine alternative Darstellung des aktuellen Dokuments verweist, deren Art durch die Attribute [`hreflang`](/de/docs/Web/HTML/Element/link#hreflang) und [`type`](/de/docs/Web/HTML/Element/link#type) angegeben wird.

      - Wenn `hreflang` zusammen mit `alternate` gegeben ist und der Wert von `hreflang` von der Sprache des aktuellen Dokuments abweicht, deutet dies darauf hin, dass das referenzierte Dokument eine Übersetzung ist.
      - Wenn `type` zusammen mit `alternate` angegeben ist, deutet es darauf hin, dass das referenzierte Dokument ein alternatives Format (wie ein PDF) ist.
      - Die Attribute `hreflang` und `type` können beide zusammen mit `alternate` gegeben werden.

- `author`

  - : Gibt an, dass das referenzierte Dokument weitere Informationen über den Autor des aktuellen Dokuments oder Artikels liefert. Relevant für die Elemente {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}.

    Bei {{htmlelement('a')}} und {{htmlelement('area')}} deutet es darauf hin, dass das verlinkte Dokument (oder `mailto:`) Informationen über den Autor des nächstgelegenen {{htmlelement('article')}}-Vorfahren liefert, falls vorhanden, ansonsten des gesamten Dokuments.

    Bei {{htmlelement('link')}} repräsentiert es den Autor des gesamten Dokuments.

    > [!NOTE]
    > Aus historischen Gründen wird der veraltete Attributwert `rev="made"` als `rel="author"` behandelt.

- `bookmark`
  - : Relevant als `rel`-Attributwert für die Elemente {{htmlelement('a')}} und {{htmlelement('area')}}. Gibt einen Permalink für das nächstgelegene übergeordnete {{htmlelement('article')}}-Element an, falls vorhanden. Wenn kein `<article>`-Element als Vorfahre vorhanden ist, gibt es einen Permalink für den Abschnitt an, mit dem das verlinkte Element am engsten verbunden ist.
- `canonical`
  - : Gültig für {{htmlelement('link')}}, definiert es die bevorzugte URL für das aktuelle Dokument, was Suchmaschinen hilft, doppelte Inhalte zu reduzieren.
- `dns-prefetch`
  - : Relevant für das {{htmlelement('link')}}-Element sowohl im {{htmlelement('body')}} als auch im {{htmlelement('head')}}, es teilt dem Browser mit, die DNS-Auflösung der Herkunft der Zielressource im Voraus durchzuführen. Nützlich für Ressourcen, die der Benutzer wahrscheinlich benötigen wird; es hilft, die Latenz zu verringern und dadurch die Leistung zu verbessern, wenn der Benutzer die Ressourcen tatsächlich nutzt, da der Browser im Voraus die DNS-Auflösung für die Herkunft der angegebenen Ressource durchgeführt hat. Siehe [dns-prefetch](/de/docs/Web/Performance/dns-prefetch), beschrieben in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, es gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist. Es kann mit Attributselektoren verwendet werden, um externe Links so zu stylen, dass sie dem Benutzer darauf hinweisen, dass er die aktuelle Website verlassen wird.
- `expect` {{experimental_inline}}

  - : Ermöglicht das [Render-Blockieren](/de/docs/Glossary/Render_blocking) der Seite, bis die wesentlichen Teile des Dokuments analysiert sind, damit es konsistent dargestellt wird. Beachten Sie, dass das Render-Blocking nur auftritt, wenn es durch das Attribut [`blocking="render"`](/de/docs/Web/HTML/Element/link#blocking) ergänzt wird.

    > [!NOTE]
    > Siehe [Stabilizing page state to make cross-document transitions consistent](/de/docs/Web/API/View_Transitions_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) für weitere Informationen zur Verwendung.

- `help`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}. Das `help`-Schlüsselwort gibt an, dass der verlinkte Inhalt kontextsensitive Hilfe bietet, liefert Informationen für das übergeordnete Element des den Hyperlink definierenden Elements und seine Kinder. Wenn es innerhalb von `<link>` verwendet wird, ist die Hilfe für das gesamte Dokument. Wenn es mit {{htmlelement('a')}} und {{htmlelement('area')}} enthalten und unterstützt wird, ist der Standard-{{cssxref('cursor')}} `help` anstatt `pointer`.
- `icon`

  - : Gültig mit {{htmlelement('link')}}, repräsentiert die verlinkte Ressource das Symbol, eine Ressource zur Darstellung der Seite in der Benutzeroberfläche, für das aktuelle Dokument.

    Die häufigste Verwendung für den `icon`-Wert ist das Favicon:

    Wenn es mehrere `<link rel="icon">`-Elemente gibt, verwendet der Browser deren [`media`](/de/docs/Web/HTML/Element/link#media)-, [`type`](/de/docs/Web/HTML/Element/link#type)- und [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribute, um das am besten geeignete Symbol auszuwählen. Wenn mehrere Symbole gleich geeignet sind, wird das letzte verwendet. Wenn sich das am besten geeignete Symbol später als ungeeignet erweist, zum Beispiel weil es ein nicht unterstütztes Format verwendet, geht der Browser zum nächst geeignetsten über usw.

    > [!NOTE]
    > Das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut wird für `rel="icon"` in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium Problem](https://crbug.com/1121645).

    > [!NOTE]
    > Apples iOS verwendet diesen Linktyp nicht, noch das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut, wie andere mobile Browser es tun, um ein Webseiten-Symbol für Web Clip oder einen Startplatzhalter auszuwählen.
    > Stattdessen werden die nicht standardisierten [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) verwendet.

    > [!NOTE]
    > Der `shortcut`-Linktyp wird oft vor `icon` gesehen, aber dieser Linktyp ist nicht konform, ignoriert und **Web-Autoren müssen ihn nicht mehr verwenden**.

- `license`

  - : Gültig auf den Elementen {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}, der `license`-Wert gibt an, dass der Hyperlink zu einem Dokument führt, das Lizenzinformationen beschreibt; dass der Hauptinhalt des aktuellen Dokuments durch die im referenzierten Dokument beschriebene Urheberrechtslizenz abgedeckt ist. Wenn es sich nicht innerhalb des {{HTMLElement("head")}}-Elements befindet, unterscheidet der Standard nicht zwischen einem Hyperlink, der für einen spezifischen Teil des Dokuments gilt, oder für das gesamte Dokument. Nur die Daten auf der Seite können dies anzeigen.

    > [!NOTE]
    > Obwohl erkannt, ist das Synonym `copyright` falsch und muss vermieden werden.

- `manifest`
  - : [Web-App-Manifest](/de/docs/Web/Manifest). Erfordert die Verwendung des CORS-Protokolls für das Abrufen über Cross-Origin.
- `modulepreload`
  - : Nützlich für verbesserte Leistung und relevant für das {{htmlelement('link')}} überall im Dokument, `rel="modulepreload"` gibt dem Browser an, das Skript (und Abhängigkeiten) im Voraus abzurufen und es in der Modulkarte des Dokuments zur späteren Auswertung zu speichern. `modulepreload`-Links können sicherstellen, dass das Abrufen im Netzwerk erfolgt, während das Modul bereit (aber nicht ausgewertet) in der Modulkarte ist, bevor es unbedingt benötigt wird. Siehe auch [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die `next`-Werte geben an, dass das aktuelle Dokument Teil einer Reihe ist, und dass das nächste Dokument in der Serie das referenzierte Dokument ist. Wenn es in einem `<link>` enthalten ist, können Browser annehmen, dass dieses Dokument als nächstes abgerufen wird, und es als Ressource-Hinweis behandeln.
- `nofollow`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das `nofollow`-Schlüsselwort teilt Suchmaschinen-Spidern mit, dass sie die Beziehung des Links ignorieren sollen. Die nofollow Beziehung kann anzeigen, dass der Besitzer des aktuellen Dokuments das referenzierte Dokument nicht befürwortet. Es wird oft von Suchmaschinenoptimierern eingefügt, die vortäuschen, ihre Link-Farmen seien keine Spam-Seiten.
- `noopener`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, erstellt einen obersten Browserkontext, der kein Hilfsbrowserkontext ist, wenn der Hyperlink einen dieser zu Beginn erstellen würde (d. h., hat einen geeigneten `target`-Attribut-Wert). Mit anderen Worten, es lässt den Link so verhalten, als ob [`window.opener`](/de/docs/Web/API/Window/opener) null wäre und `target="_parent"` gesetzt wäre.

    Dies ist das Gegenteil von [`opener`](#opener).

- `noreferrer`
  - : Relevant für {{htmlelement('form')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, das Einfügen dieses Werts lässt den Referrer unbekannt (kein `Referer`-Header wird enthalten) und erstellt einen obersten Browserkontext, als ob `noopener` auch gesetzt wäre.
- `opener`
  - : Erstellt einen Hilfsbrowserkontext, wenn der Hyperlink andernfalls einen obersten Browserkontext erstellen würde, der kein Hilfsbrowserkontext ist (d. h., hat `"_blank"` als `target`-Attributwert). Effektiv das Gegenteil von [noopener](#noopener).
- `pingback`
  - : Gibt die Adresse des Pingback-Servers an, der Pingbacks an das aktuelle Dokument verarbeitet. Siehe die [Pingback-Spezifikation](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Bietet dem Browser einen Hinweis, dass er die Verbindung zur verlinkten Website im Voraus ohne Offenlegung persönlicher Informationen oder Herunterladen von Inhalten öffnen soll, sodass beim Folgen des Links die verlinkten Inhalte schneller abgerufen werden können.
- `prefetch`
  - : Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und zwischenspeichern soll, da sie wahrscheinlich für eine nachfolgende Navigation benötigt wird.
    Siehe [prefetch](/de/docs/Glossary/prefetch) für weitere Informationen.
- `preload`
  - : Gibt an, dass der Benutzeragent die Zielressource im Voraus für die aktuelle Navigation gemäß der potenziellen Zielbestimmung abrufen und zwischenspeichern muss, die durch das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut angegeben wird (und die Priorität, die mit dem entsprechenden Ziel verbunden ist). Siehe die Seite für den [`preload`](/de/docs/Web/HTML/Attributes/rel/preload)-Wert.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, dass der Benutzeragent die Zielressource im Voraus abrufen und in einer Weise verarbeiten soll, die dazu beiträgt, in Zukunft eine schnellere Antwort zu liefern, indem beispielsweise ihre Unterressourcen abgerufen oder einige Rendering-Vorgänge durchgeführt werden.
- `prev`

  - : Ähnlich wie das `next`-Schlüsselwort relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}, die `prev`-Werte geben an, dass das aktuelle Dokument ein Teil einer Serie ist, und dass der Link ein vorhergehendes Dokument in der Serie referenziert.

    Hinweis: Das Synonym `previous` ist falsch und sollte nicht verwendet werden.

- `privacy-policy`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, gibt der `privacy-policy`-Wert an, dass das referenzierte Dokument die Datenschutzrichtlinie ist, die die Datenerfassungs- und Nutzungspraktiken des aktuellen Dokuments beschreibt.

- `search`

  - : Relevant für {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, und {{htmlelement('area')}}-Elemente, die `search`-Schlüsselwörter gibt an, dass der Hyperlink auf ein Dokument verweist, dessen Benutzeroberfläche speziell zum Suchen im aktuellen Dokument, der Website und verwandten Ressourcen ausgelegt ist, und einen Link zu einer Ressource bereitstellt, die zum Suchen verwendet werden kann.

    Wenn das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut auf `application/opensearchdescription+xml` gesetzt ist, ist die Ressource ein [OpenSearch](/de/docs/Web/OpenSearch)-Plugin, das einfach zur Benutzeroberfläche von Firefox hinzugefügt werden kann.

- `stylesheet`

  - : Gültig für das {{htmlelement('link')}}-Element, importiert es eine externe Ressource, die als Stylesheet verwendet werden soll. Das [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut ist nicht erforderlich, wenn es sich um ein `text/css`-Stylesheet handelt, da dies der Standardwert ist. Wenn es sich nicht um ein `text/css`-Stylesheet handelt, ist es am besten, den Typ anzugeben.

    Während dieses Attribut den Link als ein Stylesheet definiert, wirkt sich die Interaktion mit anderen Attributen und anderen Schlüsselbegriffen innerhalb des rel-Werts darauf aus, ob das Stylesheet heruntergeladen und/oder verwendet wird.

    Wenn in Verbindung mit dem Schlüsselwort [`alternate`](#alternate) verwendet, definiert es ein alternatives Stylesheet. In diesem Fall einen nicht leeren [`title`](/de/docs/Web/HTML/Element/link#title) einschließen.

    Das externe Stylesheet wird weder verwendet noch heruntergeladen, wenn die Medien den Wert des [`media`](/de/docs/Web/HTML/Element/link#media)-Attributs nicht erfüllen.

    Erfordert die Verwendung des CORS-Protokolls für das Abrufen über Cross-Origin.

- `tag`

  - : Gültig für die {{htmlelement('a')}}- und {{htmlelement('area')}}-Elemente; es gibt einen Tag an (identifiziert durch die angegebene Adresse), der auf das aktuelle Dokument angewendet wird. Der Tag-Wert gibt an, dass der Link auf ein Dokument verweist, das einen Tag beschreibt, der auf das Dokument angewendet wird, auf dem es sich befindet. Dieser Linktyp ist nicht für Tags innerhalb einer Tagwolke gedacht, da diese Tags auf eine Gruppe von Seiten angewendet werden, wohingegen der `tag`-Wert des `rel`-Attributs für ein einzelnes Dokument ist.

- `terms-of-service`

  - : Gültig für {{htmlelement('a')}}, {{htmlelement('area')}}, und {{htmlelement('link')}}-Elemente, der `terms-of-service`-Wert gibt an, dass das referenzierte Dokument die Nutzungsbedingungen ist, die die Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und den Benutzern beschreiben, die das bereitgestellte Dokument verwenden möchten.

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
