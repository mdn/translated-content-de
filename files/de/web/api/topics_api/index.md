---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt.
> Siehe den Abschnitt [Standards Positionen](#standards_positionen) unten für weitere Details.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu nutzen. Siehe den Abschnitt [Registrierung](#registrierung) für Details, welche Unterfunktionen durch die Registrierung eingeschränkt sind.

Die **Topics API** bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interessenbasierter Werbung (IBA)**, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler gesammelt zu werden, indem die Reise des Benutzers auf verschiedenen Seiten mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) verfolgt wird.

## Konzepte und Nutzung

Ein typischer Mechanismus zur Werbung im Web umfasst einen Benutzer, der **Publisher**-Seiten besucht, die eine Werbetechnologieplattform nutzen, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Publisher wird bezahlt, um die Anzeigen anzuzeigen, was hilft, ihren Inhalt zu finanzieren, und mehr Geschäft wird zu den Werbetreibenden-Websites geleitet.

Der oben beschriebene Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass den Benutzern bei Besuchen der Publisher-Seiten eine **personalisierte** Auswahl von Anzeigen basierend auf ihren Interessen angezeigt wird. Ihre Interessen werden aus Seiten, die sie zuvor besucht haben, abgeleitet. In der Vergangenheit wurden dafür Drittanbieter-Cookies verwendet, allerdings schränken Browser die Verfügbarkeit von Drittanbieter-Cookies für einen wachsenden Anteil an Benutzern ein. Die Topics API bietet einen Teil des Weges zu diesem Ziel – einen Mechanismus zur Implementierung von IBA, der nicht von der Benutzerverfolgung abhängt.

Zuerst leitet der Browser die Interessen eines Benutzers aus den URLs der Seiten ab, die sie besuchen und auf denen Ad-Tech-`<iframe>`s eingebettet sind. Diese Interessen werden auf spezifische **Interessenthemen** abgebildet, und der Browser berechnet und speichert das Top-Thema des Benutzers (d.h. das Thema, dem ihre Interessen am häufigsten zugeordnet wurden) am Ende jedes **Epochenzeitraums**. Eine Epoche ist standardmäßig eine Woche. Das Top-Thema wird jede Woche aktualisiert, damit Interessen aktuell bleiben und Benutzer keine Anzeigen für Themen sehen, an denen sie nicht mehr interessiert sind.

> [!NOTE]
> Dieser Prozess findet nur auf Seiten statt, auf denen eine Topics-API-Funktion verwendet wird (siehe [Welche API-Funktionen ermöglichen die Topics API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics API diese abrufen und an eine Ad-Tech-Plattform senden. Die Plattform kann dann diese Themen verwenden, um die Anzeigen zu personalisieren, die sie dem Benutzer zeigt. Die API hilft, die Privatsphäre zu schützen, indem _nur Themen an einen API-Aufrufer zurückgegeben werden, die von ihm auf Seiten beobachtet wurden, die der aktuelle Benutzer besucht hat_.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung, wie die API funktioniert.

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, werden in einer öffentlich zugänglichen [Themen-Taxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie zu einer Ressource wird, die von vertrauenswürdigen Ökosystembeiträgern gepflegt wird. Die Taxonomie wurde menschlich kuratiert, um Kategorien auszuschließen, die allgemein als sensibel gelten, wie z. B. Ethnizität oder sexuelle Orientierung.

## Schnittstellen

Die Topics API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Promise zurück, das mit einem Array von Objekten der Top-Themen für den Benutzer aus jeder der letzten drei Epochen erfüllt wird. Standardmäßig sorgt die Methode auch dafür, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die Option `browsingTopics`
  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollten. Dies spiegelt den `browsingtopics`-Content-Attributwert wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das Attribut `browsingtopics`
  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollten.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Ad-Tech-Plattform verwendet werden, um eine auf den Benutzer zugeschnittene Anzeige auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse, die aus der URL einer aufrufenden Seite (d.h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet in der Antwort auf eine durch eine [Funktion, die die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generierte Anfrage zu markieren. Der Browser wird diese Themen anschließend verwenden, um Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Richtlinie
  - : Kontrolliert den Zugriff auf die Topics API. Wenn eine Richtlinie die Verwendung der Topics API speziell verbietet, schlagen alle Versuche, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Registrierung

Um die Topics API auf Ihren Websites zu verwenden, müssen Sie sie in einem [Registrierungsprozess für die Privatsphäre-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, funktionieren die folgenden Unterfunktionen nicht:

- Das Promise, das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegeben wird, wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers schlägt stillschweigend fehl, und jeder vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

## Beispiele

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für Codebeispiele.

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards Positionen

Zwei Browseranbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standards Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
