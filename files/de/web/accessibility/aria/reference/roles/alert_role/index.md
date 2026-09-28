---
title: "ARIA: alert-Rolle"
short-title: alert
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Die `alert`-Rolle ist für wichtige und in der Regel zeitkritische Informationen vorgesehen. `alert` ist eine Art von [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), die als atomare Live-Region verarbeitet wird.

## Beschreibung

Die `alert`-Rolle wird verwendet, um Nutzern eine wichtige und meist zeitkritische Nachricht mitzuteilen. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein barrierefrei zugängliches Alert-Ereignis an assistive Technologien, die daraufhin die Nutzer benachrichtigen können.

Die `alert`-Rolle sollte nur für Informationen verwendet werden, die sofortige Aufmerksamkeit erfordern, zum Beispiel:

- In ein Formularfeld wurde ein ungültiger Wert eingegeben.
- Die Anmeldesitzung läuft in Kürze ab.
- Die Verbindung zum Server wurde unterbrochen, sodass lokale Änderungen nicht gespeichert werden.

Die `alert`-Rolle sollte nur für Textinhalte verwendet werden, nicht für interaktive Elemente wie Links oder Schaltflächen. Das Element mit der `alert`-Rolle muss keinen Fokus erhalten können: Screenreader (mit Sprach- oder Brailleausgabe) kündigen aktualisierte Inhalte automatisch an, unabhängig davon, wo sich der Tastaturfokus befindet, wenn die Rolle hinzugefügt wird.

Die `alert`-Rolle wird dem Knoten hinzugefügt, der die Alert-Nachricht enthält, **nicht** dem Element, das den Alert auslöst. Alerts sind [assertive Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). `role="alert"` zu setzen, entspricht dem Setzen von [`aria-live="assertive"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) und [`aria-atomic="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Da Alerts keinen Fokus erhalten, muss der Fokus nicht verwaltet werden, und es sollte keine Nutzerinteraktion erforderlich sein.

> [!WARNING]
> Aufgrund ihres aufdringlichen Charakters darf die `alert`-Rolle nur sparsam und nur dann verwendet werden, wenn die sofortige Aufmerksamkeit der Nutzer erforderlich ist.

Die [`alert`](https://w3c.github.io/aria/#alert)-Rolle ist eine von fünf Rollen für [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). Für weniger dringende dynamische Änderungen sollte eine weniger aufdringliche Methode verwendet werden, beispielsweise `aria-live="polite"` oder eine andere Rolle für Live-Regionen wie [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role). Wenn Nutzer den Alert schließen können sollen, sollte stattdessen die Rolle [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) verwendet werden.

Das Wichtigste an der `alert`-Rolle ist, dass sie für dynamisch angezeigte Inhalte vorgesehen ist, nicht für Inhalte, die bereits beim Laden der Seite erscheinen. Sie eignet sich beispielsweise, wenn ein Nutzer ein Formular ausfüllt und JavaScript eine Fehlermeldung hinzufügt: Der Alert würde die Meldung sofort vorlesen. Sie sollte nicht für HTML verwendet werden, mit dem der Nutzer noch nicht interagiert hat. Wenn beispielsweise beim Laden einer Seite mehrere sichtbare Alerts an verschiedenen Stellen erscheinen, sollte die `alert`-Rolle nicht verwendet werden, da die Meldungen nicht dynamisch ausgelöst wurden.

Wie bei allen anderen [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) werden Alerts nur angekündigt, wenn der Inhalt des Elements mit `role="alert"` _aktualisiert_ wird. Stellen Sie sicher, dass das Element mit dieser Rolle zunächst im Markup der Seite vorhanden ist. So werden Browser und Screenreader darauf vorbereitet, das Element auf Änderungen zu überwachen. Anschließende Änderungen am Inhalt werden angekündigt. Versuchen Sie nicht, ein Element mit `role="alert"` dynamisch hinzuzufügen oder zu erzeugen, wenn es bereits die anzukündigende Alert-Nachricht enthält. Das führt in der Regel _nicht_ zu einer Ankündigung, da keine Inhaltsänderung stattfindet.

Da die `alert`-Rolle jeden geänderten Inhalt vorliest, sollte sie mit Bedacht eingesetzt werden. Alerts sind per Definition unterbrechend. Mehrere gleichzeitige oder unnötige Alerts beeinträchtigen die Nutzererfahrung.

## Beispiele

Im Folgenden finden Sie häufige Beispiele für Alerts und ihre Umsetzung:

### Beispiel 1: Vorhandene Inhalte in einem Element mit Alert-Rolle sichtbar machen

Wenn der Inhalt _innerhalb_ des Elements mit `role="alert"` zunächst per CSS ausgeblendet ist, löst das Sichtbarmachen den Alert aus. Ein vorhandenes Alert-Container-Element kann dadurch mehrfach „wiederverwendet“ werden.

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

### Beispiel 2: Den Inhalt eines Elements mit Alert-Rolle dynamisch ändern

Mit JavaScript können Sie den Inhalt _innerhalb_ des Elements mit `role="alert"` dynamisch ändern. Beachten Sie: Wenn Sie denselben Alert mehrfach auslösen möchten, also dynamisch denselben Inhalt wie zuvor einfügen, wird dies in der Regel nicht als Änderung erkannt und führt _nicht_ zu einer Ankündigung. Deshalb ist es meist am besten, den Inhalt des Alert-Containers kurz zu „leeren“, bevor Sie die Alert-Nachricht einfügen.

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

### Beispiel 3: Visuell verborgener Alert-Container für Screenreader-Benachrichtigungen

Sie können den Alert-Container selbst visuell verbergen und damit gezielt Aktualisierungen oder Benachrichtigungen für Screenreader bereitstellen. Das ist hilfreich, wenn wichtige Inhalte auf der Seite aktualisiert wurden, die Änderung für Screenreader-Nutzer aber nicht unmittelbar erkennbar wäre.

Stellen Sie jedoch sicher, dass der Container nicht mit `display:none` ausgeblendet wird. Dadurch wäre er auch für assistive Technologien verborgen, sodass diese nicht über Änderungen benachrichtigt würden. Verwenden Sie stattdessen beispielsweise die [`.visually-hidden`-Stile](https://www.a11yproject.com/posts/how-to-hide-content/).

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
- [ARIA-Practices-Beispiel für Alerts](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
