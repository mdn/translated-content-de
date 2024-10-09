---
title: "ARIA: form-Rolle"
slug: Web/Accessibility/ARIA/Roles/form_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Die `form`-Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine äquivalente Funktionalität zu einem HTML-Formular bieten. Das Formular wird nicht als Landmarkenbereich exponiert, es sei denn, es hat einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktinformationen eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML-{{htmlelement("form")}}-Element, um Ihre Formularsteuerelemente zu enthalten, anstatt der ARIA-`form`-Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-`<form>`-Element reicht aus, um unterstützenden Technologien mitzuteilen, dass es ein Formular gibt.

## Beschreibung

Eine `form`-[Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die insgesamt ein Formular bilden, wenn keine andere benannte Landmarke geeignet ist (z.B. [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch einen Inhaltsabschnitt als `form`-Landmarke kommunizieren, wenn ihm ein zugänglicher Name bereitgestellt wird. Entwickler sollten immer bevorzugen, das richtige semantische HTML-Element zu verwenden, anstatt ARIA zu verwenden.

Verwenden Sie nach Möglichkeit das HTML-{{HTMLElement('form')}}-Element. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen hat (z.B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein einzigartiges Label hat, um Benutzern den Zweck des Formulars verständlich zu machen. Dieses Label sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer von unterstützenden Technologien. Verwenden Sie die `search`-Landmarke anstelle der `form`-Landmarke, wenn das Formular für Suchfunktionen verwendet wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularelement zu identifizieren. Auch wenn Sie die Form-Landmarke anstelle von `<form>` verwenden, wird empfohlen, native HTML-Formularsteuerelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollspezifischen Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Event-Handler behandelt das Ereignis, das ausgelöst wird, wenn das Formular abgeschickt wird. Alles, was kein `<form>` ist, kann nicht abgeschickt werden, deshalb müssten Sie JavaScript verwenden, um einen alternativen Datenübertragungsmechanismus zu erstellen, beispielsweise mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dazu gedacht, größere gesamte Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmarkenrollen kann "Geräusche" in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen nicht `role="form"` auf jedem [Formularelement](/de/docs/Web/HTML/Element#forms) (Eingaben, Textbereiche, Auswahlfelder, usw.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren `role="form"` nicht.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) verwenden.

### Landmarken beschriften

Jedes {{HTMLElement('form')}}-Element und jede Form-`role`, die als Landmarke exponiert werden muss, muss einen zugänglichen Namen erhalten. Dieser Name ermöglicht es einem Benutzer unterstützender Technologien, den Zweck der Form-Landmarke schnell zu verstehen.

Verwenden Sie ein `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem die `role="form"` zugewiesen wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader geben die Art der Rolle der Landmarke bekannt. Deshalb müssen Sie in der Beschriftung nicht beschreiben, was die Landmarke ist. Beispielsweise kann eine Deklaration von `role="form"` mit einem `aria-label="Contact form"` redundant als "Kontaktformular Formular" angekündigt werden.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `form` hat. Wenn möglich, ziehen Sie es vor, es zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (Rolle): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
