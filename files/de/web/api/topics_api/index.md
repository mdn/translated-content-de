---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Einzelheiten zur Ablehnung.

> [!NOTE]
> Ein [Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu nutzen. Siehe den Abschnitt [Einschreibung](#einschreibung) für Details zu den Unterfunktionen, die durch die Einschreibung eingeschränkt werden.

Die **Topics API** bietet Entwicklern einen Mechanismus, um Anwendungsfälle wie **interessenbasierte Werbung (IBA)** zu implementieren, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler durch Verfolgung der Benutzerreise auf verschiedenen Websites mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) gesammelt zu werden.

## Konzepte und Nutzung

Ein typischer Mechanismus für Werbung im Web besteht darin, dass ein Benutzer **Publisher**-Seiten besucht, die eine Werbetechnologieplattform nutzen, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Publisher wird dafür bezahlt, die Anzeigen anzuzeigen, was zur Finanzierung ihrer Inhalte beiträgt und mehr Geschäft auf die Seiten der Werbetreibenden lenkt.

Dieser Prozess kann effektiver gestaltet werden, indem interessenbasierte Werbung (IBA) eingesetzt wird. Die Idee ist, dass den Benutzern bei ihrem Besuch der Publisher-Seiten eine **personalisierte** Auswahl von Anzeigen basierend auf ihren Interessen gezeigt wird. Ihre Interessen werden aus zuvor besuchten Seiten abgeleitet. In der Vergangenheit wurden Drittanbieter-Tracking-Cookies verwendet, um Informationen zu Benutzerinteressen zu sammeln, aber Browser stellen die Verfügbarkeit dieser Cookies für einen zunehmenden Anteil an Benutzern ein. Die Topics API bietet einen Teil des Weges zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht von der Benutzerverfolgung abhängt.

Zunächst leitet der Browser die Interessen eines Benutzers aus den URLs der besuchten Seiten ab, die eingebettete Werbetechnologie `<iframe>`s enthalten. Diese Interessen werden spezifischen **Interessenthemen** zugeordnet, und der Browser berechnet und speichert das Hauptthema des Benutzers (d.h. das Thema, dem seine Interessen am häufigsten zugeordnet wurden) am Ende jeder **Epoche**. Eine Epoche ist standardmäßig eine Woche. Das Hauptthema wird jede Woche aktualisiert, damit die Interessen aktuell bleiben und Benutzer keine Anzeigen zu Themen sehen, an denen sie nicht mehr interessiert sind.

> [!NOTE]
> Dieser Prozess findet nur auf Seiten statt, auf denen eine Topics API-Funktion verwendet wird (siehe [Welche API-Funktionen ermöglichen die Topics API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics API diese abrufen und an eine Werbetechnologieplattform senden. Die Plattform kann diese Themen dann nutzen, um die Anzeigen, die sie dem Benutzer zeigt, zu personalisieren. Die API hilft, die Privatsphäre zu wahren, indem sie _nur Themen an einen API-Aufrufer zurückgibt, die von ihm beobachtet wurden_ auf den vom aktuellen Benutzer besuchten Seiten.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung, wie die API funktioniert.

### Welche Themen gibt es?

Die verfügbaren Hauptthemen, die der Browser berechnen könnte, sind in einer öffentlich zugänglichen [Taxonomie von Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass es eine Ressource wird, die von vertrauenswürdigen Mitwirkenden des Ökosystems gepflegt wird. Die Taxonomie wurde menschlich kuratiert, um Kategorien auszuschließen, die allgemein als sensibel betrachtet werden, wie Ethnie oder sexuelle Orientierung.

## Schnittstellen

Die Topics API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Hauptthemen für den Benutzer darstellen, je eines aus jedem der letzten drei Epochen. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die `browsingTopics`-Option
  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollten. Dieses spiegelt den Wert des Inhaltsattributs `browsingtopics` wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein boolesches Attribut, das angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollen.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Werbetechnologieplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse, die aus der URL der aufrufenden Seite abgeleitet wurden (d.h. die Seite, auf der das Werbetechnologie-`<iframe>` eingebettet ist), als in der Antwort auf eine von einem [die Topics API ermöglichende Funktion](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generierte Anfrage beobachtet zu markieren. Der Browser wird diese Themen in der Folge verwenden, um Hauptthemen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Richtlinie
  - : Steuert den Zugriff auf die Topics API. Wo eine Richtlinie die Nutzung der Topics API ausdrücklich untersagt, schlagen alle Versuche, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Einschreibung

Um die Topics API auf Ihren Seiten zu verwenden, müssen Sie sie in einem [Einschreibungsprozess für die Datenschutz-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, funktionieren die folgenden Unterfunktionen nicht:

- Das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegebene Versprechen wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Modifizieren des {{httpheader("Sec-Browsing-Topics")}}-Headers schlägt stillschweigend fehl, und vorhandene `Sec-Browsing-Topics`-Header werden gelöscht.

## Beispiele

Für vollständige, funktionierende Beispiele siehe:

- [Topics API-Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API-Header-Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Spezifikationen

Dieses Feature ist Teil eines inoffiziellen Standards und wird im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert.

### Standards-Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
- [Die Datenschutz-Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com (2023)
