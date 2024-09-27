---
title: "ARIA: alert Rolle"
slug: Web/Accessibility/ARIA/Roles/alert_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `alert` Rolle ist für wichtige und in der Regel zeitkritische Informationen gedacht. Das `alert` ist ein Typ von [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role), der als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert` Rolle wird verwendet, um eine wichtige und in der Regel zeitkritische Nachricht an den Benutzer zu kommunizieren. Wenn diese Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alarmereignis an unterstützende Technologien, die dann den Benutzer benachrichtigen können.

Die alert Rolle sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben
- Die Sitzung des Benutzers läuft bald ab
- Die Verbindung zum Server wurde unterbrochen, sodass lokale Änderungen nicht gespeichert werden

Die `alert` Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Buttons. Das Element mit der `alert` Rolle muss nicht fokussierbar sein, da Bildschirmlesegeräte (Sprach- oder Brailledisplays) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo sich der Tastaturfokus befindet, wenn die Rolle hinzugefügt wird.

Die `alert` Rolle wird dem Knoten hinzugefügt, der eine Alarmnachricht enthält, **nicht** dem Element, das den Alarm auslöst. Alarme sind [assertive Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Das Setzen von `role="alert"` entspricht dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden und es sollte keine Benutzerinteraktion erforderlich sein.

> [!WARNING]
> Aufgrund ihrer aufdringlichen Natur muss die `alert` Rolle sparsam und nur in Situationen verwendet werden, in denen die sofortige Aufmerksamkeit des Benutzers erforderlich ist.

Die [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) Rolle gehört zu den fünf [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Rollen. Dynamische Änderungen, die weniger dringlich sind, sollten eine weniger aggressive Methode verwenden, wie z.B. `aria-live="polite"` oder eine andere Live-Region Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role) zu verwenden. Wenn der Benutzer den Alarm schließen soll, sollte stattdessen die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) Rolle verwendet werden.

Das Wichtigste, was man über die `alert` Rolle wissen muss, ist, dass sie für Inhalte gedacht ist, die dynamisch angezeigt werden und nicht für Inhalte, die beim Laden der Seite erscheinen. Sie ist perfekt für Situationen, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen - der Alarm würde die Nachricht sofort vorlesen. Sie sollte nicht auf HTML verwendet werden, mit dem der Benutzer nicht interagiert hat. Wenn beispielsweise eine Seite mit mehreren sichtbaren Alarms, die über die Seite verteilt sind, geladen wird, sollte die Alarmrolle nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) werden Alarme nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zuerst im Markup der Seite vorhanden ist - dies wird den Browser und das Bildschirmlesegerät „vorbereiten“, um das Element auf Änderungen zu überwachen. Danach werden alle Änderungen des Inhalts angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"` dynamisch hinzuzufügen/generieren, das bereits mit der Alarmnachricht gefüllt ist, die Sie ankündigen möchten - dies führt in der Regel _nicht_ zu einer Ankündigung, da es sich nicht um eine Inhaltsänderung handelt.

Da die `alert` Rolle alle geänderten Inhalte vorliest, sollte sie mit Vorsicht verwendet werden. Alarme sind definitionsgemäß störend. Mehrere Alarme gleichzeitig und überflüssige Alarme sorgen für schlechte Benutzererfahrungen.

## Beispiele

Die folgenden sind gängige Beispiele von Alarmen und wie man sie implementiert:

### Beispiel 1: Fertige Inhalte in einem Element mit Alarmrolle sichtbar machen

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` anfänglich mit CSS verborgen ist, wird durch das Sichtbarmachen der Alarm ausgelöst. Dies bedeutet, dass ein bestehendes Alarm-Container-Element mehrfach „wiederverwendet“ werden kann.

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

### Beispiel 2: Dynamische Änderung des Inhalts innerhalb eines Elements mit Alarmrolle

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass, wenn Sie denselben Alarm mehrmals auslösen müssen (d.h. der Inhalt, den Sie dynamisch einfügen, ist derselbe wie zuvor), dies in der Regel nicht als Änderung angesehen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es in der Regel am besten, den Inhalt des Alarm-Containers kurz zu „löschen“, bevor Sie die Alarmnachricht einfügen.

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

### Beispiel 3: Visuell versteckter Alarm-Container für Bildschirmleser-Benachrichtigungen

Es ist möglich, den Alarm-Container selbst visuell zu verstecken und ihn zu verwenden, um Updates/Benachrichtigungen explizit für Bildschirmleser bereitzustellen. Dies kann in Situationen nützlich sein, in denen wichtiger Inhalt auf der Seite aktualisiert wurde, aber die Änderung für einen Benutzer von Bildschirmlesern nicht sofort ersichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` versteckt wird, da dies ihn auch für unterstützende Technologien versteckt, was bedeutet, dass diese nicht über Änderungen benachrichtigt werden. Verwenden Sie stattdessen etwas wie die [`.visually-hidden` Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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
- [ARIA alert support - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA Practices alert example](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
