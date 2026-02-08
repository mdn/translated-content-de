---
title: Firefox 148 Versionshinweise für Entwickler (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: bd30cea157a0d65016ac583672021d30baa8d608
---

Dieser Artikel enthält Informationen über Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird [am 24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

> [!NOTE]
> Die Versionshinweise zu dieser Firefox-Version befinden sich noch in Arbeit.

<!-- Autoren: Bitte alle Überschriften, für die Anmerkungen verfasst werden, auskommentieren -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das anfängliche `about:blank` Dokument wird jetzt synchron geladen. Eine Browsing-Kontext erste Navigation kann zu `about:blank` führen (zum Beispiel, wenn die anfängliche URL leer oder explizit auf `about:blank` gesetzt ist). In diesen Fällen ersetzt Firefox nicht länger das anfängliche leere Dokument mit einem zweiten, asynchron geladenen, sondern löst das `load`-Ereignis synchron beim anfänglichen Dokument aus. ([Firefox Fehler 543435](https://bugzil.la/543435)).

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("position-area")}} Eigenschaft im [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) behält nun korrekt das verankerte Element innerhalb des Ansichtsfensters.
  ([Firefox Fehler 2008537](https://bugzil.la/2008537)).

<!-- #### Entfernungen -->

### JavaScript

- Die {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} statischen Methoden werden jetzt unterstützt.
  Diese "zippen" mehrere Eingabe-Iteratoren zusammen und geben einen neuen Iterator zurück, der die Gruppe von Eingabeelementen bei jedem Iterationsschritt liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren Eingabe-Iteratoren kombinieren müssen, die positionsmäßig ausgerichtet sind (der erste Wert, der vom ersten Iterator geliefert wird, entspricht dem ersten Wert, der von den anderen Iteratoren geliefert wird, und so weiter).
  ([Firefox Fehler 2003333](https://bugzil.la/2003333)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Dies bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion gelaufen sind.
  Die Mechanismen ermöglichen eine Überprüfung unsicherer Codeverwendungen.
  Sie schreiben nicht vor, wie die Daten transformiert werden, könnten aber beispielsweise verwendet werden, um unsichere HTML-Elemente aus benutzerdefinierten Zeichenfolgen zu bereinigen.
  ([Firefox Fehler 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, was es ermöglicht zu bestimmen, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, falls ja, von welcher(n) Seite(n).
  ([Firefox Fehler 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften beim [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt gefüllt, wenn der Zeiger bewegt wird — zuvor wurden diese auf null gesetzt.
  ([Firefox Fehler 1987671](https://bugzil.la/1987671)).

- Die [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) Methode der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese kann verwendet werden, um einen Post-Commit-Navigations-Handler dynamisch innerhalb eines Pre-Commit-Handlers zu registrieren, was nützlich ist, wenn die Aktionen der festgelegten Navigation von Daten abhängen, die in der Pre-Commit-Phase abgerufen wurden.
  ([Firefox Fehler 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "paste" Befehl kann jetzt mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Webinhalten (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird unter Verwendung der [Clipboard API](/de/docs/Web/API/Clipboard_API) umgesetzt und teilt die gleichen [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie beispielsweise die Anforderung einer kurzfristigen Aktivierung und Benutzerbestätigung beim Einfügen von Cross-Origin-Inhalten.
  ([Firefox Fehler 1998195](https://bugzil.la/1998195)).

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

## Experimentelle Web-Features

Diese Features werden in Firefox 148 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht das Öffnen eines Fensters, das immer im Vordergrund bleibt und mit beliebigem HTML-Inhalt befüllt werden kann, wie zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videoanrufs zeigen.
  ([Firefox Fehler 1858562](https://bugzil.la/1858562)).
