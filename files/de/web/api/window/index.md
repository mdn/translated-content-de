---
title: Fenster
slug: Web/API/Window
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("DOM")}}

Die **`Window`**-Schnittstelle repräsentiert ein Fenster, das ein {{glossary("DOM")}} Dokument enthält; die `document`-Eigenschaft verweist auf das im Fenster geladene [DOM-Dokument](/de/docs/Web/API/Document).

Ein Fenster für ein gegebenes Dokument kann über die {{domxref("document.defaultView")}}-Eigenschaft abgerufen werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, ist im JavaScript-Code verfügbar.

Die `Window`-Schnittstelle beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Die `Window`-Schnittstelle ist jedoch ein geeigneter Ort, um diese Elemente einzubeziehen, die global verfügbar sein müssen. Viele davon sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ein eigenes `Window`-Objekt repräsentiert; das globale `window`, das durch JavaScript-Code in einer bestimmten Registerkarte sichtbar ist, repräsentiert immer die Registerkarte, in der der Code ausgeführt wird. Das gesagt, selbst in einem Browser mit Registerkarten gelten einige Eigenschaften und Methoden immer noch für das gesamte Fenster, das die Registerkarte enthält, wie z.B. {{domxref("Window.resizeTo", "resizeTo()")}} und {{domxref("Window.innerHeight", "innerHeight")}}. Im Allgemeinen gilt, dass alles, was nicht vernünftigerweise auf eine Registerkarte bezogen werden kann, stattdessen auf das Fenster bezogen wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der {{domxref("EventTarget")}}-Schnittstelle._

