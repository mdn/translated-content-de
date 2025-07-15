---
title: Firefox 75 für Entwickler
short-title: Firefox 75
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Artikel — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Measuring Tool](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu skalieren ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu lokalisieren, zusätzlich zur bisherigen Möglichkeit, Elemente mit CSS-Selektoren zu finden ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mithilfe von [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur normalen Textsuche, indem Sie das reguläre Ausdruck in Schrägstriche setzen ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das Attribut [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) des {{HTMLElement("img")}}-Elements wurde jetzt implementiert. Dieser Zeichenkettenwert kann verwendet werden, um anzugeben, dass das Bild [lazy geladen](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem der Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Elements ist jetzt gemäß der Spezifikation nur noch auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}}, und {{cssxref("clamp", "clamp()")}} Funktionen wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der Wert `all` für die {{cssxref("text-decoration-skip-ink")}} Eigenschaft wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und -Attribute sind jetzt in Firefox auf Windows und Linux verfügbar (beachten Sie, dass sie noch nicht nutzbar sind, bis Bildschirmleseprogramme sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zunächst darauf, dass Apple definiert, welche Apple-Dialekt-Attribute Safari als VoiceOver zugänglich machen wird, und werden uns dann daran orientieren.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Klasse wird jetzt unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Das [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Attribut wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Statt zuvor einen `TypeError` zu werfen, gibt es jetzt `null` zurück, wenn der Caller eine strikte, asynchrone oder Generatorfunktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und weiterhin verfügbaren) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode, agiert `requestSubmit()` so, als ob eine spezifizierte Schaltfläche zum Absenden geklickt wurde, anstatt nur die Formulardaten an den Empfänger zu senden. Dadurch wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular auf Gültigkeit überprüft, bevor die Daten gesendet werden ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Der [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Event wird jetzt von einem Objekt des Typs [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) repräsentiert, anstelle eines einfachen [`Event`](/de/docs/Web/API/Event). `SubmitEvent` enthält ein neues [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) Attribut, das das [`Element`](/de/docs/Web/API/Element) ist, das ausgelöst wurde, um das Formular abzuschicken. Mit diesem Ereignis können Sie einen einzelnen Handler für Submit-Ereignisse haben, der erkennen kann, welche von mehreren Schaltflächen oder Links zum Absenden des Formulars verwendet wurde ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Das Aufrufen der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode bei einem losgelösten Element (das nicht Teil eines DOM-Baums ist) funktioniert jetzt normal und löst ein `click`-Event bei diesem aus ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 bringt zahlreiche Erweiterungen der [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite zu/von Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von Animationen, die von anderen Animationen mit unbestimmter Dauer ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies beinhaltet die Aktivierung der Unterstützung für:
  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der [`Animation.timeline`](/de/docs/Web/API/Animation/timeline) Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) Funktionen sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden. In diesem Fall versucht die WebRTC-Laufzeitumgebung, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces aus nicht-skriptbasierten Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufe sind jetzt verborgen. Stattdessen verwenden Sie das [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Attribut, um Nonces aus Skripten zuzugreifen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Bug wurde behoben, der immer dazu führte, dass Marionette beim Start von Firefox initialisiert wurde. Dies wurde jetzt auf die Befehlszeilenargumente und Umgebungsvariablen beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde korrigiert, um keine zusätzlichen Ränder mehr zum Dokument hinzuzufügen ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Vorzugswert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zwangsweise zu deaktivieren ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):
  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} steuert, ob das Zoomen pro Seite oder pro Tab erfolgt.
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} steuert, ob das Zoomen auf die gesamte Seite oder nur auf Text angewendet wird.

- Der Name der Datei, die beim Speichern eines PDFs mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann mit `toFileName` im Typ `tabs.PageSettings` angegeben werden.([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifeständerungen

- Die "privacy"-Berechtigung ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))
