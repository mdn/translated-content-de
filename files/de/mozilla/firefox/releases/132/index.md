---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 3661f58cce5f12ee603d1140aa7fbdff4ad7821c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bedeutenden Änderungen

### CSS

- Die Eigenschaft {{CSSXRef("text-emphasis-position")}} unterstützt jetzt den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), was bedeutet, dass verschachteltes CSS jetzt in der richtigen Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) CSS-Eigenschaft wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren für reguläre Ausdrücke ermöglichen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden sollen. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, wobei die Präferenz `network.http.http2.allow-push` jetzt auf `false` gesetzt ist.
  Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) werden jetzt in [Strenger verbesserter Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichenpuffers bzw. den Farbraum, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird jetzt unterstützt, die steuert, ob Systembenachrichtigungen still sein sollen. Wenn im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) `silent: true` angegeben ist, wird die resultierende Systembenachrichtigung ohne begleitende Töne oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der {{htmlelement("link")}}, {{htmlelement("script")}} und {{htmlelement("img")}} Elemente, die `fetchPriority`-Eigenschaft der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der übergebene `options.priority`-Parameter zum Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) und die `fetchpriority`-Direktive im HTTP {{httpheader("Link")}} Header werden jetzt unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität für das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben, und können neben anderen Möglichkeiten zur Prioritätsetzung verwendet werden, wie z. B. das Vorladen. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden jetzt unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden jetzt unterstützt. `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion verwenden, um Operationen auf jedem Videoframe auszuführen, was eine effizientere Darstellung auf einer Leinwand, Videoanalyse, Synchronisation mit externen Audioquellen usw. ermöglicht. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anforderung zu stornieren. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen wurden implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Registerkarten verwendet werden. Zuvor schlugen Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError` fehl, sie werden jetzt einige Male wiederholt, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das Ereignis `browsingContext.contextCreated` wird jetzt korrekt für lazy-geladene Frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich begonnen hatte, seinen Inhalt zu laden. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkevents werden jetzt korrekt für zwischengespeicherte Stylesheet-Anfragen ausgelöst. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Die Zeitangaben von Netzwerkevents verwendeten zuvor die falsche Einheit und wurden in Mikrosekunden angegeben. Sie werden jetzt korrekt in Millisekunden gesetzt. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerkevent-Zeiten sollten jetzt genauer sein und wirklich die Zeit entsprechen, zu der die Anfrage tatsächlich gestartet wurde. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 132 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 ist ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore), aber `partitioned` ist nicht in Rückgabewerten enthalten.
  - Die Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent), ohne `partitioned` Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()` `keepalive`-Option:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird die mit ihr verbundene Anfrage nicht abgebrochen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht es einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn Analysedaten am Ende einer Sitzung gesendet werden, was einige Vorteile hat (Sie können andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des {{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteinternen Mechanismen geschlossen werden können, ähnlich wie integrierte Komponenten. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, einen benutzerdefinierten Seitenbereich ähnlich zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine bequeme Methode, die einen Callback beliebiger Art (gibt zurück oder wirft, synchron oder asynchron) nimmt und sein Ergebnis in einen {{jsxref("Promise")}} einwickelt, sodass Promise-Semantiken (z. B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um damit umzugehen ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der Vorschlag [`JSON.parse` Zugriff auf Quelltext](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Verlust von Genauigkeit bei der Konvertierung von Werten wie großen Fließkomma- und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Insbesondere stehen nun folgende Funktionen zur Verfügung:
  - Der `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, der dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beim Serialisieren des Objekts zu erhalten.

## Ältere Versionen

{{Firefox_for_developers}}
