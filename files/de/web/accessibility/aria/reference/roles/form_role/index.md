---
title: "ARIA: form-Rolle"
short-title: form
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `form`-Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine äquivalente Funktionalität zu einem HTML-Formular bieten. Das Formular wird nicht als Landmarkenbereich angezeigt, es sei denn, es hat einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktinformationen eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML {{htmlelement("form")}}-Element, um Ihre Formularelemente zu umfassen, anstatt der ARIA-`form`-Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML `<form>`-Element ist ausreichend, um assistive Technologien darüber zu informieren, dass ein Formular vorhanden ist.

## Beschreibung

Eine `form`-[Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die zusammen ein Formular bilden, wenn keine andere benannte Landmarke geeignet ist (z. B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements kommuniziert automatisch einen Inhaltsbereich als `form`-Landmarke, sofern es einen zugänglichen Namen hat. Entwickler sollten stets das korrekte semantische HTML-Element gegenüber ARIA bevorzugen.

Verwenden Sie das HTML {{HTMLElement('form')}}-Element, wenn möglich. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen hat (z. B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein eindeutiges Label hat, um Benutzern das Verständnis des Zwecks des Formulars zu erleichtern. Dieses Label sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer von assistiven Technologien. Verwenden Sie die `search`-Landmarke anstelle der `form`-Landmarke, wenn das Formular für Suchfunktionen verwendet wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularelement zu kennzeichnen. Auch wenn Sie die Formular-Landmarke anstelle von `<form>` verwenden, sollten Sie native HTML-Formularelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}}, und {{HTMLElement('textarea')}} verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Ereignis-Handler behandelt das Ereignis, das ausgelöst wird, wenn das Formular abgeschickt wird. Alles, was kein `<form>` ist, kann nicht abgeschickt werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübermittlungsmechanismus zu erstellen, z. B. mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

## Zugänglichkeitsbedenken

### Sparsam verwenden

[Landmarken-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dafür gedacht, größere Gesamtabschnitte des Dokuments zu identifizieren. Eine zu häufige Verwendung von Landmarken-Rollen kann "Rauschen" in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen nicht für jedes [Formularelement](/de/docs/Web/HTML/Reference/Elements#forms) (Inputs, Textbereiche, Auswahlfelder usw.) `role="form"` deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umgibt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren Sie nicht `role="form"`.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Landmarks benennen

Jedes {{HTMLElement('form')}}-Element und jede Formularrolle, die als Landmarke angezeigt werden muss, muss einen zugänglichen Namen erhalten. Dieser Name ermöglicht es einem Benutzer von assistiven Technologien, schnell den Zweck der Formularlandmarke zu verstehen.

Verwenden Sie ein `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem `role="form"` gegeben wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader geben den Typ der Rolle an, die die Landmarke darstellt. Daher müssen Sie nicht im Label beschreiben, was die Landmarke ist. Beispielsweise kann eine Deklaration von `role="form"` mit einem `aria-label="Kontaktformular"` redundant als "Kontaktformular Formular" angekündigt werden.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('form')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `form` hat. Wenn möglich, bevorzugen Sie die Verwendung dieses Elements.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
