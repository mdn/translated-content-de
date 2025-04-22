---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 5f1165b066eac374ec0bcd43dc1a4354ada51d4b
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Der [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributes des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements unterstützt jetzt den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity)-Schlüssel. Dies ermöglicht es, die in den Import-Maps referenzierten ES-Modul-URLs mit ihren Integritäts-Metadaten abzugleichen. Dadurch sind diese Module nun mit [CSP](/de/docs/Web/HTTP/Guides/CSP)-Richtlinien kompatibel, die die Subresource Integrity ([SRI](/de/docs/Web/Security/Practical_implementation_guides/SRI)) erfordern. ([Firefox-Bug 1945540](https://bugzil.la/1945540)).

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft. Der Hauptanwendungsfall besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox-Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz von {{jsxref("Error")}} oder ein [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als `instanceof` für denselben Zweck zu verwenden. ([Firefox-Bug 1952249](https://bugzil.la/1952249)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit der [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-(und `*`) Direktive verwendet werden, um den Browser-Netzwerkcache zu löschen. Dies gibt Websites mehr Kontrolle über die für ihre Benutzer gespeicherten Daten und ermöglicht es ihnen beispielsweise, das Risiko von Datenschutzlecks zu verringern, indem sie den Cache beim Abmelden löschen. ([Firefox-Bug 1942272](https://bugzil.la/1930500)).
- Der HTTP {{httpheader("Origin-Agent-Cluster")}} Antwort-Header kann von einer Website verwendet werden, um darauf hinzuweisen, dass das zugehörige Dokument in einem ursprungsbasierten [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden der Betriebssystemprozess und/oder andere Betriebssystemressourcen, die das Dokument nutzt, nur mit anderen Dokumenten desselben {{Glossary("Origin", "Ursprungs")}} geteilt.
  Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einem ursprungsbasierten Agenten-Cluster platziert hat, indem sie die [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)-Eigenschaft verwenden.
  ([Firefox-Bug 1665474](https://bugzil.la/1665474))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browser-Benutzer bei einem Identitätsanbieter angemeldet ist.
  Dies umfasst die Unterstützung der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, der [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und des {{httpheader("Set-Login")}} HTTP-Antwort-Headers.
  ([Firefox-Bug 1945576](https://bugzil.la/1945576) und [Firefox-Bug 1945573](https://bugzil.la/1945573)).

#### DOM

#### Medien, WebRTC und Webaudio

- WebRTC-Anwendungen können jetzt eine Präferenz zum Priorisieren von Bildrate oder Auflösung festlegen, wenn beide aufgrund von Netzwerkverschlechterung nicht auf den konfigurierten Ebenen gehalten werden können.
  Der Wert wird mithilfe der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Methode der `RTCRtpSender`-Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference)-Methode zurückgegeben wird.
  ([Firefox-Bug 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-On-Entwickler

- Unterstützung bereitgestellt für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen. Dies bietet Manifest V3-Erweiterungen dieselbe Möglichkeit wie Manifest V2-Erweiterungen, Menüpunkte zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird in Firefox für Android jetzt nicht mehr erkannt. Zuvor aktivierte sie eine fehlerhafte Version der "Container"-Funktion. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Versprechen anstelle von undefined zurück. ([Firefox-Bug 1869171](https://bugzil.la/1869171))
- Unterstützung hinzugefügt, um die Manipulation von Tabs innerhalb von Tab-Gruppen zu ermöglichen, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox-Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox-Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox-Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox-Bug 1959716](https://bugzil.la/1959716))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 138 und gelten als experimentell. Sie können standardmäßig deaktiviert sein oder standardmäßig aktiviert sein, aber nur im Nightly-Build verfügbar sein. Für Features, die standardmäßig deaktiviert sind, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>`, eingebettet in Abschnittselemente:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die Größe der Schriftart der `<h1>`-Überschrift verringert sich jetzt nicht mehr, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>` und `<section>` eingebettet ist. Die UA-Stile für `<h1>`, die in Abschnittselemente eingebettet sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer gestaffelten Einführung dieser Entfernung wird der Wert von `layout.css.h1-in-section-ua-styles.enabled` bei 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 auf `false` gesetzt ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was die UA-Stilgebung für in Abschnittselemente eingebettete Überschriften entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, wodurch die vorhandene UA-Stilgebung für die eingebetteten Überschriften beibehalten wird.

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`.

  Das CSS-{{cssxref("::details-content")}}-Pseudoelement ermöglicht Ihnen die Gestaltung des Inhalts des {{htmlElement("details")}}-Elements ([Firefox-Bug 1901037](https://bugzil.la/1901037)).

- **`MutationEvent` auf dem Weg zur Entfernung**: `dom.mutation_events.enabled`

  [`MutationEvent`](/de/docs/Web/API/MutationEvent) und die damit verbundenen Events (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft kann die Aktionen ermitteln, die mit einer `Notification` verbunden sind, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeit für Ereignisse zu messen, die durch eine bestimmte Nutzerinteraktion ausgelöst werden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

- **Importattribut für JSON-Module** (Nightly): `javascript.options.experimental.import_attributes`

  Die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration unterstützt jetzt das Importieren von JSON-Modulen mithilfe des [`with`](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Attributs.

## Ältere Versionen

{{Firefox_for_developers}}
