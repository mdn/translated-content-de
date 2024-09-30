---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGSVGElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften der {{SVGElement("svg")}}-Elemente sowie Methoden, um sie zu manipulieren. Diese Schnittstelle enthält auch verschiedene häufig verwendete Hilfsmethoden, wie Matrixoperationen und die Möglichkeit, die Zeit der Neuzeichnung auf visuellen Ausgabegeräten zu steuern.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des angegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des angegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des angegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des angegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.pixelUnitToMillimeterX`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterX) {{Deprecated_Inline}}
  - : Ein Float, der die Größe der Pixeleinheit (wie in CSS2 definiert) entlang der x-Achse des Viewports darstellt, was eine Einheit irgendwo im Bereich von 70dpi bis 120dpi repräsentiert und auf Systemen, die dies unterstützen, möglicherweise den Eigenschaften des Zielmediums entspricht. Auf Systemen, auf denen es unmöglich ist, die Größe eines Pixels zu kennen, wird eine geeignete Standardpixelgröße bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{Deprecated_Inline}}
  - : Ein Float, der die Größe einer Pixeleinheit entlang der y-Achse des Viewports darstellt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{Deprecated_Inline}}
  - : Benutzeroberflächenereignisse (UI) in DOM Level 2 geben die Bildschirmpositionen an, an denen das gegebene UI-Ereignis auftrat. Wenn der Browser tatsächlich die physische Größe einer „Bildschirmeinheit“ kennt, drückt dieses Float-Attribut diese Information aus; andernfalls stellen Benutzeragenten einen geeigneten Standardwert bereit (z. B. `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{Deprecated_Inline}}
  - : Entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Viewports.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die initiale Ansicht (d.h. vor Vergrößerung und Schwenken) des aktuellen, innersten SVG-Dokumentfragments kann entweder die „Standard“-Anschicht sein, d.h. basierend auf Attributen des {{SVGElement("svg")}} Elements wie {{SVGAttr("viewBox")}}) oder auf einer „benutzerdefinierten“ Ansicht (d.h. ein Hyperlink zu einem bestimmten {{SVGElement("view")}} oder anderen Elementen). Wenn die initiale Ansicht die „Standard“-Ansicht ist, dann ist dieses Attribut `false`. Wenn die initiale Ansicht eine „benutzerdefinierte“ Ansicht ist, dann ist dieses Attribut `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Ein [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec), das die initiale Ansicht (d.h. vor Vergrößerung und Schwenken) des aktuellen, innersten SVG-Dokumentfragments definiert. Die Bedeutung hängt von der Situation ab: Wenn die initiale Ansicht eine „Standard“-Ansicht war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten für die entsprechenden DOM-Attribute, die direkt auf `SVGSVGElement` liegen
    - der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} wird `null` sein

    Wenn die initiale Ansicht ein Link zu einem {{SVGElement("view")}} Element war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den entsprechenden Attributen für das gegebene {{SVGElement("view")}} Element
    - der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} wird `null` sein

    Wenn die initiale Ansicht ein Link zu einem anderen Element war (d. h., außer einem {{SVGElement("view")}}), dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten für die entsprechenden DOM-Attribute, die direkt auf `SVGSVGElement` für das nächste Vorfahrelement {{SVGElement("svg")}} liegen
    - die Werte für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} werden `null` sein

    Wenn die initiale Ansicht ein Link in das SVG-Dokumentfragment mit einem SVG-Ansichtsspezifikations-Fragmentbezeichner war (d. h. `#svgView(…)`), dann:

    - werden die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} den Werten aus dem Fragmentbezeichner der SVG-Ansichtsspezifikation entsprechen

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Bei einem äußersten {{SVGElement("svg")}} Element zeigt dieses Float-Attribut den aktuellen Skalierungsfaktor relativ zur initialen Ansicht an, um die Vergrößerung und Schwenkoperationen des Benutzers zu berücksichtigen. DOM-Attribute `currentScale` und `currentTranslate` sind äquivalent zur 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d. h. `zoomAndPan="magnify"`), dann entspricht die Wirkung dem Platzieren einer zusätzlichen Transformation auf der äußersten Ebene des SVG-Dokumentfragments (d. h. außerhalb des äußersten {{SVGElement("svg")}} Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint), der den Übersetzungsfaktor darstellt, der die Benutzer-"Vergrößerung" für ein äußerstes {{SVGElement("svg")}} Element berücksichtigt. Das Verhalten ist für `<svg>` Elemente, die nicht auf der äußersten Ebene liegen, nicht definiert.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}

  - : Nimmt einen Timeout-Wert, der angibt, dass keine Neuzeichnung stattfinden soll, bis:

    der entsprechende `unsuspendRedraw()`-Aufruf erfolgt ist, ein `unsuspendRedrawAll()`-Aufruf erfolgt ist oder sein Timer abgelaufen ist.

    In Umgebungen, die keine Interaktivität unterstützen (z. B. Druckmedien), darf die Neuzeichnung nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten paarweise erfolgen, müssen es aber nicht.

    Um Neuzeichnungsaktionen bei einer Sammlung von SVG-DOM-Änderungen auszusetzen, gehen Sie den Änderungen am SVG-DOM mit einem Methodenaufruf wie dem folgenden voraus:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    und folgen Sie den Änderungen mit einem Methodenaufruf wie dem folgenden:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere `suspendRedraw()`-Aufrufe gleichzeitig verwendet werden können und dass jeder dieser Methodenaufrufe unabhängig von den anderen `suspendRedraw()`-Methodenaufrufen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt eine angegebene `suspendRedraw()` durch Bereitstellung einer eindeutigen Aussetzungs-Handle-ID auf, die von einem früheren `suspendRedraw()`-Aufruf zurückgegeben wurde.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle derzeit aktiven `suspendRedraw()`-Methodenaufrufe auf. Diese Methode ist am nützlichsten am Ende einer Reihe von SVG-DOM-Aufrufen, um sicherzustellen, dass alle ausstehenden `suspendRedraw()`-Methodenaufrufe aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : Erzwingt in Rendering-Umgebungen, die Interaktivität unterstützen, dass der Benutzeragent alle Bereiche des Viewports, die aktualisiert werden müssen, sofort neu zeichnet.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Setzt alle derzeit laufenden Animationen, die im SVG-Dokumentfragment definiert sind, das diesem {{SVGElement("svg")}}-Element entspricht, aus (d.h. pausiert sie), wodurch die Animationsuhr dieses Dokumentfragments stillsteht, bis sie fortgesetzt wird.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Nimmt derzeit laufende Animationen, die innerhalb des SVG-Dokumentfragments definiert sind, wieder auf (d.h. setzt sie fort), wodurch die Animationsuhr ab dem Zeitpunkt weiterläuft, an dem sie pausiert wurde.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn dieses SVG-Dokumentfragment in einem pausierten Zustand ist.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zur Startzeit für das aktuelle SVG-Dokumentfragment zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor die Dokumentzeitachse begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments abgesendet wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Passt die Uhr für dieses SVG-Dokumentfragment an und stellt eine neue aktuelle Zeit ein. Wenn `setCurrentTime()` aufgerufen wird, bevor die Dokumentzeitachse begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments abgesendet wird), gibt der Wert der Sekunden im letzten Aufruf dieser Methode die Zeit an, zu der das Dokument zurückspringt, sobald die Dokumentzeitachse begonnen hat.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt das angegebene Rechteck schneidet. Jedes in Frage kommende Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen im Sinne der {{SVGAttr("pointer-events")}}-Verarbeitung sein kann.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes in Frage kommende Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen im Sinne der {{SVGAttr("pointer-events")}}-Verarbeitung sein kann.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements das angegebene Rechteck schneidet. Jedes in Frage kommende Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen im Sinne der {{SVGAttr("pointer-events")}}-Verarbeitung sein kann.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements vollständig im angegebenen Rechteck enthalten ist. Jedes in Frage kommende Grafikelement ist nur dann als Übereinstimmung zu betrachten, wenn dasselbe Grafikelement ein Ziel von Zeigerereignissen im Sinne der {{SVGAttr("pointer-events")}}-Verarbeitung sein kann.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl aller ausgewählten Objekte auf, einschließlich aller Auswahl von Textzeichenfolgen und Tipp-Eingabebalken.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf `0` Benutzereinheiten initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf einen Wert von `0` Grad (ohne Einheit) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf den Punkt `(0,0)` im Benutzerkoordinatensystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`SVGMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf die Einheitsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird so initialisiert, dass alle Werte auf `0` Benutzereinheiten gesetzt sind.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf eine Identitätsmatrix-Transformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb von Dokumentbäumen. Das Objekt wird auf die gegebene Matrix-Transformation (d.h. `SVG_TRANSFORM_MATRIX`) initialisiert. Die Werte der Parameter-Matrix werden kopiert, die Matrix-Parameter werden nicht als `SVGTransform::matrix` übernommen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Durchsucht dieses SVG-Dokumentfragment (d.h. die Suche beschränkt sich auf einen Teilbaum des Dokuments) nach einem Element, dessen `id` durch `elementId` angegeben wird. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn kein solches Element existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese id hat.

## Ereignis-Handler

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ` Ereignis-Handler-Eigenschaften sind auch als Aliase verfügbar, die auf das `window`-Objekt abzielen. Es wird jedoch empfohlen, sie direkt auf dem `window`-Objekt anstatt auf `SVGSVGElement` zu hören.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `SVGSVGElement` funktioniert nicht für die unten aufgeführten `onXYZ` Ereignis-Handler. Hören Sie stattdessen die Ereignisse auf dem [`window`](/de/docs/Web/API/Window)-Objekt ab.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau geöffnet werden soll.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder zum ersten Mal ein Button/eine Achse des Gamepads verwendet wird.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk erlangt hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus der Sitzungsgeschichte anzuzeigen.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktuelle Verlaufseintrag geändert wird, während der Benutzer durch die Verlaufssitzung navigiert.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird und die Ablehnung gehandhabt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird jedes Mal ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wird, die Ablehnung jedoch nicht gehandhabt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
