---
title: "ARIA: aria-description-Attribut"
short-title: aria-description
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-description
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Das globale `aria-description`-Attribut definiert einen Zeichenfolgenwert, der das aktuelle Element beschreibt oder kommentiert.

> [!NOTE] > `aria-description` befindet sich noch im W3C Editor's Draft für ARIA 1.3. Verwenden Sie vorerst weiterhin [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), das seit ARIA 1.1 unterstützt wird.

## Beschreibung

Das globale `aria-description`-Attribut bietet eine Methode für den Entwickler, das aktuelle Element zu beschreiben oder zu kommentieren, um Benutzern von unterstützenden Technologien einen größeren Kontext zu bieten.

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="Game schedule for the Boston Red Sox 2021 Season">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

Das `aria-description`-Attribut ähnelt [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), da beide eine Textzeichenfolge zur Verknüpfung mit dem Element bereitstellen. Ein Label sollte jedoch kurz und prägnant sein, während die Beschreibung länger sein kann, da sie dazu gedacht ist, mehr Kontext und Informationen bereitzustellen.

Die Eigenschaften `aria-description` und `aria-describedby` haben denselben Zweck; beide bieten dem Benutzer zusätzlichen beschreibenden Text für das Objekt, auf dem sie gesetzt sind. Wenn im DOM beschreibender Text verfügbar ist, verwenden Sie stattdessen [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

Die `aria-description`-Eigenschaft sollte nur verwendet werden, wenn die Bereitstellung einer sichtbaren Beschreibung nicht das gewünschte Benutzererlebnis ist. Das `aria-describedby`-Attribut akzeptiert als seinen Wert eine Liste von `id`s der Elemente, die beschreibenden Text über das Objekt enthalten. `aria-description` wird verwendet, wenn kein geeigneter beschreibender Text vorhanden ist, der dem Objekt durch `id`-Referenz zugeordnet werden kann. Wenn beide Attribute vorhanden sind, hat `aria-describedby` Vorrang bei der Definition der {{Glossary("accessible_description", "zugänglichen Beschreibung")}}-Eigenschaft.

Der Inhalt der Beschreibung, sei es durch `aria-description` oder `aria-describedby` gesetzt, sollte einfacher Text sein. Wenn der Inhalt sehr lang ist, semantische Bedeutung erfordert oder eine Navigationsstruktur besitzt, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein unbeschränkter Werttyp, der dem Benutzer der unterstützenden Technologie übermittelt werden soll.

## Zugehörige Schnittstellen

- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Die [`ariaDescription`](/de/docs/Web/API/Element/ariaDescription)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-description`-Attributes wider, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder kommentiert.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
