---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{DefaultAPISidebar("Topics API")}}{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browserherstellern abgelehnt.
> Siehe den Abschnitt [Standards Positionen](#standards_positionen) unten für Details.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Registrierung](#registrierung) für Details, welche Teilfunktionen durch die Registrierung gesperrt sind.

Die **Topics API** bietet Entwicklern einen Mechanismus, um Anwendungsfälle wie **interessensbasierte Werbung (IBA)** basierend auf Themen zu implementieren, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt diese Informationen durch den Entwickler zu sammeln, indem die Reise des Benutzers über verschiedene Websites mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nachverfolgt wird.

## Konzepte und Nutzung

Ein typischer Mechanismus für Werbung im Web beinhaltet, dass ein Benutzer **Publisher**-Seiten besucht, die eine Werbetechnologie-Plattform verwenden, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Publisher wird dafür bezahlt, die Anzeigen anzuzeigen, was dazu beiträgt, seinen Inhalt zu finanzieren, und mehr Geschäfte werden auf die Seiten der Werbetreibenden geleitet.

Der obige Prozess kann durch interessensbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass den Benutzern, wenn sie die Publisher-Seiten besuchen, eine **personalisierte** Auswahl an Anzeigen basierend auf ihren Interessen angezeigt wird. Ihre Interessen werden von Websites abgeleitet, die sie zuvor besucht haben. In der Vergangenheit wurden Drittanbieter-Cookies verwendet, um Informationen über die Interessen der Benutzer zu sammeln, aber Browser schränken zunehmend die Verfügbarkeit solcher Cookies für eine größer werdende Anzahl von Benutzern ein. Die Topics API bietet einen Teil des Weges zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht auf Benutzerverfolgung angewiesen ist.

Zuerst leitet der Browser die Interessen eines Benutzers aus den URLs von Webseiten ab, die von Werbetechnologie-`<iframe>`s eingebettet sind. Diese Interessen werden bestimmten **Interessensgebieten** zugeordnet, und der Browser berechnet und speichert das Top-Interesse der Benutzer (d.h. das Thema, dem ihre Interessen am häufigsten zugeordnet wurden) am Ende jeder **Epoche**. Eine Epoche beträgt standardmäßig eine Woche. Das Top-Interesse wird jede Woche aktualisiert, sodass Interessen aktuell bleiben und Benutzer keine Anzeigen mehr zu Themen sehen, an denen sie kein Interesse mehr haben.

> [!NOTE]
> Dieser Prozess erfolgt nur auf Websites, auf denen ein Feature der Topics API verwendet wird (siehe [Welche API-Features ermöglichen die Topics API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics API diese abrufen und an eine Werbe-Technologie-Plattform senden. Die Plattform kann dann diese Themen verwenden, um die Anzeigen zu personalisieren, die sie dem Benutzer präsentieren. Die API hilft, die Privatsphäre zu wahren, indem _nur Themen an einen API-Aufrufer zurückgegeben werden, die von ihnen auf Seiten, die vom aktuellen Benutzer besucht wurden, beobachtet wurden_.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für eine Erklärung, wie die API funktioniert.

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, sind in einem öffentlich zugänglichen [Taxonomie von Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie zu einer Ressource wird, die von vertrauenswürdigen Mitgliedern des Ökosystems gepflegt wird. Die Taxonomie wurde menschlich kuratiert, um Kategorien auszuschließen, die allgemein als sensibel betrachtet werden, wie etwa Ethnizität oder sexuelle Orientierung.

## Schnittstellen

Die Topics API hat keine eigenen speziellen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer darstellen, eines aus jeder der letzten drei Epochen. Standardmäßig bewirkt die Methode auch, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, damit der Hostname der Seite später bei der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die `browsingTopics`-Option
  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die bestimmt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die zugehörige {{htmlelement("iframe")}}-Quelle gesendet werden sollen. Dies spiegelt den `browsingtopics`-Inhaltsattributwert wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollen.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Werbe-Technologieplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse zu markieren, die aus der URL einer aufrufenden Seite abgeleitet wurden (d.h. die Seite, auf der das Werbetechnologie-`<iframe>` eingebettet ist), wie in der Antwort auf eine Anfrage eines [Features, das die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), beobachtet. Der Browser wird diese Themen anschließend verwenden, um die Top-Themen für den aktuellen Benutzer in zukünftigen Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Direktive
  - : Kontrolliert den Zugang zur Topics API. Wo eine Richtlinie speziell die Verwendung der Topics API untersagt, schlagen alle Versuche, die `Document.browsingTopics()`-Methode aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics` Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Registrierung

Um die Topics API auf Ihren Websites zu verwenden, müssen Sie sie in einem [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, funktionieren die folgenden Teilfunktionen nicht:

- Das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegebene Versprechen wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}} Headers schlägt stillschweigend fehl, und jeder vorhandene `Sec-Browsing-Topics` Header wird gelöscht.

## Beispiele

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für Codebeispiele.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards Positionen

Zwei Browserhersteller {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standards Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
