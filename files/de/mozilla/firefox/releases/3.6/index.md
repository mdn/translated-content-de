---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und insgesamt ein besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Fähigkeiten von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 unterstützt die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}}.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht es Ihnen, mehrere Hintergründe anzugeben, die in Schichten übereinander gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um die Verfügbarkeit von Funktionen wie z.B. Touch-Unterstützung sicherer zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size` Eigenschaft aus dem [CSS 3 Backgrounds and Borders Draft](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF herunterladbare Schriftdateiformat.
- [Pointer-Ereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es Inhalten, festzulegen, ob ein Element das Ziel von Mausezeiger-Ereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit aus [CSS3 Values and Units](https://www.w3.org/TR/css3-values/#lengths) wird nun unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die Tabellentypen mit {{Cssxref("display")}} verwenden, funktionieren jetzt deutlich besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um die Anpassung von Layouts basierend darauf zu erleichtern, ob die Benutzeroberfläche links- oder rechtsläufig angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudo-Klasse wurde hinzugefügt, die `checkbox` [`input`](/de/docs/Web/HTML/Element/input) Elemente, deren `indeterminate` Attribut `true` ist, abgleicht.
- Fensterbasierte Plug-ins werden in CSS-Transformationen nicht mehr angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, wodurch es Webanwendungen ermöglicht wird, auf lokale vom Benutzer ausgewählte Dateien zuzugreifen. Dies umfasst die Unterstützung für die Auswahl mehrerer Dateien mithilfe des neuen `multiple` Attributs des HTML-Elements `input type="file"`.
- HTML5-Video unterstützt Poster-Frames
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Element/video) Element unterstützt, sodass Inhalte einen Poster-Frame angeben können, der angezeigt wird, bis das Video beginnt zu spielen.
- Kontrollkästchen und Radio-Buttons unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Element/input) Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate-Eigenschaft, die einen dritten, "unbestimmten" Zustand ermöglicht.
- Bildglättung auf Leinwand kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Element/canvas) Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Festlegen des `async` Attributs bei einem [`script`](/de/docs/Web/HTML/Element/script) Element blockiert das `script` weder das Laden noch die Anzeige des Rests der Seite. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen wurde.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie JJJJ-MM-TT analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web-Arbeiter können sich jetzt selbst beenden
  - : [Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()` Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das Drag-Listenern bereitgestellt wird, enthält jetzt eine Liste der Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einen angegebenen CSS-Selektor abgleicht
  - : Die neue [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector) Methode ermöglicht es Ihnen festzustellen, ob ein Element einen angegebenen CSS-Selektor abgleicht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts feststellen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac Laptops.
- [Erkennen von Dokumentbreiten- und -höhenänderungen](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wann immer sich die Eigenschaften `scrollWidth` und/oder `scrollHeight` des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Elemente dem Web ausgesetzt hat. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf für die Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, daher stellen Sie sicher, dass Sie ein Update durchführen.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) auf DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel` Attribut auf der `nsIDOMWindowUtils` Schnittstelle, das nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoom-Level des Inhalts variieren.
- Wenn sich der Dokumentfragment-Bezeichner der URI der Seite (der Teil nach dem "#" (Hash-Zeichen)) ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um einfacheres Handling des class-Attributs zu ermöglichen. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) wandelt sein Argument nicht mehr in Kleinbuchstaben um, sodass Großbuchstaben im ASCII-Bereich im Argument Übereinstimmungen mit HTML-Elementen fehlschlagen lassen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Geolokalisierung wurde über die `nsIDOMGeoPositionAddress` Schnittstelle hinzugefügt und ein neues Feld zum `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt nun Anführungszeichen innerhalb von `url()`-Werten zurück.

### XPath

- Die Methode choose() aus XPath wird nun unterstützt
  - : Die [`choose()`](/de/docs/Web/XPath/Reference/Functions/choose) Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das eine hilfreiche Übersicht über Änderungen bietet, die Ihre Erweiterung betreffen könnten. Plug-in-Entwickler sollten [Aktualisieren von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts feststellen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/DOM/MozOrientation) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac Laptops.
