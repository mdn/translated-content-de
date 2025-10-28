---
title: Firefox 3.6 für Entwickler
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

[Firefox 3.6](https://www.firefox.com/en-US/) bietet Unterstützung für neue und sich entwickelnde Webstandards, verbesserte Leistung und insgesamt ein besseres Benutzererlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Fähigkeiten von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}} Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht Ihnen, mehrere Hintergründe anzugeben, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienfeatures](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
  - : Medienfeatures wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um die Verfügbarkeit von Features wie Touch-Unterstützung sicherer zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size` Eigenschaft aus dem [CSS 3 Backgrounds and Borders Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt nun das herunterladbare Schriftdateiformat WOFF.
- [Pointer-Events](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}} Eigenschaft erlaubt es Inhalten festzulegen, ob ein Element das Ziel von Mauszeigerereignissen sein darf.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Table-{{Cssxref("display")}} Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um die Anpassung von Layouts basierend darauf zu erleichtern, ob die Benutzeroberfläche von links nach rechts oder von rechts nach links dargestellt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudoklasse wurde hinzugefügt, welche `checkbox` [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente abgleicht, deren `indeterminate` Attribut auf `true` gesetzt ist.
- Fenstergestützte Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5-Datei-API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die der Benutzer auswählt. Dies schließt die Unterstützung für die Auswahl mehrerer Dateien über das HTML-Element `input type="file"` mit dem neuen `multiple` Attribut ein.
- HTML5-Video unterstützt Poster-Frames
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt und ermöglicht es, einen Poster-Frame anzugeben, der angezeigt wird, bis das Video zu spielen beginnt.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate Eigenschaft, welche einen dritten, "unbestimmten" Zustand ermöglicht.
- Steuerung der Bildglättung auf dem Canvas
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Setzen des `async` Attributs auf ein [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element blockiert das `script` weder das Laden noch die Darstellung der restlichen Seite. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen wurde.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, welches eine Reihe von Sprachmerkmalen aus dem [ECMAScript 5 Standard](https://web.archive.org/web/20210619182836/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601 Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web-Worker können sich jetzt selbst beenden
  - : [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()` Methode, welche es ihnen erlaubt, sich selbst zu beenden.
- Drag and Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste der Dateien, die gezogen wurden.
- Überprüfen, ob ein Element mit einem angegebenen CSS-Selektor übereinstimmt
  - : Die neue [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches) Methode ermöglicht es Ihnen, festzustellen, ob ein Element mit einem angegebenen CSS-Selektor übereinstimmt. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über ein unterstütztes Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis verwendet wird. Firefox 3.6 unterstützt das Beschleunigungsmesser in Mac-Laptops.
- Erkennung von Dokumentbreiten- und -höhenänderungen
  - : Das neue `MozScrollAreaChanged` Ereignis wird immer dann ausgelöst, wenn sich die Eigenschaften `scrollWidth` und/oder `scrollHeight` des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde entfernt, da sie nicht standardisiert war und noch mehr nicht standardisierte Funktionen im Web sichtbar machte. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, also aktualisieren Sie bitte.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften auf DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel` Attribut auf der `nsIDOMWindowUtils` Schnittstelle, welche nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoom-Level des Inhalts variieren.
- Wenn sich der Dokumentenfragment-Bezeichner (der Teil nach dem "#" (Hash-)Zeichen) der URI der Seite ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList), um die Handhabung des class-Attributs zu erleichtern. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) konvertiert seine Argumente nicht mehr in Kleinbuchstaben, sodass Großbuchstaben im Argument dazu führen, dass Übereinstimmungen mit HTML-Elementen fehlschlagen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung wurde für Adressen in der Geolokalisierung über die `nsIDOMGeoPositionAddress` Schnittstelle hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt nun Anführungszeichen innerhalb von `url()` Werten zurück.

### XPath

- Die choose() XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisierung von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, welches eine hilfreiche Übersicht darüber bietet, welche Änderungen Ihre Erweiterung beeinflussen können. Plug-in-Entwickler sollten [Aktualisierung von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über ein unterstütztes Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis verwendet wird. Firefox 3.6 unterstützt das Beschleunigungsmesser in Mac-Laptops.
- [Überwachen von HTTP-Aktivitäten](https://web.archive.org/web/20210421090042/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- Arbeiten mit der Windows-Taskleiste
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste in Windows 7 oder später anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Abfragen der Orte können jetzt das `redirectsMode` Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in die Ergebnisse einbezogen werden sollen oder nicht.
- Die neue `nsIFaviconService.expireAllFavicons()` Methode wurde zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Lokale Sortierung von Daten wird jetzt von der Speicher-API unterstützt](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage#collation_sorting)
  - : Gecko 1.9.2 hat mehrere neue Sortierungsmethoden hinzugefügt, um optimierte Sortierungsergebnisse unter Verwendung von lokal angepassten Techniken bereitzustellen.
- [Eigenschaften einer Anweisung können jetzt aufgezählt werden](https://web.archive.org/web/20210513165422/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Enumeration verwenden, um alle Eigenschaften einer Anweisung aufzuzählen.
- Das Verhalten von mozIStorageStatement's getParameterIndex hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrones Binden mehrerer Parametersätze und Ausführen einer Anweisung.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Die `nsIContentPrefService` Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisierung von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste von Änderungen bezüglich Themes.

- [Leichte Themes](https://web.archive.org/web/20180617103446/https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichte Themes; dies sind leicht zu erstellende Themes, die ein Hintergrundbild auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) Teile der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieterkomponenten mehr, die in seinem internen Komponentenverzeichnis installiert sind. Dies trägt zur Stabilität bei, indem verhindert wird, dass fehlerhafte Drittanbieterkomponenten ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](https://web.archive.org/web/20170622232046/https://developer.mozilla.org/de/docs/Migrating_raw_components_to_add-ons), sodass sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr zur Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen jetzt die [`chrome.manifest`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) Datei verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste wurde hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut für Objekte wurde hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton` Bindung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung für die Wiedergabe von Sounds basierend auf Ereignissen, die aufgetreten sind, wurde zu `nsISound` hinzugefügt. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung zum Einrasten des Mauszeigers auf die Standardtaste des Dialogs oder Assistenten unter Windows wurde hinzugefügt, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch von Dialog- und Assistentenelementen verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem `window`-Element erstellt und es eine Standardtaste hat, muss `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload` Ereignishandlers des Fensters aufgerufen werden.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](https://web.archive.org/web/20210620035742/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestream in einen Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](https://web.archive.org/web/20210417025317/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Wertes der im Dialogfeld "Standort öffnen" gespeicherten URL, wobei der private Browsing-Modus ordnungsgemäß berücksichtigt wird.
- Unter Windows berichtet die `nsIScreen` Schnittstelle jetzt 24-Bit pro Pixel Farbtiefe, wenn der Grafiktreiber 32 Bit angibt, da 24 die tatsächlich verwendete Anzahl an Farb-Pixeln genauer darstellt.
- Menüleisten können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar#autohide) Attribut auf dem [`<xul:toolbar>`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar) XUL-Element verwendet wird.
- Die Methoden [`loadOneTab`](https://web.archive.org/web/20201210182023/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/loadOneTab) und [`addTab`](https://web.archive.org/web/20201208182934/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent` Parameter und erlauben zusätzlich, dass die Parameter nach Namen angegeben werden. Dies ermöglicht die Option, da fast alle Parameter optional sind.
- Die "[hidden](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#hidden)" Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-on-Manager-Fenster sieht.
- Die `@mozilla.org/webshell;1` Komponente existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können jetzt bei der Kategorie "update-timer" registrieren, um Timer-Ereignisse zu planen, ohne das Objekt instanziieren zu müssen, in das der Timer schließlich aufruft; es wird stattdessen instanziiert, wenn es benötigt wird. Weitere Details siehe `nsIUpdateTimerManager.registerTimer()`.
- Die [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPN_GetValue) Funktion bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeiten, um Plugins in zukünftigen Versionen von Gecko in separaten Prozessen ablaufen zu lassen.
- Plugins sind nicht mehr skriptfähig über XPCOM (IDL) Schnittstellen, [NPRuntime](https://web.archive.org/web/20211028124814/https://developer.mozilla.org/de/docs/Plugins/Guide/Scripting_plugins) ist die API zur Skriptfähigkeit von Plugins, und [`NPP_GetValue()`](https://web.archive.org/web/20201023225330/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeiten, um Plugins in zukünftigen Versionen von Gecko in separaten Prozessen ablaufen zu lassen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur wirklich interessant, wenn Sie an den Interna von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` zusammengeführt.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` zusammengeführt.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` zusammengeführt.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` zusammengeführt.

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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue Dateien verlagert:

- `nsIDOMNSCSS2Properties` befindet sich nun in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich nun in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Weitere Schnittstellenänderungen

Die folgenden diversen Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die `nsIDeviceContext` Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext` Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility Code

- Das `EVENT_REORDER` [Zugänglichkeitsevent](https://web.archive.org/web/20210516055347/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt nun korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.
