---
title: Firefox 23 für Entwickler
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Sicherheit

- Blockierung von gemischten Inhalten. Firefox wird keine nicht sicheren (http) Ressourcen auf sicheren (https) Seiten mehr laden ([Firefox Fehler 834836](https://bugzil.la/834836)).
- Die Standardsyntax von [CSP](/de/docs/Web/HTTP/CSP) 1.0 Richtlinien ist jetzt implementiert und standardmäßig durchgesetzt.

### Entwickler-Tools

- Ein Netzwerk-Panel wurde zu den Entwickler-Tools hinzugefügt. Dies ist eine detailliertere Ansicht als die "Netz" Ansicht im Webkonsolen-Menü.
- Die Webkonsole wurde in "Konsole" umbenannt und enthält nun die Option, Sicherheitsfehler/-warnungen zu filtern.
- Mit den neuen Werkzeugkasten-Optionen können Sie Funktionen deaktivieren, das Hell-/Dunkel-Thema ändern oder Chrome/Remote-Debugging aktivieren.

### HTML

- Die Unterstützung des `<blink>` Elements wurde nun vollständig entfernt. Der `<blink>` Tag implementiert jetzt die [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) Schnittstelle ([Firefox Fehler 857820](https://bugzil.la/857820)).
- Der `range` Typ des {{HTMLElement("input")}} Elements ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) ist nun standardmäßig aktiviert ([Firefox Fehler 841950](https://bugzil.la/841950)).

### JavaScript

- Die [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) Methode kann jetzt verwendet werden, um die `length` Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Objekts neu zu definieren.
- Die Option, JavaScript zu deaktivieren, einschließlich der Optionen, Fensterbewegungen zu erlauben/Kontextmenü zu ersetzen, wurde entfernt. Sie können JavaScript jedoch weiterhin deaktivieren, indem Sie doppelt auf die "javascript.enabled" Option in about:config klicken.

### DOM

- D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent#key_names_and_char_values) wird jetzt unterstützt, aber nur für nicht-druckbare Tasten ([Firefox Fehler 842927](https://bugzil.la/842927)).
- Das `title` Attribut von [`DOMImplementation.createHTMLDocument`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ist jetzt optional gemäß der aktualisierten DOM-Spezifikation.
- Die Fähigkeit, ein Seitenleisten-Panel (`window.sidebar.addPanel`) hinzuzufügen, wurde entfernt ([Firefox Fehler 691647](https://bugzil.la/691647)).
- Die unpräfixierten Methoden [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) wurden hinzugefügt ([Firefox Fehler 704063](https://bugzil.la/704063)). Das unpräfixierte [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erhält ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) als Argument; die präfixierte Version erhält einen Zeitstempel in Millisekunden ([Firefox Fehler 753453](https://bugzil.la/753453)).
- Das Textargument für [`window.alert`](/de/docs/Web/API/Window/alert) und [`window.confirm`](/de/docs/Web/API/Window/confirm) ist jetzt optional ([Firefox Fehler 861605](https://bugzil.la/861605)).
- Die `HTMLMediaElement.initialTime` Eigenschaft, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox Fehler 742537](https://bugzil.la/742537)).
- Der [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent) Konstruktor wurde hinzugefügt ([Firefox Fehler 848293](https://bugzil.la/848293)).
- Die [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) Eigenschaft wurde implementiert ([Firefox Fehler 848293](https://bugzil.la/848293)).
- Der [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent) Konstruktor wurde hinzugefügt ([Firefox Fehler 848291](https://bugzil.la/848291)).
- Die [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft wurde implementiert ([Firefox Fehler 848291](https://bugzil.la/848291)).
- Die nicht standardmäßigen `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox Fehler 868751](https://bugzil.la/868751)).

### WebRTC

- Anstatt Benutzernamen in die `RTCIceServer.url` Eigenschaft einzuschließen (wie `stun:username@stunserver.example.com`), sollten Sie jetzt die neue `RTCIceServer.username` Eigenschaft verwenden.

### CSS

- Der Blink-Effekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber immer noch ein gültiger Wert ([Firefox Fehler 857820](https://bugzil.la/857820)).
- In den Fluss eingefügte {{cssxref("::after")}} und {{cssxref("::before")}} Pseudo-Elemente sind jetzt Flex-Elemente ([Firefox Fehler 867454](https://bugzil.la/867454)).
- Die Berechnungsart von [Viewport-Einheiten](/de/docs/Web/CSS/length#viewport-percentage_lengths) wurde geändert. Im Zusammenhang mit `overflow:auto` wird der Platzbedarf durch eventuelle Scrollleisten nicht vom Viewport abgezogen, wohingegen er bei `overflow:scroll` abgezogen wird. ([Firefox Fehler 811403](https://bugzil.la/811403))

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}} Element wurden implementiert ([Firefox Fehler 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}} Element bestimmt nun das sichtbare Kind, wie in der MathML3-Spezifikation beschrieben.

## Änderungen für Addon- und Mozilla-Entwickler

### Firefox Entwickler-Tools

Addons, die chrome://browser/content/debugger.xul überlagern, müssen nun chrome://browser/content/devtools/debugger.xul überlagern. Sie können Verweise auf beide Dateien in chrome.manifest für die Kompatibilität aufnehmen.

## Siehe auch

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)

### Ältere Versionen

{{Firefox_for_developers}}
