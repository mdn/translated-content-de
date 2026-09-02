---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("HTML DOM")}}

Das **`Window`** Interface repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft verweist auf das [DOM-Dokument](/de/docs/Web/API/Document), das in diesem Fenster geladen ist.

Ein Fenster für ein gegebenes Dokument kann über die Eigenschaft [`document.defaultView`](/de/docs/Web/API/Document/defaultView) abgerufen werden.

Eine globale Variable, `window`, die das Fenster, in dem das Skript ausgeführt wird, repräsentiert, wird im JavaScript-Code bereitgestellt.

Das `Window`-Interface beherbergt eine Vielzahl von Funktionen, Namensräumen, Objekten und Konstruktoren, die nicht notwendigerweise direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Das `Window`-Interface ist jedoch ein geeigneter Ort, um diese Elemente aufzunehmen, die global verfügbar sein müssen. Viele davon sind im [JavaScript Reference](/de/docs/Web/JavaScript/Reference) und im [DOM Reference](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ihr eigenes `Window`-Objekt repräsentiert; das globale `window`, das durch JavaScript-Code in einer gegebenen Registerkarte gesehen wird, repräsentiert immer die Registerkarte, in der der Code ausgeführt wird. Dennoch gelten auch in einem Browser mit Registerkarten einige Eigenschaften und Methoden für das gesamte Fenster, das die Registerkarte enthält, wie [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Im Allgemeinen gilt: Alles, was nicht vernünftigerweise einer Registerkarte zugeordnet werden kann, bezieht sich stattdessen auf das Fenster.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

Beachten Sie, dass Eigenschaften, die Objekte sind (z.B. zum Überschreiben des Prototyps von eingebauten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets für die Offline-Nutzung und das Erzeugen von benutzerdefinierten Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.crashReport`](/de/docs/Web/API/Window/crashReport) {{ReadOnlyInline}} {{SecureContext_Inline}} {{experimental_inline}}
  - : Gibt ein [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)-Objekt zurück, das es ermöglicht, beliebige Daten für den aktuellen obersten Browsing-Kontext aufzuzeichnen, die dann einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Meldepunkt gesendet werden, wenn ein Browserabsturz auftritt.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob das aktuelle Dokument innerhalb eines kreditlosen {{htmlelement("iframe")}} geladen wurde. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für weitere Details.
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der anzeigt, ob die Website in einem Zustand der Cross-Origin-Isolation ist.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verknüpft ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über bereits registrierte benutzerdefinierte Elemente zu erhalten.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument, das das Fenster enthält, zurück.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster für den aktuellen Dokumentkontext zurück.
- [`Window.fence`](/de/docs/Web/API/Window/fence) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Instanz des [`Fence`](/de/docs/Web/API/Fence)-Objekts für den aktuellen Dokumentkontext zurück. Nur für Dokumente verfügbar, die innerhalb eines {{htmlelement("fencedframe")}} eingebettet sind.
- [`Window.frameElement`](/de/docs/Web/API/Window/frameElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, in das das Fenster eingebettet ist, oder null, wenn das Fenster nicht eingebettet ist.
- [`Window.frames`](/de/docs/Web/API/Window/frames) {{ReadOnlyInline}}
  - : Gibt ein Array der Unterrahmen im aktuellen Fenster zurück.
- [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) {{Non-standard_Inline}}
  - : Diese Eigenschaft gibt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.
- [`Window.history`](/de/docs/Web/API/Window/history) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Verlauf-Objekt zurück.
- [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) {{ReadOnlyInline}}
  - : Bietet eine Mechanismus für Anwendungen, um asynchronen Zugriff auf Fähigkeiten von indizierten Datenbanken zu erhalten; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) {{ReadOnlyInline}}
  - : Liefert die Höhe des Inhaltsbereichs des Browserfensters, einschließlich der horizontalen Scrollleiste, falls gerendert.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) {{ReadOnlyInline}}
  - : Liefert die Breite des Inhaltsbereichs des Browserfensters, einschließlich der vertikalen Scrollleiste, falls gerendert.
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob der aktuelle Kontext sicher (`true`) oder nicht sicher (`false`) ist.
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, stellt die `launchQueue` Zugang zur [`LaunchQueue`](/de/docs/Web/API/LaunchQueue) Klasse, die es ermöglicht, eine benutzerdefinierte Startnavigation für die PWA zu implementieren.
- [`Window.length`](/de/docs/Web/API/Window/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames im Fenster zurück. Siehe auch [`window.frames`](/de/docs/Web/API/Window/frames).
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das lokale Speichersystem zurück, das verwendet wird, um Daten zu speichern, die nur von dem Ursprung, der sie erstellt hat, abgerufen werden können.
- [`Window.location`](/de/docs/Web/API/Window/location)
  - : Ruft den Standort oder die aktuelle URL des Fensterobjekts ab/setzt ihn.
- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar) {{ReadOnlyInline}}
  - : Gibt das Standortleistenobjekt zurück.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar) {{ReadOnlyInline}}
  - : Gibt das Menüleistenobjekt zurück.
- [`Window.mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die horizontale (X) Koordinate der oberen linken Ecke des Ansichtsfensters des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixel angegeben. Siehe `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` für einen Umrechnungsfaktor zur Anpassung an Bildschirmpixel, falls erforderlich.
- [`Window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die vertikale (Y) Koordinate der oberen linken Ecke des Ansichtsfensters des Fensters in Bildschirmkoordinaten zurück. Dieser Wert wird in CSS-Pixel angegeben. Siehe `mozScreenPixelsPerCSSPixel` für einen Umrechnungsfaktor zur Anpassung an Bildschirmpixel, falls erforderlich.
- [`Window.name`](/de/docs/Web/API/Window/name)
  - : Ruft den Namen des Fensters ab/setzt ihn.
- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}}
  - : Gibt das aktuelle `window`'s zugehörige [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).
- [`Window.navigator`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Navigator-Objekt zurück.
- [`Window.opener`](/de/docs/Web/API/Window/opener)
  - : Gibt eine Referenz auf das Fenster zurück, das dieses aktuelle Fenster geöffnet hat.
- [`Window.origin`](/de/docs/Web/API/Window/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, serialisiert als Zeichenfolge.
- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn dieses Fenster zu einem ursprungsschlüsselbasierten Agenten-Cluster gehört.
- [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) {{ReadOnlyInline}}
  - : Ruft die Höhe des äußeren Bereichs des Browserfensters ab.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) {{ReadOnlyInline}}
  - : Ruft die Breite des äußeren Bereichs des Browserfensters ab.
- [`Window.pageXOffset`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollX`](/de/docs/Web/API/Window/scrollX).
- [`Window.pageYOffset`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Ein Alias für [`window.scrollY`](/de/docs/Web/API/Window/scrollY).
- [`Window.parent`](/de/docs/Web/API/Window/parent) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Fenster des aktuellen Fensters oder Unterrahmens zurück.
- [`Window.performance`](/de/docs/Web/API/Window/performance) {{ReadOnlyInline}}
  - : Gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das die [`timing`](/de/docs/Web/API/Performance/timing)- und [`navigation`](/de/docs/Web/API/Performance/navigation)-Attribute enthält, die jeweils ein Objekt sind, das [leistungsbezogene](/de/docs/Web/API/Performance_API/Navigation_timing) Daten bereitstellt. Siehe auch [Using Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing) für zusätzliche Informationen und Beispiele.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar) {{ReadOnlyInline}}
  - : Gibt das Persönliche-Leistenobjekt zurück.
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Einstiegspunkt für die Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`Window.screen`](/de/docs/Web/API/Window/screen) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verbunden ist.
- [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den horizontalen Abstand vom linken Rand des Benutzer-Browserfensters zur linken Seite des Bildschirms zurück.
- [`Window.screenY`](/de/docs/Web/API/Window/screenY) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) {{ReadOnlyInline}}
  - : Beide Eigenschaften geben den vertikalen Abstand vom oberen Rand des Benutzer-Browserfensters zur oberen Seite des Bildschirms zurück.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars) {{ReadOnlyInline}}
  - : Gibt das Scrollleistenobjekt zurück.
- [`Window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Offset, auf den das Fenster horizontal gescrollt werden kann, das heißt, die Dokumentbreite minus der Ansichtsfensterbreite.
- [`Window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Der maximale Offset, auf den das Fenster vertikal gescrollt werden kann (d.h. die Dokumenthöhe minus der Ansichtsfensterhöhe).
- [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits horizontal gescrollt wurde.
- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Pixel zurück, die das Dokument bereits vertikal gescrollt wurde.
- [`Window.self`](/de/docs/Web/API/Window/self) {{ReadOnlyInline}}
  - : Gibt eine Objekt-Referenz auf das Fensterobjekt selbst zurück.
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
  - : Gibt eine Referenz auf das Sitzungsspeicherobjekt zurück, das verwendet wird, um Daten zu speichern, die nur von dem Ursprung, der sie erstellt hat, abgerufen werden können.
- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) {{ReadOnlyInline}} {{SecureContext_Inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück. Dies ist der Haupteinstiegspunkt zum Schreiben von Daten in den gemeinsamen Speicher mit der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das der Einstiegspunkt für die Verwendung der [Web Speech API](/de/docs/Web/API/Web_Speech_API) Sprachsynthesefunktionalität ist.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar) {{ReadOnlyInline}}
  - : Gibt das Statusleistenobjekt zurück.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar) {{ReadOnlyInline}}
  - : Gibt das Werkzeugleistenobjekt zurück.
- [`Window.top`](/de/docs/Web/API/Window/top) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück. Diese Eigenschaft ist schreibgeschützt.
- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verknüpft ist, und bietet den Einstieg in die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).
- [`Window.viewport`](/de/docs/Web/API/Window/viewport) {{Experimental_inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz des [`Viewport`](/de/docs/Web/API/Viewport)-Objekts zurück, das Informationen über den aktuellen Zustand des Geräte-Ansichtsfensters liefert.
- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Gibt ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt zurück, das das visuelle Ansichtsfenster für ein gegebenes Fenster darstellt.
- [`Window.window`](/de/docs/Web/API/Window/window) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das aktuelle Fenster zurück.
- `window[0]`, `window[1]`, etc.
  - : Gibt eine Referenz auf das `window`-Objekt in den Frames zurück. Siehe [`Window.frames`](/de/docs/Web/API/Window/frames) für weitere Details.
- Benannte Eigenschaften
  - : Einige Elemente im Dokument werden auch als Fenstereigenschaften dargestellt:
    - Für jedes {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}} und {{HTMLElement("object")}}-Element wird dessen `name` (wenn nicht leer) exponiert.
      Zum Beispiel, wenn das Dokument `<form name="my_form">` enthält, dann gibt `window["my_form"]` (und sein Äquivalent `window.my_form`) eine Referenz auf dieses Element zurück.
    - Für jedes HTML-Element wird dessen `id` (wenn nicht leer) exponiert.

    Wenn eine Eigenschaft einem einzelnen Element entspricht, wird dieses Element direkt zurückgegeben. Wenn die Eigenschaft mehreren Elementen entspricht, wird eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurückgegeben, die alle enthält. Wenn eines der Elemente ein navigierbares `<iframe>` oder `<object>` ist, dann wird das [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) des ersten solchen iframes stattdessen zurückgegeben.

### Veraltete Eigenschaften

- [`Window.event`](/de/docs/Web/API/Window/event) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt das **aktuelle Event** zurück, das aktuell von JavaScript-Code gehandhabt wird, oder `undefined`, wenn derzeit kein Event gehandhabt wird. Das [`Event`](/de/docs/Web/API/Event)-Objekt, das direkt an Event-Handler übergeben wird, sollte stattdessen stets verwendet werden, wenn möglich.
- [`Window.external`](/de/docs/Web/API/Window/external) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Objekt mit Funktionen zurück, um externe Suchanbieter zum Browser hinzuzufügen.
- [`Window.orientation`](/de/docs/Web/API/Window/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Orientierung in Grad (in 90-Grad-Schritten) des Ansichtsfensters relativ zur natürlichen Orientierung des Geräts zurück.
- [`Window.status`](/de/docs/Web/API/Window/status) {{Deprecated_Inline}}
  - : Ruft den Text in der Statusleiste am unteren Rand des Browsers ab/setzt ihn.

## Instanzmethoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`Window.atob()`](/de/docs/Web/API/Window/atob)
  - : Dekodiert einen Datenstring, der mit base-64-Codierung kodiert wurde.
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
  - : Zeigt einen Warnungsdialog an.
- [`Window.blur()`](/de/docs/Web/API/Window/blur) {{deprecated_inline}}
  - : Entfernt den Fokus vom Fenster.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
  - : Erstellt einen base-64 kodierten ASCII-String aus einem binären Datenstring.
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) geplanten Rückrufs.
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
  - : Ermöglicht das Abbrechen eines zuvor mit [`Window.requestIdleCallback`](/de/docs/Web/API/Window/requestIdleCallback) geplanten Rückrufs.
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
  - : Bricht die wiederholte Ausführung ab, die mit [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) gesetzt wurde.
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
  - : Bricht die verzögerte Ausführung ab, die mit [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) gesetzt wurde.
- [`Window.close()`](/de/docs/Web/API/Window/close)
  - : Schließt das aktuelle Fenster.
- [`Window.confirm()`](/de/docs/Web/API/Window/confirm)
  - : Zeigt einen Dialog mit einer Nachricht an, auf die der Benutzer antworten muss.
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
  - : Akzeptiert verschiedene Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das auf ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck der Pixel zugeschnitten, die bei _(sx, sy)_ beginnen und eine Breite von sw und eine Höhe von sh haben.
- [`Window.dump()`](/de/docs/Web/API/Window/dump) {{Non-standard_Inline}}
  - : Schreibt eine Nachricht in die Konsole.
- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
  - : Startet den Prozess zum Abrufen einer Ressource aus dem Netzwerk.
- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
  - : Erstellt einen zurückgestellten Abruf, der gesendet wird, sobald die Seite navigiert wird (entweder zerstört wird oder in den {{Glossary("bfcache", "bfcache")}} eintritt), oder nach einem bereitgestellten `activateAfter`-Timeout — je nachdem, was zuerst eintritt.
- [`Window.find()`](/de/docs/Web/API/Window/find) {{Non-standard_Inline}}
  - : Sucht nach einem gegebenen String in einem Fenster.
- [`Window.focus()`](/de/docs/Web/API/Window/focus)
  - : Richtet den Fokus auf das aktuelle Fenster.
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
  - : Ruft den berechneten Stil für das angegebene Element ab. Berechneter Stil gibt die berechneten Werte aller CSS-Eigenschaften des Elements an.
- [`Window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle) {{Non-standard_Inline}}
  - : Ruft den standardmäßig berechneten Stil für das angegebene Element ab und ignoriert dabei Autor-Stile.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt aufgelöst wird, das die Details aller dem Gerät des Benutzers verfügbaren Bildschirme darstellt.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Gibt das Auswahlobjekt zurück, das die ausgewählten Elemente darstellt.
- [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - : Gibt ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das die angegebene Medienabfragezeichenfolge darstellt.
- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
  - : Bewegt das aktuelle Fenster um einen angegebenen Betrag.
- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
  - : Bewegt das Fenster zu den angegebenen Koordinaten.
- [`Window.open()`](/de/docs/Web/API/Window/open)
  - : Öffnet ein neues Fenster.
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
  - : Bietet eine sichere Möglichkeit, dass ein Fenster ein Datenstring an ein anderes Fenster sendet, das nicht innerhalb derselben Domäne wie das erste liegen muss.
- [`Window.print()`](/de/docs/Web/API/Window/print)
  - : Öffnet den Druckdialog, um das aktuelle Dokument zu drucken.
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
  - : Gibt den vom Benutzer in einem Eingabedialog eingegebenen Text zurück.
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten aufgelöst wird, die die lokal verfügbaren Schriftarten darstellen.
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
  - : Fügt eine Mikroaufgabe in die Warteschlange ein, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle zur Ereignisschleife des Browsers ausgeführt wird.
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
  - : Meldet einen Fehler in einem Skript, emuliert eine nicht behandelte Ausnahme.
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass eine Animation in Bearbeitung ist, und fordert den Browser auf, ein Neuzeichnen des Fensters für den nächsten Animationsrahmen zu planen.
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
  - : Ermöglicht die Planung von Aufgaben während der Leerlaufzeiten eines Browsers.
- [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) {{experimental_inline}}
  - : Aktualisiert die Größeninformationen eines eingebetteten Dokuments mit seinem einbettenden Elternteil, jedoch nur, wenn das eingebettete Dokument sich entschieden hat, seine Größeninformationen zu teilen.
- [`Window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - : Ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.
- [`Window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - : Ändert die Größe des Fensters dynamisch.
- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
  - : Scrolled das Fenster zu einer bestimmten Stelle im Dokument.
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - : Scrolled das Dokument im Fenster um den angegebenen Betrag.
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{Non-standard_Inline}}
  - : Scrolled das Dokument um die angegebene Anzahl von Zeilen.
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{Non-standard_Inline}}
  - : Scrolled das aktuelle Dokument um die angegebene Anzahl von Seiten.
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - : Scrolled zu einer bestimmten Menge von Koordinaten im Dokument.
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine gegebene Anzahl von Millisekunden vergeht.
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Plant eine Funktion zur Ausführung in einer gegebenen Zeitspanne.
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt ein Verzeichnis-Auswahlfenster an, das dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt ein Dateiauswahlfenster an, das dem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Zeigt ein Dateiauswahlfenster an, das dem Benutzer ermöglicht, eine Datei zu speichern.
- [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) {{Non-standard_Inline}}
  - : Passt die Größe des Fensters an seinen Inhalt an.
- [`Window.stop()`](/de/docs/Web/API/Window/stop)
  - : Diese Methode stoppt das Laden des Fensters.
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
  - : Erstellt einen {{Glossary("Deep_copy", "tiefen Klon")}} eines angegebenen Werts unter Verwendung des [strukturierten Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Veraltete Methoden

- [`Window.captureEvents()`](/de/docs/Web/API/Window/captureEvents) {{Deprecated_Inline}}
  - : Registriert das Fenster, um alle Events des angegebenen Typs zu erfassen.
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bricht die wiederholte Ausführung ab, die mit `setImmediate()` gesetzt wurde.
- [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents) {{Deprecated_Inline}}
  - : Gibt das Fenster frei, aus dem Ereignisse eines bestimmten Typs abgefangen werden.
- [`Window.requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Erlaubt einer Website oder App, auf ein sandboxed Dateisystem für den eigenen Gebrauch zuzugreifen.
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Führt eine Funktion aus, nachdem der Browser andere schwere Aufgaben abgeschlossen hat.
- [`Window.setResizable()`](/de/docs/Web/API/Window/setResizable) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Macht nichts (no-op). Behalten zur Rückwärtskompatibilität mit Netscape 4.x.
- [`Window.webkitConvertPointFromNodeToPage()`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem eines Knotens zum Koordinatensystem der Seite.
- [`Window.webkitConvertPointFromPageToNode()`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transformiert einen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) vom Koordinatensystem der Seite zum Koordinatensystem eines Knotens.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuordnung eines Ereignis-Handlers zur `oneventname`-Eigenschaft dieses Interfaces. Neben den unten aufgeführten Ereignissen können viele Ereignisse aus dem im Fensterobjekt enthaltenen [`Document`](/de/docs/Web/API/Document) blubbern.

- [`error`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden werden kann oder ungültig ist.
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird am globalen Gültigkeitsbereichsobjekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`resize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn das Fenster in der Größe verändert wurde.
- [`storage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

### Verbindungsevents

- [`offline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` gewechselt ist.
- [`online`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk gewonnen hat und der Wert von `navigator.onLine` auf `true` gewechselt ist.

### Geräteorientierungsereignisse

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) {{SecureContext_Inline}}
  - : Wird regelmäßig ausgelöst und gibt die Menge an physikalischer Beschleunigungskraft an, die das Gerät erhält, sowie die Rotationsrate, wenn vorhanden.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometer-Orientierungssensor zur aktuellen Ausrichtung des Geräts im Vergleich zum Erdkoordinatenrahmen verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) {{SecureContext_Inline}}
  - : Wird ausgelöst, wenn frische Daten vom Magnetometer-Orientierungssensor zur aktuellen absoluten Ausrichtung des Geräts im Vergleich zum Erdkoordinatenrahmen verfügbar sind.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erlangt hat.

### Gamepad-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder das erste Mal eine Taste/Achse des Gamepads verwendet wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

### Verlaufereignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird gesendet, wenn der Browser das aktuelle Dokument versteckt, während er im Prozess des Umschaltens auf die Anzeige eines anderen Dokuments aus dem Verlaufsspeicher des Sitzungsverlaufs ist. Dies passiert zum Beispiel, wenn der Benutzer auf die Zurück-Taste klickt oder wenn er auf die Vorwärts-Taste klickt, um im Sitzungsverlauf vorwärts zu springen.
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Wird ausgelöst, wenn ein Dokument das erste Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird gesendet, wenn der Browser das Dokument sichtbar macht durch Navigationsaufgaben, einschließlich nicht nur, wenn die Seite zuerst geladen wird, sondern auch Situationen, wie z.B. die Navigation des Benutzers zurück zur Seite, nachdem er zu einer anderen innerhalb derselben Registerkarte navigiert ist.
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Wird ausgelöst, wenn ein Dokument im Begriff ist, aufgrund einer Navigation entladen zu werden.
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufs-Eintrag ändert.

### Lade- und Entladereignisse

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen im Begriff sind, entladen zu werden.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`unload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

### Manifest-Ereignisse

- [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)
  - : Wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)
  - : Wird ausgelöst, wenn ein Benutzer im Begriff ist, aufgefordert zu werden, eine Webanwendung zu installieren.

### Nachrichtenereignisse

- [`message`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`messageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn ein `Window`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

### Druckereignisse

- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument im Begriff ist, gedruckt oder für den Druck in der Vorschau angezeigt zu werden.

### Promise-Ablehnungsereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal gesendet, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, unabhängig davon, ob ein Umgang damit eingerichtet ist oder nicht.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, aber kein Umgang damit eingerichtet ist.

### Scrollereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende einer Scroll-Operation ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, d.h. es ausgewählt wird, wenn die aktuelle Scroll-Geste endet.

### Veraltete Ereignisse

- [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.
- [`vrdisplayactivate`](/de/docs/Web/API/Window/vrdisplayactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display präsentiert werden kann.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein kompatibles VR-Gerät vom Computer getrennt wurde.
- [`vrdisplaydeactivate`](/de/docs/Web/API/Window/vrdisplaydeactivate_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Display nicht mehr präsentiert werden kann.
- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Geräts ändert — d.h. von Präsentation zu Nicht-Präsentation oder umgekehrt wechselt.

### Geblubberte Ereignisse

Nicht alle Ereignisse, die blubbern können das `Window`-Objekt erreichen. Nur die folgenden tun dies und können am `Window`-Objekt gehört werden:

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

## Hören von Ereignissen auf Window

HTML-Elemente haben drei Möglichkeiten, Ereignisse zu hören:

- Fügen Sie einen Ereignis-Listener zum Element hinzu, indem Sie die Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden.
- Weisen Sie einen Ereignis-Handler der `oneventname`-Eigenschaft des Elements in JavaScript zu.
- Fügen Sie ein Attribut mit Präfix `on` dem Element in HTML hinzu.

Um auf Ereignisse in `Window`-Objekten zu hören, können Sie im Allgemeinen nur die ersten beiden Methoden verwenden, da `Window` kein entsprechendes HTML-Element besitzt. Es gibt jedoch eine spezielle Gruppe von Ereignissen, deren Zuhörer zum {{HTMLElement("body")}} (oder dem veralteten {{HTMLElement("frameset")}}) Element hinzugefügt werden können, das dem Dokument des `Window` gehört, indem Sie die zweite oder dritte Methode verwenden. Diese Ereignisse sind:

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

Das bedeutet, dass die folgenden strikt äquivalent sind:

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
