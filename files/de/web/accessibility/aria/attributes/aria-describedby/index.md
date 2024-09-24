---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale `aria-describedby` Attribut identifiziert das Element (oder die Elemente), die das Element beschreiben, auf dem das Attribut gesetzt ist.

## Beschreibung

Das `aria-describedby` Attribut listet die [`id`](/de/docs/Web/HTML/Global_attributes#id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text, der sie beschreibt, herzustellen.

Das `aria-describedby` Attribut ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Gruppen von Elementen, Regionen mit einer Überschrift, Definitionen und mehr zu verknüpfen. Das `aria-describedby` Attribut kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles) haben.

Das `aria-describedby` Attribut ist dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesen eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die zusätzliche Informationen liefern, die der Nutzer möglicherweise benötigt. Beide, `aria-labelledby` und `aria-describedby`, referenzieren andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung ausführlichere Informationen bieten soll; ein Label beschreibt das Wesen eines Objekts, während eine Beschreibung zusätzliche Informationen liefert, die der Nutzer möglicherweise benötigt.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Es ist möglich, ein Element zu referenzieren, selbst wenn dieses Element versteckt ist. Zum Beispiel kann ein Formularelement eine Beschreibung haben, die standardmäßig versteckt ist und auf Anforderung durch ein weiteres Widget, wie ein "mehr Informationen"-Symbol, angezeigt wird. Der sehende Nutzer klickt auf das Symbol; für Benutzer von assistiver Technologie wird die Beschreibung direkt von diesem Formularfeld mittels `aria-describedby` referenziert.

Die `aria-describedby` Eigenschaft ist angemessen, wenn der zugehörige Inhalt Beschreibungen enthält, die als einfacher Text erfahren werden. Wenn der Inhalt eine große Menge an Inhalten, nützliche Semantik oder eine komplexe Struktur enthält, die eine Benutzernavigation erfordert, verwenden Sie [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details). `aria-details` ermöglicht es Nutzern assistiver Technologien, den zugehörigen strukturierten Inhalt zu besuchen und bietet zusätzliche Navigationsbefehle, die das Verständnis der Struktur erleichtern oder das Erleben der Informationen in kleineren Stücken ermöglichen.

> [!NOTE]
> Der `aria-describedby` Inhalt sollte nur eine Textzeichenkette sein. Wenn im Inhalt wichtige zugrunde liegende Semantiken vorhanden sind, ziehen Sie in Betracht, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby` Attribut ist nicht dafür gedacht, Beschreibungen von externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s (bei mehreren durch Leerzeichen getrennt) ist, muss es Elemente im selben DOM-Dokument referenzieren.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von `id`s von Elementen, die das aktuelle Element beschreiben.

## Zugeordnete Rollen

Verwendet in **allen** Rollen. Auch in allen HTML-Elementen verwendbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
