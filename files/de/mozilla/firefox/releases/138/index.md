---
title: Firefox 138 Versionshinweise für Entwickler
short-title: Firefox 138
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity)-Schlüssel. Dies ermöglicht es, dass die in den Import-Maps referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abgeglichen werden. Dadurch sind diese Module nun mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven kompatibel, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox-Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft. Der Hauptanwendungsfall besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox-Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz von {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox-Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration unterstützt jetzt den Import von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Attribut.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann zusammen mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Direktive (und `*`) verwendet werden, um den Netzwerkcache des Browsers zu löschen. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten, indem sie beispielsweise das Risiko von Datenschutzlecks mindern, indem sie den Cache während des Abmeldens löschen. ([Firefox-Bug 1930500](https://bugzil.la/1930500)).
- Der HTTP-{{httpheader("Origin-Agent-Cluster")}}-Antwortheader kann nun von einer Site verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem ursprungsbasierten [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden die Betriebssystemprozesse und/oder andere Ressourcen des Betriebssystems, die vom Dokument genutzt werden, nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt.
  Dies macht es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einen ursprungsbasierten Agenten-Cluster gesetzt hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)-Eigenschaft verwenden.
  ([Firefox-Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird nun unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browserbenutzer bei einem Identitätsanbieter angemeldet ist.
  Dazu gehört die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und den {{httpheader("Set-Login")}}-HTTP-Antwortheader.
  ([Firefox-Bug 1945576](https://bugzil.la/1945576) und [Firefox-Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einem [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einem [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht benutzerdefinierte, asynchrone Kommunikation zwischen Code im Haupt-Thread und dem globalen Bereich eines Audio-Worklets, wie z. B. das Empfangen von Steuerungsdaten oder globalen Einstellungen. ([Firefox-Bug 1951240](https://bugzil.la/1951240))
- Die [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints)-Methode der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Schnittstelle wird jetzt unterstützt.
  Eine Anwendung kann dies verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die möglicherweise außerhalb des Bandes geteilt werden, um einen bestimmten Benutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren.
  ([Firefox-Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz dafür setzen, ob Bildrate oder Auflösung priorisiert werden soll, wenn beides bei den konfigurierten Pegeln aufgrund einer Netzwerkminderung nicht gehalten werden kann.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Eigenschaft im Parameterobjekt gesetzt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Methode der `RTCRtpSender`-Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt abgelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference)-Methode zurückgegeben wird.
  ([Firefox-Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Fernprotokolle aktivieren jetzt die Präferenzen, die erforderlich sind, um Protokolle ordnungsgemäß an stdout weiterzuleiten ([Firefox-Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um empfindliche Funktionen zu aktivieren, wie das Interagieren mit Browsing-Contexts im übergeordneten Prozess (z. B. Browser-UI) oder die Verwendung privilegierter APIs in Inhaltsprozessen. Dies wird in den nächsten Veröffentlichungen für WebDriver BiDi-Funktionen verwendet und kann bereits mit Marionette verwendet werden (siehe den Abschnitt zu Marionette unten) ([Firefox-Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der `webExtension.install`-Befehl installiert jetzt Web-Erweiterungen standardmäßig vorübergehend, sodass er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer, Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox-Bug 1947678](https://bugzil.la/1947678)).
- Der `browsingContext.setViewport`-Befehl unterstützt jetzt einen `userContexts`-Parameter, der ein Array von Benutzerkontext- (Firefox-Container-)IDs sein muss. Bei Bereitstellung wird die Viewport-Konfiguration auf alle Browsing-Contexts angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die darin erstellt werden. Dieser Parameter kann nicht zusammen mit dem vorhandenen `context`-Parameter verwendet werden ([Firefox-Bug 1940952](https://bugzil.la/1940952)).
- Der `browsingContext.Info`-Typ enthält jetzt eine `clientWindow`-Eigenschaft, die der ID des Fensters entspricht, dem der Browsing-Kontext gehört. Diese wird typischerweise von `browsingContext.getTree` zurückgegeben oder im Nutzlast von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox-Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel zum `chrome`- (übergeordneten) Kontext mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access`-Befehlszeilenarguments beim Starten von Firefox ([Firefox-Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}}-API für Manifest V3-Erweiterungen hinzugefügt. Dies bietet Manifest V3-Erweiterungen die gleiche Fähigkeit wie Manifest V2-Erweiterungen, Menüelemente zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}}-API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber defekt. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die Berechtigung `contextualIdentities` wird jetzt in Firefox für Android nicht erkannt. Zuvor ermöglichte sie eine fehlerhafte Version der "containers"-Funktion. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}}-API ist jetzt in Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))
- Die Implementierung der {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}}-API. In früheren Versionen wurde diese Methode angezeigt, aber es passierte nichts. ([Firefox-Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}}-API gibt jetzt ein Versprechen zurück, anstatt undefiniert zu sein. ([Firefox-Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Ergänzung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox-Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox-Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox-Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox-Bug 1959716](https://bugzil.la/1959716))
- Der `json`-Ressourcentyp wird jetzt sowohl in {{WebExtAPIRef("webRequest.ResourceType")}} als auch in {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} in Firefox unterstützt, wobei Importattribute standardmäßig aktiviert sind. Zuvor wurde er als `script` gemeldet. ([Firefox-Bug 1858078](https://bugzil.la/1858078) und [Firefox-Bug 1950836](https://bugzil.la/1950836))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 138 implementiert und werden als experimentell betrachtet.
Sie können standardmäßig deaktiviert oder standardmäßig aktiviert, aber nur im Nightly-Build verfügbar sein.
Für standardmäßig deaktivierte Funktionen suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite mit den [experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` innerhalb von Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift nimmt jetzt nicht mehr in der Schriftgröße ab, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` innerhalb von Gliederungselementen sind nicht mehr relevant, da der Gliederungsalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer schrittweisen Deaktivierung dieser Entfernung wird der Wert von `layout.css.h1-in-section-ua-styles.enabled` bei 5% der Benutzer von Firefox 138 und 50% der Benutzer von Firefox Beta 138 auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was die UA-Stilierung für Überschriften innerhalb von Gliederungselementen entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die vorhandene UA-Stilierung für die verschachtelten Überschriften beibehält.

- **`::details-content` CSS-Pseudoelement:** `layout.css.details-content.enabled`.

  Das CSS-{{cssxref("::details-content")}}-Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu gestalten ([Firefox-Bug 1901037](https://bugzil.la/1901037)).

- **Erlaube Pseudoelemente nach elementgestützten Pseudoelementen**

  Es wurde begonnen, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.
  ([Firefox-Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Diese Funktion hängt von der Unterstützung des elementgestützten Pseudoelements ab, das angesprochen wird, zum Beispiel: {{cssxref("::details-content")}}, das hinter der `layout.css.details-content.enabled`-Präferenz steht.

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Events (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt in Firefox Nightly standardmäßig deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft kann die mit einer `Notification` verbundenen Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für durch eine bestimmte Benutzerinteraktion ausgelöste Ereignisse zu messen. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

- **HTML-Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [HTML-Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, nicht vertrauenswürdige HTML-Strings zu nehmen und sie für die sichere Einfügung in das DOM eines Dokuments zu bereinigen. ([Firefox-Bug 1950605](https://bugzil.la/1950605), [Firefox-Bug 1952250](https://bugzil.la/1952250)).
