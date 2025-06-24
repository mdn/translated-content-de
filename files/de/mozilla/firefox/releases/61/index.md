---
title: Firefox 61 für Entwickler
slug: Mozilla/Firefox/Releases/61
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 61, die Entwickler betreffen werden. Firefox 61 wurde am 26. Juni 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die neue Console-UI ist standardmäßig für die [Browser Console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) und das [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) aktiviert worden ([Firefox Fehler 1362023](https://bugzil.la/1362023)/[Firefox Fehler 1347127](https://bugzil.la/1347127)). Die alte UI wurde entfernt.
- Im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) sendet ein Klick auf _In neuem Tab öffnen_ im Kontextmenü einer `POST`-Anfrage die Anfrage korrekt mit den erwarteten `POST`-Parametern erneut ab ([Firefox Fehler 1407515](https://bugzil.la/1407515)).
- [CSS-Variablen vervollständigen jetzt automatisch](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion) mit Farbfeldern, sodass Sie genau sehen können, welcher Farbwert in jeder Variable gespeichert ist ([Firefox Fehler 1451211](https://bugzil.la/1451211)).

  - Darüber hinaus zeigt das Hovering über einen CSS-Variablennamen einen Tooltip mit dem in dieser Variablen gespeicherten Farbwert an ([Firefox Fehler 1431949](https://bugzil.la/1431949)).

- Die Hauptwerkzeugleiste des Toolboxes wurde neu gestaltet. Höhepunkte sind eine bessere Reaktionsfähigkeit für schmale und breite Viewports mit einem neuen Überlauf-Dropdown, aufgeräumtes Dreipunkt-Menü und sortierbare Registerkarten, mit denen Sie Ihre meistgenutzten Panels nach oben verschieben können ([Firefox Fehler 1226272](https://bugzil.la/1226272)).
- Die Toolbar im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält jetzt ein Dropdown-Menü, das einfacher auf die Befehle 'Copy All As HAR' und 'Save All As HAR' sowie auf eine 'Importieren...'-Option zugreift ([Firefox Fehler 1403530](https://bugzil.la/1403530)).
- Das Detailfenster im Netzwerkmonitor enthält jetzt einen [Cache-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), der Informationen zu zuvor zwischengespeicherten Ressourcen anzeigt ([Firefox Fehler 859051](https://bugzil.la/859051)).
- Die Hauptwerkzeugleiste des Netzwerkmonitors wurde neu gestaltet, um auf kleineren Viewports reaktionsfähiger und visuell mit der Konsole abgestimmt zu sein.
- Die Hauptwerkzeugleiste des Netzwerkmonitors enthält jetzt ein [Throttling-Dropdown](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling), das zuvor nur im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) verfügbar war. Es ermöglicht Ihnen, Ihre Netzwerkgeschwindigkeit zu drosseln, um verschiedene Netzwerkgeschwindigkeitsbedingungen zu emulieren ([Firefox Fehler 1349559](https://bugzil.la/1349559)).
- Die Browser Console verbirgt jetzt standardmäßig CSS-Fehler aus Gründen der Lesbarkeit und Leistung ([Firefox Fehler 1452143](https://bugzil.la/1452143)).
- Die Browser Console enthält jetzt einen Befehl zum Neustart des Browsers. Verwenden Sie `Ctrl` + `Alt` + `R` (Windows, Linux) oder `Cmd` + `Alt` + `R` (Mac), um den Browser neu zu starten und die gleichen Tabs wie vor dem Neustart wieder zu öffnen.
- Die WebExtension-APIs der DevTools [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox Fehler 1311171](https://bugzil.la/1311171)) und [`devtools.network.getHAR`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox Fehler 1311177](https://bugzil.la/1311177)) wurden implementiert (damit Erweiterungen wie [har-export-trigger](/de/docs/Web) ermöglicht werden).
- Das Firebug-Theme wurde entfernt, da der Übergang von Firebug-Nutzern zu DevTools abgeschlossen ist ([Firefox Fehler 1378108](https://bugzil.la/1378108)).

### HTML

_Keine Änderungen._

### CSS

- Das Parsen von CSS wurde parallelisiert ([Firefox Fehler 1346988](https://bugzil.la/1346988)).
- Unterstützung für {{cssxref("font-variation-settings")}} und {{cssxref("font-optical-sizing")}} wurde standardmäßig aktiviert ([Firefox Fehler 1447163](https://bugzil.la/1447163)).
- Die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` wurden in {{cssxref("gap")}}, {{cssxref("row-gap")}} und {{cssxref("column-gap")}} umbenannt, da sie nicht mehr nur für Raster spezifisch sind ([Firefox Fehler 1398482](https://bugzil.la/1398482)). Weitere Informationen finden Sie unter [Box-Ausrichtung; Lücken zwischen Boxen](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#gaps_between_boxes). Die alten Namen wurden aus Gründen der Web-Kompatibilität als Aliase beibehalten.
- Der {{cssxref("flex-basis")}}-Wert `content` wird jetzt unterstützt ([Firefox Fehler 1105111](https://bugzil.la/1105111)).
- Prozentuale Werte von {{cssxref("column-gap")}} werden jetzt im [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) unterstützt ([Firefox Fehler 1398537](https://bugzil.la/1398537)).
- Die CSS-{{cssxref(":host")}}-Pseudoklasse wird jetzt unterstützt; sie selektiert ein benutzerdefiniertes Element aus seinem Shadow-DOM heraus ([Firefox Fehler 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} akzeptiert jetzt eine Syntax mit zwei Werten ([Firefox Fehler 1453148](https://bugzil.la/1453148)).
- Flex-Elemente, die nach ihrem Inhalt dimensioniert sind, werden jetzt mit `max-content` und nicht mit `fit-content` dimensioniert ([Firefox Fehler 1282821](https://bugzil.la/1282821)). Weitere Details zu diesen Werten finden Sie in den [Definitionswerten von `width`](/de/docs/Web/CSS/width#values).
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} und {{cssxref("font-style")}} unterstützen jetzt zusätzliche Werte, wie sie in [CSS Fonts Level 4](https://drafts.csswg.org/css-fonts-4/) definiert sind ([Firefox Fehler 1436048](https://bugzil.la/1436048)):

  - {{cssxref("font-weight")}} akzeptiert jetzt einen Gleitkommawert zwischen 1 und 1000 inklusive.
  - {{cssxref("font-stretch")}} akzeptiert jetzt Prozentwerte.
  - {{cssxref("font-style")}} akzeptiert jetzt einen Winkel nach dem Schlüsselwort `oblique`.

- Die {{cssxref("@font-face")}}-Descriptors aus dem vorherigen Eintrag unterstützen ebenfalls die neue Syntax und zusätzlich eine Zwei-Werte-Syntax, die uns ermöglicht, einen Bereich von Descriptorwerten anzugeben, die von einem Font-Face unterstützt werden ([Firefox Fehler 1436061](https://bugzil.la/1436061), [Firefox Fehler 1436048](https://bugzil.la/1436048)).

### SVG

- Die Eigenschaften `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` und `text` wurden dem {{SVGElement("a")}}-Element ([`SVGAElement`](/de/docs/Web/API/SVGAElement)) hinzugefügt, um mit dem HTML-{{HTMLElement("a")}}-Element konsistent zu sein ([Firefox Fehler 1451823](https://bugzil.la/1451823)).
- Das {{SVGElement("textPath")}}-Element ([`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)) unterstützt jetzt die SVG2-Attribute `path` und `side` ([Firefox Fehler 1446617](https://bugzil.la/1446617) und [Firefox Fehler 1446650](https://bugzil.la/1446650)).
- Das [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)-Interface wird jetzt für mehr Elemente unterstützt und nicht nur für das {{SVGElement("path")}}-Element ([Firefox Fehler 1325320](https://bugzil.la/1325320)).

### JavaScript

- Die {{jsxref("String.prototype.trimStart()")}}- und {{jsxref("String.prototype.trimEnd()")}}-Methoden wurden implementiert (siehe [Firefox Fehler 1434007](https://bugzil.la/1434007)). `trimLeft` und `trimRight` bleiben aus Gründen der Web-Kompatibilität als Aliase erhalten.

### APIs

#### Neue APIs

- Die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-API wurde implementiert. Sie macht serverseitige Metriken zugänglich, die über den {{HTTPHeader("Server-Timing")}}-Header gesendet werden ([Firefox Fehler 1423495](https://bugzil.la/1423495)).

#### DOM

- Die Eigenschaften [`anchors`](/de/docs/Web/API/Document/anchors), [`applets`](/de/docs/Web/API/Document/applets), [`embeds`](/de/docs/Web/API/Document/embeds), [`forms`](/de/docs/Web/API/Document/forms), [`head`](/de/docs/Web/API/Document/head), [`images`](/de/docs/Web/API/Document/images), [`links`](/de/docs/Web/API/Document/links), [`plugins`](/de/docs/Web/API/Document/plugins) und [`scripts`](/de/docs/Web/API/Document/scripts) wurden von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle auf [`Document`](/de/docs/Web/API/Document) verschoben ([Firefox Fehler 1415588](https://bugzil.la/1415588)).
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) gibt jetzt einen booleschen Wert zurück, der anzeigt, ob der Ersatz erfolgreich durchgeführt wurde, anstatt nichts zurückzugeben ([Firefox Fehler 1444909](https://bugzil.la/1444909)).
- Die [`Request.credentials`](/de/docs/Web/API/Request/credentials)-Eigenschaft der [Fetch-API](/de/docs/Web/API/Fetch_API) hat jetzt standardmäßig den Wert `"same-origin"` gemäß der letzten Überarbeitung der Spezifikation ([Firefox Fehler 1394399](https://bugzil.la/1394399)).
- Die [`Request.destination`](/de/docs/Web/API/Request/destination)-Eigenschaft wurde implementiert ([Firefox Fehler 1402892](https://bugzil.la/1402892)).
- Das [`MutationObserver`](/de/docs/Web/API/MutationObserver)-Optionsdokument, `MutationObserverInit`, hat nicht mehr `false` als Standardwert für alle seine booleschen Eigenschaften. Jetzt haben nur `childList` und `subtree` Standardwerte (immer noch `false`). Die anderen Eigenschaften haben keine Standardwerte ([Firefox Fehler 973638](https://bugzil.la/973638)).
- Die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) der [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt jetzt die Verwendung eines {{jsxref("Promise")}}, um es dem clientseitigen Code zu ermöglichen, aktualisierte Zahlungsdetails bereitzustellen, bevor die Zahlungsoberfläche aktiviert wird ([Firefox Fehler 1441709](https://bugzil.la/1441709)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

Der "Vergessen"-Button, verfügbar in den Anpassungsoptionen von Firefox, löscht jetzt Service Workers und deren Caches ([Firefox Fehler 1252998](https://bugzil.la/1252998)).

#### Web Audio, Medien und WebRTC

- Der Konstruktor [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext) akzeptiert jetzt ein optionales `options`-Parameter. Damit können Sie die bevorzugte Latenz und/oder Abtastrate für den neuen Kontext konfigurieren.
- Firefox löst jetzt die richtigen Ausnahmen aus, wenn die Instanziierung eines [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) fehlschlägt.

#### WebVR

- Die [WebVR API](/de/docs/Web/API/WebVR_API) wurde standardmäßig auf macOS aktiviert ([Firefox Fehler 1244242](https://bugzil.la/1244242)).

#### Canvas und WebGL

_Keine Änderungen._

#### CSSOM

- Die Eigenschaft [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) ist jetzt vollständig implementiert und nicht mehr nur schreibgeschützt ([Firefox Fehler 37468](https://bugzil.la/37468)).
- Die Implementierung der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle ist jetzt der Spezifikation ein wenig näher. Es ist noch nicht vollständig abgeschlossen; zum Beispiel wurden Stringifier-Attribute noch nicht implementiert ([Firefox Fehler 1455807](https://bugzil.la/1455807)).

### HTTP

- Die Cookie-Direktive `SameSite` wurde implementiert. Siehe [Set-Cookie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) und [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) ([Firefox Fehler 795346](https://bugzil.la/795346)).

### Netzwerk

- Firefox 61 und später unterstützen nicht mehr das Laden von Subressourcen innerhalb von HTML-Inhalten über das FTP-Protokoll (d.h. URLs mit dem `"ftp://"`-Schema). FTP wird immer noch als Top-Level-URL unterstützt, die direkt in die URL-Leiste eingegeben wird oder als eigenständiges Dokument geladen wird ([Firefox Fehler 1404744](https://bugzil.la/1404744)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Web-Plattform

### Entwickler-Tools

`Cmd`/`Ctrl` + `Shift` + `O` zeigt nicht mehr das Optionen-Panel der DevTools an/aus — verwenden Sie stattdessen `F1` ([Firefox Fehler 1409456](https://bugzil.la/1409456)).

### HTML

_Keine Änderungen._

### CSS

`@-moz-document` wurde auf Inhaltsseiten deaktiviert ([Firefox Fehler 1422245](https://bugzil.la/1422245)).

### APIs

- Die Eigenschaft [`lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) des [`File`](/de/docs/Web/API/File)-Interfaces wurde entfernt ([Firefox Fehler 1458883](https://bugzil.la/1458883)).
- Die Methoden `Node.setUserData` und `Node.getUserData` wurden vollständig von der Plattform entfernt ([Firefox Fehler 749981](https://bugzil.la/749981)).
- Die Methode `Element.createShadowRoot()` wurde entfernt. Verwenden Sie stattdessen [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ([Firefox Fehler 1453789](https://bugzil.la/1453789)).
- Der Overload [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) der [`MediaStream`](/de/docs/Web/API/MediaStream)-Methode wurde entfernt ([Firefox Fehler 1454889](https://bugzil.la/1454889)).

### SVG

- Die veraltete (und nie richtig implementierte) Eigenschaft `SVGViewElement.viewTarget` wurde entfernt ([Firefox Fehler 1455763](https://bugzil.la/1455763)).
- Die folgenden veralteten Eigenschaften wurden aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt ([Firefox Fehler 1133172](https://bugzil.la/1133172)):

  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- Der nicht-standardmäßige Konstruktor `SVGNumber()` wurde entfernt ([Firefox Fehler 1455940](https://bugzil.la/1455940)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Autovervollständigungs-Popups sind jetzt thematisierbar ([Firefox Fehler 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) hat jetzt eine Filtervorlage ([Firefox Fehler 1329507](https://bugzil.la/1329507)).
- Die Standarddokumentfarben können jetzt überschrieben werden, indem [`browserSettings.overrideDocumentColors`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) verwendet wird ([Firefox Fehler 1417810](https://bugzil.la/1417810)).
- [tabs.query](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) wurde mit der Implementierung einiger nützlicher Such-/Filteroptionen optimiert ([Firefox Fehler 1445316](https://bugzil.la/1445316)).
- Sie können jetzt [`permissions.request`](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) von einer `about:addons`-Präferenzseite aus verwenden ([Firefox Fehler 1382953](https://bugzil.la/1382953)).
- Sie können jetzt Webseiten dazu zwingen, Systemschriftarten anstelle der von ihnen angegebenen Schriftarten zu verwenden, indem Sie die Eigenschaft [`browserSettings.useDocumentFonts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts) verwenden ([Firefox Fehler 1400805](https://bugzil.la/1400805)).
- Sie können jetzt bewirken, dass vom Browser bereitgestellte Suchvorschläge automatisch in einem neuen Tab anstelle des aktuellen Tabs geöffnet werden, indem Sie die Eigenschaft [`browserSettings.openUrlbarResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs) verwenden ([Firefox Fehler 1432645](https://bugzil.la/1432645)).
- Sie können steuern, ob der Benutzer einen Tab durch Doppelklick schließen kann, indem Sie die Eigenschaft [`browserSettings.closeTabsByDoubleClick`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick) verwenden ([Firefox Fehler 1435142](https://bugzil.la/1435142)).
- Die [Manifest-Theme-Eigenschaften](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text` und `toolbar_field_border` gelten jetzt auch für die Suchleiste ([Firefox Fehler 1418605](https://bugzil.la/1418605)).
- In [`sidebarAction.getPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle) und [`sidebarAction.setIcon()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) können Sie jetzt eine `windowId` angeben, sodass die Funktionen nur für ein bestimmtes Fenster gesetzt/abgefragt werden ([Firefox Fehler 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) und [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) sind jetzt standardmäßig aktiviert ([Firefox Fehler 1455040](https://bugzil.la/1455040)).
  - Das erste Mal, wenn eine Erweiterung einen Tab versteckt, wird der Browser den Benutzer darüber informieren, dass der Tab versteckt wird, ihm zeigen, wie er auf den versteckten Tab zugreifen kann, und ihm die Möglichkeit geben, die Erweiterung stattdessen zu deaktivieren ([Firefox Fehler 1438363](https://bugzil.la/1438363)).

## Ältere Versionen

{{Firefox_for_developers}}
