---
title: Firefox 115 Versionshinweise für Entwickler
short-title: Firefox 115
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 04. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements wird jetzt unterstützt.
  Dies ermöglicht das frühzeitige (und asynchrone) Laden von [Modulscripts](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modulkarte des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS {{cssxref("animation-composition")}} Eigenschaft wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Kompositionsoperation festzulegen, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [At-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) `supports()` Funktion wird jetzt standardmäßig unterstützt. Diese Funktion erlaubt es, Stylesheets nur zu importieren, wenn die angegebene Funktion im Browser des Benutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die {{jsxref("Array.fromAsync()")}} statische Methode wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flach kopierte `Array` Instanz von einem [async iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), oder [array-like](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die `Array` und `TypedArray` Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` ändern die Array-Elemente in situ).
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) HTTP {{Glossary("Fetch_metadata_request_header", "fetch metadata request header")}} wird jetzt in Anfragen zu {{Glossary("Prefetch", "Prefetch")}} Ressourcen einbezogen.
  Dies ermöglicht es Servern, jede spezielle Verarbeitung anzubieten, die notwendig sein könnte, z. B. das Anpassen der Cache-Ablaufzeit für die Anfrage ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die [`Response.json()`](/de/docs/Web/API/Response/json_static) statische Methode wird jetzt unterstützt, was es einfacher macht, [`Response`](/de/docs/Web/API/Response) Objekte zu erstellen, um JSON-Daten zurückzugeben.
  Die Methode wird nützlich für [Service Worker](/de/docs/Web/API/Service_Worker_API) und jeden anderen Code sein, der auf Browsersanforderungen mit JSON-Daten reagieren muss ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) statische Methode kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit zu überprüfen, ob URLs gültig sind, anstatt sie innerhalb eines `try...catch` Blocks zu erstellen und Ausnahmen zu behandeln.
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) Methoden unterstützen jetzt das optionale `value` Argument.
  Dies ermöglicht das Matching eines Suchparameters sowohl beim `name` als auch `value`, was es möglich macht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) Attribut wird jetzt unterstützt und ermöglicht es einer WebRTC-Anwendung, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko, dass Audio- oder Videoframes aufgrund von Netzwerk-Jitter ausgehen, zu beeinflussen.
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Das veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw" Verwendungen in einem Bereich zu begrenzen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Bei Verwendung von `input.performActions` wird jede laufende Radtransaktion am Ende des Befehls zurückgesetzt, um den Zustand nicht beizubehalten und nicht in folgende Aktionen innerhalb desselben Tabs zu lecken ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Beim Verwenden einer `pointerMove` Aktion mit `input.performActions` führt ein ungültiger Elementursprung nun korrekt zu einem "no such error" Fehler ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Eine Race-Condition für das initiale Laden der Seite wurde behoben, die bei direkter Interaktion mit einem neu geöffneten Tab oder Fenster auftreten konnte ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Beide Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten jetzt korrekt, bis das angeforderte Barrierefreiheitsobjekt für ein Element existiert, wenn es gerade in das DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen Varianttimer, der nicht von der Drosselung der Timer betroffen ist, falls der gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die Veraltung aus Manifest V3 Erweiterungen zu unterstützen, wird der `browser_style` in den `manifest` Schlüsseleigenschaften in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3 Erweiterungen standardmäßig auf `false` gesetzt ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Siehe [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen zum Übergang von `browser_style` in Manifest V3 Erweiterungen.
- Das {{WebExtAPIRef("commands.onChanged")}} Ereignis, das Web-Erweiterungen ermöglicht, auf Änderungen an Befehlskurzbefehlen zu hören, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde für {{WebExtAPIRef("storage.session")}} hinzugefügt, das die Möglichkeit bietet, Daten im Speicher für die Dauer der Browsersitzung zu speichern ([Firefox-Bug 1823713](https://bugzil.la/1823713)).
