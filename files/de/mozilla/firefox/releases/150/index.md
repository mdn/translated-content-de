---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 25c128c6ad9f20dd1646056a4c548d5c88f4e659
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### Developer Tools

- Eine spezifische Nachricht wird jetzt im [_Response Tab_ des Netzwerkbereichs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um anzuzeigen, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde.
  ([Firefox-Bug 2016679](https://bugzil.la/2016679)).

### HTML

- Das `"auto"` Schlüsselwort wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>` Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es faul geladenen `<img>` Elementen, die berechnete Bildlayoutgröße zu verwenden, nachdem alle CSS-Stile angewendet wurden, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt wird.
  Dies ist einfacher, als Medienbedingungen und deren zugehörige Größen im Attribut anzugeben, was wahrscheinlich Verhalten dupliziert, das bereits in CSS-Medienanfragen erfasst ist.
  ([Firefox-Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert nun mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es, eine beliebige Anzahl von Farben zu mischen. ([Firefox-Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert nun [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemen.
  ([Firefox-Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} werden nun unterstützt. Sie erlauben es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand zu stylen, z.B. ob sie spielen oder pausiert sind. ([Firefox-Bug 2020775](https://bugzil.la/2020775)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) wird jetzt `false` zurückgeben, wenn das zu ersetzende Element ein {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Das bedeutet, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>` Element mit seinem inneren Inhalt ersetzt. ([Firefox-Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument der [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wird nun unterstützt.
  Dies erlaubt es der Methode, den Knoten zurückzugeben, der den Cursor innerhalb eines Shadow DOMs enthält, vorausgesetzt, sein zugehöriger [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben.
  ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

- Die nicht standardisierte [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird nun unterstützt. ([Firefox-Bug 1550635](https://bugzil.la/1550635)).
- Die `ariaNotify()` Methode wird nun auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Diese stellt eine Zeichenkette in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox-Bug 2018095](https://bugzil.la/2018095)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht vertauscht werden kann. ([Firefox-Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl Tabs aus geteilten Ansichten enthält und eines oder mehrere Tabs dazwischen platziert werden, die Tabs auseinander bewegt werden und die geteilte Ansicht geschlossen wird. ([Firefox-Bug 2022549](https://bugzil.la/2022549))
- Ein Problem mit einigen JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Aufrufen, die das CSS nicht importieren konnten, wurde behoben. ([Firefox-Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 150 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Seite zu Experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Gescopte benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Die [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Eigenschaft wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gescopten benutzerdefinierten Elementregistern](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).
