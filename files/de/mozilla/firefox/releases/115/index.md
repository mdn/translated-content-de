---
title: Firefox 115 für Entwickler
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 04. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements wird jetzt unterstützt.
  Dies ermöglicht das frühe (und asynchrone) Abrufen von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modulkarte des Dokuments gespeichert werden ([Firefox Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die zusammengesetzte Operation festzulegen, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [at-rule](/de/docs/Web/CSS/At-rule) `supports()` Funktion wird jetzt standardmäßig unterstützt. Dieses Feature ermöglicht die Einbindung von Stylesheets nur, wenn das angegebene Feature im Browser des Nutzers unterstützt wird. ([Firefox Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz von einem [asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox Bug 1795816](https://bugzil.la/1795816)).
- Die `Array`- und `TypedArray`-Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted) und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit flach kopierten Elementen zurück (ähnlich benannte Methoden ohne das Präfix `to` ändern die Array-Elemente direkt).
  ([Firefox Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der [`Sec-Purpose`](/de/docs/Web/HTTP/Headers/Sec-Purpose) HTTP [Fetch-Metadaten-Request-Header](/de/docs/Glossary/Fetch_metadata_request_header) wird jetzt in Anfragen zum [Prefetch](/de/docs/Glossary/Prefetch) von Ressourcen einbezogen.
  Dies ermöglicht es Servern, eine spezielle Verarbeitung anzubieten, die möglicherweise benötigt wird, wie z. B. das Anpassen der Ablaufzeit des Caching für die Anfrage ([Firefox Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt, was es einfacher macht, [`Response`](/de/docs/Web/API/Response)-Objekte für die Rückgabe von JSON-Daten zu erstellen.
  Die Methode wird nützlich sein für [Service Worker](/de/docs/Web/API/Service_Worker_API) und allen anderen Code, der auf Browseranfragen mit JSON-Daten antworten muss ([Firefox Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu analysieren und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit, zu überprüfen, ob URLs gültig sind, anstatt sie in einem `try...catch`-Block zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value` Argument.
  Dies ermöglicht das Abgleichen eines Suchparameters sowohl nach `name` als auch `value`, was es ermöglicht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, was es einer WebRTC-Anwendung ermöglicht, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko, wegen Netzwerk-Jitter keine Audio- oder Videoframes mehr zu haben, zu beeinflussen.
  ([Firefox Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Der veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stacktraces für Antworten und Ereignisse ohne Begrenzung nach den ersten 50 "throw"-Verwendungen in einem Bereich ([Firefox Bug 1791715](https://bugzil.la/1791715)).
- Bei der Nutzung von `input.performActions` wird jede laufende Raddrehung am Ende des Befehls jetzt zurückgesetzt, um den Zustand nicht beizubehalten und nicht in folgende Aktionen im selben Tab zu leaken ([Firefox Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove` Aktion mit `input.performActions` löst ein ungültiges Element-Ursprung jetzt korrekt einen "no such error"-Fehler aus ([Firefox Bug 1832028](https://bugzil.la/1832028)).
- Eine Racebedingung für das initiale Laden der Seite wurde behoben, die auftreten konnte, wenn direkt mit einer neu geöffneten Registerkarte oder einem Fenster interagiert wurde ([Firefox Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Beide Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten nun korrekt darauf, dass das angeforderte Zugänglichkeitsobjekt für ein Element existiert, wenn es gerade in das DOM eingefügt wurde ([Firefox Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von `window.setTimeout()` in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen alternativen Timer, der nicht von der Drosselung der Timer betroffen ist, falls das gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die Veralterung aus Manifest V3-Erweiterungen zu unterstützen, ist die Manifest-Schlüsseleigenschaft [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) standardmäßig auf `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen gesetzt ([Firefox Bug 1830710](https://bugzil.la/1830710)). Siehe [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3-Erweiterungen.
- Das {{WebExtAPIRef("commands.onChanged")}} Ereignis, das es Web-Erweiterungen ermöglicht, auf Änderungen bei den Befehlskurzbefehlen zu hören, wurde hinzugefügt. ([Firefox Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde für {{WebExtAPIRef("storage.session")}} hinzugefügt, das die Möglichkeit bietet, Daten im Speicher für die Dauer der Browser-Sitzung zu speichern ([Firefox Bug 18237131](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
