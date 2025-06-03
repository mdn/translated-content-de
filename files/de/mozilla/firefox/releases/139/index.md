---
title: Firefox 139 für Entwickler
short-title: Firefox 139 (Stable)
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 8827bbbc544491e3b0b23a6b2c85b7a8db9b41bb
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 139, die Entwickler betreffen.
Firefox 139 wurde am [27. Mai 2025](https://whattrainisitnow.com/release/?version=139) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`hidden=until-found`](/de/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) und das [`beforematch` Event](/de/docs/Web/API/Element/beforematch_event) werden nun unterstützt.
  Der _hidden until found_ Zustand erlaubt es Ihnen, den Inhalt eines Elements zu verbergen, bis er durch die Benutzersuche (zum Beispiel bei "Auf der Seite suchen") oder durch Fragmentnavigation gefunden wird.
  Das `beforematch` Event wird unmittelbar bevor das `hidden` Attribut entfernt wird, ausgelöst ([Firefox Bug 1761043](https://bugzil.la/1761043) und [Firefox Bug 1955379](https://bugzil.la/1955379)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Die Temporal API wird jetzt unterstützt, sie zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen ([Firefox Bug 1912511](https://bugzil.la/1912511) und [Firefox Bug 1954138](https://bugzil.la/1954138)).
  Dazu gehören:
  - Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
  - **Zeitpunkte**:
    - Als einzigartiger Moment in der Geschichte:
      - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
      - Ein Datum-Zeit-Punkt mit Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Zeitzonenunabhängiges Datum/Zeit ("Plain")**:
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

- Das experimentelle `<discard>` Element wurde entfernt, ebenso wie die dazugehörige [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Diese werden von anderen Browsern nicht unterstützt und sollen aus der Spezifikation entfernt werden.
  ([Firefox Bug 1958839](https://bugzil.la/1958839)).

### HTTP

Keine bemerkenswerten Änderungen

### APIs

#### DOM

- Die [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle wird jetzt unterstützt.
  Dadurch können Entwickler bedingt verhindern, dass ein Dialog geschlossen wird, indem ein [`cancel` Event](/de/docs/Web/API/HTMLDialogElement/cancel_event) Handler bereitgestellt wird.
  ([Firefox Bug 1960556](https://bugzil.la/1960556)).
- Die Web-Authentifizierungserweiterungen [`largeBlob`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) und [`credProps`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) werden jetzt unterstützt, während die [`prf`](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf) Erweiterung auf allen Desktop-Plattformen unterstützt wird.
  Diese bieten jeweils Unterstützung für die Speicherung großer Blobs, die mit einem Berechtigungsnachweis verbunden sind, zusätzliche Informationen über einen Berechtigungsnachweis und einen Mechanismus zur Generierung einer Zufallszahl, die mit einem Berechtigungsnachweis und einer bestimmten Eingabe verbunden ist.
  ([Firefox Bug 1795020](https://bugzil.la/1795020), [Firefox Bug 1844449](https://bugzil.la/1844449), [Firefox Bug 1935280](https://bugzil.la/1935280)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der Prioritätsmanager (unter macOS der Hintergrund-QoS-Manager) in Firefox, der die Priorisierung von IPC-Nachrichten zwischen dem Haupt- und den Inhaltsprozessen verwaltet, wurde vorübergehend für alle unterstützten Remote-Protokolle deaktiviert. Diese Änderung behebt ein Problem, bei dem unter hoher Systemauslastung das initiale Laden von Seiten in neu geöffneten Hintergrund-Tabs nicht geplant wurde, was dazu führte, dass bestimmte Befehle blockiert wurden ([Firefox Bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Der Befehl `emulation.setGeolocationOverride` wurde implementiert, sodass Tests und Automatisierungstools geografische Standorte in angegebenen Browsing-Kontexten oder Benutzerkontexten simulieren können. Dies ermöglicht es Benutzern, standortbezogene Funktionen wie Geofencing für lokale Empfehlungen zu testen ([Firefox Bug 1954992](https://bugzil.la/1954992)).

## Änderungen für Erweiterungsentwickler

- Lokalisierte Erweiterungen gehen jetzt über Lokalisierungssubtags, um Übersetzungen zu finden, bevor sie auf die Standardsprache der Erweiterung zurückfallen. Zuvor verwendete die Erweiterung die Standardsprache der Erweiterung, wenn für eine Sprache mit Subtags keine Übersetzung gefunden werden konnte. Weitere Details zum neuen Verhalten finden Sie unter [Lokalisierte Zeichenauswahl](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) im Artikel zur Internationalisierung. ([Firefox Bug 1381580](https://bugzil.la/1381580))
- Inhaltsskripte und -stile werden jetzt in der Registrierungsreihenfolge (d.h. ihrer Reihenfolge im [`content_scripts` Manifest-Schlüssel-Array](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)) garantiert ausgeführt. Zuvor war die Reihenfolge nur für Skripte innerhalb desselben `js`-Arrays gewährleistet. ([Firefox Bug 1792685](https://bugzil.la/1792685))
- Die {{WebExtAPIRef("tabGroups")}} API ist jetzt verfügbar. Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und neu anzuordnen. Weitere Informationen finden Sie unter [WebExtensions Support for Tab Groups](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox Bug 1940631](https://bugzil.la/1940631))

## Experimentelle Webfeatures

Diese Features sind in Firefox 139 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der [Seite über experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Task-Scheduling-API** (Nightly-Release).
  Die [Priorisierte Task-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code von Website-Entwicklern oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies fügt Unterstützung für die Methode [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) hinzu und aktiviert die gesamte API im Nightly-Release erneut.
  ([Firefox Bug 1958943](https://bugzil.la/1958943), [Firefox Bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly-Release).
  Die [View Transition API](/de/docs/Web/API/View_Transition_API) wurde für {{Glossary("SPA", "SPAs (Single-Page-Applikationen)")}} aktiviert. Sie bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Webseitenansichten. ([Firefox Bug 1950759](https://bugzil.la/1950759)).
- **Unterstützung für das Escapen von `<` und `>` in Attributen beim Serialisieren von HTML**: `dom.security.html_serialization_escape_lt_gt`.
  Firefox ersetzt jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` in Attributen beim Serialisieren von HTML. Dies hilft, bestimmte Exploits zu verhindern, bei denen HTML serialisiert und dann erneut in das DOM injiziert wird.
  Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox Bug 1941347](https://bugzil.la/1941347)).
- **Deaktivieren der nicht-standardmäßigen `beforescriptexecute` und `afterscriptexecute` Events**: `dom.events.script_execute.enabled`.
  Die Events wurden nur im Nightly deaktiviert, um Browser-Tests vor ihrer Entfernung zu ermöglichen.
  Die betroffenen Events sind: [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle, und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle. ([Firefox Bug 1954685](https://bugzil.la/1954685)).

## Ältere Versionen

{{Firefox_for_developers}}
