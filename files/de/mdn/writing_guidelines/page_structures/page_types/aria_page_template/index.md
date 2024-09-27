---
title: ARIA-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

## Seiteneigenschaften

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `title` und `slug` von `ARIA: Name Der Rolle` haben. Zum Beispiel hat die [Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) einen `title` und `slug` von `ARIA/NameOfTheRole_role` und das Attribut [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) hat einen `title` von `aria-labelledby`.

### Obere Makros

Eine Reihe von Makro-Aufrufen erscheinen oben im Inhaltsbereich. Sie sollten diese gemäß dem unten stehenden Rat aktualisieren oder löschen:

- \\{{ariaref}}—generiert eine passende ARIA-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.

### Status

Fügen Sie keine Statusschlüssel manuell hinzu oder bearbeiten Sie diese.
Um den (passenden) Feature-Status-Schlüssel einzuschließen — [**experimentell**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**veraltet**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) oder **nicht standardisiert** — siehe den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

### Spezifikationen

Im Wert des `spec_urls` Vorderseiten-Metadatenschlüssels die URLs aktualisieren, um auf die Fragment-IDs für die richtigen Abschnitte der folgenden Spezifikationen zu verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Weitere Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenvorlage

Der Zusammenfassungsabsatz—beginnen Sie mit der Benennung der Rolle oder des Attributs und erläutern Sie, was es bewirkt. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Dieser Inhalt erscheint als Tooltip auf Links zu dieser Seite, also formulieren Sie ihn gut.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Eine kurze Beschreibung des vorangehenden Beispiels einfügen.

## Beschreibung

Fügen Sie eine vollständige Beschreibung des Attributs oder der Rolle ein.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- Name der zugehörigen Rollen
  - : Erklärung der Anforderung, Link zu den Feature-Seiten.
- Name der zugehörigen Attribute
  - : Erklärung der Anforderung, Link zu den Attributseiten, zusammen mit einem Link zu dem erforderlichen JavaScript, um den Wert zu ändern, falls zutreffend.

### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignis-Handler
  - : Erklärung jedes einzelnen
- Änderung von Attributwerten
  - : Erklärung jedes einzelnen

> [!NOTE]
> Fügen Sie eine Notiz über semantische Alternativen zur Verwendung dieser Rolle oder dieses Attributs hinzu. Die erste Regel der ARIA-Nutzung ist: Wenn Sie ein natives Feature mit den Semantiken und dem benötigten Verhalten bereits eingebaut verwenden können, anstatt ein Element umzufunktionieren und **ein ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen**, um es zugänglich zu machen, dann tun Sie dies. Dann veröffentlichen Sie vollständige Details im Abschnitt über bewährte Praktiken unten.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Barrierefreiheitsbedenken

Optional warnen Sie vor möglichen Barrierefreiheitsproblemen, die bei der Verwendung dieser Eigenschaft auftreten können, und geben Sie Lösungen an. Entfernen Sie diesen Abschnitt, wenn es keine zu erwähnen gibt.

## Bewährte Praktiken

Optional führen Sie alle bewährten Praktiken auf, die für diese Rolle existieren. Entfernen Sie den Abschnitt, wenn keine existieren.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Wenn diese Rolle ein erforderlicher übergeordneter, untergeordneter oder gleichgeordneter ist und was sie bewirkt.

Jeder zusätzliche Nutzen, den diese Funktion für nicht-typische Screenreader-Nutzer bietet, wie Google oder mobile Sprachsteuerung.

## Spezifikationen

`\{{Specifications}}`

_Erinnern Sie sich daran, die Backticks und den Backslash zu entfernen, um dieses Makro zu verwenden._

## Vorrangsreihenfolge

Was sind die verwandten Eigenschaften und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen (welche Eigenschaft hat Vorrang vor dieser und welche Eigenschaft wird überschrieben.)

## Unterstützung durch Screenreader

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Rolle oder das aktuelle Attribut beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für den Schreibstil_.

- link1
- link2
