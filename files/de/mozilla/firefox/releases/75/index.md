---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Lesen Sie auch den begleitenden Hacks-Artikel — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie nun neben CSS-Selektoren auch [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu finden ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern. Dies geschieht, indem Sie das reguläre Ausdrucksmuster in Schrägstrichen schreiben, zusätzlich zur bisherigen reinen Textsuche ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde implementiert. Dieser Zeichenfolgenwert kann verwendet werden, um anzugeben, dass das Bild [lazy geladen](/de/docs/Web/Performance/Lazy_loading) werden soll, indem dessen Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Element/style)-Elements ist jetzt gemäß der Spezifikation nur auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die Funktionen {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der Wert `all` für die Eigenschaft {{cssxref("text-decoration-skip-ink")}} wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und Attribute sind jetzt in Firefox, unter Windows und Linux, verfügbar (beachten Sie, dass diese erst nutzbar sein werden, wenn Bildschirmleseprogramme diese unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs im `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Unter macOS warten wir zunächst darauf, dass Apple definiert, welche Safari-Attribute als Apple-Dialekt-Attribute für VoiceOver ausgesetzt werden, und werden dann folgen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Klasse wird jetzt unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die Eigenschaft [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) wurde gemäß dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) aktualisiert. Anstatt wie zuvor einen `TypeError` zu werfen, gibt sie jetzt `null` zurück, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) verfügt über eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und weiterhin verfügbaren) Methode [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) behandelt `requestSubmit()` die Anfrage so, als hätte ein angegebenes Absende-Schaltfläche geklickt, anstatt nur die Formulardaten an den Empfänger zu senden. Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird ausgelöst, und das Formular wird vor dem Übermitteln der Daten auf seine Gültigkeit überprüft ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird jetzt durch ein Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) dargestellt, nicht mehr durch ein einfaches [`Event`](/de/docs/Web/API/Event). `SubmitEvent` enthält eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, mit der Sie ermitteln können, welches [`Element`](/de/docs/Web/API/Element) ausgelöst wurde, um das Formular abzusenden. Dies ermöglicht einen einzigen Handler für Submit-Events, der feststellen kann, welche von mehreren Absende-Schaltflächen oder Links verwendet wurde, um das Formular abzusenden ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Der Aufruf der Methode [`click()`](/de/docs/Web/API/HTMLElement/click) auf ein losgelöstes Element (nicht Teil eines DOM-Baums) funktioniert jetzt wie erwartet und führt dazu, dass ein `click`-Ereignis an dieses gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 bringt zahlreiche Erweiterungen der [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite to/from-Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt. Ebenso werden Füllanimationen automatisch entfernt, wenn sie durch andere unbefristet füllende Animationen ersetzt werden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies umfasst die Aktivierung der Unterstützung für:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der Getter [`Animation.timeline`](/de/docs/Web/API/Animation/timeline), [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden. In diesem Fall versucht die WebRTC-Laufzeit, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/CSP)-Nonces von Nicht-Skriptquellen wie CSS-Selektoren und `.getAttribute("nonce")`-Aufrufe werden jetzt ausgeblendet. Stattdessen kann die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft abgerufen werden, um Nonces aus Skripten zu verwenden ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, durch den Marionette bei jedem Start von Firefox initialisiert wurde. Jetzt wird dies durch das Argument der Befehlszeile und eine Umgebungsvariable gesteuert ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- Der Befehl `WebDriver:Print` wurde angepasst, sodass keine zusätzlichen Ränder mehr zum Dokument hinzugefügt werden ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Wert der Einstellung `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr standardmäßig zu deaktivieren ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Es wurden einige neue Einstellungen zu {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}, um zu steuern, ob das Zoomen pro Seite oder pro Tab geschieht
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}}, um zu steuern, ob der Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

- Der Name der Datei, die beim Speichern einer PDF mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann jetzt mit `toFileName` im Typ `tabs.PageSettings` angegeben werden ([Firefox-Bug 1483590](https://bugzil.la/1483590)).

### Manifest-Änderungen

- Die Berechtigung "privacy" ist jetzt optional ([Firefox-Bug 1618399](https://bugzil.la/1618399)).

## Ältere Versionen

{{Firefox_for_developers}}
