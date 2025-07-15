---
title: Firefox 115 für Entwickler
short-title: Firefox 115
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 04. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) für das Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) des {{HTMLElement("link")}}-Elements wird jetzt unterstützt.
  Dies ermöglicht das frühzeitige (und asynchrone) Laden von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modullandkarte des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Kompositionsoperation festzulegen, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS-{{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) `supports()`-Funktion wird jetzt standardmäßig unterstützt. Dieses Feature ermöglicht es, Stylesheets nur dann zu importieren, wenn das spezifizierte Feature im Browser des Nutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flachkopierte `Array`-Instanz von einem [asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die Methoden der `Array` und `TypedArray`-Objekte [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted) und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` modifizieren die Array-Elemente direkt).
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) HTTP-{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Request-Header")}} wird jetzt in Anfragen zur {{Glossary("Prefetch", "Prefetch")}}-Ressourcen integriert.
  Dies ermöglicht es Servern, eine spezielle Handhabung anzuwenden, die möglicherweise erforderlich ist, wie beispielsweise die Anpassung des Cache-Ablaufs für die Anfrage. ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt, was das Erstellen von [`Response`](/de/docs/Web/API/Response)-Objekten zur Rückgabe von JSON-Daten erleichtert.
  Die Methode wird nützlich sein für [Service-Worker](/de/docs/Web/API/Service_Worker_API) und jeden anderen Code, der auf Browseranfragen mit JSON-Daten antworten muss ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL mit Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit, zu überprüfen, ob URLs gültig sind, anstatt sie innerhalb eines `try...catch`-Blocks zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value`-Argument.
  Dies ermöglicht es, einen Suchparameter sowohl anhand des `name` als auch des `value` abzugleichen, was es ermöglicht, mit Abfragezeichenfolgen zu arbeiten, die mehrere gleichnamige Suchparameter enthalten.
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, was es einer WebRTC-Anwendung ermöglicht, das Gleichgewicht zwischen Wiedergabeverzögerung und dem Risiko des Ausgehens von Audio- oder Videoframes aufgrund von Netzwerk-Jitter zu beeinflussen.
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Das veraltete `mozPreservesPitch`-Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) ist standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw"-Verwendungen in einem Realm zu begrenzen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Beim Verwenden von `input.performActions` wird jede laufende Rad-Transaktion jetzt am Ende des Befehls zurückgesetzt, um den Zustand nicht beizubehalten und in nachfolgende Aktionen im gleichen Tab zu übertragen ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Beim Verwenden einer `pointerMove`-Aktion mit `input.performActions` führt ein ungültiger Ursprungsort nun korrekt zu einem "kein solches Fehler"-Fehlschlag ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Ein Race-Condition für das anfängliche Laden der Seite wurde behoben, das auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Sowohl die Befehle `WebDriver:GetComputedLabel` als auch `WebDriver:GetComputedRole` warten jetzt korrekt darauf, dass das angeforderte Zugriffsobjekt für ein Element existiert, wenn es gerade in den DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen ausgeführt wird, verwenden jetzt einen Variante-Timer, der nicht von der Drosselung der Timer beeinflusst wird, falls sich der gegebene Tab für die Automatisierung im Hintergrund befindet.

## Änderungen für Add-on-Entwickler

- Um die Einstellung von Manifest V3-Erweiterungen zu unterstützen, ist die Standardeinstellung des Manifest-Schlüssels [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Siehe [Manifest v3 migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen zur Umstellung von `browser_style` in Manifest V3-Erweiterungen.
- Das Ereignis {{WebExtAPIRef("commands.onChanged")}}, das Web-Erweiterungen ermöglicht, auf Änderungen an Befehlskurzbefehlen zu hören, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde hinzugefügt für {{WebExtAPIRef("storage.session")}}, das die Möglichkeit bietet, Daten im Speicher für die Dauer der Browsersitzung zu speichern ([Firefox-Bug 1823713](https://bugzil.la/1823713)).
