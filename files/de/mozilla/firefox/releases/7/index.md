---
title: Firefox 7 für Entwickler
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen, die Entwickler betreffen – sowohl von Web-Inhalten als auch Firefox-Add-ons.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) `profile`-Eigenschaft wurde entfernt, diese Eigenschaft ist seit Gecko 2.0 veraltet.
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `x`- und `y`-Eigenschaften wurden entfernt.
- Der `before`-Parameter der Methode `add()` des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ist nun optional.
- Das Attribut [`background`](/de/docs/Web/HTML/Element/body#background) der {{ HTMLElement("body") }} wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das Attribut [`label`](/de/docs/Web/HTML/Element/option#label) des {{ HTMLElement("option") }}-Elements spiegelt nun den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung des 2D-Canvas erheblich verbessern.
- Das Angeben ungültiger Werte beim Aufruf von `setTransform()`, `bezierCurveTo()` oder `arcTo()` wirft keine Ausnahme mehr; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die Methode [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) berücksichtigt nun korrekt die Transformationsmatrix beim Vergleich des angegebenen Punktes mit dem aktuellen Pfad.
- Der Aufruf von `strokeRect()` mit Null-Breite und -Höhe bewirkt nun korrekt nichts.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit Null-Breite oder -Höhe {{ HTMLElement("canvas") }} löst nun `INVALID_STATE_ERR` aus.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit nicht-endlichen Koordinaten löst keine Ausnahme mehr aus.
- Die Methode `toDataURL()` akzeptiert nun ein zweites Argument zur Steuerung der JPEG-Qualität.
- Unterstützung für die nicht standardmäßigen `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden nun nur noch für `source-over`-Kompositionsoperationen gezeichnet.
- Sie können jetzt die Füllregel verwenden, die von der Canvas verwendet wird, indem Sie das `mozFillRule` [Attribut](/de/docs/Web/API/CanvasRenderingContext2D#attributes) im Kontext setzen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Unterstützung für die nicht standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird nun unterstützt.
- Die Eigenschaft {{ cssxref("-moz-orient", "-moz-orient") }} wurde so korrigiert, dass vertikal ausgerichtete {{ HTMLElement("progress") }}-Elemente geeignete Standarddimensionen haben.

### MathML

- XLink `href` wurde wiederhergestellt und das MathML3-Attribut `href` wird nun unterstützt. Entwickler werden ermutigt, zur letzteren Syntax zu wechseln.
- Unterstützung für das `voffset`-Attribut bei {{ MathMLElement("mpadded") }}-Elementen wurde hinzugefügt und das Verhalten des `lspace`-Attributs wurde korrigiert.
- Das Top-Level-Element {{ MathMLElement("math") }} akzeptiert nun alle Attribute des {{ MathMLElement("mstyle") }}-Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/) Schriftarten wurde hinzugefügt.
- Die `medium`-Linienstärke von Bruchstrichen in {{ MathMLElement("mfrac") }}-Elementen wurde korrigiert, um der Standardstärke zu entsprechen.
- [Namen für negative Abstände](</de/docs/Web/MathML/Values#constants_(namedspaces)>) werden jetzt unterstützt.

### DOM

- Die nicht standardmäßigen Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` der [`File`](/de/docs/Web/API/File)-Schnittstelle sowie die nicht standardmäßigen Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox Bug 661876](https://bugzil.la/661876)).
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle meldet nicht mehr den Dateinamen als leeren String, wenn der `Content-Disposition` HTTP-Header-Daten mit einem [`Blob`](/de/docs/Web/API/Blob) gesetzt wurden. Dies korrigiert Fehler, die bei einigen Servern auftraten.
- Die Eigenschaft [`HTMLelement.dir`](/de/docs/Web/API/HTMLelement/dir) gibt ihr Ergebnis nun immer in Kleinbuchstaben zurück, wie es die HTML-Spezifikation erfordert.
- Die Methode `readAsArrayBuffer()` des [`FileReader`](/de/docs/Web/API/FileReader) ist nun implementiert.
- `Document.createEntityReference` wurde entfernt. Es war nie richtig implementiert und wird in den meisten anderen Browsern nicht implementiert.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt jetzt `undefined` zurück, wenn der `index` außerhalb des Bereichs liegt, vorher wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die Schnittstellen `HTMLInsElement` und `HTMLDelElement` wurden entfernt, da die {{ HTMLElement("ins") }}- und {{ HTMLElement("del") }}-Elemente tatsächlich die [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)-Schnittstelle verwenden.
- Im Bemühen, mit der kommenden [DOM4](https://dom.spec.whatwg.org/)-Spezifikation zu konformieren, bei der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erbt (es tat dies in DOM Core 1, 2 und 3), melden viele [`Node`](/de/docs/Web/API/Node)-Eigenschaften und -Methoden auf der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle [nun Warnungen](/de/docs/Web/API/Attr#deprecated_properties_and_methods), während wir daran arbeiten, sie in einer späteren Version zu entfernen.
- Unterstützung für die [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) Eigenschaften auf [`window`](/de/docs/Web/API/Window)-Objekten wurde hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die `Function.arity`-Eigenschaft wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Einstellung `network.websocket.max-connections` wird verwendet, um die maximale Anzahl von WebSocket-Verbindungen zu bestimmen, die gleichzeitig geöffnet sein können. Der Standardwert ist 200.
- Die zugrunde liegende WebSocket-Protokoll-Version 8 (wie in [IETF Entwurf 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) angegeben) wird jetzt anstelle der in Firefox 6 verwendeten Version 7 verwendet.
- Die WebSocket-API ist jetzt auf Firefox Mobile verfügbar.

### console API

- Mit `console.log` protokollierte Nachrichten, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, auch wenn sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web Timing

- Initiale Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing)-Spezifikation, die Daten bereitstellt, die zur Messung der Leistung einer Website verwendet werden können.

### XML

- Zusätzlich zu dem zuvor unterstützten `text/xsl` können XSLT-Stylesheets jetzt auch den offiziellen Internet-Mime-Typ `application/xslt+xml` (im [Stylesheet-Verarbeitungsanweisung](https://www.w3.org/TR/xml-stylesheet/) oder im [HTTP Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)) verwenden.

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen Add-on-Entwickler sowie Entwickler, die an Mozilla-Code arbeiten oder diesen verwenden. Add-on-Entwickler sollten [Erweiterungen für Firefox 7 aktualisieren](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für zusätzliche Informationen konsultieren.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle wichtigen Firefox-Versionen.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestream, die nicht-sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on Manager hat neue Methoden zur Verwaltung von Listen von Add-ons, die sich während des Anwendungsstarts geändert haben: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>`-Elemente können jetzt den Zustand von Offenlegungsdreiecken beibehalten, wenn die von `datasources` referenzierten Knoten alle eindeutige IDs haben, die durch "id"-Attribute angegeben sind.
- `<panel>`-Elemente können jetzt so konfiguriert werden, dass der Benutzer sie durch Klicken an einer beliebigen Stelle auf ihrem Hintergrund ziehen kann, indem das neue `backdrag`-Attribut verwendet wird.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es Ihnen, einen gründlichen Garbage-Collection-Zyklus zu einem zukünftigen Zeitpunkt zu planen, wenn kein JavaScript-Code ausgeführt wird; ein Callback wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor mit `Components.utils.load()` geladene JavaScript-Code-Module zu entladen.

### Speicherberichte

Unterstützung für Multi-Reporter wurde hinzugefügt; also Speicherberichte, die Daten bei Bedarf sammeln und einen Callback für jedes generierte Ergebnis aufrufen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die entsprechenden Schnittstellen sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen der Benutzererfahrung

- Erweiterungsoptionen können jetzt im Add-on-Manager sowohl für neustartlose als auch traditionelle Erweiterungen angezeigt werden.
- Der Zielort von Downloads wird jetzt seitenweise erinnert. Auf diese Daten kann mit `DownloadLastDir.jsm` zugegriffen werden.

### Änderungen am Build-System

- Die ActiveX-Einbettungs-API wird nicht mehr gebaut und die Unterstützung wurde aus dem Build-System entfernt. Auch die unterstützenden Schnittstellen wurden entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten bei Windows-Builds nicht mehr `-Zc:wchar_t-` angeben.

### Schnittstellenänderungen

- `nsISocketTransport` bietet nun ein neues Verbindungsflag: `DISABLE_IPV6`; dies bewirkt, dass ein Socket nur versucht, Verbindungen zu IPv4-Adressen herzustellen, und alle verfügbaren IPv6-Adressen ignoriert. Zusätzlich bietet `nsIDNSService` nun ein neues Resolve-Flag: `RESOLVE_DISABLE_IPV6`; dies bewirkt, dass die Domainnamenauflösung nur IPv4-Hosts in Betracht zieht und alle verfügbaren IPv6-Adressen ignoriert. Diese Änderungen werden verwendet, um die ["Happy Eyeballs"-Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) zu implementieren, die die Reaktionszeit bei Verbindungsversuchen an Hosts verbessert, die sowohl IPv4 als auch IPv6 (insbesondere bei fehlerhaftem IPv6-Zugriff) unterstützen.
- `inIDOMUtils` hat zwei neue Methoden: `inIDOMUtils.getChildrenForNode()`, die eine Liste von Kindknoten eines Knotens zurückgibt, und `inIDOMUtils.getUsedFontFaces()`, die eine Liste von Schriftarten zurückgibt, die in einem Bereich verwendet werden.
- Die `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIMarkupDocumentViewer`-Schnittstelle integriert.
- Die `nsIDOMWindow2`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Die `nsIDOMWindow_2_0_BRANCH`-Schnittstelle wurde in die `nsIDOMWindowInternal`-Schnittstelle integriert.
- `nsINavHistoryObserver`-Methoden mit URI-Parametern benötigen jetzt auch eine GUID.
- Die `nsISHistory_2_0_BRANCH`-Schnittstelle wurde in die `nsISHistory`-Schnittstelle integriert.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm anhand seiner ID zurückgibt, und ein neues Attribut, `canRecord`, das, wenn es auf `false` gesetzt wird, die Aufzeichnung von Telemetriestatistiken deaktiviert. Telemetriestatistiken werden im privaten Browsing-Modus nicht mehr aufgezeichnet. (siehe [Firefox Bug 661574](https://bugzil.la/661574) und [Firefox Bug 661573](https://bugzil.la/661573)) Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert werden, werden im Telemetrie-Ping nicht berichtet.
- Die `nsIMemoryReporter`-Schnittstelle wurde erheblich verändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- `nsIXMLHttpRequest`, Header, die durch `nsIXMLHttpRequest.setRequestHeader()` gesetzt werden, werden mit der Anfrage gesendet, wenn einem Redirect gefolgt wird. Zuvor wurden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn `true`, ist es dem Docshells-Inhalt erlaubt, das Fenster zu steuern (d.h. das Fenster zu verschieben oder zu verändern).
- Die `nsIThreadInternal2`-Schnittstelle wurde in die `nsIThreadInternal`-Schnittstelle integriert.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt eine einzelne Schriftart.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftarten, von denen jede durch `nsIDOMFontFace` dargestellt wird.

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

### Weitere Änderungen

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Themes beeinträchtigen.
- Das Erscheinungsbild des Druckvorschaufensters wurde [modernisiert](https://bugzil.la/663028) und Theme-Autoren werden ermutigt, es mit den CSS-Pseudoelementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu gestalten.

## Siehe auch

{{Firefox_for_developers}}
