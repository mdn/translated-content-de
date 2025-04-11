---
title: Firefox 115 für Entwickler
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 115, die Entwickler betreffen. Firefox 115 wurde am 04. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements wird jetzt unterstützt.
  Dies ermöglicht das frühzeitige (und asynchrone) Laden von [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modulkarte des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Kompositionsoperation festzulegen, die verwendet werden soll, wenn mehrere Animationen zugleich dieselbe Eigenschaft beeinflussen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS-{{cssxref("@import")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) `supports()`-Funktion wird jetzt standardmäßig unterstützt. Dieses Feature ermöglicht es, Stylesheets nur dann zu importieren, wenn das angegebene Feature im Browser des Benutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.
  Die Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz von einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die `Array`- und `TypedArray`-Methoden [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden jetzt unterstützt.
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` ändern die Array-Elemente direkt).
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der HTTP-Header [`Sec-Purpose`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) für {{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanforderungen")}} wird jetzt in Anforderungen für {{Glossary("Prefetch", "Prefetch")}}-Ressourcen aufgenommen.
  Dies ermöglicht es Servern, jede spezielle Behandlung zu bieten, die erforderlich sein könnte, wie beispielsweise die Anpassung der Cache-Ablaufzeit für die Anforderung ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird jetzt unterstützt, was es einfacher macht, [`Response`](/de/docs/Web/API/Response)-Objekte zur Rückgabe von JSON-Daten zu erstellen.
  Die Methode wird nützlich sein für [Service Workers](/de/docs/Web/API/Service_Worker_API) und jeden anderen Code, der auf Browseranforderungen mit JSON-Daten antworten muss ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL zusammen mit einer Basis-URL zu analysieren und zu validieren.
  Dies bietet eine schnelle und einfache Möglichkeit, zu überprüfen, ob URLs gültig sind, anstatt sie innerhalb eines `try...catch`-Blocks zu konstruieren und Ausnahmen zu behandeln.
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen jetzt das optionale `value`-Argument.
  Dies ermöglicht es, ein Suchparameter sowohl anhand des `name` als auch des `value` abzugleichen, was es möglich macht, mit Abfragezeichenfolgen zu arbeiten, die mehrere Suchparameter mit demselben Namen enthalten.
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird jetzt unterstützt, was einer WebRTC-Anwendung erlaubt, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko, aufgrund von Netzwerk-Jitter keine Audio- oder Videoframes mehr zu haben, zu beeinflussen.
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernungen

- Der veraltete `mozPreservesPitch`-Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stack-Traces für Antworten und Ereignisse, ohne sie nach den ersten 50 "throw"-Verwendungen in einem Realm zu begrenzen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Bei der Verwendung von `input.performActions` wird eine laufende Rad-Transaktion jetzt am Ende des Befehls zurückgesetzt, um den Status nicht beizubehalten und nicht in folgende Aktionen innerhalb desselben Tabs überzuleiten ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Bei der Verwendung einer `pointerMove`-Aktion mit `input.performActions` führt ein ungültiges Elementursprung jetzt korrekt zu einem "no such error"-Fehler ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Ein Wettlaufzustand beim ersten Seitenladen wurde behoben, der auftreten konnte, wenn direkt mit einem neu geöffneten Tab oder Fenster interagiert wurde ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Sowohl die Befehle `WebDriver:GetComputedLabel` als auch `WebDriver:GetComputedRole` warten jetzt korrekt darauf, dass das angeforderte Zugriffsobjekt für ein Element existiert, wenn es gerade in den DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen läuft, verwenden jetzt einen Timer, der nicht durch die Drosselung der Timer beeinflusst wird, falls der für die Automatisierung bestimmte Tab im Hintergrund ist.

## Änderungen für Add-on-Entwickler

- Um die Veraltung von Manifest V3-Erweiterungen zu unterstützen, ist die `browser_style`-Eigenschaft standardmäßig auf `false` in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen gesetzt ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Weitere Informationen zur Migration finden Sie unter [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
- Das {{WebExtAPIRef("commands.onChanged")}}-Ereignis, das es Web-Erweiterungen ermöglicht, Änderungen an Tastenkombinationen zu hören, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung für {{WebExtAPIRef("storage.session")}} wurde hinzugefügt, was die Möglichkeit bietet, Daten für die Dauer der Browsersitzung im Speicher zu speichern ([Firefox-Bug 18237131](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
