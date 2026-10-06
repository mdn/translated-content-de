---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGSVGElement`** bietet Zugriff auf die Eigenschaften von {{SVGElement("svg")}}-Elementen sowie Methoden zu deren Bearbeitung. Sie enthält außerdem verschiedene häufig verwendete Hilfsmethoden, etwa für Matrixoperationen und zur Steuerung des Zeitpunkts, zu dem die Darstellung auf visuellen Ausgabegeräten neu gezeichnet wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des jeweiligen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des jeweiligen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des jeweiligen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des jeweiligen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.viewBox`](/de/docs/Web/API/SVGSVGElement/viewBox) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect), das dem Attribut {{SVGAttr("viewBox")}} des jeweiligen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.preserveAspectRatio`](/de/docs/Web/API/SVGSVGElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem Attribut {{SVGAttr("preserveAspectRatio")}} des jeweiligen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.pixelUnitToMillimeterX`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterX) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Eine Gleitkommazahl, die die Größe der Pixeleinheit (gemäß CSS2) entlang der x-Achse des Viewports angibt. Diese Einheit liegt im Bereich von 70 bis 120 dpi und kann auf Systemen, die dies unterstützen, den tatsächlichen Eigenschaften des Zielmediums entsprechen. Auf Systemen, auf denen die Größe eines Pixels nicht bestimmt werden kann, wird ein geeigneter Standardwert bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Eine Gleitkommazahl, die die Größe einer Pixeleinheit entlang der y-Achse des Viewports angibt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : UI-Ereignisse in DOM Level 2 geben die Bildschirmposition an, an der das jeweilige Ereignis aufgetreten ist. Wenn der Browser die physische Größe einer „Bildschirmeinheit“ kennt, gibt dieses Gleitkommaattribut sie an. Andernfalls stellen User Agents einen geeigneten Standardwert bereit (beispielsweise `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Viewports.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Ausgangsansicht (also vor Vergrößerung und Verschiebung) des aktuellen innersten SVG-Dokumentfragments kann entweder die „Standardansicht“ sein, die auf Attributen des {{SVGElement("svg")}}-Elements wie {{SVGAttr("viewBox")}} basiert, oder eine „benutzerdefinierte“ Ansicht, die beispielsweise durch einen Hyperlink auf ein bestimmtes {{SVGElement("view")}}-Element oder ein anderes Element festgelegt wird. Bei einer Standardansicht ist dieses Attribut `false`, bei einer benutzerdefinierten Ansicht `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec), die die Ausgangsansicht (also vor Vergrößerung und Verschiebung) des aktuellen innersten SVG-Dokumentfragments definiert. Die Bedeutung hängt von der jeweiligen Situation ab. War die Ausgangsansicht eine Standardansicht, gilt:
    - Die Werte von `viewBox`, `preserveAspectRatio` und `zoomAndPan` in `currentView` stimmen mit den Werten der entsprechenden DOM-Attribute direkt auf `SVGSVGElement` überein.
    - Der Wert von `transform` in `currentView` ist `null`.

    War die Ausgangsansicht ein Link auf ein {{SVGElement("view")}}-Element, gilt:
    - Die Werte von `viewBox`, `preserveAspectRatio` und `zoomAndPan` in `currentView` entsprechen den jeweiligen Attributen des betreffenden {{SVGElement("view")}}-Elements.
    - Der Wert von `transform` in `currentView` ist `null`.

    War die Ausgangsansicht ein Link auf ein anderes Element als ein {{SVGElement("view")}}-Element, gilt:
    - Die Werte von `viewBox`, `preserveAspectRatio` und `zoomAndPan` in `currentView` stimmen mit den Werten der entsprechenden DOM-Attribute direkt auf `SVGSVGElement` für das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element überein.
    - Der Wert von `transform` in `currentView` ist `null`.

    War die Ausgangsansicht ein Link auf das SVG-Dokumentfragment mit einem Fragmentbezeichner gemäß der SVG-Ansichtsspezifikation (also `#svgView(…)`), gilt:
    - Die Werte von `viewBox`, `preserveAspectRatio`, `zoomAndPan` und `transform` in `currentView` entsprechen den Werten aus diesem Fragmentbezeichner.

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Bei einem äußersten {{SVGElement("svg")}}-Element gibt dieses Gleitkommaattribut den aktuellen Skalierungsfaktor relativ zur Ausgangsansicht an und berücksichtigt dabei Vergrößerungs- und Verschiebevorgänge durch Benutzer. Die DOM-Attribute `currentScale` und `currentTranslate` entsprechen der 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn die Vergrößerung aktiviert ist (also `zoomAndPan="magnify"`), entspricht der Effekt einer zusätzlichen Transformation auf der äußersten Ebene des SVG-Dokumentfragments (also außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), das den Verschiebungsfaktor darstellt, der die Vergrößerung durch Benutzer für ein äußerstes {{SVGElement("svg")}}-Element berücksichtigt. Für `<svg>`-Elemente, die sich nicht auf der äußersten Ebene befinden, ist das Verhalten nicht definiert.

