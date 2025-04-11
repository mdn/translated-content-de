---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen werden. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Artikel — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwickler-Tools

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu finden, zusätzlich zur bisherigen Möglichkeit, Elemente mithilfe von CSS-Selektoren zu lokalisieren ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur einfachen Textsuche, indem Sie den regulären Ausdruck in Schrägstrichen schreiben ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde jetzt implementiert. Dieser Zeichenfolgenwert kann verwendet werden, um anzugeben, dass das Bild [lazy loading](/de/docs/Web/Performance/Guides/Lazy_loading) verwenden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Elements ist nun gemäß der Spezifikation nur noch auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die Funktionen {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der `all`-Wert der {{cssxref("text-decoration-skip-ink")}}-Eigenschaft wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und -Attribute sind jetzt in Firefox für Windows und Linux verfügbar (beachten Sie, dass diese erst verwendbar sind, wenn Screenreader beginnen, sie zu unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zuerst darauf, dass Apple definiert, welche Apple-Dialekt-Attribute für VoiceOver freigegeben werden, und werden dann nachziehen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Klasse wird jetzt unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Anstatt einen `TypeError` auszulösen, gibt sie nun `null` zurück, wenn der Aufrufer eine strenge, asynchrone oder Generatorfunktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und weiterhin verfügbaren) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode agiert `requestSubmit()` so, als ob ein bestimmter Absendeknopf geklickt wurde, anstatt nur die Formulardaten an den Empfänger zu senden. Somit wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular wird auf Gültigkeit überprüft, bevor die Daten übermittelt werden ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird nun von einem Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) repräsentiert anstatt von einem einfachen [`Event`](/de/docs/Web/API/Event). `SubmitEvent` enthält eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die das [`Element`](/de/docs/Web/API/Element) ist, das zum Auslösen der Formulardatenübermittlung aufgerufen wurde. Mit diesem Ereignis können Sie einen einzelnen Handler für Submit-Ereignisse haben, der ermitteln kann, welcher von mehreren Absendeknöpfen oder Links verwendet wurde, um das Formular zu übermitteln ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Das Aufrufen der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf einem abgetrennten Element (einem, das nicht Teil eines DOM-Baums ist) funktioniert jetzt normal, wodurch ein `click`-Ereignis an das Element gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web-Animations-API

Firefox 75 bringt zahlreiche Erweiterungen der [Web-Animations-API](/de/docs/Web/API/Web_Animations_API):

- [Implizite to/from Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von Auffüllungs-Animationen, die durch andere unbefristet füllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies umfasst die Aktivierung der Unterstützung für:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)-Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Media, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden, wobei die WebRTC-Laufzeit versucht, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces von Nicht-Skript-Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufen sind jetzt versteckt. Stattdessen sollten Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft prüfen, um Nonces aus Skripten zu erreichen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Bug wurde behoben, der immer dazu führte, dass Marionette beim Start von Firefox initialisierte. Dies wurde nun auf das Kommandozeilen-Argument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde korrigiert, um dem Dokument keine zusätzlichen Ränder mehr hinzuzufügen ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Präferenzwert für `network.http.speculative-parallel-limit` wurde auf `0` gesetzt, um spekulative Verbindungen nicht mehr zu erzwingen ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}, um zu steuern, ob das Zoomen sitzungs- oder tab-spezifisch erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}}, um zu steuern, ob das Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

- Der Dateiname, der beim Speichern einer PDF mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann mittels `toFileName` im Typ `tabs.PageSettings` spezifiziert werden.([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifest-Änderungen

- Die "privacy"-Berechtigung ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))

## Ältere Versionen

{{Firefox_for_developers}}
