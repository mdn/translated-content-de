---
title: "ARIA: form-Rolle"
slug: Web/Accessibility/ARIA/Roles/form_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `form`-Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine Funktionalität ähnlich einem HTML-Formular bereitstellen. Das Formular wird nicht als Landmarkenbereich angezeigt, es sei denn, es hat einen [zugänglichen Namen](/de/docs/Glossary/Accessible_name).

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktdaten eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML-{{htmlelement("form")}}-Element, um Ihre Formularelemente zu enthalten, anstatt die ARIA `form`-Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-`<form>`-Element reicht aus, um unterstützenden Technologien mitzuteilen, dass es ein Formular gibt.

## Beschreibung

Eine `form`-[Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) identifiziert einen Bereich des Inhalts, der eine Sammlung von Elementen und Objekten enthält, die zusammen ein Formular ergeben, wenn keine andere benannte Landmarke geeignet ist (z. B. [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements signalisiert automatisch einen Abschnitt des Inhalts als `form`-Landmarke, falls es einen zugänglichen Namen hat. Entwickler sollten immer das richtige semantische HTML-Element der Verwendung von ARIA vorziehen.

Verwenden Sie das HTML-{{HTMLElement('form')}}-Element, wenn möglich. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen hat (z. B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Global_attributes#title)). Stellen Sie sicher, dass jedes Formular in einem Dokument eine eindeutige Bezeichnung hat, um den Benutzern zu helfen, den Zweck des Formulars zu verstehen. Diese Bezeichnung sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer unterstützender Technologien. Verwenden Sie die `search`-Landmarke anstelle der `form`-Landmarke, wenn das Formular zur Suchfunktionalität dient.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularelement zu identifizieren. Selbst wenn Sie die Form-Landmarke anstelle von `<form>` verwenden, wird empfohlen, native HTML-Formularsteuerelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}}, und {{HTMLElement('textarea')}} zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastatur-Interaktionen

Keine rollenspezifischen Tastatur-Interaktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Event-Handler behandelt das Ereignis, das ausgelöst wird, wenn das Formular übermittelt wird. Alles, was kein `<form>` ist, kann nicht übermittelt werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübermittlungsmechanismus zu erstellen, zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

## Barrierefreiheit-Bedenken

### Sparsam verwenden

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen größere Gesamtabschnitte des Dokuments identifizieren. Die Verwendung zu vieler Landmarkenrollen kann "Geräusche" in Bildschirmlesegeräten erzeugen, was das Verstehen des gesamten Layouts der Seite erschwert.

### Eingaben sind keine Formulare

Sie müssen `role="form"` nicht bei jedem [Formularelement](/de/docs/Web/HTML/Element#forms) (Inputs, Textbereiche, Auswahlen usw.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umwickelt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren nicht `role="form"`.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) verwenden.

### Kennzeichnung von Landmarken

Jedes {{HTMLElement('form')}}-Element und jede `form`-Rolle, die als Landmarke angezeigt werden muss, muss einen zugänglichen Namen erhalten. Dieser Name ermöglicht es einem Benutzer mit unterstützender Technologie, den Zweck der Formular-Landmarke schnell zu verstehen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem die `role="form"` zugewiesen wurde, um einen zugänglichen Namen bereitzustellen.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Bildschirmlesegeräte geben die Art der Rolle der Landmarke an. Daher müssen Sie in ihrem Label nicht beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="form"` mit einem `aria-label="Contact form"` redundant als "Kontaktformular Formular" angekündigt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements signalisiert automatisch, dass ein Abschnitt die Rolle `form` hat. Wenn überhaupt möglich, bevorzugen Sie die Verwendung davon.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