## Instanzmethoden

_Diese Schnittstelle erbt außerdem Methoden von ihrer übergeordneten Schnittstelle [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}
  - : Nimmt einen Timeout-Wert entgegen, der angibt, dass die Darstellung erst dann neu gezeichnet werden soll, wenn:

    der zugehörige Aufruf von `unsuspendRedraw()` oder ein Aufruf von `unsuspendRedrawAll()` erfolgt ist oder der Timeout abgelaufen ist.

    In Umgebungen ohne Interaktivität (beispielsweise Printmedien) soll das Neuzeichnen nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten, müssen aber nicht, paarweise erfolgen.

    Um das Neuzeichnen während einer Reihe von Änderungen am SVG-DOM auszusetzen, stellen Sie den Änderungen einen Methodenaufruf wie den folgenden voran:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    Fügen Sie nach den Änderungen einen Methodenaufruf wie den folgenden hinzu:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere Aufrufe von `suspendRedraw()` gleichzeitig verwendet werden können und jeder Aufruf unabhängig von den anderen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt einen bestimmten Aufruf von `suspendRedraw()` auf. Dazu wird die eindeutige Handle-ID übergeben, die ein vorheriger Aufruf von `suspendRedraw()` zurückgegeben hat.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle derzeit aktiven Aufrufe von `suspendRedraw()` auf. Diese Methode ist besonders am Ende einer Reihe von SVG-DOM-Aufrufen nützlich, um sicherzustellen, dass alle noch ausstehenden Aufrufe von `suspendRedraw()` aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : Erzwingt in interaktiven Darstellungsumgebungen, dass der User Agent alle zu aktualisierenden Bereiche des Viewports sofort neu zeichnet.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Setzt alle derzeit laufenden Animationen im SVG-Dokumentfragment des betreffenden {{SVGElement("svg")}}-Elements aus. Die Animationsuhr dieses Dokumentfragments bleibt stehen, bis die Animationen fortgesetzt werden.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Setzt die laufenden Animationen im SVG-Dokumentfragment fort. Die Animationsuhr läuft ab dem Zeitpunkt weiter, an dem sie angehalten wurde.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn die Animationen dieses SVG-Dokumentfragments angehalten sind.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zum Startzeitpunkt des aktuellen SVG-Dokumentfragments zurück. Wird `getCurrentTime()` aufgerufen, bevor die Dokument-Zeitleiste begonnen hat (beispielsweise durch ein Skript in einem {{SVGElement("script")}}-Element, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Stellt die Uhr für dieses SVG-Dokumentfragment ein und legt damit eine neue aktuelle Zeit fest. Wird `setCurrentTime()` aufgerufen, bevor die Dokument-Zeitleiste begonnen hat (beispielsweise durch ein Skript in einem {{SVGElement("script")}}-Element, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), bestimmt der Sekundenwert des letzten Methodenaufrufs, zu welchem Zeitpunkt das Dokument springt, sobald die Dokument-Zeitleiste beginnt.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) mit Grafikelementen zurück, deren dargestellter Inhalt das angegebene Rechteck schneidet. Ein infrage kommendes Grafikelement gilt nur dann als Treffer, wenn es gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} Ziel von Pointer-Ereignissen sein kann.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) mit Grafikelementen zurück, deren dargestellter Inhalt vollständig innerhalb des angegebenen Rechtecks liegt. Ein infrage kommendes Grafikelement gilt nur dann als Treffer, wenn es gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} Ziel von Pointer-Ereignissen sein kann.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der dargestellte Inhalt des angegebenen Elements das angegebene Rechteck schneidet. Ein infrage kommendes Grafikelement gilt nur dann als Treffer, wenn es gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} Ziel von Pointer-Ereignissen sein kann.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der dargestellte Inhalt des angegebenen Elements vollständig innerhalb des angegebenen Rechtecks liegt. Ein infrage kommendes Grafikelement gilt nur dann als Treffer, wenn es gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} Ziel von Pointer-Ereignissen sein kann.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl aller ausgewählten Objekte auf, einschließlich ausgewählter Textzeichenfolgen und Eingabebalken.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt außerhalb aller Dokumentbäume. Das Objekt wird mit `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt außerhalb aller Dokumentbäume. Das Objekt wird mit `0` Benutzereinheiten initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt außerhalb aller Dokumentbäume. Das Objekt wird mit einem Wert von `0` Grad (ohne Einheit) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt außerhalb aller Dokumentbäume. Das Objekt wird mit dem Punkt `(0,0)` im Benutzerkoordinatensystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt außerhalb aller Dokumentbäume. Das Objekt wird mit der Einheitsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt außerhalb aller Dokumentbäume. Alle Werte des Objekts werden mit `0` Benutzereinheiten initialisiert.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb aller Dokumentbäume. Das Objekt wird mit einer Einheitsmatrix-Transformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb aller Dokumentbäume. Das Objekt wird mit der angegebenen Matrixtransformation (`SVG_TRANSFORM_MATRIX`) initialisiert. Die Werte der als Parameter übergebenen Matrix werden kopiert; die Matrix selbst wird nicht als `SVGTransform::matrix` übernommen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Durchsucht dieses SVG-Dokumentfragment – also nur einen Teil des Dokumentbaums – nach einem Element, dessen `id` dem Wert von `elementId` entspricht. Wird ein Element gefunden, wird es zurückgegeben. Andernfalls wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehrere Elemente dieselbe id haben.

## Ereignisbehandler

Die folgenden `onXYZ`-Ereignisbehandler-Eigenschaften von [`Window`](/de/docs/Web/API/Window) sind auch als Aliase verfügbar, die auf das `window`-Objekt verweisen. Es wird jedoch empfohlen, die Ereignisse direkt auf dem `window`-Objekt statt auf `SVGSVGElement` zu überwachen.

> [!NOTE]
> `addEventListener()` auf `SVGSVGElement` funktioniert für die unten aufgeführten `onXYZ`-Ereignisbehandler nicht. Überwachen Sie die Ereignisse stattdessen auf dem [`window`](/de/docs/Web/API/Window)-Objekt.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem der Druck des zugehörigen Dokuments begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder in der Druckvorschau angezeigt werden soll.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und dessen Ressourcen entladen werden sollen.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde, oder wenn erstmals eine Taste oder Achse des Gamepads verwendet wird.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL ändert (der Teil der URL, der mit dem Zeichen `#` beginnt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, beispielsweise durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing Context.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Netzwerkzugriff verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) zu `false` wechselt.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Netzwerkzugriff erhält und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) zu `true` wechselt.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser infolge einer Navigation das Dokument des Fensters anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer durch den Sitzungsverlauf navigiert.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn eine JavaScript-{{jsxref("Promise")}} abgelehnt wurde und die Ablehnung behandelt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn eine {{jsxref("Promise")}} abgelehnt wurde, die Ablehnung aber nicht behandelt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
