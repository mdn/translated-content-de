---
title: Firefox 61 für Entwickler
slug: Mozilla/Firefox/Releases/61
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 61, die Entwickler betreffen werden. Firefox 61 wurde am 26. Juni 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die neue Benutzeroberfläche der Konsole ist nun standardmäßig für die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) und das [Browser-Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) aktiviert ([Firefox-Bug 1362023](https://bugzil.la/1362023)/[Firefox-Bug 1347127](https://bugzil.la/1347127)). Die alte Benutzeroberfläche wurde entfernt.
- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) löst das Klicken auf _In neuem Tab öffnen_ im Kontextmenü einer `POST`-Anfrage diese korrekt mit den erwarteten `POST`-Parametern aus ([Firefox-Bug 1407515](https://bugzil.la/1407515)).
- [CSS-Variablen werden nun automatisch vervollständigt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion) mit Farbfeldern, sodass Sie genau sehen können, welcher Farbwert in jeder Variable gespeichert ist ([Firefox-Bug 1451211](https://bugzil.la/1451211)).
  - Außerdem zeigt das Schweben über einem CSS-Variablennamen ein Tooltip an, das den gespeicherten Farbwert dieser Variablen anzeigt ([Firefox-Bug 1431949](https://bugzil.la/1431949)).

- Die Symbolleiste der Hauptwerkzeugleiste wurde neu gestaltet. Hervorzuheben ist eine bessere Reaktionsfähigkeit für schmale und breite Viewports mit einem neuen Überlauf-Dropdown, einem bereinigten Dreipunkt-Menü und sortierbaren Registerkarten, um die am häufigsten verwendeten Panels nach oben zu verschieben ([Firefox-Bug 1226272](https://bugzil.la/1226272)).
- Die Symbolleiste des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält jetzt ein Dropdown-Menü, das einen einfacheren Zugriff auf die Befehle „Alles als HAR kopieren“ und „Alles als HAR speichern“ sowie eine „Importieren...“-Option bietet ([Firefox-Bug 1403530](https://bugzil.la/1403530)).
- Die Detailleiste des Netzwerk-Monitors umfasst jetzt einen [Cache-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), der Informationen über zuvor zwischengespeicherte Ressourcen anzeigt ([Firefox-Bug 859051](https://bugzil.la/859051)).
- Die Hauptsymbolleiste des Netzwerk-Monitors wurde neu gestaltet, um auf kleineren Viewports reaktionsfähiger und optisch mit der Konsole abgestimmt zu sein.
- Die Hauptsymbolleiste des Netzwerk-Monitors enthält nun ein [Drosselungs-Dropdown](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling), das zuvor nur im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) verfügbar war. Es ermöglicht Ihnen, Ihre Netzwerkgeschwindigkeit zu drosseln, um verschiedene Netzwerkgeschwindigkeitsbedingungen zu simulieren ([Firefox-Bug 1349559](https://bugzil.la/1349559)).
- Die Browser-Konsole blendet standardmäßig CSS-Fehler aus, um die Lesbarkeit und Leistung zu verbessern ([Firefox-Bug 1452143](https://bugzil.la/1452143)).
- Die Browser-Konsole enthält jetzt einen Befehl zum Neustarten des Browsers. Verwenden Sie `Ctrl` + `Alt` + `R` (Windows, Linux) oder `Cmd` + `Alt` + `R` (Mac), um den Browser mit denselben Tabs wie vor dem Neustart neu zu starten.
- Die Web-Extension-APIs von DevTools [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox-Bug 1311171](https://bugzil.la/1311171)) und [`devtools.network.getHAR`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox-Bug 1311177](https://bugzil.la/1311177)) wurden implementiert (Aktivierung von Erweiterungen wie [har-export-trigger](/de/docs/Web)).
- Das Firebug-Thema wurde entfernt, da der Übergang der Firebug-Nutzer zu DevTools abgeschlossen ist ([Firefox-Bug 1378108](https://bugzil.la/1378108)).

### HTML

_Keine Änderungen._

### CSS

- Die CSS-Analyse wurde parallelisiert ([Firefox-Bug 1346988](https://bugzil.la/1346988)).
- Unterstützung für {{cssxref("font-variation-settings")}} und {{cssxref("font-optical-sizing")}} ist standardmäßig aktiviert ([Firefox-Bug 1447163](https://bugzil.la/1447163)).
- Die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` wurden in {{cssxref("gap")}}, {{cssxref("row-gap")}} und {{cssxref("column-gap")}} umbenannt, da sie nicht mehr grid-spezifisch sind ([Firefox-Bug 1398482](https://bugzil.la/1398482)). Siehe [Box alignment; Gaps zwischen Boxen](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#gaps_between_boxes) für zusätzliche Details. Die alten Namen wurden aus Gründen der Webkompatibilität als Aliase beibehalten.
- Der Wert `content` für {{cssxref("flex-basis")}} wird jetzt unterstützt ([Firefox-Bug 1105111](https://bugzil.la/1105111)).
- Prozentwerte von {{cssxref("column-gap")}} werden nun im [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout) unterstützt ([Firefox-Bug 1398537](https://bugzil.la/1398537)).
- Die CSS-Pseudoklasse {{cssxref(":host")}} wird jetzt unterstützt; sie wählt ein benutzerdefiniertes Element aus dessen Shadow DOM aus ([Firefox-Bug 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} akzeptiert jetzt Syntax mit zwei Werten ([Firefox-Bug 1453148](https://bugzil.la/1453148)).
- Flex-Elemente, die anhand ihres Inhalts dimensioniert sind, werden jetzt unter Verwendung von `max-content` und nicht `fit-content` dimensioniert ([Firefox-Bug 1282821](https://bugzil.la/1282821)). Siehe die [Definitionen der Werte von `width`](/de/docs/Web/CSS/width#values) für weitere Details zu diesen Werten.
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} und {{cssxref("font-style")}} unterstützen jetzt zusätzliche Werte, wie sie von [CSS Fonts Level 4](https://drafts.csswg.org/css-fonts-4/) definiert sind ([Firefox-Bug 1436048](https://bugzil.la/1436048)):
  - {{cssxref("font-weight")}} akzeptiert jetzt einen Gleitkommawert zwischen 1 und 1000 inklusive.
  - {{cssxref("font-stretch")}} akzeptiert jetzt Prozentwerte.
  - {{cssxref("font-style")}} akzeptiert jetzt einen Winkel nach dem Schlüsselwort `oblique`.

- Die Gleichwertigen der drei oben genannten Eigenschaften im {{cssxref("@font-face")}}-Deskriptor unterstützen jetzt ebenfalls die neue Syntax und zusätzlich eine Zwei-Werte-Syntax, die es ermöglicht, einen Bereich von Deskriptorwerten anzugeben, die von einem Font-Face unterstützt werden ([Firefox-Bug 1436061](https://bugzil.la/1436061), [Firefox-Bug 1436048](https://bugzil.la/1436048)).

### SVG

- Die Eigenschaften `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` und `text` wurden dem {{SVGElement("a")}}-Element ([`SVGAElement`](/de/docs/Web/API/SVGAElement)) hinzugefügt, um mit dem HTML-{{HTMLElement("a")}}-Element konsistent zu sein ([Firefox-Bug 1451823](https://bugzil.la/1451823)).
- Das {{SVGElement("textPath")}}-Element ([`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)) unterstützt jetzt die SVG2-Attribute `path` und `side` ([Firefox-Bug 1446617](https://bugzil.la/1446617) und [Firefox-Bug 1446650](https://bugzil.la/1446650)).
- Das [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)-Interface wird jetzt für mehr Elemente unterstützt und nicht nur für das {{SVGElement("path")}}-Element ([Firefox-Bug 1325320](https://bugzil.la/1325320)).

### JavaScript

- Die Methoden {{jsxref("String.prototype.trimStart()")}} und {{jsxref("String.prototype.trimEnd()")}} wurden implementiert (siehe [Firefox-Bug 1434007](https://bugzil.la/1434007)). `trimLeft` und `trimRight` bleiben aus Gründen der Webkompatibilität als Aliase bestehen.

### APIs

#### Neue APIs

- Die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-API wurde implementiert. Sie gibt serverseitige Metriken wieder, die über den Server-Timing-Header gesendet werden ([Firefox-Bug 1423495](https://bugzil.la/1423495)).

#### DOM

- Die Eigenschaften [`anchors`](/de/docs/Web/API/Document/anchors), [`applets`](/de/docs/Web/API/Document/applets), [`embeds`](/de/docs/Web/API/Document/embeds), [`forms`](/de/docs/Web/API/Document/forms), [`head`](/de/docs/Web/API/Document/head), [`images`](/de/docs/Web/API/Document/images), [`links`](/de/docs/Web/API/Document/links), [`plugins`](/de/docs/Web/API/Document/plugins) und [`scripts`](/de/docs/Web/API/Document/scripts) wurden von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle auf [`Document`](/de/docs/Web/API/Document) verschoben ([Firefox-Bug 1415588](https://bugzil.la/1415588)).
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) gibt jetzt einen booleschen Wert zurück, um anzuzeigen, ob die Ersetzung erfolgreich war, anstatt `void` ([Firefox-Bug 1444909](https://bugzil.la/1444909)).
- Die [`Request.credentials`](/de/docs/Web/API/Request/credentials)-Eigenschaft der [Fetch API](/de/docs/Web/API/Fetch_API) standardmäßig auf `"same-origin"` gesetzt, gemäß der neuesten Revision der Spezifikation ([Firefox-Bug 1394399](https://bugzil.la/1394399)).
- Die [`Request.destination`](/de/docs/Web/API/Request/destination)-Eigenschaft wurde implementiert ([Firefox-Bug 1402892](https://bugzil.la/1402892)).
- Das Optionswörterbuch des [`MutationObserver`](/de/docs/Web/API/MutationObserver), `MutationObserverInit`, hat nicht länger `false` als Standardwert für alle seine Boolean-Eigenschaften. Jetzt haben nur `childList` und `subtree` noch Standardwerte (`false`). Die anderen Eigenschaften haben keine Standardwerte mehr ([Firefox-Bug 973638](https://bugzil.la/973638)).
- Die Methode der [Payment Request API](/de/docs/Web/API/Payment_Request_API) [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) unterstützt jetzt die Verwendung eines {{jsxref("Promise")}}, um die clientseitige Logik aktualisierte Zahlungsdetails bereitzustellen, bevor die Zahlungsoberfläche aktiviert wird ([Firefox-Bug 1441709](https://bugzil.la/1441709)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service-Mitarbeiter

Die Schaltfläche "Vergessen", verfügbar in den Anpassungsoptionen von Firefox, löscht jetzt Service-Mitarbeiter und ihre Caches ([Firefox-Bug 1252998](https://bugzil.la/1252998)).

#### Web-Audio, Medien und WebRTC

- Der [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktor akzeptiert jetzt einen optionalen `options`-Parameter. Damit können Sie die bevorzugte Latenz und/oder Abtastrate für den neuen Kontext konfigurieren.
- Firefox wirft jetzt die korrekten Ausnahmen, wenn die Instanziierung eines [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) fehlschlägt.

#### WebVR

- Die [WebVR API](/de/docs/Web/API/WebVR_API) ist nun standardmäßig auf macOS aktiviert ([Firefox-Bug 1244242](https://bugzil.la/1244242)).

#### Canvas und WebGL

_Keine Änderungen._

#### CSSOM

- Die Eigenschaft [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) ist jetzt vollständig implementiert und nicht mehr schreibgeschützt ([Firefox-Bug 37468](https://bugzil.la/37468)).
- Die Implementierung der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle ist jetzt näher an der Spezifikation. Sie ist noch nicht vollständig umgesetzt, z.B. sind die Stringifier-Attribute noch nicht implementiert ([Firefox-Bug 1455807](https://bugzil.la/1455807)).

### HTTP

- Die Cookie-Direktive `SameSite` wurde implementiert. Siehe [Set-Cookie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) und [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) ([Firefox-Bug 795346](https://bugzil.la/795346)).

### Netzwerk

- Firefox 61 und später unterstützen nicht mehr die Verwendung des FTP-Protokolls (d.h. URLs mit dem `"ftp://"`-Schema), um Unterressourcen innerhalb von HTML-Inhalten zu laden. FTP wird weiterhin als Top-Level-URL unterstützt, die direkt in die URL-Leiste eingegeben oder als eigenständiges Dokument geladen wird ([Firefox-Bug 1404744](https://bugzil.la/1404744)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen von der Webplattform

### Entwicklerwerkzeuge

`Cmd`/`Ctrl` + `Shift` + `O` zeigt/versteckt nicht länger das DevTools-Optionspanel – verwenden Sie stattdessen `F1` ([Firefox-Bug 1409456](https://bugzil.la/1409456)).

### HTML

_Keine Änderungen._

### CSS

`@-moz-document` wurde auf Inhaltsseiten deaktiviert ([Firefox-Bug 1422245](https://bugzil.la/1422245)).

### APIs

- Die Eigenschaft [`lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) des [`File`](/de/docs/Web/API/File)-Interfaces wurde entfernt ([Firefox-Bug 1458883](https://bugzil.la/1458883)).
- Die Methoden `Node.setUserData` und `Node.getUserData` wurden vollständig von der Plattform entfernt ([Firefox-Bug 749981](https://bugzil.la/749981)).
- Die Methode `Element.createShadowRoot()` wurde entfernt. Verwenden Sie stattdessen [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ([Firefox-Bug 1453789](https://bugzil.la/1453789)).
- Der [`MediaStream`](/de/docs/Web/API/MediaStream)-Überladung der [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)-Methode wurde entfernt ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### SVG

- Die veraltete (und nie richtig implementierte) Eigenschaft `SVGViewElement.viewTarget` wurde entfernt ([Firefox-Bug 1455763](https://bugzil.la/1455763)).
- Die folgenden veralteten Eigenschaften wurden aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt ([Firefox-Bug 1133172](https://bugzil.la/1133172)):
  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- Der nicht standardmäßige `SVGNumber()`-Konstruktor wurde entfernt ([Firefox-Bug 1455940](https://bugzil.la/1455940)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Autocomplete-Popups sind jetzt thematisch anpassbar ([Firefox-Bug 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) hat jetzt eine Filtervorlage ([Firefox-Bug 1329507](https://bugzil.la/1329507)).
- Die Standarddokumentfarben können jetzt überschrieben werden, mit [`browserSettings.overrideDocumentColors`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) ([Firefox-Bug 1417810](https://bugzil.la/1417810)).
- [tabs.query](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) wurde durch die Implementierung einiger nützlicher Such-/Filteroptionsparameter optimiert ([Firefox-Bug 1445316](https://bugzil.la/1445316)).
- Sie können jetzt [`permissions.request`](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) von einer `about:addons`-Einstellungsseite aus verwenden ([Firefox-Bug 1382953](https://bugzil.la/1382953)).
- Sie können jetzt Webseiten zwingen, Systemschriftarten anstelle der von ihnen angegebenen Schriftarten zu verwenden, indem Sie die Eigenschaft [`browserSettings.useDocumentFonts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts) verwenden ([Firefox-Bug 1400805](https://bugzil.la/1400805)).
- Sie können jetzt bewirken, dass Browser-Suchvorschläge automatisch in einem neuen Tab geöffnet werden, anstatt im aktuellen Tab, indem Sie die Eigenschaft [`browserSettings.openUrlbarResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs) verwenden ([Firefox-Bug 1432645](https://bugzil.la/1432645)).
- Sie können steuern, ob der Benutzer einen Tab mit einem Doppelklick schließen kann, indem Sie die Eigenschaft [`browserSettings.closeTabsByDoubleClick`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick) verwenden ([Firefox-Bug 1435142](https://bugzil.la/1435142)).
- Die [theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Eigenschaften `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text` und `toolbar_field_border` gelten jetzt auch für die Findbar ([Firefox-Bug 1418605](https://bugzil.la/1418605)).
- Bei [`sidebarAction.getPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle) und [`sidebarAction.setIcon()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) können Sie jetzt eine `windowId` angeben, damit die Funktionen nur für ein spezifisches Fenster festgelegt/abgerufen werden ([Firefox-Bug 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) und [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1455040](https://bugzil.la/1455040)).
  - Beim ersten Mal, wenn eine Erweiterung einen Tab ausblendet, wird der Browser dem Benutzer mitteilen, dass der Tab ausgeblendet wird, zeigt ihm, wie er auf den ausgeblendeten Tab zugreifen kann, und gibt ihm die Möglichkeit, die Erweiterung zu deaktivieren ([Firefox-Bug 1438363](https://bugzil.la/1438363)).

## Ältere Versionen

{{Firefox_for_developers}}
