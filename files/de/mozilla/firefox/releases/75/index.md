---
title: Firefox-75-Versionshinweise für Entwickler
short-title: Firefox 75
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Dieser Artikel enthält Informationen zu Änderungen in Firefox 75, die Entwickler betreffen. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Beitrag — [Firefox 75: Ambitions for April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) in der Größe zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt zusätzlich zum bisherigen Auffinden von Elementen mithilfe von CSS-Selektoren auch [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu lokalisieren ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten zusätzlich zur Klartextsuche mithilfe von [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, indem Sie den regulären Ausdruck zwischen Schrägstrichen schreiben ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das Attribut [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) des {{HTMLElement("img")}}-Elements wurde jetzt implementiert. Dieser Zeichenkettenwert kann verwendet werden, um festzulegen, dass das Bild [verzögert geladen](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des Attributs `type` des Elements [`<style>`](/de/docs/Web/HTML/Reference/Elements/style) ist jetzt gemäß der Spezifikation auf ausschließlich `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die Funktionen {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der Wert `all` der Eigenschaft {{cssxref("text-decoration-skip-ink")}} wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965))

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und -Attribute werden jetzt unter Windows und Linux in Firefox bereitgestellt (beachten Sie, dass sie weiterhin nicht nutzbar sein werden, bis Screenreader sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs für `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Unter macOS warten wir zunächst darauf, dass Apple definiert, was Safari als Attribute im Apple-Dialekt für VoiceOver bereitstellen wird, und werden uns dann daran orientieren.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die Klasse [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) wird jetzt unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die Eigenschaft [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) wurde an den neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) angepasst. Zuvor löste sie einen `TypeError` aus; jetzt gibt sie `null` zurück, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) verfügt über eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Anders als die alte (und weiterhin verfügbare) Methode [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) verhält sich `requestSubmit()` so, als wäre eine angegebene Submit-Schaltfläche angeklickt worden, statt lediglich die Formulardaten an den Empfänger zu senden. Daher wird das Ereignis [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) ausgeliefert und das Formular vor dem Absenden der Daten auf Gültigkeit geprüft ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das Ereignis [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) wird jetzt durch ein Objekt des Typs [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) statt durch ein einfaches [`Event`](/de/docs/Web/API/Event) dargestellt. `SubmitEvent` enthält eine neue Eigenschaft [`submitter`](/de/docs/Web/API/SubmitEvent/submitter), welche das [`Element`](/de/docs/Web/API/Element) ist, das aufgerufen wurde, um das Absenden des Formulars auszulösen. Mit diesem Ereignis können Sie einen einzigen Handler für Submit-Ereignisse verwenden, der erkennen kann, welche von mehreren Submit-Schaltflächen oder Links zum Absenden des Formulars verwendet wurde ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Das Aufrufen der Methode [`click()`](/de/docs/Web/API/HTMLElement/click) für ein getrenntes Element – also eines, das nicht Teil eines DOM-Baums ist – funktioniert jetzt normal und führt dazu, dass ein `click`-Ereignis an dieses gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 enthält zahlreiche Ergänzungen für die [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite to/from-Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von Füllanimationen, die durch andere unbegrenzt füllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies umfasst die Aktivierung der Unterstützung für:
  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der Getter [`Animation.timeline`](/de/docs/Web/API/Animation/timeline), [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden. In diesem Fall versucht die WebRTC-Laufzeitumgebung, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-{{Glossary("Nonce", "Nonces")}} aus Nicht-Skriptquellen wie CSS-Selektoren sowie Aufrufe von `.getAttribute("nonce")` werden jetzt ausgeblendet. Prüfen Sie stattdessen die Eigenschaft [`.nonce`](/de/docs/Web/API/HTMLElement/nonce), um aus Skripten auf Nonces zuzugreifen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der stets dazu führte, dass Marionette beim Start von Firefox initialisiert wurde. Die Initialisierung ist nun auf das Befehlszeilenargument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde korrigiert, sodass dem Dokument keine zusätzlichen Ränder mehr hinzugefügt werden ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Einstellungswert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zwangsweise zu deaktivieren ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):
  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}, um zu steuern, ob die Vergrößerung pro Website oder pro Tab erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}}, um zu steuern, ob die Vergrößerung auf die gesamte Seite oder nur auf Text angewendet wird.

- Der Name der Datei, die beim Speichern einer PDF-Datei mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann über `toFileName` im Typ `tabs.PageSettings` angegeben werden.([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifest-Änderungen

- Die Berechtigung „privacy“ ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))
