---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/) bietet Unterstützung für neue und sich entwickelnde Webstandards, verbesserte Leistung und ein insgesamt besseres Erlebnis für Web-Nutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht Ihnen das Festlegen mehrerer Hintergründe, die in Schichten übereinander gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sicherer zur Prüfung der Verfügbarkeit von Funktionen wie der Touch-Unterstützung verwendet werden können.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders Draft](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF Schriftunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF-Downloadformat für Schriftdateien.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es Inhalten, festzulegen, ob ein Element Ziel von Mauszeigerereignissen sein kann oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit aus [CSS3 Werte und Einheiten](https://www.w3.org/TR/css3-values/#lengths) wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabellen-{{Cssxref("display")}}-Typen verwenden, funktionieren jetzt viel besser.
- {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} wurden hinzugefügt, um das Anpassen von Layouts zu erleichtern, je nachdem, ob die Benutzeroberfläche von links nach rechts oder von rechts nach links angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudo-Klasse, die `checkbox`-[`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente auswählt, deren `indeterminate`-Attribut auf `true` gesetzt ist.
- Fensterspezifische Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht korrekt transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dies beinhaltet die Unterstützung für die Auswahl mehrerer Dateien mit dem `input type="file"` HTML-Element und dessen neuen `multiple`-Attribut.
- HTML5-Video unterstützt Poster-Frames
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Element unterstützt, sodass Inhalte einen Poster-Frame festlegen können, der angezeigt wird, bis das Video beginnt abzuspielen.
- Kontrollkästchen und Radio-Buttons unterstützen die `indeterminate`-Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate-Eigenschaft, die einen dritten, "indeterminierten" Zustand ermöglicht.
- Bildscaling in Canvas kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior)-Eigenschaft kann verwendet werden, um Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch das Festlegen des `async`-Attributs auf einem [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Element blockiert das `script` nicht das Laden oder die Anzeige des restlichen Inhalts der Seite. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, welches eine Reihe von Sprachfeatures aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten im Format JJJJ-MM-TT parsen.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufgezählt.

### DOM

- Web Worker können sich selbst beenden
  - : [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()`-Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das den Drag-Listenern bereitgestellt wird, enthält jetzt eine Liste der Dateien, die gezogen wurden.
- Prüfung, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector)-Methode ermöglicht es Ihnen festzustellen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, mithilfe des [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Erkennung von Dokumentbreiten- und -höhenänderungen](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged`-Ereignis wird ausgelöst, wenn sich die `scrollWidth`-und/oder `scrollHeight`-Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()`-Methode wurde **entfernt**, da sie nicht standardisiert war und noch weitere nicht standardisierte Elemente im Web ausgesetzt hatte. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, daher sollten Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften in DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der linken oberen Ecke des Ansichtsfensters des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel` Attribut auf der `nsIDOMWindowUtils`-Schnittstelle, das nur im Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn sich der Dokumentfragment-Identifikator der URI der Seite (der Teil nach dem "#" (Raute)-Zeichen) ändert, wird ein neues `hashchange`-Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um die Handhabung des class-Attributs zu erleichtern. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) konvertiert seine Argumente nicht mehr in Kleinbuchstaben, sodass Großbuchstaben im ASCII-Format im Argument dazu führen, dass keine Übereinstimmungen mit HTML-Elementen gefunden werden. Gleiches gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Geolokalisierung über die `nsIDOMGeoPositionAddress`-Schnittstelle und ein neues Feld zur `nsIDOMGeoPosition` wurde hinzugefügt.
- Die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)-Funktion gibt jetzt Anführungszeichen innerhalb von `url()`-Werten zurück.

### XPath

- Die choose()-XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose)-Methode wird jetzt in unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, welcher einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen können. Plug-in-Entwickler sollten [Plug-ins für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, mithilfe des [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachung der HTTP-Aktivität](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste ab Windows 7 oder später anzupassen. _Dies ist in Firefox 3.6 standardmäßig deaktiviert._

### Places

- Places-Abfragen können jetzt das `redirectsMode`-Attribut in der `nsINavHistoryQueryOptions`-Schnittstelle verwenden, um festzulegen, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` der `nsIFaviconService`-Schnittstelle wurde hinzugefügt.

### Speicher

- [Lokale Kollation von Daten wird jetzt durch die Speicher-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 fügte mehrere neue Kollationsmethoden hinzu, um eine optimierte Kollation (Sortierung) von Ergebnissen unter Verwendung von lokal angepassten Techniken zu ermöglichen.
- [Eigenschaften einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Aufzählung verwenden, um alle Eigenschaften einer Anweisung aufzulisten.
- Verhaltensänderung von mozIStorageStatement's getParameterIndex zwischen 3.5 und 3.6.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Mehrere Parametersätze asynchron binden und eine Anweisung ausführen.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Das `nsIContentPrefService`-Interface hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste von Änderungen im Zusammenhang mit Themes.

- [Leichte Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichte Themes; dies sind leicht zu erstellende Themes, die einen Hintergrund auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/)-Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieter-Komponenten mehr, die im internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität sicherzustellen, indem verhindert wird, dass fehlerhafte Drittanbieter-Komponenten ausgeführt werden. Entwickler, die auf diese Weise Komponenten installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr zur Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen stattdessen die [`chrome.manifest`](/de/docs/Install_Manifests)-Datei verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste wurde hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role`-Attribut an Objekten. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton`-Bindung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung wurde hinzugefügt, um `nsISound` dazu zu verwenden, basierend auf aufgetretenen Ereignissen Klänge abzuspielen. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax der `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` hat sich geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung wurde hinzugefügt, um den Mauszeiger auf die Standardtaste eines Dialogs oder Assistenten unter Windows zu schnappen, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch vom Dialog- und Assistentelement verarbeitet. Aber wenn eine XUL-Anwendung ein Fenster mit dem `window`-Element erstellt und es eine Standardtaste hat, muss sie `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignishandlers des Fensters aufrufen.
- Zwei Methoden wurden aus der `nsILocalFileMac`-Schnittstelle entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm)-Code-Modul bietet eine einfach zu bedienende Methode zum asynchronen Kopieren von Daten von einem Eingabestream zu einem Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm)-Code-Modul erleichtert es, den Wert der "Adresse öffnen"-Dialogbox zu lesen und zu ändern, während der private Browsing-Modus korrekt berücksichtigt wird.
- Unter Windows meldet die `nsIScreen`-Schnittstelle jetzt 24-Bit Pro-Pixel-Farbtiefen, wenn der Grafiktreiber 32 Bit angibt, da 24 die tatsächlich verwendete Anzahl der Farb-Pixel genauer darstellt.
- Menüleisten können unter Windows jetzt mit dem neuen [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide)-Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar)-XUL-Element ausgeblendet werden.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent`-Parameter und erlauben darüber hinaus, dass die Parameter nach Namen spezifiziert werden, da fast alle Parameter optional sind.
- Die "[hidden](/de/docs/Install_Manifests#hidden)"-Eigenschaft wird in Installations-Manifests nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Manager-Fenster sieht.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der update-timer-Kategorie registrieren, um Timerereignisse zu planen, ohne das Objekt instanziieren zu müssen, das der Timer schließlich aufrufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit, um Plugins in einer zukünftigen Version von Gecko in separaten Prozessen auszuführen.
- Plugins sind nicht mehr über XPCOM (IDL) Schnittstellen skriptfähig, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API, die für das Skriptfähigkeit von Plugins verwendet wird, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit dem Wert `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit, um Plugins in einer zukünftigen Version von Gecko in separaten Prozessen auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur wirklich interessant, wenn Sie an den Interna von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` zusammengeführt.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` zusammengeführt.

### Entfernte Schnittstellen

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

### Verschobene Schnittstellen

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in einer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in einer eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Andere Schnittstellenänderungen

Die folgenden Änderungen wurden gemacht:

- Die `nsIPlugin`-Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIPluginHost`-Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIFrame`-Schnittstelle erbt jetzt von `nsQueryFrame` statt von `nsISupports`.
- Die `nsIDeviceContext`-Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext`-Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Barrierefreiheitscode

- Das `EVENT_REORDER`- [Barrierefreiheitsereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Hauptdokumentkinder ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.

## Siehe auch

{{Firefox_for_developers}}
