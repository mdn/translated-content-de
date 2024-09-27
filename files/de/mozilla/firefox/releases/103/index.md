---
title: Firefox 103 für Entwickler
slug: Mozilla/Firefox/Releases/103
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 103, die Entwickler betreffen werden. Firefox 103 wurde am 26. Juli 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernte Funktionen

- Die Unterstützung für das `<menuitem>`-Element wurde ebenso wie die `dom.menuitem.enabled`-Einstellung entfernt. Weitere Details finden Sie unter [Bug 1372276](https://bugzil.la/1372276).

### MathML

#### Entfernte Funktionen

- Die veralteten Attribute `scriptminsize` und `scriptsizemultiplier` wurden entfernt ([Firefox-Bug 1772697](https://bugzil.la/1772697)).

### CSS

- Die Eigenschaft {{CSSxRef("backdrop-filter")}} (mit der grafische Effekte wie Unschärfe oder Farbverschiebung auf den Bereich hinter einem Element angewendet werden können) ist jetzt standardmäßig verfügbar. Zuvor war sie hinter einer Einstellung versteckt ([Firefox-Bug 1578503](https://bugzil.la/1578503)).
- Die Eigenschaft {{CSSxRef("scroll-snap-stop")}} ist jetzt verfügbar ([Firefox-Bug 1312165](https://bugzil.la/1312165)). Sie können die Werte `always` und `normal` dieser Eigenschaft verwenden, um anzugeben, ob die Snap-Punkte auch bei schnellem Scrollen überschritten werden sollen oder nicht.
- Unterstützung wurde für die Pseudoklasse {{CSSxRef(":modal")}} hinzugefügt. Sie wählt alle Elemente aus, die sich in einem Zustand befinden, in dem sie alle Interaktionen mit anderen Elementen ausschließen, bis die Interaktion beendet wurde ([Firefox-Bug 1768535](https://bugzil.la/1768535)).
- Der [`style`](/de/docs/Web/CSS/contain#style)-Wert der `contain`-Eigenschaft wird jetzt unterstützt. Sie können diesen Wert für Eigenschaften verwenden, die Auswirkungen auf mehr als nur ein Element und seine Nachkommen haben können, ohne dass die Effekte das enthaltende Element verlassen. Weitere Informationen finden Sie unter ([Firefox-Bug 1463600](https://bugzil.la/1463600)).

### JavaScript

- Native Error-Typen können nun unter Verwendung des [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert werden. Dazu gehören {{JSxRef("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} und {{JSxRef("AggregateError")}}. Serialisierte Eigenschaften umfassen [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name), [`message`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/message), [`cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause), [`fileName`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName), [`lineNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) und [`columnNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber). Bei {{JSxRef("AggregateError")}} werden die Eigenschaften `message`, `name`, `cause` und `errors` serialisiert. Weitere Details finden Sie unter [Firefox-Bug 1556604](https://bugzil.la/1556604).

### APIs

- [`ReadableStream`](/de/docs/Web/API/ReadableStream), [`WritableStream`](/de/docs/Web/API/WritableStream), [`TransformStream`](/de/docs/Web/API/TransformStream) sind nun [Transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects), was bedeutet, dass das Eigentum beim Teilen der Objekte zwischen einem `window` und Workern mit `postMessage` oder beim Verwenden von [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) zur Kopie eines Objekts übertragen werden kann. Nach der Übertragung kann das ursprüngliche Objekt nicht mehr verwendet werden. Weitere Details finden Sie unter [Firefox-Bug 1659025](https://bugzil.la/1659025).

- [`Window.caches`](/de/docs/Web/API/Window/caches), [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches), [`CacheStorage`](/de/docs/Web/API/CacheStorage) und [`Cache`](/de/docs/Web/API/Cache) erfordern nun einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts); die Eigenschaften/Interfaces sind nicht definiert, wenn sie in einem unsicheren Kontext verwendet werden. Zuvor würde `cache` ein `CacheStorage` zurückgeben, das eine Ausnahme wirft, wenn es außerhalb eines sicheren Kontexts verwendet wird. Weitere Details finden Sie unter [Firefox-Bug 1112134](https://bugzil.la/1112134).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Ein Präferenzwert wurde hinzugefügt, um experimentelle BiDi-Befehle und -Ereignisse zu deaktivieren: `remote.experimental.enabled` ([Firefox-Bug 1777951](https://bugzil.la/1777951)).
- Ein `script` Modul wurde mit einer experimentellen Implementierung des `evaluate`-Befehls hinzugefügt. Nur verfügbar, wenn `remote.experimental.enabled` auf `true` gesetzt ist ([Firefox-Bug 1742979](https://bugzil.la/1742979)).
- Unterstützung für die Serialisierung von Sammlungen mit einfachen Werten und komplexen Objekten wurde hinzugefügt, die beispielsweise für die Ereignisdaten von `log.entryAdded` oder den Rückgabewert von `script.evaluate` verwendet werden ([Firefox-Bug 1770752](https://bugzil.la/1770752)).
- Ein Randfall für `browsingContext.navigate` wurde behoben, wenn zu einem gecachten Bild navigiert wird ([Firefox-Bug 1763133](https://bugzil.la/1763133)).

#### Marionette

- Die `platformVersion`-Kapazität wurde aktualisiert, um als `moz:platformVersion` zurückgegeben zu werden ([Firefox-Bug 1771760](https://bugzil.la/1771760)).
- Unterstützung für `ChromeElement` wurde entfernt; alle Elemente werden jetzt als `WebElement` serialisiert ([Firefox-Bug 1775036](https://bugzil.la/1775036) und [Firefox-Bug 1775064](https://bugzil.la/1775064)).

## Änderungen für Add-on-Entwickler

### Entfernte Funktionen

- Die ServiceWorker-API in WebExtensions wurde entfernt (`'serviceWorker' in navigator` gibt jetzt `false` zurück, wenn sie innerhalb einer Erweiterung ausgeführt wird) ([Firefox-Bug 1593931](https://bugzil.la/1593931)).

## Ältere Versionen

{{Firefox_for_developers}}
