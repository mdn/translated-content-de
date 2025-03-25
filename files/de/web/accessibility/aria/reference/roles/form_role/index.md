---
title: "ARIA: Rolle `form`"
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die Rolle `form` kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine ähnliche Funktionalität wie ein HTML-Formular bieten. Das Formular wird nicht als Landmarkenregion behandelt, es sei denn, es hat einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktinformationen eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie das HTML-Element {{htmlelement("form")}}, um Ihre Formularelemente zu enthalten, anstatt die ARIA-Rolle `form`, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-`<form>`-Element ist ausreichend, um unterstützenden Technologien mitzuteilen, dass ein Formular vorhanden ist.

## Beschreibung

Ein `form`-[Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die in ihrer Gesamtheit ein Formular bilden, wenn keine andere benannte Landmarke angemessen ist (z. B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements kommuniziert automatisch einen Inhaltsabschnitt als `form`-Landmarke, wenn ein zugänglicher Name bereitgestellt wird. Entwickler sollten immer die richtigen semantischen HTML-Elemente der Verwendung von ARIA vorziehen.

Verwenden Sie das HTML-Element {{HTMLElement('form')}} wenn möglich. Das `<form>`-Element definiert eine `form`-Landmarke, sofern es einen zugänglichen Namen hat (z. B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein einzigartiges Label hat, um den Benutzern den Zweck des Formulars zu verdeutlichen. Dieses Label sollte für alle Benutzer sichtbar sein, nicht nur für Nutzer von unterstützenden Technologien. Verwenden Sie die Landmarke `search` anstelle der Landmarke `form`, wenn das Formular zur Suche genutzt wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularfeld zu identifizieren. Auch wenn Sie die `form`-Landmarke anstelle von `<form>` verwenden, sollten Sie dennoch native HTML-Formularkontrollen wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} nutzen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der `onSubmit`-Ereignishandler behandelt das Ereignis, das ausgelöst wird, wenn das Formular übermittelt wird. Alles, was kein `<form>` ist, kann nicht übermittelt werden, daher müssten Sie JavaScript verwenden, um einen alternativen Mechanismus zur Datenübermittlung zu erstellen, zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

## Barrierefreiheitsbedenken

### Sparsam verwenden

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen größere Gesamtabschnitte des Dokuments identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Lärm" in Screenreadern verursachen und es schwierig machen, das Gesamt-Layout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen `role="form"` nicht auf jedem [Formular-Element](/de/docs/Web/HTML/Element#forms) (Eingaben, Textbereiche, Selects usw.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren nicht `role="form"`.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Landmarken beschriften

Jedes {{HTMLElement('form')}}-Element und jede `form`-Rolle, die als Landmarke offengelegt werden muss, muss einen zugänglichen Namen erhalten. Dieser Name ermöglicht es einem Benutzer von unterstützenden Technologien, den Zweck der Formular-Landmarke schnell zu verstehen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem `role="form"` zugewiesen wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader kündigen die Art der Rolle der Landmarke an. Daher brauchen Sie nicht in ihrer Bezeichnung zu beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="form"` mit `aria-label="Contact form"` redundant als "contact form form" angekündigt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `form` hat. Wann immer möglich, bevorzugen Sie dessen Verwendung.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
