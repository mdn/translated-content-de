---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 1f8e00821b6a18996dd58f32c7adedfe8902bdae
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die Eigenschaft {{CSSXRef("text-emphasis-position")}} unterstützt jetzt den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) wurde entfernt. Diese Eigenschaft ist zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die regulären Ausdrucksmodifikatoren [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) ermöglichen es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Voreinstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) werden jetzt im [Strengen Erweiterten Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese geben den Farbraum des WebGL-Zeichnungspuffers und den Farbraum an, der beim Importieren von Texturen konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird jetzt unterstützt, die steuert, ob Systembenachrichtigungen stumm sein sollen. Wenn `silent: true` im [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Sounds oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen. ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der {{htmlelement("link")}}, {{htmlelement("script")}} und {{htmlelement("img")}} Elemente, die `fetchPriority`-Eigenschaft der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der an den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority`-Direktive im HTTP-{{httpheader("Link")}}-Header werden jetzt unterstützt. Diese ermöglichen Entwicklern, einen Hinweis auf die relative Priorität einer Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können zusammen mit anderen Methoden zum Festlegen der Priorität verwendet werden, wie z. B. Preloading. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden jetzt unterstützt. Die `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion verwenden, um Operationen an jedem Videoframe durchzuführen und so effizienteres Malen auf eine Leinwand, Videoanalyse, Synchronisierung mit externen Audioquellen und mehr zu ermöglichen. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anfrage abzubrechen. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede begrenzbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt. ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden mehrere Verbesserungen implementiert, um WebDriver BiDi-Kommandos zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor scheiterten Kommandos wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError`. Jetzt werden sie ein paar Mal wiederholt, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated`-Ereignis wird jetzt korrekt für lazy-loaded frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich begann, seinen Inhalt zu laden. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkereignisse werden jetzt korrekt für zwischengespeicherte Stylesheet-Anfragen emittiert. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Die Zeitangaben für Netzwerkereignisse verwendeten zuvor die falsche Einheit und wurden in Mikrosekunden angegeben. Sie werden jetzt korrekt in Millisekunden festgelegt. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` von Netzwerkereignis-Zeitangaben sollte jetzt genauer sein und wirklich die Zeit widerspiegeln, zu der die Anfrage tatsächlich begann. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 132 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Voreinstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle, aber `partitioned` ist in den Rückgabewerten nicht enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Schnittstelle, ohne `partitioned`-Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()` `keepalive`-Option:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive). Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht es, eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu verwenden, wenn Analysen am Ende einer Sitzung gesendet werden sollen, was einige Vorteile hat (man kann HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über das Erfüllen des Fetch-{{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteeigenen Mechanismen geschlossen werden können, ähnlich wie eingebaute Komponenten. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, auf ähnliche Weise eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine praktische Methode, die einen Callback beliebiger Art (gibt zurück oder wirft, synchron oder asynchron) annimmt und deren Ergebnis in einen {{jsxref("Promise")}} einhüllt, sodass Promisesemantik (z. B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden kann, um damit umzugehen. ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [Vorschlag zum Zugriff auf Quelltext von `JSON.parse`](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Präzisionsverlust beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text mildern ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Insbesondere sind jetzt die folgenden Funktionen verfügbar:
  - Der `JSON.parse()`-Parameter [`reviver` im `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wurde.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu bewahren, wenn dieses Objekt in einen String umgewandelt wird.

## Ältere Versionen

{{Firefox_for_developers}}
