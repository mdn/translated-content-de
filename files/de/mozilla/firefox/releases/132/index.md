---
title: Firefox 132 Versionshinweise für Entwickler
short-title: Firefox 132
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die Eigenschaft {{CSSXRef("text-emphasis-position")}} unterstützt nun den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations), was bedeutet, dass verschachteltes CSS jetzt in der korrekten Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernt

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/Reference/Properties/user-modify) wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) veraltet. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die Modifikatoren für reguläre Ausdrücke [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) ermöglichen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standard-/Dokumentenwert](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-{{httpheader("Accept")}}-Headers wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert. Dies entfernt Bild-MIME-Typen, die manchmal Kompatibilitätsprobleme verursachten, und stimmt mit der Fetch-Spezifikation und Safari überein. ([Firefox-Bug 1917177](https://bugzil.la/1917177)).

#### Entfernt

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Einstellung `network.http.http2.allow-push` nun auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) werden nun im [Strengen erweiterten Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden nun unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichenpuffers bzw. den Farbraum, in den bei der Textur-Importierung konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird nun unterstützt, diese steuert, ob Systembenachrichtigungen lautlos sein sollen. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Geräusche oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der Elemente {{htmlelement("link")}}, {{htmlelement("script")}} und {{htmlelement("img")}}, die `fetchPriority`-Eigenschaft der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der an den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority`-Direktive im HTTP-{{httpheader("Link")}}-Header werden nun unterstützt. Diese erlauben es Entwicklern, einen Hinweis auf die relative Priorität zum Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können zusammen mit anderen Möglichkeiten zur Festlegung der Priorität verwendet werden, wie z.B. Preloading. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden nun unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).
- Die [Berechtigungen](/de/docs/Web/API/Permissions_API) `microphone` und `camera` können nun in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch eine Benutzerbestätigung erforderlich ist. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden nun unterstützt. Die Methode `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion nutzen, um Operationen auf jedem Videoframe durchzuführen, was effizienteres Zeichnen auf eine Leinwand, Videoanalyse, Synchronisation mit externen Audioquellen usw. ermöglicht. Die Methode gibt ein Callback-Handle zurück, das an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anfrage abzubrechen. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird nun unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert auflistet ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden mehrere Verbesserungen implementiert, um WebDriver-BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Registerkarten verwendet werden. Zuvor schlugen Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError` fehl. Sie werden jetzt ein paar Mal versucht, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das Ereignis `browsingContext.contextCreated` wird nun korrekt für Lazy-Loaded-Frames ausgelöst. Zuvor wurde das Ereignis erst ausgelöst, wenn das iframe tatsächlich begann, seine Inhalte zu laden. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkevents werden nun korrekt für zwischengespeicherte Stylesheet-Anfragen ausgelöst. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Die Zeiteinheiten für Netzwerkevents wurden zuvor falsch verwendet und in Mikrosekunden angegeben. Sie werden jetzt korrekt in Millisekunden angegeben. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerkevent-Zeitmessungen sollte jetzt genauer sein und wirklich die Zeit widerspiegeln, zu der die Anfrage tatsächlich begann. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 132 veröffentlicht, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:
  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore), jedoch ist `partitioned` nicht in Rückgabewerten enthalten.
  - Die Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent), ohne `partitioned`-Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()`-Option `keepalive`:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive). Wenn `keepalive` auf `true` gesetzt ist, wird die zugehörige Anfrage vom Browser nicht abgebrochen, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.

  Dies ermöglicht es, eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für das Senden von Analysen am Ende einer Sitzung zu verwenden, was einige Vorteile hat (Sie können andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`:** <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteeigenen Mechanismen geschlossen werden können, auf dieselbe Weise wie integrierte Komponenten. Auf Android können Sie beispielsweise einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, ähnlich eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`:** <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine praktische Methode, die einen Callback jeglicher Art annimmt (gibt zurück oder wirft einen Fehler, synchron oder asynchron) und ihr Ergebnis in ein {{jsxref("Promise")}} umhüllt, sodass Promise-Semantiken (z. B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zur Verarbeitung verwendet werden können. ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle:** <code>javascript.options.experimental.json_parse_with_source</code>. Der Vorschlag zum Zugriff auf den Quelltext von [`JSON.parse`](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme im Zusammenhang mit Präzisionsverlust bei der Umwandlung von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text abmildern. ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das [`reviver`-Parameter `context`-Argument von `JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Ermöglicht den Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, welches dann in ein Objekt aufgenommen werden kann, um den festgelegten Wert bei der Umwandlung in eine Zeichenkette zu erhalten.
