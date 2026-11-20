---
title: ARIA-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

## Metadaten am Seitenanfang

Die Metadaten einer Seite werden im Front Matter beschrieben, wie im folgenden Beispiel:

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

Eine Seite zu einer ARIA-Rolle sollte einen `title` und einen `slug` im Format `ARIA: Name Of The Role` haben. Beispielsweise haben `title` und `slug` der [button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) das Format `ARIA/NameOfTheRole_role`, und das Attribut [aria-labelledby](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) hat den `title` `aria-labelledby`.

### Seitenleiste

`accessibilitysidebar` kann auf allen Seiten unter `/Web/Accessibility` verwendet werden:

```yaml
sidebar: accessibilitysidebar
```

Weitere Informationen finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).

### Makros am Anfang der Seite

Am Anfang des Inhaltsbereichs stehen mehrere Makroaufrufe. Aktualisieren oder entfernen Sie diese gemäß den folgenden Hinweisen.

### Status

Fügen Sie Statusschlüssel nicht manuell hinzu und bearbeiten Sie sie nicht manuell.
Informationen zum Hinzufügen des passenden Statusschlüssels für ein Feature – [**experimentell**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**veraltet**](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) oder **nicht standardisiert** – finden Sie im Abschnitt [„So werden Feature-Status hinzugefügt oder aktualisiert“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

### Spezifikationen

Aktualisieren Sie die URLs im Metadatenschlüssel `spec-urls` des Front Matters so, dass sie auf die Fragment-IDs der passenden Abschnitte in den folgenden Spezifikationen verweisen:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Weitere Ressourcen:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Seitenvorlage

Beginnen Sie den zusammenfassenden Absatz, indem Sie die Rolle oder das Attribut nennen und seine Funktion beschreiben. Idealerweise umfasst er ein oder zwei kurze Sätze. Dieser Text erscheint als Tooltip für Links zu dieser Seite; formulieren Sie ihn daher sorgfältig.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Fügen Sie eine kurze Beschreibung des vorstehenden Beispiels hinzu.

## Beschreibung

Beschreiben Sie das Attribut oder die Rolle vollständig.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- Name der zugehörigen Rollen
  - : Erläuterung der Anforderung, Links zu den Seiten der Features.
- Name der zugehörigen Attribute
  - : Erläuterung der Anforderung, Links zu den Seiten der Attribute sowie gegebenenfalls ein Link zu dem JavaScript, das zum Ändern des Werts erforderlich ist.

### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

- Erforderliche Event-Handler
  - : Erläuterung der einzelnen Handler
- Ändern von Attributwerten
  - : Erläuterung der einzelnen Änderungen

> [!NOTE]
> Fügen Sie einen Hinweis auf semantische Alternativen zur Verwendung dieser Rolle oder dieses Attributs hinzu. Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie ein natives Feature verwenden können, das die benötigte Semantik und das benötigte Verhalten bereits mitbringt, sollten Sie dies tun, statt ein Element für einen anderen Zweck zu verwenden und es durch das **Hinzufügen** einer ARIA-Rolle, eines ARIA-Zustands oder einer ARIA-Eigenschaft zugänglich zu machen. Beschreiben Sie die Einzelheiten anschließend im Abschnitt zu bewährten Vorgehensweisen weiter unten.

## Vorrangreihenfolge

Welche Eigenschaften hängen damit zusammen, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft ausgelesen? Welche Eigenschaft hat Vorrang, und welche wird überschrieben?

## Bedenken hinsichtlich der Barrierefreiheit

Weisen Sie gegebenenfalls auf mögliche Probleme hinsichtlich der Barrierefreiheit bei der Verwendung dieser Eigenschaft hin und erläutern Sie, wie sie sich umgehen lassen. Entfernen Sie diesen Abschnitt, wenn es keine solchen Probleme gibt.

## Bewährte Vorgehensweisen

Führen Sie gegebenenfalls bewährte Vorgehensweisen für diese Rolle auf. Entfernen Sie den Abschnitt, wenn es keine gibt.

### Zusätzliche Vorteile

- Zugehörige Rolle
  - : Geben Sie an, ob diese Rolle als übergeordnetes, untergeordnetes oder benachbartes Element erforderlich ist und welche Funktion sie erfüllt.

Beschreiben Sie weitere Vorteile dieses Features für andere Nutzer als typische Screenreader-Nutzer, etwa bei der Google-Suche oder der Spracherkennung auf Mobilgeräten.

## Beispiele

Beachten Sie, dass die Überschrift „Beispiele“ auch dann im Plural steht, wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. Halten Sie die Überschrift kurz. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite stehen.
>
> **Szenario 1:** Wenn diese Seite einige Beispiele enthält und weitere Beispiele auf einer anderen Seite stehen:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu. Fügen Sie danach eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“ ein, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn es _nur_ auf einer anderen Seite Beispiele gibt und auf dieser Seite keine:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern setzen Sie die Links direkt unter die H2-Überschrift „Beispiele“. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Denken Sie daran, die Backticks und den Backslash zu entfernen, um dieses Makro zu verwenden._

## Screenreader-Unterstützung

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die jeweilige Rolle oder das jeweilige Attribut beziehen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- Link 1
- Link 2
