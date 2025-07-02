---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die Eigenschaft {{CSSXRef("text-emphasis-position")}} unterstützt nun den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt nun die [Verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), was bedeutet, dass verschachteltes CSS jetzt in der richtigen Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) abgelehnt. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die Modifikatoren für reguläre Ausdrücke [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) ermöglichen es Ihnen, Änderungen nur in einem bestimmten Teil eines Regex-Musters vorzunehmen. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standard-/Document-Wert](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-Headers {{httpheader("Accept")}} wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert. Dies entfernt MIME-Typen für Bilder, die manchmal Kompatibilitätsprobleme verursachten, und passt sich der Fetch-Spezifikation sowie Safari an. ([Firefox-Bug 1917177](https://bugzil.la/1917177)).

#### Entfernungen

- HTTP/2 Server-Push ist standardmäßig deaktiviert, da die Einstellung `network.http.http2.allow-push` nun auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Third-party Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) werden jetzt im [Strengen verbesserten Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden nun unterstützt. Diese bestimmen den Farbraum des WebGL-Zeichenpuffers und den Farbraum, in den beim Import von Texturen umgewandelt wird. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird nun unterstützt, die steuert, ob Systembenachrichtigungen stumm sind. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Geräusche oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}} Elemente, die `fetchPriority`-Eigenschaft der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der an den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority`-Direktive im HTTP-Header {{httpheader("Link")}}, werden nun unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität für das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können neben anderen Möglichkeiten zur Festlegung der Priorität verwendet werden, z.B. beim Preloading. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden nun unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).
- Die Berechtigungen `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch eine Benutzergenehmigung erforderlich ist. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden nun unterstützt. Die `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Entwickler können diese Funktion nutzen, um Operationen an jedem Videoframe durchzuführen, was effizienteres Malen auf eine Leinwand, Videoanalyse, Synchronisation mit externen Audioquellen usw. ermöglicht. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anforderung zu stornieren. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird nun unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt. ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor waren Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError` fehlgeschlagen, sie werden jetzt einige Male erneut versucht, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated` Ereignis wird jetzt korrekt für lazy-geladene Frames emittiert. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich begann, seinen Inhalt zu laden. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkevents werden nun korrekt für zwischengespeicherte Stylesheet-Anfragen emittiert. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Die Zeitangaben in Netzwerkevents verwendeten bisher die falsche Einheit und wurden in Mikrosekunden angegeben. Sie sind jetzt korrekt in Millisekunden gesetzt. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Zeitangaben der Netzwerkevents sollte jetzt genauer sein und wirklich die Zeit widerspiegeln, zu der die Anfrage tatsächlich gestartet wurde. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Features

Diese Features sind neu in Firefox 132 implementiert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher in [Service-Arbeiter](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dazu gehören:
  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore), jedoch ist `partitioned` nicht in den Rückgabewerten enthalten.
  - Die Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent), mit Ausschluss von `partitioned` Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine `keepalive`-Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, bricht der Browser die zugehörige Anfrage nicht ab, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon), um Analysen am Ende einer Sitzung zu senden, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anforderungseigenschaften anpassen und die Serverantwort über die Erfüllung des Fetch {{jsxref("Promise")}} zugreifen). Sie ist auch in [Service-Arbeiter](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteeigenen Mechanismen geschlossen werden können, genau wie eingebettete Komponenten. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle erlaubt es Ihnen, ähnlich eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine praktische Methode, die einen beliebigen Callback (gibt zurück oder wirft, synchron oder asynchron) nimmt und ihr Ergebnis in ein {{jsxref("Promise")}} einschließt, sodass Promisesemantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu verarbeiten ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [Vorschlag für den Zugriff auf Quelltext in `JSON.parse`](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Verlust von Präzision bei der Konvertierung von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Konkret sind die folgenden Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wurde.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt als Zeichenfolge formatiert wird.

## Frühere Versionen

{{Firefox_for_developers}}
