---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 75, die Entwickler betreffen werden. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Beitrag — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie nun [XPath](/de/docs/Web/XPath)-Ausdrücke verwenden, um Elemente zu finden, zusätzlich zur bisherigen Möglichkeit, Elemente mit CSS-Selektoren zu lokalisieren ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur normalen Textsuche, indem Sie das reguläre Ausdruck in Schrägstrichen schreiben ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde nun implementiert. Dieser Zeichenfolgenwert kann verwendet werden, um anzugeben, dass das Bild [lazy geladen](/de/docs/Web/Performance/Lazy_loading) werden soll, indem der Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Element/style)-Elements ist nun gemäß der Spezifikation auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} Funktionen wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der `all` Wert der {{cssxref("text-decoration-skip-ink")}} Eigenschaft wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA) Rollen und Attribute sind jetzt in Firefox unter Windows und Linux verfügbar (beachten Sie, dass diese noch nicht nutzbar sind, bis Bildschirmleser sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs bei `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zunächst darauf, dass Apple definiert, welche Apple-Dialekt-Attribute für VoiceOver in Safari freigelegt werden, um dann gleichzuziehen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden nun unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Klasse wird nun unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Es wird nun `null` zurückgegeben, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist, anstatt einen `TypeError` auszulösen ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die {{domxref("HTMLFormElement")}} Schnittstelle hat eine neue Methode, {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}. Im Gegensatz zur alten (und weiterhin verfügbaren) {{domxref("HTMLFormElement.submit", "submit()")}} Methode verhält sich `requestSubmit()`, als ob ein spezifizierter Submit-Button geklickt wurde, anstatt nur die Formulardaten an den Empfänger zu senden. Deshalb wird das {{domxref("HTMLFormElement.submit_event", "submit")}} Ereignis ausgelöst und das Formular wird auf Gültigkeit geprüft, bevor die Daten abgeschickt werden ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das {{domxref("HTMLFormElement.submit_event", "submit")}} Ereignis wird jetzt durch ein Objekt vom Typ {{domxref("SubmitEvent")}} dargestellt und nicht mehr durch ein einfaches {{domxref("Event")}}. `SubmitEvent` enthält eine neue Eigenschaft {{domxref("SubmitEvent.submitter", "submitter")}}, die das {{domxref("Element")}} ist, das zur Auslösung der Formularübermittlung aufgerufen wurde. Mit diesem Ereignis können Sie einen einzigen Handler für Übermittlungsereignisse verwenden, der unterscheiden kann, welcher von mehreren Submit-Buttons oder Links verwendet wurde, um das Formular zu übermitteln ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Der Aufruf der Methode {{domxref("HTMLElement.click", "click()")}} auf einem losgelösten Element (ein Element, das nicht Teil eines DOM-Baums ist) funktioniert nun normal und sendet ein `click` Ereignis an das Element ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Webanimations-API

Firefox 75 bietet zahlreiche Ergänzungen für die [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite to/from-Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von ausfüllenden Animationen, die durch andere unbegrenzt ausfüllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies beinhaltet die Unterstützung für:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Die [`Animation.timeline`](/de/docs/Web/API/Animation/timeline) Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) Funktionen sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden, in diesem Fall versucht die WebRTC-Laufzeit die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/CSP) Nonces aus nicht-Skriptquellen, wie CSS-Selektoren, und `.getAttribute("nonce")` Aufrufe werden jetzt verborgen. Stattdessen rufen Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce) Eigenschaft ab, um Nonces aus Skripten zu bekommen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der immer dazu führte, dass Marionette beim Start von Firefox initialisiert wurde. Es ist jetzt auf das Befehlszeilenargument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde so geändert, dass keine zusätzlichen Ränder mehr zum Dokument hinzugefügt werden ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Voreinstellungswert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zu erzwingen ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}, um zu steuern, ob Zoomen auf Website- oder Tab-Basis erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}}, um zu steuern, ob Zoomen auf die gesamte Seite oder nur auf Text angewendet wird.

- Der Name der Datei, die beim Speichern eines PDF mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann durch den `toFileName`-Parameter im Typ `tabs.PageSettings` angegeben werden.([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifest-Änderungen

- Die „privacy“-Berechtigung ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))

## Ältere Versionen

{{Firefox_for_developers}}
