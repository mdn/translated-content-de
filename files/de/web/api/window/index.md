---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`Window`**-Schnittstelle repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft verweist auf das [DOM-Dokument](/de/docs/Web/API/Document), das in diesem Fenster geladen ist.

Ein Fenster für ein bestimmtes Dokument kann über die [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Eigenschaft abgerufen werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, steht im JavaScript-Code zur Verfügung.

Die `Window`-Schnittstelle beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Die `Window`-Schnittstelle ist jedoch ein geeigneter Ort, um solche Elemente aufzunehmen, die global verfügbar sein müssen. Viele davon sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ein eigenes `Window`-Objekt repräsentiert; das globale `window`, das von JavaScript-Code in einer gegebenen Registerkarte gesehen wird, repräsentiert immer die Registerkarte, in der der Code ausgeführt wird. Trotzdem gelten einige Eigenschaften und Methoden auch für das gesamte Fenster, das die Registerkarte enthält, wie z.B. [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen betrifft alles, was nicht vernünftigerweise zu einer Registerkarte gehören kann, stattdessen das Fenster.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

Beachten Sie, dass Eigenschaften, die Objekte sind (z.B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Nutzung und das Erstellen benutzerdefinierter Antworten auf Anforderungen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft zeigt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.crashReport`](/de/docs/Web/API/Window/crashReport) {{ReadOnlyInline}} {{SecureContext_Inline}} {{experimental_inline}}
  - : Gibt ein [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)-Objekt zurück, das es ermöglicht, beliebige Daten für den aktuellen obersten Browsing-Kontext aufzuzeichnen, die dann zu einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Meldeendpunkt gesendet werden, wenn ein Browser-Absturz auftritt.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das aktuelle Dokument in einem anmeldefreien {{htmlelement("iframe")}} geladen wurde. Siehe [IFrame anmeldefrei](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für weitere Details.
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Website sich in einem cross-origin Isolation-Zustand befindet.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt assoziiert ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über zuvor registrierte benutzerdefinierte Elemente zu erhalten.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Dokument Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für Dokumente verfügbar, die in einem {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in dem das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterrahmen im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft zeigt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Verlaufsobjekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bietet einen Mechanismus für Anwendungen, um asynchron auf Funktionen von indizierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des Inhaltsbereichs des Browserfensters einschließlich, falls gerendert, der horizontalen Bildlaufleiste zurück.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des Inhaltsbereichs des Browserfensters einschließlich, falls gerendert, der vertikalen Bildlaufleiste zurück.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) oder nicht (`false`) ist.
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem `launch_handler` `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet die `launchQueue` Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, eine benutzerdefinierte Startrichtungsbehandlung für die PWA zu implementieren.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Rahmen im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speicherobjekt zurück, das zum Speichern von Daten verwendet wird, die nur von der Ursprungsadresse abgerufen werden können, die es erstellt hat.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Holt/legt den Standort oder die aktuelle URL des Fensterobjektes fest.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das locationbar-Objekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das menubar-Objekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der linken oberen Ecke des Ansichtsfensters des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor, um bei Bedarf an Bildschirm-Pixel anzupassen.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der linken oberen Ecke des Ansichtsfensters des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixeln angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor, um bei Bedarf an Bildschirm-Pixel anzupassen.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Holt/legt den Namen des Fensters fest.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}}
  - : Gibt das aktuell `window` zugeordnete [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, als Zeichenkette serialisiert.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem ursprungsbezogenen Agenten-Cluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe der Außenseite des Browserfensters zurück.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Gibt die Breite der Außenseite des Browserfensters zurück.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster oder den übergeordneten Unterrahmen des aktuellen Fensters zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die [`timing`](/de/docs/Web/API/Performance/timing)- und [`navigation`](/de/docs/Web/API/Performance/navigation)-Attribute enthält, von denen jedes ein Objekt ist, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Using Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das personalbar-Objekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext assoziiert ist. Dies ist der Einstiegspunkt für die Nutzung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster assoziiert ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den horizontalen Abstand vom linken Rand des Ansichtsfensters des Benutzers bis zur linken Seite des Bildschirms zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den vertikalen Abstand vom oberen Rand des Ansichtsfensters des Benutzers bis zur oberen Seite des Bildschirms zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das scrollbars-Objekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, auf den das Fenster horizontal gescrollt werden kann, d.h. die Dokumentbreite minus der Ansichtsfensterbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Versatz, auf den das Fenster vertikal gescrollt werden kann (d.h. die Dokumenthöhe minus der Ansichtsfensterhöhe).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der horizontal bereits gescrollten Pixel des Dokuments zurück.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der vertikal bereits gescrollten Pixel des Dokuments zurück.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objekt-Referenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungsspeicher-Objekt zurück, das zum Speichern von Daten verwendet wird, die nur von der Ursprungsadresse abgerufen werden können, die es erstellt hat.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{SecureContext_Inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt zum Schreiben von Daten in den gemeinsamen Speicher mit der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das den Einstieg in die Nutzung der Sprachsynthese-Funktionen der [Web Speech API](/de/docs/Web/API/Web_Speech_API) bietet.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das statusbar-Objekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das toolbar-Objekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fenster-Hierarchie zurück. Diese Eigenschaft ist nur lesbar.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt assoziiert ist und den Einstiegspunkt für die Nutzung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`Window.viewport`](/de/docs/Web/API/Window/viewport) {{Experimental_inline}} {{ReadOnlyInline}}
  - : Gibt eine [`Viewport`](/de/docs/Web/API/Viewport)-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Geräteansichtsfensters bereitstellt.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das das visuelle Ansichtsfenster für ein gegebenes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, usw.
  - : Gibt eine Referenz auf das `window`-Objekt in den Rahmen zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.
- Benannte Eigenschaften
  - : Einige Elemente im Dokument sind auch als Fenstereigenschaften verfügbar:
    - Für jedes {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}} und {{HTMLElement("object")}}-Element wird sein `name` (wenn nicht leer) exponiert.
      Zum Beispiel, wenn das Dokument `<form name="my_form">` enthält, dann gibt `window["my_form"]` (und sein Äquivalent `window.my_form`) eine Referenz auf dieses Element zurück.
    - Für jedes HTMLElement wird seine `id` (wenn nicht leer) exponiert.

    Wenn eine Eigenschaft mit einem einzelnen Element übereinstimmt, wird dieses Element direkt zurückgegeben. Wenn die Eigenschaft mit mehreren Elementen übereinstimmt, wird eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurückgegeben, die alle enthält. Wenn eines der Elemente ein navigierbares `<iframe>` oder `<object>` ist, wird stattdessen das [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) des ersten solchen iframes zurückgegeben.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Ereignis** zurück, das Ereignis, das derzeit vom JavaScript-Kontext der Anwendung gehandhabt wird, oder `undefined`, wenn gerade kein Ereignis behandelt wird. Das [`Event`](/de/docs/Web/API/Event)-Objekt, das direkt an Ereignishandler übergeben wird, sollte wann immer möglich stattdessen verwendet werden.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zurück, um externe Suchanbieter zum Browser hinzuzufügen.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Ausrichtung in Grad (in 90-Grad-Schritten) des Viewports relativ zur natürlichen Ausrichtung des Geräts zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Holt/legt den Text in der Statusleiste am unteren Rand des Browsers fest.

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert einen Datenstring, der mit der base-64-Codierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt ein Alarmdialogfeld an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Entfernt den Fokus vom Fenster.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt einen base-64-kodierten ASCII-String aus einem String aus binären Daten.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht es, einen zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) anberaumten Rückruf abzubrechen.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht es, einen zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Rückruf abzubrechen.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Hebt die wiederholte Ausführung auf, die mit [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) gesetzt wurde.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Hebt die verzögerte Ausführung auf, die mit [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) gesetzt wurde.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt einen Dialog mit einer Nachricht an, auf die der Benutzer reagieren muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert eine Vielzahl unterschiedlicher Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das in einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck von Pixeln beschnitten, das bei _(sx, sy)_ mit der Breite sw und Höhe sh beginnt.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Vorgang des Abrufens einer Ressource aus dem Netzwerk.
- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
  - : Erstellt einen zurückgestellten Abruf, der gesendet wird, sobald die Seite verlassen wird (sie wird zerstört oder geht in den {{Glossary("bfcache", "bfcache")}}) oder nach einem festgelegten `activateAfter`-Timeout — je nachdem, was zuerst eintritt.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht in einem Fenster nach einer bestimmten Zeichenfolge.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Setzt den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Holt den berechneten Stil für das angegebene Element. Der berechnete Stil gibt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Holt den Standard-berechneten Stil für das angegebene Element, ignoriert dabei Autorenstile.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objektinstanz erfüllt wird, die die Details aller Bildschirme darstellt, die dem Gerät des Benutzers zur Verfügung stehen.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Selectionsobjekt zurück, das die ausgewählten Elemente repräsentiert.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Media Query-Zeichenfolge repräsentiert.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Verschiebt das aktuelle Fenster um eine festgelegte Menge.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Verschiebt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit für ein Fenster, einen Zeichenfolgen-Datensatz an ein anderes Fenster zu senden, das nicht in derselben Domäne wie das erste sein muss.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet den Druckdialog zum Drucken des aktuellen Dokuments.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabedialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftzeichen repräsentieren.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Wartet einen Mikroauftrag zur Ausführung zu einem sicheren Zeitpunkt, bevor die Steuerung in die Ereignisschleife des Browsers zurückkehrt, ein.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript und simuliert eine nicht behandelte Ausnahme.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass eine Animation im Gange ist und fordert, dass der Browser einen Neuzeichen-Zyklus des Fensters für den nächsten Animationsrahmen ansetzt.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Leerlaufzeiten eines Browsers.
