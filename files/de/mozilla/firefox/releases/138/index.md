---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: abb484dcb8c01ad0f3234fe3c7cc57e541511274
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernung

### CSS

#### Entfernung

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird nun unterstützt. Diese Methode fügt einer bereitgestellten Objekt-Instanz die Stapelablaufverfolgungsinformationen als Eigenschaft {{jsxref("Error.stack")}} hinzu. Der Hauptanwendungsfall besteht darin, einer benutzerdefinierten Fehlerobjekt-Instanz, die nicht von der Schnittstelle {{jsxref("Error")}} abgeleitet ist, eine Stapelablaufverfolgung hinzuzufügen. ([Firefox-Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann nun verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz von {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als `instanceof` für denselben Zweck zu verwenden. ([Firefox-Bug 1952249](https://bugzil.la/1952249)).

#### Entfernung

### SVG

#### Entfernung

### HTTP

- Der HTTP-Antwort-Header {{httpheader("Origin-Agent-Cluster")}} kann jetzt von einer Website verwendet werden, um anzugeben, dass das zugehörige Dokument in einem ursprungsbezogenen [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden soll.
  In einem solchen Cluster werden die vom Betriebssystem verwendeten Prozesse und / oder andere OS-Ressourcen nur mit anderen Dokumenten vom selben {{Glossary("Origin", "Ursprung")}} geteilt.
  Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen verschlechtert.
  Entwickler können testen, ob der Browser das Dokument in einen ursprungsbezogenen Agent-Cluster platziert hat, indem sie die Eigenschaft [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) verwenden. ([Firefox-Bug 1665474](https://bugzil.la/1665474))

#### Entfernung

### Sicherheit

#### Entfernung

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um zu setzen und zu prüfen, ob ein Browser-Benutzer bei einem Identitätsanbieter angemeldet ist.
  Dies umfasst die Unterstützung der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, der [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und des {{httpheader("Set-Login")}} HTTP-Antwort-Headers.
  ([Firefox-Bug 1945576](https://bugzil.la/1945576) und [Firefox-Bug 1945573](https://bugzil.la/1945573)).

#### DOM

#### Media, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz zur Priorisierung von Bildrate oder Auflösung festlegen, wenn beides aufgrund von Netzwerkverschlechterung nicht auf dem konfigurierten Niveau gehalten werden kann.
  Der Wert wird mit der Eigenschaft [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) im Parameterobjekt festgelegt, das an die Methode [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) der `RTCRtpSender`-Schnittstelle übergeben wird.
  Es kann auch aus dem Objekt gelesen werden, das von der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) zurückgegeben wird. ([Firefox-Bug 1329847](https://bugzil.la/1329847)).

#### Entfernung

### WebAssembly

#### Entfernung

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} in der {{WebExtAPIRef("menus")}} API für Erweiterungen des Manifests V3 bereitgestellt. Dies bietet den Erweiterungen des Manifests V3 die gleiche Möglichkeit wie den Erweiterungen des Manifests V2, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber funktionsgestört. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird in Firefox für Android jetzt nicht mehr erkannt. Zuvor aktivierte sie eine fehlerhafte Version der "Containers"-Funktion. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt auf Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox-Bug 1869171](https://bugzil.la/1869171))

### Entfernung

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 138 neu ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **::details-content CSS Pseudo-Element:** `layout.css.details-content.enabled`.
  Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht Ihnen die Gestaltung des Inhalts des {{htmlElement("details")}} Elements. ([Firefox-Bug 1901037](https://bugzil.la/1901037)).
- **`MutationEvent` auf dem Weg zur Entfernung**: [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).
- **`Notification.actions`:** (Nightly-Version): Die [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft kann die Aktionen abrufen, die über [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) mit einer `Notification` verbunden sind. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

## Ältere Versionen

{{Firefox_for_developers}}
