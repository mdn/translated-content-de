---
title: Firefox 148 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 148 (Stabil)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 21638327a5baa7ecf918835c4a233a74f25b02ed
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die sich auf Entwickler auswirken.
Firefox 148 wurde am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das anfängliche `about:blank` Dokument wird jetzt synchron geladen. Eine Browsing-Kontext-Navigation kann zu `about:blank` aufgelöst werden (zum Beispiel, wenn die anfängliche URL leer ist oder explizit auf `about:blank` gesetzt wird). In diesen Fällen ersetzt Firefox nicht mehr das anfänglich leere Dokument durch ein zweites, asynchron geladenes, sondern löst das `load`-Ereignis synchron auf dem anfänglichen Dokument aus. ([Firefox-Bug 543435](https://bugzil.la/543435)).

### CSS

- Die {{cssxref("position-area")}} Eigenschaft im [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält das verankerte Element jetzt korrekt innerhalb des Ansichtsfensters.
  ([Firefox-Bug 2008537](https://bugzil.la/2008537)).

- Die {{cssxref("position-try-order")}} Eigenschaft in der [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) wird nun unterstützt und ermöglicht es, die Reihenfolge zu ändern, in der Positions-Fallback-Optionen basierend auf dem verfügbaren Raum ausprobiert werden. Dies betrifft auch die {{cssxref("position-try")}} Kurzform-Eigenschaft.
  ([Firefox-Bug 1989059](https://bugzil.la/1989059)).

- Die CSS-Eigenschaften {{cssxref("overflow")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} können nun für {{Glossary("replaced_elements", "ersetzte Elemente")}}, wie Bilder, auf die gleiche Weise verwendet werden wie bei anderen Elementen.
  Vorher wurden ersetzte Elemente immer auf ihren beinhaltenden Container beschnitten.
  ([Firefox-Bug 1999100](https://bugzil.la/1999100)).

- Die CSS-Funktion {{cssxref("basic-shape/shape")}} ist nun standardmäßig verfügbar. `shape()` ist ein {{cssxref("basic-shape")}} Datentyp, der es ermöglicht, eine Form in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} mit einem oder mehreren "shape commands" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()`-Funktion ist in einigen Aspekten der {{cssxref("basic-shape/path","path()")}}-Funktion ähnlich, verwendet jedoch im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, die standardmäßige CSS-Syntax. Dies erlaubt es Ihnen, CSS-Einheiten und CSS-Mathematikfunktionen zu verwenden, was das Erstellen und Bearbeiten von Formen erleichtert.
  ([Firefox-Bug 1982941](https://bugzil.la/1982941)).

### JavaScript

- Die statischen Methoden {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} werden jetzt unterstützt.
  Diese "zippen" mehrere Eingangsiterators zusammen und geben einen neuen Iterator zurück, der bei jedem Iterationsschritt die Gruppe der Eingangselemente liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren Input-Iterators kombinieren müssen, die positionsmäßig ausgerichtet sind (der erste Wert, der vom ersten Iterator geliefert wird, entspricht dem ersten Wert der anderen Iterators usw.).
  ([Firefox-Bug 2003333](https://bugzil.la/2003333)).

- Der [TC39 Legacy RegExp Vorschlag in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) wurde implementiert.
  Dies aktualisiert {{jsxref("RegExp.prototype.compile()")}}, sodass ein {{jsxref("TypeError")}} ausgelöst wird, wenn er auf einer Unterklasse von {{jsxref("RegExp")}} aufgerufen wird oder wenn die Methode auf einem `RegExp` aufgerufen wird, das in einem anderen Bereich definiert ist.
  `RegExp`-statische Eigenschaften, wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und sein Alias `RegExp.$_`), werden normalisiert, damit sie konfigurierbar und nicht aufgezählt werden können.
  Insbesondere bedeutet dies, dass sie vom `RegExp`-Objekt gelöscht werden können.
  ([Firefox-Bug 1306461](https://bugzil.la/1306461)).

### APIs

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Diese bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion geleitet wurden.
  Die Mechanismen erlauben das Auditing unsicherer Codeverwendungen.
  Sie schreiben nicht vor, wie die Daten transformiert werden, könnten jedoch beispielsweise verwendet werden, um unsichere HTML-Elemente von benutzerbereitgestellten Strings zu bereinigen.
  ([Firefox-Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, was es ermöglicht zu bestimmen, ob ein Dokument in ein {{htmlelement("iframe")}} eingebettet ist und, wenn ja, von welcher Seite(n).
  ([Firefox-Bug 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften beim [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt befüllt, wenn der Zeiger bewegt wird — zuvor waren diese auf Null gesetzt.
  ([Firefox-Bug 1987671](https://bugzil.la/1987671)).

- Die [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) Methode der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Dies kann verwendet werden, um einen Post-Commit-Navigationshandler dynamisch innerhalb eines Pre-Commit-Handlers zu registrieren, was nützlich ist, wenn die Aktionen der bestätigten Navigation von in der Pre-Commit-Phase abgerufenen Daten abhängen.
  ([Firefox-Bug 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "paste"-Befehl kann jetzt mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Webinhalten (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird unter Verwendung der [Clipboard API](/de/docs/Web/API/Clipboard_API) implementiert und teilt die gleichen [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie zum Beispiel das Erfordernis einer transienten Aktivierung und Benutzerbestätigung beim Einfügen von plattformübergreifenden Inhalten.
  ([Firefox-Bug 1998195](https://bugzil.la/1998195)).

## Änderungen für Add-on-Entwickler

## Experimentelle Web-Features

Diese Features werden in Firefox 148 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Sie finden weitere solcher Features auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund stehendes Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videoanrufs zeigen.
  ([Firefox-Bug 1858562](https://bugzil.la/1858562)).
