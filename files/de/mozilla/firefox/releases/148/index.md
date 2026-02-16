---
title: Firefox 148 Versionshinweise für Entwickler (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: a28b03ab5b7bf13809362eb0f997880e0aece45f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das initiale `about:blank` Dokument lädt jetzt synchron. Eine Browsing-Kontext-Initialnavigation kann auf `about:blank` aufgelöst werden (zum Beispiel, wenn die anfängliche URL leer ist oder explizit auf `about:blank` gesetzt ist). In diesen Fällen ersetzt Firefox nicht mehr das initiale leere Dokument durch ein zweites, asynchron geladenes, sondern löst stattdessen das `load` Ereignis synchron auf dem initialen Dokument aus. ([Firefox Bug 543435](https://bugzil.la/543435)).

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("position-area")}} Eigenschaft in [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält jetzt das verankerte Element korrekt innerhalb des Viewports.
  ([Firefox Bug 2008537](https://bugzil.la/2008537)).

- Die CSS-Eigenschaften {{cssxref("overflow")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} können nun bei {{Glossary("replaced_elements", "ersetzten Elementen")}} wie Bildern verwendet werden, genauso wie bei anderen Elementen.
  Vorher wurden ersetzte Elemente immer auf ihr umgebendes Container begrenzt.
  ([Firefox Bug 1999100](https://bugzil.la/1999100)).

- Die CSS {{cssxref("basic-shape/shape")}} Funktion ist jetzt standardmäßig verfügbar. `shape()` ist ein {{cssxref("basic-shape")}} Datentyp, der es Ihnen ermöglicht, eine Form in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} mit einem oder mehreren "Form-Befehlen" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ähnelt in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion, aber im Gegensatz zu `path()`, das die [SVG Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, benutzt `shape()` standardmäßige CSS-Syntax. Dadurch können Sie CSS-Einheiten und CSS-Mathematikfunktionen verwenden, was das Erstellen und Bearbeiten von Formen erleichtert.
  ([Firefox Bug 1982941](https://bugzil.la/1982941)).

<!-- #### Entfernungen -->

### JavaScript

- Die {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} statischen Methoden werden jetzt unterstützt.
  Diese "zippen" mehrere Eingabe-Iteratoren zusammen und geben einen neuen Iterator zurück, der bei jedem Iterationsschritt die Gruppe der Eingabeelemente liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren Eingabe-Iteratoren kombinieren müssen, die positionsmäßig ausgerichtet sind (der erste Wert, den der erste Iterator liefert, entspricht dem ersten Wert, den die anderen Iteratoren liefern, und so weiter).
  ([Firefox Bug 2003333](https://bugzil.la/2003333)).

- Der [TC39 Legacy RegExp-Funktionen in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) Vorschlag wurde implementiert.
  Dies aktualisiert {{jsxref("RegExp.prototype.compile()")}}, so dass ein {{jsxref("TypeError")}} ausgelöst wird, wenn es auf einer Unterklasse von {{jsxref("RegExp")}} aufgerufen wird, oder wenn die Methode auf einem `RegExp` aufgerufen wird, das in einem anderen Bereich definiert wurde.
  `RegExp` statische Eigenschaften, wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und sein Alias `RegExp.$_`), sind nun konfigurierbar und nicht aufgezählt.
  Insbesondere bedeutet dies, dass sie aus dem `RegExp` Objekt gelöscht werden können.
  ([Firefox Bug 1306461](https://bugzil.la/1306461)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Diese bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion geleitet wurden.
  Die Mechanismen ermöglichen das Auditieren von unsicheren Codeverwendungen.
  Sie schreiben nicht vor, wie die Daten transformiert werden, könnten aber beispielsweise dazu verwendet werden, unsichere HTML-Elemente aus von Nutzern bereitgestellten Zeichenfolgen zu entfernen.
  ([Firefox Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, mit der Sie feststellen können, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, falls ja, von welcher(n) Seite(n).
  ([Firefox Bug 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften werden nun beim [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis gefüllt, wenn der Zeiger bewegt wird - bisher wurden diese auf Null gesetzt.
  ([Firefox Bug 1987671](https://bugzil.la/1987671)).

- Die [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) Methode der [Navigation API](/de/docs/Web/API/Navigation_API) wird nun unterstützt.
  Diese kann verwendet werden, um einen Post-Commit-Navigations-Handler dynamisch innerhalb eines Pre-Commit-Handlers zu registrieren, was nützlich ist, wenn die Aktionen der ausgeführten Navigation von Daten abhängen, die in der Pre-Commit-Phase abgerufen wurden.
  ([Firefox Bug 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "paste" Befehl kann nun mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) im Webinhalt (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird unter Verwendung der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) implementiert und teilt die gleichen [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie die Anforderung einer vorübergehenden Aktivierung und Benutzerbestätigung beim Einfügen von inhaltsübergreifenden Inhalten.
  ([Firefox Bug 1998195](https://bugzil.la/1998195)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 148 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund liegendes Fenster zu öffnen, das mit beliebigem HTML-Inhalt besetzt werden kann, wie beispielsweise einem Video mit benutzerdefinierten Steuerelementen oder einem Satz von Streams, die die Teilnehmer eines Videoanrufs zeigen.
  ([Firefox Bug 1858562](https://bugzil.la/1858562)).
