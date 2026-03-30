---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: fdaba0255e02b46e8af2495d18999da32174125a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [21. April 2026](https://whattrainisitnow.com/release/?version=150).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentare bei allen Abschnitten, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots)-Argument der [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)-Methode wird jetzt unterstützt.
  Dies ermöglicht es der Methode, den Knoten zurückzugeben, der das Caret innerhalb eines Shadow DOMs enthält, vorausgesetzt, dessen zugehöriges [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die nicht standardmäßige [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint)-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).
- Die `ariaNotify()`-Methode wird jetzt sowohl auf [`Document`](/de/docs/Web/API/Document/ariaNotify) als auch auf [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies stellt eine Zeichenfolge von Text in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Bug 2018095](https://bugzil.la/2018095)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 150 enthalten, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite für [experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
