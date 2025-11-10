---
title: Firefox 139 Versionshinweise für Entwickler
short-title: Firefox 139
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 139, die Entwickler betreffen.
Firefox 139 wurde am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Das [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) HTML-Attribut und das [`beforematch` event](/de/docs/Web/API/Element/beforematch_event) werden jetzt unterstützt. Der Status _hidden until found_ ermöglicht es, den Inhalt eines Elements zu verbergen, bis es durch die Benutzersuche (zum Beispiel "Seite durchsuchen") oder durch Fragment-Navigation gefunden wird. Das `beforematch`-Ereignis wird unmittelbar bevor das `hidden`-Attribut entfernt wird, ausgelöst ([Firefox Bug 1761043](https://bugzil.la/1761043) und [Firefox Bug 1955379](https://bugzil.la/1955379)).

### CSS

Keine merklichen Änderungen

### JavaScript

- Die Temporal-API wird jetzt unterstützt, dies zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen ([Firefox Bug 1912511](https://bugzil.la/1912511) und [Firefox Bug 1954138](https://bugzil.la/1954138)).
  Dazu gehören:
  - Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als einzigartiger Moment in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Uhrzeit mit Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonen-unabhängiges Datum/Uhrzeit ("Plain")**:
      - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
        - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
          - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
          - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
        - Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
  - **Jetzt** (aktuelle Zeit) als verschiedene Klasseninstanzen oder in einem bestimmten Format: {{jsxref("Temporal.Now")}}
- Derzeit sind die folgenden Kalendertypen für die `withCalendar()`-Methode für [`PlainDate`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar) und [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) Objekte deaktiviert:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

### SVG

#### Entfernungen

- Das experimentelle `<discard>`-Element wurde zusammen mit der zugehörigen JavaScript-Schnittstelle [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) entfernt. Diese werden in anderen Browsern nicht unterstützt und sollen aus der Spezifikation entfernt werden. ([Firefox Bug 1958839](https://bugzil.la/1958839)).

### HTTP

Keine merklichen Änderungen

### APIs

#### DOM

- Die Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Interfaces wird jetzt unterstützt. Dies ermöglicht es Entwicklern, das Schließen eines Dialogs bedingt zu verhindern, indem ein [`cancel` event](/de/docs/Web/API/HTMLDialogElement/cancel_event) Handler bereitgestellt wird. ([Firefox Bug 1960556](https://bugzil.la/1960556)).
- Die Web Authentication-Erweiterungen [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) werden jetzt unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf) Erweiterung auf allen Desktop-Plattformen unterstützt wird. Diese bieten jeweils Unterstützung für große Blob-Speicherung, die mit einem Credential verbunden ist, zusätzliche Informationen über ein Credential und einen Mechanismus zum Generieren einer Zufallszahl, die mit einem Credential und einem bestimmten Input verbunden ist. ([Firefox Bug 1795020](https://bugzil.la/1795020), [Firefox Bug 1844449](https://bugzil.la/1844449), [Firefox Bug 1935280](https://bugzil.la/1935280)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Der Prioritätsmanager (auf macOS der Hintergrund-QoS-Manager) in Firefox, der die Priorisierung von IPC-Nachrichten zwischen dem Eltern- und Inhaltsprozess verwaltet, wurde vorübergehend für alle unterstützten Remote-Protokolle deaktiviert. Diese Änderung behebt ein Problem, bei dem unter hoher Systembelastung das Laden der Anfängerseite in neu geöffneten Hintergrundtabs nicht eingeplant wurde, wodurch bestimmte Befehle hängen blieben ([Firefox Bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der Befehl `emulation.setGeolocationOverride` wurde implementiert, der es Tests und Automatisierungstools ermöglicht, geografische Standorte über die angegebenen Browsing-Kontexte oder Benutzerkontexte zu simulieren. Dies ermöglicht es Verbrauchern, standortbezogene Funktionen wie Geofencing für lokale Empfehlungen zu testen ([Firefox Bug 1954992](https://bugzil.la/1954992)).

## Änderungen für Add-on-Entwickler

- Lokalisierte Erweiterungen verwenden jetzt eine Kaskade durch Lokalisierung-Subtags, um Übersetzungen zu finden, bevor auf die Standardsprache der Erweiterung zurückgegriffen wird. Zuvor verwendete die Erweiterung den Standard, wenn eine Übersetzung für eine Sprache mit Subtags nicht gefunden werden konnte. Siehe [Localized string selection](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) im Artikel zur Internationalisierung für weitere Details zum neuen Verhalten. ([Firefox Bug 1381580](https://bugzil.la/1381580))
- Inhaltsskripte und -stile werden jetzt garantiert in der Reihenfolge ihrer Registrierung ausgeführt (d.h. ihre Reihenfolge im Array des [`content_scripts` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Bisher war die Reihenfolge nur für Skripte innerhalb desselben `js`-Arrays garantiert. ([Firefox Bug 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}} API ist jetzt verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und umzuordnen. Für weitere Informationen siehe [WebExtensions Support for Tab Groups](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox Bug 1940631](https://bugzil.la/1940631))

## Experimentelle Webfunktionen

Diese Funktionen wurden in Firefox 139 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Task-Scheduling API** (Nightly-Veröffentlichung). Die [Priorisierte Task-Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind. Dies fügt Unterstützung für die Methode [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) hinzu und aktiviert die gesamte API in der Nightly-Veröffentlichung erneut. ([Firefox Bug 1958943](https://bugzil.la/1958943), [Firefox Bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Veröffentlichung). Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} aktiviert. Sie bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Ansichten einer Website. ([Firefox Bug 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Maskieren von `<` und `>` in Attributen bei der HTML-Serialisierung**: `dom.security.html_serialization_escape_lt_gt`. Firefox ersetzt jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` in Attributen bei der HTML-Serialisierung. Dies hilft, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann wieder in das DOM injiziert wird. Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML), und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox Bug 1941347](https://bugzil.la/1941347)).
- **Deaktivieren der nicht standardmäßigen `beforescriptexecute` und `afterscriptexecute`**: `dom.events.script_execute.enabled`. Die Ereignisse wurden nur in Nightly deaktiviert, um das Browser-Testing vor ihrer Entfernung zu ermöglichen. Die betroffenen Ereignisse sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle, und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle. ([Firefox Bug 1954685](https://bugzil.la/1954685)).
