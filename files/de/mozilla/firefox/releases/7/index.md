---
title: Firefox 7 für Entwickler
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel enthält Informationen über Änderungen, die Entwickler betreffen – sowohl von Webinhalten als auch von Firefox-Add-ons.

## Änderungen für Webentwickler

### HTML

- Die `profile`-Eigenschaft des {{ domxref("HTMLHeadElement") }} wurde entfernt, diese Eigenschaft ist seit Gecko 2.0 veraltet.
- Die `x`- und `y`-Eigenschaften des {{ domxref("HTMLImageElement") }} wurden entfernt.
- Der `before`-Parameter der Methode `add()` des {{ domxref("HTMLSelectElement") }} ist nun optional.
- Das [`background`](/de/docs/Web/HTML/Element/body#background)-Attribut des {{ HTMLElement("body") }}-Elements wird nicht mehr als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut des {{ HTMLElement("option") }}-Elements spiegelt jetzt den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung der 2D-Canvas erheblich verbessern.
- Ungültige Werte bei Aufrufen von `setTransform()`, `bezierCurveTo()` oder `arcTo()` werfen keine Ausnahme mehr; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die Methode [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) berücksichtigt jetzt korrekt die Transformationsmatrix, wenn der angegebene Punkt mit dem aktuellen Pfad verglichen wird.
- Ein Aufruf von `strokeRect()` mit null Breite und Höhe führt jetzt korrekt zu keiner Aktion.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit null Breite oder Höhe eines {{ HTMLElement("canvas") }} löst jetzt `INVALID_STATE_ERR` aus.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit nicht-endlichen Koordinaten wirft keine Ausnahme mehr.
- Die Methode `toDataURL()` akzeptiert jetzt ein zweites Argument zur Steuerung der JPEG-Qualität.
- Die Unterstützung für die nicht-standardisierten `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur noch für `source-over`-Kombinationsoperationen gezeichnet.
- Sie können jetzt die Füllregel der Canvas konfigurieren, indem Sie das `mozFillRule`-[Attribut](/de/docs/Web/API/CanvasRenderingContext2D#attributes) im Kontext setzen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Unterstützung für die nicht-standardisierten Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird jetzt unterstützt.
- Die {{ cssxref("-moz-orient", "-moz-orient") }}-Eigenschaft wurde repariert, sodass {{ HTMLElement("progress") }}-Elemente, die vertikal ausgerichtet sind, die entsprechenden Standardabmessungen haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3-`href`-Attribut wird jetzt unterstützt. Entwicklern wird empfohlen, zur letzteren Syntax zu wechseln.
- Unterstützung für das `voffset`-Attribut auf {{ MathMLElement("mpadded") }}-Elementen wurde hinzugefügt und das Verhalten des `lspace`-Attributs wurde behoben.
- Das oberste {{ MathMLElement("math") }}-Element akzeptiert jetzt alle Attribute des {{ MathMLElement("mstyle") }}-Elements.
- Unterstützung für die [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)-Schriftarten wurde hinzugefügt.
- Die `medium`-Linienstärke von Bruchstrichen in {{ MathMLElement("mfrac") }}-Elementen wurde korrigiert, um der Standardstärke zu entsprechen.
- [Namen für negative Leerzeichen](</de/docs/Web/MathML/Values#constants_(namedspaces)>) werden jetzt unterstützt.

### DOM

- Die nicht-standardisierten Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` der {{ domxref("File") }}-Schnittstelle sowie die nicht-standardisierten Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox-Bug 661876](https://bugzil.la/661876)).
- Die {{ domxref("FormData", "FormData") }}-Schnittstelle meldet den Dateinamen nicht mehr als leere Zeichenfolge, wenn der `Content-Disposition`-HTTP-Header gesendet wird und die Daten mit einem {{ domxref("Blob") }} festgelegt wurden. Dies behebt Fehler, die bei einigen Servern aufgetreten sind.
- Die {{ domxref("HTMLelement.dir") }}-Eigenschaft gibt ihr Ergebnis jetzt immer in Kleinbuchstaben zurück, wie es die HTML-Spezifikation verlangt.
- Die Methode `readAsArrayBuffer()` des {{ domxref("FileReader") }} wird jetzt implementiert.
- `Document.createEntityReference` wurde entfernt. Sie wurde nie richtig implementiert und ist in den meisten anderen Browsern nicht implementiert.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen {{ domxref("Node.normalize") }}.
- {{ domxref("DOMTokenList.item") }} gibt jetzt `undefined` zurück, wenn der `index` außerhalb des Gültigkeitsbereichs liegt, früher wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die Schnittstellen `HTMLInsElement` und `HTMLDelElement` wurden entfernt, da die {{ HTMLElement("ins") }}- und {{ HTMLElement("del") }}-Elemente tatsächlich die {{ domxref("HTMLModElement") }}-Schnittstelle verwenden.
- In einem Bestreben, sich an die kommende [DOM4](https://dom.spec.whatwg.org/)-Spezifikation anzupassen, bei der {{ domxref("Attr") }} nicht mehr von {{ domxref("Node") }} erben (was sie in DOM-Core 1, 2 und 3 taten), werden viele {{ domxref("Node") }}-Eigenschaften und -Methoden auf der {{ domxref("Attr") }}-Schnittstelle [jetzt Warnungen ausgeben](/de/docs/Web/API/Attr#deprecated_properties_and_methods), während wir daran arbeiten, sie in einer späteren Version zu entfernen.
- Unterstützung für die {{ domxref("window.deviceorientation_event", "ondeviceorientation") }}- und {{ domxref("window.devicemotion_event", "ondevicemotion") }}-Eigenschaften auf {{ domxref("window") }}-Objekten hinzugefügt.
- {{ domxref("window.resizeTo") }}, {{ domxref("window.resizeBy") }}, {{ domxref("window.moveTo") }} und {{ domxref("window.moveBy") }} gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die Eigenschaft `Function.arity` wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Präferenz `network.websocket.max-connections` wird verwendet, um die maximale Anzahl von WebSocket-Verbindungen zu bestimmen, die gleichzeitig geöffnet sein können. Der Standardwert ist 200.
- Das zugrunde liegende WebSocket-Protokoll Version 8 (wie spezifiziert im [IETF Draft 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10)) wird jetzt anstelle des Protokolls Version 7 verwendet, das von Firefox 6 verwendet wurde.
- Die WebSocket-API ist jetzt auf Firefox Mobile verfügbar.

### console API

- Nachrichten, die mit `console.log` protokolliert wurden, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, auch wenn sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web-Timing

- Erste Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing)-Spezifikation, die Daten bereitstellt, die zur Messung der Leistung einer Website verwendet werden können.

### XML

- Zusätzlich zu dem zuvor unterstützten `text/xsl` können XSLT-Stylesheets jetzt den offiziellen Internet-Medientyp `application/xslt+xml` verwenden (in der [Stylesheet-Verarbeitungsanweisung](https://www.w3.org/TR/xml-stylesheet/) oder im [HTTP-Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)).

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen Entwickler von Add-ons sowie Entwickler, die an oder mit Mozilla-Code arbeiten. Add-on-Entwickler sollten [Aktualisierung von Erweiterungen für Firefox 7](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für weitere Informationen ansehen.

> [!NOTE]
> Firefox 7 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox.

### JavaScript-Code-Module

#### FileUtils.jsm

- Neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestrom, die nicht-sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on-Manager hat neue Methoden zum Verwalten von Listen von Add-ons, die sich während des Anwendungsstarts geändert haben: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>`-Elemente können jetzt den Zustand von Offenlegungssymbolen beibehalten, wenn die von `datasources` referenzierten Knoten alle eindeutige IDs haben, die durch "id"-Attribute angegeben sind.
- `<panel>`-Elemente können jetzt mit dem neuen `backdrag`-Attribut so konfiguriert werden, dass der Benutzer sie durch Klicken irgendwo auf ihrem Hintergrund verschieben kann.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es, einen gründlichen Garbage-Collection-Zyklus für die Zukunft zu planen, wenn kein JavaScript-Code ausgeführt wird; ein Callback wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht das Entladen von JavaScript-Code-Modulen, die zuvor durch Aufruf von `Components.utils.load()` geladen wurden.

### Speichermelder

Unterstützung wurde für Multi-Reporter hinzugefügt, das heißt Speichermelder, die Daten auf Anfrage sammeln und einen Callback für jedes generierte Ergebnis aufrufen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für relevante Schnittstellen sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen in der Benutzererfahrung

- Erweiterungsoptionen können jetzt im Add-on-Manager sowohl für neustartlose als auch traditionelle Erweiterungen angezeigt werden.
- Das Ziel von Downloads wird jetzt auf einer Site-Basis gemerkt. Auf diese Daten kann mit `DownloadLastDir.jsm` zugegriffen werden.

### Änderungen am Build-System

- Die ActiveX-Einbettungs-API wird nicht mehr gebaut, und die Unterstützung wurde aus dem Build-System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten `-Zc:wchar_t-` beim Bauen unter Windows nicht mehr angeben.

### Schnittstellenänderungen

- `nsISocketTransport` bietet jetzt eine neue Verbindungsflagge: `DISABLE_IPV6`; dies führt dazu, dass ein Socket nur versucht, eine Verbindung zu IPv4-Adressen herzustellen und verfügbare IPv6-Adressen ignoriert. Außerdem bietet `nsIDNSService` jetzt eine neue Auflösungsflagge: `RESOLVE_DISABLE_IPV6`; dies bewirkt, dass die Domainnamenauflösung nur IPv4-Hosts betrachtet und verfügbare IPv6-Adressen ignoriert. Diese Änderungen werden verwendet, um die ["Happy Eyeballs"-Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) zur Verbesserung der Antwortzeit zu implementieren, wenn versucht wird, auf Hosts zuzugreifen, die sowohl IPv4- als auch IPv6-Unterstützung bieten (insbesondere solche, die über eine unterbrochene IPv6-Konnektivität verfügen).
- `inIDOMUtils` hat zwei neue Methoden, `inIDOMUtils.getChildrenForNode()`, die eine Liste von Kindknoten eines Knotens zurückgibt, und `inIDOMUtils.getUsedFontFaces()`, die eine Liste der in einem Bereich verwendeten Schriftarten zurückgibt.
- Die Schnittstelle `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` wurde in die `nsIMarkupDocumentViewer`-Schnittstelle integriert.
- Die Schnittstelle `nsIDOMWindow2` wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Die Schnittstelle `nsIDOMWindow_2_0_BRANCH` wurde in die `nsIDOMWindowInternal`-Schnittstelle integriert.
- `nsINavHistoryObserver`-Methoden mit URI-Parametern erfordern jetzt auch eine GUID.
- Die Schnittstelle `nsISHistory_2_0_BRANCH` wurde in die `nsISHistory`-Schnittstelle integriert.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm nach seiner ID zurückgibt, und ein neues Attribut `canRecord`, das, wenn auf `false` gesetzt, die Aufzeichnung von Telemetriestatistiken deaktiviert. Telemetriestatistiken werden im privaten Modus nicht mehr aufgezeichnet. (siehe [Firefox-Bug 661574](https://bugzil.la/661574) und [Firefox-Bug 661573](https://bugzil.la/661573)). Telemetriehistogramme, die mit `nsITelemetry.newHistogram()` definiert wurden, werden nicht im Telemetrie-Ping gemeldet.
- Die `nsIMemoryReporter`-Schnittstelle wurde erheblich verändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- Bei `nsIXMLHttpRequest` werden Header, die mit `nsIXMLHttpRequest.setRequestHeader()` gesetzt wurden, mit der Anfrage gesendet, wenn ein Redirect erfolgt. Zuvor wurden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn auf `true` gesetzt, ist es dem Inhalt der Docshell erlaubt, das Fenster zu steuern (d.h. das Fenster zu verschieben oder zu skalieren).
- Die Schnittstelle `nsIThreadInternal2` wurde in die `nsIThreadInternal`-Schnittstelle integriert.

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

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Themen beeinträchtigen.
- Das Erscheinungsbild des Druckvorschaufensters [wurde modernisiert](https://bugzil.la/663028) und Themenautoren werden ermutigt, es mit den CSS-Pseudoelementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu gestalten.

## Siehe auch

{{Firefox_for_developers}}
