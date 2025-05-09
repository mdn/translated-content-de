---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: a8c6558339dafb20c51bc34b2d75c8c1343634ac
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt.
> Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Details.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics-API in Ihren Anwendungen zu nutzen. Siehe den Abschnitt [Registrierung](#registrierung) für Details, welche Teilfunktionen durch die Registrierung aktiviert werden.

Die **Topics-API** bietet Entwicklern eine Möglichkeit, Anwendungsfälle wie **interessenbasierte Werbung (IBA)** zu implementieren, indem sie sich auf Themen stützte, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht. Dies geschieht anstatt durch den Entwickler, der die Reise des Benutzers über verschiedene Websites mit [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) verfolgt.

## Konzepte und Nutzung

Ein typischer Mechanismus für Werbung im Web beinhaltet, dass ein Benutzer **Publisher**-Seiten besucht, die eine Werbetechnologie-Plattform (Ad-Tech) nutzen, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Publisher wird für das Anzeigen der Anzeigen bezahlt, was dazu beiträgt, seine Inhalte zu finanzieren, und mehr Geschäfte werden zu Werbetreibenden-Seiten geführt.

Der oben beschriebene Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass den Benutzern, wenn sie die Publisher-Seiten besuchen, eine **personalisierte** Auswahl von Anzeigen basierend auf ihren Interessen serviert wird. Ihre Interessen werden aus Seiten abgeleitet, die sie zuvor besucht haben. In der Vergangenheit wurden Third-Party-Tracking-Cookies verwendet, um Informationen über Benutzerinteressen zu sammeln, aber Browser schränken zunehmend die Verfügbarkeit von Third-Party-Cookies ein. Die Topics-API bietet einen Teil des Weges zu diesem Ziel — ein Mechanismus zur Implementierung von IBA, der nicht von Benutzer-Tracking abhängig ist.

Zuerst leitet der Browser die Interessen eines Nutzers aus den URLs der von ihnen besuchten Websites ab, die Ad-Tech-`<iframe>`s eingebettet haben. Diese Interessen werden spezifischen **Interessensgebieten** zugeordnet, und der Browser berechnet und zeichnet am Ende jeder **Epoche** das Top-Thema der Nutzer auf (d.h. das Thema, das ihren Interessen am häufigsten zugeordnet wurde). Eine Epoche ist standardmäßig eine Woche. Das Top-Thema wird jede Woche aktualisiert, damit die Interessen aktuell bleiben und Nutzer nicht beginnen, Anzeigen für Themen zu sehen, an denen sie nicht mehr interessiert sind.

> [!NOTE]
> Dieser Prozess erfolgt nur auf Websites, auf denen ein Topics-API-Feature verwendet wird (siehe [Welche API-Features ermöglichen die Topics-API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Nutzer beobachtet hat, kann die Topics-API diese abrufen und an eine Ad-Tech-Plattform senden. Die Plattform kann diese Themen dann nutzen, um die Anzeigen, die sie dem Nutzer zeigt, zu personalisieren. Die API hilft, die Privatsphäre zu wahren, indem sie _nur Themen an einen API-Aufrufer zurückgibt, die von ihnen auf den vom aktuellen Nutzer besuchten Seiten beobachtet wurden_.

Siehe [Verwendung der Topics-API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung, wie die API funktioniert.

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, sind in einer öffentlich zugänglichen [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die initiale Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie zu einer Ressource wird, die von vertrauenswürdigen Partnern des Ökosystems gepflegt wird. Die Taxonomie wurde von Menschen kuratiert, um Kategorien auszuschließen, die allgemein als sensibel angesehen werden, wie Ethnie oder sexuelle Orientierung.

## Schnittstellen

Die Topics-API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer darstellen, jedes aus den letzten drei Epochen. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später bei der Berechnung der Themen verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die `browsingTopics`-Option
  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Nutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine Boolean-Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Nutzer mit der Anfrage für die zugehörige Quelle des {{htmlelement("iframe")}} gesendet werden sollten. Dies spiegelt den Attributwert `browsingtopics` wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Nutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollten.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Nutzer zusammen mit einer Anfrage, die von einer Ad-Tech-Plattform genutzt werden, um eine personalisierte Anzeige auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse, die aus der URL einer aufrufenden Website abgeleitet wurden (d.h. der Website, auf der das Ad-Tech-`<iframe>` eingebettet ist), als im Antwort auf eine durch ein [Feature, das die Topics-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generierte Anfrage beobachtet zu markieren. Der Browser wird diese Themen anschließend verwenden, um für die aktuellen und zukünftigen Epochen Top-Themen für den Nutzer zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Direktive
  - : Kontrolliert den Zugriff auf die Topics-API. Wenn eine Richtlinie ausdrücklich die Nutzung der Topics-API untersagt, werden alle Versuche, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Registrierung

Um die Topics-API auf Ihren Seiten zu verwenden, müssen Sie sie in einem [Privacy Sandbox-Enrolment-Prozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Andernfalls werden die folgenden Teilfunktionen nicht funktionieren:

- Das Promise, das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegeben wird, wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers wird stillschweigend fehlschlagen, und jeder vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

## Beispiele

Für vollständig funktionierende Beispiele siehe:

- [Topics API-Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API-Header-Demo](https://topics-fetch-demo.glitch.me/): Demonstriert eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header kann verwendet werden, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards-Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics-API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
