---
title: Firefox 3.6 für Entwickler
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

[Firefox 3.6](https://www.firefox.com/en-US/) unterstützt neue und sich entwickelnde Webstandards, bietet verbesserte Leistung und insgesamt ein besseres Erlebnis für Webbenutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt nun mehrere Hintergründe. Dadurch können Sie mehrere Hintergründe angeben, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um die Verfügbarkeit von Funktionen wie Touch-Unterstützung sicherer zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird nun unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftart-Unterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt nun das WOFF-Format für herunterladbare Schriftarten.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es Inhalten festzulegen, ob ein Element Ziel von Mauszeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Table-{{Cssxref("display")}} Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um es zu erleichtern, Layouts anzupassen, je nachdem, ob die Benutzeroberfläche in einem linken oder rechten Kontext angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudoklasse hinzugefügt, die `checkbox` [`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente abgleicht, deren `indeterminate` Attribut `true` ist.
- Plug-ins im Fenster-Modus werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf vom Benutzer ausgewählte lokale Dateien zuzugreifen. Dies schließt die Unterstützung für die Auswahl mehrerer Dateien mit dem neuen `multiple` Attribut des `input type="file"` HTML-Elements ein.
- HTML5-Video unterstützt Poster-Frames
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt, wodurch Inhalte einen Poster-Frame angeben können, der angezeigt wird, bis das Video zu spielen beginnt.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate`-Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente der Typen `checkbox` und `radio` unterstützen nun die indeterminate-Eigenschaft, die einen dritten, "unbestimmten" Zustand ermöglicht.
- Bildglättung in der Leinwand kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann verwendet werden, um das Glätten von Bildern beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- oder auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Festlegen des `async`-Attributs auf einem [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element blockiert das `script` nicht mehr das Laden oder die Darstellung des restlichen Seiteninhalts. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen wurde.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5-Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Webworker können sich nun selbst beenden
  - : [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()` Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag and Drop unterstützt nun Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das an Drag-Listener übergeben wird, enthält nun eine Liste der gezogenen Dateien.
- Überprüfung, ob ein Element einem angegebenen CSS-Selektor entspricht
  - : Die neue [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches) Methode ermöglicht es Ihnen zu bestimmen, ob ein Element einem bestimmten CSS-Selektor entspricht oder nicht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Orientierung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungssensor verfügt, wobei das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- Erkennung von Änderungen in Dokumentbreite und -höhe
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wann immer sich die Eigenschaften `scrollWidth` und/oder `scrollHeight` des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()` Methode wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Dinge im Web freigelegt hat. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, daher sollten Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften auf DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel`-Attribut auf der `nsIDOMWindowUtils` Schnittstelle, das nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn sich die Dokumentfragmentkennung der URI der Seite (der Teil nach dem "#" (Kreuz) Zeichen) ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5s [`element.classList`](/de/docs/Web/API/Element/classList), um eine einfachere Handhabung des class-Attributs zu ermöglichen. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt, wie sie es in XHTML-Dokumenten tun: `localName` liefert in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) wandelt sein Argument nicht mehr in Kleinbuchstaben um, sodass Großbuchstaben im Argument zu Fehlabgleichen bei HTML-Elementen führen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Geolokalisierung über die `nsIDOMGeoPositionAddress` Schnittstelle wurde hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt jetzt Anführungszeichen innerhalb von `url()` Werten zurück.

### XPath

