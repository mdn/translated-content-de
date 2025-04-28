---
title: ARIA-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

## Seiten-Metadaten

Seiten-Metadaten werden in Front-Matter beschrieben, wie im folgenden Beispiel:

```md
---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-labelledby
sidebar: accessibilitysidebar
---
```

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `Titel` und `Slug` von `ARIA: Name Der Rolle` haben. Zum Beispiel hat die [Rolle der Schaltfläche](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) einen `Titel` und `Slug` von `ARIA/NameDerRolle_role` und das Attribut [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) hat einen `Titel` von `aria-labelledby`.

### Seitenleiste

Die `accessibilitysidebar` kann auf allen Seiten unter `/Web/Accessibility` verwendet werden:

```yaml
sidebar: accessibilitysidebar
```

Details finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).

### Obere Makros

Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts. Sie sollten diese gemäß der unten stehenden Hinweise aktualisieren oder löschen.

### Status

Fügen Sie keine Statusschlüssel manuell hinzu oder bearbeiten Sie diese.
Um den (entsprechenden) Funktionsstatusschlüssel einzuschließen — [**experimentell**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**veraltet**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), oder **nicht-standardisiert** — siehe den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

### Spezifikationen

Im Wert des `spec-urls` Front-Matter Metadatenschlüssels, aktualisieren Sie die URLs, um auf die Fragment-IDs für die korrekten Abschnitte aus den folgenden Spezifikationen zu verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Zusätzliche Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenschablone

Der Zusammenfassungsabsatz—beginnen Sie mit der Benennung der Rolle oder des Attributs und beschreiben Sie, was es tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Dieser Inhalt erscheint als Tooltip auf Links zu dieser Seite, daher sollte er gut formuliert sein.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Fügen Sie eine kurze Beschreibung des vorherigen Beispiels hinzu.

## Beschreibung

Fügen Sie eine vollständige Beschreibung des Attributs oder der Rolle ein.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- Name der zugehörigen Rollen
  - : Erklärung der Anforderung, Link zu Funktionsseiten.
- Name des/der zugehörigen Attribute(s)
  - : Erklärung der Anforderung, Link zu den Attributseiten, zusammen mit einem Link zu dem erforderlichen JS, um den Wert zu ändern, falls zutreffend.

### Tastaturinteraktionen

### Erforderliche JavaScript-Features

- Erforderliche Ereignishandler
  - : Erklärung jedes einzelnen
- Ändern von Attributwerten
  - : Erklärung jedes einzelnen

> [!NOTE]
> Fügen Sie eine Hinweis zu semantischen Alternativen zur Verwendung dieser Rolle oder dieses Attributs hinzu. Die erste Regel der ARIA-Verwendung ist, dass, wenn Sie eine native Funktion mit der Semantik und dem Verhalten verwenden können, die Sie benötigen und die bereits integriert ist, anstatt ein Element neu zu nutzen und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Veröffentlichen Sie dann die vollständigen Details im Best-Practices-Abschnitt unten.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples), für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele" hinzu, unter der Sie Links zu den Beispielen auf anderen Seiten hinzufügen können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch API
>
> Beispiel des Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links einfach direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Barrierefreiheitsbedenken

Optional warnen Sie vor etwaigen potenziellen Barrierefreiheitsproblemen, die mit der Verwendung dieser Eigenschaft bestehen, und wie man sie umgeht. Entfernen Sie diesen Abschnitt, wenn es keine gibt.

## Best Practices

Optional listen Sie alle Best Practices auf, die für diese Rolle existieren. Entfernen Sie den Abschnitt, wenn keine existieren.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Wenn diese Rolle ein erforderlicher Elternteil, ein Kind oder ein Geschwister ist und was sie tut.

Zusätzliche Vorteile, die diese Funktion für nicht typische Bildschirmleserbenutzer hat, wie Google oder mobiles Sprachverständnis.

## Spezifikationen

`\{{Specifications}}`

_Denken Sie daran, die Backticks und den Backslash zu entfernen, um dieses Makro zu verwenden._

## Vorrangordnung

Welche verwandten Eigenschaften bestehen, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen (welche Eigenschaft wird Vorrang vor dieser haben, und welche Eigenschaft wird überschrieben).

## Bildschirmleserunterstützung

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Rolle oder das Attribut beziehen. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
