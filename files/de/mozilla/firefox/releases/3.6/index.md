---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/new/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und insgesamt ein besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Fähigkeiten von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwenden von Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}} Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dadurch können mehrere Hintergründe angegeben werden, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu überprüfen.
- [Skalieren von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size` Eigenschaft aus dem [CSS 3 Backgrounds and Borders draft](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF Schriftunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF herunterladbare Schriftdateiformat.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}} Eigenschaft erlaubt es Inhalten zu spezifizieren, ob ein Element Ziel von Mauszeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit aus [CSS3 Values and Units](https://www.w3.org/TR/css3-values/#lengths) wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Canvas unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabelle {{Cssxref("display")}} Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um es einfacher zu machen, Layouts anzupassen, basierend darauf, ob die Benutzeroberfläche links-nach-rechts oder rechts-nach-links angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudoklasse hinzugefügt, welche `checkbox` [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente vergleicht, deren `indeterminate` Attribut `true` ist.
- Eingefensterte Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, wodurch es möglich ist, dass Webanwendungen auf vom Nutzer ausgewählte lokale Dateien zugreifen können. Dies umfasst die Unterstützung für das Auswählen mehrerer Dateien mithilfe des `input type="file"` HTML-Elements und des neuen `multiple` Attributs.
- HTML5 Video unterstützt Vorschau-Rahmen
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt, wodurch Inhalte einen Vorschau-Rahmen angeben können, der angezeigt werden soll, bis das Video zu spielen beginnt.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente des Typs `checkbox` und `radio` unterstützen jetzt die indeterminate Eigenschaft, die einen dritten, "unbestimmten" Zustand erlaubt.
- Canvas-Bildglättung kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- oder auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Setzen des `async` Attributs auf einem [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element wird der Rest der Seite nicht blockiert. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601 Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Worker können sich jetzt selbst beenden
  - : [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die Methode `nsIWorkerScope.close()`, die es ihnen erlaubt, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das den Drag-Listenern zur Verfügung gestellt wird, enthält jetzt eine Liste der Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue Methode [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector) ermöglicht es zu bestimmen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Erkennen von Dokumentbreiten- und -höhenänderungen](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wann immer sich die `scrollWidth` und/oder `scrollHeight` Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()` Methode wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Informationen im Web zugänglich machte. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Erkennung von Gecko verwendet; dies wurde in der neuesten Version von MooTools behoben, stellen Sie also sicher, dass Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften auf DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue Attribut `mozScreenPixelsPerCSSPixel` auf dem `nsIDOMWindowUtils` Interface, das nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixel und Bildschirm-Pixel; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn der Dokumentfragmentbezeichner der URI der Seite (der Teil nach dem "#" (Hash) Zeichen) sich ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um eine einfachere Handhabung des Klassenattributs zu ermöglichen. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) konvertiert sein Argument nicht mehr in Kleinbuchstaben, sodass Großbuchstaben im ASCII-Argument Vergleiche gegen HTML-Elemente fehlschlagen lassen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung wurde für Adressen in der Standortbestimmung über das `nsIDOMGeoPositionAddress` Interface hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt jetzt Anführungszeichen innerhalb von `url()` Werten zurück.

### XPath

- Die choose() XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick über die Änderungen bietet, die Ihre Erweiterung beeinflussen könnten. Plugin-Entwickler sollten [Plugins für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachend der HTTP-Aktivität](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Aussehen von Fenstern in der Taskleiste unter Windows 7 oder höher anzupassen. _Dies wurde standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Abfragen in Places können jetzt das `redirectsMode` Attribut auf dem `nsINavHistoryQueryOptions` Interface verwenden, um anzugeben, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Lokalbezogene Sortierung von Daten wird jetzt von der Storage API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 fügt mehrere neue Sortiermethoden hinzu, um optimierte Sortierungen der Ergebnisse mithilfe lokalbezogener Techniken bereitzustellen.
- [Eigenschaften einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Aufzählung verwenden, um alle Eigenschaften einer Anweisung aufzulisten.
- Das Verhalten von getParameterIndex in mozIStorageStatement hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrones Binden mehrerer Parametersätze und Ausführen einer Anweisung.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Die `nsIContentPrefService` Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Themes für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste von Änderungen im Zusammenhang mit Themes.

- [Leichte Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichte Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund an den oberen (URL-Leiste und Schaltflächenleiste) und unteren Rand (Statusleiste) der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox wird keine Drittanbieterkomponenten mehr laden, die im internen Komponenten-Verzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieterkomponenten ausgeführt werden. Entwickler, die ihre Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr zur Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen stattdessen die Datei [`chrome.manifest`](/de/docs/Install_Manifests) verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut an Objekten hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton` Bindung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung für `nsISound` hinzugefügt, um Töne basierend auf Ereignissen abzuspielen, die aufgetreten sind. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax der `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung hinzugefügt, um den Mauszeiger auf die Standardtaste eines Dialogs oder Assistenten unter Windows zu schnappen, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch durch das Dialog- und Assistentenelement verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem `window` Element erstellt und es eine Standardtaste hat, muss während des `onload` Ereignishandlers des Fensters `nsIDOMChromeWindow.notifyDefaultButtonLoaded` aufgerufen werden.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden verloren: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestream zu einem Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Werts der "Open Location" Dialogbox gespeicherten URL, während der Privatsphären-Modus berücksichtigt wird.
- Unter Windows meldet die `nsIScreen` Schnittstelle jetzt 24-Bit-pro-Pixel Farbtiefen, wenn der Grafiktreiber 32 Bits beansprucht, da 24 genauer die tatsächliche Anzahl der verwendeten Farbpixel darstellt.
- Menüleisten können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide) Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL Element verwendet wird.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent` Parameter und erlauben zusätzlich die Parameter benannt anzugeben, da fast alle der Parameter optional sind.
- Die "[hidden](/de/docs/Install_Manifests#hidden)" Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, Benutzer daran zu hindern, Add-ons im Add-on-Manager-Fenster zu sehen.
- Die `@mozilla.org/webshell;1` Komponente existiert nicht mehr; Sie müssen stattdessen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der Update-Timer-Kategorie registrieren, um Ereignisse zu planen, ohne dass das Objekt, in das der Timer schließlich aufrufen wird, instanziiert werden muss; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit daran, Plugins in einem separaten Prozess in einer zukünftigen Version von Gecko auszuführen.
- Plugins sind nicht mehr über XPCOM (IDL) Schnittstellen skiptbar, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API für die Scriptbarkeit von Plugins, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit dem Wert `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit daran, Plugins in einem separaten Prozess in einer zukünftigen Version von Gecko auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur dann wirklich interessant, wenn Sie an den internen Bereichen von Firefox selbst arbeiten.

### Schnittstellen zusammengeführt

Die folgenden Schnittstellen wurden zusammengefügt:

- `nsIPluginTagInfo2` wurde mit `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle mit `nsIPluginInstance` zusammengeführt.
- `nsIWindowlessPlugInstPeer` wurde mit `nsIPluginInstance` zusammengeführt.
- `nsIPluginManager` und `nsIPluginManager2` wurden mit `nsIPluginHost` zusammengeführt.

### Schnittstellen entfernt

Die folgenden Schnittstellen wurden vollständig entfernt, da sie nicht verwendet, nicht implementiert oder obsolet waren:

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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in einer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in einer eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Weitere Schnittstellenänderungen

Die folgenden Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die `nsIDeviceContext` Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext` Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Barrierefreiheitscode

- Das `EVENT_REORDER` [Barrierefreiheitsereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.

## Siehe auch

{{Firefox_for_developers}}
