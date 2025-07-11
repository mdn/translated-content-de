---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/new/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und insgesamt ein besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Fähigkeiten von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}} Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht es Ihnen, mehrere Hintergründe anzugeben, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
  - : Es wurden Medienmerkmale für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu prüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size` Eigenschaft aus dem [CSS 3 Backgrounds and Borders Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF Schriftarten-Unterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF herunterladbare Schriftart-Dateiformat.
- [Pointer-Ereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}} Eigenschaft ermöglicht es, anzugeben, ob ein Element das Ziel von Mauszeiger-Ereignissen sein kann oder nicht.

#### Verschiedene CSS-Änderungen

- Die Längeinheit [`rem`](/de/docs/Web/CSS/length#relative_length_units) wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Canvas unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen mit {{Cssxref("display")}} Typen im Tabellenformat funktionieren jetzt viel besser.
- Hinzugefügt {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} um es einfacher zu machen, Layouts anzupassen basierend darauf, ob die Benutzeroberfläche in einer links-nach-rechts oder rechts-nach-links Lokalität angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudo-Klasse hinzugefügt, die `checkbox` [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente trifft, deren `indeterminate` Attribut `true` ist.
- Fenster-Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für das neue HTML5 File API wurde hinzugefügt, die es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Nutzer ausgewählt wurden. Dazu zählt die Unterstützung für die Auswahl mehrerer Dateien über das neue `multiple` Attribut des `input type="file"` HTML-Elements.
- HTML5 Video unterstützt Posterframes
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt, um ein Posterframe anzugeben, das angezeigt wird, bis das Video zu spielen beginnt.
- Checkboxen und Radio-Buttons unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate Eigenschaft, die einen dritten, "unbestimmten" Zustand ermöglicht.
- Canvas-Bildglättung kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann genutzt werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch das Setzen des `async` Attributs an einem [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element blockiert das `script` nicht das Laden oder die Anzeige des restlichen Inhalts der Seite. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601 Daten wie YYYY-MM-DD parsen.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Workers können jetzt selbst beenden
  - : [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die Methode `nsIWorkerScope.close()`, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt nun Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue Methode [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches) ermöglicht es Ihnen festzustellen, ob ein Element einem bestimmten CSS-Selektor entspricht oder nicht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennen der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalt kann nun die Orientierung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis genutzt wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac Laptops.
- Erkennen von Änderungen an Dokumentbreite und -höhe
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wann immer sich die `scrollWidth` und/oder `scrollHeight` Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Dinge im Web exponierte. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Erkennung von Gecko verwendete; dies wurde in der neuesten Version von MooTools behoben, daher sollten Sie ein Update vornehmen.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) wurden zu DOM-Fenstern hinzugefügt; diese geben die Bildschirmposition der oberen linken Ecke des Fensteransichtsbereichs zurück.
- Das neue Attribut `mozScreenPixelsPerCSSPixel` im `nsIDOMWindowUtils` Interface, nur zugänglich für Chrome, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn sich der Fragment-Identifikator der URI der Seite (der Teil nach dem "#" (Hash) Zeichen) ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für mehr Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um einfachere Verwaltung des class Attributs zu ermöglichen. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` wird in Kleinbuchstaben zurückgegeben und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) kleingeschreibt seine Argumente nicht mehr, so dass Großbuchstaben im ASCII-Bereich im Argument Matches gegen HTML-Elemente fehlschlagen lassen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Geolocation-Adressen wurde über das `nsIDOMGeoPositionAddress` Interface hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt jetzt Anführungszeichen innerhalb von `url()` Werten zurück.

### XPath

