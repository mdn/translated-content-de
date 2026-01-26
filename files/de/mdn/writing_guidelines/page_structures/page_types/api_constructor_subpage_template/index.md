---
title: API-Konstruktor-Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

> [!NOTE]
> _Entfernen Sie diese ganze erläuternde Anmerkung, bevor Sie veröffentlichen._
>
> ---
>
> **Meta-Daten der Seite:**
>
> Die Meta-Daten am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren. Die Werte sollten entsprechend für den Konstruktor aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheConstructor() Konstruktor
> slug: Web/API/NameOfTheParentInterface/NameOfTheConstructor
> page-type: web-api-constructor
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie es als `NameOfTheParentInterface: NameOfTheConstructor() Konstruktor`. Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request) Konstruktor einen _Titel_ von `Request: Request() Konstruktor`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheConstructor`. Beachten Sie, dass der Name der Konstruktorfunktion im Slug die Klammern weglässt (er endet in `NameOfTheConstructor` und nicht `NameOfTheConstructor()`).
> - **page-type**
>   - : Der Schlüssel `page-type` für Web/API Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheConstructor` mit der Abfragezeichenfolge für den Konstruktor im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersatz der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten. Siehe unseren [Leitfaden hierzu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsabschnitt (unmittelbar unter den Seitenmetadaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag hierfür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Dies generiert ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [abzuraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dies generiert ein **Nicht-standardmäßig** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist. Wenn nicht, können Sie den Makroaufruf entfernen. Wenn ja, sollten Sie auch einen Eintrag hierfür auf der Seite [Auf sichere Kontexte beschränkte Funktionen](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — Dies generiert eine **Verfügbar in Workern** Notiz, die anzeigt, dass die Technologie im [Worker Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Wenn sie nur im Fensterebenen-Kontext verfügbar ist, können Sie den Makroaufruf entfernen. Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund ihrer Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Makro Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), und Sie müssen möglicherweise auch einen Eintrag hierfür auf der Seite [Web APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — Dies generiert die linke Referenzseitenleiste, die schnelle Referenzlinks enthält, die mit der aktuellen Seite zusammenhängen. Beispielsweise hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten der API verweist. Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData` Eintrag in unser GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen. Weitere Informationen hierzu finden Sie in unserem [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden.
>
> Geben Sie die Status-Header-Makros nicht manuell an. Beziehen Sie sich auf den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zu der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standardmäßig** Banner werden direkt nach diesem Anmerkungsblock angezeigt.
>
> _Denken Sie daran, diese ganze erläuternde Anmerkung zu entfernen, bevor Sie veröffentlichen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz - beginnen Sie mit dem Namen des Konstruktors und sagen Sie, was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Sie können den größten Teil davon der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite entnehmen.

## Syntax

Füllen Sie einen Syntaxkasten aus, entsprechend den Anweisungen in unserem Artikel [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{optional_inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie einen Begriff und eine Definition für jeden Parameter hinzu. Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : usw.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts des Konstruktors ein, einschließlich des Datentyps und was er repräsentiert. Dies ist normalerweise einfach "Eine Instanz des `\{{domxref("NameOfTheParentInterface")}}` Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen hinzu, die der Konstruktor auslösen kann. Fügen Sie einen Begriff und eine Definition für jede Ausnahme hinzu.

- `Exception1`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException` Objekte sind, den `name` der Ausnahme.

Hier ist ein Beispiel, wo eine Methode eine `DOMException` mit einem Namen `IndexSizeError`, eine zweite `DOMException` mit einem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- {{jsxref("TypeError")}}
  - : Geworfen …

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel nennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie unseren Leitfaden an, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel von Fetch
>
> ### Mehr Beispiele
>
> Links zu mehr Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API verwandt sind. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
