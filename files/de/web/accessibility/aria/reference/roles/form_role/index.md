---
title: "ARIA: form-Rolle"
short-title: form
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: 705109e85b6c5a9142260c58a617ef295b3b1316
---

Die Rolle `form` kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu kennzeichnen, die dieselbe Funktionalität wie ein HTML-Formular bietet. Das Formular wird nur dann als Landmark-Region bereitgestellt, wenn es einen {{Glossary("Accessible_name", "zugänglichen Namen")}} hat.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dieses Formular erfasst und speichert die Kontaktinformationen einer Person.

> [!WARNING]
> Verwenden Sie ein HTML-Element {{htmlelement("form")}} für Ihre Formularsteuerelemente und nicht die ARIA-Rolle `form`, es sei denn, Sie haben einen sehr guten Grund dafür.
> Das HTML-Element `<form>` reicht aus, um assistiven Technologien mitzuteilen, dass es sich um ein Formular handelt.

## Beschreibung

Eine `form`-[Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) kennzeichnet einen Inhaltsbereich mit einer Sammlung von Elementen und Objekten, die zusammen ein Formular bilden, wenn keine andere benannte Landmark passend ist (z. B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Das Element {{HTMLElement('form')}} kennzeichnet einen Inhaltsbereich automatisch als `form`-Landmark, wenn es einen zugänglichen Namen hat. Entwickler sollten stets das passende semantische HTML-Element der Verwendung von ARIA vorziehen.

Verwenden Sie nach Möglichkeit das HTML-Element {{HTMLElement('form')}}. Das Element `<form>` definiert eine `form`-Landmark, wenn es einen zugänglichen Namen hat (z. B. durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)). Geben Sie jedem Formular in einem Dokument eine eindeutige Beschriftung, damit Nutzende den Zweck des Formulars verstehen können. Diese Beschriftung sollte für alle Nutzenden sichtbar sein, nicht nur für diejenigen, die assistive Technologien verwenden. Verwenden Sie die Landmark `search` statt `form`, wenn das Formular eine Suchfunktion bereitstellt.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu kennzeichnen, nicht jedes einzelne Formularfeld. Auch wenn Sie die `form`-Landmark anstelle von `<form>` verwenden, sollten Sie native HTML-Formularsteuerelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der Event-Handler `onsubmit` verarbeitet das Event, das beim Absenden des Formulars ausgelöst wird. Nur ein `<form>` kann abgesendet werden. Wenn Sie ein anderes Element verwenden, müssen Sie daher mit JavaScript einen alternativen Mechanismus zur Datenübermittlung erstellen, beispielsweise mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

## Aspekte der Barrierefreiheit

### Sparsam verwenden

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen größere, übergeordnete Bereiche eines Dokuments kennzeichnen. Zu viele Landmark-Rollen können in Screenreadern für „Rauschen“ sorgen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

### Eingabefelder sind keine Formulare

Sie müssen nicht für jedes [Formularelement](/de/docs/Web/HTML/Reference/Elements#forms) (Eingabefelder, Textbereiche, Auswahlfelder usw.) `role="form"` deklarieren. Deklarieren Sie die Rolle auf dem HTML-Element, das die Formularelemente umschließt. Idealerweise verwenden Sie dafür das Element {{HTMLElement('form')}} und deklarieren `role="form"` nicht.

### Suche

Wenn ein Formular für eine Suche verwendet wird, sollten Sie den spezielleren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Landmarks beschriften

Ein zugänglicher Name wird für die Rolle `form` dringend empfohlen, auch wenn ARIA ihn nicht vorschreibt.

Jedes Element {{HTMLElement('form')}} und jedes Element mit der Rolle `form`, das als Landmark bereitgestellt werden soll, muss einen zugänglichen Namen erhalten. So können Personen, die assistive Technologien verwenden, den Zweck der Formular-Landmark schnell verstehen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element wie `role="form"`, um ihm einen zugänglichen Namen zu geben.

#### `role="form"` verwenden

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader geben den Rollentyp einer Landmark an. Deshalb müssen Sie den Typ der Landmark nicht zusätzlich in ihrer Beschriftung nennen. Beispielsweise könnte `role="form"` zusammen mit `aria-label="Contact form"` redundant als „contact form form“ vorgelesen werden.

## Bewährte Verfahren

### HTML bevorzugen

Das Element {{HTMLElement('form')}} vermittelt automatisch, dass es die Rolle `form` hat. Verwenden Sie nach Möglichkeit das semantische Element `<form>` anstelle der Rolle `form`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('form')}}
- Das Element {{HTMLElement('legend')}}
