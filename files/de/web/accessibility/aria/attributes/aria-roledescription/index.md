---
title: aria-roledescription
slug: Web/Accessibility/ARIA/Attributes/aria-roledescription
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-roledescription` definiert eine menschenlesbare, von Autoren lokalisierte Beschreibung für die Rolle eines Elements.

## Beschreibung

Einige assistive Technologien (<abbr>AT</abbr>), wie Bildschirmleseprogramme, präsentieren die Rolle eines Elements als Teil der Benutzererfahrung. Das Attribut `aria-roledescription` bietet eine Möglichkeit, einen anderen menschenlesbaren Namen zu definieren, der von AT als Rolle eines Elements präsentiert wird.

> [!NOTE]
> Verwenden Sie `aria-roledescription` nur, um den Zweck von nicht-interaktiven Containerrollen zu klären und um eine spezifischere Beschreibung für ein Widget bereitzustellen.

Benutzer verlassen sich auf die Präsentation eines bekannten Rollennamens, um den Zweck des Elements zu verstehen und, wenn es sich um ein Widget handelt, wie man damit interagiert. Verwenden Sie `aria-roledescription` daher nur, um den Zweck von nicht-interaktiven Containerrollen wie `group` oder `region` zu klären und um eine spezifischere Beschreibung für ein Widget bereitzustellen.

Die Eigenschaft `aria-roledescription` überschreibt, wie ATs den Namen einer Rolle lokalisieren und ausdrücken. Wenn Sie einen Rollennamen überschreiben, den der Benutzer versteht, können Sie möglicherweise die Fähigkeit eines Benutzers, ein Element zu verstehen und damit zu interagieren, negativ beeinflussen.

Vermeiden Sie die Verwendung des Attributs `aria-roledescription`. Wenn ein Anwendungsfall besonders für eine eindeutige Rollenbeschreibung würdig erscheint, können die Interaktionen oft in kleinere Teile aufgeteilt werden, die relevante Rollen haben.

Wenn es keine semantischen oder ARIA-Widget-Rollen gibt, die dem Interaktionsmodell Ihres Widgets entsprechen, verwenden Sie `role="application"`, bieten Sie eine `aria-roledescription` mit einem menschenlesbaren, von Autoren lokalisierten angepassten Rollennamen an und verwenden Sie `aria-describedby`, um dem Benutzer Anweisungen zu geben.

ATs können die Namen von ARIA-Rollen anpassen und lokalisieren. Wenn Sie `aria-roledescription` verwenden, um zu ändern, wie der Rollenname dem Benutzer präsentiert wird, denken Sie daran, die Lokalisierung zu berücksichtigen. Der Wert sollte übersetzt werden, wenn eine Seite lokalisiert wird.

Die Änderung der Präsentation der Rolle für den Benutzer hat keinen Einfluss auf die Funktionalität des Elements. Zum Beispiel, wenn ein Element die Rolle [`region`](/de/docs/Web/Accessibility/ARIA/Roles/region_role) oder [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat, wenn AT Funktionen zum Navigieren zum nächsten Bereich oder Knopf bereitstellt, wird, wenn Sie `aria-roledescription` auf `continent` bzw. `escape` setzen, die AT immer noch diese Funktionen zum Navigieren zu Bereichen und Knöpfen zulassen.

Vermeiden Sie erneut die Verwendung von `aria-roledescription`. In diesem Beispiel hat `escape` keine relevante Bedeutung für den Benutzer, aber `button` mit "escape" als Beschriftung schon.

Wenn Sie `aria-roledescription` verwenden, stellen Sie auch sicher, dass das Element, auf das es angewendet wird, eine gültige ARIA-[`role`](/de/docs/Web/Accessibility/ARIA/Roles) hat oder implizite Rollensemantik besitzt und dass der Wert selbst nicht leer ist und mehr als nur Leerzeichen enthält.

`aria-roledescription` ist erforderlich, wenn `aria-brailleroledescription` verwendet wird. Beachten Sie, dass `aria-brailleroledescription` im Allgemeinen nur in seltenen Fällen verwendet werden sollte, wenn `aria-roledescription` in Braille übermäßig lang ist.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von `aria-roledescription`, um anzuzeigen, dass ein nicht-interaktiver Container eine "Folien" in einer webbasierten Präsentationsanwendung ist.

```html
<div
  role="article"
  aria-roledescription="slide"
  id="slide"
  aria-labelledby="slideheading">
  <h1 id="slideheading">Quarterly Report</h1>
  <!-- remaining slide contents -->
</div>
```

In den vorherigen Beispielen könnte ein Benutzer eines Bildschirmlesers "Quartalsbericht, Folie" hören, anstatt das weniger präzise "Quartalsbericht, Artikel".

## Werte

- `<string>`
  - : Eine nicht leere Zeichenkette, ein unbeschränkter Werttyp, der mehr als nur Leerraumbestandteile enthält.

## Zugehörige Schnittstellen

- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des Attributs `aria-roledescription` wider.
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des Attributs `aria-roledescription` wider.

## Zugehörige Rollen

Unterstützt von allen Rollen und allen Basis-Markup-Elementen außer für `role="generic"`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
