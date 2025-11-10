---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: e380b2e33938d1a2f99ff0e26fbc47bab85b9313
---

{{APIRef("DOM")}}

Das **`Window`**-Interface repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft zeigt auf das [DOM-Dokument](/de/docs/Web/API/Document), das in diesem Fenster geladen ist.

Ein Fenster für ein bestimmtes Dokument kann mit der [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Eigenschaft bezogen werden.

Eine globale Variable, `window`, die das Fenster darstellt, in dem das Skript ausgeführt wird, wird für JavaScript-Code bereitgestellt.

Das `Window`-Interface beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Dennoch ist das `Window`-Interface ein geeigneter Ort, um diese Elemente aufzunehmen, die global verfügbar sein müssen. Viele davon sind in der [JavaScript Reference](/de/docs/Web/JavaScript/Reference) und der [DOM Reference](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ihr eigenes `Window`-Objekt dargestellt; das globale `window`, das vom JavaScript-Code gesehen wird, der innerhalb einer bestimmten Registerkarte ausgeführt wird, stellt immer die Registerkarte dar, in der der Code ausgeführt wird. Das gesagt, selbst in einem Browser mit Registerkarten gelten einige Eigenschaften und Methoden immer noch auf das Gesamtfenster, das die Registerkarte enthält, wie [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen betrifft alles, was nicht vernünftigerweise auf eine Registerkarte bezogen sein kann, stattdessen das Fenster.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

Beachten Sie, dass Eigenschaften, die Objekte sind (z. B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt weiter unten aufgelistet sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets für die Offline-Nutzung und das Erzeugen von benutzerdefinierten Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das aktuelle Dokument innerhalb eines credentialless {{htmlelement("iframe")}} geladen wurde. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob sich die Website in einem "cross-origin isolation state" befindet.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verknüpft ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über zuvor registrierte benutzerdefinierte Elemente zu erhalten.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für dokumente verfügbar, die in einem {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in das das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Subframes im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft gibt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das History-Objekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bietet einen Mechanismus, mit dem Anwendungen asynchron auf Funktionen von indizierten Datenbanken zugreifen können; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Ermittelt die Höhe des Inhaltsbereichs des Browserfensters einschließlich, falls vorhanden, der horizontalen Bildlaufleiste.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Ermittelt die Breite des Inhaltsbereichs des Browserfensters einschließlich, falls vorhanden, der vertikalen Bildlaufleiste.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher ist (`true`) oder nicht (`false`).
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die ermöglicht die Implementierung einer benutzerdefinierten Nahrfaceverwaltung für die PWA.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das zum Speichern von Daten verwendet wird, auf die nur vom Ursprungsdokument zugegriffen werden kann, das es erstellt hat.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft die Position oder die aktuelle URL des Fensterobjekts ab oder setzt sie.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das Locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das Menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X)-Koordinate der oberen linken Ecke des Ansichtsbereichs des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln gemeldet. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor zur Anpassung an Bildschirmpixel, falls erforderlich.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y)-Koordinate der oberen linken Ecke des Ansichtsbereichs des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln gemeldet. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor, falls erforderlich.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab oder setzt ihn.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das mit diesem `window` assoziierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, serialisiert als Zeichenkette.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem Ursprungs-gekeyten Agentencluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Ermittelt die Höhe der Außenseite des Browserfensters.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Ermittelt die Breite der Außenseite des Browserfensters.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster oder den übergeordneten Subframe des aktuellen Fensters zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die [`timing`](/de/docs/Web/API/Performance/timing)- und [`navigation`](/de/docs/Web/API/Performance/navigation)-Attribute enthält, die jeweils ein Objekt sind, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Using Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das Personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Einstiegspunkt für die Verwendung des [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verknüpft ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die horizontale Entfernung vom linken Rand des Ansichtsbereichs des Browsers zur linken Seite des Bildschirms zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben die vertikale Entfernung vom oberen Rand des Ansichtsbereichs des Browsers zur oberen Seite des Bildschirms zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das Scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, bis zu dem das Fenster horizontal gescrollt werden kann, d.h. die Dokumentbreite minus die Ansichtsbereichbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, bis zu dem das Fenster vertikal gescrollt werden kann (d.h. die Dokumenthöhe minus die Ansichtsbereichhöhe).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt ein Objekt zurück, das eine Referenz auf das Fensterobjekt selbst darstellt.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungsspeicherobjekt zurück, das zum Speichern von Daten verwendet wird, auf die nur vom Ursprungsdokument zugegriffen werden kann, das es erstellt hat.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt zum Schreiben von Daten in den geteilten Speicher mithilfe des [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das den Einstiegspunkt für die Nutzung der Sprachsynthese-Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) darstellt.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das Statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das Toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verknüpft ist, und bietet den Einstiegspunkt für die Nutzung des [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).
- [`Window.viewport`](/de/docs/Web/API/Window/viewport) {{Experimental_inline}} {{ReadOnlyInline}}
  - : Gibt eine [`Viewport`](/de/docs/Web/API/Viewport)-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Geräteansichtsbereichs liefert.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das den visuellen Ansichtsbereich für ein gegebenes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]` usw.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.
- Benannte Eigenschaften
  - : Einige Elemente im Dokument werden auch als Fenster-Eigenschaften exponiert:
    - Für jedes {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}} und {{HTMLElement("object")}}-Element wird sein `name` (sofern nicht leer) exponiert.
      Zum Beispiel, wenn das Dokument `<form name="my_form">` enthält, dann gibt `window["my_form"]` (und das äquivalente `window.my_form`) eine Referenz auf dieses Element zurück.
    - Für jedes HTML-Element wird seine `id` (falls nicht leer) exponiert.

    Wenn eine Eigenschaft einem einzelnen Element entspricht, wird dieses Element direkt zurückgegeben. Wenn die Eigenschaft mehreren Elementen entspricht, wird eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurückgegeben, die alle von ihnen enthält. Wenn eines der Elemente ein navigierbares `<iframe>` oder `<object>` ist, wird stattdessen das [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) des ersten solchen Frames zurückgegeben.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, welches das aktuell vom JavaScript-Code behandelte Ereignis darstellt, oder `undefined`, wenn derzeit kein Ereignis behandelt wird. Wann immer möglich sollte stattdessen das direkt an Ereignishandler übergebene [`Event`](/de/docs/Web/API/Event)-Objekt verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zurück, um externe Suchanbieter zum Browser hinzuzufügen.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Orientierung in Grad (in 90-Grad-Schritten) des Ansichtsbereichs relativ zur natürlichen Orientierung des Geräts zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste unten im Browser ab oder setzt diesen.

## Instanz-Methoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert einen Datenstring, der mittels Base-64-Codierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt ein Warnungsdialog an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Entfernt den Fokus vom Fenster.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt einen Base-64-codierten ASCII-String aus einem String mit Binärdaten.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht es, einen zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplanten Rückruf abzubrechen.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht es, einen zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Rückruf abzubrechen.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Bricht die wiederholte Ausführung ab, die mit [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) gesetzt wurde.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Bricht die verzögerte Ausführung ab, die mit [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) gesetzt wurde.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt einen Dialog mit einer Nachricht an, auf die der Benutzer antworten muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert eine Vielzahl von unterschiedlichen Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst. Optional wird die Quelle auf das Rechteck der Pixel beschnitten, das bei _(sx, sy)_ mit der Breite sw und der Höhe sh beginnt.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
  - : Erstellt einen verzögerten Abruf, der gesendet wird, sobald die Seite verlassen wird (sie wird zerstört oder tritt in den {{Glossary("bfcache", "bfcache")}} ein) oder nach einem angegebenen `activateAfter`-Timeout – je nachdem, was zuerst eintritt.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht in einem Fenster nach einem bestimmten String.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Ruft den berechneten Stil für das angegebene Element ab. Der berechnete Stil gibt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Ruft den Standard-berechneten Stil für das angegebene Element ab und ignoriert Autoren-Stilblätter.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt auflöst, das die Details aller Bildschirme darstellt, die dem Gerät des Benutzers verfügbar sind.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt zurück, das das ausgewählte Element bzw. die ausgewählten Elemente darstellt.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Medienabfragezeichenfolge darstellt.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Bewegt das aktuelle Fenster um einen angegebenen Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Bewegt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit für ein Fenster, eine Zeichenfolge von Daten an ein anderes Fenster zu senden, das nicht unbedingt im selben Domain-Bereich wie das erste Fenster sein muss.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet das Druckdialogfeld, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabedialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten auflöst, die die lokal verfügbaren Schriftarten darstellen.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Platziert eine Mikrotask in die Warteschlange, die zu einem sicheren Zeitpunkt ausgeführt wird, bevor die Steuerung zur Ereignisschleife des Browsers zurückkehrt.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript und emuliert eine unbehandelte Ausnahme.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Fordert den Browser auf, eine Animation als in Arbeit anzusehen, indem er einen Neuzeichnungszyklus des Fensters für den nächsten Animationsframe anfordert.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während Leerlaufzeiten des Browsers.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert die Größe des Fensters dynamisch.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrolled das Fenster an einen bestimmten Ort im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrolled das Dokument im Fenster um den angegebenen Betrag.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrolled das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrolled das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrolled zu einem bestimmten Satz von Koordinaten im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion in regelmäßigen Abständen, die durch eine bestimmte Anzahl von Millisekunden festgelegt sind.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant die Ausführung einer Funktion zu einer bestimmten Zeit.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Verzeichnisauswahl-Dialog an, der dem Benutzer erlaubt, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahl-Dialog an, der einem Benutzer erlaubt, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt einen Dateiauswahl-Dialog an, der einem Benutzer erlaubt, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Ändert die Größe des Fensters entsprechend seinem Inhalt.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Werts unter Verwendung des [strukturieren Kopieralgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Veraltete Methoden

- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse des angegebenen Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Hebt die wiederholte Ausführung auf, die mit `setImmediate()` gesetzt wurde.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Hebt die Erfassung spezifischer Ereignistypen durch das Fenster auf.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht es einer Website oder Anwendung, Zugriff auf ein sandboxed Dateisystem für den eigenen Gebrauch zu erlangen.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere ressourcenintensive Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Tut nichts (kein-Op). Wird für die Rückwärtskompatibilität mit Netscape 4.x beibehalten.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens zum Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite zum Koordinatensystem des Knotens.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuordnen eines Ereignisbehandlungsprogramms zur `oneventname`-Eigenschaft dieses Interface. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse vom im Fensterobjekt enthaltenen [`Document`](/de/docs/Web/API/Document) überbubbeln.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden werden kann oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Ausgelöst am globalen Scope-Objekt, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Ausgelöst, wenn das Fenster in der Größe verändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Verbindungsevents

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` umgeschaltet wurde.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Ausgelöst, wenn der Browser Zugang zum Netzwerk erhalten hat und der Wert von `navigator.onLine` auf `true` umgeschaltet wurde.

### Geräteorientierungsevents

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : In regelmäßigen Abständen ausgelöst und zeigt die Menge an physikalischer Beschleunigungsstärke an, die das Gerät erfährt, sowie die Rotationsrate, falls vorhanden.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Ausgelöst, wenn frische Daten vom Magnetometersensor zur Orientierung des Geräts im Vergleich zum Erdkoordinatensystem verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Ausgelöst, wenn frische Daten vom Magnetometersensor zur absoluten Orientierung des Geräts im Vergleich zum Erdkoordinatensystem verfügbar sind.

### Fokusevents

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Ausgelöst, wenn ein Element den Fokus erhalten hat.

### Gamepad-Events

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Historie-Events

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Ausgelöst, wenn sich der Fragment-Identifier der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und diesem folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Gesendet, wenn der Browser das aktuelle Dokument während des Prozesses des Wechsels zu einem anderen Dokument aus dem Sitzungsverlauf ausblendet. Dies geschieht zum Beispiel, wenn der Benutzer auf die Zurück-Schaltfläche klickt oder wenn er auf die Vorwärts-Schaltfläche klickt, um im Sitzungsverlauf vorwärts zu navigieren.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder wenn ein frisches Dokument aus dem Netzwerk geladen wird oder ein Dokument aktiviert wird (entweder aus der {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Gesendet, wenn der Browser das Dokument aufgrund von Navigation sichtbar macht, einschließlich nicht nur, wenn die Seite zuerst geladen wird, sondern auch Situationen wie der Benutzer, der zur Seite zurücknavigiert, nachdem er zu einer anderen innerhalb desselben Tabs navigiert hat.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Ausgelöst, wenn ein Dokument gerade ausgeladen wird, aufgrund einer Navigation.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Ausgelöst, wenn sich der aktive Geschichteeintrag ändert.

### Lade- und Entladeevents

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen kurz davor sind, entladen zu werden.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Ausgelöst, wenn die gesamte Seite geladen worden ist, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event)
  - : Ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

### Manifest-Events

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Ausgelöst, wenn der Browser erfolgreich eine Seite als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Ausgelöst, wenn ein Benutzer dazu aufgefordert wird, eine Webanwendung zu installieren.

### Messaging-Events

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel von einem Aufruf an [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Ausgelöst, wenn ein `Window`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

### Druck-Events

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Ausgelöst, nachdem das zugehörige Dokument zu drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Ausgelöst, wenn das zugehörige Dokument kurz davor ist, gedruckt oder zur Druckvorschau hinzugefügt zu werden.

### Ablehnung von Versprechen-Events

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Gesendet jedes Mal, wenn ein JavaScript {{jsxref("Promise")}} verworfen wird, unabhängig davon, ob ein Behandler vorhanden ist, um die Ablehnung zu erfassen oder nicht.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Gesendet, wenn ein JavaScript {{jsxref("Promise")}} verworfen wird, aber kein Behandler vorhanden ist, um die Ablehnung zu erfassen.

### Scroll-Events

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Ausgelöst am Scrollcontainer am Ende einer Scrolloperation, wenn ein neues Scrollziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Ausgelöst am Scrollcontainer, wenn der Browser feststellt, dass ein neues Scrollziel ansteht, d.h. es wird ausgewählt, wenn das aktuelle Scrollgestus endet.

### Veraltete Events

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Ausgelöst, wenn sich die Orientierung des Geräts geändert hat.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Display präsentiert werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn sich der Präsentationszustand eines VR-Geräts ändert – also von Präsentation zu Nicht-Präsentation oder umgekehrt.

### Geblähte Events

Nicht alle Ereignisse, die geblättert werden können, können das `Window`-Objekt erreichen. Nur die folgenden tun dies und können am `Window`-Objekt gehört werden:

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

Siehe [DOM Reference](/de/docs/Web/API/Document_Object_Model).

## Ereignisse auf Window lauschen

HTML-Elemente haben drei Möglichkeiten, um auf Ereignisse zu hören:

- Ein Ereignislistener zum Element hinzufügen, indem die Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird.
- Ein Ereignisbehandlungsprogramm der `oneventname`-Eigenschaft des Elements in JavaScript zuweisen.
- Ein `on`-präfixiertes Attribut im HTML zum Element hinzufügen.

Um auf Ereignisse auf `Window`-Objekten zu lauschen, können Sie allgemein nur die ersten zwei Methoden verwenden, da `Window` kein entsprechendes HTML-Element hat. Es gibt jedoch eine spezifische Gruppe von Ereignissen, deren Listener dem {{HTMLElement("body")}} (oder dem veralteten {{HTMLElement("frameset")}}) Element, das dem Dokument des `Window` gehört, mit der zweiten oder dritten Methode hinzugefügt werden kann. Diese Ereignisse sind:

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

Dies bedeutet, dass die folgenden Beispiele streng gleichwertig sind:

```js
window.onresize = (e) => console.log(e.currentTarget);
document.body.onresize = (e) => console.log(e.currentTarget);
```

```html
<body onresize="console.log(event.currentTarget)"></body>
```

In allen drei Fällen sehen Sie, dass das `Window`-Objekt als `currentTarget` protokolliert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
