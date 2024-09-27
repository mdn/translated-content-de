---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale `aria-describedby`-Attribut identifiziert das Element (oder die Elemente), das/die das Element beschreibt/beschreiben, auf dem das Attribut gesetzt ist.

## Beschreibung

Das `aria-describedby`-Attribut listet die [`ID`](/de/docs/Web/HTML/Global_attributes#id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text, der sie beschreibt, herzustellen.

Das `aria-describedby`-Attribut ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Elementgruppen, Regionen mit einer Überschrift, Definitionen und mehr zu verknüpfen. Das `aria-describedby`-Attribut kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA-[`role`](/de/docs/Web/Accessibility/ARIA/Roles) haben.

Das `aria-describedby`-Attribut ist dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesen eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die zusätzliche Informationen bereitstellen, die der Benutzer benötigen könnte. Sowohl `aria-labelledby` als auch `aria-describedby` verweisen auf andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung ausführlichere Informationen liefern soll; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung zusätzliche Informationen liefert, die der Benutzer benötigen könnte.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Es ist möglich, ein Element zu referenzieren, auch wenn dieses Element ausgeblendet ist. Zum Beispiel kann ein Formularelement eine Beschreibung haben, die standardmäßig ausgeblendet ist und auf Anfrage über ein Offenlegungs-Widget wie ein "mehr Informationen"-Symbol angezeigt wird. Der sehende Benutzer klickt auf das Symbol; für Benutzer von unterstützender Technologie wird die Beschreibung direkt aus diesem Formularfeld mit `aria-describedby` referenziert.

Die `aria-describedby`-Eigenschaft ist geeignet, wenn die zugehörigen Inhalte Beschreibungen enthalten, die als Klartext verarbeitet werden. Wenn der Inhalt eine große Menge an Inhalt, nützliche Semantik oder eine komplexe Struktur enthält, die eine Benutzernavigation erfordert, verwenden Sie [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details). `aria-details` ermöglicht es Benutzern von unterstützender Technologie, die zugehörigen strukturierten Inhalte zu besuchen und zusätzliche Navigationsbefehle bereitzustellen, was das Verständnis der Struktur erleichtert oder das Erleben der Informationen in kleineren Abschnitten ermöglicht.

> [!NOTE]
> Der `aria-describedby`-Inhalt sollte nur eine Textzeichenfolge sein. Wenn es wichtige zugrundeliegende Semantiken in dem Inhalt gibt, ziehen Sie die Verwendung von [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) in Betracht.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby`-Attribut ist nicht dafür ausgelegt, Beschreibungen aus externen Quellen zu referenzieren. Da sein Wert eine oder mehrere `id`s (durch Leerzeichen getrennt, wenn mehrere) ist, muss es auf Elemente im selben DOM-Dokument verweisen.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Rollen

Verwendet in **allen** Rollen. Verwendbar in allen HTML-Elementen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
