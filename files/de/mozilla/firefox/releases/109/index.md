---
title: Firefox 109 für Entwickler
slug: Mozilla/Firefox/Releases/109
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 109, die Entwickler betreffen werden. Firefox 109 wurde am 17. Januar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("input/range", "range")}}-Element unterstützt das [`list`](/de/docs/Web/HTML/Reference/Elements/input/range#list)-Attribut, welches über eine id mit einer {{HTMLElement("datalist")}} verlinkt ist, um Firefox zu ermöglichen, Markierungen entlang der Skala anzuzeigen.

### CSS

- Der CSS-Datentyp [`<system-color>`](/de/docs/Web/CSS/system-color) unterstützt jetzt die Werte [`Mark`](/de/docs/Web/CSS/system-color#mark), [`MarkText`](/de/docs/Web/CSS/system-color#marktext) und [`ButtonBorder`](/de/docs/Web/CSS/system-color#buttonborder) ([Firefox Bug 1638052](https://bugzil.la/1638052)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

#### Entfernungen

- `SVGGraphicsElement.getTransformToElement()` wurde entfernt.
  Dies folgt seiner Entfernung aus der SVG2-Spezifikation im Jahr 2015 und aus anderen großen Browsern.
  ([Firefox Bug 1803790](https://bugzil.la/1803790)).

- Die Attribute `SVGGraphicsElement.nearestViewportElement` und `SVGGraphicsElement.farthestViewportElement` wurden standardmäßig in Nightly- und frühen Beta-Builds deaktiviert (hinter der Einstellung `svg.nearestAndFarthestViewportElement.enabled`).
  [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) kann als Alternative zu `SVGGraphicsElement.nearestViewportElement` verwendet werden.
  Sie wurden aus der SVG2-Spezifikation entfernt und werden wahrscheinlich in einer künftigen Firefox-Version vollständig entfernt.
  ([Firefox Bug 1133174](https://bugzil.la/1133174)).

### HTTP

- Der Wert `'unsafe-hashes'` für {{HTTPHeader("Content-Security-Policy")}}-Quellenrichtlinien wird jetzt unterstützt.
  Weitere Informationen finden Sie unter [CSP unsafe-hashes](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_hashes) ([Firefox Bug 1343950](https://bugzil.la/1343950)).

### APIs

#### DOM

- Die `scrollend`-Ereignisse werden jetzt unterstützt, die anzeigen, dass der Benutzer das Scrollen in [`Element`](/de/docs/Web/API/Element)- und [`Document`](/de/docs/Web/API/Document)-Objekten abgeschlossen hat.
  Weitere Informationen finden Sie unter [Element: `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event) und [Document: `scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event) ([Firefox Bug 1797013](https://bugzil.la/1797013), [Firefox Bug 1803435](https://bugzil.la/1803435)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verbindungsdetails für WebDriver BiDi werden jetzt in `WebDriverBiDiServer.json` anstelle von `WebDriverBiDiActivePort` geschrieben, das sowohl den Port (`ws_port`) als auch den Host (`ws_host`) enthält. Diese Datei befindet sich im Firefox-Profilordner ([Firefox Bug 1792875](https://bugzil.la/1792875)).
- Unterstützung für das Abonnieren / Abbestellen einzelner `contexts` bei Verwendung von `session.subscribe` und `session.unsubscribe` hinzugefügt ([Firefox Bug 1723102](https://bugzil.la/1723102)).
- Unterstützung für das Serialisieren von `Node`-Objekten hinzugefügt ([Firefox Bug 1770731](https://bugzil.la/1770731)).
- Der `columnNumber` für `exceptions` und `stackTraces` wurde auf eine 0-basierte Nummerierung korrigiert ([Firefox Bug 1796073](https://bugzil.la/1796073)).

#### Marionette

- Es wurde ein Fehler behoben, bei dem `WebDriver:NewWindow` und `WebDriver:SwitchToWindow` das neue Fenster nicht richtig fokussierten ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- Es wurde ein Fehler behoben, bei dem `WebDriver:FindElement` (und ähnliche Befehle) fehlschlugen, wenn das Firefox-Fenster durch andere Anwendungen unter Windows verdeckt war ([Firefox Bug 1802473](https://bugzil.la/1802473)).

## Änderungen für Add-on-Entwickler

- Manifest V3 wird jetzt unterstützt, mit der Möglichkeit, Manifest V3-Erweiterungen auf AMO zu signieren und zu veröffentlichen. Weitere Informationen finden Sie im Blogpost [Manifest v3 signing available November 21 on Firefox Nightly](https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/). Die folgenden Vorschaufunktionen sind jetzt voll verfügbar:
  - Die {{WebExtAPIRef("scripting")}} API, obwohl sie bereits ab Firefox 102 für Manifest V2-Erweiterungen verfügbar ist.
  - Die {{WebExtAPIRef("action")}} API und der [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssel sowie der [`_execute_action` Spezial-Shortcut](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) im `commands`-Manifest-Schlüssel.
  - Der [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssel.

- Die standardmäßige [Content-Security-Policy (CSP)](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für Manifest V3-Erweiterungen wurde aktualisiert, um [`upgrade-insecure-requests`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3) einzuschließen. Dies bedeutet, dass standardmäßig alle Netzwerk-Anfragen auf `https:` umgestellt werden. Erweiterungen, die `http:` verwenden müssen, können dies durch Überschreibung der standardmäßigen CSP mittels des [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Manifest.json-Schlüssels tun ([Firefox Bug 1797086](https://bugzil.la/1797086)).
- Die Eigenschaft `secretKeyLength` wurde zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaft gibt die Länge in Bits des geheimen Schlüssels in den Sicherheitsmerkmalen einer Webanfrage an ([Firefox Bug 1778473](https://bugzil.la/1778473)).
- Mit der Einführung des [Erweiterungsknopfes](https://support.mozilla.org/en-US/kb/extensions-button) hat sich der Standardwert von `default_area` in den [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)- und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Manifest-Schlüsseln von `"navbar"` auf `"menupanel"` geändert ([Firefox Bug 1799947](https://bugzil.la/1799947)).
- Unterstützung für {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} und die `deletable`-Eigenschaft in {{WebExtAPIRef("omnibox.SuggestResult")}}, die es Erweiterungen ermöglicht, auf das Löschen eines Suchergebnisses in der Adressleiste durch den Benutzer zu reagieren ([Firefox Bug 1799947](https://bugzil.la/1799947)).
- Unterstützung für die Parameter <code>top</code> und <code>left</code> zur Positionsbestimmung von `panel` oder `popup`-Fenstern bei der Verwendung von {{WebExtAPIRef("windows.create()")}} hinzugefügt ([Firefox Bug 1271047](https://bugzil.la/1271047)).

## Ältere Versionen

{{Firefox_for_developers}}
