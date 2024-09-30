---
title: Firefox 103 für Entwickler
slug: Mozilla/Firefox/Releases/103
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 103, die sich auf Entwickler auswirken werden. Firefox 103 wurde am 26. Juli 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Die Unterstützung für das `<menuitem>` Element wurde zusammen mit der `dom.menuitem.enabled` Präferenz entfernt.
  Weitere Details finden Sie unter [Bug 1372276](https://bugzil.la/1372276).

### MathML

#### Entfernungen

- Die veralteten Attribute `scriptminsize` und `scriptsizemultiplier` wurden entfernt ([Firefox-Bug 1772697](https://bugzil.la/1772697)).

### CSS

- Die {{CSSxRef("backdrop-filter")}} Eigenschaft (die verwendet werden kann, um grafische Effekte wie Weichzeichnung oder Farbverschiebung auf den Bereich hinter einem Element anzuwenden) ist jetzt standardmäßig verfügbar. Früher war sie hinter einer Präferenz-Einstellung verborgen ([Firefox-Bug 1578503](https://bugzil.la/1578503)).
- Die {{CSSxRef("scroll-snap-stop")}} Eigenschaft ist jetzt verfügbar ([Firefox-Bug 1312165](https://bugzil.la/1312165)). Sie können die Werte `always` und `normal` dieser Eigenschaft verwenden, um festzulegen, ob die Snap-Punkte auch bei schnellem Scrollen durchlaufbar sein sollen oder nicht.
- Unterstützung wurde für die {{CSSxRef(":modal")}} Pseudoklasse hinzugefügt. Sie wählt alle Elemente aus, die sich in einem Zustand befinden, in dem sie alle Interaktionen mit anderen Elementen ausschließen, bis die Interaktion beendet ist ([Firefox-Bug 1768535](https://bugzil.la/1768535)).
- Der [`style`](/de/docs/Web/CSS/contain#style) Wert für die `contain` Eigenschaft wird jetzt unterstützt. Sie können diesen Wert für Eigenschaften verwenden, die Auswirkungen auf mehr als nur ein Element und seine Nachfahren haben können, damit die Effekte das enthaltende Element nicht verlassen. Weitere Informationen finden Sie unter ([Firefox-Bug 1463600](https://bugzil.la/1463600)).

### JavaScript

- Native Fehlerarten können jetzt mit dem [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert werden.
  Dies schließt {{JSxRef("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} und {{JSxRef("AggregateError")}} ein.
  Serialisierte Eigenschaften umfassen [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name), [`message`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/message), [`cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause), [`fileName`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName), [`lineNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) und [`columnNumber`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber).
  Für {{JSxRef("AggregateError")}} werden die Eigenschaften `message`, `name`, `cause` und `errors` serialisiert.
  Weitere Informationen finden Sie unter [Firefox-Bug 1556604](https://bugzil.la/1556604).

### APIs

- [`ReadableStream`](/de/docs/Web/API/ReadableStream), [`WritableStream`](/de/docs/Web/API/WritableStream), [`TransformStream`](/de/docs/Web/API/TransformStream) sind jetzt [Transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects), was bedeutet, dass das Eigentum beim Teilen der Objekte zwischen einem Fenster und Arbeitern mit `postMessage` oder beim Kopieren eines Objekts mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) übertragen werden kann.
  Nach der Übertragung kann das ursprüngliche Objekt nicht mehr verwendet werden.
  Weitere Informationen finden Sie unter [Firefox-Bug 1659025](https://bugzil.la/1659025).

- [`Window.caches`](/de/docs/Web/API/Window/caches), [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches), [`CacheStorage`](/de/docs/Web/API/CacheStorage) und [`Cache`](/de/docs/Web/API/Cache) erfordern jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts); die Eigenschaften/Interfaces sind in einem unsicheren Kontext nicht definiert.
  Zuvor würde `cache` einen `CacheStorage` zurückgeben, der eine Ausnahme werfen würde, wenn er außerhalb eines sicheren Kontextes verwendet wird.
  Weitere Informationen finden Sie unter [Firefox-Bug 1112134](https://bugzil.la/1112134).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Eine Präferenz wurde hinzugefügt, um experimentelle BiDi-Befehle und -Ereignisse zu deaktivieren: `remote.experimental.enabled` ([Firefox-Bug 1777951](https://bugzil.la/1777951)).
- Ein `script` Modul mit einer experimentellen Implementierung des `evaluate` Befehls wurde hinzugefügt. Nur verfügbar, wenn `remote.experimental.enabled` auf `true` gesetzt ist ([Firefox-Bug 1742979](https://bugzil.la/1742979)).
- Unterstützung für die Serialisierung von Sammlungen mit einfachen Werten und komplexen Objekten hinzugefügt, die beispielsweise für die Ereignisdaten von `log.entryAdded` oder den Rückgabewert von `script.evaluate` verwendet werden ([Firefox-Bug 1770752](https://bugzil.la/1770752)).
- Ein Randfall für `browsingContext.navigate` wurde behoben, wenn zu einem zwischengespeicherten Bild navigiert wird ([Firefox-Bug 1763133](https://bugzil.la/1763133)).

#### Marionette

- Die `platformVersion` Fähigkeit wurde aktualisiert, um als `moz:platformVersion` zurückgegeben zu werden ([Firefox-Bug 1771760](https://bugzil.la/1771760)).
- Die Unterstützung für `ChromeElement` wurde entfernt; alle Elemente werden nun als `WebElement` serialisiert ([Firefox-Bug 1775036](https://bugzil.la/1775036) und [Firefox-Bug 1775064](https://bugzil.la/1775064)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die ServiceWorker-API in WebExtensions wurde entfernt (`'serviceWorker' in navigator` gibt jetzt `false` zurück, wenn innerhalb einer Erweiterung ausgeführt) ([Firefox-Bug 1593931](https://bugzil.la/1593931)).

## Ältere Versionen

{{Firefox_for_developers}}
