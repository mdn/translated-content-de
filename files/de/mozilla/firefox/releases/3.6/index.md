---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/new/) bietet Unterstützung für neue und sich entwickelnde Webstandards, gesteigerte Leistung und ein insgesamt besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 abdecken.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 unterstützt die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}}.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht es, mehrere Hintergründe zu spezifizieren, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu überprüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird nun unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftart-Unterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF-Format für herunterladbare Schriftartdateien.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft ermöglicht es Inhalten zu definieren, ob ein Element Ziel von Mauszeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die Einheit [`rem`](/de/docs/Web/CSS/length#relative_length_units) wird nun unterstützt. [Firefox-Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox-Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox-Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die Tisch-{{Cssxref("display")}}-Typen verwenden, funktionieren jetzt viel besser.
- Hinzugefügt wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}, um es einfacher zu machen, Layouts anzupassen, je nachdem, ob die Benutzeroberfläche in einer von links nach rechts oder von rechts nach links lesbaren Sprache angezeigt wird. [Firefox-Bug 478416](https://bugzil.la/478416)
- Unterstützung der {{cssxref(":indeterminate")}}-Pseudoklasse hinzugefügt, die `checkbox`-[`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente abgleicht, deren `indeterminate`-Attribut `true` ist.
- Fensterbezogene Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie vom Kompositor nicht korrekt transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es Webanwendungen ermöglicht, auf lokale Dateien zuzugreifen, die vom Benutzer ausgewählt wurden. Dies beinhaltet die Unterstützung, mehrere Dateien mit dem neuen `multiple`-Attribut des `input type="file"` HTML-Elements auszuwählen.
- HTML5-Video unterstützt Posterframes
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Element unterstützt, sodass Inhalte ein Posterframe spezifizieren können, das angezeigt wird, bis das Video zu spielen beginnt.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate`-Eigenschaft
  - : HTML-[`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente des Typs `checkbox` und `radio` unterstützen jetzt die indeterminierte Eigenschaft, die einen dritten, „unbestimmten“ Zustand ermöglicht.
- Bildglättung auf dem Canvas kann gesteuert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior)-Eigenschaft kann verwendet werden, um Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch das Setzen des `async`-Attributs bei einem [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Element wird das `script` den Ladevorgang oder die Anzeige der restlichen Seite nicht blockieren. Stattdessen wird das `script` ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das mehrere Sprachmerkmale des [ECMAScript 5 Standards](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann nun ISO 8601-Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Worker können sich nun selbst beenden
  - : [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()`-Methode, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste der Dateien, die gezogen wurden.
- Überprüfung, ob ein Element einem spezifizierten CSS-Selektor entspricht
  - : Die neue [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector)-Methode ermöglicht es, zu bestimmen, ob ein Element einem spezifizierten CSS-Selektor entspricht oder nicht. Siehe [Firefox-Bug 518003](https://bugzil.la/518003).
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über ein unterstütztes Beschleunigungsmesser verfügt, mithilfe des [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Erkennung von Änderungen der Dokumentbreite und -höhe](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged`-Ereignis wird ausgelöst, wann immer sich die `scrollWidth`- und/oder `scrollHeight`-Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die `getBoxObjectFor()`-Methode wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Sachen im Web offenlegte. Siehe [Firefox-Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf für die Gecko-Erkennung verwendet; dies wurde in der neuesten MooTools-Version behoben, also stellen Sie sicher, dass Sie aktualisieren.
- Die neuen [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY)-Eigenschaften auf DOM-Fenstern wurden hinzugefügt; diese liefern die Bildschirmkoordinaten der linken oberen Ecke des Fensterausschnitts.
- Das neue `mozScreenPixelsPerCSSPixel`-Attribut auf der `nsIDOMWindowUtils`-Schnittstelle, die nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixel und Bildschirm-Pixel; dieser Wert kann sich je nach Zoomfaktor des Inhalts ändern.
- Wenn sich der Dokumentfragment-Identifikator der URI der Seite (der Teil nach dem "#" (Hash)-Zeichen) ändert, wird ein neues `hashchange`-Ereignis an die Seite gesendet. Weitere Informationen finden Sie im [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis. [Firefox-Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox-Bug 347174](https://bugzil.la/347174)
- Unterstützung für das HTML5-[`element.classList`](/de/docs/Web/API/Element/classList), um eine einfachere Handhabung des class-Attributs zu ermöglichen. [Firefox-Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) kleinschreibt jetzt nicht mehr sein Argument, daher führen Großbuchstaben-ASCII-Zeichen im Argument dazu, dass Übereinstimmungen bei HTML-Elementen fehlschlagen. Gleiches gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung wurde für Adressen in der Geolokalisierung über die `nsIDOMGeoPositionAddress`-Schnittstelle hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` hinzugefügt.
- Die Funktion [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) gibt nun Anführungszeichen innerhalb von `url()`-Werten zurück.

### XPath

- Die choose()-XPath-Methode wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose)-Methode wird jetzt von unserer Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick über die Änderungen bietet, die Ihre Erweiterung betreffen könnten. Plugin-Entwickler sollten [Aktualisieren von Plugins für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über ein unterstütztes Beschleunigungsmesser verfügt, mithilfe des [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungsmesser in Mac-Laptops.
- [Überwachung der HTTP-Aktivität](/de/docs/Monitoring_HTTP_activity)
  - : Sie können nun HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist nun möglich, das Erscheinungsbild von Fenstern in der Taskleiste in Windows 7 oder später anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Places-Abfragen können jetzt das `redirectsMode`-Attribut auf der `nsINavHistoryQueryOptions`-Schnittstelle verwenden, um zu spezifizieren, ob umgeleitete Seiten in die Ergebnisse einbezogen werden sollen oder nicht.
- Hinzugefügt wurde die neue `nsIFaviconService.expireAllFavicons()`-Methode zur `nsIFaviconService`-Schnittstelle.

### Storage

- [Lokale Sortierung von Daten wird jetzt durch die Storage-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 hat mehrere neue Sortiermethoden hinzugefügt, um optimierte Sortierungen von Ergebnissen mit lokalisierten Techniken anzubieten.
- [Eigenschaften auf einer Anweisung können nun aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können nun eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Aufzählung verwenden, um alle Eigenschaften einer Anweisung aufzulisten.
- Das Verhalten von getParameterIndex bei mozIStorageStatement hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox-Bug 528166](https://bugzil.la/528166) für Einzelheiten.
- Asynchrones Binden mehrerer Parametersätze und Ausführen einer Anweisung.
  - : Siehe [Firefox-Bug 490085](https://bugzil.la/490085) für Einzelheiten. Dokumentation folgt bald.

### Präferenzen

- Die `nsIContentPrefService`-Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Aktualisieren von Themes für Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste der Änderungen in Bezug auf Themes.

- [Leichtgewichtige Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichtgewichtige Themes; das sind einfach zu erstellende Themes, die einen Hintergrund auf die obere (Adressleiste und Schaltflächenleiste) und untere (Statusleiste) Bereiche der Browserfenster anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/)-Theme-Architektur in Firefox.

### Verschiedenes

- Firefox lädt keine Drittanbieter-Komponenten mehr, die in seinem internen Komponentenverzeichnis installiert sind. Dies hilft, die Stabilität zu gewährleisten, indem verhindert wird, dass fehlerhafte Drittanbieter-Komponenten ausgeführt werden. Entwickler, die ihre Komponenten so installieren, müssen ihre Komponenten als XPI-Pakete [neu verpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr für die Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen nun die [`chrome.manifest`](/de/docs/Install_Manifests)-Datei anstelle dessen verwenden. Siehe [Firefox-Bug 492008](https://bugzil.la/492008).
- Unterstützung für das automatische Ausblenden der Menüleiste hinzugefügt. Siehe [Firefox-Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role`-Attribut zu Objekten hinzugefügt. Siehe [Firefox-Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton`-Bindung wurde entfernt. Siehe [Firefox-Bug 500971](https://bugzil.la/500971).
- Unterstützung für `nsISound` hinzugefügt, um Töne basierend auf aufgetretenen Ereignissen abzuspielen. Siehe [Firefox-Bug 502799](https://bugzil.la/502799).
- Die Syntax der `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` wurde geändert, um die neue Drag & Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox-Bug 455590](https://bugzil.la/455590).
- Unterstützung für das Einrasten des Mauszeigers auf die Standard-Schaltfläche eines Dialogs oder Assistenten unter Windows hinzugefügt, siehe [Firefox-Bug 76053](https://bugzil.la/76053). Dies wird automatisch von Dialog- und Assistenten-Elementen verarbeitet. Aber wenn eine XUL-Anwendung ein Fenster mit dem `window`-Element erstellt und es eine Standard-Schaltfläche hat, muss es `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignishandlers des Fensters aufrufen.
- Die Schnittstelle `nsILocalFileMac` hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine einfache Möglichkeit, Daten asynchron von einem Eingabestrom in einen Ausgabestrom zu kopieren.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul macht es einfach, den Wert der „Öffne Standort“-Dialogbox für die Erinnerte-URL zu lesen und zu ändern, während der private Browsing-Modus ordnungsgemäß berücksichtigt wird.
- Unter Windows meldet die Schnittstelle `nsIScreen` jetzt 24-Bit pro Pixel Farbtiefen, wenn der Grafiktreiber 32 Bit beansprucht, da 24 genauer die tatsächlich verwendete Anzahl von Farb-Pixeln darstellt.
- Menüleisten können jetzt unter Windows ausgeblendet werden, indem das neue [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide)-Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL-Element verwendet wird.
- Die Methoden [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab) und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab) akzeptieren jetzt einen neuen `relatedToCurrent`-Parameter und erlauben zudem, die Parameter nach Namen zu spezifizieren, da nahezu alle Parameter optional sind.
- Die Eigenschaft "[hidden](/de/docs/Install_Manifests#hidden)" wird in Installationsmanifests nicht mehr unterstützt; es ist nicht mehr möglich, dem Benutzer anzuzeigen, welche Add-ons im Add-on-Manager-Fenster vorhanden sind.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` verwenden.
- Sie können sich jetzt bei der update-timer-Kategorie registrieren, um Timer-Ereignisse zu planen, ohne dass das Objekt instanziiert werden muss, das der Timer schließlich aufruft; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Einzelheiten.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die variablen Werte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit daran, Plugins in einem zukünftigen Gecko-Version in separaten Prozessen auszuführen.
- Plugins sind nicht mehr über XPCOM (IDL)-Schnittstellen skriptfähig. [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API, die für die Skriptfähigkeit von Plugins verwendet wird und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit den Werten `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit daran, Plugins in einem zukünftigen Gecko-Version in separaten Prozessen auszuführen.

## Für Firefox/Gecko-Entwickler

Einige Änderungen sind nur interessant, wenn Sie an den Interna von Firefox selbst arbeiten.

### Schnittstellen zusammengeführt

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` integriert.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` integriert.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` integriert.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` zusammengeführt.

### Schnittstellen entfernt

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

### Schnittstellen verschoben

Die folgenden Schnittstellen wurden von ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in einer eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in einer eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Siehe [Schnittstellen verschoben in Firefox 3.6](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) für eine vollständige Liste.

### Andere Schnittstellenänderungen

Die folgenden verschiedenen Änderungen wurden vorgenommen:

- Die `nsIPlugin`-Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIPluginHost`-Schnittstelle erbt jetzt von `nsISupports` anstelle von `nsIFactory`.
- Die `nsIFrame`-Schnittstelle erbt jetzt von `nsQueryFrame` anstelle von `nsISupports`.
- Die Methode `getPaletteInfo()` der `nsIDeviceContext` wurde entfernt, da sie nie implementiert wurde.
- Die Methode `reportPendingException()` der `nsIScriptContext` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Barrierefreiheitscode

- Das `EVENT_REORDER`- [Barrierefreiheitsevent](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird jetzt gesendet, wenn sich die Kinder von Frames und Iframes ändern sowie wenn sich die Kinder des Hauptdokuments ändern. Siehe [Firefox-Bug 420845](https://bugzil.la/420845).
- Die `nsIAccessibleTable.selectRow()` entfernt jetzt korrekt jede aktuelle Auswahl, bevor die angegebene Zeile ausgewählt wird.

## Siehe auch

{{Firefox_for_developers}}
