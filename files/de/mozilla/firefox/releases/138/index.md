---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 39299b8233534cffca2650c0f22bbbb2bbe991de
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) Schlüssel. Dies ermöglicht es, dass die in den Import-Maps referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abgeglichen werden. Dadurch sind diese Module nun kompatibel mit [CSP](/de/docs/Web/HTTP/Guides/CSP) Richtlinien, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}} Eigenschaft. Der Hauptanwendungsfall besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Netzwerk-Cache des Browsers zu leeren. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten und ermöglicht es ihnen beispielsweise, das Risiko von Datenschutzverletzungen zu mindern, indem sie den Cache beim Abmelden leeren. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann nun von einer Website verwendet werden, um darauf hinzuweisen, dass das zugehörige Dokument in einem ursprungsbezogenen [agent cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden die vom Dokument verwendeten Betriebssystemprozesse und/oder andere OS-Ressourcen nur mit anderen Dokumenten vom selben {{Glossary("Origin", "Ursprung")}} geteilt.
  Dadurch ist es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einen ursprungsbezogenen Agenten-Cluster gelegt hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden.
  ([Firefox Bug 1665474](https://bugzil.la/1665474))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird nun unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzulegen und zu überprüfen, ob ein Browser-Benutzer bei einem Identitätsanbieter angemeldet ist.
  Dies umfasst die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und den {{httpheader("Set-Login")}} HTTP-Antwort-Header.
  ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können nun eine Präferenz für die Priorisierung von Bildrate oder Auflösung festlegen, wenn beide aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Ebenen gehalten werden können.
  Der Wert wird über die [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender`-Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird.
  ([Firefox Bug 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Alle Fernprotokolle aktivieren jetzt die Präferenzen, die erforderlich sind, um Protokolle ordnungsgemäß an stdout zu leiten ([Firefox Bug 1947740](https://bugzilla.mozilla.org/show_bug.cgi?id=1947740)).
- Ein neues Firefox-Argument, `--remote-enable-system-access`, wurde hinzugefügt, um sensible Funktionen zu aktivieren, wie z. B. die Interaktion mit Browsing-Contexts im übergeordneten Prozess (z. B. Browser-UI) oder die Verwendung von privilegierten APIs in Inhaltsprozessen. Dies wird in den nächsten Veröffentlichungen für WebDriver BiDi-Funktionen verwendet und kann bereits mit Marionette verwendet werden (siehe den Abschnitt Marionette unten) ([Firefox Bug 1944565](https://bugzilla.mozilla.org/show_bug.cgi?id=1944565)).

#### WebDriver BiDi

- Der `webExtension.install` Befehl installiert jetzt Web-Erweiterungen standardmäßig temporär, wodurch er mit unsignierten Erweiterungen verwendet werden kann - entweder als XPI-Datei oder als unverpackter Ordner. Ein neuer Firefox-spezifischer Parameter, `moz:permanent`, wurde hinzugefügt, um die Installation als reguläre Erweiterung zu erzwingen ([Firefox Bug 1947678](https://bugzilla.mozilla.org/show_bug.cgi?id=1947678)).
- Der `browsingContext.setViewport` Befehl unterstützt jetzt einen `userContexts` Parameter, der ein Array von Benutzerkontext- (Firefox-Container-) IDs sein muss. Wenn angegeben, wird die Viewport-Konfiguration auf alle zu diesen Benutzerkontexten gehörenden Browsing-Contexts sowie auf alle zukünftigen in ihnen erstellten Kontexte angewendet. Dieser Parameter kann nicht zusammen mit dem bestehenden `context` Parameter verwendet werden ([Firefox Bug 1940952](https://bugzilla.mozilla.org/show_bug.cgi?id=1940952)).
- Der `browsingContext.Info` Typ umfasst jetzt eine `clientWindow` Eigenschaft, die der ID des Fensters entspricht, dem der Browsing-Context gehört. Sie wird typischerweise von `browsingContext.getTree` zurückgegeben oder in der Nutzlast von Ereignissen wie `browsingContext.contextCreated` eingeschlossen ([Firefox Bug 1920952](https://bugzilla.mozilla.org/show_bug.cgi?id=1920952)).

#### Marionette

- Das Wechseln in den `chrome`-Kontext (übergeordneter Prozess) mit Marionette erfordert jetzt die Verwendung des `--remote-enable-system-access` Befehlszeilen-Flags beim Starten von Firefox ([Firefox Bug 1710425](https://bugzilla.mozilla.org/show_bug.cgi?id=1710425)).

## Änderungen für Add-on-Entwickler

- Unterstützung bereitgestellt für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen. Dies bietet Manifest V3 Erweiterungen die gleiche Fähigkeit wie Manifest V2 Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities` Berechtigung wird in Firefox für Android jetzt nicht mehr erkannt. Zuvor ermöglichte sie eine defekte Version der "Containers"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist nun auf Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise statt undefined zurück. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Verwaltung von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716))

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 138 eingeführt und gelten als experimentell.
Sie können standardmäßig deaktiviert sein oder standardmäßig aktiviert sein, aber nur in der Nightly-Build verfügbar.
Für standardmäßig deaktivierte Funktionen suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` verschachtelt in gliedernden Elementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verkleinert sich jetzt nicht mehr in der Schriftgröße, wenn sie innerhalb von [gliedernden Elementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb gliedernder Elemente verschachtelt sind, sind nicht mehr relevant, da der Umrissalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Als Teil eines stufenweisen Rollouts dieser Entfernung wird bei 5 % der Benutzer von Firefox 138 und 50 % der Benutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt ([Intent to unship: UA styles für h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Build auf `false` gesetzt, wodurch das UA-Styling für Überschriften, die in gliedernden Elementen verschachtelt sind, entfernt wird. Sie ist in allen anderen Kanälen auf `true` gesetzt, wodurch das bestehende UA-Styling für die verschachtelten Überschriften beibehalten wird.

- **::details-content CSS Pseudo-Element:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt in Firefox Nightly standardmäßig deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die mit einer `Notification` verknüpften Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeitmessung für Ereignisse zu erfassen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **Import-Attribut für JSON-Module** (Nightly): `javascript.options.experimental.import_attributes`

  Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt jetzt das Importieren von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attribut.

## Ältere Versionen

{{Firefox_for_developers}}
