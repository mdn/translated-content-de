---
title: Firefox 139 für Entwickler
short-title: Firefox 139
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 139, die Entwickler betreffen.
Firefox 139 wurde am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) und das [`beforematch` event](/de/docs/Web/API/Element/beforematch_event) werden jetzt unterstützt.
  Der Zustand _hidden until found_ erlaubt es, den Inhalt eines Elements zu verbergen, bis er durch die Benutzersuche (zum Beispiel mit "Finden auf der Seite") oder durch Fragmentnavigation gefunden wird.
  Das `beforematch`-Ereignis wird ausgelöst, kurz bevor das `hidden`-Attribut entfernt wird ([Firefox-Bug 1761043](https://bugzil.la/1761043) und [Firefox-Bug 1955379](https://bugzil.la/1955379)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die Temporal-API wird jetzt unterstützt. Sie zielt darauf ab, die Arbeit mit Datums- und Zeitangaben in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderrepräsentationen ([Firefox-Bug 1912511](https://bugzil.la/1912511) und [Firefox-Bug 1954138](https://bugzil.la/1954138)).
  Dies umfasst:
  - Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als eindeutiger Moment in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Zeit-Wert mit Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonen-unabhängiges Datum/Uhrzeit ("Plain")**:
      - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
        - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
          - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
          - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
        - Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
  - **Jetzt** (aktuelle Zeit) als verschiedene Klasseninstanzen oder in einem spezifischen Format: {{jsxref("Temporal.Now")}}
- Derzeit sind die folgenden Kalendertypen für die `withCalendar()`-Methode für [`PlainDate`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar) und [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar)-Objekte deaktiviert:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

### SVG

#### Entfernungen

- Das experimentelle `<discard>`-Element wurde entfernt, zusammen mit der entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement)-JavaScript-Schnittstelle.
  Diese werden in anderen Browsern nicht unterstützt und sollen aus der Spezifikation entfernt werden.
  ([Firefox-Bug 1958839](https://bugzil.la/1958839)).

### HTTP

Keine bemerkenswerten Änderungen

### APIs

#### DOM

- Die [`requestClose()`-Methode](/de/docs/Web/API/HTMLDialogElement/requestClose) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, das Schließen eines Dialogs bedingt zu verhindern, indem ein [`cancel`-Ereignishandler](/de/docs/Web/API/HTMLDialogElement/cancel_event) bereitgestellt wird.
  ([Firefox-Bug 1960556](https://bugzil.la/1960556)).
- Die Web-Authentifikations-Erweiterungen [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) werden jetzt unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf)-Erweiterung auf allen Desktop-Plattformen unterstützt wird.
  Diese bieten jeweils Unterstützung für große Blob-Speicher, die einem Anmeldeinformationen zugeordnet sind, zusätzliche Informationen zu einem Anmeldeinformationen und einen Mechanismus zur Generierung einer Zufallszahl, die einer bestimmten Eingabe und einem Anmeldeinformationen zugeordnet ist.
  ([Firefox-Bug 1795020](https://bugzil.la/1795020), [Firefox-Bug 1844449](https://bugzil.la/1844449), [Firefox-Bug 1935280](https://bugzil.la/1935280)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der Prioritätsmanager (auf macOS der Hintergrund-QoS-Manager) in Firefox, der die Priorisierung von IPC-Nachrichten zwischen dem Eltern- und dem Inhaltsprozess verwaltet, wurde für alle unterstützten Remote-Protokolle vorübergehend deaktiviert. Diese Änderung behebt ein Problem, bei dem unter hoher Systemlast das Laden von Seiten in neu geöffneten Hintergrund-Tabs nicht geplant wurde, was dazu führte, dass bestimmte Befehle hängen blieben ([Firefox-Bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der `emulation.setGeolocationOverride`-Befehl wurde implementiert, der es Tests und Automatisierungswerkzeugen ermöglicht, geografische Standorte über bestimmte Browsing-Kontexte oder Benutzerkontexte hinweg zu simulieren. Dies ermöglicht es den Nutzern, standortbezogene Funktionen wie Geofencing für lokale Empfehlungen zu testen ([Firefox-Bug 1954992](https://bugzil.la/1954992)).

## Änderungen für Add-on-Entwickler

- Lokalisierte Erweiterungen durchsuchen nun die Locale-Unterscheidungen, um Übersetzungen zu finden, bevor sie auf die Standardsprache der Erweiterung zurückfallen. Bisher verwendete die Erweiterung den Standard, wenn eine Übersetzung für eine Sprache mit Unterscheidungen nicht gefunden werden konnte. Weitere Details zum neuen Verhalten finden Sie unter [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection). ([Firefox-Bug 1381580](https://bugzil.la/1381580))
- Inhalts-Skripte und -Stile werden nun garantiert in der Registrierungsreihenfolge ausgeführt (d.h. ihrer Reihenfolge im [`content_scripts`-Manifest-Array](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Bisher war die Reihenfolge nur für Skripte innerhalb desselben `js`-Arrays garantiert. ([Firefox-Bug 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}}-API ist nun verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und neu anzuordnen. Weitere Informationen finden Sie unter [WebExtensions-Unterstützung für Tab-Gruppen](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox-Bug 1940631](https://bugzil.la/1940631))

## Experimentelle Web-Features

Diese Funktionen wurden in Firefox 139 eingeführt, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Task Scheduling API** (Nightly-Release).
  Die [Priorisierte Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode, um alle Aufgaben, die zu einer Anwendung gehören, zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies fügt Unterstützung für die [`scheduler.yield()`-Methode](/de/docs/Web/API/Scheduler/yield) hinzu und aktiviert die gesamte API im Nightly-Release erneut.
  ([Firefox-Bug 1958943](https://bugzil.la/1958943), [Firefox-Bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Release).
  Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "Einzel-Seiten-Anwendungen (SPAs)")}} aktiviert. Sie bietet einen Mechanismus, um animierte Übergänge zwischen verschiedenen Website-Ansichten einfach zu erstellen. ([Firefox-Bug 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Escaping von `<` und `>` in Attributen beim Serialisieren von HTML**: `dom.security.html_serialization_escape_lt_gt`.
  Firefox ersetzt nun die Zeichen `<` und `>` durch `&lt;` und `&gt;` in Attributen beim Serialisieren von HTML. Dies hilft, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann zurück in den DOM eingefügt wird.
  Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox-Bug 1941347](https://bugzil.la/1941347)).
- **Deaktivierung der nicht-standardmäßigen `beforescriptexecute` und `afterscriptexecute`**: `dom.events.script_execute.enabled`.
  Die Ereignisse wurden nur in Nightly deaktiviert, um Browser-Tests vor ihrer Entfernung zu ermöglichen.
  Die betroffenen Ereignisse sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle. ([Firefox-Bug 1954685](https://bugzil.la/1954685)).

## Ältere Versionen

{{Firefox_for_developers}}
