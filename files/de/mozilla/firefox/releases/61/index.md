---
title: Firefox 61 Versionshinweise für Entwickler
short-title: Firefox 61
slug: Mozilla/Firefox/Releases/61
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 61, die Entwickler betreffen werden. Firefox 61 wurde am 26. Juni 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die neue Gestaltung der Console-UI wurde standardmäßig für die [Browser Console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) und das [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) aktiviert ([Firefox bug 1362023](https://bugzil.la/1362023)/[Firefox bug 1347127](https://bugzil.la/1347127)). Die alte UI wurde entfernt.
- Im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wird beim Klicken auf _Open in New Tab_ im Kontextmenü einer `POST`-Anfrage die Anfrage mit den erwarteten `POST`-Parametern korrekt erneut gesendet ([Firefox bug 1407515](https://bugzil.la/1407515)).
- [CSS-Variablen vervollständigen jetzt automatisch](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion) mit Farbfeldern, sodass Sie genau sehen können, welcher Farbwert in jeder Variablen gespeichert ist ([Firefox bug 1451211](https://bugzil.la/1451211)).
  - Zusätzlich erscheint beim Überfahren eines CSS-Variablennamens ein Tooltip, der anzeigt, welcher Farbwert in dieser Variablen gespeichert ist ([Firefox bug 1431949](https://bugzil.la/1431949)).

- Die Werkzeugleiste des Haupttools wurde neu gestaltet. Hervorzuheben sind bessere Reaktionsfähigkeit für schmale und breite Ansichtsfenster mit einem neuen Dropdown-Menü für Überlauf, aufgeräumtes Drei-Punkte-Menü und sortierbare Registerkarten, die es Ihnen ermöglichen, Ihre am häufigsten verwendeten Panels nach oben zu verschieben ([Firefox bug 1226272](https://bugzil.la/1226272)).
- Die Werkzeugleiste des [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält jetzt ein Dropdown-Menü, das einen einfacheren Zugriff auf die Befehle 'Copy All As HAR' und 'Save All As HAR' sowie eine Option 'Import…' bietet ([Firefox bug 1403530](https://bugzil.la/1403530)).
- Das Detailfenster des Network Monitor enthält jetzt einen [Cache-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), der Informationen über zuvor zwischengespeicherte Ressourcen anzeigt ([Firefox bug 859051](https://bugzil.la/859051)).
- Die Hauptwerkzeugleiste des Network Monitor wurde neu gestaltet, um auf kleineren Ansichtsfenstern besser anpassungsfähig zu sein und wurde visuell an die Console angeglichen.
- Die Hauptwerkzeugleiste des Network Monitor enthält jetzt ein [Throttling-Dropdown](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling), das zuvor nur im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) verfügbar war. Es ermöglicht Ihnen, Ihre Netzwerkgeschwindigkeit zu drosseln, um verschiedene Netzwerkgeschwindigkeitsbedingungen zu emulieren ([Firefox bug 1349559](https://bugzil.la/1349559)).
- Die Browser Console versteckt jetzt standardmäßig CSS-Fehler aus Gründen der Lesbarkeit und Leistung ([Firefox bug 1452143](https://bugzil.la/1452143)).
- Die Browser Console enthält jetzt einen Befehl zum Neustarten des Browsers. Verwenden Sie `Ctrl` + `Alt` + `R` (Windows, Linux) oder `Cmd` + `Alt` + `R` (Mac), um den Browser mit den gleichen Tabs wie vor dem Neustart zu starten.
- Die WebExtension-APIs von DevTools [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox bug 1311171](https://bugzil.la/1311171)) und [`devtools.network.getHAR`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox bug 1311177](https://bugzil.la/1311177)) wurden implementiert (Ermöglicht Erweiterungen wie [har-export-trigger](/de/docs/Web)).
- Das Firebug-Theme wurde entfernt, da der Übergang der Firebug-Nutzer zu DevTools abgeschlossen ist ([Firefox bug 1378108](https://bugzil.la/1378108)).

### HTML

_Keine Änderungen._

### CSS

- Das CSS-Parsing wurde parallelisiert ([Firefox bug 1346988](https://bugzil.la/1346988)).
- Unterstützung für {{cssxref("font-variation-settings")}} und {{cssxref("font-optical-sizing")}} wurde standardmäßig aktiviert ([Firefox bug 1447163](https://bugzil.la/1447163)).
- Die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` wurden in {{cssxref("gap")}}, {{cssxref("row-gap")}} und {{cssxref("column-gap")}} umbenannt, da sie nicht mehr nur für Grid spezifisch sind ([Firefox bug 1398482](https://bugzil.la/1398482)). Weitere Details finden Sie unter [Box-Ausrichtung; Lücken zwischen Boxen](/de/docs/Web/CSS/Guides/Box_alignment/Overview#gaps_between_boxes). Die alten Namen wurden aus Gründen der Web-Kompatibilität als Aliase beibehalten.
- Der `content`-Wert von {{cssxref("flex-basis")}} wird jetzt unterstützt ([Firefox bug 1105111](https://bugzil.la/1105111)).
- Prozentwerte von {{cssxref("column-gap")}} werden jetzt im [CSS-Multi-Column-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) unterstützt ([Firefox bug 1398537](https://bugzil.la/1398537)).
- Die CSS-Pseudo-Klasse {{cssxref(":host")}} wird jetzt unterstützt; diese wählt ein benutzerdefiniertes Element aus seinem Shadow-DOM heraus aus ([Firefox bug 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} akzeptiert jetzt eine Zwei-Werte-Syntax ([Firefox bug 1453148](https://bugzil.la/1453148)).
- Flex-Elemente, die entsprechend ihrem Inhalt dimensioniert sind, werden jetzt mit `max-content` und nicht mit `fit-content` dimensioniert ([Firefox bug 1282821](https://bugzil.la/1282821)). Weitere Details zu diesen Werten finden Sie in den [`width`-Wertedefinitionen](/de/docs/Web/CSS/Reference/Properties/width#values).
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} und {{cssxref("font-style")}} unterstützen jetzt zusätzliche Werte, wie sie von [CSS Fonts Level 4](https://drafts.csswg.org/css-fonts-4/) definiert sind ([Firefox bug 1436048](https://bugzil.la/1436048)):
  - {{cssxref("font-weight")}} akzeptiert jetzt einen Gleitkommawert zwischen 1 und 1000 (einschließlich).
  - {{cssxref("font-stretch")}} akzeptiert jetzt Prozentwerte.
  - {{cssxref("font-style")}} akzeptiert jetzt einen Winkel nach dem `oblique` Schlüsselwort.

- Die {{cssxref("@font-face")}} Deskriptoräquivalente der drei oben genannten Eigenschaften unterstützen jetzt ebenfalls die oben aufgeführte neue Syntax und zusätzlich wird jetzt eine Zwei-Werte-Syntax unterstützt, die es erlaubt, einen Bereich von Deskriptorwerten anzugeben, die von einem font-face unterstützt werden ([Firefox bug 1436061](https://bugzil.la/1436061), [Firefox bug 1436048](https://bugzil.la/1436048)).

### SVG

- Die Eigenschaften `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` und `text` wurden dem {{SVGElement("a")}} Element ([`SVGAElement`](/de/docs/Web/API/SVGAElement)) hinzugefügt, um mit dem HTML {{HTMLElement("a")}} Element konsistent zu sein ([Firefox bug 1451823](https://bugzil.la/1451823)).
- Das {{SVGElement("textPath")}} Element ([`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)) unterstützt jetzt die SVG2-Attribute `path` und `side` ([Firefox bug 1446617](https://bugzil.la/1446617) und [Firefox bug 1446650](https://bugzil.la/1446650)).
- Die [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) Schnittstelle wird jetzt für mehr Elemente unterstützt und nicht nur für das {{SVGElement("path")}} Element ([Firefox bug 1325320](https://bugzil.la/1325320)).

### JavaScript

- Die {{jsxref("String.prototype.trimStart()")}} und {{jsxref("String.prototype.trimEnd()")}} Methoden wurden implementiert (siehe [Firefox bug 1434007](https://bugzil.la/1434007)). `trimLeft` und `trimRight` bleiben aus Gründen der Web-Kompatibilität als Aliase bestehen.

### APIs

#### Neue APIs

- Die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) API wurde implementiert. Sie macht serverseitige Metriken verfügbar, die über den {{HTTPHeader("Server-Timing")}} Header gesendet werden ([Firefox bug 1423495](https://bugzil.la/1423495)).

#### DOM

- Die Eigenschaften [`anchors`](/de/docs/Web/API/Document/anchors), [`applets`](/de/docs/Web/API/Document/applets), [`embeds`](/de/docs/Web/API/Document/embeds), [`forms`](/de/docs/Web/API/Document/forms), [`head`](/de/docs/Web/API/Document/head), [`images`](/de/docs/Web/API/Document/images), [`links`](/de/docs/Web/API/Document/links), [`plugins`](/de/docs/Web/API/Document/plugins) und [`scripts`](/de/docs/Web/API/Document/scripts) wurden von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle in [`Document`](/de/docs/Web/API/Document) verlagert ([Firefox bug 1415588](https://bugzil.la/1415588)).
- [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) gibt jetzt einen booleschen Wert zurück, um anzuzeigen, ob der Ersatz erfolgreich durchgeführt wurde, anstelle von void ([Firefox bug 1444909](https://bugzil.la/1444909)).
- Die [`Request.credentials`](/de/docs/Web/API/Request/credentials) Eigenschaft der [Fetch API](/de/docs/Web/API/Fetch_API) hat jetzt standardmäßig den Wert `"same-origin"` gemäß der neuesten Spezifikationsrevision ([Firefox bug 1394399](https://bugzil.la/1394399)).
- Die [`Request.destination`](/de/docs/Web/API/Request/destination) Eigenschaft wurde implementiert ([Firefox bug 1402892](https://bugzil.la/1402892)).
- Das `MutationObserverInit` Options-Wörterbuch von [`MutationObserver`](/de/docs/Web/API/MutationObserver) hat nicht mehr `false` als Standardwert für alle seine Boolean-Eigenschaften. Jetzt haben nur `childList` und `subtree` Standardwerte (noch `false`). Die anderen Eigenschaften haben keine Standardwerte ([Firefox bug 973638](https://bugzil.la/973638)).
- Die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) der [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt jetzt die Verwendung eines {{jsxref("Promise")}}, um es dem Clientseitigen Code zu ermöglichen, aktualisierte Zahlungsdetails bereitzustellen, bevor die Zahlungsoberfläche aktiviert wird ([Firefox bug 1441709](https://bugzil.la/1441709)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

Der "Forget"-Button, der in den Anpassungsoptionen von Firefox verfügbar ist, löscht jetzt Service Worker und deren Caches ([Firefox bug 1252998](https://bugzil.la/1252998)).

#### Web Audio, Medien und WebRTC

- Der [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext) Konstruktor akzeptiert jetzt einen optionalen `options` Parameter. Damit können Sie die bevorzugte Latenz und/oder die Abtastrate für den neuen Kontext konfigurieren.
- Firefox wirft jetzt die richtigen Ausnahmen, wenn die Erstellung eines [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) fehlschlägt.

#### WebVR

- Die [WebVR API](/de/docs/Web/API/WebVR_API) wurde standardmäßig unter macOS aktiviert ([Firefox bug 1244242](https://bugzil.la/1244242)).

#### Canvas und WebGL

_Keine Änderungen._

#### CSSOM

- Die [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) Eigenschaft ist jetzt vollständig implementiert und nicht mehr schreibgeschützt ([Firefox bug 37468](https://bugzil.la/37468)).
- Die Implementierung der [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle ist jetzt ein wenig näher an der Spezifikation. Sie ist noch nicht ganz dort; zum Beispiel sind Stringifier-Attribute noch nicht implementiert ([Firefox bug 1455807](https://bugzil.la/1455807)).

### HTTP

- Die Cookie-Direktive `SameSite` wurde implementiert. Siehe [Set-Cookie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) und [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) ([Firefox bug 795346](https://bugzil.la/795346)).

### Netzwerke

- Firefox 61 und später unterstützen nicht mehr die Verwendung des FTP-Protokolls (d.h. URLs mit dem `"ftp://"`-Schema), um Unterressourcen innerhalb von HTML-Inhalten zu laden. FTP wird weiterhin als Top-Level-URL unterstützt, die direkt in die URL-Leiste eingegeben oder als eigenständiges Dokument geladen wird ([Firefox bug 1404744](https://bugzil.la/1404744)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen von der Web-Plattform

### Entwickler-Tools

`Cmd`/`Ctrl` + `Shift` + `O` zeigt/versteckt nicht mehr das DevTools-Optionen-Panel — verwenden Sie stattdessen `F1` ([Firefox bug 1409456](https://bugzil.la/1409456)).

### HTML

_Keine Änderungen._

### CSS

`@-moz-document` wurde auf Inhaltsseiten deaktiviert ([Firefox bug 1422245](https://bugzil.la/1422245)).

### APIs

- Die [`File`](/de/docs/Web/API/File) Schnittstelleigenschaft [`lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) wurde entfernt ([Firefox bug 1458883](https://bugzil.la/1458883)).
- Die Methoden `Node.setUserData` und `Node.getUserData` wurden vollständig von der Plattform entfernt ([Firefox bug 749981](https://bugzil.la/749981)).
- Die Methode `Element.createShadowRoot()` wurde entfernt. Verwenden Sie stattdessen [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ([Firefox bug 1453789](https://bugzil.la/1453789)).
- Die [`MediaStream`](/de/docs/Web/API/MediaStream) Überladung der [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) Methode wurde entfernt ([Firefox bug 1454889](https://bugzil.la/1454889)).

### SVG

- Die veraltete (und nie richtig implementierte) `SVGViewElement.viewTarget` Eigenschaft wurde entfernt ([Firefox bug 1455763](https://bugzil.la/1455763)).
- Die folgenden veralteten Eigenschaften wurden aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt ([Firefox bug 1133172](https://bugzil.la/1133172)):
  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- Der nicht-standardisierte `SVGNumber()`-Konstruktor wurde entfernt ([Firefox bug 1455940](https://bugzil.la/1455940)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Autovervollständigungs-Popups sind jetzt thematisch anpassbar ([Firefox bug 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) hat jetzt eine Filtervorlage ([Firefox bug 1329507](https://bugzil.la/1329507)).
- Die Standard-Dokumentfarben können jetzt überschrieben werden, indem [`browserSettings.overrideDocumentColors`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) verwendet wird ([Firefox bug 1417810](https://bugzil.la/1417810)).
- [tabs.query](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) wurde mit der Implementierung einiger nützlicher Such-/Filteroptionen optimiert ([Firefox bug 1445316](https://bugzil.la/1445316)).
- Sie können jetzt [`permissions.request`](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) von einer `about:addons`-Einstellungsseite aus verwenden ([Firefox bug 1382953](https://bugzil.la/1382953)).
- Sie können jetzt Webseiten zwingen, Systemschriften anstelle der von ihnen angegebenen Schriften zu verwenden, indem Sie die [`browserSettings.useDocumentFonts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts) Eigenschaft verwenden ([Firefox bug 1400805](https://bugzil.la/1400805)).
- Sie können jetzt steuern, ob die Browser-Suchautomaten-Vervollständigungsvorschläge automatisch in einem neuen Tab anstelle des aktuellen Tabs geöffnet werden, indem Sie die [`browserSettings.openUrlbarResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs) Eigenschaft verwenden ([Firefox bug 1432645](https://bugzil.la/1432645)).
- Sie können steuern, ob der Benutzer ein Tab durch Doppelklick schließen kann, indem Sie die [`browserSettings.closeTabsByDoubleClick`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick) Eigenschaft verwenden ([Firefox bug 1435142](https://bugzil.la/1435142)).
- Die [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Eigenschaften `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text` und `toolbar_field_border` gelten jetzt auch für die Suchleiste ([Firefox bug 1418605](https://bugzil.la/1418605)).
- In [`sidebarAction.getPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle) und [`sidebarAction.setIcon()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) können Sie jetzt eine `windowId` spezifizieren, sodass die Funktionen nur für ein bestimmtes Fenster gesetzt/gelesen werden ([Firefox bug 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) und [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) sind jetzt standardmäßig aktiviert ([Firefox bug 1455040](https://bugzil.la/1455040)).
  - Wenn eine Erweiterung zum ersten Mal ein Tab verbirgt, wird der Benutzer darauf hingewiesen, dass das Tab versteckt wird, gezeigt, wie er auf das versteckte Tab zugreifen kann, und ihm die Möglichkeit gegeben, die Erweiterung stattdessen zu deaktivieren ([Firefox bug 1438363](https://bugzil.la/1438363)).
