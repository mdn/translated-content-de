---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: e992b5d804a8133e3a737a4c1cd89bfb11916ba6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der Wert [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den Schlüssel [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity). Dies ermöglicht es, die in den Import-Maps referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abzugleichen. Infolgedessen sind diese Module jetzt kompatibel mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven, die die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox-Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als die Eigenschaft {{jsxref("Error.stack")}}. Die Hauptanwendung ist, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox-Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` zu demselben Zweck. ([Firefox-Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration unterstützt jetzt das Importieren von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Attribut.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Netzwerkkache des Browsers zu löschen. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten, sodass sie beispielsweise das Risiko von Datenschutzverletzungen mindern können, indem sie den Cache beim Abmelden löschen. ([Firefox-Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann von einer Webseite verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem ursprungsschlüsselbasierten [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  Wenn in einem solchen Cluster, werden der Betriebssystemprozess und/oder andere OS-Ressourcen, die vom Dokument verwendet werden, nur mit anderen Dokumenten vom selben {{Glossary("Origin", "Ursprung")}} geteilt.
  Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einem ursprungsschlüsselbasierten Agent-Cluster platziert hat, indem sie die Eigenschaft [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) verwenden.
  ([Firefox-Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browser-Benutzer bei einem Identitätsanbieter angemeldet ist.
  Dies umfasst Unterstützung für die Schnittstelle [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin), die Eigenschaft [`navigator.login`](/de/docs/Web/API/Navigator/login) und den {{httpheader("Set-Login")}} HTTP-Antwort-Header.
  ([Firefox-Bug 1945576](https://bugzil.la/1945576) und [Firefox-Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einem [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einem [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio-Worklets, wie zum Beispiel das Empfangen von Steuerungsdaten oder globalen Einstellungen. ([Firefox-Bug 1951240](https://bugzil.la/1951240))
- Die Methode [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints) der Schnittstelle [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) wird jetzt unterstützt.
  Eine Anwendung kann dies verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die möglicherweise außerhalb des Bandes geteilt werden, um einen bestimmten Benutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren.
  ([Firefox-Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können nun eine Präferenz dafür festlegen, ob sie Bildrate oder Auflösung priorisieren möchten, wenn beides aufgrund von Netzwerkbeeinträchtigungen nicht auf den konfigurierten Niveaus gehalten werden kann.
  Der Wert wird mit der Eigenschaft [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) im Parameterobjekt festgelegt, das an die Methode [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) der `RTCRtpSender`-Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) zurückgegeben wird.
  ([Firefox-Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Remote-Protokolle ermöglichen jetzt die Präferenzen, die erforderlich sind, um Protokolle ordnungsgemäß an stdout zu leiten ([Firefox-Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um empfindliche Funktionen zu aktivieren, wie das Interagieren mit Browsing-Kontexten im übergeordneten Prozess (z. B. Browser-UI) oder die Verwendung privilegierter APIs in Inhaltsprozessen. Dies wird für WebDriver BiDi-Funktionen in den nächsten Versionen verwendet und kann bereits mit Marionette verwendet werden (siehe den Abschnitt Marionette unten) ([Firefox-Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` installiert jetzt standardmäßig Web-Erweiterungen vorübergehend, sodass er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox-Bug 1947678](https://bugzil.la/1947678)).
- Der Befehl `browsingContext.setViewport` unterstützt jetzt einen `userContexts`-Parameter, der ein Array von Benutzerkontext- (Firefox-Container-) IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die innerhalb von ihnen erstellt werden. Dieser Parameter kann nicht zusammen mit dem vorhandenen `context`-Parameter verwendet werden ([Firefox-Bug 1940952](https://bugzil.la/1940952)).
- Der Typ `browsingContext.Info` enthält jetzt eine `clientWindow`-Eigenschaft, die der ID des Fensters entspricht, das den Browsing-Kontext besitzt. Es wird typischerweise von `browsingContext.getTree` zurückgegeben oder in der Nutzlast von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox-Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel zum `chrome` (übergeordneter Prozess) Kontext mit Marionette erfordert jetzt die Verwendung des Befehlszeilenflags `--remote-enable-system-access` beim Starten von Firefox ([Firefox-Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen. Dies bietet Manifest V3-Erweiterungen die gleiche Möglichkeit wie Manifest V2-Erweiterungen, Menüelemente zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Das {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war es definiert, aber fehlerhaft. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die Berechtigung `contextualIdentities` wird auf Firefox für Android nicht mehr erkannt. Zuvor ermöglichte sie eine fehlerhafte Version der "Container"-Funktion. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt auf Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))
- Implementiert das {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen war diese Methode vorhanden, tat aber nichts. ([Firefox-Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise zurück, anstatt undefined. ([Firefox-Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox-Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox-Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox-Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox-Bug 1959716](https://bugzil.la/1959716)

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 138 enthalten und gelten als experimentell.
Sie können standardmäßig deaktiviert oder standardmäßig aktiviert, jedoch nur in der Nightly-Version verfügbar sein.
Für standardmäßig deaktivierte Funktionen suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` verschachtelt in Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift verringert jetzt nicht mehr die Schriftgröße, wenn sie in [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` verschachtelt in Gliederungselementen sind nicht mehr relevant, da der Gliederungsalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines abgestuften Rollouts dieser Entfernung werden 5 % der Benutzer von Firefox 138 und 50 % der Benutzer von Firefox Beta 138 den Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt bekommen ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert im umgekehrten Sinne: sie ist auf `false` in der Nightly-Version gesetzt, was das UA-Styling für Überschriften entfernt, die in Gliederungselementen verschachtelt sind. Sie ist auf `true` in allen anderen Kanälen gesetzt, was das bestehende UA-Styling für die verschachtelten Überschriften beibehält.

- **::details-content CSS Pseudo-Element:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox-Bug 1901037](https://bugzil.la/1901037)).

- **Erlaube Pseudo-Elemente nach elementgestützten Pseudo-Elementen**

  Es wurde begonnen, [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu ermöglichen, an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) angehängt zu werden, wie z.B. {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}}. ([Firefox-Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Die Präferenz für diese Funktion hängt davon ab, welches elementgestützte Pseudo-Element anvisiert wird, z.B.: [`::details-content`](/de/docs/Mozilla/Firefox/Experimental_features#details-content_pseudo-element).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die Aktionen, die mit einer `Notification` verbunden sind, erhalten, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [`HTML Sanitizer API`](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, nicht vertrauenswürdige HTML-Strings zu nehmen und sie für die sichere Einfügung in das DOM eines Dokuments zu bereinigen. ([Firefox-Bug 1950605](https://bugzil.la/1950605)), ([Firefox-Bug 1952250](https://bugzil.la/1952250)).

## Ältere Versionen

{{Firefox_for_developers}}
