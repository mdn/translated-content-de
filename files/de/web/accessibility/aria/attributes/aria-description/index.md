---
title: aria-description
slug: Web/Accessibility/ARIA/Attributes/aria-description
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das globale `aria-description` Attribut definiert einen Zeichenfolgenwert, der das aktuelle Element beschreibt oder kommentiert.

> **Note:** `aria-description` befindet sich noch im W3C Editor's Draft für ARIA 1.3. Verwenden Sie bis auf Weiteres [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), das seit ARIA 1.1 unterstützt wird.

## Beschreibung

Das globale `aria-description` Attribut bietet Entwicklern eine Möglichkeit, das aktuelle Element zu beschreiben oder zu kommentieren und bietet somit mehr Kontext für Benutzer von unterstützenden Technologien.

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="Game schedule for the Boston Red Sox 2021 Season">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

Das `aria-description` Attribut ist ähnlich wie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), da beide dem Element eine Textzeichenfolge zuordnen. Ein Label sollte jedoch kurz und prägnant sein, während die Beschreibung länger sein kann, da sie mehr Kontext und Informationen bieten soll.

Die Eigenschaften `aria-description` und `aria-describedby` verfolgen denselben Zweck; beide bieten dem Nutzer zusätzlichen beschreibenden Text für das Objekt, auf dem sie gesetzt sind. Wenn beschreibender Text im DOM verfügbar ist, verwenden Sie stattdessen [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

Die Eigenschaft `aria-description` sollte nur verwendet werden, wenn eine sichtbare Beschreibung nicht das gewünschte Benutzererlebnis darstellt. Das `aria-describedby` Attribut nimmt als Wert eine Liste von `id`s der Elemente, die beschreibenden Text über das Objekt enthalten. Das `aria-description` wird verwendet, wenn kein geeigneter beschreibender Text vorhanden ist, der durch `id`-Referenz mit dem Objekt verknüpft werden kann. Wenn beide Attribute vorhanden sind, hat `aria-describedby` Vorrang bei der Definition der {{glossary("accessible description")}}-Eigenschaft.

Der Inhalt der Beschreibung, ob festgelegt durch `aria-description` oder `aria-describedby`, sollte flacher Text sein. Wenn der Inhalt sehr lang ist, semantische Bedeutungsanforderungen hat oder eine Navigationsstruktur hat, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details).

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein unbeschränkter Werttyp, der dem Benutzer von unterstützenden Technologien übermittelt werden soll.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaDescription")}}
  - : Die [`ariaDescription`](/de/docs/Web/API/Element/ariaDescription) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-description` Attributs wider, das eine Zeichenfolge definiert, die das aktuelle Element beschreibt oder kommentiert.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `title` Attribut](/de/docs/Web/HTML/Global_attributes/title)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
