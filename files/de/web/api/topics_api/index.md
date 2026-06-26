---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

{{DefaultAPISidebar("Topics API")}}{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt.
> Details finden Sie im Abschnitt [Standards Positionen](#standards_positionen) unten.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) ist erforderlich, um die Topics-API in Ihren Anwendungen zu verwenden. Einzelheiten zu den durch die Registrierung gesperrten Sub-Features finden Sie im Abschnitt [Registrierung](#registrierung).

Die **Topics-API** bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interessenbasierte Werbung (IBA)**, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt sie vom Entwickler durch Verfolgen der Benutzerreise über verschiedene Websites mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu sammeln.

## Konzepte und Nutzung

Ein typischer Mechanismus zur Werbung im Web umfasst das Besuchen von **Publisher**-Seiten durch einen Benutzer, die eine Werbetechnologie-Plattform nutzen, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu veröffentlichen. Der Publisher wird für die Anzeige der Anzeigen bezahlt, was zur Finanzierung ihres Inhalts beiträgt, und mehr Geschäft wird auf Werbeseiten gelenkt.

Der oben beschriebene Prozess kann mithilfe interessenbasierter Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass Benutzern, wenn sie die Publisher-Seiten besuchen, eine **personalisierte** Auswahl von Anzeigen basierend auf ihren Interessen serviert wird. Ihre Interessen werden aus den zuvor besuchten Seiten abgeleitet. In der Vergangenheit wurden Drittanbieter-Tracking-Cookies verwendet, um Informationen zu Benutzerinteressen zu sammeln, aber Browser schalten die Verfügbarkeit von Drittanbieter-Cookies für immer mehr Benutzer aus. Die Topics-API bietet einen Teil des Pfades zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht von der Benutzerverfolgung abhängt.

Zuerst leitet der Browser die Interessen eines Benutzers aus den URLs von Seiten ab, die er besucht und auf denen Werbetechnologie-`<iframe>`s eingebettet sind. Diese Interessen werden auf bestimmte **Interessenthemen** abgebildet, und der Browser berechnet und zeichnet das Top-Thema des Benutzers (d.h. das Thema, auf das ihre Interessen am häufigsten abgebildet wurden) am Ende jeder **Epoche** auf. Eine Epoche dauert standardmäßig eine Woche. Das Top-Thema wird jede Woche aktualisiert, damit die Interessen aktuell bleiben und Benutzer keine Anzeigen für Themen sehen, die sie nicht mehr interessieren.

> [!NOTE]
> Dieser Prozess erfolgt nur auf Websites, auf denen eine Topics-API-Funktion verwendet wird.

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics-API diese abrufen und an eine Werbetechnologie-Plattform schicken. Die Plattform kann diese Themen dann verwenden, um die Anzeigen zu personalisieren, die sie dem Benutzer servieren. Die API hilft, die Privatsphäre zu wahren, indem sie _nur Themen an einen API-Aufrufer zurückgibt, die von ihnen auf von dem aktuellen Benutzer besuchten Seiten beobachtet wurden_.

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, sind in einer öffentlich zugänglichen [Interessentaxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie eine von vertrauenswürdigen Ökosystembeiträgern gepflegte Ressource wird. Die Taxonomie wurde menschlich kuratiert, um allgemein als sensibel angesehene Kategorien auszuschließen, wie Ethnizität oder sexuelle Orientierung.

## Schnittstellen

Die Topics-API hat keine eigenen spezifischen Schnittstellen.

### Erweiterungen anderer Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer repräsentieren, eines aus jedem der letzten drei Epochen. Standardmäßig bewirkt die Methode auch, dass der Browser den aktuellen Seitenbesuch als vom Anrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die `browsingTopics`-Option
  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollten. Dies spiegelt den Wert des `browsingtopics`-Inhaltsattributs wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollten.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Werbetechnologie-Plattform verwendet werden, um eine personalisierte Anzeige zur Anzeige auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse, die aus der URL der anrufenden Seite abgeleitet wurden (d.h. der Seite, auf der das Werbetechnologie-`<iframe>` eingebettet ist), als in der Antwort auf eine durch ein Feature generierte Anfrage, das die Topics-API ermöglicht, markiert. Der Browser wird diese Themen anschließend verwenden, um Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Direktive
  - : Kontrolliert den Zugriff auf die Topics-API. Wo eine Richtlinie die Nutzung der Topics-API ausdrücklich untersagt, werden alle Versuche, die Methode `Document.browsingTopics()` aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Registrierung

Um die Topics-API auf Ihren Seiten zu verwenden, müssen Sie sie in einem [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) spezifizieren. Wenn Sie dies nicht tun, funktionieren die folgenden Sub-Features nicht:

- Das von der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) zurückgegebene Versprechen wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Headers wird stillschweigend fehlschlagen, und jeder vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

## Spezifikationen

Dieses Feature ist Teil eines inoffiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
