---
title: Firefox 148 Versionshinweise für Entwickler (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 349c079914071c205d842a323f22dd95da74d31f
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Web-Entwickler

<!-- ### Developer Tools -->

### HTML

- Das anfängliche `about:blank` Dokument wird jetzt synchron geladen. Eine Browsing-Kontext erste Navigation kann zu `about:blank` aufgelöst werden (zum Beispiel, wenn die anfängliche URL leer ist oder explizit auf `about:blank` gesetzt wird). In diesen Fällen ersetzt Firefox nicht länger das anfängliche leere Dokument durch ein zweites, asynchron geladenes, sondern löst das `load`-Ereignis synchron auf dem initialen Dokument aus. ([Firefox Bug 543435](https://bugzil.la/543435)).

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- Die {{cssxref("position-area")}} Eigenschaft in [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält das verankerte Element nun korrekt innerhalb des Ansichtsfensters.
  ([Firefox Bug 2008537](https://bugzil.la/2008537)).

<!-- #### Removals -->

### JavaScript

- Die {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} statischen Methoden werden jetzt unterstützt.
  Diese Methoden "zippen" mehrere Eingabe-Iteratoren zusammen und geben einen neuen Iterator zurück, der die Gruppe der Eingabeelemente bei jedem Iterationsschritt liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren positionell ausgerichteten Eingabe-Iteratoren kombinieren müssen (der erste Wert, den der erste Iterator liefert, entspricht dem ersten Wert, den die anderen Iteratoren liefern, und so weiter).
  ([Firefox Bug 2003333](https://bugzil.la/2003333)).

- Der [TC39 Legacy RegExp Features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) Vorschlag wurde implementiert.
  Dies aktualisiert {{jsxref("RegExp.prototype.compile()")}}, sodass ein {{jsxref("TypeError")}} geworfen wird, wenn es auf einer Unterklasse von {{jsxref("RegExp")}} aufgerufen wird oder wenn die Methode auf einem `RegExp` aufgerufen wird, der in einem anderen Realm definiert wurde.
  `RegExp` statische Eigenschaften, wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und sein Alias `RegExp.$_`), werden so normalisiert, dass sie konfigurierbar und nicht aufzählbar sind.
  Insbesondere bedeutet dies, dass sie aus dem `RegExp` Objekt gelöscht werden können.
  ([Firefox Bug 1306461](https://bugzil.la/1306461)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Diese bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion geleitet wurden.
  Die Mechanismen erlauben die Überprüfung unsicherer Codeverwendungen.
  Sie schreiben nicht vor, wie die Daten transformiert werden, können aber beispielsweise verwendet werden, um unsichere HTML-Elemente aus benutzerdefinierten Zeichenfolgen zu entfernen.
  ([Firefox Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, wodurch Sie feststellen können, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, wenn ja, von welcher(n) Seite(n).
  ([Firefox Bug 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften beim [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt mit Werten versehen, wenn der Zeiger bewegt wird — zuvor wurden diese auf null gesetzt.
  ([Firefox Bug 1987671](https://bugzil.la/1987671)).

- Die Methode [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese kann verwendet werden, um einen Post-Commit-Navigationshandler dynamisch in einem Pre-Commit-Handler zu registrieren, was nützlich ist, wenn die Aktionen der abgeschlossenen Navigation von Daten abhängen, die in der Pre-Commit-Phase abgerufen wurden.
  ([Firefox Bug 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "paste"-Befehl kann jetzt mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Webinhalten verwendet werden (zusätzlich zu Web-Erweiterungen).
  Dies wird unter Verwendung der [Clipboard API](/de/docs/Web/API/Clipboard_API) implementiert und unterliegt denselben [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie z. B. der Anforderung einer transienten Aktivierung und der Benutzerbestätigung beim Einfügen von Inhalten aus anderen Origins.
  ([Firefox Bug 1998195](https://bugzil.la/1998195)).

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 148 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund bleibendes Fenster zu öffnen, das mit beliebigen HTML-Inhalten, wie einem Video mit benutzerdefinierten Steuerelementen oder einer Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen, gefüllt werden kann.
  ([Firefox Bug 1858562](https://bugzil.la/1858562)).
