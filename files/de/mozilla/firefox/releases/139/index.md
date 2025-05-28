---
title: Firefox 139 für Entwickler
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 05a220b3155a2755ebcd2229eb094db5ad4ae9f4
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 139, die Entwickler betreffen.
Firefox 139 wurde am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) HTML-Attribut und das [`beforematch`-Ereignis](/de/docs/Web/API/Element/beforematch_event) werden jetzt unterstützt.
  Der _hidden until found_-Zustand ermöglicht es Ihnen, die Inhalte eines Elements zu verbergen, bis sie durch Benutzersuche (zum Beispiel „Suche auf der Seite“) oder durch Fragmentnavigation gefunden werden.
  Das `beforematch`-Ereignis wird ausgelöst, kurz bevor das `hidden`-Attribut entfernt wird ([Firefox-Bug 1761043](https://bugzil.la/1761043) und [Firefox-Bug 1955379](https://bugzil.la/1955379)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die Temporal-API wird jetzt unterstützt und zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen ([Firefox-Bug 1912511](https://bugzil.la/1912511) und [Firefox-Bug 1954138](https://bugzil.la/1954138)).
  Dies schließt ein:
  - Eine **Dauer** (Differenz zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als einzigartiger Moment in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Uhrzeit mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonen-unabhängiges Datum/Uhrzeit („Plain“) **:
      - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
        - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
          - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
          - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
        - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
  - **Jetzt** (aktuelle Zeit) als verschiedene Klasseninstanzen oder in einem bestimmten Format: {{jsxref("Temporal.Now")}}
- Derzeit sind die folgenden Kalenderarten für die `withCalendar()`-Methode für [`PlainDate`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar) und [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) Objekte deaktiviert:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

### SVG

#### Entfernungen

- Das experimentelle `<discard>`-Element wurde entfernt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Diese werden in anderen Browsern nicht unterstützt und sollen aus der Spezifikation entfernt werden.
  ([Firefox-Bug 1958839](https://bugzil.la/1958839)).

### HTTP

Keine bemerkenswerten Änderungen

### APIs

#### DOM

- Die [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)-Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, das Schließen eines Dialogs bedingt zu verhindern, indem ein [`cancel`-Ereignis](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Handler bereitgestellt wird.
  ([Firefox-Bug 1960556](https://bugzil.la/1960556)).
- Die [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) Web-Authentifizierungs-Erweiterungen werden jetzt unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf)-Erweiterung auf allen Desktop-Plattformen unterstützt wird.
  Diese bieten jeweils Unterstützung für großen Blob-Speicher, der mit einer Anmeldeinformation verknüpft ist, zusätzliche Informationen zu einer Anmeldeinformation und einen Mechanismus zur Erzeugung einer Zufallszahl, die mit einer Anmeldeinformation und einer bestimmten Eingabe verknüpft ist.
  ([Firefox-Bug 1795020](https://bugzil.la/1795020), [Firefox-Bug 1844449](https://bugzil.la/1844449), [Firefox-Bug 1935280](https://bugzil.la/1935280)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der Prioritätsmanager (auf macOS der Hintergrund-QoS-Manager) in Firefox, der die IPC-Nachrichtenpriorisierung zwischen dem Haupt- und Inhaltprozessen verwaltet, wurde vorübergehend für alle unterstützten Remote-Protokolle deaktiviert. Diese Änderung behebt ein Problem, bei dem bei hoher Systemauslastung die anfänglichen Seitenladevorgänge in neu geöffneten Hintergrund-Tabs nicht eingeplant wurden, was zum Hängenbleiben bestimmter Befehle führte ([Firefox-Bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der `emulation.setGeolocationOverride`-Befehl wurde implementiert, was es Tests und Automatisierungstools ermöglicht, geografische Standorte in angegebenen Browser- oder Benutzerkontexten zu simulieren. Dadurch können Verbraucher standortbasierte Funktionen wie Geofencing für lokale Empfehlungen testen ([Firefox-Bug 1954992](https://bugzil.la/1954992)).

## Änderungen für Add-on-Entwickler

- Lokalisierte Erweiterungen durchlaufen jetzt Locale-Subtags, um Übersetzungen zu finden, bevor auf die Standard-Sprache der Erweiterung zurückgegriffen wird. Zuvor verwendete die Erweiterung die Standard-Sprache der Erweiterung, wenn für eine Sprache mit Subtags keine Übersetzung gefunden werden konnte. Siehe [Auswahl lokalisierter Zeichenfolgen](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) im Artikel zur Internationalisierung für weitere Details zum neuen Verhalten. ([Firefox-Bug 1381580](https://bugzil.la/1381580))
- Inhalts-Skripte und -Stile werden jetzt in der Reihenfolge ihrer Registrierung ausgeführt (d.h. ihre Reihenfolge im [`content_scripts`-Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Zuvor war die Reihenfolge nur für Skripte innerhalb desselben `js`-Arrays garantiert. ([Firefox-Bug 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}} API ist jetzt verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu verändern und neu anzuordnen. Für weitere Informationen siehe [WebExtensions-Unterstützung für Tab-Gruppen](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox-Bug 1940631](https://bugzil.la/1940631))

## Experimentelle Web-Features

Diese Features werden in Firefox 139 ausgeliefert, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Task-Scheduling-API** (Nightly-Release).
  Die [Priorisierte Task-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies fügt Unterstützung für die [`scheduler.yield()`-Methode](/de/docs/Web/API/Scheduler/yield) hinzu und aktiviert die gesamte API im Nightly-Release.
  ([Firefox-Bug 1958943](https://bugzil.la/1958943), [Firefox-Bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Release).
  Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} aktiviert. Sie bietet einen Mechanismus zur einfachen Erstellung animierter Übergänge zwischen verschiedenen Website-Ansichten. ([Firefox-Bug 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Escapen von `<` und `>` in Attributen beim Serialisieren von HTML**: `dom.security.html_serialization_escape_lt_gt`.
  Firefox ersetzt jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` in Attributen beim Serialisieren von HTML. Dies hilft, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann zurück in das DOM injiziert wird.
  Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox-Bug 1941347](https://bugzil.la/1941347)).
- **Deaktivierung der nicht standardmäßigen `beforescriptexecute` und `afterscriptexecute`**: `dom.events.script_execute.enabled`.
  Die Ereignisse wurden nur im Nightly deaktiviert, um Browser-Tests vor ihrer Entfernung zu ermöglichen.
  Die betroffenen Ereignisse sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle. ([Firefox-Bug 1954685](https://bugzil.la/1954685)).

## Ältere Versionen

{{Firefox_for_developers}}
