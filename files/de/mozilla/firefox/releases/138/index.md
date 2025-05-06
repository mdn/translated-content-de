---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: f9f6cb5c92c5864691f0ba8f18d2035de6871c9b
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der Wert [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements unterstützt jetzt den Schlüssel [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity). Dies ermöglicht es, dass die in den Import-Maps referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abgeglichen werden. Dadurch sind diese Module jetzt mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Directives kompatibel, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox-Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stacktrace-Informationen auf einem bereitgestellten Objekt als Eigenschaft {{jsxref("Error.stack")}}. Der Hauptanwendungsfall ist das Installieren eines Stacktraces auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox-Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz von {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox-Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration unterstützt jetzt das Importieren von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Attribut.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Netzwerk-Cache des Browsers zu leeren. Dies gibt Websites mehr Kontrolle über gespeicherte Daten ihrer Benutzer und ermöglicht es ihnen beispielsweise, das Risiko von Datenschutzlecks zu mindern, indem der Cache beim Logout geleert wird. ([Firefox-Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}}-Antwort-Header kann jetzt von einer Site verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem herkunftsbezogenen [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte. In einem solchen Cluster werden der vom Betriebssystem verwendete Prozess und/oder andere OS-Ressourcen, die vom Dokument verwendet werden, nur mit anderen Dokumenten von derselben {{Glossary("Origin", "Herkunft")}} geteilt. Dies reduziert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Herkünften beeinträchtigt. Entwickler können testen, ob der Browser das Dokument in einen herkunftsbezogenen Agenten-Cluster gestellt hat, indem sie die Eigenschaft [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) verwenden. ([Firefox-Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Benutzer des Browsers bei einem Identitätsanbieter angemeldet ist. Dies umfasst die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und den {{httpheader("Set-Login")}} HTTP-Antwort-Header. ([Firefox-Bug 1945576](https://bugzil.la/1945576) und [Firefox-Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einem [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einem [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port). Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio-Worklets, wie z. B. den Empfang von Steuerungsdaten oder globalen Einstellungen. ([Firefox-Bug 1951240](https://bugzil.la/1951240))
- Die Methode [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints) der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Schnittstelle wird jetzt unterstützt. Eine Anwendung kann dies verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, die möglicherweise out-of-band geteilt werden, um einen bestimmten Benutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren. ([Firefox-Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Media, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz dafür einstellen, ob Framerate oder Auflösung priorisiert werden sollen, wenn beides aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Levels gehalten werden kann. Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Eigenschaft im Parameterobjekt gesetzt, das an die Methode [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) der `RTCRtpSender`-Schnittstelle übergeben wird. Es kann auch aus dem Objekt gelesen werden, das von der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) zurückgegeben wird. ([Firefox-Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Remote-Protokolle aktivieren jetzt die erforderlichen Präferenzen, um Protokolle ordnungsgemäß zu stdout zu leiten ([Firefox-Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie das Interagieren mit Browsing-Kontexten im übergeordneten Prozess (z. B. Browser-UI) oder die Verwendung von privilegierten APIs in Inhaltsprozessen. Dies wird in den nächsten Versionen für WebDriver BiDi-Funktionen verwendet und kann bereits mit Marionette verwendet werden (siehe den Abschnitt Marionette unten) ([Firefox-Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` installiert jetzt standardmäßig Web-Erweiterungen temporär, sodass er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer, Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox-Bug 1947678](https://bugzil.la/1947678)).
- Der Befehl `browsingContext.setViewport` unterstützt jetzt einen `userContexts`-Parameter, der ein Array von Benutzerkontexten (Firefox-Container)-IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftig innerhalb dieser erstellten Kontexte. Dieser Parameter kann nicht zusammen mit dem vorhandenen `context`-Parameter verwendet werden ([Firefox-Bug 1940952](https://bugzil.la/1940952)).
- Der Typ `browsingContext.Info` enthält jetzt eine `clientWindow`-Eigenschaft, die der ID des Fensters entspricht, dem der Browsing-Kontext gehört. Es wird typischerweise von `browsingContext.getTree` zurückgegeben oder im Payload von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox-Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel in den `chrome` (Elternprozess)-Kontext mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access`-Befehlszeilenflags beim Starten von Firefox ([Firefox-Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen hinzugefügt. Dies bietet Manifest V3-Erweiterungen die gleiche Möglichkeit wie Manifest V2-Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Bisher war sie definiert, aber fehlerhaft. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird in Firefox für Android nun nicht mehr erkannt. Bisher aktivierte sie eine fehlerhafte Version der "Containers"-Funktion. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))
- Implementiert die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen wurde diese Methode zwar bereitgestellt, aber sie tat nichts. ([Firefox-Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox-Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um das Manipulieren von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich des Hinzufügens von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox-Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox-Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox-Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox-Bug 1959716](https://bugzil.la/1959716)
- Der `json`-Ressourcentyp wird jetzt sowohl in {{WebExtAPIRef("webRequest.ResourceType")}} als auch in {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} in Firefox unterstützt, mit importierten Attributen, die standardmäßig aktiviert sind. Bisher wurde er als `script` gemeldet. ([Firefox-Bug 1858078](https://bugzil.la/1858078) und [Firefox-Bug 1950836](https://bugzil.la/1950836))

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 138 enthalten und werden als experimentell betrachtet.
Sie können standardmäßig deaktiviert oder aktiviert sein, jedoch nur im Nightly-Build verfügbar sein.
Für Funktionen, die standardmäßig deaktiviert sind, suchen Sie auf der Seite `about:config` nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere Informationen zu solchen Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>`, die in verschachtelte Abschnitte eingefügt sind:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift wird nun nicht mehr kleiner, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Abschnittselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer schrittweisen Einführung dieser Entfernung wird bei 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: In der Nightly-Version ist sie auf `false` gesetzt, was die UA-Styling für Überschriften, die in Abschnittselementen verschachtelt sind, entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehenden UA-Styling für die verschachtelten Überschriften beibehält.

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`.

  Das CSS-{{cssxref("::details-content")}}-Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu stylen ([Firefox-Bug 1901037](https://bugzil.la/1901037)).

- **Pseudoelemente nach Element-gestützten Pseudoelementen**

  Es wurde begonnen, die Möglichkeit zu implementieren, [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [Element-gestützte Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) anzuhängen, wie z.B. {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}}. ([Firefox-Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Die Präferenz für diese Funktion hängt vom betriebenen Element-gestützten Pseudoelement ab, zum Beispiel: [`::details-content`](/de/docs/Mozilla/Firefox/Experimental_features#details-content_pseudo-element).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und die damit verbundenen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft kann die mit einer `Notification` verknüpften Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeit für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) erlaubt es Entwicklern, ungesicherte HTML-Strings zu nehmen und sie zu reinigen, damit sie sicher in das DOM eines Dokuments eingefügt werden können. ([Firefox-Bug 1950605](https://bugzil.la/1950605)), ([Firefox-Bug 1952250](https://bugzil.la/1952250)).

## Ältere Versionen

{{Firefox_for_developers}}
