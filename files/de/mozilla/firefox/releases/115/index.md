---
title: Firefox 115 für Entwickler
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 04. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}} Elements wird jetzt unterstützt.
  Dies ermöglicht das frühe (und asynchrone) Laden von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten, die parallel geladen und anschließend in der Modulkarte des Dokuments gespeichert werden ([Firefox Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Zusammenstellungsoperation festzulegen, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) `supports()`-Funktion wird jetzt standardmäßig unterstützt. Dieses Feature ermöglicht es Stylesheets, nur importiert zu werden, wenn die angegebene Funktion im Browser des Benutzers unterstützt wird. ([Firefox Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Diese Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox Bug 1795816](https://bugzil.la/1795816)).
- Die `Array`- und `TypedArray`-Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted) und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` ändern die Array-Elemente direkt).
  ([Firefox Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der HTTP {{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanforderungsheader")}} [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) wird jetzt in Anforderungen zum {{Glossary("Prefetch", "Vorladen")}} von Ressourcen eingeschlossen.
  Dies ermöglicht es Servern, spezielle Behandlungen vorzunehmen, wie zum Beispiel das Anpassen der Cache-Ablaufzeit für die Anfrage ([Firefox Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt, was es einfacher macht, [`Response`](/de/docs/Web/API/Response)-Objekte für die Rückgabe von JSON-Daten zu erstellen.
  Die Methode wird nützlich für [Service Worker](/de/docs/Web/API/Service_Worker_API) und jeden anderen Code sein, der auf Browseranfragen mit JSON-Daten antworten muss ([Firefox Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit, zu überprüfen, ob URLs gültig sind, anstatt sie in einem `try...catch`-Block zu erstellen und Ausnahmen zu behandeln.
  ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value`-Argument.
  Dies ermöglicht das Übereinstimmen eines Suchparameters sowohl anhand des `name` als auch des `value`, was es ermöglicht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, wodurch eine WebRTC-Anwendung den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko beeinflussen kann, dass aufgrund von Netzwerkaussetzern Audio- oder Videoframes ausgehen.
  ([Firefox Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Der veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast beinhaltet jetzt immer Stack-Traces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw"-Nutzungen in einem Realm zu beschränken ([Firefox Bug 1791715](https://bugzil.la/1791715)).
- Bei der Verwendung von `input.performActions` wird nun jede laufende Radtransaktion am Ende des Befehls zurückgesetzt, um den Zustand nicht beizubehalten und um zu verhindern, dass sie in nachfolgende Aktionen im gleichen Tab übergeht ([Firefox Bug 1821733](https://bugzil.la/1821733)).
- Wenn eine `pointerMove`-Aktion mit `input.performActions` verwendet wird, führt ein ungültiger Elementursprung jetzt korrekt zu einem "no such error"-Fehler ([Firefox Bug 1832028](https://bugzil.la/1832028)).
- Ein Wettlaufzustand für das initiale Laden der Seite wurde behoben, der auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Die Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten jetzt korrekt darauf, dass das angeforderte Zugänglichkeitsobjekt für ein Element existiert, wenn es gerade in das DOM eingefügt wurde ([Firefox Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen Timer, der nicht von der Drosselung der Timer betroffen ist, falls der gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um dessen Veraltung in Manifest V3 Erweiterungen zu unterstützen, ist die Manifest-Schlüssel-Eigenschaft [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) standardmäßig auf `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen ([Firefox Bug 1830710](https://bugzil.la/1830710)). Weitere Informationen über den Übergang von `browser_style` in Manifest V3-Erweiterungen finden Sie unter [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
- Das Ereignis {{WebExtAPIRef("commands.onChanged")}}, das es Web-Erweiterungen ermöglicht, auf Änderungen an Befehlsverknüpfungen zu lauschen, wurde hinzugefügt ([Firefox Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde hinzugefügt für {{WebExtAPIRef("storage.session")}}, welches die Fähigkeit bietet, Daten im Speicher für die Dauer der Browsersitzung zu speichern ([Firefox Bug 18237131](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
