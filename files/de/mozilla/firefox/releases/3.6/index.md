---
title: Firefox 3.6 für Entwickler
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[Firefox 3.6](https://www.firefox.com/en-US/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und insgesamt ein besseres Erlebnis für Web-Benutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 behandeln.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Firefox 3.6 unterstützt jetzt die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}}.
- [Mehrere Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}} Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht es Ihnen, mehrere Hintergründe anzugeben, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size` Eigenschaft aus dem [CSS 3 Backgrounds and Borders Draft](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftunterstützung](/de/docs/Web/CSS/Guides/Fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF-Download-Schriftdateiformat.
- [Pointer-Events](/de/docs/Web/CSS/Reference/Properties/pointer-events)
  - : Die {{cssxref("pointer-events")}} Eigenschaft ermöglicht es, anzugeben, ob ein Element Ziel von Mauszeigerereignissen sein kann oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) Längeneinheit wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabellentypen {{Cssxref("display")}} verwenden, funktionieren jetzt viel besser.
- Es wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} hinzugefügt, um es einfacher zu machen, Layouts basierend darauf anzupassen, ob die Benutzeroberfläche in einer Links-nach-Rechts- oder Rechts-nach-Links-Lokale angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudo-Klasse wurde hinzugefügt, die `checkbox` [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente auswählt, deren `indeterminate` Attribut `true` ist.
- Fenstergestützte Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht korrekt transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf vom Benutzer ausgewählte lokale Dateien zuzugreifen. Dies schließt die Unterstützung für die Auswahl mehrerer Dateien über das `input type="file"` HTML-Element mit dem neuen `multiple` Attribut ein.
- HTML5-Video unterstützt Posterrahmen
  - : Das `poster` Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video) Element unterstützt, sodass Inhalte einen Posterrahmen angeben können, der angezeigt wird, bis das Video beginnt zu spielen.
- Kontrollkästchen und Radio-Buttons unterstützen die `indeterminate` Eigenschaft
  - : HTML [`input`](/de/docs/Web/HTML/Reference/Elements/input) Elemente vom Typ `checkbox` und `radio` unterstützen jetzt die indeterminate Eigenschaft, die einen dritten, "unbestimmten" Zustand ermöglicht.
- Bildglättung auf Leinwand kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Festlegen des `async` Attributs auf einem [`script`](/de/docs/Web/HTML/Reference/Elements/script) Element blockiert das `script` nicht mehr das Laden oder die Anzeige des restlichen Seiteninhalts. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen wurde.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](https://web.archive.org/web/20210619182836/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601 Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web-Arbeiter können sich jetzt selbst beenden
  - : [Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()` Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das Drag-Listenern bereitgestellt wird, enthält jetzt eine Liste der Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem angegebenen CSS-Selektor entspricht
  - : Die neue [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches) Methode lässt Sie feststellen, ob ein Element einem angegebenen CSS-Selektor entspricht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- Erkennung von Änderungen in Dokumentenbreite und -höhe
  - : Das neue `MozScrollAreaChanged` Ereignis wird ausgelöst, wann immer sich die `scrollWidth` und/oder `scrollHeight` Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()` Methode wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Elemente im Web enthüllt hat. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Erkennung von Gecko verwendet; dies wurde in der neuesten Version von MooTools behoben, daher sollten Sie sicherstellen, dass Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) Eigenschaften auf DOM-Fenstern wurden hinzugefügt; sie geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsbereichs des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel` Attribut auf der `nsIDOMWindowUtils` Schnittstelle, nur für Chrome zugänglich, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirmpixeln; dieser Wert kann basierend auf dem Zoomlevel des Inhalts variieren.
- Wenn sich der Dokumentfragmentbezeichner (der Teil nach dem "#" (Rautezeichen) Charakter) der URI der Seite ändert, wird ein neues `hashchange` Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis für weitere Informationen. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList) für eine einfachere Handhabung des Klassenattributs. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) wandelt sein Argument nicht mehr in Kleinbuchstaben um, sodass ASCII-Großbuchstaben im Argument bei HTML-Elementen zu Fehlschlägen führen. Das gleiche gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in Geolokalisierung über die `nsIDOMGeoPositionAddress` Schnittstelle und ein neues Feld im `nsIDOMGeoPosition` wurde hinzugefügt.
- Die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) Funktion gibt jetzt Zitate innerhalb von `url()` Werten zurück.

### XPath

