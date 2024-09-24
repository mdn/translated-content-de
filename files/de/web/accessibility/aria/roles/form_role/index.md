---
title: "ARIA: Form-Rolle"
slug: Web/Accessibility/ARIA/Roles/form_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `form`-Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine äquivalente Funktionalität zu einem HTML-Formular bieten. Das Formular wird nicht als Landmarke angezeigt, es sei denn, es verfügt über einen [zugänglichen Namen](/de/docs/Glossary/Accessible_name).

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktinformationen eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML-{{htmlelement("form")}}-Element, um Ihre Formularelemente zu umfassen, anstatt der ARIA `form`-Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-`<form>`-Element ist ausreichend, um unterstützenden Technologien mitzuteilen, dass es ein Formular gibt.

## Beschreibung

Eine `form`-[Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die zusammen ein Formular ergeben, wenn keine andere benannte Landmarke geeignet ist (z.B. [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role)).

> [!NOTE]
> Das Verwenden des {{HTMLElement('form')}}-Elements wird automatisch einen Abschnitt des Inhalts als `form`-Landmarke kommunizieren, wenn es einen zugänglichen Namen hat. Entwickler sollten immer das richtige semantische HTML-Element gegenüber ARIA bevorzugen.

Verwenden Sie das HTML-{{HTMLElement('form')}}-Element, wenn möglich. Das `<form>`-Element definiert eine `form`-Landmarke, wenn es einen zugänglichen Namen hat (z.B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Global_attributes#title)). Stellen Sie sicher, dass jedes Formular in einem Dokument ein eindeutiges Etikett hat, um den Benutzern das Verständnis des Zwecks des Formulars zu erleichtern. Dieses Etikett sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer von unterstützenden Technologien. Verwenden Sie die `search`-Landmarke anstelle der `form`-Landmarke, wenn das Formular für Suchfunktionen verwendet wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularelement zu identifizieren. Selbst wenn Sie die Form-Landmarke anstelle von `<form>` verwenden, werden Sie ermutigt, native HTML-Formularelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollen-spezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollen-spezifischen Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Event-Handler behandelt das Ereignis, das ausgelöst wird, wenn das Formular abgeschickt wird. Alles, was kein `<form>` ist, kann nicht eingereicht werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübermittlungsmechanismus zu erstellen, zum Beispiel mit {{domxref("Window/fetch", "fetch()")}}.

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

[Landmarken-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen größere allgemeine Abschnitte des Dokuments identifizieren. Die Verwendung zu vieler Landmarken-Rollen kann "Rauschen" bei Bildschirmlesern erzeugen, was es schwierig macht, das gesamte Layout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen nicht `role="form"` bei jedem [Formularelement](/de/docs/Web/HTML/Element#forms) (Eingaben, Textbereiche, Selects usw.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als umschließendes Element und deklarieren `role="form"` nicht.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) verwenden.

### Landmarken kennzeichnen

Jedes {{HTMLElement('form')}}-Element und jede Form-`role`, die als Landmarke angezeigt werden muss, muss einen zugänglichen Namen haben. Dieser Name ermöglicht es einem Benutzer von unterstützender Technologie, schnell den Zweck der Form-Landmarke zu verstehen.

Verwenden Sie `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem `role="form"` zugewiesen wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Bildschirmleser werden die Art der Rolle der Landmarke ankündigen. Aus diesem Grund müssen Sie in der Bezeichnung nicht beschreiben, was die Landmarke ist. Ein Beispiel, `role="form"` mit einem `aria-label="Contact form"`, könnte redundant als "Kontaktformular Formular" angekündigt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Durch die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch kommuniziert, dass ein Abschnitt die Rolle `form` hat. Wenn möglich, ziehen Sie es vor, dieses Element zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
