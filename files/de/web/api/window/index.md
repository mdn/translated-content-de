---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("HTML DOM")}}

Das **`Window`**-Interface repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält. Die `document`-Eigenschaft verweist auf das in diesem Fenster geladene [DOM-Dokument](/de/docs/Web/API/Document).

Das Fenster eines bestimmten Dokuments kann über die Eigenschaft [`document.defaultView`](/de/docs/Web/API/Document/defaultView) abgerufen werden.

Die globale Variable `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, steht JavaScript-Code zur Verfügung.

Das `Window`-Interface enthält zahlreiche Funktionen, Namespaces, Objekte und Konstruktoren, die nicht unbedingt unmittelbar mit dem Konzept eines Fensters der Benutzeroberfläche zusammenhängen. Dennoch ist das `Window`-Interface ein geeigneter Ort für diese Elemente, da sie global verfügbar sein müssen. Viele davon sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Tabs wird jeder Tab durch ein eigenes `Window`-Objekt repräsentiert. Das globale `window`, das JavaScript-Code innerhalb eines bestimmten Tabs sieht, repräsentiert immer den Tab, in dem der Code ausgeführt wird. Allerdings beziehen sich einige Eigenschaften und Methoden auch in einem Browser mit Tabs weiterhin auf das gesamte Fenster, das den Tab enthält, etwa [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen bezieht sich alles, was sich nicht sinnvoll auf einen Tab beziehen kann, stattdessen auf das Fenster.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

Beachten Sie, dass Eigenschaften, die Objekte sind (z. B. zum Überschreiben des Prototyps integrierter Elemente), weiter unten in einem eigenen Abschnitt aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das dem aktuellen Kontext zugeordnete [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück. Dieses Objekt ermöglicht unter anderem das Speichern von Ressourcen für die Offline-Nutzung und das Erzeugen benutzerdefinierter Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt an, ob das aktuelle Fenster geschlossen ist.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.crashReport`](/de/docs/Web/API/Window/crashReport) {{ReadOnlyInline}} {{SecureContext_Inline}} {{experimental_inline}}
  - : Gibt ein [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)-Objekt zurück, mit dem beliebige Daten für den aktuellen obersten Browsing-Kontext aufgezeichnet werden können. Bei einem Browserabsturz werden diese Daten einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Reporting-Endpunkt gesendet.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das aktuelle Dokument innerhalb eines credentialless {{htmlelement("iframe")}} geladen wurde. Weitere Informationen finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob sich die Website in einem Zustand der Cross-Origin-Isolation befindet.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das dem globalen Objekt zugeordnete [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, mit dem neue [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) registriert und Informationen über bereits registrierte Custom Elements abgerufen werden können.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln auf dem aktuellen Bildschirm zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document-Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für Dokumente verfügbar, die in einem {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in das das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Subframes im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft gibt an, ob das Fenster im Vollbildmodus angezeigt wird.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das History-Objekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Stellt einen Mechanismus bereit, mit dem Anwendungen asynchron auf die Funktionen indizierter Datenbanken zugreifen können; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Ruft die Höhe des Inhaltsbereichs des Browserfensters ab, einschließlich der horizontalen Bildlaufleiste, sofern diese dargestellt wird.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Ruft die Breite des Inhaltsbereichs des Browserfensters ab, einschließlich der vertikalen Bildlaufleiste, sofern diese dargestellt wird.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` für [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) gestartet wird, bietet `launchQueue` Zugriff auf die Klasse [`LaunchQueue`](/de/docs/Web/API/LaunchQueue). Damit lässt sich für die PWA eine benutzerdefinierte Navigation beim Start implementieren.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück. Es wird zum Speichern von Daten verwendet, auf die nur der Origin zugreifen kann, der sie erstellt hat.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft den Standort beziehungsweise die aktuelle URL des Fensterobjekts ab oder legt sie fest.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X-)Koordinate der linken oberen Ecke des Viewports des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Einen Umrechnungsfaktor für die Umrechnung in Bildschirmpixel finden Sie bei Bedarf unter `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils`.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y-)Koordinate der linken oberen Ecke des Viewports des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Einen Umrechnungsfaktor für die Umrechnung in Bildschirmpixel finden Sie bei Bedarf unter `mozScreenPixelsPerCSSPixel`.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab oder legt ihn fest.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}}
  - : Gibt das dem aktuellen `window` zugeordnete [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Es ist der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das das aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Origin des globalen Objekts als serialisierte Zeichenfolge zurück.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem nach Origin getrennten Agent-Cluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Ruft die äußere Höhe des Browserfensters ab.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Ruft die äußere Breite des Browserfensters ab.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster des aktuellen Fensters oder Subframes zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die Attribute [`timing`](/de/docs/Web/API/Performance/timing) und [`navigation`](/de/docs/Web/API/Performance/navigation) enthält. Beide sind Objekte, die [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellen. Weitere Informationen und Beispiele finden Sie auch unter [Navigation Timing verwenden](/de/docs/Web/API/Performance_API/Navigation_timing).
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das dem aktuellen Kontext zugeordnete [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück. Es ist der Einstiegspunkt für die Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das dem Fenster zugeordnete screen-Objekt zurück.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den horizontalen Abstand vom linken Rand des Browserfensters der Benutzerin oder des Benutzers zum linken Bildschirmrand zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den vertikalen Abstand vom oberen Rand des Browserfensters der Benutzerin oder des Benutzers zum oberen Bildschirmrand zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, bis zu dem das Fenster horizontal gescrollt werden kann, also die Dokumentbreite abzüglich der Viewport-Breite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, bis zu dem das Fenster vertikal gescrollt werden kann, also die Dokumenthöhe abzüglich der Viewport-Höhe.
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, um die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objektreferenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Sitzungsspeicherobjekt zurück. Es wird zum Speichern von Daten verwendet, auf die nur der Origin zugreifen kann, der sie erstellt hat.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{SecureContext_Inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Origin zurück. Dies ist der wichtigste Einstiegspunkt zum Schreiben von Daten in Shared Storage mithilfe der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das als Einstiegspunkt für die Sprachsynthesefunktionen der [Web Speech API](/de/docs/Web/API/Web_Speech_API) dient.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das dem globalen Objekt zugeordnete [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück. Es dient als Einstiegspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).
- [`Window.viewport`](/de/docs/Web/API/Window/viewport) {{Experimental_inline}} {{ReadOnlyInline}}
  - : Gibt eine [`Viewport`](/de/docs/Web/API/Viewport)-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Viewports des Geräts bereitstellt.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das den visuellen Viewport eines bestimmten Fensters repräsentiert.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]` usw.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Weitere Informationen finden Sie unter [`Window.frames`](/de/docs/Web/API/Window/frames).
- Benannte Eigenschaften
  - : Einige Elemente im Dokument werden auch als Eigenschaften des Fensters verfügbar gemacht:
    - Für jedes {{HTMLElement("embed")}}-, {{HTMLElement("form")}}-, {{HTMLElement("iframe")}}-, {{HTMLElement("img")}}- und {{HTMLElement("object")}}-Element wird sein `name` verfügbar gemacht, sofern es nicht leer ist.
      Wenn das Dokument beispielsweise `<form name="my_form">` enthält, gibt `window["my_form"]` (ebenso wie `window.my_form`) eine Referenz auf dieses Element zurück.
    - Für jedes HTML-Element wird seine `id` verfügbar gemacht, sofern sie nicht leer ist.

    Wenn eine Eigenschaft einem einzelnen Element entspricht, wird dieses Element direkt zurückgegeben. Wenn die Eigenschaft mehreren Elementen entspricht, wird eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurückgegeben, die alle diese Elemente enthält. Falls eines der Elemente ein navigierbares `<iframe>` oder `<object>` ist, wird stattdessen [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) des ersten solchen iframe zurückgegeben.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, also das Ereignis, das gerade im Kontext des JavaScript-Codes verarbeitet wird, oder `undefined`, wenn gerade kein Ereignis verarbeitet wird. Stattdessen sollte nach Möglichkeit das [`Event`](/de/docs/Web/API/Event)-Objekt verwendet werden, das direkt an Ereignisbehandlungsfunktionen übergeben wird.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zum Hinzufügen externer Suchanbieter zum Browser zurück.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Ausrichtung des Viewports relativ zur natürlichen Ausrichtung des Geräts in Grad zurück (in 90-Grad-Schritten).
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste am unteren Rand des Browsers ab oder legt ihn fest.

## Instanzmethoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert eine Datenzeichenfolge, die mit Base64 kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt ein Hinweisdialogfeld an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Entzieht dem Fenster den Fokus.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt aus einer binären Datenzeichenfolge eine Base64-kodierte ASCII-Zeichenfolge.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht es, einen zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplanten Callback abzubrechen.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht es, einen zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Callback abzubrechen.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Bricht die mit [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) festgelegte wiederholte Ausführung ab.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Bricht die mit [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) festgelegte verzögerte Ausführung ab.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt ein Dialogfeld mit einer Nachricht an, auf die die Benutzerin oder der Benutzer antworten muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert verschiedene Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) erfüllt wird. Optional wird die Quelle auf ein Pixelrechteck zugeschnitten, das bei _(sx, sy)_ beginnt und die Breite sw sowie die Höhe sh hat.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Abruf einer Ressource aus dem Netzwerk.
- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
  - : Erstellt eine verzögerte Fetch-Anfrage. Sie wird gesendet, sobald die Seite verlassen wird (wenn sie zerstört wird oder in den {{Glossary("bfcache", "bfcache")}} gelangt) oder nachdem ein angegebener `activateAfter`-Timeout abgelaufen ist – je nachdem, was zuerst eintritt.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht in einem Fenster nach einer bestimmten Zeichenfolge.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Ruft den berechneten Stil für das angegebene Element ab. Der berechnete Stil enthält die berechneten Werte aller CSS-Eigenschaften des Elements.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Ruft den standardmäßig berechneten Stil für das angegebene Element ab und ignoriert dabei Autoren-Stylesheets.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objektinstanz erfüllt wird, die Details zu allen für das Gerät der Benutzerin oder des Benutzers verfügbaren Bildschirmen repräsentiert.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt zurück, das die ausgewählten Elemente repräsentiert.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Media-Query-Zeichenfolge repräsentiert.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Verschiebt das aktuelle Fenster um einen angegebenen Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Verschiebt das Fenster an die angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit, eine Datenzeichenfolge von einem Fenster an ein anderes zu senden, das sich nicht in derselben Domain befinden muss.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet das Druckdialogfeld, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den Text zurück, den die Benutzerin oder der Benutzer in einem Eingabedialogfeld eingegeben hat.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten repräsentieren.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Reiht einen Microtask ein, der zu einem sicheren Zeitpunkt ausgeführt wird, bevor die Kontrolle an die Ereignisschleife des Browsers zurückgegeben wird.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript und simuliert dabei eine unbehandelte Ausnahme.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass eine Animation läuft, und fordert ihn auf, das Neuzeichnen des Fensters für den nächsten Animationsframe einzuplanen.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht das Einplanen von Aufgaben während Leerlaufzeiten des Browsers.
- [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) {{experimental_inline}}
  - : Aktualisiert die Größeninformationen, die ein eingebettetes Dokument mit seinem einbettenden Elternelement teilt, jedoch nur, wenn das eingebettete Dokument der Weitergabe seiner Größeninformationen zugestimmt hat.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert die Fenstergröße dynamisch.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrollt das Fenster zu einer bestimmten Stelle im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrollt das Dokument im Fenster um den angegebenen Betrag.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrollt das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrollt zu bestimmten Koordinaten im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion nach jeweils einer bestimmten Anzahl von Millisekunden.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant die Ausführung einer Funktion nach einer bestimmten Zeit.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichnisauswahldialog an, in dem die Benutzerin oder der Benutzer ein Verzeichnis auswählen kann.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahldialog an, in dem die Benutzerin oder der Benutzer eine oder mehrere Dateien auswählen kann.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahldialog an, in dem die Benutzerin oder der Benutzer eine Datei speichern kann.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Passt die Fenstergröße an den Inhalt an.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt mithilfe des [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines angegebenen Werts.

### Veraltete Methoden

- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs abzufangen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bricht die mit `setImmediate()` festgelegte wiederholte Ausführung ab.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Beendet das Abfangen von Ereignissen eines bestimmten Typs durch das Fenster.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht einer Website oder App den Zugriff auf ein Sandbox-Dateisystem für eigene Zwecke.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere aufwendige Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Hat keine Wirkung (No-op). Aus Gründen der Abwärtskompatibilität mit Netscape 4.x beibehalten.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens in das Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite in das Koordinatensystem des Knotens.

## Ereignisse

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der `oneventname`-Eigenschaft dieses Interfaces eine Ereignisbehandlungsfunktion zuweisen. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse aus dem im Fensterobjekt enthaltenen [`Document`](/de/docs/Web/API/Document) nach oben weitergegeben werden.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann, beispielsweise wenn bei der Ausführung eines Skripts ein Fehler auftritt oder ein Bild nicht gefunden wird beziehungsweise ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache der Benutzerin oder des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn die Größe des Fensters geändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Verbindungsereignisse

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` zu `false` gewechselt ist.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erhalten hat und der Wert von `navigator.onLine` zu `true` gewechselt ist.

### Ereignisse zur Geräteausrichtung

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird in regelmäßigen Abständen ausgelöst und gibt an, wie stark das Gerät physisch beschleunigt wird und, sofern verfügbar, wie schnell es sich dreht.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn vom Magnetometer-Ausrichtungssensor neue Daten zur aktuellen Ausrichtung des Geräts relativ zum Erdkoordinatensystem vorliegen.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn vom Magnetometer-Ausrichtungssensor neue Daten zur aktuellen absoluten Ausrichtung des Geräts relativ zum Erdkoordinatensystem vorliegen.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn das Fenster den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn das Fenster den Fokus erhalten hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde, oder wenn eine Taste oder Achse des Gamepads zum ersten Mal verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass die Verbindung zu einem Gamepad getrennt wurde.

### Verlauf-Ereignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL ab dem Symbol `#`).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument ausblendet, während er zu einem anderen Dokument aus dem Sitzungsverlauf wechselt. Dies geschieht beispielsweise, wenn die Benutzerin oder der Benutzer auf die Schaltfläche „Zurück“ oder auf die Schaltfläche „Vorwärts“ klickt, um im Sitzungsverlauf vorwärtszugehen.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird – entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} (bfcache) oder durch {{Glossary("Prerender", "Prerendering")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument aufgrund einer Navigation sichtbar macht. Dies umfasst nicht nur das erstmalige Laden der Seite, sondern auch Fälle, in denen die Benutzerin oder der Benutzer zu der Seite zurückkehrt, nachdem sie oder er innerhalb desselben Tabs zu einer anderen Seite navigiert ist.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation gleich entladen wird.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufseintrag ändert.

### Lade- und Entladeereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen gleich entladen werden.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder geladen wurde.
- [`unload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

### Manifest-Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn die Benutzerin oder der Benutzer gleich zur Installation einer Webanwendung aufgefordert wird.

### Nachrichtenereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, beispielsweise durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht empfängt, die nicht deserialisiert werden kann.

### Druckereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem der Druck des zugehörigen Dokuments begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gleich gedruckt oder in der Druckvorschau angezeigt wird.

### Ereignisse bei abgelehnten Promises

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal gesendet, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, der die Ablehnung abfängt.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, aber kein Handler vorhanden ist, der die Ablehnung abfängt.

### Scroll-Ereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel zur Auswahl ansteht, das heißt, dass es nach dem Ende der aktuellen Scrollgeste ausgewählt wird.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn auf einem Display eine Darstellung gestartet werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn auf einem Display keine Darstellung mehr möglich ist.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich der Darstellungszustand eines VR-Geräts ändert – wenn es also von der Darstellung zum Nicht-Darstellen wechselt oder umgekehrt.

### Nach oben weitergegebene Ereignisse

Nicht alle Ereignisse, die nach oben weitergegeben werden, können das `Window`-Objekt erreichen. Nur die folgenden Ereignisse erreichen es und können am `Window`-Objekt überwacht werden:

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

## Interfaces

Siehe [DOM-Referenz](/de/docs/Web/API/Document_Object_Model).

## Ereignisse auf Window überwachen

Bei HTML-Elementen gibt es drei Möglichkeiten, Ereignisse zu überwachen:

- Fügen Sie dem Element mit der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen Event Listener hinzu.
- Weisen Sie der `oneventname`-Eigenschaft des Elements in JavaScript eine Ereignisbehandlungsfunktion zu.
- Fügen Sie dem Element im HTML ein Attribut mit dem Präfix `on` hinzu.

Um Ereignisse auf `Window`-Objekten zu überwachen, können Sie im Allgemeinen nur die ersten beiden Methoden verwenden, da `Window` kein entsprechendes HTML-Element hat. Es gibt jedoch eine bestimmte Gruppe von Ereignissen, deren Listener sich mit der zweiten oder dritten Methode dem {{HTMLElement("body")}}-Element (oder dem veralteten {{HTMLElement("frameset")}}-Element) hinzufügen lassen, das zum Dokument des `Window`-Objekts gehört. Diese Ereignisse sind:

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

Das bedeutet, dass die folgenden Varianten vollständig gleichwertig sind:

```js
window.onresize = (e) => console.log(e.currentTarget);
document.body.onresize = (e) => console.log(e.currentTarget);
```

```html
<body onresize="console.log(event.currentTarget)"></body>
```

In allen drei Fällen wird das `Window`-Objekt als `currentTarget` protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
