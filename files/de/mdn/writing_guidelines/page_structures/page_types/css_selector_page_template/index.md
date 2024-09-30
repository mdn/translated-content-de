---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese ganze erklärende Notiz, bevor Sie veröffentlichen_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für den jeweiligen Selektor angemessen aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren als _:NameOfTheSelector_.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor den Titel _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert als `Web/CSS/:NameOfTheSelector`.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor den Slug `Web/CSS/:hover`.
> - **page-type**
>   - : Der `page-type` Schlüssel für CSS-Eigenschaften ist einer der `css-selector`, `css-pseudo-class` oder `css-pseudo-element`, je nachdem, ob es sich beim Selektor um eine [pseudo-class](/de/docs/Web/CSS/Pseudo-classes), ein [pseudo-element](/de/docs/Web/CSS/Pseudo-elements), einen [combinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) oder einen [simple selector](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) handelt.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie man Funktionsstatus hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenfolge für den Selektor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Das Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte Kompatibilität und Spezifikationen zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Anzahl von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unterhalb des Seitenfrontmatters).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Präferenzwechsel in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür in der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standardisiert**-Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend der untenstehenden Ratschläge aktualisieren oder löschen:
>
> - `\{{CSSRef}}` — dies muss auf jeder CSS-Selektor-Seite vorhanden sein. Es erzeugt eine geeignete CSS-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Fügen Sie keine Statuskopf-Makros manuell hinzu. Verweisen Sie auf den Abschnitt ["Wie man Funktionsstatus hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner werden direkt nach diesem Notizblock angezeigt.
>
> ---
>
> **Syntaxabschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntaxabschnitts wird mithilfe des `\{{CSSSyntax}}` Makros generiert.
> Damit diese gefüllt werden, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde.
> Siehe [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) für weitere Informationen.
>
> _Denken Sie daran, diese ganze erklärende Notiz zu entfernen, bevor Sie veröffentlichen_

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie mit der Nennung des Selektors und beschreiben Sie, was er macht. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Barrierefreiheitsrichtlinien, bewährte Verfahren und potenzielle Bedenken ein, derer sich Entwickler bewusst sein sollten, wenn sie diese Eigenschaft verwenden. Wo zutreffend, können auch Lösungen oder Workarounds einbezogen werden.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie unseren Leitfaden, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) können, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API sehen Sie [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen Selektor beziehen. Für weitere Richtlinien, siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing Style Guide_.

- link1
- link2
