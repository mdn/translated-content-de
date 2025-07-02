---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen werden. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Beitrag — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu finden, zusätzlich zur bisherigen Möglichkeit, Elemente mithilfe von CSS-Selektoren zu lokalisieren ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können nun [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mithilfe von [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur Textsuche, indem Sie das reguläre Ausdruck in Schrägstrichen angeben ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde nun implementiert. Dieser String-Wert kann verwendet werden, um anzugeben, dass das Bild [verzögert geladen](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Elements ist nun gemäß der Spezifikation auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}}, und {{cssxref("clamp", "clamp()")}} Funktionen wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der `all`-Wert der {{cssxref("text-decoration-skip-ink")}} Eigenschaft wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965))

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und -Attribute sind jetzt in Firefox auf Windows und Linux verfügbar (beachten Sie, dass diese noch nicht nutzbar sind, bis Screenreader sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zunächst darauf, dass Apple definiert, welche Attribute Safari als Apple-Dialekt für VoiceOver freigeben wird, und werden dann entsprechend folgen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden nun unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Klasse wird nun unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Anstatt einen `TypeError` auszulösen, wird nun `null` zurückgegeben, wenn der Aufrufer eine strenge, asynchrone oder Generatorfunktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zu der alten (und weiterhin verfügbaren) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode, agiert `requestSubmit()` so, als ob ein spezifizierter Senden-Button geklickt wurde, anstatt nur die Formulardaten an den Empfänger zu senden. Damit wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular auf Gültigkeit überprüft, bevor die Daten abgesendet werden ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird nun durch ein Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) dargestellt, anstatt eines einfachen [`Event`](/de/docs/Web/API/Event). `SubmitEvent` enthält eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, welche das [`Element`](/de/docs/Web/API/Element) ist, das zum Absenden des Formulars aufgerufen wurde. Mit diesem Ereignis können Sie einen einzigen Handler für Absende-Ereignisse haben, der erkennen kann, welcher von mehreren Absende-Buttons oder Links verwendet wurde, um das Formular abzuschicken ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Der Aufruf der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf einem abgetrennten Element (eins, das nicht zu einem DOM-Baum gehört) funktioniert jetzt normal, was dazu führt, dass ein `click`-Ereignis an es gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web-Animations-API

Firefox 75 sieht zahlreiche Ergänzungen zur [Web-Animations-API](/de/docs/Web/API/Web_Animations_API):

- [Implizite zu/von Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden nun unterstützt, ebenso wie das automatische Entfernen von Füllanimationen, die durch andere unbefristet füllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies beinhaltet die Unterstützung für:
  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Die [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)-Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)-Funktionen sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web-Audio und WebRTC

- Die [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)-Methode kann jetzt ohne Argumente aufgerufen werden, wobei dann die WebRTC-Laufzeit versucht, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces aus nicht-Skript-Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufen, sind nun versteckt. Stattdessen sollten Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft prüfen, um Nonces aus Skripten zuzugreifen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der immer dazu führte, dass Marionette beim Firefox-Start initialisierte. Es ist nun auf das Command-Line-Argument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde so korrigiert, dass keine zusätzlichen Ränder mehr zum Dokument hinzugefügt werden ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Präferenzwert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zwangsweise zu deaktivieren ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):
  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} zur Steuerung, ob das Zoomen auf einer pro-Site- oder pro-Tab-Basis erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} zur Steuerung, ob das Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

- Der Name der Datei, die beim Speichern eines PDFs mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann mithilfe von `toFileName` im Typ `tabs.PageSettings` angegeben werden.([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifest-Änderungen

- Die "privacy"-Berechtigung ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))

## Ältere Versionen

{{Firefox_for_developers}}
