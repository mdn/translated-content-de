---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("DOM")}}

Das **`Window`**-Interface repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft verweist auf das in diesem Fenster geladene [DOM-Dokument](/de/docs/Web/API/Document).

Ein Fenster für ein bestimmtes Dokument kann über die [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Eigenschaft erhalten werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, wird dem JavaScript-Code zur Verfügung gestellt.

Das `Window`-Interface beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht notwendigerweise direkt mit dem Konzept eines Benutzeroberflächenfensters in Verbindung stehen. Dennoch ist das `Window`-Interface ein geeigneter Ort, um diese Elemente, die global verfügbar sein müssen, zu integrieren. Viele davon sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Tab-Browser wird jeder Tab durch sein eigenes `Window`-Objekt repräsentiert; das globale `window`, das von JavaScript-Code in einem bestimmten Tab gesehen wird, repräsentiert immer den Tab, in dem der Code ausgeführt wird. Das heißt, selbst in einem Tab-Browser beziehen sich einige Eigenschaften und Methoden immer noch auf das gesamte Fenster, das den Tab enthält, wie z.B. [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen gilt: Alles, was nicht vernünftigerweise zu einem Tab gehören kann, gehört stattdessen zum Fenster.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

Beachten Sie, dass Eigenschaften, die Objekte sind (z.B. für das Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt weiter unten aufgelistet sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das dem aktuellen Kontext zugeordnet ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets zur Offline-Nutzung und das Generieren benutzerdefinierter Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft zeigt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentenkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das aktuelle Dokument innerhalb eines credentialless {{htmlelement("iframe")}} geladen wurde. Weitere Informationen finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Website sich in einem Zustand der Cross-Origin-Isolation befindet.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verknüpft ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über zuvor registrierte benutzerdefinierte Elemente zu erhalten.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Dokument-Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentenkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Instanz eines [`Fence`](/de/docs/Web/API/Fence)-Objekts für den aktuellen Dokumentenkontext zurück. Nur verfügbar für Dokumente, die innerhalb eines {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in das das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterfenster im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft zeigt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Verlauf-Objekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit für Anwendungen, asynchron auf die Fähigkeiten von indizierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Ruft die Höhe des Inhaltsbereichs des Browserfensters ab, einschließlich des horizontalen Scrollbalkens, wenn dieser gerendert wird.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Ruft die Breite des Inhaltsbereichs des Browserfensters ab, einschließlich des vertikalen Scrollbalkens, wenn dieser gerendert wird.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die eine benutzerdefinierte Startnavigation-Handhabung für die PWA ermöglicht.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das verwendet wird, um Daten zu speichern, auf die nur der Ursprung zugreifen kann, der sie erstellt hat.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Holt/setzt den Speicherort oder die aktuelle URL des Fensterobjekts.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der oberen linken Ecke des Ansichtsfensters des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor, um bei Bedarf in Bildschirm-Pixel umzuwandeln.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der oberen linken Ecke des Ansichtsfensters des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor, um bei Bedarf in Bildschirm-Pixel umzuwandeln.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Holt/setzt den Namen des Fensters.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}}
  - : Gibt das mit dem aktuellen `window` assoziierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Der Einstiegspunkt für die [Navigation-API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das das aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, serialisiert als Zeichenkette.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem ursprungsbezogenen Agenten-Cluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Ruft die Höhe außerhalb des Browserfensters ab.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Ruft die Breite außerhalb des Browserfensters ab.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf den übergeordneten Rahmen des aktuellen Fensters oder Unterrahmens zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die [`timing`](/de/docs/Web/API/Performance/timing)- und [`navigation`](/de/docs/Web/API/Performance/navigation)-Attribute enthält. Jedes dieser Attribute ist ein Objekt, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Verwendung von Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Einstiegspunkt für die Verwendung der [API für die priorisierte Aufgabenzuteilung](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das dem Fenster zugeordnet ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die horizontale Entfernung vom linken Rand des Benutzer-Browser-Ansichtsfensters zum linken Rand des Bildschirms zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die vertikale Entfernung vom oberen Rand des Browser-Ansichtsfensters des Benutzers zum oberen Rand des Bildschirms zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, den das Fenster horizontal gescrollt werden kann, das heißt die Dokumentbreite minus die Ansichtsfensterbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, den das Fenster vertikal gescrollt werden kann, das heißt die Dokumentenhöhe minus die Ansichtsfensterhöhe.
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt einen Objektverweis auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungs-Speicherobjekt zurück, das verwendet wird, um Daten zu speichern, auf die nur der Ursprung zugreifen kann, der sie erstellt hat.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt, um Daten in das geteilte Speicher mittels der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) zu schreiben.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das den Zugangspunkt zur Nutzung der Sprachsynthese-Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) bietet.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verknüpft ist und den Einstiegspunkt zur Nutzung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`Window.viewport`](/de/docs/Web/API/Window/viewport) {{Experimental_inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz eines [`Viewport`](/de/docs/Web/API/Viewport)-Objekts zurück, das Informationen über den aktuellen Zustand des Ansichtsfensters des Geräts bietet.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das das visuelle Ansichtsfenster für ein bestimmtes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, etc.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.
- Benannte Eigenschaften
  - : Einige Elemente im Dokument werden auch als Fenstereigenschaften exponiert:
    - Für jedes {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, und {{HTMLElement("object")}}-Element wird sein `name` (wenn nicht leer) exponiert.
      Wenn das Dokument zum Beispiel `<form name="my_form">` enthält, dann gibt `window["my_form"]` (und sein Äquivalent `window.my_form`) eine Referenz auf dieses Element zurück.
    - Für jedes HTML-Element wird sein `id` (wenn nicht leer) exponiert.

    Wenn eine Eigenschaft einem einzelnen Element entspricht, wird dieses Element direkt zurückgegeben. Wenn die Eigenschaft mehreren Elementen entspricht, wird eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurückgegeben, die alle enthält. Wenn eines der Elemente ein navigierbares `<iframe>` oder `<object>` ist, wird das [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) des ersten solchen iframes stattdessen zurückgegeben.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, das Ereignis, das momentan vom JavaScript-Code-Kontext behandelt wird, oder `undefined`, falls derzeit kein Ereignis behandelt wird. Es sollte wann immer möglich das [`Event`](/de/docs/Web/API/Event)-Objekt, das direkt an die Ereignishandler übergeben wird, verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zurück, um externe Suchanbieter zum Browser hinzuzufügen.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Orientierung in Grad (in Schritten von 90 Grad) des Ansichtsfensters relativ zur natürlichen Orientierung des Geräts zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Holt/setzt den Text in der Statusleiste am unteren Bildschirmrand des Browsers.

## Instanz-Methoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert eine Zeichenkette von Daten, die mit Base-64-Codierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt ein Warnungsdialogfenster an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Setzt den Fokus vom Fenster ab.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt eine Base-64-codierte ASCII-Zeichenkette aus einer Zeichenkette binärer Daten.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht das Abbrechen eines Rückrufs, der zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplant wurde.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht das Abbrechen eines Rückrufs, der zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplant wurde.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Bricht die wiederholte Ausführung ab, die mithilfe von [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) eingerichtet wurde.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Bricht die verzögerte Ausführung ab, die mithilfe von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) eingerichtet wurde.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt ein Dialogfeld mit einer Nachricht an, auf die der Benutzer antworten muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert eine Vielzahl unterschiedlicher Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst. Optional wird die Quelle auf das Rechteck der Pixel beschnitten, die an _(sx, sy)_ mit der Breite sw und der Höhe sh beginnen.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
  - : Erstellt einen verzögerten Abruf, der gesendet wird, sobald die Seite verlassen wurde (sie wird zerstört oder tritt in den {{Glossary("bfcache", "bfcache")}} ein) oder nach einer bereitgestellten `activateAfter`-Timeout – je nachdem, was zuerst eintritt.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht ein gegebenes String in einem Fenster.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Holt den berechneten Stil für das angegebene Element. Der berechnete Stil zeigt die berechneten Werte aller CSS-Eigenschaften des Elements.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Holt den Standard-berechneten Stil für das angegebene Element und ignoriert die Autorenstylesheets.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt auflöst, das die Details aller dem Gerät des Benutzers zur Verfügung stehenden Bildschirme darstellt.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt zurück, das die ausgewählten Elemente darstellt.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die spezifizierte Medienabfragezeichenkette darstellt.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Verschiebt das aktuelle Fenster um einen angegebenen Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Verschiebt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit für ein Fenster, einem anderen Fenster eine Datenzeichenkette zu senden, dabei muss das andere Fenster nicht im selben Bereich wie das erste liegen.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet das Druckdialogfeld, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabefeld eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten auflöst, die die lokal verfügbaren Schriftarten repräsentieren.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Wartet eine Mikrotask auf, die zu einer sicheren Zeit vor der Rückkehr der Kontrolle zur Ereignisschleife des Browsers ausgeführt werden soll.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript, indem es eine nicht behandelte Ausnahme nachahmt.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass eine Animation im Gange ist und fordert den Browser auf, für den nächsten Animationsrahmen einen Neuanstrich des Fensters zu planen.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Leerlaufzeiten eines Browsers.
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
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine festgelegte Anzahl von Millisekunden vergeht.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant die Ausführung einer Funktion nach einer bestimmten Zeit.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichniswähler an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiwähler an, der dem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiwähler an, der es dem Benutzer ermöglicht, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Passt die Fenstergröße entsprechend seinem Inhalt an.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Wertes unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Veraltete Methoden

- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse eines bestimmten Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Hebt die wiederholte Ausführung auf, die mit `setImmediate()` eingerichtet wurde.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Hebt die Erfassung der Ereignisse eines bestimmten Typs durch das Fenster auf.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht es einer Website oder App, Zugriff auf ein eigenes Sandkasten-Dateisystem zu erhalten.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere schwere Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Tut nichts (keine Operation). Aus Gründen der Rückwärtskompatibilität mit Netscape 4.x behalten.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens zum Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite zum Koordinatensystem des Knotens.

## Ereignisse

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse von dem im Fensterobjekt enthaltenen [`Document`](/de/docs/Web/API/Document) aus aufsteigen.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Ausgelöst, wenn eine Ressource nicht geladen wurde oder nicht verwendet werden kann. Beispielsweise, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden wird oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird im globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Ausgelöst, wenn das Fenster in seiner Größe verändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Verbindungseignisse

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` umgestellt wurde.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Ausgelöst, wenn der Browser den Zugriff auf das Netzwerk erlangt hat und der Wert von `navigator.onLine` auf `true` umgeschaltet wurde.

### Gerätorientierungseignisse

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : In regelmäßigen Abständen ausgelöst, zeigt es die Menge an physischer Kräfteeinwirkung der Beschleunigung an, die das Gerät erhält und die Drehgeschwindigkeit, falls verfügbar.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometer-Orientierungssensor über die aktuelle Orientierung des Geräts im Vergleich zum Erdreferenzrahmen verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometer-Orientierungssensor über die aktuelle absolute Orientierung des Geräts im Vergleich zum Erdreferenzrahmen verfügbar sind.

### Fokuseignisse

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Ausgelöst, wenn ein Element den Fokus erlangt hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Schaltfläche/ein Achse des Gamepads verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlaufseignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument ausblendet, während er dabei ist, an seiner Stelle ein anderes Dokument aus dem Verlaufs der Sitzung anzuzeigen. Dies passiert zum Beispiel, wenn der Benutzer auf die Zurück-Schaltfläche klickt oder wenn er auf die Vorwärts-Schaltfläche klickt, um im Verlaufs der Sitzung vorwärts zu gehen.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument sichtbar macht aufgrund von Navigationstätigkeiten, einschließlich nicht nur, wenn die Seite zum ersten Mal geladen wird, sondern auch in Situationen, wie wenn der Benutzer zur Seite zurück navigiert, nachdem er zu einer anderen im selben Tab navigiert war.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Ausgelöst, wenn ein Dokument aufgrund einer Navigation ausgewechselt werden soll.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Ausgelöst, wenn sich der aktive Verlaufseintrag ändert.

### Lade- und Entladeereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen kurz davor stehen, entladen zu werden.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

### Manifest-Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Ausgelöst, wenn der Browser erfolgreich eine Seite als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer kurz davor steht, aufgefordert zu werden, eine Webanwendung zu installieren.

### Nachrichtenereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel von einem Aufruf zu [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

### Druckereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument kurz davor steht, gedruckt oder zur Druckvorschau angezeigt zu werden.

### Ereignisse bei Promise-Abweisung

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, um die Ablehnung zu erfassen.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, aber kein Handler vorhanden ist, um die Ablehnung zu erfassen.

### Scroll-Ereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Behälter am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll Snap Target ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Behälter ausgelöst, wenn der Browser feststellt, dass ein neues Scroll Snap Target ansteht, das beim Ende der aktuellen Scroll-Geste ausgewählt wird.

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
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Geräts ändert - also von Präsentation zu Nicht-Präsentation oder umgekehrt.

### Blasenereignisse

Nicht alle Ereignisse, die blasen, können das `Window`-Objekt erreichen. Nur folgende tun dies und können auf dem `Window`-Objekt abgefragt werden:

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

## Registrierung von Ereignissen auf Window

HTML-Elemente haben drei Möglichkeiten, um auf Ereignisse zu hören:

- Fügen Sie dem Element einen Ereignis-Listener hinzu, indem Sie die Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden.
- Weisen Sie dem Element den Event-Handler der `oneventname`-Eigenschaft in JavaScript zu.
- Fügen Sie dem Element ein `on`-präfixiertes Attribut im HTML hinzu.

Um auf Ereignisse auf `Window`-Objekten zu hören, können Sie im Allgemeinen nur die ersten beiden Methoden verwenden, da `Window` kein entsprechendes HTML-Element hat. Es gibt jedoch eine spezifische Gruppe von Ereignissen, deren Listener dem {{HTMLElement("body")}} (oder dem veralteten {{HTMLElement("frameset")}}) Element hinzugefügt werden können, das dem Dokument des `Window` gehört, indem die zweite oder dritte Methode verwendet wird. Diese Ereignisse sind:

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

Das bedeutet, dass folgendes strikt äquivalent ist:

```js
window.onresize = (e) => console.log(e.currentTarget);
document.body.onresize = (e) => console.log(e.currentTarget);
```

```html
<body onresize="console.log(event.currentTarget)"></body>
```

In allen drei Fällen sehen Sie das `Window`-Objekt als `currentTarget` protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
