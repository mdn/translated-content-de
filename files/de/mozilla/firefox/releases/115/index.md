---
title: Firefox 115 für Entwickler
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{FirefoxSidebar}}

Dieser Artikel stellt Informationen zu den Änderungen in Firefox 115 bereit, die Entwickler betreffen. Firefox 115 wurde am 4. Juli 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`modulepreload`](/de/docs/Web/HTML/Attributes/rel/modulepreload)-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements wird nun unterstützt.  
  Dies ermöglicht eine frühzeitige (und asynchrone) Fetching von [Modul-Skripten](/de/docs/Web/JavaScript/Guide/Modules) und deren Abhängigkeiten parallel, die dann in der Modul-Map des Dokuments gespeichert werden ([Firefox-Bug 1425310](https://bugzil.la/1425310)).

### CSS

- Die CSS-Eigenschaft {{cssxref("animation-composition")}} wird jetzt standardmäßig unterstützt. Sie können diese Eigenschaft verwenden, um die Kompositionsoperation anzugeben, die verwendet werden soll, wenn mehrere Animationen dieselbe Eigenschaft gleichzeitig beeinflussen. ([Firefox-Bug 1823862](https://bugzil.la/1823862)).
- Die `supports-conditions` in der CSS-{{cssxref("@import")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule)-`supports()`-Funktion werden jetzt standardmäßig unterstützt. Diese Funktion ermöglicht das Importieren von Stylesheets nur, wenn die spezifizierte Funktion im Browser des Nutzers unterstützt wird. ([Firefox-Bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- Die statische Methode {{jsxref("Array.fromAsync()")}} wird jetzt unterstützt.  
  Die Methode gibt asynchron eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [Array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt zurück ([Firefox-Bug 1795816](https://bugzil.la/1795816)).
- Die Methoden `Array` und `TypedArray` [`Array.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted) und [`TypedArrays.with()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) werden nun unterstützt.  
  Diese Methoden geben ein neues Array mit Elementen zurück, die flach kopiert wurden (ähnlich benannte Methoden ohne das Präfix `to` ändern die Elemente des Arrays direkt).  
  ([Firefox-Bug 1811057](https://bugzil.la/1811057)).

### HTTP

- Der [`Sec-Purpose`](/de/docs/Web/HTTP/Headers/Sec-Purpose)-HTTP-{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} wird nun in Anfragen für {{Glossary("Prefetch", "Prefetch")}}-Ressourcen aufgenommen.  
  Dadurch können Server eine spezielle Handhabung ermöglichen, wie z. B. das Anpassen des Cache-Ablaufs für die Anfrage ([Firefox-Bug 1836328](https://bugzil.la/1836328)).

### APIs

- Die statische Methode [`Response.json()`](/de/docs/Web/API/Response/json_static) wird nun unterstützt. Dies erleichtert die Erstellung von [`Response`](/de/docs/Web/API/Response)-Objekten für die Rückgabe von JSON-Daten.  
  Diese Methode wird nützlich für [Service Worker](/de/docs/Web/API/Service_Worker_API) und anderen Code, der auf Browseranfragen mit JSON-Daten antworten muss ([Firefox-Bug 1758943](https://bugzil.la/1758943)).
- Die statische Methode [`URL.canParse()`](/de/docs/Web/API/URL/canParse_static) kann jetzt verwendet werden, um eine absolute URL oder eine relative URL mit Basis-URL zu analysieren und zu validieren.  
  Dies bietet eine schnelle und einfache Möglichkeit, die Gültigkeit von URLs zu überprüfen, anstatt sie innerhalb eines `try...catch`-Blocks zu konstruieren und Ausnahmen zu behandeln.  
  ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die Methoden [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has) und [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete) unterstützen nun das optionale Argument `value`.  
  Dies ermöglicht das Abgleichen eines Suchparameters sowohl nach dem `name` als auch nach dem `value`, was die Arbeit mit Abfragezeichenfolgen erleichtert, die mehrere Suchparameter mit demselben Name enthalten.  
  ([Firefox-Bug 1831587](https://bugzil.la/1831587)).
- Das Attribut [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) wird nun unterstützt, wodurch eine WebRTC-Anwendung die Balance zwischen Wiedergabeverzögerung und dem Risiko von Audio- oder Video-Frames-Verlust aufgrund von Netzwerkstörungen beeinflussen kann.  
  ([Firefox-Bug 1592988](https://bugzil.la/1592988)).

#### Entfernt

- Der veraltete `mozPreservesPitch`-Alias von [HTMLMediaElement.preservesPitch](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wurde standardmäßig deaktiviert und könnte in einer zukünftigen Version vollständig entfernt werden ([Firefox-Bug 1831205](https://bugzil.la/1831205)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Nutzlast enthält jetzt immer Stacktraces für Antworten und Ereignisse, ohne sie nach den ersten 50 Fehlverwendungsfällen in einem Realm zu begrenzen ([Firefox-Bug 1791715](https://bugzil.la/1791715)).
- Bei Verwendung von `input.performActions` wird jede laufende Wheel-Transaktion am Ende des Befehls zurückgesetzt, um keinen Zustand beizubehalten und keine undichte Aktionen im selben Tab zu verursachen ([Firefox-Bug 1821733](https://bugzil.la/1821733)).
- Bei Verwendung einer `pointerMove`-Aktion mit `input.performActions` führt ein ungültiges Element-Origin jetzt korrekt zu einem "no such error"-Fehler ([Firefox-Bug 1832028](https://bugzil.la/1832028)).
- Eine Race-Condition für den anfänglichen Seitenaufbau wurde behoben, die auftreten konnte, wenn direkt mit einer neu geöffneten Registerkarte oder einem neuen Fenster interagiert wurde ([Firefox-Bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Die beiden Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` warten jetzt korrekt, bis das angeforderte Zugriffsobjekt für ein Element existiert, falls es gerade in den DOM eingefügt wurde ([Firefox-Bug 1828816](https://bugzil.la/1828816)).
- Alle Instanzen von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) in unserem privilegierten Code, der in Inhaltsprozessen ausgeführt wird, verwenden jetzt eine spezielle Timer-Variante, die nicht durch das Drosseln der Timer beeinträchtigt wird, falls sich der Tab für die Automatisierung im Hintergrund befindet.

## Änderungen für Add-on-Entwickler

- Zur Unterstützung der Abschaffung in Manifest-V3-Erweiterungen wird das Manifest-Schlüssel-Property [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) standardmäßig auf `false` gesetzt in [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest-V3-Erweiterungen ([Firefox-Bug 1830710](https://bugzil.la/1830710)). Siehe [Manifest-v3-Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen zum Übergang von `browser_style` in Manifest-V3-Erweiterungen.
- Das Ereignis {{WebExtAPIRef("commands.onChanged")}}, das Web-Erweiterungen ermöglicht, auf Änderungen der Befehlskurzbefehle zu hören, wurde hinzugefügt ([Firefox-Bug 1801531](https://bugzil.la/1801531)).
- Unterstützung wurde hinzugefügt für {{WebExtAPIRef("storage.session")}}, welches die Möglichkeit bietet, Daten für die Dauer der Browser-Sitzung im Speicher zu speichern ([Firefox-Bug 18237131](https://bugzil.la/1823713)).

## Ältere Versionen

{{Firefox_for_developers}}
