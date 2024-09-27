---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("DOM")}}

Die **`Window`**-Schnittstelle repräsentiert ein Fenster, das ein [DOM](/de/docs/Glossary/DOM)-Dokument enthält; die `document`-Eigenschaft verweist auf das [DOM-Dokument](/de/docs/Web/API/Document), das in diesem Fenster geladen ist.

Ein Fenster für ein gegebenes Dokument kann über die Eigenschaft [`document.defaultView`](/de/docs/Web/API/Document/defaultView) abgerufen werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, ist im JavaScript-Code verfügbar.

Die `Window`-Schnittstelle beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters in Verbindung stehen. Dennoch ist die `Window`-Schnittstelle ein geeigneter Ort, um diese Elemente einzuschließen, die global verfügbar sein müssen. Viele davon sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ein eigenes `Window`-Objekt dargestellt; das globale `window`, das im JavaScript-Code, der innerhalb einer bestimmten Registerkarte ausgeführt wird, sichtbar ist, repräsentiert immer die Registerkarte, in der der Code ausgeführt wird. Selbst in einem Browser mit Registerkarten gelten jedoch einige Eigenschaften und Methoden weiterhin für das gesamte Fenster, das die Registerkarte enthält, wie [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen gilt alles, was sich nicht vernünftigerweise auf eine Registerkarte beziehen kann, für das Fenster stattdessen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

Beachten Sie, dass Eigenschaften, die Objekte sind (z. B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Nutzung und das Erstellen benutzerdefinierter Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.console`](/de/docs/Web/API/Window/console) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Konsolenobjekt zurück, das Zugriff auf die Debugging-Konsole des Browsers bietet.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentenkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das aktuelle Dokument innerhalb eines credentialless {{htmlelement("iframe")}} geladen wurde. Weitere Informationen finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Website sich in einem cross-origin isolierten Zustand befindet.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verknüpft ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über zuvor registrierte benutzerdefinierte Elemente zu erhalten.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physikalischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentenkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentenkontext zurück. Nur verfügbar für in einen {{htmlelement("fencedframe")}} eingebettete Dokumente.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in dem das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterrahmen im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft gibt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Verlauf-Objekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bereitstellt einen Mechanismus, um Anwendungen die asynchrone Zugriff auf das Potenzial von indizierten Datenbanken zu ermöglichen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Ermittelt die Höhe des Inhaltsbereichs des Browserfensters einschließlich der horizontalen Bildlaufleiste, falls angezeigt.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Ermittelt die Breite des Inhaltsbereichs des Browserfensters einschließlich der vertikalen Bildlaufleiste, falls angezeigt.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) oder nicht (`false`) ist.
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die eine benutzerdefinierte Startnavigations-Implementierung für die PWA ermöglicht.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das verwendet wird, um Daten zu speichern, auf die nur die Ursprungsherkunft, die es erstellt hat, zugreifen kann.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft den Standort oder die aktuelle URL des Fensterobjekts ab oder setzt diesen.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der oberen linken Ecke des Ansichtsbereiches des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor, falls eine Anpassung an Bildschirm-Pixel erforderlich ist.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der oberen linken Ecke des Ansichtsbereiches des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor, falls eine Anpassung an Bildschirm-Pixel erforderlich ist.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab oder setzt diesen.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das aktuelle `window`-assoziierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, serialisiert als String.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem origin-keyed Agenten-Cluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Ermittelt die Höhe der Außenseite des Browserfensters.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Ermittelt die Breite der Außenseite des Browserfensters.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Eltern-Fenster oder Unterrahmen zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die [`timing`](/de/docs/Web/API/Performance/timing)- und [`navigation`](/de/docs/Web/API/Performance/navigation)-Attribute enthält, die jeweils ein Objekt sind, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Using Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext assoziiert ist. Dies ist der Eintrittspunkt zur Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verbunden ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die horizontale Entfernung vom linken Rand der Benutzeroberfläche des Browsers zum linken Bildschirmrand zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die vertikale Entfernung vom oberen Rand der Benutzeroberfläche des Browsers zum oberen Bildschirmrand zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, den das Fenster horizontal gescrollt werden kann, das heißt die Dokumentenbreite minus die Ansichtsbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, den das Fenster vertikal gescrollt werden kann (d. h. die Dokumentenhöhe minus die Ansichtsbreite).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objekt-Referenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungs-speicherobjekt zurück, das verwendet wird, um Daten zu speichern, auf die noch durch die Ursprungskette, die es erstellt hat, zugegriffen werden kann.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt für das Schreiben von Daten auf einen freigegebenen Speicher mithilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das den Einstiegspunkt für die Verwendung der Sprachsynthese-Funktionen der [Web Speech API](/de/docs/Web/API/Web_Speech_API) darstellt.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verknüpft ist und den Einstiegspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das den visuellen Ansichtsbereich für ein gegebenes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, usw.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, welches das derzeit vom JavaScript-Code-Kontext behandelte Ereignis ist, oder `undefined`, wenn derzeit kein Ereignis behandelt wird. Das an die Ereignis-Handler direkt übergebene [`Event`](/de/docs/Web/API/Event)-Objekt sollte bevorzugt verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zurück, um externe Suchanbieter zum Browser hinzuzufügen.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Ausrichtung in Grad an (in 90 Grad Schritten) relativ zur natürlichen Ausrichtung des Geräts an.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den im Statusleiste angezeigten Text ab oder setzt diesen.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert einen Datenstring, der mit Base-64-Codierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt einen Warn-Dialog an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Entfernt den Fokus vom Fenster.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt eine ASCII-codierte Base-64-Zeichenkette aus einer binären Datensatzzeichenkette.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht den Abbruch eines zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplanten Rückrufs.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht den Abbruch eines zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Rückrufs.
- [`Window.clearInterval()`](/de/docs/Web/API/ClearInterval)
  - : Bricht die wiederholte Ausführung ab, die mit [`setInterval()`](/de/docs/Web/API/SetInterval) festgelegt wurde.
- [`Window.clearTimeout()`](/de/docs/Web/API/ClearTimeout)
  - : Bricht die verzögerte Ausführung ab, die mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) festgelegt wurde.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt einen Dialog mit einer Nachricht an, auf die der Benutzer reagieren muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap)
  - : Akzeptiert eine Vielzahl von verschiedenen Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich in ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst. Optional wird die Quelle auf das Rechteck der Pixel, beginnend bei _(sx, sy)_ mit der Breite sw und der Höhe sh, zugeschnitten.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht einen bestimmten String in einem Fenster.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Holt den berechneten Stil für das angegebene Element. Der berechnete Stil gibt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Holt den standardmäßig berechneten Stil für das angegebene Element, ohne Autor-Stilblätter zu berücksichtigen.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt auflöst, das die Details aller dem Gerät des Benutzers zur Verfügung stehenden Bildschirme darstellt.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt, das das ausgewählte Element oder die Elemente repräsentiert, zurück.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das den angegebenen Media-Query-String repräsentiert.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Verschiebt das aktuelle Fenster um eine bestimmte Menge.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Verschiebt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit, dass ein Fenster eine Zeichenkette an ein anderes Fenster sendet, das nicht unbedingt innerhalb derselben Domäne wie das erste sein muss.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet den Druckdialog, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einen Dialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten auflöst, die die lokal verfügbaren Schriftarten darstellen.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Wartet eine Mikrotask, die zu einem sicheren Zeitpunkt ausgeführt wird, bevor die Steuerung zur Ereignisschleife des Browsers zurückkehrt.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript, wodurch eine unbehandelte Ausnahme emuliert wird.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Fordert den Browser auf, dass eine Animation in Arbeit ist, und fordert den Browser auf, eine Neumalung des Fensters für den nächsten Animations-Frame zu planen.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Leerlaufphasen eines Browsers.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert die Größe des Fensters dynamisch.
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
  - : Plant die Ausführung einer Funktion alle paar Millisekunden.
- [`Window.setTimeout()`](/de/docs/Web/API/SetTimeout)
  - : Plant die Ausführung einer Funktion nach einer bestimmten Zeitspanne.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichnisauswähler, der es dem Benutzer erlaubt, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswähler, der es einem Benutzer erlaubt, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswähler, der es einem Benutzer erlaubt, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Passt die Fenstergröße entsprechend seinem Inhalt an.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines gegebenen Wertes mithilfe des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`Window.updateCommands()`](/de/docs/Web/API/Window/updateCommands) {{Non-standard_Inline}}
  - : Aktualisiert den Zustand der Befehle des aktuellen Chrome-Fensters (UI).

### Veraltete Methoden

- [`Window.back()`](/de/docs/Web/API/Window/back) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Geht im Fensterverlauf einen Schritt zurück. Diese Methode ist veraltet; stattdessen sollten Sie [`history.back()`](/de/docs/Web/API/History/back) verwenden.
- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bricht die mit `setImmediate()` festgelegte wiederholte Ausführung ab.
- [`Window.forward()`](/de/docs/Web/API/Window/forward) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Geht im Fensterverlauf ein Dokument weiter. Diese Methode ist veraltet; stattdessen sollten Sie [`history.forward()`](/de/docs/Web/API/History/forward) verwenden.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Gibt das Fenster von der Erfassung von Ereignissen eines bestimmten Typs frei.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht es einer Website oder App, auf ein isoliertes Dateisystem für den eigenen Gebrauch zuzugreifen.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere schwere Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Tut nichts (no-op). Wird zur Rückwärtskompatibilität mit Netscape 4.x beibehalten.
- [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Zeigt einen modalen Dialog an.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens in das Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite in das Koordinatensystem des Knotens.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle. Neben den unten aufgelisteten Ereignissen können viele Ereignisse vom [`Document`](/de/docs/Web/API/Document), das im Fensterobjekt enthalten ist, emporsteigen.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden kann oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden wird oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird am globalen Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn das Fenster in der Größe geändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Zwischenablagen-Ereignisse

- [`copy`](/de/docs/Web/API/Window/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die [`oncopy`](/de/docs/Web/API/HTMLElement/copy_event)-Eigenschaft verfügbar.
- [`cut`](/de/docs/Web/API/Window/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die [`oncut`](/de/docs/Web/API/HTMLElement/cut_event)-Eigenschaft verfügbar.
- [`paste`](/de/docs/Web/API/Window/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.
    Auch über die [`onpaste`](/de/docs/Web/API/HTMLElement/paste_event)-Eigenschaft verfügbar.

### Verbindungs-Ereignisse

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` umgeschaltet wurde.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk gewonnen hat und der Wert von `navigator.onLine` auf `true` umgeschaltet wurde.

### Geräteorientierungsereignisse

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird in regelmäßigen Abständen ausgelöst und gibt die Menge der physikalischen Kraft der Beschleunigung an, die das Gerät erhält, und die Rotationsgeschwindigkeit, falls verfügbar.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometer-Ortungssensor über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdkordinatenrahmen verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometer-Ortungssensor über die aktuelle absolute Ausrichtung des Geräts im Vergleich zum Erdkordinatenrahmen verfügbar sind.

### Fokussierungs-Ereignisse

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder wenn das erste Mal ein Taste/Achse des Gamepads verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlaufseereignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit `#` beginnt und diesem folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument ausblendet, während er im Begriff ist, an seiner Stelle ein anderes Dokument aus der Sitzungsgeschichte anzuzeigen. Dies geschieht zum Beispiel, wenn der Benutzer die Zurück-Taste klickt oder wenn er die Vorwärts-Taste klickt, um im Verlauf vorwärts zu gehen.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem [back/forward cache](/de/docs/Glossary/bfcache) (bfcache) oder [prerender](/de/docs/Glossary/Prerender)).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument aufgrund von Navigationsaufgaben sichtbar macht, einschließlich nicht nur beim ersten Laden der Seite, sondern auch in Situationen wie dem Zurück-Navigieren zur Seite, nachdem eine andere im selben Tab aufgerufen wurde.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Dokument kurz vor dem Unladen aufgrund einer Navigation steht.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag geändert wird.

### Lade- und Entladeereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen kurz vor dem Entladen stehen.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

### Manifest-Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer kurz davor steht, aufgefordert zu werden, eine Webanwendung zu installieren.

### Nachrichtenereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht empfängt, die nicht deserialisiert werden kann.

### Druckereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument kurz vor dem Druck oder der Druckvorschau steht.

### Ereignisse für Promise-Ablehnungen

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, jedes Mal wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, um die Ablehnung zu erfassen oder nicht.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, aber kein Handler vorhanden ist, um die Ablehnung zu erfassen.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn die Ausrichtung des Geräts geändert wurde.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Bildschirm präsentiert werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Bildschirm nicht mehr präsentiert werden kann.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Geräts ändert – also von Präsentation zu nicht Präsentation oder umgekehrt.

## Schnittstellen

Siehe [DOM-Referenz](/de/docs/Web/API/Document_Object_Model).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
