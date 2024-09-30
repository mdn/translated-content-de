---
title: CSS property page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diesen Hinweisblock, bevor Sie ihn veröffentlichen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite definieren die sogenannten "Seitendaten".
> Die Werte sollten entsprechend der spezifischen Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheProperty
> slug: Web/CSS/NameOfTheProperty
> page-type: css-property OR css-shorthand-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.properties.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameOfTheProperty_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieses wird formatiert als `Web/CSS/NameOfTheProperty`.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft `Web/CSS/background-color`. Bei einem mehrteiligen Komponenten-Namen wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn/HTML/Getting_started`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine verkürzte CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation)-Eigenschaft `css-shorthand-property`, da es sich um eine Abkürzungseigenschaft handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden, sondern wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zur Hinzufügung oder Aktualisierung von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> mit der Abfragezeichenfolge für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ in diesem Hinweisblock, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Einstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dieses erzeugt ein **Nicht-standard**-Banner, das darauf hinweist, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Eigenschaftsseite vorhanden sein. Es erzeugt eine passende CSS-Seitenleiste, abhängig von den Tags, die auf der Seite enthalten sind.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Status-Header-Makros nicht manuell bereitstellen. Verweisen Sie auf den Abschnitt ["Anleitung zur Hinzufügung oder Aktualisierung von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**-, **Veraltet**- und **Nicht-standard**-Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formeller Syntaxabschnitt: Der Inhalt für den Abschnitt _Formelle Syntax_ wird mit dem Makro `\{{CSSSyntax}}` generiert. Dieses Makro holt Daten aus den Spezifikationen unter Verwendung des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css).
> - Formeller Definitionsabschnitt: Der Inhalt für den Abschnitt _Formelle Definition_ wird mit dem Makro `\{{CSSInfo}}` generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die betreffende Eigenschaft in der Daten-Datei [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) im `mdn/data` Repository ausgefüllt wurde. Siehe die Seite [Eigenschaften](https://github.com/mdn/data/blob/main/css/properties.md) für mehr Informationen.
> - Spezifikationen und Browser-Kompatibilitätsabschnitte: Das Build-Tool verwendet automatisch das Schlüssel-Wert-Paar `browser-compat` aus den Seitenmetadaten, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (ersetzt die `\{{Specifications}}` und `\{{Compat}}`-Makros in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Erinnern Sie sich, diesen Hinweisblock zu entfernen, bevor Sie veröffentlichen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz, der die Eigenschaft benennt und erklärt, was sie tut.
Dieser sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen.

## Probieren Sie es aus

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele vorgesehen, die mit dem Makro `\{{EmbedInteractiveExample}}` hinzugefügt wurden. Sie erstellen diese Beispiele im [mdn/interactive-examples Repository](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibleitlinien_.

## Bestandteile des Kurzbefehls

Fügen Sie diesen Abschnitt nur für Kurzbefehle wie [animation](/de/docs/Web/CSS/animation) hinzu, um alle zugehörigen untergeordneten Eigenschaften aufzulisten.

## Syntax

Fügen Sie die gebräuchlichen Anwendungsfälle als Codeblock hinzu und beschreiben Sie die Komponenten-Subwerte, die einen vollständigen Wert bilden.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Subwert hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und was er darstellt, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und was er darstellt, hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft und eine Erklärung ihrer Funktionsweise zu enthalten. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formelle Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Formelle Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Nehmen Sie Barrierefreiheitshinweise, bewährte Praktiken und potenzielle Bedenken auf, die Entwickler bei der Verwendung dieser Eigenschaft beachten sollten. Sie können auch Umgehungslösungen oder Lösungen, wo anwendbar, aufnehmen.

## Beispiele

Beachtesn, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der fetch API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Eigenschaft in Verbindung stehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
