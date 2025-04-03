---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Positions der Normen](#standardspositionen) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics-API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Einschreibung](#einschreibung) für Details darüber, welche Unterfunktionen durch die Einschreibung gesperrt sind.

Die **Topics-API** bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interessenbasierte Werbung (IBA)** basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler durch Verfolgung des Benutzerverlaufs auf verschiedenen Seiten mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) gesammelt zu werden.

## Konzepte und Anwendung

Ein typischer Mechanismus für Werbung im Web beinhaltet, dass ein Benutzer **Publisher**-Seiten besucht, die eine Werbetechnologie-Plattform (ad tech) nutzen, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Publisher wird dafür bezahlt, die Anzeigen anzuzeigen, was dazu beiträgt, ihre Inhalte zu finanzieren, und mehr Geschäft wird zu den Werbeseiten geführt.

Der obige Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass den Nutzern bei ihrem Besuch auf den Publisher-Seiten eine **personalisierte** Auswahl an Anzeigen basierend auf ihren Interessen angezeigt wird. Ihre Interessen werden von den zuvor besuchten Seiten abgeleitet. In der Vergangenheit wurden Tracking-Cookies von Drittanbietern verwendet, um Informationen über Benutzerinteressen zu sammeln, aber Browser stellen die Verfügbarkeit von Cookies von Drittanbietern für einen zunehmenden Teil der Benutzer ein. Die Topics-API bietet einen Teil des Pfades zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht von der Nutzerverfolgung abhängt.

Zuerst ermittelt der Browser die Interessen eines Benutzers aus den URLs von besuchten Seiten, auf denen ad tech `<iframe>`s eingebettet sind. Diese Interessen werden zu spezifischen **Interessensgebieten** zugeordnet und der Browser berechnet und zeichnet die Top-Themen der Benutzer (d.h. das Thema, zu dem ihre Interessen am häufigsten zugeordnet wurden) am Ende jedes **Epochen** auf. Eine Epoche ist standardmäßig eine Woche. Das Top-Thema wird jede Woche aktualisiert, damit Interessen aktuell bleiben und Benutzer keine Anzeigen für Themen sehen, die sie nicht mehr interessieren.

> [!NOTE]
> Dieser Prozess findet nur auf Websites statt, auf denen eine Funktion der Topics-API verwendet wird (siehe [Welche API-Funktionen ermöglichen die Topics-API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics-API diese abrufen und an eine ad tech-Plattform senden. Die Plattform kann diese Themen dann verwenden, um die Anzeigen zu personalisieren, die sie an den Benutzer senden. Die API hilft, die Privatsphäre zu wahren, indem _nur Themen an einen API-Aufrufer zurückgegeben werden, die von ihnen auf Seiten beobachtet wurden, die der aktuelle Benutzer besucht hat_.

Siehe [Verwendung der Topics-API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung, wie die API funktioniert.

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, sind in einer öffentlich zugänglichen [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie zu einem von vertrauenswürdigen Ökosystem-Beitragenden gepflegten Ressourcen wird. Die Taxonomie wurde von Menschen kuratiert, um Kategorien auszuschließen, die allgemein als sensibel gelten, wie z. B. Ethnizität oder sexuelle Orientierung.

## Schnittstellen

Die Topics-API hat keine eigenen speziellen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer darstellen, eines aus jedem der letzten drei Epochen. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später bei der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die `browsingTopics`-Option
  - : Ein boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollten. Dies spiegelt den Wert des Inhaltsattributs `browsingtopics` wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollen.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer ad tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse, die aus der URL einer aufrufenden Site abgeleitet wurden (d.h. die Site, auf der das ad tech-`<iframe>` eingebettet ist), als in der Antwort auf eine durch eine [Funktion, die die Topics-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generierte Anfrage beobachtet zu markieren. Der Browser wird diese Themen anschließend verwenden, um Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Direktive
  - : Steuert den Zugriff auf die Topics-API. Wo eine Richtlinie die Nutzung der Topics-API explizit untersagt, schlagen alle Versuche fehl, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException).

## Einschreibung

Um die Topics-API auf Ihren Seiten zu verwenden, müssen Sie es in einem [Einschreibungsprozess für die Privacy-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, funktionieren die folgenden Unterfunktionen nicht:

- Das Promise, das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegeben wird, wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers schlägt stillschweigend fehl und ein vorhandener `Sec-Browsing-Topics`-Header wird gelöscht.

## Beispiele

Für vollständige Arbeitsbeispiele siehe:

- [Topics-API-Demo](https://topics-demo.glitch.me/): Zeigt, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([Quellcode ansehen](https://glitch.com/edit/#!/topics-demo)).
- [Topics-API-Header-Demo](https://topics-fetch-demo.glitch.me/): Zeigt, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([Quellcode ansehen](https://glitch.com/edit/#!/topics-fetch-demo)).

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Topics-API inoffizieller Vorschlagsentwurf](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standardspositionen

Zwei Browseranbieter {{Glossary("Web_standards#opposing_standards", "opponieren")}} diese Spezifikation. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com (2023)