Beachten Sie, dass Eigenschaften, die Objekte sind (z.B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- {{domxref("Window.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das {{domxref("CacheStorage")}}-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionalitäten wie das Speichern von Ressourcen für die Offline-Nutzung und das Erstellen von benutzerdefinierten Antworten auf Anfragen.
- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : Ein Alias für {{domxref("Window.navigator")}}.
- {{domxref("Window.closed")}} {{ReadOnlyInline}}
  - : Diese Eigenschaft zeigt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Konsolenobjekt zurück, das Zugriff auf die Debugging-Konsole des Browsers bietet.
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das {{domxref("CookieStore")}}-Objekt für den aktuellen Dokumentkontext zurück.
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob das aktuelle Dokument in einem credentialless {{htmlelement("iframe")}} geladen wurde. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.
- {{domxref("Window.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der anzeigt, ob sich die Website in einem Cross-Origin-Isolationszustand befindet.
- {{domxref("Window.crypto")}} {{ReadOnlyInline}}
  - : Gibt das mit dem globalen Objekt verbundene {{domxref("Crypto")}}-Objekt zurück.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das {{domxref("CustomElementRegistry")}}-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über zuvor registrierte benutzerdefinierte Elemente zu erhalten.
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- {{domxref("Window.documentPictureInPicture")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- {{domxref("Window.fence")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine {{domxref("Fence")}}-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für in einem {{htmlelement("fencedframe")}} eingebettete Dokumente verfügbar.
- {{domxref("Window.frameElement")}} {{ReadOnlyInline}}
  - : Gibt das Element zurück, in das das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- {{domxref("Window.frames")}} {{ReadOnlyInline}}
  - : Gibt ein Array der Unterrahmen im aktuellen Fenster zurück.
- {{domxref("Window.fullScreen")}} {{Non-standard_Inline}}
  - : Diese Eigenschaft zeigt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Verlaufsobjekt zurück.
- {{domxref("Window.indexedDB")}} {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit für Anwendungen, asynchron auf Fähigkeiten von indizierten Datenbanken zuzugreifen; gibt ein {{domxref("IDBFactory")}}-Objekt zurück.
- {{domxref("Window.innerHeight")}} {{ReadOnlyInline}}
  - : Ermittelt die Höhe des Inhaltsbereichs des Browserfensters einschließlich der, falls gerendert, horizontalen Scrollleiste.
- {{domxref("Window.innerWidth")}} {{ReadOnlyInline}}
  - : Ermittelt die Breite des Inhaltsbereichs des Browserfensters einschließlich der, falls gerendert, vertikalen Scrollleiste.
- {{domxref("Window.isSecureContext")}} {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- {{domxref("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode` Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die {{domxref("LaunchQueue")}}-Klasse, die es ermöglicht, benutzerdefinierte Startnavigationsverarbeitung für die PWA zu implementieren.
- {{domxref("Window.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch {{domxref("window.frames")}}.
- {{domxref("Window.localStorage")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das verwendet wird, um Daten zu speichern, die nur von dem Ursprung, der es erstellt hat, abgerufen werden können.
- {{domxref("Window.location")}}
  - : Ruft den Standort oder die aktuelle URL des Fensterobjekts ab oder legt diese fest.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Gibt das locationbar-Objekt zurück.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Gibt das menubar-Objekt zurück.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der oberen linken Ecke des Viewports des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor, um ihn bei Bedarf an Bildschirm-Pixel anzupassen.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der oberen linken Ecke des Viewports des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor, um ihn bei Bedarf an Bildschirm-Pixel anzupassen.
- {{domxref("Window.name")}}
  - : Ruft den Namen des Fensters ab oder setzt diesen.
- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das dem aktuellen `window` zugeordnete {{domxref("Navigation")}}-Objekt zurück. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- {{domxref("Window.navigator")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das navigator-Objekt zurück.
- {{domxref("Window.opener")}}
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- {{domxref("Window.origin")}} {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts, als Zeichenfolge serialisiert, zurück.
- {{domxref("Window.originAgentCluster")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem ursprungsbezogenen Agenten-Cluster gehört.
- {{domxref("Window.outerHeight")}} {{ReadOnlyInline}}
  - : Ermittelt die Höhe des äußeren Bereichs des Browserfensters.
- {{domxref("Window.outerWidth")}} {{ReadOnlyInline}}
  - : Ermittelt die Breite des äußeren Bereichs des Browserfensters.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{ReadOnlyInline}}
  - : Ein Alias für {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{ReadOnlyInline}}
  - : Ein Alias für {{domxref("window.scrollY")}}.
- {{domxref("Window.parent")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster oder Unterfenster des aktuellen Fensters zurück.
- {{domxref("Window.performance")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Performance")}}-Objekt zurück, das die {{domxref("Performance.timing", "timing")}}- und {{domxref("Performance.navigation", "navigation")}}-Attribute umfasst, von denen jedes ein Objekt ist, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Weitere Informationen und Beispiele finden Sie auch unter [Verwendung von Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing).
- {{domxref("Window.personalbar")}} {{ReadOnlyInline}}
  - : Gibt das personalbar-Objekt zurück.
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("Scheduler")}}-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dies ist der Einstiegspunkt zur Nutzung des [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("Window.screen")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verbunden ist.
- {{domxref("Window.screenX")}} und {{domxref("Window.screenLeft")}} {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den horizontalen Abstand von der linken Grenze des Browser-Viewports des Benutzers zur linken Seite des Bildschirms zurück.
- {{domxref("Window.screenY")}} und {{domxref("Window.screenTop")}} {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den vertikalen Abstand von der oberen Grenze des Browser-Viewports des Benutzers zur Oberseite des Bildschirms zurück.
- {{domxref("Window.scrollbars")}} {{ReadOnlyInline}}
  - : Gibt das scrollbars-Objekt zurück.
- {{domxref("Window.scrollMaxX")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, auf den das Fenster horizontal gescrollt werden kann, also die Dokumentbreite minus der Viewportbreite.
- {{domxref("Window.scrollMaxY")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, auf den das Fenster vertikal gescrollt werden kann (d.h. die Dokumenthöhe minus der Viewporthöhe).
- {{domxref("Window.scrollX")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, auf die das Dokument bereits horizontal gescrollt wurde.
- {{domxref("Window.scrollY")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, auf die das Dokument bereits vertikal gescrollt wurde.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Gibt eine Objekt-Referenz auf das Fensterobjekt selbst zurück.
- {{domxref("Window.sessionStorage")}}
  - : Gibt eine Referenz auf das Sitzungsspeicherobjekt zurück, das verwendet wird, um Daten zu speichern, die nur von dem Ursprung, der es erstellt hat, abgerufen werden können.
- {{domxref("Window.sharedStorage")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das {{domxref("WindowSharedStorage")}}-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt, um Daten in den gemeinsamen Speicher zu schreiben, durch die Verwendung der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SpeechSynthesis")}}-Objekt zurück, welches der Einstiegspunkt in die Verwendung der Sprachsynthesefunktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist.
- {{domxref("Window.statusbar")}} {{ReadOnlyInline}}
  - : Gibt das statusbar-Objekt zurück.
- {{domxref("Window.toolbar")}} {{ReadOnlyInline}}
  - : Gibt das toolbar-Objekt zurück.
- {{domxref("Window.top")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- {{domxref("Window.trustedTypes")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("TrustedTypePolicyFactory")}}-Objekt zurück, das mit dem globalen Objekt verbunden ist, und bietet den Einstiegspunkt zur Verwendung der {{domxref("Trusted Types API", "", "", "nocode")}}.
- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("VisualViewport")}}-Objekt zurück, das den visuellen Viewport für ein gegebenes Fenster darstellt.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, etc.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Siehe {{domxref("Window.frames")}} für weitere Details.

### Veraltete Eigenschaften

- {{domxref("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, das ist das Ereignis, das gerade im JavaScript-Kontext behandelt wird, oder `undefined`, wenn kein Ereignis momentan behandelt wird. Das {{domxref("Event")}}-Objekt, das direkt an Ereignishandler übergeben wird, sollte stattdessen wann immer möglich verwendet werden.
- {{domxref("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt zurück, das Funktionen zum Hinzufügen externer Suchanbieter zum Browser bietet.
- {{domxref("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Orientierung in Grad (in 90-Grad-Schritten) des Viewports im Vergleich zur natürlichen Orientierung des Geräts zurück.
- {{domxref("Window.status")}} {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste am unteren Ende des Browsers ab oder setzt diesen.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der {{domxref("EventTarget")}}-Schnittstelle._

- {{domxref("Window.atob()")}}
  - : Dekodiert eine Zeichenfolge von Daten, die mit Base-64-Kodierung kodiert wurden.
- {{domxref("Window.alert()")}}
  - : Zeigt einen Warnhinweis-Dialog an.
- {{domxref("Window.blur()")}} {{deprecated_inline}}
  - : Setzt den Fokus vom Fenster weg.
- {{domxref("Window.btoa()")}}
  - : Erstellt eine Base-64-kodierte ASCII-Zeichenfolge aus einer Zeichenfolge von Binärdaten.
- {{domxref("Window.cancelAnimationFrame()")}}
  - : Ermöglicht das Abbrechen eines zuvor mit {{domxref("Window.requestAnimationFrame")}} geplanten Rückrufs.
- {{domxref("Window.cancelIdleCallback()")}}
  - : Ermöglicht das Abbrechen eines zuvor mit {{domxref("Window.requestIdleCallback")}} geplanten Rückrufs.
- {{domxref("clearInterval", "Window.clearInterval()")}}
  - : Hebt die wiederholte Ausführung auf, die mit {{domxref("setInterval()")}} eingestellt wurde.
- {{domxref("clearTimeout()", "Window.clearTimeout()")}}
  - : Hebt die verzögerte Ausführung auf, die mit {{domxref("setTimeout()")}} eingestellt wurde.
- {{domxref("Window.close()")}}
  - : Schließt das aktuelle Fenster.
- {{domxref("Window.confirm()")}}
  - : Zeigt einen Dialog mit einer Nachricht an, auf den der Benutzer reagieren muss.
- {{domxref("createImageBitmap", "Window.createImageBitmap()")}}
  - : Akzeptiert eine Vielzahl von verschiedenen Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich in ein {{domxref("ImageBitmap")}} auflöst. Optional wird die Quelle auf das Rechteck der Pixel, die bei _(sx, sy)_ beginnen, mit Breite sw und Höhe sh, zugeschnitten.
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- {{domxref("Window.fetch()")}}
  - : Startet den Prozess, eine Ressource aus dem Netzwerk abzurufen.
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : Sucht nach einer gegebenen Zeichenfolge in einem Fenster.
- {{domxref("Window.focus()")}}
  - : Setzt den Fokus auf das aktuelle Fenster.
- {{domxref("Window.getComputedStyle()")}}
  - : Ruft den berechneten Stil für das angegebene Element ab. Der berechnete Stil gibt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : Ruft den Standardstil für das angegebene Element ab, wobei Autoren-Stilvorlagen ignoriert werden.
- {{domxref("Window.getScreenDetails()")}} {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("ScreenDetails")}}-Objektinstanz erfüllt wird, die die Details aller Bildschirme darstellt, die für das Gerät des Benutzers verfügbar sind.
- {{domxref("Window.getSelection()")}}
  - : Gibt das Auswahlobjekt zurück, das das/die ausgewählte(n) Element(e) darstellt.
- {{domxref("Window.matchMedia()")}}
  - : Gibt ein {{domxref("MediaQueryList")}}-Objekt zurück, das die angegebene Medienabfragezeichenfolge darstellt.
- {{domxref("Window.moveBy()")}}
  - : Bewegt das aktuelle Fenster um einen gegebenen Betrag.
- {{domxref("Window.moveTo()")}}
  - : Bewegt das Fenster zu den angegebenen Koordinaten.
- {{domxref("Window.open()")}}
  - : Öffnet ein neues Fenster.
- {{domxref("Window.postMessage()")}}
  - : Bietet eine sichere Methode, damit ein Fenster eine Zeichenfolgedaten an ein anderes Fenster senden kann, das nicht im selben Domainnamen wie das erste sein muss.
- {{domxref("Window.print()")}}
  - : Öffnet den Druckdialog, um das aktuelle Dokument zu drucken.
- {{domxref("Window.prompt()")}}
  - : Gibt den von Benutzer in einem Aufforderungsdialog eingegebenen Text zurück.
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Array von {{domxref("FontData")}}-Objekten erfüllt, die verfügbare Schriftarten lokal darstellt.
- {{domxref("queueMicrotask", "Window.queueMicrotask()")}}
  - : Wartet eine Mikrotask auf, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle an die Ereignisschleife des Browsers ausgeführt wird.
- {{domxref("reportError", "Window.reportError()")}}
  - : Meldet einen Fehler in einem Skript und emuliert eine nicht behandelte Ausnahme.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Sagt dem Browser, dass eine Animation in Arbeit ist, und fordert, dass der Browser ein Repaint des Fensters für den nächsten Animationsrahmen plant.
- {{domxref("Window.requestIdleCallback()")}}
  - : Ermöglicht das Planen von Aufgaben während der Leerlaufzeiten eines Browsers.
- {{domxref("Window.resizeBy()")}}
  - : Ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- {{domxref("Window.resizeTo()")}}
  - : Ändert die Größe des Fensters dynamisch.
- {{domxref("Window.scroll()")}}
  - : Scrollt das Fenster an eine bestimmte Stelle im Dokument.
- {{domxref("Window.scrollBy()")}}
  - : Scrollt das Dokument im Fenster um den angegebenen Betrag.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : Scrollt das Dokument um die angegebene Anzahl von Zeilen.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : Scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.
- {{domxref("Window.scrollTo()")}}
  - : Scrollt zu einem bestimmten Koordinatensatz im Dokument.
- {{domxref("setInterval", "Window.setInterval()")}}
  - : Plant eine Funktion, die jedes Mal ausgeführt wird, wenn eine bestimmte Anzahl von Millisekunden vergeht.
- {{domxref("setTimeout()", "Window.setTimeout()")}}
  - : Plant eine Funktion, die in einer gegebenen Zeitspanne ausgeführt wird.
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichnisauswähler an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswähler, der es einem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen.
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswähler, der es einem Benutzer ermöglicht, eine Datei zu speichern.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : Passt die Fenstergröße an seinen Inhalt an.
- {{domxref("Window.stop()")}}
  - : Diese Methode stoppt das Laden des Fensters.
- {{domxref("structuredClone", "Window.structuredClone()")}}
  - : Erstellt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines gegebenen Wertes unter Verwendung des [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- {{domxref("Window.updateCommands()")}} {{Non-standard_Inline}}
  - : Aktualisiert den Zustand der Befehle des aktuellen Chrome-Fensters (UI).

### Veraltete Methoden

- {{domxref("Window.back()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Geht einen Schritt zurück in der Fensterhistorie. Diese Methode ist veraltet; Sie sollten stattdessen {{domxref("History.back", "history.back()")}} verwenden.
- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs zu erfassen.
- {{domxref("Window.clearImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Hebt die wiederholte Ausführung, die mit `setImmediate()` eingestellt wurde, auf.
- {{domxref("Window.forward()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bewegt das Fenster ein Dokument nach vorne in der Historie. Diese Methode ist veraltet; Sie sollten stattdessen {{domxref("History.forward", "history.forward()")}} verwenden.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : Löst das Fenster aus der Ereignissperre für einen bestimmten Typ.
- {{domxref("Window.requestFileSystem()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Erlaubt es einer Website oder App, Zugriff auf ein geschütztes Dateisystem für den eigenen Gebrauch zu erlangen.
- {{domxref("Window.setImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere umfangreiche Aufgaben abgeschlossen hat.
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Tut nichts (no-op). Beibehalten aufgrund der Rückwärtskompatibilität mit Netscape 4.x.
- {{domxref("Window.showModalDialog()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Zeigt einen modalen Dialog an.
- {{domxref("Window.webkitConvertPointFromNodeToPage()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert ein {{domxref("WebKitPoint")}} aus dem Koordinatensystem des Knotens in das Koordinatensystem der Seite.
- {{domxref("Window.webkitConvertPointFromPageToNode()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert ein {{domxref("WebKitPoint")}} aus dem Koordinatensystem der Seite in das Koordinatensystem des Knotens.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen. Neben den unten aufgelisteten Ereignissen können viele Ereignisse vom {{domxref("Document")}}, das im Fensterobjekt enthalten ist, aufsteigen.

- {{domxref("Window/error_event", "error")}}
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder wenn ein Bild nicht gefunden werden kann oder ungültig ist.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Wird im globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- {{domxref("Window/resize_event", "resize")}}
  - : Wird ausgelöst, wenn das Fenster in seiner Größe verändert wurde.
- {{domxref("Window/storage_event", "storage")}}
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments verändert wurde.

### Zwischenablage-Ereignisse

- {{domxref("Window/copy_event", "copy")}}
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die {{domxref("HTMLElement/copy_event", "oncopy")}}-Eigenschaft verfügbar.
- {{domxref("Window/cut_event", "cut")}}
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die {{domxref("HTMLElement/cut_event", "oncut")}}-Eigenschaft verfügbar.
- {{domxref("Window/paste_event", "paste")}}
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die {{domxref("HTMLElement/paste_event", "onpaste")}}-Eigenschaft verfügbar.

### Verbindungsereignisse

- {{domxref("Window/offline_event", "offline")}}
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` gewechselt ist.
- {{domxref("Window/online_event", "online")}}
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erlangt hat und der Wert von `navigator.onLine` auf `true` gewechselt ist.

### Geräteorientierung-Ereignisse

- {{domxref("Window.devicemotion_event", "devicemotion")}} {{SecureContext_Inline}}
  - : Wird in regelmäßigen Abständen ausgelöst und zeigt die Menge der physikalischen Beschleunigungskraft, die das Gerät erhält, und die Rotationsrate, sofern verfügbar.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn neue Daten vom Magnetometer-Orientierungssensor über die aktuelle Orientierung des Geräts im Vergleich zum Erdkor-Referenzrahmen verfügbar sind.
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn neue Daten vom Magnetometer-Orientierungssensor über die aktuelle absolute Orientierung des Geräts im Vergleich zum Erdkor-Referenzsystem verfügbar sind.

### Fokus-Ereignisse

- {{domxref("Window/blur_event", "blur")}}
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- {{domxref("Window/focus_event", "focus")}}
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.

### Gamepad-Ereignisse

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlauf-Ereignisse

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Wird gesendet, wenn der Browser das aktuelle Dokument versteckt, während es im Begriff ist, das angezeigte Dokument durch ein anderes Dokument aus dem Sitzungsverlauf zu ersetzen. Dies passiert z.B., wenn der Benutzer den Zurück-Knopf klickt oder wenn er den Vorwärts-Knopf klickt, um im Sitzungsverlauf vorwärts zu gehen.
- {{domxref("Window.pagereveal_event", "pagereveal")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder wenn ein neues Dokument aus dem Netzwerk geladen wird oder ein Dokument aktiviert wird (entweder aus dem [back/forward cache](/de/docs/Glossary/bfcache) (bfcache) oder [prerender](/de/docs/Glossary/Prerender)).
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Wird gesendet, wenn der Browser das Dokument aufgrund von Navigationsaufgaben sichtbar macht, einschließlich nicht nur, wenn die Seite erstmals geladen wird, sondern auch Situationen wie die, wenn der Benutzer zurück zur Seite navigiert, nachdem er zu einer anderen innerhalb derselben Registerkarte navigiert ist.
- {{domxref("Window.pageswap_event", "pageswap")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument im Begriff ist, aufgrund einer Navigation entladen zu werden.
- {{domxref("Window/popstate_event", "popstate")}}
  - : Wird ausgelöst, wenn der aktive Geschichtseintrag sich ändert.

### Laden & Entladen Ereignisse

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen im Begriff sind, entladen zu werden.
- {{domxref("Window/load_event", "load")}}
  - : Wird ausgelöst, wenn die ganze Seite geladen ist, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- {{domxref("Window/unload_event", "unload")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

### Manifest-Ereignisse

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Wird ausgelöst, wenn ein Benutzer im Begriff ist, aufgefordert zu werden, eine Web-Applikation zu installieren.

### Nachrichtenereignisse

- {{domxref("Window/message_event", "message")}}
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, z.B. von einem Aufruf von {{domxref("Window/postMessage", "Window.postMessage()")}} von einem anderen Kontext.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht empfängt, die nicht deserialisiert werden kann.

### Druckereignisse

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Wird ausgelöst, wenn das zugehörige Dokument im Begriff ist, gedruckt oder zur Druckansicht vorbereitet zu werden.

### Promise-Ablehnungsereignisse

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Wird gesendet, jedes Mal, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, der die Ablehnung auffängt oder nicht.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Wird gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, jedoch kein Handler vorhanden ist, der die Ablehnung auffängt.

### Veraltete Ereignisse

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Orientierung des Geräts geändert hat.
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät an den Computer angeschlossen wird.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wird.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Geräts ändert — d.h. vom Präsentieren zum Nicht-Präsentieren wechselt oder umgekehrt.

## Schnittstellen

Siehe [DOM-Referenz](/de/docs/Web/API/Document_Object_Model).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
