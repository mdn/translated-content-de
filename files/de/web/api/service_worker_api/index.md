---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erfahrungen ermöglichen, Netzwerkanforderungen abfangen und geeignete Maßnahmen ergreifen, je nachdem, ob das Netzwerk verfügbar ist, und Aktualisierungen von auf dem Server gespeicherten Ressourcen durchführen. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrundsynchronisations-APIs.

## Konzepte und Verwendung von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen eine Ursprungsadresse und einen Pfad registriert wird. Er nimmt die Form einer JavaScript-Datei an, die die Webseite/das Webprojekt, mit dem er verbunden ist, steuern kann, indem sie Navigations- und Ressourcenanforderungen abfängt und modifiziert sowie Ressourcen sehr detailliert zwischenspeichert, um Ihnen die vollständige Kontrolle darüber zu geben, wie sich Ihre App in bestimmten Situationen verhält (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Sie haben daher keinen Zugriff auf das DOM und laufen auf einem anderen Thread als das Haupt-JavaScript, das Ihre App betreibt. Sie sind nicht blockierend und darauf ausgelegt, vollständig asynchron zu sein. Infolgedessen können APIs wie das synchrone [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#browser_compatibility) wird eine Ausnahme auslösen, wenn es im globalen Kontext eines Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind erlaubt.

Aus Sicherheitsgründen laufen Service Worker nur über HTTPS. Besonders hervorzuheben ist, dass HTTP-Verbindungen anfällig für schädliche Code-Injektionen durch {{Glossary("MitM", "man in the middle")}}-Angriffe sind, und solche Angriffe könnten schlimmer sein, wenn sie Zugriff auf diese leistungsstarken APIs erhalten. In Firefox sind Service Worker APIs auch versteckt und können nicht verwendet werden, wenn der Nutzer sich im [Privaten Modus](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) befindet.

> [!NOTE]
> In Firefox können Sie für Testzwecke Service Worker über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** im Firefox-Entwicklertools-Optionen/Zahnradmenü.

> [!NOTE]
> Im Gegensatz zu vorherigen Versuchen in diesem Bereich, wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), machen Service Worker keine Annahmen darüber, was Sie tun möchten, sondern versagen, wenn diese Annahmen nicht genau passen. Stattdessen geben Service Worker Ihnen viel granularere Kontrolle.

