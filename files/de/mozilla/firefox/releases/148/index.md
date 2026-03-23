---
title: Firefox 148 Versionshinweise für Entwickler
short-title: Firefox 148
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 4e100cee733013cb48babc0c734fe96dda9ece6c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 wurde am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das initiale `about:blank` Dokument wird jetzt synchron geladen. Eine Browsing-Kontext kann bei der ersten Navigation zu `about:blank` auflösen (zum Beispiel, wenn die initiale URL leer ist oder explizit auf `about:blank` gesetzt wird). In diesen Fällen ersetzt Firefox das initiale leere Dokument nicht mehr durch ein zweites, asynchron geladenes Dokument, sondern löst das `load`-Ereignis synchron auf dem initialen Dokument aus. ([Firefox Bug 543435](https://bugzil.la/543435)).

### CSS

- Die {{cssxref("position-area")}} Eigenschaft im [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält jetzt korrekt das verankerte Element innerhalb des Viewports.
  ([Firefox Bug 2008537](https://bugzil.la/2008537)).

- Die {{cssxref("position-try-order")}} Eigenschaft im [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) wird jetzt unterstützt und ermöglicht es, die Reihenfolge zu ändern, in der Fall-Back-Positionen basierend auf dem verfügbaren Raum ausprobiert werden. Dies betrifft auch die {{cssxref("position-try")}} Kurzform-Eigenschaft.
  ([Firefox Bug 1989059](https://bugzil.la/1989059)).

- Die {{cssxref("overflow")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} CSS-Eigenschaften können jetzt auf {{Glossary("replaced_elements", "ersetzbaren Elementen")}} wie Bildern in der gleichen Weise verwendet werden, wie sie mit anderen Elementen verwendet werden. Zuvor wurden ersetzbare Elemente immer auf ihren Begrenzungscontainer zugeschnitten.
  ([Firefox Bug 1999100](https://bugzil.la/1999100)).

- Die CSS-Funktion {{cssxref("basic-shape/shape")}} ist jetzt standardmäßig verfügbar. `shape()` ist ein {{cssxref("basic-shape")}} Datentyp, mit dem Sie eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung von einem oder mehreren "Formbefehlen" definieren können. Diese Befehle ähneln stark den [SVG-Pfbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Die `shape()` Funktion ist in einigen Aspekten der {{cssxref("basic-shape/path","path()")}} Funktion ähnlich, aber im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, nutzt `shape()` die Standard-CSS-Syntax. Dies ermöglicht Ihnen die Verwendung von CSS-Einheiten und CSS-Mathematik-Funktionen, was das Erstellen und Bearbeiten von Formen erleichtert.
  ([Firefox Bug 1982941](https://bugzil.la/1982941)).

### JavaScript

- Die statischen Methoden {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} werden jetzt unterstützt.
  Diese bringen mehrere Eingabe-Iteratoren zusammen und geben einen neuen Iterator zurück, der die Gruppe der Eingabeelemente bei jedem Iterationsschritt liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren Eingabe-Iteratoren kombinieren müssen, die positionsgetreu ausgerichtet sind (der erste von einem Iterator gelieferte Wert entspricht dem ersten von den anderen Iteratoren gelieferten Wert usw.).
  ([Firefox Bug 2003333](https://bugzil.la/2003333)).

- Der [TC39-Vorschlag zu Legacy RegExp Features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) wurde implementiert.
  Dies aktualisiert {{jsxref("RegExp.prototype.compile()")}}, sodass ein {{jsxref("TypeError")}} ausgelöst wird, wenn es auf einer Subklasse von {{jsxref("RegExp")}} aufgerufen wird oder wenn die Methode auf einem `RegExp` aufgerufen wird, das in einem anderen Realm definiert wurde.
  `RegExp` statische Eigenschaften wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und dessen Alias `RegExp.$_`) sind konfigurierbar und nicht aufzählbar normalisiert.
  Dies bedeutet insbesondere, dass sie aus dem `RegExp` Objekt gelöscht werden können.
  ([Firefox Bug 1306461](https://bugzil.la/1306461)).

### APIs

- Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) wird jetzt unterstützt, zusammen mit verwandten Methoden wie [`setHTML()`](/de/docs/Web/API/Element/setHTML).
  Dies ermöglicht es Ihnen, HTML zu bereinigen, bevor Sie es in das DOM einfügen, wodurch Sie die volle Kontrolle über den resultierenden Inhalt erhalten und das Risiko von XSS-Angriffen reduzieren.
  ([Firefox Bug 1650370](https://bugzil.la/1650370)).

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Dies stellt Mechanismen bereit, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion gegangen sind.
  Die Mechanismen ermöglichen die Prüfung unsicherer Codeverwendungen.
  Sie schreiben nicht vor, wie die Daten umgewandelt werden, könnten aber z. B. verwendet werden, um unsichere HTML-Elemente aus benutzerdefinierten Strings zu bereinigen.
  ([Firefox Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, die es Ihnen ermöglicht zu bestimmen, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und falls ja, von welchen Seiten.
  ([Firefox Bug 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften im [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt befüllt, wenn der Zeiger bewegt wird – zuvor wurden diese auf null gesetzt.
  ([Firefox Bug 1987671](https://bugzil.la/1987671)).

- Die [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) Methode der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese kann verwendet werden, um einen post-commit Navigations-Handler innerhalb eines pre-commit Handlers dynamisch zu registrieren, was nützlich ist, wenn die Aktionen der committen Navigation von Daten abhängen, die in der pre-commit Phase abgerufen wurden.
  ([Firefox Bug 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "Einfügen"-Befehl kann jetzt mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Webinhalten (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird unter Verwendung der [Clipboard API](/de/docs/Web/API/Clipboard_API) implementiert und teilt die gleichen [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie die Anforderung von temporärer Aktivierung und Benutzerbestätigung beim Einfügen von plattformübergreifenden Inhalten.
  ([Firefox Bug 1998195](https://bugzil.la/1998195)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Wettlauf beim Initialisieren von erforderlichen Browser-Features beim Öffnen eines neuen Fensters wurde behoben, um Probleme beim sofortigen Navigieren zu einer anderen URL zu verhindern ([Firefox Bug 1891028](https://bugzil.la/1891028)).
- Ein Interoperabilitätsproblem zwischen Marionette und WebDriver BiDi wurde behoben, bei dem die BiDi `clientWindow` ID fälschlicherweise als Fenstergriff in Marionette verwendet wurde ([Firefox Bug 2002949](https://bugzil.la/2002949)).

#### WebDriver BiDi

- Erste Unterstützung für die Interaktion mit dem Chrome-Bereich des Browsers (das Firefox-Fenster selbst) wurde hinzugefügt. Der Befehl `browsingContext.getTree` akzeptiert jetzt den vendorspezifischen Parameter `moz:scope` und gibt Chrome-Kontexte zurück, wenn auf `chrome` gesetzt und Firefox mit dem Argument `--remote-allow-system-access` gestartet wurde. Diese Kontexte können mit `script.evaluate` und `script.callFunction` verwendet werden, um privilegiertes JavaScript mit Zugriff auf Gecko APIs auszuführen. Andere Befehle unterstützen noch keine Chrome-Kontexte, aber die Unterstützung wird nach Bedarf schrittweise hinzugefügt ([Firefox Bug 1944568](https://bugzil.la/1944568), [Firefox Bug 1944570](https://bugzil.la/1944570), und [Firefox Bug 1851788](https://bugzil.la/1851788)).
- Die Befehle `emulation.setGeolocationOverride` und `emulation.setScreenOrientationOverride` wurden aktualisiert, um das neue Verhalten für das Zurücksetzen zu implementieren: Kontexte werden nur zurückgesetzt, wenn der Parameter `contexts` bereitgestellt wird, und Benutzerkontexte nur, wenn der Parameter `userContexts` angegeben wird ([Firefox Bug 1998732](https://bugzil.la/1998732) und [Firefox Bug 1998734](https://bugzil.la/1998734)).
- Ein Rennen in `browsingContext.create` wurde behoben, bei dem das Öffnen eines neuen Tabs im Vordergrund vor der Sichtbarwerdung des Dokuments zurückgegeben werden konnte ([Firefox Bug 2003857](https://bugzil.la/2003857)).
- Ein Problem, das auftrat, wenn eine Navigation zu einer Fehlerseite umgeleitet wurde, wurde behoben ([Firefox Bug 2013822](https://bugzil.la/2013822)).
- Ein Problem in `network.getData`, das einen `RangeError` verursachte, wurde behoben, wenn chunked Antwortkörper aufgrund eines Größenmismatches dekodiert wurden ([Firefox Bug 2004973](https://bugzil.la/2004973)).
- Ein Problem, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Kontext-ID des obersten Levels anstelle der Kontext-ID des iframes meldeten, wurde behoben ([Firefox Bug 1964905](https://bugzil.la/1964905)).
- Die Leistung von WebDriver BiDi-Befehlen wurde um etwa 100 ms verbessert, wenn der gewählte Kontext während der Befehlsausführung nicht mehr verfügbar ist ([Firefox Bug 1934326](https://bugzil.la/1934326)).

#### Marionette

- Der Befehl `Reporting:GenerateTestReport` wurde hinzugefügt, um [einen Testbericht über die Reporting API zu erzeugen](https://w3c.github.io/reporting/#generate-test-report-command) ([Firefox Bug 1909662](https://bugzil.la/1909662)).

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 148 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die passende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein stets im Vordergrund befindliches Fenster zu öffnen, das mit beliebigen HTML-Inhalten gefüllt werden kann, wie etwa ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenz-Anrufs zeigen.
  ([Firefox Bug 1858562](https://bugzil.la/1858562)).
