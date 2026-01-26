---
title: Firefox 148 Versionshinweise für Entwickler (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 0fe8963da566055fbc285bdd861c937d105de228
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen. Firefox 148 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentare bei allen Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

<!-- ### CSS -->

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, was es ermöglicht festzustellen, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, wenn ja, von welcher(n) Seite(n).
  ([Firefox Fehler 1085214](https://bugzil.la/1085214)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 148 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigen HTML-Inhalten gefüllt werden kann, wie etwa ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen.
  ([Firefox Fehler 1858562](https://bugzil.la/1858562)).
