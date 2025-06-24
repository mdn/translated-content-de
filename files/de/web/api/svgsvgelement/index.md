---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}

Die **`SVGSVGElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("svg")}}-Elementen sowie Methoden zu deren Manipulation. Diese Schnittstelle enthält außerdem verschiedene häufig verwendete Hilfsmethoden, wie Matrixoperationen und die Möglichkeit, die Zeit der Neuzeichnung auf visuellen Ausgabegeräten zu steuern.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

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
  - : Ein Float, der die Größe der Pixeleinheit (wie in CSS2 definiert) entlang der x-Achse des Ansichtsfensters darstellt, welche irgendwo im Bereich von 70dpi bis 120dpi liegt. Auf Systemen, die dies unterstützen, könnte sie die Eigenschaften des Zielmediums tatsächlich treffen. Auf Systemen, bei denen die Größe eines Pixels unbekannt ist, wird eine geeignete Standard-Pixelgröße bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{Deprecated_Inline}}
  - : Ein Float, der die Größe einer Pixeleinheit entlang der y-Achse des Ansichtsfensters darstellt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{Deprecated_Inline}}
  - : Benutzeroberflächenereignisse (UI) in DOM Level 2 geben die Bildschirmpositionen an, an denen das gegebene UI-Ereignis aufgetreten ist. Wenn der Browser die physische Größe einer "Bildschirmeinheit" tatsächlich kennt, wird dieses Float-Attribut diese Information ausdrücken; andernfalls werden Benutzeragenten einen geeigneten Standardwert bereitstellen (z.B. `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{Deprecated_Inline}}
  - : Die entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Ansichtsfensters.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die anfängliche Ansicht (d.h. vor Vergrößerung und Schwenken) des aktuellen innersten SVG-Dokumentfragments kann entweder die "Standard"-Ansicht sein, d.h. basierend auf Attributen auf dem {{SVGElement("svg")}}-Element wie {{SVGAttr("viewBox")}} oder auf einer "benutzerdefinierten" Ansicht (d.h. ein Hyperlink in ein bestimmtes {{SVGElement("view")}} oder ein anderes Element). Wenn die anfängliche Ansicht die "Standard"-Ansicht ist, dann ist dieses Attribut `false`. Wenn die anfängliche Ansicht eine "benutzerdefinierte" Ansicht ist, ist dieses Attribut `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Ein [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec), das die anfängliche Ansicht (d.h. vor Vergrößerung und Schwenken) des aktuellen innersten SVG-Dokumentfragments definiert. Die Bedeutung hängt von der Situation ab: Wenn die anfängliche Ansicht eine "Standard"-Ansicht war, dann:

    - stimmen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} mit den Werten für die entsprechenden DOM-Attribute überein, die direkt auf `SVGSVGElement` liegen
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die anfängliche Ansicht ein Link in ein {{SVGElement("view")}}-Element war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den entsprechenden Attributen für das gegebene {{SVGElement("view")}}-Element
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die anfängliche Ansicht ein Link in ein anderes Element war (d.h. nicht ein {{SVGElement("view")}}), dann:

    - stimmen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} mit den Werten für die entsprechenden DOM-Attribute überein, die direkt auf `SVGSVGElement` für das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element liegen
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die anfängliche Ansicht ein Link in das SVG-Dokumentfragment mittels eines SVG-Ansichtspezifikationsfragmentidentifikators war (d.h. `#svgView(…)`), dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} den Werten aus dem SVG-Ansichtspezifikationsfragmentidentifikator

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Bei einem äußersten {{SVGElement("svg")}}-Element gibt dieses Float-Attribut den aktuellen Skalierungsfaktor relativ zur Anfangsansicht an, um Benutzervergrößerung und Schwenkoperationen zu berücksichtigen. DOM-Attribute `currentScale` und `currentTranslate` entsprechen der 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d.h. `zoomAndPan="magnify"`), dann ist die Wirkung so, als ob eine zusätzliche Transformation auf höchster Ebene im SVG-Dokumentfragment platziert wäre (d.h. außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den Translationsfaktor darstellt, der die Benutzer-"Vergrößerung" für ein äußerstes {{SVGElement("svg")}}-Element berücksichtigt. Das Verhalten ist für `<svg>`-Elemente, die nicht auf der äußersten Ebene sind, undefiniert.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrer Elternschnittstelle, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}

  - : Nimmt einen Timeout-Wert an, der angibt, dass keine Neuzeichnung erfolgen soll, bis:

    der entsprechende `unsuspendRedraw()`-Aufruf vorgenommen wurde, ein `unsuspendRedrawAll()`-Aufruf erfolgt ist oder sein Timer abgelaufen ist.

    In Umgebungen, die keine Interaktivität unterstützen (z. B. Druckmedien), soll die Neuzeichnung nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten, müssen jedoch nicht paarweise ausgeglichen sein.

    Um Neuzeichnungsaktionen zu pausieren, während eine Sammlung von SVG-DOM-Änderungen stattfindet, führen Sie die Änderungen am SVG-DOM mit einem Methodenaufruf wie:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    und schließen die Änderungen mit einem Methodenaufruf wie:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere `suspendRedraw()`-Aufrufe gleichzeitig verwendet werden können und dass jeder dieser Methodenaufrufe unabhängig von den anderen `suspendRedraw()`-Methodenaufrufen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt ein angegebenes `suspendRedraw()` auf, indem eine eindeutige Aussetzungs-Handle-ID bereitgestellt wird, die von einem vorherigen `suspendRedraw()`-Aufruf zurückgegeben wurde.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle derzeit aktiven `suspendRedraw()`-Methodenaufrufe auf. Diese Methode ist am nützlichsten am Ende eines Satzes von SVG-DOM-Aufrufen, um sicherzustellen, dass alle ausstehenden `suspendRedraw()`-Methodenaufrufe aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : In Rendering-Umgebungen, die Interaktivität unterstützen, zwingt der Benutzeragent, alle Bereiche des Ansichtsfensters, die aktualisiert werden müssen, sofort neu zu zeichnen.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Hält (d.h. pausiert) alle derzeit laufenden Animationen an, die innerhalb des diesem {{SVGElement("svg")}}-Element entsprechenden SVG-Dokumentfragments definiert sind, wodurch die Animationsuhr, die diesem Dokumentfragment entspricht, stillsteht, bis sie wieder gestartet wird.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Setzt derzeit laufende Animationen fort (d.h. spielt sie wieder ab), die innerhalb des SVG-Dokumentfragments definiert sind und lässt die Animationsuhr von dem Zeitpunkt an weiterlaufen, an dem sie angehalten wurde.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn dieses SVG-Dokumentfragment in einem pausierten Zustand ist.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zur Startzeit für das aktuelle SVG-Dokumentfragment zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor der Dokumentzeitstrahl begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments gesendet wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Passt die Uhr für dieses SVG-Dokumentfragment an, indem eine neue aktuelle Zeit festgelegt wird. Wenn `setCurrentTime()` aufgerufen wird, bevor der Dokumentzeitstrahl begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments gesendet wird), gibt der Wert der Sekunden im letzten Aufruf der Methode die Zeit an, auf die das Dokument suchen wird, sobald der Dokumentzeitstrahl begonnen hat.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt das angegebene Rechteck schneidet. Jedes Kandidatenelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement ein Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes Kandidatenelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement ein Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements das angegebene Rechteck schneidet. Jedes Kandidatenelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement ein Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes Kandidatenelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement ein Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl aller ausgewählten Objekte auf, einschließlich jeglicher Auswahl von Textzeichenfolgen und Eingabeleisten.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf `0` Benutzereinheiten initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf einen Wert von `0` Grad (einheitenlos) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf den Punkt `(0,0)` im Benutzerkoordinatensystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf die Identitätsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird so initialisiert, dass alle Werte auf `0` Benutzereinheiten gesetzt sind.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf eine Identitätstransformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf die gegebene Matrixtransformation initialisiert (d.h. `SVG_TRANSFORM_MATRIX`). Die Werte aus der Parametermatrix werden kopiert, die Matrixparameter werden nicht als `SVGTransform::matrix` übernommen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Durchsucht dieses SVG-Dokumentfragment (d.h. die Suche ist auf einen Teilbereich des Dokumentbaums beschränkt) nach einem Element, dessen `id` durch `elementId` angegeben wird. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn kein solches Element existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese id hat.

## Ereignishandler

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ` Ereignishandler-Eigenschaften sind auch als Aliase verfügbar, die auf das `window`-Objekt zielen. Es wird jedoch empfohlen, sie direkt auf dem `window`-Objekt anstelle von `SVGSVGElement` zu beobachten.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `SVGSVGElement` funktioniert nicht für die unten aufgeführten `onXYZ` Ereignishandler. Hören Sie stattdessen auf die Ereignisse auf dem [`window`](/de/docs/Web/API/Window)-Objekt.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau dargestellt werden soll.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Taste/Achse des Gamepads verwendet wird.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, z.B. aus einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugriff auf das Netzwerk erhalten hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite verbirgt, um eine andere Seite aus der Sitzungshistorie anzuzeigen.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters wegen Navigation anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Geschichtsbeitrag ändert, während der Benutzer die Sitzungshistorie navigiert.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird und diese Ablehnung behandelt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird jedes Mal ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wurde, aber die Ablehnung nicht behandelt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument gerade entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
