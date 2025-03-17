---
title: "ARIA: alert-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `alert`-Rolle ist für wichtige, und üblicherweise zeitkritische, Informationen vorgesehen. Das `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), das als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert`-Rolle wird verwendet, um dem Benutzer eine wichtige und in der Regel zeitkritische Nachricht zu übermitteln. Wenn diese Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alarmereignis an unterstützende Technologien, die den Benutzer benachrichtigen können.

Die alert-Rolle sollte nur für Informationen verwendet werden, die die unmittelbare Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben
- Die Anmeldesitzung des Benutzers läuft demnächst ab
- Die Verbindung zum Server wurde unterbrochen, sodass lokale Änderungen nicht gespeichert werden

Die `alert`-Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Schaltflächen. Das Element mit der `alert`-Rolle muss nicht fokussierbar sein, da Bildschirmleser (Sprachausgabe oder Braille) den aktualisierten Inhalt automatisch unabhängig davon ankündigen, wo sich der Tastaturfokus befindet, wenn die Rolle hinzugefügt wird.

Die `alert`-Rolle wird dem Knoten hinzugefügt, der eine Alarmmeldung enthält, **nicht** dem Element, das den Alarm auslöst. Alarme sind [assertive Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Das Setzen von `role="alert"` entspricht dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden, und es sollte keine Benutzerinteraktion erforderlich sein.

> [!WARNING]
> Aufgrund ihrer aufdringlichen Natur muss die `alert`-Rolle sparsam und nur in Situationen eingesetzt werden, in denen die sofortige Aufmerksamkeit des Benutzers erforderlich ist.

Die [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) Rolle ist eine der fünf [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Dynamische Änderungen, die weniger dringend sind, sollten eine weniger aggressive Methode verwenden, wie zum Beispiel `aria-live="polite"` oder eine andere Live-Region-Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role). Wenn erwartet wird, dass der Benutzer den Alarm schließt, sollte die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) Rolle stattdessen verwendet werden.

Das Wichtigste, was Sie über die `alert`-Rolle wissen müssen, ist, dass sie für Inhalte gedacht ist, die dynamisch angezeigt werden, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie ist ideal für Situationen geeignet, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen - der Alarm würde die Nachricht sofort vorlesen. Sie sollte nicht auf HTML verwendet werden, mit dem der Benutzer nicht interagiert hat. Wenn zum Beispiel eine Seite mit mehreren sichtbaren Alarmen geladen wird, die über die Seite verstreut sind, sollte die alert-Rolle nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) werden Alarme nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zuerst im Seitenmarkup vorhanden ist - dies "bereitet" den Browser und den Bildschirmleser darauf vor, das Element weiter auf Änderungen zu überwachen. Danach werden alle Änderungen des Inhalts angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"` dynamisch hinzuzufügen/zu generieren, das bereits mit der Alarmnachricht gefüllt ist, die Sie ankündigen möchten - dies führt in der Regel _nicht_ zu einer Ankündigung, da es sich nicht um eine Inhaltsänderung handelt.

Da die `alert`-Rolle jeden geänderten Inhalt vorliest, sollte sie mit Vorsicht verwendet werden. Alarme sind per Definition störend. Mehrere Alarme auf einmal und unnötige Alarme führen zu schlechten Benutzererfahrungen.

## Beispiele

Die folgenden sind gängige Beispiele für Alarme und deren Implementierung:

### Beispiel 1: Sichtbarmachung von fertigem Inhalt innerhalb eines Elements mit einer alert-Rolle

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` anfänglich mit CSS verborgen ist, wird das Sichtbarmachen den Alarm auslösen. Dies bedeutet, dass ein vorhandenes Alarmcontainer-Element mehrere Male "wiederverwendet" werden kann.

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

### Beispiel 2: Dynamische Änderung des Inhalts innerhalb eines Elements mit einer alert-Rolle

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass, wenn Sie denselben Alarm mehrfach auslösen müssen (d.h. der dynamisch eingefügte Inhalt ist derselbe wie zuvor), dies im Allgemeinen nicht als Änderung betrachtet wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es normalerweise am besten, die Inhalte des Alarmcontainers kurz zu "leeren", bevor Sie dann die Alarmnachricht einfügen.

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

### Beispiel 3: Visuell verborgenes Alarm-Container für Bildschirmleserbenachrichtigungen

Es ist möglich, den Alarm-Container selbst visuell zu verbergen und ihn zur Bereitstellung von Updates/Benachrichtigungen speziell für Bildschirmleser zu verwenden. Dies kann hilfreich sein, wenn wichtiger Inhalt auf der Seite aktualisiert wurde, die Änderung jedoch für einen Bildschirmleserbenutzer nicht sofort offensichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` versteckt wird, da dies ihn auch für unterstützende Technologien versteckt, was bedeutet, dass sie nicht über Änderungen benachrichtigt werden. Verwenden Sie stattdessen so etwas wie die [`.visually-hidden` Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA: `alertdialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [ARIA: Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [ARIA-Alarmunterstützung - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA-Praktiken: Alarmbeispiel](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
