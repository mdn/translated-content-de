---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: b88bb62326a0392832590d2910f357b9c9284b98
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Merkmal wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standardspositionen](#standardspositionen) unten.

> [!NOTE]
> Um die Topics API in Ihren Anwendungen zu verwenden, ist ein [Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) erforderlich. Siehe den Abschnitt [Einschreibung](#einschreibung) für Details, welche Unterfunktionen durch die Einschreibung gesteuert werden.

Die **Topics API** bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interessenbasierte Werbung (IBA)**, basierend auf Themen, die der Browser sammelt, während der Benutzer verschiedene Seiten aufruft, anstatt vom Entwickler durch das Verfolgen der Benutzerreise auf verschiedenen Websites mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) gesammelt zu werden.

## Konzepte und Nutzung

Ein typischer Mechanismus für Werbung im Web besteht darin, dass ein Benutzer **Publisher**-Seiten besucht, die eine Werbetechnologie-Plattform (Ad-Tech) nutzen, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu schalten. Der Publisher wird bezahlt, um die Anzeigen anzuzeigen, was hilft, ihre Inhalte zu finanzieren, und mehr Geschäftsaktivität auf Werbetreibendenseiten lenkt.

Der obige Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass Benutzern, wenn sie die Publisher-Seiten besuchen, eine **personalisierte** Auswahl an Anzeigen basierend auf ihren Interessen angezeigt wird. Ihre Interessen werden aus zuvor besuchten Seiten abgeleitet. In der Vergangenheit wurden Drittanbieter-Tracking-Cookies verwendet, um Informationen zu Benutzerinteressen zu sammeln, aber Browser schränken den Zugriff auf Drittanbieter-Cookies für einen zunehmend höheren Anteil an Benutzern ein. Die Topics API bietet einen Teil des Weges zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht von der Benutzerverfolgung abhängt.

Der Browser leitet zunächst die Interessen eines Benutzers von den URLs der von ihnen besuchten Websites ab, auf denen Ad-Tech-`<iframe>`s eingebettet sind. Diese Interessen werden spezifischen **Interessenthemen** zugeordnet, und der Browser berechnet und protokolliert das Hauptthema der Benutzer (d.h. das Thema, das ihren Interessen am häufigsten zugeordnet wurde) am Ende jeder **Epoche**. Eine Epoche ist standardmäßig eine Woche. Das Hauptthema wird jede Woche aktualisiert, damit die Interessen aktuell bleiben und Benutzer keine Anzeigen für Themen sehen, für die sie kein Interesse mehr haben.

> [!NOTE]
> Dieser Prozess findet nur auf Webseiten statt, auf denen eine Funktion der Topics API genutzt wird (siehe [Welche API-Funktionen ermöglichen die Topics API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer festgestellt hat, kann die Topics API diese abrufen und an eine Ad-Tech-Plattform senden. Die Plattform kann dann diese Themen nutzen, um die Anzeigen, die sie dem Benutzer bereitstellen, zu personalisieren. Die API trägt zum Schutz der Privatsphäre bei, indem _nur Themen an einen API-Aufrufer zurückgegeben werden, die von ihm auf den von dem aktuellen Benutzer besuchten Seiten beobachtet wurden_.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung zur Funktionsweise der API.

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, sind in einer öffentlich zugänglichen [Taxonomie von Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie zu einer Ressource wird, die von vertrauenswürdigen Akteuren im Ökosystem gepflegt wird. Die Taxonomie wurde menschlich kuratiert, um Kategorien auszuschließen, die allgemein als sensibel betrachtet werden, wie Ethnie oder sexuelle Orientierung.

## Schnittstellen

Die Topics API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer darstellen, eines aus jeder der letzten drei Epochen. Standardmäßig bewirkt die Methode auch, dass der Browser den aktuellen Seitenaufruf als vom Aufrufer beobachtet protokolliert, sodass der Hostname der Seite später bei der Berechnung der Themen verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die Option `browsingTopics`
  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Ein Boolean-Eigenschaft, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollten. Dies spiegelt den Wert des Inhaltsattributs `browsingtopics` wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das Attribut `browsingtopics`
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollten.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige zum Anzeigen auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse zu markieren, die aus der URL einer aufrufenden Seite abgeleitet wurden (d.h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist), als im Antwort auf eine Anfrage beobachtet, die durch eine [Funktion, die die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde. Der Browser wird diese Themen anschließend verwenden, um Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Richtlinie
  - : Kontrolliert den Zugriff auf die Topics API. Wo eine Richtlinie die Nutzung der Topics API ausdrücklich untersagt, wird jeder Versuch, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) scheitern.

## Einschreibung

Um die Topics API auf Ihren Webseiten zu verwenden, müssen Sie sie in einem [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) spezifizieren. Wenn Sie dies nicht tun, funktionieren die folgenden Unterfunktionen nicht:

- Das durch die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegebene Versprechen wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers wird stillschweigend fehlschlagen, und jeder vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

## Beispiele

Für vollständige funktionierende Beispiele siehe:

- [Topics API Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API Header Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Spezifikationen

Dieses Merkmal ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standardspositionen

Zwei Browser-Anbieter [lehnen](/de/docs/Glossary/Web_standards#opposing_standards) diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com (2023)
