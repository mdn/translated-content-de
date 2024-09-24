---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGSVGElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("svg")}}-Elementen sowie Methoden zu deren Manipulation. Diese Schnittstelle enthält auch verschiedene häufig verwendete Dienstprogrammmethoden, wie Matrixoperationen und die Fähigkeit, die Zeit der Neuzeichnung auf visuellen Ausgabegeräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGSVGElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- {{domxref("SVGSVGElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- {{domxref("SVGSVGElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- {{domxref("SVGSVGElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("svg")}}-Elements entspricht.
- {{domxref("SVGSVGElement.pixelUnitToMillimeterX")}} {{Deprecated_Inline}}
  - : Ein float, der die Größe der Pixel-Einheit (wie von CSS2 definiert) entlang der x-Achse des Viewports darstellt, was einer Einheit im Bereich von 70dpi bis 120dpi entspricht und auf Systemen, die dies unterstützen, möglicherweise tatsächlich den Eigenschaften des Zielmediums entspricht. Auf Systemen, auf denen es unmöglich ist, die Größe eines Pixels zu kennen, wird eine geeignete Standard-Pixelgröße bereitgestellt.
- {{domxref("SVGSVGElement.pixelUnitToMillimeterY")}} {{Deprecated_Inline}}
  - : Ein float, der die Größe einer Pixel-Einheit entlang der y-Achse des Viewports darstellt.
- {{domxref("SVGSVGElement.screenPixelToMillimeterX")}} {{Deprecated_Inline}}
  - : Benutzeroberfläche (UI) Ereignisse im DOM Level 2 geben die Bildschirmpositionen an, an denen das gegebene UI-Ereignis auftrat. Wenn der Browser die physische Größe einer "Bildschirmeinheit" tatsächlich kennt, drückt dieses float-Attribut diese Information aus; andernfalls werden Benutzeragenten einen geeigneten Standardwert bereitstellen (wie z.B. `.28mm`).
- {{domxref("SVGSVGElement.screenPixelToMillimeterY")}} {{Deprecated_Inline}}
  - : Entsprechende Größe eines Bildschirm-Pixels entlang der y-Achse des Viewports.
- {{domxref("SVGSVGElement.useCurrentView")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die ursprüngliche Ansicht (d.h. vor Vergrößerung und Schwenken) des aktuellen innermost SVG-Dokumentfragments kann entweder die "Standard"-Ansicht sein, d.h. basierend auf Attributen am {{SVGElement("svg")}}-Element wie {{SVGAttr("viewBox")}}) oder auf einer "benutzerdefinierten" Ansicht (d.h. ein Hyperlink in ein bestimmtes {{SVGElement("view")}}- oder ein anderes Element). Wenn die ursprüngliche Ansicht die "Standard"-Ansicht ist, dann ist dieses Attribut `false`. Wenn die ursprüngliche Ansicht eine "benutzerdefinierte" Ansicht ist, dann ist dieses Attribut `true`.
- {{domxref("SVGSVGElement.currentView")}} {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Ein {{domxref("SVGViewSpec")}}, der die ursprüngliche Ansicht (d.h. vor Vergrößerung und Schwenken) des aktuellen innermost SVG-Dokumentfragments definiert. Die Bedeutung hängt von der Situation ab: Wenn die ursprüngliche Ansicht eine "Standard"-Ansicht war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten für die entsprechenden DOM-Attribute, die direkt auf `SVGSVGElement` sind
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die ursprüngliche Ansicht ein Link in ein {{SVGElement("view")}}-Element war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den entsprechenden Attributen für das gegebene {{SVGElement("view")}}-Element
    - wird der Wert für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die ursprüngliche Ansicht ein Link in ein anderes Element (d.h. anderes als ein {{SVGElement("view")}}) war, dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} und {{SVGAttr("zoomAndPan")}} innerhalb von {{SVGAttr("currentView")}} den Werten für die entsprechenden DOM-Attribute, die direkt auf `SVGSVGElement` des nächstgelegenen Vorfahren {{SVGElement("svg")}}-Elements sind
    - werden die Werte für {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} `null` sein

    Wenn die ursprüngliche Ansicht ein Link in das SVG-Dokumentfragment unter Verwendung eines SVG-Ansichtsspezifikations-Fragmentidentifikators war (d.h. `#svgView(…)`), dann:

    - entsprechen die Werte für {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} innerhalb von {{SVGAttr("currentView")}} den Werten aus dem SVG-Ansichtsspezifikations-Fragmentidentifikator

- {{domxref("SVGSVGElement.currentScale")}}
  - : Bei einem äußersten {{SVGElement("svg")}}-Element zeigt dieses float-Attribut den aktuellen Skalierungsfaktor relativ zur ursprünglichen Ansicht an, um Benutzermagnifikations- und -schwenkoperationen zu berücksichtigen. DOM-Attribute `currentScale` und `currentTranslate` sind äquivalent zur 2×3 Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn "Vergrößerung" aktiviert ist (d.h. `zoomAndPan="magnify"`), dann ist die Wirkung so, als würde eine zusätzliche Transformation auf der äußersten Ebene auf das SVG-Dokumentfragment angewendet (d.h., außerhalb des äußersten {{SVGElement("svg")}}-Elements).
- {{domxref("SVGSVGElement.currentTranslate")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGPoint")}}, der den Übersetzungsfaktor darstellt, der die Benutzer-"Vergrößerung" berücksichtigt, entsprechend einem äußersten {{SVGElement("svg")}}-Element. Das Verhalten ist für `<svg>`-Elemente, die sich nicht auf der äußersten Ebene befinden, nicht definiert.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGSVGElement.suspendRedraw()")}} {{Deprecated_Inline}}

  - : Nimmt einen Timeout-Wert an, der anzeigt, dass keine Neuzeichnung stattfinden soll, bis:

    der entsprechende `unsuspendRedraw()`-Aufruf durchgeführt wurde, ein `unsuspendRedrawAll()`-Aufruf gemacht wurde oder sein Timer abgelaufen ist.

    In Umgebungen, die keine Interaktivität unterstützen (z.B. Druckmedien), darf die Neuzeichnung nicht ausgesetzt werden. Aufrufe von `suspendRedraw()` und `unsuspendRedraw()` sollten, müssen jedoch nicht paarweise ausgeglichen sein.

    Um Neuzeichnungsaktionen auszusetzen, während eine Sammlung von SVG DOM-Änderungen ausgeführt wird, sollten die Änderungen am SVG DOM mit einem Methodenaufruf wie folgt eingeleitet werden:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    und die Änderungen sollten mit einem Methodenaufruf wie folgt beendet werden:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Beachten Sie, dass mehrere `suspendRedraw()`-Aufrufe gleichzeitig verwendet werden können und dass jeder dieser Methodenaufrufe unabhängig von den anderen `suspendRedraw()`-Methodenaufrufen behandelt wird.

- {{domxref("SVGSVGElement.unsuspendRedraw()")}} {{Deprecated_Inline}}
  - : Hebt eine spezifische `suspendRedraw()` auf, indem eine eindeutige Suspend-Handle-ID angegeben wird, die durch einen vorherigen `suspendRedraw()`-Aufruf zurückgegeben wurde.
- {{domxref("SVGSVGElement.unsuspendRedrawAll()")}} {{Deprecated_Inline}}
  - : Hebt alle derzeit aktiven `suspendRedraw()`-Methodenaufrufe auf. Diese Methode ist am nützlichsten am Ende eines Satzes von SVG DOM-Aufrufen, um sicherzustellen, dass alle ausstehenden `suspendRedraw()`-Methodenaufrufe aufgehoben wurden.
- {{domxref("SVGSVGElement.forceRedraw()")}} {{Deprecated_Inline}}
  - : In Rendering-Umgebungen, die Interaktivität unterstützen, zwingt der Benutzeragent dazu, alle Bereiche des Viewports, die aktualisiert werden müssen, sofort neu zu zeichnen.
- {{domxref("SVGSVGElement.pauseAnimations()")}}
  - : Unterbricht (d.h. pausiert) alle derzeit laufenden Animationen, die im SVG-Dokumentfragment definiert sind, das diesem {{SVGElement("svg")}}-Element entspricht, und lässt die Animationsuhr für dieses Dokumentfragment stillstehen, bis sie wieder fortgesetzt wird.
- {{domxref("SVGSVGElement.unpauseAnimations()")}}
  - : Setzt derzeit laufende Animationen, die innerhalb des SVG-Dokumentfragments definiert sind, wieder fort (d.h. hebt die Pause auf), und lässt die Animationsuhr von dem Zeitpunkt an, zu dem sie angehalten wurde, weiterlaufen.
- {{domxref("SVGSVGElement.animationsPaused()")}}
  - : Gibt `true` zurück, wenn sich dieses SVG-Dokumentfragment im pausierten Zustand befindet.
- {{domxref("SVGSVGElement.getCurrentTime()")}}
  - : Gibt die aktuelle Zeit in Sekunden relativ zur Startzeit für das aktuelle SVG-Dokumentfragment zurück. Wenn `getCurrentTime()` aufgerufen wird, bevor die Dokumentzeitachse begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), wird `0` zurückgegeben.
- {{domxref("SVGSVGElement.setCurrentTime()")}}
  - : Passt die Uhr für dieses SVG-Dokumentfragment an und legt eine neue aktuelle Zeit fest. Wenn `setCurrentTime()` aufgerufen wird, bevor die Dokumentzeitachse begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), gibt der Wert der Sekunden im letzten Aufruf der Methode die Zeit an, zu der das Dokument springen wird, sobald die Dokumentzeitachse begonnen hat.
- {{domxref("SVGSVGElement.getIntersectionList()")}}
  - : Gibt eine {{domxref("NodeList")}} von Grafikelementen zurück, deren gerenderter Inhalt das bereitgestellte Rechteck schneidet. Jedes Kandidatengrafikelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- {{domxref("SVGSVGElement.getEnclosureList()")}}
  - : Gibt eine {{domxref("NodeList")}} von Grafikelementen zurück, deren gerenderter Inhalt vollständig im bereitgestellten Rechteck enthalten ist. Jedes Kandidatengrafikelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- {{domxref("SVGSVGElement.checkIntersection()")}}
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements das bereitgestellte Rechteck schneidet. Jedes Kandidatengrafikelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- {{domxref("SVGSVGElement.checkEnclosure()")}}
  - : Gibt `true` zurück, wenn der gerenderte Inhalt des angegebenen Elements vollständig im bereitgestellten Rechteck enthalten ist. Jedes Kandidatengrafikelement wird nur dann als Übereinstimmung betrachtet, wenn dasselbe Grafikelement Ziel von Zeigereignissen sein kann, wie in der {{SVGAttr("pointer-events")}}-Verarbeitung definiert.
- {{domxref("SVGSVGElement.deselectAll()")}}
  - : Hebt die Auswahl aller ausgewählten Objekte auf, einschließlich aller Auswahl von Textstrings und Eingabebalken.
- {{domxref("SVGSVGElement.createSVGNumber()")}}
  - : Erstellt ein {{domxref("SVGNumber")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird auf `0` initialisiert.
- {{domxref("SVGSVGElement.createSVGLength()")}}
  - : Erstellt ein {{domxref("SVGLength")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird auf `0` Benutzereinheiten initialisiert.
- {{domxref("SVGSVGElement.createSVGAngle()")}}
  - : Erstellt ein {{domxref("SVGAngle")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird auf einen Wert von `0` Grad (einheitenlos) initialisiert.
- {{domxref("SVGSVGElement.createSVGPoint()")}}
  - : Erstellt ein {{domxref("SVGPoint")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird auf den Punkt `(0,0)` im Benutzerkoordinatensystem initialisiert.
- {{domxref("SVGSVGElement.createSVGMatrix()")}}
  - : Erstellt ein {{domxref("DOMMatrix", "SVGMatrix")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird auf die Einheitsmatrix initialisiert.
- {{domxref("SVGSVGElement.createSVGRect()")}}
  - : Erstellt ein {{domxref("SVGRect")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird so initialisiert, dass alle Werte auf `0` Benutzereinheiten gesetzt sind.
- {{domxref("SVGSVGElement.createSVGTransform()")}}
  - : Erstellt ein {{domxref("SVGTransform")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird auf eine Einheitsmatrix-Transformation (`SVG_TRANSFORM_MATRIX`) initialisiert.
- {{domxref("SVGSVGElement.createSVGTransformFromMatrix()")}}
  - : Erstellt ein {{domxref("SVGTransform")}}-Objekt außerhalb von Dokument-Bäumen. Das Objekt wird auf die gegebene Matrix-Transformation initialisiert (d.h. `SVG_TRANSFORM_MATRIX`). Die Werte aus der Parameter-Matrix werden kopiert, die Matrix-Parameter wird nicht als `SVGTransform::matrix` übernommen.
- {{domxref("SVGSVGElement.getElementById()")}}
  - : Durchsucht dieses SVG-Dokumentfragment (d.h. die Suche ist auf einen Teilbaum des Dokuments beschränkt) nach einem Element, dessen `id` durch `elementId` angegeben wird. Wenn ein Element gefunden wird, wird dieses Element zurückgegeben. Wenn kein solches Element existiert, wird `null` zurückgegeben. Das Verhalten ist nicht definiert, wenn mehr als ein Element diese id hat.

## Ereignis-Handler

Die folgenden {{domxref("Window")}} `onXYZ` Ereignis-Handler-Eigenschaften sind auch als Aliase verfügbar, die das `window`-Objekt anvisieren. Es wird jedoch empfohlen, sie direkt am `window`-Objekt zu überwachen, anstatt am `SVGSVGElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `SVGSVGElement` funktioniert nicht für die unten aufgeführten `onXYZ` Ereignis-Handler. Überwachen Sie die Ereignisse stattdessen auf dem {{domxref("window")}}-Objekt.

- {{domxref("window.afterprint_event", "SVGSVGElement.onafterprint")}}
  - : Wird ausgelöst, nachdem das zugehörige Dokument das Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- {{domxref("window.beforeprint_event", "SVGSVGElement.onbeforeprint")}}
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau vorbereitet wird.
- {{domxref("window.beforeunload_event", "SVGSVGElement.onbeforeunload")}}
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen abgeladen werden sollen.
- {{domxref("window.gamepadconnected_event", "SVGSVGElement.ongamepadconnected")}}
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder das erste Mal eine Taste/Achse des Gamepads benutzt wird.
- {{domxref("window.gamepaddisconnected_event", "SVGSVGElement.ongamepaddisconnected")}}
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- {{domxref("window.hashchange_event", "SVGSVGElement.onhashchange")}}
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL ändert (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- {{domxref("window.languagechange_event", "SVGSVGElement.onlanguagechange")}}
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- {{domxref("window.message_event", "SVGSVGElement.onmessage")}}
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, beispielsweise von einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- {{domxref("window.messageerror_event", "SVGSVGElement.onmessageerror")}}
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- {{domxref("window.offline_event", "SVGSVGElement.onoffline")}}
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von {{domxref("Navigator.onLine")}} auf `false` wechselt.
- {{domxref("window.online_event", "SVGSVGElement.ononline")}}
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk erlangt hat und der Wert von {{domxref("Navigator.onLine")}} auf `true` wechselt.
- {{domxref("window.pagehide_event", "SVGSVGElement.onpagehide")}}
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite im Prozess des Präsentierens einer anderen Seite aus dem Sitzungsverlauf ausblendet.
- {{domxref("window.pageshow_event", "SVGSVGElement.onpageshow")}}
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund von Navigation anzeigt.
- {{domxref("window.popstate_event", "SVGSVGElement.onpopstate")}}
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag beim Navigieren durch den Sitzungsverlauf gewechselt wird.
- {{domxref("window.rejectionhandled_event", "SVGSVGElement.onrejectionhandled")}}
  - : Wird ausgelöst, wann immer ein JavaScript {{jsxref("Promise")}} abgelehnt und die Ablehnung behandelt wurde.
- {{domxref("window.storage_event", "SVGSVGElement.onstorage")}}
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments verändert wurde.
- {{domxref("window.unhandledrejection_event", "SVGSVGElement.onunhandledrejection")}}
  - : Wird ausgelöst, wann immer ein {{jsxref("Promise")}} abgelehnt wird, aber die Ablehnung nicht behandelt wurde.
- {{domxref("window.unload_event", "SVGSVGElement.onunload")}}
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}}
