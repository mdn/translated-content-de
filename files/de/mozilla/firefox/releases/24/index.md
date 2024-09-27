---
title: Firefox 24 für Entwickler
slug: Mozilla/Firefox/Releases/24
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### CSS

- Die beiden Werte `-moz-zoom-in` und `-moz-zoom-out` der {{cssxref("cursor")}}-Eigenschaft wurden ohne Präfix zu `zoom-in` und `zoom-out` geändert ([Firefox Fehler 772153](https://bugzil.la/772153)).
- Um der Spezifikation zu entsprechen, können die Schlüsselwörter `not`, `only`, `and` und `or` nicht mehr als Medientypen verwendet werden ([Firefox Fehler 757554](https://bugzil.la/757554)).

### HTML

- Das {{HTMLElement("track")}}-Element wurde hinter der `media.webvtt.enabled`-Einstellung implementiert und ist standardmäßig deaktiviert. ([Firefox Fehler 833385](https://bugzil.la/833385)).

### JavaScript

- [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) befinden sich nicht mehr automatisch im Strict-Modus, es sei denn, dieser wird ausdrücklich mit `"use strict"` angefordert ([Firefox Fehler 852762](https://bugzil.la/852762)).
- Die [`String.prototype.repeat`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) JS-Methode wurde implementiert ([Firefox Fehler 815431](https://bugzil.la/815431)).
- Die Methoden {{jsxref("Set.prototype.values()")}}, {{jsxref("Set/values", "Set.prototype.keys()")}} und {{jsxref("Set.prototype.entries()")}} für {{jsxref("Set")}}-Objekte wurden implementiert ([Firefox Fehler 869996](https://bugzil.la/869996)).

### DOM

- Unterstützung für den [`Range()`](/de/docs/Web/API/Range/Range)-Konstruktor wurde hinzugefügt ([Firefox Fehler 868999](https://bugzil.la/868999)).
- Unterstützung für den [`Text()`](/de/docs/Web/API/Text/Text)-Konstruktor wurde hinzugefügt ([Firefox Fehler 869000](https://bugzil.la/869000)).
- Unterstützung für den [`Comment()`](/de/docs/Web/API/Comment/Comment)-Konstruktor wurde hinzugefügt ([Firefox Fehler 869006](https://bugzil.la/869006)).
- Unterstützung für den [`DocumentFragment()`](/de/docs/Web/API/DocumentFragment/DocumentFragment)-Konstruktor wurde hinzugefügt ([Firefox Fehler 869002](https://bugzil.la/869002)).
- Das [`FocusEvent`](/de/docs/Web/API/FocusEvent)-Interface wurde implementiert ([Firefox Fehler 855741](https://bugzil.la/855741)).
- Unterstützung für die [`ChildNode.remove()`](/de/docs/Web/API/Element/remove)-Methode wurde hinzugefügt ([Firefox Fehler 856629](https://bugzil.la/856629)).
- Die WebVTT-Interfaces, die mit dem {{HTMLElement("track")}}-Element verbunden sind, [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement), [`TextTrack`](/de/docs/Web/API/TextTrack), [`TextTrackCue`](/de/docs/Web/API/TextTrackCue), [`TextTrackList`](/de/docs/Web/API/TextTrackList) und [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), wurden hinter der `media.webvtt.enabled`-Eigenschaft implementiert und standardmäßig auf `false` gesetzt ([Firefox Fehler 833385](https://bugzil.la/833385)).
- Das [`Gamepad`](/de/docs/Web/API/Gamepad)-Interface und [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) wurden hinter der `dom.gamepad.enabled`-Eigenschaft implementiert und standardmäßig auf `false` gesetzt ([Firefox Fehler 690935](https://bugzil.la/690935)).
- Nur auf Desktop-Firefox kann `HTMLCanvasElement.getContext()` jetzt den Wert `webgl` neben `experimental-webgl` annehmen ([Firefox Fehler 870232](https://bugzil.la/870232)).
- Die nicht standardisierte Methode `mozLoadFrom()` von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde entfernt ([Firefox Fehler 877135](https://bugzil.la/877135)).

### Entwickler-Werkzeuge

- Der Netzwerkinspektor ermöglicht es nun, nach Inhaltstyp (CSS/Bild/Schriftart usw.) zu filtern und die relevante Größe und Ladezeiten zu sehen.
- Das Devtools-Einstellungsfeld auf der linken Seite ermöglicht es, JavaScript vorübergehend zu deaktivieren/aktivieren.
- Erweiterungsentwickler können die neue [Browser-Konsole](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console/) für Skripte auf Chrome-Ebene verwenden (ersetzt Fehlerkonsole).
- Die Quellkartensyntax wurde geändert, um `//#` anstelle von `//@` zu verwenden ([Firefox Fehler 870361](https://bugzil.la/870361)).

### MathML

- Das `dir`-Attribut zur Steuerung der Ausrichtung von Formeln, z.B. auf {{MathMLElement("math")}}- oder {{MathMLElement("mrow")}}-Elementen, entspricht nun der Verwendung der {{cssxref("direction")}}-CSS-Eigenschaft.
- Das Gleichheitszeichen ("=") ist jetzt [dehnbar](/de/docs/Web/MathML/Element/mo#stretchy).
- Der "`updiagonalarrow`"-Wert für das `notation`-Attribut auf {{MathMLElement("menclose")}}-Elementen wurde hinzugefügt.

## Änderungen für Add-on- und Mozilla-Entwickler

- Doc Shells verfügen jetzt über das `allowMedia`-Attribut, um Medienwiedergabe zu deaktivieren ([Firefox Fehler 759964](https://bugzil.la/759964)).
- Sherlock-Suchplugins im Anwendungsverzeichnis oder Profil werden nicht mehr geladen ([Firefox Fehler 862143](https://bugzil.la/862143)).

## Weitere Informationen

- [Firefox 24 Aurora Hinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)

## Ältere Versionen

{{Firefox_for_developers}}
