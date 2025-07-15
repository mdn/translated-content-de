---
title: Firefox 138 für Entwickler
short-title: Firefox 138
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity)-Schlüssel. Dies erlaubt es, die ES-Modul-URLs, die in den Import-Maps referenziert werden, anhand ihrer Integritätsmetadaten zu überprüfen. Dadurch sind diese Module jetzt kompatibel mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven, die Subresource-Integrität ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die {{jsxref("Error.captureStackTrace()")}}-statische Methode wird jetzt unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als die {{jsxref("Error.stack")}}-Eigenschaft. Der Hauptanwendungsfall ist es, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die {{jsxref("Error.isError()")}}-statische Methode kann jetzt verwendet werden, um zu prüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration unterstützt jetzt das Importieren von JSON-Modulen mithilfe des [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Attributs.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-(und `*`)-Direktive verwendet werden, um den Browser-Netzwerkcache zu löschen. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten, sodass sie beispielsweise das Risiko von Datenschutzverletzungen mindern können, indem sie den Cache beim Abmelden löschen. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann jetzt von einer Website verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem ursprungsbezogenen [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden vom Dokument genutzte Betriebssystemprozesse und/oder andere OS-Ressourcen nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt.
  Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einem ursprungsbezogenen Agent-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)-Eigenschaft verwenden.
  ([Firefox Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzulegen und zu überprüfen, ob ein Browser-Benutzer bei einem Identity-Provider angemeldet ist.
  Dies umfasst die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und den {{httpheader("Set-Login")}} HTTP-Antwort-Header.
  ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einem [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einem [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio-Worklets, wie das Empfangen von Steuerdaten oder globalen Einstellungen. ([Firefox Bug 1951240](https://bugzil.la/1951240))
- Die [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints)-Methode der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Schnittstelle wird jetzt unterstützt.
  Eine Anwendung kann diese verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die möglicherweise außerhalb des Bands geteilt werden, um einen bestimmten Benutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren.
  ([Firefox Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz zum Priorisieren von Bildrate oder Auflösung festlegen, wenn beides aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Ebenen gehalten werden kann.
  Der Wert wird mithilfe der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Eigenschaft im Parameterobjekt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Methode der `RTCRtpSender`-Schnittstelle übergeben wird, festgelegt.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference)-Methode zurückgegeben wird.
  ([Firefox Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Remote-Protokolle aktivieren jetzt die Präferenzen, die erforderlich sind, um Protokolle ordnungsgemäß an stdout zu leiten ([Firefox Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie das Interagieren mit Browsing Contexts im übergeordneten Prozess (z. B. Browser-Benutzeroberfläche) oder die Verwendung privilegierter APIs in Inhaltsprozessen. Dies wird in den nächsten Veröffentlichungen für WebDriver BiDi-Funktionen verwendet werden und kann bereits mit Marionette verwendet werden (siehe Marionette-Abschnitt unten) ([Firefox Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der `webExtension.install`-Befehl installiert jetzt Web-Erweiterungen standardmäßig temporär, sodass er mit nicht signierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzil.la/1947678)).
- Der `browsingContext.setViewport`-Befehl unterstützt jetzt einen `userContexts`-Parameter, der ein Array von Benutzerkontext-(Firefox-Container)-IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die innerhalb dieser erstellt werden. Dieser Parameter kann nicht zusammen mit dem bestehenden `context`-Parameter verwendet werden ([Firefox Bug 1940952](https://bugzil.la/1940952)).
- Der `browsingContext.Info`-Typ enthält jetzt eine `clientWindow`-Eigenschaft, die der ID des Fensters entspricht, das den Browsing Context besitzt. Es wird typischerweise von `browsingContext.getTree` zurückgegeben oder in der Nutzlast von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel zum `chrome` (übergeordneter Prozess)-Kontext mit Marionette erfordert jetzt das Verwenden des `--remote-enable-system-access`-Kommandozeilen-Flags beim Starten von Firefox ([Firefox Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen bereitgestellt. Dies bietet Manifest V3-Erweiterungen die gleiche Möglichkeit wie Manifest V2-Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird auf Firefox für Android jetzt nicht mehr erkannt. Zuvor ermöglichte sie eine defekte Version der "Container"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Implementiert die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen wurde diese Methode ausgesetzt, aber nichts bewirkte. ([Firefox Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716)
- Der `json`-Ressourcentyp wird jetzt sowohl in {{WebExtAPIRef("webRequest.ResourceType")}} als auch in {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} in Firefox unterstützt, wobei Importattribute standardmäßig aktiviert sind. Zuvor wurde er als `script` gemeldet. ([Firefox Bug 1858078](https://bugzil.la/1858078) und [Firefox Bug 1950836](https://bugzil.la/1950836))

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 138 und gelten als experimentell.
Sie sind möglicherweise standardmäßig deaktiviert oder standardmäßig aktiviert, aber nur im Nightly-Build verfügbar.
Für Funktionen, die standardmäßig deaktiviert sind, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Sie finden weitere solche Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` in Gliederungselementen verschachtelt:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift wird nicht mehr in der Schriftgröße verringert, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` innerhalb von Gliederungselementen sind nicht mehr relevant, seit der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer gestaffelten Einführung dieser Entfernung wird bei 5 % der Benutzer von Firefox 138 und 50 % der Benutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Einstellung für diese Funktion funktioniert umgekehrt: Im Nightly-Build ist sie auf `false` gesetzt, wodurch die UA-Stile für Überschriften, die in Gliederungselementen verschachtelt sind, entfernt werden. In allen anderen Kanälen ist sie auf `true` gesetzt, wodurch die vorhandenen UA-Stile für die verschachtelten Überschriften beibehalten werden.

- **::details-content CSS-Pseudo-Element:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}}-Pseudo-Element ermöglicht das Stylen des Inhalts des {{htmlElement("details")}}-Elements ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **Erlauben von Pseudo-Elementen nach elementenunterstützten Pseudo-Elementen**

  Die Arbeiten haben begonnen, um [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) zu erlauben, wie {{cssxref("::first-letter")}} und {{cssxref("::before")}}, die an [elementenunterstützte Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) angehängt werden, wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}}. ([Firefox Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Die Einstellung für diese Funktion hängt vom anvisierten elementenunterstützten Pseudo-Element ab, zum Beispiel: [`::details-content`](/de/docs/Mozilla/Firefox/Experimental_features#details-content_pseudo-element).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig im Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die mit einer `Notification` verbundenen Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeit für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) erlaubt Entwicklern, nicht vertrauenswürdige HTML-Strings zu nehmen und sie für die sichere Einfügung in das DOM eines Dokuments zu bereinigen. ([Firefox Bug 1950605](https://bugzil.la/1950605)), ([Firefox Bug 1952250](https://bugzil.la/1952250)).
