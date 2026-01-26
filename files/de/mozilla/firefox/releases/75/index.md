---
title: Firefox 75 Versionshinweise für Entwickler
short-title: Firefox 75
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen werden. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Beitrag — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklertools

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu lokalisieren, zusätzlich zur vorherigen Möglichkeit, Elemente mit CSS-Selektoren zu finden ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur einfachen Textsuche, indem Sie das reguläre Ausdruck innerhalb von Schrägstrichen schreiben ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das `loading`-Attribut des {{HTMLElement("img")}}-Elements wurde jetzt implementiert. Dieser Zeichenfolgenwert kann verwendet werden, um anzugeben, dass das Bild [verzögert geladen](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Elements ist jetzt auf `text/css` beschränkt, entsprechend der Spezifikation ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} Funktionen wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der `all`-Wert der {{cssxref("text-decoration-skip-ink")}}-Eigenschaft wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und Attribute sind jetzt in Firefox unter Windows und Linux verfügbar (beachten Sie, dass diese erst nutzbar sind, wenn Bildschirmleser sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Unter macOS warten wir zunächst darauf, dass Apple definiert, welche Apple-Dialektattribute Safari an VoiceOver weitergeben wird, und werden dann entsprechend folgen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Klasse wird jetzt unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Anstelle des vorherigen Wurfs eines `TypeError` gibt sie jetzt `null` zurück, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Schnittstelle hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Unterschied zur alten (und weiterhin verfügbaren) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode handelt `requestSubmit()` so, als ob eine spezifizierte Absende-Schaltfläche geklickt wurde, anstatt einfach die Formulardaten an den Empfänger zu senden. So wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular auf Gültigkeit überprüft, bevor die Daten übermittelt werden ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird jetzt durch ein Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) anstelle eines einfachen [`Event`](/de/docs/Web/API/Event) dargestellt. `SubmitEvent` enthält eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) Eigenschaft, die das [`Element`](/de/docs/Web/API/Element) ist, das verwendet wurde, um die Formularübermittlung auszulösen. Mit diesem Ereignis können Sie einen einzigen Handler für Absendeereignisse haben, der feststellen kann, welche von mehreren Absende-Schaltflächen oder Links verwendet wurde, um das Formular abzusenden ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Der Aufruf der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode bei einem abgetrennten Element (eines, das nicht Teil eines DOM-Baums ist) funktioniert jetzt normal, was dazu führt, dass ein `click`-Ereignis an es gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 bringt zahlreiche Ergänzungen zur [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite von/nach Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von füllenden Animationen, die durch andere unbefristet füllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Das umfasst die Aktivierung der Unterstützung für:
  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der [`Animation.timeline`](/de/docs/Web/API/Animation/timeline) Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) Funktionen sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden, wobei in diesem Fall die WebRTC-Laufzeit selbst versucht, die neue lokale Sitzungsbeschreibung zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-{{Glossary("Nonce", "Nonces")}} von Nicht-Skript-Quellen, wie z. B. CSS-Selektoren und `.getAttribute("nonce")`-Aufrufen, sind jetzt verborgen. Stattdessen prüfen Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft, um Nonces von Skripten zu erreichen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass Marionette immer beim Start von Firefox initialisiert wurde. Dies wurde jetzt auf das Befehlszeilenargument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde korrigiert, sodass dem Dokument keine zusätzlichen Ränder mehr hinzugefügt werden ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Präferenzwert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zwangsweise zu deaktivieren ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):
  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} um zu steuern, ob das Zoomen für jede Website oder pro Tab gilt.
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} um zu steuern, ob das Zoomen auf die gesamte Seite oder nur auf den Text angewendet wird.

- Der Name der Datei, die beim Speichern eines PDFs mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann mit `toFileName` im Typ `tabs.PageSettings` angegeben werden. ([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifeständerungen

- Die "privacy"-Berechtigung ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))
