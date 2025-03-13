---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel beschreibt die Änderungen in Firefox 132, die Entwickler beeinflussen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die Eigenschaft {{CSSXRef("text-emphasis-position")}} unterstützt jetzt den Wert `auto`, um diese in Einklang mit {{CSSXRef("text-underline-position")}} zu bringen ([Firefox Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), was bedeutet, dass verschachteltes CSS nun in der korrekten Reihenfolge geparst wird ([Firefox Bug 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) abgelehnt. ([Firefox Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die Modifikatoren für reguläre Ausdrücke [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) ermöglichen es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Bug 1913752](https://bugzil.la/1913752) & [Firefox Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standard/Dokumentwert](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-{{httpheader("Accept")}}-Headers wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert.
  Dadurch werden Bild-MIME-Typen entfernt, die manchmal Kompatibilitätsprobleme verursachten, und es wird an die Fetch-Spezifikation und Safari angepasst. ([Firefox Bug 1917177](https://bugzil.la/1917177)).

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, indem die Einstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist.
  Dieses Feature wird von keinem anderen großen Browser mehr unterstützt und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) werden jetzt in [Strikten Erweiterten Schutzmaßnahmen gegen Verfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese geben den Farbraum des WebGL-Zeichenpuffers an und den Farbraum, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox Bug 1885491](https://bugzil.la/1885491), [Firefox Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird nun unterstützt, was steuert, ob Systembenachrichtigungen still sein sollen. Wenn `silent: true` im [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Töne oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox Bug 1809028](https://bugzil.la/1809028)).
- Das Attribut `fetchpriority` der {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}} Elemente, die `fetchPriority` Eigenschaft der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der an den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority`-Direktive im HTTP {{httpheader("Link")}}-Header, werden jetzt unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität beim Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben, und können zusammen mit anderen Möglichkeiten zur Einstellung der Priorität verwendet werden, wie z.B. Preloading. ([Firefox Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden jetzt unterstützt ([Firefox Bug 1918408](https://bugzil.la/1918408)).
- Die [Berechtigungen](/de/docs/Web/API/Permissions_API) `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch die Zustimmung des Benutzers erfordert. ([Firefox Bug 1609427](https://bugzil.la/1609427) und [Firefox Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Webaudio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden jetzt unterstützt. Die Methode `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Entwickler können diese Funktion verwenden, um Operationen auf jedem Videobild auszuführen und so effizienteres Malen auf eine Leinwand, Videoanalyse, Synchronisierung mit externen Audioquellen und so weiter zu ermöglichen. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anfrage abzubrechen. ([Firefox Bug 1919367](https://bugzil.la/1919367), [Firefox Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt ([Firefox Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen wurden implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation verwendet werden oder mit neu erstellten Registerkarten. Zuvor schlugen Befehle wie `browsingContext.setViewport` aufgrund eines `AbortError` wahrscheinlich fehl, sie werden nun einige Male wiederholt, um solche Probleme zu vermeiden. ([Firefox Bug 1854942](https://bugzil.la/1854942), [Firefox Bug 1918287](https://bugzil.la/1918287), [Firefox Bug 1918672](https://bugzil.la/1918672), [Firefox Bug 1921756](https://bugzil.la/1921756))
- Das Ereignis `browsingContext.contextCreated` wird jetzt korrekt für lazy-geladene Frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich begann, seinen Inhalt zu laden. ([Firefox Bug 1878166](https://bugzil.la/1878166))
- Netzwerkanforderungen für zwischengespeicherte Stylesheet-Abfragen werden jetzt korrekt ausgelöst. ([Firefox Bug 1879438](https://bugzil.la/1879438))
- Netzwerkereignis-Zeitmessungen verwendeten zuvor die falsche Einheit und wurden in Mikrosekunden angegeben. Sie sind jetzt korrekt in Millisekunden gesetzt. ([Firefox Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerkereignis-Zeitmessungen sollte jetzt genauer sein und wirklich die Zeit entsprechen, zu der die Anfrage tatsächlich begann. ([Firefox Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Features

Diese Features sind neu in Firefox 132 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zum Verwalten von Cookies, die nicht den Ereignis-Loop blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service-Arbeiter](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore), aber `partitioned` ist nicht in Rückgabewerten enthalten.
  - Die Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent), ohne `partitioned` Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()`-Option `keepalive`:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive). Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiierte, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon), um Analysen am Ende einer Sitzung zu senden, was einige Vorteile hat (Sie können HTTP-Methoden andere als [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anforderungs-Eigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}} zugreifen). Es ist auch in [Service-Arbeitern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die über gerätenative Mechanismen geschlossen werden können, ähnlich wie eingebaute Komponenten. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen: diese Schnittstelle ermöglicht es Ihnen, eine benutzerdefinierte Seitenleiste auf ähnliche Weise zu schließen. ([Firefox Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine bequeme Methode, die einen Callback beliebiger Art (gibt zurück oder wirft, synchron oder asynchron) verwendet und sein Ergebnis in ein {{jsxref("Promise")}} einhüllt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu verarbeiten ([Firefox Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [Vorschlag zur JSON.parse-Quelltextzugang](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme um den Präzisionsverlust bei der Konvertierung von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mindern ([Firefox Bug 1913085](https://bugzil.la/1913085), [Firefox Bug 1925334](https://bugzil.la/1925334)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das [`reviver` Parameter `context` Argument von `JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Überprüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, der dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt stringifiziert wird.

## Ältere Versionen

{{Firefox_for_developers}}
