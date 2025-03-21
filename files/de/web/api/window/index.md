---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("DOM")}}

Die **`Window`**-Schnittstelle repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft zeigt auf das im Fenster geladene [DOM-Dokument](/de/docs/Web/API/Document).

Ein Fenster für ein bestimmtes Dokument kann über die [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Eigenschaft erhalten werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, wird dem JavaScript-Code zur Verfügung gestellt.

Die `Window`-Schnittstelle beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Jedoch ist die `Window`-Schnittstelle ein geeigneter Ort, um diese Elemente zu inkludieren, die global verfügbar sein müssen. Viele davon sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und in der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Tab-basierten Browser wird jede Registerkarte durch ihr eigenes `Window`-Objekt repräsentiert; das globale `window`, das von JavaScript-Code, der innerhalb einer bestimmten Registerkarte ausgeführt wird, gesehen wird, repräsentiert immer die Registerkarte, in der der Code ausgeführt wird. Dennoch gelten selbst in einem Tab-basierten Browser einige Eigenschaften und Methoden für das gesamte Fenster, das die Registerkarte enthält, wie zum Beispiel [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen gilt: Alles, was nicht vernünftigerweise zu einer Registerkarte gehören kann, gehört stattdessen zum Fenster.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

Beachten Sie, dass Eigenschaften, die Objekte sind (z. B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen zur Offline-Nutzung und das Erzeugen von benutzerdefinierten Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft zeigt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Boolean zurück, das angibt, ob das aktuelle Dokument in einem credentialless {{htmlelement("iframe")}} geladen wurde. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt ein Boolean zurück, das angibt, ob die Website in einem Cross-Origin-Isolationszustand ist.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verbunden ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das zur Registrierung neuer [benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) und zur Abfrage von Informationen über zuvor registrierte benutzerdefinierte Elemente verwendet werden kann.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln auf dem aktuellen Bildschirm zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Dokument Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für Dokumente verfügbar, die in einem {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in das das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterrahmen im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft zeigt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Verlauf-Objekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit für Anwendungen, die Fähigkeiten von indizierten Datenbanken asynchron zu nutzen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des Inhaltsbereichs des Browserfensters zurück, einschließlich des horizontalen Scrollbalkens, wenn dieser gerendert wird.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des Inhaltsbereichs des Browserfensters zurück, einschließlich des vertikalen Scrollbalkens, wenn dieser gerendert wird.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Webanwendung](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, benutzerdefinierten Startnavigation zu implementieren.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Rahmenelemente im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das zum Speichern von Daten verwendet wird, die nur von der Ursprungswebsite, die sie erstellt hat, abgerufen werden können.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft den Standort oder die aktuelle URL des Fensterobjekts ab/setzt diese.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der oberen linken Ecke des Fensteransichtsbereichs in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor zur Anpassung an Bildschirmpixel, falls erforderlich.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der oberen linken Ecke des Fensteransichtsbereichs in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor zur Anpassung an Bildschirmpixel, falls erforderlich.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab/setzt diesen.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das mit dem aktuellen `window` assoziierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, der als Zeichenkette serialisiert ist.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem ursprungsbezogenen Agent-Cluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Ruft die Höhe der Außenseite des Browserfensters ab.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Ruft die Breite der Außenseite des Browserfensters ab.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster des aktuellen Fensters oder Subframes zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die [`timing`](/de/docs/Web/API/Performance/timing)- und [`navigation`](/de/docs/Web/API/Performance/navigation)-Attribute enthält, von denen jedes ein Objekt ist, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Verwendung von Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dies ist der Einstiegspunkt für die Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verbunden ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die horizontale Entfernung von der linken Fenstergrenze des Benutzeransichtsbereichs zum linken Bildschirmrand zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die vertikale Entfernung von der oberen Fenstergrenze des Benutzeransichtsbereichs zum oberen Bildschirmrand zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, auf den das Fenster horizontal verschoben werden kann, das heißt die Dokumentbreite minus der Ansichtsbereichbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, auf den das Fenster vertikal verschoben werden kann (d.h. die Dokumenthöhe minus der Ansichtsbereichhöhe).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument horizontal verschoben wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument vertikal verschoben wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objekt-Referenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Session Storage-Objekt zurück, das zur Speicherung von Daten verwendet wird, die nur von der Ursprungswebsite, die sie erstellt hat, abgerufen werden können.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt zum Schreiben von Daten in den gemeinsamen Speicher mithilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das der Einstiegspunkt für die Verwendung der Sprechsynthese-Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das dem globalen Objekt zugeordnet ist und den Einstiegspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das den visuellen Ansichtsbereich für ein gegebenes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, etc.
  - : Gibt eine Referenz auf das `window`-Objekt in den Rahmen zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, das das gerade von dem Kontext des JavaScript-Codes verarbeitete Ereignis ist, oder `undefined`, wenn gerade kein Ereignis verarbeitet wird. Das [`Event`](/de/docs/Web/API/Event)-Objekt, das direkt an Ereignishandler übergeben wird, sollte wann immer möglich anstelle dessen verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zum Hinzufügen externer Suchanbieter zum Browser zurück.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Ausrichtung des Ansichtsbereichs in Grad (in 90-Grad-Schritten) relativ zur natürlichen Ausrichtung des Geräts zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste am unteren Rand des Browsers ab/setzt diesen.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert eine Zeichenkette von Daten, die mit der base-64-Kodierung codiert wurden.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt einen Warnungsdialog an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Setzt den Fokus vom Fenster weg.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt eine base-64 codierte ASCII-Zeichenkette aus einer Zeichenkette binärer Daten.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht Ihnen, einen Callback abzubrechen, der zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplant wurde.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht Ihnen, einen Callback abzubrechen, der zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplant wurde.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Bricht die wiederholte Ausführung ab, die mit [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) festgelegt wurde.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Bricht die verzögerte Ausführung ab, die mit [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) festgelegt wurde.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt ein Dialogfeld mit einer Nachricht an, auf die der Benutzer antworten muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert eine Vielzahl von Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich in ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst. Optional wird die Quelle auf das Rechteck der Ursprungs-Pixel bei _(sx, sy)_ mit der Breite sw und der Höhe sh zugeschnitten.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht an die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht nach einer angegebenen Zeichenkette in einem Fenster.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Ruft den berechneten Stil für das angegebene Element ab. Berechneter Stil gibt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Ruft den Standard-berechneten Stil für das angegebene Element ab, wobei Autoren-Stilblätter ignoriert werden.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich in ein [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objektinstanz auflöst, die die Details aller für das Gerät des Benutzers verfügbaren Bildschirme darstellt.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt zurück, das das ausgewählte Element oder die ausgewählten Elemente darstellt.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Media-Query-Zeichenkette darstellt.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Verschiebt das aktuelle Fenster um einen angegebenen Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Bewegt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit, dass ein Fenster eine Datenzeichenkette an ein anderes Fenster sendet, das nicht im gleichen Domain wie das erste sein muss.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet den Druckdialog, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabedialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich in ein Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten auflöst, die die lokal verfügbaren Schriftarten darstellen.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Wartet einen Mikroauftrag ein, der zu einem sicheren Zeitpunkt vor der Rückgabe der Steuerung an die Ereignisschleife des Browsers ausgeführt wird.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript und emuliert dabei eine nicht gehandhabte Ausnahme.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Fordert vom Browser an, dass eine Animation im Gange ist und eine nächste Neuzeichnung des Fensters für den nächsten Animationsframe anberaumt werden soll.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Ruhezeiten eines Browsers.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Vergrößert oder verkleinert das aktuelle Fenster um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Vergrößert oder verkleinert das Fenster dynamisch.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrollt das Fenster zu einem bestimmten Punkt im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrollt das Dokument im Fenster um den angegebenen Betrag.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrollt das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine bestimmte Anzahl von Millisekunden verstrichen ist.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant die Ausführung einer Funktion nach einer bestimmten Zeitspanne.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichniswähler an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiwähler an, der es dem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiwähler an, der es dem Benutzer ermöglicht, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Passt das Fenster gemäß seinem Inhalt an.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Wertes mithilfe des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Veraltete Methoden

- [`Window.back()`](/de/docs/Web/API/Window/back) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Geht einen Schritt in der Verlaufsgeschichte des Fensters zurück. Diese Methode ist veraltet; Sie sollten stattdessen [`history.back()`](/de/docs/Web/API/History/back) verwenden.
- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bricht die wiederholte Ausführung ab, die mit `setImmediate()` festgelegt wurde.
- [`Window.forward()`](/de/docs/Web/API/Window/forward) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bewegt das Fenster einen Schritt weiter in der Verlaufsgeschichte. Diese Methode ist veraltet; Sie sollten stattdessen [`history.forward()`](/de/docs/Web/API/History/forward) verwenden.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Lässt das Fenster bestimmte Ereignisse nicht mehr abfangen.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht es einer Website oder App, auf ein sandboxes Dateisystem für ihre eigenen Zwecke zuzugreifen.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere schwere Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Tut nichts (no-op). Aus Gründen der Rückwärtskompatibilität mit Netscape 4.x beibehalten.
- [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Zeigt einen modalen Dialog an.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens in das der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite in das des Knotens.

## Ereignisse

Hören Sie diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle ab. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse vom im Fensterobjekt enthaltenen [`Document`](/de/docs/Web/API/Document) aus aufsteigen.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden werden kann oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Ausgelöst am globalen Scope-Objekt, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Ausgelöst, wenn das Fenster in seiner Größe verändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments modifiziert wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Window/copy_event)
  - : Ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion startet. Ebenfalls verfügbar über die [`oncopy`](/de/docs/Web/API/HTMLElement/copy_event) Eigenschaft.
- [`cut`](/de/docs/Web/API/Window/cut_event)
  - : Ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Schnittaktion startet. Ebenfalls verfügbar über die [`oncut`](/de/docs/Web/API/HTMLElement/cut_event) Eigenschaft.
- [`paste`](/de/docs/Web/API/Window/paste_event)
  - : Ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Einfügeaktion startet. Ebenfalls verfügbar über die [`onpaste`](/de/docs/Web/API/HTMLElement/paste_event) Eigenschaft.

### Verbindungsevents

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` umgeschaltet wurde.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Ausgelöst, wenn der Browser den Zugang zum Netzwerk gewonnen hat und der Wert von `navigator.onLine` auf `true` umgeschaltet wurde.

### Geräteausrichtungsereignisse

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird in regelmäßigen Abständen ausgelöst und zeigt die Menge der physikalischen Kraft an, die das Gerät erfährt, und die Drehgeschwindigkeit, falls verfügbar.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Ausgelöst, wenn neue Daten vom Magnetometer-Ausrichtungssensor über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdrichtungsrahmen verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Ausgelöst, wenn neue Daten vom Magnetometer-Ausrichtungssensor über die aktuelle absolute Ausrichtung des Geräts im Vergleich zum Erdrichtungsrahmen verfügbar sind.

### Fokus-Ereignisse

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Ausgelöst, wenn ein Element den Fokus gewonnen hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder das erste Mal eine Taste/ein Achsse des Gamepads verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlaufsevents

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#` Symbol beginnt und darauf folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument versteckt, während es im Prozess ist, ein anderes Dokument aus der Sitzungsverlaufsgeschichte an seiner Stelle anzuzeigen. Dies geschieht beispielsweise, wenn der Benutzer die Zurück-Schaltfläche drückt oder wenn er die Vorwärts-Schaltfläche drückt, um in der Sitzungsgeschichte weiterzugehen.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "bfcache")}} (back/forward cache) oder aus dem {{Glossary("Prerender", "Prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument aufgrund von Navigationsaufgaben sichtbar macht, einschließlich nicht nur, wenn die Seite erstmals geladen wird, sondern auch in Situationen, wie wenn der Benutzer zur Seite zurückkehrt, nachdem er zu einer anderen innerhalb desselben Tabs navigiert ist.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Wird ausgelöst, wenn ein Dokument vor der Deaktivierung aufgrund einer Navigation ausgetauscht wird.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufs-Eintrag sich ändert.

### Lade- und Entladeereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen kurz davor sind, entladen zu werden.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Dokument oder eine Kinderressource entladen wird.

### Manifest-Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer kurz davor ist, aufgefordert zu werden, eine Webanwendung zu installieren.

### Messaging-Ereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, zum Beispiel von einem Aufruf zu [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

### Druck-Ereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument kurz davor steht, gedruckt oder in der Druckvorschau angezeigt zu werden.

### Promise-Ablehnungs-Ereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, jedes Mal, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, um die Ablehnung abzufangen oder nicht.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, aber kein Handler vorhanden ist, um die Ablehnung abzufangen.

### Scroll-Ereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Schnappziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container ausgelöst, wenn der Browser bestimmt, dass ein neues Schnappziel ansteht, d.h. es wird ausgewählt, wenn das aktuelle Scroll-Geste endet.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display angezeigt werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät an den Computer angeschlossen wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display nicht mehr angezeigt werden kann.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Geräts ändert – d.h. von Präsentation zu Nicht-Präsentation wechselt oder umgekehrt.

### Aufblasbare Ereignisse

Nicht alle Ereignisse, die sich aufblähen, können das `Window`-Objekt erreichen. Nur die folgenden können im `Window`-Objekt gehört werden:

- `abort`
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
- `cancel`
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`change`](/de/docs/Web/API/HTMLElement/change_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`copy`](/de/docs/Web/API/Element/copy_event)
- [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
- [`cut`](/de/docs/Web/API/Element/cut_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
- [`input`](/de/docs/Web/API/Element/input_event)
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`paste`](/de/docs/Web/API/Element/paste_event)
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event)
- [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
- [`wheel`](/de/docs/Web/API/Element/wheel_event)

## Schnittstellen

Siehe [DOM-Referenz](/de/docs/Web/API/Document_Object_Model).

## Zuhören auf Ereignisse im Fenster

HTML-Elemente haben drei Möglichkeiten, auf Ereignisse zu hören:

- Einen Ereignis-Listener zum Element mit der [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode hinzufügen.
- Einen Ereignishandler zur `oneventname`-Eigenschaft des Elements in JavaScript zuweisen.
- Ein Attribut mit `on`-Präfix zum Element im HTML hinzufügen.

Um Ereignisse auf `Window`-Objekten zu hören, können im Allgemeinen nur die ersten beiden Methoden verwendet werden, da `Window` kein entsprechendes HTML-Element hat. Es gibt jedoch eine spezifische Gruppe von Ereignissen, deren Listener dem {{HTMLElement("body")}} (oder dem veralteten {{HTMLElement("frameset")}}) Element hinzugefügt werden können, das dem `Window`-Dokument gehört, mithilfe der zweiten oder dritten Methoden. Diese Ereignisse sind:

- `afterprint`
- `beforeprint`
- `beforeunload`
- `blur`
- `error`
- `focus`
- `hashchange`
- `languagechange`
- `load`
- `message`
- `messageerror`
- `offline`
- `online`
- `pagehide`
- `pagereveal`
- `pageshow`
- `pageswap`
- `popstate`
- `rejectionhandled`
- `resize`
- `scroll`
- `storage`
- `unhandledrejection`
- `unload`

Dies bedeutet, dass die folgenden strikt gleichwertig sind:

```js
window.onresize = (e) => console.log(e.currentTarget);
document.body.onresize = (e) => console.log(e.currentTarget);
```

```html
<body onresize="console.log(event.currentTarget)"></body>
```

In allen drei Fällen sehen Sie das Objekt `Window` als `currentTarget`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
