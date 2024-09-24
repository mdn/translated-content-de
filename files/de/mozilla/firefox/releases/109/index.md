---
title: Firefox 109 für Entwickler
slug: Mozilla/Firefox/Releases/109
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 109, die Entwickler betreffen. Firefox 109 wurde am 17. Januar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("input/range", "range")}}-Element unterstützt das [`list`](/de/docs/Web/HTML/Element/input/range#list)-Attribut, das über eine ID mit einem {{HTMLElement("datalist")}} verlinkt wird, um es Firefox zu ermöglichen, Markierungen entlang des Bereichs anzuzeigen.

### CSS

- Der CSS-Datentyp [`<system-color>`](/de/docs/Web/CSS/system-color) unterstützt jetzt die Werte [`Mark`](/de/docs/Web/CSS/system-color#mark), [`MarkText`](/de/docs/Web/CSS/system-color#marktext) und [`ButtonBorder`](/de/docs/Web/CSS/system-color#buttonborder) ([Firefox Bug 1638052](https://bugzil.la/1638052)).

### JavaScript

Keine nennenswerten Änderungen.

### SVG

#### Entfernungen

- `SVGGraphicsElement.getTransformToElement()` wurde entfernt.
  Dies folgt seiner Entfernung aus der SVG2-Spezifikation im Jahr 2015 und aus anderen großen Browsern.
  ([Firefox Bug 1803790](https://bugzil.la/1803790)).

- Die Attribute `SVGGraphicsElement.nearestViewportElement` und `SVGGraphicsElement.farthestViewportElement` wurden in Nightly- und frühen Beta-Builds standardmäßig deaktiviert (hinter der Einstellung `svg.nearestAndFarthestViewportElement.enabled`).
  [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement#svgelement.viewportelement) kann als Alternative zu `SVGGraphicsElement.nearestViewportElement` verwendet werden.
  Sie wurden aus der SVG2-Spezifikation entfernt und werden wahrscheinlich in einer zukünftigen Version vollständig aus Firefox entfernt.
  ([Firefox Bug 1133174](https://bugzil.la/1133174)).

### HTTP

- Der Wert `'unsafe-hashes'` für {{HTTPHeader("Content-Security-Policy")}}-Quellrichtlinien wird nun unterstützt.
  Weitere Informationen finden Sie unter [CSP unsafe-hashes](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_hashes) ([Firefox Bug 1343950](https://bugzil.la/1343950)).

### APIs

#### DOM

- Die `scrollend`-Events werden jetzt unterstützt, die anzeigen, dass der Benutzer das Scrollen in {{domxref("Element")}} und {{domxref("Document")}}-Objekten abgeschlossen hat.
  Weitere Informationen finden Sie unter [Element: `scrollend` Event](/de/docs/Web/API/Element/scrollend_event) und [Document: `scrollend` Event](/de/docs/Web/API/Document/scrollend_event) ([Firefox Bug 1797013](https://bugzil.la/1797013), [Firefox Bug 1803435](https://bugzil.la/1803435)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verbindungsdetails für WebDriver BiDi werden jetzt in `WebDriverBiDiServer.json` anstelle von `WebDriverBiDiActivePort` geschrieben, welches sowohl den Port (`ws_port`) als auch den Host (`ws_host`) enthält. Diese Datei befindet sich im Firefox-Profilordner ([Firefox Bug 1792875](https://bugzil.la/1792875)).
- Unterstützung hinzugefügt für das Abonnieren / Kündigen von individuellen `contexts`, wenn `session.subscribe` und `session.unsubscribe` verwendet werden ([Firefox Bug 1723102](https://bugzil.la/1723102)).
- Unterstützung für die Serialisierung von `Node`-Objekten hinzugefügt ([Firefox Bug 1770731](https://bugzil.la/1770731)).
- Der `columnNumber` für `exceptions` und `stackTraces` wurde auf 0-basierend korrigiert ([Firefox Bug 1796073](https://bugzil.la/1796073)).

#### Marionette

- Ein Fehler wurde behoben, bei dem `WebDriver:NewWindow` und `WebDriver:SwitchToWindow` das neue Fenster nicht richtig fokussierten ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- Ein Fehler wurde behoben, bei dem `WebDriver:FindElement` (und ähnliche Befehle) fehlschlagen würden, wenn das Firefox-Fenster von anderen Anwendungen in Windows verdeckt war ([Firefox Bug 1802473](https://bugzil.la/1802473)).

## Änderungen für Add-on-Entwickler

- Manifest V3 wird jetzt unterstützt, mit der Möglichkeit, Manifest V3-Erweiterungen auf AMO zu signieren und zu veröffentlichen. Weitere Informationen finden Sie im Blogbeitrag [Manifest v3 signing available November 21 on Firefox Nightly](https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/). Die folgenden Vorschaufunktionen sind jetzt vollständig verfügbar:

  - Die {{WebExtAPIRef("scripting")}}-API, obwohl diese bereits seit Firefox 102 für Manifest V2-Erweiterungen verfügbar ist.
  - Die {{WebExtAPIRef("action")}}-API und der [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssel sowie die [`_execute_action` Spezialverknüpfung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) im Manifest-`commands`-Schlüssel.
  - Der [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssel.

- Die Standard-Content-Security-Policy (CSP) für Manifest V3-Erweiterungen wurde aktualisiert, um [`upgrade-insecure-requests`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3) einzuschließen. Das bedeutet, dass standardmäßig alle Netzwerk-Anfragen auf `https:` aktualisiert werden. Erweiterungen, die `http:` verwenden müssen, können dies tun, indem sie die Standard-CSP mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Manifest.json-Schlüssel überschreiben ([Firefox Bug 1797086](https://bugzil.la/1797086)).
- Die Eigenschaft `secretKeyLength` wurde zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaft gibt die Länge in Bits des geheimen Schlüssels in den Sicherheitsinformationen einer Webanfrage an ([Firefox Bug 1778473](https://bugzil.la/1778473)).
- Mit der Einführung der [Erweiterungsschaltfläche](https://support.mozilla.org/en-US/kb/extensions-button) hat sich der Standardwert von `default_area` in den [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Manifest-Schlüsseln von `"navbar"` zu `"menupanel"` geändert ([Firefox Bug 1799947](https://bugzil.la/1799947)).
- Unterstützung für {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} und die `deletable`-Eigenschaft in {{WebExtAPIRef("omnibox.SuggestResult")}}, die es Erweiterungen ermöglicht, auf das Löschen eines Adressleisten-Suchergebnisses durch den Benutzer zu reagieren ([Firefox Bug 1799947](https://bugzil.la/1799947)).

## Ältere Versionen

{{Firefox_for_developers}}
