---
title: Firefox 115 für Entwickler
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 4. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements wird nun unterstützt. Dies ermöglicht frühzeitiges (und asynchrones) Abrufen von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modullandkarte des Dokuments gespeichert werden ([Firefox Fehler 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird nun standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Kompositionsoperation festzulegen, die verwendet wird, wenn mehrere Animationen gleichzeitig dasselbe Merkmal beeinflussen. ([Firefox Fehler 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [at-rule](/de/docs/Web/CSS/At-rule) `supports()` Funktion wird nun standardmäßig unterstützt. Diese Funktion ermöglicht es, Stylesheets nur dann zu importieren, wenn das angegebene Merkmal im Browser des Nutzers unterstützt wird. ([Firefox Fehler 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird nun unterstützt. Die Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox Fehler 1795816](https://bugzil.la/1795816)).
- Die Methoden der `Array` und `TypedArray` [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted) und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden nun unterstützt. Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das `to`-Präfix ändern die Array-Elemente direkt). ([Firefox Fehler 1811057](https://bugzil.la/1811057)).

### HTTP

- Der [`Sec-Purpose`](/de/docs/Web/HTTP/Headers/Sec-Purpose) HTTP {{Glossary("Fetch metadata request header", "fetch metadata request header")}} ist nun in Anfragen an {{Glossary("Prefetch")}}-Ressourcen enthalten. Dies ermöglicht es Servern, eine spezielle Handhabung bereitzustellen, die möglicherweise benötigt wird, beispielsweise das Anpassen der Cache-Ablaufzeit für die Anfrage ([Firefox Fehler 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt und erleichtert das Erstellen von {{domxref("Response")}}-Objekten zum Zurückgeben von JSON-Daten. Diese Methode wird nützlich für [Service Worker](/de/docs/Web/API/Service_Worker_API) und alle anderen Code-Bereiche sein, die auf Browseranfragen mit JSON-Daten antworten müssen ([Firefox Fehler 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann nun verwendet werden, um eine absolute URL oder eine relative URL und eine Basis-URL zu analysieren und zu validieren. Dies bietet eine schnelle und einfache Möglichkeit, zu überprüfen, ob URLs gültig sind, anstatt sie in einem `try...catch` Block zu konstruieren und Ausnahmen zu behandeln. ([Firefox Fehler 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale Argument `value`. Dies ermöglicht das Abgleichen eines Suchparameters sowohl nach `name` als auch `value`, wodurch es möglich wird, mit Query-Strings zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten. ([Firefox Fehler 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, was es einer WebRTC-Anwendung ermöglicht, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko, aufgrund von Netzwerk-Jitter keine Audio- oder Videoframes mehr zu haben, zu beeinflussen. ([Firefox Fehler 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Der veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox Fehler 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw"-Verwendungen in einem Realm zu beschränken ([Firefox Fehler 1791715](https://bugzil.la/1791715)).
- Bei der Nutzung von `input.performActions` wird jede laufende Rad-Transaktion nun am Ende des Befehls zurückgesetzt, um den Zustand nicht beizubehalten und ein Überlaufen in nachfolgende Aktionen innerhalb desselben Tabs zu vermeiden ([Firefox Fehler 1821733](https://bugzil.la/1821733)).
- Bei einer `pointerMove`-Aktion mit `input.performActions` führt ein ungültiger Element-Ursprung nun korrekt zu einem "no such error" Fehler ([Firefox Fehler 1832028](https://bugzil.la/1832028)).
- Eine Race-Condition für das initiale Seitenladen wurde behoben, die auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox Fehler 1832891](https://bugzil.la/1832891)).

#### Marionette

- Beide Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten nun korrekt darauf, dass das angeforderte Zugriffsobjekt für ein Element existiert, falls es gerade in das DOM eingefügt wurde ([Firefox Fehler 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von `window.setTimeout()` in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden nun einen Variantentimer, der nicht von der Drosselung der Timer betroffen ist, falls der gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die Veraltung in Manifest V3 Erweiterungen zu unterstützen, ist die Standardvorgabe für den Manifest-Schlüssel [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3 Erweiterungen ([Firefox Fehler 1830710](https://bugzil.la/1830710)). Siehe [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3 Erweiterungen.
- Das {{WebExtAPIRef("commands.onChanged")}} Ereignis, das Web-Erweiterungen ermöglicht, auf Änderungen von Befehlskurzbefehlen zu hören, wurde hinzugefügt ([Firefox Fehler 1801531](https://bugzil.la/1801531)).
- Unterstützung für {{WebExtAPIRef("storage.session")}} wurde hinzugefügt, was die Möglichkeit bietet, Daten im Speicher für die Dauer der Browsersitzung zu speichern ([Firefox Fehler 18237131](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
