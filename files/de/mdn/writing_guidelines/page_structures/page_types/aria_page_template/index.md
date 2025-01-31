---
title: ARIA-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

## Seitenkopf

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `Titel` und `Slug` von `ARIA: Name Der Rolle` haben. Zum Beispiel hat die [button Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) einen `Titel` und `Slug` von `ARIA/NameOfTheRole_role` und das Attribut [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) hat einen `Titel` von `aria-labelledby`.

### Top-Makros

Am Anfang des Inhaltsabschnitts erscheinen mehrere Makro-Aufrufe. Sie sollten diese entsprechend den unten stehenden Hinweisen aktualisieren oder löschen:

- \\{{ariaref}}—erzeugt eine passende ARIA-Seitenleiste, je nachdem, welche Tags auf der Seite enthalten sind.

### Status

Fügen Sie Status-Schlüssel nicht manuell hinzu oder bearbeiten Sie diese nicht.
Um den (passenden) Feature-Status-Schlüssel einzuschließen — [**experimentell**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**veraltet**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) oder **nicht standardisiert** — siehe den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

### Spezifikationen

Im Wert des `spec-urls` Metadaten-Schlüssels im Seitenkopf aktualisieren Sie die URLs, um auf die Fragment-IDs für die korrekten Abschnitte der folgenden Spezifikationen zu verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Zusätzliche Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenvorlage

Der Zusammenfassungsabschnitt—beginnen Sie mit der Benennung der Rolle oder des Attributs und deren Beschreibung. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Dieser Inhalt erscheint als Tooltip für Links zu dieser Seite, gestalten Sie ihn daher gut.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Fügen Sie eine kurze Beschreibung des vorhergehenden Beispiels hinzu.

## Beschreibung

Fügen Sie eine vollständige Beschreibung des Attributs oder der Rolle ein.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- Name der zugehörigen Rollen
  - : Erklärung der Anforderung, Link zu den Feature-Seiten.
- Name der zugehörigen Attribute
  - : Erklärung der Anforderung, Link zu den Attributsseiten, sowie Link zu dem erforderlichen JavaScript zur Änderung des Wertes, falls zutreffend.

### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Erklärung jedes einzelnen
- Änderung von Attributwerten
  - : Erklärung jedes einzelnen

> [!NOTE]
> Fügen Sie eine Anmerkung zu semantischen Alternativen für die Verwendung dieser Rolle oder dieses Attributs ein. Die erste Regel der ARIA-Verwendung lautet: Wenn Sie ein natives Feature mit den benötigten Semantiken und Verhaltensweisen bereits eingebaut verwenden können, anstatt ein Element neu zu verwenden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Fügen Sie dann weitere Details im Abschnitt "Best Practices" unten hinzu.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unser Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel von Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Barrierefreiheitsbedenken

Warnen Sie optional vor möglichen Barrierefreiheitsbedenken, die bei der Verwendung dieser Eigenschaft bestehen, und wie man sie umgehen kann. Entfernen Sie diesen Abschnitt, wenn keine aufgelistet werden müssen.

## Best Practices

Listen Sie optional bewährte Verfahren für diese Rolle auf. Entfernen Sie den Abschnitt, wenn keine existieren.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Wenn diese Rolle ein erforderliches Eltern-, Kind- oder Geschwisterelement ist und was es tut.

Jede weiteren Vorteile, die dieses Feature für nicht-typische Screenreader-Benutzer wie Google oder mobile Spracherkennung hat.

## Spezifikationen

`\{{Specifications}}`

_Denken Sie daran, die Backticks und den Backslash zu entfernen, um dieses Makro zu verwenden._

## Vorrangordnung

Welche verwandten Eigenschaften gibt es, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen (welche Eigenschaft hat Vorrang vor dieser und welche Eigenschaft wird überschrieben).

## Unterstützung durch Screenreader

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Rolle oder das Attribut beziehen. Für weitere Richtlinien siehe den [Abschnitt "Siehe auch"](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
