---
title: "ARIA: alert-Rolle"
short-title: alert
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `alert`-Rolle dient für wichtige und in der Regel zeitkritische Informationen. Das `alert` ist ein Typ von [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), das als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert`-Rolle wird verwendet, um eine wichtige und in der Regel zeitkritische Nachricht an den Benutzer zu übermitteln. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein barrierefreies Alarmereignis an unterstützende Technologieprodukte, die dann den Benutzer benachrichtigen können.

Die alert-Rolle sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben
- Die Anmeldesitzung des Benutzers läuft bald ab
- Die Verbindung zum Server wurde unterbrochen, sodass lokale Änderungen nicht gespeichert werden

Die `alert`-Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Schaltflächen. Das Element mit der `alert`-Rolle muss nicht fokussierbar sein, da Bildschirmleseprogramme (Sprach- oder Brailleausgabe) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo der Tastaturfokus liegt, wenn die Rolle hinzugefügt wird.

Die `alert`-Rolle wird zu dem Knoten hinzugefügt, der eine Alarmnachricht enthält, **nicht** dem Element, das den Alarm auslöst. Alarme sind [assertive Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Das Setzen von `role="alert"` ist gleichbedeutend mit dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden und es sollte keine Benutzerinteraktion erforderlich sein.

> [!WARNING]
> Aufgrund seiner aufdringlichen Natur muss die `alert`-Rolle sparsam und nur in Situationen verwendet werden, in denen die sofortige Aufmerksamkeit des Benutzers erforderlich ist.

Die [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert)-Rolle ist eine der fünf [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Rollen. Dynamische Änderungen, die weniger dringend sind, sollten eine weniger aggressive Methode verwenden, wie z.B. das Einbeziehen von `aria-live="polite"` oder die Verwendung einer anderen Live-Region-Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role). Wenn der Benutzer erwartet wird, den Alarm zu schließen, sollte stattdessen die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)-Rolle verwendet werden.

Das Wichtigste, was Sie über die `alert`-Rolle wissen müssen, ist, dass sie für Inhalte gedacht ist, die dynamisch angezeigt werden, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie ist ideal für Situationen, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen - der Alarm würde die Nachricht sofort vorlesen. Sie sollte nicht auf HTML angewendet werden, mit dem der Benutzer nicht interagiert hat. Wenn eine Seite beispielsweise mit mehreren sichtbaren Alarmen geladen wird, die verstreut sind, sollten die Alarme nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) werden Alarme nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zuerst im Markup der Seite vorhanden ist - dies wird den Browser und das Bildschirmlesegerät darauf vorbereiten, das Element auf Änderungen zu überwachen. Danach werden alle Änderungen am Inhalt angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"` dynamisch hinzuzufügen/zu generieren, das bereits mit der Alarmnachricht gefüllt ist, die Sie angekündigt haben möchten - dies führt in der Regel _nicht_ zu einer Ankündigung, da es sich nicht um eine Inhaltsänderung handelt.

Da die `alert`-Rolle alle geänderten Inhalte vorliest, sollte sie mit Vorsicht verwendet werden. Alarme sind per Definition störend. Mehrere Alarme gleichzeitig und unnötige Alarme schaffen schlechte Benutzererfahrungen.

## Beispiele

Die folgenden sind gängige Beispiele für Alarme und wie man sie implementiert:

### Beispiel 1: Sichtbarmachen von vorgefertigtem Inhalt innerhalb eines Elements mit einer Alert-Rolle

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` anfänglich mit CSS ausgeblendet wird, wird das Sichtbarmachen den Alarm auslösen. Dies bedeutet, dass ein vorhandenes Alarmcontainelement mehrfach "wiederverwendet" werden kann.

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

### Beispiel 2: Dynamische Änderung des Inhalts innerhalb eines Elements mit einer Alert-Rolle

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass, wenn Sie denselben Alarm mehrmals auslösen müssen (d.h. der dynamisch eingefügte Inhalt derselbe wie zuvor ist), dies im Allgemeinen nicht als Änderung gesehen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es normalerweise am besten, den Inhalt des Alarmcontainers kurz zu "löschen", bevor Sie dann die Alarmnachricht einfügen.

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

### Beispiel 3: Visuell ausgeblendeter Alarmcontainer für Bildschirmlesebenachrichtigungen

Es ist möglich, den Alarmcontainer selbst visuell auszublenden und ihn zu verwenden, um Aktualisierungen/Benachrichtigungen explizit für Bildschirmleser bereitzustellen. Dies kann in Situationen nützlich sein, in denen wichtige Inhalte auf der Seite aktualisiert wurden, die Änderung jedoch für einen Benutzer des Bildschirmlesegeräts nicht sofort ersichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` ausgeblendet wird, da er so auch von unterstützenden Technologien ausgeblendet wird, was bedeutet, dass sie nicht über Änderungen benachrichtigt werden. Verwenden Sie stattdessen etwas wie die [`.visually-hidden`-Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [ARIA-Alarmunterstützung - Die Paciello-Gruppe](https://www.tpgi.com/aria-alert-support/)
- [ARIA-Praktiken Alarmbeispiel](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
