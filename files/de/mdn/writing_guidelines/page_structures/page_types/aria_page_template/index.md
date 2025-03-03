---
title: ARIA-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

## Seiten-Vorderseite

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `title` und `slug` wie `ARIA: Name Der Rolle` haben. Zum Beispiel hat die [Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) einen `title` und `slug` von `ARIA/NameOfTheRole_role` und das [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut hat einen `title` von `aria-labelledby`.

### Obere Makros

Eine Anzahl von Makroaufrufen erscheint oben im Inhaltsbereich. Sie sollten diese gemäß der folgenden Ratschläge aktualisieren oder löschen:

- \\{{ariaref}}—erzeugt eine geeignete ARIA-Seitenleiste, je nachdem, welche Tags auf der Seite enthalten sind.

### Status

Fügen Sie keine Status-Schlüssel manuell hinzu oder bearbeiten Sie diese nicht.
Um den (geeigneten) Feature-Status-Schlüssel einzuschließen — [**experimental**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**deprecated**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) oder **non-standard** — siehe den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

### Spezifikationen

Aktualisieren Sie in der Wertangabe des `spec-urls` Front-Matter-Metadaten-Schlüssels die URLs so, dass sie auf die Fragment-IDs der korrekten Abschnitte der folgenden Spezifikationen zeigen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Zusätzliche Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenvorlage

Der Zusammenfassungs-Absatz—beginnen Sie mit der Nennung der Rolle oder des Attributs und sagen Sie, was es tut. Dies sollte idealerweise ein bis zwei kurze Sätze umfassen. Dieser Inhalt erscheint als Tooltip auf Links zu dieser Seite, also gestalten Sie ihn gut.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Fügen Sie eine kurze Beschreibung des vorhergehenden Beispiels hinzu.

## Beschreibung

Fügen Sie eine vollständige Beschreibung des Attributs oder der Rolle hinzu.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

- Name der zugehörigen Rollen
  - : Erklärung der Anforderung, Link zu Funktionsseiten.
- Name der zugehörigen Attribute
  - : Erklärung der Anforderung, Link zu Attributseiten, sowie Link zu JavaScript, das erforderlich ist, um den Wert zu ändern, falls zutreffend.

### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Erklärung von jedem
- Ändern von Attributwerten
  - : Erklärung von jedem

> [!NOTE]
> Fügen Sie eine Anmerkung zu semantischen Alternativen zur Verwendung dieser Rolle oder dieses Attributs hinzu. Die erste Regel der ARIA-Nutzung ist, dass, wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen bereits integriert nutzen können, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Dann veröffentlichen Sie vollständige Details im Best-Practices-Bereich unten.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Ergänzung von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Für Beispiele dieser API siehe [die Seite zur fetch()](https://example.org/).
> ```

## Barrierefreiheitshinweise

Warnen Sie optional vor möglichen Barrierefreiheitsbedenken, die bei der Verwendung dieser Eigenschaft bestehen könnten, und wie sie umgangen werden können. Entfernen Sie diesen Abschnitt, wenn es keine aufzulisten gibt.

## Beste Praktiken

Listen Sie optional die besten Praktiken auf, die für diese Rolle existieren. Entfernen Sie den Abschnitt, wenn keine existieren.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Wenn diese Rolle ein erforderliches Elternteil, Kind oder Geschwister ist und was sie tut.

Jeder zusätzliche Vorteil, den diese Funktion für nicht-typische Screenreader-Benutzer hat, wie Google oder mobile Spracherkennung.

## Spezifikationen

`\{{Specifications}}`

_Erinnern Sie sich daran, die Backticks und den Backslash zu entfernen, um dieses Makro zu verwenden._

## Reihenfolge der Vorrangstellung

Welche verwandten Eigenschaften gibt es und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen (welche Eigenschaft wird Vorrang vor dieser haben und welche Eigenschaft wird überschrieben).

## Screenreader-Unterstützung

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Rolle oder das aktuelle Attribut beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
