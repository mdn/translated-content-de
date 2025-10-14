---
title: "ARIA: Rollenmerkmal `form`"
short-title: form
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Das Rollenmerkmal `form` kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu kennzeichnen, die eine äquivalente Funktionalität wie ein HTML-Formular bereitstellen. Das Formular wird nicht als Landmarkenbereich angezeigt, es sei denn, es hat einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktinformationen eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML-{{htmlelement("form")}}-Element, um Ihre Formularelemente zu enthalten, anstatt das ARIA-`form`-Rollenmerkmal, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-`<form>`-Element reicht aus, um assistiven Technologien mitzuteilen, dass es sich um ein Formular handelt.

## Beschreibung

Ein `form`-[Landmarkenbereich](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) kennzeichnet einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die in ihrer Gesamtheit ein Formular erzeugen, wenn keine andere benannte Landmarke angemessen ist (z.B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch einen Inhaltsbereich als `form`-Landmarke kommunizieren, wenn es einen zugänglichen Namen erhält. Entwickler sollten immer das korrekte semantische HTML-Element gegenüber ARIA bevorzugen.

Verwenden Sie wenn möglich das HTML-{{HTMLElement('form')}}-Element. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen erhält (z.B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein eindeutiges Label hat, um den Benutzern das Verständnis des Zwecks des Formulars zu erleichtern. Dieses Label sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer von assistiven Technologien. Verwenden Sie die `search`-Landmarke anstelle der `form`-Landmarke, wenn das Formular für Suchfunktionen verwendet wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu kennzeichnen; verwenden Sie es nicht, um jedes Formularelement zu kennzeichnen. Selbst wenn Sie die form-Landmarke anstelle von `<form>` verwenden, wird empfohlen, native HTML-Formularelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}}, und {{HTMLElement('textarea')}} zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Ereignishandler behandelt das Ereignis, das ausgelöst wird, wenn das Formular gesendet wird. Alles, was kein `<form>` ist, kann nicht gesendet werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübertragungsmechanismus zu erstellen, z.B. mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

Es wird empfohlen, `<form>` zu verwenden.

```html
<form id="send-comment" aria-label="Add a comment">…</form>
```

## Barrierefreiheit

### Sparsam verwenden

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu gedacht, größere Gesamtabschnitte des Dokuments zu kennzeichnen. Die Verwendung zu vieler Landmarkenrollen kann Geräusche in Bildschirmlesegeräten erzeugen, was das Verständnis des Gesamtlayouts der Seite erschwert.

### Eingaben sind keine Formulare

Sie müssen nicht `role="form"` für jedes [Formularelement](/de/docs/Web/HTML/Reference/Elements#forms) (Eingaben, Textbereiche, Auswahlen usw.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umgibt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umgebendes Element und deklarieren nicht `role="form"`.

### Suche

Wenn ein Formular für Suchzwecke verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Landmarken benennen

Jedes {{HTMLElement('form')}}-Element und jede `form`-Rolle, die als Landmarke angezeigt werden sollen, müssen einen zugänglichen Namen haben. Dieser Name ermöglicht es Benutzern von assistiven Technologien, den Zweck der Formulardemarkierung schnell zu verstehen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem `role="form"` zugewiesen wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Bildschirmlesegeräte geben den Rollentyp der Landmarke wieder. Daher müssen Sie nicht erklären, was die Landmarke in ihrem Label ist. Eine Deklaration von `role="form"` mit einem `aria-label="Contact form"` könnte redundant als "Kontaktformular Formular" ausgegeben werden.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch kommunizieren, dass das Element die Rolle `form` hat. Wenn möglich, bevorzugen Sie die Verwendung des semantischen `<form>`-Elements gegenüber der `form`-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
