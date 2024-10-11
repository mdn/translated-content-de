---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("DOM")}}

Das **`Window`**-Interface repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft verweist auf das in diesem Fenster geladene [DOM-Dokument](/de/docs/Web/API/Document).

Ein Fenster für ein bestimmtes Dokument kann über die [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Eigenschaft abgerufen werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, ist im JavaScript-Code verfügbar.

Das `Window`-Interface beherbergt eine Vielzahl von Funktionen, Namensräumen, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters in Verbindung stehen. Dennoch ist das `Window`-Interface ein geeigneter Ort, um diese Elemente aufzunehmen, die global verfügbar sein müssen. Viele davon sind in der [JavaScript Referenz](/de/docs/Web/JavaScript/Reference) und in der [DOM Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ihr eigenes `Window`-Objekt dargestellt; das globale `window`, das vom JavaScript-Code innerhalb einer bestimmten Registerkarte gesehen wird, repräsentiert immer die Registerkarte, in der der Code ausgeführt wird. Dennoch gelten selbst in einem Browser mit Registerkarten einige Eigenschaften und Methoden weiterhin für das gesamte Fenster, das die Registerkarte enthält, wie z.B. [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen gilt alles, was nicht vernünftigerweise für eine Registerkarte gelten kann, für das Fenster.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

Beachten Sie, dass Eigenschaften, die Objekte sind (z.B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets für die Offline-Nutzung und das Erstellen von benutzerdefinierten Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft zeigt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.console`](/de/docs/Web/API/Window/console) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Konsolenobjekt zurück, das Zugriff auf die Debugging-Konsole des Browsers bietet.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das aktuelle Dokument in einem `credentialless` {{htmlelement("iframe")}} geladen wurde. Weitere Details finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Website sich in einem Cross-Origin-Isolationszustand befindet.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verbunden ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über zuvor registrierte benutzerdefinierte Elemente zu erhalten.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Instanz eines [`Fence`](/de/docs/Web/API/Fence)-Objekts für den aktuellen Dokumentkontext zurück. Nur verfügbar für Dokumente, die innerhalb eines {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in das das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterfenster im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft zeigt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Verlaufsobjekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Stellt einen Mechanismus zur Verfügung, der Anwendungen einen asynchronen Zugriff auf Funktionen von indizierten Datenbanken ermöglicht und gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des Inhaltsbereichs des Browserfensters einschließlich der horizontalen Bildlaufleiste zurück, falls dargestellt.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des Inhaltsbereichs des Browserfensters einschließlich der vertikalen Bildlaufleiste zurück, falls dargestellt.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new`, oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, eine benutzerdefinierte Starte-Navigation für die PWA zu implementieren.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das zum Speichern von Daten verwendet wird, die nur von der Quelle abgerufen werden können, die es erstellt hat.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft den Standort oder die aktuelle URL des Fensterobjekts ab oder setzt diesen.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das Locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das Menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der linken oberen Ecke des Ansichtsbereichs des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils`, um einen Umrechnungsfaktor zu erhalten, falls erforderlich.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der linken oberen Ecke des Ansichtsbereichs des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel`, um einen Umrechnungsfaktor zu erhalten, falls erforderlich.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab oder setzt diesen.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück, das dem aktuellen `window` zugeordnet ist. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Navigatorobjekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, als Zeichenkette serialisiert.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem ursprungsbezogenen Agentencluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe der Außenseite des Browserfensters zurück.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Gibt die Breite der Außenseite des Browserfensters zurück.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster oder Unterframe des aktuellen Fensters zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die Attribute [`timing`](/de/docs/Web/API/Performance/timing) und [`navigation`](/de/docs/Web/API/Performance/navigation) einschließt, von denen jedes ein Objekt ist, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Verwendung von Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das Personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Einstiegspunkt zur Nutzung der [Priorisierte Aufgabenplanung-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das mit dem Fenster verbundene Bildschirmobjekt zurück.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den horizontalen Abstand vom linken Rand des Browseransichtsbereichs zum linken Rand des Bildschirms zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den vertikalen Abstand von der oberen Grenze des Browseransichtsbereichs zur Oberseite des Bildschirms zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das Scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Das maximale Offset, auf das das Fenster horizontal gescrollt werden kann, also die Dokumentbreite minus der Ansichtsbereichsbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Das maximale Offset, auf das das Fenster vertikal gescrollt werden kann (d.h. die Dokumenthöhe minus der Ansichtsbereichshöhe).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objektreferenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungspeicherobjekt zurück, das verwendet wird, um Daten zu speichern, die nur von der Quelle abgerufen werden können, die sie erstellt hat.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt zum Schreiben von Daten in den gemeinsamen Speicher mit Hilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das der Einstiegspunkt zur Nutzung der Sprachsynthesefunktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das Statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das Toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verbunden ist und den Einstiegspunkt zur Nutzung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bereitstellt.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das den visuellen Ansichtsbereich für ein bestimmtes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, etc.
  - : Gibt eine Referenz auf das `window`-Objekt in den Rahmen zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, das ist das Ereignis, das derzeit vom JavaScript-Codekontext behandelt wird, oder `undefined`, wenn derzeit kein Ereignis behandelt wird. Das direkt an die Ereignis-Handler übergebene [`Event`](/de/docs/Web/API/Event)-Objekt sollte, wann immer möglich, stattdessen verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zum Hinzufügen externer Suchanbieter zum Browser zurück.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Ausrichtung in Grad (in 90-Grad-Schritten) des Ansichtsbereichs relativ zur natürlichen Ausrichtung des Geräts zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste am unteren Rand des Browsers ab oder setzt diesen.

## Instanzmethoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert einen Datenstring, der mit base-64-Kodierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt ein Alarmdialogfenster an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Entfernt den Fokus vom Fenster.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt einen base-64-kodierten ASCII-String aus einem Binärdatenstring.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplanten Rückrufs.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Rückrufs.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Hebt die mit [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) festgelegte wiederholte Ausführung auf.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Hebt die mit [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) festgelegte verzögerte Ausführung auf.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt einen Dialog mit einer Nachricht an, auf die der Benutzer antworten muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Nimmt eine Vielzahl unterschiedlicher Bildquellen an und gibt ein {{jsxref("Promise")}} zurück, welches sich zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst. Optional wird die Quelle auf das Rechteck der Pixel beschnitten, das bei _(sx, sy)_ mit Breite sw und Höhe sh beginnt.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht einen gegebenen String in einem Fenster.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Ruft den berechneten Stil für das angegebene Element ab. Der berechnete Stil zeigt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Ruft den Standard berechneten Stil für das angegebene Element ab, wobei Autorstile ignoriert werden.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt auflöst, welches die Details aller Bildschirme darstellt, die auf dem Gerät des Benutzers verfügbar sind.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt zurück, das das/die ausgewählten Elemente repräsentiert.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Mediaquery-String repräsentiert.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Bewegt das aktuelle Fenster um einen angegebenen Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Verschiebt das Fenster an die angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit für ein Fenster, einen Datenstring an ein anderes Fenster zu senden, das nicht im selben Domain sein muss wie das erste.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet den Druckdialog, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabedialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten auflöst, die die lokal verfügbaren Schriftarten darstellen.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Stellt einen Mikrotask in die Warteschlange, der zu einem sicheren Zeitpunkt vor der Rückkehr der Steuerung an die Ereignisschleife des Browsers ausgeführt wird.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript und emuliert somit eine nicht behandelte Ausnahme.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass eine Animation im Gange ist, und fordert den Browser auf, ein Neuzeichnen des Fensters für den nächsten Animationsframe zu planen.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Leerlaufzeiten eines Browsers.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert die Größe des Fensters dynamisch.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrollt das Fenster an eine bestimmte Stelle im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrollt das Dokument im Fenster um den angegebenen Betrag.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrollt das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine gegebene Anzahl von Millisekunden verstrichen ist.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant die Ausführung einer Funktion in einer gegebenen Zeitspanne.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt ein Verzeichnisauswahlfenster an, das es dem Benutzer ermöglicht, ein Verzeichnis zu wählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahl-Dialog an, der es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahl-Dialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Ändert die Größe des Fensters entsprechend seinem Inhalt.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Wertes mithilfe des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`Window.updateCommands()`](/de/docs/Web/API/Window/updateCommands) {{Non-standard_Inline}}
  - : Aktualisiert den Zustand der Befehle des aktuellen Chrome-Fensters (UI).

### Veraltete Methoden

- [`Window.back()`](/de/docs/Web/API/Window/back) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Geht einen Schritt im Fensterverlauf zurück. Diese Methode ist veraltet; Sie sollten stattdessen [`history.back()`](/de/docs/Web/API/History/back) verwenden.
- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Hebt die wiederholte Ausführung auf, die mit `setImmediate()` festgelegt wurde.
- [`Window.forward()`](/de/docs/Web/API/Window/forward) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bewegt das Fenster ein Dokument vorwärts im Verlauf. Diese Methode ist veraltet; Sie sollten stattdessen [`history.forward()`](/de/docs/Web/API/History/forward) verwenden.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Löst das Fenster von der Erfassung von Ereignissen eines bestimmten Typs.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht einer Website oder einer App den Zugriff auf ein in sich geschlossenes Dateisystem zur eigenen Nutzung.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere umfangreiche Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Tut nichts (no-op). Beibehalten für die Rückwärtskompatibilität mit Netscape 4.x.
- [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Zeigt einen modalen Dialog an.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens zum Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite zum Koordinatensystem des Knotens.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieses Interfaces zuweisen. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse aus dem [`Document`](/de/docs/Web/API/Document) aufsteigen, das im Fensterobjekt enthalten ist.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Beispielsweise, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn das Fenster in der Größe verändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments modifiziert wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Window/copy_event)
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.
    Auch über die [`oncopy`](/de/docs/Web/API/HTMLElement/copy_event)-Eigenschaft verfügbar.
- [`cut`](/de/docs/Web/API/Window/cut_event)
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Ausschneideaktion initiiert.
    Auch über die [`oncut`](/de/docs/Web/API/HTMLElement/cut_event)-Eigenschaft verfügbar.
- [`paste`](/de/docs/Web/API/Window/paste_event)
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Einfügeaktion initiiert.
    Auch über die [`onpaste`](/de/docs/Web/API/HTMLElement/paste_event)-Eigenschaft verfügbar.

### Verbindungsevents

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` umgeschaltet wurde.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk gewonnen hat und der Wert von `navigator.onLine` auf `true` umgeschaltet wurde.

### Geräteausrichtungsevents

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird in regelmäßigen Abständen ausgelöst und gibt die physikalische Kraft der Beschleunigung an, die das Gerät erhält, sowie die Drehgeschwindigkeit, falls vorhanden.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometersensor zur Orientierung über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdraster bereitstehen.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometersensor zur absoluten Orientierung des Geräts im Vergleich zum Erdraster bereitstehen.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus gewonnen hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass ein Gamepad verbunden wurde oder das erste Mal, wenn eine Taste/ein Achse des Gamepads verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass ein Gamepad getrennt wurde.

### Verlaufsereignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL ändert (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird verschickt, wenn der Browser das aktuelle Dokument ausblendet, während er gerade dabei ist, an dessen Stelle ein anderes Dokument aus dem Verlauf der Sitzung anzuzeigen. Dies geschieht beispielsweise, wenn der Benutzer auf die Schaltfläche "Zurück" klickt oder wenn er auf die Schaltfläche "Vorwärts" klickt, um im Verlauf der Sitzung nach vorn zu navigieren.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument aufgrund von Navigationstasks sichtbar macht, einschließlich nicht nur, wenn die Seite zum ersten Mal geladen wird, sondern auch in Situationen wie das Zurückkehren des Benutzers zur Seite, nachdem er zu einer anderen innerhalb desselben Tabs navigiert hat.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag geändert wird.

### Lade- und Entlade-Ereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Dokument oder eine Kinderressource entladen wird.

### Manifestereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer kurz davor steht, aufgefordert zu werden, eine Webanwendung zu installieren.

### Nachrichtenereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel von einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browserkontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

### Druckveranstaltungen

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für den Druck vorgemerkt wird.

### Versprechenszurückweisungsevents

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal gesendet, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, um die Ablehnung zu erfassen oder nicht.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, aber kein Handler vorhanden ist, um die Ablehnung zu erfassen.

### Scrollevents

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container am Ende einer Scroll-Operation ausgelöst, wenn ein neues Ziel für das Scroll-Snap ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Ziel für das Scroll-Snap aussteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display zur Präsentation bereitsteht.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display nicht mehr zur Präsentation zur Verfügung steht.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Geräts ändert — d.h. vom Präsentieren in den Nicht-Präsentieren-Zustand wechselt oder umgekehrt.

## Schnittstellen

Siehe [DOM-Referenz](/de/docs/Web/API/Document_Object_Model).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
