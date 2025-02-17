---
title: Vorlage für API-Konstruktores-Seiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Hinweis:** _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Seiteneinstellungen:**
>
> Der Frontmatter-Bereich oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für den Konstruktor entsprechend aktualisiert werden.
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
>   - : Der Titel, der oben auf der Seite angezeigt wird.
>     Formatieren als `NameOfTheParentInterface: NameOfTheConstructor() constructor`.
>     Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request)-Konstruktor den _Titel_ `Request: Request() constructor`.
> - **slug**
>   - : Der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheConstructor`.
>     Beachten Sie, dass im `slug` der Name der Konstruktorfunktion ohne Klammern angegeben wird (er endet mit `NameOfTheConstructor` und nicht mit `NameOfTheConstructor()`).
> - **page-type**
>   - : Der Wert für `page-type` bei Web/API-Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Wert sollte nicht manuell gesetzt werden: Er wird automatisch auf Basis der Browser-Kompatibilitätsdaten für dieses Feature gesetzt. Siehe ["Anleitung zur Hinzufügung oder Aktualisierung von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheConstructor` mit dem Abfragestring für den Konstruktor im [Browser-kompatibilitäts-Daten-Repository](https://github.com/mdn/browser-compat-data).
>     Das Werkzeug fügt automatisch den passenden Schlüssel ein, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser-kompatibilitäts-Daten-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der API-Eintrag muss auch Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden zum Hinzufügen solcher Informationen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page-Makros**
>
> Einige Makroaufrufe erscheinen oben im Inhaltsbereich (direkt unter den Seiteneinstellungen).
>
> Diese Makros werden durch das Werkzeug automatisch hinzugefügt (es ist nicht notwendig, diese hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls das der Fall ist und die Technologie in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltetes Feature**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen wird](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-standardisiert**-Banner, das darauf hinweist, dass das Feature nicht Teil einer offiziellen Spezifikation ist.
>
> Sie sollten die folgenden Makros je nach den Hinweisen hier bearbeiten oder entfernen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext**-Banner, das darauf hinweist, dass diese Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Ist dies nicht der Fall, entfernen Sie den Makroaufruf.
>   Falls ja, sollten Sie auch einen Eintrag auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — generiert einen Hinweis **Verfügbar in Web-Workern**, der darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Falls sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Falls sie auch oder ausschließlich im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, um ihre Verfügbarkeit genauer anzugeben (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Zudem sollten Sie einen Eintrag auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — generiert die Referenz-Seitenleiste links zur schnellen Navigation, die Links zu verwandten Seiten der aktuellen API anzeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf andere Seiten dieser API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erstellen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repository hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für weitere Informationen.
> - Entfernen Sie das `\{{MDNSidebar}}` Makro, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros sollten nicht manuell hinzugefügt werden. Verweisen Sie auf den Abschnitt [Wie man Feature-Status hinzufügt oder aktualisiert](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status der Seite hinzuzufügen.
>
> Beispiele für die Banner **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standardisiert** finden Sie direkt nach diesem Hinweisblock.
>
> _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — nennen Sie zunächst den Konstruktor und beschreiben Sie, was er macht.
Dies sollte idealerweise ein bis zwei kurze Sätze umfassen.
Sie können den größten Teil davon aus der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite übernehmen.

## Syntax

Füllen Sie ein Syntaxfeld gemäß den Anweisungen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

### Parameter

- `parameter1` {{optional_inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}}-Makroaufruf.
- `parameter2`
  - : usw.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts des Konstruktors ein, einschließlich des Datentyps und dessen Bedeutung.
In der Regel lautet dies einfach: "Eine Instanz des `\{{domxref("NameOfTheParentInterface")}}`-Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die vom Konstruktor ausgelöst werden können. Fügen Sie für jede Ausnahme einen Begriff und eine Definition hinzu.

- `Exception1`
  - : Beschreiben Sie, wodurch die Ausnahme ausgelöst wird.
- `Exception2`
  - : Beschreiben Sie, wodurch die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException)-Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler sollte wissen:

- Welche Art von Objekt geworfen wird.
- Bei Ausnahmen, die `DOMException`-Objekte sind, den `name` der Ausnahme.

Hier ist ein Beispiel, in dem eine Methode eine `DOMException` mit dem Namen `IndexSizeError`, eine zweite `DOMException` mit dem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme des Typs `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- {{jsxref("TypeError")}}
  - : Ausgelöst …

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Erstellung von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing Style Guide_.

- link1
- link2
- external_link (year)
