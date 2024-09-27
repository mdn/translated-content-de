---
title: "ARIA: form Rolle"
slug: Web/Accessibility/ARIA/Roles/form_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `form` Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine gleichwertige Funktionalität wie ein HTML-Formular bieten. Das Formular wird nicht als Landmarkenregion angezeigt, es sei denn, es hat einen [barrierefreien Namen](/de/docs/Glossary/Accessible_name).

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktinformationen eines Benutzers erfasst und speichert.

> [!WARNING]
> Verwenden Sie ein HTML {{htmlelement("form")}}-Element, um Ihre Formularelemente zu enthalten, anstatt die ARIA `form` Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML `<form>`-Element reicht aus, um unterstützenden Technologien mitzuteilen, dass ein Formular vorhanden ist.

## Beschreibung

Ein `form` [Landmark](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die insgesamt ein Formular bilden, wenn keine andere benannte Landmark geeignet ist (z.B. [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements kommuniziert automatisch einen Inhaltsbereich als `form`-Landmarke, wenn ihm ein barrierefreier Name bereitgestellt wird. Entwickler sollten immer bevorzugt das korrekte semantische HTML-Element über ARIA verwenden.

Verwenden Sie das HTML {{HTMLElement('form')}}-Element, wenn möglich. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen barrierefreien Namen hat (z.B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Global_attributes#title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein eindeutiges Label hat, um Benutzern zu helfen, das Ziel des Formulars zu verstehen. Dieses Label sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer unterstützender Technologien. Verwenden Sie die `search` Landmarke anstelle der `form` Landmarke, wenn das Formular für Suchfunktionen genutzt wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht für jedes Formularelement. Selbst wenn Sie die Form-Landmarke anstelle von `<form>` verwenden, sollten Sie dennoch native HTML-Formularsteuerelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}}, und {{HTMLElement('textarea')}} verwenden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Ereignishandler verarbeitet das Ereignis, das beim Absenden des Formulars ausgelöst wird. Alles, was kein `<form>` ist, kann nicht übermittelt werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübermittlungsmechanismus zu erstellen, zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

## Barrierefreiheitshinweise

### Sparsam verwenden

[Landmark Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dazu gedacht, größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Screenreadern "Geräusche" erzeugen, die es schwer machen, das Gesamtlayout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen `role="form"` nicht für jedes [Formularelement](/de/docs/Web/HTML/Element#forms) (Eingaben, Textbereiche, Auswahlen usw.) angeben. Es sollte auf dem HTML-Element angegeben werden, das die Formularelemente umschließt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und verzichten Sie darauf, `role="form"` anzugeben.

### Suche

Wenn ein Formular für die Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) verwenden.

### Landmarken kennzeichnen

Jedes {{HTMLElement('form')}}-Element und jede Form `role`, die als Landmarke exponiert werden muss, muss einen barrierefreien Namen erhalten. Dieser Name ermöglicht es einem Benutzer unterstützender Technologien, schnell den Zweck der formalen Landmarke zu verstehen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem `role="form"` zugewiesen wurde, um ihm einen barrierefreien Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader werden die Art der Rolle der Landmarke ankündigen. Daher brauchen Sie in ihrem Label nicht zu beschreiben, was die Landmarke ist. Zum Beispiel kann eine Erklärung von `role="form"` mit einem `aria-label="Kontaktformular"` redundant als "Kontaktformular-Formular" angekündigt werden.

## Best Practices

### HTML bevorzugen

Die Verwendung des {{HTMLElement('form')}}-Elements teilt automatisch mit, dass ein Abschnitt die Rolle `form` hat. Wenn möglich, bevorzugen Sie es, dies zu nutzen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