- Die choose() XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber gibt, welche Änderungen Ihre Erweiterung betreffen könnten. Plug-in-Entwickler sollten [Aktualisieren von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Features

- [Erkennen der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalt kann nun die Orientierung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis genutzt wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac Laptops.
- [Überwachung von HTTP-Aktivitäten](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Aussehen von Fenstern in der Taskleiste unter Windows 7 oder höher anzupassen. _Dies ist standardmäßig deaktiviert in Firefox 3.6._

### Places

- Places-Abfragen können jetzt das `redirectsMode` Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in die Ergebnisse einbezogen werden sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Lokalitätssensitives Sortieren von Daten wird jetzt von der Storage API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um optimierte Sortierungsergebnisse mit lokalitätssensitiven Methoden zu bieten.
- [Eigenschaften einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Aufzählung verwenden, um alle Eigenschaften einer Anweisung aufzulisten.
- Das Verhalten von mozIStorageStatement's getParameterIndex hat sich zwischen 3.5 und 3.6 geändert.
  - : Einzelheiten siehe [Firefox Bug 528166](https://bugzil.la/528166).
- Binden Sie asynchron mehrere Parametergruppen und führen Sie eine Anweisung aus.
  - : Einzelheiten siehe [Firefox Bug 490085](https://bugzil.la/490085). Dokumentation folgt in Kürze.

### Einstellungen

- Die `nsIContentPrefService` Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen im Zusammenhang mit Themes.

- [Leichtgewichtige Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund auf die obere (URL-Leiste und Button-Leiste) und untere (Statusleiste) Teile von Browserfenstern anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieter-Komponenten mehr, die in seinem internen Komponenten-Verzeichnis installiert sind. Dies hilft, Stabilität sicherzustellen, indem verhindert wird, dass fehlerhafte Drittanbieter-Komponenten ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen ihre Komponenten nun als [XPI-Pakete umpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr unterstützt, um Chrome in Erweiterungen zu registrieren. Sie müssen stattdessen die [`chrome.manifest`](/de/docs/Install_Manifests) Datei verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut zu Objekten hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton` Bindung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung hinzugefügt für das Abspielen von Sounds durch `nsISound` basierend auf aufgetretenen Ereignissen. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax der `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` hat sich geändert, um die neue Drag & Drop API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung hinzugefügt, um den Mauszeiger auf den Standard-Button eines Dialogs oder Assistenten unter Windows zu springen, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch vom Dialog- und Assistentenelement verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem `window` Element erstellt und es über einen Standard-Button verfügt, muss es `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload` Ereignis-Handlers des Fensters aufrufen.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestream zu einem Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Werts der gemerkten URL im "Open Location" Dialogfeld unter Berücksichtigung des privaten Modus.
- Unter Windows meldet die `nsIScreen` Schnittstelle jetzt 24-Bit pro Pixel Farbtiefen, wenn der Grafiktreiber 32 Bit angibt, da 24 die tatsächlich verwendete Anzahl an Farbpixeln genauer repräsentiert.
- Menüleisten können jetzt unter Windows ausgeblendet werden, mithilfe des neuen [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide) Attributs auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL Element.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen Parameter `relatedToCurrent` und erlauben es zudem, dass die Parameter nach Namen angegeben werden, da fast alle Parameter optional sind.
- Die "[hidden](/de/docs/Install_Manifests#hidden)" Eigenschaft wird nicht mehr in Installationsmanifesten unterstützt; es ist nicht mehr möglich, Benutzern das Anzeigen von Add-ons im Add-on-Manager-Fenster zu verhindern.
- Die `@mozilla.org/webshell;1` Komponente existiert nicht mehr; Sie müssen stattdessen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der Kategorie "update-timer" registrieren, um Timer-Ereignisse zu planen, ohne dass das Objekt instanziiert werden muss, das der Timer letztendlich aufrufen wird; es wird stattdessen bei Bedarf instanziiert. Siehe `nsIUpdateTimerManager.registerTimer()` für Einzelheiten.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM durch die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeiten, um Plugins in zukünftigen Versionen von Gecko in separaten Prozessen auszuführen.
- Plugins sind über XPCOM (IDL) Schnittstellen nicht mehr scriptfähig, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API, die für die Skriptfähigkeit von Plugins verwendet wird, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeiten, um Plugins in zukünftigen Versionen von Gecko in separaten Prozessen auszuführen.

## Für Firefox/Gecko-Entwickler

Einige Änderungen sind nur dann wirklich interessant, wenn Sie an den internen Strukturen von Firefox selbst arbeiten.

### Zusammengelegte Schnittstellen

Die folgenden Schnittstellen wurden zusammengelegt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in einer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in einer eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Sonstige Schnittstellenänderungen

Folgende diverse Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` statt von `nsISupports`.
- Die Methode `getPaletteInfo()` der `nsIDeviceContext` Schnittstelle wurde entfernt, da sie nie implementiert wurde.
- Die Methode `reportPendingException()` der `nsIScriptContext` Schnittstelle wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Barrierefreiheits-Code

- Das `EVENT_REORDER` [Barrierefreiheits-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Hauptdokumentenkinder ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die Methode `nsIAccessibleTable.selectRow()` entfernt nun korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.

## Siehe auch

{{Firefox_for_developers}}
