---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("DOM")}}

Die **`Window`**-Schnittstelle repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft verweist auf das im Fenster geladene [DOM-Dokument](/de/docs/Web/API/Document).

Ein Fenster für ein gegebenes Dokument kann über die [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Eigenschaft abgerufen werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, ist im JavaScript-Code verfügbar.

Die `Window`-Schnittstelle beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Die `Window`-Schnittstelle ist jedoch ein geeigneter Ort, um diese Elemente zu platzieren, die global verfügbar sein müssen. Viele dieser Elemente sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ihr eigenes `Window`-Objekt dargestellt; das globale `window`, das vom JavaScript-Code gesehen wird, der innerhalb einer bestimmten Registerkarte läuft, repräsentiert immer die Registerkarte, in der der Code ausgeführt wird. Dennoch gelten in einem Browser mit Registerkarten einige Eigenschaften und Methoden immer noch für das gesamte Fenster, das die Registerkarte enthält, wie zum Beispiel [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen gilt alles, was nicht vernünftigerweise auf eine Registerkarte zutreffen kann, stattdessen für das Fenster.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

Beachten Sie, dass Eigenschaften, die Objekte sind (z.B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets für die Offline-Nutzung und das Generieren benutzerdefinierter Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.console`](/de/docs/Web/API/Window/console) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Konsolenobjekt zurück, das Zugriff auf die Debug-Konsole des Browsers bietet.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentenkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob das aktuelle Dokument in einem {{htmlelement("iframe")}} ohne Anmeldeinformationen geladen wurde. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die Website in einem Cross-Origin-Isolation-Zustand ist.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verbunden ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das zum Registrieren neuer [benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) und zum Abrufen von Informationen über zuvor registrierte benutzerdefinierte Elemente verwendet werden kann.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentenkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentenkontext zurück. Nur für in einem {{htmlelement("fencedframe")}} eingebettete Dokumente verfügbar.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in dem das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterrahmen im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft gibt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Historienobjekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bietet eine Mechanismus für Anwendungen, um asynchron auf Fähigkeiten von indizierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Ruft die Höhe des Inhaltsbereichs des Browserfensters ab, einschließlich der horizontalen Bildlaufleiste, wenn sie angezeigt wird.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Ruft die Breite des Inhaltsbereichs des Browserfensters ab, einschließlich der vertikalen Bildlaufleiste, wenn sie angezeigt wird.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem `launch_handler`-`client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die die Implementierung einer benutzerdefinierten Startnavigation für die PWA ermöglicht.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das verwendet wird, um Daten zu speichern, die nur von dem Ursprungsort, der es erstellt hat, zugänglich sind.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft den Speicherort oder die aktuelle URL des Fensterobjekts ab/setzt diese.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der oberen linken Ecke des Fenstervorschaufensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor bei Bedarf.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der oberen linken Ecke des Fenstervorschaufensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor bei Bedarf.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab/setzt diesen.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`Navigation`](/de/docs/Web/API/Navigation)-Objekt des aktuellen Fensters zurück. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts als Zeichenkette zurück.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem ursprungsspezifischen Agentencluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Ruft die Höhe der Außenseite des Browserfensters ab.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Ruft die Breite der Außenseite des Browserfensters ab.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Element des aktuellen Fensters oder Unterrahmens zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die [`timing`](/de/docs/Web/API/Performance/timing)- und [`navigation`](/de/docs/Web/API/Performance/navigation)-Attribute umfasst, die jeweils ein Objekt mit [leistungsbezogenen](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellen. Siehe auch [Verwendung der Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dies ist der Einstiegspunkt für die Verwendung der [Priorisierter Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verbunden ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den horizontalen Abstand von der linken Grenze des Benutzer-Browser-Bildschirms zur linken Seite des Bildschirms zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den vertikalen Abstand von der oberen Grenze des Benutzer-Browser-Bildschirms zur oberen Seite des Bildschirms zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Offset, den das Fenster horizontal gescrollt werden kann, also die Dokumentenbreite minus der Ansichtsfensterbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Offset, den das Fenster vertikal gescrollt werden kann (d.h., die Dokumentenhöhe minus der Ansichtsfensterhöhe).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objekt-Referenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungspeicherobjekt zurück, das verwendet wird, um Daten zu speichern, die nur von dem Ursprungsort, der es erstellt hat, zugänglich sind.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt für das Schreiben von Daten in den gemeinsamen Speicher über die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das der Einstiegspunkt für die Verwendung der Sprachsynthese-Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verbunden ist und den Einstiegspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das das visuelle Ansichtsfenster für ein gegebenes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, usw.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, das derzeit von der JavaScript-Code-Kontext behandelt wird, oder `undefined`, wenn derzeit kein Ereignis behandelt wird. Das [`Event`](/de/docs/Web/API/Event)-Objekt, das direkt an Ereignishandler übergeben wird, sollte wann immer möglich verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zum Hinzufügen externer Suchanbieter zum Browser zurück.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Orientierung in Grad (in 90-Grad-Schritten) des Ansichtsfensters relativ zur natürlichen Orientierung des Geräts zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste am unteren Rand des Browserfensters ab/setzt diesen.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert einen Datenstring, der mit Base-64-Codierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt ein Warnungsdialog an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Setzt den Fokus vom Fenster weg.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt einen Base-64 codierten ASCII-String von einem String mit Binärdaten.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplanten Rückrufs.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Rückrufs.
- [`Window.clearInterval()`](/de/docs/Web/API/ClearInterval)
  - : Bricht die wiederholte Ausführung ab, die mit [`setInterval()`](/de/docs/Web/API/SetInterval) festgelegt wurde.
- [`Window.clearTimeout()`](/de/docs/Web/API/ClearTimeout)
  - : Bricht die verzögerte Ausführung ab, die mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) festgelegt wurde.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt einen Dialog mit einer Nachricht an, auf die der Benutzer reagieren muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert eine Vielzahl von verschiedenen Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck von Pixeln zugeschnitten, das bei _(sx, sy)_ beginnt, mit der Breite sw und der Höhe sh.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht nach einem bestimmten String in einem Fenster.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Ruft den berechneten Stil für das angegebene Element ab. Der berechnete Stil gibt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Ruft den Standard berechneten Stil für das angegebene Element ab, ohne Autoren-Stylesheets zu berücksichtigen.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt instanz zur Details aller auf dem Gerät des Benutzers verfügbaren Bildschirme erfüllt.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Objekt zurück, das das/ die ausgewählte(n) Element(e) repräsentiert.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Media-Query-Zeichenfolge darstellt.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Verschiebt das aktuelle Fenster um einen bestimmten Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Verschiebt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit, dass ein Fenster einem anderen Fenster einen Datenstring sendet, das nicht unbedingt im selben Domain wie das erste sein muss.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet den Druckdialog, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabedialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt, die die lokal verfügbaren Schriftartenrepräsentieren.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Wartet eine Microtask zur Ausführung zu einem sicheren Zeitpunkt vor dem Zurückgeben der Kontrolle an die Ereignisschleife des Browsers.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript und ahmt eine nicht behandelte Ausnahme nach.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Fordert den Browser auf, dass eine Animation in Bearbeitung ist, und bittet den Browser, ein Neuzeichnen des Fensters für den nächsten Animationsbildschirm einzuplanen.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Leerlaufzeiten eines Browsers.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Vergrößert oder verkleinert das aktuelle Fenster um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert dynamisch die Größe des Fensters.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrollt das Fenster zu einem bestimmten Ort im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrollt das Dokument im Fenster um den angegebenen Betrag.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrollt das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/SetInterval)
  - : Plant eine Funktion zur Ausführung jedes Mal, wenn eine bestimmte Anzahl von Millisekunden verstrichen ist.
- [`Window.setTimeout()`](/de/docs/Web/API/SetTimeout)
  - : Plant eine Funktion zur Ausführung nach einer bestimmten Zeitspanne.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichnisauswahldialog an, das es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahldialog an, das einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahldialog an, das einem Benutzer ermöglicht, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Legt die Größe des Fensters entsprechend seinem Inhalt fest.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Werts mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`Window.updateCommands()`](/de/docs/Web/API/Window/updateCommands) {{Non-standard_Inline}}
  - : Aktualisiert den Status der Befehle des aktuellen Chrome-Fensters (UI).

### Veraltete Methoden

- [`Window.back()`](/de/docs/Web/API/Window/back) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Geht einen Schritt in der Fenstergeschichte zurück. Diese Methode ist veraltet; Sie sollten stattdessen [`history.back()`](/de/docs/Web/API/History/back) verwenden.
- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bricht die wiederholte Ausführung ab, die mit `setImmediate()` festgelegt wurde.
- [`Window.forward()`](/de/docs/Web/API/Window/forward) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bewegt das Fenster ein Dokument vorwärts in der Historie. Diese Methode ist veraltet; Sie sollten stattdessen [`history.forward()`](/de/docs/Web/API/History/forward) verwenden.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Löst das Fenster vom Auffangen von Ereignissen eines bestimmten Typs.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht es einer Website oder App, auf ein geschütztes Dateisystem für ihren eigenen Gebrauch zuzugreifen.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere schwere Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Macht nichts (kein Vorgang). Beibehalten für die Rückwärtskompatibilität mit Netscape 4.x.
- [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Zeigt ein modales Dialog an.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) aus dem Koordinatensystem des Knotens in das Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) aus dem Koordinatensystem der Seite in das Koordinatensystem des Knotens.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuordnen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieser Schnittstelle. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse von dem im Fensterobjekt enthaltenen [`Document`](/de/docs/Web/API/Document) aufsteigen.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Beispielsweise, wenn ein Skript einen Ausführungsfehler aufweist oder ein Bild nicht gefunden wird oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird am globalen Geltungsbereichsobjekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn das Fenster geändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Window/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die [`oncopy`](/de/docs/Web/API/HTMLElement/copy_event)-Eigenschaft verfügbar.
- [`cut`](/de/docs/Web/API/Window/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die [`oncut`](/de/docs/Web/API/HTMLElement/cut_event)-Eigenschaft verfügbar.
- [`paste`](/de/docs/Web/API/Window/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die [`onpaste`](/de/docs/Web/API/HTMLElement/paste_event)-Eigenschaft verfügbar.

### Verbindungsevents

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` gewechselt ist.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erlangt hat und der Wert von `navigator.onLine` auf `true` gewechselt ist.

### Gerätorientierungsereignisse

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird regelmäßig ausgelöst, um die Menge der physischen Kraft der Beschleunigung, die das Gerät erfährt, und die Rotationsrate anzugeben, wenn verfügbar.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn neue Daten vom Magnetometer-Orientierungssensor über die aktuelle Orientierung des Geräts im Vergleich zum Erdkoordinatensystem verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn neue Daten vom Magnetometer-Orientierungssensor über die absolute Orientierung des Geräts im Vergleich zum Erdkoordinatensystem verfügbar sind.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder das erste Mal eine Taste/Achse des Gamepads verwendet wurde.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlaufereignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Zeichen beginnt und darauf folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument ausblendet, während er im Prozess ist, um es durch ein anderes Dokument aus der Sitzungsverlauf an dessen Stelle zu zeigen. Dies geschieht zum Beispiel, wenn der Benutzer auf die Schaltfläche "Zurück" klickt oder wenn er auf die Schaltfläche "Vorwärts" klickt, um im Sitzungsverlauf voranzugehen.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument zuerst gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument aufgrund von Navigationstätigkeiten sichtbar macht, einschließlich nicht nur, wenn die Seite zuerst geladen wird, sondern auch Situationen wie das Navigieren des Benutzers zurück zur Seite, nachdem er zu einer anderen innerhalb desselben Tabs navigiert hat.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag geändert wird.

### Lade- & Entladeereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen kurz davor sind, entladen zu werden.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

### Manifest-Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich eine Seite als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer kurz davor ist, aufgefordert zu werden, eine Webanwendung zu installieren.

### Nachrichtenereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, beispielsweise von einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) von einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht empfängt, die nicht deserialisiert werden kann.

### Druckereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Vorschau des Drucks bereitgestellt wird.

### Promise-Zurückweisungsereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn jedes Mal ein JavaScript-Promise abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, um die Ablehnung zu fangen.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript-Promise abgelehnt wird, es jedoch keinen Handler gibt, um die Ablehnung zu fangen.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Orientierung des Geräts geändert hat.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display dargestellt werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display nicht mehr dargestellt werden kann.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn der Präsentationsstatus eines VR-Geräts sich ändert — also von Präsentation zu Nicht-Präsentation wechselt oder umgekehrt.

## Schnittstellen

Siehe [DOM-Referenz](/de/docs/Web/API/Document_Object_Model).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
