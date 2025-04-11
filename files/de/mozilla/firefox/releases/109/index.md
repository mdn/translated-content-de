---
title: Firefox 109 für Entwickler
slug: Mozilla/Firefox/Releases/109
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 109, die Entwickler betreffen. Firefox 109 wurde am 17. Januar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("input/range", "range")}}-Element unterstützt das [`list`](/de/docs/Web/HTML/Reference/Elements/input/range#list)-Attribut, das über eine ID mit einem {{HTMLElement("datalist")}} verbunden ist, damit Firefox Markierungen entlang des Bereichs anzeigen kann.

### CSS

- Der CSS-Datentyp [`<system-color>`](/de/docs/Web/CSS/system-color) unterstützt nun die Werte [`Mark`](/de/docs/Web/CSS/system-color#mark), [`MarkText`](/de/docs/Web/CSS/system-color#marktext) und [`ButtonBorder`](/de/docs/Web/CSS/system-color#buttonborder) ([Firefox Fehler 1638052](https://bugzil.la/1638052)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

#### Entfernungen

- `SVGGraphicsElement.getTransformToElement()` wurde entfernt. Dies folgt auf die Entfernung aus der SVG2-Spezifikation im Jahr 2015 und aus anderen großen Browsern. ([Firefox Fehler 1803790](https://bugzil.la/1803790)).

- Die Attribute `SVGGraphicsElement.nearestViewportElement` und `SVGGraphicsElement.farthestViewportElement` wurden standardmäßig in Nightly- und frühen Beta-Versionen deaktiviert (hinter der Einstellung `svg.nearestAndFarthestViewportElement.enabled`). [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) kann als Alternative zu `SVGGraphicsElement.nearestViewportElement` verwendet werden. Sie wurden aus der SVG2-Spezifikation entfernt und werden wahrscheinlich in einer zukünftigen Firefox-Version vollständig entfernt. ([Firefox Fehler 1133174](https://bugzil.la/1133174)).

### HTTP

- Der Wert `'unsafe-hashes'` für {{HTTPHeader("Content-Security-Policy")}} Quellrichtlinien wird nun unterstützt. Weitere Informationen finden Sie unter [CSP unsafe-hashes](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_hashes) ([Firefox Fehler 1343950](https://bugzil.la/1343950)).

### APIs

#### DOM

- Die `scrollend`-Ereignisse werden jetzt unterstützt, die anzeigen, dass der Benutzer das Scrollen in [`Element`](/de/docs/Web/API/Element)- und [`Document`](/de/docs/Web/API/Document)-Objekten abgeschlossen hat. Weitere Informationen finden Sie unter [Element: `scrollend` Ereignis](/de/docs/Web/API/Element/scrollend_event) und [Document: `scrollend` Ereignis](/de/docs/Web/API/Document/scrollend_event) ([Firefox Fehler 1797013](https://bugzil.la/1797013), [Firefox Fehler 1803435](https://bugzil.la/1803435)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verbindungsdetails für WebDriver BiDi werden nun in `WebDriverBiDiServer.json` und nicht mehr in `WebDriverBiDiActivePort` geschrieben, das sowohl den Port (`ws_port`) als auch den Host (`ws_host`) enthält. Diese Datei befindet sich im Firefox-Profilordner ([Firefox Fehler 1792875](https://bugzil.la/1792875)).
- Unterstützung für das Abonnieren/Dedizierten von individuellen `contexts` beim Verwenden von `session.subscribe` und `session.unsubscribe` hinzugefügt ([Firefox Fehler 1723102](https://bugzil.la/1723102)).
- Unterstützung für das Serialisieren von `Node`-Objekten hinzugefügt ([Firefox Fehler 1770731](https://bugzil.la/1770731)).
- Der `columnNumber` für `exceptions` und `stackTraces` wurde auf 0-basierend korrigiert ([Firefox Fehler 1796073](https://bugzil.la/1796073)).

#### Marionette

- Ein Fehler wurde behoben, bei dem `WebDriver:NewWindow` und `WebDriver:SwitchToWindow` das neue Fenster nicht richtig fokussierten ([Firefox Fehler 1798655](https://bugzil.la/1798655)).
- Ein Fehler wurde behoben, bei dem `WebDriver:FindElement` (und ähnliche Befehle) fehlschlagen würden, wenn das Firefox-Fenster unter anderen Anwendungen in Windows verdeckt wäre ([Firefox Fehler 1802473](https://bugzil.la/1802473)).

## Änderungen für Add-on-Entwickler

- Manifest V3 wird nun mit der Möglichkeit unterstützt, Manifest V3-Erweiterungen auf AMO zu signieren und zu veröffentlichen. Weitere Informationen finden Sie im Blogbeitrag [Manifest v3 signing available November 21 on Firefox Nightly](https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/). Die folgenden Vorabversionen sind nun vollständig verfügbar:

  - Die {{WebExtAPIRef("scripting")}} API, obwohl sie seit Firefox 102 für Manifest V2-Erweiterungen verfügbar ist.
  - Die {{WebExtAPIRef("action")}} API, sowie der [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssel und der [`_execute_action` Spezialschlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) im Manifest-Schlüssel `commands`.
  - Der [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.

- Die Standardmäßige [Content Security Policy (CSP)](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für Manifest V3-Erweiterungen wurde aktualisiert, um [einschließlich `upgrade-insecure-requests`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3). Dies bedeutet, dass standardmäßig alle Netzwerkrequests auf `https:` aktualisiert werden. Erweiterungen, die `http:` verwenden möchten, können dies tun, indem sie die Standard-CSP über den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Manifest.json-Schlüssel überschreiben ([Firefox Fehler 1797086](https://bugzil.la/1797086)).
- Die Eigenschaft `secretKeyLength` wurde zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaft bietet die Länge in Bits des geheimen Schlüssels in den Sicherheitsmerkmalen einer Webanfrage ([Firefox Fehler 1778473](https://bugzil.la/1778473)).
- Mit der Einführung des [Erweiterungen-Schalters](https://support.mozilla.org/en-US/kb/extensions-button) hat sich der Standardwert von `default_area` in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) von `"navbar"` auf `"menupanel"` geändert ([Firefox Fehler 1799947](https://bugzil.la/1799947)).
- Unterstützung für {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} und die `deletable` Eigenschaft in {{WebExtAPIRef("omnibox.SuggestResult")}}, die es Erweiterungen ermöglicht, auf das Löschen eines Suchergebnisses in der Adressleiste durch den Benutzer zu reagieren ([Firefox Fehler 1799947](https://bugzil.la/1799947)).
- Unterstützung für die Parameter <code>top</code> und <code>left</code> zur Bestimmung der Positionierung des `panel`- oder `popup`-Fensters mit {{WebExtAPIRef("windows.create()")}} ([Firefox Fehler 1271047](https://bugzil.la/1271047)).

## Ältere Versionen

{{Firefox_for_developers}}
