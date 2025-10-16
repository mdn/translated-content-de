---
title: Firefox 103 Versionshinweise für Entwickler
short-title: Firefox 103
slug: Mozilla/Firefox/Releases/103
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 103, die Entwickler betreffen werden. Firefox 103 wurde am 26. Juli 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Die Unterstützung für das `<menuitem>`-Element sowie die `dom.menuitem.enabled`-Einstellung wurde entfernt. Weitere Informationen finden Sie in [Bug 1372276](https://bugzil.la/1372276).

### MathML

#### Entfernungen

- Die veralteten Attribute `scriptminsize` und `scriptsizemultiplier` wurden entfernt ([Firefox Bug 1772697](https://bugzil.la/1772697)).

### CSS

- Die {{CSSxRef("backdrop-filter")}}-Eigenschaft (die zur Anwendung grafischer Effekte wie Unschärfen oder Farbverschiebungen auf den Bereich hinter einem Element verwendet werden kann) ist jetzt standardmäßig verfügbar. Sie war zuvor hinter einer Einstellungspräferenz verborgen ([Firefox Bug 1578503](https://bugzil.la/1578503)).
- Die {{CSSxRef("scroll-snap-stop")}}-Eigenschaft ist jetzt verfügbar ([Firefox Bug 1312165](https://bugzil.la/1312165)). Sie können mit den Werten `always` und `normal` dieser Eigenschaft festlegen, ob die Snap-Punkte passiert werden sollen oder nicht, selbst bei schnellem Scrollen.
- Unterstützung wurde hinzugefügt für die {{CSSxRef(":modal")}}-Pseudoklasse. Sie wählt alle Elemente aus, die sich in einem Zustand befinden, in dem sie alle Interaktionen mit anderen Elementen ausschließen, bis die Interaktion beendet wurde ([Firefox Bug 1768535](https://bugzil.la/1768535)).
- Der [`style`](/de/docs/Web/CSS/contain#style)-Wert für die `contain`-Eigenschaft wird jetzt unterstützt. Sie können diesen Wert für Eigenschaften verwenden, die Auswirkungen auf mehr als nur ein Element und seine Nachfolger haben können, damit diese Auswirkungen das enthaltene Element nicht verlassen. Weitere Informationen finden Sie in ([Firefox Bug 1463600](https://bugzil.la/1463600)).

### JavaScript

- Native Fehlertypen können nun mittels des [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert werden. Dies schließt {{JSxRef("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} und {{JSxRef("AggregateError")}} ein. Serialisierte Eigenschaften umfassen [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name), [`message`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/message), [`cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause), [`fileName`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName), [`lineNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) und [`columnNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber). Für {{JSxRef("AggregateError")}} werden die Eigenschaften `message`, `name`, `cause` und `errors` serialisiert. Weitere Details finden Sie in [Firefox Bug 1556604](https://bugzil.la/1556604).

### APIs

- [`ReadableStream`](/de/docs/Web/API/ReadableStream), [`WritableStream`](/de/docs/Web/API/WritableStream), [`TransformStream`](/de/docs/Web/API/TransformStream) sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects), was bedeutet, dass das Eigentum beim Teilen der Objekte zwischen einem Fenster und Arbeitern mittels `postMessage` oder bei der Verwendung von [`structuredClone()`](/de/docs/Web/API/Window/structuredClone), um ein Objekt zu kopieren, übertragen werden kann. Nach der Übertragung kann das ursprüngliche Objekt nicht mehr verwendet werden. Weitere Details finden Sie in [Firefox Bug 1659025](https://bugzil.la/1659025).

- [`Window.caches`](/de/docs/Web/API/Window/caches), [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches), [`CacheStorage`](/de/docs/Web/API/CacheStorage) und [`Cache`](/de/docs/Web/API/Cache) erfordern jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts); die Eigenschaften/Interfaces sind nicht definiert, wenn sie in einem unsicheren Kontext verwendet werden. Früher würde `cache` ein `CacheStorage` zurückgeben, das eine Ausnahme auslöste, wenn es außerhalb eines sicheren Kontextes verwendet wurde. Weitere Details finden Sie in [Firefox Bug 1112134](https://bugzil.la/1112134).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Eine Präferenz wurde hinzugefügt, um experimentelle BiDi-Befehle und -Ereignisse zu deaktivieren `remote.experimental.enabled` ([Firefox Bug 1777951](https://bugzil.la/1777951)).
- Ein `script`-Modul mit einer experimentellen Implementierung des `evaluate`-Befehls wurde hinzugefügt. Nur verfügbar, wenn `remote.experimental.enabled` auf `true` gesetzt ist ([Firefox Bug 1742979](https://bugzil.la/1742979)).
- Unterstützung für die Serialisierung von Sammlungen mit einfachen Werten und komplexen Objekten wurde hinzugefügt, die beispielsweise für die Ereignisdaten von `log.entryAdded` oder den Rückgabewert von `script.evaluate` verwendet werden ([Firefox Bug 1770752](https://bugzil.la/1770752)).
- Ein Randfall für `browsingContext.navigate` wurde behoben, wenn zu einem zwischengespeicherten Bild navigiert wird ([Firefox Bug 1763133](https://bugzil.la/1763133)).

#### Marionette

- Die `platformVersion`-Fähigkeit wurde aktualisiert, um als `moz:platformVersion` zurückgegeben zu werden ([Firefox Bug 1771760](https://bugzil.la/1771760)).
- Die Unterstützung für `ChromeElement` wurde entfernt; alle Elemente werden jetzt als `WebElement` serialisiert ([Firefox Bug 1775036](https://bugzil.la/1775036) und [Firefox Bug 1775064](https://bugzil.la/1775064)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die ServiceWorker-API in WebExtensions wurde entfernt (`'serviceWorker' in navigator` gibt jetzt `false` zurück, wenn sie innerhalb einer Erweiterung ausgeführt wird) ([Firefox Bug 1593931](https://bugzil.la/1593931)).
