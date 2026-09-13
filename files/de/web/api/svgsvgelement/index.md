---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("SVG")}}

Das **`SVGSVGElement`**-Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("svg")}}-Elementen sowie Methoden zu deren Manipulation. Dieses Interface enthält auch verschiedene häufig genutzte Utility-Methoden, wie Matrixoperationen und die Fähigkeit, die Zeit der Neuzeichnung auf visuellen Rendering-Geräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der mit dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements korrespondiert.
- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der mit dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements korrespondiert.
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der mit dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements korrespondiert.
- [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der mit dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements korrespondiert.
- [`SVGSVGElement.viewBox`](/de/docs/Web/API/SVGSVGElement/viewBox) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect), der mit dem {{SVGAttr("viewBox")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements korrespondiert.
- [`SVGSVGElement.preserveAspectRatio`](/de/docs/Web/API/SVGSVGElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), der mit dem {{SVGAttr("preserveAspectRatio")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements korrespondiert.
- [`SVGSVGElement.pixelUnitToMillimeterX`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterX) {{Deprecated_Inline}}
  - : Ein Float, der die Größe der Pixeleinheit (wie von CSS2 definiert) entlang der x-Achse des Viewports darstellt. Diese repräsentiert eine Einheit im Bereich von 70dpi bis 120dpi und könnte, bei Systemen die dies unterstützen, tatsächlich den Eigenschaften des Zielmediums entsprechen. In Systemen, in denen die Größe eines Pixels nicht bekannt ist, wird eine geeignete Standard-Pixelgröße bereitgestellt.
- [`SVGSVGElement.pixelUnitToMillimeterY`](/de/docs/Web/API/SVGSVGElement/pixelUnitToMillimeterY) {{Deprecated_Inline}}
  - : Ein Float, der die Größe einer Pixeleinheit entlang der y-Achse des Viewports darstellt.
- [`SVGSVGElement.screenPixelToMillimeterX`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterX) {{Deprecated_Inline}}
  - : Benutzeroberflächenereignisse im DOM Level 2 geben die Bildschirmpositionen an, an denen ein bestimmtes UI-Ereignis auftrat. Wenn der Browser tatsächlich die physische Größe einer "Bildschirmeinheit" kennt, wird diese Float-Attribut diese Information ausdrücken; andernfalls stellen Benutzeragenten einen geeigneten Standardwert bereit (wie etwa `.28mm`).
- [`SVGSVGElement.screenPixelToMillimeterY`](/de/docs/Web/API/SVGSVGElement/screenPixelToMillimeterY) {{Deprecated_Inline}}
  - : Entsprechende Größe eines Bildschirmpixels entlang der y-Achse des Viewports.
- [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement/useCurrentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die initiale Ansicht (d.h. vor Vergrößerung und Schwenken) des innersten SVG-Dokumentfragments kann entweder die "Standard"-Ansicht sein, d.h. basierend auf Attributen auf dem {{SVGElement("svg")}}-Element wie {{SVGAttr("viewBox")}} oder einer "benutzerdefinierten" Ansicht (d.h. ein Hyperlink in ein bestimmtes {{SVGElement("view")}} oder anderes Element). Wenn die initiale Ansicht die "Standard"-Ansicht ist, ist dieses Attribut `false`. Wenn die initiale Ansicht eine "benutzerdefinierte" Ansicht ist, ist dieses Attribut `true`.
- [`SVGSVGElement.currentView`](/de/docs/Web/API/SVGSVGElement/currentView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`SVGViewSpec`](/de/docs/Web/API/SVGViewSpec), das die initiale Ansicht (d.h. vor Vergrößerung und Schwenken) des innersten SVG-Dokumentfragments definiert. Die Bedeutung hängt von der Situation ab: Wenn die initiale Ansicht eine "Standard"-Ansicht war, dann:
    - stimmen die Werte für `viewBox`, `preserveAspectRatio` und `zoomAndPan` innerhalb von `currentView` mit den Werten der entsprechenden DOM-Attribute direkt auf `SVGSVGElement` überein
    - ist der Wert für `transform` innerhalb von `currentView` `null`

    Wenn die initiale Ansicht ein Link zu einem {{SVGElement("view")}}-Element war, dann:
    - stimmen die Werte für `viewBox`, `preserveAspectRatio` und `zoomAndPan` innerhalb von `currentView` mit den entsprechenden Attributen des gegebenen {{SVGElement("view")}}-Elements überein
    - ist der Wert für `transform` innerhalb von `currentView` `null`

    Wenn die initiale Ansicht ein Link zu einem anderen Element war (d.h. nicht zu einem {{SVGElement("view")}}), dann:
    - stimmen die Werte für `viewBox`, `preserveAspectRatio` und `zoomAndPan` innerhalb von `currentView` mit den Werten der entsprechenden DOM-Attribute direkt auf `SVGSVGElement` für das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element überein
    - sind die Werte für `transform` innerhalb von `currentView` `null`

    Wenn die initiale Ansicht ein Link in das SVG-Dokumentfragment unter Verwendung eines SVG-View-Spezifikations-Fragmentbezeichners war (d.h. `#svgView(…)`), dann:
    - entsprechen die Werte für `viewBox`, `preserveAspectRatio`, `zoomAndPan` und `transform` innerhalb von `currentView` den Werten des SVG-View-Spezifikations-Fragmentbezeichners

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
  - : Auf einem äußersten {{SVGElement("svg")}}-Element gibt dieses Float-Attribut den aktuellen Skalierungsfaktor relativ zur initialen Ansicht an, wobei Benutzervergrößerungs- und Verschiebungsoperationen berücksichtigt werden. DOM-Attribute `currentScale` und `currentTranslate` sind äquivalent zu der 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d.h. `zoomAndPan="magnify"`), dann ist der Effekt, als ob eine zusätzliche Transformation auf der äußersten Ebene des SVG-Dokumentfragments platziert wird (d.h. außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den Übersetzungsfaktor darstellt, der Benutzer-"Vergrößerung" für ein äußerstes {{SVGElement("svg")}}-Element berücksichtigt. Das Verhalten ist undefiniert für `<svg>`-Elemente, die nicht auf der äußersten Ebene sind.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGSVGElement.suspendRedraw()`](/de/docs/Web/API/SVGSVGElement/suspendRedraw) {{Deprecated_Inline}}
  - : Nimmt einen Zeitüberschreitungswert entgegen, der angibt, dass die Neuzeichnung nicht stattfinden soll, bis:

    der entsprechende `unsuspendRedraw()`-Aufruf erfolgt ist, ein `unsuspendRedrawAll()`-Aufruf erfolgt ist oder sein Timer abgelaufen ist.

    In Umgebungen, die Interaktivität nicht unterstützen (z.B. Druckmedien), darf die Neuzeichnung nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten (müssen aber nicht) in balancierten Paaren erfolgen.

    Um Neuzeichnungsaktionen auszusetzen, während eine Sammlung von Änderungen im SVG DOM erfolgt, leiten Sie die Änderungen im SVG DOM mit einem Methodenaufruf ein, der ähnlich ist wie:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    und folgen Sie den Änderungen mit einem Methodenaufruf, der ähnlich ist wie:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere `suspendRedraw()`-Aufrufe gleichzeitig verwendet werden können und dass jeder dieser Methodenaufrufe unabhängig von den anderen `suspendRedraw()`-Methodenaufrufen behandelt wird.

- [`SVGSVGElement.unsuspendRedraw()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedraw) {{Deprecated_Inline}}
  - : Hebt ein spezifisches `suspendRedraw()` auf, indem eine eindeutige Suspend-Handle-ID angegeben wird, die in einem vorherigen `suspendRedraw()`-Aufruf zurückgegeben wurde.
- [`SVGSVGElement.unsuspendRedrawAll()`](/de/docs/Web/API/SVGSVGElement/unsuspendRedrawAll) {{Deprecated_Inline}}
  - : Hebt alle derzeit aktiven `suspendRedraw()`-Methodenaufrufe auf. Diese Methode ist am nützlichsten am Ende einer Reihe von SVG DOM-Aufrufen, um sicherzustellen, dass alle ausstehenden `suspendRedraw()`-Methodenaufrufe aufgehoben wurden.
- [`SVGSVGElement.forceRedraw()`](/de/docs/Web/API/SVGSVGElement/forceRedraw) {{Deprecated_Inline}}
  - : In Rendering-Umgebungen, die Interaktivität unterstützen, zwingt der Benutzeragent dazu, sofort alle Regionen des Viewports neu zu zeichnen, die eine Aktualisierung erfordern.
- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
  - : Stoppt (d.h. pausiert) alle derzeit laufenden Animationen, die im SVG-Dokumentfragment definiert sind, das diesem {{SVGElement("svg")}}-Element entspricht, wodurch die Animationsuhr für dieses Dokumentfragment stillsteht, bis sie fortgesetzt wird.
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
  - : Nimmt die (d.h. pausiert) derzeit laufenden Animationen im SVG-Dokumentfragment wieder auf, sodass die Animationsuhr ab dem Zeitpunkt, an dem sie pausiert wurde, fortgesetzt wird.
- [`SVGSVGElement.animationsPaused()`](/de/docs/Web/API/SVGSVGElement/animationsPaused)
  - : Gibt `true` zurück, wenn dieses SVG-Dokumentfragment im pausierten Zustand ist.
- [`SVGSVGElement.getCurrentTime()`](/de/docs/Web/API/SVGSVGElement/getCurrentTime)
  - : Gibt die aktuelle Zeit in Sekunden relativ zum Startzeitpunkt für das aktuelle SVG-Dokumentfragment zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor die Dokument-Zeitachse begonnen hat (zum Beispiel durch Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), wird `0` zurückgegeben.
- [`SVGSVGElement.setCurrentTime()`](/de/docs/Web/API/SVGSVGElement/setCurrentTime)
  - : Passt die Uhr für dieses SVG-Dokumentfragment an und legt eine neue aktuelle Zeit fest. Wenn `setCurrentTime()` aufgerufen wird, bevor die Dokument-Zeitachse begonnen hat (zum Beispiel durch Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), gibt der Sekundenwert im letzten Aufruf der Methode die Zeit an, zu der das Dokument seekt, sobald die Dokument-Zeitachse begonnen hat.
- [`SVGSVGElement.getIntersectionList()`](/de/docs/Web/API/SVGSVGElement/getIntersectionList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt das angegebene Rechteck schneidet. Jedes Kandidat-Grafikelement wird nur dann als Treffer betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.getEnclosureList()`](/de/docs/Web/API/SVGSVGElement/getEnclosureList)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Grafikelementen zurück, deren gerenderter Inhalt vollständig im angegebenen Rechteck enthalten ist. Jedes Kandidat-Grafikelement wird nur dann als Treffer betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements das angegebene Rechteck schneidet. Jedes Kandidat-Grafikelement wird nur dann als Treffer betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des gegebenen Elements vollständig innerhalb des angegebenen Rechtecks enthalten ist. Jedes Kandidat-Grafikelement wird nur dann als Treffer betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der Verarbeitung von {{SVGAttr("pointer-events")}} definiert.
- [`SVGSVGElement.deselectAll()`](/de/docs/Web/API/SVGSVGElement/deselectAll)
  - : Hebt die Auswahl aller ausgewählter Objekte auf, einschließlich jedes gewünschten Texts und jeder Eingabeleiste.
- [`SVGSVGElement.createSVGNumber()`](/de/docs/Web/API/SVGSVGElement/createSVGNumber)
  - : Erstellt ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird auf `0` initialisiert.
- [`SVGSVGElement.createSVGLength()`](/de/docs/Web/API/SVGSVGElement/createSVGLength)
  - : Erstellt ein [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird auf `0` Benutzereinheiten initialisiert.
- [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle)
  - : Erstellt ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird auf einen Wert von `0` Grad (ohne Einheit) initialisiert.
- [`SVGSVGElement.createSVGPoint()`](/de/docs/Web/API/SVGSVGElement/createSVGPoint)
  - : Erstellt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird auf den Punkt `(0,0)` im Benutzerkoordinatensystem initialisiert.
- [`SVGSVGElement.createSVGMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGMatrix)
  - : Erstellt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird auf die Einheitsmatrix initialisiert.
- [`SVGSVGElement.createSVGRect()`](/de/docs/Web/API/SVGSVGElement/createSVGRect)
  - : Erstellt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird initialisiert, sodass alle Werte auf `0` Benutzereinheiten gesetzt sind.
- [`SVGSVGElement.createSVGTransform()`](/de/docs/Web/API/SVGSVGElement/createSVGTransform)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird auf eine Einheitsmatrix-Transformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- [`SVGSVGElement.createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGSVGElement/createSVGTransformFromMatrix)
  - : Erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt außerhalb eines Dokumentbaums. Das Objekt wird auf die gegebene Matrix-Transformation initialisiert (d.h. `SVG_TRANSFORM_MATRIX`). Die Werte aus der Parameter-Matrix werden kopiert; die Matrix-Parameter werden nicht als `SVGTransform::matrix` übernommen.
- [`SVGSVGElement.getElementById()`](/de/docs/Web/API/SVGSVGElement/getElementById)
  - : Durchsucht dieses SVG-Dokumentfragment (d.h. die Suche ist auf einen Teilbaum des Dokumentbaums beschränkt) nach einem Element, dessen `id` durch `elementId` angegeben wird. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn kein solches Element existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese id hat.

## Ereignis-Handler

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ` Ereignis-Handler-Eigenschaften sind ebenfalls als Aliase verfügbar, die auf das `window`-Objekt zielen. Es wird jedoch empfohlen, diese direkt auf das `window`-Objekt zu hören, statt auf `SVGSVGElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `SVGSVGElement` funktioniert nicht für die unten aufgeführten `onXYZ` Ereignis-Handler. Hören Sie diese Ereignisse stattdessen auf dem [`window`](/de/docs/Web/API/Window)-Objekt.

- [`SVGSVGElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`SVGSVGElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Ausgelöst, bevor das zugehörige Dokument gedruckt oder zur Vorschau aufbereitet wird.
- [`SVGSVGElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden.
- [`SVGSVGElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Taste/Achse des Gamepads verwendet wird.
- [`SVGSVGElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`SVGSVGElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit `#` beginnt und folgt).
- [`SVGSVGElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`SVGSVGElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Ausgelöst, wenn das Fenster eine Nachricht erhält, z.B. aus einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) von einem anderen Browsing-Kontext.
- [`SVGSVGElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Ausgelöst, wenn das Fenster eine Nachricht empfängt, die nicht deserialisiert werden kann.
- [`SVGSVGElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`SVGSVGElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Ausgelöst, wenn der Browser wieder Zugang zum Netzwerk hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`SVGSVGElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Ausgelöst, wenn der Browser die aktuelle Seite im Prozess des Darstellens einer anderen Seite aus dem Verlauf der Sitzung verbirgt.
- [`SVGSVGElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`SVGSVGElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Ausgelöst, wenn der aktive Verlaufseintrag sich ändert, während der Benutzer im Sitzungsverlauf navigiert.
- [`SVGSVGElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Ausgelöst, wann immer ein JavaScript-{{jsxref("Promise")}} abgelehnt und die Ablehnung behandelt wurde.
- [`SVGSVGElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`SVGSVGElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Ausgelöst, wann immer ein {{jsxref("Promise")}} abgelehnt, aber die Ablehnung nicht behandelt wurde.
- [`SVGSVGElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
