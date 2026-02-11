---
title: Versionshinweise für Entwickler zu Firefox 148 (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 08fc6e4e0c44d7e840ae42e5911d9e721a99d336
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/de/channel/desktop/#beta) und wird am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das initiale `about:blank` Dokument wird jetzt synchron geladen. Eine Browsing-Kontext-Erstanavigation kann zu `about:blank` auflösen (zum Beispiel, wenn die anfängliche URL leer ist oder explizit auf `about:blank` gesetzt wurde). In diesen Fällen ersetzt Firefox nicht mehr das initiale leere Dokument durch ein zweites, asynchron geladenes, sondern löst das `load` Ereignis synchron auf dem initialen Dokument aus. ([Firefox Fehler 543435](https://bugzil.la/543435)).

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("position-area")}} Eigenschaft in der [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) sorgt nun dafür, dass das verankerte Element korrekt innerhalb des Ansichtsfensters bleibt.
  ([Firefox Fehler 2008537](https://bugzil.la/2008537)).

- Die CSS-Eigenschaften {{cssxref("overflow")}}, {{cssxref("overflow-x")}}, und {{cssxref("overflow-y")}} können nun auf {{Glossary("replaced_elements", "ersetzten Elementen")}}, wie Bildern, verwendet werden, so wie sie bei anderen Elementen verwendet werden.
  Zuvor wurden ersetzte Elemente immer auf ihren umschließenden Container beschnitten.
  ([Firefox Fehler 1999100](https://bugzil.la/1999100)).

<!-- #### Entfernungen -->

### JavaScript

- Die statischen Methoden {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} werden jetzt unterstützt.
  Diese "zippen" mehrere Eingabe-Iteratoren zusammen und geben einen neuen Iterator zurück, der bei jedem Iterationsschritt die Gruppe von Eingabeelementen liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren Stelle-zu-Stelle-ausgerichteten Eingabe-Iteratoren kombinieren müssen (der erste Wert, der vom ersten Iterator geliefert wird, entspricht dem ersten Wert, der von den anderen Iteratoren geliefert wird, und so weiter).
  ([Firefox Fehler 2003333](https://bugzil.la/2003333)).

- Der [TC39-Vorschlag für Legacy-RegExp-Funktionen in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) wurde implementiert.
  Dies aktualisiert {{jsxref("RegExp.prototype.compile()")}}, sodass ein {{jsxref("TypeError")}} ausgelöst wird, wenn es auf einer Unterklasse von {{jsxref("RegExp")}} aufgerufen wird oder wenn die Methode auf ein `RegExp` aufgerufen wird, das in einem anderen Bereich definiert wurde.
  `RegExp`-statische Eigenschaften wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und sein Alias `RegExp.$_`) sind so normalisiert, dass sie konfigurierbar und nicht auflistbar sind.
  Insbesondere bedeutet dies, dass sie vom `RegExp`-Objekt gelöscht werden können.
  ([Firefox Fehler 1306461](https://bugzil.la/1306461)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Diese bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion geleitet wurden.
  Die Mechanismen ermöglichen eine Prüfung unsicherer Codes.
  Sie schreiben nicht vor, wie die Daten transformiert werden, könnten aber beispielsweise verwendet werden, um unsichere HTML-Elemente von benutzerdefinierten Zeichenfolgen zu bereinigen.
  ([Firefox Fehler 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, wodurch es möglich wird, festzustellen, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, wenn ja, von welcher(n) Seite(n).
  ([Firefox Fehler 1085214](https://bugzil.la/1085214)).

- Die Eigenschaften [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) im [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt gefüllt, wenn der Zeiger bewegt wird — zuvor waren diese auf Null gesetzt.
  ([Firefox Fehler 1987671](https://bugzil.la/1987671)).

- Die Methode [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese kann verwendet werden, um einen Post-Commit-Navigationshandler innerhalb eines Pre-Commit-Handlers dynamisch zu registrieren, was nützlich ist, wenn die Aktionen der durchgeführten Navigation von im Pre-Commit-Phase abgerufenen Daten abhängen.
  ([Firefox Fehler 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "paste"-Befehl kann jetzt mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Web-Inhalten (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird unter Verwendung der [Clipboard API](/de/docs/Web/API/Clipboard_API) implementiert und teilt die gleichen [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie z. B. die Anforderung einer vorübergehenden Aktivierung und Benutzerbestätigung beim Einfügen von übergreifenden Inhalten.
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

Diese Funktionen sind in Firefox 148 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie das entsprechende Präferenz auf der `about:config` Seite und setzen Sie es auf `true`.
Sie können weitere solcher Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein stets im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie z.B. ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videoanrufs zeigen.
  ([Firefox Fehler 1858562](https://bugzil.la/1858562)).
