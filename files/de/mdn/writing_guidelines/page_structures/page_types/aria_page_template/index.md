---
title: ARIA-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

## Seiten-Metadaten

### Titel und Slug

Eine ARIA-Rollen-Seite sollte einen `title` und `slug` von `ARIA: Name Der Rolle` haben. Zum Beispiel hat die [button role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) einen `title` und `slug` von `ARIA/NameOfTheRole_role` und das [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut hat einen `title` von `aria-labelledby`.

### Oben Makros

Am Anfang des Inhaltsbereichs erscheinen einige Makroaufrufe. Sie sollten diese gemäß den folgenden Ratschlägen aktualisieren oder löschen:

- \\{{ariaref}}—erzeugt eine geeignete ARIA-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.

### Status

Fügen Sie keine Statusschlüssel manuell hinzu oder bearbeiten Sie diese. Um den (geeigneten) Feature-Status-Schlüssel einzuschließen — [**experimental**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**deprecated**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), oder **non-standard** — siehe den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

### Spezifikationen

Aktualisieren Sie in dem Wert des `spec-urls` Metadatenschlüssels für die Front-Materie die URLs, um auf die Fragment-IDs für die richtigen Abschnitte aus den folgenden Spezifikationen zu verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Zusätzliche Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenschablone

Der Zusammenfassungsabsatz — beginnen Sie mit der Benennung der Rolle oder des Attributs und einer Erklärung, was es tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Dieser Inhalt erscheint als Tooltip auf Links zu dieser Seite, daher gestalten Sie ihn gut.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Fügen Sie eine kurze Beschreibung des vorhergehenden Beispiels hinzu.

## Beschreibung

Fügen Sie eine vollständige Beschreibung des Attributs oder der Rolle ein.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- Name der zugehörigen Rollen
  - : Erklärung der Anforderung, Link zu Funktionsseiten.
- Name der zugehörigen Attribute
  - : Erklärung der Anforderung, Link zu Attributseiten, sowie Link zu JS, das erforderlich ist, um den Wert zu ändern, falls zutreffend.

### Tastatur-Interaktionen

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Erklärung jedes einzelnen
- Änderung von Attributwerten
  - : Erklärung jedes einzelnen

> [!NOTE]
> Fügen Sie eine Anmerkung zu semantischen Alternativen zur Verwendung dieser Rolle oder dieses Attributs hinzu. Die erste Regel bei der Verwendung von ARIA ist, dass Sie, wenn Sie ein natives Feature mit der benötigten Semantik und dem Verhalten bereits integriert verwenden können, statt ein Element umzufunktionieren und **ein ARIA Rolle, Zustand oder Eigenschaft hinzuzufügen**, um es zugänglich zu machen, sollten Sie dies tun. Geben Sie dann die vollständigen Details im Abschnitt "Best Practices" unten an.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) mit dem Namen des Beispiels haben. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Examples" hinzu. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Barrierefreiheitsbedenken

Warnen Sie optional vor möglichen Barrierefreiheitsproblemen, die bei der Verwendung dieser Eigenschaft auftreten können, und wie diese umgangen werden können. Entfernen Sie diesen Abschnitt, wenn keine aufgeführt werden müssen.

## Best Practices

Führen Sie optional alle Best Practices auf, die für diese Rolle existieren. Entfernen Sie den Abschnitt, wenn keine existieren.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Ob diese Rolle ein erforderlicher übergeordneter, untergeordneter oder gleichrangiger ist und was sie bewirkt.

Jede anderen zusätzlichen Vorteile, die dieses Feature für untypische Screenreader-Nutzer hat, wie Google oder mobile Spracherkennung.

## Spezifikationen

`\{{Specifications}}`

_Erinnern Sie sich daran, die Backticks und den Backslash zu entfernen, um dieses Makro zu verwenden._

## Prioritätenordnung

Welche verwandten Eigenschaften existieren, und in welcher Reihenfolge wird dieses Attribut oder die Eigenschaft gelesen (welche Eigenschaft Vorrang vor dieser haben wird und welche Eigenschaft überschrieben wird.)

## Unterstützung durch Screenreader

## Siehe auch

Fügen Sie Links zu entsprechenden Referenzseiten und Leitfäden hinzu, die mit der aktuellen Rolle oder dem Attribut in Verbindung stehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
