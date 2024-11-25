---
title: ARIA-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

{{MDNSidebar}}

## Seiten-Metadaten

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `title` und `slug` von `ARIA: Name der Rolle` haben. Zum Beispiel hat die [Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) einen `title` und `slug` von `ARIA/NameOfTheRole_role` und das [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut hat einen `title` von `aria-labelledby`.

### Obere Makros

Am Anfang des Inhaltsabschnitts erscheinen eine Reihe von Makroaufrufen. Sie sollten diese gemäß den untenstehenden Empfehlungen aktualisieren oder löschen:

- \\{{ariaref}}—erzeugt eine geeignete ARIA-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.

### Status

Fügen Sie keine Statusschlüssel manuell hinzu oder bearbeiten Sie diese nicht. Um den (entsprechenden) Feature-Statusschlüssel einzufügen — [**experimentell**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**veraltet**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) oder **nicht standardisiert** — siehe den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

### Spezifikationen

Aktualisieren Sie im Wert des `spec-urls` Metadatenschlüssels die URLs, um auf die Fragment-IDs der korrekten Abschnitte der folgenden Spezifikationen zu verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Zusätzliche Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenvorlage

Der Zusammenfassungsabsatz—beginnen Sie mit der Benennung der Rolle oder des Attributs und einer kurzen Erklärung, was es tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Dieser Inhalt erscheint als Tooltip auf Links zu dieser Seite, also formulieren Sie ihn gut.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Fügen Sie eine kurze Beschreibung des vorhergehenden Beispiels hinzu.

## Beschreibung

Einschließlich einer vollständigen Beschreibung des Attributs oder der Rolle.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- Name der zugehörigen Rollen
  - : Erläuterung der Anforderung, Link zu Merkmalseiten.
- Name der zugehörigen Attribute
  - : Erläuterung der Anforderung, Link zu Attributseiten sowie Link zum JS, das erforderlich ist, um den Wert zu ändern, falls zutreffend.

### Tastatur-Interaktionen

### Erforderliche JavaScript-Features

- Erforderliche Ereignis-Handler
  - : Erklärung von jedem
- Ändern von Attributwerten
  - : Erklärung von jedem

> [!NOTE]
> Fügen Sie eine Notiz über semantische Alternativen zur Verwendung dieser Rolle oder dieses Attributs hinzu. Das erste Gesetz der ARIA-Verwendung ist, ein natives Feature mit den Semantiken und dem Verhalten zu verwenden, das Sie bereits eingebaut haben, anstatt ein Element umzupurpieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es barrierefrei zu machen. Wenn möglich, tun Sie es. Posten Sie dann die vollständigen Details im Abschnitt "Best Practices" unten.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Für eine längere Beschreibung kann der Absatz nach der Überschrift verwendet werden.

Siehe unseren Leitfaden zur [Hinzufügung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch-API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links einfach direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Zugänglichkeitsbedenken

Warnen Sie nach Bedarf vor potenziellen Zugänglichkeitsbedenken, die mit der Verwendung dieser Eigenschaft verbunden sind, und wie diese umgangen werden können. Entfernen Sie diesen Abschnitt, wenn es keine gibt.

## Best Practices

Optional können Sie Best Practices für diese Rolle auflisten. Entfernen Sie den Abschnitt, wenn keine existieren.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Wenn diese Rolle ein erforderliches Eltern-, Kind- oder Geschwisterelement ist und was sie bewirkt.

Jeder zusätzliche Vorteil, den dieses Feature für atypische Screenreader-Nutzer hat, wie Google oder mobile Spracherkennung.

## Spezifikationen

`\{{Specifications}}`

_Erinnerung: Entfernen Sie die Backticks und den Backslash, um dieses Makro zu verwenden._

## Prioritätsreihenfolge

Was sind die zugehörigen Eigenschaften, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen (welche Eigenschaft hat Priorität vor dieser und welche Eigenschaft wird überschrieben).

## Screenreader-Unterstützung

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Rolle oder das Attribut beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
