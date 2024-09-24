---
title: Firefox 23 für Entwickler
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Sicherheit

- Blockierung von gemischten Inhalten. Firefox lädt keine nicht gesicherten (http) Ressourcen auf gesicherten (https) Seiten mehr ([Firefox Bug 834836](https://bugzil.la/834836)).
- Die standardisierte Syntax der [CSP](/de/docs/Web/HTTP/CSP) 1.0 Richtlinien ist jetzt implementiert und wird standardmäßig durchgesetzt.

### Entwicklerwerkzeuge

- Ein Netzwerk-Panel wurde zu den Entwicklerwerkzeugen hinzugefügt. Dies ist eine detailliertere Ansicht als die "Netz" Ansicht im Web-Konsolen.
- Webkonsolen wurde zu "Konsole" umbenannt und enthält die Option, Sicherheitsfehler /-warnungen zu filtern.
- Die neuen Toolbox-Optionen ermöglichen es Ihnen, Features zu deaktivieren, das Licht-/Dunkel-Thema zu ändern oder Chrome-/Remote-Debugging zu aktivieren.

### HTML

- Die Unterstützung für das `<blink>`-Element wurde vollständig entfernt. Das `<blink>`-Tag implementiert jetzt das {{domxref("HTMLUnknownElement")}}-Interface ([Firefox Bug 857820](https://bugzil.la/857820)).
- Der `range`-Typ des {{HTMLElement("input")}} Elements ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) wurde standardmäßig aktiviert ([Firefox Bug 841950](https://bugzil.la/841950)).

### JavaScript

- Die Methode [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) kann jetzt verwendet werden, um die `length`-Eigenschaft eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Objekts neu zu definieren.
- Die Option, JavaScript zu deaktivieren, einschließlich der Optionen, Fenster zu verschieben / Kontextmenüs zu ersetzen, wurde entfernt. Sie können JavaScript jedoch weiterhin deaktivieren, indem Sie die Option "javascript.enabled" in about:config doppelt klicken.

### DOM

- D3E [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent#key_names_and_char_values) wird jetzt unterstützt, jedoch nur für nicht druckbare Tasten ([Firefox Bug 842927](https://bugzil.la/842927)).
- Das `title`-Attribut von {{domxref("DOMImplementation.createHTMLDocument")}} ist jetzt optional, gemäß der aktualisierten DOM-Spezifikation.
- Die Möglichkeit, ein Sidebar-Panel hinzuzufügen (`window.sidebar.addPanel`), wurde entfernt ([Firefox Bug 691647](https://bugzil.la/691647)).
- Die nicht vorgefertigten {{domxref("Window.requestAnimationFrame")}} und {{domxref("Window.cancelAnimationFrame")}} Methoden wurden hinzugefügt ([Firefox Bug 704063](https://bugzil.la/704063)). Die nicht vorgefertigte {{domxref("Window.requestAnimationFrame")}} erhält ein {{domxref("DOMHighResTimeStamp")}} als Argument; die vorgefertigte Version erhält einen Zeitstempel in Millisekunden ([Firefox Bug 753453](https://bugzil.la/753453)).
- Das Textargument für {{domxref("window.alert")}} und {{domxref("window.confirm")}} ist jetzt optional ([Firefox Bug 861605](https://bugzil.la/861605)).
- Die `HTMLMediaElement.initialTime`-Eigenschaft, die aus der Spezifikation entfernt wurde, wird nicht mehr unterstützt ([Firefox Bug 742537](https://bugzil.la/742537)).
- Der {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}} Konstruktor wurde hinzugefügt ([Firefox Bug 848293](https://bugzil.la/848293)).
- Die {{domxref("AnimationEvent.pseudoElement")}} Eigenschaft wurde implementiert ([Firefox Bug 848293](https://bugzil.la/848293)).
- Der {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}} Konstruktor wurde hinzugefügt ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die {{domxref("TransitionEvent.pseudoElement")}} Eigenschaft wurde implementiert ([Firefox Bug 848291](https://bugzil.la/848291)).
- Die nicht standardisierten `TransitionEvent.initTransitionEvent()` und `AnimationEvent.initAnimationEvent()` wurden entfernt ([Firefox Bug 868751](https://bugzil.la/868751)).

### WebRTC

- Anstatt Benutzernamen in der `RTCIceServer.url` Eigenschaft einzuschließen (wie zum Beispiel stun:username\@stunserver.example.com), müssen Sie jetzt die neue `RTCIceServer.username` Eigenschaft verwenden.

### CSS

- Der Blink-Effekt für `text-decoration: blink;` hat keine Wirkung mehr, ist aber weiterhin ein gültiger Wert ([Firefox Bug 857820](https://bugzil.la/857820)).
- In-Flow {{cssxref("::after")}} und {{cssxref("::before")}} Pseudo-Elemente sind jetzt Flex-Elemente ([Firefox Bug 867454](https://bugzil.la/867454)).
- Die Art und Weise, wie [Viewport-Einheiten](/de/docs/Web/CSS/length#viewport-percentage_lengths) berechnet werden, hat sich geändert. In Verbindung mit `overflow:auto` wird der durch eventuelle Scrollbalken eingenommene Platz nicht vom Viewport abgezogen, während im Fall von `overflow:scroll` dies der Fall ist ([Firefox Bug 811403](https://bugzil.la/811403)).

### MathML

- Negative Breiten für das {{MathMLElement("mspace")}} Element wurden implementiert ([Firefox Bug 717546](https://bugzil.la/717546)).
- Das {{MathMLElement("semantics")}} Element bestimmt jetzt das sichtbare Kind, wie in der MathML3-Spezifikation beschrieben.

## Änderungen für Addon- und Mozilla-Entwickler

### Firefox-Entwicklerwerkzeuge

Addons, die chrome://browser/content/debugger.xul überlagern, müssen jetzt chrome://browser/content/devtools/debugger.xul überlagern. Sie können Verweise auf beide Dateien in chrome.manifest für die Kompatibilität hinzufügen.

## Siehe auch

- [Firefox 23 Aurora Notizen](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)

### Ältere Versionen

{{Firefox_for_developers}}
