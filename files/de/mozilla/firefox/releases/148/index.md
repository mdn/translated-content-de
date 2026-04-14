---
title: Firefox 148 Versionshinweise für Entwickler
short-title: Firefox 148
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: d9e71f8b15265a041b550a54a1d0970f049053e4
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 148, die Entwickler betreffen. Firefox 148 wurde am [24. Februar 2026](https://whattrainisitnow.com/release/?version=148) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das initiale `about:blank` Dokument wird nun synchron geladen. Die erste Navigation eines Browsing-Kontextes kann zu `about:blank` auflösen (zum Beispiel, wenn die initiale URL leer ist oder explizit auf `about:blank` gesetzt wurde). In diesen Fällen ersetzt Firefox nicht länger das initiale leere Dokument durch ein zweites, asynchron geladenes, sondern löst das `load` Ereignis synchron auf dem initialen Dokument aus. ([Firefox Bug 543435](https://bugzil.la/543435)).

### CSS

- Die {{cssxref("position-area")}} Eigenschaft in [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) hält nun das verankerte Element korrekt innerhalb des Viewports. ([Firefox Bug 2008537](https://bugzil.la/2008537)).

- Die {{cssxref("position-try-order")}} Eigenschaft in [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) wird nun unterstützt und erlaubt die Reihenfolge zu ändern, in der Positions-Fallback-Optionen basierend auf dem verfügbaren Raum ausprobiert werden. Dies betrifft auch die Kurzform {{cssxref("position-try")}}. ([Firefox Bug 1989059](https://bugzil.la/1989059)).

- Die CSS-Eigenschaften {{cssxref("overflow")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} können nun bei {{Glossary("replaced_elements", "ersetzten Elementen")}} wie Bildern verwendet werden, genauso wie bei anderen Elementen. Bislang wurden ersetzte Elemente immer auf ihren Begrenzungsrahmen beschnitten. ([Firefox Bug 1999100](https://bugzil.la/1999100)).

- Die CSS {{cssxref("basic-shape/shape")}} Funktion ist nun standardmäßig verfügbar. `shape()` ist ein {{cssxref("basic-shape")}} Datentyp, der Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mit einem oder mehreren "Formbefehlen" zu definieren. Diese Befehle ähneln stark den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Die `shape()` Funktion ähnelt in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion, aber im Gegensatz zu `path()`, das die [SVG Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, nutzt `shape()` standardmäßige CSS-Syntax. Dies ermöglicht die Verwendung von CSS-Einheiten und CSS-Mathematikfunktionen, was das Erstellen und Bearbeiten von Formen erleichtert. ([Firefox Bug 1982941](https://bugzil.la/1982941)).

### JavaScript

- Die statischen Methoden {{jsxref("Iterator.zip()")}} und {{jsxref("Iterator.zipKeyed()")}} werden nun unterstützt. Diese "zippen" mehrere Eingabeiterators zusammen und geben einen neuen Iterator zurück, der bei jedem Iterationsschritt die Gruppe der Eingabeelemente liefert. Sie sind nützlich, wenn Sie Daten aus mehreren Eingabeiterators kombinieren müssen, die positionsmäßig übereinstimmen (der erste von dem ersten Iterator gelieferte Wert entspricht dem ersten von den anderen Iteratoren gelieferten Wert usw.). ([Firefox Bug 2003333](https://bugzil.la/2003333)).

- Der [TC39 Legacy RegExp Features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) Vorschlag wurde implementiert. Dies aktualisiert {{jsxref("RegExp.prototype.compile()")}}, sodass ein {{jsxref("TypeError")}} ausgelöst wird, wenn es auf einem Untertyp von {{jsxref("RegExp")}} aufgerufen wird oder wenn die Methode auf eine `RegExp` angewendet wird, die in einem anderen Bereich definiert wurde. `RegExp` statische Eigenschaften, wie `RegExp.$1` – `RegExp.$9` und `RegExp.input` (und sein Alias `RegExp.$_`), sind normiert, um konfigurierbar und nicht auflistbar zu sein. Insbesondere bedeutet dies, dass sie aus dem `RegExp` Objekt gelöscht werden können. ([Firefox Bug 1306461](https://bugzil.la/1306461)).

### APIs

- Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) wird jetzt unterstützt, zusammen mit verwandten Methoden wie [`setHTML()`](/de/docs/Web/API/Element/setHTML). Dies ermöglicht Ihnen, HTML zu bereinigen, bevor es in den DOM eingefügt wird, sodass Sie die volle Kontrolle über den resultierenden Inhalt haben und das Risiko von XSS-Angriffen verringern. ([Firefox Bug 1650370](https://bugzil.la/1650370)).

- Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) wird nun unterstützt. Diese stellt Mechanismen bereit, um sicherzustellen, dass Eigenschaften und Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden, die durch eine Transformationsfunktion gegangen sind. Die Mechanismen erlauben das Audit von unsicheren Codeeinsätzen. Sie schreiben nicht vor, wie die Daten transformiert werden sollen, könnten jedoch beispielsweise verwendet werden, um unsichere HTML-Elemente aus benutzerdefinierten Zeichenketten zu bereinigen. ([Firefox Bug 1994690](https://bugzil.la/1994690)).

- Die [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) Eigenschaft wird jetzt unterstützt, wodurch Sie feststellen können, ob ein Dokument in einem {{htmlelement("iframe")}} eingebettet ist und, falls ja, von welcher(n) Seite(n). ([Firefox Bug 1085214](https://bugzil.la/1085214)).

- Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften im [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) Ereignis werden nun gefüllt, wenn der Zeiger bewegt wird – zuvor wurden diese auf null gesetzt. ([Firefox Bug 1987671](https://bugzil.la/1987671)).

- Die [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) Methode der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt. Diese kann verwendet werden, um einen Post-Commit-Navigations-Handler dynamisch innerhalb eines Pre-Commit-Handlers zu registrieren, was nützlich ist, wenn die Aktionen der ausgeführten Navigation von Daten abhängen, die in der Pre-Commit-Phase abgerufen wurden. ([Firefox Bug 2009004](https://bugzil.la/2009004)).

#### DOM

- Der "paste" Befehl kann nun mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) in Webinhalten (zusätzlich zu Web-Erweiterungen) verwendet werden. Dies wird unter Verwendung der [Clipboard API](/de/docs/Web/API/Clipboard_API) implementiert und teilt dieselben [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations), wie das Erfordernis einer vorübergehenden Aktivierung und einer Benutzerbestätigung beim Einfügen von cross-origin Inhalten. ([Firefox Bug 1998195](https://bugzil.la/1998195)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Race-Condition während der Initialisierung erforderlicher Browser-Features beim Öffnen eines neuen Fensters wurde behoben, um Probleme beim sofortigen Navigieren zu einer anderen URL zu verhindern ([Firefox Bug 1891028](https://bugzil.la/1891028)).
- Ein Interoperabilitätsproblem zwischen Marionette und WebDriver BiDi, bei dem die BiDi `clientWindow` ID fälschlicherweise als Fensterhandle in Marionette verwendet wurde, wurde behoben ([Firefox Bug 2002949](https://bugzil.la/2002949)).

#### WebDriver BiDi

- Erste Unterstützung für die Interaktion mit dem Chrome-Bereich des Browsers (das Firefox-Fenster selbst) wurde hinzugefügt. Der `browsingContext.getTree` Befehl akzeptiert nun den lieferantenspezifischen `moz:scope` Parameter und kehrt zu Chrome-Kontexten zurück, wenn er auf `chrome` gesetzt ist und Firefox mit dem `--remote-allow-system-access` Argument gestartet wurde. Diese Kontexte können mit `script.evaluate` und `script.callFunction` verwendet werden, um privilegiertes JavaScript mit Zugriff auf Gecko APIs auszuführen. Andere Befehle unterstützen noch keine Chrome-Kontexten, aber die Unterstützung wird nach Bedarf schrittweise hinzugefügt ([Firefox Bug 1944568](https://bugzil.la/1944568), [Firefox Bug 1944570](https://bugzil.la/1944570) und [Firefox Bug 1851788](https://bugzil.la/1851788)).
- Die `emulation.setGeolocationOverride` und `emulation.setScreenOrientationOverride` Befehle wurden aktualisiert, um das neue Reset-Verhalten umzusetzen: Kontexte werden nur zurückgesetzt, wenn der `contexts` Parameter übergeben wird, und Benutzerkontexte nur, wenn der `userContexts` Parameter angegeben ist ([Firefox Bug 1998732](https://bugzil.la/1998732) und [Firefox Bug 1998734](https://bugzil.la/1998734)).
- Eine Race-Condition in `browsingContext.create`, bei der das Öffnen eines neuen Tabs im Vordergrund vor der Sichtbarkeit des Dokuments erfolgen konnte, wurde behoben ([Firefox Bug 2003857](https://bugzil.la/2003857)).
- Ein Problem wurde behoben, das auftrat, wenn eine Navigation auf eine Fehlerseite umleitete ([Firefox Bug 2013822](https://bugzil.la/2013822)).
- Ein Problem in `network.getData`, das einen `RangeError` verursachte, wenn chunked Antwortkörper aufgrund einer Größenabweichung dekodiert wurden, wurde behoben ([Firefox Bug 2004973](https://bugzil.la/2004973)).
- Ein Problem, bei dem die `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` Ereignisse fälschlicherweise die oberste Kontext-ID anstelle der Kontext-ID des iframes meldeten, wurde behoben ([Firefox Bug 1964905](https://bugzil.la/1964905)).
- Die Leistung von WebDriver BiDi Befehlen wurde verbessert um ca. 100 ms, wenn der ausgewählte Kontext während der Befehlsausführung nicht mehr verfügbar war ([Firefox Bug 1934326](https://bugzil.la/1934326)).

#### Marionette

- Der `Reporting:GenerateTestReport` Befehl wurde hinzugefügt, um [einen Testbericht über die Reporting API zu generieren](https://w3c.github.io/reporting/#generate-test-report-command) ([Firefox Bug 1909662](https://bugzil.la/1909662)).

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 148 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Sammlung von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen. ([Firefox Bug 1858562](https://bugzil.la/1858562)).

- **Benutzerdefinierte Media Queries**: `layout.css.custom-media.enabled`

  Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS at-rule definiert Aliase für lange oder komplexe Media Queries. Anstatt dieselbe festcodierte `<media-query-list>` in mehreren `@media` At-Rules zu wiederholen, kann sie einmal in einer `@custom-media` At-Rule definiert und überall im Stylesheet benötigt referenziert werden. ([Firefox Bug 2004653](https://bugzil.la/2004653)).
