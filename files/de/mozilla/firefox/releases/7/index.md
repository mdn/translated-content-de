---
title: Firefox 7 für Entwickler
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 7 wurde am 27. September 2011 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen, die Entwickler betreffen – sowohl von Webinhalten als auch von Firefox-Add-ons.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) `profile`-Eigenschaft wurde entfernt, diese Eigenschaft ist seit Gecko 2.0 veraltet.
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `x`- und `y`-Eigenschaften wurden entfernt.
- Der `before`-Parameter der Methode `add()` von [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ist nun optional.
- Das Attribut [`background`](/de/docs/Web/HTML/Element/body#background) des {{ HTMLElement("body") }}-Elements wird nicht länger als URI aufgelöst; dies entspricht der aktuellen HTML-Spezifikation.
- Das Attribut [`label`](/de/docs/Web/HTML/Element/option#label) des {{ HTMLElement("option") }}-Elements spiegelt nun den Wert des Textinhalts des Elements wider, wenn das Attribut nicht angegeben ist.

#### Canvas

- Im Rahmen des [Azure-Projekts](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) wurde das Direct2D Azure Backend [implementiert](https://bugzil.la/651858) und wird die Leistung des 2D-Canvas signifikant verbessern.
- Die Angabe ungültiger Werte bei Aufrufen von `setTransform()`, `bezierCurveTo()` oder `arcTo()` löst keine Ausnahmen mehr aus; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Die Methode [`isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath) berücksichtigt nun korrekt die Transformationsmatrix, wenn der angegebene Punkt mit dem aktuellen Pfad verglichen wird.
- Der Aufruf von `strokeRect()` mit einer Breite und Höhe von null macht nun nichts mehr.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit einer Breite oder Höhe von null bei {{ HTMLElement("canvas") }} löst jetzt `INVALID_STATE_ERR` aus.
- Der Aufruf von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit unendlichen Koordinaten löst keine Ausnahme mehr aus.
- `toDataURL()`-Methode akzeptiert jetzt ein zweites Argument zur Steuerung der JPEG-Qualität.
- Die Unterstützung für die nicht standardmäßigen `globalCompositeOperation`-Operationen `clear` und `over` wurde entfernt.
- [Schatten](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows) werden jetzt nur für `source-over`-Kompositionsoperationen gezeichnet.
- Sie können nun die Füllregel verwenden, die von Canvas verwendet wird, indem Sie das `mozFillRule`-Attribut auf dem Kontext festlegen.
- Unterstützung für die experimentellen Attribute `mozDash`, `mozDashOffset`, `mozCurrentTransform` und `mozCurrentTransformInverse` wurde hinzugefügt.
- Unterstützung für die nicht standardmäßigen Methoden `mozDrawText()`, `mozMeasureText()`, `mozPathText()` und `mozTextAlongPath()` wurde entfernt.

### CSS

- {{ cssxref("text-overflow") }} wird nun unterstützt.
- Die Eigenschaft {{ cssxref("-moz-orient", "-moz-orient") }} wurde so verbessert, dass {{ HTMLElement("progress") }}-Elemente, die vertikal orientiert sind, angemessene Standardmaße haben.

### MathML

- XLink href wurde wiederhergestellt und das MathML3 `href`-Attribut wird nun unterstützt. Entwickler werden ermutigt, zur letzteren Syntax zu wechseln.
- Unterstützung für das `voffset`-Attribut auf {{ MathMLElement("mpadded") }}-Elementen wurde hinzugefügt und das Verhalten des `lspace`-Attributs wurde korrigiert.
- Das Top-Level-Element {{ MathMLElement("math") }} akzeptiert nun alle Attribute des {{ MathMLElement("mstyle") }}-Elements.
- Unterstützung für [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)-Schriftarten wurde hinzugefügt.
- Die mittlere Liniendicke von Bruchlinien in {{ MathMLElement("mfrac") }}-Elementen wurde korrigiert, um der Standarddicke zu entsprechen.
- [Namen für negative Räume](</de/docs/Web/MathML/Values#constants_(namedspaces)>) werden jetzt unterstützt.

### DOM

- Die nicht standardmäßigen Methoden `getAsBinary()`, `getAsDataURL()` und `getAsText()` der [`File`](/de/docs/Web/API/File)-Schnittstelle sowie die nicht standardmäßigen Eigenschaften `fileName` und `fileSize` wurden entfernt ([Firefox-Bug 661876](https://bugzil.la/661876)).
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle meldet den Dateinamen nicht mehr als leeren String, wenn der `Content-Disposition`-HTTP-Header gesendet wird, falls die Daten mit einem [`Blob`](/de/docs/Web/API/Blob) gesetzt wurden. Dies behebt Fehler, die bei einigen Servern auftraten.
- Die [`HTMLelement.dir`](/de/docs/Web/API/HTMLelement/dir)-Eigenschaft gibt nun immer ihr Ergebnis in Kleinbuchstaben zurück, wie es die HTML-Spezifikation erfordert.
- Die Methode `readAsArrayBuffer()` des [`FileReader`](/de/docs/Web/API/FileReader) ist nun implementiert.
- `Document.createEntityReference` wurde entfernt. Es wurde nie richtig implementiert und ist in den meisten anderen Browsern nicht implementiert.
- `document.normalizeDocument` wurde entfernt. Verwenden Sie stattdessen [`Node.normalize`](/de/docs/Web/API/Node/normalize).
- [`DOMTokenList.item`](/de/docs/Web/API/DOMTokenList/item) gibt nun `undefined` zurück, wenn der `index` außerhalb der Grenzen liegt, bisher wurde `null` zurückgegeben.
- `Node.getFeature` wurde entfernt.
- Die Schnittstellen `HTMLInsElement` und `HTMLDelElement` wurden entfernt, da die Elemente {{ HTMLElement("ins") }} und {{ HTMLElement("del") }} tatsächlich die [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)-Schnittstelle verwenden.
- Um der bevorstehenden [DOM4](https://dom.spec.whatwg.org/)-Spezifikation zu entsprechen, bei der [`Attr`](/de/docs/Web/API/Attr) nicht mehr von [`Node`](/de/docs/Web/API/Node) erben (es war in DOM Core 1, 2 und 3 der Fall), werden viele [`Node`](/de/docs/Web/API/Node)-Eigenschaften und -Methoden auf der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle jetzt [mit Warnungen gemeldet](/de/docs/Web/API/Attr#deprecated_properties_and_methods), während wir daran arbeiten, sie in einer späteren Version zu entfernen.
- Unterstützung für die Eigenschaften [`ondeviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) und [`ondevicemotion`](/de/docs/Web/API/Window/devicemotion_event) auf [`window`](/de/docs/Web/API/Window)-Objekten hinzugefügt.
- [`window.resizeTo`](/de/docs/Web/API/Window/resizeTo), [`window.resizeBy`](/de/docs/Web/API/Window/resizeBy), [`window.moveTo`](/de/docs/Web/API/Window/moveTo) und [`window.moveBy`](/de/docs/Web/API/Window/moveBy) gelten nicht mehr für das Hauptfenster.

### JavaScript

- Die Eigenschaft `Function.arity` wurde entfernt; verwenden Sie stattdessen [`Function.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### WebSockets

- Die Einstellung `network.websocket.max-connections` wird verwendet, um die maximale Anzahl von gleichzeitig geöffneten WebSocket-Verbindungen festzulegen. Der Standardwert ist 200.
- Die zugrunde liegende WebSocket-Protokollversion 8 (wie in [IETF Draft 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) spezifiziert) wird nun verwendet statt der Version 7, die von Firefox 6 genutzt wurde.
- Die WebSocket-API ist nun auch auf Firefox Mobile verfügbar.

### console API

- Nachrichten, die mit `console.log` protokolliert werden, während die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) nicht geöffnet ist, werden weiterhin protokolliert, obwohl sie nicht angezeigt werden, wenn die Webkonsole geöffnet wird.

### Web Timing

- Erste Implementierung der [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing)-Spezifikation, die Daten bereitstellt, die zur Messung der Leistung einer Website verwendet werden können.

### XML

- Zusätzlich zu dem bisher unterstützten `text/xsl` können XSLT-Stylesheets nun den offiziellen Internet-Medientyp (MIME-Typ) `application/xslt+xml` verwenden (in der [Stylesheet-Verarbeitungshinweis](https://www.w3.org/TR/xml-stylesheet/) oder dem [HTTP-Link-Header-Feld](https://datatracker.ietf.org/doc/html/rfc5988)).

## Änderungen für Mozilla- und Add-on-Entwickler

Diese Änderungen betreffen Add-on-Entwickler sowie Entwickler, die an oder mit Mozilla-Code arbeiten. Add-on-Entwickler sollten [Erweiterungen für Firefox 7 aktualisieren](/de/docs/Mozilla/Firefox/Releases/7/Updating_extensions) für zusätzliche Informationen ansehen.

> [!NOTE]
> Firefox 7 erfordert, dass Binärkomponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox.

### JavaScript-Code-Module

#### FileUtils.jsm

- Neue Methode `openFileOutputStream()` öffnet einen Dateiausgabestream, die nicht sichere Variante, zum Schreiben.

#### AddonManager.jsm

- Der Add-on-Manager hat neue Methoden zum Verwalten von Listen von Add-ons, die sich während des Anwendungsstarts geändert haben: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` und `AddonManager.getStartupChanges()`.

### XUL

- `<tree>`-Elemente können nun den Zustand der Aufklappdreiecke beibehalten, wenn die von `datasources` referenzierten Knoten alle eindeutige IDs haben, die durch "id"-Attribute angegeben sind.
- `<panel>`-Elemente können nun so konfiguriert werden, dass der Benutzer sie durch Klicken irgendwo auf deren Hintergrund ziehen kann, indem das neue `backdrag`-Attribut verwendet wird.

### XPCOM

- Die neue Methode `Components.utils.schedulePreciseGC()` ermöglicht es Ihnen, einen gründlichen Garbage-Collection-Zyklus in der Zukunft zu planen, wenn kein JavaScript-Code ausgeführt wird; ein Rückruf wird ausgeführt, sobald die Sammlung abgeschlossen ist.
- Die Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor durch Aufrufen von `Components.utils.load()` geladene JavaScript-Code-Module zu entladen.

### Memory Reporters

Unterstützung wurde für Multi-Reporter hinzugefügt; das heißt, Speicherreporter, die Daten auf Anforderung sammeln und einen Rückruf für jedes erzeugte Ergebnis aufrufen. Siehe `nsIMemoryMultiReporter` und `nsIMemoryMultiReporterCallback` für die entsprechenden Schnittstellen sowie die Methoden `nsIMemoryReporterManager.registerMultiReporter()` und `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Änderungen an der Benutzererfahrung

- Erweiterungsoptionen können nun im Add-on-Manager sowohl für neustartlose als auch für traditionelle Erweiterungen angezeigt werden.
- Das Ziel von Downloads wird nun seitenweise erinnert. Auf diese Daten kann unter Verwendung von `DownloadLastDir.jsm` zugegriffen werden.

### Änderungen am Build-System

- Die ActiveX-Einbettungs-API wird nicht mehr unterstützt und wurde aus dem Build-System entfernt. Unterstützende Schnittstellen wurden ebenfalls entfernt; siehe [Entfernte Schnittstellen](#entfernte_schnittstellen).
- Sie sollten `-Zc:wchar_t-` beim Erstellen unter Windows nicht mehr angeben.

### Schnittstellenänderungen

- `nsISocketTransport` bietet jetzt ein neues Verbindungs-Flag: `DISABLE_IPV6`; dies bewirkt, dass ein Socket nur versucht, eine Verbindung zu IPv4-Adressen herzustellen und vorhandene IPv6-Adressen ignoriert. Zusätzlich bietet `nsIDNSService` nun ein neues Auflösungs-Flag: `RESOLVE_DISABLE_IPV6`; dies bewirkt, dass die Domänennamenauflösung nur IPv4-Hosts berücksichtigt und vorhandene IPv6-Adressen ignoriert. Diese Änderungen werden verwendet, um die ["happy eyeballs" Strategie](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) zu implementieren, um die Reaktionszeit zu verbessern, wenn versucht wird, eine Verbindung zu Hosts herzustellen, die sowohl IPv4 als auch IPv6 unterstützen (insbesondere solche mit defekter IPv6-Konnektivität).
- `inIDOMUtils` hat zwei neue Methoden, `inIDOMUtils.getChildrenForNode()`, die eine Liste der Kindknoten eines Knotens zurückgibt, und `inIDOMUtils.getUsedFontFaces()`, die eine Liste der in einem Bereich verwendeten Schriftarten zurückgibt.
- Die Schnittstelle `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIMarkupDocumentViewer` zusammengeführt.
- Die `nsIDOMWindow2`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDOMWindow_2_0_BRANCH` wurde in die Schnittstelle `nsIDOMWindowInternal` zusammengeführt.
- `nsINavHistoryObserver`-Methoden mit URI-Parametern erfordern nun auch eine GUID.
- Die Schnittstelle `nsISHistory_2_0_BRANCH` wurde in die Schnittstelle `nsISHistory` zusammengeführt.
- `nsITelemetry` hat eine neue Methode, `nsITelemetry.getHistogramById()`, die ein Histogramm nach seiner ID zurückgibt, und ein neues Attribut, `canRecord`, das, wenn es auf `false` gesetzt wird, das Aufzeichnen von Telemetriestatistiken deaktiviert. Telemetriestatistiken werden im privaten Modus nicht mehr aufgezeichnet. (siehe [Firefox-Bug 661574](https://bugzil.la/661574) und [Firefox-Bug 661573](https://bugzil.la/661573)) Telemetrie-Histogramme, die mit `nsITelemetry.newHistogram()` definiert sind, werden im Telemetrie-Ping nicht gemeldet.
- Die `nsIMemoryReporter`-Schnittstelle wurde erheblich geändert; wenn Sie sie verwenden, müssen Sie einige Anpassungen an Ihrem Code vornehmen.
- In `nsIXMLHttpRequest`, die durch `nsIXMLHttpRequest.setRequestHeader()` gesetzten Header werden bei der Anfrage gesendet, wenn einer Weiterleitung gefolgt wird. Bisher wurden diese Header nicht gesendet.
- `nsIDocShell` hat ein neues `allowWindowControl`-Attribut. Wenn `true`, darf der Docshell-Inhalt das Fenster steuern (das heißt, das Fenster bewegen oder dessen Größe ändern).
- Die Schnittstelle `nsIThreadInternal2` wurde in die Schnittstelle `nsIThreadInternal` zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMFontFace`
  - : Beschreibt eine einzelne Schriftart.
- `nsIDOMFontFaceList`
  - : Beschreibt eine Liste von Schriftarten, die jeweils durch `nsIDOMFontFace` dargestellt werden.

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

- Die Struktur des Bibliotheksfensters (`places.xul`) [wurde bereinigt](https://bugzil.la/588027). Dies [kann Erweiterungen](https://bugzil.la/677417) und Designs beeinträchtigen.
- Das Aussehen des Druckvorschaufensters [wurde modernisiert](https://bugzil.la/663028) und Designautoren wird empfohlen, es mit den CSS-Pseudo-Elementen `::-moz-page`, `::-moz-page-sequence` und `::-moz-scrolled-page-sequence` zu gestalten.

## Siehe auch

{{Firefox_for_developers}}
