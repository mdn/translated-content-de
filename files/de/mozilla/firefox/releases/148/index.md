---
title: Firefox 148 Versionshinweise für Entwickler (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: f9531e19140a5e164fb05a036995f582c378b2d4
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Notizen schreiben -->

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

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Sie bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden, die durch eine Transformationsfunktion verarbeitet wurden.
  Die Mechanismen ermöglichen die Überprüfung unsicherer Codeverwendungen.
  Sie geben nicht vor, wie die Daten transformiert werden, könnten aber beispielsweise verwendet werden, um unsichere HTML-Elemente aus von Benutzern bereitgestellten Zeichenfolgen zu bereinigen.
  ([Firefox-Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins)-Eigenschaft wird jetzt unterstützt, sodass Sie feststellen können, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, falls ja, von welcher(n) Website(s).
  ([Firefox-Bug 1085214](https://bugzil.la/1085214)).

- Die Eigenschaften [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) beim [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)-Ereignis werden nun gefüllt, wenn der Zeiger bewegt wird – zuvor waren diese auf null gesetzt.
  ([Firefox-Bug 1987671](https://bugzil.la/1987671)).

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

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 148 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund stehendes Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie z.B. ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen.
  ([Firefox-Bug 1858562](https://bugzil.la/1858562)).
