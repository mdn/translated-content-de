---
title: Firefox 147 Versionshinweise für Entwickler (Nightly)
short-title: Firefox 147 (Nightly)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 471ef8f9f456c2345818e0077d73b9df0515bb50
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Nightly-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte heben Sie alle Überschriften hervor, zu denen Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die `-webkit-` Präfix-Version der {{cssxref("perspective")}} Eigenschaft wird nun mit einheitslosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität.
  ([Firefox-Bug 1362499](https://bugzil.la/1362499)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird nun unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, die die aktuell aktive [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Methode, um auf eine aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne sie manuell für die spätere Verwendung speichern zu müssen. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- #### Entfernungen -->

<!-- #### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 147 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Seite mit experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
