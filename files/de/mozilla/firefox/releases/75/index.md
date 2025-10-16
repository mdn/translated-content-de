---
title: "Firefox 75: Versionshinweise für Entwickler"
short-title: Firefox 75
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen werden. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Artikel — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie nun [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu lokalisieren, zusätzlich zu der bisherigen Möglichkeit, Elemente mit CSS-Selektoren zu finden ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können nun [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur einfachen Textsuche, indem Sie das reguläre Ausdruck in Schrägstriche einschließen ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde nun implementiert. Dieser Zeichenfolgenwert kann verwendet werden, um anzugeben, dass das Bild [faul geladen](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Elements ist jetzt entsprechend der Spezifikation auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die Funktionen {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der `all`-Wert der {{cssxref("text-decoration-skip-ink")}}-Eigenschaft wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und -Attribute sind jetzt in Firefox unter Windows und Linux verfügbar (es sei jedoch darauf hingewiesen, dass sie erst dann verwendet werden können, wenn Bildschirmleser sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zunächst darauf, dass Apple definiert, welche Apple-Dialektattribute für VoiceOver in Safari bereitgestellt werden sollen, und werden dann entsprechend agieren.

### JavaScript

- [Public static class fields](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Klasse wird jetzt unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Anstatt einen `TypeError` auszulösen, gibt sie jetzt `null` zurück, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und weiterhin verfügbaren) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode agiert `requestSubmit()` so, als würde ein spezifizierter Sendeknopf geklickt, anstatt nur die Formulardaten an den Empfänger zu senden. Somit wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular auf Validität geprüft, bevor die Daten gesendet werden ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird jetzt durch ein Objekt des Typs [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) dargestellt, anstatt durch ein einfaches [`Event`](/de/docs/Web/API/Event). `SubmitEvent` beinhaltet eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die das [`Element`](/de/docs/Web/API/Element) ist, das zur Auslösung der Formularübermittlung verwendet wurde. Mit diesem Ereignis können Sie einen einzigen Handler für Übermittlungsergebnisse haben, der erkennen kann, welcher von mehreren Übermittlungsbuttons oder Links verwendet wurde, um das Formular zu übermitteln ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Das Aufrufen der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf ein abgetrenntes Element (eines, das nicht Teil eines DOM-Baums ist) funktioniert jetzt normal und führt dazu, dass ein `click`-Ereignis an das Element gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 bringt zahlreiche Ergänzungen zur [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite Von/Bis-Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, genauso wie das automatische Entfernen von füllenden Animationen, die durch andere unbegrenzt füllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies beinhaltet die Aktivierung der Unterstützung für:
  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)-Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden, wobei die WebRTC-Laufzeit versucht, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Nicht-Skript-Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufe von [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces sind jetzt versteckt. Stattdessen sollte die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft überprüft werden, um Nonces von Skripten aufzurufen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Bug, der immer dazu führte, dass Marionette beim Start von Firefox initialisiert wurde, wurde behoben. Es ist nun auf das Befehlszeilenargument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde so korrigiert, dass keine zusätzlichen Ränder mehr zum Dokument hinzugefügt werden ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der voreingestellte Wert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zwangsweise zu deaktivieren ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):
  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}, um zu steuern, ob das Zoomen pro Website oder pro Tab erfolgt.
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}}, um zu steuern, ob das Zoomen auf die gesamte Seite oder nur auf Text angewendet wird.

- Der Dateiname, der beim Speichern einer PDF-Datei mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann über `toFileName` im Typ `tabs.PageSettings` angegeben werden.([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifeständerungen

- Die "privacy"-Berechtigung ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))
