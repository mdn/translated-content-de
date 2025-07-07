---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{APIRef("SVG")}}

Die **`SVGSVGElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("svg")}}-Elementen sowie Methoden zu deren Manipulation. Diese Schnittstelle enthält außerdem verschiedene häufig verwendete Hilfsmethoden, wie Matrixoperationen und die Möglichkeit, die Zeit der Neuzeichnung auf visuellen Rendering-Geräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.viewBox`](/de/docs/Web/API/SVGSVGElement/viewBox) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect), das dem {{SVGAttr("viewBox")}}-Attribut des gegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.preserveAspectRatio`](/de/docs/Web/API/SVGSVGElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}}-Attribut des gegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.pixelUnitToMillimeterX`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterX) {{Deprecated_Inline}}
  - : Ein Float, der die Größe der Pixeleinheit (wie von CSS2 definiert) entlang der x-Achse des Viewports darstellt, was eine Einheit irgendwo im Bereich von 70dpi bis 120dpi repräsentiert und auf Systemen, die dies unterstützen, tatsächlich den Eigenschaften des Zielmediums entsprechen könnte. Auf Systemen, bei denen es unmöglich ist, die Größe eines Pixels zu kennen, wird eine geeignete Standardpixelgröße bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{Deprecated_Inline}}
  - : Ein Float, der die Größe einer Pixeleinheit entlang der y-Achse des Viewports darstellt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{Deprecated_Inline}}
  - : Benutzeroberfläche (UI)-Ereignisse in DOM Level 2 geben die Bildschirmpositionen an, an denen das gegebene UI-Ereignis aufgetreten ist. Wenn der Browser die physische Größe einer "Bildschirmeinheit" tatsächlich kennt, wird dieses Float-Attribut diese Information ausdrücken; andernfalls werden Benutzeragenten einen geeigneten Standardwert bereitstellen (wie z.B. `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{Deprecated_Inline}}
  - : Entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Viewports.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die anfängliche Ansicht (d.h. vor Vergrößerung und Verschiebung) des innersten SVG-Dokumentfragments kann entweder die "Standard"-Ansicht sein, d.h. basierend auf Attributen am {{SVGElement("svg")}}-Element wie {{SVGAttr("viewBox")}} oder auf einer "benutzerdefinierten" Ansicht (d.h. ein Hyperlink zu einem bestimmten {{SVGElement("view")}}- oder anderem Element). Wenn die anfängliche Ansicht die "Standard"-Ansicht ist, dann ist dieses Attribut `false`. Wenn die anfängliche Ansicht eine "benutzerdefinierte" Ansicht ist, dann ist dieses Attribut `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec), das die anfängliche Ansicht (d.h. vor Vergrößerung und Verschiebung) des aktuellen innersten SVG-Dokumentfragments definiert. Die Bedeutung hängt von der Situation ab:

    Wenn die anfängliche Ansicht eine "Standardansicht" war, dann:
    - stimmen die Werte für `viewBox`, `preserveAspectRatio` und `zoomAndPan` in `currentView` mit den Werten der entsprechenden DOM-Attribute überein, die sich direkt auf `SVGSVGElement` befinden
    - der Wert für `transform` innerhalb von `currentView` wird `null` sein

    Wenn die anfängliche Ansicht ein Link in ein {{SVGElement("view")}}-Element war, dann:
    - entsprechen die Werte für `viewBox`, `preserveAspectRatio` und `zoomAndPan` innerhalb von `currentView` den entsprechenden Attributen für das gegebene {{SVGElement("view")}}-Element
    - der Wert für `transform` innerhalb von `currentView` wird `null` sein

    Wenn die anfängliche Ansicht ein Link in ein anderes Element war (d.h. ein anderes als ein {{SVGElement("view")}}), dann:
    - stimmen die Werte für `viewBox`, `preserveAspectRatio` und `zoomAndPan` in `currentView` mit den Werten der entsprechenden DOM-Attribute überein, die sich direkt auf `SVGSVGElement` für das nächste Vorfahren-{{SVGElement("svg")}}-Element befinden
    - die Werte für `transform` innerhalb von `currentView` werden `null` sein

    Wenn die anfängliche Ansicht ein Link in das SVG-Dokumentfragment unter Verwendung eines SVG-Viewer-Spezifikations-Fragmentidentifikators war (d.h. `#svgView(…)`), dann:
    - werden die Werte für `viewBox`, `preserveAspectRatio`, `zoomAndPan` und `transform` in `currentView` den Werten aus dem SVG-Viewer-Spezifikations-Fragmentidentifikator entsprechen

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Auf einem äußersten {{SVGElement("svg")}}-Element gibt dieses Float-Attribut den aktuellen Skalierungsfaktor relativ zur anfänglichen Ansicht an, um Benutzervergrößerungen und -verschiebungen zu berücksichtigen. DOM-Attribute `currentScale` und `currentTranslate` entsprechen der 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d.h. `zoomAndPan="magnify"`), dann ist die Wirkung so, als ob eine zusätzliche Transformation auf der äußersten Ebene des SVG-Dokumentfragments platziert wäre (d.h. außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den Verschiebungsfaktor darstellt, der der Benutzer-"Vergrößerung" entspricht, und zwar auf ein äußerstes {{SVGElement("svg")}}-Element. Das Verhalten ist für `<svg>`-Elemente, die sich nicht auf der äußersten Ebene befinden, nicht definiert.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}
  - : Nimmt einen Timeout-Wert an, der angibt, dass eine Neuzeichnung nicht stattfinden soll, bis:

    der entsprechende `unsuspendRedraw()`-Aufruf gemacht wurde, ein `unsuspendRedrawAll()`-Aufruf gemacht wurde oder sein Timer abgelaufen ist.

    In Umgebungen, die Interaktivität nicht unterstützen (z.B. Druckmedien), soll die Neuzeichnung nicht ausgesetzt werden. Aufrufe zu `suspendRedraw()` und `unsuspendRedraw()` sollten, müssen aber nicht in abgestimmten Paaren gemacht werden.

    Um Neuzeichnungsaktionen auszusetzen, während eine Sammlung von SVG-DOM-Änderungen stattfindet, sollten die Änderungen am SVG-DOM mit einem Methodenaufruf, ähnlich wie:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    eingeleitet und die Änderungen mit einem Methodenaufruf, ähnlich wie:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    abgeschlossen werden.

    Beachten Sie, dass mehrere `suspendRedraw()`-Aufrufe gleichzeitig verwendet werden können und dass jeder dieser Methodenaufrufe unabhängig von den anderen `suspendRedraw()`-Methodenaufrufen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt ein angegebenes `suspendRedraw()` auf, indem eine eindeutige Aussetz-Handle-ID bereitgestellt wird, die von einem vorhergehenden `suspendRedraw()`-Aufruf zurückgegeben wurde.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle derzeit aktiven `suspendRedraw()`-Methodenaufrufe auf. Diese Methode ist besonders nützlich am Ende einer Reihe von SVG-DOM-Aufrufen, um sicherzustellen, dass alle ausstehenden `suspendRedraw()`-Methodenaufrufe aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : In Rendering-Umgebungen, die Interaktivität unterstützen, zwingt der Benutzeragent, sofort alle Bereiche des Viewports erneut zu zeichnen, die aktualisiert werden müssen.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Hält (d.h. pausiert) alle derzeit laufenden Animationen an, die innerhalb des SVG-Dokumentfragments definiert sind, das diesem {{SVGElement("svg")}}-Element entspricht, und bewirkt, dass die Animationsuhr des Dokumentfragments bis zum Fortsetzen stillsteht.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Setzt derzeit laufende Animationen, die innerhalb des SVG-Dokumentfragments definiert sind, fort und lässt die Animationsuhr von dem Zeitpunkt an fortfahren, an dem sie angehalten wurde.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn dieses SVG-Dokumentfragment in einem pausierten Zustand ist.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zur Startzeit des aktuellen SVG-Dokumentfragments zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor die Dokumentzeitleiste begonnen hat (z.B. von einem Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Passt die Uhr für dieses SVG-Dokumentfragment an und legt eine neue aktuelle Zeit fest. Wenn `setCurrentTime()` aufgerufen wird, bevor die Dokumentzeitleiste begonnen hat (z.B. von einem Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), gibt der Wert der Sekunden im letzten Aufruf dieser Methode die Zeit an, auf die das Dokument zugreift, sobald die Dokumentzeitleiste begonnen hat.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt das übergebene Rechteck schneidet. Jedes Kandidaten-Grafikelement soll nur dann als Übereinstimmung betrachtet werden, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt vollständig im übergebenen Rechteck enthalten ist. Jedes Kandidat-Grafikelement soll nur dann als Übereinstimmung betrachtet werden, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements das übergebene Rechteck schneidet. Jedes Kandidaten-Grafikelement soll nur dann als Übereinstimmung betrachtet werden, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements vollständig im übergebenen Rechteck enthalten ist. Jedes Kandidat-Grafikelement soll nur dann als Übereinstimmung betrachtet werden, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl aller ausgewählten Objekte auf, einschließlich aller Auswahlen von Textzeichenfolgen und Eingabebalken.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird auf `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird auf `0` Benutzerunits initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird auf einen Wert von `0` Grad (einheitenlos) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird auf den Punkt `(0,0)` im Benutzersystemkoordinatensystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird auf die Einheitsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird so initialisiert, dass alle Werte auf `0` Benutzerunits gesetzt sind.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird auf eine Identitätsmatrix-Transformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb irgendeines Dokumentbaums. Das Objekt wird auf die gegebene Matrix-Transformation (d.h. `SVG_TRANSFORM_MATRIX`) initialisiert. Die Werte aus der Parameter-Matrix werden kopiert, die Matrix-Parameter werden nicht als `SVGTransform::matrix` übernommen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Durchsucht dieses SVG-Dokumentfragment (d.h. die Suche ist auf einen Teilbaum des Dokuments beschränkt) nach einem Element, dessen `id` durch `elementId` gegeben ist. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn ein solches Element nicht existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese ID hat.

## Ereignishandler

Die folgenden `onXYZ`-Ereignishandler-Eigenschaften des [`Window`](/de/docs/Web/API/Window) sind ebenfalls als Aliase verfügbar, die auf das `window`-Objekt abzielen. Es wird jedoch empfohlen, sie direkt auf dem `window`-Objekt zu überwachen, anstatt auf `SVGSVGElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` an `SVGSVGElement` wird für die aufgeführten `onXYZ`-Ereignishandler nicht funktionieren. Hören Sie stattdessen auf die Ereignisse am [`window`](/de/docs/Web/API/Window)-Objekt.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument zu drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt werden soll oder zur Vorschau angezeigt wird.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erlangt und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus der Sitzungsverlauf anzuzeigen.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufs-Eintrag ändert, während der Benutzer durch den Sitzungsverlauf navigiert.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn immer eine JavaScript-{{jsxref("Promise")}} abgelehnt und die Ablehnung behandelt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn immer eine {{jsxref("Promise")}} abgelehnt wird, die Ablehnung jedoch nicht behandelt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
