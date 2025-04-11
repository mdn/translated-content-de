---
title: Firefox 7 für Entwickler
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen, die Entwickler betreffen – sowohl für Webinhalte als auch für Firefox-Erweiterungen.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) `profile`-Eigenschaft wurde entfernt. Diese Eigenschaft war seit Gecko 2.0 veraltet.
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `x`- und `y`-Eigenschaften wurden entfernt.
- Der `before`-Parameter der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `add()`-Methode ist jetzt optional.
- Das {{ HTMLElement("body") }}-Elementattribut [`background`](/de/docs/Web/HTML/Reference/Elements/body#background) wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das {{ HTMLElement("option") }}-Elementattribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) spiegelt jetzt den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung des 2D-Canvas erheblich verbessern.
- Ungültige Werte bei Aufruf von `setTransform()`, `bezierCurveTo()` oder `arcTo()` werfen keine Ausnahmen mehr; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)-Methode berücksichtigt jetzt korrekt die Transformationsmatrix, wenn der angegebene Punkt mit dem aktuellen Pfad verglichen wird.
- Beim Aufrufen von `strokeRect()` mit null Breite und Höhe wird jetzt korrekt nichts ausgeführt.
- Beim Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit null Breite oder Höhe des {{ HTMLElement("canvas") }} wird jetzt `INVALID_STATE_ERR` geworfen.
- Beim Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit unendlichen Koordinaten wird keine Ausnahme mehr geworfen.
- Die `toDataURL()`-Methode akzeptiert jetzt ein zweites Argument zur Steuerung der JPEG-Qualität.
- Die Unterstützung für die nicht standardmäßigen `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur noch für `source-over`-Kompositionsoperationen gezeichnet.
- Sie können nun die Füllregel des Canvas konfigurieren, indem Sie das `mozFillRule`-[Attribut](/de/docs/Web/API/CanvasRenderingContext2D#attributes) im Kontext setzen.
- Unterstützung für die experimentellen `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` Attribute wurde hinzugefügt.
- Die Unterstützung für die nicht standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird jetzt unterstützt.
- Die {{ cssxref("-moz-orient", "-moz-orient") }} Eigenschaft wurde so korrigiert, dass {{ HTMLElement("progress") }}-Elemente, die vertikal ausgerichtet sind, angemessene Standardabmessungen haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3 `href`-Attribut wird jetzt unterstützt. Entwicklern wird empfohlen, zur letztgenannten Syntax zu wechseln.
- Unterstützung für das `voffset`-Attribut auf {{ MathMLElement("mpadded") }}-Elementen wurde hinzugefügt und das Verhalten des `lspace`-Attributs wurde korrigiert.
- Das oberste {{ MathMLElement("math") }}-Element akzeptiert nun alle Attribute des {{ MathMLElement("mstyle") }}-Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/) Schriftarten wurde hinzugefügt.
- Die `medium` Linienstärke der Bruchstriche in {{ MathMLElement("mfrac") }}-Elementen wurde korrigiert, um mit der Standarddicke übereinzustimmen.
- [Namen für negative Abstände](</de/docs/Web/MathML/Reference/Values#constants_(namedspaces)>) werden jetzt unterstützt.

### DOM

- Die nicht standardmäßigen Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` der [`File`](/de/docs/Web/API/File)-Schnittstelle sowie die nicht standardmäßigen Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox-Bug 661876](https://bugzil.la/661876)).
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle meldet nicht mehr den Dateinamen als leeren String, wenn die `Content-Disposition` HTTP-Header gesendet werden, falls die Daten mit einem [`Blob`](/de/docs/Web/API/Blob) gesetzt wurden. Dies behebt Fehler, die bei einigen Servern auftraten.
- Die [`HTMLelement.dir`](/de/docs/Web/API/HTMLElement/dir)-Eigenschaft gibt ihr Ergebnis jetzt immer in Kleinschreibung zurück, wie es von der HTML-Spezifikation gefordert wird.
- Die [`FileReader`](/de/docs/Web/API/FileReader) `readAsArrayBuffer()`-Methode ist jetzt implementiert.
- `Document.createEntityReference` wurde entfernt. Es wurde nie richtig implementiert und auch in den meisten anderen Browsern nicht.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt jetzt `undefined` zurück, wenn der `index` außerhalb des Bereichs liegt, vorher wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die `HTMLInsElement`- und `HTMLDelElement`-Schnittstellen wurden entfernt, da die {{ HTMLElement("ins") }} und {{ HTMLElement("del") }} Elemente tatsächlich die [`HTMLModElement`](/de/docs/Web/API/HTMLModElement) Schnittstelle verwenden.
- Im Bestreben, sich an die kommende [DOM4](https://dom.spec.whatwg.org/)-Spezifikation zu halten, bei der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erben (wie es in DOM Core 1, 2 und 3 der Fall war), melden viele [`Node`](/de/docs/Web/API/Node)-Eigenschaften und Methoden auf der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle jetzt [Warnungen](/de/docs/Web/API/Attr#deprecated_properties_and_methods), da wir daran arbeiten, sie in einer späteren Version zu entfernen.
- Unterstützung für die [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) Eigenschaften auf [`window`](/de/docs/Web/API/Window) Objekten wurde hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die `Function.arity`-Eigenschaft wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die `network.websocket.max-connections`-Einstellung wird verwendet, um die maximale Anzahl von WebSocket-Verbindungen zu bestimmen, die gleichzeitig geöffnet sein können. Der Standardwert ist 200.
- Die zugrunde liegende WebSocket-Protokollversion 8 (wie von [IETF-Entwurf 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) festgelegt) wird jetzt anstelle der in Firefox 6 verwendeten Version 7 verwendet.
- Die WebSocket-API ist jetzt auf Firefox Mobile verfügbar.

### console API

- Die mit `console.log` protokollierten Nachrichten, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, auch wenn sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web-Timing

- Erste Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing)-Spezifikation, die Daten bereitstellt, die zur Messung der Leistung einer Website verwendet werden können.

### XML

- Zusätzlich zum vorher unterstützten `text/xsl` können XSLT-Stilvorlagen jetzt den offiziellen Internetmedientyp `application/xslt+xml` verwenden (im [Stylesheet processing instruction](https://www.w3.org/TR/xml-stylesheet/) oder im [HTTP-Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)).

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen Add-on-Entwickler sowie Entwickler, die an Mozilla-Code selbst oder mit diesem arbeiten. Add-on-Entwickler sollten [Erweiterungen für Firefox 7 aktualisieren](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für weitere Informationen einsehen.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle wichtigen Veröffentlichungen von Firefox.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestream, die nicht sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on-Manager hat neue Methoden zur Verwaltung von Listen von Add-ons, die während des Anwendungsstarts geändert wurden: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>`-Elemente können jetzt den Zustand von Offenlege-Dreiecken beibehalten, wenn die von `datasources` referenzierten Knoten alle eindeutige IDs aufweisen, die durch "id"-Attribute angegeben sind.
- `<panel>`-Elemente können jetzt so konfiguriert werden, dass der Benutzer sie durch Klicken irgendwo auf deren Hintergrund ziehen kann, indem das neue `backdrag`-Attribut verwendet wird.

### XPCOM

- Die neue `Components.utils.schedulePreciseGC()`-Methode ermöglicht es Ihnen, einen gründlichen Garbage-Collection-Zyklus zu einem späteren Zeitpunkt zu planen, wenn kein JavaScript-Code ausgeführt wird; ein Callback wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die `Components.utils.unload()`-Methode ermöglicht es Ihnen, JavaScript-Code-Module, die zuvor durch Aufrufen von `Components.utils.load()` geladen wurden, zu entladen.

### Speicher-Reporter

Unterstützung für Multi-Reporter wurde hinzugefügt; das heißt Speicher-Reporter, die Daten auf Anfrage sammeln und für jedes generierte Ergebnis einen Callback aufrufen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die relevanten Schnittstellen sowie die `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()` Methoden.

### Änderungen an der Benutzeroberfläche

- Erweiterungsoptionen können jetzt innerhalb des Add-on-Managers sowohl für Neustart-freie als auch traditionelle Erweiterungen angezeigt werden.
- Der Zielort von Downloads wird jetzt seitenweise gespeichert. Auf diese Daten kann mit `DownloadLastDir.jsm` zugegriffen werden.

### Änderungen am Build-System

- Die ActiveX-Einbettungs-API wird nicht mehr gebaut und die Unterstützung wurde aus dem Build-System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten `-Zc:wchar_t-` nicht mehr verwenden, wenn Sie unter Windows bauen.

### Schnittstellenänderungen

- `nsISocketTransport` bietet jetzt eine neue Verbindungs-Flag: `DISABLE_IPV6`; dies führt dazu, dass ein Socket nur versucht, sich mit IPv4-Adressen zu verbinden und alle verfügbaren IPv6-Adressen ignoriert. Darüber hinaus bietet `nsIDNSService` jetzt eine neue Auflösungs-Flag: `RESOLVE_DISABLE_IPV6`; dies führt dazu, dass die Domain-Name-Auflösung nur IPv4-Hosts berücksichtigt und alle verfügbaren IPv6-Adressen ignoriert. Diese Änderungen werden verwendet, um die ["happy eyeballs"-Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) zur Verbesserung der Antwortzeit zu implementieren, wenn versucht wird, sich auf Hosts zu verbinden, die sowohl IPv4 als auch IPv6 unterstützen (insbesondere diejenigen, die eine fehlerhafte IPv6-Konnektivität haben).
- `inIDOMUtils` hat zwei neue Methoden, `inIDOMUtils.getChildrenForNode()`, die eine Liste der Kindknoten eines Knotens zurückgibt, und `inIDOMUtils.getUsedFontFaces()`, die eine Liste der Schriftarten zurückgibt, die in einem Bereich verwendet werden.
- Die `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIMarkupDocumentViewer`-Schnittstelle zusammengeführt.
- Die `nsIDOMWindow2`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle zusammengeführt.
- Die `nsIDOMWindow_2_0_BRANCH`-Schnittstelle wurde in die `nsIDOMWindowInternal`-Schnittstelle zusammengeführt.
- `nsINavHistoryObserver`-Methoden mit URI-Parametern benötigen jetzt auch eine GUID.
- Die `nsISHistory_2_0_BRANCH`-Schnittstelle wurde in die `nsISHistory`-Schnittstelle zusammengeführt.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm anhand seiner ID zurückgibt, und ein neues Attribut, `canRecord`, das, wenn es auf `false` gesetzt ist, die Erfassung von Telemetrie-Statistiken deaktiviert. Telemetrische Statistiken werden nicht mehr aufgezeichnet, wenn der Private Browsing-Modus aktiviert ist. (siehe [Firefox-Bug 661574](https://bugzil.la/661574) und [Firefox-Bug 661573](https://bugzil.la/661573)) Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert wurden, werden im Telemetrie-Ping nicht gemeldet.
- Die `nsIMemoryReporter`-Schnittstelle wurde erheblich verändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- `nsIXMLHttpRequest`, Header, die durch `nsIXMLHttpRequest.setRequestHeader()` gesetzt werden, werden bei einer Weiterleitung zusammen mit der Anfrage gesendet. Bisher wurden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn `true`, darf der Inhalt des Docshells das Fenster steuern (also das Fenster bewegen oder die Größe ändern).
- Die `nsIThreadInternal2`-Schnittstelle wurde in die `nsIThreadInternal`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt einen einzigen Schriftschnitt.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftschnitten, von denen jeder durch `nsIDOMFontFace` repräsentiert wird.

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

Die folgenden Schnittstellen wurden im Rahmen der Entfernung der ActiveX-Einbettungs-API entfernt:

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

### Sonstige Änderungen

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Themes beeinflussen.
- Das Aussehen des Druckvorschaufensters [wurde modernisiert](https://bugzil.la/663028) und Theme-Autoren werden ermutigt, es mit den CSS-Pseudo-Elementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu stylen.

## Siehe auch

{{Firefox_for_developers}}
