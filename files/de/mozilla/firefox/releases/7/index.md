---
title: Firefox 7 für Entwickler
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen, die Entwickler betreffen – sowohl im Bereich des Webinhalts als auch der Firefox-Add-ons.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) `profile`-Eigenschaft wurde entfernt, diese Eigenschaft ist seit Gecko 2.0 veraltet.
- Die `x` und `y` Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) wurden entfernt.
- Der Parameter `before` der Methode `add()` des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ist nun optional.
- Das Attribut [`background`](/de/docs/Web/HTML/Reference/Elements/body#background) des {{ HTMLElement("body") }}-Elements wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) des {{ HTMLElement("option") }}-Elements spiegelt nun den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Als Teil des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung der 2D-Canvas erheblich verbessern.
- Das Angeben ungültiger Werte beim Aufrufen von `setTransform()`, `bezierCurveTo()` oder `arcTo()` wirft nun keine Ausnahme mehr; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Die [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) Methode berücksichtigt nun korrekt die Transformationsmatrix, wenn der angegebene Punkt mit dem aktuellen Pfad verglichen wird.
- Der Aufruf von `strokeRect()` mit einer Breite und Höhe von Null bewirkt nun korrekt nichts.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit einer Breite oder Höhe von Null im {{ HTMLElement("canvas") }} wirft nun `INVALID_STATE_ERR`.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit nicht endlichen Koordinaten wirft keine Ausnahme mehr.
- Die Methode `toDataURL()` akzeptiert jetzt ein zweites Argument zur Steuerung der JPEG-Qualität.
- Die Unterstützung für die nicht standardmäßigen `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur noch für `source-over` Kompositionsoperationen gezeichnet.
- Sie können jetzt die Füllregel des Canvas konfigurieren, indem Sie das `mozFillRule` [Attribut](/de/docs/Web/API/CanvasRenderingContext2D#attributes) im Kontext festlegen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Unterstützung für die nicht standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird nun unterstützt.
- Die {{ cssxref("-moz-orient", "-moz-orient") }} Eigenschaft wurde behoben, sodass vertikal ausgerichtete {{ HTMLElement("progress") }}-Elemente entsprechende Standardmaße haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3 `href` Attribut wird jetzt unterstützt. Entwickler werden ermutigt, zur letzteren Syntax zu wechseln.
- Unterstützung für das `voffset` Attribut in {{ MathMLElement("mpadded") }} Elementen wurde hinzugefügt und das Verhalten des `lspace` Attributs wurde korrigiert.
- Das oberste {{ MathMLElement("math") }} Element akzeptiert nun alle Attribute des {{ MathMLElement("mstyle") }} Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/) Schriften wurde hinzugefügt.
- Die `medium` Linienstärke von Bruchstrichen in {{ MathMLElement("mfrac") }} Elementen wurde korrigiert, um der Standardstärke zu entsprechen.
- [Namen für negative Abstände](</de/docs/Web/MathML/Reference/Values#constants_(namedspaces)>) werden jetzt unterstützt.

### DOM

- Die nicht standardmäßigen Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` der [`File`](/de/docs/Web/API/File) Schnittstelle wurden entfernt, ebenso wie die nicht standardmäßigen Eigenschaften `fileName` und `fileSize` ([Firefox Bug 661876](https://bugzil.la/661876)).
- Die [`FormData`](/de/docs/Web/API/FormData) Schnittstelle meldet nun nicht mehr den Dateinamen als leere Zeichenkette, wenn der `Content-Disposition` HTTP-Header gesendet wird, wenn die Daten mit einem [`Blob`](/de/docs/Web/API/Blob) gesetzt wurden. Dies behebt Fehler, die bei einigen Servern auftraten.
- Die [`HTMLelement.dir`](/de/docs/Web/API/HTMLElement/dir) Eigenschaft gibt jetzt immer ihr Ergebnis in Kleinbuchstaben zurück, wie es die HTML-Spezifikation verlangt.
- Die [`FileReader`](/de/docs/Web/API/FileReader) Methode `readAsArrayBuffer()` ist jetzt implementiert.
- `Document.createEntityReference` wurde entfernt. Es wurde nie ordnungsgemäß implementiert und ist in den meisten anderen Browsern nicht implementiert.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt nun `undefined` zurück, wenn der `index` außerhalb des Bereichs liegt, vorher wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die Schnittstellen `HTMLInsElement` und `HTMLDelElement` wurden entfernt, da die {{ HTMLElement("ins") }} und {{ HTMLElement("del") }} Elemente tatsächlich die [`HTMLModElement`](/de/docs/Web/API/HTMLModElement) Schnittstelle verwenden.
- In einem Bestreben, sich der kommenden [DOM4](https://dom.spec.whatwg.org/) Spezifikation anzupassen, bei der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erben (wie es in DOM Core 1, 2 und 3 der Fall war), werden viele [`Node`](/de/docs/Web/API/Node) Eigenschaften und Methoden auf der [`Attr`](/de/docs/Web/API/Attr) Schnittstelle [jetzt Warnungen ausgeben](/de/docs/Web/API/Attr#deprecated_properties_and_methods), während wir auf deren Entfernung in einer späteren Version hinarbeiten.
- Unterstützung für die Eigenschaften [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) auf [`window`](/de/docs/Web/API/Window) Objekten wurde hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die `Function.arity` Eigenschaft wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Präferenz `network.websocket.max-connections` wird verwendet, um die maximale Anzahl an WebSocket-Verbindungen zu bestimmen, die gleichzeitig geöffnet sein können. Der Standardwert ist 200.
- Das zugrunde liegende WebSocket-Protokoll Version 8 (wie im [IETF-Draft 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) spezifiziert) wird jetzt anstelle des Protokolls der Version 7, das von Firefox 6 verwendet wird, verwendet.
- Die WebSocket-API ist jetzt auf Firefox Mobile verfügbar.

### console API

- Nachrichten, die mit `console.log` protokolliert werden, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden dennoch protokolliert, obwohl sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web Timing

- Erste Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) Spezifikation, die Daten bereitstellt, mit denen die Leistung einer Website gemessen werden kann.

### XML

- Zusätzlich zu dem bisher unterstützten `text/xsl` können XSLT-Stylesheets jetzt den offiziellen Internet-Medientyp `application/xslt+xml` verwenden (in der [Stylesheet-Verarbeitungsanweisung](https://www.w3.org/TR/xml-stylesheet/) oder dem [HTTP Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)).

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen sowohl Add-on-Entwickler als auch Entwickler, die an oder mit Mozilla-Code selbst arbeiten. Add-on-Entwickler sollten [Aktualisierung von Erweiterungen für Firefox 7](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für zusätzliche Informationen lesen.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle großen Releases von Firefox.

### JavaScript-Code-Module

#### FileUtils.jsm

- Neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestream, die nicht sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on-Manager verfügt über neue Methoden zum Verwalten von Listen von Add-ons, die während des Anwendungsstarts geändert wurden: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>` Elemente können jetzt den Zustand von Aufklapp-Dreiecken beibehalten, wenn die durch `datasources` referenzierten Knoten alle eindeutige IDs haben, die durch "id"-Attribute angegeben werden.
- `<panel>` Elemente können jetzt so konfiguriert werden, dass der Benutzer sie durch Klicken irgendwo auf ihrem Hintergrund ziehen kann, indem das neue `backdrag`-Attribut verwendet wird.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es Ihnen, einen gründlichen Garbage-Collection-Zyklus zu einem zukünftigen Zeitpunkt zu planen, wenn kein JavaScript-Code ausgeführt wird; ein Rückruf wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor durch Aufrufen von `Components.utils.load()` geladene JavaScript-Code-Module zu entladen.

### Speicherberichterstatter

Unterstützung für Multi-Berichterstatter wurde hinzugefügt; das heißt, Speicherberichterstatter, die Daten auf Anfrage sammeln und einen Rückruf für jedes erzeugte Ergebnis ausführen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die relevanten Schnittstellen sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen der Benutzererfahrung

- Erweiterungsoptionen können jetzt im Add-on-Manager sowohl für Neustart-freie als auch für traditionelle Erweiterungen angezeigt werden.
- Der Zielort von Downloads wird jetzt auf einer site-by-site Basis gespeichert. Diese Daten können mit `DownloadLastDir.jsm` abgerufen werden.

### Änderungen am Build-System

- Die ActiveX-Embedding-API wird nicht mehr gebaut, und die Unterstützung wurde aus dem Build-System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten beim Erstellen unter Windows nicht mehr `-Zc:wchar_t-` angeben.

### Schnittstellenänderungen

- `nsISocketTransport` bietet nun eine neue Verbindungsflagge: `DISABLE_IPV6`; dies führt dazu, dass ein Socket nur versucht, sich mit IPv4-Adressen zu verbinden und vorhandene IPv6-Adressen ignoriert. Zusätzlich bietet `nsIDNSService` nun eine neue Auflösungsflagge: `RESOLVE_DISABLE_IPV6`; dies führt dazu, dass die Namensauflösung von Domains nur IPv4-Hosts berücksichtigt und vorhandene IPv6-Adressen ignoriert. Diese Änderungen werden verwendet, um die ["happy eyeballs" Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) zur Verbesserung der Reaktionszeit bei Verbindungsversuchen auf Hosts, die sowohl IPv4 als auch IPv6 unterstützen (insbesondere solche mit fehlgeschlagener IPv6-Konnektivität), umzusetzen.
- `inIDOMUtils` hat zwei neue Methoden: `inIDOMUtils.getChildrenForNode()`, die eine Liste der Kindknoten eines Knotens zurückgibt und `inIDOMUtils.getUsedFontFaces()`, die eine Liste der in einem Bereich verwendeten Schriftarten zurückgibt.
- Die Schnittstelle `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` wurde in die `nsIMarkupDocumentViewer` Schnittstelle integriert.
- Die Schnittstelle `nsIDOMWindow2` wurde in die `nsIDOMWindow` Schnittstelle integriert.
- Die Schnittstelle `nsIDOMWindow_2_0_BRANCH` wurde in die `nsIDOMWindowInternal` Schnittstelle integriert.
- `nsINavHistoryObserver` Methoden mit URI-Parametern erfordern jetzt auch eine GUID.
- Die Schnittstelle `nsISHistory_2_0_BRANCH` wurde in die `nsISHistory` Schnittstelle integriert.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm anhand seiner ID zurückgibt, und ein neues Attribut `canRecord`, das, wenn es auf `false` gesetzt wird, die Aufzeichnung von Telemetrie-Statistiken deaktiviert. Telemetriestatistiken werden nicht mehr aufgezeichnet, wenn der Private Browsing-Modus aktiviert ist. (siehe [Firefox Bug 661574](https://bugzil.la/661574) und [Firefox Bug 661573](https://bugzil.la/661573)) Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert sind, werden im Telemetrie-Ping nicht gemeldet.
- Die `nsIMemoryReporter` Schnittstelle wurde substanziell verändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- Bei `nsIXMLHttpRequest` werden Header, die durch `nsIXMLHttpRequest.setRequestHeader()` gesetzt wurden, mit der Anfrage gesendet, wenn eine Weiterleitung folgt. Vorher wurden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn `true`, darf der Inhalt der Docshell das Fenster steuern (das heißt, das Fenster verschieben oder in der Größe ändern).
- Die Schnittstelle `nsIThreadInternal2` wurde in die `nsIThreadInternal` Schnittstelle integriert.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt eine einzelne Schriftart.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftarten, von denen jede durch `nsIDOMFontFace` repräsentiert wird.

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

Die folgenden Schnittstellen wurden im Zuge der Entfernung der ActiveX-Embedding-API entfernt:

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

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Designs brechen.
- Das Erscheinungsbild des Druckvorschau-Fensters [wurde modernisiert](https://bugzil.la/663028) und Designautoren werden ermutigt, es unter Verwendung der CSS-Pseudoelemente `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu gestalten.

## Siehe auch

{{Firefox_for_developers}}
