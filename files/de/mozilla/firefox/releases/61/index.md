---
title: Firefox 61 für Entwickler
slug: Mozilla/Firefox/Releases/61
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 61, die Entwickler betreffen werden. Firefox 61 wurde am 26. Juni 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die neue Benutzeroberfläche der Konsole ist jetzt standardmäßig für die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) und das [Browser-Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) aktiviert ([Firefox Bug 1362023](https://bugzil.la/1362023)/[Firefox Bug 1347127](https://bugzil.la/1347127)). Das alte UI wurde entfernt.
- Im [Netzwerküberwachungs-Tool](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wird beim Klick auf _In neuem Tab öffnen_ im Kontextmenü einer `POST`-Anfrage die Anfrage korrekt mit den erwarteten `POST`-Parametern erneut gesendet ([Firefox Bug 1407515](https://bugzil.la/1407515)).
- [CSS-Variablen werden jetzt automatisch vervollständigt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion) mit Farbfeldern, die zeigen, welcher Farbwert in jeder Variablen gespeichert ist ([Firefox Bug 1451211](https://bugzil.la/1451211)).

  - Zusätzlich wird beim Überfahren eines CSS-Variablennamens mit der Maus ein Tooltip angezeigt, der den in der Variablen gespeicherten Farbwert zeigt ([Firefox Bug 1431949](https://bugzil.la/1431949)).

- Die Werkzeugleiste des Haupttoolbox wurde neu gestaltet. Highlights sind bessere Reaktionsfähigkeit für schmale und breite Ansichten mit einem neuen Überlaufmenü, aufgeräumtes Drei-Punkte-Menü und sortierbare Registerkarten, um Ihre am häufigsten verwendeten Panels nach oben zu ziehen ([Firefox Bug 1226272](https://bugzil.la/1226272)).
- Die Werkzeugleiste des Netzwerküberwachers enthält jetzt ein Dropdown-Menü, das einfacher Zugriff auf die Befehle „Alle als HAR kopieren“ und „Alle als HAR speichern“ sowie eine „Importieren…“-Option bietet ([Firefox Bug 1403530](https://bugzil.la/1403530)).
- Die Detailansicht des Netzwerküberwachers enthält jetzt einen [Cache-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), der Informationen über bereits zwischengespeicherte Ressourcen anzeigt ([Firefox Bug 859051](https://bugzil.la/859051)).
- Die Hauptwerkzeugleiste des Netzwerküberwachers wurde neu gestaltet, um auf kleineren Ansichten reaktionsfähiger zu sein und optisch zur Konsole zu passen.
- Die Hauptwerkzeugleiste des Netzwerküberwachers enthält jetzt ein [Throttling](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling)-Dropdown, das zuvor nur im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) verfügbar war. Es ermöglicht Ihnen, Ihre Netzwerkgeschwindigkeit zu drosseln, um unterschiedliche Netzwerkgeschwindigkeitsbedingungen zu emulieren ([Firefox Bug 1349559](https://bugzil.la/1349559)).
- Die Browser-Konsole blendet standardmäßig CSS-Fehler aus, um die Lesbarkeit und Leistung zu verbessern ([Firefox Bug 1452143](https://bugzil.la/1452143)).
- Die Browser-Konsole enthält jetzt einen Befehl, um den Browser neu zu starten. Verwenden Sie `Ctrl` + `Alt` + `R` (Windows, Linux) oder `Cmd` + `Alt` + `R` (Mac), um den Browser mit den vor dem Neustart geöffneten Tabs neu zu starten.
- Die Web-Erweiterungs-APIs von DevTools [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox Bug 1311171](https://bugzil.la/1311171)) und [`devtools.network.getHAR`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox Bug 1311177](https://bugzil.la/1311177)) wurden implementiert (ermöglicht Erweiterungen wie [har-export-trigger](/de/docs/Web)).
- Das Firebug-Design wurde entfernt, da die Umstellung der Firebug-Benutzer auf DevTools abgeschlossen ist ([Firefox Bug 1378108](https://bugzil.la/1378108)).

### HTML

_Keine Änderungen._

### CSS

- Die CSS-Analyse wurde parallelisiert ([Firefox Bug 1346988](https://bugzil.la/1346988)).
- Unterstützung für {{cssxref("font-variation-settings")}} und {{cssxref("font-optical-sizing")}} wurde standardmäßig aktiviert ([Firefox Bug 1447163](https://bugzil.la/1447163)).
- Die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` wurden in {{cssxref("gap")}}, {{cssxref("row-gap")}} und {{cssxref("column-gap")}} umbenannt, da sie nicht mehr spezifisch für Raster sind ([Firefox Bug 1398482](https://bugzil.la/1398482)). Siehe [Box-Ausrichtung; Abstände zwischen Boxen](/de/docs/Web/CSS/CSS_box_alignment#gaps_between_boxes) für zusätzliche Details. Die alten Namen wurden aus Gründen der Web-Kompatibilität als Aliase beibehalten.
- Der {{cssxref("flex-basis")}} `content`-Wert wird jetzt unterstützt ([Firefox Bug 1105111](https://bugzil.la/1105111)).
- Prozentwerte von {{cssxref("column-gap")}} werden jetzt im [CSS-Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) unterstützt ([Firefox Bug 1398537](https://bugzil.la/1398537)).
- Die CSS-{{cssxref(":host")}}-Pseudoklasse wird jetzt unterstützt; diese wählt ein benutzerdefiniertes Element aus seinem Shadow-DOM ([Firefox Bug 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} akzeptiert jetzt die Zwei-Wert-Syntax ([Firefox Bug 1453148](https://bugzil.la/1453148)).
- Flex-Elemente, die nach ihrem Inhalt dimensioniert sind, werden jetzt mit `max-content` und nicht mehr mit `fit-content` dimensioniert ([Firefox Bug 1282821](https://bugzil.la/1282821)). Siehe die [`width`-Wertedefinitionen](/de/docs/Web/CSS/width#values) für weitere Details zu diesen Werten.
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} und {{cssxref("font-style")}} unterstützen jetzt zusätzliche Werte gemäß [CSS Fonts Level 4](https://drafts.csswg.org/css-fonts-4/) ([Firefox Bug 1436048](https://bugzil.la/1436048)):

  - {{cssxref("font-weight")}} akzeptiert jetzt einen Gleitkommawert zwischen 1 und 1000 inklusive.
  - {{cssxref("font-stretch")}} akzeptiert jetzt Prozentwerte.
  - {{cssxref("font-style")}} akzeptiert jetzt einen Winkel nach dem `oblique`-Schlüsselwort.

- Die {{cssxref("@font-face")}}-Deskriptorequivalente der drei in der obigen Eintragung genannten Eigenschaften unterstützen auch die oben genannten neuen Syntaxen und unterstützen zusätzlich jetzt eine Zwei-Wert-Syntax, mit der wir einen Bereich von Deskriptorwerten angeben können, die von einer Schriftart unterstützt werden ([Firefox Bug 1436061](https://bugzil.la/1436061), [Firefox Bug 1436048](https://bugzil.la/1436048)).

### SVG

- Die Eigenschaften `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` und `text` wurden zum {{SVGElement("a")}}-Element ([`SVGAElement`](/de/docs/Web/API/SVGAElement)) hinzugefügt, um mit dem HTML {{HTMLElement("a")}}-Element konsistent zu sein ([Firefox Bug 1451823](https://bugzil.la/1451823)).
- Das {{SVGElement("textPath")}}-Element ([`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)) unterstützt jetzt die SVG2-Attribute `path` und `side` ([Firefox Bug 1446617](https://bugzil.la/1446617) und [Firefox Bug 1446650](https://bugzil.la/1446650)).
- Die [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)-Schnittstelle wird jetzt für weitere Elemente und nicht nur für das {{SVGElement("path")}}-Element unterstützt ([Firefox Bug 1325320](https://bugzil.la/1325320)).

### JavaScript

- Die Methoden {{jsxref("String.prototype.trimStart()")}} und {{jsxref("String.prototype.trimEnd()")}} wurden implementiert (siehe [Firefox Bug 1434007](https://bugzil.la/1434007)). `trimLeft` und `trimRight` bleiben aus Gründen der Web-Kompatibilität als Aliase erhalten.

### APIs

#### Neue APIs

- Die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-API wurde implementiert. Sie gibt serverseitige Metriken über den {{HTTPHeader("Server-Timing")}}-Header aus ([Firefox Bug 1423495](https://bugzil.la/1423495)).

#### DOM

- Die Eigenschaften [`anchors`](/de/docs/Web/API/Document/anchors), [`applets`](/de/docs/Web/API/Document/applets), [`embeds`](/de/docs/Web/API/Document/embeds), [`forms`](/de/docs/Web/API/Document/forms), [`head`](/de/docs/Web/API/Document/head), [`images`](/de/docs/Web/API/Document/images), [`links`](/de/docs/Web/API/Document/links), [`plugins`](/de/docs/Web/API/Document/plugins) und [`scripts`](/de/docs/Web/API/Document/scripts) wurden von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle zur [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschoben ([Firefox Bug 1415588](https://bugzil.la/1415588)).
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) gibt jetzt einen booleschen Wert zurück, um anzugeben, ob die Ersetzung erfolgreich erfolgt ist, anstatt void ([Firefox Bug 1444909](https://bugzil.la/1444909)).
- Die Eigenschaft [`Request.credentials`](/de/docs/Web/API/Request/credentials) der [Fetch API](/de/docs/Web/API/Fetch_API) hat jetzt standardmäßig den Wert `"same-origin"` gemäß der neuesten Überarbeitung der Spezifikation ([Firefox Bug 1394399](https://bugzil.la/1394399)).
- Die Eigenschaft [`Request.destination`](/de/docs/Web/API/Request/destination) wurde implementiert ([Firefox Bug 1402892](https://bugzil.la/1402892)).
- Das Wörterbuch der [`MutationObserver`](/de/docs/Web/API/MutationObserver)-Optionen, `MutationObserverInit`, hat nicht länger `false` als Standardwert für alle seine Booleschen Eigenschaften. Jetzt haben nur `childList` und `subtree` Standardwerte (immer noch `false`). Die anderen Eigenschaften haben keine Standardwerte ([Firefox Bug 973638](https://bugzil.la/973638)).
- Die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) der [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt jetzt die Verwendung eines {{jsxref("Promise")}}, um es dem Client-seitigen Code zu ermöglichen, aktualisierte Zahlungsdetails bereitzustellen, bevor die Zahlungsoberfläche aktiviert wird ([Firefox Bug 1441709](https://bugzil.la/1441709)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

Die Schaltfläche „Vergessen“, verfügbar in den Anpassungsoptionen von Firefox, löscht jetzt Service Worker und deren Caches ([Firefox Bug 1252998](https://bugzil.la/1252998)).

#### Web Audio, Medien und WebRTC

- Der [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktor akzeptiert jetzt einen optionalen `options`-Parameter. Damit können Sie die bevorzugte Latenz und/oder Abtastrate für den neuen Kontext konfigurieren.
- Firefox wirft jetzt die korrekten Ausnahmen, wenn die Instanziierung eines [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) fehlschlägt.

#### WebVR

- Die [WebVR API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig auf macOS aktiviert ([Firefox Bug 1244242](https://bugzil.la/1244242)).

#### Canvas und WebGL

_Keine Änderungen._

#### CSSOM

- Die Eigenschaft [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) ist jetzt vollständig implementiert und nicht mehr schreibgeschützt ([Firefox Bug 37468](https://bugzil.la/37468)).
- Die Implementierung der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle ist jetzt etwas näher an der Spezifikation. Sie ist noch nicht vollständig umgesetzt; zum Beispiel wurden die String-Attribute noch nicht implementiert ([Firefox Bug 1455807](https://bugzil.la/1455807)).

### HTTP

- Die Cookie-Direktive `SameSite` wurde implementiert. Siehe [Set-Cookie](/de/docs/Web/HTTP/Headers/Set-Cookie) und [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) ([Firefox Bug 795346](https://bugzil.la/795346)).

### Netzwerk

- Firefox 61 und spätere Versionen unterstützen das Laden von Subressourcen mit dem FTP-Protokoll (also URLs mit dem Schema `"ftp://"`) innerhalb von HTML-Inhalten nicht mehr. FTP wird weiterhin als Top-Level-URL unterstützt, die direkt in die Adressleiste eingegeben oder als eigenständiges Dokument geladen wird ([Firefox Bug 1404744](https://bugzil.la/1404744)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### Entwicklerwerkzeuge

`Cmd`/`Ctrl` + `Shift` + `O` zeigt/blendet nicht mehr das DevTools-Optionenpanel ein/aus – stattdessen `F1` verwenden ([Firefox Bug 1409456](https://bugzil.la/1409456)).

### HTML

_Keine Änderungen._

### CSS

`@-moz-document` wurde in Inhaltsseiten deaktiviert ([Firefox Bug 1422245](https://bugzil.la/1422245)).

### APIs

- Die Eigenschaft [`lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) des [`File`](/de/docs/Web/API/File)-Interfaces wurde entfernt ([Firefox Bug 1458883](https://bugzil.la/1458883)).
- Die Methoden `Node.setUserData` und `Node.getUserData` wurden vollständig aus der Plattform entfernt ([Firefox Bug 749981](https://bugzil.la/749981)).
- Die Methode `Element.createShadowRoot()` wurde entfernt. Verwenden Sie stattdessen [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ([Firefox Bug 1453789](https://bugzil.la/1453789)).
- Der [`MediaStream`](/de/docs/Web/API/MediaStream)-Überladung der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde entfernt ([Firefox Bug 1454889](https://bugzil.la/1454889)).

### SVG

- Die veraltete (und nie richtig implementierte) [`SVGViewElement`](/de/docs/Web/API/SVGViewElement)`.viewTarget`-Eigenschaft wurde entfernt ([Firefox Bug 1455763](https://bugzil.la/1455763)).
- Die folgenden veralteten Eigenschaften wurden aus dem [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt ([Firefox Bug 1133172](https://bugzil.la/1133172)):

  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- Der nicht standardisierte `SVGNumber()`-Konstruktor wurde entfernt ([Firefox Bug 1455940](https://bugzil.la/1455940)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Autovervollständigungs-Popups sind jetzt themenfähig ([Firefox Bug 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) hat jetzt eine Vorlagenfilterung ([Firefox Bug 1329507](https://bugzil.la/1329507)).
- Die Standarddokumentenfarben können jetzt überschrieben werden, indem [`browserSettings.overrideDocumentColors`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) verwendet wird ([Firefox Bug 1417810](https://bugzil.la/1417810)).
- [tabs.query](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) wurde mit der Implementierung einiger nützlicher Such-/Filteroptionsparameter optimiert ([Firefox Bug 1445316](https://bugzil.la/1445316)).
- Sie können jetzt [`permissions.request`](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) von einer `about:addons`-Einstellungsseite aus verwenden ([Firefox Bug 1382953](https://bugzil.la/1382953)).
- Sie können jetzt Webseiten dazu zwingen, Systemschriftarten anstelle der von ihnen angegebenen Schriftarten zu verwenden, indem die [`browserSettings.useDocumentFonts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts)-Eigenschaft verwendet wird ([Firefox Bug 1400805](https://bugzil.la/1400805)).
- Sie können jetzt veranlassen, dass Browsersuche-Autovervollständigungsvorschläge automatisch in einem neuen Tab statt im aktuellen Tab geöffnet werden, indem die [`browserSettings.openUrlbarResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs)-Eigenschaft verwendet wird ([Firefox Bug 1432645](https://bugzil.la/1432645)).
- Sie können steuern, ob der Benutzer ein Tab per Doppelklick schließen kann, indem die [`browserSettings.closeTabsByDoubleClick`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick)-Eigenschaft verwendet wird ([Firefox Bug 1435142](https://bugzil.la/1435142)).
- Die `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text` und `toolbar_field_border` [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Eigenschaften gelten jetzt auch für die Suchleiste ([Firefox Bug 1418605](https://bugzil.la/1418605)).
- In [`sidebarAction.getPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle) und [`sidebarAction.setIcon()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) können Sie jetzt eine `windowId` angeben, sodass die Features nur für ein bestimmtes Fenster gesetzt/geholt werden ([Firefox Bug 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) und [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) sind jetzt standardmäßig aktiviert ([Firefox Bug 1455040](https://bugzil.la/1455040)).

  - Beim ersten Mal, wenn eine Erweiterung einen Tab ausblendet, wird der Browser dem Benutzer mitteilen, dass der Tab ausgeblendet wird, ihm zeigen, wie er auf den ausgeblendeten Tab zugreifen kann, und ihm die Option geben, die Erweiterung zu deaktivieren ([Firefox Bug 1438363](https://bugzil.la/1438363)).

## Ältere Versionen

{{Firefox_for_developers}}
