---
title: API-Methode Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Note:** _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der spezifischen Methode aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method OR web-api-static-method
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie sie als `"NameOfTheParentInterface: NameOfTheMethod() Methode"`.
>     Zum Beispiel hat die [count()](/de/docs/Web/API/IDBIndex/count)-Methode der [IDBIndex](/de/docs/Web/API/IDBIndex)-Schnittstelle einen _title_ von `IDBIndex: count() Methode`.
> - **slug**
>
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/API/NameOfTheParentInterface/NameOfTheMethod` formatiert.
>
>     Wenn die Methode statisch ist, muss der Slug ein `_static`-Suffix haben, wie z. B.: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Dies ermöglicht die Unterstützung von Instanz- und statischen Methoden mit demselben Namen.
>
>     Beachten Sie, dass der Name der Methode im Slug die Klammern weglässt (es endet mit `NameOfTheMethod` und nicht mit `NameOfTheMethod()`).
>
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Methoden ist entweder `web-api-instance-method` (für Instanzmethoden) oder `web-api-static-method` (für statische Methoden).
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das eine oder mehrere der folgenden Zeichenfolgen enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zur Aktualisierung von Funktionen und Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch den Abfragezeichenfolgenschlüssel für die Methode im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (und damit die `\{{Compat}}`- und `\{{Specifications}}`-Makros zu ersetzen).
>
>     Beachten Sie, dass es erforderlich sein kann, zuerst einen Eintrag für die API-Methode in unserem [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) zu erstellen/aktualisieren, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Einige Makro-Aufrufe erscheinen am Anfang des Inhaltsbereichs (direkt unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und hinter einer Voreinstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie als [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) gilt.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-Standard**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem untenstehenden Rat aktualisieren oder entfernen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makro-Aufruf entfernen.
>   Falls doch, sollten Sie auch einen Eintrag auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — generiert eine **Verfügbar in Workern**-Notiz, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Falls sie nur im Fenster-Kontext verfügbar ist, können Sie den Makro-Aufruf entfernen.
>   Falls sie auch im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, um ihre Verfügbarkeit anzuzeigen (siehe [\\{{AvailableInWorkers}}-Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), und auch einen Eintrag auf der Seite [Web-APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — generiert die Referenzleiste auf der linken Seite, die schnelle Referenzlinks zu den aktuellen Seiteninhalten anzeigt.
>   Zum Beispiel hat jede Seite in der [WebVR-API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf andere Seiten innerhalb der API verweist.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag zu unserem GitHub-Repo hinzufügen und den Namen des Eintrags anstelle von _GroupDataName_ im Makro-Aufruf einfügen. Siehe unseren [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für weitere Informationen.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros dürfen nicht manuell hinzugefügt werden. Lesen Sie den Abschnitt ["Anleitung zur Aktualisierung von Funktionen und Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die Banner **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-Standard** sind direkt nach diesem Hinweisblock dargestellt.
>
> _Denken Sie daran: Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz - beginnen Sie mit dem Namen der Methode, nennen Sie die Schnittstelle, zu der sie gehört, und beschreiben Sie, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Sie können den Großteil davon aus der Zusammenfassung der Methode auf der entsprechenden API-Referenzseite übernehmen.

## Syntax

Füllen Sie einen Syntax-Block aus, gemäß den Anweisungen in unserem Artikel [Syntax-Abschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{Optional_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition ein. Wenn der Parameter nicht optional ist, entfernen Sie das `{{optional_inline}}`-Makro.
- `parameter2`
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Falls es keine Parameter gibt, notieren Sie `None.` anstelle der Definitionsliste.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich des Datentyps und dessen Bedeutung.

Falls die Methode nichts zurückgibt, schreiben Sie "None ({{jsxref('undefined')}}).".

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die die Methode auslösen kann. Fügen Sie für jede Ausnahme einen Begriff und eine Definition ein.

- `Exception1`
  - : Beschreiben Sie, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Beschreiben Sie, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException)-Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException`-Objekte sind, den Namen der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen `IndexSizeError`, eine zweite `DOMException` mit einem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme des Typs `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- {{jsxref("TypeError")}}
  - : Geworfen …

## Beschreibung

_Eine detaillierte Beschreibung, wie sich die Methode verhält_
_Dieser Abschnitt entfällt, wenn der einleitende Absatz (oder zwei) oben auf der Seite ausreicht._

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn nur ein Beispiel auf der Seite enthalten ist.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verweisen.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" ein. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Rückwärtszeichen und den Schrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Rückwärtszeichen und den Schrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt ["Siehe auch"](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (Jahr)
