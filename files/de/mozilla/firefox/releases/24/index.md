---
title: Firefox 24 für Entwickler
slug: Mozilla/Firefox/Releases/24
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### CSS

- Die beiden Werte `-moz-zoom-in` und `-moz-zoom-out` der {{cssxref("cursor")}}-Eigenschaft wurden in `zoom-in` und `zoom-out` unpräfixiert geändert ([Firefox Fehler 772153](https://bugzil.la/772153)).
- Um der Spezifikation zu entsprechen, können die Schlüsselwörter `not`, `only`, `and` und `or` nicht mehr als Medientypen verwendet werden ([Firefox Fehler 757554](https://bugzil.la/757554)).

### HTML

- Das {{HTMLElement("track")}}-Element wurde hinter der Einstellung `media.webvtt.enabled` implementiert und ist standardmäßig deaktiviert. ([Firefox Fehler 833385](https://bugzil.la/833385)).

### JavaScript

- [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) sind nicht mehr automatisch im Strict-Modus, es sei denn, es wird explizit mit `"use strict"` angefordert ([Firefox Fehler 852762](https://bugzil.la/852762)).
- Die [`String.prototype.repeat`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) JS-Methode wurde implementiert ([Firefox Fehler 815431](https://bugzil.la/815431)).
- Die Methoden {{jsxref("Set.prototype.values()")}}, {{jsxref("Set/values", "Set.prototype.keys()")}} und {{jsxref("Set.prototype.entries()")}} auf {{jsxref("Set")}}-Objekten wurden implementiert ([Firefox Fehler 869996](https://bugzil.la/869996)).

### DOM

- Unterstützung für den {{domxref("Range.Range", "Range()")}}-Konstruktor wurde hinzugefügt ([Firefox Fehler 868999](https://bugzil.la/868999)).
- Unterstützung für den {{domxref("Text.Text", "Text()")}}-Konstruktor wurde hinzugefügt ([Firefox Fehler 869000](https://bugzil.la/869000)).
- Unterstützung für den {{domxref("Comment.Comment", "Comment()")}}-Konstruktor wurde hinzugefügt ([Firefox Fehler 869006](https://bugzil.la/869006)).
- Unterstützung für den {{domxref("DocumentFragment.DocumentFragment", "DocumentFragment()")}}-Konstruktor wurde hinzugefügt ([Firefox Fehler 869002](https://bugzil.la/869002)).
- Das {{domxref("FocusEvent")}}-Interface wurde implementiert ([Firefox Fehler 855741](https://bugzil.la/855741)).
- Unterstützung für die Methode {{domxref("Element.remove", "ChildNode.remove()")}} wurde hinzugefügt ([Firefox Fehler 856629](https://bugzil.la/856629)).
- Die WebVTT-Interfaces, die mit dem {{HTMLElement("track")}}-Element in Verbindung stehen, {{domxref("HTMLTrackElement")}}, {{domxref("TextTrack")}}, {{domxref("TextTrackCue")}}, {{domxref("TextTrackList")}} und {{domxref("TextTrackCueList")}} wurden hinter der Eigenschaft `media.webvtt.enabled` implementiert, die standardmäßig auf `false` gesetzt ist ([Firefox Fehler 833385](https://bugzil.la/833385)).
- Das {{domxref("Gamepad")}}-Interface und {{domxref("Navigator.getGamepads")}} wurden hinter der Eigenschaft `dom.gamepad.enabled` implementiert, die standardmäßig auf `false` gesetzt ist ([Firefox Fehler 690935](https://bugzil.la/690935)).
- Nur in Desktop-Version von Firefox kann `HTMLCanvasElement.getContext()` jetzt neben `experimental-webgl` auch den Wert `webgl` annehmen ([Firefox Fehler 870232](https://bugzil.la/870232)).
- Die nicht standardisierte Methode `mozLoadFrom()` von {{domxref("HTMLMediaElement")}} wurde entfernt ([Firefox Fehler 877135](https://bugzil.la/877135)).

### Entwickler-Tools

- Der Netzwerkinspektor ermöglicht es jetzt, nach Inhaltstyp zu filtern (CSS/Bild/Schriftart usw.) und die entsprechenden Größen- und Ladezeiten anzuzeigen.
- Das Panel mit den Devtools-Optionen auf der linken Seite ermöglicht es Ihnen, JavaScript vorübergehend zu deaktivieren/aktivieren.
- Erweiterungsentwickler können die neue [Browser-Konsole](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console/) für Chrome-Level-Skripte verwenden (Ersetzt Fehlerkonsole).
- Die Quelltextkartierungs-Syntax wurde geändert, um `//#` anstelle von `//@` zu verwenden ([Firefox Fehler 870361](https://bugzil.la/870361)).

### MathML

- Das `dir`-Attribut zur Steuerung der Richtung von Formeln auf z.B. {{MathMLElement("math")}}- oder {{MathMLElement("mrow")}}-Elementen ist jetzt gleichbedeutend mit der Verwendung der {{cssxref("direction")}}-CSS-Eigenschaft.
- Das Gleichheitszeichen ("=") ist jetzt [dehnbar](/de/docs/Web/MathML/Element/mo#stretchy).
- Der Wert "`updiagonalarrow`" für das `notation`-Attribut auf {{MathMLElement("menclose")}}-Elementen wurde hinzugefügt.

## Änderungen für Add-on- und Mozilla-Entwickler

- Doc Shells haben nun das `allowMedia`-Attribut, um das Abspielen von Medien zu deaktivieren ([Firefox Fehler 759964](https://bugzil.la/759964)).
- Sherlock-Suchplugins im Anwendungsverzeichnis oder Profil werden nicht mehr geladen ([Firefox Fehler 862143](https://bugzil.la/862143)).

## Siehe auch

- [Firefox 24 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)

## Ältere Versionen

{{Firefox_for_developers}}
