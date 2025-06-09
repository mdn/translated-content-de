---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 43a8839abdfb01d4388f11a028582bec4e7ead18
---

{{APIRef("SVG")}}

Die **`SVGSVGElement`** Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("svg")}}-Elementen sowie Methoden zu deren Manipulation. Diese Schnittstelle enthält auch verschiedene häufig verwendete Hilfsmethoden, wie Matrixoperationen und die Möglichkeit, die Zeit des Neuzeichnens auf visuellen Ausgabegeräten zu steuern.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.viewBox`](/de/docs/Web/API/SVGSVGElement/viewBox) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect), das dem {{SVGAttr("viewBox")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.preserveAspectRatio`](/de/docs/Web/API/SVGSVGElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.pixelUnitToMillimeterX`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterX) {{Deprecated_Inline}}
  - : Ein Float, der die Größe der Pixel-Einheit (wie von CSS2 definiert) entlang der x-Achse des Ansichtsbereichs darstellt, die eine Einheit irgendwo im Bereich von 70dpi bis 120dpi repräsentiert und auf Systemen, die dies unterstützen, möglicherweise tatsächlich den Eigenschaften des Zielmediums entspricht. Auf Systemen, bei denen es unmöglich ist, die Größe eines Pixels zu kennen, wird eine geeignete Standard-Pixelgröße bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{Deprecated_Inline}}
  - : Ein Float, der die Größe einer Pixel-Einheit entlang der y-Achse des Ansichtsbereichs darstellt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{Deprecated_Inline}}
  - : Benutzeroberflächen-Ereignisse (UI) in DOM Level 2 geben die Bildschirmpositionen an, an denen das bestimmte UI-Ereignis aufgetreten ist. Wenn der Browser tatsächlich die physische Größe einer "Bildschirmeinheit" kennt, wird dieses Float-Attribut diese Informationen ausdrücken; andernfalls bieten Benutzeragenten einen geeigneten Standardwert an (wie zum Beispiel `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{Deprecated_Inline}}
  - : Entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Ansichtsbereichs.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Anfangsansicht (d.h. vor Vergrößerung und Schwenken) des aktuell innersten SVG-Dokumentfragments kann entweder die "Standard"-Ansicht sein, d.h. basierend auf Attributen des {{SVGElement("svg")}}-Elements wie {{SVGAttr("viewBox")}} oder eine "benutzerdefinierte" Ansicht (d.h. ein Hyperlink auf ein bestimmtes {{SVGElement("view")}} oder ein anderes Element). Wenn die Anfangsansicht die "Standard"-Ansicht ist, dann ist dieses Attribut `false`. Wenn die Anfangsansicht eine "benutzerdefinierte" Ansicht ist, dann ist dieses Attribut `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Ein [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec), der die Anfangsansicht (d.h. vor Vergrößerung und Schwenken) des aktuell innersten SVG-Dokumentfragments definiert. Die Bedeutung hängt von der Situation ab: Wenn die Anfangsansicht eine "Standard"-Ansicht war, dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten der entsprechenden DOM-Attribute entsprechen, die direkt auf `SVGSVGElement` sind
    - der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} wird `null` sein

    Wenn die Anfangsansicht ein Link zu einem {{SVGElement("view")}}-Element war, dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den entsprechenden Attributen für das gegebene {{SVGElement("view")}}-Element entsprechen
    - der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} wird `null` sein

    Wenn die Anfangsansicht ein Link zu einem anderen Element war (d.h. anderes als ein {{SVGElement("view")}}), dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten der entsprechenden DOM-Attribute entsprechen, die direkt auf `SVGSVGElement` für das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element sind
    - die Werte für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} werden `null` sein

    Wenn die Anfangsansicht ein Link in das SVG-Dokumentfragment mit einem SVG-Ansichtsspezifikations-Fragment-Identifikator war (d.h. `#svgView(…)`), dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} den Werten aus dem SVG-Ansichtsspezifikations-Fragment-Identifikator entsprechen

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Bei einem äußersten {{SVGElement("svg")}}-Element zeigt dieses Floating-Attribut den aktuellen Skalierungsfaktor relativ zur Anfangsansicht an, um Benutzervergrößerung und Schwenkoperationen zu berücksichtigen. DOM-Attribute `currentScale` und `currentTranslate` sind äquivalent zur 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d.h. `zoomAndPan="magnify"`), ist der Effekt so, als ob eine zusätzliche Transformation auf der äußersten Ebene des SVG-Dokumentfragments platziert wäre (d.h. außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den Übersetzungsfaktor darstellt, der die Benutzer-"Vergrößerung" berücksichtigt und einem äußersten {{SVGElement("svg")}}-Element entspricht. Das Verhalten ist für `<svg>`-Elemente auf einer nicht äußersten Ebene nicht definiert.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}

  - : Nimmt einen Timeout-Wert entgegen, der angibt, dass kein Neuzeichnen stattfinden soll, bis:

    der entsprechende `unsuspendRedraw()`-Aufruf gemacht wurde, ein `unsuspendRedrawAll()`-Aufruf gemacht wurde oder sein Timer abgelaufen ist.

    In Umgebungen, die Interaktivität nicht unterstützen (z.B. Druckmedien), sollte das Neuzeichnen nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten in ausgeglichenen Paaren erfolgen, müssen es aber nicht.

    Um Neuzeichnungsaktionen auszusetzen, während eine Sammlung von SVG-DOM-Änderungen erfolgt, gehen Sie den Änderungen am SVG-DOM mit einem Methodenaufruf wie:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    und folgen Sie den Änderungen mit einem Methodenaufruf wie:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere `suspendRedraw()`-Aufrufe gleichzeitig verwendet werden können und dass jeder solcher Methodenaufruf unabhängig von den anderen `suspendRedraw()`-Methodenaufrufen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt eine bestimmte `suspendRedraw()`-Aufhebung durch Bereitstellung einer eindeutigen Suspend-Handle-ID auf, die von einem vorherigen `suspendRedraw()`-Aufruf zurückgegeben wurde.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle derzeit aktiven `suspendRedraw()`-Methodenaufrufe auf. Diese Methode ist besonders nützlich am Ende eines Satzes von SVG-DOM-Aufrufen, um sicherzustellen, dass alle ausstehenden `suspendRedraw()`-Methodenaufrufe aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : In Rendering-Umgebungen, die Interaktivität unterstützen, zwingt der Benutzeragent dazu, alle Bereiche des Ansichtsbereichs, die ein Update erfordern, sofort neu zu zeichnen.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Unterbricht (d.h. pausiert) alle derzeit laufenden Animationen, die innerhalb des SVG-Dokumentfragments definiert sind, das dem {{SVGElement("svg")}}-Element entspricht, wodurch die Animationsuhr für dieses Dokumentfragment stillsteht, bis sie fortgesetzt wird.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Nimmt derzeit laufende (d.h. pausierte) Animationen wieder auf, die innerhalb des SVG-Dokumentfragments definiert sind, wodurch die Animationsuhr von dem Zeitpunkt an fortgesetzt wird, zu dem sie angehalten wurde.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn dieses SVG-Dokumentfragment in einem pausierten Zustand ist.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zur Startzeit für das aktuelle SVG-Dokumentfragment zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor der Dokumentzeitstrahl begonnen hat (zum Beispiel durch Skript in einem {{SVGElement("script")}}-Element, bevor das `SVGLoad`-Ereignis des Dokuments gesendet wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Passt die Uhr für dieses SVG-Dokumentfragment an und legt eine neue aktuelle Zeit fest. Wenn `setCurrentTime()` aufgerufen wird, bevor der Dokumentzeitstrahl begonnen hat (zum Beispiel durch Skript in einem {{SVGElement("script")}}-Element, bevor das `SVGLoad`-Ereignis des Dokuments gesendet wird), gibt der Wert der Sekunden im letzten Aufruf der Methode die Zeit an, zu der das Dokument springen wird, sobald der Dokumentzeitstrahl begonnen hat.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt das angegebene Rechteck schneidet. Jedes Kandidat-Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn das gleiche Grafikelement ein Ziel für Zeigereignisse sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt vollständig in dem angegebenen Rechteck enthalten ist. Jedes Kandidat-Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn dasselbe Grafikelement ein Ziel für Zeigereignisse sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements das angegebene Rechteck schneidet. Jedes Kandidat-Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn dasselbe Grafikelement ein Ziel für Zeigereignisse sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements vollständig in dem angegebenen Rechteck enthalten ist. Jedes Kandidat-Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn dasselbe Grafikelement ein Ziel für Zeigereignisse sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl aller ausgewählten Objekte auf, einschließlich ausgewählter Textzeichenfolgen und Eingabebalken.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber) Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength) Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf `0` Benutzereinheiten initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle) Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf einen Wert von `0` Grad (einheitenlos) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf den Punkt `(0,0)` im Benutzerkoordinatensystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf die Einheitsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect) Objekt außerhalb von Dokumentbäumen. Das Objekt wird initialisiert, sodass alle Werte auf `0` Benutzereinheiten gesetzt sind.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf eine Einheitsmatrixtransformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf die gegebene Matrixtransformation (d.h. `SVG_TRANSFORM_MATRIX`) initialisiert. Die Werte aus der Parameter-Matrix werden kopiert, die Matrix-Parameter werden nicht als `SVGTransform::matrix` vorgesehen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Durchsucht dieses SVG-Dokumentfragment (d.h. die Suche ist auf einen Teilbaum des Dokuments beschränkt) nach einem `Element`, dessen `id` durch `elementId` angegeben ist. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn kein solches Element existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese id hat.

## Ereignisbehandler

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ` Ereignisbehandler-Eigenschaften sind auch als Aliase verfügbar, die das `window`-Objekt ansprechen. Es wird jedoch empfohlen, sie direkt auf dem `window`-Objekt zu überwachen, anstatt auf `SVGSVGElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` für `SVGSVGElement` funktioniert nicht für die unten aufgeführten `onXYZ`-Ereignisbehandler. Lauschen Sie stattdessen auf die Ereignisse auf dem [`window`](/de/docs/Web/API/Window) Objekt.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für den Druck in der Vorschau angezeigt werden soll.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Tastenkombination/eine Achse des Gamepads verwendet wurde.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, beispielsweise durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) zu `false` wechselt.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugriff auf das Netzwerk erhalten hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) zu `true` wechselt.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus der Sitzungsgeschichte anzuzeigen.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer in der Sitzungsgeschichte navigiert.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird und die Ablehnung behandelt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird jedes Mal ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wird, aber die Ablehnung nicht behandelt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
