---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/new/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und insgesamt ein besseres Erlebnis für Webnutzer und Entwickler. Diese Seite bietet Links zu Artikeln über die neuen Fähigkeiten von Firefox 3.6.

## Für Website- und Anwendungsentwickler

### CSS

- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (ebenso wie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, und {{Cssxref("background-attachment")}}) unterstützt jetzt mehrere Hintergründe. Dies ermöglicht das Festlegen mehrerer Hintergründe, die übereinander in Schichten gerendert werden.
- [Mozilla-spezifische Medienmerkmale](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Es wurden Medienmerkmale für Mozilla-spezifische Systemmetriken hinzugefügt, sodass [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden können, um sicherer die Verfügbarkeit von Funktionen wie Touch-Unterstützung zu prüfen.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die `background-size`-Eigenschaft aus dem [CSS 3 Backgrounds and Borders Entwurf](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftartunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das herunterladbare Schriftdateiformat WOFF.
- [Zeigerereignisse](/de/docs/Web/CSS/pointer-events)
  - : Die {{cssxref("pointer-events")}}-Eigenschaft erlaubt es, anzugeben, ob ein Element das Ziel von Mauszeigerereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units) Längeneinheit wird jetzt unterstützt. [Firefox Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Leinwände unterstützt. [Firefox Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die den Tabellen-{{Cssxref("display")}}-Typen verwenden, funktionieren jetzt viel besser.
- Es wurden {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} hinzugefügt, um es einfacher zu machen, Layouts zu gestalten, je nachdem, ob die Benutzeroberfläche in einer von links nach rechts oder von rechts nach links gerichteten Sprache angezeigt wird. [Firefox Bug 478416](https://bugzil.la/478416)
- Unterstützung für die {{cssxref(":indeterminate")}} Pseudo-Klasse hinzugefügt, die `checkbox`-[`input`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente mit `true`-Status des `indeterminate`-Attributs auswählt.
- Fensterbasierte Plugins werden nicht mehr in CSS-Transformationen angezeigt, da sie nicht ordnungsgemäß vom Kompositor transformiert werden können.

### HTML

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde zu Gecko hinzugefügt, was es ermöglicht, dass Webanwendungen auf lokale vom Benutzer ausgewählte Dateien zugreifen können. Dies umfasst die Unterstützung für die Auswahl mehrerer Dateien mithilfe des neuen `multiple`-Attributs des `input type="file"` HTML-Elements.
- HTML5-Video unterstützt Vorschaubilder
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Element unterstützt und ermöglicht es, ein Vorschaubild anzugeben, das angezeigt wird, bis das Video zu spielen beginnt.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate`-Eigenschaft
  - : HTML-Elemente [`input`](/de/docs/Web/HTML/Reference/Elements/input) der Typen `checkbox` und `radio` unterstützen jetzt die indeterminate-Eigenschaft, die einen dritten, "unbestimmten" Zustand erlaubt.
- Bildglättung auf Leinwänden kann kontrolliert werden
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior)-Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch Setzen des `async`-Attributs auf ein [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Element wird das Skript die Ladezeit oder Anzeige des restlichen Dokuments nicht blockieren. Stattdessen wird das Skript ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das eine Reihe von Sprachfunktionen aus dem [ECMAScript 5 Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO 8601-Daten wie YYYY-MM-DD analysieren.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Worker können sich jetzt selbst beenden
  - : [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die `nsIWorkerScope.close()`-Methode, die es ihnen erlaubt, sich selbst zu beenden.
- Drag-and-Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das an Drag-Listener bereitgestellt wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue Methode [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector) ermöglicht es festzustellen, ob ein Element einem bestimmten CSS-Selektor entspricht. Siehe [Firefox Bug 518003](https://bugzil.la/518003).
- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungssensor verfügt, unter Verwendung des [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- [Erkennen von Dokumentbreiten- und -höhenveränderungen](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue `MozScrollAreaChanged`-Ereignis wird ausgelöst, wann immer sich die `scrollWidth`-und/oder `scrollHeight`-Eigenschaften des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert war und noch mehr nicht standardisierte Dinge dem Web preisgab. Siehe [Firefox Bug 340571](https://bugzil.la/340571). Dies betrifft auch [MooTools](https://mootools.net/), das diesen Aufruf für die Gecko-Erkennung verwendet; dies wurde in der neuesten Version von MooTools behoben, also aktualisieren Sie die Version.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) auf DOM-Fenstern wurden hinzugefügt; sie geben die Bildschirmkoordinaten der linken oberen Ecke des Anzeigebereichs des Fensters zurück.
- Das neue `mozScreenPixelsPerCSSPixel`-Attribut auf der `nsIDOMWindowUtils`-Schnittstelle, das nur für Chrome zugänglich ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann sich abhängig vom Zoomlevel des Inhalts ändern.
- Wenn sich der Dokumentfragment-Identifier des URI der Seite (der Teil nach dem "#" (Hash)-Zeichen) ändert, wird ein neues `hashchange`-Ereignis an die Seite gesendet. Weitere Informationen finden Sie im [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis. [Firefox Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5's [`element.classList`](/de/docs/Web/API/Element/classList) zum einfacheren Umgang mit dem class-Attribut. [Firefox Bug 501257](https://bugzil.la/501257)
- `localName` und `namespaceURI` in HTML-Dokumenten verhalten sich jetzt wie in XHTML-Dokumenten: `localName` gibt in Kleinbuchstaben zurück und `namespaceURI` für HTML-Elemente ist `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) kleinschreibt sein Argument nicht mehr, sodass Großbuchstaben im ASCII-Bereich beim Argument dazu führen, dass Übereinstimmungen gegen HTML-Elemente fehlschlagen. Dasselbe gilt für [`document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS).
- Unterstützung für Adressen in der Standortbestimmung wurde über die `nsIDOMGeoPositionAddress`-Schnittstelle hinzugefügt und ein neues Feld zu `nsIDOMGeoPosition` ergänzt.
- Die [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)-Funktion gibt jetzt Anführungszeichen innerhalb von `url()`-Werten zurück.

### XPath

- Die Methode choose() von XPath wird jetzt unterstützt
  - : Die [`choose()`](/de/docs/Web/XML/XPath/Reference/Functions/choose)-Methode wird jetzt durch unsere Implementierung von [XPath](/de/docs/Web/XML/XPath) unterstützt.

## Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen auf Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) beginnen, das einen hilfreichen Überblick über die Änderungen bietet, die Ihre Erweiterung betreffen könnten. Plug-in-Entwickler sollten [Plug-ins für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) lesen.

### Neue Funktionen

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können nun die Ausrichtung des Geräts erkennen, wenn es über einen unterstützten Beschleunigungssensor verfügt, unter Verwendung des [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- [Überwachen von HTTP-Aktivitäten](/de/docs/Monitoring_HTTP_activity)
  - : Sie können jetzt HTTP-Transaktionen überwachen, um Anfragen und Antworten in Echtzeit zu beobachten.
- [Arbeiten mit der Windows-Taskleiste](/de/docs/Working_with_the_Windows_taskbar)
  - : Es ist jetzt möglich, das Erscheinungsbild von Fenstern in der Taskleiste in Windows 7 oder später anzupassen. _Dies ist standardmäßig in Firefox 3.6 deaktiviert._

### Places

- Abfrageanfragen können jetzt das `redirectsMode`-Attribut auf der `nsINavHistoryQueryOptions`-Schnittstelle verwenden, um festzulegen, ob umgeleitete Seiten in den Ergebnissen enthalten sein sollen oder nicht.
- Die neue Methode `nsIFaviconService.expireAllFavicons()` wurde zur `nsIFaviconService`-Schnittstelle hinzugefügt.

### Speicher

- [Lokalebewusste Sortierung von Daten wird jetzt von der Speicher-API unterstützt](</de/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 hat mehrere neue Sortierungsmethoden hinzugefügt, um eine optimierte Sortierung von Ergebnissen mit lokalebewussten Techniken zu ermöglichen.
- [Eigenschaften auf einer Anweisung können jetzt aufgezählt werden](/de/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : Sie können jetzt eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Aufzählung verwenden, um alle Eigenschaften auf einer Anweisung aufzulisten.
- Das Verhalten von mozIStorageStatement's getParameterIndex hat sich zwischen 3.5 und 3.6 geändert.
  - : Siehe [Firefox Bug 528166](https://bugzil.la/528166) für Details.
- Asynchrone Bindung mehrerer Satzparameter und Ausführung einer Anweisung.
  - : Siehe [Firefox Bug 490085](https://bugzil.la/490085) für Details. Dokumentation folgt in Kürze.

### Einstellungen

- Die `nsIContentPrefService`-Schnittstelle hat zwei neue Methoden: `nsIContentPrefService.getPrefsByName()` und `nsIContentPrefService.removePrefsByName()`.

### Themes

Siehe [Themes für Firefox 3.6 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) für eine Liste von Änderungen in Bezug auf Themes.

- [Leichte Themes](/de/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 unterstützt leichte Themes; dies sind einfach zu erstellende Themes, die einen Hintergrund auf die oberen (URL-Leiste und Schaltflächenleiste) und unteren (Statusleiste) Bereiche des Browserfensters anwenden. Dies ist eine Integration der bestehenden [Personas](https://addons.mozilla.org/en-US/firefox/themes/)-Theme-Architektur in Firefox.

### Verschiedenes

- Firefox wird keine Drittanbieterkomponenten mehr laden, die in seinem internen Komponentenverzeichnis installiert sind. Dies trägt zur Stabilität bei, indem das Ausführen fehlerhafter Drittanbieterkomponenten verhindert wird. Entwickler, die auf diese Weise Komponenten installieren, müssen [ihre Komponenten als XPI-Pakete neu verpacken](/de/docs/Migrating_raw_components_to_add-ons), damit sie als Standard-Add-ons installiert werden können.
- `contents.rdf` wird nicht mehr für die Registrierung von Chrome in Erweiterungen unterstützt. Sie müssen nun die [`chrome.manifest`](/de/docs/Install_Manifests) Datei anstelle verwenden. Siehe [Firefox Bug 492008](https://bugzil.la/492008).
- Automatisches Ausblenden der Menüleiste unterstützt. Siehe [Firefox Bug 477256](https://bugzil.la/477256).
- Unterstützung für das `container-live-role`-Attribut zu Objekten hinzugefügt. Siehe [Firefox Bug 391829](https://bugzil.la/391829).
- Die `tabs-closebutton`-Verknüpfung wurde entfernt. Siehe [Firefox Bug 500971](https://bugzil.la/500971).
- Unterstützung für die Wiedergabe von Sounds basierend auf Ereignissen, die aufgetreten sind, zu `nsISound` hinzugefügt. Siehe [Firefox Bug 502799](https://bugzil.la/502799).
- Die Syntax für die `nsITreeView`-Methoden `nsITreeView.canDrop()` und `nsITreeView.drop()` hat sich geändert, um die neue Drag-and-Drop-API zu unterstützen, die in Gecko 1.9 eingeführt wurde. Siehe [Firefox Bug 455590](https://bugzil.la/455590).
- Unterstützung hinzugefügt, um den Mauszeiger auf die Standardschaltfläche eines Dialogs oder Assistenten unter Windows zu schnappen, siehe [Firefox Bug 76053](https://bugzil.la/76053). Dies wird automatisch durch Dialog- und Assistent-Elemente verarbeitet. Wenn jedoch eine XUL-Anwendung ein Fenster mit dem `window`-Element erstellt und es eine Standardschaltfläche gibt, muss es `nsIDOMChromeWindow.notifyDefaultButtonLoaded` während des `onload`-Ereignishandlers des Fensters aufrufen.
- Die `nsILocalFileMac`-Schnittstelle hat zwei Methoden entfernt: `setFileTypeAndCreatorFromMIMEType()` und `setFileTypeAndCreatorFromExtension()`.
- Das neue [`NetUtils.jsm`](/de/docs/JavaScript_code_modules/NetUtil.jsm) Code-Modul bietet eine benutzerfreundliche Methode zum asynchronen Kopieren von Daten von einem Eingabestrom in einen Ausgabestrom.
- Das neue [`openLocationLastURL.jsm`](/de/docs/JavaScript_code_modules/openLocationLastURL.jsm) Code-Modul erleichtert das Lesen und Ändern des Werts der in der Box "Ort öffnen" gespeicherten URL, während der Privatmodus berücksichtigt wird.
- Unter Windows gibt die `nsIScreen`-Schnittstelle jetzt Farbtiefen von 24 Bits pro Pixel an, wenn der Grafiktreiber 32 Bits angibt, da 24 genauer die tatsächliche Anzahl verwendeter Farb-Pixel darstellt.
- Mit den neuen [`autohide`](/de/docs/Mozilla/Tech/XUL/Attribute/autohide)-Attribut auf dem [`<xul:toolbar>`](/de/docs/Mozilla/Tech/XUL/toolbar) XUL-Element können Menüleisten jetzt unter Windows ausgeblendet werden.
- Die [`loadOneTab`](/de/docs/Mozilla/Tech/XUL/Method/loadOneTab)- und [`addTab`](/de/docs/Mozilla/Tech/XUL/Method/addTab)-Methoden akzeptieren jetzt einen neuen `relatedToCurrent`-Parameter und erlauben zusätzlich, dass die Parameter nach Namen angegeben werden, da nahezu alle Parameter optionale sind.
- Die "[hidden](/de/docs/Install_Manifests#hidden)"-Eigenschaft wird in Installations-Manifesten nicht mehr unterstützt; es ist nicht mehr möglich, zu verhindern, dass der Benutzer Add-ons im Fenster des Add-on-Managers sieht.
- Die Komponente `@mozilla.org/webshell;1` existiert nicht mehr; Sie müssen `@mozilla.org/docshell;1` stattdessen verwenden.
- Sie können sich jetzt bei der Aktualisierungs-Timer-Kategorie registrieren, um Timer-Ereignisse zu planen, ohne das Objekt instanziieren zu müssen, das der Timer letztendlich aufrufen wird; es wird stattdessen instanziiert, wenn es benötigt wird. Siehe `nsIUpdateTimerManager.registerTimer()` für Details.
- Die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) bietet keinen Zugriff mehr auf XPCOM über die Variablenwerte `NPNVserviceManager`, `NPNVDOMelement` und `NPNVDOMWindow`. Dies ist Teil der Arbeit in Richtung einer zukünftigen Version von Gecko, in der Plugins in separaten Prozessen ausgeführt werden.
- Plugins sind nicht mehr skriptfähig über XPCOM (IDL)-Schnittstellen, [NPRuntime](/de/docs/Gecko_Plugin_API_Reference/Scripting_plugins) ist die API, die verwendet werden muss, um Plugins skriptfähig zu machen, und [`NPP_GetValue()`](/de/docs/NPP_GetValue) wird nicht mehr mit dem Wert `NPPVpluginScriptableInstance` oder `NPPVpluginScriptableIID` aufgerufen. Dies ist Teil der Arbeit in Richtung einer zukünftigen Version von Gecko, in der Plugins in separaten Prozessen ausgeführt werden.

## Für Firefox/Gecko-Entwickler

Bestimmte Änderungen sind nur wirklich interessant, wenn Sie an den internen Abläufen von Firefox selbst arbeiten.

### Zusammengeführte Schnittstellen

Die folgenden Schnittstellen wurden zusammengeführt:

- `nsIPluginTagInfo2` wurde in `nsIPluginTagInfo` integriert.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` und `nsIPluginInstancePeer3` wurden alle in `nsIPluginInstance` integriert.
- `nsIWindowlessPlugInstPeer` wurde in `nsIPluginInstance` integriert.
- `nsIPluginManager` und `nsIPluginManager2` wurden in `nsIPluginHost` integriert.

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

Die folgenden Schnittstellen wurden aus ihren vorherigen IDL-Dateien in neue verschoben:

- `nsIDOMNSCSS2Properties` befindet sich jetzt in seiner eigenen IDL-Datei (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` befindet sich jetzt in seiner eigenen IDL-Datei.

Eine große Anzahl von Schnittstellen wurde verschoben. Eine vollständige Liste finden Sie unter [In Firefox 3.6 verschobene Schnittstellen](/de/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved).

### Weitere Schnittstellenänderungen

Die folgenden Änderungen wurden gemacht:

- Die `nsIPlugin`-Schnittstelle erbt nun von `nsISupports` statt `nsIFactory`.
- Die `nsIPluginHost`-Schnittstelle erbt nun von `nsISupports` statt `nsIFactory`.
- Die `nsIFrame`-Schnittstelle erbt nun von `nsQueryFrame` statt `nsISupports`.
- Die `nsIDeviceContext`-Methode `getPaletteInfo()` wurde entfernt, da sie nie implementiert wurde.
- Die `nsIScriptContext`-Methode `reportPendingException()` wurde entfernt, da sie nicht mehr verwendet wurde.

### Änderungen im Accessibility-Code

- Das `EVENT_REORDER` [Accessibility-Ereignis](/de/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) wird nun gesendet, wenn sich die Kinder von Frames und iframes ändern, sowie wenn sich die Hauptdokument-Kinder ändern. Siehe [Firefox Bug 420845](https://bugzil.la/420845).
- Die Methode `nsIAccessibleTable.selectRow()` entfernt nun korrekt jede bestehende Auswahl, bevor die angegebene Zeile ausgewählt wird.

## Siehe auch

{{Firefox_for_developers}}
