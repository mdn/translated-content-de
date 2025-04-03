---
title: "ARIA: alert-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die `alert`-Rolle ist für wichtige und in der Regel zeitkritische Informationen vorgesehen. Das `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), das als atomische Live-Region verarbeitet wird.

## Beschreibung

Die `alert`-Rolle wird verwendet, um dem Benutzer eine wichtige und in der Regel zeitkritische Nachricht zu übermitteln. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alert-Ereignis an unterstützende Technologien, die dann den Benutzer benachrichtigen können.

Die Alert-Rolle sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingegeben
- Die Anmeldesitzung des Benutzers läuft bald ab
- Die Verbindung zum Server wurde unterbrochen, sodass lokale Änderungen nicht gespeichert werden

Die `alert`-Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Schaltflächen. Das Element mit der `alert`-Rolle muss nicht in der Lage sein, den Fokus zu erhalten, da Bildschirmleser (Sprach- oder Brailleausgabe) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo der Tastaturfokus liegt, wenn die Rolle hinzugefügt wird.

Die `alert`-Rolle wird dem Knoten hinzugefügt, der eine Alert-Nachricht enthält, **nicht** dem Element, das das Alert auslöst. Alerts sind [assertive Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Die Einstellung `role="alert"` entspricht der Einstellung [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden und es sollte keine Benutzerinteraktion erforderlich sein.

> [!WARNING]
> Aufgrund ihrer aufdringlichen Natur muss die `alert`-Rolle sparsam und nur in Situationen eingesetzt werden, in denen die sofortige Aufmerksamkeit des Benutzers erforderlich ist.

Die [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert)-Rolle ist eine der fünf [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Rollen. Dynamische Änderungen, die weniger dringend sind, sollten eine weniger aggressive Methode verwenden, wie z.B. `aria-live="polite"` einzuschließen oder eine andere Live-Region-Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) zu verwenden. Wenn vom Benutzer erwartet wird, dass er das Alert schließt, sollte stattdessen die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)-Rolle verwendet werden.

Das Wichtigste über die `alert`-Rolle ist, dass sie für Inhalte gedacht ist, die dynamisch angezeigt werden, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie eignet sich perfekt für Situationen, wie wenn ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen – das Alert würde die Nachricht sofort auslesen. Sie sollte nicht für HTML verwendet werden, mit dem der Benutzer nicht interagiert hat. Wenn eine Seite z.B. mit mehreren sichtbaren Alerts verteilt geladen wird, sollte die Alert-Rolle nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) werden Alerts nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zuerst im Markup der Seite vorhanden ist – dies wird den Browser und die Bildschirmleser „vorbereiten“, das Element auf Änderungen zu überwachen. Danach werden alle Änderungen des Inhalts angekündigt. Versuchen Sie nicht, ein dynamisch bereits mit der gewünschten Alert-Nachricht befülltes Element mit `role="alert"` hinzuzufügen/zu generieren – dies führt in der Regel _nicht_ zu einer Ankündigung, da es keine Inhaltsänderung ist.

Da die `alert`-Rolle alle geänderten Inhalte ausspricht, sollte sie mit Vorsicht verwendet werden. Alerts sind definitionsgemäß störend. Mehrere Alerts gleichzeitig und unnötige Alerts schaffen schlechte Benutzererfahrungen.

## Beispiele

Die folgenden sind häufige Beispiele für Alerts und wie sie implementiert werden:

### Beispiel 1: Fertige Inhalte in einem Element mit einer Alert-Rolle sichtbar machen

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` zunächst mit CSS ausgeblendet ist, verursacht seine Sichtbarmachung das Auslösen des Alerts. Dies bedeutet, dass ein bereits vorhandenes Alert-Containerelement mehrfach „wiederverwendet“ werden kann.

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

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass, wenn Sie denselben Alert mehrfach auslösen müssen (d.h. der Inhalt, den Sie dynamisch einfügen, ist derselbe wie zuvor), dies im Allgemeinen nicht als Änderung wahrgenommen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es in der Regel am besten, kurz die Inhalte des Alert-Containers zu „leeren“, bevor dann die Alert-Nachricht eingefügt wird.

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

### Beispiel 3: Visuell versteckter Alert-Container für Bildschirmleser-Benachrichtigungen

Es ist möglich, den Alert-Container selbst visuell zu verstecken und ihn zu verwenden, um Aktualisierungen/Benachrichtigungen explizit für Bildschirmleser bereitzustellen. Dies kann in Situationen nützlich sein, in denen wichtige Inhalte auf der Seite aktualisiert wurden, aber wo die Änderung für einen Bildschirmleser-Benutzer nicht sofort offensichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` ausgeblendet wird, da dies ihn auch von unterstützenden Technologien verbirgt, sodass diese nicht über Änderungen informiert werden. Verwenden Sie stattdessen etwas wie die [`.visually-hidden`-Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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
- [ARIA Alert-Unterstützung - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA Praktiken Beispiel für Alerts](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
