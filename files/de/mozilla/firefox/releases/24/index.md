---
title: Firefox 24 für Entwickler
slug: Mozilla/Firefox/Releases/24
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### CSS

- Die beiden Werte `-moz-zoom-in` und `-moz-zoom-out` der Eigenschaft {{cssxref("cursor")}} wurden auf `zoom-in` und `zoom-out` ohne Präfix geändert ([Firefox Bug 772153](https://bugzil.la/772153)).
- Um die Spezifikation zu erfüllen, können die Schlüsselwörter `not`, `only`, `and` und `or` nicht mehr als Medientypen verwendet werden ([Firefox Bug 757554](https://bugzil.la/757554)).

### HTML

- Das Element {{HTMLElement("track")}} wurde hinter der Präferenz `media.webvtt.enabled` implementiert und ist standardmäßig deaktiviert. ([Firefox Bug 833385](https://bugzil.la/833385)).

### JavaScript

- [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) sind nicht mehr automatisch im Strict-Modus, es sei denn, dieser wird explizit mit `"use strict"` angefordert ([Firefox Bug 852762](https://bugzil.la/852762)).
- Die JS-Methode [`String.prototype.repeat`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) wurde implementiert ([Firefox Bug 815431](https://bugzil.la/815431)).
- Die Methoden {{jsxref("Set.prototype.values()")}}, {{jsxref("Set/values", "Set.prototype.keys()")}} und {{jsxref("Set.prototype.entries()")}} auf {{jsxref("Set")}} Objekten wurden implementiert ([Firefox Bug 869996](https://bugzil.la/869996)).

### DOM

- Die Unterstützung für den [`Range()`](/de/docs/Web/API/Range/Range) Konstruktor wurde hinzugefügt ([Firefox Bug 868999](https://bugzil.la/868999)).
- Die Unterstützung für den [`Text()`](/de/docs/Web/API/Text/Text) Konstruktor wurde hinzugefügt ([Firefox Bug 869000](https://bugzil.la/869000)).
- Die Unterstützung für den [`Comment()`](/de/docs/Web/API/Comment/Comment) Konstruktor wurde hinzugefügt ([Firefox Bug 869006](https://bugzil.la/869006)).
- Die Unterstützung für den [`DocumentFragment()`](/de/docs/Web/API/DocumentFragment/DocumentFragment) Konstruktor wurde hinzugefügt ([Firefox Bug 869002](https://bugzil.la/869002)).
- Das [`FocusEvent`](/de/docs/Web/API/FocusEvent) Interface wurde implementiert ([Firefox Bug 855741](https://bugzil.la/855741)).
- Die Unterstützung für die Methode [`ChildNode.remove()`](/de/docs/Web/API/Element/remove) wurde hinzugefügt ([Firefox Bug 856629](https://bugzil.la/856629)).
- Die WebVTT-Interfaces, die mit dem {{HTMLElement("track")}} Element zusammenhängen, [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement), [`TextTrack`](/de/docs/Web/API/TextTrack), [`TextTrackCue`](/de/docs/Web/API/TextTrackCue), [`TextTrackList`](/de/docs/Web/API/TextTrackList) und [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList) wurden hinter der Eigenschaft `media.webvtt.enabled` implementiert, die standardmäßig auf `false` gesetzt ist ([Firefox Bug 833385](https://bugzil.la/833385)).
- Das [`Gamepad`](/de/docs/Web/API/Gamepad) Interface und [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) wurden hinter der Eigenschaft `dom.gamepad.enabled` implementiert, standardmäßig auf `false` ([Firefox Bug 690935](https://bugzil.la/690935)).
- Nur im Desktop-Firefox kann `HTMLCanvasElement.getContext()` jetzt den Wert `webgl` annehmen, zusätzlich zu `experimental-webgl` ([Firefox Bug 870232](https://bugzil.la/870232)).
- Die nicht standardisierte Methode `mozLoadFrom()` von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde entfernt ([Firefox Bug 877135](https://bugzil.la/877135)).

### Entwickler-Tools

- Der Netzwerkinspektor erlaubt es jetzt, nach Inhaltstyp (CSS/Bild/Schriftart usw.) zu filtern und die entsprechende Größe und Ladezeiten zu sehen.
- Das DevTools-Optionspanel auf der linken Seite ermöglicht es, JavaScript vorübergehend zu deaktivieren/aktivieren.
- Erweiterungsentwickler können die neue [Browser-Konsole](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console/) für Chrome-Level-Skripte verwenden (ersetzt die Fehlerkonsole).
- Die Syntax der Quellenkarte wurde geändert, um `//#` statt `//@` zu verwenden ([Firefox Bug 870361](https://bugzil.la/870361)).

### MathML

- Das `dir`-Attribut zur Steuerung der Ausrichtung von Formeln z.B. auf {{MathMLElement("math")}} oder {{MathMLElement("mrow")}} Elementen ist jetzt äquivalent zur Verwendung der CSS-Eigenschaft {{cssxref("direction")}}.
- Das Gleichheitszeichen ("=") ist jetzt [dehnbar](/de/docs/Web/MathML/Element/mo#stretchy).
- Der Wert "`updiagonalarrow`" für das `notation`-Attribut auf {{MathMLElement("menclose")}} Elementen wurde hinzugefügt.

## Änderungen für Add-on- und Mozilla-Entwickler

- Doc Shells haben jetzt das `allowMedia` Attribut, um das Abspielen von Medien zu deaktivieren ([Firefox Bug 759964](https://bugzil.la/759964)).
- Sherlock-Suchplugins im Anwendungsverzeichnis oder Profil werden nicht mehr geladen ([Firefox Bug 862143](https://bugzil.la/862143)).

## Siehe auch

- [Firefox 24 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)

## Ältere Versionen

{{Firefox_for_developers}}
