---
title: Firefox 23 Versionshinweise für Entwickler
short-title: Firefox 23
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

## Änderungen für Web-Entwickler

### Sicherheit

- Blockierung gemischter Inhalte. Firefox wird keine unsicheren (http) Ressourcen mehr auf sicheren (https) Seiten laden ([Firefox Bug 834836](https://bugzil.la/834836)).
- Die Standardsyntax der [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.0 Richtlinien wird jetzt standardmäßig implementiert und erzwungen.

### Entwickler-Tools

- Ein Netzwerk-Panel wurde zu den Entwickler-Tools hinzugefügt. Dies ist eine detailliertere Ansicht als die "Netzwerk" Ansicht im Web-Konsole.
- Die Web-Konsole wurde in "Konsole" umbenannt und enthält nun die Option, Sicherheitsfehler/-warnungen zu filtern.
- Die neuen Toolbox-Optionen ermöglichen es Ihnen, Funktionen zu deaktivieren, das helle/dunkle Thema zu ändern oder Chrome/Remote-Debugging zu aktivieren.

### HTML

- Der `<blink>` Element-Support wurde vollständig entfernt. Das `<blink>` Tag implementiert jetzt das [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) Interface ([Firefox Bug 857820](https://bugzil.la/857820)).
- Der `range` Typ des {{HTMLElement("input")}} Elements ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) wurde standardmäßig aktiviert ([Firefox Bug 841950](https://bugzil.la/841950)).

### JavaScript

- Die Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann jetzt verwendet werden, um die `length` Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Objekts neu zu definieren.
- Die Option, JavaScript zu deaktivieren, einschließlich der Optionen, Fensterbewegungen zuzulassen/Kontextmenü zu ersetzen, wurde entfernt. Sie können JavaScript weiterhin deaktivieren, indem Sie doppelt auf die Option "javascript.enabled" in about:config klicken.

### DOM

- D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wird jetzt unterstützt, jedoch nur für nicht druckbare Tasten ([Firefox Bug 842927](https://bugzil.la/842927)).
- Das `title` Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist nun optional gemäß der aktualisierten DOM-Spezifikation.
- Die Möglichkeit, ein Seitenleisten-Panel (`window.sidebar.addPanel`) hinzuzufügen, wurde entfernt ([Firefox Bug 691647](https://bugzil.la/691647)).
- Die unpräfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox Bug 704063](https://bugzil.la/704063)). Die unpräfixierte [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Methode erhält ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält einen Zeitstempel in Millisekunden ([Firefox Bug 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist nun optional ([Firefox Bug 861605](https://bugzil.la/861605)).
- Die `HTMLMediaElement.initialTime` Eigenschaft, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox Bug 742537](https://bugzil.la/742537)).
- Der [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent) Konstruktor wurde hinzugefügt ([Firefox Bug 848293](https://bugzil.la/848293)).
- Die [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) Eigenschaft wurde implementiert ([Firefox Bug 848293](https://bugzil.la/848293)).
- Der [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent) Konstruktor wurde hinzugefügt ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft wurde implementiert ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die nicht standardmäßigen Methoden `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox Bug 868751](https://bugzil.la/868751)).

### WebRTC

- Anstatt Benutzernamen in die `RTCIceServer.url` Eigenschaft einzuschließen (wie `stun:username@stunserver.example.com`), müssen Sie jetzt die neue `RTCIceServer.username` Eigenschaft verwenden.

### CSS

- Der Blinkeffekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber weiterhin ein gültiger Wert ([Firefox Bug 857820](https://bugzil.la/857820)).
- In-Flow {{cssxref("::after")}} und {{cssxref("::before")}} Pseudoelemente sind jetzt Flex-Elemente ([Firefox Bug 867454](https://bugzil.la/867454)).
- Die Berechnung von [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) wurde geändert. In Verbindung mit `overflow:auto` wird der Platz, der von eventuellen Scrollleisten eingenommen wird, nicht vom Viewport abgezogen, während im Fall von `overflow:scroll` dies der Fall ist ([Firefox Bug 811403](https://bugzil.la/811403)).

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}} Element wurden implementiert ([Firefox Bug 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}} Element bestimmt nun das sichtbare Kind wie in der MathML3-Spezifikation beschrieben.

## Änderungen für Addon- und Mozilla-Entwickler

### Firefox Entwickler-Tools

Addons, die chrome://browser/content/debugger.xul überlagern, müssen jetzt chrome://browser/content/devtools/debugger.xul überlagern. Sie können Verweise auf beide Dateien in chrome.manifest für Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)
