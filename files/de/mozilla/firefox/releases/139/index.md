---
title: Firefox 139 für Entwickler
short-title: Firefox 139
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 90fe07f7d8a790094d90eddf70071dd64f821c76
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 139, die Entwickler betreffen.
Firefox 139 wurde am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) und das [`beforematch`-Event](/de/docs/Web/API/Element/beforematch_event) werden jetzt unterstützt.
  Der _hidden until found_ Zustand ermöglicht es Ihnen, den Inhalt eines Elements so lange zu verbergen, bis es durch eine Benutzersuche (zum Beispiel durch "Auf Seite suchen") oder durch Fragmentnavigation gefunden wird.
  Das `beforematch`-Event wird kurz bevor das `hidden`-Attribut entfernt wird, ausgelöst ([Firefox-Bug 1761043](https://bugzil.la/1761043) und [Firefox-Bug 1955379](https://bugzil.la/1955379)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die Temporal-API wird jetzt unterstützt, sie zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen ([Firefox-Bug 1912511](https://bugzil.la/1912511) und [Firefox-Bug 1954138](https://bugzil.la/1954138)).
  Dies umfasst:
  - Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als einzigartiger Augenblick in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Zeit mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonen-unabhängiges Datum/Zeit ("Plain")**:
      - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
        - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
          - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
          - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
        - Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
  - **Jetzt** (aktuelle Zeit) als verschiedene Klasseninstanzen oder in einem bestimmten Format: {{jsxref("Temporal.Now")}}
- Derzeit sind die folgenden Kalenderarten für die Methode `withCalendar()` für [`PlainDate`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar) und [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) Objekte deaktiviert:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

### SVG

#### Entfernungen

- Das experimentelle `<discard>`-Element wurde entfernt, zusammen mit der entsprechenden [`SVGDiscardElement`](/en-US/docs/Web/API/SVGDiscardElement)-JavaScript-Schnittstelle.
  Diese werden in anderen Browsern nicht unterstützt und sollen aus der Spezifikation entfernt werden.
  ([Firefox-Bug 1958839](https://bugzil.la/1958839)).

### HTTP

Keine bemerkenswerten Änderungen

### APIs

#### DOM

- Die Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, das Schließen eines Dialogs bedingt zu verhindern, indem ein [`cancel`-Event-Handler](/de/docs/Web/API/HTMLDialogElement/cancel_event) bereitgestellt wird.
  ([Firefox-Bug 1960556](https://bugzil.la/1960556)).
- Die Web-Authentifizierungs-Erweiterungen [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) werden jetzt unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf)-Erweiterung auf allen Desktop-Plattformen unterstützt wird.
  Diese bieten jeweils Unterstützung für die Speicherung von großen Blobs, die mit einer Berechtigung zugeordnet sind, zusätzliche Informationen über eine Berechtigung und einen Mechanismus zur Erzeugung einer zufälligen Zahl, die mit einer Berechtigung und einem bestimmten Input verbunden ist.
  ([Firefox-Bug 1795020](https://bugzil.la/1795020), [Firefox-Bug 1844449](https://bugzil.la/1844449), [Firefox-Bug 1935280](https://bugzil.la/1935280)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der Prioritätsmanager (auf macOS der Hintergrund-QoS-Manager) in Firefox, der die Priorisierung von IPC-Nachrichten zwischen dem übergeordneten und den Inhaltsprozessen verwaltet, wurde vorübergehend für alle unterstützten Remote-Protokolle deaktiviert. Diese Änderung behebt ein Problem, bei dem bei hoher Systemlast das initiale Laden von Seiten in neu geöffneten Hintergrund-Tabs nicht geplant wurde, was dazu führte, dass bestimmte Befehle hängen blieben ([Firefox-Bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der `emulation.setGeolocationOverride` Befehl wurde implementiert, der es Tests und Automatisierungstools ermöglicht, geografische Standorte über bestimmte Browsing- oder Benutzerkontexte hinweg zu simulieren. Dies ermöglicht es Nutzern, standortbezogene Funktionen wie Geofencing für lokale Empfehlungen zu testen ([Firefox-Bug 1954992](https://bugzil.la/1954992)).

## Änderungen für Add-on Entwickler

- Lokalisierte Erweiterungen durchlaufen nun Locale-Subtags, um Übersetzungen zu finden, bevor sie zur Standardsprachen der Erweiterung zurückkehren. Zuvor nutzte die Erweiterung die Standardsprache der Erweiterung, wenn für eine Sprache mit Subtags keine Übersetzung gefunden werden konnte. Siehe [Lokalisierte Zeichenfolgenselektion](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) im Artikel zur Internationalisierung für weitere Details zum neuen Verhalten. ([Firefox-Bug 1381580](https://bugzil.la/1381580))
- Inhalts-Skripte und -Stile werden jetzt garantiert in der Reihenfolge ihrer Registrierung ausgeführt (d.h. in ihrer Reihenfolge im [`content_scripts` Manifest-Schlüssel Array](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Zuvor war die Reihenfolge nur für Skripte innerhalb desselben `js` Arrays garantiert. ([Firefox-Bug 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}} API ist jetzt verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und neu anzuordnen. Für weitere Informationen siehe [WebExtensions Support for Tab Groups](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox-Bug 1940631](https://bugzil.la/1940631))

## Experimentelle Web-Features

Diese Funktionen wurden in Firefox 139 eingeführt, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Aufgaben-Scheduling-API** (Nightly-Version).
  Die [Priorisierte Aufgaben-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies fügt Unterstützung für die Methode [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) hinzu und aktiviert die gesamte API in der Nightly-Version.
  ([Firefox-Bug 1958943](https://bugzil.la/1958943), [Firefox-Bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Version).
  Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}} aktiviert. Sie bietet einen Mechanismus zur einfachen Erstellung animierter Übergänge zwischen verschiedenen Ansichten einer Website. ([Firefox-Bug 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Escapieren von `<` und `>` in Attributen beim Serialisieren von HTML**: `dom.security.html_serialization_escape_lt_gt`.
  Firefox ersetzt jetzt die `<` und `>` Zeichen entsprechend durch `&lt;` und `&gt;` in Attributen beim Serialisieren von HTML. Dies hilft, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann in den DOM zurück injiziert wird.
  Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML), und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox-Bug 1941347](https://bugzil.la/1941347)).
- **Deaktivierung der nicht standardmäßigen `beforescriptexecute` und `afterscriptexecute`**: `dom.events.script_execute.enabled`.
  Die Events wurden nur in Nightly deaktiviert, um Browser-Tests vor deren Entfernung zu ermöglichen.
  Die betroffenen Events sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle, und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle. ([Firefox-Bug 1954685](https://bugzil.la/1954685)).

## Ältere Versionen

{{Firefox_for_developers}}
