---
title: API-Methoden-Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Hinweis:** _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite definieren die "Seiten-Metadaten".
> Die Werte sollten entsprechend der speziellen Methode aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method OR web-api-static-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie sie als `"NameOfTheParentInterface: NameOfTheMethod() Methode"`.
>     Zum Beispiel hat die [count()](/de/docs/Web/API/IDBIndex/count)-Methode der [IDBIndex](/de/docs/Web/API/IDBIndex)-Schnittstelle den _Titel_ `IDBIndex: count() method`.
> - **slug**
>
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/API/NameOfTheParentInterface/NameOfTheMethod` formatiert.
>
>     Wenn die Methode statisch ist, muss der Slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Dies ermöglicht es uns, Instanz- und statische Methoden mit dem gleichen Namen zu unterstützen.
>
>     Beachten Sie, dass der Name der Methode im Slug die Klammern weglässt (er endet mit `NameOfTheMethod`, nicht `NameOfTheMethod()`).
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Methoden ist entweder `web-api-instance-method` (für Instanzmethoden) oder `web-api-static-method` (für statische Methoden).
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Einträge enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_oder_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit der Abfragezeichenfolge für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros am Anfang der Seite**
>
> Eine Reihe von Makronaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter den Metadaten der Seite).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es gibt keine Notwendigkeit, hinzuzufügen/entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht standardmäßig**-Banner, das darauf hinweist, dass die Funktion nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem unten stehenden Ratschlag aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Makroaufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies generiert eine **Verfügbar in Arbeitern**-Notiz, die darauf hinweist, dass die Technologie im [Arbeiter-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch oder nur im Arbeiter-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, da es verfügbar ist (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs, die in Arbeitern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert das linke Referenz-Seitenleiste, welche schnelle Referenzlinks im Zusammenhang mit der aktuellen Seite zeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, welche auf die anderen Seiten in der API zeigt.
>   Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Eintragsnamen im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unser [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden, um Informationen hierzu zu erhalten.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Stellen Sie keine Status-Header-Makros manuell zur Verfügung. Beziehen Sie sich auf den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_oder_updated), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht standardmäßig**-Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Paragraphen — beginnen Sie mit dem Benennen der Methode, sagen Sie, zu welcher Schnittstelle sie gehört und was sie macht.
Idealerweise sollte dieser ein oder zwei kurze Sätze umfassen. Sie könnten das meiste davon aus der Zusammenfassung der Methode auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie ein Syntaxfeld aus, gemäß der Anleitung in unserem Artikel [Syntax Abschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{Optional_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion hinzu. Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu. Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn es keine Parameter gibt, geben Sie stattdessen `Keine.` anstelle der Definitionsliste an.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich Datentyp und was er repräsentiert.

Wenn die Methode nichts zurückgibt, geben Sie einfach "Keine ({{jsxref('undefined')}})." an.

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die die Methode auslösen kann. Fügen Sie für jede Ausnahme einen Begriff und eine Definition hinzu.

- `Exception1`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException` Objekte sind, der `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit dem Namen `IndexSizeError`, eine zweite `DOMException` mit dem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- {{jsxref("TypeError")}}
  - : Geworfen …

## Beschreibung

_Ausführliche Beschreibung, wie die Methode sich verhält_
_Abschnitt wird weggelassen, wenn ein einleitender Absatz (oder zwei) oben auf der Seite ausreicht._

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Paragraphen nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine endgültige H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Für Beispiele dieser API sehen Sie [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden im Zusammenhang mit der aktuellen API ein. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
