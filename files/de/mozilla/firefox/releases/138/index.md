---
title: Firefox 138 für Entwickler
short-title: Firefox 138
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: e3dce8e14b101688a794d2a59e15fe67b4cf0de5
---

Dieser Artikel informiert über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der `importmap`-Wert des `type`-Attributs des `<script>`-Elements unterstützt jetzt den `integrity`-Schlüssel. Dies ermöglicht es, die ES-Modul-URLs, die in den Import-Maps referenziert werden, mit ihren Integritätsmetadaten abzugleichen. Dadurch sind diese Module nun mit CSP-Direktiven kompatibel, die Subresource Integrity (SRI) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als die {{jsxref("Error.stack")}}-Eigenschaft. Der Hauptanwendungsfall besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder eines [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration unterstützt jetzt das Importieren von JSON-Modulen mithilfe des `with`-Attributs.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit der `cache`- (und `*`)-Direktive verwendet werden, um den Netzwerk-Cache des Browsers zu löschen. Dadurch erhalten Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten, was es ihnen beispielsweise ermöglicht, Risiken von Datenschutzverletzungen zu mindern, indem der Cache während des Abmeldens geleert wird. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP-Response-Header {{httpheader("Origin-Agent-Cluster")}} kann jetzt von einer Website verwendet werden, um darauf hinzuweisen, dass das zugehörige Dokument in einem origin-spezifischen [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden die vom Dokument genutzten Betriebssystemprozesse und/oder andere Betriebssystemressourcen nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt.
  Dies macht es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einem origin-spezifischen Agenten-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)-Eigenschaft verwenden.
  ([Firefox Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt bei der Verwendung der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browserbenutzer bei einem Identitätsanbieter eingeloggt ist.
  Dies umfasst die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und den {{httpheader("Set-Login")}} HTTP-Response-Header.
  ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einem [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einem [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Umfang eines Audio-Worklet, etwa um Steuerungsdaten oder globale Einstellungen zu empfangen. ([Firefox Bug 1951240](https://bugzil.la/1951240))
- Die [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints)-Methode der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Schnittstelle wird nun unterstützt.
  Eine Anwendung kann diese Methode verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die möglicherweise außerhalb des Bandes geteilt werden, um einen bestimmten Benutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren.
  ([Firefox Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können nun eine Präferenz festlegen, ob die Bildfrequenz oder die Auflösung priorisiert werden soll, wenn beide aufgrund von Netzwerkverschlechterungen nicht auf den konfigurierten Ebenen gehalten werden können.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Methode der `RTCRtpSender`-Schnittstelle übergeben wird.
  Es kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference)-Methode zurückgegeben wird.
  ([Firefox Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Fernprotokolle aktivieren nun die Präferenzen, die erforderlich sind, um Protokolldaten ordnungsgemäß an stdout weiterzuleiten. ([Firefox Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie das Interagieren mit Browsing Contexts im übergeordneten Prozess (z. B. Browser-UI) oder die Verwendung von privilegierten APIs in Inhaltsprozessen. Dies wird in den nächsten Versionen für WebDriver BiDi-Funktionen verwendet und kann bereits mit Marionette verwendet werden (siehe den Abschnitt Marionette unten) ([Firefox Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der `webExtension.install`-Befehl installiert nun Web-Erweiterungen standardmäßig temporär, wodurch er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als ungepackter Ordner. Ein neuer, Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzil.la/1947678)).
- Der `browsingContext.setViewport`-Befehl unterstützt jetzt einen `userContexts`-Parameter, der ein Array von Benutzerkontext- (Firefox-Container-) IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing Contexts angewendet, die diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die innerhalb dieser erstellt werden. Dieser Parameter kann nicht zusammen mit dem vorhandenen `context`-Parameter verwendet werden ([Firefox Bug 1940952](https://bugzil.la/1940952)).
- Der `browsingContext.Info`-Typ umfasst jetzt eine `clientWindow`-Eigenschaft, die der ID des Fensters entspricht, das den Browsing Context besitzt. Er wird typischerweise von `browsingContext.getTree` zurückgegeben oder im Payload von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel in den `chrome`- (Übergeordneter Prozess-) Kontext mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access`-Befehlszeilen-Flags beim Starten von Firefox ([Firefox Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Erweiterungsentwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen. Dies bietet Manifest V3-Erweiterungen die gleiche Fähigkeit wie Manifest V2-Erweiterungen, um Menüelemente zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber funktionsunfähig. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird in Firefox für Android nicht mehr erkannt. Zuvor aktivierte sie eine defekte Version der "Containers"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API wird implementiert. In früheren Versionen wurde diese Methode angezeigt, tat jedoch nichts. ([Firefox Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise zurück, anstatt undefined. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Es wurde Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der folgenden Ergänzungen:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716))
- Der `json`-Ressourcentyp wird jetzt sowohl in {{WebExtAPIRef("webRequest.ResourceType")}} als auch in {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} in Firefox unterstützt, wobei Importattribute standardmäßig aktiviert sind. Zuvor wurde er als `script` gemeldet. ([Firefox Bug 1858078](https://bugzil.la/1858078) und [Firefox Bug 1950836](https://bugzil.la/1950836))

## Experimentelle Web-Features

Diese Features sind neu in Firefox 138 und gelten als experimentell.
Sie können standardmäßig deaktiviert oder standardmäßig aktiviert sein, aber nur in der Nightly-Version verfügbar sein.
Bei Features, die standardmäßig deaktiviert sind, suchen Sie nach der entsprechenden Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **UA-Stile für `<h1>`, die in Abschnittselemente verschachtelt sind:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verringert jetzt nicht mehr die Schriftgröße, wenn sie in [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die in Abschnittselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines gestaffelten Rollouts dieser Entfernung wird bei 5 % der Nutzer von Firefox 138 und 50 % der Nutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, wodurch das UA-Styling für verschachtelte Überschriften entfernt wird. In allen anderen Kanälen ist sie auf `true` gesetzt, was das bestehende UA-Styling für die verschachtelten Überschriften beibehält.

- **`::details-content` CSS-Pseudoelement:** `layout.css.details-content.enabled`.

  Das CSS-{{cssxref("::details-content")}}-Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu stylen. ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **Erlauben von Pseudoelementen nach elementgestützten Pseudoelementen**

  Es wurde begonnen, die Möglichkeit zu schaffen, [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.
  ([Firefox Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Dieses Feature hängt von der Unterstützung für das anvisierte elementgestützte Pseudoelement ab, beispielsweise: {{cssxref("::details-content")}}, das sich hinter der `layout.css.details-content.enabled`-Präferenz befindet.

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft kann die Aktionen abrufen, die mit einer `Notification` verbunden sind, wie sie mithilfe von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeitmessung für Ereignisse zu erfassen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Strings zu nehmen und sie zu bereinigen, um sie sicher in das DOM eines Dokuments einzufügen. ([Firefox Bug 1950605](https://bugzil.la/1950605), [Firefox Bug 1952250](https://bugzil.la/1952250)).
