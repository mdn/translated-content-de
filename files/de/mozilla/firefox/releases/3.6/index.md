---
title: Firefox 3.6 für Entwickler
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

[Firefox 3.6](https://www.firefox.com/en-US/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und ein insgesamt besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln über die neuen Fähigkeiten von Firefox 3.6.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht es, mehrere Hintergründe zu spezifizieren, die übereinander in Schichten dargestellt werden.
- [Mozilla-spezifische Medieneigenschaften](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
  - : Medieneigenschaften für Mozilla-spezifische Systemmetriken wurden hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders-Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt nun das herunterladbare Schriftdateiformat WOFF.
- [Zeigerereignisse](/de/docs/Web/CSS/Reference/Properties/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft erlaubt es, festzulegen, ob ein Element Ziel von Mauszeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Canvas unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabellentypen der {{Cssxref("display")}}-Eigenschaft verwenden, funktionieren jetzt wesentlich besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um es einfacher zu machen, Layouts an die Links-nach-Rechts- oder Rechts-nach-Links-Ausrichtung einer Benutzeroberfläche anzupassen. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudoklasse, die `checkbox`-[`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente erfasst, deren `indeterminate`-Attribut `true` ist.
- Fensterbasierte Plugins werden nicht mehr in CSS-Transformationen dargestellt, da sie vom Kompositor nicht korrekt transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dazu gehört die Unterstützung zur Auswahl mehrerer Dateien mithilfe des neuen `multiple`-Attributs des `input type="file"` HTML-Elements.
- HTML5-Video unterstützt jetzt Vorschau-Bilder
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt, was es ermöglicht, ein Vorschaubild zu spezifizieren, das angezeigt wird, bis das Video beginnt.
- Kontrollkästchen und Radiobuttons unterstützen die `indeterminate`-Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate Eigenschaft, die einen dritten, "indeterminierten" Zustand erlaubt.
- Bildglättung auf Canvas kann kontrolliert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior)-Eigenschaft kann verwendet werden, um das Bildglätten beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Indem Sie das `async`-Attribut auf ein [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element setzen, blockiert das `script` nicht das Laden oder die Darstellung des restlichen Seiteninhalts. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen wurde.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](https://web.archive.org/web/20210619182836/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) ergänzt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie YYYY-MM-DD parsen.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzulisten.

### DOM

- Web Workers können sich nun selbst beenden
  - : [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen nun die `nsIWorkerScope.close()`-Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt nun Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste der Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches) Methode ermöglicht es, festzustellen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungssensor verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event)-Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- Erkennung von Dokumentbreiten- und -höhenänderungen
  - : Das neue `MozScrollAreaChanged`-Ereignis wird ausgelöst, wann immer sich die `scrollWidth` und/oder `scrollHeight` Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und sogar noch mehr nicht standardisierte Eigenschaften dem Web ausgesetzt hat. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf für die Gecko-Erkennung verwendet; das wurde in der neuesten Version von MooTools behoben, stellen Sie also sicher, dass Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften auf DOM-Fenstern wurden hinzugefügt; sie geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel` Attribut auf dem `nsIDOMWindowUtils` Interface, das nur im Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoom-Level des Inhalts variieren.
- Wenn sich der Dokumentfragment-Bezeichner der URI der Seite ändert (der Teil nach dem "#" (Rautezeichen)), wird ein neues `hashchange`-Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für das HTML5-Attribut [`element.classList`](/de/docs/Web/API/Element/classList) für eine einfachere Handhabung des Klassenattributs. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` wird in Kleinbuchstaben zurückgegeben und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) gibt sein Argument nicht mehr in Kleinbuchstaben um, so dass Großbuchstaben im ASCII-Bereich in dem Argument dazu führen, dass Übereinstimmungen mit HTML-Elementen fehlschlagen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen bei der Geolokalisierung wurde über das `nsIDOMGeoPositionAddress` Interface und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt jetzt Anführungszeichen in `url()`-Werten zurück.

### XPath

- Die choose()-XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird nun von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisierung von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, welches einen hilfreichen Überblick über die Änderungen bietet, die Ihre Erweiterung betreffen können. Plug-in-Entwickler sollten [Aktualisierung von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungssensor verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event)-Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- [Überwachung der HTTP-Aktivität](https://web.archive.org/web/20210421090042/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- Arbeiten mit der Windows-Taskleiste
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste unter Windows 7 oder später anzupassen. _Dies wurde in Firefox 3.6 standardmäßig deaktiviert._

### Places

- Places-Abfragen können jetzt das `redirectsMode`-Attribut auf dem `nsINavHistoryQueryOptions` Interface verwenden, um festzulegen, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zum `nsIFaviconService` Interface hinzugefügt.

### Speicher

- [Lokalbewusste Sortierung von Daten wird jetzt durch die Storage API unterstützt](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage#collation_sorting)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um optimierte Sortierung von Ergebnissen mit lokalbewussten Techniken zu bieten.
- [Eigenschaften auf einer Anweisung können jetzt aufgelistet werden](https://web.archive.org/web/20210513165422/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Enumeration verwenden, um alle Eigenschaften auf einer Anweisung aufzuzählen.
- Das Verhalten von `mozIStorageStatement.getParameterIndex` hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrone Bindung mehrerer Parametergruppen und Ausführung einer Anweisung.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt bald.

### Voreinstellungen

- Das `nsIContentPrefService` Interface hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisierung von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen, die sich auf Themes beziehen.

- [Leichtgewichtige Themes](https://web.archive.org/web/20180617103446/https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund auf der oberen (URL-Leiste und Buttonleiste) und unteren (Statusleiste) Browserfensterleiste auftragen. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/)-Themearchitektur in Firefox.

### Verschiedenes

- Firefox wird keine Drittanbieterkomponenten mehr laden, die im internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieterkomponenten ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](https://web.archive.org/web/20170622232046/https://developer.mozilla.org/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr zur Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen stattdessen die Datei [`chrome.manifest`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Verbergen der Menüleiste hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut zu Objekten hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Das `tabs-closebutton`-Binding wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung für `nsISound` hinzugefügt, um Töne basierend auf Ereignissen abzuspielen, die stattgefunden haben. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax der `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` hat sich geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung hinzugefügt, um den Mauszeiger zum Standardknopf eines Dialogs oder Assistenten unter Windows zu schnappen, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch vom Dialog- und Assistenten-Element verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster erstellt, das das `window` Element verwendet, und es einen Standardknopf hat, muss `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignishandlers des Fensters aufgerufen werden.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](https://web.archive.org/web/20210620035742/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode für das asynchrone Kopieren von Daten aus einem Eingabestream in einen Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](https://web.archive.org/web/20210417025317/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Werts der im "Öffnen Ort" Dialogfelds gespeicherten URL unter Berücksichtigung des privaten Browsing-Modus.
- Unter Windows gibt das `nsIScreen`-Interface jetzt 24-Bit pro Pixel Farbtiefe zurück, wenn der Grafiktreiber 32-Bit beansprucht, da 24-Bit die tatsächliche Anzahl der verwendeten Farbpixel genauer darstellt.
- Menübalken können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar#autohide) Attribut auf dem [`<xul:toolbar>`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar) XUL-Element verwendet wird.
- Die Methoden [`loadOneTab`](https://web.archive.org/web/20201210182023/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/loadOneTab) und [`addTab`](https://web.archive.org/web/20201208182934/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/addTab) akzeptieren nun einen neuen `relatedToCurrent` Parameter und erlauben es außerdem, die Parameter per Namen zu spezifizieren, da fast alle Parameter optional sind.
- Die "[hidden](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#hidden)" Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Manager-Fenster sieht.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der Update-Timer-Kategorie registrieren, um Timer-Ereignisse zu planen, ohne das Objekt zu instanziieren, das der Timer schließlich aufrufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit zur Ausführung von Plugins in separaten Prozessen in einer zukünftigen Version von Gecko.
- Plugins sind über XPCOM (IDL)-Schnittstellen nicht mehr skriptfähig, [NPRuntime](https://web.archive.org/web/20211028124814/https://developer.mozilla.org/de/docs/Plugins/Guide/Scripting_plugins) ist die API, die verwendet werden sollte, um Plugins skriptfähig zu machen, und [`NPP_GetValue()`](https://web.archive.org/web/20201023225330/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPP_GetValue) wird nicht mehr mit dem Wert `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit zur Ausführung von Plugins in separaten Prozessen in einer zukünftigen Version von Gecko.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind wirklich nur dann interessant, wenn Sie an den internen Strukturen von Firefox selbst arbeiten.

### Schnittstellen zusammengeführt

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` zusammengeführt.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` zusammengeführt.

### Schnittstellen entfernt

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

### Schnittstellen verschoben

Die folgenden Schnittstellen wurden aus ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Schnittstellen verschoben in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Sonstige Schnittstellenänderungen

Die folgenden Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die Methode `getPaletteInfo()` in `nsIDeviceContext` wurde entfernt, da sie nie implementiert wurde.
- Die Methode `reportPendingException()` in `nsIScriptContext` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das [Accessibility-Ereignis](https://web.archive.org/web/20210516055347/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessibleEvent) `EVENT_REORDER` wird jetzt gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die Methode `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.
