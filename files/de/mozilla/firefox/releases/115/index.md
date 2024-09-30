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

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) für das Attribut [`rel`](/de/docs/Web/HTML/Element/link#rel) des {{HTMLElement("link")}} Elements wird jetzt unterstützt.
  Dies ermöglicht das frühe (und asynchrone) Laden von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, welche dann in der Modulkarte des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Zusammensetzungsoperation festzulegen, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) `supports()` Funktion werden jetzt standardmäßig unterstützt. Diese Funktion ermöglicht es, Stylesheets nur dann zu importieren, wenn die angegebene Funktion im Browser des Benutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die Methoden der `Array` und `TypedArray` [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted) und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das `to`-Präfix ändern die Array-Elemente direkt).
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der `Sec-Purpose` HTTP [Fetch Metadata Request Header](/de/docs/Glossary/Fetch_metadata_request_header) ist jetzt in Anfragen zum [Prefetch](/de/docs/Glossary/Prefetch) von Ressourcen enthalten.
  Dies ermöglicht es Servern, jede spezielle Behandlung zu liefern, die möglicherweise erforderlich ist, wie z.B. die Anpassung des Cache-Ablaufs für die Anfrage ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt und erleichtert das Erstellen von [`Response`](/de/docs/Web/API/Response) Objekten für die Rückgabe von JSON-Daten.
  Die Methode wird nützlich für [Service Workers](/de/docs/Web/API/Service_Worker_API) und jeden anderen Code sein, der auf Browser-Anfragen mit JSON-Daten antworten muss ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit zu überprüfen, ob URLs gültig sind, anstatt sie innerhalb eines `try...catch` Blocks zu erstellen und Ausnahmen zu behandeln.
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale Argument `value`.
  Dies ermöglicht es, einen Suchparameter sowohl nach dem `name` als auch dem `value` abzugleichen, was es möglich macht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, sodass eine WebRTC-Anwendung den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko, wegen Netzwerkruckeln aus Audio- oder Videorahmen herauszulaufen, beeinflussen kann.
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Das veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw"-Verwendungen in einem Bereich zu begrenzen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Bei der Verwendung von `input.performActions` wird jede laufende Radtransaktion am Ende des Befehls jetzt zurückgesetzt, um den Zustand nicht beizubehalten und nicht in nachfolgende Aktionen innerhalb desselben Tabs auslaufen zu lassen ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove` Aktion mit `input.performActions` führt ein ungültiger Elementeorigin jetzt korrekt zu einem "no such error" Fehler ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Ein Wettkampfproblem für das initiale Seitenladen wurde behoben, das beim direkten Interagieren mit einem neu geöffneten Tab oder Fenster auftreten konnte ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Die Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten nun korrekt, bis das angeforderte Zugriffsobjekt für ein Element existiert, wenn es gerade in das DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von `window.setTimeout()` in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen Varianten-Timer, der vom Drosseln der Timer nicht betroffen ist, falls der gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Zur Unterstützung der Veralterung von Manifest V3 Erweiterungen wird der Eigenschaften-Schlüssel `browser_style` standardmäßig auf `false` gesetzt in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3 Erweiterungen ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Siehe [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen zur Umstellung von `browser_style` in Manifest V3 Erweiterungen.
- Das Ereignis {{WebExtAPIRef("commands.onChanged")}}, das es Web-Erweiterungen ermöglicht, auf Änderungen an Befehlsshortcuts zu hören, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde für {{WebExtAPIRef("storage.session")}} hinzugefügt, welches die Möglichkeit bietet, Daten im Speicher für die Dauer der Browsersitzung zu speichern ([Firefox-Bug 1823713](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
