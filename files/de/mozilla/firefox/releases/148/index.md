---
title: Firefox 148 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 148 (Stabil)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 71bf9d9aafdab8fea55d3cde76982f94cc313013
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 wurde am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das anfängliche `about:blank`-Dokument lädt jetzt synchron. Eine Browsing-Kontext-Navigation kann auf `about:blank` auflösen (zum Beispiel, wenn die anfängliche URL leer ist oder explizit auf `about:blank` gesetzt wurde). In diesen Fällen ersetzt Firefox das anfängliche leere Dokument nicht mehr durch ein zweites, asynchron geladenes Dokument, sondern löst das `load`-Ereignis synchron auf dem anfänglichen Dokument aus. ([Firefox-Bug 543435](https://bugzil.la/543435)).

### CSS

- Die {{cssxref("position-area")}} Eigenschaft in der [CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält das verankerte Element jetzt korrekt innerhalb des Ansichtsfensters.
  ([Firefox-Bug 2008537](https://bugzil.la/2008537)).

- Die {{cssxref("position-try-order")}} Eigenschaft in der [CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) wird jetzt unterstützt und ermöglicht, die Reihenfolge zu ändern, in der Positions-Backups basierend auf dem verfügbaren Platz versucht werden. Dies beeinflusst auch die {{cssxref("position-try")}} Kurzschreibweise.
  ([Firefox-Bug 1989059](https://bugzil.la/1989059)).

- Die CSS-Eigenschaften {{cssxref("overflow")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} können jetzt auf {{Glossary("replaced_elements", "ersetzten Elementen")}} wie Bildern genauso verwendet werden wie bei anderen Elementen.
  Zuvor wurden ersetzte Elemente immer auf ihren Begrenzungscontainer zugeschnitten.
  ([Firefox-Bug 1999100](https://bugzil.la/1999100)).

- Die CSS-Funktion {{cssxref("basic-shape/shape")}} ist jetzt standardmäßig verfügbar. `shape()` ist ein {{cssxref("basic-shape")}} Datentyp, der es Ihnen ermöglicht, eine Form in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} mithilfe von einem oder mehreren "Shape-Kommandos" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die Funktion `shape()` ähnelt in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion, verwendet jedoch im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, die standardmäßige CSS-Syntax. Dies erlaubt die Verwendung von CSS-Einheiten und CSS-Mathematischen Funktionen, was das Erstellen und Bearbeiten von Formen erleichtert.
  ([Firefox-Bug 1982941](https://bugzil.la/1982941)).

### JavaScript

- Die statischen Methoden {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} werden jetzt unterstützt.
  Diese "zip" mehrere Eingabe-Iteratoren zusammen und geben einen neuen Iterator zurück, der bei jedem Iterationsschritt die Gruppe der Eingabeelemente liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren positionell ausgerichteten Eingabe-Iteratoren kombinieren müssen (der erste Wert, den der erste Iterator liefert, entspricht dem ersten Wert, den die anderen Iteratoren liefern, usw.).
  ([Firefox-Bug 2003333](https://bugzil.la/2003333)).

- Der [TC39 Legacy RegExp features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) Vorschlag wurde implementiert.
  Er aktualisiert {{jsxref("RegExp.prototype.compile()")}}, sodass ein {{jsxref("TypeError")}} ausgelöst wird, wenn es auf einer Unterklasse von {{jsxref("RegExp")}} aufgerufen wird oder wenn die Methode auf einem `RegExp` aufgerufen wird, der in einem anderen Bereich definiert wurde.
  `RegExp` statische Eigenschaften, wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und sein Alias `RegExp.$_`), sind normalisiert, um konfigurierbar und nicht aufzählbar zu sein.
  Insbesondere bedeutet dies, dass sie aus dem `RegExp` Objekt gelöscht werden können.
  ([Firefox-Bug 1306461](https://bugzil.la/1306461)).

### APIs

- Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) wird jetzt unterstützt, zusammen mit verwandten Methoden wie [`setHTML()`](/de/docs/Web/API/Element/setHTML).
  Dies ermöglicht Ihnen, HTML zu bereinigen, bevor es in den DOM eingefügt wird, und Ihnen vollständige Kontrolle über den resultierenden Inhalt zu geben, wodurch das Risiko von XSS-Angriffen reduziert wird.
  ([Firefox-Bug 1650370](https://bugzil.la/1650370)).

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Diese bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potentiell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion gegangen sind.
  Die Mechanismen erlauben das Überprüfen unsicherer Nutzung des Codes.
  Sie schreiben nicht vor, wie die Daten transformiert werden, können aber beispielsweise zur Bereinigung unsicherer HTML-Elemente aus vom Benutzer bereitgestellten Zeichenfolgen verwendet werden.
  ([Firefox-Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, was Ihnen ermöglicht festzustellen, ob ein Dokument in ein {{htmlelement("iframe")}} eingebettet ist und, wenn ja, von welcher(n) Seite(n).
  ([Firefox-Bug 1085214](https://bugzil.la/1085214)).

- Die Eigenschaften [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) auf dem [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt befüllt, wenn der Zeiger bewegt wird – zuvor waren diese auf null gesetzt.
  ([Firefox-Bug 1987671](https://bugzil.la/1987671)).

- Die Methode [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese kann verwendet werden, um einen Nachverarbeitungsnavigations-Handler dynamisch innerhalb eines Vorverarbeitungs-Handlers zu registrieren, was nützlich ist, wenn die Aktionen der festgelegten Navigation von Daten abhängen, die in der Vorverarbeitungsphase abgerufen wurden.
  ([Firefox-Bug 2009004](https://bugzil.la/2009004)).

#### DOM

- Der Befehl "einfügen" kann jetzt mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Webinhalten (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird mit der [Clipboard API](/de/docs/Web/API/Clipboard_API) umgesetzt und teilt dieselben [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie das Erfordernis einer vorübergehenden Aktivierung und die Benutzerbestätigung beim Einfügen von Inhalten aus einer anderen Quelle.
  ([Firefox-Bug 1998195](https://bugzil.la/1998195)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Wettbewerbskonflikt beim Initialisieren erforderlicher Browser-Funktionen wurde behoben, wenn ein neues Fenster geöffnet wird, was Probleme beim sofortigen Navigieren zu einer anderen URL verhindert ([Firefox-Bug 1891028](https://bugzil.la/1891028)).
- Ein Interoperabilitätsproblem zwischen Marionette und WebDriver BiDi wurde behoben, bei dem die BiDi `clientWindow` ID fälschlicherweise als Fensterhandle in Marionette verwendet wurde ([Firefox-Bug 2002949](https://bugzil.la/2002949)).

#### WebDriver BiDi

- Erste Unterstützung für die Interaktion mit dem Chrome-Bereich des Browsers (dem Firefox-Fenster selbst) hinzugefügt. Der Befehl `browsingContext.getTree` akzeptiert jetzt den herstellerspezifischen `moz:scope` Parameter und gibt Chrome-Kontexte zurück, wenn er auf `chrome` gesetzt ist und Firefox mit dem Argument `--remote-allow-system-access` gestartet wurde. Diese Kontexte können mit `script.evaluate` und `script.callFunction` verwendet werden, um privilegiertes JavaScript mit Zugriff auf Gecko-APIs auszuführen. Andere Befehle unterstützen Chrome-Kontexte noch nicht vollständig, aber die Unterstützung wird bei Bedarf schrittweise hinzugefügt ([Firefox-Bug 1944568](https://bugzil.la/1944568), [Firefox-Bug 1944570](https://bugzil.la/1944570) und [Firefox-Bug 1851788](https://bugzil.la/1851788)).
- Die Befehle `emulation.setGeolocationOverride` und `emulation.setScreenOrientationOverride` wurden aktualisiert, um das neue Reset-Verhalten zu implementieren: Kontexte werden nur zurückgesetzt, wenn der `contexts` Parameter bereitgestellt wird, und Benutzerkontexte nur, wenn der `userContexts` Parameter angegeben ist ([Firefox-Bug 1998732](https://bugzil.la/1998732) und [Firefox-Bug 1998734](https://bugzil.la/1998734)).
- Ein Wettbewerbskonflikt in `browsingContext.create` wurde behoben, bei dem das Offen von neuen Tabs im Vordergrund vor dem Sichtbarwerden des Dokuments zurückkehren könnte ([Firefox-Bug 2003857](https://bugzil.la/2003857)).
- Ein Problem behoben, das auftrat, wenn eine Navigation auf eine Fehlerseite umleitet wurde ([Firefox-Bug 2013822](https://bugzil.la/2013822)).
- Ein Problem in `network.getData` wurde behoben, das einen `RangeError` verursachte, wenn chunked Antwortkörper aufgrund eines Größenunterschieds dekodiert wurden ([Firefox-Bug 2004973](https://bugzil.la/2004973)).
- Ein Problem wurde behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Top-Level-Kontext-ID anstelle der iframe-Kontext-ID meldeten ([Firefox-Bug 1964905](https://bugzil.la/1964905)).
- Die Leistung der WebDriver-BiDi-Befehle wurde um etwa 100 ms verbessert, wenn der ausgewählte Kontext während der Befehlsausführung nicht mehr verfügbar ist ([Firefox-Bug 1934326](https://bugzil.la/1934326)).

#### Marionette

- Der Befehl `Reporting:GenerateTestReport` wurde hinzugefügt, um [einen Testbericht über die Reporting API zu generieren](https://www.w3.org/TR/reporting-1/#generate-test-report-command) ([Firefox-Bug 1909662](https://bugzil.la/1909662)).

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 148 verfügbar, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document-Picture-in-Picture-API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigen HTML-Inhalten gefüllt werden kann, wie beispielsweise einem Video mit benutzerdefinierten Steuerelementen oder einem Satz von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen.
  ([Firefox-Bug 1858562](https://bugzil.la/1858562)).
