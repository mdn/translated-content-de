---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 9d86be96f9c486e46ca0aab0c434ab23aa9ba444
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die sich auf Entwickler auswirken.
Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/de/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) Schlüssel. Dies ermöglicht es, die in den Importkarten referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abzugleichen. Infolgedessen sind diese Module jetzt mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven kompatibel, die Subressourcen-Integrität ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox-Bug 1945540](https://bugzil.la/1945540)).

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die {{jsxref("Error.captureStackTrace()")}} statische Methode wird jetzt unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}} Eigenschaft. Der Hauptanwendungsfall besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet ist. ([Firefox-Bug 1950508](https://bugzil.la/1950508)).
- Die {{jsxref("Error.isError()")}} statische Methode kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox-Bug 1952249](https://bugzil.la/1952249)).
- Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt jetzt das Importieren von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attribut.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Netzwerk-Cache des Browsers zu leeren. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten und ermöglicht es ihnen beispielsweise, das Risiko von Datenschutzverletzungen zu mindern, indem der Cache beim Abmelden geleert wird. ([Firefox-Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann jetzt von einer Website verwendet werden, um darauf hinzuweisen, dass das zugehörige Dokument in einem ursprungsbezogenen [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  Wenn es sich in einem solchen Cluster befindet, werden das vom Dokument verwendete Betriebssystemprozess und/oder andere OS-Ressourcen nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt.
  Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einen ursprungsbezogenen Agent-Cluster gesetzt hat, anhand der [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft.
  ([Firefox-Bug 1665474](https://bugzil.la/1665474))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browser-Benutzer bei einem Identitätsanbieter angemeldet ist.
  Dies umfasst die Unterstützung der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, der [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und der {{httpheader("Set-Login")}} HTTP-Antwort-Header.
  ([Firefox-Bug 1945576](https://bugzil.la/1945576) und [Firefox‑Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt die bidirektionale Nachrichtenübermittlung über ein [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und ein [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen dem Code im Haupt-Thread und dem globalen Gültigkeitsbereich einer Audio-Worklet, z. B. zum Empfangen von Steuerdaten oder globalen Einstellungen. ([Firefox-Bug 1951240](https://bugzil.la/1951240))

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz festlegen, ob die Bildrate oder die Auflösung priorisiert werden soll, wenn beides aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Levels gehalten werden kann.
  Der Wert wird mithilfe der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird.
  Es kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird.
  ([Firefox-Bug 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle entfernten Protokolle aktivieren jetzt die erforderlichen Präferenzen, um Protokolle ordnungsgemäß an stdout zu leiten ([Firefox-Bug 1947740](https://bugzilla.mozilla.org/show_bug.cgi?id=1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um empfindliche Funktionen zu aktivieren, wie z.B. die Interaktion mit Browsing-Kontexten im übergeordneten Prozess (z.B. Browser-Benutzeroberfläche) oder die Verwendung von privilegierten APIs in Inhaltsprozessen. Dies wird für WebDriver BiDi Funktionen in den nächsten Veröffentlichungen verwendet und kann bereits mit Marionette verwendet werden (siehe den Marionette Abschnitt unten) ([Firefox-Bug 1944565](https://bugzilla.mozilla.org/show_bug.cgi?id=1944565)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` installiert jetzt Web-Erweiterungen standardmäßig vorübergehend, was es ermöglicht, nicht signierte Erweiterungen zu verwenden - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer, Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox-Bug 1947678](https://bugzilla.mozilla.org/show_bug.cgi?id=1947678)).
- Der Befehl `browsingContext.setViewport` unterstützt jetzt einen `userContexts` Parameter, der ein Array von User Context (Firefox-Container) IDs sein muss. Wenn er angegeben ist, wird die Viewport-Konfiguration auf alle Browsing-Kontexte angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die innerhalb dieser erstellt werden. Dieser Parameter kann nicht zusammen mit dem vorhandenen `context` Parameter verwendet werden ([Firefox-Bug 1940952](https://bugzilla.mozilla.org/show_bug.cgi?id=1940952)).
- Der `browsingContext.Info` Typ enthält jetzt eine `clientWindow` Eigenschaft, die der ID des Fensters entspricht, das den Browsing-Kontext besitzt. Sie wird typischerweise von `browsingContext.getTree` zurückgegeben oder ist im Payload von Ereignissen wie `browsingContext.contextCreated` enthalten ([Firefox-Bug 1920952](https://bugzilla.mozilla.org/show_bug.cgi?id=1920952)).

#### Marionette

- Der Wechsel zum `chrome` (übergeordneter Prozess) Kontext mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access` Befehlszeilen-Flags beim Starten von Firefox ([Firefox-Bug 1710425](https://bugzilla.mozilla.org/show_bug.cgi?id=1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als ein {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen hinzugefügt. Dies bietet Manifest V3 Erweiterungen die gleiche Möglichkeit wie Manifest V2 Erweiterungen, Menüelemente zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API wird in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber defekt. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities` Berechtigung wird in Firefox für Android jetzt nicht mehr erkannt. Zuvor aktivierte sie eine fehlerhafte Version des "Containers" Features. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))
- Die Implementierung der {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In früheren Versionen war diese Methode verfügbar, aber tat nichts. ([Firefox-Bug 1657575](https://bugzil.la/1657575))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox-Bug 1869171](https://bugzil.la/1869171))
- Unterstützung zur Manipulation von Tabs innerhalb von Tab-Gruppen hinzugefügt, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox-Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox-Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox-Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox-Bug 1959716](https://bugzil.la/1959716))

### Entfernungen

### Andere

## Experimentelle Web-Features

Diese Features sind neu in Firefox 138 eingeführt und gelten als experimentell.
Sie können standardmäßig deaktiviert oder aktiviert sein, aber nur in der Nightly-Version verfügbar sein.
Bei Features, die standardmäßig deaktiviert sind, suchen Sie nach der entsprechenden Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **UA-Stile für `<h1>`, das in Abschnittselemente verschachtelt ist:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift verringert sich jetzt nicht mehr in der Schriftgröße, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` innerhalb von Abschnittselementen sind nicht mehr relevant, da der Gliederungsalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer gestaffelten Einführung dieser Entfernung wird bei 5 % der Benutzer von Firefox 138 und 50 % der Benutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, was das UA-Styling für in Abschnittselementen verschachtelte Überschriften entfernt. Sie ist in allen anderen Kanälen auf `true` gesetzt, was das bestehende UA-Styling für die verschachtelten Überschriften beibehält.

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox-Bug 1901037](https://bugzil.la/1901037)).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und die damit verbundenen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`,`DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die mit einer `Notification` verbundenen Aktionen erhalten, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeit für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

## Ältere Versionen

{{Firefox_for_developers}}
