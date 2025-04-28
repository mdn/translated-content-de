---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

- Der Wert [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den Schlüssel [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity). Dies ermöglicht es, die ES-Modul-URLs, die in den Importkarten referenziert werden, mit ihren Integritätsmetadaten abzugleichen. Infolgedessen sind diese Module jetzt mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven kompatibel, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird nun unterstützt. Diese installiert Stapelverlauf-Informationen auf einem bereitgestellten Objekt als die Eigenschaft {{jsxref("Error.stack")}}. Der Hauptanwendungsfall besteht darin, einen Stapelverlauf auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz von einem {{jsxref("Error")}} oder einem [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt jetzt das Importieren von JSON-Modulen unter Verwendung des [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attributs.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Netzwerkkachel-Cache des Browsers zu löschen. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten und ermöglicht es ihnen beispielsweise, das Risiko von Privacy-Lecks zu mindern, indem der Cache beim Ausloggen gelöscht wird. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwortheader kann jetzt von einer Seite verwendet werden, um anzudeuten, dass das zugehörige Dokument in einen ursprungsschlüsselbasierten [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte. In einem solchen Cluster werden der vom Dokument genutzte Betriebssystemprozess und/oder andere OS-Ressourcen nur mit anderen Dokumenten vom selben {{Glossary("Origin", "Ursprung")}} geteilt. Dies macht es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten anderer Ursprünge beeinträchtigt. Entwickler können testen, ob der Browser das Dokument in einen ursprungsschlüsselbasierten Agenten-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden. ([Firefox Bug 1665474](https://bugzil.la/1665474))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browserbenutzer bei einem Identitätsanbieter eingeloggt ist. Dies schließt die Unterstützung der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, der [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und des {{httpheader("Set-Login")}} HTTP-Antwort-Headers ein. ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einem [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einem [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port). Dies ermöglicht die benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio-Worklets, wie z. B. dem Empfang von Steuerdaten oder globalen Einstellungen. ([Firefox Bug 1951240](https://bugzil.la/1951240))

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz für die Priorisierung von Bildrate oder Auflösung festlegen, wenn beides aufgrund einer Netzwerkverschlechterung nicht auf den konfigurierten Ebenen gehalten werden kann. Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird. Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird. ([Firefox Bug 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Remote-Protokolle aktivieren jetzt die Präferenzen, die erforderlich sind, um Protokolle ordnungsgemäß an stdout zu leiten ([Firefox Bug 1947740](https://bugzil.la/1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie z. B. das Interagieren mit Browsing-Kontexten im übergeordneten Prozess (z. B. Browser-UI) oder das Verwenden privilegierter APIs in Inhaltsprozessen. Dies wird in den nächsten Versionen für WebDriver BiDi-Funktionen verwendet und kann bereits mit Marionette verwendet werden (siehe unten den Abschnitt Marionette) ([Firefox Bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` installiert jetzt standardmäßig Web-Erweiterungen temporär, sodass er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als nicht komprimierter Ordner. Ein neuer, Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzil.la/1947678)).
- Der Befehl `browsingContext.setViewport` unterstützt jetzt einen `userContexts` Parameter, der ein Array von Benutzerkontext- (Firefox-Container-) IDs sein muss. Wenn vorhanden, wird die Ansichtsfensterkonfiguration auf alle Browsing-Kontexte, die zu diesen Benutzerkontexten gehören, sowie auf zukünftige Kontexte, die in ihnen erstellt werden, angewendet. Dieser Parameter kann nicht zusammen mit dem bestehenden `context` Parameter verwendet werden ([Firefox Bug 1940952](https://bugzil.la/1940952)).
- Der Typ `browsingContext.Info` enthält jetzt eine `clientWindow` Eigenschaft, die der ID des Fensters entspricht, dem der Browsing-Kontext gehört. Typischerweise wird sie von `browsingContext.getTree` zurückgegeben oder in der Nutzlast von Ereignissen wie `browsingContext.contextCreated` eingeschlossen ([Firefox Bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Um zum `chrome` (übergeordneten Prozess) Kontext mit Marionette zu wechseln, muss jetzt das Kommandozeilenflag `--remote-enable-system-access` beim Starten von Firefox verwendet werden ([Firefox Bug 1710425](https://bugzil.la/1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen bereitgestellt. Dies gibt Manifest V3-Erweiterungen die gleiche Fähigkeit wie Manifest V2-Erweiterungen, Menüelemente zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die Berechtigung `contextualIdentities` wird in Firefox für Android jetzt nicht mehr anerkannt. Zuvor aktivierte sie eine fehlerhafte Version der "Containers"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Implementiert die {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen wurde diese Methode exponiert, tat jedoch nichts. ([Firefox Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Aufnahme von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716))

### Entfernungen

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 138 und werden als experimentell betrachtet. Sie können standardmäßig deaktiviert oder standardmäßig aktiviert sein, aber nur im Nightly-Build verfügbar. Für Funktionen, die standardmäßig deaktiviert sind, suchen Sie auf der Seite `about:config` die entsprechende Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite über [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` innerhalb von Strukturelementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift wird jetzt nicht mehr in der Schriftgröße verringert, wenn sie innerhalb von [Strukturelementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` innerhalb von Strukturelementen sind nicht mehr relevant, da der Umriss-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines gestaffelten Rollouts dieser Entfernung werden 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 den Wert `layout.css.h1-in-section-ua-styles.enabled` auf `false` gestellt haben ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Im Nightly-Build ist sie auf `false` gesetzt, wodurch das UA-Styling für Überschriften, die in Strukturelementen verschachtelt sind, entfernt wird. In allen anderen Kanälen ist sie auf `true` gesetzt, was das vorhandene UA-Styling für die verschachtelten Überschriften beibehält.

- **::details-content CSS-Pseudo-Element:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die Aktionen abrufen, die mit einer `Notification` assoziiert sind, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

## Ältere Versionen

{{Firefox_for_developers}}
