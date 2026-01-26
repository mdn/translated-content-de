---
title: Firefox 23 Versionshinweise für Entwickler
short-title: Firefox 23
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

## Änderungen für Webentwickler

### Entwickler-Tools

- Ein Netzwerk-Panel wurde zu den Entwickler-Tools hinzugefügt. Dies ist eine detailliertere Ansicht als die "Netz" Ansicht im Webkonsole.
- Webkonsole wurde in "Konsole" umbenannt und enthält die Option, Sicherheitsfehler/-warnungen zu filtern.
- Mit den neuen Toolbox-Optionen können Sie Funktionen deaktivieren, das Licht/Dunkel-Thema ändern oder Chrome/Remote-Debugging aktivieren.

### HTML

- Die Unterstützung für das `<blink>`-Element ist nun vollständig entfernt. Der `<blink>`-Tag implementiert jetzt die [`HTMLUnknownElement`]-Schnittstelle ([Firefox Fehler 857820](https://bugzil.la/857820)).
- Der `range`-Typ des {{HTMLElement("input")}}-Elements ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) ist standardmäßig aktiviert ([Firefox Fehler 841950](https://bugzil.la/841950)).

### JavaScript

- Die Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann nun verwendet werden, um die `length`-Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekts neu zu definieren.
- Die Option zum Deaktivieren von JavaScript, einschließlich der Optionen zum Verschieben von Fenstern/Ersetzen des Kontextmenüs, wurde entfernt. Sie können JavaScript weiterhin deaktivieren, indem Sie die "javascript.enabled"-Option in about:config doppelklicken.

### DOM

- D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wird jetzt unterstützt, jedoch nur für nicht druckbare Tasten ([Firefox Fehler 842927](https://bugzil.la/842927)).
- Das `title`-Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist jetzt gemäß der aktualisierten DOM-Spezifikation optional.
- Die Fähigkeit, ein Sidebar-Panel (`window.sidebar.addPanel`) hinzuzufügen, wurde entfernt ([Firefox Fehler 691647](https://bugzil.la/691647)).
- Die nicht-präfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox Fehler 704063](https://bugzil.la/704063)). Die nicht-präfixierte [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erhält ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält ein Zeitstempel in Millisekunden ([Firefox Fehler 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist jetzt optional ([Firefox Fehler 861605](https://bugzil.la/861605)).
- Die `HTMLMediaElement.initialTime`-Eigenschaft, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox Fehler 742537](https://bugzil.la/742537)).
- Der [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent)-Konstruktor wurde hinzugefügt ([Firefox Fehler 848293](https://bugzil.la/848293)).
- Die [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement)-Eigenschaft wurde implementiert ([Firefox Fehler 848293](https://bugzil.la/848293)).
- Der [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)-Konstruktor wurde hinzugefügt ([Firefox Fehler 848291](https://bugzil.la/848291)).
- Die [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement)-Eigenschaft wurde implementiert ([Firefox Fehler 848291](https://bugzil.la/848291)).
- Die nicht-standardisierten `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox Fehler 868751](https://bugzil.la/868751)).

### WebRTC

- Anstelle von Benutzernamen in die `RTCIceServer.url`-Eigenschaft einzuschließen (wie beispielsweise `stun:username@stunserver.example.com`), müssen Sie jetzt die neue `RTCIceServer.username`-Eigenschaft verwenden.

### CSS

- Der Blinke-Effekt für `text-decoration: blink;` hat keine Wirkung mehr, ist jedoch immer noch ein gültiger Wert ([Firefox Fehler 857820](https://bugzil.la/857820)).
- In den Fluss integrierte {{cssxref("::after")}}- und {{cssxref("::before")}}-Pseudoelemente sind jetzt Flex-Elemente ([Firefox Fehler 867454](https://bugzil.la/867454)).
- Die Methode zur Berechnung von [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) wurde geändert. In Verbindung mit `overflow:auto` wird der Platz, der von eventuellen Scrollbars eingenommen wird, nicht vom Viewport subtrahiert, während er im Falle von `overflow:scroll` subtrahiert wird. ([Firefox Fehler 811403](https://bugzil.la/811403))

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}}-Element wurden implementiert ([Firefox Fehler 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}}-Element bestimmt nun das sichtbare Kind, wie in der MathML3-Spezifikation beschrieben.

### Sicherheit

- Blockierung gemischter Inhalte. Firefox wird keine unsicheren (http) Ressourcen mehr auf sicheren (https) Seiten laden ([Firefox Fehler 834836](https://bugzil.la/834836)).
- Die standardmäßige Syntax von [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.0-Richtlinien wird nun standardmäßig implementiert und durchgesetzt.

## Änderungen für Addon- und Mozilla-Entwickler

### Firefox Entwickler-Tools

Addons, die chrome://browser/content/debugger.xul überlagern, müssen nun chrome://browser/content/devtools/debugger.xul überlagern. Sie können Verweise auf beide Dateien in chrome.manifest für die Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)
