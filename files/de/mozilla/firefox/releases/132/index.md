---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: bc39466182368b617087be99dc59b4d91ddc5d0d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}}-Eigenschaft unterstützt jetzt den Wert `auto`, um diese in Einklang mit {{CSSXRef("text-underline-position")}} zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), was bedeutet, dass verschachteltes CSS jetzt in der richtigen Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die regulären Ausdrucksmodifikatoren [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) ermöglichen es, Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam zu machen. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standardwert](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-{{httpheader("Accept")}}-Headers wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert. Dies entfernt Bild-MIME-Typen, die manchmal Kompatibilitätsprobleme verursachten, und stimmt mit der Fetch-Spezifikation und Safari überein. ([Firefox-Bug 1917177](https://bugzil.la/1917177)).

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert mit der Einstellung `network.http.http2.allow-push`, die jetzt auf `false` gesetzt ist. Dieses Feature wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version komplett entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) werden jetzt im [Erweiterten Schutz vor Aktivitätenverfolgung im strengen Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese geben den Farbraum des WebGL-Zeichnungspuffers an und den Farbraum, in den beim Import von Texturen konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird jetzt unterstützt, welche steuert, ob Systembenachrichtigungen stumm sein sollen. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben ist, wird die daraus resultierende Systembenachrichtigung ohne begleitende Geräusche oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der {{htmlelement("link")}}, {{htmlelement("script")}} und {{htmlelement("img")}} Elemente, die `fetchPriority`-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstellen, der [`options.priority`](/de/docs/Web/API/RequestInit#priority) Parameter, der an den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority`-Direktive im HTTP-{{httpheader("Link")}}-Header werden jetzt unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität für das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können zusammen mit anderen Möglichkeiten zur Prioritätseinstellung verwendet werden, wie z. B. das Vorausladen. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden jetzt unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).
- Die `microphone` und `camera` [Berechtigungen](/de/docs/Web/API/Permissions_API) können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch genehmigt werden muss. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle werden jetzt unterstützt. Die `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion nutzen, um Operationen an jedem Videoframe durchzuführen, wodurch eine effizientere Zeichnung auf eine Leinwand, Videoanalyse, Synchronisierung mit externen Audioquellen und weitere Anwendungen möglich sind. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anforderung zu stornieren. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Sie gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft der zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden mehrere Verbesserungen implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Bisher schlugen Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError`-Fehlers fehl, jetzt werden sie ein paar Mal wiederholt, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated`-Ereignis wird jetzt korrekt für verzögert geladene Frames ausgegeben. Bisher wurde das Ereignis nur ausgegeben, wenn das iframe tatsächlich begonnen hatte, seinen Inhalt zu laden. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkereignisse werden jetzt korrekt für zwischengespeicherte Stylesheet-Anforderungen ausgegeben. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Die Zeiteinheiten der Netzwerkereignistimings wurden zuvor in Mikrosekunden angegeben, jetzt werden sie korrekt in Millisekunden gesetzt. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` der Netzwerkereignistimings sollte jetzt genauer sein und tatsächlich die Zeit widerspiegeln, zu der die Anforderung tatsächlich gestartet wurde. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 132 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`. Sie können weitere solche Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die den Ereignisloop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, aber `partitioned` ist in Rückgabewerten nicht enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, ohne `partitioned`-Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, bricht der Browser die zugehörige Anfrage nicht ab, falls die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht es, eine Fetch-Anforderung als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu verwenden, um Analysen am Ende einer Sitzung zu senden, was einige Vorteile hat (man kann HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Fetch-{{jsxref("Promise")}}-Erfüllung zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.

  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, genauso wie eingebaute Komponenten. Zum Beispiel kann man auf Android einen Dialog mit der Zurück-Taste schließen: diese Schnittstelle ermöglicht es, eine benutzerdefinierte Seitenleiste auf ähnliche Weise zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine praktischere Methode, die einen Callback jeglicher Art (geben oder werfen, synchron oder asynchron) nimmt und sein Ergebnis in ein {{jsxref("Promise")}} einwickelt, sodass Promise-Semantik (z. B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden kann, um damit umzugehen ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [`JSON.parse`-Quelltextzugriffs-Vorschlag](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme beim Verlust von Genauigkeit beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglich geparsten JSON-Quelltext.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Überprüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein JSON-Textstück enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beizubehalten, wenn dieses Objekt in eine Zeichenkette umgewandelt wird.

## Ältere Versionen

{{Firefox_for_developers}}