- Die choose() XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose) Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen könnten. Plug-in-Entwickler sollten [Aktualisieren von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, indem das [`MozOrientation`](/de/docs/Web/API/Screen/change_event) Ereignis verwendet wird. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachung von HTTP-Aktivitäten](https://web.archive.org/web/20210421090042/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Monitoring_HTTP_activity)
  - : Sie können HTTP-Transaktionen jetzt in Echtzeit überwachen, um Anfragen und Antworten zu beobachten.
- Arbeiten mit der Windows-Taskleiste
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste unter Windows 7 oder höher anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Places-Anfragen können nun das `redirectsMode` Attribut auf der `nsINavHistoryQueryOptions` Schnittstelle verwenden, um festzulegen, ob umgeleitete Seiten in die Ergebnisse einbezogen werden sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService` Schnittstelle hinzugefügt.

### Speicher

- [Locale-sensitives Vergleichen von Daten wird jetzt von der Storage API unterstützt](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage#collation_sorting)
  - : In Gecko 1.9.2 wurden mehrere neue Vergleichsmethoden hinzugefügt, um eine optimierte Sortierung der Ergebnisse mit localesensitiven Techniken zu ermöglichen.
- [Eigenschaften auf einer Anweisung können jetzt aufgezählt werden](https://web.archive.org/web/20210513165422/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Aufzählung verwenden, um alle Eigenschaften auf einer Anweisung aufzuzählen.
- Das Verhalten von mozIStorageStatement's getParameterIndex hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrones Binden mehrerer Parametersätze und Ausführen einer Anweisung.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Die `nsIContentPrefService` Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste von Änderungen im Zusammenhang mit Themes.

- [Lightweight-Themes](https://web.archive.org/web/20180617103446/https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt Lightweight-Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund auf die oberen (URL-Leiste und Schaltflächenleiste) und unteren (Statusleiste) Bereiche von Browserfenstern anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Thema-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieterkomponenten mehr, die im internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieterkomponenten ausgeführt werden. Entwickler, die auf diese Weise Komponenten installieren, müssen ihre Komponenten als XPI-Pakete [neu verpacken](https://web.archive.org/web/20170622232046/https://developer.mozilla.org/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird zur Registrierung von Chrome in Erweiterungen nicht mehr unterstützt. Sie müssen stattdessen die [`chrome.manifest`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) Datei verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role` Attribut zu Objekten hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Das `tabs-closebutton` Binding wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung hinzugefügt zu `nsISound` für das Abspielen von Sounds basierend auf Ereignissen, die aufgetreten sind. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView` Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung hinzugefügt, um den Mauscursor auf die Standardtaste eines Dialogs oder Assistenten unter Windows zu schnappen, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch durch das Dialog- und Assistenten-Element verarbeitet. Wenn eine XUL-Anwendung jedoch ein Fenster mit dem `window` Element erstellt und es eine Standardtaste hat, muss sie `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload` Ereignishandlers des Fensters aufrufen.
- Die `nsILocalFileMac` Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](https://web.archive.org/web/20210620035742/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfache zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestrom zu einem Ausgabestrom.
- Das neue [`openLocationLastURL.jsm`](https://web.archive.org/web/20210417025317/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Wertes des im Dialogfeld "Öffnen in..." gespeicherten URLs unter Berücksichtigung des privaten Modus.
- Unter Windows berichtet die `nsIScreen` Schnittstelle jetzt 24-Bit pro Pixel Farbtiefen, wenn der Grafiktreiber 32 Bits beansprucht, da 24 genauer die tatsächliche Anzahl der verwendeten Farb-Pixel darstellt.
- Menüs können auf Windows jetzt ausgeblendet werden, unter Verwendung des neuen [`autohide`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar#autohide) Attributs auf dem [`<xul:toolbar>`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar) XUL-Element.
- Die [`loadOneTab`](https://web.archive.org/web/20201210182023/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/loadOneTab) und [`addTab`](https://web.archive.org/web/20201208182934/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/addTab) Methoden akzeptieren jetzt ein neues `relatedToCurrent` Parameter und außerdem dürfen die Parameter nach Namen angegeben werden, da fast alle Parameter optional sind.
- Die "[verborgen](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#hidden)" Eigenschaft wird im Installationsmanifest nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Add-ons-Manager-Fenster sieht.
- Die `@mozilla.org/webshell;1` Komponente existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt beim Update-Timer-Kategorie registrieren, um Timerereignisse zu planen, ohne das Objekt zu instanziieren, das der Timer schließlich aufrufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPN_GetValue) Funktion stellt keinen Zugriff mehr auf XPCOM durch die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement`, und `NPNVDOMWindow` bereit. Dies ist Teil der Arbeit, um Plugins in einem zukünftigen Gecko separat auszuführen.
- Plugins sind nicht mehr durch XPCOM (IDL) Schnittstellen skriptfähig, [NPRuntime](https://web.archive.org/web/20211028124814/https://developer.mozilla.org/de/docs/Plugins/Guide/Scripting_plugins) ist die API, die zur Erstellung skriptfähiger Plugins verwendet wird, und [`NPP_GetValue()`](https://web.archive.org/web/20201023225330/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit, um Plugins in einem zukünftigen Gecko separat auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur dann wirklich interessant, wenn Sie an den internen Komponenten von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengelegt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` integriert.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2`, und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` integriert.
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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue Dateien verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Sonstige Schnittstellenänderungen

Die folgenden Änderungen wurden vorgenommen:

- Die `nsIPlugin` Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIPluginHost` Schnittstelle erbt jetzt von `nsISupports` statt von `nsIFactory`.
- Die `nsIFrame` Schnittstelle erbt jetzt von `nsQueryFrame` statt von `nsISupports`.
- Die `nsIDeviceContext` Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext` Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das [accessibility event](https://web.archive.org/web/20210516055347/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessibleEvent) `EVENT_REORDER` wird jetzt gesendet, wenn sich die Kinder von Frames und Iframes ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.
