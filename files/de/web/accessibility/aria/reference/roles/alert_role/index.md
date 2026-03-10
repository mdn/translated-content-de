---
title: "ARIA: Rolle alert"
short-title: alert
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die Rolle `alert` ist für wichtige und in der Regel zeitkritische Informationen vorgesehen. Das `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), das als atomare Live-Region verarbeitet wird.

## Beschreibung

Die Rolle `alert` wird verwendet, um eine wichtige und in der Regel zeitkritische Nachricht an den Benutzer zu kommunizieren. Wenn diese Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alarmereignis an unterstützende Technologieprodukte, die den Benutzer dann benachrichtigen können.

Die Rolle alert sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben
- Die Anmeldesitzung des Benutzers läuft bald ab
- Die Verbindung zum Server ging verloren, sodass lokale Änderungen nicht gespeichert werden

Die Rolle `alert` sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Schaltflächen. Das Element mit der Rolle `alert` muss nicht den Fokus erhalten können, da Bildschirmlesegeräte (Sprach- oder Brailleausgabe) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo der Tastaturfokus liegt, wenn die Rolle hinzugefügt wird.

Die Rolle `alert` wird dem Knoten hinzugefügt, der eine Warnmeldung enthält, **nicht** dem Element, das die Warnung auslöst. Warnungen sind [aufdringliche Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Das Setzen von `role="alert"` ist gleichbedeutend mit dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden und keine Benutzerinteraktion sollte erforderlich sein.

> [!WARNING]
> Aufgrund seiner aufdringlichen Natur muss die Rolle `alert` sparsam und nur in Situationen verwendet werden, in denen die sofortige Aufmerksamkeit des Benutzers erforderlich ist.

Die Rolle [`alert`](https://w3c.github.io/aria/#alert) ist eine der fünf [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Rollen. Dynamische Änderungen, die weniger dringend sind, sollten eine weniger aggressive Methode verwenden, wie zum Beispiel die Verwendung von `aria-live="polite"` oder die Verwendung einer anderen Live-Region Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role). Wenn erwartet wird, dass der Benutzer die Warnung schließt, sollte stattdessen die Rolle [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) verwendet werden.

Das Wichtigste, was Sie über die Rolle `alert` wissen sollten, ist, dass sie für Inhalte, die dynamisch angezeigt werden, gedacht ist, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie ist perfekt für Situationen geeignet, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen – die Warnung würde die Nachricht sofort vorlesen. Sie sollte nicht bei HTML verwendet werden, mit dem der Benutzer noch nicht interagiert hat. Zum Beispiel, wenn eine Seite geladen wird und mit mehreren sichtbaren Warnungen übersät ist, sollte die Rolle alert nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) werden Warnungen nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zunächst im Seitenmarkup vorhanden ist – dies „primt“ den Browser und den Bildschirmleser, das Element auf Änderungen zu überwachen. Danach werden alle Änderungen am Inhalt angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"` dynamisch hinzuzufügen/zu erzeugen, das bereits mit der Warnmeldung, die Sie angekündigt haben möchten, gefüllt ist – dies führt in der Regel _nicht_ zu einer Ankündigung, da es keine Inhaltsänderung ist.

Da die Rolle `alert` alle geänderten Inhalte vorliest, sollte sie mit Vorsicht verwendet werden. Warnungen sind definitionsgemäß störend. Mehrere Warnungen gleichzeitig und unnötige Warnungen schaffen schlechte Benutzererfahrungen.

## Beispiele

Die folgenden sind gängige Beispiele für Warnungen und wie man sie implementiert:

### Beispiel 1: Sichtbarmachung von vorgefertigten Inhalten innerhalb eines Elements mit der Rolle alert

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` anfangs mit CSS versteckt ist, wird das Sichtbarmachen den Alarm auslösen. Dies bedeutet, dass ein vorhandenes Warncontainer-Element mehrfach „wiederverwendet“ werden kann.

```css
.hidden {
  display: none;
}
```

```html
<div id="expirationWarning" role="alert">
  <span class="hidden">Your log in session will expire in 2 minutes</span>
</div>
```

```js
// removing the 'hidden' class makes the content inside the element visible, which will make the screen reader announce the alert:
document
  .getElementById("expirationWarning")
  .firstChild.classList.remove("hidden");
```

### Beispiel 2: Dynamisches Ändern des Inhalts innerhalb eines Elements mit der Rolle alert

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass wenn Sie denselben Alarm mehrmals auslösen müssen (d.h. der Inhalt, den Sie dynamisch einfügen, ist derselbe wie zuvor), dies im Allgemeinen nicht als Änderung angesehen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es in der Regel besser, den Inhalt des Warncontainers kurz zu „löschen“, bevor Sie die Warnmeldung einfügen.

```html
<div id="alertContainer" role="alert"></div>
```

```js
// clear the contents of the container
document.getElementById("alertContainer").textContent = "";
// inject the new alert message
document.getElementById("alertContainer").textContent =
  `Your session will expire in ${expiration} minutes`;
```

### Beispiel 3: Visuell versteckter Warncontainer für Bildschirmleser-Benachrichtigungen

Es ist möglich, den Warncontainer selbst visuell zu verstecken und ihn zu verwenden, um Aktualisierungen/Benachrichtigungen explizit für Bildschirmleser bereitzustellen. Dies kann nützlich sein, wenn wichtiger Inhalt auf der Seite aktualisiert wurde, aber die Änderung für einen Bildschirmleser-Benutzer nicht sofort ersichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` versteckt wird, da dies ihn auch vor unterstützenden Technologien verbirgt, was bedeutet, dass sie nicht über Änderungen benachrichtigt werden. Verwenden Sie stattdessen etwas wie die [.visually-hidden-Styles](https://www.a11yproject.com/posts/how-to-hide-content/).

```html
<div id="hiddenAlertContainer" role="alert" class="visually-hidden"></div>
```

```css
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

```js
// clear the contents of the container
document.getElementById("hiddenAlertContainer").textContent = "";
// inject the new alert message
document.getElementById("hiddenAlertContainer").textContent =
  "All items were removed from your inventory.";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [ARIA: Rolle `log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: Rolle `marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: Rolle `status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: Rolle `timer`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA: Rolle `alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [ARIA: Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [ARIA Alert Support - Vispero](https://vispero.com/resources/aria-alert-support/)
- [ARIA Practices Alert Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
