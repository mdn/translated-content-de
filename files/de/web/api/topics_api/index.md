---
title: Topics API
slug: Web/API/Topics_API
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{DefaultAPISidebar("Topics API")}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt.
> Details hierzu finden Sie im Abschnitt [Standards-Positionen](#standards-positionen) weiter unten.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu nutzen. Details darüber, welche Unterfunktionen durch die Registrierung gesteuert werden, finden Sie im Abschnitt [Registrierung](#registrierung).

Die **Topics API** bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interessenbasierter Werbung (IBA)**. Dies basiert auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler durch Verfolgung der Benutzeraktivitäten auf verschiedenen Websites mit [Third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) gesammelt.

## Konzepte und Nutzung

Ein typischer Mechanismus für Werbung im Web beinhaltet, dass ein Benutzer **Publisher**-Seiten besucht, die eine Werbetechnologie-Plattform (Ad-Tech-Plattform) verwenden, um Anzeigen für die Produkte oder Dienstleistungen eines **Werbetreibenden** zu schalten. Der Publisher wird für die Anzeige der Anzeigen bezahlt, was dazu beiträgt, seine Inhalte zu finanzieren, und mehr Geschäft zu den Werbetreibenden-Seiten führt.

Der obige Prozess kann durch interessenbasierte Werbung (IBA) effektiver gestaltet werden. Die Idee ist, dass Benutzern bei Besuchen der Publisher-Seiten eine **personalisierte** Auswahl an Anzeigen basierend auf ihren Interessen präsentiert wird. Ihre Interessen werden aus zuvor besuchten Seiten abgeleitet. In der Vergangenheit wurden Third-party-tracking-cookies verwendet, um Informationen über Benutzerinteressen zu sammeln, aber Browser schränken die Verfügbarkeit von Third-party-cookies für einen wachsenden Anteil der Benutzer ein. Die Topics API bietet einen Teil des Weges zu diesem Ziel — einen Mechanismus zur Implementierung von IBA, der nicht auf Benutzertracking angewiesen ist.

Zunächst leitet der Browser die Interessen eines Benutzers von den URLs der besuchten Seiten ab, die Ad-Tech `<iframe>`s eingebettet haben. Diese Interessen werden spezifischen **Themen** zugeordnet, und der Browser berechnet und zeichnet am Ende jeder **Epoche** das Top-Thema der Benutzer auf (d.h. das Thema, dem ihre Interessen am häufigsten zugeordnet wurden). Eine Epoche ist standardmäßig eine Woche. Das Top-Thema wird jede Woche aktualisiert, damit die Interessen aktuell bleiben und Benutzer nicht von Anzeigen zu Themen belästigt werden, an denen sie nicht mehr interessiert sind.

> [!NOTE]
> Dieser Prozess findet nur auf Seiten statt, auf denen eine Funktion der Topics API verwendet wird.

Sobald der Browser ein oder mehrere Themen für einen Benutzer beobachtet hat, kann die Topics API diese abrufen und an eine Ad-Tech-Plattform senden. Diese Plattform kann dann diese Themen verwenden, um die Anzeigen, die sie dem Benutzer präsentieren, zu personalisieren. Die API trägt dazu bei, die Privatsphäre zu wahren, indem _nur Themen an einen API-Aufrufer zurückgegeben werden, die von ihm auf von dem aktuellen Benutzer besuchten Seiten beobachtet wurden_.

### Welche Themen gibt es?

Die verfügbaren Top-Themen, die der Browser berechnen könnte, sind in einer öffentlich zugänglichen [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md) gespeichert. Die anfängliche Taxonomie wurde von Chrome vorgeschlagen, mit der Absicht, dass sie zu einer Ressource wird, die von vertrauenswürdigen Akteuren des Ökosystems gepflegt wird. Die Taxonomie wurde von Menschen kuratiert, um Kategorien auszuschließen, die allgemein als sensibel gelten, wie Ethnizität oder sexuelle Orientierung.

## Schnittstellen

Die Topics API hat keine eigenen, eindeutigen Schnittstellen.

### Erweiterungen anderer Schnittstellen

- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen des Benutzers darstellen, eines aus jeder der letzten drei Epochen. Standardmäßig sorgt die Methode auch dafür, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die `browsingTopics`-Option
  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Wert des `browsingtopics`-Inhaltsattributs wider.

## HTML-Elemente

- {{htmlelement("iframe")}}, das `browsingtopics`-Attribut
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des {{htmlelement("iframe")}} gesendet werden sollen.

## HTTP-Header

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit einer Anfrage, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Wird verwendet, um Themen von Interesse, die von der URL einer aufrufenden Seite abgeleitet wurden (d.h. die Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist), als in der Antwort auf eine von einem Feature, das die Topics API ermöglicht, erstellte Anfrage beobachtet zu markieren. Der Browser wird diese Themen anschließend verwenden, um Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-Direktive
  - : Steuert den Zugang zur Topics API. Wo eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, schlagen alle Versuche, die `Document.browsingTopics()`-Methode aufzurufen oder eine Anfrage mit einem `Sec-Browsing-Topics`-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Registrierung

Um die Topics API auf Ihren Seiten zu verwenden, müssen Sie sie in einem [Registrierungsprozess für das Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) spezifizieren. Wenn Sie dies nicht tun, funktionieren die folgenden Unterfunktionen nicht:

- Das von der [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)-Methode zurückgegebene Versprechen wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
- Das Erstellen oder Ändern des {{httpheader("Sec-Browsing-Topics")}}-Header schlägt ohne Fehlermeldung fehl, und vorhandene `Sec-Browsing-Topics`-Header werden gelöscht.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unoffizieller Vorschlagsentwurf](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

### Standards-Positionen

Zwei Browseranbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-111)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
