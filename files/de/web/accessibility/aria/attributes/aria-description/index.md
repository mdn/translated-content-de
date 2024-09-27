---
title: aria-description
slug: Web/Accessibility/ARIA/Attributes/aria-description
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das globale `aria-description`-Attribut definiert einen Zeichenfolgewert, der das aktuelle Element beschreibt oder kommentiert.

> **Note:** `aria-description` befindet sich noch im W3C Editor's Draft für ARIA 1.3. Verwenden Sie vorerst weiterhin [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), das seit ARIA 1.1 unterstützt wird.

## Beschreibung

Das globale `aria-description`-Attribut bietet Entwicklern eine Möglichkeit, das aktuelle Element zu beschreiben oder zu kommentieren und Benutzern von unterstützender Technologie einen größeren Kontext bereitzustellen.

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="Game schedule for the Boston Red Sox 2021 Season">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

Das `aria-description`-Attribut ähnelt [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) darin, dass beide eine Textzeichenfolge zur Verfügung stellen, die mit dem Element verknüpft werden soll. Ein Label sollte jedoch kurz und prägnant sein, während die Beschreibung länger sein kann, da sie mehr Kontext und Informationen bieten soll.

Die Eigenschaften `aria-description` und `aria-describedby` haben denselben Zweck; beide bieten dem Benutzer zusätzlichen beschreibenden Text für das Objekt, auf dem sie gesetzt sind. Wenn beschreibender Text im DOM verfügbar ist, verwenden Sie stattdessen [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

Die Eigenschaft `aria-description` sollte nur verwendet werden, wenn es nicht das gewünschte Benutzererlebnis ist, eine sichtbare Beschreibung bereitzustellen. Das `aria-describedby`-Attribut nimmt als Wert eine Liste von `id`s der Elemente, die beschreibenden Text über das Objekt enthalten. Die `aria-description` wird verwendet, wenn es keinen geeigneten beschreibenden Text gibt, der dem Objekt per `id`-Referenz zugeordnet werden kann. Wenn beide Attribute vorhanden sind, hat `aria-describedby` Vorrang bei der Definition der [zugänglichen Beschreibung](/de/docs/Glossary/accessible_description) Eigenschaft.

Der Inhalt der Beschreibung, ob durch `aria-description` oder `aria-describedby` festgelegt, sollte flacher Text sein. Wenn der Inhalt sehr lang ist, semantische Bedeutungsanforderungen hat oder eine Navigationsstruktur aufweist, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details).

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein unbeschränkter Werttyp, der dem Benutzer von unterstützender Technologie vermittelt werden soll.

## Zugehörige Schnittstellen

- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Die [`ariaDescription`](/de/docs/Web/API/Element/ariaDescription)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-description`-Attributs wider, der einen Zeichenfolgewert definiert, der das aktuelle Element beschreibt oder kommentiert.

## Zugehörige Rollen

Wird in **ALLE** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `title`-Attribut](/de/docs/Web/HTML/Global_attributes/title)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
