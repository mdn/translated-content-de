---
title: "ARIA: alert Rolle"
slug: Web/Accessibility/ARIA/Roles/alert_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `alert` Rolle ist für wichtige und in der Regel zeitkritische Informationen gedacht. Das `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role), das als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert` Rolle wird verwendet, um dem Benutzer eine wichtige und in der Regel zeitkritische Nachricht zu übermitteln. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alarmereignis an Assistenztechnologieprodukte, die den Benutzer benachrichtigen können.

Die `alert` Rolle sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben
- Die Anmeldesitzung des Benutzers läuft bald ab
- Die Verbindung zum Server wurde verloren, sodass lokale Änderungen nicht gespeichert werden

Die `alert` Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Schaltflächen. Das Element mit der `alert` Rolle muss nicht fokussierbar sein, da Bildschirmleser (Sprach- oder Brailledarstellung) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo der Tastaturfokus ist, wenn die Rolle hinzugefügt wird.

Die `alert` Rolle wird dem Knoten hinzugefügt, der eine Warnmeldung enthält, **nicht** dem Element, das die Warnung auslöst. Warnungen sind [assertive live regions](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Das Setzen von `role="alert"` ist gleichbedeutend mit dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Da sie nicht fokussiert werden, muss der Fokus nicht verwaltet werden, und es sollte keine Benutzerinteraktion erforderlich sein.

> [!WARNING]
> Aufgrund ihrer aufdringlichen Natur muss die `alert` Rolle sparsam und nur in Situationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern.

Die [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) Rolle ist eine der fünf [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Rollen. Dynamische Änderungen, die weniger dringend sind, sollten eine weniger aggressive Methode verwenden, z. B. `aria-live="polite"` einfügen oder eine andere Live-Region-Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role) nutzen. Wenn vom Benutzer erwartet wird, die Warnung zu schließen, sollte stattdessen die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) Rolle verwendet werden.

Das Wichtigste, was Sie über die `alert` Rolle wissen müssen, ist, dass sie für Inhalte gedacht ist, die dynamisch angezeigt werden, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie eignet sich perfekt für Situationen, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen - der Alert würde die Nachricht sofort vorlesen. Sie sollte nicht bei HTML verwendet werden, mit dem der Benutzer nicht interagiert hat. Wenn beispielsweise eine Seite mit mehreren sichtbaren Alarmelementen geladen wird, sollte die `alert` Rolle nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) werden Alarme nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zuerst im Markup der Seite vorhanden ist - das "primet" den Browser und den Bildschirmleser, das Element auf Änderungen weiter zu beobachten. Anschließend werden alle Änderungen des Inhalts angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"` dynamisch hinzuzufügen/zu generieren, das bereits mit der Warnmeldung gefüllt ist, die Sie angekündigt haben möchten - dies führt im Allgemeinen _nicht_ zu einer Ankündigung, da es keine Inhaltsänderung ist.

Da die `alert` Rolle jegliche geänderten Inhalte vorliest, sollte sie mit Vorsicht verwendet werden. Alarme sind per Definition störend. Mehrere Alarme auf einmal und unnötige Alarme schaffen schlechte Benutzererfahrungen.

## Beispiele

Im Folgenden finden Sie gängige Beispiele für Alarme und deren Implementierung:

### Beispiel 1: Fertiggestellte Inhalte innerhalb eines Elements mit einer Alarmrolle sichtbar machen

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` zunächst mit CSS ausgeblendet ist, führt das Sichtbarmachen dazu, dass der Alarm ausgelöst wird. Dies bedeutet, dass ein vorhandenes Alert-Containerelement mehrfach "wiederverwendet" werden kann.

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

### Beispiel 2: Dynamisches Ändern des Inhalts innerhalb eines Elements mit einer Alarmrolle

Mittels JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass, wenn Sie denselben Alarm mehrmals auslösen müssen (d. h. der Inhalt, den Sie dynamisch einfügen, ist derselbe wie zuvor), dies in der Regel nicht als Änderung gesehen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es normalerweise am besten, die Inhalte des Alert-Containers kurz zu "leeren", bevor Sie die Warnmeldung einfügen.

```html
<div id="alertContainer" role="alert"></div>
```

```js
// clear the contents of the container
document.getElementById("alertContainer").textContent = "";
// inject the new alert message
document.getElementById("alertContainer").textContent =
  "Your session will expire in " + expiration + " minutes";
```

### Beispiel 3: Visuell versteckter Alarmcontainer für Bildschirmleser-Benachrichtigungen

Es ist möglich, den Alarmcontainer visuell zu verstecken und ihn zu nutzen, um Updates/Benachrichtigungen speziell für Bildschirmleser bereitzustellen. Dies kann in Situationen nützlich sein, in denen wichtige Inhalte auf der Seite aktualisiert wurden, die Änderung jedoch für einen Benutzer des Bildschirmlesers nicht sofort ersichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` versteckt ist, da dies ihn auch vor unterstützenden Technologien verbirgt, sodass diese nicht über Änderungen benachrichtigt werden. Verwenden Sie stattdessen etwas wie die [`.visually-hidden` Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA: `alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [ARIA: Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [ARIA Alarmunterstützung - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA Praktiken Alarm-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