- [Überwachung von HTTP-Aktivitäten](/de/docs/Monitoring_HTTP_activity)
  - : Sie können nun HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste unter Windows 7 oder neuer anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Orte

- Abfrage in den Orten kann jetzt das `redirectsMode` Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Lokal-awareness Sortierung von Daten wird jetzt von der Storage-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um optimierte Sortierung von Ergebnissen mit lokal-awareness Techniken zu bieten.
- [Eigenschaften auf einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können nun eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Enumeration verwenden, um alle Eigenschaften auf einer Anweisung aufzuzählen.
- Das Verhalten von `getParameterIndex` in `mozIStorageStatement` hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Mehrere Parametersätze asynchron binden und eine Anweisung ausführen.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation kommt bald.

### Einstellungen

- Die `nsIContentPrefService` Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen im Zusammenhang mit Themes.

- [Leichtgewichtige Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; dies sind einfach zu erstellende Themes, die ein Hintergrundbild auf die obere (URL- und Schaltflächenleiste) und untere (Statusleiste) Leisten der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieter-Komponenten mehr, die in seinem internen Komponentenverzeichnis installiert sind. Dies trägt dazu bei, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieter-Komponenten ausgeführt werden. Entwickler, die auf diese Weise Komponenten installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird für die Registrierung von Chrome in Erweiterungen nicht mehr unterstützt. Sie müssen jetzt die [`chrome.manifest`](/de/docs/Install_Manifests) Datei verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste wurde hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut bei Objekten wurde hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton` Bindung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung zum Abspielen von Sounds basierend auf aufgetretenen Ereignissen wurde zu `nsISound` hinzugefügt. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung wurde hinzugefügt, um den Mauszeiger auf die Standardtaste eines Dialogfensters oder Assistenten unter Windows zu schnappen, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch von Dialog- und Assistentenelementen verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem `window` Element erstellt und es eine Standardtaste enthält, muss `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload` Ereignishandlers des Fensters aufgerufen werden.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfache Methode, um Daten asynchron von einem Eingabestream zu einem Ausgabestream zu kopieren.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul ermöglicht es, den Wert der im "Open Location"-Dialogfenster gespeicherten URL zu lesen und zu ändern, wobei der private Browsing-Modus korrekt berücksichtigt wird.
- Unter Windows gibt die `nsIScreen` Schnittstelle jetzt Farbteufen von 24 Bit pro Pixel an, wenn der Grafiktreiber 32 Bit angibt, da 24 die tatsächliche Anzahl der verwendeten Farb-Pixel genauer darstellt.
- Menüleisten können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide) Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL-Element verwendet wird.
- Die [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) Methoden akzeptieren jetzt einen neuen `relatedToCurrent` Parameter, und darüber hinaus können die Parameter namentlich spezifiziert werden, da fast alle Parameter optional sind.
- Die "[hidden](/de/docs/Install_Manifests#hidden)" Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass Benutzer Add-ons im Add-on-Verwaltungsfenster sehen.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können jetzt bei der Update-Timer-Kategorie registrieren, um Timer-Ereignisse zu planen, ohne das Objekt instanziieren zu müssen, das der Timer letztendlich aufrufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die variablen Werte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit, um Plug-ins in einem zukünftigen Gecko-Update in separaten Prozessen auszuführen.
- Plug-ins sind nicht mehr über XPCOM (IDL)-Schnittstellen skriptbar, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist jetzt die API zur Skript-Erstellung von Plug-ins, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird mit dem Wert `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` nicht mehr aufgerufen. Dies ist Teil der Arbeit, um Plug-ins in einem zukünftigen Gecko-Update in separaten Prozessen auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur dann wirklich interessant, wenn Sie an den Interna von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
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

Die folgenden Schnittstellen wurden aus ihren bisherigen IDL-Dateien in neue Dateien umgezogen:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in ihrer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in ihrer eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Weitere Schnittstellenänderungen

Die folgenden verschiedenen Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die `nsIDeviceContext` Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert war.
- Die `nsIScriptContext` Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das `EVENT_REORDER` [Barrierefreiheitsevent](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Rahmen und iFrames ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor sie die angegebene Zeile auswählt.

## Siehe auch

{{Firefox_for_developers}}
