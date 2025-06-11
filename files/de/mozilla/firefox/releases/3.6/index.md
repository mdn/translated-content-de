---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/de/firefox/new/) bietet Unterstützung für neue und sich entwickelnde Webstandards, verbesserte Leistung und insgesamt ein besseres Erlebnis für Webnutzer und Entwickler. Diese Seite enthält Links zu Artikeln, die die neuen Fähigkeiten von Firefox 3.6 behandeln.

## Für Website- und Anwendungsentwickler

### CSS

- [Using gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 unterstützt die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}}.
- [Multiple backgrounds](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, und {{Cssxref("background-attachment")}}) unterstützt nun mehrere Hintergründe. Dies ermöglicht es, mehrere Hintergründe anzugeben, die übereinander in Schichten angezeigt werden.
- [Mozilla-specific media features](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sicherer zur Überprüfung der Verfügbarkeit von Funktionen wie Touch-Unterstützung verwendet werden können.
- [Scaling background images](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders draft](https://drafts.csswg.org/css-backgrounds-3/) wird nun unter dem Namen `-moz-background-size` unterstützt.
- [WOFF font support](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt nun das herunterladbare Schriftdateiformat WOFF.
- [Pointer events](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es dem Inhalt, anzugeben, ob ein Element das Ziel von Mausezeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit wird jetzt unterstützt. [Firefox-Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Canvas unterstützt. [Firefox-Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox-Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabelle {{Cssxref("display")}} Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} um es einfacher zu machen, Layouts anzupassen, je nachdem, ob die Benutzeroberfläche in einer von links nach rechts oder von rechts nach links verlaufenden Sprache angezeigt wird. [Firefox-Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudoklasse, die auf `checkbox` [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente angewendet wird, deren `indeterminate` Attribut `true` ist.
- Plugins mit Fenster werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dies beinhaltet die Unterstützung für die Auswahl mehrerer Dateien mit dem `input type="file"` HTML-Element und seinem neuen `multiple` Attribut.
- HTML5-Video unterstützt Posterframes
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt, sodass Inhalte ein Posterframe anzeigen können, bis das Video zu spielen beginnt.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente der Typen `checkbox` und `radio` unterstützen jetzt die `indeterminate` Eigenschaft, die einen dritten, "unbestimmten" Zustand ermöglicht.
- Bildglättung auf Canvas kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- oder auszuschalten.
- Asynchrone Skriptausführung
  - : Durch das Setzen des `async` Attributs auf ein [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element blockiert das `script` nicht das Laden oder die Anzeige des Rests der Seite. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie JJJJ-MM-TT analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web-Arbeiter können sich nun selbst beenden
  - : [Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()` Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector) Methode ermöglicht es, zu bestimmen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox-Bug 518003](https://bugzil.la/518003).
- [Geräteorientierung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Orientierung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, mit dem [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Änderungen der Breite und Höhe des Dokuments erkennen](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wenn sich die `scrollWidth` und/oder `scrollHeight` Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()` Methode wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Dinge dem Web ausgesetzt hat. Siehe [Firefox-Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, also aktualisieren Sie es unbedingt.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften in DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsbereichs des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel` Attribut auf der `nsIDOMWindowUtils` Schnittstelle, nur für Chrome zugänglich, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn sich der Dokumentfragment-Identifikator der URI der Seite (der Teil nach dem "#" (Raute-Zeichen)) ändert, wird ein neues `hashchange` Ereignis zur Seite gesendet. Weitere Informationen finden Sie im [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis. [Firefox-Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox-Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um den Umgang mit dem Klassenattribut zu erleichtern. [Firefox-Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) kleinschreibt sein Argument nicht mehr, sodass Großbuchstaben im Argument dazu führen, dass Übereinstimmungen mit HTML-Elementen fehlschlagen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung wurde für Adressen in der Geolokalisierung über die `nsIDOMGeoPositionAddress` Schnittstelle hinzugefügt, und ein neues Feld wurde zu `nsIDOMGeoPosition` hinzugefügt.
- Die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) Funktion gibt jetzt Anführungszeichen innerhalb von `url()` Werten zurück.

### XPath

- Die `choose()` XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick über Änderungen bietet, die Ihre Erweiterung betreffen könnten. Plugin-Entwickler sollten [Aktualisieren von Plugins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennen der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Orientierung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, mit dem [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachung der HTTP-Aktivität](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste unter Windows 7 oder später anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Places-Abfragen können jetzt das `redirectsMode` Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue `nsIFaviconService.expireAllFavicons()` Methode wurde der `nsIFaviconService` Schnittstelle hinzugefügt.

### Storage

- [Lokalbezogene Sortierung von Daten wird jetzt von der Storage-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um eine optimierte Sortierung von Ergebnissen mit lokalbewussten Techniken bereitzustellen.
- [Eigenschaften auf einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Aufzählung verwenden, um alle Eigenschaften auf einer Anweisung aufzulisten.
- Das Verhalten von `mozIStorageStatement's getParameterIndex` hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox-Bug 528166](https://bugzil.la/528166) für weitere Details.
- Mehrere Parametersätze asynchron binden und eine Anweisung ausführen.
  - : Siehe [Firefox-Bug 490085](https://bugzil.la/490085) für weitere Details. Dokumentation folgt in Kürze.

### Preferences

- Die `nsIContentPrefService` Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen im Zusammenhang mit Themes.

- [Lightweight themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt Lightweight-Themes; dies sind leicht zu erstellende Themes, die einen Hintergrund auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) von Browserfenstern anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/de/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox wird keine Drittanbieterkomponenten mehr laden, die in seinem internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieterkomponenten ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](/de/docs/Migrating_raw_components_to_add-ons), sodass sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr zum Registrieren von Chrome in Erweiterungen unterstützt. Sie müssen jetzt die [`chrome.manifest`](/de/docs/Install_Manifests) Datei verwenden. Siehe [Firefox-Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste hinzugefügt. Siehe [Firefox-Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut zu Objekten hinzugefügt. Siehe [Firefox-Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton` Bindung wurde entfernt. Siehe [Firefox-Bug 500971](https://bugzil.la/500971).
- Unterstützung für das Abspielen von Sounds basierend auf Ereignissen, die aufgetreten sind, zu `nsISound` hinzugefügt. Siehe [Firefox-Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` hat sich geändert, um die neue Drag & Drop API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox-Bug 455590](https://bugzil.la/455590).
- Unterstützung für das Einrasten des Mauszeigers auf die Standardschaltfläche des Dialogs oder Assistenten in Windows hinzugefügt. Siehe [Firefox-Bug 76053](https://bugzil.la/76053). Dies wird automatisch von Dialog- und Assistentenelementen verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem `window` Element erstellt und es eine Standardschaltfläche besitzt, muss es `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload` Ereignishandlers des Fensters aufrufen.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestrom in einen Ausgabestrom.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Werts der "Open Location"-Dialogbox des gespeicherten URL, während der private Browsing-Modus ordnungsgemäß berücksichtigt wird.
- Unter Windows meldet die `nsIScreen` Schnittstelle jetzt 24-Bit pro Pixel Bildschirmtiefen, wenn der Grafiktreiber 32 Bit angibt, da 24 genauer die tatsächlich verwendete Anzahl von Bildschirmfarben pixel darstellt.
- Menüleisten können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide) Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL-Element verwendet wird.
- Die [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) Methoden akzeptieren jetzt einen neuen `relatedToCurrent` Parameter und erlauben zudem die Angabe der Parameter nach Name, da fast alle Parameter optional sind.
- Die "[hidden](/de/docs/Install_Manifests#hidden)" Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Manager-Fenster sieht.
- Die `@mozilla.org/webshell;1` Komponente existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der Kategorie "update-timer" registrieren, um Timer-Ereignisse zu planen, ohne das Objekt instanziieren zu müssen, auf das der Timer schließlich zugreifen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Details finden Sie unter `nsIUpdateTimerManager.registerTimer()`.
- Die [`NPN_GetValue()`](/de/docs/NPN_GetValue) Funktion bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit zur Ausführung von Plugins in separaten Prozessen in einer zukünftigen Version von Gecko.
- Plugins sind nicht mehr über XPCOM (IDL-) Schnittstellen skriptfähig, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API, die verwendet werden muss, um Plugins skriptfähig zu machen, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit dem Wert `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit zur Ausführung von Plugins in separaten Prozessen in einer zukünftigen Version von Gecko.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur dann wirklich interessant, wenn Sie an den internen Elementen von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengefasst:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2`, und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` zusammengeführt.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` zusammengeführt.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden vollständig entfernt, da sie ungenutzt, nicht implementiert oder veraltet waren:

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

Die folgenden Schnittstellen wurden aus ihren vorherigen IDL-Dateien in neue verlagert:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine Vielzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Weitere Schnittstellenänderungen

Die folgenden Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die `nsIDeviceContext` Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext` Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Barrierefreiheitscode

- Das `EVENT_REORDER` [Barrierefreiheit-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt ausgelöst, wenn sich die Kinder von Frames und IFrames ändern, ebenso wie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox-Bug 420845](https://bugzil.la/420845).
- Der `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.

## Siehe auch

{{Firefox_for_developers}}
