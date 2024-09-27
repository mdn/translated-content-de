---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöht die Leistung und bietet ein insgesamt besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 beschreiben.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt die Unterstützung für die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht es Ihnen, mehrere Hintergründe zu spezifizieren, die in Schichten übereinander gerendert werden.
- [Mozilla-spezifische Media-Features](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Media-Features wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um die Verfügbarkeit von Funktionen wie Touch-Unterstützung sicherer zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die Eigenschaft `background-size` aus dem [CSS 3 Backgrounds and Borders draft](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das herunterladbare Schriftdateiformat WOFF.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es Inhalten anzugeben, ob ein Element Ziel von Mauszeigereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die Längeneinheit [`rem`](/de/docs/Web/CSS/length#relative_length_units) aus [CSS3 Values and Units](https://www.w3.org/TR/css3-values/#lengths) wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Canvas unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabellen{{Cssxref("display")}}-Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um das Anpassen von Layouts basierend darauf zu erleichtern, ob die Benutzeroberfläche in einer links-nach-rechts- oder rechts-nach-links-Sprache angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}}-Pseudoklasse wurde hinzugefügt, die `checkbox`-[`input`](/de/docs/Web/HTML/Element/input)-Elemente erfüllt, deren `indeterminate`-Attribut `true` ist.
- Fenster-Plugins werden in CSS-Transformationen nicht mehr angezeigt, da sie vom Kompositor nicht richtig transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, wodurch es Webanwendungen möglich ist, lokale Dateien auszuwählen, die vom Benutzer ausgewählt wurden. Dies beinhaltet die Unterstützung für die Auswahl mehrerer Dateien mithilfe des neuen `multiple`-Attributs des HTML-Elements `input type="file"`.
- HTML5-Video unterstützt Posterframes
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Element/video)-Element unterstützt, sodass Inhalte ein Posterframe angeben können, das angezeigt wird, bis das Video abgespielt wird.
- Kontrollkästchen und Radiobuttons unterstützen die `indeterminate`-Eigenschaft
  - : HTML-`[`input`](/de/docs/Web/HTML/Element/input)`-Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate-Eigenschaft, die einen dritten "unklaren" Zustand ermöglicht.
- Canvas-Bildglättung kann gesteuert werden
  - : Die neue Eigenschaft [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Indem das `async`-Attribut auf einem [`script`](/de/docs/Web/HTML/Element/script)-Element gesetzt wird, blockiert das `script` nicht das Laden oder die Anzeige des restlichen Seiteninhalts. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen wurde.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Worker können sich jetzt selbst beenden
  - : [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die Methode `nsIWorkerScope.close()`, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das den Drag-Listenern zur Verfügung steht, enthält nun eine Liste von Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue Methode [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector) ermöglicht es, festzustellen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, mit dem [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignis. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Erkennung von Dokumentbreiten- und -höhenänderungen](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged`-Ereignis wird ausgelöst, wann immer sich die `scrollWidth`- und/oder `scrollHeight`-Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierten Kram im Web freilegte. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf für die Gecko-Erkennung nutzt; dies wurde in der neuesten Version von MooTools behoben, also unbedingt aktualisieren.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) für DOM-Fenster wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue Attribut `mozScreenPixelsPerCSSPixel` auf der `nsIDOMWindowUtils`-Schnittstelle, das nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn sich die Dokumentfragmentkennung (der Teil nach dem "#" (Hash)-Zeichen) der URI der Seite ändert, wird ein neues `hashchange`-Ereignis an die Seite gesendet. Weitere Informationen dazu finden Sie im [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5s [`element.classList`](/de/docs/Web/API/Element/classList), um den Umgang mit dem class-Attribut zu erleichtern. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` wird in Kleinbuchstaben zurückgegeben, und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) wandelt sein Argument nicht mehr in Kleinbuchstaben um, sodass Großbuchstaben im Argument dazu führen, dass Übereinstimmungen mit HTML-Elementen fehlschlagen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Standortbestimmung wurde über die `nsIDOMGeoPositionAddress`-Schnittstelle hinzugefügt, und ein neues Feld wurde zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt nun Anführungszeichen innerhalb von `url()`-Werten zurück.

### XPath

- Die choose()-XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XPath/Functions/choose)-Methode wird jetzt in unserer Implementierung von [XPath](/de/docs/Web/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisierung von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen könnten. Plug-In-Entwickler sollten den Leitfaden [Aktualisierung von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungsmesser verfügt, mit dem [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignis. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachung von HTTP-Aktivitäten](/de/docs/Monitoring_HTTP_activity)
  - : Sie können nun HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeit mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste unter Windows 7 oder höher anzupassen. _Diese Funktion ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Places-Abfragen können nun das Attribut `redirectsMode` auf der `nsINavHistoryQueryOptions`-Schnittstelle verwenden, um zu spezifizieren, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService`-Schnittstelle hinzugefügt.

### Storage

- [Sprachsensitive Sortierung von Daten wird nun von der Storage-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 fügte mehrere neue Sortiermethoden hinzu, um optimierte Sortierungsergebnisse unter Verwendung sprachsensitiver Techniken zu ermöglichen.
- [Eigenschaften auf einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Aufzählung verwenden, um alle Eigenschaften einer Anweisung aufzuzählen.
- Das Verhalten von mozIStorageStatement's getParameterIndex änderte sich zwischen 3.5 und 3.6.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrone Bindung mehrerer Parametersätze und Ausführung einer Anweisung.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Präferenzen

- Die `nsIContentPrefService`-Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisierung von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen in Bezug auf Themes.

- [Leichtgewichtige Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themen; diese sind einfach zu erstellen und wenden einen Hintergrund auf die obere (URL-Leiste und Schaltflächenleiste) und untere (Statusleiste) Bereich der Browserfenster an. Dies ist eine Integration der vorhandenen [Personas](https://addons.mozilla.org/en-US/firefox/themes/)-Themenarchitektur in Firefox.

### Verschiedenes

- Firefox läd keine Drittanbieter-Komponenten mehr, die in seinem internen Komponentenverzeichnis installiert sind. Dies trägt dazu bei, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieter-Komponenten ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird für die Registrierung von Chrome in Erweiterungen nicht mehr unterstützt. Sie müssen jetzt die Datei [`chrome.manifest`](/de/docs/Install_Manifests) verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste wurde hinzugefügt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das Attribut `container-live-role` für Objekte wurde hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton`-Bindung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung für das Abspielen von Sounds basierend auf Ereignissen, die aufgetreten sind, wurde zu `nsISound` hinzugefügt. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop-API, die in Gecko 1.9 eingeführt wurde, zu unterstützen. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung für das automatische Zentrieren des Mauszeigers auf die Standardschaltfläche eines Dialogs oder Assistenten unter Windows wurde hinzugefügt. Siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch durch das Dialog- und Assistentenelement verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mithilfe des `window`-Elements erstellt und es über eine Standardschaltfläche verfügt, muss `nsIDOMChromeWindow.notifyDefaultButtonLoaded` im `onload`-Ereignishandler des Fensters aufgerufen werden.
- Die `nsILocalFileMac`-Schnittstelle hat zwei Methoden verloren: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm)-Code-Modul bietet eine einfach zu verwendende Methode zum asynchronen Kopieren von Daten von einem Eingabestream zu einem Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm)-Code-Modul erleichtert das Lesen und Ändern des Werts der im Dialogfeld "Open Location" gespeicherten URL, während der private Modus berücksichtigt wird.
- Unter Windows meldet die `nsIScreen`-Schnittstelle jetzt 24-Bit pro Pixel Farbtiefe, wenn der Grafiktreiber 32 Bits beansprucht, da 24 die tatsächlich verwendete Anzahl von Farbpixel besser repräsentiert.
- Menüleisten können jetzt unter Windows ausgeblendet werden, durch das neue [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide)-Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar)-XUL-Element.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent`-Parameter und erlauben zusätzlich, die Parameter nach Namen zu spezifizieren, da fast alle Parameter optional sind.
- Die Eigenschaft "[hidden](/de/docs/Install_Manifests#hidden)" wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Fenster des Add-on-Managers sieht.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können jetzt mit der update-timer-Kategorie registrieren, um Timerereignisse zu planen, ohne das Objekt, das letztendlich vom Timer aufgerufen wird, instanziieren zu müssen; es wird stattdessen bei Bedarf instanziiert. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit, Plugins in einer zukünftigen Version von Gecko in separaten Prozessen auszuführen.
- Plugins sind nicht mehr über XPCOM (IDL)-Schnittstellen skriptfähig, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API, um Plugins skriptfähig zu machen, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit dem Wert `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit, Plugins in einer zukünftigen Version von Gecko in separaten Prozessen auszuführen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur wirklich interessant, wenn Sie an den internen Details von Firefox selbst arbeiten.

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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in ihrer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in ihrer eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Andere Schnittstellenänderungen

Die folgenden verschiedenen Änderungen wurden vorgenommen:

- Die Schnittstelle `nsIPlugin` erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die Schnittstelle `nsIPluginHost` erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die Schnittstelle `nsIFrame` erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die Methode `getPaletteInfo()` der `nsIDeviceContext` wurde entfernt, da sie nie implementiert wurde.
- Die Methode `reportPendingException()` der `nsIScriptContext` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das `EVENT_REORDER` [Accessibility-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Rahmen und iframes ändern, ebenso wie bei Änderungen der Hauptdokument-Kinder. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor sie die angegebene Zeile auswählt.

## Siehe auch

{{Firefox_for_developers}}
