---
title: Firefox 61 für Entwickler
slug: Mozilla/Firefox/Releases/61
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 61, die Entwickler betreffen. Firefox 61 wurde am 26. Juni 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Das neu gestaltete Console-UI wurde standardmäßig für die [Browser Console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) & [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) aktiviert ([Firefox-Bug 1362023](https://bugzil.la/1362023)/[Firefox-Bug 1347127](https://bugzil.la/1347127)). Das alte UI wurde entfernt.
- Im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) sendet das Klicken auf _Open in New Tab_ im Kontextmenü einer `POST`-Anfrage die Anfrage korrekt mit den erwarteten `POST`-Parametern erneut ab ([Firefox-Bug 1407515](https://bugzil.la/1407515)).
- [CSS-Variablen werden jetzt mit Farbfeldern automatisch vervollständigt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion), sodass Sie genau sehen können, welcher Farbwert in jeder Variablen gespeichert ist ([Firefox-Bug 1451211](https://bugzil.la/1451211)).

  - Zusätzlich wird beim Überfahren eines CSS-Variablennamens mit der Maus ein Tooltip angezeigt, der den gespeicherten Farbwert zeigt ([Firefox-Bug 1431949](https://bugzil.la/1431949)).

- Die Toolbar des Haupt-Toolboxes wurde neu gestaltet. Highlights sind eine bessere Reaktionsfähigkeit für schmale und breite Ansichtsfenster mit einem neuen Überlauf-Dropdown, bereinigtes Drei-Punkte-Menü und sortierbare Tabs, mit denen Sie Ihre am häufigsten verwendeten Panels verschieben können ([Firefox-Bug 1226272](https://bugzil.la/1226272)).
- Die Toolbar des [Network Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält jetzt ein Dropdown-Menü, das einfachen Zugriff auf die Befehle 'Copy All As HAR' und 'Save All As HAR' bietet, sowie eine 'Importieren…' Option ([Firefox-Bug 1403530](https://bugzil.la/1403530)).
- Das Detailbereich des Network Monitors enthält jetzt einen [Cache-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), der Informationen über zuvor zwischengespeicherte Ressourcen anzeigt ([Firefox-Bug 859051](https://bugzil.la/859051)).
- Die Haupt-Toolbar des Network Monitors wurde neu gestaltet, um auf kleineren Ansichtsfenstern reaktionsschneller und visuell mit der Console abgestimmt zu sein.
- Die Haupt-Toolbar des Network Monitors enthält jetzt ein [Throttling](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling)-Dropdown, das zuvor nur im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) verfügbar war. Es ermöglicht Ihnen, Ihre Netzwerkgeschwindigkeit zu drosseln, um verschiedene Netzwerkgeschwindigkeitsbedingungen zu emulieren ([Firefox-Bug 1349559](https://bugzil.la/1349559)).
- Die Browser Console verbirgt jetzt aus Gründen der Lesbarkeit und Leistungseffizienz standardmäßig CSS-Fehler ([Firefox-Bug 1452143](https://bugzil.la/1452143)).
- Die Browser Console enthält jetzt einen Befehl, um den Browser neu zu starten. Verwenden Sie `Ctrl` + `Alt` + `R` (Windows, Linux) oder `Cmd` + `Alt` + `R` (Mac), um den Browser mit denselben geöffneten Tabs wie vor dem Neustart neu zu starten.
- Die WebExtension-APIs der DevTools [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox-Bug 1311171](https://bugzil.la/1311171)) und [`devtools.network.getHAR`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox-Bug 1311177](https://bugzil.la/1311177)) wurden implementiert (die Erweiterungen wie [har-export-trigger](/de/docs/Web) ermöglichen).
- Das Firebug-Thema wurde entfernt, da der Übergang der Firebug-Nutzer zu den DevTools abgeschlossen ist ([Firefox-Bug 1378108](https://bugzil.la/1378108)).

### HTML

_Keine Änderungen._

### CSS

- Die CSS-Analyse wurde parallelisiert ([Firefox-Bug 1346988](https://bugzil.la/1346988)).
- Unterstützung für {{cssxref("font-variation-settings")}} und {{cssxref("font-optical-sizing")}} wurde standardmäßig aktiviert ([Firefox-Bug 1447163](https://bugzil.la/1447163)).
- Die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` wurden in {{cssxref("gap")}}, {{cssxref("row-gap")}} und {{cssxref("column-gap")}} umbenannt, da sie nicht mehr rasterspezifisch sind ([Firefox-Bug 1398482](https://bugzil.la/1398482)). Siehe [Box alignment; Gaps between boxes](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#gaps_between_boxes) für zusätzliche Details. Die alten Namen wurden aus Gründen der Web-Kompatibilität als Aliase beibehalten.
- Der {{cssxref("flex-basis")}} `content`-Wert wird jetzt unterstützt ([Firefox-Bug 1105111](https://bugzil.la/1105111)).
- Prozentwerte von {{cssxref("column-gap")}} werden jetzt im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) unterstützt ([Firefox-Bug 1398537](https://bugzil.la/1398537)).
- Die CSS-{{cssxref(":host")}}-Pseudoklasse wird jetzt unterstützt; sie wählt ein benutzerdefiniertes Element aus seinem Shadow DOM aus ([Firefox-Bug 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} akzeptiert jetzt eine Syntax mit zwei Werten ([Firefox-Bug 1453148](https://bugzil.la/1453148)).
- Flex-Elemente, die entsprechend ihrem Inhalt dimensioniert sind, werden jetzt mit `max-content` statt `fit-content` dimensioniert ([Firefox-Bug 1282821](https://bugzil.la/1282821)). Weitere Details zu diesen Werten finden Sie in den [`width`-Wertdefinitionen](/de/docs/Web/CSS/width#values).
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} und {{cssxref("font-style")}} unterstützen jetzt zusätzliche Werte gemäß [CSS Fonts level 4](https://drafts.csswg.org/css-fonts-4/) ([Firefox-Bug 1436048](https://bugzil.la/1436048)):

  - {{cssxref("font-weight")}} akzeptiert jetzt einen Fließkommawert zwischen 1 und 1000 einschließlich.
  - {{cssxref("font-stretch")}} akzeptiert jetzt Prozentwerte.
  - {{cssxref("font-style")}} akzeptiert jetzt einen Winkel nach dem `oblique`-Schlüsselwort.

- Die {{cssxref("@font-face")}}-Äquivalente der drei oben genannten Eigenschaften unterstützen ebenfalls die neue Syntax und unterstützen zusätzlich eine Zwei-Werte-Syntax, die es erlaubt, einen Bereich von Wertangaben anzugeben, die von einem Schriftbild unterstützt werden ([Firefox-Bug 1436061](https://bugzil.la/1436061), [Firefox-Bug 1436048](https://bugzil.la/1436048)).

### SVG

- Die Eigenschaften `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` und `text` wurden dem {{SVGElement("a")}}-Element ([`SVGAElement`](/de/docs/Web/API/SVGAElement)) hinzugefügt, um mit dem HTML-{{HTMLElement("a")}}-Element konsistent zu sein ([Firefox-Bug 1451823](https://bugzil.la/1451823)).
- Das {{SVGElement("textPath")}}-Element ([`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)) unterstützt jetzt die SVG2-Attribute `path` und `side` ([Firefox-Bug 1446617](https://bugzil.la/1446617) und [Firefox-Bug 1446650](https://bugzil.la/1446650)).
- Das [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)-Interface wird jetzt für mehr Elemente als nur das {{SVGElement("path")}}-Element unterstützt ([Firefox-Bug 1325320](https://bugzil.la/1325320)).

### JavaScript

- Die {{jsxref("String.prototype.trimStart()")}}- und {{jsxref("String.prototype.trimEnd()")}}-Methoden wurden implementiert (siehe [Firefox-Bug 1434007](https://bugzil.la/1434007)). `trimLeft` und `trimRight` bleiben aus Gründen der Web-Kompatibilität als Aliase bestehen.

### APIs

#### Neue APIs

- Die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-API wurde implementiert. Sie gibt serverseitige Metriken über den {{HTTPHeader("Server-Timing")}}-Header aus ([Firefox-Bug 1423495](https://bugzil.la/1423495)).

#### DOM

- Die Eigenschaften [`anchors`](/de/docs/Web/API/Document/anchors), [`applets`](/de/docs/Web/API/Document/applets), [`embeds`](/de/docs/Web/API/Document/embeds), [`forms`](/de/docs/Web/API/Document/forms), [`head`](/de/docs/Web/API/Document/head), [`images`](/de/docs/Web/API/Document/images), [`links`](/de/docs/Web/API/Document/links), [`plugins`](/de/docs/Web/API/Document/plugins) und [`scripts`](/de/docs/Web/API/Document/scripts) wurden von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle auf [`Document`](/de/docs/Web/API/Document) verschoben ([Firefox-Bug 1415588](https://bugzil.la/1415588)).
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) gibt jetzt einen Booleschen Wert zurück, um anzuzeigen, ob der Ersatz erfolgreich war, anstatt void ([Firefox-Bug 1444909](https://bugzil.la/1444909)).
- Die [`Request.credentials`](/de/docs/Web/API/Request/credentials)-Eigenschaft der [Fetch API](/de/docs/Web/API/Fetch_API) hat jetzt `"same-origin"` als Standardwert gemäß der neuesten Spezifikationsversion ([Firefox-Bug 1394399](https://bugzil.la/1394399)).
- Die [`Request.destination`](/de/docs/Web/API/Request/destination)-Eigenschaft wurde implementiert ([Firefox-Bug 1402892](https://bugzil.la/1402892)).
- Das Optionsdokument `MutationObserverInit` der [`MutationObserver`](/de/docs/Web/API/MutationObserver)-Schnittstelle hat nicht mehr `false` als Standardwert für alle seine Booleschen Eigenschaften. Jetzt haben nur `childList` und `subtree` Standardwerte (weiterhin `false`). Die anderen Eigenschaften haben keine Standardwerte ([Firefox-Bug 973638](https://bugzil.la/973638)).
- Die `Payment Request API`-Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) unterstützt jetzt das Verwenden eines {{jsxref("Promise")}}, um der Client-seitigen Code vor der Aktivierung der Zahlungsoberfläche aktualisierte Zahlungsdetails bereitzustellen ([Firefox-Bug 1441709](https://bugzil.la/1441709)).

#### DOM-Events

_Keine Änderungen._

#### Service-Worker

Die Schaltfläche "Vergessen", die in der Anpassungsoptionen von Firefox verfügbar ist, löscht jetzt Service-Worker und deren Caches ([Firefox-Bug 1252998](https://bugzil.la/1252998)).

#### Web Audio, Medien und WebRTC

- Der [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktor akzeptiert jetzt ein optionales `options`-Parameter. Dies ermöglicht Ihnen, die bevorzugte Latenz und/oder Abtastrate für den neuen Kontext zu konfigurieren.
- Firefox wirft jetzt die richtigen Ausnahmen, wenn die Instanziierung eines [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) fehlschlägt.

#### WebVR

- Die [WebVR API](/de/docs/Web/API/WebVR_API) wurde standardmäßig unter macOS aktiviert ([Firefox-Bug 1244242](https://bugzil.la/1244242)).

#### Canvas und WebGL

_Keine Änderungen._

#### CSSOM

- Die [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText)-Eigenschaft ist jetzt vollständig implementiert und nicht mehr schreibgeschützt ([Firefox-Bug 37468](https://bugzil.la/37468)).
- Die Implementierung der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle ist jetzt etwas näher an der Spezifikation. Sie ist noch nicht vollständig dort; zum Beispiel wurden Stringifier-Attribute noch nicht implementiert ([Firefox-Bug 1455807](https://bugzil.la/1455807)).

### HTTP

- Die Cookie-Richtlinie `SameSite` wurde implementiert. Siehe [Set-Cookie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) und [HTTP cookies](/de/docs/Web/HTTP/Guides/Cookies) ([Firefox-Bug 795346](https://bugzil.la/795346)).

### Netzwerke

- Firefox 61 und später unterstützen nicht mehr die Verwendung des FTP-Protokolls (also URLs mit dem `"ftp://"`-Schema), um Ressourcen innerhalb von HTML-Inhalten zu laden. FTP wird weiterhin als Top-Level-URL unterstützt, die direkt in die URL-Leiste eingegeben oder als eigenständiges Dokument geladen wird ([Firefox-Bug 1404744](https://bugzil.la/1404744)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Web-Plattform

### Entwicklerwerkzeuge

`Cmd`/`Ctrl` + `Shift` + `O` zeigt/versteckt das DevTools-Optionen-Panel nicht mehr — verwenden Sie stattdessen `F1` ([Firefox-Bug 1409456](https://bugzil.la/1409456)).

### HTML

_Keine Änderungen._

### CSS

`@-moz-document` wurde auf Inhaltsseiten deaktiviert ([Firefox-Bug 1422245](https://bugzil.la/1422245)).

### APIs

- Die Eigenschaft [`lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) des [`File`](/de/docs/Web/API/File)-Interfaces wurde entfernt ([Firefox-Bug 1458883](https://bugzil.la/1458883)).
- Die Methoden `Node.setUserData` und `Node.getUserData` wurden vollständig aus der Plattform entfernt ([Firefox-Bug 749981](https://bugzil.la/749981)).
- Die Methode `Element.createShadowRoot()` wurde entfernt. Verwenden Sie stattdessen [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ([Firefox-Bug 1453789](https://bugzil.la/1453789)).
- Das `MediaStream`-Overload der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde entfernt ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### SVG

- Die veraltete (und nie richtig implementierte) Eigenschaft `SVGViewElement.viewTarget` wurde entfernt ([Firefox-Bug 1455763](https://bugzil.la/1455763)).
- Die folgenden veralteten Eigenschaften wurden von [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt ([Firefox-Bug 1133172](https://bugzil.la/1133172)):

  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- Der nicht standardisierte `SVGNumber()`-Konstruktor wurde entfernt ([Firefox-Bug 1455940](https://bugzil.la/1455940)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Autocomplete-Popups sind jetzt thematisierbar ([Firefox-Bug 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) hat jetzt eine Filtervorlage ([Firefox-Bug 1329507](https://bugzil.la/1329507)).
- Die Standardfarben von Dokumenten können jetzt überschrieben werden, unter Verwendung von [`browserSettings.overrideDocumentColors`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) ([Firefox-Bug 1417810](https://bugzil.la/1417810)).
- [tabs.query](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) wurde optimiert mit der Implementierung einiger nützlicher Such-/Filter-Optionsparameter ([Firefox-Bug 1445316](https://bugzil.la/1445316)).
- Sie können jetzt [`permissions.request`](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) von einer `about:addons`-Präferenzseite aus verwenden ([Firefox-Bug 1382953](https://bugzil.la/1382953)).
- Sie können Webseiten jetzt dazu zwingen, Systemschriftarten anstelle der angegebenen Schriftarten zu verwenden, indem Sie die Eigenschaft [`browserSettings.useDocumentFonts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts) verwenden ([Firefox-Bug 1400805](https://bugzil.la/1400805)).
- Sie können jetzt bewirken, dass automatisierte Vervollständigungsvorschläge für die Browsersuche automatisch in einem neuen Tab statt im aktuellen Tab geöffnet werden, indem Sie die Eigenschaft [`browserSettings.openUrlbarResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs) verwenden ([Firefox-Bug 1432645](https://bugzil.la/1432645)).
- Sie können steuern, ob der Benutzer einen Tab mit einem Doppelklick schließen kann, mit der Eigenschaft [`browserSettings.closeTabsByDoubleClick`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick) ([Firefox-Bug 1435142](https://bugzil.la/1435142)).
- Die [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Eigenschaften `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text` und `toolbar_field_border` gelten jetzt auch für die Suchleiste ([Firefox-Bug 1418605](https://bugzil.la/1418605)).
- In [`sidebarAction.getPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle) und [`sidebarAction.setIcon()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) können Sie jetzt eine `windowId` angeben, sodass die Funktionen nur für ein spezifisches Fenster festgelegt/erhalten werden ([Firefox-Bug 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) und [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1455040](https://bugzil.la/1455040)).

  - Das erste Mal, wenn eine Erweiterung einen Tab versteckt, zeigt der Browser dem Benutzer an, dass der Tab versteckt wird, zeigt Ihnen, wie sie auf den versteckten Tab zugreifen können, und gibt Ihnen die Option, die Erweiterung stattdessen zu deaktivieren ([Firefox-Bug 1438363](https://bugzil.la/1438363)).

## Ältere Versionen

{{Firefox_for_developers}}