- [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) {{experimental_inline}}
  - : Aktualisiert die Größeninformationen, die von einem eingebetteten Dokument mit seinem einbettenden Elternteil geteilt werden, aber nur, wenn das eingebettete Dokument zugestimmt hat, seine Größeninformationen zu teilen.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert dynamisch die Größe des Fensters.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrollt das Fenster zu einem bestimmten Platz im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrollt das Dokument im Fenster um die angegebene Menge.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrollt das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrollt zu einem bestimmten Koordinatensatz im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine bestimmte Anzahl von Millisekunden vergangen ist.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant die Ausführung einer Funktion in einer bestimmten Zeit.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt ein Verzeichnis-Auswahlfeld an, das es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt ein Dateiauswahlfeld an, mit dem ein Benutzer eine oder mehrere Dateien auswählen kann.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt ein Dateiauswahlfeld an, das es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Dimensioniert das Fenster entsprechend seinem Inhalt.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Wertes unter Verwendung des [strukturierten Kopier-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Veraltete Methoden

- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Ereignisse eines bestimmten Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Hebt die wiederholte Ausführung auf, die mit `setImmediate()` festgelegt wurde.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Hebt die Erfassung von bestimmten Ereignistypen durch das Fenster auf.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ermöglicht einer Website oder App den Zugriff auf ein sandboxed Dateisystem für den eigenen Gebrauch.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere intensive Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Macht nichts (kein Effekt). Beibehalten zur Rückwärtskompatibilität mit Netscape 4.x.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem des Knotens in das Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite in das Koordinatensystem des Knotens.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse aus dem [`Document`](/de/docs/Web/API/Document), das im Fenster-Objekt enthalten ist, durch aufsteigen.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Tritt auf, wenn eine Ressource nicht geladen wurde oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird am globalen Geltungsbereich-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn das Fenster in der Größe geändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Verbindungsevents

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Tritt ein, wenn der Browser den Zugriff aufs Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` gewechselt hat.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Tritt ein, wenn der Browser den Zugriff aufs Netzwerk wiedererlangt hat und der Wert von `navigator.onLine` auf `true` gewechselt hat.

### Geräteorientierungsereignisse

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird in regelmäßigen Abständen ausgelöst und zeigt die physische Beschleunigungskraft an, die das Gerät erfährt sowie die Rotationsrate, falls verfügbar.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn neue Daten vom Magnetometer-Orientierungssensor über die aktuelle Orientierung des Geräts im Vergleich zum Erdkoordinatenrahmen vorliegen.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn neue Daten vom Magnetometer-Orientierungssensor über die aktuelle absolute Orientierung des Geräts im Vergleich zum Erdkoordinatenrahmen vorliegen.

### Fokusevents

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Tritt auf, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Tritt auf, wenn ein Element den Fokus erlangt hat.

### Gamepadevents

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Tritt auf, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Taste/Achse des Gamepads benutzt wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Tritt auf, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlaufsevents

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Tritt auf, wenn sich der Fragment-Identifikator der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und danach folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument versteckt, während im Prozess des Wechsels, um ein anderes Dokument aus dem Sitzungsverlauf anzuzeigen. Dies geschieht zum Beispiel, wenn der Benutzer auf die Zurück-Schaltfläche klickt oder wenn er auf die Vorwärts-Schaltfläche klickt, um im Sitzungsverlauf voranzuschreiten.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Tritt auf, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument sichtbar macht aufgrund von Navigationen, einschließlich nicht nur wenn die Seite zum ersten Mal geladen wird, sondern auch Situationen wie wenn der Benutzer zur Seite zurücknavigiert, nachdem er zu einer anderen innerhalb derselben Registerkarte navigiert hat.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Tritt auf, wenn ein Dokument entladen wird aufgrund einer Navigation.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird gesendet, wenn sich das aktive Verlaufsobjekt ändert.

### Lade- und Entladeereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Tritt ein, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Tritt auf, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event)
  - : Tritt ein, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

### Manifest-Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Tritt ein, wenn der Browser erfolgreich eine Seite als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer kurz davor ist, aufgefordert zu werden, eine Webanwendung zu installieren.

### Nachrichtenereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Tritt auf, wenn das Fenster eine Nachricht erhält, zum Beispiel von einem Aufruf an [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsingkontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Tritt auf, wenn ein `Window`-Objekt eine Nachricht empfängt, die nicht deserialisiert werden kann.

### Druckereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Tritt auf, nachdem das assoziierte Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das assoziierte Dokument gedruckt oder zur Druckanzeige vorbereitet wird.

### Promise-Rejection-Ereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Handler vorhanden ist, der die Ablehnung fängt oder nicht.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, aber kein Handler vorhanden ist, der die Ablehnung fängt.

### Scrollereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende einer Scroll-Operation ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser bestimmt hat, dass ein neues Scroll-Snap-Ziel anhängig ist, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Ausrichtung des Geräts ändert.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Geräts ändert — d.h. es wechselt von präsentierend zu nicht präsentierend oder umgekehrt.

### Geblendete Ereignisse

Nicht alle Ereignisse, die blasen können, erreichen das `Window`-Objekt. Nur die folgenden tun dies und können am `Window`-Objekt gehört werden:

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

## Ereignisse auf Fenster hören

HTML-Elemente haben drei Möglichkeiten, um auf Ereignisse zu hören:

- Fügen Sie dem Element einen Ereignishandler mit der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) hinzu.
- Weisen Sie dem `oneventname`-Eigentum des Elements in JavaScript einen Ereignishandler zu.
- Fügen Sie dem Element im HTML ein `on`-präfixiertes Attribut hinzu.

Um auf Ereignisse auf `Window`-Objekten zu hören, können Sie im Allgemeinen nur die ersten beiden Methoden verwenden, da `Window` kein entsprechendes HTML-Element hat. Es gibt jedoch eine bestimmte Gruppe von Ereignissen, deren Listener dem {{HTMLElement("body")}} (oder dem veralteten {{HTMLElement("frameset")}}) Element des Dokuments des `Window` mit der zweiten oder dritten Methoden hinzugefügt werden können. Diese Ereignisse sind:

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

Das bedeutet, dass die folgenden exakt gleichwertig sind:

```js
window.onresize = (e) => console.log(e.currentTarget);
document.body.onresize = (e) => console.log(e.currentTarget);
```

```html
<body onresize="console.log(event.currentTarget)"></body>
```

In allen drei Fällen sehen Sie das `Window`-Objekt als `currentTarget`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
