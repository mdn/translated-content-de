---
title: Firefox 88 für Entwickler
slug: Mozilla/Firefox/Releases/88
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 88, die Entwickler betreffen werden. Firefox 88 wurde am 19. April 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Never too late for Firefox 88](https://hacks.mozilla.org/2021/04/never-too-late-for-firefox-88/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Umschaltknopf zum Wechseln zwischen rohen und formatierten Antwortansichten wurde implementiert ([Firefox-Bug 1693147](https://bugzil.la/1693147)). Beispiele finden Sie unter [Netzwerkanfrage Details > Antwort-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab).

### HTML

_Keine Änderungen._

### CSS

- Die Pseudoklassen {{cssxref(":user-valid")}} und {{cssxref(":user-invalid")}} wurden implementiert ([Firefox-Bug 1694141](https://bugzil.la/1694141)).
- Die funktionale Notation {{cssxref("image/image-set")}} ist jetzt aktiviert ([Firefox-Bug 1698133](https://bugzil.la/1698133)) und wurde für {{cssxref("content")}} und {{cssxref("cursor")}} in [Firefox-Bug 1695402](https://bugzil.la/1695402) und [Firefox-Bug 1695403](https://bugzil.la/1695403) verfügbar gemacht.
- Die Standardschriftart `monospace` für MacOS wurde zu Menlo geändert ([Firefox-Bug 1342741](https://bugzil.la/1342741)).
- Der `collapse`-Wert von {{cssxref("visibility")}} ist nun für Ruby-Anmerkungen implementiert ([Firefox-Bug 1697529](https://bugzil.la/1697529)).
- Der `alternate`-Wert für {{cssxref("ruby-position")}} wurde implementiert und ist der neue Initialwert für die Eigenschaft ([Firefox-Bug 1694748](https://bugzil.la/1694748)).
- Die CSS-Eigenschaft {{cssxref("outline")}} wurde aktualisiert, um der durch {{cssxref("border-radius")}} erzeugten Umrandung zu folgen. Im Zuge dieser Arbeit wurde die nicht-standardisierte Eigenschaft `-moz-outline-radius` entfernt. ([Firefox-Bug 315209](https://bugzil.la/315209) und [Firefox-Bug 1694146](https://bugzil.la/1694146).)

#### Entfernungen

- Die Pseudoklasse {{cssxref(":-moz-submit-invalid")}} wurde hinter einem Präferenzwert versteckt, wodurch sie aus Webinhalten entfernt wurde ([Firefox-Bug 1694129](https://bugzil.la/1694129)).
- Die Standard-Styling für die nicht-standardisierten `:-moz-ui-invalid` und `:-moz-ui-valid` wurde entfernt ([Firefox-Bug 1693969](https://bugzil.la/1693969)).

### JavaScript

- Unterstützung für [RegExp-Match-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) hinzugefügt ([Firefox-Bug 1519483](https://bugzil.la/1519483)).
- [`Intl.DisplayNames()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames) und [`Intl.ListFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat) prüfen jetzt strenger, dass die an den Konstruktor übergebenen `options` [Objekte](/de/docs/Learn/JavaScript/Objects) sind, und werfen eine Ausnahme, wenn stattdessen eine Zeichenkette oder ein anderes Primativ verwendet wird ([Firefox-Bug 1696881](https://bugzil.la/1696881)).

### HTTP

- FTP wurde in allen Versionen deaktiviert (die Voreinstellung `network.ftp.enabled` hat jetzt den Standardwert `false`) mit der Absicht, es vollständig in Firefox 90 zu entfernen ([Firefox-Bug 1691890](https://bugzil.la/1691890)). Ergänzend zu dieser Änderung wurde die Erweiterungseinstellung [`browserSettings.ftpProtocolEnabled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) schreibgeschützt gemacht, und Web-Erweiterungen können sich jetzt als [Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) für FTP registrieren ([Firefox-Bug 1626365](https://bugzil.la/1626365)).

### Sicherheit

_Keine Änderungen._

### APIs

#### DOM

- Code kann jetzt die neue statische Methode [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static) verwenden, um ein bereits als [`aborted`](/de/docs/Web/API/AbortSignal/aborted) gesetztes [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurückzugeben ([Firefox-Bug 1698468](https://bugzil.la/1698468)).

### WebDriver-Konformität (Marionette)

- Marionette wird nicht mehr aktiviert, es sei denn, das Befehlszeilenargument `--marionette` oder die Umgebungsvariable `MOZ_MARIONETTE` wird angegeben. Daher wird die Voreinstellung `marionette.enabled` nicht mehr verwendet. Mit dieser Änderung spiegelt der Zustand von `navigator.webdriver` jetzt korrekt den aktivierten Zustand von Marionette wider ([Firefox-Bug 1593343](https://bugzil.la/1593343)).
- Ein Fehler wurde behoben, bei dem Zeigeraktionen außer `down` und `up` unangemessen dazu führten, dass Tasten gedrückt wurden ([Firefox-Bug 1686361](https://bugzil.la/1686361)).
- Ein Race-Condition in `WebDriver:GetCurrentURL` wurde behoben, die dazu führen konnte, dass der Befehl die URL der zuvor geöffneten Seite zurückgab oder sich Marionette aufhing ([Firefox-Bug 1664881](https://bugzil.la/1664881)).

## Änderungen für Add-on-Entwickler

- `url` kann jetzt verwendet werden, um die Eigenschaften einzuschränken, für die das {{WebExtAPIRef("tabs.onUpdated")}}-Ereignis ausgelöst wird ([Firefox-Bug 1680279](https://bugzil.la/1680279)).

## Ältere Versionen

{{Firefox_for_developers}}
