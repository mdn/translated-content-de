---
title: HTML-Element-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

> **Note:** _Entfernen Sie diese gesamte Erläuterungsnotiz vor der Veröffentlichung_
>
> ---
>
> **Seitenfrontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren. Die Werte sollten für das jeweilige Element entsprechend aktualisiert werden.
>
> ```md
> ---
> title: "<NameDesElements>: Das NameDesElements-Element"
> slug: Web/HTML/Element/NameDesElements
> page-type: html-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.elements.NameDesElements
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie diese als `'<NameDesElements>: Beschreibung des Zwecks des Elements'`. Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video)-Element einen _Titel_ von: **'`<video>`: Das Videoeinbettungselement'**.
> - **slug**
>   - : Der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert wie `Web/HTML/Element/NameDesElements`, wobei der Elementname in _Kleinbuchstaben_ steht. Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video)-Element einen _Slug_ von `Web/HTML/Element/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameDesElements` mit der Abfragezeichenfolge für das Element im [Browser-Compat-Datenrepo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu befüllen (Ersatz der `\{{Compat}}`- und `\{{Specifications}}`-Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser-Compat-Datenrepo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag wird Spezifikationsinformationen enthalten müssen. Sehen Sie sich unseren [Leitfaden an, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makroaufrufen werden am Anfang des Inhaltsabschnitts angezeigt (unmittelbar unter dem Seitenfrontmatter). Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dieses generiert ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dieses generiert ein **Veraltet**-Banner, das angibt, dass die Verwendung der Technologie [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dieses generiert ein **Nicht standardisiert**-Banner, das angibt, dass das Feature kein Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den folgenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dieses generiert ein **Sicherer Kontext**-Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn es das nicht ist, können Sie den Makroaufruf entfernen. Wenn es das ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{HTMLSidebar}}` — dieses generiert die linke Referenzseitenleiste für das Element. Der Inhalt der Seitenleiste hängt von den Tags in den Seitenmetadaten ab.
> - Entfernen Sie das `\{{MDNSidebar}}`-Makro, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Statusheader-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status der Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte Erläuterungsnotiz vor der Veröffentlichung zu entfernen_

{{HTMLSidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`**-[HTML](/de/docs/Web/HTML)-Element macht _(fügen Sie einen zusammenfassenden Absatz ein, der das Element benennt und beschreibt, was es macht, idealerweise ein oder zwei kurze Sätze)_.

\\{{EmbedInteractiveExample("pages/tabbed/nameOfElement.html", "tabbed-standard")}}

Weitere Informationen — an diesem Punkt fügen Sie ein paar weitere Absätze ein, die die wichtigsten Dinge erklären, die Sie wissen müssen, um das Element zu verwenden und seine Hauptmerkmale. Es ist gut, kurz zu erläutern, was im interaktiven Beispiel vor sich geht, wenn es nicht sofort ersichtlich ist. Sie könnten auch wichtige Punkte darüber erklären, wie dieses Element mit wichtigen verwandten JavaScript- oder CSS-Funktionen interagiert. Nicht zu viele Details — Sie möchten nicht die Dokumentation über Seiten hinweg wiederholen — aber ein Schlüsselpunkz plus ein Link zu der Seite dieses Features wäre nützlich. Sehen Sie sich wiederum die `<video>`-Seite als Beispiel an.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Fügen Sie hier eine Beschreibung hinzu, was das Attribut macht. Fügen Sie einen Begriff und eine Definition für jedes Attribut hinzu. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Makroaufrufe.
- `attribute2`
  - : etc.

## Events

Fügen Sie eine Tabelle der Events hinzu, die auf diesem Elementtyp ausgelöst werden, falls vorhanden.

| Eventname | Ausgelöst, wenn                           |
| --------- | ----------------------------------------- |
| event 1   | Erklären Sie kurz, wann es ausgelöst wird |
| event 2   | Erklären Sie kurz, wann es ausgelöst wird |
| etc.      |                                           |

## Barrierefreiheit

Warnen Sie vor potenziellen Barrierefreiheitsproblemen, die bei der Verwendung dieses Elements auftreten können, und wie Sie damit umgehen können. Entfernen Sie diesen Abschnitt, wenn es keine zu listen gibt.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal werden Sie auf Beispiele verlinken wollen, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
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
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        Füllen Sie eine Liste der Inhaltskategorien aus, zu denen das HTML-Element gehört.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Welchen Inhalt darf das Element enthalten?</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Kann das End-Tag weggelassen werden, oder muss es vorhanden sein? Muss es weggelassen werden?
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Welche Elternelemente können das Element als Kind haben? Zum Beispiel "Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert."
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        Geben Sie eine Liste der ARIA-Rollen an, die auf dem Element gesetzt werden können; zum Beispiel
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>
        Welches DOM-Interface repräsentiert das Element in JavaScript? Zum Beispiel
        [`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement) im Fall von ol.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Element in Zusammenhang stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing Style Guide_.

- link1
- link2
- external_link (year)
