---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und insgesamt ein besseres Erlebnis für Webnutzer und Entwickler. Diese Seite enthält Links zu Artikeln über die neuen Fähigkeiten von Firefox 3.6.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 unterstützt die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}}.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die Eigenschaft {{Cssxref("background")}} (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dadurch können Sie mehrere Hintergründe angeben, die in Schichten übereinander gerendert werden.
- [Mozilla-spezifische Medienfeatures](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Medienfeatures wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die Eigenschaft `background-size` aus dem [CSS 3 Backgrounds and Borders Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [Unterstützung des WOFF-Schriftformats](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{Cssxref("@font-face")}} unterstützt jetzt das WOFF-Download-Schriftformat.
- [Pointer-Events](/de/docs/Web/CSS/pointer-events)
  - : Die Eigenschaft {{Cssxref("pointer-events")}} erlaubt es, anzugeben, ob ein Element das Ziel von Mauspointer-Ereignissen sein kann oder nicht.

#### Verschiedene CSS-Änderungen

- Die Längeinheit [`rem`](/de/docs/Web/CSS/length#relative_length_units) aus [CSS3 Values and Units](https://www.w3.org/TR/css3-values/#lengths) wird jetzt unterstützt. [Firefox-Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox-Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox-Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabellenanzeigetypten {{Cssxref("display")}} verwenden, funktionieren jetzt viel besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um die Anpassung von Layouts zu erleichtern, je nachdem, ob die Benutzeroberfläche in einer links-nach-rechts- oder rechts-nach-links-Sprache angezeigt wird. [Firefox-Bug 478416](https://bugzil.la/478416)
- Unterstützung für die Pseudoklasse {{cssxref(":indeterminate")}}, die `checkbox` [`input`](/de/docs/Web/HTML/Element/input) Elemente auswählt, deren `indeterminate` Attribut `true` ist.
- Plugins mit Fenstern werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde in Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dies umfasst die Unterstützung für die Auswahl mehrerer Dateien mit dem `input type="file"` HTML-Element, das jetzt das neue `multiple` Attribut unterstützt.
- HTML5-Video unterstützt Posterframes
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Element/video) Element unterstützt, wodurch Inhalt ein Posterframe spezifizieren kann, das angezeigt wird, bis das Video zu spielen beginnt.
- Checkboxen und Radiobuttons unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Element/input) Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate Eigenschaft, die einen dritten "unbestimmten" Zustand ermöglicht.
- Glättung von Canvas-Bildern kann gesteuert werden
  - : Die neue Eigenschaft [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) kann verwendet werden, um das Glätten von Bildern beim Skalieren in [`canvas`](/de/docs/Web/HTML/Element/canvas) Elementen ein- oder auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Festlegen des `async` Attributs an einem [`script`](/de/docs/Web/HTML/Element/script) Element wird das `script` das Laden oder Anzeigen des restlichen Seiteninhalts nicht blockieren. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachmerkmalen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Worker können sich jetzt selbst beenden
  - : [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die Methode `nsIWorkerScope.close()`, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das an Drag-Listener übergeben wird, beinhaltet jetzt eine Liste der Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue Methode [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector) ermöglicht es Ihnen, festzustellen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox-Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über ein unterstütztes Beschleunigungsmesser verfügt, durch das [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Erkennung von Änderungen der Dokumentbreite und -höhe](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wann immer sich die `scrollWidth` und/oder `scrollHeight` Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()` Methode wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Dinge dem Web ausgesetzt hat. Siehe [Firefox-Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Gecko-Erkennung verwendet; das wurde in der neuesten Version von MooTools behoben, also stellen Sie sicher, dass Sie aktualisieren.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) auf DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Anzeigeausschnitts des Fensters zurück.
- Das neue Attribut `mozScreenPixelsPerCSSPixel` auf der `nsIDOMWindowUtils` Schnittstelle, nur für Chrome zugänglich, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann basierend auf dem Zoomlevel des Inhalts variieren.
- Wenn sich der Dokumentfragmentbezeichner (der Teil nach dem "#" Zeichen) der URI der Seite ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für weitere Informationen. [Firefox-Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox-Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um einfachere Handhabung des class-Attributs zu erlauben. [Firefox-Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` wird in Kleinbuchstaben zurückgegeben und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) ändert nicht mehr seine Argumente in Kleinbuchstaben, so dass Großbuchstaben im Argument zu Trefferversagen bei HTML-Elementen führen. Das gleiche gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung wurde für Adressen in Geolocation über die `nsIDOMGeoPositionAddress` Schnittstelle und einem neuen Feld in `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt jetzt Anführungszeichen innerhalb von `url()` Werten zurück.

### XPath

- Die choose() XPath Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XPath/Functions/choose) Methode wird jetzt von unserer [XPath](/de/docs/Web/XPath) Implementierung unterstützt.

## Für XUL- und Add-On-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick über Änderungen bietet, die Ihre Erweiterung betreffen können. Plugin-Entwickler sollten [Aktualisieren von Plugins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es ein unterstütztes Beschleunigungsmesser hat, durch das [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachung der HTTP-Aktivität](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild der Fenster in der Taskleiste in Windows 7 oder später anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Places-Abfragen können jetzt das `redirectsMode` Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in Ergebnisse aufgenommen werden sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Ortsbezogene Sortierung von Daten wird jetzt von der Storage-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 fügte mehrere neue Sortiermethoden hinzu, um optimierte Sortierung (Kollation) von Ergebnissen unter Verwendung ortsbezogener Techniken zu bieten.
- [Eigenschaften auf einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Enumeration verwenden, um alle Eigenschaften auf einer Anweisung aufzulisten.
- Das Verhalten von `getParameterIndex` in `mozIStorageStatement` hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox-Bug 528166](https://bugzil.la/528166) für Details.
- Asynchron mehrere Parametersätze binden und eine Anweisung ausführen.
  - : Siehe [Firefox-Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Das `nsIContentPrefService` Interface hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen im Zusammenhang mit Themes.

- [Leichte Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichte Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) Teile des Browserfensters anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieterkomponenten mehr, die im internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieterkomponenten ausgeführt werden. Entwickler, die auf diese Weise Komponenten installieren, müssen [ihre Komponenten als XPI-Pakete umpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-Ons installiert werden können.
- `contents.rdf` wird nicht mehr zum Registrieren von Chrome in Erweiterungen unterstützt. Sie müssen jetzt die Datei [`chrome.manifest`](/de/docs/Install_Manifests) verwenden. Siehe [Firefox-Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Verbergen der Menüleiste hinzugefügt. Siehe [Firefox-Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut zu Objekten hinzugefügt. Siehe [Firefox-Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton` Bindung wurde entfernt. Siehe [Firefox-Bug 500971](https://bugzil.la/500971).
- Unterstützung für das Abspielen von Sounds basierend auf Ereignissen im `nsISound` hinzugefügt. Siehe [Firefox-Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox-Bug 455590](https://bugzil.la/455590).
- Unterstützung zum Einrasten des Mauspointers auf die Standard-Schaltfläche eines Dialog- oder Assistentenfensters unter Windows hinzugefügt, siehe [Firefox-Bug 76053](https://bugzil.la/76053). Dies wird automatisch durch das Dialog- und Assistentenelement verarbeitet. Wenn allerdings eine XUL-Anwendung ein Fenster über das `window` Element erstellt und es eine Standard-Schaltfläche hat, muss es `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload` Ereignishandlers des Fensters aufrufen.
- Das `nsILocalFileMac` Interface hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestrom zu einem Ausgabestrom.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des gespeicherten URLs des "Open Location" Dialogs unter Berücksichtigung des privaten Browsing-Modus.
- Unter Windows berichtet das `nsIScreen` Interface jetzt 24-Bit Farbtiefen pro Pixel, wenn der Grafiktreiber 32 Bits beansprucht, da 24 Bits die tatsächliche Zahl der Farbpixel genauer repräsentieren.
- Menüleisten können jetzt unter Windows versteckt werden, mit dem neuen [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide) Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL-Element.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent` Parameter und erlauben zudem, dass die Parameter nach Name angegeben werden können, da beinahe alle Parameter optional sind.
- Die "[versteckt](/de/docs/Install_Manifests#hidden)" Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass Nutzer Add-Ons im Add-On-Manager-Fenster sehen.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` stattdessen verwenden.
- Sie können sich jetzt bei der update-timer Kategorie registrieren, um Timer-Ereignisse zu planen, ohne dass das Objekt instanziiert werden muss, das letztendlich vom Timer aufgerufen wird; es wird stattdessen bei Bedarf instanziiert. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM durch die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement`, und `NPNVDOMWindow`. Dies ist Teil der Arbeit, um Plugins in separaten Prozessen in einer zukünftigen Version von Gecko auszuführen.
- Plugins sind über XPCOM (IDL) Schnittstellen nicht mehr skriptfähig, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API, die zum Skripten von Plugins verwendet wird, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit, um Plugins in separaten Prozessen in einer zukünftigen Version von Gecko auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur dann interessant, wenn Sie an den Interna von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2`, und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` zusammengeführt.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` zusammengeführt.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden vollständig entfernt, da sie ungenutzt, nicht implementiert oder obsolet waren:

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

### Verschobene Schnittstellen

Die folgenden Schnittstellen wurden aus ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich nun in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich nun in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Andere Schnittstellenänderungen

Die folgenden Änderungen wurden vorgenommen:

- Das `nsIPlugin` Interface erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Das `nsIPluginHost` Interface erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Das `nsIFrame` Interface erbt jetzt von `nsQueryFrame` statt von `nsISupports`.
- Die Methode `getPaletteInfo()` der `nsIDeviceContext` wurde entfernt, da sie nie implementiert wurde.
- Die Methode `reportPendingException()` der `nsIScriptContext` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das `EVENT_REORDER` [Accessibility-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox-Bug 420845](https://bugzil.la/420845).
- Die Methode `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor sie die angegebene Zeile auswählt.

## Siehe auch

{{Firefox_for_developers}}
