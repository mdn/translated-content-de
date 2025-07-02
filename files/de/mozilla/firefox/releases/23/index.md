---
title: Firefox 23 für Entwickler
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

## Änderungen für Webentwickler

### Sicherheit

- Sperrung von gemischten Inhalten. Firefox wird keine nicht-sicheren (http) Ressourcen mehr auf sicheren (https) Seiten laden ([Firefox Fehler 834836](https://bugzil.la/834836)).
- Die standardmäßige Syntax von [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.0-Richtlinien ist jetzt implementiert und wird standardmäßig durchgesetzt.

### Entwicklerwerkzeuge

- Ein Netzwerk-Panel wurde zu den Entwicklerwerkzeugen hinzugefügt. Dies ist eine detailliertere Ansicht als die Option "Netz" in der Webkonsole.
- Die Webkonsole wurde in "Konsole" umbenannt und enthält die Option, Sicherheitsfehler/-warnungen zu filtern.
- Die neuen Toolbox-Optionen ermöglichen es Ihnen, Funktionen zu deaktivieren, das hell/dunkel Thema zu wechseln oder Debugging im Chrome/Remote zu aktivieren.

### HTML

- Die Unterstützung für das `<blink>`-Element wurde vollständig entfernt. Das `<blink>`-Tag implementiert jetzt das [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement)-Interface ([Firefox Fehler 857820](https://bugzil.la/857820)).
- Der `range`-Typ des {{HTMLElement("input")}}-Elements ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) wurde standardmäßig aktiviert ([Firefox Fehler 841950](https://bugzil.la/841950)).

### JavaScript

- Die Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann jetzt verwendet werden, um die `length`-Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekts neu zu definieren.
- Die Option zum Deaktivieren von JavaScript, einschließlich der Möglichkeiten zum Verschieben von Fenstern/Ersatz des Kontextmenüs, wurde entfernt. Sie können JavaScript dennoch deaktivieren, indem Sie doppelt auf die Option "javascript.enabled" in about:config klicken.

### DOM

- Das D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent#key_names_and_char_values) wird jetzt unterstützt, aber nur für nicht-druckbare Tasten ([Firefox Fehler 842927](https://bugzil.la/842927)).
- Das `title`-Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist jetzt optional gemäß der aktualisierten DOM-Spezifikation.
- Die Fähigkeit, ein Sidebar-Panel hinzuzufügen (`window.sidebar.addPanel`), wurde entfernt ([Firefox Fehler 691647](https://bugzil.la/691647)).
- Die unpräfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox Fehler 704063](https://bugzil.la/704063)). Die unpräfixierte [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erhält ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält einen Zeitstempel in Millisekunden ([Firefox Fehler 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist jetzt optional ([Firefox Fehler 861605](https://bugzil.la/861605)).
- Die `HTMLMediaElement.initialTime`-Eigenschaft, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox Fehler 742537](https://bugzil.la/742537)).
- Der [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent)-Konstruktor wurde hinzugefügt ([Firefox Fehler 848293](https://bugzil.la/848293)).
- Die [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement)-Eigenschaft wurde implementiert ([Firefox Fehler 848293](https://bugzil.la/848293)).
- Der [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)-Konstruktor wurde hinzugefügt ([Firefox Fehler 848291](https://bugzil.la/848291)).
- Die [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement)-Eigenschaft wurde implementiert ([Firefox Fehler 848291](https://bugzil.la/848291)).
- Die nicht-standardmäßigen `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox Fehler 868751](https://bugzil.la/868751)).

### WebRTC

- Anstatt Benutzernamen in die Eigenschaft `RTCIceServer.url` einzuschließen (wie `stun:username@stunserver.example.com`), müssen Sie jetzt die neue Eigenschaft `RTCIceServer.username` verwenden.

### CSS

- Der Blinkeffekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber weiterhin ein gültiger Wert ([Firefox Fehler 857820](https://bugzil.la/857820)).
- In-Flow {{cssxref("::after")}}- und {{cssxref("::before")}}-Pseudo-Elemente sind jetzt Flex-Elemente ([Firefox Fehler 867454](https://bugzil.la/867454)).
- Die Methode zur Berechnung von [Viewport-Einheiten](/de/docs/Web/CSS/length#viewport-percentage_lengths) wurde geändert. In Verbindung mit `overflow:auto` wird der Platz, der durch eventuelle Scrollleisten eingenommen wird, nicht vom Viewport abgezogen, während er im Fall von `overflow:scroll` abgezogen wird. ([Firefox Fehler 811403](https://bugzil.la/811403))

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}}-Element wurden implementiert ([Firefox Fehler 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}}-Element bestimmt jetzt das sichtbare Kind, wie in der MathML3-Spezifikation beschrieben.

## Änderungen für Add-on- und Mozilla-Entwickler

### Firefox Entwicklerwerkzeuge

Add-ons, die chrome://browser/content/debugger.xul überlagern, müssen jetzt chrome://browser/content/devtools/debugger.xul überlagern. Sie können Referenzen auf beide Dateien in chrome.manifest für die Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)

### Ältere Versionen

{{Firefox_for_developers}}
