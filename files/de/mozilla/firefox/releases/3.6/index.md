---
title: Firefox 3.6 für Entwickler
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

[Firefox 3.6](https://www.firefox.com/en-US/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und eine insgesamt bessere Erfahrung für Webnutzer und Entwickler. Diese Seite enthält Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht Ihnen, mehrere Hintergründe anzugeben, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienfunktionen](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
  - : Es wurden Medienfunktionen für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer auf die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu prüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Hintergründe und Ränder Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird nun unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF-Downloadschriftsatzdateiformat.
- [Pointevents](/de/docs/Web/CSS/Reference/Properties/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es dem Inhalt, anzugeben, ob ein Element das Ziel von Mauszeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) Längeneinheit wird jetzt unterstützt. [Firefox-Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox-Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox-Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabelle {{Cssxref("display")}}-Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um es zu erleichtern, Layouts anzupassen, basierend darauf, ob die Benutzeroberfläche von links nach rechts oder von rechts nach links angezeigt wird. [Firefox-Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}}-Pseudoklasse hinzugefügt, die `checkbox` [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente abgleicht, deren `indeterminate` Attribut `true` ist.
- Fenstrige Plugins werden in CSS-Transformationen nicht mehr angezeigt, da sie nicht ordnungsgemäß vom Kompositor transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde in Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dies umfasst die Unterstützung für die Auswahl mehrerer Dateien mittels des `input type="file"` HTML-Elements mit dem neuen `multiple` Attribut.
- HTML5-Video unterstützt Posterframes
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt und ermöglicht es dem Inhalt, einen Posterframe anzugeben, der angezeigt wird, bis das Video beginnt zu spielen.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente vom Typ `checkbox` und `radio` unterstützen jetzt die indeterminate Eigenschaft, die einen dritten, "unbestimmten" Zustand erlaubt.
- Die Kantenglättung von Canvas-Bildern kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Setzen des `async` Attributs auf einem [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element wird das `script` weder das Laden noch die Anzeige des Restes der Seite blockieren. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](https://web.archive.org/web/20210619182836/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann nun ISO 8601-Daten wie JJJJ-MM-TT parsen.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Worker können sich nun selbst beenden
  - : [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()` Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfung, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches) Methode ermöglicht es, zu bestimmen, ob ein Element einem angegebenen CSS-Selektor entspricht. Siehe [Firefox-Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Orientierung des Gerätes erkennen, wenn es ein unterstütztes Beschleunigungsmesser besitzt, mit Hilfe des [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignisses. Firefox 3.6 unterstützt das Beschleunigungsmesser in Mac-Laptops.
- Erkennung von Änderungen der Dokumentbreite und -höhe
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wann immer sich die `scrollWidth`- und/oder `scrollHeight`-Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht-standardisiertes Zeug ins Web brachte. Siehe [Firefox-Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, stellen Sie also sicher, dass Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften auf DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel` Attribut auf der `nsIDOMWindowUtils` Schnittstelle, nur für Chrome zugänglich, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn sich der Fragmentbezeichner der URI der Seite (der Teil nach dem "#" (Rautezeichen) ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Weitere Informationen finden Sie im [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis. [Firefox-Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox-Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList) zur einfacheren Handhabung des class Attributs. [Firefox-Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) konvertiert sein Argument nicht mehr in Kleinbuchstaben, sodass Großbuchstaben in ASCII im Argument dazu führen, dass Übereinstimmungen mit HTML-Elementen fehlschlagen. Das gleiche gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Geolokalisierung wurde über die `nsIDOMGeoPositionAddress` Schnittstelle hinzugefügt, sowie ein neues Feld in `nsIDOMGeoPosition`.
- Die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) Funktion gibt jetzt Anführungszeichen innerhalb von `url()` Werten zurück.

### XPath

- Die choose() XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick über die Änderungen bietet, die Ihre Erweiterung betreffen könnten. Plug-in-Entwickler sollten [Plug-ins für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Orientierung des Gerätes erkennen, wenn es ein unterstütztes Beschleunigungsmesser besitzt, mit Hilfe des [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignisses. Firefox 3.6 unterstützt das Beschleunigungsmesser in Mac-Laptops.
- [Überwachung von HTTP-Aktivitäten](https://web.archive.org/web/20210421090042/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Monitoring_HTTP_activity)
  - : Sie können nun HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- Arbeiten mit der Windows-Taskleiste
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste in Windows 7 oder höher anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Abfrageergebnisse können jetzt das `redirectsMode` Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um anzugeben, ob Umleitungsseiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue `nsIFaviconService.expireAllFavicons()` Methode wurde zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Lokalitätsbezogene Sortierung von Daten wird jetzt von der Storage-API unterstützt](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage#collation_sorting)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um eine optimierte Sortierung (Sortierung) von Ergebnissen unter Verwendung lokalitätsbezogener Techniken bereitzustellen.
- [Eigenschaften einer Anweisung können jetzt aufgezählt werden](https://web.archive.org/web/20210513165422/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können nun eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Enumeration verwenden, um alle Eigenschaften einer Anweisung aufzulisten.
- Das Verhalten von `mozIStorageStatement's getParameterIndex` hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox-Bug 528166](https://bugzil.la/528166) für Details.
- Mehrere Parametersätze asynchron binden und eine Anweisung ausführen.
  - : Siehe [Firefox-Bug 490085](https://bugzil.la/490085) für Details. Dokumentation kommt bald.

### Einstellungen

- Die `nsIContentPrefService` Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisierung von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste von Änderungen im Zusammenhang mit Themes.

- [Leichtgewichtige Themes](https://web.archive.org/web/20180617103446/https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; diese sind einfach zu erstellen und wenden einen Hintergrund auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) von Browserfenstern an. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox wird keine Drittanbieterkomponenten mehr laden, die in seinem internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem fehlerhafte Drittanbieterkomponenten von der Ausführung ausgeschlossen werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](https://web.archive.org/web/20170622232046/https://developer.mozilla.org/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr zur Registrierung von Chrome in Erweiterungen unterstützt. Stattdessen müssen Sie jetzt die [`chrome.manifest`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) Datei verwenden. Siehe [Firefox-Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Verbergen der Menüleiste hinzugefügt. Siehe [Firefox-Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut zu Objekten hinzugefügt. Siehe [Firefox-Bug 391829](https://bugzil.la/391829).
- Das `tabs-closebutton` Binding wurde entfernt. Siehe [Firefox-Bug 500971](https://bugzil.la/500971).
- Unterstützung für `nsISound` hinzugefügt, um Töne basierend auf aufgetretenen Ereignissen abzuspielen. Siehe [Firefox-Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` hat sich geändert, um die neue Drag-and-Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox-Bug 455590](https://bugzil.la/455590).
- Unterstützung für das automatische Ausrichten des Mauszeigers auf die Standardtaste von Dialogen oder Assistenten unter Windows hinzugefügt, siehe [Firefox-Bug 76053](https://bugzil.la/76053). Dies wird automatisch von Dialog- und Assistentenelementen verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster über das `window`-Element erstellt und es eine Standardtaste hat, muss sie während des `onload`-Ereignishandlers des Fensters `nsIDOMChromeWindow.notifyDefaultButtonLoaded` aufrufen.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](https://web.archive.org/web/20210620035742/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestream zu einem Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](https://web.archive.org/web/20210417025317/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des gespeicherten URL-Wertes des "Ort öffnen" Dialogfelds unter Berücksichtigung des privaten Browsingmodus.
- Unter Windows meldet die `nsIScreen` Schnittstelle jetzt 24-Bit pro Pixel Farbtiefen, wenn der Grafiktreiber 32 Bit angibt, da 24 die tatsächliche Anzahl der verwendeten Farb-Pixel genauer darstellt.
- Menüleisten können jetzt unter Windows verborgen werden mit dem neuen [`autohide`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar#autohide) Attribut auf dem [`<xul:toolbar>`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar) XUL-Element.
- Die Methoden [`loadOneTab`](https://web.archive.org/web/20201210182023/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/loadOneTab) und [`addTab`](https://web.archive.org/web/20201208182934/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent` Parameter und erlauben es außerdem, die Parameter nach Namen anzugeben, da fast alle Parameter optional sind.
- Die "[hidden](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#hidden)" Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Manager-Fenster sieht.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` stattdessen verwenden.
- Sie können jetzt mit der Update-Timer-Kategorie registrieren, um Timer-Ereignisse einzuplanen, ohne das Objekt instanziieren zu müssen, das der Timer schließlich aufrufen wird; es wird stattdessen bei Bedarf instanziiert. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPN_GetValue) Funktion bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeiten, um Plugins in zukünftigen Versionen von Gecko in separaten Prozessen laufen zu lassen.
- Plugins sind nicht mehr über XPCOM (IDL)-Schnittstellen skriptfähig, [NPRuntime](https://web.archive.org/web/20211028124814/https://developer.mozilla.org/de/docs/Plugins/Guide/Scripting_plugins) ist die API, die verwendet werden soll, um Plugins skriptfähig zu machen, und [`NPP_GetValue()`](https://web.archive.org/web/20201023225330/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeiten, um Plugins in separaten Prozessen in zukünftigen Versionen von Gecko auszuführen.

## Für Firefox/Gecko-Entwickler

Einige Änderungen sind nur dann wirklich interessant, wenn Sie an den internen Teilen von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` integriert.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` integriert.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` integriert.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` integriert.

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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in ihrer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in ihrer eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verlegt. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Andere Schnittstellenänderungen

Die folgenden Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` statt von `nsISupports`.
- Die `nsIDeviceContext` Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext`-Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Zugänglichkeitscode

- Das `EVENT_REORDER` [Zugänglichkeitsereignis](https://web.archive.org/web/20210516055347/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und Iframes ändern, sowie wenn sich die Hauptdokumentarer Kinder ändern. Siehe [Firefox-Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.
