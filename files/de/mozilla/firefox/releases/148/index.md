---
title: Firefox 148 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 148 (Stabil)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 148, die Entwickler betreffen.
Firefox 148 wurde am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das initiale `about:blank` Dokument wird jetzt synchron geladen. Eine erste Navigation in einem Browsing-Kontext kann zu `about:blank` führen (zum Beispiel, wenn die initiale URL leer ist oder explizit auf `about:blank` gesetzt wird). In diesen Fällen ersetzt Firefox nicht mehr das initiale leere Dokument mit einem zweiten, asynchron geladenen und löst stattdessen das `load` Ereignis synchron auf dem initialen Dokument aus. ([Firefox-Bug 543435](https://bugzil.la/543435)).

### CSS

- Die {{cssxref("position-area")}} Eigenschaft in [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält das verankerte Element nun korrekt innerhalb des Ansichtsfensters.
  ([Firefox-Bug 2008537](https://bugzil.la/2008537)).

- Die {{cssxref("position-try-order")}} Eigenschaft in [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) wird jetzt unterstützt und ermöglicht das Ändern der Reihenfolge, in der Fallback-Optionen für Positionen je nach verfügbarem Platz ausprobiert werden. Dies betrifft auch die {{cssxref("position-try")}} Kurzform-Eigenschaft.
  ([Firefox-Bug 1989059](https://bugzil.la/1989059)).

- Die CSS-Eigenschaften {{cssxref("overflow")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} können jetzt auf {{Glossary("replaced_elements", "ersetzte Elemente")}} wie Bilder angewendet werden, genau wie bei anderen Elementen.
  Vorher wurden ersetzte Elemente immer auf ihren Begrenzungscontainer beschnitten.
  ([Firefox-Bug 1999100](https://bugzil.la/1999100)).

- Die CSS {{cssxref("basic-shape/shape")}} Funktion ist jetzt standardmäßig verfügbar. `shape()` ist ein {{cssxref("basic-shape")}} Datentyp, der es ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mit einem oder mehreren "Form-Befehlen" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist der {{cssxref("basic-shape/path","path()")}} Funktion in einigen Aspekten ähnlich, aber im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, nutzt `shape()` die Standard-CSS-Syntax. Dadurch können CSS-Einheiten und CSS-Mathematikfunktionen verwendet werden, was das Erstellen und Bearbeiten von Formen erleichtert.
  ([Firefox-Bug 1982941](https://bugzil.la/1982941)).

### JavaScript

- Die statischen Methoden {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} werden jetzt unterstützt.
  Diese "zippen" mehrere Eingabeiteratoren zusammen und geben einen neuen Iterator zurück, der die Gruppe von Eingabeelementen bei jedem Iterationsschritt liefert.
  Sie sind nützlich, wenn Sie Daten aus mehreren Eingabeiteratoren kombinieren müssen, die positionsabhängig ausgerichtet sind (der erste Wert, der vom ersten Iterator geliefert wird, entspricht dem ersten Wert, der von den anderen Iteratoren geliefert wird, und so weiter).
  ([Firefox-Bug 2003333](https://bugzil.la/2003333)).

- Der [TC39 Legacy RegExp features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) Vorschlag wurde implementiert.
  Dies aktualisiert {{jsxref("RegExp.prototype.compile()")}}, sodass ein {{jsxref("TypeError")}} ausgelöst wird, wenn es auf einer Unterklasse von {{jsxref("RegExp")}} aufgerufen wird, oder wenn die Methode auf einem `RegExp` aufgerufen wird, der in einem anderen Realm definiert ist.
  `RegExp`-statische Eigenschaften, wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und dessen Alias `RegExp.$_`), sind konfigurierbar und nicht aufzählbar normalisiert.
  Das bedeutet insbesondere, dass sie aus dem `RegExp`-Objekt gelöscht werden können.
  ([Firefox-Bug 1306461](https://bugzil.la/1306461)).

### APIs

- Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) wird jetzt unterstützt, zusammen mit verwandten Methoden wie [`setHTML()`](/de/docs/Web/API/Element/setHTML).
  Dies ermöglicht es Ihnen, HTML zu bereinigen, bevor es in das DOM eingefügt wird, was Ihnen die volle Kontrolle über den resultierenden Inhalt gibt und das Risiko von XSS-Angriffen reduziert.
  ([Firefox-Bug 1650370](https://bugzil.la/1650370)).

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird jetzt unterstützt.
  Dies bietet Mechanismen, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die durch eine Transformationsfunktion geleitet wurden.
  Die Mechanismen erlauben die Überprüfung von unsicheren Codeverwendungen.
  Sie schreiben nicht vor, wie die Daten transformiert werden, könnten aber beispielsweise verwendet werden, um unsichere HTML-Elemente aus von Benutzern bereitgestellten Zeichenfolgen zu bereinigen.
  ([Firefox-Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, wodurch Sie feststellen können, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet wird und, falls ja, von welcher(n) Seite(n).
  ([Firefox-Bug 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften beim [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden jetzt befüllt, wenn der Zeiger bewegt wird — vorher wurden diese auf Null gesetzt.
  ([Firefox-Bug 1987671](https://bugzil.la/1987671)).

- Die [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) Methode der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Dies kann verwendet werden, um einen Post-Commit-Navigationshandler dynamisch innerhalb eines Pre-Commit-Handlers zu registrieren, was nützlich ist, wenn die Aktionen der durchgeführten Navigation von Daten abhängen, die in der Pre-Commit-Phase geholt wurden.
  ([Firefox-Bug 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "paste" Befehl kann jetzt mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Webinhalten (zusätzlich zu Web-Erweiterungen) verwendet werden.
  Dies wird über die [Clipboard API](/de/docs/Web/API/Clipboard_API) implementiert und teilt die gleichen [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie temporäre Aktivierung und Nutzerbestätigung beim Einfügen von Inhalten aus fremden Quellen.
  ([Firefox-Bug 1998195](https://bugzil.la/1998195)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Race-Condition-Problem bei der Initialisierung erforderlicher Browser-Features beim Öffnen eines neuen Fensters wurde behoben, wodurch Probleme beim sofortigen Navigieren zu einer anderen URL verhindert werden ([Firefox-Bug 1891028](https://bugzil.la/1891028)).
- Ein Interoperabilitätsproblem zwischen Marionette und WebDriver BiDi, bei dem die BiDi `clientWindow` ID fälschlicherweise als Fenster-Handle in Marionette verwendet wurde, wurde behoben ([Firefox-Bug 2002949](https://bugzil.la/2002949)).

#### WebDriver BiDi

- Es wurde eine erste Unterstützung für die Interaktion mit dem Chrome-Bereich des Browsers (das Firefox-Fenster selbst) hinzugefügt. Der `browsingContext.getTree` Befehl akzeptiert jetzt den herstellerspezifischen `moz:scope` Parameter und gibt Chrome-Kontexte zurück, wenn er auf `chrome` gesetzt ist und Firefox mit dem `--remote-allow-system-access` Argument gestartet wurde. Diese Kontexte können mit `script.evaluate` und `script.callFunction` verwendet werden, um privilegiertes JavaScript mit Zugriff auf Gecko-APIs auszuführen. Andere Befehle unterstützen derzeit noch keine Chrome-Kontexte, aber die Unterstützung wird bei Bedarf schrittweise hinzugefügt ([Firefox-Bug 1944568](https://bugzil.la/1944568), [Firefox-Bug 1944570](https://bugzil.la/1944570) und [Firefox-Bug 1851788](https://bugzil.la/1851788)).
- Die Befehle `emulation.setGeolocationOverride` und `emulation.setScreenOrientationOverride` wurden aktualisiert, um das neue Zurücksetzungsverhalten zu implementieren: Kontexte werden nur zurückgesetzt, wenn der `contexts` Parameter angegeben wird, und Benutzerkontexte nur, wenn der `userContexts` Parameter spezifiziert ist ([Firefox-Bug 1998732](https://bugzil.la/1998732) und [Firefox-Bug 1998734](https://bugzil.la/1998734)).
- Ein Race-Condition-Problem in `browsingContext.create`, bei dem das Öffnen eines neuen Tabs im Vordergrund vor der Sichtbarkeit des Dokuments zurückkehren konnte, wurde behoben ([Firefox-Bug 2003857](https://bugzil.la/2003857)).
- Ein Problem wurde behoben, das auftrat, wenn eine Navigation zu einer Fehlerseite umgeleitet wurde ([Firefox-Bug 2013822](https://bugzil.la/2013822)).
- Ein Problem in `network.getData`, das einen `RangeError` verursachte, wenn chunked Response Bodies aufgrund einer Größenabweichung decodiert wurden, wurde behoben ([Firefox-Bug 2004973](https://bugzil.la/2004973)).
- Ein Problem, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Top-Level-Kontext-ID anstelle der iframe-Kontext-ID meldeten, wurde behoben ([Firefox-Bug 1964905](https://bugzil.la/1964905)).
- Die Leistung von WebDriver BiDi Befehlen wurde um etwa 100 ms verbessert, wenn der ausgewählte Kontext während der Befehlsausführung nicht mehr verfügbar ist ([Firefox-Bug 1934326](https://bugzil.la/1934326)).

#### Marionette

- Der Befehl `Reporting:GenerateTestReport` wurde zum [Erstellen eines Testberichts über die Reporting API](https://w3c.github.io/reporting/#generate-test-report-command) hinzugefügt ([Firefox-Bug 1909662](https://bugzil.la/1909662)).

## Experimentelle Web-Features

Diese Features werden in Firefox 148 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Features finden Sie auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) macht es möglich, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigen HTML-Inhalten wie einem Video mit benutzerdefinierten Steuerelementen oder einem Satz von Streams, die die Teilnehmer eines Videoanrufs zeigen, gefüllt werden kann.
  ([Firefox-Bug 1858562](https://bugzil.la/1858562)).
