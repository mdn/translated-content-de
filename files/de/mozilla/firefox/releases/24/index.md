---
title: Firefox 24 für Entwickler
slug: Mozilla/Firefox/Releases/24
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### CSS

- Die zwei Werte `-moz-zoom-in` und `-moz-zoom-out` der {{cssxref("cursor")}}-Eigenschaft wurden auf `zoom-in` und `zoom-out` umbenannt ([Firefox-Bug 772153](https://bugzil.la/772153)).
- Entsprechend der Spezifikation können die Schlüsselwörter `not`, `only`, `and` und `or` nicht mehr als Medientypen verwendet werden ([Firefox-Bug 757554](https://bugzil.la/757554)).

### HTML

- Das {{HTMLElement("track")}}-Element wurde hinter der Einstellung `media.webvtt.enabled` implementiert und ist standardmäßig deaktiviert. ([Firefox-Bug 833385](https://bugzil.la/833385)).

### JavaScript

- [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) befinden sich nicht mehr automatisch im Strict-Modus, es sei denn, dies wird ausdrücklich mit `"use strict"` angefordert ([Firefox-Bug 852762](https://bugzil.la/852762)).
- Die JS-Methode [`String.prototype.repeat`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) wurde implementiert ([Firefox-Bug 815431](https://bugzil.la/815431)).
- Die Methoden {{jsxref("Set.prototype.values()")}}, {{jsxref("Set/values", "Set.prototype.keys()")}} und {{jsxref("Set.prototype.entries()")}} für {{jsxref("Set")}}-Objekte wurden implementiert ([Firefox-Bug 869996](https://bugzil.la/869996)).

### DOM

- Unterstützung für den [`Range()`](/de/docs/Web/API/Range/Range)-Konstruktor wurde hinzugefügt ([Firefox-Bug 868999](https://bugzil.la/868999)).
- Unterstützung für den [`Text()`](/de/docs/Web/API/Text/Text)-Konstruktor wurde hinzugefügt ([Firefox-Bug 869000](https://bugzil.la/869000)).
- Unterstützung für den [`Comment()`](/de/docs/Web/API/Comment/Comment)-Konstruktor wurde hinzugefügt ([Firefox-Bug 869006](https://bugzil.la/869006)).
- Unterstützung für den [`DocumentFragment()`](/de/docs/Web/API/DocumentFragment/DocumentFragment)-Konstruktor wurde hinzugefügt ([Firefox-Bug 869002](https://bugzil.la/869002)).
- Das [`FocusEvent`](/de/docs/Web/API/FocusEvent)-Interface wurde implementiert ([Firefox-Bug 855741](https://bugzil.la/855741)).
- Unterstützung für die Methode [`ChildNode.remove()`](/de/docs/Web/API/Element/remove) wurde hinzugefügt ([Firefox-Bug 856629](https://bugzil.la/856629)).
- Die WebVTT-Interfaces, die sich auf das {{HTMLElement("track")}}-Element beziehen, [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement), [`TextTrack`](/de/docs/Web/API/TextTrack), [`TextTrackCue`](/de/docs/Web/API/TextTrackCue), [`TextTrackList`](/de/docs/Web/API/TextTrackList) und [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList) wurden hinter der Eigenschaft `media.webvtt.enabled` implementiert, standardmäßig auf `false` gesetzt ([Firefox-Bug 833385](https://bugzil.la/833385)).
- Das [`Gamepad`](/de/docs/Web/API/Gamepad)-Interface und [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) wurden hinter der Eigenschaft `dom.gamepad.enabled` implementiert, standardmäßig auf `false` gesetzt ([Firefox-Bug 690935](https://bugzil.la/690935)).
- Im Desktop-Firefox kann `HTMLCanvasElement.getContext()` nun den Wert `webgl` zusätzlich zu `experimental-webgl` annehmen ([Firefox-Bug 870232](https://bugzil.la/870232)).
- Die nicht standardisierte Methode `mozLoadFrom()` von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde entfernt ([Firefox-Bug 877135](https://bugzil.la/877135)).

### Entwickler-Werkzeuge

- Der Netzwerk-Inspektor erlaubt es jetzt, nach Inhaltstyp (CSS/Bild/Schriftart etc.) zu filtern und zeigt die relevante Größe und Ladezeiten an.
- Im Optionen-Panel der Entwickler-Werkzeuge auf der linken Seite können Sie JavaScript vorübergehend deaktivieren/aktivieren.
- Erweiterungsentwickler können die neue [Browser-Konsole](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console/) für Chrome-Level-Skripte verwenden (ersetzt die Fehlerkonsole).
- Die Source-Map-Syntax wurde geändert, um `//#` anstelle von `//@` zu verwenden ([Firefox-Bug 870361](https://bugzil.la/870361)).

### MathML

- Das `dir`-Attribut zur Steuerung der Richtung von Formeln auf z.B. {{MathMLElement("math")}}- oder {{MathMLElement("mrow")}}-Elementen ist nun gleichbedeutend mit der Verwendung der {{cssxref("direction")}}-CSS-Eigenschaft.
- Das Gleichheitszeichen ("=") ist jetzt [dehnbar](/de/docs/Web/MathML/Reference/Element/mo#stretchy).
- Der Wert `"updiagonalarrow"` für das `notation`-Attribut auf {{MathMLElement("menclose")}}-Elementen wurde hinzugefügt.

## Änderungen für Add-on- und Mozilla-Entwickler

- Doc Shells haben jetzt das `allowMedia`-Attribut zum Deaktivieren der Medienwiedergabe ([Firefox-Bug 759964](https://bugzil.la/759964)).
- Sherlock-Such-Plugins im Anwendungsverzeichnis oder Profil werden nicht mehr geladen ([Firefox-Bug 862143](https://bugzil.la/862143)).

## Siehe auch

- [Firefox 24 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)

## Ältere Versionen

{{Firefox_for_developers}}
