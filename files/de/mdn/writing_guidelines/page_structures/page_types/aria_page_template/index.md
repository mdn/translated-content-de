---
title: ARIA-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

## Seitenmetadaten

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `title` und `slug` im Format `ARIA: Name Of The Role` haben. Zum Beispiel hat die [Schaltflächenrolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) einen `title` und `slug` von `ARIA/NameOfTheRole_role` und das [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut hat einen `title` von `aria-labelledby`.

### Obere Makros

Eine Anzahl von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts. Sie sollten diese aktualisieren oder löschen, gemäß der folgenden Empfehlungen:

- \\{{ariaref}} — erzeugt eine geeignete ARIA-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.

### Status

Fügen Sie keine Status-Schlüssel manuell hinzu oder bearbeiten Sie diese.
Um den (angemessenen) Funktionsstatusschlüssel einzubeziehen — [**experimentell**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**veraltet**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) oder **nicht standardisiert** — lesen Sie den Abschnitt ["Wie man Funktionsstatus hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

### Spezifikationen

Aktualisieren Sie im Wert des Metadaten-Schlüssels `spec_urls` die URLs, um zu den Fragment-IDs für die korrekten Abschnitte aus den folgenden Spezifikationen zu verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Zusätzliche Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenschablone

Der Zusammenfassungsabsatz – beginnen Sie mit der Nennung der Rolle oder des Attributs und geben Sie an, was es tut. Idealerweise sollte dies ein oder zwei kurze Sätze sein. Dieser Inhalt erscheint als Tooltip auf Links zu dieser Seite, also gestalten Sie ihn gut.

```html
<!-- Beispiel-Codeblock, der häufige Anwendungsfälle zeigt -->
```

(Optional) Eine kurze Beschreibung des vorhergehenden Beispiels einfügen.

## Beschreibung

Fügen Sie eine vollständige Beschreibung des Attributs oder der Rolle ein.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- Name der zugehörigen Rollen
  - : Erläuterung der Anforderung, Verweis auf Funktionsseiten.
- Name des/der zugehörigen Attribute(s)
  - : Erläuterung der Anforderung, Verweis auf Attributseiten, zusammen mit Verweis auf erforderliches JS zur Änderung des Wertes, falls zutreffend.

### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Erläuterung jedes einzelnen
- Ändernde Attributwerte
  - : Erläuterung jedes einzelnen

> [!NOTE]
> Fügen Sie eine Notiz über semantische Alternativen zur Verwendung dieser Rolle oder dieses Attributs ein. Die erste Regel der ARIA-Nutzung besagt, dass Sie, wenn Sie eine native Funktion mit den bereits eingebauten Semantiken und dem Verhalten verwenden können, anstatt ein Element neu zu nutzen und **eine** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Veröffentlichen Sie dann die vollständigen Details im folgenden Abschnitt über Best Practices.

## Beispiele

Beachten Sie, dass wir den Plural "Examples" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unser Handbuch, wie [Code-Beispiele hinzugefügt werden können](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verweisen.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Beispiel des Fetch
>
> ### More examples
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Examples" hinzu. Zum Beispiel:
>
> ```md
> ## Examples
>
> Für Beispiele zu dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Barrierefreiheitsbedenken

Warnen Sie optional vor möglichen Barrierefreiheitsbedenken, die mit der Verwendung dieser Eigenschaft einhergehen, und wie Sie diese umgehen können. Entfernen Sie diesen Abschnitt, wenn keine aufzulisten sind.

## Best Practices

Listen Sie optional alle Best Practices auf, die für diese Rolle existieren. Entfernen Sie den Abschnitt, wenn keine vorhanden sind.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Wenn diese Rolle ein erforderlicher Elternteil, ein Kind oder ein Geschwisterteil ist und was sie tut.

Weitere Vorteile, die diese Funktion für nicht typische Screenreader-Benutzer, wie Google oder mobile Spracherkennung, hat.

## Spezifikationen

`\{{Specifications}}`

_Erinnern Sie sich daran, die Backticks und den Backslash zu entfernen, um dieses Makro zu verwenden._

## Reihenfolge der Vorrangigkeit

Welche sind die verwandten Eigenschaften, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen (welche Eigenschaft wird Vorrang haben vor dieser und welche Eigenschaft wird überschrieben).

## Screenreader-Unterstützung

## Siehe auch

Fügen Sie Links zu Referenzseiten und Anleitungen hinzu, die sich auf die aktuelle Rolle oder das aktuelle Attribut beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2