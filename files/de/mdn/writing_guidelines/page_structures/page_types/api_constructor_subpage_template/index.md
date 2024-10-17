---
title: API-Konstruktor-Unterseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Vordergrundinformationen:**
>
> Die Vordergrundinformationen am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für den Konstruktor entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameDesElterninterfaces: NameDesKonstruktors() constructor
> slug: Web/API/NameDesElterninterfaces/NameDesKonstruktors
> page-type: web-api-constructor
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameDesKonstruktors
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als `NameDesElterninterfaces: NameDesKonstruktors() constructor`.
>     Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request) Konstruktor einen _Titel_ von `Request: Request() constructor`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameDesElterninterfaces/NameDesKonstruktors`.
>     Beachten Sie, dass der Name der Konstruktorfunktion im Slug die Klammern weglässt (es endet mit `NameDesKonstruktors` und nicht `NameDesKonstruktors()`).
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Kennzeichnungsflags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameDesKonstruktors` mit der Abfragezeichenfolge für den Konstruktor im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden hierzu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page-Makros**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unter den Seiten-Vordergrundinformationen).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Präfix in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür in der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Makroaufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies generiert eine **Verfügbar in Workern**-Notiz, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im Worker-Kontext oder nur dort verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund der Verfügbarkeit übergeben (sehen Sie sich den [\\{{AvailableInWorkers}}-Makroquellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) für alle verfügbaren Werte an), Sie müssen möglicherweise auch einen Eintrag auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die Referenz-Sidebar auf der linken Seite, die Schnellverweise auf die aktuelle Seite zeigt.
>   Zum Beispiel hat jede Seite der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten im API verweist.
>   Um die richtige Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unser GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ eingeben.
>   Siehe unseren [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen dazu.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt [Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standard**-Banner sind direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit dem Benennen des Konstruktors und was er tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten die meisten davon von der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie eine Syntaxbox aus, gemäß den Richtlinien in unserem Artikel zu [Syntaxsektionen](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{optional_inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : etc.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts des Konstruktors hinzu, einschließlich des Datentyps und was er darstellt.
Normalerweise ist dies einfach "Eine Instanz des `\{{domxref("NameDesElterninterfaces")}}` Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen hinzu, die der Konstruktor aufwerfen kann. Fügen Sie für jede Ausnahme einen Begriff und eine Definition hinzu.

- `Exception1`
  - : Beschreibungen hinzufügen, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Beschreibungen hinzufügen, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException)-Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException`-Objekte sind, der `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen von `IndexSizeError`, eine zweite `DOMException` mit einem Namen von `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- {{jsxref("TypeError")}}
  - : Ausgelöst …

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügen, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Beispielsweise:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Beispielsweise:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zur fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Abschnitt Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
