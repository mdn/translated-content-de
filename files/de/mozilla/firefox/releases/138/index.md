---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 181082d457dc196c519405a7f6cee83fa117f128
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird nun unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft. Der Hauptanwendungsfall besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet wird. ([Firefox Fehler 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz von einem {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für den gleichen Zweck. ([Firefox Fehler 1952249](https://bugzil.la/1952249)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der HTTP-Response-Header {{httpheader("Origin-Agent-Cluster")}} kann jetzt von einer Website verwendet werden, um anzudeuten, dass das zugehörige Dokument in einem origin-gebundenen [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte.
  In einem solchen Cluster werden der vom Betriebssystem verwendete Prozess und/oder andere OS-Ressourcen, die vom Dokument genutzt werden, nur mit anderen Dokumenten vom gleichen {{Glossary("Origin", "Ursprung")}} geteilt.
  Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.
  Entwickler können testen, ob der Browser das Dokument in einen origin-gebundenen Agent-Cluster platziert hat, indem sie die Eigenschaft [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) verwenden.
  ([Firefox Fehler 1665474](https://bugzil.la/1665474))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird jetzt unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu prüfen, ob ein Browserbenutzer bei einem Identitätsanbieter angemeldet ist.
  Dies schließt Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und den {{httpheader("Set-Login")}}-HTTP-Response-Header ein.
  ([Firefox Fehler 1945576](https://bugzil.la/1945576) und [Firefox Fehler 1945573](https://bugzil.la/1945573)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz zur Priorisierung von Bildrate oder Auflösung festlegen, wenn beide nicht auf den konfigurierten Niveaus gehalten werden können aufgrund von Netzwerkausfällen.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Eigenschaft im Parameterobjekt gesetzt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Methode der `RTCRtpSender`-Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt ausgelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference)-Methode zurückgegeben wird.
  ([Firefox Fehler 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}}-API für Manifest V3 Erweiterungen. Dies bietet Manifest V3 Erweiterungen die gleiche Möglichkeit wie Manifest V2 Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Fehler 1951166](https://bugzil.la/1951166))
- Das {{WebExtAPIRef("contextualIdentities")}}-API ist in Firefox für Android nicht mehr definiert. Zuvor war es definiert, aber fehlerhaft. ([Firefox Fehler 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird in Firefox für Android jetzt nicht mehr anerkannt. Zuvor aktivierte sie eine defekte Version der "Container"-Funktion. ([Firefox Fehler 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version des {{WebExtAPIRef("userScripts")}}-API ist jetzt in Firefox für Android verfügbar. ([Firefox Fehler 1949955](https://bugzil.la/1949955))
- Das {{WebExtAPIRef("alarms.create")}}-API gibt jetzt ein Promise statt `undefined` zurück. ([Firefox Fehler 1869171](https://bugzil.la/1869171))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 138, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` verschachtelt in Abschnittselemente:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verringert jetzt nicht mehr die Schriftgröße, wenn sie in [Abschnittselemente](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die in Abschnittselemente verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus aus der HTML-Spezifikation [entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Fehler 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines gestuften Rollouts dieser Entfernung wird der Wert von `layout.css.h1-in-section-ua-styles.enabled` bei 5 % der Nutzer von Firefox 138 und 50 % der Nutzer von Firefox Beta 138 auf `false` gesetzt ([Ziel, UA-Stile für h1 in article, aside, nav, section zu entfernen](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Einstellung für dieses Feature funktioniert umgekehrt: In der Nightly-Build ist sie auf `false` gesetzt, was die UA-Stilierung für in Abschnittselementen verschachtelte Überschriften entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehende UA-Stilierung für die verschachtelten Überschriften beibehält.

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`.
  Das CSS-{{cssxref("::details-content")}}-Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu gestalten ([Firefox Fehler 1901037](https://bugzil.la/1901037)).
- **`MutationEvent` auf Weg zur Entfernung**: [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Fehler 1951772](https://bugzil.la/1951772)).
- **`Notification.actions`:** (Nightly-Version): Die [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft kann die mit einer `Notification` verknüpften Aktionen abrufen, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Fehler 1225110](https://bugzil.la/1225110)).

## Ältere Versionen

{{Firefox_for_developers}}
