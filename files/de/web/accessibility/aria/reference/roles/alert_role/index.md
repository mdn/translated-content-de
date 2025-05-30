---
title: "ARIA: alert-Rolle"
short-title: alert
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

Die `alert`-Rolle ist für wichtige und in der Regel zeitkritische Informationen gedacht. Das `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), das als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert`-Rolle wird verwendet, um eine wichtige und in der Regel zeitkritische Nachricht an den Benutzer zu kommunizieren. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alert-Ereignis an unterstützende Technologien, die dann den Benutzer benachrichtigen können.

Die Alert-Rolle sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben.
- Die Login-Session des Benutzers steht kurz vor dem Ablauf.
- Die Verbindung zum Server ging verloren, sodass lokale Änderungen nicht gespeichert werden.

Die `alert`-Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Buttons. Das Element mit der `alert`-Rolle muss nicht in der Lage sein, den Fokus zu erhalten, da Screenreader (Sprache oder Braille) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo der Tastaturfokus liegt, wenn die Rolle hinzugefügt wird.

Die `alert`-Rolle wird dem Knoten hinzugefügt, der die Alert-Nachricht enthält, **nicht** dem Element, das das Alert auslöst. Alerts sind [assumptive Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Das Setzen von `role="alert"` entspricht dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden, und keine Benutzerinteraktion sollte erforderlich sein.

> [!WARNING]
> Aufgrund ihrer aufdringlichen Natur muss die `alert`-Rolle sparsam und nur in Situationen eingesetzt werden, in denen die unmittelbare Aufmerksamkeit des Benutzers erforderlich ist.

Die [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert)-Rolle ist eine der fünf [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Rollen. Dynamische Änderungen, die weniger dringend sind, sollten eine weniger aggressive Methode verwenden, wie z.B. die Verwendung von `aria-live="polite"` oder eine andere Live-Regionen-Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role). Wenn vom Benutzer erwartet wird, das Alert zu schließen, sollte stattdessen die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)-Rolle verwendet werden.

Das Wichtigste, was man über die `alert`-Rolle wissen muss, ist, dass sie für Inhalte gedacht ist, die dynamisch angezeigt werden, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie eignet sich ideal für Situationen, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen - das Alert würde die Nachricht sofort vorlesen. Sie sollte nicht auf HTML verwendet werden, mit dem der Benutzer nicht interagiert hat. Wenn eine Seite mit mehreren sichtbaren Alerts lädt, die über die gesamte Seite verteilt sind, sollte die Alert-Rolle nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) werden Alerts nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zuerst im Markup der Seite vorhanden ist - das "bereitet" den Browser und den Screenreader darauf vor, das Element auf Änderungen zu überwachen. Danach werden alle Änderungen am Inhalt angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"` dynamisch hinzuzufügen/zu generieren, das bereits mit der Alert-Nachricht gefüllt ist, die Sie ankündigen möchten - dies führt in der Regel _nicht_ zu einer Ankündigung, da es sich nicht um eine Inhaltsänderung handelt.

Da die `alert`-Rolle alle geänderten Inhalte vorliest, sollte sie mit Vorsicht eingesetzt werden. Alerts sind per Definition störend. Mehrere Alerts auf einmal und unnötige Alerts schaffen schlechte Benutzererfahrungen.

## Beispiele

Die folgenden Beispiele sind häufige Anwendungen von Alerts und wie man sie implementiert:

### Beispiel 1: Sichtbarmachen von vorbereiteten Inhalten innerhalb eines Elements mit einer alert-Rolle

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` anfänglich mit CSS ausgeblendet ist, wird das Sichtbarmachen das Alert auslösen. Das bedeutet, dass ein bestehendes Alert-Container-Element mehrfach "wiederverwendet" werden kann.

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

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass wenn Sie dasselbe Alert mehrfach auslösen müssen (d.h. der dynamisch eingefügte Inhalt ist derselbe wie zuvor), dies in der Regel nicht als Änderung angesehen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es in der Regel am besten, den Inhalt des Alert-Containers kurz zu "leeren", bevor dann die Alert-Nachricht eingefügt wird.

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

### Beispiel 3: Visuell versteckter Alert-Container für Screenreader-Benachrichtigungen

Es ist möglich, den Alert-Container selbst visuell zu verstecken und ihn zu verwenden, um Updates/Benachrichtigungen speziell für Screenreader bereitzustellen. Dies kann nützlich sein in Situationen, in denen wichtiger Inhalt auf der Seite aktualisiert wurde, wo die Änderung für einen Screenreader-Benutzer nicht sofort ersichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` versteckt wird, da dies ihn auch vor unterstützenden Technologien versteckt, was bedeutet, dass diese nicht über Änderungen benachrichtigt werden. Verwenden Sie stattdessen etwas wie die [`.visually-hidden` Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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
- [ARIA Alert-Unterstützung - Die Paciello-Gruppe](https://www.tpgi.com/aria-alert-support/)
- [ARIA Practices Alert-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
