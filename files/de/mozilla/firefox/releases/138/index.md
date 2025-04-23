---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 364ac5bc62331153a6a7daaba93ee3cd0396d18f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) Schlüssel. Dies erlaubt es, dass die in den Importmaps referenzierten ES-Modul-URLs mit ihren Integritätsmetadaten abgeglichen werden können. Infolgedessen sind diese Module jetzt mit [CSP](/de/docs/Web/HTTP/Guides/CSP) Direktiven kompatibel, die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox Bug 1945540](https://bugzil.la/1945540)).

#### Entfernt

### CSS

#### Entfernt

### JavaScript

- Die {{jsxref("Error.captureStackTrace()")}} statische Methode wird nun unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}} Eigenschaft. Der Hauptverwendungszweck ist die Installation eines Stack-Trace auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die {{jsxref("Error.isError()")}} statische Methode kann nun verwendet werden, um zu prüfen, ob ein Objekt eine Instanz von einem {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` zu demselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).

#### Entfernt

### SVG

#### Entfernt

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (und `*`) Direktive verwendet werden, um den Browser-Netzwerkcache zu löschen. Dies gibt Websites mehr Kontrolle über die für ihre Nutzer gespeicherten Daten, indem sie beispielsweise das Risiko von Datenschutzverletzungen durch das Löschen des Caches während des Ausloggens mindern. ([Firefox Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann nun von einer Website verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem ursprungsbasierten [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden der vom Betriebssystem verwendete Prozess und/oder andere Betriebssystemressourcen, die vom Dokument verwendet werden, nur mit anderen Dokumenten von demselben {{Glossary("Origin", "Ursprung")}} geteilt.
  Dies macht es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten anderer Ursprünge beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einem ursprungsbasierten Agent-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft verwenden.
  ([Firefox Bug 1665474](https://bugzil.la/1665474))

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird nun unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browser-Nutzer bei einem Identitätsanbieter angemeldet ist.
  Dies umfasst die Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft und den {{httpheader("Set-Login")}} HTTP-Antwort-Header.
  ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können nun eine Präferenz für die Priorisierung von Bildrate oder Auflösung festlegen, wenn beides aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Ebenen gehalten werden kann.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender` Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird.
  ([Firefox Bug 1329847](https://bugzil.la/1329847)).

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen hinzugefügt. Dies bietet Manifest V3-Erweiterungen die gleiche Möglichkeit wie Manifest V2-Erweiterungen, um Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist nun in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, jedoch defekt. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities` Berechtigung wird in Firefox für Android jetzt nicht mehr erkannt. Zuvor erlaubte sie eine fehlerhafte Version der "Containers"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Version der {{WebExtAPIRef("userScripts")}} API für Manifest V3 ist nun auf Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise zurück, anstatt undefined. ([Firefox Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen. Dazu gehört:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox Bug 1959716](https://bugzil.la/1959716)

### Entfernt

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 138 verfügbar und werden als experimentell angesehen.
Sie können standardmäßig deaktiviert sein oder standardmäßig aktiviert sein, aber nur im Nightly-Build verfügbar.
Für Funktionen, die standardmäßig deaktiviert sind, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Sie können weitere solche Funktionen auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite finden.

- **UA-Stile für `<h1>` verschachtelt in Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift wird nun nicht mehr in der Schriftgröße reduziert, wenn sie in [Gliederungselemente](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` verschachtelt in Gliederungselementen sind nicht mehr relevant, da der Gliederungsalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines gestuften Rollouts dieser Entfernung wird 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt. ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Einstellung für diese Funktion funktioniert umgekehrt: In der Nightly-Build ist sie auf `false` gesetzt, was die UA-Stilierung für Überschriften, die in Gliederungselementen verschachtelt sind, entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehende UA-Stilierung für die verschachtelten Überschriften beibehält.

- **::details-content CSS-Pseudo-Element:** `layout.css.details-content.enabled`.

  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugeordneten Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt in Firefox Nightly standardmäßig deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die mit einer `Notification` verbundenen Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Verzögerungszeitmessung für Ereignisse zu erfassen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

- **Importattribut für JSON-Module** (Nightly): `javascript.options.experimental.import_attributes`

  Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration unterstützt jetzt das Importieren von JSON-Modulen mit dem [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Attribut.

## Ältere Versionen

{{Firefox_for_developers}}
