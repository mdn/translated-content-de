---
title: Firefox 103 Versionshinweise für Entwickler
short-title: Firefox 103
slug: Mozilla/Firefox/Releases/103
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 103, die Entwickler betreffen werden. Firefox 103 wurde am 26. Juli 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Die Unterstützung für das `<menuitem>`-Element wurde zusammen mit der Einstellung `dom.menuitem.enabled` entfernt. Weitere Details finden Sie unter [Bug 1372276](https://bugzil.la/1372276).

### MathML

#### Entfernungen

- Die veralteten Attribute `scriptminsize` und `scriptsizemultiplier` wurden entfernt ([Firefox-Bug 1772697](https://bugzil.la/1772697)).

### CSS

- Die Eigenschaft {{CSSxRef("backdrop-filter")}} (die verwendet werden kann, um grafische Effekte wie Unschärfe oder Farbverschiebung auf den Bereich hinter einem Element anzuwenden) ist jetzt standardmäßig verfügbar. Zuvor war sie hinter einer Einstellung verborgen ([Firefox-Bug 1578503](https://bugzil.la/1578503)).
- Die Eigenschaft {{CSSxRef("scroll-snap-stop")}} ist jetzt verfügbar ([Firefox-Bug 1312165](https://bugzil.la/1312165)). Sie können die `always`- und `normal`-Werte dieser Eigenschaft verwenden, um festzulegen, ob die Snap-Punkte passiert werden sollen, selbst wenn schnell gescrollt wird.
- Unterstützung wurde für die {{CSSxRef(":modal")}} Pseudoklasse hinzugefügt. Sie wählt alle Elemente aus, die sich in einem Zustand befinden, in dem sie jegliche Interaktion mit anderen Elementen ausschließen, bis die Interaktion abgelehnt wurde ([Firefox-Bug 1768535](https://bugzil.la/1768535)).
- Der [`style`](/de/docs/Web/CSS/Reference/Properties/contain#style) Wert für die `contain`-Eigenschaft wird jetzt unterstützt. Sie können diesen Wert für Eigenschaften verwenden, die Auswirkungen auf mehr als nur ein Element und dessen Nachkommen haben können, damit die Effekte nicht aus dem enthaltenden Element entweichen. Weitere Informationen finden Sie unter ([Firefox-Bug 1463600](https://bugzil.la/1463600)).

### JavaScript

- Native Error-Typen können jetzt mit dem [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert werden. Dies beinhaltet {{JSxRef("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} und {{JSxRef("AggregateError")}}. Serialisierte Eigenschaften umfassen den [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name), [`message`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/message), [`cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause), [`fileName`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName), [`lineNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) und [`columnNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber). Für {{JSxRef("AggregateError")}} werden die Eigenschaften `message`, `name`, `cause` und `errors` serialisiert. Weitere Details finden Sie unter [Firefox-Bug 1556604](https://bugzil.la/1556604).

### APIs

- [`ReadableStream`](/de/docs/Web/API/ReadableStream), [`WritableStream`](/de/docs/Web/API/WritableStream), [`TransformStream`](/de/docs/Web/API/TransformStream) sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects), was bedeutet, dass das Eigentum übertragen werden kann, wenn die Objekte zwischen einem Fenster und Arbeitern mit `postMessage` geteilt oder mittels [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) kopiert werden. Nach der Übertragung kann das ursprüngliche Objekt nicht mehr verwendet werden. Weitere Details finden Sie unter [Firefox-Bug 1659025](https://bugzil.la/1659025).

- [`Window.caches`](/de/docs/Web/API/Window/caches), [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches), [`CacheStorage`](/de/docs/Web/API/CacheStorage), und [`Cache`](/de/docs/Web/API/Cache) erfordern jetzt einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts); die Eigenschaften/Schnittstellen sind nicht definiert, wenn sie in einem unsicheren Kontext verwendet werden. Zuvor würde `cache` ein `CacheStorage` zurückgeben, das eine Ausnahme auslösen würde, wenn es außerhalb eines sicheren Kontexts verwendet wird. Weitere Details finden Sie unter [Firefox-Bug 1112134](https://bugzil.la/1112134).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Eine Einstellung zum Deaktivieren experimenteller BiDi-Befehle und -Ereignisse `remote.experimental.enabled` wurde hinzugefügt ([Firefox-Bug 1777951](https://bugzil.la/1777951)).
- Ein `script`-Modul mit einer experimentellen Implementierung des `evaluate`-Befehls wurde hinzugefügt. Nur verfügbar, wenn `remote.experimental.enabled` auf `true` gesetzt ist ([Firefox-Bug 1742979](https://bugzil.la/1742979)).
- Serialisierungsunterstützung für Kollektionen mit einfachen Werten und komplexen Objekten, die z.B. für die Ereignisdaten von `log.entryAdded` oder den Rückgabewert von `script.evaluate` verwendet werden, wurde hinzugefügt ([Firefox-Bug 1770752](https://bugzil.la/1770752)).
- Ein Randfall für `browsingContext.navigate` beim Navigieren zu einem zwischengespeicherten Bild wurde behoben ([Firefox-Bug 1763133](https://bugzil.la/1763133)).

#### Marionette

- Die Fähigkeit `platformVersion` wurde aktualisiert, um als `moz:platformVersion` zurückgegeben zu werden ([Firefox-Bug 1771760](https://bugzil.la/1771760)).
- Die Unterstützung für `ChromeElement` wurde entfernt; alle Elemente werden jetzt als `WebElement` serialisiert ([Firefox-Bug 1775036](https://bugzil.la/1775036) und [Firefox-Bug 1775064](https://bugzil.la/1775064)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die ServiceWorker API in WebExtensions wurde entfernt (`'serviceWorker' in navigator` gibt jetzt `false` zurück, wenn sie innerhalb einer Erweiterung ausgeführt wird) ([Firefox-Bug 1593931](https://bugzil.la/1593931)).
