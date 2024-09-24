---
title: Firefox 115 für Entwickler
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 04. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Schlüsselwort [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload) für das Attribut [`rel`](/de/docs/Web/HTML/Element/link#rel) des {{HTMLElement("link")}}-Elements wird jetzt unterstützt.
  Dies ermöglicht das frühe (und asynchrone) Abrufen von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modulkarte des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Zusammensetzungsoperation festzulegen, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft betreffen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) `supports()`-Funktion wird jetzt standardmäßig unterstützt. Dieses Feature ermöglicht es, Stylesheets nur dann zu importieren, wenn das spezifizierte Feature im Browser des Benutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die Methoden `Array` und `TypedArray` [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das `to`-Präfix ändern die Array-Elemente in-place).
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der HTTP [Sec-Purpose](/de/docs/Web/HTTP/Headers/Sec-Purpose) {{Glossary("Fetch_metadata_request_header", "Fetch Metadata Request Header")}} ist jetzt in Anfragen für {{Glossary("Prefetch", "Prefetch")}}-Ressourcen enthalten.
  Dies ermöglicht es Servern, spezielle Behandlungen bereitzustellen, die erforderlich sein könnten, wie beispielsweise die Anpassung des Caching-Ablaufs für die Anfrage ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt, was die Konstruktion von [`Response`](/de/docs/Web/API/Response)-Objekten zur Rückgabe von JSON-Daten erleichtert.
  Die Methode ist nützlich für [Service Worker](/de/docs/Web/API/Service_Worker_API) und alle anderen Codes, die auf Browseranfragen mit JSON-Daten reagieren müssen ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL und eine Basis-URL zu parsen und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit zu überprüfen, ob URLs gültig sind, anstatt sie innerhalb eines `try...catch`-Blocks zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value`-Argument.
  Dies ermöglicht das Abgleichen eines Suchparameters sowohl mit dem `name` als auch mit dem `value`, was es ermöglicht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, wodurch eine WebRTC-Anwendung den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko des Ausgehens von Audio- oder Videoframes aufgrund von Netzwerk-Jitter beeinflussen kann.
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Der veraltete `mozPreservesPitch` Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne diese nach den ersten 50 "throw"-Benutzungen in einem Realm zu kappen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Bei der Verwendung von `input.performActions` wird jede laufende Wheel-Transaktion jetzt am Ende des Befehls zurückgesetzt, um den Zustand nicht beizubehalten und um nicht in folgende Aktionen im selben Tab zu lecken ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove`-Aktion mit `input.performActions` ergibt ein ungültiger Elementursprung jetzt korrekt einen "no such error" Fehler ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Eine Race-Bedingung für das initiale Seitenladen wurde behoben, die auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Beide Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten jetzt korrekt darauf, dass das angeforderte Zugriffsobjekt für ein Element existiert, falls es gerade in das DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen ausgeführt wird, verwenden jetzt einen Variantentimer, der nicht von der Drosselung der Timer betroffen ist, falls der gegebene Tab für die Automatisierung im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die Absetzung von Manifest V3-Erweiterungen zu unterstützen, ist die mangelnde Unterstützung für den Manifest-Schlüssel [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in `options_ui` und `sidebar_action` für Manifest V3-Erweiterungen als Standardwert `false` gesetzt ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Siehe [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3-Erweiterungen.
- Das {{WebExtAPIRef("commands.onChanged")}}-Ereignis, das es Web-Erweiterungen ermöglicht, Änderungen an Befehlsverknüpfungen zu überwachen, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde hinzugefügt für {{WebExtAPIRef("storage.session")}}, wodurch die Möglichkeit bereitgestellt wird, Daten im Arbeitsspeicher für die Dauer der Browsersitzung zu speichern ([Firefox-Bug 18237131](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
