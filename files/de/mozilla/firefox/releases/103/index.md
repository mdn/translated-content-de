---
title: Firefox 103 für Entwickler
slug: Mozilla/Firefox/Releases/103
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 103, die Entwickler betreffen. Firefox 103 wurde am 26. Juli 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Die Unterstützung für das `<menuitem>`-Element wurde zusammen mit der `dom.menuitem.enabled`-Einstellung entfernt.
  Für weitere Details siehe [Bug 1372276](https://bugzil.la/1372276).

### MathML

#### Entfernungen

- Die veralteten Attribute `scriptminsize` und `scriptsizemultiplier` wurden entfernt ([Firefox Bug 1772697](https://bugzil.la/1772697)).

### CSS

- Die Eigenschaft {{CSSxRef("backdrop-filter")}} (welche verwendet werden kann, um grafische Effekte wie Unschärfe oder Farbverschiebung auf den Bereich hinter einem Element anzuwenden) ist nun standardmäßig verfügbar. Sie war zuvor hinter einer Einstellung versteckt ([Firefox Bug 1578503](https://bugzil.la/1578503)).
- Die Eigenschaft {{CSSxRef("scroll-snap-stop")}} ist nun verfügbar ([Firefox Bug 1312165](https://bugzil.la/1312165)). Sie können die Werte `always` und `normal` verwenden, um anzugeben, ob die Snap-Punkte, auch beim schnellen Scrollen, berücksichtigt werden sollen oder nicht.
- Die Unterstützung für die Pseudo-Klasse {{CSSxRef(":modal")}} wurde hinzugefügt. Sie wählt alle Elemente aus, die in einem Zustand sind, in dem sie jede Interaktion mit anderen Elementen ausschließen, bis die Interaktion abgebrochen wird ([Firefox Bug 1768535](https://bugzil.la/1768535)).
- Der [`style`](/de/docs/Web/CSS/contain#style) Wert für die `contain` Eigenschaft wird nun unterstützt. Sie können diesen Wert für Eigenschaften verwenden, die Auswirkungen auf mehr als nur ein Element und dessen Nachkommen haben können, damit die Effekte nicht über das enthaltende Element hinausgehen. Für mehr Informationen, siehe ([Firefox Bug 1463600](https://bugzil.la/1463600)).

### JavaScript

- Native Fehlertypen können nun mittels des [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert werden.
  Dies umfasst {{JSxRef("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} und {{JSxRef("AggregateError")}}.
  Serialisierte Eigenschaften umfassen [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name), [`message`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/message), [`cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause), [`fileName`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName), [`lineNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) und [`columnNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber).
  Für {{JSxRef("AggregateError")}} werden die Eigenschaften `message`, `name`, `cause` und `errors` serialisiert.
  Weitere Details finden Sie in [Firefox Bug 1556604](https://bugzil.la/1556604).

### APIs

- [`ReadableStream`](/de/docs/Web/API/ReadableStream), [`WritableStream`](/de/docs/Web/API/WritableStream), [`TransformStream`](/de/docs/Web/API/TransformStream) sind nun [Transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects), was bedeutet, dass das Eigentum beim Teilen der Objekte zwischen einem Fenster und Workers durch `postMessage` oder durch Verwendung von [`structuredClone()`](/de/docs/Web/API/structuredClone) übertragen werden kann, um ein Objekt zu kopieren.
  Nach der Übertragung kann das ursprüngliche Objekt nicht mehr verwendet werden.
  Weitere Details finden Sie in [Firefox Bug 1659025](https://bugzil.la/1659025).

- {{domxref("Window.caches")}}, {{domxref("WorkerGlobalScope.caches")}}, {{domxref("CacheStorage")}}, und {{domxref("Cache")}} erfordern nun einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts); die Eigenschaften/Schnittstellen sind nicht definiert, wenn sie in einem unsicheren Kontext verwendet werden.
  Zuvor würde `cache` ein `CacheStorage` zurückgeben, das eine Ausnahme werfen würde, wenn es außerhalb eines sicheren Kontexts verwendet wurde.
  Weitere Details finden Sie in [Firefox Bug 1112134](https://bugzil.la/1112134).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Ein Schalter wurde hinzugefügt, um experimentelle BiDi-Befehle und -Ereignisse zu deaktivieren, `remote.experimental.enabled` ([Firefox Bug 1777951](https://bugzil.la/1777951)).
- Ein `script`-Modul mit einer experimentellen Implementierung des `evaluate`-Befehls wurde hinzugefügt. Nur verfügbar, wenn `remote.experimental.enabled` auf `true` gesetzt ist ([Firefox Bug 1742979](https://bugzil.la/1742979)).
- Unterstützung für die Serialisierung von Sammlungen mit einfachen Werten und komplexen Objekten wurde hinzugefügt, die z. B. für die Ereignisdaten von `log.entryAdded` oder den Rückgabewert von `script.evaluate` verwendet werden ([Firefox Bug 1770752](https://bugzil.la/1770752)).
- Ein Randfall für `browsingContext.navigate` wurde behoben, wenn zu einem zwischengespeicherten Bild navigiert wird ([Firefox Bug 1763133](https://bugzil.la/1763133)).

#### Marionette

- Die Fähigkeit `platformVersion` wurde aktualisiert, um als `moz:platformVersion` zurückgegeben zu werden ([Firefox Bug 1771760](https://bugzil.la/1771760)).
- Die Unterstützung für `ChromeElement` wurde entfernt; alle Elemente werden jetzt als `WebElement` serialisiert ([Firefox Bug 1775036](https://bugzil.la/1775036) und [Firefox Bug 1775064](https://bugzil.la/1775064)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die ServiceWorker API in WebExtensions wurde entfernt (`'serviceWorker' in navigator` gibt jetzt `false` zurück, wenn es innerhalb einer Erweiterung ausgeführt wird) ([Firefox Bug 1593931](https://bugzil.la/1593931)).

## Ältere Versionen

{{Firefox_for_developers}}
