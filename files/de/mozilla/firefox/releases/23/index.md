---
title: Firefox 23 für Entwickler
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Sicherheit

- Blockierung gemischter Inhalte. Firefox wird keine nicht-sicheren (http) Ressourcen auf sicheren (https) Seiten mehr laden ([Firefox Bug 834836](https://bugzil.la/834836)).
- Die standardisierte Syntax von [CSP](/de/docs/Web/HTTP/CSP) 1.0 Richtlinien wird jetzt standardmäßig implementiert und durchgesetzt.

### Entwickler-Werkzeuge

- Ein Netzwerk-Panel wurde zu den Entwicklerwerkzeugen hinzugefügt. Dies ist eine detailliertere Ansicht als die Option "Netz" in der Webkonsole.
- Die Webkonsole wurde in "Konsole" umbenannt und enthält jetzt die Option, Sicherheitsfehler/-warnungen zu filtern.
- Die neuen Toolox-Optionen ermöglichen es, Funktionen zu deaktivieren, das Licht-/Dunkel-Thema zu ändern oder Chrome-/Remote-Debugging zu aktivieren.

### HTML

- Die Unterstützung für das `<blink>` Element ist jetzt vollständig eingestellt. Das `<blink>` Tag implementiert nun das [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) Interface ([Firefox Bug 857820](https://bugzil.la/857820)).
- Der `range` Typ des {{HTMLElement("input")}} Elements ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) ist jetzt standardmäßig aktiviert ([Firefox Bug 841950](https://bugzil.la/841950)).

### JavaScript

- Die Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann jetzt verwendet werden, um die `length` Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Objekts neu zu definieren.
- Die Option, JavaScript zu deaktivieren, einschließlich der Optionen, Fenster zu verschieben oder das Kontextmenü zu ersetzen, wurde entfernt. Sie können JavaScript weiterhin deaktivieren, indem Sie die Option "javascript.enabled" in about:config doppelt anklicken.

### DOM

- D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent#key_names_and_char_values) wird nun unterstützt, aber nur für nicht-druckbare Tasten ([Firefox Bug 842927](https://bugzil.la/842927)).
- Das `title` Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist jetzt optional gemäß der aktualisierten DOM-Spezifikation.
- Die Möglichkeit, ein Seitenleistenpanel (`window.sidebar.addPanel`) hinzuzufügen, wurde entfernt ([Firefox Bug 691647](https://bugzil.la/691647)).
- Die unpräfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox Bug 704063](https://bugzil.la/704063)). Die unpräfixierte Methode [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erhält ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält einen Timestamp in Millisekunden ([Firefox Bug 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist jetzt optional ([Firefox Bug 861605](https://bugzil.la/861605)).
- Die Eigenschaft `HTMLMediaElement.initialTime`, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox Bug 742537](https://bugzil.la/742537)).
- Der [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent) Konstruktor wurde hinzugefügt ([Firefox Bug 848293](https://bugzil.la/848293)).
- Die Eigenschaft [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) wurde implementiert ([Firefox Bug 848293](https://bugzil.la/848293)).
- Der [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent) Konstruktor wurde hinzugefügt ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die Eigenschaft [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) wurde implementiert ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die nicht-standardisierten Methoden `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox Bug 868751](https://bugzil.la/868751)).

### WebRTC

- Anstatt Benutzernamen in die `RTCIceServer.url` Eigenschaft einzuschließen (wie etwa stun:username\@stunserver.example.com), müssen Sie jetzt die neue `RTCIceServer.username` Eigenschaft verwenden.

### CSS

- Der Blink-Effekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber immer noch ein gültiger Wert ([Firefox Bug 857820](https://bugzil.la/857820)).
- In-Fluss {{cssxref("::after")}} und {{cssxref("::before")}} Pseudoelemente sind jetzt Flex-Elemente ([Firefox Bug 867454](https://bugzil.la/867454)).
- Die Berechnung von [Viewport-Einheiten](/de/docs/Web/CSS/length#viewport-percentage_lengths) wurde geändert. In Verbindung mit `overflow:auto` wird der Platz, der durch eventuelle Scrollbalken eingenommen wird, nicht vom Viewport subtrahiert, während im Fall von `overflow:scroll` dies der Fall ist. ([Firefox Bug 811403](https://bugzil.la/811403))

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}} Element wurden implementiert ([Firefox Bug 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}} Element bestimmt nun das sichtbare Kind, wie in der MathML3-Spezifikation beschrieben.

## Änderungen für Addon- und Mozilla-Entwickler

### Firefox Entwicklerwerkzeuge

Addons, die chrome://browser/content/debugger.xul überlagern, müssen jetzt chrome://browser/content/devtools/debugger.xul überlagern. Sie können Referenzen zu beiden Dateien in chrome.manifest für Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)

### Ältere Versionen

{{Firefox_for_developers}}
