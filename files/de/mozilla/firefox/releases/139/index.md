---
title: Firefox 139 für Entwickler
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 679f1468ade94c44e7fb819fb8f5e618b17c1aae
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 139, die Entwickler betreffen. Firefox 139 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das HTML-Attribut [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) und das [`beforematch` Event](/de/docs/Web/API/Element/beforematch_event) werden jetzt unterstützt. Der Zustand _hidden until found_ ermöglicht es Ihnen, die Inhalte eines Elements zu verbergen, bis sie durch Benutzersuche (zum Beispiel mit "Find in page") oder durch Fragmentnavigation gefunden werden. Das `beforematch` Event wird ausgelöst, kurz bevor das `hidden` Attribut entfernt wird ([Firefox Bug 1761043](https://bugzil.la/1761043) und [Firefox Bug 1955379](https://bugzil.la/1955379)).

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die Temporal-API wird jetzt unterstützt, sie soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen ([Firefox Bug 1912511](https://bugzil.la/1912511) und [Firefox Bug 1954138](https://bugzil.la/1954138)). Dies umfasst:
  - Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als ein einmaliger Moment in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Uhrzeit mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonenunabhängiges Datum/Uhrzeit ("Plain")**:
      - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
        - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
          - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
          - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
        - Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
  - **Jetzt** (aktuelle Zeit) als verschiedene Klasseninstanzen, oder in einem spezifischen Format: {{jsxref("Temporal.Now")}}
- Derzeit sind die folgenden Kalendertypen für die `withCalendar()` Methode für [`PlainDate`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar) und [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) Objekte deaktiviert:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

#### DOM

- Die [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle wird jetzt unterstützt. Dies ermöglicht es Entwicklern, das Schließen eines Dialogs bedingt zu verhindern, indem ein [`cancel` Event](/de/docs/Web/API/HTMLDialogElement/cancel_event) Handler bereitgestellt wird. ([Firefox Bug 1960556](https://bugzil.la/1960556)).
- Die [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) Webauthentifizierungs-Erweiterungen werden jetzt unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf) Erweiterung auf allen Desktop-Plattformen unterstützt wird. Diese bieten jeweils Unterstützung für die Speicherung großer Blobs, die mit einem Berechtigungsnachweis verknüpft sind, zusätzliche Informationen zu einem Berechtigungsnachweis und einen Mechanismus zur Generierung einer Zufallszahl, die mit einem Berechtigungsnachweis und einem bestimmten Input verknüpft ist. ([Firefox Bug 1795020](https://bugzil.la/1795020), [Firefox Bug 1844449](https://bugzil.la/1844449), [Firefox Bug 1935280](https://bugzil.la/1935280)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der Prioritätsmanager (auf macOS, der Hintergrund-QoS-Manager) in Firefox, der die Priorisierung von IPC-Nachrichten zwischen den Eltern- und Inhaltsprozessen verwaltet, wurde vorübergehend für alle unterstützten Remote-Protokolle deaktiviert. Diese Änderung behebt ein Problem, bei dem unter hoher Systemlast die erste Seitenladungen in neu geöffneten Hintergrund-Tabs nicht geplant wurden, was dazu führte, dass bestimmte Befehle hängen blieben ([Firefox Bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der Befehl `emulation.setGeolocationOverride` wurde implementiert, der es Tests und Automatisierungstools ermöglicht, geografische Standorte über angegebene Browserkontexte oder Benutzerkontexte hinweg zu simulieren. Dies ermöglicht es Verbrauchern, standortbezogene Funktionen wie Geofencing für lokale Empfehlungen zu testen ([Firefox Bug 1954992](https://bugzil.la/1954992)).

## Änderungen für Add-on-Entwickler

- Lokalisierte Erweiterungen durchlaufen jetzt die Locale-Subtags, um Übersetzungen zu finden, bevor auf die Standardsprache der Erweiterung zurückgegriffen wird. Zuvor verwendete die Erweiterung die Standardversion der Erweiterung, wenn für eine Sprache mit Subtags keine Übersetzung gefunden werden konnte. Weitere Details zum neuen Verhalten finden Sie unter [Auswahl lokalisierter Zeichenfolgen](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) im Artikel zur Internationalisierung. ([Firefox Bug 1381580](https://bugzil.la/1381580))
- Inhalts-Skripte und -Stile werden nun garantiert in der Reihenfolge ihrer Registrierung ausgeführt (d.h. ihre Reihenfolge im Array des [`content_scripts` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Zuvor war die Reihenfolge nur für Skripte innerhalb desselben `js` Arrays garantiert. ([Firefox Bug 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}} API ist jetzt verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und neu anzuordnen. Weitere Informationen finden Sie unter [WebExtensions-Unterstützung für Tab-Gruppen](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox Bug 1940631](https://bugzil.la/1940631))

### Entfernungen

### Andere

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 139 bereitgestellt, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Aufgabenplanung API** (Nightly-Version). Die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind. Dies fügt Unterstützung für die [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) Methode hinzu und aktiviert die gesamte API erneut in der Nightly-Version. ([Firefox Bug 1958943](https://bugzil.la/1958943), [Firefox Bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Version). Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} aktiviert. Sie bietet einen Mechanismus zur einfachen Erstellung von animierten Übergängen zwischen verschiedenen Website-Ansichten. ([Firefox Bug 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Escaping von `<` und `>` in Attributen beim Serialisieren von HTML**: `dom.security.html_serialization_escape_lt_gt`. Firefox ersetzt jetzt die Zeichen `<` und `>` durch `&lt;` bzw. `&gt;` in Attributen beim Serialisieren von HTML. Dies hilft, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann zurück in das DOM injiziert wird. Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox Bug 1941347](https://bugzil.la/1941347)).
- **Deaktivierung der nicht standardmäßigen `beforescriptexecute` und `afterscriptexecute`**: `dom.events.script_execute.enabled`. Die Events wurden nur in der Nightly-Version deaktiviert, um Browser-Tests vor ihrer Entfernung zu ermöglichen. Die betroffenen Events sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle. ([Firefox Bug 1954685](https://bugzil.la/1954685)).

## Ältere Versionen

{{Firefox_for_developers}}
