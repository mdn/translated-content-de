---
title: aria-roledescription
slug: Web/Accessibility/ARIA/Attributes/aria-roledescription
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-roledescription` definiert eine für Menschen lesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements.

## Beschreibung

Einige assistive Technologien (<abbr>AT</abbr>), wie Bildschirmlesegeräte, präsentieren die Rolle eines Elements als Teil des Benutzererlebnisses. Das Attribut `aria-roledescription` bietet eine Möglichkeit, einen anderen für Menschen lesbaren Namen zu definieren, der von AT als Rolle eines Elements präsentiert wird.

> [!NOTE]
> Verwenden Sie `aria-roledescription` nur, um den Zweck von nicht-interaktiven Container-Rollen zu klären und um eine spezifischere Beschreibung für ein Widget bereitzustellen.

Benutzer sind auf die Darstellung bekannter Rollennamen angewiesen, um den Zweck des Elements zu verstehen und, wenn es sich um ein Widget handelt, wie sie damit interagieren können. Verwenden Sie `aria-roledescription` daher nur, um den Zweck von nicht-interaktiven Container-Rollen wie `group` oder `region` zu klären und um eine spezifischere Beschreibung für ein Widget bereitzustellen.

Die Eigenschaft `aria-roledescription` überschreibt die Art und Weise, wie ATs den Namen einer Rolle lokalisieren und ausdrücken. Wenn Sie einen Rollennamen überschreiben, den der Benutzer versteht, kann dies die Fähigkeit des Benutzers, ein Element zu verstehen und mit ihm zu interagieren, negativ beeinflussen.

Vermeiden Sie die Verwendung des Attributs `aria-roledescription`. Wenn ein Anwendungsfall als besonders wertvoll für eine einzigartige Rollbeschreibung erscheint, können die Interaktionen oft in kleinere Teile aufgeteilt werden, die relevante Rollen haben.

Wenn es keine semantischen oder ARIA-Widget-Rollen gibt, die dem Interaktionsmodell Ihres Widgets entsprechen, verwenden Sie `role="application"`, stellen eine `aria-roledescription` mit einem für Menschen lesbaren, vom Autor lokalisierten, angepassten Rollennamen bereit und verwenden Sie `aria-describedby`, um Benutzern Anweisungen zu geben.

ATs können die Namen von ARIA-Rollen anpassen und lokalisieren. Wenn Sie `aria-roledescription` verwenden, um zu ändern, wie der Rollname dem Benutzer präsentiert wird, denken Sie daran, die Lokalisierung zu beachten. Der Wert sollte übersetzt werden, wenn eine Seite lokalisiert wird.

Die Änderung, wie die Rolle dem Benutzer präsentiert wird, hat keine Auswirkungen auf die Funktionalität des Elements. Wenn zum Beispiel ein Element die Rolle [`region`](/de/docs/Web/Accessibility/ARIA/Roles/region_role) oder [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat, bietet AT Funktionen zum Navigieren zur nächsten Region oder Schaltfläche an. Wenn Sie die `aria-roledescription` auf `continent` bzw. `escape` setzen, wird AT dennoch diese Funktionen bereitstellen, um zu Regionen und Schaltflächen zu navigieren.

Vermeiden Sie erneut die Verwendung von `aria-roledescription`. In diesem Beispiel hat `escape` keine relevante Bedeutung für den Benutzer, aber `button` mit "escape" als Beschriftung schon.

Wenn Sie `aria-roledescription` verwenden, stellen Sie sicher, dass das Element, auf das es angewendet wird, eine gültige ARIA-`role` besitzt oder implizite Rollensemantik hat und dass der Wert selbst nicht leer ist und mehr als nur Leerzeichen enthält.

`aria-roledescription` ist erforderlich, wenn `aria-brailleroledescription` verwendet wird. Beachten Sie, dass `aria-brailleroledescription` im Allgemeinen nur in seltenen Fällen verwendet werden sollte, wenn eine `aria-roledescription` in Braille übermäßig lang ist.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von `aria-roledescription`, um anzuzeigen, dass ein nicht-interaktiver Container eine "Folie" in einer webbasierten Präsentationsanwendung ist.

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

In den vorherigen Beispielen könnte ein Benutzer eines Bildschirmlesegeräts "Quarterly Report, Folie" hören, anstatt des weniger präzisen "Quarterly Report, Artikel".

## Werte

- `<string>`
  - : Ein nicht leerer String, ein uneingeschränkter Werttyp, der mehr als nur Leerzeichen enthält.

## Zugehörige Schnittstellen

- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.

## Zugehörige Rollen

Unterstützt von allen Rollen und von allen grundlegenden Markup-Elementen außer `role="generic"`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
