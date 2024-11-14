---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 6e205846ce8de4024621447c1d239f9480d79c42
---

{{APIRef("DOM")}}

Das **`Window`**-Interface repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft verweist auf das geladene [DOM-Dokument](/de/docs/Web/API/Document) in diesem Fenster.

Ein Fenster für ein gegebenes Dokument kann über die [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Eigenschaft abgerufen werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript läuft, ist im JavaScript-Code verfügbar.

Das `Window`-Interface beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Das `Window`-Interface ist jedoch ein geeigneter Ort, um diese Elemente einzuschließen, die global verfügbar sein müssen. Viele davon sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem tab-basierten Browser wird jeder Tab durch ein eigenes `Window`-Objekt repräsentiert; das globale `window`, das von JavaScript-Code innerhalb eines bestimmten Tabs gesehen wird, repräsentiert immer den Tab, in dem der Code ausgeführt wird. Dennoch gelten in einem tab-basierten Browser einige Eigenschaften und Methoden weiterhin für das gesamte Fenster, das den Tab enthält, wie z.B. [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Allgemein gilt, dass alles, was nicht vernünftigerweise auf einen Tab bezogen werden kann, stattdessen auf das Fenster bezogen ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

Beachten Sie, dass Eigenschaften, die Objekte sind (z.B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets für die Offline-Nutzung und das Erstellen von benutzerdefinierten Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.console`](/de/docs/Web/API/Window/console) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Konsolenobjekt zurück, das Zugriff auf die Debug-Konsole des Browsers bietet.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein boolesches Wert zurück, der angibt, ob das aktuelle Dokument innerhalb eines credentialless {{htmlelement("iframe")}} geladen wurde. Weitere Details siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Website sich in einem Zustand der Cross-Origin-Isolation befindet.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das dem globalen Objekt zugeordnet ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über zuvor registrierte benutzerdefinierte Elemente zu erhalten.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physikalischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document PiP (Picture-in-Picture)](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur verfügbar für Dokumente, die innerhalb eines {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in dem das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterrahmen im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft gibt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das History-Objekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bietet einen Mechanismus, um Anwendungsfähigkeiten von indizierten Datenbanken asynchron zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des Inhaltsbereichs des Browserfensters zurück, einschließlich des horizontalen Scrollbalkens, falls vorhanden.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des Inhaltsbereichs des Browserfensters zurück, einschließlich des vertikalen Scrollbalkens, falls vorhanden.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) oder unsicher (`false`) ist.
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die eine Implementierung des benutzerdefinierten Startnavigationshandlings für die PWA ermöglicht.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das zum Speichern von Daten verwendet wird, auf die nur der Ursprung, der es erstellt hat, zugreifen kann.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft den Standort oder die aktuelle URL des Fensterobjekts ab/legt sie fest.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das Locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das Menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der oberen linken Ecke des Viewports des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor in Bildschirmpixel, falls erforderlich.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der oberen linken Ecke des Viewports des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor in Bildschirmpixel, falls erforderlich.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab/legt ihn fest.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das aktuelle `window`-assozierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Der Eintrittspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, serialisiert als String.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem urschlüsselbasierten Agentencluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe der Außenseite des Browserfensters zurück.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Gibt die Breite der Außenseite des Browserfensters zurück.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster des aktuellen Fensters oder Unterrahmens zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die Attribute [`timing`](/de/docs/Web/API/Performance/timing) und [`navigation`](/de/docs/Web/API/Performance/navigation) enthält, die jeweils ein Objekt sind, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Using Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das Personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Eintrittspunkt für die Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verknüpft ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die horizontale Entfernung vom linken Rand des Viewports des Benutzers bis zur linken Seite des Bildschirms zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die vertikale Entfernung vom oberen Rand des Viewports des Benutzers bis zur oberen Seite des Bildschirms zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das Scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, um den das Fenster horizontal gescrollt werden kann, also die Dokumentbreite minus der Viewport-Breite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, um den das Fenster vertikal gescrollt werden kann (d.h. die Dokumenthöhe minus der Viewport-Höhe).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objekt-Referenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungspeicher-Objekt zurück, das zum Speichern von Daten verwendet wird, die nur von dem Ursprung, der es erstellt hat, zugänglich sind.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt für das Schreiben von Daten in den Shared Storage mit der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das der Eintrittspunkt zur Nutzung der Sprechsynthesefunktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das Statusleiste-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das Toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verbunden ist, und den Eintrittspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das den visuellen Viewport für ein gegebenes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, usw.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für mehr Einzelheiten.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, das Ereignis, das derzeit im Kontext des JavaScript-Codes verarbeitet wird, oder `undefined`, wenn derzeit kein Ereignis verarbeitet wird. Das [`Event`](/de/docs/Web/API/Event)-Objekt, das direkt an Ereignishandler übergeben wird, sollte nach Möglichkeit stattdessen verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zurück, um externe Suchanbieter zum Browser hinzuzufügen.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Orientierung in Grad (in 90-Grad-Inkrementen) des Viewports relativ zur natürlichen Ausrichtung des Gerätes zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste am unteren Bildschirmrand ab/legt ihn fest.

## Instanz-Methoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert einen String, der mit Base-64-Codierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt einen Alarmdialog an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Setzt den Fokus vom Fenster weg.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt einen base-64-codierten ASCII-String aus einem String mit Binärdaten.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplanten Rückrufs.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Rückrufs.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Hebt die durch [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) gesetzte wiederholte Ausführung auf.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Hebt die durch [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) gesetzte verzögerte Ausführung auf.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt einen Dialog mit einer Nachricht an, auf die der Benutzer reagieren muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert eine Vielzahl von unterschiedlichen Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck von Pixeln mit dem Ursprung bei _(sx, sy)_ mit der Breite sw und der Höhe sh zugeschnitten.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Gibt eine Nachricht auf der Konsole aus.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht nach einem gegebenen String in einem Fenster.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Gibt den berechneten Stil für das angegebene Element zurück. Berechneter Stil bezieht sich auf die berechneten Werte aller CSS-Eigenschaften des Elements.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Gibt den Standardwert des berechneten Stils für das angegebene Element zurück und ignoriert Autoren-Stylesheets.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt gefüllt wird, das die Details aller auf dem Gerät des Benutzers verfügbaren Bildschirme darstellt.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt zurück, das das/die ausgewählte(n) Element(e) darstellt.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Medienabfragezeichenfolge darstellt.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Bewegt das aktuelle Fenster um einen angegebenen Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Bewegt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit für ein Fenster, eine Zeichenkette von Daten an ein anderes Fenster zu senden, das sich nicht notwendigerweise in derselben Domain wie das erste befindet.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet das Druckdialogfeld, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabedialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten gefüllt wird, die die lokal verfügbaren Schriftarten darstellen.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Stellt eine Mikrotask in die Warteschlange, die zu einem sicheren Zeitpunkt vor der Rückgabe der Kontrolle an die Ereignisschleife des Browsers ausgeführt wird.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript, indem sie eine unbehandelte Ausnahme simuliert.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass eine Animation im Gange ist, und bittet den Browser, das Fenster für den nächsten Animationsframe neu zu zeichnen.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Ruhephasen eines Browsers.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Verändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert dynamisch die Größe des Fensters.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrollt das Fenster zu einer bestimmten Stelle im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrollt das Dokument im Fenster um den angegebenen Betrag.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrollt das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine bestimmte Anzahl von Millisekunden vergeht.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant die Ausführung einer Funktion in einem bestimmten Zeitraum.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichnisauswahldialog an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Passt die Größe des Fensters entsprechend seinem Inhalt an.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Werts unter Verwendung des [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`Window.updateCommands()`](/de/docs/Web/API/Window/updateCommands) {{Non-standard_Inline}}
  - : Aktualisiert den Status der Befehle des aktuellen Chromfensters (UI).

### Veraltete Methoden

- [`Window.back()`](/de/docs/Web/API/Window/back) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Geht einen Schritt in der Fensterhistorie zurück. Diese Methode ist veraltet; Sie sollten stattdessen [`history.back()`](/de/docs/Web/API/History/back) verwenden.
- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Hebt die durch `setImmediate()` gesetzte wiederholte Ausführung auf.
- [`Window.forward()`](/de/docs/Web/API/Window/forward) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bewegt das Fenster ein Dokument vorwärts in der Historie. Diese Methode ist veraltet; Sie sollten stattdessen [`history.forward()`](/de/docs/Web/API/History/forward) verwenden.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Entlässt das Fenster aus der Ereignisfallenfunktion für alle Ereignisse eines bestimmten Typs.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht es einer Website oder App, Zugriff auf ein sandboxed Dateisystem für den eigenen Gebrauch zu erhalten.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere ressourcenintensive Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Führt keine Operation aus (no-op). Für die Rückwärtskompatibilität mit Netscape 4.x beibehalten.
- [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Zeigt einen modalen Dialog an.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens in das der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite in das des Knotens.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieses Interfaces ab. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse vom [`Document`](/de/docs/Web/API/Document) empfangen werden, das das Fensterobjekt enthält.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Beispielsweise, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden werden kann oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn das Fenster seine Größe geändert hat.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Window/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert. Auch über die [`oncopy`](/de/docs/Web/API/HTMLElement/copy_event)-Eigenschaft verfügbar.
- [`cut`](/de/docs/Web/API/Window/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert. Auch über die [`oncut`](/de/docs/Web/API/HTMLElement/cut_event)-Eigenschaft verfügbar.
- [`paste`](/de/docs/Web/API/Window/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert. Auch über die [`onpaste`](/de/docs/Web/API/HTMLElement/paste_event)-Eigenschaft verfügbar.

### Verbindungsevents

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` umgeschaltet wurde.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erlangt hat und der Wert von `navigator.onLine` auf `true` umgeschaltet wurde.

### Geräteorientierungsevents

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird in regelmäßigen Abständen ausgelöst, und zeigt die Menge an physischer Kraft der Beschleunigung an, die das Gerät erhält, und die Rotationsrate, falls verfügbar.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten des Magnetometer-Orientierungssensors über die aktuelle Orientierung des Geräts im Vergleich zum Erdkoordinatenrahmen verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten des Magnetometer-Orientierungssensors über die aktuelle absolute Orientierung des Geräts im Vergleich zum Erdkoordinatenrahmen verfügbar sind.

### Fokusevents

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Taste/Achse des Gamepads verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlaufsereignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument ausblendet, während er gerade dabei ist, ein anderes Dokument aus der Sitzungs-Historie an seiner Stelle anzuzeigen. Dies geschieht zum Beispiel, wenn der Benutzer auf die Zurück-Schaltfläche klickt oder auf die Vorwärts-Schaltfläche klickt, um in der Sitzungsverlaufshistorie vorwärts zu gehen.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument aufgrund von Navigationsaufgaben sichtbar macht, einschließlich nicht nur, wenn die Seite zuerst geladen wird, sondern auch Situationen wie, dass der Benutzer zur Seite zurück navigiert, nachdem er zu einer anderen innerhalb desselben Tabs navigiert hat.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Wird ausgelöst, wenn ein Dokument bald entladen wird aufgrund einer Navigation.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Eintrag in der Historie geändert wird.

### Lade- und Entladeereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

### Manifester Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich eine Seite als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer angeboten wird, eine Webanwendung zu installieren.

### Messaging-Ereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel von einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

### Druckereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird nach dem Start des Drucks des zugehörigen Dokuments oder nach dem Schließen der Druckvorschau ausgelöst.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau vorbereitet wird.

### Promiseabweisungsereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, um die Ablehnung abzufangen.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, aber kein Handler vorhanden ist, um die Ablehnung abzufangen.

### Scrollereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende einer Scroll-Operation ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Orientierung des Geräts geändert hat.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn der Präsentationsstatus eines VR-Geräts sich ändert — d.h. von Präsentieren zu Nicht-Präsentieren wechselt, oder umgekehrt.

## Schnittstellen

Siehe [DOM-Referenz](/de/docs/Web/API/Document_Object_Model).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
