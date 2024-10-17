---
title: API-Methode Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diesen gesamten erläuternden Hinweis, bevor Sie veröffentlichen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Der front matter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der jeweiligen Methode aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method ODER web-api-static-method
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die am oberen Rand der Seite angezeigt wird.
>     Formatieren Sie als `"NameOfTheParentInterface: NameOfTheMethod() Methode"`.
>     Zum Beispiel hat die [count()](/de/docs/Web/API/IDBIndex/count) Methode der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle einen _title_ von `IDBIndex: count() Methode`.
> - **slug**
>
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheMethod`.
>
>     Wenn die Methode statisch ist, muss der slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Dies ermöglicht uns die Unterstützung von Instanzen und statischen Methoden mit demselben Namen.
>
>     Beachten Sie, dass der Name der Methode im slug keine Klammern enthält (es endet mit `NameOfTheMethod` nicht `NameOfTheMethod()`).
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Methoden ist entweder `web-api-instance-method` (für Instanzmethoden) oder `web-api-static-method` (für statische Methoden).
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe ["Anleitung, um Feature-Status hinzuzufügen oder zu aktualisieren"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch den Abfragestring für die Methode im [Browser compat Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Werkzeugkette verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu befüllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page Makros**
>
> Eine Reihe von Makroaufrufen erscheint am oberen Rand des Inhaltsabschnitts (direkt unter dem Seitenfront matter).
>
> Diese Makros werden von der Werkzeugkette automatisch hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet** Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-Standard** Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den Ratschlägen unten aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn das nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features eingeschränkt auf sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — generiert eine **Verfügbar In Arbeitern** Mitteilung, die anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch oder nur im Arbeiterkontext verfügbar ist, müssen Sie möglicherweise einen Parameter hinzufügen, aufgrund seiner Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) für alle verfügbaren Werte), Sie müssen auch einen Eintrag dafür auf der Seite [Web-APIs verfügbar in Arbeitern](/de/docs/Web/API/Web_Workers_API#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — generiert die linke Referenz-Seitenleiste, die Schnellreferenz-Links zeigt, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag zu unserem GitHub Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie man dies tut.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Status-Header-Makros manuell an. Beziehen Sie sich auf den Abschnitt ["Anleitung, um Feature-Status hinzuzufügen oder zu aktualisieren"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentelle**, **Veraltete**, und **Nicht-Standard** Banner werden gleich nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor dem Veröffentlichen zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz — beginnen Sie damit, die Methode zu benennen, zu sagen, zu welchem Interface sie gehört, und zu sagen, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Sie könnten den größten Teil davon aus der Zusammenfassung der Methode auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie ein Syntaxfeld aus, gemäß den Richtlinien in unserem Artikel zu [Syntax-Abschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{Optional_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion hinzu. Fügen Sie für jeden Parameter einen Begriff und eine Definition ein. Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn es keine Parameter gibt, setzen Sie `None.` anstelle der Definitionsliste.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich des Datentyps und was er darstellt.

Wenn die Methode nichts zurückgibt, setzen Sie einfach "None ({{jsxref('undefined')}}).".

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die die Methode auslösen kann. Fügen Sie für jede Ausnahme einen Begriff und eine Definition ein.

- `Exception1`
  - : Fügen Sie Beschreibungen ein, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen ein, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- bei Ausnahmen, die `DOMException` Objekte sind, den `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen von `IndexSizeError` auslösen kann, eine zweite `DOMException` mit einem Namen von `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError`:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- {{jsxref("TypeError")}}
  - : Geworfen …

## Beschreibung

_Ausführliche Beschreibung des Verhaltens der Methode_
_Abschnitt weggelassen, wenn ein einführender Absatz (oder zwei) oben auf der Seite ausreicht._

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Erstellung von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Gebrauch der Fetch API
>
> Beispiel zu Fetch
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
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
