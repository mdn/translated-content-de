---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 1b8805ce680f1fbb9dfbade6a64d4671cd04da80
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der Wert [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) Schlüssel. Dies ermöglicht es, die in den Importmaps referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abzugleichen. Infolgedessen sind diese Module nun mit [CSP](/de/docs/Web/HTTP/Guides/CSP) Direktiven kompatibel, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als die {{jsxref("Error.stack")}} Eigenschaft. Der Hauptanwendungsfall besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet ist. ([Firefox bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann nun verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt jetzt den Import von JSON-Modulen mittels des [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attributs.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Netzwerk-Cache des Browsers zu löschen. Dies gibt Websites mehr Kontrolle über gespeicherte Daten ihrer Nutzer, da es beispielsweise das Risiko von Datenschutzlecks durch das Löschen des Caches beim Abmelden mindert. ([Firefox bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann jetzt von einer Website verwendet werden, um darauf hinzuweisen, dass das zugehörige Dokument in einem ursprungsbezogenen [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  Innerhalb eines solchen Clusters werden die vom Dokument verwendeten Betriebssystemprozesse und/oder andere OS-Ressourcen nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt.
  Dadurch wird es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten anderer Ursprünge beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einem ursprungsbezogenen Agent-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden.
  ([Firefox bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt bei der Verwendung der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browserbenutzer bei einem Identitätsanbieter angemeldet ist.
  Dies beinhaltet die Unterstützung der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, der [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und des {{httpheader("Set-Login")}} HTTP Antwort-Headers.
  ([Firefox bug 1945576](https://bugzil.la/1945576) und [Firefox bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einem [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einem [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio-Worklets, wie z.B. dem Empfang von Steuerdaten oder globalen Einstellungen. ([Firefox bug 1951240](https://bugzil.la/1951240))
- Die [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints) Methode der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) Schnittstelle wird jetzt unterstützt.
  Eine Anwendung kann dies verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die außerhalb des Bandes geteilt werden könnten, um einen bestimmten Nutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren.
  ([Firefox bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können nun eine Präferenz für die Priorisierung von Bildrate oder Auflösung festlegen, wenn beide aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Ebenen gehalten werden können.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird.
  ([Firefox bug 1329847](https://bugzil.la/1329847)).

### Konformität mit WebDriver (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Remote-Protokolle aktivieren jetzt die Präferenzen, die erforderlich sind, um Protokolle ordnungsgemäß an stdout weiterzuleiten ([Firefox bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie das Interagieren mit Browsing-Kontexten im übergeordneten Prozess (z.B. Browser-UI) oder das Verwenden privilegierter APIs in Inhaltsprozessen. Dies wird für WebDriver BiDi-Funktionen in den nächsten Versionen verwendet und kann bereits mit Marionette verwendet werden (siehe Abschnitt Marionette unten) ([Firefox bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` installiert jetzt Web-Erweiterungen standardmäßig vorübergehend, sodass er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox bug 1947678](https://bugzil.la/1947678)).
- Der Befehl `browsingContext.setViewport` unterstützt jetzt einen `userContexts`-Parameter, der ein Array von Benutzerkontext- (Firefox-Container-) IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die innerhalb dieser erstellt werden. Dieser Parameter kann nicht zusammen mit dem bestehenden `context`-Parameter verwendet werden ([Firefox bug 1940952](https://bugzil.la/1940952)).
- Der Typ `browsingContext.Info` enthält jetzt eine `clientWindow`-Eigenschaft, die der ID des Fensters entspricht, dem der Browsing-Kontext gehört. Sie wird typischerweise von `browsingContext.getTree` zurückgegeben oder in der Nutzlast von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Das Wechseln zum `chrome` (übergeordneten Prozess) Kontext mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access` Befehlszeilen-Flags beim Starten von Firefox ([Firefox bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen. Dies bietet Manifest V3 Erweiterungen dieselbe Möglichkeit wie Manifest V2 Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Früher war sie definiert, aber defekt. ([Firefox bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird in Firefox für Android nicht mehr erkannt. Früher aktivierte sie eine defekte Version der "Container"-Funktion. ([Firefox bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist nun auf Firefox für Android verfügbar. ([Firefox bug 1949955](https://bugzil.la/1949955))
- Implementiert die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen wurde diese Methode angezeigt, tat jedoch nichts. ([Firefox bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise statt undefined zurück. ([Firefox bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tabgruppen zu ermöglichen, einschließlich:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox bug 1959716](https://bugzil.la/1959716))

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 138 verfügbar und gelten als experimentell.
Sie können standardmäßig deaktiviert oder standardmäßig aktiviert sein, aber nur in der Nightly-Version verfügbar sein.
Für standardmäßig deaktivierte Funktionen suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimental Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **UA-Stile für `<h1>` innerhalb von Sectioning-Elementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift verkleinert sich jetzt nicht mehr, wenn sie in [Sectioning-Elementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` eingebettet ist. Die UA-Stile für `<h1>` innerhalb von Sectioning-Elementen sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines gestaffelten Rollouts dieser Entfernung wird für 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion arbeitet umgekehrt: sie ist in der Nightly-Version auf `false` gesetzt, was die UA-Stylings für Überschriften, die in Sectioning-Elementen eingebettet sind, entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehenden UA-Stylings für die eingebetteten Überschriften beibehält.

- **::details-content CSS-Pseudo-Element:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox bug 1901037](https://bugzil.la/1901037)).

- **Erlauben von Pseudo-Elementen nach elementgestützten Pseudo-Elementen**

  Die Arbeit hat begonnen, um [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen. ([Firefox bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Die Präferenz für diese Funktion hängt vom angesprochenen elementgestützten Pseudo-Element ab, zum Beispiel: [`::details-content`](/de/docs/Mozilla/Firefox/Experimental_features#details-content_pseudo-element).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine assoziierten Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die Aktionen abrufen, die mit einer `Notification` verbunden sind, wie sie mittels [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitisator API**: `dom.security.sanitizer.enabled`

  Die [HTML Sanitisator API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Strings aufzubereiten und sicher in das DOM eines Dokuments einzufügen. ([Firefox bug 1950605](https://bugzil.la/1950605)), ([Firefox bug 1952250](https://bugzil.la/1952250)).

## Ältere Versionen

{{Firefox_for_developers}}
