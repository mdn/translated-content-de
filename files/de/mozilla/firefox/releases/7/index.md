---
title: Firefox 7 Versionshinweise für Entwickler
short-title: Firefox 7
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen, die Entwickler betreffen — sowohl von Webinhalten als auch von Firefox-Add-ons.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) `profile`-Eigenschaft wurde entfernt, diese Eigenschaft wurde seit Gecko 2.0 als veraltet betrachtet.
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaften `x` und `y` wurden entfernt.
- Der `before`-Parameter der Methode `add()` von [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ist jetzt optional.
- Das Attribut [`background`](/de/docs/Web/HTML/Reference/Elements/body#background) des {{ HTMLElement("body") }}-Elements wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) des {{ HTMLElement("option") }}-Elements spiegelt nun den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D-Azure-Backend [implementiert](https://bugzil.la/651858), was die Leistung der 2D-Canvas erheblich verbessern wird.
- Das Angeben ungültiger Werte beim Aufruf von `setTransform()`, `bezierCurveTo()` oder `arcTo()` wirft keine Ausnahme mehr; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die Methode [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) berücksichtigt nun korrekt die Transformationsmatrix beim Vergleich des angegebenen Punktes mit dem aktuellen Pfad.
- Der Aufruf von `strokeRect()` mit Breite und Höhe null macht jetzt korrekt nichts.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit einer Breite oder Höhe null auf einem {{ HTMLElement("canvas") }} wirft nun `INVALID_STATE_ERR`.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit nicht-finiten Koordinaten wirft keine Ausnahme mehr.
- Die Methode `toDataURL()` akzeptiert jetzt ein zweites Argument zur Steuerung der JPEG-Qualität.
- Unterstützung für die nicht-standardmäßigen `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur noch für `source-over`-Compositing-Operationen gezeichnet.
- Sie können nun die Füllregel konfigurieren, die von Canvas verwendet wird, indem Sie das `mozFillRule`-Attribut am Kontext setzen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Unterstützung für die nicht-standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird jetzt unterstützt.
- Die {{ cssxref("-moz-orient", "-moz-orient") }}-Eigenschaft wurde korrigiert, sodass {{ HTMLElement("progress") }}-Elemente, die vertikal ausgerichtet sind, angemessene Standardmaße haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3-`href`-Attribut wird jetzt unterstützt. Entwickler werden ermutigt, zur letzteren Syntax zu wechseln.
- Unterstützung für das `voffset`-Attribut bei {{ MathMLElement("mpadded") }}-Elementen wurde hinzugefügt und das Verhalten des `lspace`-Attributs wurde korrigiert.
- Das oberste {{ MathMLElement("math") }}-Element akzeptiert jetzt alle Attribute des {{ MathMLElement("mstyle") }}-Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/) Schriften wurde hinzugefügt.
- Die Mitteldicke der Bruchstriche in {{ MathMLElement("mfrac") }}-Elementen wurde korrigiert, um der Standarddicke zu entsprechen.
- [Namen für negative Abstände](/de/docs/Web/MathML/Reference/Values#constants) werden jetzt unterstützt.

### DOM

- Die nicht-standardmäßigen Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` des [`File`](/de/docs/Web/API/File) Interface sowie die nicht-standardmäßigen Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox Bug 661876](https://bugzil.la/661876)).
- Das [`FormData`](/de/docs/Web/API/FormData) Interface meldet nun nicht mehr einen leeren Dateinamen beim Senden des `Content-Disposition` HTTP-Headers, wenn die Daten mit einem [`Blob`](/de/docs/Web/API/Blob) gesetzt wurden. Dies behebt Fehler, die bei einigen Servern aufgetreten sind.
- Die [`HTMLelement.dir`](/de/docs/Web/API/HTMLElement/dir)-Eigenschaft gibt ihr Ergebnis jetzt immer in Kleinbuchstaben zurück, wie es die HTML-Spezifikation verlangt.
- Die Methode [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader) ist jetzt implementiert.
- `Document.createEntityReference` wurde entfernt. Es war nie korrekt implementiert und wird in den meisten anderen Browsern nicht implementiert.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt jetzt `undefined` zurück, wenn der `index` außerhalb der Grenzen liegt; zuvor wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die Schnittstellen `HTMLInsElement` und `HTMLDelElement` wurden entfernt, da die {{ HTMLElement("ins") }}- und {{ HTMLElement("del") }}-Elemente tatsächlich die [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)-Schnittstelle verwenden.
- In einem Bestreben, der kommenden [DOM4](https://dom.spec.whatwg.org/) Spezifikation zu entsprechen, in der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erben (wie in DOM Core 1, 2 und 3 der Fall war), melden viele [`Node`](/de/docs/Web/API/Node)-Eigenschaften und -Methoden auf der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle jetzt Warnungen, während wir uns darauf zubewegen, sie in einer späteren Version zu entfernen.
- Unterstützung für die Eigenschaften [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) in [`window`](/de/docs/Web/API/Window)-Objekten wurde hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) sind nicht länger auf das Hauptfenster anwendbar.

### JavaScript

- Die Eigenschaft `Function.arity` wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Einstellung `network.websocket.max-connections` wird verwendet, um die maximale Anzahl der gleichzeitig offenen WebSocket-Verbindungen zu bestimmen. Der Standardwert ist 200.
- Das zugrundeliegende WebSocket-Protokoll Version 8 (wie im [IETF-Draft 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) spezifiziert) wird jetzt anstelle des in Firefox 6 verwendeten Protokolls Version 7 verwendet.
- Die WebSocket-API ist jetzt auf Firefox Mobile verfügbar.

### console API

- Nachrichten, die mit `console.log` protokolliert werden, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, obwohl sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web-Timing

- Erste Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) Spezifikation, die Daten bereitstellt, die zur Messung der Leistung einer Website verwendet werden können.

### XML

- Zusätzlich zum zuvor unterstützten `text/xsl` können XSLT-Stile nun den offiziellen Internet-Media-Type `application/xslt+xml` verwenden (in der [Stylesheet-Verarbeitungsanweisung](https://www.w3.org/TR/xml-stylesheet/) oder dem [HTTP-Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)).

## Änderungen für Mozilla- und Add-On-Entwickler

Diese Änderungen betreffen sowohl Add-on-Entwickler als auch Entwickler, die an oder mit dem Mozilla-Code selbst arbeiten. Add-On-Entwickler sollten [Erweiterungen für Firefox 7 aktualisieren](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für zusätzliche Informationen ansehen.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, wie bei allen Hauptversionen von Firefox.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestream, die unsichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on-Manager hat neue Methoden zur Verwaltung von Add-on-Listen, die sich beim Anwendungsstart geändert haben: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>`-Elemente können jetzt den Zustand von Aufklappdreiecken speichern, wenn die durch `datasources` referenzierten Knoten alle eindeutige IDs haben, die durch "id"-Attribute angegeben sind.
- `<panel>`-Elemente können jetzt so konfiguriert werden, dass Benutzer sie ziehen können, indem sie irgendwo auf ihren Hintergrund klicken, indem das neue `backdrag`-Attribut verwendet wird.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es Ihnen, einen gründlichen Garbage-Collection-Zyklus zu einem Zeitpunkt in der Zukunft einzuplanen, wenn kein JavaScript-Code ausgeführt wird; ein Rückruf wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor mit `Components.utils.load()` geladene JavaScript-Code-Module zu entladen.

### Speicher-Reporter

Unterstützung für Multi-Reporter wurde hinzugefügt; das heißt, Speicher-Reporter, die auf Anfrage Daten sammeln und für jedes generierte Ergebnis einen Rückrufaufruf durchführen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die relevanten Schnittstellen sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen an der Benutzererfahrung

- Erweiterungsoptionen können nun im Add-on-Manager sowohl für neustartlose als auch für traditionelle Erweiterungen angezeigt werden.
- Das Ziel von Downloads wird jetzt auf einer Site-für-Site-Basis gespeichert. Auf diese Daten kann mit `DownloadLastDir.jsm` zugegriffen werden.

### Änderungen am Build-System

- Die ActiveX-Einbettungs-API wird nicht mehr gebaut und der Support wurde aus dem Build-System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten nicht mehr `-Zc:wchar_t-` beim Bauen auf Windows angeben.

### Schnittstellenänderungen

- `nsISocketTransport` bietet jetzt ein neues Verbindungs-Flag: `DISABLE_IPV6`; dies führt dazu, dass ein Socket nur versucht, nur IPV4-Adressen zu verbinden, und dabei alle verfügbaren IPv6-Adressen ignoriert. Zusätzlich bietet `nsIDNSService` jetzt ein neues Auflösungs-Flag: `RESOLVE_DISABLE_IPV6`; dies führt dazu, dass die Domainnamenauflösung nur IPv4-Hosts berücksichtigt und alle verfügbaren IPv6-Adressen ignoriert. Diese Änderungen werden zur Umsetzung der ["happy eyeballs" Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) verwendet, um die Antwortzeit zu verbessern, wenn versucht wird, auf Hosts zuzugreifen, die sowohl IPv4 als auch IPv6 unterstützen (insbesondere solche, die beschädigte IPv6-Konnektivität haben).
- `inIDOMUtils` hat zwei neue Methoden, `inIDOMUtils.getChildrenForNode()`, die eine Liste von Kindknoten eines Knotens zurückgibt, und `inIDOMUtils.getUsedFontFaces()`, das eine Liste der in einem Bereich genutzten Schriftschnitte zurückgibt.
- Die Schnittstelle `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` wurde mit der `nsIMarkupDocumentViewer`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDOMWindow2` wurde mit der `nsIDOMWindow`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDOMWindow_2_0_BRANCH` wurde mit der `nsIDOMWindowInternal`-Schnittstelle zusammengeführt.
- `nsINavHistoryObserver`-Methoden mit URI-Parametern erfordern jetzt auch eine GUID.
- Die Schnittstelle `nsISHistory_2_0_BRANCH` wurde mit der `nsISHistory`-Schnittstelle zusammengeführt.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm nach seiner ID zurückgibt, und ein neues Attribut `canRecord`, das bei Einstellung auf `false` das Aufzeichnen von Telemetriestatistiken deaktiviert. Telemetriestatistiken werden nicht mehr im privaten Browsing-Modus aufgezeichnet (siehe [Firefox Bug 661574](https://bugzil.la/661574) und [Firefox Bug 661573](https://bugzil.la/661573)). Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert sind, werden nicht im Telemetrie-Ping gemeldet.
- Die `nsIMemoryReporter`-Schnittstelle wurde erheblich geändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- Bei `nsIXMLHttpRequest` werden die durch `nsIXMLHttpRequest.setRequestHeader()` gesetzten Header bei einem Redirect mit der Anfrage gesendet. Früher wurden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn `true`, darf der Inhalt der `docshell` das Fenster steuern (also das Fenster bewegen oder die Größe ändern).
- Die Schnittstelle `nsIThreadInternal2` wurde in die `nsIThreadInternal`-Schnittstelle integriert.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt einen einzelnen Schriftschnitt.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftschnitten, die jeweils durch `nsIDOMFontFace` dargestellt werden.

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

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Themes beeinträchtigen.
- Das Aussehen des Druckvorschaufensters [wurde modernisiert](https://bugzil.la/663028) und Theme-Autoren werden ermutigt, es mit den CSS-Pseudoelementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu stylen.
