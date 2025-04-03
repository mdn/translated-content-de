---
title: Firefox 24 für Entwickler
slug: Mozilla/Firefox/Releases/24
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### CSS

- Die beiden Werte `-moz-zoom-in` und `-moz-zoom-out` der {{cssxref("cursor")}} Eigenschaft wurden zu `zoom-in` und `zoom-out` ohne Präfix geändert ([Firefox Fehler 772153](https://bugzil.la/772153)).
- Um der Spezifikation zu entsprechen, können die Schlüsselwörter `not`, `only`, `and` und `or` nicht mehr als Medientypen verwendet werden ([Firefox Fehler 757554](https://bugzil.la/757554)).

### HTML

- Das {{HTMLElement("track")}} Element wurde hinter der `media.webvtt.enabled` Einstellung implementiert und ist standardmäßig deaktiviert. ([Firefox Fehler 833385](https://bugzil.la/833385)).

### JavaScript

- [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) sind nicht mehr automatisch im strikten Modus, es sei denn, es wird explizit mit `"use strict"` angefordert ([Firefox Fehler 852762](https://bugzil.la/852762)).
- Die [`String.prototype.repeat`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) JS-Methode wurde implementiert ([Firefox Fehler 815431](https://bugzil.la/815431)).
- Die Methoden {{jsxref("Set.prototype.values()")}}, {{jsxref("Set/values", "Set.prototype.keys()")}} und {{jsxref("Set.prototype.entries()")}} auf {{jsxref("Set")}} Objekten wurden implementiert ([Firefox Fehler 869996](https://bugzil.la/869996)).

### DOM

- Unterstützung für den [`Range()`](/de/docs/Web/API/Range/Range) Konstruktor wurde hinzugefügt ([Firefox Fehler 868999](https://bugzil.la/868999)).
- Unterstützung für den [`Text()`](/de/docs/Web/API/Text/Text) Konstruktor wurde hinzugefügt ([Firefox Fehler 869000](https://bugzil.la/869000)).
- Unterstützung für den [`Comment()`](/de/docs/Web/API/Comment/Comment) Konstruktor wurde hinzugefügt ([Firefox Fehler 869006](https://bugzil.la/869006)).
- Unterstützung für den [`DocumentFragment()`](/de/docs/Web/API/DocumentFragment/DocumentFragment) Konstruktor wurde hinzugefügt ([Firefox Fehler 869002](https://bugzil.la/869002)).
- Die [`FocusEvent`](/de/docs/Web/API/FocusEvent) Schnittstelle wurde implementiert ([Firefox Fehler 855741](https://bugzil.la/855741)).
- Unterstützung für die [`ChildNode.remove()`](/de/docs/Web/API/Element/remove) Methode wurde hinzugefügt ([Firefox Fehler 856629](https://bugzil.la/856629)).
- Die WebVTT Schnittstellen, die mit dem {{HTMLElement("track")}} Element verbunden sind, [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement), [`TextTrack`](/de/docs/Web/API/TextTrack), [`TextTrackCue`](/de/docs/Web/API/TextTrackCue), [`TextTrackList`](/de/docs/Web/API/TextTrackList) und [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), wurden hinter der `media.webvtt.enabled` Eigenschaft implementiert, die standardmäßig auf `false` gesetzt ist ([Firefox Fehler 833385](https://bugzil.la/833385)).
- Die [`Gamepad`](/de/docs/Web/API/Gamepad) Schnittstelle und [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) wurden hinter der `dom.gamepad.enabled` Eigenschaft implementiert, die standardmäßig auf `false` gesetzt ist ([Firefox Fehler 690935](https://bugzil.la/690935)).
- Nur in der Desktop-Version von Firefox kann `HTMLCanvasElement.getContext()` jetzt den Wert `webgl` zusätzlich zu `experimental-webgl` annehmen ([Firefox Fehler 870232](https://bugzil.la/870232)).
- Die nicht-standardisierte Methode `mozLoadFrom()` des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde entfernt ([Firefox Fehler 877135](https://bugzil.la/877135)).

### Entwickler-Tools

- Der Netzwerk-Inspektor ermöglicht jetzt das Filtern nach Inhaltstyp (CSS/Bild/Schriftart usw.) und zeigt die entsprechenden Größen- und Ladezeiten an.
- Das Optionen-Panel der DevTools auf der linken Seite ermöglicht es, JavaScript vorübergehend zu deaktivieren/aktivieren.
- Erweiterungsentwickler können die neue [Browser-Konsole](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console/) für Chrome-Level-Skripte verwenden (Ersetzt die Fehlerkonsole).
- Die Quelltext-Mappingsyntax wurde geändert, um `//#` anstelle von `//@` zu verwenden ([Firefox Fehler 870361](https://bugzil.la/870361)).

### MathML

- Das `dir`-Attribut zur Steuerung der Ausrichtung von Formeln auf z.B. {{MathMLElement("math")}} oder {{MathMLElement("mrow")}} Elementen ist jetzt gleichbedeutend mit der Nutzung des {{cssxref("direction")}} CSS-Eigenschaft.
- Das Gleichheitszeichen ("=") ist jetzt [dehnbar](/de/docs/Web/MathML/Reference/Element/mo#stretchy).
- Der Wert `"updiagonalarrow"` für das `notation` Attribut auf {{MathMLElement("menclose")}} Elementen wurde hinzugefügt.

## Änderungen für Add-on und Mozilla-Entwickler

- Doc Shells haben nun das `allowMedia` Attribut, um das Abspielen von Medien zu deaktivieren ([Firefox Fehler 759964](https://bugzil.la/759964)).
- Sherlock-Suchplugins im Anwendungsverzeichnis oder Profil werden nicht mehr geladen ([Firefox Fehler 862143](https://bugzil.la/862143)).

## Siehe auch

- [Firefox 24 Aurora Hinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)

## Ältere Versionen

{{Firefox_for_developers}}
