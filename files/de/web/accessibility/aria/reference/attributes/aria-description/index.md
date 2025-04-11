---
title: aria-description
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-description
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das globale `aria-description` Attribut definiert einen Zeichenfolgenwert, der das aktuelle Element beschreibt oder kommentiert.

> **Note:** `aria-description` befindet sich noch im W3C Editor's Draft für ARIA 1.3. Verwenden Sie vorläufig weiterhin [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), das seit ARIA 1.1 unterstützt wird.

## Beschreibung

Das globale `aria-description` Attribut bietet eine Möglichkeit für den Entwickler, das aktuelle Element zu beschreiben oder zu kommentieren, um Benutzern von unterstützenden Technologien mehr Kontext zu geben.

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="Game schedule for the Boston Red Sox 2021 Season">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

Das `aria-description` Attribut ähnelt [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) darin, dass beide eine Textzeichenfolge bereitstellen, die dem Element zugeordnet wird. Ein Label sollte jedoch kurz und prägnant sein, während die Beschreibung länger sein kann, da sie mehr Kontext und Informationen bieten soll.

Die Eigenschaften `aria-description` und `aria-describedby` haben denselben Zweck; beide bieten dem Benutzer zusätzlichen beschreibenden Text für das Objekt, auf das sie angewendet werden. Wenn beschreibender Text im DOM verfügbar ist, verwenden Sie stattdessen [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

Die `aria-description` Eigenschaft sollte nur verwendet werden, wenn eine sichtbare Beschreibung nicht das gewünschte Benutzererlebnis ist. Das `aria-describedby` Attribut nimmt als Wert eine Liste von `id`s der Elemente, die beschreibenden Text über das Objekt enthalten. `Aria-description` wird verwendet, wenn kein geeigneter beschreibender Text vorhanden ist, der über `id`-Referenzen mit dem Objekt verknüpft werden kann. Wenn beide Attribute vorhanden sind, hat `aria-describedby` Vorrang bei der Definition der {{Glossary("accessible_description", "accessible description")}} Eigenschaft.

Der Inhalt der Beschreibung, egal ob durch `aria-description` oder `aria-describedby` festgelegt, sollte flacher Text sein. Wenn der Inhalt sehr lang ist, semantische Bedeutungsanforderungen hat oder eine Navigationsstruktur besitzt, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein unbeschränkter Wertetyp, der dem Benutzer der unterstützenden Technologie vermittelt werden soll.

## Zugehörige Schnittstellen

- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Die [`ariaDescription`](/de/docs/Web/API/Element/ariaDescription) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-description` Attributs wider, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder kommentiert.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
