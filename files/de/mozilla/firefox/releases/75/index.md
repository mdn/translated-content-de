---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Sehen Sie auch den begleitenden Hacks-Beitrag — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklertools

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox Fehler 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu finden, zusätzlich zu den CSS-Selektoren, wie zuvor ([Firefox Fehler 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mithilfe von [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zu der normalen Textsuche, indem Sie reguläre Ausdrücke in Schrägstriche schreiben ([Firefox Fehler 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde jetzt implementiert. Dieser String-Wert kann verwendet werden, um anzugeben, dass das Bild [Lazy Loaded](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox Fehler 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Element/style)-Elements ist jetzt auf `text/css` gemäß der Spezifikation beschränkt ([Firefox Fehler 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} Funktionen wurde implementiert ([Firefox Fehler 1519519](https://bugzil.la/1519519)).
- Der `all` Wert der {{cssxref("text-decoration-skip-ink")}}-Eigenschaft wurde hinzugefügt ([Firefox Fehler 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und -Attribute werden jetzt in Firefox, unter Windows und Linux, angezeigt (beachten Sie, dass diese erst nutzbar werden, wenn Bildschirmleser sie unterstützen):

- `aria-description` ([Firefox Fehler 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox Fehler 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox Fehler 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox Fehler 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zunächst darauf, dass Apple definiert, welche Apple-Dialekt-Attribute Safari an VoiceOver übergeben wird und werden dann nachziehen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox Fehler 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Klasse wird jetzt unterstützt ([Firefox Fehler 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Anstatt vorher einen `TypeError` auszulösen, gibt sie jetzt `null` zurück, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist ([Firefox Fehler 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und weiterhin verfügbaren) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode wirkt `requestSubmit()` so, als ob eine bestimmte Absende-Schaltfläche angeklickt worden wäre, anstatt einfach die Formular-Daten an den Empfänger zu senden. Somit wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular auf Gültigkeit geprüft, bevor die Daten übermittelt werden ([Firefox Fehler 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird jetzt durch ein Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) dargestellt, anstatt einem einfachen [`Event`](/de/docs/Web/API/Event). `SubmitEvent` enthält eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die das [`Element`](/de/docs/Web/API/Element) ist, das eingeführt wurde, um das Formular abzusenden. Mit diesem Ereignis können Sie einen einzelnen Handler für Submit-Ereignisse haben, der erkennen kann, welche der mehreren Sende-Schaltflächen oder Links verwendet wurde, um das Formular abzusenden ([Firefox Fehler 1588715](https://bugzil.la/1588715)).
- Das Aufrufen der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf einem abgetrennten Element (einem nicht Teil eines DOM-Baums) funktioniert jetzt normal und führt dazu, dass ein `click`-Ereignis an es gesendet wird ([Firefox Fehler 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 bringt zahlreiche Ergänzungen zur [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite zu/von Schlüsselbilder](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von Auffüllanimationen, die durch andere auf unbestimmte Zeit füllende Animationen ersetzt wurden ([Firefox Fehler 1618773](https://bugzil.la/1618773)). Dies umfasst die Unterstützung für:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)-Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) Funktionen sind jetzt standardmäßig aktiviert ([Firefox Fehler 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox Fehler 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden, wobei die WebRTC-Laufzeitumgebung versuchen wird, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox Fehler 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/CSP) Nonces von Nicht-Skript-Quellen, wie CSS-Selektoren und `.getAttribute("nonce")`-Aufrufe, sind jetzt versteckt. Stattdessen prüfen Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft, um Nonces aus Skripten abzurufen ([Firefox Fehler 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der Marionette immer beim Firefox-Start initialisierte. Es ist jetzt nur noch auf das Kommandozeilenargument und die Umgebungsvariable beschränkt ([Firefox Fehler 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde korrigiert, sodass keine zusätzlichen Ränder mehr zum Dokument hinzugefügt werden ([Firefox Fehler 1616932](https://bugzil.la/1616932)).
- Der Präferenzwert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zwangsweise zu deaktivieren ([Firefox Fehler 1617869](https://bugzil.la/1617869)).

### Sonstige

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox Fehler 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} zur Kontrolle, ob das Zoomen pro Site oder pro Tab erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} zur Kontrolle, ob das Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

- Der Name der Datei, die beim Speichern eines PDFs mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann mit `toFileName` in der Typdefinition `tabs.PageSettings` angegeben werden ([Firefox Fehler 1483590](https://bugzil.la/1483590)).

### Manifeständerungen

- Die "Privatsphäre"-Berechtigung ist jetzt optional. ([Firefox Fehler 1618399](https://bugzil.la/1618399))

## Ältere Versionen

{{Firefox_for_developers}}
