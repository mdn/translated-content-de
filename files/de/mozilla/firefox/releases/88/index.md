---
title: Firefox 88 für Entwickler
slug: Mozilla/Firefox/Releases/88
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 88, die Entwickler betreffen. Firefox 88 wurde am 19. April 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Nie zu spät für Firefox 88](https://hacks.mozilla.org/2021/04/never-too-late-for-firefox-88/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Umschaltknopf zum Wechseln zwischen der Ansicht für rohe und formatierte Antworten wurde implementiert ([Firefox Fehler 1693147](https://bugzil.la/1693147)). Für Beispiele siehe [Netzwerkanfragen Details > Antwort-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab).

### HTML

_Keine Änderungen._

### CSS

- Die {{cssxref(":user-valid")}} und {{cssxref(":user-invalid")}} Pseudoklassen wurden implementiert ([Firefox Fehler 1694141](https://bugzil.la/1694141)).
- Die {{cssxref("image/image-set")}} funktionale Notation ist nun aktiviert ([Firefox Fehler 1698133](https://bugzil.la/1698133)) und wurde für {{cssxref("content")}} und {{cssxref("cursor")}} in [Firefox Fehler 1695402](https://bugzil.la/1695402) und [Firefox Fehler 1695403](https://bugzil.la/1695403) verfügbar gemacht.
- Die Standardschriftart `monospace` für MacOS wurde auf Menlo geändert ([Firefox Fehler 1342741](https://bugzil.la/1342741)).
- Der `collapse` Wert der {{cssxref("visibility")}} ist nun für Ruby-Anmerkungen implementiert ([Firefox Fehler 1697529](https://bugzil.la/1697529)).
- Der `alternate` Wert für {{cssxref("ruby-position")}} wurde implementiert und ist der neue Anfangswert für die Eigenschaft ([Firefox Fehler 1694748](https://bugzil.la/1694748)).
- Die {{cssxref("outline")}} CSS-Eigenschaft wurde aktualisiert, um die durch {{cssxref("border-radius")}} erzeugte Kontur zu folgen. Im Rahmen dieser Arbeit wurde die nicht-standardisierte Eigenschaft `-moz-outline-radius` entfernt. ([Firefox Fehler 315209](https://bugzil.la/315209) und [Firefox Fehler 1694146](https://bugzil.la/1694146).)

#### Entfernungen

- Die {{cssxref(":-moz-submit-invalid")}} Pseudoklasse wurde hinter einer Voreinstellung versteckt und dadurch aus Webinhalten entfernt ([Firefox Fehler 1694129](https://bugzil.la/1694129)).
- Die Standardstile für die nicht-standardisierten `:-moz-ui-invalid` und `:-moz-ui-valid` wurden entfernt ([Firefox Fehler 1693969](https://bugzil.la/1693969)).

### JavaScript

- Unterstützung für [RegExp Match-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) hinzugefügt ([Firefox Fehler 1519483](https://bugzil.la/1519483)).
- [`Intl.DisplayNames()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames) und [`Intl.ListFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat) haben nun strengere Prüfungen, dass die an den Konstruktor übergebenen `Options` [Objekte](/de/docs/Learn/JavaScript/Objects) sind, und werfen eine Ausnahme, wenn stattdessen eine Zeichenkette oder ein anderer primitiver Typ verwendet wird ([Firefox Fehler 1696881](https://bugzil.la/1696881)).

### HTTP

- FTP wurde in allen Versionen deaktiviert (die Voreinstellung `network.ftp.enabled` ist nun standardmäßig `false`), mit der Absicht, es in Firefox 90 vollständig zu entfernen ([Firefox Fehler 1691890](https://bugzil.la/1691890)). Ergänzend zu dieser Änderung wurde die Erweiterungseinstellung [`browserSettings.ftpProtocolEnabled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) als schreibgeschützt gemacht, und Web-Erweiterungen können sich nun als [Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) für FTP registrieren ([Firefox Fehler 1626365](https://bugzil.la/1626365)).

### Sicherheit

_Keine Änderungen._

### APIs

#### DOM

- Code kann nun die neue statische Methode [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static) verwenden, um ein {{domxref("AbortSignal")}} zurückzugeben, das bereits als [`aborted`](/de/docs/Web/API/AbortSignal/aborted) gesetzt ist ([Firefox Fehler 1698468](https://bugzil.la/1698468)).

### WebDriver-Konformität (Marionette)

- Marionette wird nicht mehr aktiviert, es sei denn, das `--marionette` Kommandozeilenargument oder die `MOZ_MARIONETTE` Umgebungsvariable ist angegeben. Daher wird die Einstellung `marionette.enabled` nicht mehr verwendet. Mit dieser Änderung spiegelt der Zustand von `navigator.webdriver` nun korrekt den aktivierten Zustand von Marionette wider ([Firefox Fehler 1593343](https://bugzil.la/1593343)).
- Ein Fehler wurde behoben, bei dem Zeigeraktionen, die nicht `down` und `up` sind, unangemessen dazu führten, dass Tasten gedrückt wurden ([Firefox Fehler 1686361](https://bugzil.la/1686361)).
- Eine Race-Bedingung in `WebDriver:GetCurrentURL` wurde behoben, die dazu führen konnte, dass der Befehl die URL der zuvor geöffneten Seite zurückgab oder sogar zu einem Hänger in Marionette führte ([Firefox Fehler 1664881](https://bugzil.la/1664881)).

## Änderungen für Add-on-Entwickler

- `url` kann nun verwendet werden, um die Eigenschaften zu begrenzen, für die das {{WebExtAPIRef("tabs.onUpdated")}} Ereignis ausgelöst wird ([Firefox Fehler 1680279](https://bugzil.la/1680279)).

## Ältere Versionen

{{Firefox_for_developers}}
