---
title: Firefox 139 für Entwickler
short-title: Firefox 139
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel informiert über die Änderungen in Firefox 139, die Entwickler betreffen.
Firefox 139 wurde am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) und das [`beforematch` Ereignis](/de/docs/Web/API/Element/beforematch_event) werden jetzt unterstützt.
  Der Zustand _hidden until found_ ermöglicht es, den Inhalt eines Elements zu verbergen, bis er durch die Benutzersuche (zum Beispiel mit "Seite durchsuchen") oder durch Fragmentnavigation gefunden wird.
  Das `beforematch` Ereignis wird unmittelbar bevor das `hidden` Attribut entfernt wird, ausgelöst ([Firefox Fehler 1761043](https://bugzil.la/1761043) und [Firefox Fehler 1955379](https://bugzil.la/1955379)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die Temporal API wird jetzt unterstützt, diese soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen, mit integrierter Zeitzonen- und Kalenderdarstellung ([Firefox Fehler 1912511](https://bugzil.la/1912511) und [Firefox Fehler 1954138](https://bugzil.la/1954138)).
  Dies beinhaltet:
  - Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als einzigartiger Moment in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Uhrzeit mit Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonenunabhängiges Datum/Zeit ("Plain")**:
      - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
        - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
          - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
          - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
        - Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
  - **Jetzt** (aktuelle Zeit) als verschiedene Instanzen von Klassen oder in einem bestimmten Format: {{jsxref("Temporal.Now")}}
- Derzeit sind die folgenden Kalendertypen für die Methode `withCalendar()` für [`PlainDate`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar) und [`ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) Objekte deaktiviert:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

### SVG

#### Entfernungen

- Das experimentelle `<discard>` Element wurde entfernt, zusammen mit der entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Diese werden in anderen Browsern nicht unterstützt und sollen aus der Spezifikation entfernt werden.
  ([Firefox Fehler 1958839](https://bugzil.la/1958839)).

### HTTP

Keine bemerkenswerten Änderungen

### APIs

#### DOM

- Die Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, das Schließen eines Dialogs bedingt zu verhindern, indem sie einen [`cancel` Ereignis](/de/docs/Web/API/HTMLDialogElement/cancel_event) Handler bereitstellen.
  ([Firefox Fehler 1960556](https://bugzil.la/1960556)).
- Die Webauthentifizierungs-Erweiterungen [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) werden jetzt unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf) Erweiterung auf allen Desktop-Plattformen unterstützt wird.
  Diese bieten jeweils Unterstützung für die Speicherung großer Blobs, die mit einem Anmeldeinformationsmerk verbunden sind, zusätzliche Informationen über ein Anmeldeinformationsmerk und einen Mechanismus zur Generierung einer zufälligen Zahl, die mit einem Anmeldeinformationsmerk und einem bestimmten Eingang verbunden ist.
  ([Firefox Fehler 1795020](https://bugzil.la/1795020), [Firefox Fehler 1844449](https://bugzil.la/1844449), [Firefox Fehler 1935280](https://bugzil.la/1935280)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der Prioritätsmanager (unter macOS der Hintergrund-QoS-Manager) in Firefox, der die Priorisierung von IPC-Nachrichten zwischen dem Eltern- und den Inhaltsprozessen verwaltet, wurde vorübergehend für alle unterstützten Remote-Protokolle deaktiviert. Diese Änderung löst ein Problem, bei dem unter hoher Systemlast das initiale Laden von Seiten in neu geöffneten Hintergrundtabs nicht eingeplant wurde, was dazu führte, dass bestimmte Befehle hängen blieben ([Firefox Fehler 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der `emulation.setGeolocationOverride` Befehl wurde implementiert, wodurch Tests und Automatisierungstools die Möglichkeit haben, geografische Positionen in angegebenen Browsing-Kontexten oder Benutzerkontexten zu simulieren. Dies ermöglicht es Verbrauchern, standortbezogene Funktionen wie Geofencing für lokale Empfehlungen zu testen ([Firefox Fehler 1954992](https://bugzil.la/1954992)).

## Änderungen für Add-on-Entwickler

- Lokalisierte Erweiterungen durchlaufen jetzt die Lokalisierungssubtags, um Übersetzungen zu finden, bevor sie auf die Standardsprache der Erweiterung zurückfallen. Zuvor verwendete die Erweiterung die Standardsprache der Erweiterung, wenn für eine Sprache mit Subtags keine Übersetzung gefunden werden konnte. Siehe [Lokalisierte Zeichenauswahl](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) im Artikel Internationalisierung für weitere Details zum neuen Verhalten. ([Firefox Fehler 1381580](https://bugzil.la/1381580))
- Inhalts-Skripte und Stile werden jetzt in der Reihenfolge ihrer Registrierung ausgeführt (d.h. ihre Reihenfolge im [`content_scripts` manifest key array](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Zuvor war die Reihenfolge nur für Skripte innerhalb derselben `js`-Array garantiert. ([Firefox Fehler 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}} API ist jetzt verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und neu anzuordnen. Weitere Informationen finden Sie unter [WebExtensions Support for Tab Groups](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox Fehler 1940631](https://bugzil.la/1940631))

## Experimentelle Web-Features

Diese Funktionen wurden in Firefox 139 geliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **APIs zur priorisierten Aufgabenplanung** (Nightly-Version).
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.
  Dies fügt Unterstützung für die Methode [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) hinzu und aktiviert die gesamte API in der Nightly-Version erneut.
  ([Firefox Fehler 1958943](https://bugzil.la/1958943), [Firefox Fehler 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Version).
  Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "SPAs (Single-Page Applications)")}} aktiviert. Sie bietet einen Mechanismus zum einfachen Erstellen animierter Übergänge zwischen verschiedenen Website-Ansichten. ([Firefox Fehler 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Escapen von `<` und `>` in Attributen beim Serialisieren von HTML**: `dom.security.html_serialization_escape_lt_gt`.
  Firefox ersetzt nun die Zeichen `<` und `>` in Attributen beim Serialisieren von HTML mit `&lt;` und `&gt;`, was dazu beiträgt, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann wieder in den DOM injiziert wird.
  Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox Fehler 1941347](https://bugzil.la/1941347)).
- **Deaktivierung der nicht standardmäßigen `beforescriptexecute` und `afterscriptexecute`**: `dom.events.script_execute.enabled`.
  Die Ereignisse wurden nur in Nightly deaktiviert, um Browser-Tests vor ihrer Entfernung zu ermöglichen.
  Die betroffenen Ereignisse sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle. ([Firefox Fehler 1954685](https://bugzil.la/1954685)).
