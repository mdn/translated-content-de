---
title: Firefox 132 Versionshinweise für Entwickler
short-title: Firefox 132
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}} Eigenschaft unterstützt nun den `auto`-Wert, um es in Einklang mit {{CSSXRef("text-underline-position")}} zu bringen ([Firefox Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations), was bedeutet, dass verschachteltes CSS nun in der korrekten Reihenfolge geparst wird ([Firefox Bug 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) CSS-Eigenschaft wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) veraltet. ([Firefox Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Reguläre Ausdrucksmodifikatoren erlauben es Ihnen, Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam werden zu lassen. ([Firefox Bug 1913752](https://bugzil.la/1913752) & [Firefox Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standard-/Dokumentenwert](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-Headers {{httpheader("Accept")}} wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert. Dies entfernt Bild-MIME-Typen, die manchmal Kompatibilitätsprobleme verursachten, und stimmt mit der Fetch-Spezifikation und Safari überein. ([Firefox Bug 1917177](https://bugzil.la/1917177)).

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Präferenz `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt und die Implementierung kann in einer zukünftigen Version vollständig entfernt werden. ([Firefox Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) werden jetzt bei [Erweiterter Schutz vor Aktivitätensverfolgung (EAP)](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese geben den Farbraum des WebGL-Zeichenpuffers und den Farbraum an, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox Bug 1885491](https://bugzil.la/1885491), [Firefox Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird nun unterstützt und steuert, ob Systembenachrichtigungen stumm sein sollen. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben ist, wird die resultierende Systembenachrichtigung ohne begleitende Geräusche oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}} Elemente, die `fetchPriority`-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstellen, der [`options.priority`](/de/docs/Web/API/RequestInit#priority) Parameter, der an den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority` Direktive in der HTTP {{httpheader("Link")}} Kopfzeile werden jetzt unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität für das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können zusammen mit anderen Möglichkeiten zur Prioritätssetzung verwendet werden, wie z.B. Preloading. ([Firefox Bug 1854077](https://bugzil.la/1854077)).
- Die [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) Schnittstelle und die zugehörige [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) Eigenschaft werden jetzt unterstützt ([Firefox Bug 1918408](https://bugzil.la/1918408)).
- Die Berechtigungen `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu prüfen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert wurde oder noch Benutzerzustimmung erfordert. ([Firefox Bug 1609427](https://bugzil.la/1609427) und [Firefox Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden jetzt unterstützt. Die `requestVideoFrameCallback()`-Methode registriert eine Rückruffunktion, die ausgeführt wird, wenn ein neuer Videoframe an den Compositor gesendet wird. Entwickler können diese Funktion dazu verwenden, Operationen auf jedem Videoframe auszuführen, was effizienteres Zeichnen auf eine Leinwand, Videoanalyse, Synchronisierung mit externen Audioquellen und mehr ermöglicht. Die Methode gibt einen Rückruf-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Rückrufanforderung zu stornieren. ([Firefox Bug 1919367](https://bugzil.la/1919367), [Firefox Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder Wertebereiche für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält ([Firefox Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen wurden implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Bisher schlugen Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError` fehl, sie werden jetzt einige Male wiederholt, um solche Probleme zu vermeiden. ([Firefox Bug 1854942](https://bugzil.la/1854942), [Firefox Bug 1918287](https://bugzil.la/1918287), [Firefox Bug 1918672](https://bugzil.la/1918672), [Firefox Bug 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated`-Ereignis wird nun korrekt für Lazy-Loaded-Frames emittiert. Bisher wurde das Ereignis nur emittiert, wenn das iframe tatsächlich begann, seinen Inhalt zu laden. ([Firefox Bug 1878166](https://bugzil.la/1878166))
- Netzwerkereignisse werden jetzt korrekt für gecachte Stylesheet-Anfragen emittiert. ([Firefox Bug 1879438](https://bugzil.la/1879438))
- Die zeitliche Maßeinheit für Netzwerkereignisse war bisher falsch und wurde in Mikrosekunden angegeben. Sie wird jetzt korrekt in Millisekunden angegeben. ([Firefox Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerkereigniszeiten sollte jetzt genauer sein und wirklich die Zeit widerspiegeln, zu der die Anfrage tatsächlich begonnen hat. ([Firefox Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 132 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die den Ereignis-Loop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox Bug 1800882](https://bugzil.la/1800882)). Dies beinhaltet:
  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, aber `partitioned` ist in den Rückgabewerten nicht enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, exklusive `partitioned`-Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive). Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht es einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn Analysen am Ende einer Sitzung gesendet werden, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteeigenen Mechanismen geschlossen werden können, so wie eingebaute Komponenten. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen: diese Schnittstelle ermöglicht es Ihnen, ähnlich eine benutzerdefinierte Sidebar zu schließen. ([Firefox Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine bequeme Methode, die eine Rückruffunktion jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) entgegennimmt und ihr Ergebnis in ein {{jsxref("Promise")}} einwickelt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu handhaben ([Firefox Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [Vorschlag für den Zugriff auf den Quelltext von `JSON.parse`](https://github.com/tc39/proposal-json-parse-with-source) erweitert das `JSON.parse` Verhalten, um Funktionen bereitzustellen, die Probleme um den Präzisionsverlust beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Texten zu mildern ([Firefox Bug 1913085](https://bugzil.la/1913085), [Firefox Bug 1925334](https://bugzil.la/1925334)). Insbesondere sind nun die folgenden Funktionen verfügbar:
  - Der [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt serialisiert wird.
