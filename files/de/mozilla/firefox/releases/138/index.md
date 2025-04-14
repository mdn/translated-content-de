---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 0f7550e13dad62ad31b54772b54c21c8780d1fff
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernt

### CSS

#### Entfernt

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als die {{jsxref("Error.stack")}}-Eigenschaft. Der Hauptanwendungsfall ist die Installation einer Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz eines {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).

#### Entfernt

### SVG

#### Entfernt

### HTTP

- Der HTTP-Antwortheader {{httpheader("Origin-Agent-Cluster")}} kann nun von einer Seite verwendet werden, um anzuzeigen, dass das zugehörige Dokument in einem ursprungsbasierten [Agentencluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden sollte. In einem solchen Cluster werden der vom Dokument verwendete Betriebssystemprozess und/oder andere Betriebssystemressourcen nur mit anderen Dokumenten vom gleichen {{Glossary("Origin", "Ursprung")}} geteilt. Dies verringert die Wahrscheinlichkeit, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen verschlechtert. Entwickler können testen, ob der Browser das Dokument in einen ursprungsbasierten Agentencluster gesetzt hat, indem sie die Eigenschaft [`window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) verwenden. ([Firefox Bug 1665474](https://bugzil.la/1665474))

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

- Die [Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) wird nun unterstützt, wenn die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) verwendet wird. Sie kann verwendet werden, um festzustellen und zu überprüfen, ob ein Browser-Nutzer bei einem Identitätsanbieter angemeldet ist. Dies umfasst Unterstützung für die [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle, die [`navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft und den {{httpheader("Set-Login")}} HTTP-Antwortheader. ([Firefox Bug 1945576](https://bugzil.la/1945576) und [Firefox Bug 1945573](https://bugzil.la/1945573)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können nun eine Präferenz dafür setzen, ob Bildrate oder Auflösung bevorzugt werden soll, wenn beides aufgrund von Netzwerkverschlechterungen nicht auf den konfigurierten Ebenen gehalten werden kann. Der Wert wird über die [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Eigenschaft im Parameterobjekt festgelegt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference)-Methode der `RTCRtpSender`-Schnittstelle übergeben wird. Er kann auch aus dem durch die [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference)-Methode zurückgegebenen Objekt gelesen werden. ([Firefox Bug 1329847](https://bugzil.la/1329847)).

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen wird bereitgestellt. Dies gibt Manifest V3 Erweiterungen dieselbe Fähigkeit wie Manifest V2 Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber defekt. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die Berechtigung `contextualIdentities` wird in Firefox für Android jetzt nicht mehr anerkannt. Zuvor aktivierte sie eine fehlerhafte Version der "Containers"-Funktion. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise statt undefined zurück. ([Firefox Bug 1869171](https://bugzil.la/1869171))

### Entfernt

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 138 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **UA-Stile für `<h1>` in geschachtelten Strukturierungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift wird nun nicht mehr kleiner angezeigt, wenn sie sich innerhalb von [Strukturierungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>`, und `<section>` befindet. Die UA-Stile für `<h1>` innerhalb von Strukturierungselementen sind nicht mehr relevant, da der Umrissalgorithmus [aus der HTML-Spezifikation entfernt](https://github.com/whatwg/html/pull/7829) wurde. ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  Im Rahmen eines gestaffelten Ausrollens dieser Entfernung wird bei 5% der Nutzer von Firefox 138 und 50% der Nutzer von Firefox Beta 138 der Wert von `layout.css.h1-in-section-ua-styles.enabled` auf `false` gesetzt. ([Absichtserklärung zum Entfernen: UA-Stile für h1 in Artikel, Aside, Nav, Sektion](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Im Nightly-Build ist sie auf `false` gesetzt, was das Entfernen des UA-Stylings für Überschriften innerhalb von Strukturierungselementen bewirkt. In allen anderen Kanälen ist sie auf `true` gesetzt, wodurch das bestehende UA-Styling für die geschachtelten Überschriften erhalten bleibt.

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`. Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu gestalten ([Firefox Bug 1901037](https://bugzil.la/1901037)).
- **`MutationEvent` auf dem Weg zur Entfernung**: [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Events (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).
- **`Notification.actions`:** (Nightly-Release): Die [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft kann die Aktionen abfragen, die mit einer `Notification` verbunden sind, wie sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox Bug 1225110](https://bugzil.la/1225110)).

## Ältere Versionen

{{Firefox_for_developers}}
