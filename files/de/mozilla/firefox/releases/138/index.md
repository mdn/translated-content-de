---
title: Firefox 138 Release Notes für Entwickler
short-title: Firefox 138
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: b63437e072cf5eac5d56e54454116bcc41b5c28b
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 wurde am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt nun den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) Schlüssel. Dies ermöglicht es, dass ES-Modul-URLs, die in den Import-Maps referenziert werden, mit ihren Integritätsmetadaten abgeglichen werden. Infolgedessen sind diese Module jetzt kompatibel mit [CSP](/de/docs/Web/HTTP/Guides/CSP) Direktiven, die Subresource-Integrität ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als die {{jsxref("Error.stack")}} Eigenschaft. Der Hauptanwendungsfall ist die Installation einer Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu prüfen, ob ein Objekt eine Instanz von {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt nun den Import von JSON-Modulen mithilfe des [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attributs.

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Browser-Netzwerkcache zu leeren. Dies gibt Websites mehr Kontrolle über die für ihre Nutzer gespeicherten Daten, um beispielsweise das Risiko von Datenschutzlecks zu verringern, indem der Cache beim Abmelden geleert wird. ([Firefox Bug 1930500](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann nun von einer Website verwendet werden, um darauf hinzuweisen, dass das zugehörige Dokument in einem ursprungsschlüsselbasierten [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte. In einem solchen Cluster werden der vom Dokument verwendete Betriebssystemprozess und/oder andere Betriebssystemressourcen nur mit anderen Dokumenten aus demselben {{Glossary("Origin", "Ursprung")}} geteilt. Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt. Entwickler können testen, ob der Browser das Dokument in einen ursprungsschlüsselbasierten Agent-Cluster gelegt hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden. ([Firefox Bug 1665474](https://bugzil.la/1665474))

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann genutzt werden, um festzustellen und zu überprüfen, ob ein Browser-Nutzer bei einem Identitätsanbieter angemeldet ist. Dies umfasst die Unterstützung der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, der [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und des {{httpheader("Set-Login")}} HTTP-Antwort-Headers. ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einer [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einer [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port). Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio-Worklets, z.B. zum Empfang von Steuerdaten oder globalen Einstellungen. ([Firefox Bug 1951240](https://bugzil.la/1951240))
- Die [`getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints) Methode der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) Schnittstelle wird jetzt unterstützt. Eine Anwendung kann dies verwenden, um Fingerabdrücke für ein Zertifikat zu erhalten, das möglicherweise außerhalb der Bandbreite geteilt wird, um einen bestimmten Benutzer oder Browser über WebRTC-Sitzungen hinweg zu identifizieren. ([Firefox Bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz für die Priorisierung von Bildrate oder Auflösung festlegen, wenn beide aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Ebenen gehalten werden können. Der Wert wird über die [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird. Es kann auch aus dem Objekt ausgelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird. ([Firefox Bug 1329847](https://bugzil.la/1329847)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Remote-Protokolle aktivieren jetzt die Präferenzen, die erforderlich sind, um Protokolle ordnungsgemäß an stdout weiterzuleiten. ([Firefox Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie z.B. die Interaktion mit Browsing-Kontexten im Hauptprozess (z.B. Browser-UI) oder die Verwendung privilegierter APIs in Inhaltsprozessen. Dies wird für WebDriver BiDi-Funktionen in den nächsten Releases verwendet und kann bereits mit Marionette verwendet werden (siehe den Marionette-Abschnitt unten) ([Firefox Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` installiert jetzt Web-Erweiterungen standardmäßig vorübergehend, sodass er mit nicht signierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer, spezifischer Parameter für Firefox, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzil.la/1947678)).
- Der Befehl `browsingContext.setViewport` unterstützt jetzt einen `userContexts` Parameter, der ein Array von Benutzerkontext-IDs (Firefox Container) sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die diesen Benutzerkontexten angehören, sowie auf alle in ihnen erstellten zukünftigen Kontexte. Dieser Parameter kann nicht zusammen mit dem vorhandenen `context` Parameter verwendet werden ([Firefox Bug 1940952](https://bugzil.la/1940952)).
- Der `browsingContext.Info` Typ enthält jetzt eine `clientWindow` Eigenschaft, die der ID des Fensters entspricht, das den Browsing-Kontext besitzt. Diese wird typischerweise von `browsingContext.getTree` zurückgegeben oder ist im Payload von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Der Wechsel zum `chrome` (Hauptprozess) Kontext mit Marionette erfordert jetzt die Verwendung des Befehlszeilen-Flags `--remote-enable-system-access` beim Start von Firefox ([Firefox Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen hinzugefügt. Dies bietet Manifest V3 Erweiterungen dieselbe Möglichkeit wie Manifest V2 Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities` Berechtigung wird in Firefox für Android jetzt nicht mehr erkannt. Zuvor aktivierte sie eine fehlerhafte Version der "Container" Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Implementiert die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen wurde diese Methode exponiert, aber tat nichts. ([Firefox Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Versprechen zurück, anstatt `undefined`. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716))
- Der `json` Ressourcen-Typ wird jetzt sowohl in {{WebExtAPIRef("webRequest.ResourceType")}} als auch in {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} in Firefox unterstützt, mit aktivierten Importattributen standardmäßig. Zuvor wurde er als `script` gemeldet. ([Firefox Bug 1858078](https://bugzil.la/1858078) und [Firefox Bug 1950836](https://bugzil.la/1950836))

## Experimentelle Web-Features

Diese Funktionen werden neu in Firefox 138 ausgeliefert und gelten als experimentell. Sie können standardmäßig deaktiviert oder standardmäßig aktiviert sein, sind jedoch nur in der Nightly-Version verfügbar. Bei deaktivierten Funktionen suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>`, die in Abschnittselemente eingebettet sind:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift wird jetzt nicht mehr in der Schriftgröße verringert, wenn sie in [Abschnittselemente](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` eingebettet ist. Die UA-Stile für `<h1>`, die in Abschnittselemente eingebettet sind, sind nicht mehr relevant, da der Umrissalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Als Teil eines gestaffelten Rollouts dieser Entfernung werden 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 den Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt haben ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` eingestellt, was die UA-Stilisierung für in Abschnittselemente eingebettete Überschriften entfernt. In allen anderen Kanälen ist sie auf `true` eingestellt, was die bestehende UA-Stilisierung für die eingebetteten Überschriften beibehält.

- **`::details-content` CSS Pseudo-Element:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen. ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **Erlauben von Pseudo-Elementen nach elementgestützten Pseudo-Elementen**

  Die Arbeit hat begonnen, um [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen. ([Firefox Bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > Diese Funktion hängt von der Unterstützung für das elementgestützte Pseudo-Element ab, das gezielt wird, zum Beispiel: {{cssxref("::details-content")}}, das hinter der `layout.css.details-content.enabled` Präferenz steht.

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und die zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die Aktionen abrufen, die mit einer `Notification` verknüpft sind, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenz-Zeitmessung für Ereignisse zu ermitteln, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, nicht vertrauenswürdige HTML-Zeichenketten zu sanitizieren, damit sie sicher in das DOM eines Dokuments eingefügt werden können. ([Firefox Bug 1950605](https://bugzil.la/1950605), [Firefox Bug 1952250](https://bugzil.la/1952250)).
