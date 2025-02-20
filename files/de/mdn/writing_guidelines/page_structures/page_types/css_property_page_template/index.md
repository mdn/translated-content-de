---
title: Vorlage für CSS-Eigenschaften-Seiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Note:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Metadaten der Seite:**
>
> Der Frontmatter-Bereich am Anfang der Seite wird verwendet, um "Seitendaten" zu definieren.
> Die Werte sollten entsprechend für die spezifische Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: NameDerEigenschaft
> slug: Web/CSS/NameDerEigenschaft
> page-type: css-property OR css-shorthand-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.properties.NameDerEigenschaft
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameDerEigenschaft_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird im Format `Web/CSS/NameDerEigenschaft` angegeben.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft `Web/CSS/background-color`. Für mehrteilige Komponenten wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, z. B. `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine Kurzschreibweise-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation)-Eigenschaft `css-shorthand-property`, da es sich um eine Kurzschreibweise-Eigenschaft handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden, er wird automatisch basierend auf den Werten in den Daten zur Browser-Kompatibilität für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameDerEigenschaft</code> durch den Abfragestring für die Eigenschaft im [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Weitere Makros auf der Seite_ in diesem Hinweisblock, um zu sehen, wie diese Schlüssel-Wert-Paarung verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros oben auf der Seite**
>
> Einige Makroaufrufe erscheinen oben im Inhaltsbereich (direkt unterhalb des Frontmatter-Bereichs der Seite).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls die Technologie experimentell und in Firefox hinter einer Einstellung versteckt ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dieses erzeugt ein **Nicht-Standard**-Banner, das darauf hinweist, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Eigenschaftsseite vorhanden sein. Es generiert eine passende CSS-Seitenleiste, je nach den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Status-Kopfzeilen-Makros nicht manuell hinzufügen. Unter der Sektion ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) finden Sie, wie diese Status hinzugefügt werden können.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-Standard**-Banner finden Sie direkt nach diesem Hinweisblock.
>
> ---
>
> **Weitere Makros auf der Seite**
>
> - Abschnitt "Formale Syntax": Der Inhalt des Abschnitts _Formale Syntax_ wird mit dem Makro `\{{CSSSyntax}}` erstellt. Dieses Makro ruft Daten aus den Spezifikationen mithilfe des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitt "Formale Definition": Der Inhalt des Abschnitts _Formale Definition_ wird mit dem Makro `\{{CSSInfo}}` erstellt. Damit Daten in diesem Abschnitt angezeigt werden, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die zugehörige Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json)-Datei im `mdn/data`-Repository ausgefüllt wurde. Weitere Informationen finden Sie auf der [Properties](https://github.com/mdn/data/blob/main/css/properties.md)-Seite.
> - Abschnitte "Spezifikationen" und "Browser-Kompatibilität": Das Build-Tool verwendet automatisch das Schlüssel-Wert-Paar `browser-compat` aus dem Frontmatter der Seite, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (dies ersetzt die Makros `\{{Specifications}}` und `\{{Compat}}` in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repository</a> erstellen/aktualisieren müssen.
>   Weitere Informationen zum Hinzufügen oder Bearbeiten von Einträgen finden Sie in unserem [Leitfaden zu Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einführenden Absatz, der die Eigenschaft benennt und beschreibt, was sie macht.
Dieser sollte idealerweise ein oder zwei kurze Sätze umfassen.

## Probieren Sie es aus

_Dieser Titel wird automatisch über das Makro `\{{EmbedInteractiveExample}}` erstellt._

Dieser Abschnitt ist für interaktive Beispiele gedacht, die mit dem Makro `\{{EmbedInteractiveExample}}` hinzugefügt wurden. Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibleitlinien_.

## Zusammenhängende Eigenschaften

Fügen Sie diesen Abschnitt nur für Kurzschreibweise-Eigenschaften, wie z. B. [animation](/de/docs/Web/CSS/animation), hinzu, um alle zugehörigen Einzelheiten zu listen.

## Syntax

Fügen Sie die häufig verwendeten Fälle als Code-Block ein und beschreiben Sie die Untersubwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Untersubwert hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Untersubwerts, seines Datentyps und seiner Bedeutung hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Untersubwerts, seines Datentyps und seiner Bedeutung hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft hinzuzufügen und zu erklären, wie sie funktioniert. Verwenden Sie diesen Abschnitt auch, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft aufzuführen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Hinweise zur Barrierefreiheit, bewährte Methoden und mögliche Probleme ein, die Entwickler beachten müssen, wenn sie diese Eigenschaft verwenden. Sie können auch Umgehungen oder Lösungen hinzufügen, falls zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift hinzufügen

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispiele wie "Ein einfaches Beispiel" sagen nichts über das Beispiel aus und sind daher keine guten Überschriften. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie in unserem Leitfaden, wie Sie [Code-Beispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples), für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite und dann eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“ hinzu, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Die Fetch-API verwenden
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie stattdessen die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Eigenschaft in Verbindung stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
