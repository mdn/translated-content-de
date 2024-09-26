---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und ein insgesamt besseres Erlebnis für Webbenutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 behandeln.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht es, mehrere Hintergründe anzugeben, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienfunktionen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Medienfunktionen wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die Eigenschaft `background-size` aus dem [CSS 3 Backgrounds and Borders Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftartunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das herunterladbare Schriftart-Dateiformat WOFF.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es Inhalten zu spezifizieren, ob ein Element das Ziel von Mauszeiger-Ereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units)-Längeneinheit aus [CSS3 Values and Units](https://www.w3.org/TR/css3-values/#lengths) wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabellen-{{Cssxref("display")}}-Typen verwenden, funktionieren jetzt viel besser.
- {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} wurden hinzugefügt, um es einfacher zu machen, Layouts basierend darauf anzupassen, ob die Benutzeroberfläche in einer Links-nach-Rechts- oder Rechts-nach-Links-Sprache angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudoklasse wurde hinzugefügt, die `checkbox` [`input`](/de/docs/Web/HTML/Element/input)-Elemente auswählt, deren `indeterminate`-Attribut auf `true` gesetzt ist.
- Fenster-Plug-ins werden nicht mehr in CSS-Transformationen angezeigt, da sie nicht korrekt vom Compositor transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dazu gehört auch die Unterstützung für die Auswahl mehrerer Dateien mit dem neuen `multiple`-Attribut des HTML-Elements `input type="file"`.
- HTML5-Video unterstützt Poster-Frames
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Element/video)-Element unterstützt, das Inhalte erlaubt, einen Poster-Frame anzuzeigen, bis das Video zu spielen beginnt.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate`-Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Element/input)-Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate-Eigenschaft, die einen dritten, "unbestimmten" Zustand ermöglicht.
- Glättung von Canvas-Bildern kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior)-Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Setzen des `async`-Attributs eines [`script`](/de/docs/Web/HTML/Element/script)-Elements blockiert das `script` nicht das Laden oder die Anzeige des Restes der Seite. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfeatures aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Datumsangaben wie YYYY-MM-DD parsen.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Webworkers können sich jetzt selbst beenden
  - : [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()`-Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue {{domxref("Node.mozMatchesSelector", "element.mozMatchesSelector")}}-Methode ermöglicht es zu bestimmen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es einen unterstützten Beschleunigungsmesser hat, indem das [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Erkennen von Änderungen der Dokumentbreite und -höhe](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged`-Ereignis wird ausgelöst, wann immer sich die Eigenschaften `scrollWidth` und/oder `scrollHeight` des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Dinge für das Web freilegte. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf für die Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, daher sollten Sie ein Update durchführen.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) für DOM-Fenster wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Fenstersichtbereichs zurück.
- Das neue `mozScreenPixelsPerCSSPixel`-Attribut auf der `nsIDOMWindowUtils`-Schnittstelle, das nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann sich basierend auf dem Zoom-Level des Inhalts ändern.
- Wenn sich der Dokumentfragment-Identifier der URI der Seite (der Teil nach dem "#" (Hash)-Zeichen) ändert, wird ein neues `hashchange`-Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5s [`element.classList`](/de/docs/Web/API/Element/classList), um die Handhabung des Klassendattributs zu erleichtern. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) wandelt sein Argument nicht mehr in Kleinbuchstaben um, sodass Großbuchstaben im ASCII-Argument dazu führen, dass Übereinstimmungen mit HTML-Elementen fehlschlagen. Gleiches gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Geolokalisierung wurde über die `nsIDOMGeoPositionAddress`-Schnittstelle hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die {{domxref("window.getComputedStyle")}}-Funktion gibt jetzt Anführungszeichen innerhalb von `url()`-Werten zurück.

### XPath

- Die Methode choose() in XPath wird jetzt unterstützt
  - : Die Methode [`choose()`](/de/docs/Web/XPath/Functions/choose) wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen könnten. Plug-in-Entwickler sollten [Aktualisieren von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es einen unterstützten Beschleunigungsmesser hat, indem das [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachen von HTTP-Aktivitäten](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste in Windows 7 oder höher anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Places-Abfragen können jetzt das Attribut `redirectsMode` der `nsINavHistoryQueryOptions`-Schnittstelle verwenden, um festzulegen, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService`-Schnittstelle hinzugefügt.

### Storage

- [Lokalitätsbewusste Sortierung von Daten wird nun von der Storage API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um eine optimierte, lokalitätsbewusste Sortierung von Ergebnissen zu ermöglichen.
- [Eigenschaften auf einem Statement können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Aufzählung verwenden, um alle Eigenschaften auf einem Statement aufzulisten.
- Das Verhalten von `mozIStorageStatement`'s `getParameterIndex` hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrones Binden mehrerer Parametersätze und Ausführen eines Statements.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Preferences

- Die `nsIContentPrefService`-Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen im Zusammenhang mit Themes.

- [Leichtgewichtige Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund auf die obere (URL-Leiste und Button-Leiste) und untere (Statusleiste) Leiste der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/)-Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieterkomponenten mehr, die im internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem fehlerhafte Drittanbieterkomponenten nicht ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Packages umpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als standardmäßige Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr für die Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen stattdessen die [`chrome.manifest`](/de/docs/Install_Manifests)-Datei verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste wurde hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role`-Attribut für Objekte wurde hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton`-Bindung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung für das Abspielen von Sounds basierend auf aufgetretenen Ereignissen wurde zu `nsISound` hinzugefügt. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax der `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` hat sich geändert, um das neue Drag & Drop-API zu unterstützen, das in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung für das automatische Schnappen des Mauszeigers auf die Standardtaste eines Dialogs oder Assistenten unter Windows wurde hinzugefügt, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch vom Dialog- und Assistentenelement verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster unter Verwendung des `window`-Elements erstellt und es eine Standardtaste hat, muss `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignis-Handlers des Fensters aufgerufen werden.
- Die `nsILocalFileMac`-Schnittstelle hat zwei Methoden verloren: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm)-Codemodul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestrom zu einem Ausgabestrom.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm)-Codemodul erleichtert das Lesen und Ändern des Werts der im "Open Location"-Dialogfeld erinnerten URL unter Berücksichtigung des privaten Browsingmodus.
- In Windows berichtet die `nsIScreen`-Schnittstelle jetzt 24-Bit pro Pixel Farbtiefe, wenn der Grafiktreiber 32 Bits beansprucht, da 24 die tatsächliche Anzahl der verwendeten Farb-Pixel genauer repräsentiert.
- Menüleisten können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide)-Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar)-XUL-Element verwendet wird.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent`-Parameter und ermöglichen zudem, dass die Parameter namentlich spezifiziert werden, da nahezu alle Parameter optional sind.
- Die "[hidden](/de/docs/Install_Manifests#hidden)"-Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Verwaltungsfenster sieht.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen stattdessen `@mozilla.org/docshell;1` verwenden.
- Sie können jetzt mit der Kategorie "update-timer" registrieren, um Timerereignisse zu planen, ohne das Objekt instanziieren zu müssen, in das der Timer schließlich aufgerufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit, um Plug-ins in zukünftigen Versionen von Gecko in separaten Prozessen auszuführen.
- Plug-ins sind nicht mehr über XPCOM (IDL)-Schnittstellen skriptfähig, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API zur Verwendung für skriptfähige Plug-ins, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit, um Plug-ins in zukünftigen Versionen von Gecko in separaten Prozessen auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur wirklich interessant, wenn Sie an den internen Bereichen von Firefox selbst arbeiten.

### Schnittstellen zusammengeführt

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` zusammengeführt.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` zusammengeführt.

### Schnittstellen entfernt

Die folgenden Schnittstellen wurden vollständig entfernt, da sie nicht verwendet, nicht implementiert oder veraltet waren:

- `nsIFullScreen`
- `nsIDOMSVGListener`
- `nsIDOMSVGZoomListener`
- `nsIInternetConfigService`
- `nsIDKey`
- `nsIEventHandler`
- `nsIJRILiveConnectPIPeer`
- `nsIJRILiveConnectPlugin`
- `nsIScriptablePlugin`
- `nsIClassicPluginFactory`
- `nsIFileUtilities`

### Schnittstellen verschoben

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue umgesiedelt:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [In Firefox 3.6 verschobene Schnittstellen](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Weitere Schnittstellenänderungen

Die folgenden Änderungen wurden vorgenommen:

- Die `nsIPlugin`-Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost`-Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame`-Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die `nsIDeviceContext`-Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext`-Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das `EVENT_REORDER` [Accessibility-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Rahmen und iframes ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die Methode `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jegliche aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.

## Siehe auch

{{Firefox_for_developers}}