- Die choose() XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird nun von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung beeinflussen können. Plug-in-Entwickler sollten [Aktualisieren von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Orientierung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungssensor verfügt, wobei das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- [Überwachung der HTTP-Aktivität](/de/docs/Monitoring_HTTP_activity)
  - : Sie können nun HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste in Windows 7 oder später anzupassen. _Dies wurde in Firefox 3.6 standardmäßig deaktiviert._

### Places

- Places-Anfragen können jetzt das `redirectsMode`-Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Gebietsabhängige Sortierung von Daten wird jetzt von der Storage-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um eine optimierte Sortierung der Ergebnisse mit gebietsabhängigen Techniken zu gewährleisten.
- [Eigenschaften auf einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Aufzählung verwenden, um alle Eigenschaften auf einer Anweisung aufzuzählen.
- Das Verhalten von getParameterIndex in mozIStorageStatement hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrones Binden mehrerer Parametersätze und Ausführen einer Anweisung.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Die `nsIContentPrefService` Schnittstelle verfügt über zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen im Zusammenhang mit Themes.

- [Leichtgewichtige Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox wird keine Drittanbieterkomponenten mehr laden, die in seinem internen Komponentverzeichnis installiert sind. Dies trägt zur Gewährleistung der Stabilität bei, indem verhindert wird, dass fehlerhafte Drittanbieterkomponenten ausgeführt werden. Entwickler, die auf diese Weise Komponenten installieren, müssen [ihre Komponenten als XPI-Pakete umpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als normale Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr zur Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen stattdessen die [`chrome.manifest`](/de/docs/Install_Manifests) Datei verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut zu Objekten hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Das `tabs-closebutton`-Binding wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung für `nsISound` hinzugefügt, um Sounds basierend auf aufgetretenen Ereignissen abzuspielen. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung für das automatische Fangen des Mauszeigers zum Standardbutton des Dialogs oder Assistenten unter Windows hinzugefügt, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch vom Dialog- und Assistent-Element verarbeitet. Falls jedoch eine XUL-Anwendung ein Fenster mit dem `window`-Element erstellt und dieses einen Standardbutton hat, muss `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignis-Handlers des Fensters aufgerufen werden.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden verloren: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Codemodul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten aus einem Eingabestrom in einen Ausgabestrom.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Codemodul erleichtert das Lesen und Ändern des Wertes der im "Open Location"-Dialogfeld gespeicherten URL bei korrekter Berücksichtigung des privaten Browsing-Modus.
- Unter Windows meldet die `nsIScreen` Schnittstelle jetzt eine Farbtiefe von 24 Bits pro Pixel, wenn der Grafiktreiber 32 Bits angibt, da 24 die tatsächlich verwendete Anzahl von Farb-Pixeln genauer darstellt.
- Menüleisten können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide) Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL-Element verwendet wird.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent` Parameter und ermöglichen zusätzlich, dass die Parameter namentlich angegeben werden, da fast alle Parameter optional sind.
- Die Eigenschaft "[hidden](/de/docs/Install_Manifests#hidden)" wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Manager-Fenster sieht.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` stattdessen verwenden.
- Sie können sich jetzt mit der Update-Timer-Kategorie registrieren, um Timer-Ereignisse zu planen, ohne das Objekt instanziieren zu müssen, das der Timer letztendlich aufrufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die [`NPN_GetValue()`](/de/docs/NPN_GetValue) Funktion bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit, um Plugins in zukünftigen Gecko-Versionen in separaten Prozessen auszuführen.
- Plugins sind nicht mehr über XPCOM (IDL) Schnittstellen skriptfähig; [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API zur Skriptbarkeit von Plugins, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit, um Plugins in zukünftigen Gecko-Versionen in separaten Prozessen auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur dann wirklich interessant, wenn Sie an den Interna von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` integriert.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` integriert.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` integriert.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` integriert.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden vollständig entfernt, da sie unbenutzt, nicht implementiert oder veraltet waren:

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

Die folgenden Schnittstellen wurden aus ihren bisherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich nun in ihrer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Andere Schnittstellenänderungen

Die folgenden verschiedenen Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` statt von `nsISupports`.
- Die `nsIDeviceContext` Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext` Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das `EVENT_REORDER` [Accessibility-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` Methode entfernt nun korrekt alle aktuellen Auswahlen, bevor die angegebene Zeile ausgewählt wird.
