---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: da342187abedb56612c08b166eb5594552b670e4
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird nun unterstützt. Diese fügt einem bereitgestellten Objekt Stapelverfolgungsinformationen als die Eigenschaft {{jsxref("Error.stack")}} hinzu. Ihr Hauptanwendungsfall besteht darin, eine Stapelverfolgung bei einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der Schnittstelle {{jsxref("Error")}} abgeleitet ist. ([Firefox-Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu prüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder eines [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` zum gleichen Zweck. ([Firefox-Bug 1952249](https://bugzil.la/1952249)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der HTTP-Antwort-Header {{httpheader("Origin-Agent-Cluster")}} kann jetzt von einer Website verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem ursprungsbezogenen [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden vom Betriebssystem genutzte Prozesse und/oder Ressourcen des Betriebssystems nur mit anderen Dokumenten vom gleichen {{Glossary("Origin", "Ursprung")}} geteilt. Dies reduziert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einen ursprungsbezogenen Agenten-Cluster platziert hat, indem sie die Eigenschaft [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) verwenden.
  ([Firefox-Bug 1665474](https://bugzil.la/1665474))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt beim Verwenden der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt. Sie kann verwendet werden, um zu setzen und zu prüfen, ob ein Browsernutzer bei einem Identity-Provider angemeldet ist.
  Dies umfasst Unterstützung für die Schnittstelle [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin), die Eigenschaft [`navigator.login`](/de/docs/Web/API/Navigator/login) und den HTTP-Antwort-Header {{httpheader("Set-Login")}}.
  ([Firefox-Bug 1945576](https://bugzil.la/1945576) und [Firefox-Bug 1945573](https://bugzil.la/1945573)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz setzen, um Bildrate oder Auflösung zu priorisieren, wenn beide aufgrund von Netzwerkverschlechterungen nicht auf dem konfigurierten Niveau gehalten werden können.
  Der Wert wird mit der Eigenschaft [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) im Parameterobjekt festgelegt, das an die Methode [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) der Schnittstelle `RTCRtpSender` übergeben wird.
  Es kann auch aus dem Objekt gelesen werden, das von der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) zurückgegeben wird.
  ([Firefox-Bug 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen. Dies bietet Manifest V3-Erweiterungen die gleiche Möglichkeit wie Manifest V2-Erweiterungen, Menüelemente zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Vorher war sie definiert, jedoch fehlerhaft. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die Berechtigung `contextualIdentities` wird in Firefox für Android jetzt nicht anerkannt. Vorher ermöglichte sie eine fehlerhafte Version des "Containers"-Features. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist nun in Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox-Bug 1869171](https://bugzil.la/1869171))
- Unterstützung zur Manipulation von Tabs innerhalb von Tab-Gruppen hinzugefügt, einschließlich der Hinzufügung von:
  - {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox-Bug 1959714](https://bugzil.la/1959714))
  - `groupId` zu {{WebExtAPIRef("tabs.Tab")}}. ([Firefox-Bug 1959713](https://bugzil.la/1959713))
  - `groupId` zu {{WebExtAPIRef("tabs.query")}}. ([Firefox-Bug 1959715](https://bugzil.la/1959715))
  - `groupId` zu {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox-Bug 1959716](https://bugzil.la/1959716))

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 138 ausgeliefert, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` verschachtelt in Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift verringert sich jetzt nicht mehr in der Schriftgröße, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen einer gestaffelten Deaktivierung haben 5% der Benutzer von Firefox 138 und 50% der Benutzer von Firefox Beta 138 den Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt. ([Absicht zur Entfernung: UA-Stile für h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Einstellung für diese Funktion wirkt umgekehrt: Sie ist im Nightly Build auf `false` gesetzt, was die UA-Stile für Überschriften in Gliederungselementen entfernt. In allen anderen Kanälen bleibt sie auf `true`, was die vorhandenen UA-Stile für die verschachtelten Überschriften beibehält.

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`.
  Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht das Styling des Inhalts des {{htmlElement("details")}} Elements ([Firefox-Bug 1901037](https://bugzil.la/1901037)).
- **`MutationEvent` auf dem Weg zur Entfernung**: [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`,`DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).
- **`Notification.actions`:** (Nightly-Release): Die [`Notification.actions`](/de/docs/Web/API/Notification/actions) Eigenschaft kann die mit einer `Benachrichtigung` verbundenen Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

## Ältere Versionen

{{Firefox_for_developers}}
