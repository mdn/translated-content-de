---
title: Firefox 138 Versionshinweise für Entwickler
short-title: Firefox 138
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) Schlüssel. Dies ermöglicht es, die in den Import Maps referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abzugleichen. Infolgedessen sind diese Module jetzt kompatibel mit [CSP](/de/docs/Web/HTTP/Guides/CSP) Richtlinien, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die {{jsxref("Error.captureStackTrace()")}} statische Methode wird jetzt unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als die {{jsxref("Error.stack")}} Eigenschaft. Der Hauptanwendungsfall besteht darin, einen Stack-Trace auf ein benutzerdefiniertes Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die {{jsxref("Error.isError()")}} statische Methode kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für den gleichen Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt jetzt den Import von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attribut.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Browser-Netzwerk-Cache zu leeren. Dies ermöglicht Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten, wodurch sie beispielsweise das Risiko von Datenschutzverletzungen durch Löschen des Caches beim Logout verringern können. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann jetzt von einer Website verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem ursprungsbezogenen [Agent Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  Wenn es in einem solchen Cluster ist, werden der Betriebssystemprozess und/oder andere OS-Ressourcen, die vom Dokument verwendet werden, nur mit anderen Dokumenten vom gleichen {{Glossary("Origin", "Ursprung")}} geteilt.
  Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einen ursprungsbezogenen Agent-Cluster gesetzt hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden.
  ([Firefox Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu prüfen, ob ein Browser-Benutzer bei einem Identitätsanbieter angemeldet ist.
  Dies beinhaltet die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und den {{httpheader("Set-Login")}} HTTP Antwort-Header.
  ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einer [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einer [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio Worklet, wie z.B. Empfang von Steuerungsdaten oder globalen Einstellungen. ([Firefox Bug 1951240](https://bugzil.la/1951240))
- Die [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints) Methode der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) Schnittstelle wird jetzt unterstützt.
  Eine Anwendung kann dies verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die möglicherweise über andere Kanäle geteilt werden, um einen bestimmten Benutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren.
  ([Firefox Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz festlegen, ob bei einer Verschlechterung des Netzwerks die Framerate oder die Auflösung bevorzugt werden soll, wenn beide nicht auf den konfigurierten Ebenen gehalten werden können.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird.
  ([Firefox Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle entfernten Protokolle aktivieren jetzt die erforderlichen Präferenzen, um Protokolle korrekt an stdout zu leiten ([Firefox Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu ermöglichen, wie z.B. die Interaktion mit Browsing-Kontexten im übergeordneten Prozess (z.B. Browser-UI) oder die Nutzung privilegierter APIs in Inhaltsprozessen. Dies wird für WebDriver BiDi Features in den nächsten Versionen verwendet und kann bereits mit Marionette verwendet werden (siehe den Abschnitt Marionette unten) ([Firefox Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der `webExtension.install` Befehl installiert jetzt Web-Erweiterungen standardmäßig vorübergehend, was es ermöglicht, ihn mit unsignierten Erweiterungen zu verwenden - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer, Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzil.la/1947678)).
- Der `browsingContext.setViewport` Befehl unterstützt jetzt einen `userContexts` Parameter, der ein Array von Benutzerkontext- (Firefox-Container-) IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die innerhalb von ihnen erstellt werden. Dieser Parameter kann nicht zusammen mit dem bestehenden `context` Parameter verwendet werden ([Firefox Bug 1940952](https://bugzil.la/1940952)).
- Die `browsingContext.Info` Typisierung umfasst jetzt eine `clientWindow` Eigenschaft, die der ID des Fensters entspricht, dem der Browsing-Kontext gehört. Sie wird typischerweise von `browsingContext.getTree` zurückgegeben oder im Payload von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel zum `chrome` (übergeordneten Prozess) Kontext mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access` Kommandozeilen-Flags beim Start von Firefox ([Firefox Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als ein {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen bereitgestellt. Dies gibt Manifest V3 Erweiterungen die gleiche Fähigkeit wie Manifest V2 Erweiterungen, Menüpunkte zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist nicht mehr in Firefox für Android definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities` Berechtigung wird jetzt in Firefox für Android nicht erkannt. Zuvor aktivierte sie eine fehlerhafte Version der "Container"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Implementiert die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen wurde diese Methode angezeigt, aber tat nichts. ([Firefox Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise zurück anstelle von undefined. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Ergänzung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716))
- Der `json` Ressourcentyp wird jetzt sowohl in {{WebExtAPIRef("webRequest.ResourceType")}} als auch in {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} in Firefox unterstützt, mit Importattributen, die standardmäßig aktiviert sind. Zuvor wurde dies als `script` berichtet. ([Firefox Bug 1858078](https://bugzil.la/1858078) und [Firefox Bug 1950836](https://bugzil.la/1950836))

## Experimentelle Web-Funktionen

Diese Funktionen werden neu in Firefox 138 ausgeliefert und gelten als experimentell.
Sie können standardmäßig deaktiviert sein oder standardmäßig aktiviert sein, aber nur in der Nightly-Version verfügbar sein.
Für standardmäßig deaktivierte Funktionen suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **UA-Stile für `<h1>` verschachtelt in Abschnittselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift verkleinert sich in der Schriftgröße nicht mehr, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` verschachtelt in Abschnittselementen sind nicht mehr relevant, da der Umrissalgorithmus [entfernt wurde](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation. ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines gestuften Rollouts dieser Entfernung wird der Wert von `layout.css.h1-in-section-ua-styles.enabled` für 5 % der Benutzer von Firefox 138 und 50 % der Benutzer von Firefox Beta 138 auf `false` gesetzt ([Absicht, die UA-Stile für h1 in article, aside, nav, section zu entfernen](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, wodurch das UA-Styling für in Abschnittselementen verschachtelte Überschriften entfernt wird. Sie ist in allen anderen Kanälen auf `true` gesetzt, wodurch das bestehende UA-Styling für die verschachtelten Überschriften beibehalten wird.

- **`::details-content` CSS-Pseudoelement:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **Erlauben von Pseudoelementen nach elementgestützten Pseudoelementen**

  Die Arbeit hat begonnen, [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} anzuhängen an [elementgestützte Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}}.
  ([Firefox Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Diese Funktion hängt von der Unterstützung für das anvisierte elementgestützte Pseudoelement ab, zum Beispiel: {{cssxref("::details-content")}}, das hinter der `layout.css.details-content.enabled` Präferenz steht.

- **`MutationEvent` auf Pfad zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die Aktionen abrufen, die mit einer `Notification` assoziiert sind, wie sie mittels [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, nicht vertrauenswürdige HTML-Strings zu nehmen und sie zu reinigen, damit sie sicher in das DOM eines Dokuments eingefügt werden können. ([Firefox Bug 1950605](https://bugzil.la/1950605), [Firefox Bug 1952250](https://bugzil.la/1952250)).
