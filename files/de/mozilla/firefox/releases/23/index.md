---
title: Firefox 23 für Entwickler
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

## Änderungen für Webentwickler

### Sicherheit

- Blockierung von gemischtem Inhalt. Firefox wird keine ungesicherten (http) Ressourcen auf sicheren (https) Seiten mehr laden ([Firefox-Bug 834836](https://bugzil.la/834836)).
- Die Standardsyntax der [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.0-Richtlinien ist jetzt implementiert und wird standardmäßig durchgesetzt.

### Entwicklerwerkzeuge

- Ein Netzwerk-Panel wurde zu den Entwicklerwerkzeugen hinzugefügt. Dies ist eine detailliertere Ansicht als die "Netz"-Ansicht im Webkonsole.
- Das Webkonsole wurde in "Konsole" umbenannt und enthält die Möglichkeit, Sicherheitsfehler/-warnungen zu filtern.
- Die neuen Werkzeugkasten-Optionen ermöglichen es, Funktionen zu deaktivieren, Themen zwischen hell/dunkel zu wechseln oder Chrome/Remote-Debugging zu aktivieren.

### HTML

- Die Unterstützung für das `<blink>`-Element ist jetzt vollständig eingestellt. Der `<blink>`-Tag implementiert jetzt die [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement)-Schnittstelle ([Firefox-Bug 857820](https://bugzil.la/857820)).
- Der `range`-Typ des {{HTMLElement("input")}}-Elements ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) ist standardmäßig aktiviert ([Firefox-Bug 841950](https://bugzil.la/841950)).

### JavaScript

- Die Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann jetzt verwendet werden, um die `length`-Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekts neu zu definieren.
- Die Option, JavaScript zu deaktivieren, einschließlich der Optionen, Fensterverschiebungen/Ersetzung von Kontextmenüs zu erlauben, wurde entfernt. Sie können JavaScript jedoch weiterhin deaktivieren, indem Sie doppelt auf die Option "javascript.enabled" in about:config klicken.

### DOM

- D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wird jetzt unterstützt, jedoch nur für nicht-druckbare Tasten ([Firefox-Bug 842927](https://bugzil.la/842927)).
- Das `title`-Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist nun optional gemäß der aktualisierten DOM-Spezifikation.
- Die Fähigkeit, ein Seitenleisten-Panel (`window.sidebar.addPanel`) hinzuzufügen, wurde entfernt ([Firefox-Bug 691647](https://bugzil.la/691647)).
- Die unpräfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox-Bug 704063](https://bugzil.la/704063)). Die unpräfixierte [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erhält ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält einen Zeitstempel in Millisekunden ([Firefox-Bug 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist jetzt optional ([Firefox-Bug 861605](https://bugzil.la/861605)).
- Die Eigenschaft `HTMLMediaElement.initialTime`, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox-Bug 742537](https://bugzil.la/742537)).
- Der Konstruktor [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent) wurde hinzugefügt ([Firefox-Bug 848293](https://bugzil.la/848293)).
- Die Eigenschaft [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) wurde implementiert ([Firefox-Bug 848293](https://bugzil.la/848293)).
- Der Konstruktor [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent) wurde hinzugefügt ([Firefox-Bug 848291](https://bugzil.la/848291)).
- Die Eigenschaft [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) wurde implementiert ([Firefox-Bug 848291](https://bugzil.la/848291)).
- Die nicht-standardisierten `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox-Bug 868751](https://bugzil.la/868751)).

### WebRTC

- Anstatt Benutzernamen in der Eigenschaft `RTCIceServer.url` einzuschließen (wie `stun:username@stunserver.example.com`), müssen Sie jetzt die neue Eigenschaft `RTCIceServer.username` verwenden.

### CSS

- Der Blink-Effekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber weiterhin ein gültiger Wert ([Firefox-Bug 857820](https://bugzil.la/857820)).
- In Fluss befindliche {{cssxref("::after")}} und {{cssxref("::before")}} Pseudoelemente sind nun Flex-Elemente ([Firefox-Bug 867454](https://bugzil.la/867454)).
- Die Methode zur Berechnung von [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) wurde geändert. In Verbindung mit `overflow:auto` wird der Platz, den eventuelle Scrollleisten einnehmen, nicht vom Viewport abgezogen, während es im Fall von `overflow:scroll` der Fall ist. ([Firefox-Bug 811403](https://bugzil.la/811403))

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}}-Element wurden implementiert ([Firefox-Bug 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}}-Element bestimmt nun das sichtbare Kind, wie in der MathML3-Spezifikation beschrieben.

## Änderungen für Add-on- und Mozilla-Entwickler

### Firefox-Entwicklerwerkzeuge

Addons, die chrome://browser/content/debugger.xul überlagern, müssen nun chrome://browser/content/devtools/debugger.xul überlagern. Sie können Verweise auf beide Dateien in chrome.manifest für die Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)

### Ältere Versionen

{{Firefox_for_developers}}
