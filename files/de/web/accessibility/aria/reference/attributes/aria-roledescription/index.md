---
title: "ARIA: aria-roledescription-Attribut"
short-title: aria-roledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-roledescription`-Attribut definiert eine für Menschen lesbare und vom Autor lokalisierte Beschreibung für die Rolle eines Elements.

## Beschreibung

Einige unterstützende Technologien (assistive technologies, <abbr>AT</abbr>), wie Bildschirmlesegeräte, präsentieren die Rolle eines Elements als Teil der Benutzererfahrung. Das `aria-roledescription`-Attribut bietet eine Möglichkeit, einen anderen, für Menschen lesbaren Namen zu definieren, der von ATs als die Rolle eines Elements präsentiert wird.

> [!NOTE]
> Verwenden Sie aria-roledescription nur, um den Zweck von nicht interaktiven Container-Rollen zu klären und um eine spezifischere Beschreibung für ein Widget bereitzustellen.

Benutzer sind darauf angewiesen, dass der bekannte Rollenname präsentiert wird, um den Zweck des Elements zu verstehen und, wenn es ein Widget ist, zu wissen, wie man damit interagiert. Verwenden Sie `aria-roledescription` daher nur, um den Zweck von nicht interaktiven Container-Rollen wie `group` oder `region` zu klären und um eine spezifizierte Beschreibung für ein Widget bereitzustellen.

Die `aria-roledescription`-Eigenschaft überschreibt, wie ATs den Namen einer Rolle lokalisieren und ausdrücken. Wenn Sie einen Rollennamen überschreiben, den der Benutzer kennt, kann dies möglicherweise negativ die Fähigkeit des Benutzers beeinflussen, ein Element zu verstehen und damit zu interagieren.

Vermeiden Sie die Verwendung des `aria-roledescription`-Attributs. Wenn ein Anwendungsfall erscheint, der eine einzigartige Rollbeschreibung rechtfertigt, können die Interaktionen oft in kleinere Teile zerlegt werden, die relevante Rollen haben.

Wenn es keine semantischen oder ARIA-Widget-Rollen gibt, die dem Interaktionsmodell Ihres Widgets entsprechen, verwenden Sie `role="application"`, stellen Sie eine `aria-roledescription` mit einem für Menschen lesbaren, vom Autor lokalisierten angepassten Rollennamen bereit, und verwenden Sie `aria-describedby`, um Benutzeranweisungen bereitzustellen.

ATs können die Namen von ARIA-Rollen anpassen und lokalisieren. Wenn Sie `aria-roledescription` verwenden, um zu ändern, wie der Rollenname dem Benutzer präsentiert wird, denken Sie daran, sich um die Lokalisierung zu kümmern. Der Wert sollte übersetzt werden, wenn eine Seite lokalisiert wird.

Das Ändern der Präsentation der Rolle für den Benutzer hat keinen Einfluss auf die Funktionalität des Elements. Wenn beispielsweise ein Element eine Rolle von [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) oder [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hat, wenn ATs Funktionen zum Navigieren zum nächsten Bereich oder Button bieten, und Sie `aria-roledescription` auf `continent` und `escape` setzen, werden die ATs diese Funktionen weiterhin bereitstellen, um zu Bereichen und Buttons zu navigieren.

Vermeiden Sie erneut die Verwendung von `aria-roledescription`. In diesem Beispiel hat `escape` keine relevante Bedeutung für den Benutzer, aber `button` mit "escape" als Beschriftung schon.

Wenn Sie `aria-roledescription` verwenden, stellen Sie auch sicher, dass das Element, auf das es angewendet wird, eine gültige ARIA-`role`-Eigenschaft oder implizite Rollensemantik hat und dass der Wert selbst nicht leer ist und mehr als nur Leerzeichen enthält.

Das `aria-roledescription` ist erforderlich, wenn `aria-brailleroledescription` verwendet wird. Beachten Sie, dass `aria-brailleroledescription` im Allgemeinen nur in seltenen Fällen verwendet werden sollte, wenn eine `aria-roledescription` in Braille übermäßig umfangreich ist.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von `aria-roledescription`, um anzuzeigen, dass ein nicht interaktiver Container eine "Folie" in einer web-basierten Präsentationsanwendung ist.

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

In den vorherigen Beispielen könnte ein Bildschirmleser-Benutzer "Quartalsbericht, Folie" hören, anstatt das weniger präzise "Quartalsbericht, Artikel".

## Werte

- `<string>`
  - : Eine nicht leere Zeichenkette, ein unbeschränkter Wertetyp, der mehr als nur Leerzeichen enthält.

## Zugehörige Schnittstellen

- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.

## Zugehörige Rollen

Unterstützt von allen Rollen und allen grundlegenden Markup-Elementen außer `role="generic"`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
