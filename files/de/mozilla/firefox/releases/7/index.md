---
title: Firefox 7 für Entwickler
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{FirefoxSidebar}}

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen, die Entwickler betreffen — sowohl von Webinhalten als auch von Firefox-Erweiterungen.

## Änderungen für Webentwickler

### HTML

- Die `profile`-Eigenschaft des [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) wurde entfernt, diese Eigenschaft ist seit Gecko 2.0 veraltet.
- Die Eigenschaften `x` und `y` des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) wurden entfernt.
- Der `before`-Parameter der `add()`-Methode des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ist jetzt optional.
- Das Attribut [`background`](/de/docs/Web/HTML/Element/body#background) des {{ HTMLElement("body") }}-Elements wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das Attribut [`label`](/de/docs/Web/HTML/Element/option#label) des {{ HTMLElement("option") }}-Elements spiegelt jetzt den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung des 2D-Canvas erheblich verbessern.
- Das Angeben ungültiger Werte bei `setTransform()`, `bezierCurveTo()` oder `arcTo()` löst keine Ausnahme mehr aus; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die Methode [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) berücksichtigt nun die Transformationsmatrix korrekt, wenn der spezifizierte Punkt mit dem aktuellen Pfad verglichen wird.
- Das Aufrufen von `strokeRect()` mit einer Breite und Höhe von null bewirkt jetzt korrekt nichts.
- Das Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit einer Breite oder Höhe von null beim {{ HTMLElement("canvas") }} löst jetzt `INVALID_STATE_ERR` aus.
- Das Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit nicht-endlichen Koordinaten löst keine Ausnahme mehr aus.
- Die Methode `toDataURL()` akzeptiert jetzt ein zweites Argument zur Steuerung der JPEG-Qualität.
- Die Unterstützung für die nicht-standardmäßigen `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur noch für `source-over`-Kompositionsoperationen gezeichnet.
- Sie können jetzt die Füllregel des Canvas konfigurieren, indem Sie das `mozFillRule`-Attribut auf dem Kontext setzen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Die Unterstützung für die nicht-standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird jetzt unterstützt.
- Die Eigenschaft {{ cssxref("-moz-orient", "-moz-orient") }} wurde korrigiert, sodass {{ HTMLElement("progress") }}-Elemente, die vertikal orientiert sind, angemessene Standardabmessungen haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3-Attribut `href` wird jetzt unterstützt. Entwickler werden ermutigt, zur letzteren Syntax zu wechseln.
- Unterstützung für das `voffset`-Attribut auf {{ MathMLElement("mpadded") }}-Elementen wurde hinzugefügt und das Verhalten des `lspace`-Attributs wurde korrigiert.
- Das oberste {{ MathMLElement("math") }}-Element akzeptiert jetzt alle Attribute des {{ MathMLElement("mstyle") }}-Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)-Schriften wurde hinzugefügt.
- Die `medium`-Linienstärke von Bruchstrichen in {{ MathMLElement("mfrac") }}-Elementen wurde auf die Standardstärke korrigiert.
- [Namen für negative Abstände](</de/docs/Web/MathML/Reference/Values#constants_(namedspaces)>) werden jetzt unterstützt.

### DOM

- Die nicht-standardmäßigen Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` der [`File`](/de/docs/Web/API/File)-Schnittstelle sowie die nicht-standardmäßigen Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox-Fehler 661876](https://bugzil.la/661876)).
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle meldet den Dateinamen nicht mehr als leeren String, wenn der `Content-Disposition`-HTTP-Header gesendet wird, wenn die Daten mit einem [`Blob`](/de/docs/Web/API/Blob) gesetzt wurden. Dies behebt Fehler, die bei einigen Servern auftraten.
- Die [`HTMLelement.dir`](/de/docs/Web/API/HTMLelement/dir)-Eigenschaft gibt jetzt immer ihr Ergebnis in Kleinbuchstaben zurück, wie es die HTML-Spezifikation erfordert.
- Die `readAsArrayBuffer()`-Methode des [`FileReader`](/de/docs/Web/API/FileReader) ist jetzt implementiert.
- `Document.createEntityReference` wurde entfernt. Es wurde nie richtig implementiert und wird in den meisten anderen Browsern nicht implementiert.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt jetzt `undefined` zurück, wenn der `index` außerhalb der Grenzen liegt, zuvor wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die `HTMLInsElement` und `HTMLDelElement` Schnittstellen wurden entfernt, da die {{ HTMLElement("ins") }} und {{ HTMLElement("del") }} Elemente tatsächlich die [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)-Schnittstelle verwenden.
- In einem Bestreben, sich an die kommende [DOM4](https://dom.spec.whatwg.org/)-Spezifikation anzupassen, bei der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erben (wie in DOM Core 1, 2 und 3), geben viele [`Node`](/de/docs/Web/API/Node)-Eigenschaften und -Methoden auf der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle jetzt [Warnhinweise aus](/de/docs/Web/API/Attr#deprecated_properties_and_methods), während wir darauf hinarbeiten, sie in einer späteren Version zu entfernen.
- Unterstützung für die Eigenschaften [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) auf [`window`](/de/docs/Web/API/Window)-Objekten wurde hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die Eigenschaft `Function.arity` wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Einstellung `network.websocket.max-connections` bestimmt die maximale Anzahl von WebSocket-Verbindungen, die gleichzeitig geöffnet sein können. Der Standardwert ist 200.
- Das zugrunde liegende WebSocket-Protokoll Version 8 (wie in [IETF Entwurf 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) spezifiziert) wird jetzt anstelle des in Firefox 6 verwendeten Version 7 Protokolls verwendet.
- Die WebSocket-API ist jetzt auf Firefox Mobile verfügbar.

### Konsole API

- Nachrichten, die mit `console.log` protokolliert wurden, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, obwohl sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web Timing

- Erstimplementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing)-Spezifikation, die Daten bereitstellt, die zur Messung der Leistung einer Website verwendet werden können.

### XML

- Zusätzlich zum bisher unterstützten `text/xsl` können XSLT-Stylesheets jetzt den offiziellen Internet-Medientyp (MIME) `application/xslt+xml` verwenden (in der [Stylesheet-Verarbeitungseinweisung](https://www.w3.org/TR/xml-stylesheet/) oder dem [HTTP-Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)).

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen sowohl Add-on-Entwickler als auch Entwickler, die selbst an Mozilla-Code arbeiten oder mit ihm arbeiten. Add-on-Entwickler sollten [Erweiterungen für Firefox 7 aktualisieren](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für weitere Informationen lesen.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox.

### JavaScript-Code-Module

#### FileUtils.jsm

- Neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestream, die nicht sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on-Manager hat neue Methoden zur Verwaltung von Listen von Add-ons, die sich während des Anwendungsstarts geändert haben: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>`-Elemente können jetzt den Zustand von Offenlegungsdreiecken behalten, wenn die von `datasources` referenzierten Knoten alle eindeutige IDs haben, die durch "id"-Attribute angegeben werden.
- `<panel>`-Elemente können jetzt so konfiguriert werden, dass der Benutzer sie durch Klicken auf ihren Hintergrund ziehen kann, indem das neue `backdrag`-Attribut verwendet wird.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es Ihnen, eine gründliche Garbage-Collection-Zyklus zum Zeitpunkt einzuplanen, an dem kein JavaScript-Code ausgeführt wird; ein Rückruf wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor durch Aufrufen von `Components.utils.load()` geladene JavaScript-Code-Module zu entladen.

### Speicherberichte

Unterstützung für Multi-Reporter wurde hinzugefügt; das sind Speicherreporter, die auf Anfrage Daten sammeln und für jedes erzeugte Ergebnis einen Rückruf aufrufen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die entsprechenden Schnittstellen, sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen der Benutzeroberfläche

- Erweiterungsoptionen können jetzt im Add-on-Manager sowohl für Neustart-freie als auch für traditionelle Erweiterungen angezeigt werden.
- Das Ziel von Downloads wird jetzt seitenweise gespeichert. Diese Daten können mithilfe von `DownloadLastDir.jsm` abgerufen werden.

### Änderungen am Build-System

- Die ActiveX-Einbettungs-API wird nicht mehr gebaut und die Unterstützung wurde aus dem Build-System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten `-Zc:wchar_t-` nicht mehr verwenden, wenn Sie auf Windows kompilieren.

### Schnittstellenänderungen

- `nsISocketTransport` bietet jetzt eine neue Verbindungsflagge: `DISABLE_IPV6`; dies führt dazu, dass ein Socket nur versucht, Verbindungen zu IPv4-Adressen herzustellen, indem verfügbare IPv6-Adressen ignoriert werden. Zusätzlich bietet `nsIDNSService` jetzt eine neue Auflösungsflagge: `RESOLVE_DISABLE_IPV6`; dies führt dazu, dass die Domainnamenauflösung nur IPv4-Hosts berücksichtigt, verfügbare IPv6-Adressen ignoriert. Diese Änderungen werden verwendet, um die ["Happy Eyeballs"-Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) zur Verbesserung der Reaktionszeit bei dem Versuch, sich auf Hosts zu verbinden, die sowohl IPv4 als auch IPv6 unterstützen (insbesondere diejenigen, die eine fehlerhafte IPv6-Konnektivität haben), zu implementieren.
- `inIDOMUtils` hat zwei neue Methoden, `inIDOMUtils.getChildrenForNode()`, die eine Liste von Knoten-Kindern eines Knotens zurückgibt und `inIDOMUtils.getUsedFontFaces()`, die eine Liste der in einem Bereich verwendeten Schriftarten zurückgibt.
- Die Schnittstelle `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIMarkupDocumentViewer` zusammengeführt.
- Die Schnittstelle `nsIDOMWindow2` wurde in die Schnittstelle `nsIDOMWindow` zusammengeführt.
- Die Schnittstelle `nsIDOMWindow_2_0_BRANCH` wurde in die Schnittstelle `nsIDOMWindowInternal` zusammengeführt.
- `nsINavHistoryObserver`-Methoden mit URI-Parametern erfordern jetzt auch eine GUID.
- Die Schnittstelle `nsISHistory_2_0_BRANCH` wurde in die Schnittstelle `nsISHistory` zusammengeführt.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm anhand seiner ID zurückgibt, und ein neues Attribut `canRecord`, das, wenn es auf `false` gesetzt ist, das Aufzeichnen von Telemetrie-Statistiken deaktiviert. Telemetrie-Statistiken werden nicht mehr im privaten Browsing-Modus aufgezeichnet (siehe [Firefox-Fehler 661574](https://bugzil.la/661574) und [Firefox-Fehler 661573](https://bugzil.la/661573)). Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert sind, werden im Telemetrie-Ping nicht gemeldet.
- Die Schnittstelle `nsIMemoryReporter` wurde erheblich geändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- `nsIXMLHttpRequest`, Header, die mit `nsIXMLHttpRequest.setRequestHeader()` gesetzt werden, werden mit der Anfrage beim Folgen eines Redirects gesendet. Zuvor würden diese Header nicht gesendet werden.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn `true`, darf der Inhalt der Docshell das Fenster steuern (d.h. das Fenster verschieben oder seine Größe ändern).
- Die Schnittstelle `nsIThreadInternal2` wurde in die `nsIThreadInternal`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt eine einzelne Schriftart.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftarten, die jeweils durch `nsIDOMFontFace` repräsentiert werden.

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

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Themen brechen.
- Das Aussehen des Druckvorschaufensters [wurde modernisiert](https://bugzil.la/663028) und Theme-Autoren werden ermutigt, es mit den CSS-Pseudoelementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu stylen.

## Siehe auch

{{Firefox_for_developers}}
