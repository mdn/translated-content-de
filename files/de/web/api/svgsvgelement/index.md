---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGSVGElement`** Schnittstelle bietet Zugang zu den Eigenschaften von {{SVGElement("svg")}}-Elementen sowie zu Methoden, um diese zu manipulieren. Diese Schnittstelle enthält außerdem verschiedene häufig verwendete Hilfsmethoden, wie Matrixoperationen und die Möglichkeit, die Zeit des Redraws auf visuellen Darstellungseinrichtungen zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des gegebenen {{SVGElement("svg")}} Elements entspricht.
- [`SVGSVGElement.pixelUnitToMillimeterX`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterX) {{Deprecated_Inline}}
  - : Eine float-Zahl, die die Größe der Pixeleinheit (wie von CSS2 definiert) entlang der x-Achse des Ansichtsports darstellt. Diese repräsentiert eine Einheit im Bereich von 70dpi bis 120dpi, und auf Systemen, die dies unterstützen, könnte sie tatsächlich die Eigenschaften des Zielmediums widerspiegeln. Auf Systemen, bei denen es unmöglich ist, die Größe eines Pixels zu kennen, wird eine passende Standard-Pixelgröße bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{Deprecated_Inline}}
  - : Eine float-Zahl, die die Größe einer Pixeleinheit entlang der y-Achse des Ansichtsports darstellt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{Deprecated_Inline}}
  - : Benutzeroberflächenereignisse (UI) in DOM Level 2 geben die Bildschirmpositionen an, an denen das gegebene UI-Ereignis aufgetreten ist. Wenn der Browser tatsächlich die physische Größe einer „Bildschirmeinheit“ kennt, wird dieser float-Attribut diese Information ausdrücken; andernfalls liefern Benutzeragenten einen passenden Standardwert (z. B. `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{Deprecated_Inline}}
  - : Entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Ansichtsports.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die anfängliche Ansicht (d. h. vor Vergrößerung und Schwenken) des aktuellen innersten SVG-Dokumentfragments kann entweder die "Standard"-Ansicht sein, d. h. basierend auf Attributen des {{SVGElement("svg")}} Elements wie {{SVGAttr("viewBox")}}) oder auf einer "benutzerdefinierten" Ansicht (d. h. ein Hyperlink zu einem bestimmten {{SVGElement("view")}} oder anderem Element). Wenn die anfängliche Ansicht die "Standard"-Ansicht ist, ist dieses Attribut `false`. Wenn die anfängliche Ansicht eine "benutzerdefinierte" Ansicht ist, ist dieses Attribut `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Ein [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec), der die anfängliche Ansicht (d. h. vor Vergrößerung und Schwenken) des aktuellen innersten SVG-Dokumentfragments definiert. Die Bedeutung hängt von der Situation ab: Wenn die anfängliche Ansicht eine "Standard"-Ansicht war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten für die entsprechenden DOM-Attribute, die direkt auf `SVGSVGElement` vorhanden sind
    - ist der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null`

    Wenn die anfängliche Ansicht ein Link zu einem {{SVGElement("view")}}-Element war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den entsprechenden Attributen für das gegebene {{SVGElement("view")}}-Element
    - ist der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null`

    Wenn die anfängliche Ansicht ein Link zu einem anderen Element war (d. h. außer einem {{SVGElement("view")}}), dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten für die entsprechenden DOM-Attribute, die direkt am nächsten Vorfahren-{{SVGElement("svg")}}-Element vorhanden sind
    - sind die Werte für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null`

    Wenn die anfängliche Ansicht ein Link in das SVG-Dokumentfragment unter Verwendung eines SVG-View-Spezifikationsfragmentidentifikators (d. h. `#svgView(…)`) war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} den Werten aus dem SVG-View-Spezifikationsfragmentidentifikator

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Bei einem äußersten {{SVGElement("svg")}}-Element gibt dieses float-Attribut den aktuellen Skalierungsfaktor relativ zur anfänglichen Ansicht an, um Benutzermagnifikations- und Schwenkoperationen zu berücksichtigen. Die DOM-Attribute `currentScale` und `currentTranslate` entsprechen der 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d. h. `zoomAndPan="magnify"`), dann ist der Effekt so, als ob eine zusätzliche Transformation auf der äußersten Ebene des SVG-Dokumentfragments platziert worden wäre (d. h. außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint), der den Translationsfaktor repräsentiert, der die Benutzermagnifikation berücksichtigt und einem äußersten {{SVGElement("svg")}}-Element entspricht. Das Verhalten ist für `<svg>`-Elemente, die sich nicht auf der äußersten Ebene befinden, undefiniert.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}

  - : Nimmt einen Timeout-Wert, der angibt, dass kein Redraw erfolgen soll, bis:

    der entsprechende `unsuspendRedraw()`-Aufruf erfolgt ist, ein `unsuspendRedrawAll()`-Aufruf getätigt wurde oder sein Timer abgelaufen ist.

    In Umgebungen, die keine Interaktivität unterstützen (z. B. Druckmedien), soll das Redraw nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten, müssen aber nicht, in ausgeglichenen Paaren erfolgen.

    Um Redraw-Aktionen auszusetzen, während eine Sammlung von SVG-DOM-Änderungen auftritt, gehen Sie den Änderungen im SVG-DOM mit einem Methodenaufruf wie:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    voraus und folgen Sie den Änderungen mit einem Methodenaufruf wie:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere `suspendRedraw()`-Aufrufe gleichzeitig verwendet werden können und dass jeder dieser Methodenaufrufe unabhängig von den anderen `suspendRedraw()`-Methodenaufrufen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt ein angegebenes `suspendRedraw()` mit einer eindeutigen Suspend-Handle-ID auf, die von einem vorherigen `suspendRedraw()`-Aufruf zurückgegeben wurde.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle aktuell aktiven `suspendRedraw()`-Methodenaufrufe auf. Diese Methode ist besonders nützlich am Ende eines Satzes von SVG-DOM-Aufrufen, um sicherzustellen, dass alle ausstehenden `suspendRedraw()`-Methodenaufrufe aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : In Rendering-Umgebungen, die Interaktivität unterstützen, zwingt den Benutzeragenten, alle Bereiche des Ansichtsports, die aktualisiert werden müssen, sofort neu zu zeichnen.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Setzt alle aktuell laufenden Animationen, die im SVG-Dokumentfragment definiert sind, das diesem {{SVGElement("svg")}}-Element entspricht, aus (d. h. pausiert sie), sodass die Animationsuhr, die diesem Dokumentfragment entspricht, stillsteht, bis sie wieder gestartet wird.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Setzt aktuell laufende Animationen, die im SVG-Dokumentfragment definiert sind, fort (d. h. hebt die Pause auf), sodass die Animationsuhr ab dem Zeitpunkt weiterläuft, zu dem sie ausgesetzt wurde.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn dieses SVG-Dokumentfragment sich in einem pausierten Zustand befindet.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zur Startzeit für das aktuelle SVG-Dokumentfragment zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor die Dokumentzeitleiste begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Passt die Uhr für dieses SVG-Dokumentfragment an und stellt eine neue aktuelle Zeit fest. Wenn `setCurrentTime()` aufgerufen wird, bevor die Dokumentzeitleiste begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), gibt der Wert der Sekunden in der letzten Methode die Zeit an, zu der das Dokument springt, wenn die Dokumentzeitleiste beginnt.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafik-Elementen zurück, deren gerenderter Inhalt das angegebene Rechteck schneidet. Jedes potenzielle Grafik-Element wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafik-Element ein Ziel für Zeigereignisse sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert ist.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafik-Elementen zurück, deren gerenderter Inhalt vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes potenzielle Grafik-Element wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafik-Element ein Ziel für Zeigereignisse sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert ist.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements das angegebene Rechteck schneidet. Jedes potenzielle Grafik-Element wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafik-Element ein Ziel für Zeigereignisse sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert ist.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes potenzielle Grafik-Element wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafik-Element ein Ziel für Zeigereignisse sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert ist.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl aller ausgewählten Objekte auf, einschließlich der Auswahl von Textzeichenfolgen und Eingabemarken.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf `0` Benutzer-Einheiten initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf einen Wert von `0` Grad (einheitenlos) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf den Punkt `(0,0)` im Benutzersystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`SVGMatrix`](/de/docs/Web/API/DOMMatrix) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf die Identitätsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird so initialisiert, dass alle Werte auf `0` Benutzer-Einheiten gesetzt sind.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf eine Identitätsmatrizen-Transformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt außerhalb jeglicher Dokumentbäume. Das Objekt wird auf die gegebene Matrizen-Transformation initialisiert (d. h. `SVG_TRANSFORM_MATRIX`). Die Werte der Parameter-Matrix werden kopiert, die Matrix-Parameter werden nicht als `SVGTransform::matrix` übernommen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Sucht in diesem SVG-Dokumentfragment (d. h. die Suche ist auf einen Teilbaum des Dokuments beschränkt) nach einem Element, dessen `id` dem Wert `elementId` entspricht. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn kein solches Element existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese ID hat.

## Ereignis-Handler

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ` Ereignis-Handler-Eigenschaften sind auch als Aliase verfügbar, die auf das `window`-Objekt abzielen. Es wird jedoch empfohlen, diese direkt auf dem `window`-Objekt statt auf `SVGSVGElement` zu hören.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `SVGSVGElement` funktioniert nicht für die unten aufgeführten `onXYZ` Ereignis-Handler. Hören Sie stattdessen auf die Ereignisse des [`window`](/de/docs/Web/API/Window)-Objekts.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für das Drucken in der Vorschau angezeigt werden soll.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragment-Identifikator der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, z. B. von einem Aufruf an [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk wiedererlangt hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer den Sitzungsverlauf durchsucht.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird und die Ablehnung behandelt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wird, aber die Ablehnung nicht behandelt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
