---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 14edd6ee90c6de6ff2bcebd27e527ea65338786a
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 ist die aktuelle [Betaversion von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

- Der Wert [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt nun den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) Schlüssel. Dies ermöglicht es, die in den Importmaps referenzierten ES-Modul-URLs mit ihren Integritäts-Metadaten abzugleichen. Folglich sind diese Module nun mit [CSP](/de/docs/Web/HTTP/Guides/CSP) Direktiven kompatibel, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Informationen zur Stapelverfolgung auf einem übergebenen Objekt als die {{jsxref("Error.stack")}} Eigenschaft. Der Hauptanwendungsfall ist das Installieren einer Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann nun verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Browsernetzwerk-Cache zu leeren. Dies gibt Websites mehr Kontrolle über die für ihre Nutzer gespeicherten Daten, sodass sie beispielsweise das Risiko von Datenschutzlecks durch das Löschen des Caches beim Logout verringern können. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP-{{httpheader("Origin-Agent-Cluster")}} Antwortheader kann nun von einer Website verwendet werden, um anzuzeigen, dass das zugehörige Dokument in einem ursprungsverknüpften [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden der vom Dokument verwendete Betriebssystemprozess und/oder andere OS-Ressourcen nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt.
  Dies macht es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einem ursprungsverknüpften Agent-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden.
  ([Firefox Bug 1665474](https://bugzil.la/1665474))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt verwendet, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um zu prüfen, ob ein Browserbenutzer bei einem Identitätsanbieter angemeldet ist.
  Dies beinhaltet die Unterstützung der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, der [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und des {{httpheader("Set-Login")}} HTTP-Antwortheaders.
  ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) unterstützt jetzt bidirektionale Nachrichtenübermittlung auf einer [`AudioWorklet.port`](/de/docs/Web/API/AudioWorklet/port) und einer [`AudioWorkletGlobalScope.port`](/de/docs/Web/API/AudioWorkletGlobalScope/port).
  Dies ermöglicht die benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Bereich eines Audio-Worklets, wie zum Beispiel das Empfangen von Steuerungsdaten oder globalen Einstellungen. ([Firefox Bug 1951240](https://bugzil.la/1951240))

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können nun eine Präferenz für die Priorisierung von Bildfrequenz oder Auflösung festlegen, wenn beide aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Werten gehalten werden können.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das der [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird.
  ([Firefox Bug 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle entfernten Protokolle aktivieren jetzt die erforderlichen Präferenzen, um Protokolle ordnungsgemäß an stdout zu leiten ([Firefox Bug 1947740](https://bugzilla.mozilla.org/show_bug.cgi?id=1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie das Interagieren mit Browsing Contexts im übergeordneten Prozess (z. B. Browser-UI) oder die Verwendung privilegierter APIs in Inhaltsprozessen. Dies wird für WebDriver BiDi-Funktionen in den nächsten Versionen verwendet und kann bereits mit Marionette genutzt werden (siehe den Abschnitt Marionette unten) ([Firefox Bug 1944565](https://bugzilla.mozilla.org/show_bug.cgi?id=1944565)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` installiert nun Web-Erweiterungen standardmäßig vorübergehend, sodass er auch mit nicht signierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als entpackter Ordner. Ein neuer Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation stattdessen als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzilla.mozilla.org/show_bug.cgi?id=1947678)).
- Der Befehl `browsingContext.setViewport` unterstützt nun einen `userContexts` Parameter, der ein Array von Benutzerkontext- (Firefox-Container-)IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle Browsing Contexts angewendet, die zu diesen Benutzerkontexten gehören, sowie auf alle zukünftigen Kontexte, die innerhalb dieser erstellt werden. Dieser Parameter kann nicht zusammen mit dem bestehenden `context` Parameter verwendet werden ([Firefox Bug 1940952](https://bugzilla.mozilla.org/show_bug.cgi?id=1940952)).
- Der Typ `browsingContext.Info` umfasst nun eine `clientWindow` Eigenschaft, die der ID des Fensters entspricht, das den Browsing Context besitzt. Diese wird typischerweise von `browsingContext.getTree` zurückgegeben oder im Payload von Ereignissen wie `browsingContext.contextCreated` eingeschlossen ([Firefox Bug 1920952](https://bugzilla.mozilla.org/show_bug.cgi?id=1920952)).

#### Marionette

- Zum Wechseln in den `chrome` (übergeordneten Prozess) Kontext mit Marionette ist jetzt die Verwendung des Kommandozeilenarguments `--remote-enable-system-access` erforderlich, wenn Firefox gestartet wird ([Firefox Bug 1710425](https://bugzilla.mozilla.org/show_bug.cgi?id=1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung wird für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen bereitgestellt. Dies bietet Manifest V3 Erweiterungen die gleiche Möglichkeit wie Manifest V2 Erweiterungen, Menüpunkte zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API wird nicht länger in Firefox für Android definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities` Erlaubnis wird nun in Firefox für Android nicht mehr erkannt. Zuvor aktivierte sie eine fehlerhafte Version der "Container"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API kehrt nun ein Promise zurück, anstatt undefiniert zu sein. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tabgruppen zu ermöglichen, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen werden neu in Firefox 138 bereitgestellt und gelten als experimentell. Sie sind möglicherweise standardmäßig deaktiviert oder standardmäßig aktiviert, aber nur im Nightly-Build verfügbar. Für standardmäßig deaktivierte Funktionen suchen Sie nach der entsprechenden Präferenz auf der `about:config` Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite zu [experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` innerhalb von Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die Schriftgröße der `<h1>` Überschrift verringert sich jetzt nicht mehr, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer gestuften Einführung dieser Entfernung wird der Wert von `layout.css.h1-in-section-ua-styles.enabled` bei 5% der Benutzer von Firefox 138 und 50% der Benutzer von Firefox Beta 138 auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was die UA-Stilierung für in Gliederungselementen verschachtelte Überschriften entfernt. Sie ist in allen anderen Kanälen auf `true` gesetzt und behält die bestehende UA-Stilierung für die verschachtelten Überschriften bei.

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und die zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die Aktionen abrufen, die mit einer `Notification` verbunden sind, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **Import-Attribut für JSON-Module** (Nightly): `javascript.options.experimental.import_attributes`

  Der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Befehl unterstützt jetzt das Importieren von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attribut.

## Ältere Versionen

{{Firefox_for_developers}}
