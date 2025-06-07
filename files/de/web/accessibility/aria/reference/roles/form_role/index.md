---
title: "ARIA: Form-Rolle"
short-title: form
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `form`-Rolle kann verwendet werden, um eine Gruppe von Elementen auf einer Seite zu identifizieren, die eine gleichwertige Funktionalität zu einem HTML-Formular bieten. Das Formular wird nicht als Landmark-Bereich dargestellt, es sei denn, es verfügt über einen {{Glossary("Accessible_name", "zugänglichen Namen")}}.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

Dies ist ein Formular, das die Kontaktinformationen eines Benutzers sammelt und speichert.

> [!WARNING]
> Verwenden Sie ein HTML-{{htmlelement("form")}}-Element, um Ihre Formularelemente zu enthalten, anstatt der ARIA-`form`-Rolle, es sei denn, Sie haben einen sehr guten Grund.
> Das HTML-`<form>`-Element ist ausreichend, um Hilfstechnologien mitzuteilen, dass es sich um ein Formular handelt.

## Beschreibung

Eine `form`-[Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) identifiziert einen Inhaltsbereich, der eine Sammlung von Elementen und Objekten enthält, die in ihrer Gesamtheit ein Formular darstellen, wenn keine andere benannte Landmark geeignet ist (z. B. [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) oder [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> Die Verwendung des {{HTMLElement('form')}}-Elements kommuniziert automatisch einen Inhaltsabschnitt als `form`-Landmark, sofern ihm ein zugänglicher Name gegeben wird. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

Verwenden Sie nach Möglichkeit das HTML-{{HTMLElement('form')}}-Element. Das `<form>`-Element definiert eine `form`-Landmark, wenn es einen zugänglichen Namen hat (z. B. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)). Stellen Sie sicher, dass jedes Formular in einem Dokument einen eindeutigen Beschriftung hat, um den Benutzern den Zweck des Formulars zu verdeutlichen. Diese Beschriftung sollte für alle Benutzer sichtbar sein, nicht nur für Benutzer von Hilfstechnologien. Verwenden Sie die `search`-Landmark anstelle der `form`-Landmark, wenn das Formular für Suchfunktionen verwendet wird.

Verwenden Sie `role="form"`, um einen Bereich der Seite zu identifizieren; verwenden Sie es nicht, um jedes Formularfeld zu identifizieren. Auch wenn Sie die Form-Landmark anstelle von `<form>` verwenden, werden Sie ermutigt, native HTML-Formularelemente wie {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}} und {{HTMLElement('textarea')}} zu nutzen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine rollenspezifischen Zustände oder Eigenschaften.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- `onsubmit`
  - : Der onSubmit-Event-Handler behandelt das Ereignis, das ausgelöst wird, wenn das Formular abgesendet wird. Alles, was kein `<form>` ist, kann nicht abgesendet werden, daher müssten Sie JavaScript verwenden, um einen alternativen Datenübermittlungsmechanismus zu bauen, zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch).

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

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen größere Gesamtabschnitte des Dokuments identifizieren. Die Verwendung zu vieler Landmark-Rollen kann "Rauschen" in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

### Eingaben sind keine Formulare

Sie müssen nicht `role="form"` auf jedem [Formularelement](/de/docs/Web/HTML/Reference/Elements#forms) (Eingabefelder, Textbereiche, Auswahlen usw.) deklarieren. Es sollte auf dem HTML-Element deklariert werden, das die Formularelemente umschließt. Idealerweise verwenden Sie das {{HTMLElement('form')}}-Element als Umschlagselement und deklarieren Sie nicht `role="form"`.

### Suche

Wenn ein Formular zur Suche verwendet wird, sollten Sie den spezialisierteren Wert [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) verwenden.

### Beschriftung von Landmarks

Jedes {{HTMLElement('form')}}-Element und jede `form`-Rolle, die als Landmark dargestellt werden muss, muss einen zugänglichen Namen erhalten. Dieser Name ermöglicht es einem Benutzer von Hilfstechnologie, den Zweck der Form-Landmark schnell zu verstehen.

Verwenden Sie ein `aria-labelledby`, `aria-label` oder `title` auf demselben Element, dem `role="form"` gegeben wurde, um ihm einen zugänglichen Namen zu geben.

#### Verwendung von `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundante Beschreibungen

Screenreader geben die Art der Rolle der Landmark bekannt. Daher müssen Sie in deren Beschriftung nicht beschreiben, was die Landmark ist. Zum Beispiel kann eine Deklaration von `role="form"` mit einem `aria-label="Contact form"` redundant als "contact form form" angesagt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `form` hat. Wenn möglich, sollten Sie es bevorzugen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('legend')}}-Element
