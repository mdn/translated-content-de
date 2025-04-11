---
title: "ARIA: form-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `form`-Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine gleichwertige Funktionalität wie ein HTML-Formular bereitstellen. Das Formular wird nicht als Landmarkenregion angezeigt, es sei denn, es hat einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktdaten eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML-{{htmlelement("form")}}-Element, um Ihre Formularelemente zu enthalten, anstatt die ARIA-`form`-Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-<form>-Element genügt, um assistive Technologien zu informieren, dass es ein Formular gibt.

## Beschreibung

Ein `form`-[Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die insgesamt ein Formular bilden, wenn keine andere benannte Landmarke geeignet ist (z.B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements teilt automatisch einen Inhaltsabschnitt als `form`-Landmarke mit, wenn es mit einem zugänglichen Namen versehen ist. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

Verwenden Sie das HTML-{{HTMLElement('form')}}-Element, wenn möglich. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen hat (z.B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein eindeutiges Label hat, um Benutzern den Zweck des Formulars verständlich zu machen. Dieses Label sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer von Hilfstechnologien. Verwenden Sie die `search`-Landmarke anstelle der `form`-Landmarke, wenn das Formular für Suchfunktionen verwendet wird.

Verwenden Sie `role="form"`, um einen Abschnitt der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularelement zu identifizieren. Auch wenn Sie die form Landmark anstelle von `<form>` verwenden, wird empfohlen, native HTML-Formularelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}}, und {{HTMLElement('textarea')}} zu nutzen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Keine rollen-spezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollen-spezifischen Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Ereignishandler verarbeitet das Ereignis, das ausgelöst wird, wenn das Formular eingereicht wird. Alles, was kein `<form>` ist, kann nicht eingereicht werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübermittlungsmechanismus zu erstellen, beispielsweise mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

Es wird empfohlen, `<form>` anstelle zu verwenden.

```html
<form id="send-comment" aria-label="Add a comment">…</form>
```

## Zugänglichkeitsbedenken

### Sparsam verwenden

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu gedacht, größere Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann ein "Rauschen" in Bildschirmlesern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

### Eingaben sind keine Formulare

Es ist nicht erforderlich, `role="form"` bei jedem [Formularelement](/de/docs/Web/HTML/Reference/Elements#forms) (Inputs, Textbereiche, Auswahlen, usw.) zu deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren Sie `role="form"` nicht.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Landmarken beschriften

Jedes {{HTMLElement('form')}}-Element und jede `form`-Rolle, die als Landmarke sichtbar sein muss, muss einen zugänglichen Namen erhalten. Dieser Name ermöglicht es einem Benutzer von Hilfstechnologien, den Zweck der Formular-Landmarke schnell zu erfassen.

Verwenden Sie ein `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem die `role="form"` zugewiesen wurde, um einen zugänglichen Namen bereitzustellen.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Bildschirmleser geben die Art der Rolle der Landmarke an. Daher brauchen Sie nicht zu beschreiben, was die Landmarke in ihrem Label ist. Zum Beispiel könnte eine Deklaration von `role="form"` mit `aria-label="Contact form"` redundant als "Kontaktformular Formular" angekündigt werden.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('form')}}-Elements teilt automatisch mit, dass ein Abschnitt die Rolle `form` hat. Wenn überhaupt möglich, bevorzugen Sie es, es zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
