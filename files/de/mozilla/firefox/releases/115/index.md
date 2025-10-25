---
title: Firefox 115 Versionshinweise für Entwickler
short-title: Firefox 115
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: b63437e072cf5eac5d56e54454116bcc41b5c28b
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 4. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) für das Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) des {{HTMLElement("link")}}-Elements wird jetzt unterstützt.
  Dies ermöglicht das frühe (und asynchrone) Laden von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modulkarte des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird nun standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Zusammensetzungsoperation festzulegen, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS-{{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) `supports()`-Funktion wird jetzt standardmäßig unterstützt. Diese Funktion ermöglicht es, Stylesheets nur zu importieren, wenn das angegebene Feature im Browser des Nutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird nun unterstützt.
  Diese Methode gibt asynchron eine neue, flachkopierte `Array`-Instanz von einem [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichem](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die `Array`- und `TypedArray`-Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted) und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flachkopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` ändern die Array-Elemente vor Ort).
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der HTTP-{{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenaustausch-Header")}} [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) ist jetzt in Anfragen zum {{Glossary("Prefetch", "Prefetch")}} von Ressourcen enthalten.
  Dadurch können Server jede spezielle Behandlung bereitstellen, die erforderlich sein könnte, wie das Anpassen des Cache-Ablaufs für die Anfrage ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt und erleichtert die Erstellung von [`Response`](/de/docs/Web/API/Response)-Objekten zur Rückgabe von JSON-Daten.
  Die Methode wird für [Service-Arbeiter](/de/docs/Web/API/Service_Worker_API) und jeglichen anderen Code nützlich sein, der auf Browseranfragen mit JSON-Daten antworten muss ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit, um zu überprüfen, ob URLs gültig sind, anstatt sie innerhalb eines `try...catch`-Blocks zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value`-Argument.
  Dies ermöglicht das Abgleichen eines Suchparameters sowohl mit dem `name` als auch mit dem `value`, was es ermöglicht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit dem gleichen Namen enthalten.
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt und ermöglicht es einer WebRTC-Anwendung, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko für das Ausgehen von Audio- oder Videoframes aufgrund von Netzwerk-Jitter zu beeinflussen.
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernung

- Das veraltete `mozPreservesPitch`-Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Payload enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw"-Verwendungen in einem Bereich zu begrenzen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Bei Verwendung von `input.performActions` wird jede laufende Radtransaktion jetzt am Ende des Befehls zurückgesetzt, um den Zustand nicht beizubehalten und um nicht in folgende Aktionen innerhalb desselben Tabs zu lecken ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove`-Aktion mit `input.performActions` führt ein ungültiger Elementursprung nun korrekt zu einem Fehler „no such element“ ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Ein Rennen für den initialen Seitenladen wurde behoben, das auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Die Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten jetzt korrekt darauf, dass das angeforderte Zugänglichkeitsobjekt für ein Element existiert, wenn es gerade in den DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen speziellen Timer, der nicht von der Drosselung der Timer beeinflusst wird, falls der jeweilige Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die Abwertung der `browser_style` in Manifest V3-Erweiterungen zu unterstützen, ist das Manifest-Schlüsselelement [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) standardmäßig auf `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen gesetzt ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Siehe [Übergang zu Manifest v3](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen zum Übergang der `browser_style` in Manifest V3-Erweiterungen.
- Das {{WebExtAPIRef("commands.onChanged")}}-Ereignis, das es Web-Erweiterungen ermöglicht, auf Änderungen der Befehlsverknüpfungen zu reagieren, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung für {{WebExtAPIRef("storage.session")}} wurde hinzugefügt, was die Möglichkeit bietet, Daten für die Dauer der Browsersitzung im Speicher zu speichern ([Firefox-Bug 1823713](https://bugzil.la/1823713)).
