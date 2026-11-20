---
title: "ARIA: form-Rolle"
short-title: form
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `form` kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu kennzeichnen, die dieselbe Funktionalität wie ein HTML-Formular bietet. Das Formular wird nur dann als Landmark-Region bereitgestellt, wenn es einen {{Glossary("Accessible_name", "zugänglichen Namen")}} hat.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dieses Formular erfasst und speichert die Kontaktdaten eines Benutzers.

> [!WARNING]
> Verwenden Sie ein HTML-Element {{htmlelement("form")}} für Ihre Formularsteuerelemente statt der ARIA-Rolle `form`, sofern Sie keinen sehr guten Grund haben, davon abzuweichen.
> Das HTML-Element `<form>` reicht aus, um assistierenden Technologien mitzuteilen, dass es sich um ein Formular handelt.

## Beschreibung

Eine `form`-[Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) kennzeichnet einen Inhaltsbereich mit einer Sammlung von Elementen und Objekten, die zusammen ein Formular bilden, wenn keine andere benannte Landmark geeignet ist (z. B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Das Element {{HTMLElement('form')}} kennzeichnet einen Inhaltsbereich automatisch als `form`-Landmark, wenn es einen zugänglichen Namen hat. Entwickler sollten stets das passende semantische HTML-Element der Verwendung von ARIA vorziehen.

Verwenden Sie nach Möglichkeit das HTML-Element {{HTMLElement('form')}}. Das Element `<form>` definiert eine `form`-Landmark, wenn es einen zugänglichen Namen hat (z. B. über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)). Geben Sie jedem Formular in einem Dokument eine eindeutige Beschriftung, damit Benutzer den Zweck des Formulars verstehen können. Diese Beschriftung sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer assistierender Technologien. Verwenden Sie die Landmark `search` statt der Landmark `form`, wenn das Formular für eine Suchfunktion verwendet wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu kennzeichnen, nicht jedes einzelne Formularfeld. Auch wenn Sie die Formular-Landmark statt `<form>` verwenden, sollten Sie native HTML-Formularsteuerelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Event-Handler verarbeitet das Ereignis, das beim Absenden des Formulars ausgelöst wird. Nur ein `<form>` kann abgesendet werden. Daher müssten Sie mit JavaScript einen alternativen Mechanismus zur Datenübermittlung erstellen, beispielsweise mit [`fetch()`](/de/docs/Web/API/Window/fetch).

## Hinweise zur Barrierefreiheit

### Sparsam verwenden

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) dienen dazu, größere Bereiche eines Dokuments zu kennzeichnen. Zu viele Landmark-Rollen können in Screenreadern für „Rauschen“ sorgen und es erschweren, den allgemeinen Aufbau der Seite zu verstehen.

### Eingabefelder sind keine Formulare

Sie müssen `role="form"` nicht für jedes [Formularelement](/de/docs/Web/HTML/Reference/Elements#forms) (Eingabefelder, Textbereiche, Auswahllisten usw.) deklarieren. Die Rolle sollte dem HTML-Element zugewiesen werden, das die Formularelemente umschließt. Idealerweise verwenden Sie dafür das Element {{HTMLElement('form')}} und deklarieren `role="form"` nicht zusätzlich.

### Suche

Wenn ein Formular für die Suche verwendet wird, sollten Sie den spezifischeren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Das Element {{HTMLElement('form')}} vermittelt automatisch, dass es die Rolle `form` hat. Verwenden Sie nach Möglichkeit das semantische Element `<form>` statt der Rolle `form`.

### Landmarks beschriften

Für die Rolle `form` wird ein zugänglicher Name dringend empfohlen, auch wenn ARIA ihn nicht vorschreibt.

Jedes {{HTMLElement('form')}}-Element und jedes Element mit der Rolle `form`, das als Landmark bereitgestellt werden soll, muss einen zugänglichen Namen erhalten. So können Benutzer assistierender Technologien den Zweck der Formular-Landmark schnell erkennen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem Sie `role="form"` zugewiesen haben, um ihm einen zugänglichen Namen zu geben.

#### `role="form"` verwenden

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader geben den Rollentyp einer Landmark bekannt. Daher müssen Sie die Art der Landmark nicht in ihrer Beschriftung wiederholen. Beispielsweise kann `role="form"` mit `aria-label="Contact form"` redundant als „contact form form“ ausgegeben werden.

## Beispiele

```html
<div role="form" id="send-comment" aria-label="Add a comment">
  <label for="username">Username</label>
  <input
    id="username"
    name="username"
    autocomplete="nickname"
    autocorrect="off"
    type="text" />

  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    autocomplete="email"
    autocapitalize="off"
    autocorrect="off"
    spellcheck="false"
    type="text" />

  <label for="comment">Comment</label>
  <textarea id="comment" name="comment"></textarea>

  <input value="Comment" type="submit" />
</div>
```

Es wird empfohlen, stattdessen `<form>` zu verwenden.

```html
<form id="send-comment" aria-label="Add a comment">…</form>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('form')}}
- Das Element {{HTMLElement('legend')}}
