---
title: Firefox 3.6 für Entwickler
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/new/) bietet Unterstützung für neue und sich entwickelnde Webstandards, gesteigerte Leistung und insgesamt ein besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwenden von Verlaufsfüllungen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt nun mehrere Hintergründe. Dies ermöglicht es, mehrere Hintergründe zu spezifizieren, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
  - : Es wurden Medienmerkmale für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um die Verfügbarkeit von Funktionen wie Touch-Unterstützung sicherer zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders-Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird nun unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftarten-Unterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das herunterladbare Schriftdateiformat WOFF.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es, anzugeben, ob ein Element Ziel von Mauszeigerereignissen sein kann oder nicht.

#### Verschiedene CSS-Änderungen

- Die Längeneinheit [`rem`](/de/docs/Web/CSS/length#relative_length_units) wird jetzt unterstützt. [Firefox-Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Canvas unterstützt. [Firefox-Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird nun unterstützt. [Firefox-Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabelleneigenschaft {{Cssxref("display")}} verwenden, funktionieren jetzt viel besser.
- {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} wurden hinzugefügt, um es einfacher zu machen, Layouts basierend darauf anzupassen, ob die Benutzeroberfläche in einer links-nach-rechts- oder rechts-nach-links-Sprache angezeigt wird. [Firefox-Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudoklasse wurde hinzugefügt, die `checkbox`-Elemente des Typs [`input`](/de/docs/Web/HTML/Reference/Elements/input) mit dem Attribut `indeterminate` gleich `true` vergleicht.
- Fenster-Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie nicht ordnungsgemäß vom Compositor transformiert werden können.

### HTML

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5-File-API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dies beinhaltet die Unterstützung für die Auswahl mehrerer Dateien mit dem HTML-Element `input type="file"` und dessen neuem Attribut `multiple`.
- HTML5-Video unterstützt Posterframes
  - : Das `poster`-Attribut wird nun für das [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Element unterstützt, um einen Posterframe anzugeben, der angezeigt wird, bis das Video beginnt zu spielen.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate`-Eigenschaft
  - : HTML-Elemente des Typs [`input`](/de/docs/Web/HTML/Reference/Elements/input) mit `checkbox` und `radio` unterstützen jetzt die indeterminate-Eigenschaft, die einen dritten, "indeterminate" Zustand ermöglicht.
- Canvas-Bildglättung kann gesteuert werden
  - : Die neue Eigenschaft [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elementen ein- oder auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Setzen des `async`-Attributs bei einem [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Element blockiert das `script` nicht das Laden oder die Anzeige des restlichen Seiteninhalts. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web-Worker können sich jetzt selbst beenden
  - : [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die Methode `nsIWorkerScope.close()`, mit der sie sich selbst beenden können.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfung, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue Methode [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches) ermöglicht es Ihnen zu bestimmen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox-Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Orientierung des Geräts erkennen, wenn es ein unterstütztes Beschleunigungsmesser hat, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event)-Ereignis verwendet wird. Firefox 3.6 unterstützt das Beschleunigungsmesser in Mac-Notebooks.
- Erkennung von Änderungen an Breite und Höhe des Dokuments
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wenn sich die Eigenschaften `scrollWidth` und/oder `scrollHeight` des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und sogar noch mehr nicht-standardisierte Dinge im Web sichtbar machte. Siehe [Firefox-Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf für die Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, also stellen Sie sicher, dass Sie aktualisieren.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) für DOM-Fenster wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue Attribut `mozScreenPixelsPerCSSPixel` auf der `nsIDOMWindowUtils`-Schnittstelle, nur für Chrome zugänglich, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann sich basierend auf der Zoomstufe des Inhalts ändern.
- Wenn sich der Dokumentfragment-Bezeichner der URI der Seite (der Teil nach dem "#" (Hash)-Zeichen) ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für mehr Informationen. [Firefox-Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox-Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um ein einfacheres Handling des Klassenelements zu ermöglichen. [Firefox-Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) wandelt sein Argument nicht mehr in Kleinbuchstaben um, sodass Großbuchstaben im ASCII-Format im Argument dazu führen, dass die Übereinstimmung mit HTML-Elementen fehlschlägt. Gleiches gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Geolokalisierung wurde über die `nsIDOMGeoPositionAddress`-Schnittstelle hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt nun Anführungszeichen innerhalb von `url()`-Werten zurück.

### XPath

- Die choose()-XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose)-Methode wird nun von unserer [XPath](/de/docs/Web/XML/XPath)-Implementierung unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen können. Plug-in-Entwickler sollten [Plugins für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Orientierung des Geräts erkennen, wenn es ein unterstütztes Beschleunigungsmesser hat, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event)-Ereignis verwendet wird. Firefox 3.6 unterstützt das Beschleunigungsmesser in Mac-Notebooks.
- [Überwachung von HTTP-Aktivitäten](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Aussehen von Fenstern in der Taskleiste unter Windows 7 oder später anzupassen. _Dies wurde standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Places-Abfragen können jetzt das `redirectsMode`-Attribut auf der `nsINavHistoryQueryOptions`-Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in die Ergebnisse einbezogen werden sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService`-Schnittstelle hinzugefügt.

### Storage

- [Lokalitätsbewusste Sortierung von Daten wird jetzt von der Storage-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 fügte mehrere neue Sortiermethoden hinzu, um eine optimierte Sortierung der Ergebnisse mit lokalitätsbewussten Techniken bereitzustellen.
- [Eigenschaften einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Aufzählung verwenden, um alle Eigenschaften einer Anweisung aufzulisten.
- Das Verhalten von `mozIStorageStatement's getParameterIndex` änderte sich zwischen 3.5 und 3.6.
  - : Einzelheiten finden Sie unter [Firefox-Bug 528166](https://bugzil.la/528166).
- Asynchrone Bindung mehrerer Parametersätze und Ausführung einer Anweisung.
  - : Einzelheiten finden Sie unter [Firefox-Bug 490085](https://bugzil.la/490085). Dokumentation folgt bald.

### Preferences

- Das `nsIContentPrefService`-Interface hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Themes für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen im Zusammenhang mit Themes.

- [Lightweight-Themen](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt Lightweight-Themen; dies sind einfach zu erstellende Themen, die einen Hintergrund auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittkomponenten mehr, die im internen Componentenverzeichnis installiert sind. Dies trägt zur Stabilität bei, indem verhindert wird, dass fehlerhafte Drittkomponenten ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete umpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr für die Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen jetzt die Datei [`chrome.manifest`](/de/docs/Install_Manifests) verwenden. Siehe [Firefox-Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste hinzugefügt. Siehe [Firefox-Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role`-Attribut zu Objekten hinzugefügt. Siehe [Firefox-Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton`-Verbindung wurde entfernt. Siehe [Firefox-Bug 500971](https://bugzil.la/500971).
- Unterstützung für `nsISound` zum Abspielen von Sounds basierend auf Ereignissen, die aufgetreten sind, hinzugefügt. Siehe [Firefox-Bug 502799](https://bugzil.la/502799).
- Die Syntax für die Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` von `nsITreeView` hat sich geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox-Bug 455590](https://bugzil.la/455590).
- Unterstützung für das automatische Schnappen des Mauszeigers auf die Standard-Schaltfläche eines Dialogs oder Assistenten unter Windows hinzugefügt, siehe [Firefox-Bug 76053](https://bugzil.la/76053). Dies wird automatisch von Dialog- und Assistentenelementen verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem Element `window` erstellt und es eine Standardschaltfläche hat, muss sie `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignishandlers des Fensters aufrufen.
- Die `nsILocalFileMac`-Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestream zu einem Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Werts des im "Open Location"-Dialogfeldes gespeicherten URLs, während der Modus für privates Surfen korrekt berücksichtigt wird.
- Unter Windows meldet die `nsIScreen`-Schnittstelle jetzt 24-Bit pro Pixel Farbtiefen, wenn der Grafiktreiber 32 Bit angibt, da 24 die tatsächlich verwendete Anzahl von Farb-Pixeln genauer darstellt.
- Menüleisten können jetzt unter Windows mithilfe des neuen [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide)-Attributs auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar)-Element ausgeblendet werden.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent`-Parameter und außerdem können die Parameter nach Namen angegeben werden, da fast alle Parameter optional sind.
- Die Eigenschaft "[hidden](/de/docs/Install_Manifests#hidden)" wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Manager-Fenster sieht.
- Die `@mozilla.org/webshell;1`-Komponente existiert nicht mehr; stattdessen müssen Sie `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der Update-Timer-Kategorie registrieren, um Timer-Ereignisse zu planen, ohne das Objekt zu instanziieren, das vom Timer letztendlich aufgerufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Einzelheiten finden Sie unter `nsIUpdateTimerManager.registerTimer()`.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeiten, um Plugins in einer zukünftigen Version von Gecko in getrennten Prozessen laufen zu lassen.
- Plugins sind nicht mehr über XPCOM (IDL)-Schnittstellen scriptfähig, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die zu verwendende API, um Plugins scriptfähig zu machen, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr aufgerufen mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID`. Dies ist Teil der Arbeiten, um Plugins in einer zukünftigen Version von Gecko in getrennten Prozessen laufen zu lassen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur wirklich interessant, wenn Sie an den Interna von Firefox selbst arbeiten.

### Schnittstellen zusammengeführt

Die folgenden Schnittstellen wurden zusammengefasst:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` integriert.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` integriert.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` integriert.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` integriert.

### Schnittstellen entfernt

Die folgenden Schnittstellen wurden vollständig entfernt, da sie ungenutzt, nicht implementiert oder überholt waren:

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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue umgezogen:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Eine vollständige Liste finden Sie unter [Schnittstellen in Firefox 3.6 verschoben](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved).

### Sonstige Schnittstellenänderungen

Die folgenden verschiedene Änderungen wurden durchgeführt:

- Die `nsIPlugin`-Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost`-Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame`-Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die Methode `getPaletteInfo()` von `nsIDeviceContext` wurde entfernt, da sie nie implementiert war.
- Die Methode `reportPendingException()` von `nsIScriptContext` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das [Accessibility-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) `EVENT_REORDER` wird jetzt auch gesendet, wenn sich die Kinder von Frames und Iframes ändern, ebenso wie die Kinder vom Hauptdokument. Siehe [Firefox-Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jegliche aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.
