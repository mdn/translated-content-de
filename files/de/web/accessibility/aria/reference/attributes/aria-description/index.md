---
title: "ARIA: aria-description Attribut"
short-title: aria-description
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-description
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-description` Attribut definiert einen Zeichenfolgenwert, der das aktuelle Element beschreibt oder annotiert.

> **Note:** `aria-description` befindet sich noch im W3C Editor's Draft für ARIA 1.3. Verwenden Sie vorerst weiterhin [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), das seit ARIA 1.1 unterstützt wird.

## Beschreibung

Das globale `aria-description` Attribut bietet eine Möglichkeit für den Entwickler, das aktuelle Element zu beschreiben oder zu annotieren, um Benutzern von Unterstützungs-Technologien mehr Kontext zu bieten.

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="Game schedule for the Boston Red Sox 2021 Season">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

Das `aria-description` Attribut ist ähnlich wie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), da beide eine Textzeichenfolge bereitstellen, die dem Element zugeordnet wird. Ein Label sollte jedoch kurz und prägnant sein, während die Beschreibung länger sein kann, da sie dazu gedacht ist, mehr Kontext und Informationen bereitzustellen.

Die `aria-description` und `aria-describedby` Eigenschaften haben denselben Zweck; beide bieten dem Benutzer zusätzlichen beschreibenden Text für das Objekt, auf dem es gesetzt ist. Wenn beschreibender Text im DOM verfügbar ist, verwenden Sie stattdessen [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

Die `aria-description` Eigenschaft sollte nur verwendet werden, wenn eine sichtbare Beschreibung nicht die gewünschte Benutzererfahrung ist. Das `aria-describedby` Attribut nimmt als Wert eine Liste von `id`s der Elemente, die beschreibenden Text über das Objekt enthalten. Das `aria-description` wird verwendet, wenn kein geeigneter beschreibender Text verfügbar ist, der dem Objekt durch `id` Verweis zugeordnet werden kann. Wenn beide Attribute vorhanden sind, hat `aria-describedby` Vorrang bei der Definition der {{Glossary("accessible_description", "zugänglichen Beschreibung")}} Eigenschaft.

Der Inhalt der Beschreibung, ob durch `aria-description` oder `aria-describedby` gesetzt, sollte flacher Text sein. Wenn der Inhalt sehr lang ist, semantische Bedeutungsanforderungen hat oder eine Navigationsstruktur besitzt, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein uneingeschränkter Wertetyp, der dem Benutzer der Unterstützungs-Technologie vermittelt werden soll.

## Zugehörige Schnittstellen

- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Die [`ariaDescription`](/de/docs/Web/API/Element/ariaDescription) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-description` Attributs wider, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder annotiert.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
