---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity)-Schlüssel. Dies ermöglicht es, die ES-Modul-URLs, die in den Import-Maps referenziert werden, mit ihren Integritätsmetadaten abzugleichen. Dadurch sind diese Module jetzt mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven kompatibel, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die {{jsxref("Error.captureStackTrace()")}} statische Methode wird jetzt unterstützt. Diese installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft. Der Hauptanwendungsfall besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die {{jsxref("Error.isError()")}} statische Methode kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt jetzt das Importieren von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attribut.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Netzwerkcache des Browsers zu löschen. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten, sodass sie z. B. das Risiko von Datenschutzverletzungen mindern können, indem sie den Cache während des Abmeldens löschen. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann jetzt von einer Site verwendet werden, um anzuzeigen, dass das zugehörige Dokument in einem ursprungsbasierten [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte. In einem solchen Cluster werden der Betriebssystemprozess und/oder andere vom Dokument verwendete Betriebssystemressourcen nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt. Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt. Entwickler können testen, ob der Browser das Dokument in einen ursprungsbasierten Agent-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden. ([Firefox Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browser-Benutzer bei einem Identitätsanbieter angemeldet ist. Dies umfasst die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und den {{httpheader("Set-Login")}} HTTP Antwort-Header. ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt nun bidirektionale Nachrichtenübermittlung auf einer [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einer [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port). Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Scope eines Audio-Worklets, z. B. um Steuerungsdaten oder globale Einstellungen zu empfangen. ([Firefox Bug 1951240](https://bugzil.la/1951240))
- Die [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints) Methode der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) Schnittstelle wird jetzt unterstützt. Eine Anwendung kann dies verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die möglicherweise außerhalb des WebRTC-Sessions verwendet werden, um einen bestimmten Benutzer oder Browser zu identifizieren. ([Firefox Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC Anwendungen können nun eine Präferenz für die Priorisierung von Bildrate oder Auflösung setzen, wenn beides aufgrund von Netzwerkverschlechterungen nicht auf den konfigurierten Ebenen gehalten werden kann. Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt gesetzt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird. Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird. ([Firefox Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Fernprotokolle aktivieren nun die erforderlichen Präferenzen, um Protokolle ordnungsgemäß an stdout zu leiten ([Firefox Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie beispielsweise das Interagieren mit Browsing-Kontexten im übergeordneten Prozess (z. B. Browser-UI) oder die Verwendung privilegierter APIs in Inhaltsprozessen. Dies wird in den nächsten Versionen für WebDriver BiDi-Funktionen verwendet und kann bereits mit Marionette verwendet werden (siehe unten stehenden Marionette-Abschnitt) ([Firefox Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der `webExtension.install` Befehl installiert jetzt standardmäßig Web-Erweiterungen temporär, sodass er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer, spezifischer Firefox-Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation stattdessen als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzil.la/1947678)).
- Der `browsingContext.setViewport` Befehl unterstützt jetzt einen `userContexts` Parameter, der ein Array von Benutzerkontext- (Firefox-Container-) IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftig innerhalb dieser erstellten Kontexte. Dieser Parameter kann nicht zusammen mit dem bestehenden `context` Parameter verwendet werden ([Firefox Bug 1940952](https://bugzil.la/1940952)).
- Der `browsingContext.Info` Typ enthält jetzt eine `clientWindow` Eigenschaft, die der ID des Fensters entspricht, dem der Browsing-Kontext gehört. Diese wird typischerweise von `browsingContext.getTree` zurückgegeben oder im Payload von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel zum `chrome` (übergeordneter Prozess) Kontext mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access` Befehlszeilen-Flags beim Starten von Firefox ([Firefox Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung bereitgestellt für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen. Dies bietet Manifest V3 Erweiterungen die gleiche Fähigkeit wie Manifest V2 Erweiterungen, Menüelemente zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities` Berechtigung wird jetzt auf Firefox für Android nicht mehr erkannt. Früher aktivierte sie eine fehlerhafte Version der "Container"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist jetzt auf Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Implementiert die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen wurde diese Methode zwar bereitgestellt, tat aber nichts. ([Firefox Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich des Hinzufügens von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716))
- Der `json` Ressourcentyp wird in beiden {{WebExtAPIRef("webRequest.ResourceType")}} und {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} in Firefox unterstützt, wobei Importattribute standardmäßig aktiviert sind. Zuvor wurde er als `script` gemeldet. ([Firefox Bug 1858078](https://bugzil.la/1858078) und [Firefox Bug 1950836](https://bugzil.la/1950836))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 138 verfügbar und gelten als experimentell. Sie können standardmäßig deaktiviert sein oder standardmäßig aktiviert, aber nur in der Nightly Version verfügbar sein. Für Funktionen, die standardmäßig deaktiviert sind, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>`, das in Gliederungselementen verschachtelt ist**: `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift wird jetzt nicht mehr in der Schriftgröße verringert, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die in Gliederungselementen verschachtelt ist, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer gestaffelten Einführung dieser Entfernung wird bei 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly Version auf `false` gesetzt, was die UA-Stile für Überschriften, die in Gliederungselementen verschachtelt sind, entfernt. Sie ist in allen anderen Kanälen auf `true` gesetzt, was die bestehenden UA-Stile für die verschachtelten Überschriften beibehält.

- **::details-content CSS Pseudo-Element**: `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **Erlauben von Pseudo-Elementen nach Element-gestützten Pseudo-Elementen**

  Es wurde damit begonnen, [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu erlauben, nach [Element-gestützten Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angefügt zu werden. ([Firefox Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Die Präferenz für diese Funktion hängt von dem element-gestützten Pseudo-Element ab, das anvisiert wird, zum Beispiel: [`::details-content`](/de/docs/Mozilla/Firefox/Experimental_features#details-content_pseudo-element).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und die zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die mit einer `Notification` verbundenen Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) erlaubt es Entwicklern, nicht vertrauenswürdige HTML-Strings zu übernehmen und sie für eine sichere Einfügung in das DOM eines Dokuments zu bereinigen. ([Firefox Bug 1950605](https://bugzil.la/1950605)), ([Firefox Bug 1952250](https://bugzil.la/1952250)).

## Ältere Versionen

{{Firefox_for_developers}}
