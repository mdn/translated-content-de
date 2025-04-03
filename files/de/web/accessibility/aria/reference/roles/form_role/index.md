---
title: "ARIA: form Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die `form` Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine gleichwertige Funktionalität wie ein HTML-Formular bieten. Das Formular wird nicht als Landmarken-Region angezeigt, es sei denn, es hat einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktdaten eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML {{htmlelement("form")}}-Element, um Ihre Formularsteuerelemente zu enthalten, anstatt die ARIA `form` Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML `<form>`-Element reicht aus, um unterstützenden Technologien mitzuteilen, dass es ein Formular gibt.

## Beschreibung

Eine `form` [Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) identifiziert einen Bereich von Inhalten, der eine Sammlung von Elementen und Objekten enthält, die insgesamt ein Formular bilden, wenn keine andere benannte Landmarke angemessen ist (z.B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch einen Inhaltsabschnitt als `form`-Landmarke kommunizieren, wenn es einen zugänglichen Namen hat. Entwickler sollten immer das korrekte semantische HTML-Element anstelle von ARIA verwenden.

Verwenden Sie nach Möglichkeit das HTML {{HTMLElement('form')}}-Element. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen hat (z.B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument eine eindeutige Beschriftung hat, um den Benutzern das Verständnis des Zwecks des Formulars zu erleichtern. Diese Beschriftung sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer unterstützender Technologien. Verwenden Sie die `search`-Landmarke anstelle der `form`-Landmarke, wenn das Formular für die Suchfunktionalität genutzt wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularfeld zu kennzeichnen. Selbst wenn Sie die Formular-Landmarke anstelle von `<form>` verwenden, sollten Sie nachdrücklich native HTML-Formularsteuerelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} verwenden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastatur-Interaktionen

Keine rollenspezifischen Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Event-Handler behandelt das Ereignis, das ausgelöst wird, wenn das Formular übermittelt wird. Alles, was kein `<form>` ist, kann nicht übermittelt werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübertragungsmechanismus zu erstellen, zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

## Barrierefreiheitsaspekte

### Sparsam verwenden

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind vorgesehen, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Screenreadern "Rauschen" erzeugen und es schwer machen, das Gesamtlayout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen nicht `role="form"` auf jedem [Formularelement](/de/docs/Web/HTML/Element#forms) (Eingaben, Textbereiche, Auswahlen usw.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren `role="form"` nicht.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) Wert verwenden.

### Landmarks beschriften

Jedes {{HTMLElement('form')}}-Element und jede `form`-Rolle, die als Landmarke angezeigt werden muss, muss einen zugänglichen Namen haben. Dieser Name ermöglicht es einem Benutzer unterstützender Technologien, schnell den Zweck der Formular-Landmarke zu verstehen.

Verwenden Sie ein `aria-labelledby`, `aria-label` oder `title` auf demselben Element, das die `role="form"` zugewiesen wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader kündigen den Rollentyp der Landmarke an. Daher müssen Sie in ihrer Beschriftung nicht beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="form"` mit einer `aria-label="Contact form"` redundant angekündigt werden als "contact form form".

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `form` hat. Wenn irgend möglich, bevorzugen Sie es, dieses zu nutzen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
