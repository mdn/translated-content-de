---
title: Firefox-88-Veröffentlichungshinweise für Entwickler
short-title: Firefox 88
slug: Mozilla/Firefox/Releases/88
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 88, die sich auf Entwickler auswirken. Firefox 88 wurde am 19. April 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Never too late for Firefox 88](https://hacks.mozilla.org/2021/04/never-too-late-for-firefox-88/) bei Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Umschaltfläche zum Wechseln zwischen Rohdaten- und formatierten Antwortansichten wurde implementiert ([Firefox-Bug 1693147](https://bugzil.la/1693147)). Beispiele finden Sie unter [Netzwerkanfragedetails > Antwort-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab).

### HTML

_Keine Änderungen._

### CSS

- Die Pseudoklassen {{cssxref(":user-valid")}} und {{cssxref(":user-invalid")}} wurden implementiert ([Firefox-Bug 1694141](https://bugzil.la/1694141)).
- Die funktionale Notation {{cssxref("image/image-set")}} ist nun aktiviert ([Firefox-Bug 1698133](https://bugzil.la/1698133)) und wurde in [Firefox-Bug 1695402](https://bugzil.la/1695402) sowie [Firefox-Bug 1695403](https://bugzil.la/1695403) für {{cssxref("content")}} und {{cssxref("cursor")}} verfügbar gemacht.
- Die standardmäßige Schriftart `monospace` für macOS wurde zu Menlo geändert ([Firefox-Bug 1342741](https://bugzil.la/1342741)).
- Der Wert `collapse` von {{cssxref("visibility")}} ist nun für Ruby-Anmerkungen implementiert ([Firefox-Bug 1697529](https://bugzil.la/1697529)).
- Der Wert `alternate` für {{cssxref("ruby-position")}} wurde implementiert und ist der neue Anfangswert der Eigenschaft ([Firefox-Bug 1694748](https://bugzil.la/1694748)).
- Die CSS-Eigenschaft {{cssxref("outline")}} wurde aktualisiert, sodass sie der durch {{cssxref("border-radius")}} erzeugten Umrandung folgt. Im Rahmen dieser Arbeit wurde die nicht standardmäßige Eigenschaft `-moz-outline-radius` entfernt. ([Firefox-Bug 315209](https://bugzil.la/315209) und [Firefox-Bug 1694146](https://bugzil.la/1694146).)

#### Entfernungen

- Die Pseudoklasse {{cssxref(":-moz-submit-invalid")}} wurde hinter einer Einstellung verborgen und dadurch aus Webinhalten entfernt ([Firefox-Bug 1694129](https://bugzil.la/1694129)).
- Das Standard-Styling für die nicht standardmäßigen Pseudoklassen `:-moz-ui-invalid` und `:-moz-ui-valid` wurde entfernt ([Firefox-Bug 1693969](https://bugzil.la/1693969)).

### JavaScript

- Unterstützung für [RegExp-Match-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) wurde hinzugefügt ([Firefox-Bug 1519483](https://bugzil.la/1519483)).
- [`Intl.DisplayNames()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames) und [`Intl.ListFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat) prüfen nun strenger, ob die an den Konstruktor übergebenen `options` [Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) sind, und lösen eine Ausnahme aus, wenn stattdessen ein String oder ein anderer primitiver Wert verwendet wird ([Firefox-Bug 1696881](https://bugzil.la/1696881)).

### HTTP

- FTP wurde in allen Versionen deaktiviert (die Einstellung `network.ftp.enabled` hat nun standardmäßig den Wert `false`), mit dem Ziel, es in Firefox 90 vollständig zu entfernen ([Firefox-Bug 1691890](https://bugzil.la/1691890)). Ergänzend zu dieser Änderung wurde die Erweiterungseinstellung [`browserSettings.ftpProtocolEnabled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) schreibgeschützt gemacht, und Web-Erweiterungen können sich nun als [Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) für FTP registrieren ([Firefox-Bug 1626365](https://bugzil.la/1626365)).

### Sicherheit

_Keine Änderungen._

### APIs

#### DOM

- Code kann nun die neue statische Methode [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static) verwenden, um ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurückzugeben, das bereits auf [`aborted`](/de/docs/Web/API/AbortSignal/aborted) gesetzt ist ([Firefox-Bug 1698468](https://bugzil.la/1698468)).

### WebDriver-Konformität (Marionette)

- Marionette wird nicht mehr aktiviert, sofern nicht das Kommandozeilenargument `--marionette` oder die Umgebungsvariable `MOZ_MARIONETTE` angegeben wird. Daher wird die Einstellung `marionette.enabled` nicht mehr verwendet. Mit dieser Änderung spiegelt der Status von `navigator.webdriver` nun korrekt den Aktivierungsstatus von Marionette wider ([Firefox-Bug 1593343](https://bugzil.la/1593343)).
- Ein Fehler wurde behoben, bei dem Pointer-Aktionen außer `down` und `up` fälschlicherweise dazu führten, dass Schaltflächen gedrückt wurden ([Firefox-Bug 1686361](https://bugzil.la/1686361)).
- Eine Race Condition in `WebDriver:GetCurrentURL` wurde behoben, die dazu führen konnte, dass der Befehl die URL der zuvor geöffneten Seite zurückgab oder Marionette sogar hängen blieb ([Firefox-Bug 1664881](https://bugzil.la/1664881)).

## Änderungen für Add-on-Entwickler

- `url` kann nun verwendet werden, um die Eigenschaften einzuschränken, für die das Ereignis {{WebExtAPIRef("tabs.onUpdated")}} ausgelöst wird ([Firefox-Bug 1680279](https://bugzil.la/1680279)).
