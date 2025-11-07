---
title: Firefox 109 Versionshinweise für Entwickler
short-title: Firefox 109
slug: Mozilla/Firefox/Releases/109
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 109, die Entwickler betreffen werden. Firefox 109 wurde am 17. Januar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("input/range", "range")}} Element unterstützt das [`list`](/de/docs/Web/HTML/Reference/Elements/input/range#list) Attribut, das über eine ID mit einem {{HTMLElement("datalist")}} verbunden wird, damit Firefox Markierungen entlang des Bereichs anzeigen kann.

### CSS

- Der CSS-Datentyp [`<system-color>`](/de/docs/Web/CSS/Reference/Values/system-color) unterstützt nun die Werte `Mark`, `MarkText` und `ButtonBorder` ([Firefox-Fehler 1638052](https://bugzil.la/1638052)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

#### Entfernungen

- `SVGGraphicsElement.getTransformToElement()` wurde entfernt.
  Dies folgt seiner Entfernung aus der SVG2-Spezifikation im Jahr 2015 und aus anderen großen Browsern.
  ([Firefox-Fehler 1803790](https://bugzil.la/1803790)).

- Die Attribute `SVGGraphicsElement.nearestViewportElement` und `SVGGraphicsElement.farthestViewportElement` sind standardmäßig in Nightly- und frühen Beta-Builds deaktiviert (hinter der Präferenz `svg.nearestAndFarthestViewportElement.enabled`).
  [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) kann als Alternative zu `SVGGraphicsElement.nearestViewportElement` verwendet werden.
  Sie wurden aus der SVG2-Spezifikation entfernt und werden wahrscheinlich in einer zukünftigen Version vollständig aus Firefox entfernt.
  ([Firefox-Fehler 1133174](https://bugzil.la/1133174)).

### HTTP

- Der Wert `'unsafe-hashes'` für {{HTTPHeader("Content-Security-Policy")}} Quellen-Direktiven wird nun unterstützt.
  Weitere Informationen finden Sie unter [CSP unsafe-hashes](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_hashes) ([Firefox-Fehler 1343950](https://bugzil.la/1343950)).

### APIs

#### DOM

- Die `scrollend`-Ereignisse werden jetzt unterstützt, die anzeigen, dass der Benutzer das Scrollen in [`Element`](/de/docs/Web/API/Element) und [`Document`](/de/docs/Web/API/Document) Objekten abgeschlossen hat.
  Weitere Informationen finden Sie unter [Element: `scrollend` event](/de/docs/Web/API/Element/scrollend_event) und [Document: `scrollend` event](/de/docs/Web/API/Document/scrollend_event) ([Firefox-Fehler 1797013](https://bugzil.la/1797013), [Firefox-Fehler 1803435](https://bugzil.la/1803435)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verbindungsdetails für WebDriver BiDi werden nun in `WebDriverBiDiServer.json` statt `WebDriverBiDiActivePort` geschrieben, das sowohl den Port (`ws_port`) als auch den Host (`ws_host`) enthält. Diese Datei befindet sich im Firefox-Profilordner ([Firefox-Fehler 1792875](https://bugzil.la/1792875)).
- Unterstützung für das Abonnieren / Abbestellen von einzelnen `contexts` bei Verwendung von `session.subscribe` und `session.unsubscribe` hinzugefügt ([Firefox-Fehler 1723102](https://bugzil.la/1723102)).
- Unterstützung für die Serialisierung von `Node`-Objekten hinzugefügt ([Firefox-Fehler 1770731](https://bugzil.la/1770731)).
- Behoben: `columnNumber` für `exceptions` und `stackTraces` ist jetzt 0-basiert ([Firefox-Fehler 1796073](https://bugzil.la/1796073)).

#### Marionette

- Ein Fehler wurde behoben, bei dem `WebDriver:NewWindow` und `WebDriver:SwitchToWindow` das neue Fenster nicht ordnungsgemäß fokussierten ([Firefox-Fehler 1798655](https://bugzil.la/1798655)).
- Ein Fehler wurde behoben, bei dem `WebDriver:FindElement` (und ähnliche Befehle) fehlschlagen würde, wenn das Firefox-Fenster auf Windows von anderen Anwendungen verdeckt wurde ([Firefox-Fehler 1802473](https://bugzil.la/1802473)).

## Änderungen für Add-on-Entwickler

- Manifest V3 wird jetzt unterstützt mit der Fähigkeit, Manifest V3-Erweiterungen auf AMO zu signieren und zu veröffentlichen. Weitere Informationen finden Sie im Blogbeitrag [Manifest v3 signing available November 21 on Firefox Nightly](https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/). Die folgenden Vorschaufunktionen sind jetzt vollständig verfügbar:
  - Die {{WebExtAPIRef("scripting")}}-API, obwohl diese seit Firefox 102 für Manifest V2-Erweiterungen verfügbar ist.
  - Die {{WebExtAPIRef("action")}}-API, und der [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssel und [`_execute_action` spezieller Shortcut](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) im `commands`-Manifest-Schlüssel.
  - Der [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssel.

- Die standardmäßige [Content Security Policy (CSP)](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für Manifest V3-Erweiterungen wurde aktualisiert, um [Include `upgrade-insecure-requests`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3) einzuschließen. Das bedeutet, dass standardmäßig alle Netzwerkanfragen auf die Verwendung von `https:` umgestellt werden. Erweiterungen, die `http:` verwenden müssen, können dies tun, indem sie die Standard-CSP mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Manifest-Schlüssel überschreiben ([Firefox-Fehler 1797086](https://bugzil.la/1797086)).
- Die Eigenschaft `secretKeyLength` wurde zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaft gibt die Länge in Bits des geheimen Schlüssels in den Sicherheitsmerkmalen einer Webanfrage zurück ([Firefox-Fehler 1778473](https://bugzil.la/1778473)).
- Mit der Einführung des [Erweiterungen-Buttons](https://support.mozilla.org/en-US/kb/extensions-button) wurde der Standardwert von `default_area` in den [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Manifest-Schlüsseln von `"navbar"` auf `"menupanel"` geändert ([Firefox-Fehler 1799947](https://bugzil.la/1799947)).
- Unterstützung für {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} und die `deletable`-Eigenschaft in {{WebExtAPIRef("omnibox.SuggestResult")}}, wodurch Erweiterungen auf das Löschen eines Suchergebnisses in der Adressleiste durch den Benutzer reagieren können ([Firefox-Fehler 1799947](https://bugzil.la/1799947)).
- Unterstützung für die <code>top</code> und <code>left</code> Parameter zur Positionsbestimmung von `panel` oder `popup` Fenstern mit {{WebExtAPIRef("windows.create()")}} ([Firefox-Fehler 1271047](https://bugzil.la/1271047)).