> [!NOTE]
> Service Worker nutzen intensiv [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie in der Regel auf Antworten warten, die durchkommen, nach denen sie dann mit einer Erfolg- oder Fehlaktion antworten. Die Architektur von Promises ist dafür ideal.

### Registrierung

Ein Service Worker wird zuerst mit der Methode {{DOMxRef("ServiceWorkerContainer.register()")}} registriert. Sollte dies erfolgreich sein, wird Ihr Service Worker für den Client heruntergeladen und versucht, Installation/Aktivierung (siehe unten) für vom Nutzer innerhalb des gesamten Ursprungs oder eines von Ihnen angegebenen Teilbereichs aufgerufene URLs durchzuführen.

### Herunterladen, Installieren und Aktivieren

Zu diesem Zeitpunkt folgt Ihr Service Worker dem folgenden Lebenszyklus:

1. Herunterladen
2. Installieren
3. Aktivieren

Der Service Worker wird sofort heruntergeladen, wenn ein Nutzer erstmals eine von einem Service Worker kontrollierte Seite/Webseite aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer Seite im Geltungsbereich stattfindet.
- Ein Ereignis auf den Service Worker ausgelöst wird und dieser in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei neu ist — entweder anders als ein existierender Service Worker (byteweise verglichen) oder der erste für diese Seite/Website erkannte Service Worker.

Wenn es das erste Mal ist, dass ein Service Worker verfügbar gemacht wurde, wird die Installation versucht und nach erfolgreicher Installation aktiviert.

Wenn bereits ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert — an diesem Punkt wird sie als der _wartende Worker_ bezeichnet. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die den alten Service Worker noch verwenden. Sobald keine Seiten mehr geladen sind, aktiviert sich der neue Service Worker (und wird zum _aktiven Worker_). Die Aktivierung kann früher erfolgen, indem {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} benutzt wird, und bestehende Seiten können vom aktiven Worker beansprucht werden, indem {{DOMxRef("Clients.claim()")}} verwendet wird.

Sie können auf das {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}-Ereignis lauschen; eine standardmäßige Aktion ist, Ihren Service Worker für die Verwendung vorzubereiten, wenn dieses ausgelöst wird, beispielsweise durch das Erstellen eines Caches mithilfe der eingebauten Speicher-API und dem Hinzufügen von Ressourcen darin, die Sie für den Offline-Betrieb Ihrer App benötigen werden.

Es gibt auch ein {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}-Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist in der Regel eine gute Gelegenheit, alte Caches und andere mit der vorherigen Version Ihres Service Workers verknüpfte Dinge zu bereinigen.

Ihr Service Worker kann auf Anfragen mit dem {{DOMxRef("FetchEvent")}}-Ereignis reagieren. Sie können die Antwort auf diese Anfragen in beliebiger Weise modifizieren, indem Sie die Methode {{DOMxRef("FetchEvent.respondWith()")}} verwenden.

> [!NOTE]
> Da `install`/`activate`-Ereignisse eine Weile dauern könnten, um abgeschlossen zu werden, bietet die Service-Worker-Spezifikation eine {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}}-Methode. Sobald sie mit einem Promise bei `install`- oder `activate`-Ereignissen aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push`, bis das Promise erfolgreich aufgelöst wird.

Für ein vollständiges Tutorial, wie Sie Ihr erstes grundlegendes Beispiel aufbauen, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung der Ressourcenabfragen

Service Worker können unnötige Leistungskosten verursachen — wenn eine Seite zum ersten Mal nach langer Zeit geladen wird, muss der Browser warten, bis der Service Worker gestartet wird und ausgeführt wird, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk kommen sollen.

Wenn Sie bereits im Voraus wissen, woher bestimmte Inhalte geholt werden sollen, können Sie den Service Worker vollständig umgehen und Ressourcen direkt abrufen. Die Methode {{domxref("InstallEvent.addRoutes()")}} kann verwendet werden, um diesen Anwendungsfall und andere zu implementieren.

## Weitere Ideen für Anwendungsfälle

Service Worker sind auch für folgende Zwecke gedacht:

- Synchronisation von Hintergrunddaten.
- Antworten auf Ressourcenanforderungen von anderen Ursprüngen.
- Erhalten zentralisierter Updates zu aufwändig zu berechnenden Daten wie Geolocation oder Gyroskop, sodass mehrere Seiten dasselbe Daten-Set verwenden können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen usw. zu Entwicklungszwecken.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Template-Erstellung basierend auf bestimmten URL-Mustern.
- Leistungssteigerungen, z.B. das Vorladen von Ressourcen, die der Nutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, einige andere nützliche Dinge für die Webplattform zu tun, die sie näher an die Viabilität nativer Apps bringen. Interessanterweise können und werden andere Spezifikationen den Kontext des Service Workers nutzen, zum Beispiel:

- [Hintergrundsynchronisation](https://github.com/WICG/background-sync): Starten Sie einen Service Worker, auch wenn keine Nutzer auf der Seite sind, sodass Caches aktualisiert werden können.
- [Reaktion auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten Sie einen Service Worker, um Benutzern eine Nachricht zu senden, die ihnen mitteilt, dass neue Inhalte verfügbar sind.
- Reaktion auf eine bestimmte Zeit und ein bestimmtes Datum.
- Betreten eines geografischen Zauns.

## Schnittstellen

- {{DOMxRef("Cache")}}
  - : Repräsentiert den Speicher für {{DOMxRef("Request")}} / {{DOMxRef("Response")}}-Objektpaare, die als Teil des Lebenszyklus von {{DOMxRef("ServiceWorker")}} zwischengespeichert werden.
- {{DOMxRef("CacheStorage")}}
  - : Repräsentiert den Speicher für {{DOMxRef("Cache")}}-Objekte. Es bietet ein Hauptverzeichnis aller benannten Caches, die ein {{DOMxRef("ServiceWorker")}} zugreifen kann, und pflegt eine Zuordnung von Zeichenfolgen zu entsprechenden {{DOMxRef("Cache")}}-Objekten.
- {{DOMxRef("Client")}}
  - : Repräsentiert den Geltungsbereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browserkontext oder ein {{DOMxRef("SharedWorker")}}, der von einem aktiven Worker gesteuert wird.
- {{DOMxRef("Clients")}}
  - : Repräsentiert eine Container für eine Liste von {{DOMxRef("Client")}}-Objekten; die Hauptmethode, um auf die aktiven Service Worker-Clients am aktuellen Ursprung zuzugreifen.
- {{DOMxRef("ExtendableEvent")}}
  - : Verlängert die Lebensdauer der `install`- und `activate`-Ereignisse, die auf dem {{DOMxRef("ServiceWorkerGlobalScope")}} als Teil des Service Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie {{DOMxRef("FetchEvent")}}) an das {{DOMxRef("ServiceWorker")}} gesendet werden, bis es Datenbankschemata aktualisiert, veraltete Cache-Einträge löscht usw.
- {{DOMxRef("ExtendableMessageEvent")}}
  - : Das Ereignisobjekt eines {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}-Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalnachricht auf dem {{DOMxRef("ServiceWorkerGlobalScope")}} aus einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- {{DOMxRef("FetchEvent")}}
  - : Der Parameter, der in den {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "onfetch")}}-Handler übergeben wird, `FetchEvent` repräsentiert eine Fetch-Aktion, die auf dem {{DOMxRef("ServiceWorkerGlobalScope")}} eines {{DOMxRef("ServiceWorker")}} ausgelöst wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die Methode {{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}}, die es uns ermöglicht, eine beliebige Antwort an die gesteuerte Seite zurückzugeben.
- {{DOMxRef("InstallEvent")}}
  - : Der Parameter, der in einen {{DOMxRef("ServiceWorkerGlobalScope.install_event", "install")}}-Ereignishandlerfunktion übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert eine Installationsaktion, die auf dem {{DOMxRef("ServiceWorkerGlobalScope")}} eines {{DOMxRef("ServiceWorker")}} ausgelöst wird. Als ein Kind von {{DOMxRef("ExtendableEvent")}} stellt es sicher, dass funktionale Ereignisse wie {{DOMxRef("FetchEvent")}} während der Installation nicht gesendet werden.
- {{DOMxRef("NavigationPreloadManager")}}
  - : Bietet Methoden zum Verwalten des Vorladens von Ressourcen mit einem Service Worker.
- {{DOMxRef("ServiceWorker")}}
  - : Repräsentiert einen Service Worker. Mehrere Browserkontexte (z.B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verbunden sein.
- {{DOMxRef("ServiceWorkerContainer")}}
  - : Stellt ein Objekt dar, das den Service Worker als gesamte Einheit im Netzwerk-Ökosystem darstellt, einschließlich Einrichtungen zur Registrierung, Abmeldung, Aktualisierung von Service Workern und Zugriff auf deren Zustand und Registrierungen.
- {{DOMxRef("ServiceWorkerGlobalScope")}}
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- {{DOMxRef("ServiceWorkerRegistration")}}
  - : Repräsentiert eine Registrierung eines Service Workers.
- {{DOMxRef("WindowClient")}}
  - : Repräsentiert den Geltungsbereich eines Service Worker-Clients, der ein Dokument in einem Browserkontext ist, das von einem aktiven Worker gesteuert wird. Dies ist ein besonderer Typ von {{DOMxRef("Client")}}-Objekt mit einigen zusätzlichen Methoden und Eigenschaften.

### Erweiterungen zu anderen Schnittstellen

- {{DOMxRef("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
  - : Gibt das {{domxref("CacheStorage")}}-Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
- {{DOMxRef("Navigator.serviceWorker")}} und {{DOMxRef("WorkerNavigator.serviceWorker")}}
  - : Gibt ein {{DOMxRef("ServiceWorkerContainer")}}-Objekt zurück, das Zugang zu Registrierung, Entfernung, Aktualisierung und Kommunikation mit den {{DOMxRef("ServiceWorker")}}-Objekten für das [assoziierte Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Mit dem Service Worker API verbundene Web-APIs:
  - {{domxref("Background Fetch API", "", "", "nocode")}}
  - {{domxref("Background Synchronization API", "", "", "nocode")}}
  - {{domxref("Content Index API", "", "", "nocode")}}
  - {{domxref("Cookie Store API", "", "", "nocode")}}
  - {{domxref("Notifications API", "", "", "nocode")}}
  - {{domxref("Payment Handler API", "", "", "nocode")}}
  - {{domxref("Push API", "", "", "nocode")}}
  - {{domxref("Web Periodic Background Synchronization API", "", "", "nocode")}}
