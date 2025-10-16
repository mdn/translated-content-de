---
title: Firefox 115 Versionshinweise für Entwickler
short-title: Firefox 115
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 04. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements wird jetzt unterstützt.
  Dies ermöglicht das frühe (und asynchrone) Abrufen von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann im Modul-Map des Dokuments gespeichert werden ([Firefox Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Zusammensetzungsoperation festzulegen, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) `supports()` Funktion wird jetzt standardmäßig unterstützt. Diese Funktion erlaubt es, Stylesheets nur zu importieren, wenn die angegebene Funktion im Browser des Benutzers unterstützt wird. ([Firefox Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flachkopierte `Array` Instanz aus einem [asynchronen Iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox Bug 1795816](https://bugzil.la/1795816)).
- Die `Array` und `TypedArray` Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das `to` Präfix verändern die Array-Elemente direkt).
  ([Firefox Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der HTTP {{Glossary("Fetch_metadata_request_header", "fetch metadata request header")}} [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) ist jetzt in Anfragen an {{Glossary("Prefetch", "Prefetch")}} Ressourcen enthalten.
  Dadurch können Server spezielle Handhabungen bereitstellen, die möglicherweise benötigt werden, wie z.B. das Anpassen des Cache-Ablaufs für die Anfrage ([Firefox Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt, was die Konstruktion von [`Response`](/de/docs/Web/API/Response) Objekten zur Rückgabe von JSON-Daten erleichtert.
  Diese Methode wird nützlich sein für [Service Worker](/de/docs/Web/API/Service_Worker_API) und alle anderen Codes, die auf Browseranfragen mit JSON-Daten antworten müssen ([Firefox Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit zu überprüfen, ob URLs gültig sind, anstatt sie in einem `try...catch` Block zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value` Argument.
  Dies ermöglicht das Abgleichen eines Suchparameters sowohl mit dem `name` als auch mit dem `value`, was das Arbeiten mit Abfragezeichenfolgen erleichtert, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, das es einer WebRTC-Anwendung ermöglicht, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko eines Ausfalls von Audio- oder Videoframes aufgrund von Netzwerk-Jitter zu beeinflussen.
  ([Firefox Bug 1592988](https://bugzil.la/1592988)).

#### Entfernte Funktionen

- Das veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stapelspuren für Antworten und Ereignisse, ohne dass sie nach den ersten 50 "throw" Verwendungen in einem Bereich begrenzt wird ([Firefox Bug 1791715](https://bugzil.la/1791715)).
- Bei der Verwendung von `input.performActions` wird jede laufende Raddrehungstransaktion am Ende des Befehls zurückgesetzt, um keinen Status beizubehalten und nicht in folgende Aktionen innerhalb desselben Tabs zu lecken ([Firefox Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove` Aktion mit `input.performActions` führt ein ungültiger Ursprung eines Elements jetzt korrekt zu einem "no such error" Fehler ([Firefox Bug 1832028](https://bugzil.la/1832028)).
- Eine Race-Condition für den initialen Seitenaufruf wurde behoben, die auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Die Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten jetzt korrekt darauf, dass das angeforderte Zugriffsobjekt für ein Element existiert, wenn es gerade in das DOM eingefügt wurde ([Firefox Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen Varianten-Timer, der nicht von der Drosselung der Timer betroffen ist, falls der gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die Veralterung der Manifest V3-Erweiterungen zu unterstützen, ist die Manifest-Schlüsseleigenschaft [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) standardmäßig auf `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen gesetzt ([Firefox Bug 1830710](https://bugzil.la/1830710)). Informationen zum Übergang von `browser_style` in Manifest V3-Erweiterungen finden Sie unter [Manifest v3 migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
- Das {{WebExtAPIRef("commands.onChanged")}} Ereignis, das Web-Erweiterungen ermöglicht, auf Änderungen an den Befehlsverknüpfungen zu hören, wurde hinzugefügt ([Firefox Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde für {{WebExtAPIRef("storage.session")}} hinzugefügt, das die Fähigkeit bietet, Daten im Speicher während der Browsersitzung zu speichern ([Firefox Bug 18237131](https://bugzil.la/1823713)).
