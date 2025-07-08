---
title: Firefox 7 für Entwickler
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen, die Entwickler betreffen – sowohl von Web-Inhalten als auch von Firefox-Add-ons.

## Änderungen für Web-Entwickler

### HTML

- Die [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) `profile` Eigenschaft wurde entfernt, diese Eigenschaft war seit Gecko 2.0 veraltet.
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `x` und `y` Eigenschaften wurden entfernt.
- Der `before` Parameter der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `add()` Methode ist jetzt optional.
- Das {{ HTMLElement("body") }} Element-Attribut [`background`](/de/docs/Web/HTML/Reference/Elements/body#background) wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das {{ HTMLElement("option") }} Element-Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) spiegelt nun den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung des 2D-Canvas erheblich verbessern.
- Das Angeben ungültiger Werte bei Aufrufen von `setTransform()`, `bezierCurveTo()` oder `arcTo()` löst keine Ausnahme mehr aus; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) Methode berücksichtigt jetzt korrekt die Transformationsmatrix, wenn der angegebene Punkt mit dem aktuellen Pfad verglichen wird.
- Der Aufruf von `strokeRect()` mit einer Breite und Höhe von null führt jetzt korrekt zu keiner Aktion.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit einer Breite oder Höhe von null für {{ HTMLElement("canvas") }} löst jetzt `INVALID_STATE_ERR` aus.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit nicht-endlichen Koordinaten löst keine Ausnahme mehr aus.
- Die `toDataURL()` Methode akzeptiert jetzt ein zweites Argument, um die JPEG-Qualität zu steuern.
- Die Unterstützung für die nicht-standardmäßigen `globalCompositeOperation` Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur noch für `source-over` Kompositionsoperationen gezeichnet.
- Sie können jetzt die Füllregel konfigurieren, die von Canvas verwendet wird, indem Sie das `mozFillRule` Attribut im Kontext festlegen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Die Unterstützung für die nicht-standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird jetzt unterstützt.
- Die Eigenschaft {{ cssxref("-moz-orient", "-moz-orient") }} wurde so angepasst, dass {{ HTMLElement("progress") }} Elemente, die vertikal orientiert sind, passende Standardabmessungen haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3 `href` Attribut wird jetzt unterstützt. Entwickler werden ermutigt, zur letzteren Syntax zu wechseln.
- Die Unterstützung für das `voffset` Attribut bei {{ MathMLElement("mpadded") }} Elementen wurde hinzugefügt und das Verhalten des `lspace` Attributs wurde korrigiert.
- Das oberste {{ MathMLElement("math") }} Element akzeptiert jetzt alle Attribute des {{ MathMLElement("mstyle") }} Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/) Schriftarten wurde hinzugefügt.
- Die `medium` Linienstärke von Bruchbalken in {{ MathMLElement("mfrac") }} Elementen wurde auf die Standarddicke korrigiert.
- [Namen für negative Leerzeichen](/de/docs/Web/MathML/Reference/Values#constants) werden jetzt unterstützt.

### DOM

- Die standardunmäßigen Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` der [`File`](/de/docs/Web/API/File) Schnittstelle sowie die nicht-standardmäßigen Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox Fehler 661876](https://bugzil.la/661876)).
- Die [`FormData`](/de/docs/Web/API/FormData) Schnittstelle meldet den Dateinamen nicht mehr als leeren String, wenn der `Content-Disposition` HTTP-Header gesendet wird, falls die Daten mit einem [`Blob`](/de/docs/Web/API/Blob) gesetzt wurden. Dies behebt Fehler, die bei einigen Servern auftraten.
- Die [`HTMLelement.dir`](/de/docs/Web/API/HTMLElement/dir) Eigenschaft gibt ihr Ergebnis jetzt immer in Kleinbuchstaben zurück, wie in der HTML-Spezifikation gefordert.
- Die Methode `readAsArrayBuffer()` des [`FileReader`](/de/docs/Web/API/FileReader) ist jetzt implementiert.
- `Document.createEntityReference` wurde entfernt. Es wurde nie richtig implementiert und wird in den meisten anderen Browsern nicht unterstützt.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt jetzt `undefined` zurück, wenn der `index` außerhalb des Bereichs liegt. Bisher wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die `HTMLInsElement` und `HTMLDelElement` Schnittstellen wurden entfernt, da die {{ HTMLElement("ins") }} und {{ HTMLElement("del") }} Elemente tatsächlich die [`HTMLModElement`](/de/docs/Web/API/HTMLModElement) Schnittstelle verwenden.
- Im Bemühen, der kommenden [DOM4](https://dom.spec.whatwg.org/) Spezifikation zu entsprechen, bei der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erben (wie in DOM Core 1, 2 und 3), melden jetzt viele [`Node`](/de/docs/Web/API/Node) Eigenschaften und Methoden der [`Attr`](/de/docs/Web/API/Attr) Schnittstelle Warnmeldungen, während wir darauf hinarbeiten, sie in einer späteren Version zu entfernen.
- Unterstützung für die [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) Eigenschaften auf [`window`](/de/docs/Web/API/Window) Objekten hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die `Function.arity` Eigenschaft wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Präferenz `network.websocket.max-connections` wird verwendet, um die maximale Anzahl der zeitgleich offenen WebSocket-Verbindungen zu bestimmen. Der Standardwert ist 200.
- Die zugrunde liegende WebSocket-Protokollversion 8 (wie durch [IETF Entwurf 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) spezifiziert) wird jetzt anstelle der Version 7 des Protokolls von Firefox 6 verwendet.
- Die WebSocket-API ist jetzt in Firefox Mobile verfügbar.

### console API

- Nachrichten, die mit `console.log` protokolliert werden, während die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, obwohl sie nicht angezeigt werden, wenn die Web-Konsole geöffnet wird.

### Web Timing

- Erste Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) Spezifikation, die Daten bereitstellt, die verwendet werden können, um die Leistung einer Website zu messen.

### XML

- Zusätzlich zum zuvor unterstützten `text/xsl` können XSLT-Stylesheets jetzt den offiziellen Internet-Media (MIME)-Typ `application/xslt+xml` (im [stylesheet processing instruction](https://www.w3.org/TR/xml-stylesheet/) oder dem [HTTP Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)) verwenden.

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen sowohl Add-on-Entwickler als auch Entwickler, die an oder mit Mozilla-Code arbeiten. Add-on-Entwickler sollten [Erweiterungen für Firefox 7 aktualisieren](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für weitere Informationen einsehen.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox.

### JavaScript Code-Module

#### FileUtils.jsm

- Die neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestrom, die nicht-sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on Manager hat neue Methoden zum Verwalten von Listen von Add-ons, die sich beim Start der Anwendung geändert haben: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()`, und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>` Elemente können jetzt den Zustand von Offenlegungsdreiecken beibehalten, wenn die von `datasources` referenzierten Knoten alle eindeutige IDs durch "id" Attribute haben.
- `<panel>` Elemente können jetzt so konfiguriert werden, dass der Benutzer sie durch Klicken irgendwo auf den Hintergrund ziehen kann, indem das neue `backdrag` Attribut verwendet wird.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es, dass ein gründlicher Müllsammelzyklus irgendwann in der Zukunft geplant wird, wenn kein JavaScript-Code ausgeführt wird; ein Rückruf wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht das Entladen von zuvor durch Aufrufen von `Components.utils.load()` geladenen JavaScript-Code-Modulen.

### Memory Reporter

Unterstützung wurde für Multi-Reporter hinzugefügt; das heißt, Memory-Reporter, die bei Anforderung Daten sammeln und einen Rückruf für jedes erzeugte Ergebnis aufrufen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die relevanten Schnittstellen sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen an der Benutzererfahrung

- Erweiterungsoptionen können jetzt im Add-on Manager sowohl für neustartlose als auch für traditionelle Erweiterungen angezeigt werden.
- Der Bestimmungsort von Downloads wird jetzt seitenweise gespeichert. Auf diese Daten kann mit `DownloadLastDir.jsm` zugegriffen werden.

### Änderungen am Build-System

- Die ActiveX-Einbettungs-API wird nicht mehr gebaut und die Unterstützung wurde aus dem Build-System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten `-Zc:wchar_t-` beim Erstellen unter Windows nicht mehr angeben.

### Schnittstellenänderungen

- `nsISocketTransport` bietet jetzt ein neues Verbindungsflag: `DISABLE_IPV6`; dies bewirkt, dass ein Socket nur versucht, sich mit IPv4-Adressen zu verbinden und vorhandene IPv6-Adressen ignoriert. Zusätzlich bietet `nsIDNSService` jetzt ein neues Auflösungsflag: `RESOLVE_DISABLE_IPV6`; dies bewirkt, dass nur IPv4-Hosts bei der Domainnamenauflösung berücksichtigt werden und vorhandene IPv6-Adressen ignoriert werden. Diese Änderungen werden verwendet, um die ["Happy Eyeballs"-Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) für eine bessere Antwortzeit zu implementieren, wenn versucht wird, sich mit Hosts zu verbinden, die sowohl IPv4 als auch IPv6 unterstützen (insbesondere solchen, die eine fehlerhafte IPv6-Konnektivität haben).
- `inIDOMUtils` hat zwei neue Methoden, `inIDOMUtils.getChildrenForNode()`, die eine Liste von Kindknoten eines Knotens zurückgibt, und `inIDOMUtils.getUsedFontFaces()`, die eine Liste von Schriftarten, die in einem Bereich verwendet werden, zurückgibt.
- Die `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` Schnittstelle wurde in die `nsIMarkupDocumentViewer` Schnittstelle integriert.
- Die `nsIDOMWindow2` Schnittstelle wurde in die `nsIDOMWindow` Schnittstelle integriert.
- Die `nsIDOMWindow_2_0_BRANCH` Schnittstelle wurde in die `nsIDOMWindowInternal` Schnittstelle integriert.
- `nsINavHistoryObserver` Methoden mit URI-Parametern erfordern jetzt auch eine GUID.
- Die `nsISHistory_2_0_BRANCH` Schnittstelle wurde in die `nsISHistory` Schnittstelle integriert.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm anhand seiner ID zurückgibt, und eine neue Eigenschaft `canRecord`, die, wenn auf `false` gesetzt, die Aufzeichnung von Telemetriestatistiken deaktiviert. Telemetriestatistiken werden nicht mehr im Privaten Modus aufgezeichnet. (siehe [Firefox Fehler 661574](https://bugzil.la/661574) und [Firefox Fehler 661573](https://bugzil.la/661573)) Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert wurden, werden nicht im Telemetrie-Ping gemeldet.
- Die `nsIMemoryReporter` Schnittstelle wurde wesentlich verändert; falls Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- In `nsIXMLHttpRequest`, Header, die von `nsIXMLHttpRequest.setRequestHeader()` gesetzt werden, werden bei Weiterleitungen mitgesendet. Bisher wurden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl` Attribut. Wenn `true`, darf der Inhalt der Docshell das Fenster kontrollieren (d.h. das Fenster verschieben oder die Größe ändern).
- Die `nsIThreadInternal2` Schnittstelle wurde in die `nsIThreadInternal` Schnittstelle integriert.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt eine einzelne Schriftart.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftarten, jede dargestellt durch `nsIDOMFontFace`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOM3Attr`
- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `nsIDOM3Text`
- `nsIDOMDocumentStyle`
- `nsIDOMNSDocument`
- `nsIDOMNSFeatureFactory`
- `nsIDOMNSHTMLDocument`
- `nsIDOMNSHTMLFormElement`
- `nsIDOMNSHTMLHRElement`
- `nsIDOMNSHTMLTextAreaElement`

Die folgenden Schnittstellen wurden im Zuge der Entfernung der ActiveX-Einbettungs-API entfernt:

- `DITestScriptHelper`
- `DWebBrowserEvents`
- `DWebBrowserEvents2`
- `IDispatch`
- `IMozControlBridge`
- `IMozPluginHostCtrl`
- `IWebBrowser`
- `IWebBrowser2`
- `IWebBrowserApp`
- `IXMLDocument`
- `IXMLElement`
- `IXMLElementCollection`
- `IXMLError`
- `nsIActiveXSecurityPolicy`
- `nsIDispatchSupport`
- `nsIMozAxPlugin`
- `nsIScriptEventHandler`
- `nsIScriptEventManager`

### Andere Änderungen

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Themen beeinträchtigen.
- Das Aussehen des Druckvorschaufensters [wurde modernisiert](https://bugzil.la/663028) und Themenautoren werden ermutigt, es mit den CSS-Pseudoelementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu stylen.

## Siehe auch

{{Firefox_for_developers}}
