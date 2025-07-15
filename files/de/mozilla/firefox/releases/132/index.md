---
title: Firefox 132 für Entwickler
short-title: Firefox 132
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die Eigenschaft {{CSSXRef("text-emphasis-position")}} unterstützt nun den Wert `auto`, um diese mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Regel für verschachtelte Deklarationen](/de/docs/Web/API/CSSNestedDeclarations), was bedeutet, dass verschachteltes CSS nun in der richtigen Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) veraltet. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die regulären Ausdrücke [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) ermöglichen es, Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam werden zu lassen. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standardwert/Document-Wert](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-Headers {{httpheader("Accept")}} wurde zu `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert. Dies entfernt Bild-MIME-Typen, die manchmal Kompatibilitätsprobleme verursachten und stimmt mit der Fetch-Spezifikation und Safari überein. ([Firefox-Bug 1917177](https://bugzil.la/1917177)).

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Präferenz `network.http.http2.allow-push` nun auf `false` gesetzt ist. Diese Funktion wird von keinem anderen bedeutenden Browser mehr unterstützt und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Privatsphäre

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) werden nun im [Strengen erweiterten Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden nun unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichenpuffers und den Farbraum zur Konvertierung beim Import von Texturen. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird nun unterstützt, die steuert, ob Systembenachrichtigungen lautlos sein sollen. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Sounds oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das Attribut `fetchpriority` der Elemente {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}}, die Eigenschaft `fetchPriority` der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der dem [`Request()` Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die Direktive `fetchpriority` im HTTP-Header {{httpheader("Link")}} werden nun unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität für das Laden einer bestimmten Ressource im Vergleich zu anderen Ressourcen des gleichen Typs zu geben und können neben anderen Möglichkeiten zur Prioritätsetzung verwendet werden, wie z.B. Preloading. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden jetzt unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).
- Die Berechtigungen `microphone` und `camera` können nun in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu überprüfen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch vom Benutzer genehmigt werden muss. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden nun unterstützt. Die `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Compositor gesendet wird. Entwickler können diese Funktion verwenden, um Operationen an jedem Videobild durchzuführen, was eine effizientere Darstellung auf einer Leinwand, Videoanalyse, Synchronisierung mit externen Audioquellen usw. ermöglicht. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anforderung zu stornieren. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft der zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen umgesetzt, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor schlug derartige Befehle wie `browsingContext.setViewport` häufig wegen eines `AbortError` fehl, jetzt werden sie ein paar Mal wiederholt, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das Ereignis `browsingContext.contextCreated` wird nun korrekt für Lazy-Loaded-Frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich mit dem Laden seines Inhalts begann. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkereignisse werden nun korrekt für zwischengespeicherte Anfragen von Stylesheets ausgegeben. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Netzwerkereigniszeiten verwendeten zuvor die falsche Einheit und wurden in Mikrosekunden bereitgestellt. Sie sind jetzt korrekt in Millisekunden angegeben. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerkereigniszeiten sollte jetzt genauer sein und wirklich mit der Zeit übereinstimmen, zu der die Anfrage tatsächlich begann. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 132, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die den Event-Loop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Mit Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies beinhaltet:
  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore), wobei `partitioned` nicht in den Rückgabewerten enthalten ist.
  - Die Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent), ausgenommen `partitioned`-Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive). Wenn `keepalive` auf `true` gesetzt ist, wird der zugehörige Request nicht abgebrochen, wenn die Seite, die ihn initiiert hat, entladen wird, bevor der Request abgeschlossen ist.

  Dies ermöglicht es, einen Fetch-Request als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu verwenden, um Analysedaten am Ende einer Sitzung zu senden, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch {{jsxref("Promise")}} zugreifen). Es ist auch in [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, ähnlich wie eingebaute Komponenten. Beispielsweise können Sie auf Android einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es, ähnlich eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine Komfortmethode, die einen beliebigen Callback entgegennimmt (gibt zurück oder wirft, synchron oder asynchron) und dessen Ergebnis in einem {{jsxref("Promise")}} umwickelt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu verarbeiten ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [Vorschlag zur Zugriffsfunktion für Quelltext in `JSON.parse`](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme mit Verlust der Genauigkeit beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text abmildern sollen ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `JSON.parse()` [`Reviver`-Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den Original-JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Überprüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wurde.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, welches dann in einem Objekt enthalten sein kann, um den angegebenen Wert beim Serialisieren des Objekts zu erhalten.
