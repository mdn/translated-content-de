---
title: "ARIA: alert role"
short-title: alert
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `alert`-Rolle ist für wichtige, und in der Regel zeitkritische, Informationen. Das `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), die als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert`-Rolle wird verwendet, um eine wichtige und in der Regel zeitkritische Nachricht an den Benutzer zu kommunizieren. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alarmereignis an unterstützende Technologien, die den Benutzer dann benachrichtigen können.

Die Alert-Rolle sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, beispielsweise:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben
- Die Login-Session des Benutzers läuft bald ab
- Die Verbindung zum Server ging verloren, sodass lokale Änderungen nicht gespeichert werden

Die `alert`-Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Schaltflächen. Das Element mit der `alert`-Rolle muss nicht den Fokus empfangen können, da Bildschirmleser (Sprach- oder Braille) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo der Tastaturfokus liegt, wenn die Rolle hinzugefügt wird.

Die `alert`-Rolle wird dem Knoten hinzugefügt, der eine Warnmeldung enthält, **nicht** dem Element, das die Warnung auslöst. Alerts sind [assertive live regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Das Setzen von `role="alert"` entspricht dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden und keine Benutzerinteraktion soll erforderlich sein.

> [!WARNING]
> Aufgrund ihrer aufdringlichen Natur muss die `alert`-Rolle sparsam und nur in Situationen verwendet werden, in denen die unmittelbare Aufmerksamkeit des Benutzers erforderlich ist.

Die [`alert`](https://w3c.github.io/aria/#alert)-Rolle ist eine der fünf [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Rollen. Dynamische Änderungen, die weniger dringend sind, sollten mit einer weniger aggressiven Methode behandelt werden, z. B. durch Einfügen von `aria-live="polite"` oder durch Verwendung einer anderen Live-Region-Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role). Wenn der Benutzer erwartet wird, die Warnung zu schließen, sollte stattdessen die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)-Rolle verwendet werden.

Das Wichtigste über die `alert`-Rolle ist, dass sie für Inhalte gedacht ist, die dynamisch angezeigt werden, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie ist perfekt für Situationen, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen—die Warnung würde die Nachricht sofort vorlesen. Sie sollte nicht auf HTML verwendet werden, mit dem der Benutzer nicht interagiert hat. Zum Beispiel, wenn eine Seite mit mehreren sichtbaren Warnungen geladen wird, die über die Seite verstreut sind, sollte die Alert-Rolle nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) werden Alarme nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit dieser Rolle zuerst im Markup der Seite vorhanden ist—dies wird den Browser und den Bildschirmleser dazu "bringen", das Element auf Änderungen zu überwachen. Danach werden alle Änderungen am Inhalt bekannt gegeben. Versuchen Sie nicht, dynamisch ein Element mit `role="alert"` hinzuzufügen/erzeugen, das bereits mit der zu verkündenden Warnmeldung gefüllt ist—dies führt im Allgemeinen _nicht_ zu einer Ankündigung, da es sich nicht um eine Inhaltsänderung handelt.

Da die `alert`-Rolle jeden geänderten Inhalt vorliest, sollte sie mit Vorsicht verwendet werden. Alerts sind definitionsgemäß störend. Mehrere Warnungen auf einmal und unnötige Warnungen schaffen schlechte Benutzererfahrungen.

## Beispiele

Die folgenden sind häufige Beispiele für Warnungen und wie man sie implementiert:

### Beispiel 1: Bereitgestellten Inhalt innerhalb eines Elements mit der Alert-Rolle sichtbar machen

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` zunächst mit CSS verborgen ist, löst das Sichtbarmachen den Alarm aus. Das bedeutet, dass ein vorhandenes Warncontainer-Element "mehrfach verwendet" werden kann.

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

### Beispiel 2: Dynamisches Ändern des Inhalts innerhalb eines Elements mit der Alert-Rolle

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass wenn Sie den gleichen Alarm mehrfach auslösen müssen (d.h. der Inhalt, den Sie dynamisch einfügen, ist derselbe wie zuvor), dies im Allgemeinen nicht als Änderung gesehen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es normalerweise am besten, die Inhalte des Alert-Containers kurz "zu löschen", bevor dann die Warnmeldung eingefügt wird.

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

### Beispiel 3: Visuell verborgener Alert-Container für Bildschirmleser-Benachrichtigungen

Es ist möglich, den Alert-Container selbst visuell zu verbergen und ihn zu verwenden, um Updates/Benachrichtigungen speziell für Bildschirmleser bereitzustellen. Dies kann in Situationen nützlich sein, in denen wichtiger Inhalt auf der Seite aktualisiert wurde, aber die Änderung für einen Bildschirmleser-Benutzer nicht sofort offensichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` verborgen wird, da dies auch assistiven Technologien verbirgt, was bedeutet, dass sie nicht über Änderungen informiert werden. Verwenden Sie stattdessen etwas wie die [`.visually-hidden` Styles](https://www.a11yproject.com/posts/how-to-hide-content/).

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
- [ARIA: `log` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA: `alertdialog` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [ARIA: Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [ARIA-Alert-Unterstützung - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA Practices Alert-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
