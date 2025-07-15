---
title: Firefox 7 für Entwickler
short-title: Firefox 7
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel enthält Informationen über die Änderungen, die Entwickler betreffen – sowohl von Webinhalten als auch Firefox-Add-ons.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement)-Eigenschaft `profile` wurde entfernt, diese Eigenschaft ist seit Gecko 2.0 veraltet.
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaften `x` und `y` wurden entfernt.
- Der `before`-Parameter der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Methode `add()` ist jetzt optional.
- Das Attribut [`background`](/de/docs/Web/HTML/Reference/Elements/body#background) des {{ HTMLElement("body") }}-Elements wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) des {{ HTMLElement("option") }}-Elements gibt jetzt den Wert des Textinhalts des Elements wieder, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung der 2D-Canvas deutlich verbessern.
- Bei der Verwendung ungültiger Werte bei Aufrufen von `setTransform()`, `bezierCurveTo()` oder `arcTo()` wird keine Ausnahme mehr ausgelöst; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die Methode [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) berücksichtigt jetzt korrekt die Transformationsmatrix beim Vergleichen des angegebenen Punktes mit dem aktuellen Pfad.
- Der Aufruf von `strokeRect()` mit einer Breite und Höhe von null bewirkt nun korrekt nichts.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit einer Breite oder Höhe von null {{ HTMLElement("canvas") }} löst jetzt `INVALID_STATE_ERR` aus.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit nicht endlichen Koordinaten löst keine Ausnahme mehr aus.
- Die Methode `toDataURL()` akzeptiert jetzt ein zweites Argument zur Steuerung der JPEG-Qualität.
- Unterstützung für die nicht standardmäßigen `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur noch für `source-over`-Compositing-Operationen gezeichnet.
- Sie können jetzt die Füllregel, die von Canvas verwendet wird, konfigurieren, indem Sie das Attribut `mozFillRule` auf dem Kontext einstellen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Unterstützung für die nicht standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird jetzt unterstützt.
- Die Eigenschaft {{ cssxref("-moz-orient", "-moz-orient") }} wurde korrigiert, sodass {{ HTMLElement("progress") }}-Elemente, die vertikal ausgerichtet sind, geeignete Standardabmessungen haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3-Attribut `href` wird jetzt unterstützt. Entwickler werden ermutigt, zur letzteren Syntax zu wechseln.
- Unterstützung für das `voffset`-Attribut auf {{ MathMLElement("mpadded") }}-Elementen wurde hinzugefügt und das Verhalten des `lspace`-Attributs wurde korrigiert.
- Das oberste {{ MathMLElement("math") }}-Element akzeptiert jetzt alle Attribute des {{ MathMLElement("mstyle") }}-Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)-Schriften wurde hinzugefügt.
- Die Linienstärke `medium` von Bruchstrichen in {{ MathMLElement("mfrac") }}-Elementen wurde korrigiert, um der Standardstärke zu entsprechen.
- [Namen für negative Abstände](/de/docs/Web/MathML/Reference/Values#constants) werden jetzt unterstützt.

### DOM

- Die nicht standardmäßigen Methoden `getAsBinary()`, `getAsDataURL()`, und `getAsText()` der [`File`](/de/docs/Web/API/File)-Schnittstelle sowie die nicht standardmäßigen Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox-Bug 661876](https://bugzil.la/661876)).
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle meldet nicht mehr den Dateinamen als leere Zeichenkette, wenn der `Content-Disposition`-HTTP-Header gesendet wird, wenn die Daten mit einem [`Blob`](/de/docs/Web/API/Blob) festgelegt wurden. Dies behebt Fehler, die mit einigen Servern auftraten.
- Die [`HTMLelement.dir`](/de/docs/Web/API/HTMLElement/dir)-Eigenschaft gibt jetzt immer ihr Ergebnis in Kleinbuchstaben zurück, wie es die HTML-Spezifikation verlangt.
- Die Methode `readAsArrayBuffer()` des [`FileReader`](/de/docs/Web/API/FileReader) ist jetzt implementiert.
- `Document.createEntityReference` wurde entfernt. Es wurde nie richtig implementiert und wird in den meisten anderen Browsern nicht implementiert.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt jetzt `undefined` zurück, wenn der `index` außerhalb des gültigen Bereichs liegt, zuvor wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die Schnittstellen `HTMLInsElement` und `HTMLDelElement` wurden entfernt, da die {{ HTMLElement("ins") }}- und {{ HTMLElement("del") }}-Elemente tatsächlich die Schnittstelle [`HTMLModElement`](/de/docs/Web/API/HTMLModElement) verwenden.
- In einem Bemühen, sich an die bevorstehende [DOM4](https://dom.spec.whatwg.org/)-Spezifikation anzupassen, bei der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erbt (was in DOM Core 1, 2 und 3 der Fall war), melden viele [`Node`](/de/docs/Web/API/Node)-Eigenschaften und -Methoden in der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle jetzt Warnungen, während wir darauf hinarbeiten, sie in einer späteren Version zu entfernen.
- Unterstützung für die Eigenschaften [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) auf [`window`](/de/docs/Web/API/Window)-Objekten wurde hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die Eigenschaft `Function.arity` wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Präferenz `network.websocket.max-connections` wird verwendet, um die maximale Anzahl von gleichzeitig offenen WebSocket-Verbindungen zu bestimmen. Der Standardwert ist 200.
- Die zugrundeliegende WebSocket-Protokollversion 8 (wie in [IETF-Entwurf 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) spezifiziert) wird jetzt anstelle der von Firefox 6 verwendeten Protokollversion 7 verwendet.
- Die WebSocket-API ist jetzt in Firefox Mobile verfügbar.

### console API

- Nachrichten, die mit `console.log` protokolliert werden, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, auch wenn sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web-Timing

- Erste Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing)-Spezifikation, die Daten bereitstellt, die zur Messung der Leistung einer Website verwendet werden können.

### XML

- Zusätzlich zum bereits unterstützten `text/xsl` können XSLT-Stylesheets jetzt den offiziellen Internet-Media-(MIME)-Typ `application/xslt+xml` verwenden (im [Stylesheet-Verarbeitungsbefehl](https://www.w3.org/TR/xml-stylesheet/) oder im [HTTP Link Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)).

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen Add-on-Entwickler sowie Entwickler, die mit Mozilla-Code selbst arbeiten oder daran arbeiten. Add-on-Entwickler sollten [Aktualisierung von Erweiterungen für Firefox 7](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für zusätzliche Informationen sehen.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist.

### JavaScript-Code-Module

#### FileUtils.jsm

- Neue Methode `openFileOutputStream()` öffnet einen Datei-Outputstream, die nicht sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on-Manager hat neue Methoden zum Verwalten von Listen von Add-ons, die sich während des Anwendungsstarts geändert haben: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>`-Elemente können jetzt den Zustand von Aufklapppfeilen beibehalten, wenn die durch `datasources` referenzierten Knoten alle eindeutige IDs haben, die durch "id"-Attribute spezifiziert sind.
- `<panel>`-Elemente können jetzt so konfiguriert werden, dass der Benutzer sie durch Klicken auf einen beliebigen Punkt im Hintergrund ziehen kann, indem das neue `backdrag`-Attribut verwendet wird.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es Ihnen, einen gründlichen Garbage-Collection-Zyklus zu einem späteren Zeitpunkt zu planen, wenn kein JavaScript-Code ausgeführt wird; ein Rückruf wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht das Entladen von zuvor durch Aufruf von `Components.utils.load()` geladenen JavaScript-Code-Modulen.

### Speicherberichte

Unterstützung für Multi-Reporter wurde hinzugefügt; das heißt, Speicher-Reporter, die Daten auf Anfrage sammeln und einen Rückruf für jedes generierte Ergebnis ausführen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die relevanten Schnittstellen sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen der Benutzererfahrung

- Erweiterungsoptionen können jetzt innerhalb des Add-on-Managers sowohl für neustartlose als auch für traditionelle Erweiterungen angezeigt werden.
- Das Ziel von Downloads wird jetzt pro Website gespeichert. Auf diese Daten kann mit `DownloadLastDir.jsm` zugegriffen werden.

### Änderungen am Builds System

- Die ActiveX-Einbettungs-API wird nicht mehr erstellt und die Unterstützung wurde aus dem Builds System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten nicht mehr `-Zc:wchar_t-` angeben, wenn Sie unter Windows erstellen.

### Schnittstellenänderungen

- `nsISocketTransport` bietet nun ein neues Verbindungs-Flag: `DISABLE_IPV6`; dies bewirkt, dass ein Socket nur versucht, mit IPv4-Adressen zu verbinden und alle verfügbaren IPv6-Adressen ignoriert. Zusätzlich bietet `nsIDNSService` jetzt ein neues Auflösungs-Flag: `RESOLVE_DISABLE_IPV6`; dies bewirkt, dass die Domainnamenauflösung nur IPv4-Hosts berücksichtigt und alle verfügbaren IPv6-Adressen ignoriert. Diese Änderungen werden zur Implementierung der ["happy eyeballs"-Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) verwendet, um die Reaktionszeit beim Versuch, Verbindungen auf Hosts herzustellen, die sowohl IPv4 als auch IPv6 unterstützen (insbesondere diejenigen, die fehlerhafte IPv6-Konnektivität haben), zu verbessern.
- `inIDOMUtils` hat zwei neue Methoden, `inIDOMUtils.getChildrenForNode()`, die eine Liste von Kindknoten eines Knotens zurückgeben, und `inIDOMUtils.getUsedFontFaces()`, die eine Liste von in einem Bereich verwendeten Schriftschnitten zurückgibt.
- Die Schnittstelle `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIMarkupDocumentViewer` integriert.
- Die Schnittstelle `nsIDOMWindow2` wurde in die Schnittstelle `nsIDOMWindow` integriert.
- Die Schnittstelle `nsIDOMWindow_2_0_BRANCH` wurde in die Schnittstelle `nsIDOMWindowInternal` integriert.
- `nsINavHistoryObserver`-Methoden mit URI-Parametern erfordern jetzt auch eine GUID.
- Die Schnittstelle `nsISHistory_2_0_BRANCH` wurde in die Schnittstelle `nsISHistory` integriert.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm anhand seiner ID zurückgibt, und ein neues Attribut, `canRecord`, das deaktiviert ist, wenn es auf `false` gesetzt wird, die Aufzeichnung von Telemetrie-Statistiken. Telemetrie-Statistiken werden während des privaten Surfmodus nicht mehr aufgezeichnet (siehe [Firefox-Bug 661574](https://bugzil.la/661574) und [Firefox-Bug 661573](https://bugzil.la/661573)). Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert sind, werden im Telemetrie-Ping nicht gemeldet.
- Die `nsIMemoryReporter`-Schnittstelle wurde erheblich verändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- In `nsIXMLHttpRequest` gesetzte Header durch `nsIXMLHttpRequest.setRequestHeader()` werden mit der Anforderung gesendet, wenn einem Redirect gefolgt wird. Zuvor würden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn `true`, darf der Inhalt des Docshells das Fenster steuern (d.h. das Fenster verschieben oder die Größe ändern).
- Die `nsIThreadInternal2`-Schnittstelle wurde in die `nsIThreadInternal`-Schnittstelle integriert.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt einen einzelnen Schriftschnitt.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftschnitten, wobei jeder durch `nsIDOMFontFace` dargestellt wird.

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

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Themen beeinträchtigen.
- Das Aussehen des Druckvorschau-Fensters [wurde modernisiert](https://bugzil.la/663028) und Themenautoren werden ermutigt, es mit den CSS-Pseudoelementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu gestalten.
