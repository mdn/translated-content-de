---
title: Firefox 147 Versionshinweise für Entwickler (Nightly)
short-title: Firefox 147 (Nightly)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: cbf088f70d4a20e83dbc2476167ca7681a38edf6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Nightly-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernung -->

<!-- ### MathML -->

<!-- #### Entfernung -->

<!-- ### SVG -->

<!-- #### Entfernung -->

### CSS

- Die `-webkit-` präfixierte Version der {{cssxref("perspective")}}-Eigenschaft wird jetzt mit einheitslosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für eine erhöhte Kompatibilität.
  ([Firefox-Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bieten, durch den verschiedene **Typen** für aktive Ansichtstransitionen angegeben werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn sich deren Inhalt aktualisiert, abhängig vom angegebenen Transitionstyp. Firefox 147 unterstützt nur Ansichtstransitionstypen für Single-Page-Apps (SPA), nicht für dokumentübergreifende Ansichtstransitionstypen.
  ([Firefox-Bug 2001878](https://bugzil.la/2001878)).

<!-- #### Entfernung -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernung -->

<!-- ### HTTP -->

<!-- #### Entfernung -->

<!-- ### Sicherheit -->

<!-- #### Entfernung -->

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurückgibt, die die aktuell aktive [Ansichtstransition](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet einen konsistenten Weg, um auf eine aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne manuell eine Referenz darauf für die spätere Verwendung speichern zu müssen. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).
- Die Unterstützung der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple-Silicon-Prozessoren aktiviert (zuvor war nur macOS Tahoe unterstützt). ([Firefox-Bug 1993341](https://bugzil.la/1993341)).

- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Dies bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten und die Einträge im Anwendungs-Verlauf zu prüfen. Sie ist ein Nachfolger früherer Webplattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location) und löst deren Mängel. Sie richtet sich speziell an die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}}.
  ([Firefox-Bug 1997962](https://bugzil.la/1997962)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernung -->

<!-- ### WebAssembly -->

<!-- #### Entfernung -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernung -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 147 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
