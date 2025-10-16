---
title: Firefox 23 Versionshinweise für Entwickler
short-title: Firefox 23
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

## Änderungen für Webentwickler

### Sicherheit

- Blockierung gemischter Inhalte. Firefox wird keine nicht sicheren (http) Ressourcen mehr auf sicheren (https) Seiten laden ([Firefox Bug 834836](https://bugzil.la/834836)).
- Die Standardsyntax von [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.0 Richtlinien wird jetzt standardmäßig implementiert und erzwungen.

### Entwicklerwerkzeuge

- Ein Netzwerk-Panel wurde zu den Entwicklerwerkzeugen hinzugefügt. Dies ist eine detailliertere Ansicht als die Option "Netz" in der Web-Konsole.
- Die Web-Konsole wurde in "Konsole" umbenannt und enthält die Möglichkeit, Sicherheitsfehler/-warnungen zu filtern.
- Die neuen Werkzeugkasten-Optionen ermöglichen das Deaktivieren von Funktionen, das Ändern des Hell-/Dunkel-Themas oder das Aktivieren des Chrome-/Remote-Debuggings.

### HTML

- Die Unterstützung des `<blink>`-Elements ist nun vollständig entfernt. Das `<blink>`-Tag implementiert jetzt das [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement)-Interface ([Firefox Bug 857820](https://bugzil.la/857820)).
- Der `range`-Typ des {{HTMLElement("input")}}-Elements ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) wurde standardmäßig aktiviert ([Firefox Bug 841950](https://bugzil.la/841950)).

### JavaScript

- Die Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann jetzt verwendet werden, um die `length`-Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekts neu zu definieren.
- Die Option zum Deaktivieren von JavaScript, einschließlich der Optionen zum Erlauben des Verschiebens von Fenstern/Ersetzens des Kontextmenüs, wurden entfernt. Sie können JavaScript weiterhin deaktivieren, indem Sie im about:config doppelt auf die Option "javascript.enabled" klicken.

### DOM

- Die D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wird nun unterstützt, jedoch nur für nicht druckbare Tasten ([Firefox Bug 842927](https://bugzil.la/842927)).
- Das `title`-Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist jetzt optional gemäß der aktualisierten DOM-Spezifikation.
- Die Fähigkeit, ein Sidebar-Panel hinzuzufügen (`window.sidebar.addPanel`), wurde entfernt ([Firefox Bug 691647](https://bugzil.la/691647)).
- Die unpräfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox Bug 704063](https://bugzil.la/704063)). Die unpräfixierte [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Methode erhält einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält einen Zeitstempel in Millisekunden ([Firefox Bug 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist jetzt optional ([Firefox Bug 861605](https://bugzil.la/861605)).
- Die Eigenschaft `HTMLMediaElement.initialTime`, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox Bug 742537](https://bugzil.la/742537)).
- Der Konstruktor [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent) wurde hinzugefügt ([Firefox Bug 848293](https://bugzil.la/848293)).
- Die Eigenschaft [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) wurde implementiert ([Firefox Bug 848293](https://bugzil.la/848293)).
- Der Konstruktor [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent) wurde hinzugefügt ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die Eigenschaft [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) wurde implementiert ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die nicht standardmäßigen `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox Bug 868751](https://bugzil.la/868751)).

### WebRTC

- Statt Benutzernamen in der Eigenschaft `RTCIceServer.url` anzugeben (wie `stun:username@stunserver.example.com`), müssen Sie jetzt die neue Eigenschaft `RTCIceServer.username` verwenden.

### CSS

- Der Blink-Effekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber immer noch ein gültiger Wert ([Firefox Bug 857820](https://bugzil.la/857820)).
- In-Flow {{cssxref("::after")}} und {{cssxref("::before")}} Pseudoelemente sind jetzt Flex-Items ([Firefox Bug 867454](https://bugzil.la/867454)).
- Die Berechnung der [Ansichtshöhen-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) wurde geändert. In Verbindung mit `overflow:auto` wird der von eventuellen Scrollleisten eingenommene Raum nicht vom Ansichtsfenster abgezogen, während er bei `overflow:scroll` abgezogen wird ([Firefox Bug 811403](https://bugzil.la/811403)).

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}}-Element wurden implementiert ([Firefox Bug 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}}-Element bestimmt jetzt das sichtbare Kind gemäß der MathML3-Spezifikation.

## Änderungen für Addon- und Mozilla-Entwickler

### Firefox Entwicklerwerkzeuge

Addons, die chrome://browser/content/debugger.xul überlagern, müssen jetzt chrome://browser/content/devtools/debugger.xul überlagern. Sie können Verweise auf beide Dateien in chrome.manifest für die Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)
