---
title: Themen-API
slug: Web/API/Topics_API
l10n:
  sourceCommit: b88bb62326a0392832590d2910f357b9c9284b98
---

{{DefaultAPISidebar("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards-Positionen](#standards-positionen) weiter unten.

> [!NOTE]
> Um die Themen-API in Ihren Anwendungen zu verwenden, ist ein [Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) erforderlich. Siehe den Abschnitt [Anmeldung](#anmeldung) für Einzelheiten zu den Teilfunktionen, die durch die Anmeldung gesteuert werden.

Die **Themen-API** bietet Entwicklern eine Möglichkeit, Anwendungsfälle wie **interessenbasierte Werbung (IBA)** basierend auf Themen zu implementieren, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt sie vom Entwickler durch das Verfolgen der Benutzernavigation auf verschiedenen Websites mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) zu sammeln.

## Konzepte und Verwendung

Ein typischer Mechanismus für Werbung im Internet besteht darin, dass ein Benutzer **Publisher**-Websites besucht, die eine Werbetechnologie-Plattform (Ad-Tech) nutzen, um Anzeigen für Produkte oder Dienstleistungen eines **Werbetreibenden** zu schalten. Der Publisher wird dafür bezahlt, die Anzeigen zu zeigen, was dazu beiträgt, seine Inhalte zu finanzieren, und es wird mehr Geschäft auf die Websites der Werbetreibenden gelenkt.

Der obige Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass den Benutzern beim Besuch der Publisher-Websites eine **personalisierte** Auswahl an Anzeigen basierend auf ihren Interessen angezeigt wird. Ihre Interessen werden aus zuvor besuchten Websites abgeleitet. In der Vergangenheit wurden Drittanbieter-Tracking-Cookies verwendet, um Informationen über Benutzerinteressen zu sammeln, aber Browser schränken die Verfügbarkeit von Drittanbieter-Cookies für einen zunehmenden Anteil der Benutzer ein. Die Themen-API bietet einen Teil des Weges zu diesem Ziel — ein Mechanismus zur Implementierung von IBA, der nicht vom Benutzer-Tracking abhängt.

Zunächst leitet der Browser die Interessen eines Benutzers aus den URLs von Websites ab, die Ad-Tech-`<iframe>`s eingebettet haben. Diese Interessen werden auf spezifische **Interessenthemen** abgebildet, und der Browser berechnet und zeichnet das Top-Thema der Benutzer auf (d. h. das Thema, zu dem ihre Interessen am häufigsten passten) am Ende jedes **Epochen**. Eine Epoche dauert standardmäßig eine Woche. Das Top-Thema wird jede Woche aktualisiert, damit die Interessen aktuell bleiben und Benutzer keine Anzeigen für Themen sehen, die sie nicht mehr interessieren.

> [!NOTE]
> Dieser Prozess findet nur auf Websites statt, auf denen eine Funktion der Themen-API verwendet wird (siehe [Welche API-Funktionen ermöglichen die Themen-API?](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)).

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Themen-API sie abrufen und an eine Ad-Tech-Plattform senden. Die Plattform kann diese Themen dann nutzen, um die von ihnen bereitgestellten Anzeigen für den Benutzer zu personalisieren. Die API trägt zum Schutz der Privatsphäre bei, indem sie _nur Themen an einen API-Aufrufer zurücksendet, die von ihm_ auf von dem aktuellen Benutzer besuchten Seiten beobachtet wurden.

Weitere Informationen dazu, wie die API funktioniert, finden Sie unter [Verwendung der Themen-API](/de/docs/Web/API/Topics_API/Using).

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, werden in einer öffentlich zugänglichen [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die ursprüngliche Taxonomie wurde von Chrome vorgeschlagen mit der Absicht, dass sie zu einer von vertrauenswürdigen Ökosystembeiträgen gepflegten Ressource wird. Die Taxonomie wurde von Menschen kuratiert, um allgemein als sensibel betrachtete Kategorien wie Ethnizität oder sexuelle Orientierung auszuschließen.

## Schnittstellen

Die Themen-API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Document.browsingTopics()")}}
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer darstellen, eines aus jedem der letzten drei Epochen. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenaufruf als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in die Themenberechnung einfließen kann.
- {{domxref("Window/fetch", "fetch()")}} / {{domxref("Request.Request", "Request()")}}, die `browsingTopics`-Option
  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.
- {{domxref("HTMLIFrameElement.browsingTopics")}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den `browsingtopics`-Inhaltsattributwert wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein boolesches Attribut, das, falls vorhanden, festlegt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollen.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Interessenthemen markiert zu werden, die aus der URL einer aufrufenden Seite (d. h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet in der Antwort auf eine von einer [Funktion, die die Themen-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generierte Anfrage. Der Browser wird diese Themen anschließend verwenden, um Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Direktive
  - : Kontrolliert den Zugriff auf die Themen-API. Wenn eine Richtlinie die Nutzung der Themen-API ausdrücklich untersagt, schlagen alle Versuche, die `Document.browsingTopics()`-Methode aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError`-{{domxref("DOMException")}} fehl.

## Anmeldung

Um die Themen-API auf Ihren Websites zu verwenden, müssen Sie sie in einem [Anmeldeprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) spezifizieren. Wenn Sie dies nicht tun, funktionieren die folgenden Teilfunktionen nicht:

- Das Versprechen, das von der {{domxref("Document.browsingTopics()")}}-Methode zurückgegeben wird, wird mit einem `NotAllowedError`-{{domxref("DOMException")}} abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers schlägt geräuschlos fehl, und ein vorhandener `Sec-Browsing-Topics`-Header wird gelöscht.

## Beispiele

Für vollständige funktionierende Beispiele siehe:

- [Themen-API Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Themen-API Header Demo](https://topics-fetch-demo.glitch.me/): Demonstriert eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header, die verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Themen-API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards-Positionen

Zwei Browseranbieter [lehnen](/de/docs/Glossary/Web_standards#opposing_standards) diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Themen-API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com (2023)
