---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: fa17d0e32893bb6677c736e0e90dee42d5d40104
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}} Eigenschaft unterstützt jetzt den Wert `auto`, um sie mit der {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox Fehler 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), was bedeutet, dass verschachteltes CSS nun in der korrekten Reihenfolge geparst wird ([Firefox Fehler 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) CSS-Eigenschaft wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox Fehler 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdrucksmodifikatoren ermöglichen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam sind. ([Firefox Fehler 1913752](https://bugzil.la/1913752) & [Firefox Fehler 1899813](https://bugzil.la/1899813)).

### HTTP

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Voreinstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Dieses Feature wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox Fehler 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) werden jetzt im [Strengen Erweiterten Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox Fehler 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichnungspuffers bzw. den Farbraum, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox Fehler 1885491](https://bugzil.la/1885491), [Firefox Fehler 1885446](https://bugzil.la/1885446)).
- Die [`Notification.silent`](/de/docs/Web/API/Notification/silent) Eigenschaft wird jetzt unterstützt, die steuert, ob Systembenachrichtigungen stumm geschaltet sein sollen. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Töne oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen. ([Firefox Fehler 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority` Attribut der Elemente {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}}, die `fetchPriority` Eigenschaft der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der an den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority` Direktive im HTTP {{httpheader("Link")}} Header werden jetzt unterstützt. Diese ermöglichen Entwicklern, einen Hinweis auf die relative Priorität des Abrufs einer bestimmten Ressource im Vergleich zu anderen Ressourcen des gleichen Typs zu geben und können zusammen mit anderen Möglichkeiten zur Festlegung der Priorität verwendet werden, wie z. B. Preloading. ([Firefox Fehler 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die dazugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden jetzt unterstützt ([Firefox Fehler 1918408](https://bugzil.la/1918408)).
- Die Berechtigungen `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch genehmigt werden muss. ([Firefox Fehler 1609427](https://bugzil.la/1609427) und [Firefox Fehler 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden jetzt unterstützt. Die `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Entwickler können diese Funktion verwenden, um Operationen auf jedem Videobild durchzuführen und so effizienteres Malen auf einer Zeichenfläche, Videoanalyse, Synchronisation mit externen Audioquellen usw. zu ermöglichen. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die noch ausstehende Callback-Anforderung zu stornieren. ([Firefox Fehler 1919367](https://bugzil.la/1919367), [Firefox Fehler 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder Wertebereiche für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt ([Firefox Fehler 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden mehrere Verbesserungen implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Früher schlugen Befehle wie `browsingContext.setViewport` aufgrund eines `AbortError` oft fehl, sie werden jetzt einige Male erneut versucht, um solche Probleme zu vermeiden. ([Firefox Fehler 1854942](https://bugzil.la/1854942), [Firefox Fehler 1918287](https://bugzil.la/1918287), [Firefox Fehler 1918672](https://bugzil.la/1918672), [Firefox Fehler 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated` Ereignis wird jetzt korrekt für träge geladene Frames emittiert. Früher wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich begann, seinen Inhalt zu laden. ([Firefox Fehler 1878166](https://bugzil.la/1878166))
- Netzereignisse werden jetzt korrekt für zwischengespeicherte Stylesheet-Anfragen gesendet. ([Firefox Fehler 1879438](https://bugzil.la/1879438))
- Die Zeiteinheiten von Netzereignis-Timing wurden zuvor in Mikrosekunden falsch verwendet. Sie werden jetzt korrekt in Millisekunden gesetzt. ([Firefox Fehler 1916685](https://bugzil.la/1916685))
- Die `requestTime` von Netzereignis-Timing sollte jetzt genauer sein und wirklich die Zeit widerspiegeln, zu der die Anfrage tatsächlich begann. ([Firefox Fehler 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Features

Diese Features sind neu in Firefox 132 eingebaut, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Voreinstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox Fehler 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, jedoch ist `partitioned` nicht in den Rückgabewerten enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, exklusive `partitioned`-Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) beim Senden von Analysen am Ende einer Sitzung zu fungieren, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Fetch {{jsxref("Promise")}} Erfüllung zugreifen). Sie ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Fehler 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, genauso wie eingebaute Komponenten. Beispielsweise können Sie auf Android einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, auf ähnliche Weise eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox Fehler 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine Komfortmethode, die eine Rückruffunktion jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) nimmt und deren Ergebnis in einem {{jsxref("Promise")}} verpackt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zur Verarbeitung verwendet werden können ([Firefox Fehler 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der Vorschlag zur [`JSON.parse` Quelltextzugriff](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Verlust der Präzision bei der Umwandlung von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox Fehler 1913085](https://bugzil.la/1913085), [Firefox Fehler 1925334](https://bugzil.la/1925334)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `JSON.parse()` [`reviver` Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "raw JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt serialisiert wird.

## Ältere Versionen

{{Firefox_for_developers}}
