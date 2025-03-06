---
title: "ARIA: form-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `form`-Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine äquivalente Funktionalität zu einem HTML-Formular bieten. Das Formular wird nicht als Landmarkenregion behandelt, es sei denn, es hat einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktdaten eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML-{{htmlelement("form")}}-Element, um Ihre Formularelemente zu umfassen, anstatt die ARIA-`form`-Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-`<form>`-Element ist ausreichend, um unterstützenden Technologien mitzuteilen, dass ein Formular vorhanden ist.

## Beschreibung

Eine `form`-[Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die insgesamt ein Formular bilden, wenn keine andere benannte Landmarke angemessen ist (z.B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch einen Abschnitt des Inhalts als `form`-Landmarke kommunizieren, wenn ihm ein zugänglicher Name gegeben wird. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

Verwenden Sie nach Möglichkeit das HTML-{{HTMLElement('form')}}-Element. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen hat (z.B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein einzigartiges Label hat, um Benutzern das Verständnis des Zwecks des Formulars zu erleichtern. Dieses Label sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer unterstützender Technologie. Verwenden Sie die `search`-Landmarke statt der `form`-Landmarke, wenn das Formular für Suchfunktionen verwendet wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularelement zu identifizieren. Auch wenn Sie die Formularlandmarke anstelle von `<form>` verwenden, sollten Sie native HTML-Formularelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollen-spezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollen-spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der `onSubmit`-Ereignishandler verarbeitet das Ereignis, das ausgelöst wird, wenn das Formular übermittelt wird. Alles, was nicht ein `<form>` ist, kann nicht übermittelt werden, daher müssten Sie JavaScript verwenden, um einen alternativen Mechanismus zur Datenübermittlung zu erstellen, z.B. mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

## Barrierefreiheitsanliegen

### Sparsam verwenden

[Landmarken-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen größere übergeordnete Abschnitte des Dokuments identifizieren. Die Verwendung zu vieler Landmarken-Rollen kann in Screenreadern "Rauschen" erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen nicht `role="form"` auf jedes [Formularelement](/de/docs/Web/HTML/Element#forms) (Eingaben, Textbereiche, Auswahlfelder, etc.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Verwenden Sie idealerweise das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren Sie nicht `role="form"`.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Landmarken beschriften

Jedes {{HTMLElement('form')}}-Element und jede `form`-Rolle, die als Landmarke sichtbar gemacht werden muss, muss einen zugänglichen Namen erhalten. Dieser Name ermöglicht es Benutzern unterstützender Technologie, schnell den Zweck der Formularlandmarke zu verstehen.

Verwenden Sie ein `aria-labelledby`, `aria-label` oder `title` auf demselben Element, das mit `role="form"` versehen wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader kündigen den Typ der Landmarkenrolle an. Daher müssen Sie in ihrem Label nicht beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="form"` mit einem `aria-label="Contact form"` redundant als "Kontaktformular-Formular" angekündigt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `form` hat. Wenn möglich, ziehen Sie dies der Verwendung vor.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
