---
title: "ARIA: alert-Rolle"
slug: Web/Accessibility/ARIA/Roles/alert_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `alert`-Rolle ist für wichtige und normalerweise zeitkritische Informationen. Das `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role), das als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert`-Rolle wird verwendet, um dem Benutzer eine wichtige und normalerweise zeitkritische Nachricht zu übermitteln. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Alert-Ereignis an unterstützende Technologien, die den Benutzer dann benachrichtigen können.

Die Alert-Rolle sollte nur für Informationen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern, zum Beispiel:

- Ein ungültiger Wert wurde in ein Formularfeld eingetragen.
- Die Login-Sitzung des Benutzers läuft bald ab.
- Die Verbindung zum Server ging verloren, sodass lokale Änderungen nicht gespeichert werden.

Die `alert`-Rolle sollte nur für Textinhalte und nicht für interaktive Elemente wie Links oder Schaltflächen verwendet werden. Das Element mit der `alert`-Rolle muss nicht den Fokus empfangen können, da Bildschirmleser (Sprach- oder Brailleausgabe) den aktualisierten Inhalt automatisch ankündigen, unabhängig davon, wo sich der Tastaturfokus befindet, wenn die Rolle hinzugefügt wird.

Die `alert`-Rolle wird dem Knoten hinzugefügt, der die Alert-Nachricht enthält, **nicht** dem Element, das den Alert auslöst. Alerts sind [assertive Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Das Setzen von `role="alert"` entspricht dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Da sie keinen Fokus erhalten, muss der Fokus nicht verwaltet werden und keine Benutzerinteraktion sollte erforderlich sein.

> [!WARNING]
> Aufgrund seiner intrusiven Natur muss die `alert`-Rolle sparsam und nur in Situationen verwendet werden, in denen die unmittelbare Aufmerksamkeit des Benutzers erforderlich ist.

Die [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert)-Rolle ist eine von fünf [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Rollen. Dynamische Änderungen, die weniger dringlich sind, sollten eine weniger aggressive Methode verwenden, wie zum Beispiel `aria-live="polite"` zu verwenden oder eine andere Live-Region-Rolle wie [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role). Wenn vom Benutzer erwartet wird, dass er den Alert schließt, sollte stattdessen die [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)-Rolle verwendet werden.

Das Wichtigste, was man über die `alert`-Rolle wissen muss, ist, dass sie für dynamisch angezeigte Inhalte bestimmt ist, nicht für Inhalte, die beim Laden der Seite erscheinen. Sie ist ideal für Situationen, in denen ein Benutzer ein Formular ausfüllt und JavaScript verwendet wird, um eine Fehlermeldung hinzuzufügen - der Alert würde die Nachricht sofort vorlesen. Sie sollte nicht auf HTML angewendet werden, mit dem der Benutzer nicht interagiert hat. Wenn eine Seite beispielsweise mit mehreren sichtbaren Alerts geladen wird, die überall verteilt sind, sollte die Alert-Rolle nicht verwendet werden, da die Nachrichten nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) werden Alerts nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit der Rolle zuerst im Markup der Seite vorhanden ist - dies wird den Browser und den Bildschirmleser "primen", um das Element auf Änderungen zu überwachen. Danach werden alle Änderungen des Inhalts angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"`, das bereits mit der Alert-Nachricht, die Sie ankündigen möchten, befüllt ist, dynamisch hinzuzufügen/zu generieren - dies führt im Allgemeinen _nicht_ zu einer Ankündigung, da es sich nicht um eine Inhaltsänderung handelt.

Da die `alert`-Rolle jeden geänderten Inhalt vorliest, sollte sie mit Vorsicht verwendet werden. Alerts sind per Definition störend. Mehrere Alerts gleichzeitig und unnötige Alerts schaffen schlechte Benutzererfahrungen.

## Beispiele

Die folgenden sind häufige Beispiele für Alerts und wie man sie implementiert:

### Beispiel 1: Sichtbarmachen von vorgefertigten Inhalten innerhalb eines Elements mit der Alert-Rolle

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` initial mit CSS versteckt ist, bewirkt die Sichtbarmachung, dass der Alert ausgelöst wird. Das bedeutet, dass ein bestehendes Alert-Container-Element mehrfach "wiederverwendet" werden kann.

```css
.hidden {
  display: none;
}
```

```html
<div id="expirationWarning" role="alert">
  <span class="hidden">Ihre Login-Sitzung läuft in 2 Minuten ab</span>
</div>
```

```js
// Entfernen der 'hidden' Klasse macht den Inhalt innerhalb des Elements sichtbar, was dazu führt, dass der Bildschirmleser den Alert ankündigt:
document
  .getElementById("expirationWarning")
  .firstChild.classList.remove("hidden");
```

### Beispiel 2: Dynamisches Ändern des Inhalts innerhalb eines Elements mit der Alert-Rolle

Mithilfe von JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie, dass, wenn Sie denselben Alert mehrfach auslösen müssen (d. h. der Inhalt, den Sie dynamisch einfügen, ist derselbe wie zuvor), dies im Allgemeinen nicht als Änderung angesehen wird und _nicht_ zu einer Ankündigung führt. Aus diesem Grund ist es normalerweise am besten, den Inhalt des Alert-Containers kurz zu "löschen", bevor Sie dann die Alert-Nachricht einfügen.

```html
<div id="alertContainer" role="alert"></div>
```

```js
// löschen des Inhalts des Containers
document.getElementById("alertContainer").textContent = "";
// die neue Alert-Nachricht einfügen
document.getElementById("alertContainer").textContent =
  "Ihre Sitzung läuft in " + expiration + " Minuten ab";
```

### Beispiel 3: Visuell versteckter Alert-Container für Bildschirmleser-Benachrichtigungen

Es ist möglich, den Alert-Container selbst visuell zu verstecken und ihn zu verwenden, um Updates/Benachrichtigungen ausdrücklich für Bildschirmleser bereitzustellen. Dies kann in Situationen nützlich sein, in denen wichtiger Inhalt auf der Seite aktualisiert wurde, die Änderung jedoch für einen Benutzer eines Bildschirmlesers nicht sofort offensichtlich wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` versteckt wurde, da dies ihn auch vor unterstützenden Technologien versteckt und bedeutet, dass sie nicht über Änderungen benachrichtigt werden. Verwenden Sie stattdessen etwas wie die [`.visually-hidden`-Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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
// löschen des Inhalts des Containers
document.getElementById("hiddenAlertContainer").textContent = "";
// die neue Alert-Nachricht einfügen
document.getElementById("hiddenAlertContainer").textContent =
  "Alle Artikel wurden aus Ihrem Inventar entfernt.";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA: `alertdialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [ARIA: Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [ARIA-Alert-Unterstützung - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA Practices Alert-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
