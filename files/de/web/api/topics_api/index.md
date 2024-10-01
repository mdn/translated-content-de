---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: b88bb62326a0392832590d2910f357b9c9284b98
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positionen](#standards_positionen) unten.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics-API in Ihren Anwendungen zu verwenden. Details, welche Teilfunktionen durch die Registrierung gesperrt sind, finden Sie im Abschnitt [Registrierung](#registrierung).

Die **Topics API** bietet eine Möglichkeit für Entwickler, Anwendungsfälle wie **interessenbasierte Werbung (IBA)** zu implementieren, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler gesammelt zu werden, indem die Reise des Benutzers über verschiedene Websites mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) verfolgt wird.

## Konzepte und Verwendung

Ein typischer Mechanismus zur Werbung im Web besteht darin, dass ein Benutzer **Verlag**-Seiten besucht, die eine Werbetechnologie-Plattform (Ad Tech) verwenden, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Verlag wird für die Anzeige der Anzeigen bezahlt, was hilft, ihre Inhalte zu finanzieren, und mehr Geschäft zu den Werbetreibenden-Websites bringt.

Der oben beschriebene Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass Benutzern, wenn sie die Verlagsseiten besuchen, eine **personalisierte** Auswahl an Anzeigen basierend auf ihren Interessen serviert wird. Ihre Interessen werden von Websites abgeleitet, die sie zuvor besucht haben. In der Vergangenheit wurden Drittanbieter-Cookies verwendet, um Informationen zu Benutzerinteressen zu sammeln, aber Browser schränken die Verfügbarkeit von Drittanbieter-Cookies für eine zunehmende Anzahl von Benutzern immer mehr ein. Die Topics API bietet einen Teil des Weges zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht auf Benutzerverfolgung angewiesen ist.

Zunächst leitet der Browser die Interessen eines Benutzers aus den URLs der Websites ab, die sie besuchen und in denen Ad-Tech-`<iframe>`s eingebettet sind. Diese Interessen werden spezifischen **Interessenthemen** zugeordnet, und der Browser berechnet und zeichnet das Hauptthema der Benutzer (d. h. das Thema, dem ihre Interessen am häufigsten zugeordnet wurden) am Ende jeder **Epoche** auf. Eine Epoche dauert standardmäßig eine Woche. Das Hauptthema wird jede Woche aktualisiert, damit Interessen aktuell bleiben und Benutzer keine Anzeigen für Themen sehen, an denen sie nicht mehr interessiert sind.

> [!NOTE]
> Dieser Prozess findet nur auf Websites statt, auf denen ein Feature der Topics API verwendet wird (siehe [Welche API-Funktionen aktivieren die Topics API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics API diese abrufen und an eine Ad-Tech-Plattform senden. Die Plattform kann dann diese Themen verwenden, um die Anzeigen zu personalisieren, die sie dem Benutzer serviert. Die API trägt dazu bei, die Privatsphäre zu schützen, indem _nur Themen an einen API-Aufrufer zurückgegeben werden, die von ihm auf vom aktuellen Benutzer besuchten Seiten beobachtet wurden_.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung, wie die API funktioniert.

### Welche Themen gibt es?

Die verfügbaren Hauptthemen, die der Browser berechnen könnte, sind in einer öffentlich zugänglichen [Interessen-Taxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die ursprüngliche Taxonomie wurde von Chrome vorgeschlagen, mit dem Ziel, dass sie eine Ressource wird, die von vertrauenswürdigen Ökosystem-Beitragenden gepflegt wird. Die Taxonomie wurde menschlich kuratiert, um Kategorien auszuschließen, die allgemein als sensibel betrachtet werden, wie ethnische Zugehörigkeit oder sexuelle Orientierung.

## Schnittstellen

Die Topics API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Hauptthemen für den Benutzer darstellen, eins aus jeder der letzten drei Epochen. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Anrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die Option `browsingTopics`
  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Attributwert `browsingtopics` wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das Attribut `browsingtopics`
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollen.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Ad Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Interessenthemen, die aus der URL einer aufrufenden Seite abgeleitet wurden (d. h. die Seite, in der das Ad Tech-`<iframe>` eingebettet ist), in der Antwort auf eine von einer [Funktion, die die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) erstellte Anfrage, als beobachtet zu markieren. Der Browser wird diese Themen anschließend verwenden, um Hauptthemen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die Richtlinie {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}
  - : Steuert den Zugriff auf die Topics API. Wenn eine Richtlinie die Verwendung der Topics API ausdrücklich verweigert, schlagen alle Versuche, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Registrierung

Um die Topics API auf Ihren Websites zu verwenden, müssen Sie sie in einem [Anmeldeverfahren für die Datenschutzzone](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, funktionieren die folgenden Teilfunktionen nicht:

- Das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegebene Promise wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers wird stillschweigend fehlschlagen, und ein vorhandener `Sec-Browsing-Topics`-Header wird gelöscht.

## Beispiele

Für vollständige funktionierende Beispiele siehe:

- [Topics API-Demo](https://topics-demo.glitch.me/): Zeigt, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API-Header-Demo](https://topics-fetch-demo.glitch.me/): Zeigt, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards positionen

Zwei Browseranbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com (2023)
