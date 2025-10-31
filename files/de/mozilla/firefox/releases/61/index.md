---
title: Firefox 61 Versionshinweise für Entwickler
short-title: Firefox 61
slug: Mozilla/Firefox/Releases/61
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 61, die Entwickler betreffen. Firefox 61 wurde am 26. Juni 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die neue Benutzeroberfläche der Konsole ist nun standardmäßig im [Browser Console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) & [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) aktiviert ([Firefox Fehler 1362023](https://bugzil.la/1362023)/[Firefox Fehler 1347127](https://bugzil.la/1347127)). Die alte Benutzeroberfläche wurde entfernt.
- Im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) sendet das Klicken auf _Open in New Tab_ im Kontextmenü einer `POST`-Anfrage die Anfrage korrekt mit den erwarteten `POST`-Parametern erneut ([Firefox Fehler 1407515](https://bugzil.la/1407515)).
- [CSS-Variablen autovervollständigen nun](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion) mit Farbfeldern, sodass Sie genau sehen können, welcher Farbwert in jeder Variablen gespeichert ist ([Firefox Fehler 1451211](https://bugzil.la/1451211)).
  - Außerdem zeigt das Überfahren mit der Maus über einen CSS-Variablennamen ein Tooltip an, das den in dieser Variablen gespeicherten Farbwert anzeigt ([Firefox Fehler 1431949](https://bugzil.la/1431949)).

- Die Toolbar des Haupt-Toolbox wurde neu gestaltet. Highlights sind eine bessere Reaktionsfähigkeit für schmale und weite Ansichten mit einem neuen Überlauf-Dropdown, ein aufgeräumtes "Kebab"-Menü und sortierbare Registerkarten, mit denen Sie Ihre am häufigsten verwendeten Panels nach oben verschieben können ([Firefox Fehler 1226272](https://bugzil.la/1226272)).
- Die Toolbar des [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) umfasst nun ein Dropdown-Menü, das einen einfacheren Zugriff auf die Befehle 'Copy All As HAR' und 'Save All As HAR' sowie eine 'Import…'-Option bietet ([Firefox Fehler 1403530](https://bugzil.la/1403530)).
- Das Detailfenster des Network Monitor enthält jetzt einen [Cache-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), der Informationen über zuvor zwischengespeicherte Ressourcen anzeigt ([Firefox Fehler 859051](https://bugzil.la/859051)).
- Die Hauptleiste des Network Monitor wurde neu gestaltet, um auf kleineren Ansichten reaktionsfähiger zu sein und visuellen Kontrast mit der Konsole zu bieten.
- Die Hauptleiste des Network Monitor enthält jetzt ein [Throttling-Dropdown](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling), das zuvor nur im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) verfügbar war. Es ermöglicht Ihnen, Ihre Netzwerkgeschwindigkeit zu drosseln, um verschiedene Netzwerkgeschwindigkeitsbedingungen zu emulieren ([Firefox Fehler 1349559](https://bugzil.la/1349559)).
- Die Browser-Konsole blendet jetzt standardmäßig CSS-Fehler aus, um die Lesbarkeit und Leistung zu verbessern ([Firefox Fehler 1452143](https://bugzil.la/1452143)).
- Die Browser-Konsole enthält jetzt einen Befehl zum Neustart des Browsers. Verwenden Sie `Strg` + `Alt` + `R` (Windows, Linux) oder `Cmd` + `Alt` + `R` (Mac), um den Browser mit denselben geöffneten Tabs wie vor dem Neustart neu zu starten.
- Die WebExtension-APIs von DevTools [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox Fehler 1311171](https://bugzil.la/1311171)) und [`devtools.network.getHAR`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox Fehler 1311177](https://bugzil.la/1311177)) wurden implementiert (Ermöglichen von Erweiterungen wie [har-export-trigger](/de/docs/Web)).
- Das Firebug-Theme wurde entfernt, da der Übergang von Firebug-Benutzern zu DevTools abgeschlossen ist ([Firefox Fehler 1378108](https://bugzil.la/1378108)).

### HTML

_Keine Änderungen._

### CSS

- Das CSS-Parsing wurde parallelisiert ([Firefox Fehler 1346988](https://bugzil.la/1346988)).
- Unterstützung für {{cssxref("font-variation-settings")}} und {{cssxref("font-optical-sizing")}} wurde standardmäßig aktiviert ([Firefox Fehler 1447163](https://bugzil.la/1447163)).
- Die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` wurden in {{cssxref("gap")}}, {{cssxref("row-gap")}}, und {{cssxref("column-gap")}} umbenannt, da sie nicht mehr speziell für Grid sind ([Firefox Fehler 1398482](https://bugzil.la/1398482)). Siehe [Box alignment; Gaps zwischen Boxes](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#gaps_between_boxes) für weitere Details. Die alten Namen werden aus Gründen der Web-Kompatibilität als Aliase beibehalten.
- Der {{cssxref("flex-basis")}} `content` Wert wird jetzt unterstützt ([Firefox Fehler 1105111](https://bugzil.la/1105111)).
- Prozentwerte von {{cssxref("column-gap")}} werden jetzt im [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout) unterstützt ([Firefox Fehler 1398537](https://bugzil.la/1398537)).
- Die CSS {{cssxref(":host")}} Pseudo-Klasse wird jetzt unterstützt; diese wählt ein benutzerdefiniertes Element aus seinem Shadow DOM heraus aus ([Firefox Fehler 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} akzeptiert nun eine Zwei-Wert-Syntax ([Firefox Fehler 1453148](https://bugzil.la/1453148)).
- Flex-Elemente, die entsprechend ihrem Inhalt dimensioniert werden, werden jetzt mit `max-content` und nicht mit `fit-content` dimensioniert ([Firefox Fehler 1282821](https://bugzil.la/1282821)). Sehen Sie die [Breitenwertdefinitionen](/de/docs/Web/CSS/Reference/Properties/width#values) für mehr Details zu diesen Werten.
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} und {{cssxref("font-style")}} unterstützen jetzt zusätzliche Werte wie in [CSS Fonts Level 4](https://drafts.csswg.org/css-fonts-4/) definiert ([Firefox Fehler 1436048](https://bugzil.la/1436048)):
  - {{cssxref("font-weight")}} akzeptiert jetzt einen Gleitkommawert zwischen 1 und 1000 inklusive.
  - {{cssxref("font-stretch")}} akzeptiert jetzt Prozentwerte.
  - {{cssxref("font-style")}} akzeptiert jetzt einen Winkel nach dem Schlüsselwort `oblique`.

- Die {{cssxref("@font-face")}}-Deskriptoräquivalente der drei oben erwähnten Eigenschaften unterstützen ebenfalls die obige neue Syntax und unterstützen zusätzlich die Zwei-Wert-Syntax, die es ermöglicht, einen Wertebereich von Deskriptoren zu spezifizieren, der von einem font-face unterstützt wird ([Firefox Fehler 1436061](https://bugzil.la/1436061), [Firefox Fehler 1436048](https://bugzil.la/1436048)).

### SVG

- Die `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` und `text` Eigenschaften wurden dem {{SVGElement("a")}} Element ([`SVGAElement`](/de/docs/Web/API/SVGAElement)) hinzugefügt, um mit dem HTML {{HTMLElement("a")}} Element konsistent zu sein ([Firefox Fehler 1451823](https://bugzil.la/1451823)).
- Das {{SVGElement("textPath")}} Element ([`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)) unterstützt jetzt die SVG2 `path` und `side` Attribute ([Firefox Fehler 1446617](https://bugzil.la/1446617) und [Firefox Fehler 1446650](https://bugzil.la/1446650)).
- Die [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) Schnittstelle wird jetzt für weitere Elemente unterstützt und nicht nur für das {{SVGElement("path")}} Element ([Firefox Fehler 1325320](https://bugzil.la/1325320)).

### JavaScript

- Die {{jsxref("String.prototype.trimStart()")}} und {{jsxref("String.prototype.trimEnd()")}} Methoden wurden implementiert (siehe [Firefox Fehler 1434007](https://bugzil.la/1434007)). `trimLeft` und `trimRight` bleiben aus Gründen der Web-Kompatibilität als Aliase bestehen.

### APIs

#### Neue APIs

- Die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) API wurde implementiert. Sie gibt serverseitige Metriken über den {{HTTPHeader("Server-Timing")}} Header wieder ([Firefox Fehler 1423495](https://bugzil.la/1423495)).

#### DOM

- Die Eigenschaften [`anchors`](/de/docs/Web/API/Document/anchors), [`applets`](/de/docs/Web/API/Document/applets), [`embeds`](/de/docs/Web/API/Document/embeds), [`forms`](/de/docs/Web/API/Document/forms), [`head`](/de/docs/Web/API/Document/head), [`images`](/de/docs/Web/API/Document/images), [`links`](/de/docs/Web/API/Document/links), [`plugins`](/de/docs/Web/API/Document/plugins) und [`scripts`](/de/docs/Web/API/Document/scripts) wurden von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle auf [`Document`](/de/docs/Web/API/Document) verschoben ([Firefox Fehler 1415588](https://bugzil.la/1415588)).
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) gibt jetzt einen booleschen Wert zurück, der angibt, ob der Ersatz erfolgreich war, anstatt `void` ([Firefox Fehler 1444909](https://bugzil.la/1444909)).
- Die [`Request.credentials`](/de/docs/Web/API/Request/credentials) Eigenschaft der [Fetch API](/de/docs/Web/API/Fetch_API) hat jetzt standardmäßig den Wert `"same-origin"` gemäß der neuesten Spezifikationsüberarbeitung ([Firefox Fehler 1394399](https://bugzil.la/1394399)).
- Die [`Request.destination`](/de/docs/Web/API/Request/destination) Eigenschaft wurde implementiert ([Firefox Fehler 1402892](https://bugzil.la/1402892)).
- Das [`MutationObserver`](/de/docs/Web/API/MutationObserver) Option-Wörterbuch, `MutationObserverInit`, hat nicht mehr `false` als Standardwert für alle seine booleschen Eigenschaften. Jetzt haben nur noch `childList` und `subtree` Standardwerte (immer noch `false`). Die anderen Eigenschaften haben keine Standardwerte mehr ([Firefox Fehler 973638](https://bugzil.la/973638)).
- Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) unterstützt jetzt die Verwendung eines {{jsxref("Promise")}}, um es der clientseitigen Programmierung zu ermöglichen, vor der Aktivierung der Zahlungsoberfläche aktualisierte Zahlungsdetails bereitzustellen ([Firefox Fehler 1441709](https://bugzil.la/1441709)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

Die Schaltfläche "Vergessen", die in den Anpassungsoptionen von Firefox verfügbar ist, löscht jetzt Service Workers und deren Caches ([Firefox Fehler 1252998](https://bugzil.la/1252998)).

#### Web Audio, Medien und WebRTC

- Der [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext) Konstruktor akzeptiert jetzt einen optionalen `options` Parameter. Dies ermöglicht es Ihnen, die bevorzugte Latenz und/oder die Abtastrate für den neuen Kontext zu konfigurieren.
- Firefox wirft nun die korrekten Ausnahmen, wenn die Instanziierung eines [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) fehlschlägt.

#### WebVR

- Die [WebVR API](/de/docs/Web/API/WebVR_API) wurde standardmäßig auf macOS aktiviert ([Firefox Fehler 1244242](https://bugzil.la/1244242)).

#### Canvas und WebGL

_Keine Änderungen._

#### CSSOM

- Die [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) Eigenschaft ist jetzt vollständig implementiert und nicht mehr schreibgeschützt ([Firefox Fehler 37468](https://bugzil.la/37468)).
- Die [`MediaList`](/de/docs/Web/API/MediaList) Schnittstellenimplementierung ist jetzt ein wenig näher an der Spezifikation. Sie ist noch nicht vollständig umgesetzt, zum Beispiel wurden stringifizierte Attribute noch nicht implementiert ([Firefox Fehler 1455807](https://bugzil.la/1455807)).

### HTTP

- Die Cookie-Direktive `SameSite` wurde implementiert. Siehe [Set-Cookie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) und [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) ([Firefox Fehler 795346](https://bugzil.la/795346)).

### Netzwerk

- Firefox 61 und spätere Versionen unterstützen nicht mehr die Verwendung des FTP-Protokolls (also URLs mit dem `"ftp://"`-Schema), um Ressourcen innerhalb von HTML-Inhalten zu laden. FTP wird weiterhin als Top-Level-URL unterstützt, die direkt in die Adressleiste eingegeben oder als eigenständiges Dokument geladen wird ([Firefox Fehler 1404744](https://bugzil.la/1404744)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernt aus der Web-Plattform

### Entwickler-Tools

`Cmd`/`Ctrl` + `Shift` + `O` zeigt/versteckt nicht mehr das DevTools-Optionen-Panel — verwenden Sie stattdessen `F1` ([Firefox Fehler 1409456](https://bugzil.la/1409456)).

### HTML

_Keine Änderungen._

### CSS

`@-moz-document` wurde auf Inhaltsseiten deaktiviert ([Firefox Fehler 1422245](https://bugzil.la/1422245)).

### APIs

- Die [`File`](/de/docs/Web/API/File) Schnittstelleneigenschaft [`lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) wurde entfernt ([Firefox Fehler 1458883](https://bugzil.la/1458883)).
- Die Methoden `Node.setUserData` und `Node.getUserData` wurden vollständig von der Plattform entfernt ([Firefox Fehler 749981](https://bugzil.la/749981)).
- Die Methode `Element.createShadowRoot()` wurde entfernt. Verwenden Sie stattdessen [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ([Firefox Fehler 1453789](https://bugzil.la/1453789)).
- Der [`MediaStream`](/de/docs/Web/API/MediaStream) Überladung der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde entfernt ([Firefox Fehler 1454889](https://bugzil.la/1454889)).

### SVG

- Die veraltete (und nie korrekt implementierte) Eigentum `SVGViewElement.viewTarget` wurde entfernt ([Firefox Fehler 1455763](https://bugzil.la/1455763)).
- Die folgenden veralteten Eigenschaften wurden von [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt ([Firefox Fehler 1133172](https://bugzil.la/1133172)):
  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- Der nicht standardisierte `SVGNumber()` Konstruktor wurde entfernt ([Firefox Fehler 1455940](https://bugzil.la/1455940)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Autovervollständigungspopups sind jetzt thematisierbar ([Firefox Fehler 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) hat jetzt eine Filtervorlage ([Firefox Fehler 1329507](https://bugzil.la/1329507)).
- Die Standarddokumentfarben können nun überschrieben werden, indem [`browserSettings.overrideDocumentColors`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) verwendet wird ([Firefox Fehler 1417810](https://bugzil.la/1417810)).
- [tabs.query](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) wurde mit der Implementierung einiger nützlicher Such-/Filteroptionsparameter optimiert ([Firefox Fehler 1445316](https://bugzil.la/1445316)).
- Sie können jetzt [`permissions.request`](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) von einer `about:addons`-Einstellungsseite aus verwenden ([Firefox Fehler 1382953](https://bugzil.la/1382953)).
- Sie können jetzt Webseiten zwingen, Systemschriftarten anstelle der von ihnen angegebenen Schriftarten zu verwenden, indem Sie die [`browserSettings.useDocumentFonts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts) Eigenschaft verwenden ([Firefox Fehler 1400805](https://bugzil.la/1400805)).
- Sie können jetzt erreichen, dass Suchvorschläge über die Browser-Suchautovervollständigung automatisch in einem neuen Tab und nicht im aktuellen Tab geöffnet werden, indem Sie die [`browserSettings.openUrlbarResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs) Eigenschaft verwenden ([Firefox Fehler 1432645](https://bugzil.la/1432645)).
- Sie können kontrollieren, ob der Benutzer ein Tab durch Doppelklick schließen kann, indem Sie die [`browserSettings.closeTabsByDoubleClick`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick) Eigenschaft verwenden ([Firefox Fehler 1435142](https://bugzil.la/1435142)).
- Die `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text` und `toolbar_field_border` Eigenschaften des [Theme-Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) gelten jetzt auch für die Suchleiste ([Firefox Fehler 1418605](https://bugzil.la/1418605)).
- In [`sidebarAction.getPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle), und [`sidebarAction.setIcon()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) können Sie jetzt eine `windowId` angeben, sodass die Merkmale nur für ein bestimmtes Fenster gesetzt/abgerufen werden ([Firefox Fehler 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) und [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) sind jetzt standardmäßig aktiviert ([Firefox Fehler 1455040](https://bugzil.la/1455040)).
  - Das erste Mal, wenn eine Erweiterung ein Tab ausblendet, informiert der Browser den Benutzer darüber, dass das Tab versteckt wird, zeigt ihm, wie er auf das versteckte Tab zugreifen kann, und gibt ihm die Möglichkeit, die Erweiterung stattdessen zu deaktivieren ([Firefox Fehler 1438363](https://bugzil.la/1438363)).
