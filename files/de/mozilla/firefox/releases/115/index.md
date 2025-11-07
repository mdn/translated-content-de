---
title: Firefox 115 Versionshinweise für Entwickler
short-title: Firefox 115
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 4. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements wird jetzt unterstützt.
  Dies ermöglicht das frühzeitige (und asynchrone) Abrufen von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modulkarte des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Zusammensetzungsoperation festzulegen, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules) `supports()` Funktion wird jetzt standardmäßig unterstützt. Diese Funktion ermöglicht das Importieren von Stylesheets nur, wenn das angegebene Feature im Browser des Benutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird nun unterstützt.
  Die Methode gibt asynchron eine neue, flach kopierte `Array` Instanz aus einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), einem [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), oder einem [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die `Array` und `TypedArray` Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden nun unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` verändern die Array-Elemente an Ort und Stelle).
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der HTTP {{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanforderung-Header")}} [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) wird nun in Anforderungen an {{Glossary("Prefetch", "Prefetch")}} Ressourcen einbezogen.
  Dadurch können Server eine spezielle Behandlung bereitstellen, die möglicherweise erforderlich ist, wie z.B. das Anpassen des Cache-Ablaufs für die Anforderung ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird nun unterstützt, was das Konstruieren von [`Response`](/de/docs/Web/API/Response) Objekten zum Zurückgeben von JSON-Daten erleichtert.
  Die Methode wird nützlich für [Service-Worker](/de/docs/Web/API/Service_Worker_API) und jeglichen anderen Code sein, der auf Browseranfragen mit JSON-Daten antworten muss ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann nun verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu analysieren und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit, um zu überprüfen, ob URLs gültig sind, anstatt sie in einem `try...catch` Block zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value` Argument.
  Dies ermöglicht das Abgleichen eines Suchparameters sowohl im `name` als auch im `value`, was es möglich macht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird nun unterstützt und ermöglicht es einer WebRTC-Anwendung, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko des Ausgehens von Audio- oder Videoframes aufgrund von Netzwerkstörungen zu beeinflussen.
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Das veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stacktraces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw" Verwendungen in einem Realm zu begrenzen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Bei der Verwendung von `input.performActions` wird jede laufende Radtransaktion am Ende des Befehls jetzt zurückgesetzt, um keinen Zustand zu behalten und nicht in nachfolgende Aktionen innerhalb desselben Tabs hineinzureichen ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove` Aktion mit `input.performActions` führt ein ungültiger Elementursprung jetzt korrekt zu einem "no such error" Fehler ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Eine Race-Bedingung für den initialen Seitenladen wurde behoben, die auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Sowohl die Befehle `WebDriver:GetComputedLabel` als auch `WebDriver:GetComputedRole` warten jetzt korrekt darauf, dass das angeforderte Zugänglichkeitsobjekt für ein Element existiert, wenn es gerade in den DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen Timer, der nicht von der Drosselung der Timer beeinflusst wird, wenn der angegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die zukünftige Veralterung von Manifest V3 Erweiterungen zu unterstützen, ist die Manifest-Schlüsseleigenschaft [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3 Erweiterungen standardmäßig auf `false` gesetzt ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Sehen Sie sich die [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3 Erweiterungen an.
- Das {{WebExtAPIRef("commands.onChanged")}} Ereignis, das es Web-Erweiterungen ermöglicht, Änderungen an Befehlsverknüpfungen zu überwachen, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde für {{WebExtAPIRef("storage.session")}} hinzugefügt, die die Möglichkeit bietet, Daten im Speicher für die Dauer der Browsersitzung zu speichern ([Firefox-Bug 1823713](https://bugzil.la/1823713)).
