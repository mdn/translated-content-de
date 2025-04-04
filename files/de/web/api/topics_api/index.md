---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positions](#standards_positionen) unten.

> [!NOTE]
> Ein [Anmeldeverfahren](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Enrollment](#registrierung) für Details, welche Unterfunktionen durch die Anmeldung eingeschränkt sind.

Die **Topics API** bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interessenbasierter Werbung (IBA)**, beruhend auf Themen, die vom Browser gesammelt werden, während der Benutzer unterschiedliche Seiten besucht, anstatt vom Entwickler gesammelt zu werden, indem die Reise des Benutzers über verschiedene Seiten mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) verfolgt wird.

## Konzepte und Nutzung

Ein typischer Mechanismus für Werbung im Web besteht darin, dass ein Benutzer **Publisher**-Seiten besucht, die eine Werbetechnologie-Plattform (Ad Tech) verwenden, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Publisher wird bezahlt, um die Anzeigen anzuzeigen, was hilft, seine Inhalte zu finanzieren, und mehr Geschäft wird auf die Websites der Werbetreibenden gelenkt.

Dieser Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass bei Besuchen der Publisher-Seiten dem Benutzer eine **personalisierte** Auswahl von Anzeigen basierend auf seinen Interessen präsentiert wird. Ihre Interessen werden aus den zuvor besuchten Seiten abgeleitet. In der Vergangenheit wurden Drittanbieter-Tracking-Cookies verwendet, um Informationen über die Interessen der Benutzer zu sammeln, aber Browser reduzieren zunehmend die Verfügbarkeit von Drittanbieter-Cookies für einen wachsenden Anteil der Benutzer. Die Topics API bietet einen Teil des Weges zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht vom Benutzer-Tracking abhängig ist.

Zunächst leitet der Browser die Interessen eines Benutzers aus den URLs von Seiten ab, die eingebettete Ad Tech `<iframe>`s haben. Diese Interessen werden bestimmten **Interessenthemen** zugeordnet, und der Browser berechnet und speichert das Hauptthema der Benutzer (d.h. das Thema, das ihren Interessen am häufigsten zugeordnet wurde) am Ende jedes **Epoch**. Eine Epoche ist standardmäßig eine Woche. Das Hauptthema wird jede Woche aktualisiert, damit die Interessen aktuell bleiben und die Benutzer keine Anzeigen zu Themen sehen, an denen sie nicht mehr interessiert sind.

> [!NOTE]
> Dieser Prozess geschieht nur auf Seiten, auf denen eine Topics API-Funktion verwendet wird (siehe [Welche API-Funktionen ermöglichen die Topics API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics API diese abrufen und an eine Ad Tech-Plattform senden. Die Plattform kann diese Themen dann verwenden, um die Anzeigen, die sie dem Benutzer präsentieren, zu personalisieren. Die API trägt dazu bei, die Privatsphäre zu schützen, indem _nur Themen an einen API-Aufrufer zurückgegeben werden, die von ihnen auf Seiten, die vom aktuellen Benutzer besucht wurden, beobachtet wurden_.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung, wie die API funktioniert.

### Welche Themen gibt es?

Die verfügbaren Hauptthemen, die der Browser berechnen könnte, sind in einem öffentlich verfügbaren [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie eine von vertrauenswürdigen Ökosystemteilnehmern gepflegte Ressource wird. Die Taxonomie wurde menschlich kuratiert, um Kategorien auszuschließen, die allgemein als sensibel angesehen werden, wie Ethnie oder sexuelle Orientierung.

## Schnittstellen

Die Topics API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Hauptthemen des Benutzers darstellen, je eines aus den letzten drei Epochen. Standardmäßig bewirkt die Methode auch, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die `browsingTopics`-Option
  - : Ein Boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anforderung für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Wert des `browsingtopics`-Inhaltsattributs wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anforderung für die Quelle des {{htmlelement("iframe")}} gesendet werden sollen.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Nutzer zusammen mit einer Anfrage, die von einer Ad Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse, die von der URL der aufrufenden Seite abgeleitet wurden (d.h. die Seite, auf der das Ad Tech `<iframe>` eingebettet ist), als in der Antwort auf eine durch ein [Feature, das die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generierte Anfrage beobachtet zu markieren. Der Browser wird diese Themen anschließend verwenden, um die Hauptthemen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Richtlinie
  - : Kontrolliert den Zugriff auf die Topics API. Wenn eine Richtlinie die Verwendung der Topics API ausdrücklich verbietet, schlagen alle Versuche, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Registrierung

Um die Topics API auf Ihren Seiten zu verwenden, müssen Sie sie in einem [Privacy Sandbox Registrierungsvorgang](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, funktionieren die folgenden Unterfunktionen nicht:

- Das Versprechen, das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegeben wird, wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers schlägt stillschweigend fehl, und alle vorhandenen `Sec-Browsing-Topics`-Header werden gelöscht.

## Beispiele

Für vollständige funktionierende Beispiele siehe:

- [Topics API Demo](https://topics-demo.glitch.me/): Zeigt, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API Header Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie ein `fetch()`-Anforderung mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards Positionen

Zwei Browseranbieter lehnen diese Spezifikation {{Glossary("Web_standards#opposing_standards", "ab")}}. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
