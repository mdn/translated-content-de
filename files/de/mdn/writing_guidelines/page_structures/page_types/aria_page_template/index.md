---
title: ARIA-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

## Seitenmetadaten

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `title` und `slug` von `ARIA: Name Of The Role` haben. Zum Beispiel hat die [button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) einen `title` und `slug` von `ARIA/NameOfTheRole_role` und das Attribut [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) hat einen `title` von `aria-labelledby`.

### Obere Makros

Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts. Sie sollten diese aktualisieren oder löschen, entsprechend dem folgenden Rat:

- \\{{ariaref}}—generiert eine geeignete ARIA-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.

### Status

Fügen Sie keine Statusschlüssel manuell hinzu oder bearbeiten Sie diese. Um den (geeigneten) Funktionsstatusschlüssel – [**experimentell**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**veraltet**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), oder **nicht standardisiert** – einzuschließen, siehe den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

### Spezifikationen

Aktualisieren Sie im Wert des Metadaten-Schlüssels `spec_urls` der Front Matter die URLs so, dass sie auf die Fragment-IDs der korrekten Abschnitte der folgenden Spezifikationen verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Zusätzliche Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenvorlage

Der zusammenfassende Absatz – beginnen Sie mit der Benennung der Rolle oder des Attributs und erläutern Sie, was es tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Dieser Inhalt erscheint als Tooltip bei Links zu dieser Seite, also formulieren Sie ihn gut.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Fügen Sie eine kurze Beschreibung des vorhergehenden Beispiels hinzu.

## Beschreibung

Fügen Sie eine vollständige Beschreibung des Attributs oder der Rolle hinzu.

### Zugeordnete ARIA-Rollen, -Zustände und -Eigenschaften

- Name der zugeordneten Rollen
  - : Erklärung der Anforderung, Link zu Funktionsseiten.
- Name der zugeordneten Attribute
  - : Erklärung der Anforderung, Link zur Attributseite, zusammen mit einem Link zu JS, das zur Änderung des Wertes benötigt wird, falls zutreffend.

### Tastatur-Interaktionen

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignis-Handler
  - : Erläuterung jedes einzelnen
- Ändern von Attributwerten
  - : Erklärung jedes einzelnen

> [!NOTE]
> Fügen Sie eine Anmerkung zu semantischen Alternativen zur Verwendung dieser Rolle oder dieses Attributs hinzu. Die erste Regel der ARIA-Nutzung ist, dass, wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen bereits integriert verwenden können, anstatt ein Element neu zu nutzen und **eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen**, um es zugänglich zu machen, dann tun Sie das. Fügen Sie dann alle Details im untenstehenden Abschnitt zu den besten Praktiken hinzu.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Hinzufügung von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Barrierefreiheitsbedenken

Warnen Sie optional vor möglichen Barrierefreiheitsbedenken, die mit der Verwendung dieser Eigenschaft verbunden sind, und wie Sie diese umgehen können. Entfernen Sie diesen Abschnitt, wenn keine aufzuführen sind.

## Beste Praktiken

Listen Sie optional alle besten Praktiken auf, die für diese Rolle existieren. Entfernen Sie den Abschnitt, wenn keine existieren.

### Zusätzliche Vorteile

- Zugeordnete Rolle
  - : Wenn diese Rolle ein erforderliches Elternteil, Kind oder Geschwister ist, und was sie tut.

Jede zusätzlichen Vorteile, die dieses Feature für nicht-typische Screenreader-Benutzer wie Google oder mobile Spracherkennung hat.

## Spezifikationen

`\{{Specifications}}`

_Denken Sie daran, die Rückwärtsschritte und den Rückstrich zu entfernen, um dieses Makro zu verwenden._

## Reihenfolge der Vorrangigkeit

Welche verwandten Eigenschaften gibt es und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen (welche Eigenschaft wird Vorrang vor dieser haben, und welche Eigenschaft wird überschrieben).

## Screenreader-Unterstützung

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Rolle oder das Attribut beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
