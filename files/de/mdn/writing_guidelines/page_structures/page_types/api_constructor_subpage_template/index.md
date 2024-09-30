---
title: API-Konstruktor-Subseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für den Konstruktor aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheConstructor() constructor
> slug: Web/API/NameOfTheParentInterface/NameOfTheConstructor
> page-type: web-api-constructor
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie dies als `NameOfTheParentInterface: NameOfTheConstructor() constructor`.
>     Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request) Konstruktor einen _title_ von `Request: Request() constructor`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheConstructor`.
>     Beachten Sie, dass der Name der Konstruktorfunktion im Slug die Klammern weglässt (es endet in `NameOfTheConstructor` und nicht `NameOfTheConstructor()`).
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheConstructor` mit der Abfragezeichenfolge für den Konstruktor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte "Kompatibilität" und "Spezifikation" auszufüllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden zur Vorgehensweise](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Oberste-Seiten-Makros**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter dem Seiten-Frontmatter).
> Diese Makros werden vom Toolchain automatisch hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) Seite ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [unerwünscht](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-standardisiert**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem unten stehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Makroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür auf der [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) Seite ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — generiert die Referenz-Sidebar auf der linken Seite, die Schnellverweis-Links zeigt, die mit der aktuellen Seite in Zusammenhang stehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API verweist.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ platzieren.
>   Siehe unseren [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie dies zu tun ist. Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Fügen Sie keine Statuskopfzeilen-Makros manuell hinzu. Beziehen Sie sich auf den Abschnitt [Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status der Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**-, **Experimentelle**, **Veraltete** und **Nicht-standardisierte** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie damit, den Konstruktor zu benennen und zu sagen, was er tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten den größten Teil davon aus der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie eine Syntax-Box entsprechend den Richtlinien in unserem Artikel zu [Syntax-Abschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

### Parameter

- `parameter1` {{optional_inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und dessen Funktion hinzu. Fügen Sie einen Begriff und eine Definition für jeden Parameter hinzu.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : etc.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewertes des Konstruktors hinzu, einschließlich des Datentyps und dessen Bedeutung.
Dies ist normalerweise nur "Eine Instanz des `\{{domxref("NameOfTheParentInterface")}}`-Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen hinzu, die der Konstruktor auslösen kann. Fügen Sie einen Begriff und eine Definition für jede Ausnahme hinzu.

- `Exception1`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift mit dem Namen des Beispiels haben. Die Überschrift sollte beschreibend dafür sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Vorgehensweise, um [Code-Beispiele hinzuzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
>
> Beispiel der Fetch
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
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Verbindung stehen. Für weitere Richtlinien beachten Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- externer_link (Jahr)
