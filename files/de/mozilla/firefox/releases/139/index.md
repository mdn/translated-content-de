---
title: Firefox 139 für Entwickler
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 892eea53fd4413054970d20a1569276ebd6519f8
---

Dieser Artikel bietet Informationen über die Veränderungen in Firefox 139, die Entwickler betreffen. Firefox 139 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

### HTML

- Das HTML-Attribut [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) und das [`beforematch` Event](/de/docs/Web/API/Element/beforematch_event) werden nun unterstützt. Der Zustand _hidden until found_ ermöglicht es Ihnen, den Inhalt eines Elements zu verbergen, bis er durch eine Benutzersuche (zum Beispiel durch "Auf der Seite suchen") oder durch Fragmentnavigation gefunden wird. Das `beforematch` Event wird kurz bevor das `hidden` Attribut entfernt wird, ausgelöst ([Firefox-Bug 1761043](https://bugzil.la/1761043) und [Firefox-Bug 1955379](https://bugzil.la/1955379)).

#### Entfernt

### CSS

#### Entfernt

### JavaScript

- Die Temporal-API wird nun unterstützt, diese zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit integrierter Unterstützung für Zeitzonen und Kalenderdarstellungen ([Firefox-Bug 1912511](https://bugzil.la/1912511) und [Firefox-Bug 1954138](https://bugzil.la/1954138)). Dies beinhaltet:
  - Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als einzigartiger Moment in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Zeitpunkt mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonen-unbewusste Daten/Zeit ("Plain")**:
      - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
        - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
          - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
          - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
        - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
  - **Jetzt** (aktuelle Zeit) als verschiedene Klasseninstanzen oder in einem spezifischen Format: {{jsxref("Temporal.Now")}}
- Derzeit sind die folgenden Kalenderarten für die Methode `withCalendar()` für [`PlainDate`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar) und [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) Objekte deaktiviert:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

#### Entfernt

### SVG

#### Entfernt

- Das experimentelle `<discard>` Element wurde entfernt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle. Diese werden in anderen Browsern nicht unterstützt und sollen aus der Spezifikation entfernt werden. ([Firefox-Bug 1958839](https://bugzil.la/1958839)).

### HTTP

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

#### DOM

- Die [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle wird jetzt unterstützt. Dies ermöglicht es Entwicklern, bedingt zu verhindern, dass ein Dialog geschlossen wird, indem ein [`cancel` Event](/de/docs/Web/API/HTMLDialogElement/cancel_event) Handler bereitgestellt wird. ([Firefox-Bug 1960556](https://bugzil.la/1960556)).
- Die [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) Webauthentifizierungserweiterungen werden nun unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf) Erweiterung auf allen Desktop-Plattformen unterstützt wird. Diese bieten jeweils Unterstützung für die Speicherung großer Blobs, die einem Anmeldedatensatz zugeordnet sind, zusätzliche Informationen über einen Anmeldedatensatz und einen Mechanismus zur Erzeugung einer Zufallszahl, die einem Anmeldedatensatz und einem bestimmten Eingang zugeordnet ist. ([Firefox-Bug 1795020](https://bugzil.la/1795020), [Firefox-Bug 1844449](https://bugzil.la/1844449), [Firefox-Bug 1935280](https://bugzil.la/1935280)).

#### Medien, WebRTC und Web Audio

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der Prioritäts-Manager (auf macOS, der Hintergrund-QoS-Manager) in Firefox, der die IPC-Nachrichtenpriorisierung zwischen den Haupt- und Inhaltsprozessen verwaltet, wurde vorübergehend für alle unterstützten Remote-Protokolle deaktiviert. Diese Änderung löst ein Problem, bei dem unter hoher Systembelastung erste Seitenladevorgänge in neu geöffneten Hintergrund-Tabs nicht geplant wurden, was dazu führte, dass bestimmte Befehle hängen blieben ([Firefox-Bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der `emulation.setGeolocationOverride` Befehl wurde implementiert, wodurch Tests und Automatisierungstools geografische Standorte in angegebenen Browsing-Kontexten oder Benutzerkontexten simulieren können. Dies ermöglicht es Nutzern, Standort-basierte Funktionen wie Geofencing für lokale Empfehlungen zu testen ([Firefox-Bug 1954992](https://bugzil.la/1954992)).

## Änderungen für Add-on-Entwickler

- Lokalisierte Erweiterungen suchen jetzt nach Übersetzungen durch Locale-Subtags, bevor sie zur Standardsprache der Erweiterung zurückkehren. Früher verwendete die Erweiterung die Standardversion, wenn keine Übersetzung für eine Sprache mit Subtags gefunden werden konnte. Siehe [Lokalisierte Zeichenfolgenauswahl](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) im Artikel zur Internationalisierung für weitere Details zum neuen Verhalten. ([Firefox-Bug 1381580](https://bugzil.la/1381580))
- Inhalte von Skripten und Stilen sind nun garantiert in der Registrierungsreihenfolge auszuführen (d.h. ihrer Reihenfolge im [`content_scripts` Manifest-Schlüssel-Array](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Bisher war die Reihenfolge nur für Skripte innerhalb desselben `js` Arrays garantiert. ([Firefox-Bug 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}} API ist jetzt verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und neu zu ordnen. Für weitere Informationen siehe [WebExtensions Support für Tab-Gruppen](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox-Bug 1940631](https://bugzil.la/1940631))

### Entfernt

### Andere

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 139 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Aufgabenplanung API** (Nightly-Version). Die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit zur Priorisierung aller Aufgaben, die zu einer Anwendung gehören, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind. Dies unterstützt die Methode [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) und aktiviert die gesamte API in der Nightly-Version erneut. ([Firefox-Bug 1958943](https://bugzil.la/1958943), [Firefox-Bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Version). Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "SPAs (Single-Page Applications)")}} aktiviert. Sie bietet einen Mechanismus zur einfachen Erstellung animierter Übergänge zwischen verschiedenen Website-Ansichten. ([Firefox-Bug 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Escaping von `<` und `>` in Attributen bei der HTML-Serialisierung**: `dom.security.html_serialization_escape_lt_gt`. Firefox ersetzt nun die Zeichen `<` und `>` mit `&lt;` und `&gt;` in Attributen bei der HTML-Serialisierung. Dies hilft, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann zurück in das DOM eingespeist wird. Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox-Bug 1941347](https://bugzil.la/1941347)).
- **Deaktivieren der nicht standardisierten `beforescriptexecute` und `afterscriptexecute`**: `dom.events.script_execute.enabled`. Die Ereignisse wurden nur in Nightly deaktiviert, um Browser-Tests vor ihrer Entfernung zu ermöglichen. Die betroffenen Ereignisse sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle, und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle. ([Firefox-Bug 1954685](https://bugzil.la/1954685)).

## Ältere Versionen

{{Firefox_for_developers}}
