---
title: Firefox 115 für Entwickler
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 4. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements wird nun unterstützt.
  Dies ermöglicht das frühzeitige (und asynchrone) Laden von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann im Modulverzeichnis des Dokuments gespeichert werden ([Firefox Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Zusammensetzungsoperation festzulegen, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen ([Firefox Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS-{{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) `supports()`-Funktion werden jetzt standardmäßig unterstützt. Diese Funktion ermöglicht es, Stylesheets nur dann zu importieren, wenn die angegebene Funktion im Browser des Benutzers unterstützt wird ([Firefox Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz von einem [asynchronen iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), oder einem [array-ähnlichen Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) zurück ([Firefox Bug 1795816](https://bugzil.la/1795816)).
- Die `Array`- und `TypedArray`-Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array zurück, dessen Elemente flach kopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` modifizieren die Array-Elemente an Ort und Stelle).
  ([Firefox Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) HTTP-{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Request-Header")}} ist jetzt in Anfragen an {{Glossary("Prefetch", "Prefetch")}}-Ressourcen enthalten.
  Dies ermöglicht es Servern, jegliche spezielle Verarbeitung anzubieten, die erforderlich sein könnte, wie zum Beispiel die Anpassung des Zwischenspeicherablaufs für die Anfrage ([Firefox Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt, was die Konstruktion von [`Response`](/de/docs/Web/API/Response)-Objekten zur Rückgabe von JSON-Daten erleichtert.
  Die Methode wird nützlich für [Service-Worker](/de/docs/Web/API/Service_Worker_API) und jeden anderen Code, der auf Browseranfragen mit JSON-Daten reagieren muss ([Firefox Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit, zu überprüfen, ob URLs gültig sind, anstatt sie innerhalb eines `try...catch`-Blocks zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value`-Argument.
  Dies ermöglicht das Abgleichen eines Suchparameters sowohl für den `name` als auch für den `value`, was es ermöglicht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, wodurch eine WebRTC-Anwendung den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko, Audio- oder Videoframes aufgrund von Netzwerk-Jitter zu verlieren, beeinflussen kann.
  ([Firefox Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Das veraltete `mozPreservesPitch`-Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne dass sie nach den ersten 50 "throw"-Verwendungen in einem Realm abgeschnitten wird ([Firefox Bug 1791715](https://bugzil.la/1791715)).
- Bei der Verwendung von `input.performActions` wird jede laufende Wheel-Transaktion am Ende des Befehls zurückgesetzt, um keinen Zustand beizubehalten und nicht in nachfolgende Aktionen innerhalb desselben Tabs zu gelangen ([Firefox Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove`-Aktion mit `input.performActions` führt ein ungültiger Element-Ursprung nun korrekt zu einem "no such error"-Fehler ([Firefox Bug 1832028](https://bugzil.la/1832028)).
- Eine Race-Condition für das initiale Laden der Seite wurde behoben, die auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Sowohl die Befehle `WebDriver:GetComputedLabel` als auch `WebDriver:GetComputedRole` warten jetzt korrekt, bis das angeforderte Zugänglichkeitsobjekt für ein Element existiert, wenn es gerade in das DOM eingefügt wurde ([Firefox Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen ausgeführt wird, verwenden jetzt eine Variante von Timern, die nicht von der Drosselung der Timer betroffen ist, falls der gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Zur Unterstützung der Entwertung von Manifest V3-Erweiterungen wird die Manifest-Schlüsseleigenschaft [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) standardmäßig auf `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen gesetzt ([Firefox Bug 1830710](https://bugzil.la/1830710)). Informationen zur Migration von `browser_style` in Manifest V3-Erweiterungen finden Sie in der [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
- Das Ereignis {{WebExtAPIRef("commands.onChanged")}}, das es Web-Erweiterungen ermöglicht, auf Änderungen von Befehlsverknüpfungen zu hören, wurde hinzugefügt ([Firefox Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde für {{WebExtAPIRef("storage.session")}} hinzugefügt, die die Möglichkeit bietet, Daten im Speicher für die Dauer der Browsersitzung zu speichern ([Firefox Bug 18237131](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
