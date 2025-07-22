---
title: Firefox 3.6 für Entwickler
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

[Firefox 3.6](https://www.firefox.com/en-US/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistungsfähigkeit und ein insgesamt besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Fähigkeiten von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 bietet Unterstützung für die vorgeschlagenen `-moz-linear-gradient` und `-moz-radial-gradient` Eigenschaften für {{Cssxref("background")}}.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht die Spezifikation mehrerer Hintergründe, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienfunktionen](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
  - : Es wurden Medienfunktionen für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sicherer auf die Verfügbarkeit von Funktionen wie Touch-Unterstützung prüfen können.
- [Skalieren von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders-Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftartunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF-Format für herunterladbare Schriftarten.
- [Pointer Events](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es, zu bestimmen, ob ein Element Ziel von Mauszeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die Längeneinheit [`rem`](/de/docs/Web/CSS/length#relative_length_units) wird jetzt unterstützt. [Firefox bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tabellen-{{Cssxref("display")}}-Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um die Anpassung von Layouts zu erleichtern, je nachdem, ob die Benutzeroberfläche in einer von links nach rechts oder von rechts nach links laufenden Sprache angezeigt wird. [Firefox bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}}-Pseudoklasse, die `checkbox`-`[input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente mit einem `indeterminate`-Attribut, das auf `true` gesetzt ist, auswählt.
- Plugins in Fenstern werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Compositor nicht richtig transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, sodass Webanwendungen auf lokale Dateien zugreifen können, die vom Benutzer ausgewählt wurden. Dies beinhaltet Unterstützung für die Auswahl mehrerer Dateien mit dem neuen `multiple`-Attribut des HTML-Elements `input type="file"`.
- HTML5-Video unterstützt Poster-Frames
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Element unterstützt, sodass Inhalte einen Poster-Frame angeben können, der angezeigt wird, bis das Video beginnt.
- Kontrollkästchen und Radiobuttons unterstützen die `indeterminate`-Eigenschaft
  - : HTML-[`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate-Eigenschaft, die einen dritten "indeterminate"-Zustand ermöglicht.
- Steuerung der Bildglättung auf der Leinwand
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior)-Eigenschaft kann verwendet werden, um die Glättung von Bildern beim Skalieren von [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elementen ein- oder auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Setzen des `async`-Attributs auf einem [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Element blockiert das `script` nicht das Laden oder Anzeigen des restlichen Seiteninhalts. Stattdessen wird das `script` sofort ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5-Standard](https://web.archive.org/web/20210619182836/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web-Arbeiter können jetzt selbstständig beendet werden
  - : [Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()`-Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das an Ziehen-Listener übergeben wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfung, ob ein Element einem angegebenen CSS-Selektor entspricht
  - : Die neue [`Node.mozMatchesSelector`](/de/docs/Web/API/Element/matches)-Methode ermöglicht zu bestimmen, ob ein Element einem angegebenen CSS-Selektor entspricht. Siehe [Firefox bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn ein unterstützter Beschleunigungssensor vorhanden ist, unter Verwendung des [`MozOrientation`](/de/docs/Web/API/Screen/change_event)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- Erkennung von Änderungen der Dokumentbreite und -höhe
  - : Das neue `MozScrollAreaChanged`-Ereignis wird ausgelöst, wann immer sich die `scrollWidth`-und/oder `scrollHeight`-Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()`-Methode wurde **entfernt**, da sie nicht standardisiert und noch mehr nicht standardisierte Elemente im Web offenlegte. Siehe [Firefox bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf zur Erkennung von Gecko verwendete; dies wurde in der neuesten Version von MooTools behoben, daher sollten Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX)- und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY)-Eigenschaften für DOM-Fenster wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Ansichtsfensters des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel`-Attribut auf der `nsIDOMWindowUtils`-Schnittstelle, die nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixel und Bildschirm-Pixel; dieser Wert kann je nach Zoomstufe des Inhalts variieren.
- Wenn sich das Dokument-Fragment-Identifikator (der Teil nach dem "#" (Hash)-Zeichen) der URI der Seite ändert, wird ein neues `hashchange`-Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis für weitere Informationen. [Firefox bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList) für einfachere Handhabung der Eigenschaftenklasse. [Firefox bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt genauso wie in XHTML-Dokumenten: `localName` wird in Kleinbuchstaben zurückgegeben und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) wandelt sein Argument nicht mehr in Kleinbuchstaben um, sodass Großbuchstaben im ASCII-Zeichensatz zu Fehlermeldungen bei Übereinstimmungen mit HTML-Elementen führen. Das Gleiche gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung wurde für Adressen in der Geolokalisierung über die `nsIDOMGeoPositionAddress`-Schnittstelle hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)-Funktion gibt jetzt Anführungszeichen in `url()`-Werten zurück.

### XPath

- Die choose() XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose)-Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit der Lektüre von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, was einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen können. Plug-in-Entwickler sollten [Aktualisieren von Plug-ins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn ein unterstützter Beschleunigungssensor vorhanden ist, unter Verwendung des [`MozOrientation`](/de/docs/Web/API/Screen/change_event)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- [Überwachung von HTTP-Aktivitäten](https://web.archive.org/web/20210421090042/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- Arbeiten mit der Windows-Taskleiste
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste unter Windows 7 oder höher anzupassen. _Dies wurde in Firefox 3.6 standardmäßig deaktiviert._

### Places

- Places-Abfragen können jetzt das `redirectsMode`-Attribut auf der `nsINavHistoryQueryOptions`-Schnittstelle verwenden, um anzugeben, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService`-Schnittstelle hinzugefügt.

### Speicher

- [Ortsbezogene Sortierung von Daten wird jetzt von der Storage-API unterstützt](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage#collation_sorting)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um optimierte Sortierungsergebnisse mit ortsbezogenen Techniken bereitzustellen.
- [Eigenschaften einer Anweisung können jetzt aufgezählt werden](https://web.archive.org/web/20210513165422/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Aufzählung verwenden, um alle Eigenschaften einer Anweisung aufzulisten.
- Das Verhalten von `mozIStorageStatement's getParameterIndex` hat sich zwischen den Versionen 3.5 und 3.6 geändert.
  - : Siehe [Firefox bug 528166](https://bugzil.la/528166) für Details.
- Mehrere Parametersätze asynchron binden und eine Anweisung ausführen.
  - : Siehe [Firefox bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Die `nsIContentPrefService`-Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste von Änderungen in Bezug auf Themes.

- [Leichtgewichtige Themes](https://web.archive.org/web/20180617103446/https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; diese sind einfach zu erstellen und wenden einen Hintergrund auf den oberen (URL-Leiste und Schaltflächenleiste) und unteren (Statusleiste) Bereich von Browserfenstern an. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/) Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Komponenten von Drittanbietern mehr, die im internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieter-Komponenten ausgeführt werden. Entwickler, die Komponenten auf diese Weise installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](https://web.archive.org/web/20170622232046/https://developer.mozilla.org/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr unterstützt, um Chrome in Erweiterungen zu registrieren. Sie müssen stattdessen die Datei [`chrome.manifest`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwenden. Siehe [Firefox bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Verstecken der Menüleiste wurde hinzugefügt. Siehe [Firefox bug 477256](https://bugzil.la/477256).
- Das Attribut `container-live-role` wurde für Objekte hinzugefügt. Siehe [Firefox bug 391829](https://bugzil.la/391829).
- Die Bindung `tabs-closebutton` wurde entfernt. Siehe [Firefox bug 500971](https://bugzil.la/500971).
- Unterstützung zu `nsISound` für das Abspielen von Tönen basierend auf aufgetretenen Ereignissen wurde hinzugefügt. Siehe [Firefox bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox bug 455590](https://bugzil.la/455590).
- Unterstützung zum Einrasten des Mauszeigers auf die Standardtaste von Dialogen oder Assistenten unter Windows wurde hinzugefügt, siehe [Firefox bug 76053](https://bugzil.la/76053). Dies wird automatisch von Dialog- und Assistentenelementen verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem `window`-Element erstellt und es eine Standardtaste hat, muss sie `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignishandlers des Fensters aufrufen.
- Die `nsILocalFileMac`-Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](https://web.archive.org/web/20210620035742/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/NetUtil.jsm)-Code-Modul bietet eine benutzerfreundliche Methode zum asynchronen Kopieren von Daten von einem Eingabestream zu einem Ausgabestream.
- Das neue [`openLocationLastURL.jsm`](https://web.archive.org/web/20210417025317/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/openLocationLastURL.jsm)-Code-Modul erleichtert das Lesen und Ändern des Werts des "Open Location"-Dialogfelds, während der private Browsing-Modus korrekt berücksichtigt wird.
- Unter Windows gibt die `nsIScreen`-Schnittstelle jetzt 24 Bit pro Pixel Farbtiefe an, wenn der Grafiktreiber 32 Bit angibt, da 24 die tatsächlich verwendete Anzahl an Farb-Pixel genauer darstellt.
- Menübalken können jetzt unter Windows ausgeblendet werden, mit dem neuen [`autohide`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar#autohide)-Attribut auf dem [`<xul:toolbar>`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/toolbar) XUL-Element.
- Die Methoden [`loadOneTab`](https://web.archive.org/web/20201210182023/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/loadOneTab) und [`addTab`](https://web.archive.org/web/20201208182934/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent`-Parameter und erlauben außerdem die Benennung der Parameter, da fast alle Parameter optional sind.
- Die "[hidden](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#hidden)"-Eigenschaft wird in Installationsmanifesten nicht mehr unterstützt; es ist nicht mehr möglich, den Benutzer daran zu hindern, Add-ons im Add-on-Manager-Fenster zu sehen.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der Update-Timer-Kategorie registrieren, um Timer-Ereignisse zu planen, ohne das Objekt instanzieren zu müssen, das der Timer schließlich aufrufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit, Plugins in einem zukünftigen Gecko-Release in separaten Prozessen laufen zu lassen.
- Plugins sind nicht mehr über XPCOM (IDL)-Schnittstellen skriptfähig, [NPRuntime](https://web.archive.org/web/20211028124814/https://developer.mozilla.org/de/docs/Plugins/Guide/Scripting_plugins) ist die API, die verwendet werden soll, um Plugins skriptfähig zu machen, und [`NPP_GetValue()`](https://web.archive.org/web/20201023225330/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit, Plugins in einem zukünftigen Gecko-Release in separaten Prozessen laufen zu lassen.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur wirklich interessant, wenn Sie an den internen Strukturen von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

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

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Verschobene Schnittstellen in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Andere Schnittstellenänderungen

Die folgenden verschiedenen Änderungen wurden vorgenommen:

- Die `nsIPlugin`-Schnittstelle erbt jetzt von `nsISupports` anstatt von `nsIFactory`.
- Die `nsIPluginHost`-Schnittstelle erbt jetzt von `nsISupports` anstatt von `nsIFactory`.
- Die `nsIFrame`-Schnittstelle erbt jetzt von `nsQueryFrame` anstatt von `nsISupports`.
- Die `nsIDeviceContext`-Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext`-Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Barrierefreiheitscode

- Das [Barrierefreiheitsereignis `EVENT_REORDER`](https://web.archive.org/web/20210516055347/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und IFrames ändern, sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jegliche aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.
