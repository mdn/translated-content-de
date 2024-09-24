---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seitenanfangsdaten:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren. Die Werte sollten entsprechend für den jeweiligen Selektor aktualisiert werden.
>
> ```md
> ---
> title: :NameOfTheSelector
> slug: Web/CSS/:NameOfTheSelector
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.selectors.NameOfTheSelector
> ---
> ```
>
> - **title**
>   - : Der Titel, der oben auf der Seite angezeigt wird. Formatieren Sie es als _:NameOfTheSelector_.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor den Titel _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/CSS/:NameOfTheSelector`.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor den Slug `Web/CSS/:hover`.
> - **page-type**
>   - : Der `page-type` Schlüssel für CSS-Eigenschaften ist einer der `css-selector`, `css-pseudo-class`, oder `css-pseudo-element`, abhängig davon, ob der Selektor eine [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes), ein [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements), ein [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators), oder ein [einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["How to add or update feature statuses"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenfolge für den Selektor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (wobei die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten ersetzt werden).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen. Sehen Sie sich unseren [Leitfaden dazu an](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Anzahl von Makro-Aufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter der Seiten-Frontmatter). Diese Makros werden automatisch von der Toolchain hinzugefügt (es gibt keinen Bedarf, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardisiert**-Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den unten stehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{CSSRef}}` — dies muss auf jeder CSS Selektor-Seite vorhanden sein. Es erzeugt eine geeignete CSS-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Fügen Sie Status-Header-Makros nicht manuell ein. Lesen Sie den Abschnitt ["How to add or update feature statuses"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Experimentellen**, **Veralteten** und **Nicht-standardisierten** Banner werden direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Syntaxabschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntaxabschnitts wird mit dem `\{{CSSSyntax}}` Makro generiert.
> Damit diese eingefügt werden, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde. Siehe [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) für weitere Informationen.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen_

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit dem Benennen des Selektors und erklären Sie, was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

```css
/* Fügen Sie einen Codeblock ein, der allgemeine Anwendungsfälle zeigt */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Rückwärtshinweise und den Rückwärtstrich im Markdown-Dokument._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie barrierefreie Richtlinien, bewährte Praktiken und potenzielle Probleme ein, die Entwicklern bei der Verwendung dieser Eigenschaft bewusst sein sollten. Sie können auch Umgehungslösungen oder Lösungen enthalten, wo dies anwendbar ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden an, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel für Fetch
>
> ### Mehr Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Rückwärtshinweise und den Rückwärtstrich im Markdown-Dokument._

## Browserkompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Rückwärtshinweise und den Rückwärtstrich im Markdown-Dokument._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen Selektor beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
