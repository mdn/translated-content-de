---
title: aria-description
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-description
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale Attribut `aria-description` definiert einen Zeichenfolgenwert, der das aktuelle Element beschreibt oder annotiert.

> **Note:** `aria-description` befindet sich noch im W3C Editor's Draft für ARIA 1.3. Verwenden Sie vorerst weiterhin [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), das seit ARIA 1.1 unterstützt wird.

## Beschreibung

Das globale Attribut `aria-description` bietet Entwicklern die Möglichkeit, das aktuelle Element zu beschreiben oder zu annotieren, um Benutzern von unterstützenden Technologien einen besseren Kontext zu bieten.

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="Game schedule for the Boston Red Sox 2021 Season">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

Das `aria-description`-Attribut ähnelt [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) darin, dass beide eine Textzeichenkette zur Verknüpfung mit dem Element bereitstellen, aber ein Label sollte kurz und prägnant sein, während die Beschreibung länger sein kann, da sie dazu gedacht ist, mehr Kontext und Informationen bereitzustellen.

Die Eigenschaften `aria-description` und `aria-describedby` haben den gleichen Zweck; beide bieten dem Benutzer zusätzlichen beschreibenden Text zu dem Objekt, an dem sie gesetzt sind. Wenn beschreibender Text im DOM verfügbar ist, verwenden Sie stattdessen [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

Die Eigenschaft `aria-description` sollte nur verwendet werden, wenn eine sichtbare Beschreibung nicht das erwünschte Benutzererlebnis ist. Das Attribut `aria-describedby` nimmt als Wert eine Liste von `id`s der Elemente an, die beschreibenden Text über das Objekt enthalten. `aria-description` wird verwendet, wenn kein geeigneter beschreibender Text vorhanden ist, der über eine `id`-Referenz dem Objekt zugeordnet werden kann. Wenn beide Attribute vorhanden sind, hat `aria-describedby` Vorrang bei der Definition der {{Glossary("accessible_description", "zugänglichen Beschreibung")}}-Eigenschaft.

Der Inhalt der Beschreibung, ob durch `aria-description` oder `aria-describedby` festgelegt, sollte reiner Text sein. Wenn der Inhalt sehr lang ist, semantische Bedeutungsanforderungen hat oder über eine Navigationsstruktur verfügt, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein uneingeschränkter Werttyp, der dem Benutzer von unterstützenden Technologien vermittelt werden soll.

## Zugehörige Schnittstellen

- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Die [`ariaDescription`](/de/docs/Web/API/Element/ariaDescription)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-description`-Attributs wider, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder annotiert.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `title`-Attribut](/de/docs/Web/HTML/Global_attributes/title)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
