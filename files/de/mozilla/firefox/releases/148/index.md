---
title: Firefox 148 Versionshinweise für Entwickler (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 5c9c844c1712b74d78e8abe5469216d83c66e0bc
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### HTML

- Das initiale `about:blank` Dokument wird nun synchron geladen. Eine Browsing-Kontext erstmalige Navigation kann zu `about:blank` aufgelöst werden (zum Beispiel, wenn die anfängliche URL leer ist oder explizit auf `about:blank` gesetzt wurde). In diesen Fällen ersetzt Firefox nicht länger das anfängliche leere Dokument durch ein zweites, asynchron geladenes, sondern löst stattdessen das `load`-Ereignis synchron auf dem initialen Dokument aus. ([Firefox Bug 543435](https://bugzil.la/543435)).

### CSS

- Die {{cssxref("position-area")}} Eigenschaft im [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält jetzt das verankerte Element korrekt innerhalb des Viewports.
  ([Firefox Bug 2008537](https://bugzil.la/2008537)).

### JavaScript

- Die {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} statischen Methoden werden jetzt unterstützt.
  Diese "zippen" mehrere Eingabe-Iterators zusammen und geben einen neuen Iterator zurück, der die Gruppe der Eingabeelemente in jedem Iterationsschritt liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren Eingabe-Iterators kombinieren müssen, die positionsmäßig ausgerichtet sind (der erste Wert, der vom ersten Iterator geliefert wird, entspricht dem ersten Wert, der von den anderen Iteratoren geliefert wird, und so weiter).
  ([Firefox Bug 2003333](https://bugzil.la/2003333)).

### APIs

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Diese bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion bearbeitet wurden.
  Die Mechanismen ermöglichen die Überprüfung unsicherer Codeverwendungen.
  Sie geben nicht vor, wie die Daten transformiert werden, könnten jedoch beispielsweise verwendet werden, um unsichere HTML-Elemente aus benutzerdefinierten Strings zu säubern.
  ([Firefox Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, was es ermöglicht zu bestimmen, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, wenn ja, von welcher(n) Seite(n).
  ([Firefox Bug 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften beim [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt befüllt, wenn der Zeiger bewegt wird — wurden zuvor auf null gesetzt.
  ([Firefox Bug 1987671](https://bugzil.la/1987671)).

#### DOM

- Der "paste"-Befehl kann nun mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Web-Inhalten (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird mithilfe der [Clipboard API](/de/docs/Web/API/Clipboard_API) implementiert und teilt die gleichen [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie die Anforderung transitorischer Aktivierung und Benutzerbestätigung beim Einfügen von Cross-Origin-Inhalten.
  ([Firefox Bug 1998195](https://bugzil.la/1998195)).

## Änderungen für Add-on-Entwickler

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 148 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie z.B. ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs anzeigen.
  ([Firefox Bug 1858562](https://bugzil.la/1858562)).
