---
title: "ARIA: form-Rolle"
short-title: form
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Die Rolle `form` kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu kennzeichnen, die dieselbe Funktionalität wie ein HTML-Formular bietet. Das Formular wird nur dann als Landmark-Region verfügbar gemacht, wenn es einen {{Glossary("Accessible_name", "zugänglichen Namen")}} hat.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dieses Formular erfasst und speichert die Kontaktinformationen eines Benutzers.

> [!WARNING]
> Verwenden Sie ein HTML-Element {{htmlelement("form")}} als Container für Ihre Formularsteuerelemente statt der ARIA-Rolle `form`, sofern Sie keinen sehr guten Grund dagegen haben.
> Das HTML-Element `<form>` reicht aus, um assistiven Technologien mitzuteilen, dass es sich um ein Formular handelt.

## Beschreibung

Ein `form`-[Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) kennzeichnet einen Inhaltsbereich mit einer Sammlung von Elementen und Objekten, die zusammen ein Formular bilden, wenn kein anderer benannter Landmark passend ist (z. B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Das Element {{HTMLElement('form')}} kennzeichnet einen Inhaltsbereich automatisch als `form`-Landmark, wenn es einen zugänglichen Namen hat. Entwickler sollten stets das passende semantische HTML-Element der Verwendung von ARIA vorziehen.

Verwenden Sie nach Möglichkeit das HTML-Element {{HTMLElement('form')}}. Das Element `<form>` definiert einen `form`-Landmark, wenn es einen zugänglichen Namen hat (z. B. über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)). Geben Sie jedem Formular in einem Dokument eine eindeutige Beschriftung, damit Benutzer den Zweck des Formulars verstehen können. Diese Beschriftung sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer assistiver Technologien. Verwenden Sie den `search`-Landmark statt des `form`-Landmarks, wenn das Formular eine Suchfunktion bereitstellt.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu kennzeichnen, nicht jedes einzelne Formularfeld. Auch wenn Sie den `form`-Landmark anstelle von `<form>` verwenden, sollten Sie native HTML-Formularsteuerelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Event-Handler verarbeitet das Ereignis, das beim Absenden des Formulars ausgelöst wird. Nur ein `<form>` kann abgesendet werden. Daher müssen Sie mit JavaScript einen alternativen Mechanismus zur Datenübermittlung erstellen, beispielsweise mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

Stattdessen wird die Verwendung von `<form>` empfohlen.

```html
<form id="send-comment" aria-label="Add a comment">…</form>
```

## Bedenken hinsichtlich der Barrierefreiheit

### Sparsam verwenden

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen größere, übergeordnete Abschnitte eines Dokuments kennzeichnen. Zu viele Landmark-Rollen können bei Screenreadern zu „Rauschen“ führen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

### Eingabefelder sind keine Formulare

Sie müssen nicht für jedes [Formularelement](/de/docs/Web/HTML/Reference/Elements#forms) (Eingabefelder, Textbereiche, Auswahllisten usw.) `role="form"` deklarieren. Die Rolle sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Verwenden Sie dafür idealerweise das Element {{HTMLElement('form')}} und deklarieren Sie nicht zusätzlich `role="form"`.

### Suche

Wenn ein Formular für eine Suche verwendet wird, sollten Sie den spezifischeren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Landmarks beschriften

Für die Rolle `form` wird ein zugänglicher Name dringend empfohlen, auch wenn ARIA ihn nicht vorschreibt.

Jedes Element {{HTMLElement('form')}} und jedes Element mit der Rolle `form`, das als Landmark verfügbar gemacht werden soll, benötigt einen zugänglichen Namen. So können Benutzer assistiver Technologien den Zweck des Formular-Landmarks schnell erkennen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem `role="form"` zugewiesen wurde, um ihm einen zugänglichen Namen zu geben.

#### `role="form"` verwenden

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader geben den Rollentyp eines Landmarks bekannt. Deshalb müssen Sie in seiner Beschriftung nicht beschreiben, um welche Art von Landmark es sich handelt. Beispielsweise kann `role="form"` mit `aria-label="Contact form"` redundant als „contact form form“ ausgegeben werden.

## Bewährte Verfahren

### HTML bevorzugen

Das Element {{HTMLElement('form')}} vermittelt automatisch, dass das Element die Rolle `form` hat. Verwenden Sie nach Möglichkeit das semantische Element `<form>` statt der Rolle `form`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('form')}}
- Das Element {{HTMLElement('legend')}}
