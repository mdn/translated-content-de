---
title: Firefox 24 für Entwickler
short-title: Firefox 24
slug: Mozilla/Firefox/Releases/24
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 24 wurde am 17. September 2013 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### CSS

- Die beiden Werte `-moz-zoom-in` und `-moz-zoom-out` der {{cssxref("cursor")}}-Eigenschaft wurden auf `zoom-in` und `zoom-out` umgestellt ([Firefox-Bug 772153](https://bugzil.la/772153)).
- Um der Spezifikation zu entsprechen, können die Schlüsselwörter `not`, `only`, `and` und `or` nicht mehr als Medientypen verwendet werden ([Firefox-Bug 757554](https://bugzil.la/757554)).

### HTML

- Das {{HTMLElement("track")}}-Element wurde hinter der `media.webvtt.enabled`-Einstellung implementiert und ist standardmäßig deaktiviert. ([Firefox-Bug 833385](https://bugzil.la/833385)).

### JavaScript

- [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) sind nicht mehr automatisch im strengen Modus, es sei denn, sie werden explizit mit `"use strict"` angefordert ([Firefox-Bug 852762](https://bugzil.la/852762)).
- Die [`String.prototype.repeat`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)-JS-Methode wurde implementiert ([Firefox-Bug 815431](https://bugzil.la/815431)).
- Die Methoden {{jsxref("Set.prototype.values()")}}, {{jsxref("Set/values", "Set.prototype.keys()")}} und {{jsxref("Set.prototype.entries()")}} für {{jsxref("Set")}}-Objekte wurden implementiert ([Firefox-Bug 869996](https://bugzil.la/869996)).

### DOM

- Unterstützung für den [`Range()`](/de/docs/Web/API/Range/Range)-Konstruktor wurde hinzugefügt ([Firefox-Bug 868999](https://bugzil.la/868999)).
- Unterstützung für den [`Text()`](/de/docs/Web/API/Text/Text)-Konstruktor wurde hinzugefügt ([Firefox-Bug 869000](https://bugzil.la/869000)).
- Unterstützung für den [`Comment()`](/de/docs/Web/API/Comment/Comment)-Konstruktor wurde hinzugefügt ([Firefox-Bug 869006](https://bugzil.la/869006)).
- Unterstützung für den [`DocumentFragment()`](/de/docs/Web/API/DocumentFragment/DocumentFragment)-Konstruktor wurde hinzugefügt ([Firefox-Bug 869002](https://bugzil.la/869002)).
- Die [`FocusEvent`](/de/docs/Web/API/FocusEvent)-Schnittstelle wurde implementiert ([Firefox-Bug 855741](https://bugzil.la/855741)).
- Unterstützung für die Methode [`ChildNode.remove()`](/de/docs/Web/API/Element/remove) wurde hinzugefügt ([Firefox-Bug 856629](https://bugzil.la/856629)).
- Die WebVTT-Schnittstellen im Zusammenhang mit dem {{HTMLElement("track")}}-Element, [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement), [`TextTrack`](/de/docs/Web/API/TextTrack), [`TextTrackCue`](/de/docs/Web/API/TextTrackCue), [`TextTrackList`](/de/docs/Web/API/TextTrackList) und [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), wurden hinter der `media.webvtt.enabled`-Eigenschaft implementiert, die standardmäßig auf `false` steht ([Firefox-Bug 833385](https://bugzil.la/833385)).
- Die [`Gamepad`](/de/docs/Web/API/Gamepad)-Schnittstelle und [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) wurden hinter der `dom.gamepad.enabled`-Eigenschaft implementiert, die standardmäßig auf `false` steht ([Firefox-Bug 690935](https://bugzil.la/690935)).
- In der Desktop-Version von Firefox kann `HTMLCanvasElement.getContext()` jetzt zusätzlich zu `experimental-webgl` auch den Wert `webgl` akzeptieren ([Firefox-Bug 870232](https://bugzil.la/870232)).
- Die nicht standardisierte Methode `mozLoadFrom()` von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde entfernt ([Firefox-Bug 877135](https://bugzil.la/877135)).

### Entwickler-Tools

- Der Netzwerkinspektor lässt Sie jetzt nach Inhaltstypen filtern (CSS/Bild/Schriftart usw.) und die entsprechenden Größen und Ladezeiten anzeigen.
- Das Optionen-Panel in den DevTools links ermöglicht es Ihnen, JavaScript vorübergehend zu deaktivieren/aktivieren.
- Erweiterungsentwickler können die neue [Browser-Konsole](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console/) für Chrome-Level-Skripte nutzen (ersetzt die Fehlerkonsole).
- Die Source-Map-Syntax wurde geändert, um `//#` anstelle von `//@` zu verwenden ([Firefox-Bug 870361](https://bugzil.la/870361)).

### MathML

- Das `dir`-Attribut zur Steuerung der Lese-Richtung von Formeln, z.B. bei {{MathMLElement("math")}}- oder {{MathMLElement("mrow")}}-Elementen, ist jetzt äquivalent zur Verwendung der {{cssxref("direction")}}-CSS-Eigenschaft.
- Das Gleichheitszeichen ("=") ist jetzt [dehnbar](/de/docs/Web/MathML/Reference/Element/mo#stretchy).
- Der `"updiagonalarrow"`-Wert für das `notation`-Attribut bei {{MathMLElement("menclose")}}-Elementen wurde hinzugefügt.

## Änderungen für Add-on- und Mozilla-Entwickler

- Doc Shells verfügen nun über das `allowMedia`-Attribut, um das Abspielen von Medien zu deaktivieren ([Firefox-Bug 759964](https://bugzil.la/759964)).
- Sherlock-Such-Plugins im Anwendungsverzeichnis oder Profil werden nicht mehr geladen ([Firefox-Bug 862143](https://bugzil.la/862143)).

## Siehe auch

- [Firefox 24 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)
