---
title: Firefox 23 für Entwickler
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Sicherheit

- Blockade gemischter Inhalte. Firefox lädt keine unsicheren (http) Ressourcen mehr auf sicheren (https) Seiten ([Firefox-Bug 834836](https://bugzil.la/834836)).
- Die Standardsyntax der [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.0 Richtlinien ist nun standardmäßig implementiert und durchgesetzt.

### Entwicklertools

- Ein Netzwerk-Panel wurde zu den Entwicklertools hinzugefügt. Dies bietet eine detailliertere Ansicht als die "Netz" Ansicht in der Webkonsole.
- Die Webkonsole wurde in "Konsole" umbenannt und enthält nun die Option, Sicherheitsfehler/-warnungen zu filtern.
- Die neuen Toolbox-Optionen ermöglichen das Deaktivieren von Funktionen, das Wechseln zwischen hellen/dunklen Themen oder das Aktivieren von Chrome/Remote-Debugging.

### HTML

- Die Unterstützung für das `<blink>` Element wird nun vollständig entfernt. Der `<blink>` Tag implementiert jetzt das [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) Interface ([Firefox-Bug 857820](https://bugzil.la/857820)).
- Der `range` Typ des {{HTMLElement("input")}} Elements ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) ist nun standardmäßig aktiviert ([Firefox-Bug 841950](https://bugzil.la/841950)).

### JavaScript

- Mit der Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann nun die `length` Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Objekts neu definiert werden.
- Die Option, JavaScript zu deaktivieren, einschließlich der Optionen für verschiebbare Fenster/Ersatz des Kontextmenüs, wurde entfernt. Sie können JavaScript jedoch weiterhin deaktivieren, indem Sie in about:config auf die Option "javascript.enabled" doppelklicken.

### DOM

- D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent#key_names_and_char_values) wird jetzt unterstützt, aber nur für nicht druckbare Tasten ([Firefox-Bug 842927](https://bugzil.la/842927)).
- Das `title` Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist gemäß der aktualisierten DOM-Spezifikation jetzt optional.
- Die Möglichkeit, ein Sidebar-Panel hinzuzufügen (`window.sidebar.addPanel`), wurde entfernt ([Firefox-Bug 691647](https://bugzil.la/691647)).
- Die unpräfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox-Bug 704063](https://bugzil.la/704063)). Die unpräfixierte [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Methode erhält ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält einen Timecode in Millisekunden ([Firefox-Bug 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist jetzt optional ([Firefox-Bug 861605](https://bugzil.la/861605)).
- Die `HTMLMediaElement.initialTime` Eigenschaft, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox-Bug 742537](https://bugzil.la/742537)).
- Der [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent) Konstruktor wurde hinzugefügt ([Firefox-Bug 848293](https://bugzil.la/848293)).
- Die [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) Eigenschaft wurde implementiert ([Firefox-Bug 848293](https://bugzil.la/848293)).
- Der [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent) Konstruktor wurde hinzugefügt ([Firefox-Bug 848291](https://bugzil.la/848291)).
- Die [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft wurde implementiert ([Firefox-Bug 848291](https://bugzil.la/848291)).
- Die nicht standardmäßigen `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox-Bug 868751](https://bugzil.la/868751)).

### WebRTC

- Anstelle von Benutzernamen in der `RTCIceServer.url` Eigenschaft (wie `stun:username@stunserver.example.com`) müssen Sie jetzt die neue `RTCIceServer.username` Eigenschaft verwenden.

### CSS

- Der Blinkeffekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber immer noch ein gültiger Wert ([Firefox-Bug 857820](https://bugzil.la/857820)).
- In-Flow {{cssxref("::after")}} und {{cssxref("::before")}} Pseudoelemente sind jetzt Flex-Elemente ([Firefox-Bug 867454](https://bugzil.la/867454)).
- Die Berechnung der [Viewport-Einheiten](/de/docs/Web/CSS/length#viewport-percentage_lengths) wurde geändert. In Verbindung mit `overflow:auto` wird der durch eventuelle Bildlaufleisten eingenommene Platz nicht vom Viewport abgezogen, während er im Fall von `overflow:scroll` abgezogen wird ([Firefox-Bug 811403](https://bugzil.la/811403)).

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}} Element wurden implementiert ([Firefox-Bug 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}} Element bestimmt nun das sichtbare Kind, wie in der MathML3-Spezifikation beschrieben.

## Änderungen für Addon- und Mozilla-Entwickler

### Firefox-Entwicklungswerkzeuge

Addons, die chrome://browser/content/debugger.xul überlagern, müssen jetzt chrome://browser/content/devtools/debugger.xul überlagern. Sie können Verweise auf beide Dateien in chrome.manifest für Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Hinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)

### Ältere Versionen

{{Firefox_for_developers}}
