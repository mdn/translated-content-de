---
title: Firefox 61 für Entwickler
slug: Mozilla/Firefox/Releases/61
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 61, die Entwickler betreffen. Firefox 61 wurde am 26. Juni 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die neu gestaltete Konsole-Oberfläche ist jetzt standardmäßig für die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) und die [Browser-Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) aktiviert ([Firefox Bug 1362023](https://bugzil.la/1362023)/[Firefox Bug 1347127](https://bugzil.la/1347127)). Die alte Oberfläche wurde entfernt.
- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wird bei einem Klick auf _In neuem Tab öffnen_ im Kontextmenü einer `POST`-Anfrage die Anfrage korrekt mit den erwarteten `POST`-Parametern erneut gesendet ([Firefox Bug 1407515](https://bugzil.la/1407515)).
- [CSS-Variablen werden nun automatisch vervollständigt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion) mit Farbfeldern, die es Ihnen ermöglichen, genau zu sehen, welcher Farbwert in jeder Variablen gespeichert ist ([Firefox Bug 1451211](https://bugzil.la/1451211)).

  - Zusätzlich erscheint ein Tooltip, der den Farbwert der CSS-Variablen zeigt, wenn Sie mit der Maus über den Variablennamen fahren ([Firefox Bug 1431949](https://bugzil.la/1431949)).

- Die Toolbar des Hauptwerkzeugkastens wurde neu gestaltet. Hervorhebungen sind bessere Reaktionsfähigkeit für schmale und breite Viewports mit einem neuen Überlauf-Dropdown, ein aufgeräumtes Menü und sortierbare Tabs, um die meistgenutzten Panels nach oben zu verschieben ([Firefox Bug 1226272](https://bugzil.la/1226272)).
- Die Toolbar des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält jetzt ein Dropdown-Menü, das einen einfacheren Zugriff auf die Befehle ‚Alles als HAR kopieren‘ und ‚Alles als HAR speichern‘ sowie eine ‚Importieren…‘-Option bietet ([Firefox Bug 1403530](https://bugzil.la/1403530)).
- Die Detailansicht des Netzwerk-Monitors enthält jetzt einen [Cache-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), der Informationen über zuvor zwischengespeicherte Ressourcen anzeigt ([Firefox Bug 859051](https://bugzil.la/859051)).
- Die Haupttoolbar des Netzwerk-Monitors wurde neu gestaltet, um auf kleineren Viewports reaktionsfähiger zu sein und sich optisch mit der Konsole auszurichten.
- Die Haupttoolbar des Netzwerk-Monitors enthält jetzt ein [Throttling-Dropdown](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling), das zuvor nur im [Responsive-Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) verfügbar war. Es ermöglicht Ihnen, Ihre Netzwerkgeschwindigkeit zu drosseln, um verschiedene Bedingungen in Bezug auf die Netzwerkgeschwindigkeit zu simulieren ([Firefox Bug 1349559](https://bugzil.la/1349559)).
- Die Browser-Konsole blendet jetzt standardmäßig CSS-Fehler aus Gründen der Lesbarkeit und der Leistung aus ([Firefox Bug 1452143](https://bugzil.la/1452143)).
- Die Browser-Konsole enthält jetzt einen Befehl zum Neustarten des Browsers. Verwenden Sie `Ctrl` + `Alt` + `R` (Windows, Linux) oder `Cmd` + `Alt` + `R` (Mac), um den Browser mit den gleichen Tabs neu zu starten, die vor dem Neustart geöffnet waren.
- Die Web-Erweiterungs-APIs von DevTools [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox Bug 1311171](https://bugzil.la/1311171)) und [`devtools.network.getHAR`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox Bug 1311177](https://bugzil.la/1311177)) wurden implementiert (Erweiterungen wie [har-export-trigger](/de/docs/Web) können dadurch aktiviert werden).
- Das Firebug-Theme wurde entfernt, da der Übergang von Firebug-Nutzern zu den DevTools abgeschlossen ist ([Firefox Bug 1378108](https://bugzil.la/1378108)).

### HTML

_Keine Änderungen._

### CSS

- Die CSS-Analyse wurde parallelisiert ([Firefox Bug 1346988](https://bugzil.la/1346988)).
- Unterstützung für {{cssxref("font-variation-settings")}} und {{cssxref("font-optical-sizing")}} wurde standardmäßig aktiviert ([Firefox Bug 1447163](https://bugzil.la/1447163)).
- Die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` wurden in {{cssxref("gap")}}, {{cssxref("row-gap")}} und {{cssxref("column-gap")}} umbenannt, da sie nicht mehr spezifisch für das Grid-Layout sind ([Firefox Bug 1398482](https://bugzil.la/1398482)). Siehe [Box-Ausrichtung; Lücken zwischen Kästen](/de/docs/Web/CSS/CSS_box_alignment#gaps_between_boxes) für weitere Einzelheiten. Die alten Namen wurden aus Gründen der Web-Kompatibilität als Aliase beibehalten.
- Der {{cssxref("flex-basis")}} `content`-Wert wird jetzt unterstützt ([Firefox Bug 1105111](https://bugzil.la/1105111)).
- Prozentwerte von {{cssxref("column-gap")}} werden jetzt im [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) unterstützt ([Firefox Bug 1398537](https://bugzil.la/1398537)).
- Die CSS-Pseudo-Klasse {{cssxref(":host")}} wird jetzt unterstützt; sie wählt ein benutzerdefiniertes Element aus seinem Shadow DOM aus ([Firefox Bug 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} akzeptiert jetzt eine Zwei-Werte-Syntax ([Firefox Bug 1453148](https://bugzil.la/1453148)).
- Flex-Elemente, die basierend auf ihrem Inhalt dimensioniert werden, werden jetzt mit `max-content`, anstelle von `fit-content` dimensioniert ([Firefox Bug 1282821](https://bugzil.la/1282821)). Siehe die [`width`-Wertdefinitionen](/de/docs/Web/CSS/width#values) für weitere Einzelheiten dieser Werte.
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} und {{cssxref("font-style")}} unterstützen jetzt zusätzliche Werte, wie sie von [CSS Fonts Level 4](https://drafts.csswg.org/css-fonts-4/) definiert wurden ([Firefox Bug 1436048](https://bugzil.la/1436048)):

  - {{cssxref("font-weight")}} akzeptiert jetzt einen Gleitkommawert zwischen 1 und 1000 einschließlich.
  - {{cssxref("font-stretch")}} akzeptiert jetzt Prozentwerte.
  - {{cssxref("font-style")}} akzeptiert jetzt einen Winkel nach dem Schlüsselwort `oblique`.

- Die {{cssxref("@font-face")}} Deskriptor-Äquivalente der drei oben genannten Eigenschaften unterstützen auch die neue oben aufgeführte Syntax und zusätzlich die Zwei-Werte-Syntax, die es erlaubt, einen Bereich von Deskriptorwerten anzugeben, die von einer Schriftart unterstützt werden ([Firefox Bug 1436061](https://bugzil.la/1436061), [Firefox Bug 1436048](https://bugzil.la/1436048)).

### SVG

- Die Eigenschaften `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` und `text` wurden dem {{SVGElement("a")}}-Element ({{domxref("SVGAElement")}}) hinzugefügt, um konsistent mit dem HTML-{{HTMLElement("a")}}-Element zu sein ([Firefox Bug 1451823](https://bugzil.la/1451823)).
- Das {{SVGElement("textPath")}}-Element ({{domxref("SVGTextPathElement")}}) unterstützt jetzt die SVG2-Attribute `path` und `side` ([Firefox Bug 1446617](https://bugzil.la/1446617) und [Firefox Bug 1446650](https://bugzil.la/1446650)).
- Die {{domxref("SVGGeometryElement")}}-Schnittstelle wird jetzt für mehr Elemente unterstützt und nicht nur für das {{SVGElement("path")}}-Element ([Firefox Bug 1325320](https://bugzil.la/1325320)).

### JavaScript

- Die Methoden {{jsxref("String.prototype.trimStart()")}} und {{jsxref("String.prototype.trimEnd()")}} wurden implementiert (siehe [Firefox Bug 1434007](https://bugzil.la/1434007)). `trimLeft` und `trimRight` bleiben aus Gründen der Web-Kompatibilität als Aliase bestehen.

### APIs

#### Neue APIs

- Die {{domxref("PerformanceServerTiming")}}-API wurde implementiert. Sie stellt serverseitige Metriken bereit, die über den {{HTTPHeader("Server-Timing")}}-Header gesendet werden ([Firefox Bug 1423495](https://bugzil.la/1423495)).

#### DOM

- Die Eigenschaften {{domxref("Document.anchors", "anchors")}}, {{domxref("Document.applets", "applets")}}, {{domxref("Document.embeds", "embeds")}}, {{domxref("Document.forms", "forms")}}, {{domxref("Document.head", "head")}}, {{domxref("Document.images", "images")}}, {{domxref("Document.links", "links")}}, {{domxref("Document.plugins", "plugins")}} und {{domxref("Document.scripts", "scripts")}} wurden von der {{domxref("HTMLDocument")}}-Schnittstelle auf {{domxref("Document")}} verschoben ([Firefox Bug 1415588](https://bugzil.la/1415588)).
- {{domxref("DOMTokenList.replace()")}} gibt jetzt einen booleschen Wert zurück, um anzuzeigen, ob der Ersatz erfolgreich durchgeführt wurde, anstelle von void ([Firefox Bug 1444909](https://bugzil.la/1444909)).
- Die [Fetch API](/de/docs/Web/API/Fetch_API)-Eigenschaft {{domxref("Request.credentials")}} hat jetzt per Standard den Wert `"same-origin"`, gemäß der neuesten Spezifikationsrevision ([Firefox Bug 1394399](https://bugzil.la/1394399)).
- Die {{domxref("Request.destination")}}-Eigenschaft wurde implementiert ([Firefox Bug 1402892](https://bugzil.la/1402892)).
- Die Optionen im `MutationObserverInit`-Dictionary des {{domxref("MutationObserver")}} verwenden nicht mehr `false` als Standardwert für alle ihre booleschen Eigenschaften. Jetzt haben nur `childList` und `subtree` Standardwerte (nach wie vor `false`). Die anderen Eigenschaften haben keine Standardwerte ([Firefox Bug 973638](https://bugzil.la/973638)).
- Die [Payment Request API](/de/docs/Web/API/Payment_Request_API)-Methode {{domxref("PaymentRequest.show()")}} unterstützt jetzt die Verwendung eines {{jsxref("Promise")}}, um es dem Client-Side-Code zu ermöglichen, aktualisierte Zahlungsdetails bereitzustellen, bevor die Zahlungsoberfläche aktiviert wird ([Firefox Bug 1441709](https://bugzil.la/1441709)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

Der „Vergessen“-Button, verfügbar in den Anpassungsoptionen von Firefox, löscht jetzt Service Workers und deren Caches ([Firefox Bug 1252998](https://bugzil.la/1252998)).

#### Web Audio, Medien und WebRTC

- Der {{domxref("AudioContext.AudioContext", "AudioContext()")}}-Konstruktor akzeptiert jetzt einen optionalen `options`-Parameter. Dadurch können Sie die bevorzugte Latenz und/oder Abtastrate für den neuen Kontext konfigurieren.
- Firefox wirft jetzt die korrekten Ausnahmen, wenn die Instanziierung eines {{domxref("AudioBuffer")}} fehlschlägt.

#### WebVR

- Die [WebVR API](/de/docs/Web/API/WebVR_API) wurde standardmäßig auf macOS aktiviert ([Firefox Bug 1244242](https://bugzil.la/1244242)).

#### Canvas und WebGL

_Keine Änderungen._

#### CSSOM

- Die {{domxref("CSSStyleRule.selectorText")}}-Eigenschaft ist jetzt vollständig implementiert und nicht mehr schreibgeschützt ([Firefox Bug 37468](https://bugzil.la/37468)).
- Die {{domxref("MediaList")}}-Schnittstellenimplementierung entspricht jetzt mehr der Spezifikation. Sie ist noch nicht vollständig umgesetzt; zum Beispiel wurden Stringifier-Attribute noch nicht implementiert ([Firefox Bug 1455807](https://bugzil.la/1455807)).

### HTTP

- Die Cookie-Direktive `SameSite` wurde implementiert. Siehe [Set-Cookie](/de/docs/Web/HTTP/Headers/Set-Cookie) und [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) ([Firefox Bug 795346](https://bugzil.la/795346)).

### Netzwerk

- Firefox 61 und später unterstützen nicht mehr die Verwendung des FTP-Protokolls (also URLs mit dem `"ftp://"`-Schema) zum Laden von Unterressourcen aus HTML-Inhalten. FTP wird weiterhin als eigenständige URL, die direkt in die Adressleiste eingegeben oder als eigenständiges Dokument geladen wird, unterstützt ([Firefox Bug 1404744](https://bugzil.la/1404744)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstige

_Keine Änderungen._

## Entfernungen aus der Webplattform

### Entwicklerwerkzeuge

`Cmd`/`Ctrl` + `Shift` + `O` zeigt/versteckt das Entwicklerwerkzeuge-Optionspanel nicht mehr – verwenden Sie stattdessen `F1` ([Firefox Bug 1409456](https://bugzil.la/1409456)).

### HTML

_Keine Änderungen._

### CSS

`@-moz-document` wurde in Inhaltsseiten deaktiviert ([Firefox Bug 1422245](https://bugzil.la/1422245)).

### APIs

- Die Eigenschaft {{domxref("File.lastModifiedDate", "lastModifiedDate")}} der {{domxref("File")}}-Schnittstelle wurde entfernt ([Firefox Bug 1458883](https://bugzil.la/1458883)).
- Die Methoden `Node.setUserData` und `Node.getUserData` wurden vollständig aus der Plattform entfernt ([Firefox Bug 749981](https://bugzil.la/749981)).
- Die Methode `Element.createShadowRoot()` wurde entfernt. Verwenden Sie stattdessen {{domxref("Element.attachShadow()")}} ([Firefox Bug 1453789](https://bugzil.la/1453789)).
- Der {{domxref("MediaStream")}}-Overload der Methode {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} wurde entfernt ([Firefox Bug 1454889](https://bugzil.la/1454889)).

### SVG

- Die veraltete (und nie richtig implementierte) {{domxref("SVGViewElement")}}`.viewTarget`-Eigenschaft wurde entfernt ([Firefox Bug 1455763](https://bugzil.la/1455763)).
- Die folgenden veralteten Eigenschaften wurden aus {{domxref("SVGSVGElement")}} entfernt ([Firefox Bug 1133172](https://bugzil.la/1133172)):

  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- Der nicht standardisierte `SVGNumber()`-Konstruktor wurde entfernt ([Firefox Bug 1455940](https://bugzil.la/1455940)).

### Sonstige

_Keine Änderungen._

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

- Autovervollständigungspopups sind jetzt thematisch anpassbar ([Firefox Bug 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) hat jetzt eine Filtervorlage ([Firefox Bug 1329507](https://bugzil.la/1329507)).
- Die Standarddokumentfarben können jetzt überschrieben werden, indem [`browserSettings.overrideDocumentColors`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) verwendet wird ([Firefox Bug 1417810](https://bugzil.la/1417810)).
- [tabs.query](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) wurde mit der Implementierung einiger nützlicher Such-/Filteroptionparameter optimiert ([Firefox Bug 1445316](https://bugzil.la/1445316)).
- Sie können jetzt [`permissions.request`](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) von einer `about:addons`-Einstellungsseite aus verwenden ([Firefox Bug 1382953](https://bugzil.la/1382953)).
- Sie können Webseiten jetzt zwingen, Systemschriftarten anstelle der von ihnen angegebenen Schriftarten zu verwenden, indem Sie die [`browserSettings.useDocumentFonts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts)-Eigenschaft verwenden ([Firefox Bug 1400805](https://bugzil.la/1400805)).
- Sie können jetzt bewirken, dass Suchautomatisierungsvorschläge im Browser automatisch in einem neuen Tab anstelle des aktuellen Tabs geöffnet werden, indem Sie die [`browserSettings.openUrlbarResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs)-Eigenschaft verwenden ([Firefox Bug 1432645](https://bugzil.la/1432645)).
- Sie können steuern, ob der Benutzer einen Tab durch Doppelklick schließen kann, indem Sie die [`browserSettings.closeTabsByDoubleClick`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick)-Eigenschaft verwenden ([Firefox Bug 1435142](https://bugzil.la/1435142)).
- Die [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Eigenschaften `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text` und `toolbar_field_border` gelten jetzt auch für die Suchleiste ([Firefox Bug 1418605](https://bugzil.la/1418605)).
- In [`sidebarAction.getPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle) und [`sidebarAction.setIcon()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) können Sie jetzt eine `windowId` angeben, sodass die Funktionalitäten nur für ein bestimmtes Fenster festgelegt/geholt werden ([Firefox Bug 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) und [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) sind jetzt standardmäßig aktiviert ([Firefox Bug 1455040](https://bugzil.la/1455040)).

  - Wenn eine Erweiterung zum ersten Mal einen Tab versteckt, zeigt der Browser dem Benutzer an, dass der Tab versteckt wird, erklärt, wie er auf den versteckten Tab zugreifen kann, und gibt ihm die Möglichkeit, die Erweiterung zu deaktivieren ([Firefox Bug 1438363](https://bugzil.la/1438363)).

## Ältere Versionen

{{Firefox_for_developers}}
