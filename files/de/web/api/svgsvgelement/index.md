---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Das **`SVGSVGElement`** Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("svg")}}-Elementen sowie Methoden, um diese zu manipulieren. Dieses Interface enthält auch verschiedene, häufig verwendete Dienstmethoden, wie Matrixoperationen und die Möglichkeit, die Zeit für das Neuzeichnen auf visuellen Ausgabegeräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.viewBox`](/de/docs/Web/API/SVGSVGElement/viewBox) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect), das dem {{SVGAttr("viewBox")}} Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.preserveAspectRatio`](/de/docs/Web/API/SVGSVGElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}} Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- [`SVGSVGElement.pixelUnitToMillimeterX`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterX) {{Deprecated_Inline}}
  - : Ein Float-Wert, der die Größe der Pixeleinheit (wie in CSS2 definiert) entlang der x-Achse des Viewports darstellt, welcher eine Einheit im Bereich von 70dpi bis 120dpi repräsentiert und auf Systemen, die das unterstützen, tatsächlich den Eigenschaften des Zielmediums entsprechen kann. Auf Systemen, wo es unmöglich ist, die Größe eines Pixels zu kennen, wird eine geeignete Standard-Pixelgröße bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{Deprecated_Inline}}
  - : Ein Float-Wert, der die Größe einer Pixeleinheit entlang der y-Achse des Viewports darstellt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{Deprecated_Inline}}
  - : Benutzeroberflächenereignisse (UI) in DOM Level 2 geben die Bildschirmpositionen an, an denen das angegebene UI-Ereignis aufgetreten ist. Wenn der Browser tatsächlich die physische Größe einer "Bildschirmeinheit" kennt, drückt dieses Float-Attribut diese Information aus; andernfalls stellen die Benutzeragenten einen geeigneten Standardwert bereit (zum Beispiel `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{Deprecated_Inline}}
  - : Entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Viewports.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die initiale Ansicht (d.h. vor Vergrößerung und Verschiebung) des aktuellen innersten SVG-Dokumentfragments kann entweder die "Standard"-Ansicht sein, d.h. basierend auf Attributen auf dem {{SVGElement("svg")}}-Element wie {{SVGAttr("viewBox")}}, oder eine "benutzerdefinierte" Ansicht sein (d.h. ein Hyperlink zu einem bestimmten {{SVGElement("view")}} oder einem anderen Element). Wenn die initiale Ansicht die "Standard"-Ansicht ist, dann ist dieses Attribut `false`. Wenn die initiale Ansicht eine "benutzerdefinierte" Ansicht ist, dann ist dieses Attribut `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Ein [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec) definiert die initiale Ansicht (d.h. vor Vergrößerung und Verschiebung) des aktuellen innersten SVG-Dokumentfragments. Die Bedeutung hängt von der Situation ab: Wenn die initiale Ansicht eine "Standard"-Ansicht war, dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten der entsprechenden DOM-Attribute entsprechen, die direkt auf `SVGSVGElement` vorhanden sind
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die initiale Ansicht ein Link zu einem {{SVGElement("view")}}-Element war, dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den entsprechenden Attributen für das gegebene {{SVGElement("view")}}-Element entsprechen
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die initiale Ansicht ein Link zu einem anderen Element (d.h. außer einem {{SVGElement("view")}}) war, dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten der entsprechenden DOM-Attribute entsprechen, die direkt auf `SVGSVGElement` für das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element vorhanden sind
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die initiale Ansicht ein Link in das SVG-Dokumentfragment mit einem SVG-View-Spezifikations-Fragment-Identifikator (d.h. `#svgView(…)`) war, dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} den Werten aus dem SVG-View-Spezifikations-Fragment-Identifikator entsprechen

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Bei einem äußersten {{SVGElement("svg")}}-Element zeigt dieses Float-Attribut den aktuellen Skalierungsfaktor relativ zur initialen Ansicht an, um Benutzerskalierung und Verschiebungsoperationen zu berücksichtigen. DOM-Attribute `currentScale` und `currentTranslate` sind gleichwertig zur 2×3 Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d.h. `zoomAndPan="magnify"`), dann ist der Effekt so, als ob eine zusätzliche Transformation auf der äußersten Ebene im SVG-Dokumentfragment platziert wäre (d.h. außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint), das den Translationsfaktor darstellt, um die Benutzer-"Vergrößerung" zu berücksichtigen, entsprechend einem äußersten {{SVGElement("svg")}}-Element. Das Verhalten ist für `<svg>`-Elemente, die nicht auf der äußersten Ebene sind, nicht definiert.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}

  - : Akzeptiert einen Zeitwert, welcher angibt, dass kein Neuzeichnen erfolgen soll, bis:

    der entsprechende `unsuspendRedraw()` Aufruf gemacht wurde, ein `unsuspendRedrawAll()` Aufruf gemacht wurde oder sein Timer abgelaufen ist.

    In Umgebungen, die keine Interaktivität unterstützen (z.B. Druckmedien), soll das Neuzeichnen nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten in ausbalancierten Paaren gemacht werden, aber müssen es nicht.

    Um Neuzeichnungsaktionen auszusetzen, während eine Sammlung von Änderungen am SVG-DOM durchgeführt wird, sollten Sie die Änderungen am SVG-DOM mit einem Methodenaufruf wie folgt einleiten:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    und die Änderungen mit einem Methodenaufruf wie folgt abschließen:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere `suspendRedraw()` Aufrufe gleichzeitig verwendet werden können und dass jeder dieser Methodenaufrufe unabhängig von den anderen `suspendRedraw()` Methodenaufrufen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt ein angegebenes `suspendRedraw()` auf, indem es eine eindeutige Suspend-Handle-ID bereitstellt, die von einem vorherigen `suspendRedraw()`-Aufruf zurückgegeben wurde.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle aktuell aktiven `suspendRedraw()` Methodenaufrufe auf. Diese Methode ist am nützlichsten am Ende einer Reihe von SVG-DOM-Aufrufen, um sicherzustellen, dass alle anstehenden `suspendRedraw()` Methodenaufrufe aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : In Renderumgebungen, die Interaktivität unterstützen, zwingt dieser Aufruf den Benutzeragenten dazu, sofort alle Bereiche des Viewports neu zu zeichnen, die aktualisiert werden müssen.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Hält alle aktuell laufenden Animationen an, die innerhalb des SVG-Dokumentfragments definiert sind, das diesem {{SVGElement("svg")}}-Element entspricht, wodurch die Animationsuhr, die diesem Dokumentfragment entspricht, stillsteht, bis sie fortgesetzt wird.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Setzt derzeit laufende Animationen fort, die innerhalb des SVG-Dokumentfragments definiert sind, wodurch die Animationsuhr ab dem Zeitpunkt weiterläuft, zu dem sie angehalten wurde.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn dieses SVG-Dokumentfragment sich in einem angehaltenen Zustand befindet.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zur Startzeit für das aktuelle SVG-Dokumentfragment zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor die Dokument-Zeitachse begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Passt die Uhr für dieses SVG-Dokumentfragment an und stellt eine neue aktuelle Zeit ein. Wenn `setCurrentTime()` aufgerufen wird, bevor die Dokument-Zeitachse begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), gibt der Sekundenwert im letzten Aufruf der Methode die Zeit an, zu der das Dokument sich bewegen wird, sobald die Dokument-Zeitachse begonnen hat.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt das angegebene Rechteck schneidet. Jedes Kandidaten-Grafikelement wird nur dann als übereinstimmend betrachtet, wenn dasselbe Grafikelement ein Ziel für Zeigereignisse gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} sein kann.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes Kandidaten-Grafikelement wird nur dann als übereinstimmend betrachtet, wenn dasselbe Grafikelement ein Ziel für Zeigereignisse gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} sein kann.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements das angegebene Rechteck schneidet. Jedes Kandidaten-Grafikelement wird nur dann als übereinstimmend betrachtet, wenn dasselbe Grafikelement ein Ziel für Zeigereignisse gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} sein kann.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes Kandidaten-Grafikelement wird nur dann als übereinstimmend betrachtet, wenn dasselbe Grafikelement ein Ziel für Zeigereignisse gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} sein kann.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl jeglicher ausgewählter Objekte auf, einschließlich jeglicher Auswahl von Textzeichenfolgen und Eingabebalken.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf `0` Benutzereinheiten initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf einen Wert von `0` Grad (einheitenlos) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf den Punkt `(0,0)` im Benutzerkoordinatensystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf die Identitätsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird so initialisiert, dass alle Werte auf `0` Benutzereinheiten gesetzt sind.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf eine Identitätsmatrixtransformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf die gegebene Matrixtransformation (d.h. `SVG_TRANSFORM_MATRIX`) initialisiert. Die Werte aus der Parameter-Matrix werden kopiert, die Matrix wird nicht als `SVGTransform::matrix` übernommen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Durchsucht dieses SVG-Dokumentfragment (d.h. die Suche ist auf einen Teilbaum des Dokuments beschränkt) nach einem Element, dessen `id` durch `elementId` angegeben wird. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn kein solches Element existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese id hat.

## Ereignis-Handler

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ`-Ereignishandler-Eigenschaften stehen auch als Aliase für das `window`-Objekt zur Verfügung. Es wird jedoch empfohlen, sie direkt am `window`-Objekt zu überwachen, anstatt am `SVGSVGElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` am `SVGSVGElement` funktioniert nicht für die unten aufgeführten `onXYZ`-Ereignishandler. Überwachen Sie die Ereignisse stattdessen am [`window`](/de/docs/Web/API/Window)-Objekt.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für den Druck vorangesehen wird.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen oder zum ersten Mal ein Button/eine Achse des Gamepads betätigt wurde.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel von einem Aufruf an [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` umschaltet.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erhält und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` umschaltet.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, während er eine andere Seite aus dem Sitzungsverlauf präsentiert.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag geändert wird, während der Benutzer den Sitzungsverlauf navigiert.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird und die Ablehnung gehandhabt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird jedes Mal ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wird, aber die Ablehnung nicht gehandhabt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
